'use strict';

const CACHE_STATIC = 'static-cache-v4';

function installEvent(event) {
    async function cacheStaticFiles() {
        const files = [
            './fonts',
            './css',
            './img',
            './js',
            './database/database.json',
            './favicon.png',
            './index.html',
            './sw.js'
        ];
        const cacheStat = await caches.open(CACHE_STATIC);
        await Promise.all(
            files.map(function (url) {
                return cacheStat.add(url).catch(function (reason) {
                    console.log(`'${url}' failed: ${String(reason)}`);
                });
            })
        );
    }

    event.waitUntil(cacheStaticFiles());
}

function fetchEvent(event) {
    async function getFromCache() {
        const cache = await self.caches.open(CACHE_STATIC);
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) {
            return cachedResponse;
        }
        const response = await fetch(event.request);
        await cache.put(event.request, response.clone());
        return response;
    }

    event.respondWith(getFromCache());
}

self.addEventListener('install', installEvent);
self.addEventListener('fetch', fetchEvent);
