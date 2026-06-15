// PracticeIQ service worker — app-shell cache for offline use on the course.
// Bump CACHE on each deploy (v3, v4, …) so installed PWAs pick up updates.
const CACHE = 'practiceiq-v3';
const SHELL = [
  './',
  './index.html',
  './golfiq.css',
  './manifest.json',
  './practiceiq-logo/mark.svg',
  './practiceiq-logo/mark-light.svg',
  './practiceiq-logo/favicon.svg',
  './practiceiq-logo/favicon-32.png',
  './practiceiq-logo/favicon-16.png',
  './practiceiq-logo/apple-touch-icon.png',
  './practiceiq-logo/icon-192.png',
  './practiceiq-logo/icon-512.png',
  './practiceiq-logo/icon-maskable-192.png',
  './practiceiq-logo/icon-maskable-512.png',
  './practiceiq-logo/lockup-dark.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts: cache-first, fall back to system fonts if offline + uncached.
  if (url.origin.includes('fonts.googleapis.com') || url.origin.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        try {
          const res = await fetch(req);
          cache.put(req, res.clone());
          return res;
        } catch (_) {
          return hit || Response.error();
        }
      })
    );
    return;
  }

  // Same-origin: cache-first with network update; SPA fallback to index.html.
  e.respondWith(
    caches.match(req).then((hit) => {
      if (hit) return hit;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && url.origin === self.location.origin) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
