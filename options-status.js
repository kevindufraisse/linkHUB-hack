fetch("http://localhost:3456/subscriptions/status").then(r=>r.json()).then(d=>{
  if(d.isSubscribed){document.getElementById("st").innerHTML='<span class="d dg"></span> Serveur actif';document.getElementById("st").className="status ok"}
}).catch(()=>{});
fetch("http://localhost:3456/feeds").then(r=>r.json()).then(feeds=>{
  document.getElementById("feeds").textContent=feeds.length;
  let members=0;feeds.forEach(f=>members+=(f.items||[]).length);
  document.getElementById("members").textContent=members;
}).catch(()=>{});
fetch("http://localhost:3456/comments").then(r=>r.json()).then(d=>{
  document.getElementById("comments").textContent=(d.comments||[]).length;
}).catch(()=>{});
