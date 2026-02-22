self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('dieta-app').then(function(cache) {
      return cache.addAll([
        'index.html',
        'manifest.json'
      ]);
    })
  );
});