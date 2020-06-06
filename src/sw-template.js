importScripts('/workbox-sw.js');
//workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

// app-shell
workbox.routing.registerRoute(
  '/',
  new workbox.strategies.NetworkFirst()
);
workbox.routing.registerRoute(
  /^\/$|home|about|selina|personal|history|certificates|pricing/,
  new workbox.strategies.NetworkFirst()
);

// webfont-cache
const webFontHandler = new workbox.strategies.CacheFirst({
  cacheName: 'webfont-cache',
  plugins: [
    new workbox.expiration.ExpirationPlugin({
      maxEntries: 20
    }),
    new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [0, 200]
    }),
  ],
});
workbox.routing.registerRoute(
  /https:\/\/fonts.googleapis.com\/.*/,
  webFontHandler
);
workbox.routing.registerRoute(
  /https:\/\/fonts.gstatic.com\/.*/,
  webFontHandler
);
workbox.routing.registerRoute(
  /https:\/\/use.fontawesome.com\/.*/,
  webFontHandler
);
