/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","9cab8594240908225044e3268ad2e10e"],["/about/index.html","0b8a0e8167e46370a339f781f9a137f9"],["/archives/2020/03/index.html","bf632a81cd7366df6e69e0275f119017"],["/archives/2020/07/index.html","84015f0a93fc79b0353b6614cba0e0bc"],["/archives/2020/08/index.html","ece60bb60f5861b100300a1e43c0b73c"],["/archives/2020/10/index.html","6ece700fef9dd752728f354249479756"],["/archives/2020/index.html","94cf3803508432c6bb860ea3ba49e0e7"],["/archives/2021/01/index.html","88e3fd02af08eed5329a9e42a08cd971"],["/archives/2021/index.html","e11c81e8393d0b152899dae3a8e50974"],["/archives/index.html","3ed87e3f09b82c7d8971b613f9cac268"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/categories/C/index.html","4a1bcf1eacef446dbab6cd6e88fbdabe"],["/categories/index.html","d0015f368d1e8b5d91a08fdf63cac0ca"],["/categories/数学/index.html","b28633740729936e75ff324975e9a1f3"],["/categories/数论/index.html","4f56cceaeaa9af579d8ef20919363ec1"],["/categories/语文/index.html","2b66f84d9c00719f958ae57acfd61581"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","470c5530863ca7cf62afc34d583227b9"],["/dist/APlayer.min.css","6008986f7136cd2c1379cb72c4be4466"],["/dist/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/dist/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/dist/music.js","909216d473a867abc679ac871048f00c"],["/dist/video.js","41c38ef97719d5d95fead14d59d3bbdf"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/back.jpg","f0643747ff089b72f0a7afb0517f2be1"],["/images/background.jpg","ec0fe34b738b78282723efcaae44df37"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/lazy.gif","2079c25481d062cc0b002d53c6f7197f"],["/images/linkcard.png","f5be11032b7cf1dd190735411a1434e6"],["/images/loading.gif","9d21c1b84eb8ebcf6bf79c3b3cdf411b"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/m16.png","3d3437efe75814ea2437567d27babfb2"],["/images/m32.png","b1d7be087f94b8f1e60c070c417fce1d"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/images/time.png","8400c91526ab3ed0f80897fda037b9be"],["/index.html","46a7d1591db3dfc70ffcb4484782f0f0"],["/js/activate-power-mode.min.js","b1e237aef80ed7a74f443be0d5dbb6e0"],["/js/cursor/fireworks.js","0e16ac0099b90bd21cd75432570f8e89"],["/js/src/Valine.min.js","f6b0a2e37235c4512809ad5a5d0380f8"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/av-min.js","7decd7d8ad2ecdad9aa8168ee8485524"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/bubble.js","4dfe41596f739dbd28aa14be55b6195e"],["/js/src/clipboard-use.js","530cd7d6505b220c870ba6da8fa0e927"],["/js/src/clipboard.js","322550af05c3fae306b349dfc7cda010"],["/js/src/clipboard.min.js","8b7aed6f069f0cf58eeae353cd2f898b"],["/js/src/dytitle.js","4aad8e8c4e0e8796094fa9ce657bd45a"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/linkcard.js","270333d1815f72d2180d4d04186b21e0"],["/js/src/motion.js","0f6add86607c451269d0b3d286c84d8b"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","125967b375947ba002af00f6c266ca6d"],["/lib/404/404.css","b8ab71ab13a86427e3e3b2b6ab12572d"],["/lib/404/404.js","62f4b4dd57778064c7d63bc45688155f"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","7bebdd553fd3fce972125b71a725d999"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","8c0a97bc4da431eddb62c1912b931541"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/about/main.css","98a54b58f0ae1d6da7bd2bf94aa40ce7"],["/lib/algolia-instant-search/instantsearch.min.css","a609569cdf1d1d1a61c8f512ae8afabe"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/chart/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/lib/codeBlock/clipboard.min.js","1966cb60578270e18911c7ed407f04bb"],["/lib/codeBlock/codeBlockFuction.js","bf33c88a42d85b9c9be1bf4230ece018"],["/lib/codeBlock/codeCopy.js","424a3e34d59c29032dcd1769d798373a"],["/lib/codeBlock/codeLang.js","fb0fa9c5d52bcf27c6222548fa11aa60"],["/lib/codeBlock/codeShrink.js","dc2fb5f9bfed6b561109402152b13c98"],["/lib/darkmode-js/CHANGELOG.html","93e1f63f1302f8e75c53a23753e5da60"],["/lib/darkmode-js/README.html","c03518f47a7c4e375fa9cdf47e71dbef"],["/lib/darkmode-js/lib/darkmode-js.js","3bb7c2b7f231e9ca7c495942a37b2615"],["/lib/darkmode-js/lib/darkmode-js.min.js","d55836f30c097da753179f82fa6f108f"],["/lib/darkmode-js/src/darkmode.js","a1c09bb93f2fcc7f58a6b53b37c8ccfc"],["/lib/darkmode-js/src/index.js","365c7ca32de6e6f79f95bdce51490708"],["/lib/darkmode-js/test/index.html","fe85fd6c26cda268f7035c4b39c606db"],["/lib/darkmode-js/test/index.spec.js","cd215690f7518b759f0ca01f5f281ff8"],["/lib/darkmode-js/webpack.config.js","ff80e43d85b42d5ca7c661e3a9f6fb65"],["/lib/fancybox/README.html","737435a8d7486d652a64c7568ceca532"],["/lib/fancybox/source/jquery.fancybox.css","be2a608aff5a2731d8b2c39e91dea1b1"],["/lib/fancybox/source/jquery.fancybox.min.css","c50f956e6c668a1a193f2031f54b143e"],["/lib/fancybox/source/jquery.fancybox.min.js","49a6b4d019a934bcf83f0c397eba82d8"],["/lib/fancybox/source/jquery.fancybox.pack.js","b63c7cca1b5e4bd57bd854c444b895c9"],["/lib/fastclick/README.html","06f0a7d16d6f097a59125764a77d96ff"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","fa67b2b0c4cf926c3fcfa4d68372d807"],["/lib/font-awesome/css/font-awesome.min.css","fa67b2b0c4cf926c3fcfa4d68372d807"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","649b021ed20b631450a24d0eda86db55"],["/lib/jquery_lazyload/README.html","d0120e6cbdd3dcd011627ae76b9790ba"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/README.html","9fa4fab5e59e2dac37f1a85d02baf423"],["/lib/needsharebutton/needsharebutton.css","9609b63675e5edc0a75277ed26e6a765"],["/lib/needsharebutton/needsharebutton.js","1595f4ed0515d2e58b4214b255120304"],["/lib/pace/pace-theme-barber-shop.min.css","9a8da0ada7106a53ac2222e9ac71d725"],["/lib/pace/pace-theme-big-counter.min.css","bbe46f55a0cd487c03738ef1e5d2105b"],["/lib/pace/pace-theme-bounce.min.css","eaa58bd28da4c794bcd8f46af0c28ff9"],["/lib/pace/pace-theme-center-atom.min.css","bb5b939b4d5160462d5b71487b588cc7"],["/lib/pace/pace-theme-center-circle.min.css","e64e4169f865a0e37aceeb2512bf74d9"],["/lib/pace/pace-theme-center-radar.min.css","ccb1ff9b065cdddc6aace629dc70bc42"],["/lib/pace/pace-theme-center-simple.min.css","79ae4ee73155af171e8e23914cd5b944"],["/lib/pace/pace-theme-corner-indicator.min.css","b0fb310d109010ef9b2dd0e8000774c1"],["/lib/pace/pace-theme-fill-left.min.css","0d19275984cff9731bd5def2edd93d61"],["/lib/pace/pace-theme-flash.min.css","936fee0615a299227dae5956a4b852c7"],["/lib/pace/pace-theme-loading-bar.min.css","0a53f12cb69d1d948fd7ca5be0ae7d62"],["/lib/pace/pace-theme-mac-osx.min.css","5b67419bf7b81413b85eedcf2a7f578a"],["/lib/pace/pace-theme-minimal.min.css","2c8a495e9e3959c99477c97c0c15b74e"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/sponsor-page/images/AliPayQR.png","1b47ef6937369a69d36826867d357526"],["/lib/sponsor-page/images/QQPayOR.png","9e3b43a52c0a81ac929edb08e76a95c3"],["/lib/sponsor-page/images/WeChanQR.png","2fb07d2a472d869c72f9d2345a159061"],["/lib/sponsor-page/images/WeChanSQ.png","1657f0cd8a6278a6dbe62055031cb04e"],["/lib/sponsor-page/images/alipay.svg","9239702087add999b29eda6c69b7fac3"],["/lib/sponsor-page/images/bitcoin.svg","0d6e2ad44ed9a1ebb8a740ecf27916c0"],["/lib/sponsor-page/images/github.svg","23fc8f81f92bb2981d8f9e089d7df14a"],["/lib/sponsor-page/images/like.svg","335eff6a0aefd9ce25d8624c9cae2f54"],["/lib/sponsor-page/images/paypal.svg","96fa023e7e12051f7585b6fe4da53daf"],["/lib/sponsor-page/images/wechat.svg","f9bcef76a75dae0e4fe6bf3d3af1cad3"],["/lib/sponsor-page/script.js","0f8d19d8174046bb2fe10c3a31d174d2"],["/lib/sponsor-page/style.css","3f822ae437b1ea71e438f29fbb0c5995"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","93ec81c9886509bd13c58eb8265e8334"],["/live2d-widget/autoload.js","55dbd7eab5251693221263f2c744b2cb"],["/live2d-widget/live2d.min.js","c1c28f553095fdddb4d2c13a11bd4cb9"],["/live2d-widget/waifu-tips.js","5431921d44678875513ef4657181801f"],["/live2d-widget/waifu.css","9940a92158507ffcc4f68be27a8e2987"],["/photos/index.html","8ab1c0bb09a14f6f82d3c0f6a6cb5f00"],["/posts/16107/index.html","6208721aaf7d4f20223657340c60a596"],["/posts/1879f8e5/index.html","0f313d489a85ee3d77341f2d85238688"],["/posts/62599/index.html","9b3728dc519a351100358fad52827518"],["/posts/a220/index.html","a500bdb7a7eaf4902953ce8c9f11826f"],["/posts/b04da4d7/index.html","989c7b59dfb337e1c0e64718b44a38c4"],["/posts/b8830db8/index.html","5869763f9813e6e61dcea89edc2f841a"],["/posts/e21acd07/index.html","6de4602024d8398ff5c9b4c2ece7e40c"],["/sw-register.js","fffb7b54e42ead52b5f890c3c355409b"],["/tags/STL/index.html","7547556607546307f5f7f3032a2bb002"],["/tags/index.html","b86fbd3da8d955816d3b5ece372f390c"],["/tags/名著/index.html","38b115113ca9cef3de67899348198e14"],["/tags/数学公式/index.html","449afd0c3141273b9875ea39144baf63"],["/tags/整除/index.html","f51b386157bfc0b4556e93e43e018d2e"],["/tags/问题/index.html","1597b0f7b0a13e0e8169bbe8305ff1fa"],["/tools/index.html","2d68b2c967c8cc42ce21e35374710445"],["/top/index.html","c27d0a859f9b4a1df6d6fe5bd84848cf"],["/uploads/av.jpg","f5be11032b7cf1dd190735411a1434e6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
