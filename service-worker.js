"use strict";var precacheConfig=[["/ppgd/404.html","c898abe2c4ba12fe85d81a0d2af0083f"],["/ppgd/assets/themes/amsf-sckctranslate-comic/js/lightense.min.f0e0c96a.js","f0e0c96acb6eaa474f909ebdf4781b21"],["/ppgd/chapter10/273/index.html","74f2efc73deb2d8adf59dfe0dd150ad1"],["/ppgd/chapter10/274/index.html","e5127159f19df30f430fa483c76aa611"],["/ppgd/chapter10/275/index.html","00d6810aa567eca0d569bb0152c734d6"],["/ppgd/chapter10/276/index.html","9f90ae7aa3804e100d1defc9c162dace"],["/ppgd/chapter10/277/index.html","efbf49890acd0d8bee02a9c45e34af73"],["/ppgd/chapter10/278/index.html","0f2b2d72a6a86b60627bef1deaf2e206"],["/ppgd/chapter10/279/index.html","e830cd6c3f384b55c69c8062c33e8d1f"],["/ppgd/chapter10/280/index.html","db396ce791947660a63f7bc74ecaec4a"],["/ppgd/chapter10/281/index.html","f6500e9c7b63419c8b9ae21fc63a859c"],["/ppgd/chapter10/282/index.html","39da885e8d31fdb7c035259b3a17c2a3"],["/ppgd/chapter10/283/index.html","92b095b4e01d5b2c249c79bc48f75f6f"],["/ppgd/chapter10/284/index.html","5a9eea956970b8278b29ad8eab5d831d"],["/ppgd/chapter10/285/index.html","c322334d5decf0685efb6a04e8600b24"],["/ppgd/chapter10/286/index.html","7f43a1ed24060d914bec16059f85c1bb"],["/ppgd/chapter10/287/index.html","61d8b449cc5c57ff560c6daf3c90bec4"],["/ppgd/chapter10/288/index.html","e146a2ec77e618d09723f55172b812c5"],["/ppgd/chapter10/289/index.html","8f4794a06f7f459d1d0bce9cdd8a6fc5"],["/ppgd/chapter10/290/index.html","cd743f57e89216a7997b2338f6de1706"],["/ppgd/chapter10/291/index.html","e758be8e7978c27ba1863823524f7370"],["/ppgd/chapter10/292/index.html","e05b1585d83a3899a0eb4d6bfbbb129b"],["/ppgd/chapter10/293/index.html","4aa78d287e72ca4ed6bc1c2f765f5838"],["/ppgd/chapter10/294/index.html","aaa9a3714a33b268ee055741703660d3"],["/ppgd/chapter10/295/index.html","d7c7ae415dbbf0aacb3d27ef8e676724"],["/ppgd/chapter10/296/index.html","47fca4b73c8544e71dc8a382d2aa5c01"],["/ppgd/chapter10/297/index.html","a0fef31b2185bc6cabec035184673912"],["/ppgd/chapter10/298/index.html","0c3c78b31fab7e9a29a7dc6951853d6a"],["/ppgd/chapter10/299/index.html","262f4d48304d2c435fcfd4c8e07d5b9c"],["/ppgd/chapter10/300/index.html","b0682c20dc89e44cbf9cee234601838e"],["/ppgd/chapter10/301/index.html","b2234045b349babcf02cad517e8e257d"],["/ppgd/chapter10/302/index.html","737c98836558f92d8eaea9e05aa31725"],["/ppgd/chapter10/303/index.html","e71a5de1352732145be3023640fcf08e"],["/ppgd/chapter10/304/index.html","10872bf476d789edbd4e089a46386eb4"],["/ppgd/chapter10/305/index.html","ddd07f009da00035dde9f48ecb5b1a02"],["/ppgd/chapter10/306/index.html","175fe5770970a9d4aa7d5d06adf42a35"],["/ppgd/chapter10/307/index.html","09968b57eba379aba2ffd58b87ed7166"],["/ppgd/chapter10/308/index.html","2c1eeb6f207fcff728c36b90efb15002"],["/ppgd/chapter10/309/index.html","3922d575ca533051b7f3bfde229162db"],["/ppgd/chapter10/310/index.html","da9082d3664b0aaf819c6760be6054d5"],["/ppgd/chapter10/311/index.html","cccc620de8f4cc400781cc0d28ec1e7f"],["/ppgd/favicon.svg","1243ce6d48e0a7e0febe90fa60b3d37e"],["/ppgd/index.html","43fa5ae4f1842593a562f512929d75f1"],["/ppgd/mask-icon.svg","f410e111ad3dc3eced7d2353d098af33"],["/ppgd/settings/index.html","a6b5fbd864a17392c5d12a9f2ad7cd76"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,r){var a=new URL(e);return r&&a.pathname.match(r)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),a=createCacheKey(r,hashParamName,n,!1);return[r.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),e=urlsToCacheKeys.has(n));0,e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return fetch(t.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function c(o,i,s){function u(n,e){if(!i[n]){if(!o[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(h)return h(n,!0);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}var a=i[n]={exports:{}};o[n][0].call(a.exports,function(e){var t=o[n][1][e];return u(t||e)},a,a.exports,c,o,i,s)}return i[n].exports}for(var h="function"==typeof require&&require,e=0;e<s.length;e++)u(s[e]);return u}({1:[function(e,t,n){function s(e,t){(t=t||{}).debug||i.debug}function c(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function r(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var o,i=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:s,fetchAndCache:function(r,a){var t=(a=a||{}).successResponses||i.successResponses;return fetch(r.clone()).then(function(e){return"GET"===r.method&&t.test(e.status)&&c(a).then(function(n){n.put(r,e).then(function(){var e,t=a.cache||i.cache;(t.maxEntries||t.maxAgeSeconds)&&t.name&&(e=function(e,n,t){var r=e.url,a=t.maxAgeSeconds,c=t.maxEntries,o=t.name,i=Date.now();return s(),u.getDb(o).then(function(e){return u.setTimestampForUrl(e,r,i)}).then(function(e){return u.expireEntries(e,c,a,i)}).then(function(e){s();var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){s()})}).catch(function(e){s()})}.bind(null,r,n,t),o=o?o.then(e):e())})}),e.clone()})},openCache:c,renameCache:function(t,e,n){return s(0,n),caches.delete(e).then(function(){return Promise.all([caches.open(t),caches.open(e)]).then(function(e){var n=e[0],r=e[1];return n.keys().then(function(e){return Promise.all(e.map(function(t){return n.match(t).then(function(e){return r.put(t,e)})}))}).then(function(){return caches.delete(t)})})})},cache:function(t,e){return c(e).then(function(e){return e.add(t)})},uncache:function(t,e){return c(e).then(function(e){return e.delete(t)})},precache:function(e){e instanceof Promise||r(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",c=1,u="store",h="url",p="timestamp",o={};t.exports={getDb:function(e){return e in o||(o[e]=(r=e,new Promise(function(e,t){var n=indexedDB.open(a+r,c);n.onupgradeneeded=function(){n.result.createObjectStore(u,{keyPath:h}).createIndex(p,p,{unique:!1})},n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}}))),o[e];var r},setTimestampForUrl:function(r,a,c){return new Promise(function(e,t){var n=r.transaction(u,"readwrite");n.objectStore(u).put({url:a,timestamp:c}),n.oncomplete=function(){e(r)},n.onabort=function(){t(n.error)}})},expireEntries:function(e,n,t,r){return(o=e,i=t,s=r,i?new Promise(function(e,t){var r=1e3*i,a=[],n=o.transaction(u,"readwrite"),c=n.objectStore(u);c.index(p).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&s-r>t.value[p]){var n=t.value[h];a.push(n),c.delete(n),t.continue()}},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(t){return(r=e,s=n,s?new Promise(function(e,t){var a=[],n=r.transaction(u,"readwrite"),c=n.objectStore(u),o=c.index(p),i=o.count();o.count().onsuccess=function(){var r=i.result;s<r&&(o.openCursor().onsuccess=function(e){var t=e.target.result;if(t){var n=t.value[h];a.push(n),c.delete(n),r-a.length>s&&t.continue()}})},n.oncomplete=function(){e(a)},n.onabort=t}):Promise.resolve([])).then(function(e){return t.concat(e)});var r,s});var o,i,s}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var a=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){a.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(a.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";a.debug("install event fired"),a.debug("creating cache ["+t+"]"),e.waitUntil(a.openCache({cache:{name:t}}).then(function(t){return Promise.all(o.preCacheItems).then(r).then(a.validatePrecacheInput).then(function(e){return a.debug("preCache list: "+(e.join(", ")||"(none)")),t.addAll(e)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var a=new URL("./",self.location).pathname,c=e("path-to-regexp"),r=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=c(t,this.keys)),this.method=e,this.options=r,this.handler=n};r.prototype.makeHandler=function(e){var n;if(this.regexp){var r=this.regexp.exec(e);n={},this.keys.forEach(function(e,t){n[e.name]=r[t+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},t.exports=r},{"path-to-regexp":15}],6:[function(e,t,n){var u=e("./route"),h=e("./helpers"),i=function(e,t){for(var n=e.entries(),r=n.next(),a=[];!r.done;){new RegExp(r.value[0]).test(t)&&a.push(r.value[1]),r=n.next()}return a},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(r){a.prototype[r]=function(e,t,n){return this.add(r,e,t,n)}}),a.prototype.add=function(e,t,n,r){var a;r=r||{},t instanceof RegExp?a=RegExp:a=(a=r.origin||self.location.origin)instanceof RegExp?a.source:a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),e=e.toLowerCase();var c=new u(e,t,n,r);this.routes.has(a)||this.routes.set(a,new Map);var o=this.routes.get(a);o.has(e)||o.set(e,new Map);var i=o.get(e),s=c.regexp||c.fullUrlRegExp;i.has(s.source)&&h.debug('"'+t+'" resolves to same regex as existing route.'),i.set(s.source,c)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,a=n.pathname;return this._match(e,i(this.routes,r),a)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var a=t[r],c=a&&a.get(e.toLowerCase());if(c){var o=i(c,n);if(0<o.length)return o[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var c=e("../options"),o=e("../helpers");t.exports=function(r,e,a){return a=a||{},o.debug("Strategy: cache first ["+r.url+"]",a),o.openCache(a).then(function(e){return e.match(r).then(function(e){var t=a.cache||c.cache,n=Date.now();return o.isResponseFresh(e,t.maxAgeSeconds,n)?e:o.fetchAndCache(r,a)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),c=e("../helpers");t.exports=function(t,e,r){return r=r||{},c.debug("Strategy: cache only ["+t.url+"]",r),c.openCache(r).then(function(e){return e.match(t).then(function(e){var t=r.cache||a.cache,n=Date.now();if(c.isResponseFresh(e,t.maxAgeSeconds,n))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var u=e("../helpers"),h=e("./cacheOnly");t.exports=function(o,i,s){return u.debug("Strategy: fastest ["+o.url+"]",s),new Promise(function(t,n){var r=!1,a=[],c=function(e){a.push(e.toString()),r?n(new Error('Both cache and network failed: "'+a.join('", "')+'"')):r=!0},e=function(e){e instanceof Response?t(e):c("No result returned")};u.fetchAndCache(o.clone(),s).then(e,c),h(o,i,s).then(e,c)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var h=e("../options"),p=e("../helpers");t.exports=function(o,e,i){var s=(i=i||{}).successResponses||h.successResponses,u=i.networkTimeoutSeconds||h.networkTimeoutSeconds;return p.debug("Strategy: network first ["+o.url+"]",i),p.openCache(i).then(function(e){var t,n,r=[];if(u){var a=new Promise(function(a){t=setTimeout(function(){e.match(o).then(function(e){var t=i.cache||h.cache,n=Date.now(),r=t.maxAgeSeconds;p.isResponseFresh(e,r,n)&&a(e)})},1e3*u)});r.push(a)}var c=p.fetchAndCache(o,i).then(function(e){if(t&&clearTimeout(t),s.test(e.status))return e;throw p.debug("Response was an HTTP error: "+e.statusText,i),n=e,new Error("Bad response")}).catch(function(t){return p.debug("Network or response error, fallback to cache ["+o.url+"]",i),e.match(o).then(function(e){if(e)return e;if(n)return n;throw t})});return r.push(c),Promise.race(r)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),a=e("./router"),c=e("./helpers"),o=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:a,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function c(e,t){for(var n,r=[],a=0,c=0,o="",i=t&&t.delimiter||"/";null!=(n=k.exec(e));){var s=n[0],u=n[1],h=n.index;if(o+=e.slice(c,h),c=h+s.length,u)o+=u[1];else{var p=e[c],f=n[2],d=n[3],l=n[4],m=n[5],g=n[6],b=n[7];o&&(r.push(o),o="");var x=null!=f&&null!=p&&p!==f,v="+"===g||"*"===g,w="?"===g||"*"===g,y=n[2]||i,E=l||m;r.push({name:d||a++,prefix:f||"",delimiter:y,optional:w,repeat:v,partial:x,asterisk:!!b,pattern:E?(R=E,R.replace(/([=!:$\/()])/g,"\\$1")):b?".*":"[^"+C(y)+"]+?"})}}var R;return c<e.length&&(o+=e.substr(c)),o&&r.push(o),r}function f(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function r(h){for(var p=new Array(h.length),e=0;e<h.length;e++)"object"==typeof h[e]&&(p[e]=new RegExp("^(?:"+h[e].pattern+")$"));return function(e,t){for(var n="",r=e||{},a=(t||{}).pretty?f:encodeURIComponent,c=0;c<h.length;c++){var o=h[c];if("string"!=typeof o){var i,s=r[o.name];if(null==s){if(o.optional){o.partial&&(n+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(m(s)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(s)+"`");if(0===s.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var u=0;u<s.length;u++){if(i=a(s[u]),!p[c].test(i))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(i)+"`");n+=(0===u?o.prefix:o.delimiter)+i}}else{if(i=o.asterisk?encodeURI(s).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}):a(s),!p[c].test(i))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+i+'"');n+=o.prefix+i}}else n+=o}return n}}function C(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function d(e,t){return e.keys=t,e}function l(e){return e.sensitive?"":"i"}function o(e,t,n){m(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,a=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=C(i);else{var s=C(i.prefix),u="(?:"+i.pattern+")";t.push(i),i.repeat&&(u+="(?:"+s+u+")*"),c+=u=i.optional?i.partial?s+"("+u+")?":"(?:"+s+"("+u+"))?":s+"("+u+")"}}var h=C(n.delimiter||"/"),p=c.slice(-h.length)===h;return r||(c=(p?c.slice(0,-h.length):c)+"(?:"+h+"(?=$))?"),c+=a?"$":r&&p?"":"(?="+h+"|$)",d(new RegExp("^"+c,l(n)),t)}function i(e,t,n){return m(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return d(e,t)}(e,t):m(e)?function(e,t,n){for(var r=[],a=0;a<e.length;a++)r.push(i(e[a],t,n).source);return d(new RegExp("(?:"+r.join("|")+")",l(n)),t)}(e,t,n):(r=t,o(c(e,a=n),r,a));var r,a}var m=e("isarray");t.exports=i,t.exports.parse=c,t.exports.compile=function(e,t){return r(c(e,t))},t.exports.tokensToFunction=r,t.exports.tokensToRegExp=o;var k=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&46<=r||"Chrome"===n&&50<=r)||(Cache.prototype.addAll=function(n){function r(e){this.name="NetworkError",this.code=19,this.message=e}var a=this;return r.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return n=n.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(n.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new r("Invalid scheme");return fetch(e.clone())}))}).then(function(e){if(e.some(function(e){return!e.ok}))throw new r("Incorrect response status");return Promise.all(e.map(function(e,t){return a.put(n[t],e)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get("/ppgd/assets/img/comic/*",toolbox.cacheFirst,{cache:{name:"comic-cache"}});