// ── Service Worker AYITI nan Mondyal 2026 ──
// Incrémente CACHE_VERSION à chaque déploiement pour invalider le cache
const CACHE_VERSION = 'v20260526-012';
const CACHE_NAME = `ayiti-mondyal-${CACHE_VERSION}`;

const ASSETS = [
  './',
  './index.html',
  './app.js',
  './data.js',
  './style.css',
  './favicon.png',
  './favicon-192.png',
  './og-image.jpg',
];

// Installation : mise en cache des assets
self.addEventListener('install', event => {
  self.skipWaiting(); // ← force l'activation immédiate (pas d'attente)
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
});

// Activation : supprime les anciens caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim()) // ← prend le contrôle immédiatement
  );
});

// Fetch : réseau d'abord, cache en fallback (network-first)
// → toujours la version la plus récente si en ligne
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Met à jour le cache avec la version fraîche
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request)) // fallback cache si hors ligne
  );
});
