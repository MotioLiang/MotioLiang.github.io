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
    "revision": "8f57d034ad2a1d80d71cd3e50ff2cff9"
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
    "url": "assets/js/13.c1b0a140.js",
    "revision": "d8523f6c0c64ea1a5d25f98275789598"
  },
  {
    "url": "assets/js/14.46661218.js",
    "revision": "c0f25cd2dacd7cea38fd214806641405"
  },
  {
    "url": "assets/js/15.858b48de.js",
    "revision": "b35230ce53cbd52f089187f0f5af054e"
  },
  {
    "url": "assets/js/16.0a1a86d1.js",
    "revision": "c53b87e75f7019a4de0cfd6765e5daca"
  },
  {
    "url": "assets/js/17.67a53655.js",
    "revision": "68091b7fb9589809f37c87a0bd4a3c16"
  },
  {
    "url": "assets/js/18.ee07b83c.js",
    "revision": "bd0af9fc8529729f199e1b427ae921ec"
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
    "url": "assets/js/app.848e41fb.js",
    "revision": "364b107d998ad9b511eef41d1c712255"
  },
  {
    "url": "assets/js/vendors~flowchart.58bf2d33.js",
    "revision": "ee17aadd8fbb01485c6df4c94543cc72"
  },
  {
    "url": "category/index.html",
    "revision": "a34d297f29f7a8ecca9654c1724d8f74"
  },
  {
    "url": "category/前端.html",
    "revision": "a8952bb86b34cfaf1008b3b2973f8472"
  },
  {
    "url": "category/后端.html",
    "revision": "76be4c22874d28362a5bd92e30be0bcd"
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
    "revision": "760ebae07e7ca71aeb271352ace2f165"
  },
  {
    "url": "tag/Git.html",
    "revision": "623213ffcabeced953c9f8a9325ba36d"
  },
  {
    "url": "tag/index.html",
    "revision": "ec1e3efe202e305792f416ef8bfc7e13"
  },
  {
    "url": "tag/js.html",
    "revision": "4b9ed53a30025f358dfdaac4930afd9e"
  },
  {
    "url": "tag/mysql.html",
    "revision": "149d8ff0ecbaf4e4566f829b2fefa364"
  },
  {
    "url": "tag/nginx.html",
    "revision": "15caf760f272a946f25458ab229080d1"
  },
  {
    "url": "tag/nuxt.html",
    "revision": "acc0ae8a533650ad0af6aa2aa97c0cd8"
  },
  {
    "url": "tag/vue.html",
    "revision": "d42f879add4d70feba43b188cb8f2386"
  },
  {
    "url": "tag/webpack.html",
    "revision": "300d39c3d32764afec8a60c1aa8b1554"
  },
  {
    "url": "timeLine/index.html",
    "revision": "844581f7a399e4f9cde65a2c84bf3ffe"
  },
  {
    "url": "views/前端/fd.html",
    "revision": "19d4ecd8a9b95d602b351315d322836c"
  },
  {
    "url": "views/前端/git.html",
    "revision": "cd3682b55f0dd078668196dc4134a1b5"
  },
  {
    "url": "views/前端/nuxt-env.html",
    "revision": "7a41019987af10b05221740a0f0b8fa1"
  },
  {
    "url": "views/前端/proxy.html",
    "revision": "18277216b8db3af98d01de155c51bef5"
  },
  {
    "url": "views/前端/skeleton.html",
    "revision": "0b612724587df6f02bef131ffdebbb39"
  },
  {
    "url": "views/前端/vscode.html",
    "revision": "1665e5c4a4c6f8aa07709f33163b033f"
  },
  {
    "url": "views/后端/mysql.html",
    "revision": "d8bd6916449a2df0046e4af773b61357"
  },
  {
    "url": "views/后端/nginx.html",
    "revision": "4b5ea1a30f249323a28960119a5dafdb"
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
