'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ece136e79e18cf58b297405811f88172",
"version.json": "8af85b9b5baa2d39c8180d1982c6ff75",
"index.html": "45cdd58b4c931dd7a3a78a7684ba394a",
"/": "45cdd58b4c931dd7a3a78a7684ba394a",
"main.dart.js": "933ab188393a16b2572efcdcd7704ef0",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0b8a03604d66f809830078480b4bfb90",
"assets/AssetManifest.json": "ad82fdc0a47b04b3181de53ec5bffabf",
"assets/NOTICES": "a97eeeb63304d384565bfa60449fe051",
"assets/FontManifest.json": "610945e615422fc163d0c273739d719c",
"assets/AssetManifest.bin.json": "9dc8b85f092894a940db9845b88b282a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "bee04f3d0acb0c51dfdac281a3c85f00",
"assets/fonts/MaterialIcons-Regular.otf": "526d8b7d568d6de9237a00757ec53bb8",
"assets/assets/svg/bible_journal_logo_dark.svg": "fb250ebeaf510b3bace63f4a41338e79",
"assets/assets/images/BibleJournal%2520note%2520uk.png": "833941524000661a88354f29b032a0d4",
"assets/assets/images/BibleJournal%2520home%2520uk.png": "cd7c7c1bb8712c5e44fba6afdfcafe10",
"assets/assets/images/BibleJournal%2520graphics%2520ru%2520Light.png": "18d9fa2cdd53044c7133b0515b024c8e",
"assets/assets/images/BibleJournal%2520home%2520uk%2520Light.png": "a9c74b08f8a782a0c86eed5d9e3a523b",
"assets/assets/images/ChurchLife%2520graphics%2520uk%2520Light.png": "a8c574f7efed2cbb46a0ff9852191f51",
"assets/assets/images/BibleJournal%2520graphics%2520en%2520Light.png": "91a35174d687d674ad6d8abf3de9f0b3",
"assets/assets/images/ChurchLife%2520logo%2520Light.png": "558e2bab7c64cc4e216aa5fff90b1ef1",
"assets/assets/images/BibleJournal%2520logo.png": "38bed618b7b2b0dc0e5c9166c2705d30",
"assets/assets/images/BibleJournal%2520graphics%2520ru.png": "fc273c4dc03015bedd314bde34fbf531",
"assets/assets/images/BibleJournal%2520note%2520uk%2520Light.png": "10de45db82064d27a82f7e6d91d480e0",
"assets/assets/images/ChurchLife%2520graphics%2520ru.png": "6c7bf687c42c5ceecf3919fa6b070838",
"assets/assets/images/GetItOnGooglePlay_Badge_Web_color_Ukranian.png": "a7e8acfddce012a1089ad538ca86727c",
"assets/assets/images/GetItOnGooglePlay_Badge_Web_color_Russian.png": "736099d9ebd0a601d56befc9822cca50",
"assets/assets/images/BibleJournal%2520graphics%2520en.png": "9bce93581c5c0b9234da0bbb8cf610ad",
"assets/assets/images/ChurchLife%2520graphics%2520en.png": "40e521e503ab55dd0ce0c5847596d989",
"assets/assets/images/BibleJournal%2520home%2520en.png": "57e6df4f9019f45e0889ae16c04718e4",
"assets/assets/images/BibleJournal%2520home%2520ru%2520Light.png": "760c1bd9fc2c138ac597b2d45b16fe45",
"assets/assets/images/BibleJournal%2520graphics%2520uk%2520Light.png": "f93f7b99548bfc5826166c97869933b2",
"assets/assets/images/ChurchLife%2520graphics%2520en%2520Light.png": "22736108c54d9240f0f9946122792947",
"assets/assets/images/BibleJournal%2520note%2520en.png": "0bb0be2a850a2f19708c207fb3e44a8b",
"assets/assets/images/ChurchLife%2520graphics%2520ru%2520Light.png": "8a734a32c47fce394bc837dfc32a661c",
"assets/assets/images/BibleJournal%2520home%2520en%2520Light.png": "ed84c52340ead695253db63f09a336b6",
"assets/assets/images/GetItOnGooglePlay_Badge_Web_color_English.png": "e6d552c5deec92675d47f9b89d816ab8",
"assets/assets/images/BibleJournal%2520note%2520ru.png": "74816a0ac74b9cbfbba2c501b8d6251b",
"assets/assets/images/BibleJournal%2520home%2520ru.png": "73d67c1faec45489879cede4f298343a",
"assets/assets/images/biblejournal_frame.png": "e7e871a764293dafbc7e2efb010174d0",
"assets/assets/images/ChurchLife%2520logo.png": "89a1a8a03c1be7b9a31620d062bec3ac",
"assets/assets/images/ChurchLife%2520graphics%2520uk.png": "d3ba06a493bd0e6bffcf8724bf670707",
"assets/assets/images/BibleJournal%2520graphics%2520uk.png": "6ab1438c7806c0fc719c494f61a4b58d",
"assets/assets/images/BibleJournal%2520note%2520ru%2520Light.png": "81080010b29060813f935cefb04c38a9",
"assets/assets/images/BibleJournal%2520note%2520en%2520Light.png": "27c4ce4b08c4fbdecd6d266eebc169c6",
"assets/assets/images/BibleJournal%2520logo%2520Light.png": "5639ca22853f8d68a9c62572611b51b1",
"assets/assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/assets/fonts/NotoSans-Medium.ttf": "a1311858ffd88b69aa5eadafd8f5c164",
"assets/assets/fonts/NotoSerif-Regular.ttf": "a31fcddc07198b80f1af9a9404c16d71",
"assets/assets/fonts/NotoSerif-Medium.ttf": "9d2699f4b7d541ae50134c3cd23198fd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
