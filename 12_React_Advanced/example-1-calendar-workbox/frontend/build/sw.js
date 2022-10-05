importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js"
);

workbox.loadModule("workbox-background-sync");

workbox.precaching.precacheAndRoute([{"revision":"720393aa6f3315421473963b5f1e681c","url":"asset-manifest.json"},{"revision":"6e1267d9d946b0236cdf6ffd02890894","url":"favicon.ico"},{"revision":"1716aec56145390d5b3c5dd82c55c9ce","url":"index.html"},{"revision":"33dbdd0177549353eeeb785d02c294af","url":"logo192.png"},{"revision":"917515db74ea8d1aee6a246cfbcc0b45","url":"logo512.png"},{"revision":"d9d975cebe2ec20b6c652e1e4c12ccf0","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"4b414c9088ddbbe63e627c7469ecd5c5","url":"static/css/2.bc3b0fa2.chunk.css"},{"revision":"bbc95a31aee05ce9e3b158a0678416b7","url":"static/css/main.96703769.chunk.css"},{"revision":"ec8c134d06f1a7a6d094d78145f6ae47","url":"static/js/2.a42f2f4b.chunk.js"},{"revision":"252821f8e0b704af981f3f8d7317b264","url":"static/js/2.a42f2f4b.chunk.js.LICENSE.txt"},{"revision":"1e3838ad35ec5cf81dd2ad84fcb29fda","url":"static/js/main.599e7a6a.chunk.js"},{"revision":"61fdc26ae722c389524df354bc9348d3","url":"static/js/runtime-main.af9c807c.js"}]);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

registerRoute(
  new RegExp(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  ),
  new CacheFirst()
);

registerRoute(
  new RegExp(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"
  ),
  new CacheFirst()
);

registerRoute(
  new RegExp("http://localhost:4000/api/auth/renew"),
  new NetworkFirst()
);

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkFirst()
);

// Post offline
const bgSyncPlugin = new BackgroundSyncPlugin("posteos-offline", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp("http://localhost:4000/api/events"),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);
