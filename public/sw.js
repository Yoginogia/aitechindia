const CACHE_NAME = 'aitechnews-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        // Precache only offline fallback or nothing, let next.js handle the rest
        return cache.addAll(['/']);
      })
      .catch((err) => {
        console.warn('Pre-caching failed on install:', err);
      })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .catch((err) => {
        console.warn('Cache cleanup failed on activate:', err);
      })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests with http/https protocols
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((err) => {
        console.warn('Cache match failed, falling back to network:', err);
        return fetch(event.request);
      })
  );
});

