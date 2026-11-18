// Amathuba offline support: caches the app so it opens without data after the first visit.
// Change VERSION whenever you update any file, so phones fetch the new version.
const VERSION = "amathuba-v10";
const FILES = ["./", "index.html", "js/opportunities.js", "vendor/jspdf.umd.min.js", "manifest.webmanifest", "icons/icon-192.png", "icons/icon-512.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  // Cache first to save mobile data; refresh the cache quietly in the background.
  e.respondWith(caches.open(VERSION).then(async c => {
    const hit = await c.match(e.request);
    const net = fetch(e.request).then(res => { if (res.ok) c.put(e.request, res.clone()); return res; }).catch(() => null);
    return hit || (await net) || c.match("index.html");
  }));
});
