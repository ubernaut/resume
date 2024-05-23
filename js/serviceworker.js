
var staticCacheName = "pwa";
 
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(staticCacheName).then(function (cache) {
     return cache.addAll("");
      //return cache.addAll(["https://ubernaut.github.io/simple_interval_timer/index.html","https://ubernaut.github.io/simple_interval_timer/interval.png","https://ubernaut.github.io/simple_interval_timer/interval.ico"]);
    })
  );
});
 
self.addEventListener("fetch", function (event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});