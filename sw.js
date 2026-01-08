const CACHE_NAME = 'farmcon2026-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/pages/keynote-blake-brewer.html',
  '/pages/weather.html',
  '/pages/building-the-brand.html',
  '/pages/meristem.html',
  '/pages/future-of-farming.html',
  '/pages/aha-moments.html',
  '/pages/traceability.html',
  '/pages/crop-insurance.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});
