importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");const{core:core,precaching:precaching,routing:routing,strategies:strategies,expiration:expiration,cacheableResponse:cacheableResponse,backgroundSync:backgroundSync}=workbox,{CacheFirst:CacheFirst,NetworkFirst:NetworkFirst,NetworkOnly:NetworkOnly,StaleWhileRevalidate:StaleWhileRevalidate}=strategies,{ExpirationPlugin:ExpirationPlugin}=expiration,{CacheableResponsePlugin:CacheableResponsePlugin}=cacheableResponse,cacheSuffixVersion="-200512",maxEntries=100;self.addEventListener("activate",(e=>{console.log("[ServiceWorker] Activate"),e.waitUntil(self.clients.claim())})),core.setCacheNameDetails({prefix:"lufs-blog",suffix:"-200512"}),core.skipWaiting(),core.clientsClaim(),precaching.cleanupOutdatedCaches(),precaching.precacheAndRoute([{url:"https://cdn.isteed.cc/avatar/avatar-24x24.webp",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/atom-one.min.css",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/dark.min.css",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/disqus.js",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/disqusjs.css",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/lazyload.iife.min.js",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/spectre.min.css",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/style.min.css",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/img/svg/loading.svg",revision:"2022-02-12"},{url:"https://cdn.isteed.cc/file/ga-views.js",revision:"2022-02-12"}]),routing.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/,new StaleWhileRevalidate({cacheName:"img-cache"})),routing.registerRoute(/\.(?:js|css)$/,new StaleWhileRevalidate({cacheName:"static-assets-cache"})),routing.registerRoute(new RegExp("^https://cfga.isteed.cc"),new NetworkOnly({cacheName:"analytics"})),routing.registerRoute(new RegExp("^https://www.clarity.ms"),new NetworkOnly({cacheName:"analytics"})),routing.registerRoute(new RegExp("^https://hive.splitbee.io"),new NetworkOnly({cacheName:"analytics"})),routing.registerRoute(new RegExp("^https://(.*)disqus.com"),new NetworkOnly({cacheName:"disqus"})),routing.registerRoute(new RegExp("^https://(.*)disquscdn.com"),new CacheFirst({cacheName:"disqus",plugin:[new ExpirationPlugin({maxAgeSeconds:864e3})]})),routing.registerRoute(new RegExp("^https://api.isteed.cc"),new NetworkOnly({cacheName:"api"})),routing.registerRoute(new RegExp("^https://api.isteed.cc/disqus/(.*)"),new StaleWhileRevalidate({cacheName:"disqus"})),routing.registerRoute(new RegExp("^https://(.*).getloli.com"),new NetworkOnly({cacheName:"api"})),routing.registerRoute(new RegExp("^https://*.shields.io"),new NetworkOnly({cacheName:"api"})),routing.registerRoute(new RegExp("^https://api.uptimerobot.com"),new NetworkOnly({cacheName:"api"})),routing.registerRoute(new RegExp("^https://t.isteed.cc/ssh"),new CacheFirst({cacheName:"calcu"})),routing.registerRoute("/sw.js",new StaleWhileRevalidate),routing.setDefaultHandler(new NetworkFirst({networkTimeoutSeconds:3}));