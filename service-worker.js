/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e0cbebc2b57bc47271883ff995792d7d"
  },
  {
    "url": "assets/css/0.styles.ced9da5e.css",
    "revision": "7467239fe39f40a24a8a6663792736a7"
  },
  {
    "url": "assets/img/home-bg.f5396e30.jpg",
    "revision": "f5396e308f85adecbf70b6f59918b5bb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.62580e6b.js",
    "revision": "0cfe31e9b4999e07131cc7a4623c62ab"
  },
  {
    "url": "assets/js/10.0079dd0e.js",
    "revision": "85b61b3f5e6c0a13f18b511269d4e1b4"
  },
  {
    "url": "assets/js/11.8f83923e.js",
    "revision": "79192cc97115411f97521a23dcac7b55"
  },
  {
    "url": "assets/js/12.48cc4011.js",
    "revision": "8bc3ade1270200749413185d3e634edb"
  },
  {
    "url": "assets/js/13.09749439.js",
    "revision": "554fe17b1cbcffab01282ecd1f870016"
  },
  {
    "url": "assets/js/14.5b831eda.js",
    "revision": "b3646929e68ac36352ba1755cbf5eb18"
  },
  {
    "url": "assets/js/15.fc033973.js",
    "revision": "02f150293324d3ef079c3295b2f19265"
  },
  {
    "url": "assets/js/16.0a1a86d1.js",
    "revision": "c53b87e75f7019a4de0cfd6765e5daca"
  },
  {
    "url": "assets/js/17.28eefe1d.js",
    "revision": "b669dd506cf7ea8dee7e908779fbdc07"
  },
  {
    "url": "assets/js/18.45305403.js",
    "revision": "24f96ccaf4ee7bd7dd977f59141572bc"
  },
  {
    "url": "assets/js/19.e20e39ea.js",
    "revision": "def22d2e9203b0f6b47b5a19bc3a9168"
  },
  {
    "url": "assets/js/20.03ce08dd.js",
    "revision": "cb1d33d96edd252bf6eb274ef5e6d941"
  },
  {
    "url": "assets/js/4.6ae7d6d4.js",
    "revision": "ea35b6cab7c8db878f191ccc407dcc87"
  },
  {
    "url": "assets/js/5.839a618d.js",
    "revision": "616bb88ad94bc34eb6d926ed6ed7ff4e"
  },
  {
    "url": "assets/js/6.b7114802.js",
    "revision": "f1a47fab5b4c9dcf8feae551860b150c"
  },
  {
    "url": "assets/js/7.4452f088.js",
    "revision": "81c9d09ecf31a41a794d89ef2974e06c"
  },
  {
    "url": "assets/js/8.97939c09.js",
    "revision": "1ff1b7aa51aeae670b7983b9231792f7"
  },
  {
    "url": "assets/js/9.da988c06.js",
    "revision": "cd8d79b6bbafde2c820830854e211702"
  },
  {
    "url": "assets/js/app.4d761857.js",
    "revision": "71c28458c859b8dd9b98d7fefaf981a3"
  },
  {
    "url": "assets/js/vendors~flowchart.58bf2d33.js",
    "revision": "ee17aadd8fbb01485c6df4c94543cc72"
  },
  {
    "url": "category/index.html",
    "revision": "6c70ab2b83652cab4820243c82c86d2a"
  },
  {
    "url": "category/前端.html",
    "revision": "0882b06a4b367cbaf27449398afc931c"
  },
  {
    "url": "category/后端.html",
    "revision": "5ad49dbaca68d234ae74e6a870eb3442"
  },
  {
    "url": "head.png",
    "revision": "cfc51491ac3345d14242a0d786706d51"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "cfc51491ac3345d14242a0d786706d51"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "cfc51491ac3345d14242a0d786706d51"
  },
  {
    "url": "images/debounce-1.gif",
    "revision": "b35eee9606eb5d20bfd91070d003c0e4"
  },
  {
    "url": "images/debounce-2.gif",
    "revision": "43b615eb23a0a9f27e121690646c5e06"
  },
  {
    "url": "images/debounce.gif",
    "revision": "e37876927e06ca1a7eed287da569b3c1"
  },
  {
    "url": "images/nginx.png",
    "revision": "080ec586313dfe41a063659d22bcdb68"
  },
  {
    "url": "images/skeleton.jpg",
    "revision": "ac23f64439d54c0a1a704a0a6d351260"
  },
  {
    "url": "images/throttle-1.gif",
    "revision": "5b5acc0f84a9cec9d0d6d9c7b7dd3c01"
  },
  {
    "url": "images/throttle-2.gif",
    "revision": "38588775db91d564c71cef2002c6b0ba"
  },
  {
    "url": "index.html",
    "revision": "2acdfa506d77fec705048ad0087dbc7c"
  },
  {
    "url": "tag/Git.html",
    "revision": "aabb4fa4576a37de9a305fc7480161df"
  },
  {
    "url": "tag/index.html",
    "revision": "ac16101159fa0cf469849bbaa99aea5b"
  },
  {
    "url": "tag/js.html",
    "revision": "1b03a01503754948b19e26af33caed92"
  },
  {
    "url": "tag/mysql.html",
    "revision": "aea83e6381657794c742b77e3a85eb3a"
  },
  {
    "url": "tag/nginx.html",
    "revision": "f755666ba1e16e3e44158d433de8bb88"
  },
  {
    "url": "tag/nuxt.html",
    "revision": "001db2fe39e4149356b16b70ab563b31"
  },
  {
    "url": "tag/vue.html",
    "revision": "9a4e50adc9c3f6913d6d8d804c6cd74a"
  },
  {
    "url": "tag/webpack.html",
    "revision": "b82a8373ce3991c015a8cf3fbf8aff63"
  },
  {
    "url": "timeLine/index.html",
    "revision": "307a40ad3d8ecfee945390627803d1ac"
  },
  {
    "url": "views/前端/fd.html",
    "revision": "2554d111a401bea34bedfcf6e27ca43f"
  },
  {
    "url": "views/前端/git.html",
    "revision": "23590b8cfd94b97db15de11f558dfad7"
  },
  {
    "url": "views/前端/nuxt-env.html",
    "revision": "c4a6a76b7ca75b677209523d23c780d2"
  },
  {
    "url": "views/前端/proxy.html",
    "revision": "d06b5ef449801b2237972c0d684cf033"
  },
  {
    "url": "views/前端/skeleton.html",
    "revision": "66f97cd1bc629f867a7b85ad112d3df6"
  },
  {
    "url": "views/前端/vscode.html",
    "revision": "bbd16f76432d052f8a2500a21b1f7730"
  },
  {
    "url": "views/后端/mysql.html",
    "revision": "44cbd4f9ade9488b60e2f63c03832e98"
  },
  {
    "url": "views/后端/nginx.html",
    "revision": "b8831244027f1829a1165fbbe5e495fd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
