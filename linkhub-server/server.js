const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const path = require("path");

const app = express();
const PORT = 3456;

app.use(cors({ origin: "*" }));
app.use(express.json({ limit: "10mb" }));

// Log every request
app.use((req, res, next) => {
  const ts = new Date().toISOString().slice(11, 19);
  console.log(`[${ts}] ${req.method} ${req.path}`);
  next();
});

const db = new Database(path.join(__dirname, "linkhub.db"));
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS feeds (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    is_private INTEGER DEFAULT 0,
    position INTEGER DEFAULT 0,
    is_in_onboarding INTEGER DEFAULT 0,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS feed_items (
    id TEXT PRIMARY KEY,
    feed_id TEXT NOT NULL,
    linkedin_id TEXT,
    name TEXT DEFAULT '',
    photo TEXT DEFAULT '',
    url TEXT DEFAULT '',
    headline TEXT DEFAULT '',
    created_at TEXT DEFAULT (datetime('now')),
    FOREIGN KEY (feed_id) REFERENCES feeds(id) ON DELETE CASCADE
  );

  CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_text TEXT,
    comment_text TEXT,
    post_urn TEXT,
    created_at TEXT DEFAULT (datetime('now'))
  );

  CREATE TABLE IF NOT EXISTS stats (
    date TEXT PRIMARY KEY,
    count INTEGER DEFAULT 0
  );
