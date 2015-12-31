!function e(t,n,r){function o(a,u){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!u&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){"use strict";var r=e("webworkify"),o=e("main-loop"),i=r(e("./worker.thread")),a=e("../views/index"),u=document.getElementById("app"),s=o({url:window.location.pathname,count:0},a,{create:e("virtual-dom/create-element"),diff:e("virtual-dom/diff"),patch:e("virtual-dom/patch")});window.requestAnimationFrame(function(){u.replaceChild(s.target,u.firstChild)}),i.onmessage=function(e){var t=e.data;console.log(t);var n=t.url;s.update(t),window.location.pathname!==n&&window.history.pushState(null,null,n)},i.postMessage({type:"start",payload:{url:window.location.pathname}}),window.addEventListener("popstate",function(){i.postMessage({type:"setUrl",payload:window.location.pathname})}),document.body.addEventListener("click",function(e){var t=e.target.pathname;if(t)return e.preventDefault(),void i.postMessage({type:"setUrl",payload:t});var n=e.target.getAttribute("data-click");n&&(e.preventDefault(),i.postMessage({type:n}))})},{"../views/index":48,"./worker.thread":2,"main-loop":14,"virtual-dom/create-element":18,"virtual-dom/diff":19,"virtual-dom/patch":21,webworkify:44}],2:[function(e,t,n){"use strict";t.exports=function(e){var t={count:0};e.onmessage=function(n){var r=n.data,o=r.type,i=r.payload,a={start:function(){t.url=i.url},setUrl:function(){t.url=i},increment:function(){t.count++},decrement:function(){t.count--}};a[o](),e.postMessage(t)}}},{}],3:[function(e,t,n){},{}],4:[function(e,t,n){t.exports=function(e){var t,n=String.prototype.split,r=/()??/.exec("")[1]===e;return t=function(t,o,i){if("[object RegExp]"!==Object.prototype.toString.call(o))return n.call(t,o,i);var a,u,s,c,f=[],l=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.extended?"x":"")+(o.sticky?"y":""),p=0,o=new RegExp(o.source,l+"g");for(t+="",r||(a=new RegExp("^"+o.source+"$(?!\\s)",l)),i=i===e?-1>>>0:i>>>0;(u=o.exec(t))&&(s=u.index+u[0].length,!(s>p&&(f.push(t.slice(p,u.index)),!r&&u.length>1&&u[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)arguments[t]===e&&(u[t]=e)}),u.length>1&&u.index<t.length&&Array.prototype.push.apply(f,u.slice(1)),c=u[0].length,p=s,f.length>=i)));)o.lastIndex===u.index&&o.lastIndex++;return p===t.length?(c||!o.test(""))&&f.push(""):f.push(t.slice(p)),f.length>i?f.slice(0,i):f}}()},{}],5:[function(e,t,n){function r(){f=!1,u.length?c=u.concat(c):l=-1,c.length&&o()}function o(){if(!f){var e=setTimeout(r);f=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,f=!1,clearTimeout(e)}}function i(e,t){this.fun=e,this.array=t}function a(){}var u,s=t.exports={},c=[],f=!1,l=-1;s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new i(e,t)),1!==c.length||f||setTimeout(o,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=a,s.addListener=a,s.once=a,s.off=a,s.removeListener=a,s.removeAllListeners=a,s.emit=a,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],6:[function(e,t,n){function r(e){return e&&"object"==typeof e?s(e)||c(e)?e:u(e)?i(e,r):a(l(e),function(t,n){var i=o(n);return t[i]=r(e[n]),t},{}):e}function o(e){return e.replace(/[_.-](\w|$)/g,function(e,t){return t.toUpperCase()})}function i(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}function a(e,t,n){if(e.reduce)return e.reduce(t,n);for(var r=0;r<e.length;r++)n=t(n,e[r],r);return n}t.exports=function(e){return"string"==typeof e?o(e):r(e)};var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},s=function(e){return"[object Date]"===Object.prototype.toString.call(e)},c=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},f=Object.prototype.hasOwnProperty,l=Object.keys||function(e){var t=[];for(var n in e)f.call(e,n)&&t.push(n);return t}},{}],7:[function(e,t,n){function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)o.call(n,r)&&(e[r]=n[r])}return e}t.exports=r;var o=Object.prototype.hasOwnProperty},{}],8:[function(e,t,n){function r(e){function t(t){var r=new Error;Object.defineProperty(r,"type",{value:r.type,enumerable:!0,writable:!0,configurable:!0});var o=a({},e,t);return a(r,o),r.message=i(n,o),r}if(!e)throw new Error("args is required");if(!e.type)throw new Error("args.type is required");if(!e.message)throw new Error("args.message is required");var n=e.message;if(e.type&&!e.name){var r=o(e.type)+"Error";e.name=r[0].toUpperCase()+r.substr(1)}return a(t,e),t._name=e.name,t}var o=e("camelize"),i=e("string-template"),a=e("xtend/mutable");t.exports=r},{camelize:6,"string-template":17,"xtend/mutable":7}],9:[function(e,t,n){"use strict";function r(e){var t=e[a];return t||(t=e[a]={}),t}var o=e("individual/one-version"),i="7";o("ev-store",i);var a="__EV_STORE_KEY@"+i;t.exports=r},{"individual/one-version":12}],10:[function(e,t,n){(function(n){var r="undefined"!=typeof n?n:"undefined"!=typeof window?window:{},o=e("min-document");if("undefined"!=typeof document)t.exports=document;else{var i=r["__GLOBAL_DOCUMENT_CACHE@4"];i||(i=r["__GLOBAL_DOCUMENT_CACHE@4"]=o),t.exports=i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"min-document":3}],11:[function(e,t,n){(function(e){"use strict";function n(e,t){return e in r?r[e]:(r[e]=t,t)}var r="undefined"!=typeof window?window:"undefined"!=typeof e?e:{};t.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],12:[function(e,t,n){"use strict";function r(e,t,n){var r="__INDIVIDUAL_ONE_VERSION_"+e,i=r+"_ENFORCE_SINGLETON",a=o(i,t);if(a!==t)throw new Error("Can only have one copy of "+e+".\nYou already have version "+a+" installed.\nThis means you cannot install version "+t);return o(r,n)}var o=e("./index.js");t.exports=r},{"./index.js":11}],13:[function(e,t,n){"use strict";t.exports=function(e){return"object"==typeof e&&null!==e}},{}],14:[function(e,t,n){function r(e,t,n){function r(e){if(d)throw a({diff:e._diff,stringDiff:JSON.stringify(e._diff)});null!==u||l||(l=!0,o(i)),u=e,h.state=e}function i(){if(l=!1,null!==u){d=!0;var e=t(u);if(n.createOnly)d=!1,s(e,n);else{var r=c(p,e,n);d=!1,v=f(v,r,n)}p=e,u=null}}n=n||{};var u=e,s=n.create,c=n.diff,f=n.patch,l=!1,p=n.initialTree||t(u),v=n.target||s(p,n),d=!1;u=null;var h={state:e,target:v,update:r};return h}var o=e("raf"),i=e("error/typed"),a=i({type:"main-loop.invalid.update.in-render",message:"main-loop: Unexpected update occurred in loop.\nWe are currently rendering a view, you can't change state right now.\nThe diff is: {stringDiff}.\nSUGGESTED FIX: find the state mutation in your view or rendering function and remove it.\nThe view should not have any side effects.\n",diff:null,stringDiff:null});t.exports=r},{"error/typed":8,raf:16}],15:[function(e,t,n){(function(e){(function(){var n,r,o;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:"undefined"!=typeof e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},r=e.hrtime,n=function(){var e;return e=r(),1e9*e[0]+e[1]},o=n()):Date.now?(t.exports=function(){return Date.now()-o},o=Date.now()):(t.exports=function(){return(new Date).getTime()-o},o=(new Date).getTime())}).call(this)}).call(this,e("_process"))},{_process:5}],16:[function(e,t,n){for(var r=e("performance-now"),o="undefined"==typeof window?{}:window,i=["moz","webkit"],a="AnimationFrame",u=o["request"+a],s=o["cancel"+a]||o["cancelRequest"+a],c=!0,f=0;f<i.length&&!u;f++)u=o[i[f]+"Request"+a],s=o[i[f]+"Cancel"+a]||o[i[f]+"CancelRequest"+a];if(!u||!s){c=!1;var l=0,p=0,v=[],d=1e3/60;u=function(e){if(0===v.length){var t=r(),n=Math.max(0,d-(t-l));l=n+t,setTimeout(function(){var e=v.slice(0);v.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(l)}catch(n){setTimeout(function(){throw n},0)}},Math.round(n))}return v.push({handle:++p,callback:e,cancelled:!1}),p},s=function(e){for(var t=0;t<v.length;t++)v[t].handle===e&&(v[t].cancelled=!0)}}t.exports=function(e){return c?u.call(o,function(){try{e.apply(this,arguments)}catch(t){setTimeout(function(){throw t},0)}}):u.call(o,e)},t.exports.cancel=function(){s.apply(o,arguments)}},{"performance-now":15}],17:[function(e,t,n){function r(e){var t;return t=2===arguments.length&&"object"==typeof arguments[1]?arguments[1]:i.call(arguments,1),t&&t.hasOwnProperty||(t={}),e.replace(o,function(n,r,o){var i;return"{"===e[o-1]&&"}"===e[o+n.length]?r:(i=t.hasOwnProperty(r)?t[r]:null,null===i||void 0===i?"":i)})}var o=/\{([0-9a-zA-Z]+)\}/g,i=Array.prototype.slice;t.exports=r},{}],18:[function(e,t,n){var r=e("./vdom/create-element.js");t.exports=r},{"./vdom/create-element.js":23}],19:[function(e,t,n){var r=e("./vtree/diff.js");t.exports=r},{"./vtree/diff.js":43}],20:[function(e,t,n){var r=e("./virtual-hyperscript/index.js");t.exports=r},{"./virtual-hyperscript/index.js":30}],21:[function(e,t,n){var r=e("./vdom/patch.js");t.exports=r},{"./vdom/patch.js":26}],22:[function(e,t,n){function r(e,t,n){for(var r in t){var a=t[r];void 0===a?o(e,r,a,n):s(a)?(o(e,r,a,n),a.hook&&a.hook(e,r,n?n[r]:void 0)):u(a)?i(e,t,n,r,a):e[r]=a}}function o(e,t,n,r){if(r){var o=r[t];if(s(o))o.unhook&&o.unhook(e,t,n);else if("attributes"===t)for(var i in o)e.removeAttribute(i);else if("style"===t)for(var a in o)e.style[a]="";else"string"==typeof o?e[t]="":e[t]=null}}function i(e,t,n,r,o){var i=n?n[r]:void 0;if("attributes"!==r){if(i&&u(i)&&a(i)!==a(o))return void(e[r]=o);u(e[r])||(e[r]={});var s="style"===r?"":void 0;for(var c in o){var f=o[c];e[r][c]=void 0===f?s:f}}else for(var l in o){var p=o[l];void 0===p?e.removeAttribute(l):e.setAttribute(l,p)}}function a(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var u=e("is-object"),s=e("../vnode/is-vhook.js");t.exports=r},{"../vnode/is-vhook.js":34,"is-object":13}],23:[function(e,t,n){function r(e,t){var n=t?t.document||o:o,f=t?t.warn:null;if(e=c(e).a,s(e))return e.init();if(u(e))return n.createTextNode(e.text);if(!a(e))return f&&f("Item is not a valid virtual dom node",e),null;var l=null===e.namespace?n.createElement(e.tagName):n.createElementNS(e.namespace,e.tagName),p=e.properties;i(l,p);for(var v=e.children,d=0;d<v.length;d++){var h=r(v[d],t);h&&l.appendChild(h)}return l}var o=e("global/document"),i=e("./apply-properties"),a=e("../vnode/is-vnode.js"),u=e("../vnode/is-vtext.js"),s=e("../vnode/is-widget.js"),c=e("../vnode/handle-thunk.js");t.exports=r},{"../vnode/handle-thunk.js":32,"../vnode/is-vnode.js":35,"../vnode/is-vtext.js":36,"../vnode/is-widget.js":37,"./apply-properties":22,"global/document":10}],24:[function(e,t,n){function r(e,t,n,r){return n&&0!==n.length?(n.sort(a),o(e,t,n,r,0)):{}}function o(e,t,n,r,a){if(r=r||{},e){i(n,a,a)&&(r[a]=e);var s=t.children;if(s)for(var c=e.childNodes,f=0;f<t.children.length;f++){a+=1;var l=s[f]||u,p=a+(l.count||0);i(n,a,p)&&o(c[f],l,n,r,a),a=p}}return r}function i(e,t,n){if(0===e.length)return!1;for(var r,o,i=0,a=e.length-1;a>=i;){if(r=(a+i)/2>>0,o=e[r],i===a)return o>=t&&n>=o;if(t>o)i=r+1;else{if(!(o>n))return!0;a=r-1}}return!1}function a(e,t){return e>t?1:-1}var u={};t.exports=r},{}],25:[function(e,t,n){function r(e,t,n){var r=e.type,c=e.vNode,v=e.patch;switch(r){case d.REMOVE:return o(t,c);case d.INSERT:return i(t,v,n);case d.VTEXT:return a(t,c,v,n);case d.WIDGET:return u(t,c,v,n);case d.VNODE:return s(t,c,v,n);case d.ORDER:return f(t,v),t;case d.PROPS:return p(t,v,c.properties),t;case d.THUNK:return l(t,n.patch(t,v,n));default:return t}}function o(e,t){var n=e.parentNode;return n&&n.removeChild(e),c(e,t),null}function i(e,t,n){var r=n.render(t,n);return e&&e.appendChild(r),e}function a(e,t,n,r){var o;if(3===e.nodeType)e.replaceData(0,e.length,n.text),o=e;else{var i=e.parentNode;o=r.render(n,r),i&&o!==e&&i.replaceChild(o,e)}return o}function u(e,t,n,r){var o,i=h(t,n);o=i?n.update(t,e)||e:r.render(n,r);var a=e.parentNode;return a&&o!==e&&a.replaceChild(o,e),i||c(e,t),o}function s(e,t,n,r){var o=e.parentNode,i=r.render(n,r);return o&&i!==e&&o.replaceChild(i,e),i}function c(e,t){"function"==typeof t.destroy&&v(t)&&t.destroy(e)}function f(e,t){for(var n,r,o,i=e.childNodes,a={},u=0;u<t.removes.length;u++)r=t.removes[u],n=i[r.from],r.key&&(a[r.key]=n),e.removeChild(n);for(var s=i.length,c=0;c<t.inserts.length;c++)o=t.inserts[c],n=a[o.key],e.insertBefore(n,o.to>=s++?null:i[o.to])}function l(e,t){return e&&t&&e!==t&&e.parentNode&&e.parentNode.replaceChild(t,e),t}var p=e("./apply-properties"),v=e("../vnode/is-widget.js"),d=e("../vnode/vpatch.js"),h=e("./update-widget");t.exports=r},{"../vnode/is-widget.js":37,"../vnode/vpatch.js":40,"./apply-properties":22,"./update-widget":27}],26:[function(e,t,n){function r(e,t,n){return n=n||{},n.patch=n.patch&&n.patch!==r?n.patch:o,n.render=n.render||c,n.patch(e,t,n)}function o(e,t,n){var r=a(t);if(0===r.length)return e;var o=f(e,t.a,r),s=e.ownerDocument;n.document||s===u||(n.document=s);for(var c=0;c<r.length;c++){var l=r[c];e=i(e,o[l],t[l],n)}return e}function i(e,t,n,r){if(!t)return e;var o;if(s(n))for(var i=0;i<n.length;i++)o=l(n[i],t,r),t===e&&(e=o);else o=l(n,t,r),t===e&&(e=o);return e}function a(e){var t=[];for(var n in e)"a"!==n&&t.push(Number(n));return t}var u=e("global/document"),s=e("x-is-array"),c=e("./create-element"),f=e("./dom-index"),l=e("./patch-op");t.exports=r},{"./create-element":23,"./dom-index":24,"./patch-op":25,"global/document":10,"x-is-array":45}],27:[function(e,t,n){function r(e,t){return o(e)&&o(t)?"name"in e&&"name"in t?e.id===t.id:e.init===t.init:!1}var o=e("../vnode/is-widget.js");t.exports=r},{"../vnode/is-widget.js":37}],28:[function(e,t,n){"use strict";function r(e){return this instanceof r?void(this.value=e):new r(e)}var o=e("ev-store");t.exports=r,r.prototype.hook=function(e,t){var n=o(e),r=t.substr(3);n[r]=this.value},r.prototype.unhook=function(e,t){var n=o(e),r=t.substr(3);n[r]=void 0}},{"ev-store":9}],29:[function(e,t,n){"use strict";function r(e){return this instanceof r?void(this.value=e):new r(e)}t.exports=r,r.prototype.hook=function(e,t){e[t]!==this.value&&(e[t]=this.value)}},{}],30:[function(e,t,n){"use strict";function r(e,t,n){var r,a,s,c,f=[];return!n&&u(t)&&(n=t,a={}),a=a||t||{},r=m(e,a),a.hasOwnProperty("key")&&(s=a.key,a.key=void 0),a.hasOwnProperty("namespace")&&(c=a.namespace,a.namespace=void 0),"INPUT"!==r||c||!a.hasOwnProperty("value")||void 0===a.value||g(a.value)||(a.value=w(a.value)),i(a),void 0!==n&&null!==n&&o(n,f,r,a),new l(r,a,f,s,c)}function o(e,t,n,r){if("string"==typeof e)t.push(new p(e));else if("number"==typeof e)t.push(new p(String(e)));else if(a(e))t.push(e);else{if(!f(e)){if(null===e||void 0===e)return;throw s({foreignObject:e,parentVnode:{tagName:n,properties:r}})}for(var i=0;i<e.length;i++)o(e[i],t,n,r)}}function i(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];if(g(n))continue;"ev-"===t.substr(0,3)&&(e[t]=x(n))}}function a(e){return v(e)||d(e)||h(e)||y(e)}function u(e){return"string"==typeof e||f(e)||a(e)}function s(e){var t=new Error;return t.type="virtual-hyperscript.unexpected.virtual-element",t.message="Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n"+c(e.foreignObject)+".\nThe parent vnode is:\n"+c(e.parentVnode),t.foreignObject=e.foreignObject,t.parentVnode=e.parentVnode,t}function c(e){try{return JSON.stringify(e,null,"    ")}catch(t){return String(e)}}var f=e("x-is-array"),l=e("../vnode/vnode.js"),p=e("../vnode/vtext.js"),v=e("../vnode/is-vnode"),d=e("../vnode/is-vtext"),h=e("../vnode/is-widget"),g=e("../vnode/is-vhook"),y=e("../vnode/is-thunk"),m=e("./parse-tag.js"),w=e("./hooks/soft-set-hook.js"),x=e("./hooks/ev-hook.js");t.exports=r},{"../vnode/is-thunk":33,"../vnode/is-vhook":34,"../vnode/is-vnode":35,"../vnode/is-vtext":36,"../vnode/is-widget":37,"../vnode/vnode.js":39,"../vnode/vtext.js":41,"./hooks/ev-hook.js":28,"./hooks/soft-set-hook.js":29,"./parse-tag.js":31,"x-is-array":45}],31:[function(e,t,n){"use strict";function r(e,t){if(!e)return"DIV";var n=!t.hasOwnProperty("id"),r=o(e,i),u=null;a.test(r[1])&&(u="DIV");var s,c,f,l;for(l=0;l<r.length;l++)c=r[l],c&&(f=c.charAt(0),u?"."===f?(s=s||[],s.push(c.substring(1,c.length))):"#"===f&&n&&(t.id=c.substring(1,c.length)):u=c);return s&&(t.className&&s.push(t.className),t.className=s.join(" ")),t.namespace?u:u.toUpperCase()}var o=e("browser-split"),i=/([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,a=/^\.|#/;t.exports=r},{"browser-split":4}],32:[function(e,t,n){function r(e,t){var n=e,r=t;return s(t)&&(r=o(t,e)),s(e)&&(n=o(e,null)),{a:n,b:r}}function o(e,t){var n=e.vnode;if(n||(n=e.vnode=e.render(t)),!(i(n)||a(n)||u(n)))throw new Error("thunk did not return a valid node");return n}var i=e("./is-vnode"),a=e("./is-vtext"),u=e("./is-widget"),s=e("./is-thunk");t.exports=r},{"./is-thunk":33,"./is-vnode":35,"./is-vtext":36,"./is-widget":37}],33:[function(e,t,n){function r(e){return e&&"Thunk"===e.type}t.exports=r},{}],34:[function(e,t,n){function r(e){return e&&("function"==typeof e.hook&&!e.hasOwnProperty("hook")||"function"==typeof e.unhook&&!e.hasOwnProperty("unhook"))}t.exports=r},{}],35:[function(e,t,n){function r(e){return e&&"VirtualNode"===e.type&&e.version===o}var o=e("./version");t.exports=r},{"./version":38}],36:[function(e,t,n){function r(e){return e&&"VirtualText"===e.type&&e.version===o}var o=e("./version");t.exports=r},{"./version":38}],37:[function(e,t,n){function r(e){return e&&"Widget"===e.type}t.exports=r},{}],38:[function(e,t,n){t.exports="2"},{}],39:[function(e,t,n){function r(e,t,n,r,o){this.tagName=e,this.properties=t||c,this.children=n||f,this.key=null!=r?String(r):void 0,this.namespace="string"==typeof o?o:null;var l,p=n&&n.length||0,v=0,d=!1,h=!1,g=!1;for(var y in t)if(t.hasOwnProperty(y)){var m=t[y];s(m)&&m.unhook&&(l||(l={}),l[y]=m)}for(var w=0;p>w;w++){var x=n[w];i(x)?(v+=x.count||0,!d&&x.hasWidgets&&(d=!0),!h&&x.hasThunks&&(h=!0),g||!x.hooks&&!x.descendantHooks||(g=!0)):!d&&a(x)?"function"==typeof x.destroy&&(d=!0):!h&&u(x)&&(h=!0)}this.count=p+v,this.hasWidgets=d,this.hasThunks=h,this.hooks=l,this.descendantHooks=g}var o=e("./version"),i=e("./is-vnode"),a=e("./is-widget"),u=e("./is-thunk"),s=e("./is-vhook");t.exports=r;var c={},f=[];r.prototype.version=o,r.prototype.type="VirtualNode"},{"./is-thunk":33,"./is-vhook":34,"./is-vnode":35,"./is-widget":37,"./version":38}],40:[function(e,t,n){function r(e,t,n){this.type=Number(e),this.vNode=t,this.patch=n}var o=e("./version");r.NONE=0,r.VTEXT=1,r.VNODE=2,r.WIDGET=3,r.PROPS=4,r.ORDER=5,r.INSERT=6,r.REMOVE=7,r.THUNK=8,t.exports=r,r.prototype.version=o,r.prototype.type="VirtualPatch"},{"./version":38}],41:[function(e,t,n){function r(e){this.text=String(e)}var o=e("./version");t.exports=r,r.prototype.version=o,r.prototype.type="VirtualText"},{"./version":38}],42:[function(e,t,n){function r(e,t){var n;for(var u in e){u in t||(n=n||{},n[u]=void 0);var s=e[u],c=t[u];if(s!==c)if(i(s)&&i(c))if(o(c)!==o(s))n=n||{},n[u]=c;else if(a(c))n=n||{},n[u]=c;else{var f=r(s,c);f&&(n=n||{},n[u]=f)}else n=n||{},n[u]=c}for(var l in t)l in e||(n=n||{},n[l]=t[l]);return n}function o(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__?e.__proto__:e.constructor?e.constructor.prototype:void 0}var i=e("is-object"),a=e("../vnode/is-vhook");t.exports=r},{"../vnode/is-vhook":34,"is-object":13}],43:[function(e,t,n){function r(e,t){var n={a:e};return o(e,t,n,0),n}function o(e,t,n,r){if(e!==t){var o=n[r],u=!1;if(k(e)||k(t))s(e,t,n,r);else if(null==t)x(e)||(a(e,n,r),o=n[r]),o=h(o,new y(y.REMOVE,e,t));else if(m(t))if(m(e))if(e.tagName===t.tagName&&e.namespace===t.namespace&&e.key===t.key){var c=j(e.properties,t.properties);c&&(o=h(o,new y(y.PROPS,e,c))),o=i(e,t,n,o,r)}else o=h(o,new y(y.VNODE,e,t)),u=!0;else o=h(o,new y(y.VNODE,e,t)),u=!0;else w(t)?w(e)?e.text!==t.text&&(o=h(o,new y(y.VTEXT,e,t))):(o=h(o,new y(y.VTEXT,e,t)),u=!0):x(t)&&(x(e)||(u=!0),o=h(o,new y(y.WIDGET,e,t)));o&&(n[r]=o),u&&a(e,n,r)}}function i(e,t,n,r,i){for(var a=e.children,u=p(a,t.children),s=u.children,c=a.length,f=s.length,l=c>f?c:f,v=0;l>v;v++){var d=a[v],g=s[v];i+=1,d?o(d,g,n,i):g&&(r=h(r,new y(y.INSERT,null,g))),m(d)&&d.count&&(i+=d.count)}return u.moves&&(r=h(r,new y(y.ORDER,e,u.moves))),r}function a(e,t,n){f(e,t,n),u(e,t,n)}function u(e,t,n){if(x(e))"function"==typeof e.destroy&&(t[n]=h(t[n],new y(y.REMOVE,e,null)));else if(m(e)&&(e.hasWidgets||e.hasThunks))for(var r=e.children,o=r.length,i=0;o>i;i++){var a=r[i];n+=1,u(a,t,n),m(a)&&a.count&&(n+=a.count)}else k(e)&&s(e,null,t,n)}function s(e,t,n,o){var i=b(e,t),a=r(i.a,i.b);c(a)&&(n[o]=new y(y.THUNK,null,a))}function c(e){for(var t in e)if("a"!==t)return!0;return!1}function f(e,t,n){if(m(e)){if(e.hooks&&(t[n]=h(t[n],new y(y.PROPS,e,l(e.hooks)))),e.descendantHooks||e.hasThunks)for(var r=e.children,o=r.length,i=0;o>i;i++){var a=r[i];n+=1,f(a,t,n),m(a)&&a.count&&(n+=a.count)}}else k(e)&&s(e,null,t,n)}function l(e){var t={};for(var n in e)t[n]=void 0;return t}function p(e,t){var n=d(t),r=n.keys,o=n.free;if(o.length===t.length)return{children:t,moves:null};var i=d(e),a=i.keys,u=i.free;if(u.length===e.length)return{children:t,moves:null};for(var s=[],c=0,f=o.length,l=0,p=0;p<e.length;p++){var h,g=e[p];g.key?r.hasOwnProperty(g.key)?(h=r[g.key],s.push(t[h])):(h=p-l++,s.push(null)):f>c?(h=o[c++],s.push(t[h])):(h=p-l++,s.push(null))}for(var y=c>=o.length?t.length:o[c],m=0;m<t.length;m++){var w=t[m];w.key?a.hasOwnProperty(w.key)||s.push(w):m>=y&&s.push(w)}for(var x,k=s.slice(),b=0,j=[],O=[],E=0;E<t.length;){var N=t[E];for(x=k[b];null===x&&k.length;)j.push(v(k,b,null)),x=k[b];x&&x.key===N.key?(b++,E++):N.key?(x&&x.key&&r[x.key]!==E+1?(j.push(v(k,b,x.key)),x=k[b],x&&x.key===N.key?b++:O.push({key:N.key,to:E})):O.push({key:N.key,to:E}),E++):x&&x.key&&j.push(v(k,b,x.key))}for(;b<k.length;)x=k[b],j.push(v(k,b,x&&x.key));return j.length!==l||O.length?{children:s,moves:{removes:j,inserts:O}}:{children:s,moves:null}}function v(e,t,n){return e.splice(t,1),{from:t,key:n}}function d(e){for(var t={},n=[],r=e.length,o=0;r>o;o++){var i=e[o];i.key?t[i.key]=o:n.push(o)}return{keys:t,free:n}}function h(e,t){return e?(g(e)?e.push(t):e=[e,t],e):t}var g=e("x-is-array"),y=e("../vnode/vpatch"),m=e("../vnode/is-vnode"),w=e("../vnode/is-vtext"),x=e("../vnode/is-widget"),k=e("../vnode/is-thunk"),b=e("../vnode/handle-thunk"),j=e("./diff-props");t.exports=r},{"../vnode/handle-thunk":32,"../vnode/is-thunk":33,"../vnode/is-vnode":35,"../vnode/is-vtext":36,"../vnode/is-widget":37,"../vnode/vpatch":40,"./diff-props":42,"x-is-array":45}],44:[function(e,t,n){var r=arguments[3],o=arguments[4],i=arguments[5],a=JSON.stringify;t.exports=function(e){for(var t,n=Object.keys(i),u=0,s=n.length;s>u;u++){var c=n[u],f=i[c].exports;if(f===e||f["default"]===e){t=c;break}}if(!t){t=Math.floor(Math.pow(16,8)*Math.random()).toString(16);for(var l={},u=0,s=n.length;s>u;u++){var c=n[u];l[c]=c}o[t]=[Function(["require","module","exports"],"("+e+")(self)"),l]}var p=Math.floor(Math.pow(16,8)*Math.random()).toString(16),v={};v[t]=t,o[p]=[Function(["require"],"var f = require("+a(t)+");(f.default ? f.default : f)(self);"),v];var d="("+r+")({"+Object.keys(o).map(function(e){return a(e)+":["+o[e][0]+","+a(o[e][1])+"]"}).join(",")+"},{},["+a(p)+"])",h=window.URL||window.webkitURL||window.mozURL||window.msURL;return new Worker(h.createObjectURL(new Blob([d],{type:"text/javascript"})))}},{}],45:[function(e,t,n){function r(e){return"[object Array]"===i.call(e)}var o=Array.isArray,i=Object.prototype.toString;t.exports=o||r},{}],46:[function(e,t,n){"use strict";var r=e("virtual-dom/h");t.exports=function(){return r("div",["about goes here"])}},{"virtual-dom/h":20}],47:[function(e,t,n){"use strict";var r=e("virtual-dom/h");t.exports=function(e){return e||(e={}),r("div",[r("p",["Welcome Home"]),r("button",{attributes:{"data-click":"decrement"}},["-"]),r("span",[e.count]),r("button",{attributes:{"data-click":"increment"}},["+"])])}},{"virtual-dom/h":20}],48:[function(e,t,n){"use strict";var r=e("virtual-dom/h"),o=e("./home"),i=e("./about");t.exports=function(e){e||(e={});var t=void 0,n=e.url;return"/"===n?t=o(e):"/about"===n&&(t=i()),r("main",[r("h1",["wow"]),r("nav",[r("a",{attributes:{href:"/"}},["home"]),"|",r("a",{attributes:{href:"/about"}},["about"])]),t])}},{"./about":46,"./home":47,"virtual-dom/h":20}]},{},[1]);