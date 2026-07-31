const CACHE_NAME = 'uno-flex-cache-v3';
const ASSETS_TO_CACHE = [
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  // WICHTIG: kein self.skipWaiting() hier mehr – der neue Service Worker soll erst
  // aktiv werden, wenn die Seite das per Nachricht bestätigt (siehe unten). So kann
  // die App zuerst einen Update-Hinweis anzeigen, statt einfach im Hintergrund zu wechseln.
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Network-first für die App-Shell: Bei Internetverbindung wird immer die aktuelle
// Version geladen und der Cache aktualisiert. Nur offline greift der Cache als Fallback.
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return; // externe Aufrufe (z.B. APIs) unberührt lassen

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
