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
    "revision": "67e7692d1a9c46d61e17bde19c6e2916"
  },
  {
    "url": "assets/css/0.styles.bfd62ff8.css",
    "revision": "ae2091e16a740727342387df46a4b4d6"
  },
  {
    "url": "assets/img/1653118922924.72d846fb.png",
    "revision": "72d846fb69746976a4d772fb9e591d71"
  },
  {
    "url": "assets/img/1653119053628.69b5bb13.png",
    "revision": "69b5bb133d2236a6f2c6c21ddda32313"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.dc249f0d.js",
    "revision": "f88db81f1490c1bf9cb1954ef5a22916"
  },
  {
    "url": "assets/js/10.d10610c8.js",
    "revision": "836497a38a27bf5db1a48f30041fe407"
  },
  {
    "url": "assets/js/11.33b30a0f.js",
    "revision": "c5d77b4e9dae057a61844604f8208efa"
  },
  {
    "url": "assets/js/12.fced2c12.js",
    "revision": "ab3dbdd7e83c1fc6c1b08e9255d2c46c"
  },
  {
    "url": "assets/js/13.bff2f6f1.js",
    "revision": "aba9309664b6053e8ecd2cf4bab11534"
  },
  {
    "url": "assets/js/14.fdc441ec.js",
    "revision": "7b382a5036090ca56dce261a626b1b25"
  },
  {
    "url": "assets/js/15.e27f17ab.js",
    "revision": "a88996ccf4c3f68cb87b871af4b9508f"
  },
  {
    "url": "assets/js/16.5a75a2c3.js",
    "revision": "3042d1bb776ed10563893caa0a91795b"
  },
  {
    "url": "assets/js/17.dd193ebd.js",
    "revision": "e3fb2bbb5001b416e29d8a4affddd393"
  },
  {
    "url": "assets/js/18.de7aff97.js",
    "revision": "78328d695262a92168ec7ab854e4f46d"
  },
  {
    "url": "assets/js/19.cabb913e.js",
    "revision": "61fcc4297fcc7f6047bcef2f66294729"
  },
  {
    "url": "assets/js/20.6a749a5f.js",
    "revision": "f97bb5d2499b632aacd7f17838440e37"
  },
  {
    "url": "assets/js/4.4c66f604.js",
    "revision": "714e7b36b9de66e33e53bb396952ec30"
  },
  {
    "url": "assets/js/5.100d5132.js",
    "revision": "ad141846ac747e392ac487061e559e54"
  },
  {
    "url": "assets/js/6.227915fd.js",
    "revision": "623c54afc9eff21ae031ab083e773696"
  },
  {
    "url": "assets/js/7.c2dba610.js",
    "revision": "06c765ef2e159c5d46c3c69fb567d25b"
  },
  {
    "url": "assets/js/8.a817e610.js",
    "revision": "0c18dfa311029dba46636e491351d623"
  },
  {
    "url": "assets/js/9.27ba5421.js",
    "revision": "13009a376267a8c404b4d2dee252e1fd"
  },
  {
    "url": "assets/js/app.cbc4161a.js",
    "revision": "0caf1b4c8803f365162b2bd89434b372"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.fe7c321e.js",
    "revision": "a64ebb2f4c1ee386f2eed5d866fffdab"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "categories/index.html",
    "revision": "3eca689abd3baeba6f6ac6d2184a6016"
  },
  {
    "url": "categories/java/index.html",
    "revision": "31f0da48479199b78ee3e1f5f8464817"
  },
  {
    "url": "categories/Java基础/index.html",
    "revision": "1c3111cacbff9b12f586ba2496145f35"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "dcddf7ae14a4570955fee576f5344094"
  },
  {
    "url": "categories/基础/index.html",
    "revision": "a5df43d64a2aa84bc0c751b61b6512a9"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "74341fb802e9ff2c1c7f099e4338d245"
  },
  {
    "url": "css/style.css",
    "revision": "39c01ea221ce5c081bd90d5b14bf6603"
  },
  {
    "url": "guide/index.html",
    "revision": "1b7b5668f21ad06066f0141e42fef94c"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "b35e54e85218c085de994fdcdd7726bf"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "4f6f15a9df6a218e3828d4c8fdf6705d"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "1087af86439d16d5fd38b37e55a4f4cf"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "5fae1e38997eb8366b7338077c2daca2"
  },
  {
    "url": "tags/JavaSE/index.html",
    "revision": "510cd763325f0b79ac4513127bdc9675"
  },
  {
    "url": "tags/Java基础/index.html",
    "revision": "c52fdb0fedb355d62a97a349fab1fde4"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3af30d9d3ddffda280693bee81268c64"
  },
  {
    "url": "tags/Spring/index.html",
    "revision": "d8a774d844bdfd7f3af2f85e32320bd6"
  },
  {
    "url": "tags/SpringBoot/index.html",
    "revision": "25639312ff079d33fc2144d0b7c57d33"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "ccf36b9695189b2c12025b4838504529"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "f2ef257067a465ea5ac89c233513212c"
  },
  {
    "url": "tags/基础/index.html",
    "revision": "b19e1c25a59e2af7a111a300c0e40b1c"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "e48152f9d423ce80eebd8c3b91d03ee5"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "f34496ae10fb996dd6e3145615559283"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "5c5468c2e0ddc43a25432093a7a4e1e5"
  },
  {
    "url": "tags/面向对象/index.html",
    "revision": "c68410582e8fd644df0e85554189718f"
  },
  {
    "url": "timeline/index.html",
    "revision": "e4788d7019901be87487705fee327c14"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "技术文章/index.html",
    "revision": "e044c81e75e37044c6bf16fbc24d6ab9"
  },
  {
    "url": "技术文章/java/javase.html",
    "revision": "807555fe53ede67f0493772920da5b93"
  },
  {
    "url": "技术文章/java高级/javaee.html",
    "revision": "1a1ef328b5b82f32d0882b0d6a7a7a2f"
  },
  {
    "url": "技术文章/vue/vue01.html",
    "revision": "2b846c23ab922f3ce998bf93deba05d6"
  },
  {
    "url": "技术文章/基础/Git的使用方法.html",
    "revision": "60e567e701697209d1e7ff5500246fc9"
  },
  {
    "url": "技术文章/基础/七层模型.html",
    "revision": "aebb1ab7b552cef31c9eb325f66a96bc"
  },
  {
    "url": "生活分享/life.html",
    "revision": "75291a8ac6f9475e4f6f867ece2f8e2f"
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
