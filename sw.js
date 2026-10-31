// Bump V whenever you upload a new index.html so phones refresh the cache.
const V='dateplanner-v8';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png','her.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  const u=new URL(r.url);
  if(r.mode==='navigate'){
    e.respondWith(fetch(r,{cache:'reload'}).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put('index.html',cp))}return res})
      .catch(()=>caches.match('index.html').then(x=>x||caches.match('./'))));return;
  }
  if(u.origin===location.origin){
    e.respondWith(caches.match(r).then(x=>x||fetch(r).then(res=>{if(res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}return res})));return;
  }
  if(u.hostname==='fonts.googleapis.com'||u.hostname.endsWith('gstatic.com')){
    e.respondWith(caches.open(V).then(c=>c.match(r).then(x=>{
      const f=fetch(r).then(res=>{c.put(r,res.clone());return res}).catch(()=>x);return x||f})));
  }
});
