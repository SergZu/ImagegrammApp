const staticCacheName = 's-img-app-cache-v2';
const dinamicCacheName = 'd-img-app-cache-v2';

const assetsUrls = [
    './offline.html',
    './562da37d6e67dc462463.png',
    './a53e6c1ad8f07dfc3b85.png',
    './b55ff10166658c2c2294.png',
    './ba0cee2f4f5d87e2e775.png',
    './bbf45acebb209809c712.png',
    './main.bundle.js',
    './runtime.bundle.js',
    './vendors.bundle.js'
];

self.addEventListener('install', async () => {
    self.skipWaiting();
    const cache = await caches.open(staticCacheName);
    await cache.addAll(assetsUrls);
});

self.addEventListener('activate', async () => {
    const cachesNames = await caches.keys();
    await Promise.all(
        cachesNames
        .filter((item) => (item !== staticCacheName && item !== dinamicCacheName) )
        .map((item) => caches.delete(item))
    );
    return self.clients.claim()
})

self.addEventListener('fetch', (evt) => {
    const { request } = event;
  event.respondWith(cacheData(request));
});

async function cacheData(request) {
  const cashedRequest = await caches.match(request);
  if (staticAssets.some(sa => request.url.indexOf(sa) >= 0) || request.headers.get('accept').includes('text/html')) {
    return cashedRequest || await caches.match('./offline.html') || networkFirst(request);
  }
  return cashedRequest || networkFirst(request);
}

async function networkFirst(request) {
  const cache = await caches.open(dinamicCacheName);
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
}

