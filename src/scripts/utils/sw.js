import 'regenerator-runtime';
import CacheHelper from './cache-helper';

// Daftar asset yang akan dicaching
const assetsToCache = [
  './',
  './icons/logo_restaurant_72x72.png',
  './icons/logo_restaurant_96x96.png',
  './icons/logo_restaurant_128x128.png',
  './icons/logo_restaurant_144x144.png',
  './icons/logo_restaurant_152x152.png',
  './icons/logo_restaurant_192x192.png',
  './icons/logo_restaurant_256x256.png',
  './icons/logo_restaurant_512x512.png',
  './logo_restaurant1.png',
  './index.html',
  './icon_movie.jpeg',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

// precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('install', () => {
//   console.log('Service Worker: Installed');
//   self.skipWaiting();
// });

// self.addEventListener('push', (event) => {
//   console.log('Service Worker: Pushed');

//   const dataJson = event.data.json();
//   const notification = {
//     title: dataJson.title,
//     options: {
//       body: dataJson.options.body,
//       icon: dataJson.options.icon,
//       image: dataJson.options.image,
//     },
//   };
//   event.waitUntil(self.registration.showNotification(notification.title, notification.options));
// });
