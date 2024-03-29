'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"main.dart.js": "b7160c715947b1cd4d0ac6050e9f3f64",
"version.json": "66530a32834ba661a8e6574b494975fa",
"assets/assets/tiles/ninelabs.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/ninelabs.tsx": "6c9eb4cbfce8e79e2327545b1220f567",
"assets/assets/tiles/level-01.tmx": "3db2786c1611e7930a9dfd68af7bf05d",
"assets/assets/tiles/level-02.tmx": "e5eac5f244c6acc0729a72d0768cb5c5",
"assets/assets/tiles/ninelabs.tiled-session": "9ac2f0e01a9e5cdb8de0e7dc1260d842",
"assets/assets/tiles/level-03.tmx": "1f75232a91544edbfd2862a084824791",
"assets/assets/images/Terrain/Terrain(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/Background/Blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/Background/Brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/Background/Gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/Background/Green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/Background/Pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/Background/Purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/Background/Yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/MainCharacters/MaskDude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/MainCharacters/MaskDude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/MainCharacters/MaskDude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/MainCharacters/MaskDude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/MainCharacters/MaskDude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/MainCharacters/MaskDude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/MainCharacters/MaskDude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/MainCharacters/NinjaFrog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/MainCharacters/NinjaFrog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/MainCharacters/NinjaFrog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/MainCharacters/NinjaFrog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/MainCharacters/NinjaFrog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/MainCharacters/NinjaFrog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/MainCharacters/NinjaFrog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/MainCharacters/PinkMan/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/MainCharacters/PinkMan/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/MainCharacters/PinkMan/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/MainCharacters/PinkMan/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/MainCharacters/PinkMan/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/MainCharacters/PinkMan/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/MainCharacters/PinkMan/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/MainCharacters/VirtualGuy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/MainCharacters/VirtualGuy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/MainCharacters/VirtualGuy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/MainCharacters/VirtualGuy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/MainCharacters/VirtualGuy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/MainCharacters/VirtualGuy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/MainCharacters/VirtualGuy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/MainCharacters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/MainCharacters/Desappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/HUD/JumpButton.png": "c365c9b1778af4f9775873544b7feab1",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/Enemies/Chicken/Hit%2520(32x34).png": "1a0b324bc2c06c132f6e17d509928a34",
"assets/assets/images/Enemies/Chicken/Idle%2520(32x34).png": "540724fcaccd692f5d3adb169fa8db2b",
"assets/assets/images/Enemies/Chicken/Run%2520(32x34).png": "58190fdf957eaba5b783bbe2df837c2e",
"assets/assets/audio/bounce.wav": "63621de02044af415adcb0cdbc7afe87",
"assets/assets/audio/collect_fruit.wav": "81efa093638b482b3593b1022837169d",
"assets/assets/audio/disappear.wav": "1d328b82b7707e42002f42927346e923",
"assets/assets/audio/hit.wav": "3c90d1d642f2409a1ccede4189b8618f",
"assets/assets/audio/jump.wav": "0955bb8692212a59ffbf265053d0f09a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "633a1ffa37d4cdafb29460c047ab3edd",
"assets/AssetManifest.bin": "6d36725ae8e847ac0543ff9b076a101e",
"assets/AssetManifest.bin.json": "026c3c5614c8a323b50a5bc3404388e9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "9f3e07238956fc36eff02bde3d6fa3d5",
"manifest.json": "8abc4d21709fb47aeab871439d923fdb",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "60d34c759f7e3f380f6ad95488b7ba18",
"/": "60d34c759f7e3f380f6ad95488b7ba18"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
