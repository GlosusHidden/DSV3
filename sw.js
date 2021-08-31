const staticCacheName="static-cache-v2",staticAssets=["./","./index.html","./style.css","./icon.png","./favicon.ico","./index.min.js","./manifest.json"];async function checkCache(e){return await caches.match(e)||checkOnline(e)}async function checkOnline(e){try{return await fetch(e)}catch(c){console.error(`Failed to fetch ${e.url}`)}}self.addEventListener("install",(async()=>{const e=await caches.open(staticCacheName);await e.addAll(staticAssets),console.log("Service worker has been installed")})),self.addEventListener("activate",(async()=>{const e=(await caches.keys()).map((async e=>{[staticCacheName].includes(e)||await caches.delete(e)}));await Promise.all(e),console.log("Service worker has been activated")})),self.addEventListener("fetch",(e=>{console.log(`Trying to fetch ${e.request.url}`),e.respondWith(checkCache(e.request))}));
