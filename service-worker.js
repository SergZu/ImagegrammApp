const staticCacheName = 's-img-app-cache-v2';
const dinamicCacheName = 'd-img-app-cache-v2';

const assetsUrls = [
    './offline.html',
    './4ea60ea28f8b5c31d6ea.svg',
    './700308ce9df21ff24ef3.png',
    './d484f0be3d0a6401d389.svg',
    './f0fea10b2a66b731a71f.gif',
    './main.bundle.js',
    './runtime.bundle.js',
    './33.bundle.js',
    './101.bundle.js',
    './128.bundle.js',
    './178.bundle.js',
    './213.bundle.js',
    './686.bundle.js',
    './850.bundle.js',
    './867.bundle.js'
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
    const { request } = evt;
  evt.respondWith(cacheData(request));
});

async function cacheData(request) {
  const cashedRequest = await caches.match(request);
  if (assetsUrls.some(sa => request.url.indexOf(sa) >= 0) || request.headers.get('accept').includes('text/html')) {
    return cashedRequest || await caches.match('./offline.html') || networkFirst(request);
  }
  return cashedRequest || networkFirst(request);
}

async function networkFirst(request) {
  const cache = await caches.open(dinamicCacheName);
  if (request.method === 'POST') {
      try {
          const response = await fetch(request);
      } catch(err) {
        throw new Error(err.message)
      }
      return response
  }
  try {
    const response = await fetch(request);
    cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
}