`);

function uid() {
  return "lhf_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

// ===================== FEEDS / LISTS =====================

app.get("/feeds", (req, res) => {
  const search = req.query.search || "";
  let feeds;
  if (search) {
    feeds = db.prepare("SELECT * FROM feeds WHERE name LIKE ? ORDER BY position").all(`%${search}%`);
  } else {
    feeds = db.prepare("SELECT * FROM feeds ORDER BY position").all();
  }
  const items = db.prepare("SELECT * FROM feed_items WHERE feed_id = ? ORDER BY created_at DESC").bind("x");
  const result = feeds.map(f => ({
    ...f,
    is_private: !!f.is_private,
    is_in_onboarding: !!f.is_in_onboarding,
    is_admin: true,
    items: db.prepare("SELECT * FROM feed_items WHERE feed_id = ? ORDER BY created_at DESC").all(f.id),
  }));
  res.json(result);
});

app.post("/feeds", (req, res) => {
  const id = uid();
  const { name, is_private } = req.body;
  const pos = db.prepare("SELECT COUNT(*) as c FROM feeds").get().c;
  db.prepare("INSERT INTO feeds (id, name, is_private, position) VALUES (?, ?, ?, ?)").run(id, name || "New List", is_private ? 1 : 0, pos);
  const feed = db.prepare("SELECT * FROM feeds WHERE id = ?").get(id);
  feed.items = [];
  feed.is_admin = true;
  res.json(feed);
});

app.put("/feeds/:id", (req, res) => {
  const { id } = req.params;
  const fields = req.body;
  if (fields.name !== undefined) db.prepare("UPDATE feeds SET name = ?, updated_at = datetime('now') WHERE id = ?").run(fields.name, id);
  if (fields.is_private !== undefined) db.prepare("UPDATE feeds SET is_private = ?, updated_at = datetime('now') WHERE id = ?").run(fields.is_private ? 1 : 0, id);
  if (fields.position !== undefined) db.prepare("UPDATE feeds SET position = ?, updated_at = datetime('now') WHERE id = ?").run(fields.position, id);
  res.json({ success: true });
});

app.delete("/feeds/:id", (req, res) => {
  db.prepare("DELETE FROM feeds WHERE id = ?").run(req.params.id);
  res.json({ success: true });
});

app.post("/feeds/reorder", (req, res) => {
  const { feeds } = req.body;
  if (feeds && Array.isArray(feeds)) {
    const stmt = db.prepare("UPDATE feeds SET position = ? WHERE id = ?");
    feeds.forEach(f => stmt.run(f.position, f.id));
  }
  res.json({ success: true });
});

app.post("/feeds/update-lists", (req, res) => {
  const { lists } = req.body;
  if (lists && Array.isArray(lists)) {
    for (const list of lists) {
      const existing = db.prepare("SELECT id FROM feeds WHERE id = ?").get(list.id);
      if (existing) {
        db.prepare("UPDATE feeds SET name = ?, is_private = ?, position = ?, updated_at = datetime('now') WHERE id = ?")
          .run(list.name, list.is_private ? 1 : 0, list.position || 0, list.id);
      } else {
        db.prepare("INSERT INTO feeds (id, name, is_private, position) VALUES (?, ?, ?, ?)")
          .run(list.id || uid(), list.name, list.is_private ? 1 : 0, list.position || 0);
      }
    }
  }
  const allFeeds = db.prepare("SELECT * FROM feeds ORDER BY position").all().map(f => ({
    ...f, items: db.prepare("SELECT * FROM feed_items WHERE feed_id = ?").all(f.id)
  }));
  res.json({ success: true, data: allFeeds });
});

app.post("/feeds/open-all-lists", (req, res) => {
  const feeds = db.prepare("SELECT * FROM feeds").all();
  const totalProfiles = db.prepare("SELECT COUNT(*) as c FROM feed_items").get().c;
  if (totalProfiles === 0) {
    return res.json({ success: false, message: "Aucun profil dans tes listes. Ajoute des profils d'abord." });
  }
  const allItems = db.prepare(`
    SELECT fi.*, f.name as feed_name FROM feed_items fi
    JOIN feeds f ON fi.feed_id = f.id
  `).all();
  const posts = allItems.map((item, idx) => ({
    id: `urn:li:activity:local-${item.id}-${idx}`,
    content: "",
    date: item.created_at || new Date().toISOString(),
    profile: {
      name: item.name || "",
      headline: item.headline || "",
      url: item.url || "",
      imageUrl: item.photo || "",
    },
    imageUrl: null,
    reactionCount: 0,
    commentCount: 0,
    videoUrl: null,
    carouselPdfUrl: null,
  }));
  res.json({ success: true, posts, totalProfiles, totalPosts: posts.length });
});

app.get("/feeds/feed-items", (req, res) => {
  res.json({ data: [], pagination: {} });
});

app.post("/feeds/:feedId/mark-as-read", (req, res) => {
  res.json({ success: true });
});

// ===================== FEED ITEMS (MEMBERS) =====================

app.post("/feeds/:feedId/items", (req, res) => {
  const { feedId } = req.params;
  const feed = db.prepare("SELECT id FROM feeds WHERE id = ?").get(feedId);
  if (!feed) return res.status(404).json({ error: "Feed not found" });
  const id = uid();
  const linkedin_id = req.body.linkedin_id || "";
  const name = req.body.name || "";
  const photo = req.body.photo || "";
  const url = req.body.url || "";
  const headline = req.body.headline || "";
  try {
    db.prepare("INSERT INTO feed_items (id, feed_id, linkedin_id, name, photo, url, headline) VALUES (?, ?, ?, ?, ?, ?, ?)")
      .run(id, feedId, linkedin_id, name, photo, url, headline);
    res.json({ success: true, id });
  } catch (e) {
    console.error("Error adding item:", e.message);
    res.status(500).json({ error: e.message });
  }
});

app.delete("/feeds/:feedId/items/:itemId", (req, res) => {
  db.prepare("DELETE FROM feed_items WHERE (id = ? OR linkedin_id = ?) AND feed_id = ?").run(req.params.itemId, req.params.itemId, req.params.feedId);
  res.json({ success: true });
});

app.put("/feeds/items", (req, res) => {
  // Bulk update feed items
  const { selected, profile } = req.body;
  if (selected && profile && Array.isArray(selected)) {
    const id = uid();
    for (const feedId of selected) {
      const feed = db.prepare("SELECT id FROM feeds WHERE id = ?").get(feedId);
      if (feed) {
        db.prepare("INSERT INTO feed_items (id, feed_id, linkedin_id, name, photo, url, headline) VALUES (?, ?, ?, ?, ?, ?, ?)")
          .run(uid(), feedId, profile.linkedin_id || "", profile.name || "", profile.photo || "", profile.url || "", profile.headline || "");
      }
    }
  }
  res.json({ success: true });
});

app.post("/feeds/feed-items", (req, res) => {
  console.log("[feed-items] Body:", JSON.stringify(req.body).slice(0, 500));
  const { selected, profile, listId, profiles } = req.body;
  if (selected && profile && Array.isArray(selected)) {
    for (const feedId of selected) {
      const feed = db.prepare("SELECT id FROM feeds WHERE id = ?").get(feedId);
      if (feed) {
        db.prepare("INSERT INTO feed_items (id, feed_id, linkedin_id, name, photo, url, headline) VALUES (?, ?, ?, ?, ?, ?, ?)")
          .run(uid(), feedId, profile.linkedin_id || "", profile.name || "", profile.photo || "", profile.url || "", profile.headline || "");
      }
    }
  } else if (listId && profiles && Array.isArray(profiles)) {
    const feed = db.prepare("SELECT id FROM feeds WHERE id = ?").get(listId);
    if (feed) {
      for (const p of profiles) {
        db.prepare("INSERT INTO feed_items (id, feed_id, linkedin_id, name, photo, url, headline) VALUES (?, ?, ?, ?, ?, ?, ?)")
          .run(uid(), listId, p.linkedin_id || "", p.name || "", p.photo || "", p.url || "", p.headline || "");
      }
      console.log(`[feed-items] Added ${profiles.length} profile(s) to list ${listId}`);
    } else {
      console.log(`[feed-items] List ${listId} not found`);
    }
  } else {
    console.log("[feed-items] UNEXPECTED FORMAT:", Object.keys(req.body));
  }
  res.json({ success: true });
});

app.post("/feeds/import-csv", (req, res) => {
  res.json({ success: true });
});

// ===================== SUBSCRIPTIONS (always premium) =====================

app.get("/subscriptions/status", (req, res) => {
  res.json({
    isSubscribed: true,
    subscriptionType: "premium",
    status: "active",
    billingInterval: "monthly",
    subscriptionId: "premium-local",
    isPastDue: false,
    pastDueUrl: null,
    reason: null,
    currentOrgId: "local-org",
    currentOrgName: "Mon organisation",
    orgWithSubscription: null,
  });
});

app.get("/subscriptions", (req, res) => {
  res.json({ isSubscribed: true, isPastDue: false, pastDueUrl: null, subscriptions: [] });
});

app.get("/subscriptions/invoices", (req, res) => res.json([]));
app.get("/subscriptions/discount-used", (req, res) => res.json({ used: false }));
app.get("/subscriptions/50-percent-off", (req, res) => res.json({}));
app.get("/subscriptions/1-euro-off", (req, res) => res.json({}));
app.post("/subscriptions/:id/cancel", (req, res) => res.json({ success: true }));
app.post("/subscriptions/unsubscribe-feedback", (req, res) => res.json({}));
app.post("/subscriptions/:id/upgrade-to-annual", (req, res) => res.json({ url: null }));
app.post("/subscriptions/:id/reactivate", (req, res) => res.json({}));
app.post("/subscriptions/:id/upgrade-to-pro-ai", (req, res) => res.json({ url: null }));
app.post("/subscriptions/:id/downgrade-to-pro", (req, res) => res.json({ url: null }));
app.post("/subscriptions/:id/cancel-scheduled-change", (req, res) => res.json({}));
app.get("/subscriptions/create-portal-session", (req, res) => res.json({ url: null }));

// ===================== ORGANIZATIONS =====================

app.get("/organizations", (req, res) => {
  res.json([{ id: "local-org", name: "Mon organisation", role: "owner", members: [] }]);
});

app.post("/organizations", (req, res) => {
  res.json({ id: "local-org", name: req.body.name || "Mon organisation" });
});

app.post("/organizations/set-current", (req, res) => res.json({ success: true }));
app.delete("/organizations/:id", (req, res) => res.json({ success: true }));

// ===================== COMMENTS / AI =====================

app.post("/comments/generate-thinking", async (req, res) => {
  const key = process.env.OPENAI_KEY || "";
  if (!key) return res.json({ comment_left: "Configure OPENAI_KEY", comment_center: "", comment_right: "" });
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: 'Generate 3 different engaging LinkedIn comments for this post. Reply ONLY in JSON: {"comment_left":"your first comment here","comment_center":"your second comment here","comment_right":"your third comment here"}. Each comment should be natural, 1-3 sentences, no hashtags, no brackets, no labels. The first should agree/congratulate, the second should ask a thoughtful question, the third should share an insight. Same language as the post.' },
          { role: "user", content: req.body.post_text || req.body.comment_text || "" },
        ],
        max_tokens: 400,
        response_format: { type: "json_object" },
      }),
    });
    const data = await r.json();
    const parsed = JSON.parse(data.choices?.[0]?.message?.content || "{}");
    res.json({ comment_left: parsed.comment_left || "", comment_center: parsed.comment_center || "", comment_right: parsed.comment_right || "" });
  } catch (e) {
    res.json({ comment_left: "", comment_center: "", comment_right: "" });
  }
});

app.post("/comments/generate", async (req, res) => {
  const key = process.env.OPENAI_KEY || "";
  if (!key) return res.json({ comment: "Configure OPENAI_KEY" });
  try {
    const sys = req.body.is_reply_to_comment
      ? "Generate a natural reply to this LinkedIn comment. 1-2 sentences, no hashtags. Same language."
      : "Generate a natural, engaging LinkedIn comment. 2-3 sentences max, no hashtags. Same language as the post.";
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [{ role: "system", content: sys }, { role: "user", content: req.body.post_text || req.body.comment_text || "" }],
        max_tokens: 200,
      }),
    });
    const data = await r.json();
    incrementStat();
    res.json({ comment: data.choices?.[0]?.message?.content || "" });
  } catch (e) {
    res.json({ comment: "" });
  }
});

app.post("/comments/rewrite", async (req, res) => {
  const key = process.env.OPENAI_KEY || "";
  if (!key) return res.json({ comment: "" });
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "Rewrite this LinkedIn comment to be more engaging. Keep same language, tone, and length." },
          { role: "user", content: req.body.comment_text || req.body.post_text || "" },
        ],
        max_tokens: 200,
      }),
    });
    const data = await r.json();
    res.json({ comment: data.choices?.[0]?.message?.content || "" });
  } catch (e) {
    res.json({ comment: "" });
  }
});

app.post("/comments/upsert", (req, res) => {
  const { post_text, comment_text, post_urn } = req.body;
  db.prepare("INSERT INTO comments (post_text, comment_text, post_urn) VALUES (?, ?, ?)").run(post_text || "", comment_text || "", post_urn || "");
  incrementStat();
  res.json({ success: true });
});

app.get("/comments", (req, res) => {
  const comments = db.prepare("SELECT * FROM comments ORDER BY created_at DESC LIMIT 50").all();
  res.json({ comments, nextPaginationToken: null, streakCounter: getStreak() });
});

// ===================== STATISTICS =====================

function incrementStat() {
  const today = todayStr();
  const existing = db.prepare("SELECT count FROM stats WHERE date = ?").get(today);
  if (existing) db.prepare("UPDATE stats SET count = count + 1 WHERE date = ?").run(today);
  else db.prepare("INSERT INTO stats (date, count) VALUES (?, 1)").run(today);
}

function getStreak() {
  let streak = 0;
  const d = new Date();
  while (true) {
    const key = d.toISOString().slice(0, 10);
    const row = db.prepare("SELECT count FROM stats WHERE date = ?").get(key);
    if (row && row.count > 0) { streak++; d.setDate(d.getDate() - 1); }
    else break;
  }
  return streak;
}

app.get("/statistics/daily", (req, res) => {
  const stats = db.prepare("SELECT * FROM stats ORDER BY date DESC LIMIT 30").all();
  res.json({ data: stats });
});

// ===================== MISC (no-ops) =====================

app.get("/settings", (req, res) => res.json({}));
app.post("/settings", (req, res) => res.json({}));
app.get("/past-posts", (req, res) => res.json([]));
app.get("/feedback", (req, res) => res.json({}));
app.get("/comments/streaks", (req, res) => res.json({ streakCounter: getStreak(), consecutiveDays: getStreak() }));
app.get("/comments/count", (req, res) => {
  const today = todayStr();
  const row = db.prepare("SELECT count FROM stats WHERE date = ?").get(today);
  res.json({ count: row ? row.count : 0 });
});
app.put("/accounts", (req, res) => res.json({ success: true }));
app.get("/accounts/is-my-linkedin-id", (req, res) => res.json({ isMyLinkedinId: false }));
app.post("/feeds/:id/remove", (req, res) => {
  db.prepare("DELETE FROM feeds WHERE id = ?").run(req.params.id);
  res.json({ success: true });
});
app.get("/feeds/public", (req, res) => res.json({ feeds: [], data: [], pagination: {} }));
app.post("/analytics/activity-logs", (req, res) => res.json({ success: true }));
app.post("/analytics/activity-logs/batch", (req, res) => res.json({ success: true }));
app.get("/profile", (req, res) => res.json({ data: {} }));
app.post("/profile/onboarding-lists", (req, res) => res.json({ data: { lists: [] } }));
app.post("/profile/generate-prompt", (req, res) => res.json({}));
app.post("/profile/generate-profiles-from-list-name", (req, res) => res.json({ data: { items: [] } }));
app.get("/notifications", (req, res) => res.json({ feeds: [] }));
app.get("/accounts", (req, res) => res.json({}));
app.get("/updates/latest", (req, res) => res.json({ updates: [] }));
app.post("/update-reads/:id/mark", (req, res) => res.json({ success: true }));
app.post("/update-reads/:id/is-read", (req, res) => res.json({ success: true }));
app.get("/posts/sync-session/active", (req, res) => res.json(null));
app.get("/posts/sync-session/last-completed", (req, res) => res.json(null));
app.post("/posts/sync-session/start", (req, res) => res.json({ id: "local-sync" }));
app.post("/posts/sync-with-analytics", (req, res) => res.json({ success: true }));
app.post("/posts/summary", async (req, res) => {
  const key = process.env.OPENAI_KEY || "";
  const text = req.body.post_text || req.body.postContent || "";
  if (!key || !text) return res.json({ summary: "No content to summarize." });
  try {
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${key}` },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        messages: [
          { role: "system", content: "Summarize this LinkedIn post in 2-3 concise sentences. Same language as the post. Be direct and informative." },
          { role: "user", content: text },
        ],
        max_tokens: 200,
      }),
    });
    const data = await r.json();
    res.json({ summary: data.choices?.[0]?.message?.content || "Summary unavailable." });
  } catch (e) {
    res.json({ summary: "Summary unavailable." });
  }
});
app.post("/posts/reaction-prediction", (req, res) => res.json({
  reactionPrediction: { like: 70, celebrate: 10, support: 10, love: 5, insightful: 5, total: 100 },
}));
app.get("/posts/from-linkpost", (req, res) => res.json({ posts: [] }));
app.get("/promotion-banners", (req, res) => res.json({ banners: [] }));
app.get("/carousel", (req, res) => res.json({ data: [] }));
app.get("/carousel/:id", (req, res) => res.json({}));
app.get("/leaderboard/generate-pdf", (req, res) => res.json({ data: [] }));
app.post("/leaderboard/send-pdfs-by-email", (req, res) => res.json({}));
app.get("/linkedin/fetch-post-comments-fetchin", (req, res) => res.json({ data: [] }));
app.get("/lumail/user-count", (req, res) => res.json({ userCount: 100 }));

app.get("/rewrite-options/get-multiple", (req, res) => res.json({ options: [] }));
app.get("/rewrite-options", (req, res) => res.json({ options: [] }));

app.post("/analytics/focus-mode-sessions", (req, res) => res.json({ success: true }));
app.post("/analytics/generation-sessions", (req, res) => res.json({ success: true }));
app.post("/analytics/comment-sessions", (req, res) => res.json({ success: true }));
app.get("/accounts/is-my-linkedin-id", (req, res) => res.json({ isMyLinkedinId: false }));
app.delete("/past-posts/:id", (req, res) => res.json({ success: true }));

// Catch-all
app.use((req, res) => {
  console.log(`[404] ${req.method} ${req.path}`);
  res.json({});
});

app.listen(PORT, () => {
  console.log(`\n  LinkHub Local Server running on http://localhost:${PORT}`);
  console.log(`  SQLite DB: ${path.join(__dirname, "linkhub.db")}`);
  console.log(`  OpenAI Key: ${process.env.OPENAI_KEY ? "configured" : "NOT SET (set OPENAI_KEY env var)"}\n`);
});
