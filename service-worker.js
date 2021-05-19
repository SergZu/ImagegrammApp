const cacheName = 'img-app-cache-v1';

const assetsUrls = [
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

const takeFromCache = async (request) => {
    try {
        const cached = await caches.match(request);
        if (cached) {
            return cached;     
        } else {
            const response = await fetch(request);
            const cache = await caches.open(cacheName);
            await cache.put(request.url, response.clone());
            return response
        }
    }
    catch(err) {
        console.log('Fetch error', err);
        return null
    }
}

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(assetsUrls);
});

self.addEventListener('fetch', (evt) => {
    evt.respondWith( takeFromCache(evt.request) )
        
})

self.addEventListener('activate', async () => {
    const cachesNames = await caches.keys();
    await Promise.all(
        cachesNames
        .filter((item) => item !== cacheName)
        .map((item) => caches.delete(item))
    )
})