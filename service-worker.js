self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('manager-app-cache').then(cache => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json',
                './manager-192.png',
                './manager-512.png',
                './js/index.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
