fetch("http://localhost:3456/subscriptions/status").then(r=>r.json()).then(d=>{
  if(d.isSubscribed){document.getElementById("st").innerHTML='<span class="d dg"></span> Serveur actif - Extension prete';document.getElementById("st").className="s ok"}
}).catch(()=>{});
document.querySelector(".btn").addEventListener("click", function() { chrome.runtime.openOptionsPage(); });
