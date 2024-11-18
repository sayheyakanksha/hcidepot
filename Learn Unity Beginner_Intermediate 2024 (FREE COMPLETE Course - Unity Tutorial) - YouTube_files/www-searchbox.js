(function(){'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function u(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(aa(this))}})}return a});
function fa(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ha(a){return ia(a,a)}
function ia(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function v(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var la=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||la});
var ma=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},na;
if(typeof Object.setPrototypeOf=="function")na=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},ra={};try{ra.__proto__=pa;oa=ra.a;break a}catch(a){}oa=!1}na=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=na;
function y(a,b){a.prototype=ma(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Fa=b.prototype}
function ta(){this.u=!1;this.m=null;this.l=void 0;this.g=1;this.s=this.o=0;this.B=this.i=null}
function ua(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ta.prototype.A=function(a){this.l=a};
function va(a,b){a.i={Kd:b,ee:!0};a.g=a.o||a.s}
ta.prototype.return=function(a){this.i={return:a};this.g=this.s};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.M=function(a){this.g=a};
function wa(a,b,c){a.o=b;c!=void 0&&(a.s=c)}
function xa(a){a.o=0;var b=a.i.Kd;a.i=null;return b}
function ya(a){var b=a.B.splice(0)[0];(b=a.i=a.i||b)?b.ee?a.g=a.o||a.s:b.M!=void 0&&a.s<b.M?(a.g=b.M,a.i=null):a.g=a.s:a.g=0}
function za(a){this.g=new ta;this.l=a}
function Aa(a,b){ua(a.g);var c=a.g.m;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.m,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.u=!1,e;var f=e.value}catch(g){return a.g.m=null,va(a.g,g),Ca(a)}a.g.m=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.l(a.g);if(b)return a.g.u=!1,{value:b.value,done:!1}}catch(c){a.g.l=void 0,va(a.g,c)}a.g.u=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.ee)throw b.Kd;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Fa(a){this.next=function(b){ua(a.g);a.g.m?b=Ba(a,a.g.m.next,b,a.g.A):(a.g.A(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.m?b=Ba(a,a.g.m["throw"],b,a.g.A):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ga(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ga(new Fa(new za(a)))}
function Ha(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.l=[];this.u=!1;var h=this.m();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.l=function(g){if(this.g==null){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.m(k)}}}this.g=null};
c.prototype.m=function(g){this.i(function(){throw g;})};
b.prototype.m=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.H),reject:g(this.o)}};
b.prototype.H=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.J(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.F(g):this.s(g)}};
b.prototype.F=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}typeof h=="function"?this.O(h,g):this.s(g)};
b.prototype.o=function(g){this.A(2,g)};
b.prototype.s=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(this.g!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;this.g===2&&this.I();this.B()};
b.prototype.I=function(){var g=this;e(function(){if(g.D()){var h=da.console;typeof h!=="undefined"&&h.error(g.i)}},1)};
b.prototype.D=function(){if(this.u)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if(typeof l==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.B=function(){if(this.l!=null){for(var g=0;g<this.l.length;++g)f.l(this.l[g]);this.l=null}};
var f=new c;b.prototype.J=function(g){var h=this.m();g.cc(h.resolve,h.reject)};
b.prototype.O=function(g,h){var l=this.m();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(r,q){return typeof r=="function"?function(t){try{k(r(t))}catch(w){m(w)}}:q}
var k,m,p=new b(function(r,q){k=r;m=q});
this.cc(l(g,k),l(h,m));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.cc=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;this.l==null?f.l(l):this.l.push(l);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=v(g),m=k.next();!m.done;m=k.next())d(m.value).cc(h,l)})};
b.all=function(g){var h=v(g),l=h.next();return l.done?d([]):new b(function(k,m){function p(t){return function(w){r[t]=w;q--;q==0&&k(r)}}
var r=[],q=0;do r.push(void 0),q++,d(l.value).cc(p(r.length-1),m),l=h.next();while(!l.done)})};
return b});
u("Object.setPrototypeOf",function(a){return a||sa});
u("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
u("globalThis",function(a){return a||da});
u("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=v(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return k==="object"&&l!==null||k==="function"}
function e(l){if(!ja(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(m.get(l)!=2||m.get(k)!=3)return!1;m.delete(l);m.set(k,4);return!m.has(l)&&m.get(k)==4}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!ja(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&ja(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&ja(l,g)&&ja(l[g],this.g)?delete l[g][this.g]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return fa(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;k=="object"||k=="function"?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&ja(h[0],k))for(h=0;h<m.length;h++){var p=m[h];if(l!==l&&p.key!==p.key||l===p.key)return{id:k,list:m,index:h,entry:p}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),l=new a(v([[h,"s"]]));if(l.get(h)!="s"||l.size!=1||l.get({x:4})||l.set({x:4},"t")!=l||l.size!=2)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=k.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!k.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=h===0?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
u("Set",function(a){function b(c){this.g=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
u("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
function Ja(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ja(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
u("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return Ja(this,b,"includes").indexOf(b,c||0)!==-1}});
u("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
u("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
u("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ka(a){var b=typeof a;b=b!="object"?b:a?Array.isArray(a)?"array":b:"null";return b=="array"||b=="object"&&typeof a.length=="number"}
function Ma(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Na(a,b,c){return a.call.apply(a.bind,arguments)}
function Oa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function E(a,b,c){E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Na:Oa;return E.apply(null,arguments)}
function F(){return Date.now()}
function G(a,b){a=a.split(".");var c=C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function H(a,b){function c(){}
c.prototype=b.prototype;a.Fa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Fh=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function Pa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Pa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
H(Pa,Error);Pa.prototype.name="CustomError";function Qa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.m=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.l=c}}
;var Ra=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Sa(a,b){return a<b?-1:a>b?1:0}
;/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
function Ta(a){return{valueOf:a}.valueOf()}
;var Ua=globalThis.trustedTypes,Wa;function Xa(){var a=null;if(!Ua)return a;try{var b=function(c){return c};
a=Ua.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function Ya(){Wa===void 0&&(Wa=Xa());return Wa}
;function Za(a){this.g=a}
Za.prototype.toString=function(){return this.g+""};
function $a(a){var b=Ya();return new Za(b?b.createScriptURL(a):a)}
function ab(a){if(a instanceof Za)return a.g;throw Error("");}
;function bb(a){this.g=a}
bb.prototype.toString=function(){return this.g};
var cb=new bb("about:invalid#zClosurez");function db(a){this.hg=a}
function eb(a){return new db(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var hb=[eb("data"),eb("http"),eb("https"),eb("mailto"),eb("ftp"),new db(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function ib(a){for(var b=Ha.apply(1,arguments),c=[a[0]],d=0;d<b.length;d++)c.push(String(b[d])),c.push(a[d+1]);return new bb(c.join(""))}
var jb=Ta(function(){return typeof URL==="function"}),kb=["data:",
"http:","https:","mailto:","ftp:"],lb=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;function mb(a){if(a instanceof bb)if(a instanceof bb)a=a.g;else throw Error("");else a=lb.test(a)?a:void 0;return a}
;function nb(a,b){b=mb(b);b!==void 0&&(a.href=b)}
;function ob(a){this.g=a}
ob.prototype.toString=function(){return this.g+""};
function pb(a){var b=Ya();return new ob(b?b.createHTML(a):a)}
function qb(a){if(a instanceof ob)return a.g;throw Error("");}
;function rb(a,b){if(a.nodeType===1&&/^(script|style)$/i.test(a.tagName))throw Error("");a.innerHTML=qb(b)}
;function sb(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function tb(a,b){a.src=ab(b);var c;b=a.ownerDocument&&a.ownerDocument.defaultView||window;b=b===void 0?document:b;var d;b=(d=(c="document"in b?b.document:b).querySelector)==null?void 0:d.call(c,"script[nonce]");(c=b==null?"":b.nonce||b.getAttribute("nonce")||"")&&a.setAttribute("nonce",c)}
;var ub=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},vb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},wb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=typeof a==="string"?a.split(""):a,h=0;h<d;h++)if(h in g){var l=g[h];
b.call(c,l,h,a)&&(e[f++]=l)}return e};
function xb(a,b){b=ub(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function yb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ka(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function zb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Ab(a){return decodeURIComponent(a.replace(/\+/g," "))}
;var Bb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cb(a){return a?decodeURI(a):a}
function Db(a){return Cb(a.match(Bb)[3]||null)}
function Eb(a){var b=a.match(Bb);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function Fb(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function Gb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Gb(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function Hb(a){var b=[],c;for(c in a)Gb(c,a[c],b);return b.join("&")}
function Ib(a,b){b=Hb(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function Jb(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var Kb=/#|$/,Lb=/[?&]($|#)/;function Mb(a){C.setTimeout(function(){throw a;},0)}
;var Nb,Ob=D("CLOSURE_FLAGS"),Pb=Ob&&Ob[610401301];Nb=Pb!=null?Pb:!1;function Qb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Rb,Sb=C.navigator;Rb=Sb?Sb.userAgentData||null:null;function Tb(a){return Nb?Rb?Rb.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function J(a){return Qb().indexOf(a)!=-1}
;function Ub(){return Nb?!!Rb&&Rb.brands.length>0:!1}
function Vb(){return Ub()?!1:J("Opera")}
function Wb(){return Ub()?!1:J("Trident")||J("MSIE")}
function Xb(){return Ub()?Tb("Microsoft Edge"):J("Edg/")}
function Yb(){return J("Safari")&&!(Zb()||(Ub()?0:J("Coast"))||Vb()||(Ub()?0:J("Edge"))||Xb()||(Ub()?Tb("Opera"):J("OPR"))||J("Firefox")||J("FxiOS")||J("Silk")||J("Android"))}
function Zb(){return Ub()?Tb("Chromium"):(J("Chrome")||J("CriOS"))&&!(Ub()?0:J("Edge"))||J("Silk")}
function $b(a){var b={};a.forEach(function(c){b[c[0]]=c[1]});
return function(c){return b[c.find(function(d){return d in b})]||""}}
function ac(){var a=Qb();if(Wb()){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])a=b[1];else{b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),c[1]=="7.0")if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];a=b}return a}c=RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?","g");b=[];for(var d;d=c.exec(a);)b.push([d[1],d[2],d[3]||void 0]);a=$b(b);return Vb()?a(["Version","Opera"]):
(Ub()?0:J("Edge"))?a(["Edge"]):Xb()?a(["Edg"]):J("Silk")?a(["Silk"]):Zb()?a(["Chrome","CriOS","HeadlessChrome"]):(a=b[2])&&a[1]||""}
;function bc(){return Nb&&Rb&&Rb.platform?Rb.platform==="Android":J("Android")}
function cc(){return J("iPhone")&&!J("iPod")&&!J("iPad")}
;var dc=Wb(),ec=J("Edge"),fc=bc();var gc=cc()||J("iPod"),hc=J("iPad");!J("Android")||Zb();Zb();var ic=Yb()&&!(cc()||J("iPad")||J("iPod"));var jc={},kc=null;
function lc(a,b){Ka(a);b===void 0&&(b=0);if(!kc){kc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;e<5;e++){var f=c.concat(d[e].split(""));jc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];kc[h]===void 0&&(kc[h]=g)}}}b=jc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var mc=typeof Uint8Array!=="undefined",nc=!dc&&typeof btoa==="function";var oc;function pc(){var a=Error();zb(a,"incident");Mb(a)}
function qc(a){a=Error(a);zb(a,"warning");return a}
;function rc(){return typeof BigInt==="function"}
;var sc=typeof Symbol==="function"&&typeof Symbol()==="symbol";function tc(a){return typeof Symbol==="function"&&typeof Symbol()==="symbol"?Symbol():a}
var uc=tc(),vc=tc("2ex"),wc=tc("1oa");Math.max.apply(Math,x(Object.values({rh:1,ph:2,oh:4,uh:8,th:16,sh:32,ih:64,wh:128,nh:256,mh:512,qh:1024,kh:2048,vh:4096,lh:8192,jh:16384})));var xc=sc?function(a,b){a[uc]|=b}:function(a,b){a.Da!==void 0?a.Da|=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},yc=sc?function(a,b){a[uc]&=~b}:function(a,b){a.Da!==void 0&&(a.Da&=~b)},zc=sc?function(a){return a[uc]|0}:function(a){return a.Da|0},Ac=sc?function(a){return a[uc]}:function(a){return a.Da},Bc=sc?function(a,b){a[uc]=b}:function(a,b){a.Da!==void 0?a.Da=b:Object.defineProperties(a,{Da:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Cc(a,b){Bc(b,(a|0)&-30975)}
function Dc(a,b){Bc(b,(a|34)&-30941)}
;var Ec={},Fc={};function Gc(a){return!(!a||typeof a!=="object"||a.g!==Fc)}
function Hc(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ic(a){return!Array.isArray(a)||a.length?!1:zc(a)&1?!0:!1}
var Jc,Kc=[];Bc(Kc,55);Jc=Object.freeze(Kc);function Lc(a){if(a&2)throw Error();}
;function Mc(a){a.Xh=!0;return a}
;var Nc=Mc(function(a){return typeof a==="number"}),Oc=Mc(function(a){return typeof a==="string"}),Pc=Mc(function(a){return typeof a==="boolean"}),Qc=Mc(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var Rc=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function Sc(a){var b=a;if(Oc(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(Nc(b)&&!Number.isSafeInteger(b))throw Error(String(b));return Rc?BigInt(a):a=Pc(a)?a?"1":"0":Oc(a)?a.trim()||"0":String(a)}
var Yc=Mc(function(a){return Rc?a>=Tc&&a<=Uc:a[0]==="-"?Vc(a,Wc):Vc(a,Xc)}),Wc=Number.MIN_SAFE_INTEGER.toString(),Tc=Rc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Xc=Number.MAX_SAFE_INTEGER.toString(),Uc=Rc?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function Vc(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var Zc=0,$c=0;function ad(a){var b=a>>>0;Zc=b;$c=(a-b)/4294967296>>>0}
function bd(a){if(a<0){ad(0-a);var b=v(cd(Zc,$c));a=b.next().value;b=b.next().value;Zc=a>>>0;$c=b>>>0}else ad(a)}
function dd(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else rc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ed(c)+ed(a));return c}
function ed(a){a=String(a);return"0000000".slice(a.length)+a}
function fd(){var a=Zc,b=$c;b&2147483648?rc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(cd(a,b)),a=b.next().value,b=b.next().value,a="-"+dd(a,b)):a=dd(a,b);return a}
function cd(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function gd(a){return a.displayName||a.name||"unknown type name"}
var hd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function id(a){var b=typeof a;switch(b){case "bigint":return!0;case "number":return Number.isFinite(a)}return b!=="string"?!1:hd.test(a)}
function jd(a){var b=0;b=b===void 0?0:b;if(!id(a))throw qc("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return kd(a);case "bigint":return String(BigInt.asIntN(64,a));default:return ld(a)}case 8192:switch(c){case "string":return b=Math.trunc(Number(a)),Number.isSafeInteger(b)?a=Sc(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=rc()?Sc(BigInt.asIntN(64,BigInt(a))):Sc(md(a))),a;case "bigint":return Sc(BigInt.asIntN(64,a));default:return Number.isSafeInteger(a)?Sc(nd(a)):Sc(ld(a))}case 0:switch(c){case "string":return kd(a);
case "bigint":return Sc(BigInt.asIntN(64,a));default:return nd(a)}default:return sb(b,"Unknown format requested type for int64")}}
function od(a){return a==null?a:jd(a)}
function pd(a){return a[0]==="-"?a.length<20?!0:a.length===20&&Number(a.substring(0,7))>-922337:a.length<19?!0:a.length===19&&Number(a.substring(0,6))<922337}
function md(a){if(pd(a))return a;if(a.length<16)bd(Number(a));else if(rc())a=BigInt(a),Zc=Number(a&BigInt(4294967295))>>>0,$c=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");$c=Zc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),$c*=1E6,Zc=Zc*1E6+d,Zc>=4294967296&&($c+=Math.trunc(Zc/4294967296),$c>>>=0,Zc>>>=0);b&&(b=v(cd(Zc,$c)),a=b.next().value,b=b.next().value,Zc=a,$c=b)}return fd()}
function nd(a){id(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){bd(a);var b=Zc,c=$c;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);b=c*4294967296+(b>>>0);a=a?-b:b}return a}
function ld(a){id(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);pd(b)?a=b:(bd(a),a=fd())}return a}
function kd(a){id(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return md(a)}
function qd(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function rd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+gd(b)+" but got "+(a&&gd(a.constructor)));return a}
function sd(a,b,c){if(a!=null&&typeof a==="object"&&a.cd===Ec)return a;if(Array.isArray(a)){var d=zc(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Bc(a,e);return new b(a)}}
;function td(a){ud===void 0&&(ud=typeof Proxy==="function"?vd(Proxy):null);var b;(b=!ud)||(wd===void 0&&(wd=typeof WeakMap==="function"?vd(WeakMap):null),b=!wd);if(b)return a;if(b=xd(a))return b;if(Math.random()>.01)return a;yd(a);b=new ud(a,{set:function(c,d,e){zd();c[d]=e;return!0}});
Ad(a,b);return b}
function zd(){pc()}
var Bd=void 0,Cd=void 0;function xd(a){var b;return(b=Bd)==null?void 0:b.get(a)}
function Ad(a,b){(Bd||(Bd=new wd)).set(a,b);(Cd||(Cd=new wd)).set(b,a)}
var ud=void 0,wd=void 0;function vd(a){try{return a.toString().indexOf("[native code]")!==-1?a:null}catch(b){return null}}
var Dd=void 0;function yd(a){if(Dd===void 0){var b=new ud([],{});Dd=Array.prototype.concat.call([],b).length===1}Dd&&typeof Symbol==="function"&&Symbol.isConcatSpreadable&&(a[Symbol.isConcatSpreadable]=!0)}
;var Ed;
function Fd(a,b,c){var d=d!=null?d:0;a==null&&(a=Ed);Ed=void 0;if(a==null){var e=96;c?(a=[c],e|=512):a=[];b&&(e=e&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");e=zc(a);if(e&2048)throw Error("farr");if(e&64)return a;d===1||d===2||(e|=64);if(c&&(e|=512,c!==a[0]))throw Error("mid");a:{c=a;if(d=c.length){var f=d-1;if(Hc(c[f])){e|=256;b=f-(+!!(e&512)-1);if(b>=1024)throw Error("pvtlmt");e=e&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,d-(+!!(e&512)-1));if(b>1024)throw Error("spvt");e=
e&-33521665|(b&1023)<<15}}}Bc(a,e);return a}
;function Gd(a,b){return Hd(b)}
function Hd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return Yc(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ic(a))return}else if(mc&&a!=null&&a instanceof Uint8Array){if(nc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=lc(a);return a}}return a}
;function Id(a,b,c){a=Array.prototype.slice.call(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Jd(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ic(a)?void 0:e&&zc(a)&2?a:Kd(a,b,c,d!==void 0,e);else if(Hc(a)){var f={},g;for(g in a)f[g]=Jd(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Kd(a,b,c,d,e){var f=d||c?zc(a):0;d=d?!!(f&32):void 0;a=Array.prototype.slice.call(a);for(var g=0;g<a.length;g++)a[g]=Jd(a[g],b,c,d,e);c&&c(f,a);return a}
function Ld(a){return a.cd===Ec?a.toJSON():Hd(a)}
;function Md(a,b,c){c=c===void 0?Dc:c;if(a!=null){if(mc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=zc(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Bc(a,(d|34)&-12293),a):Kd(a,Md,d&4?Dc:c,!0,!0)}a.cd===Ec&&(c=a.U,d=Ac(c),a=d&2?a:Nd(a,c,d,!0));return a}}
function Nd(a,b,c,d){a=a.constructor;b=Od(b,c,d);zc(b);Ed=b;b=new a(b);Ed=void 0;return b}
function Od(a,b,c){var d=c||b&2?Dc:Cc,e=!!(b&32);a=Id(a,b,function(f){return Md(f,e,d)});
xc(a,32|(c?2:0));return a}
function Pd(a){var b=a.U,c=Ac(b);return c&2?Nd(a,b,c,!1):a}
;function Qd(a,b){a=a.U;return Rd(a,Ac(a),b)}
function Sd(a,b,c,d){b=d+(+!!(b&512)-1);if(!(b<0||b>=a.length||b>=c))return a[b]}
function Rd(a,b,c,d){if(c===-1)return null;var e=b>>15&1023||536870912;if(c>=e){if(b&256)return a[a.length-1][c]}else{var f=a.length;if(d&&b&256&&(d=a[f-1][c],d!=null)){if(Sd(a,b,e,c)&&vc!=null){var g;a=(g=oc)!=null?g:oc={};g=a[vc]||0;g>=4||(a[vc]=g+1,pc())}return d}return Sd(a,b,e,c)}}
function Td(a,b,c){var d=a.U,e=Ac(d);Lc(e);Ud(d,e,b,c);return a}
function Ud(a,b,c,d){Hc(d);var e=b>>15&1023||536870912;if(c>=e){var f=b;if(b&256)var g=a[a.length-1];else{if(d==null)return f;g=a[e+(+!!(b&512)-1)]={};f|=256}g[c]=d;c<e&&(a[c+(+!!(b&512)-1)]=void 0);f!==b&&Bc(a,f);return f}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Vd(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Wd(a){if(sc){var b;return(b=a[wc])!=null?b:a[wc]=new Map}if(wc in a)return a[wc];b=new Map;Object.defineProperty(a,wc,{value:b});return b}
function Xd(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];Rd(b,c,g)!=null&&(e!==0&&(c=Ud(b,c,e)),e=g)}a.set(d,e);return e}
function Yd(a,b,c){var d=d===void 0?!1:d;var e=a.U;var f=Ac(e);d=Rd(e,f,c,d);b=sd(d,b,f);b!==d&&b!=null&&Ud(e,f,c,b);e=b;if(e==null)return e;a=a.U;f=Ac(a);f&2||(b=Pd(e),b!==e&&(e=b,Ud(a,f,c,e)));return e}
function Zd(a,b,c,d){d!=null?rd(d,b):d=void 0;return Td(a,c,d)}
function $d(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function ae(a,b){var c=!0;32&b&&c||(a&=-33);return a}
function be(a,b,c,d){var e=Ac(a.U);Lc(e);var f,g,h=a.U,l=(a=!!(2&e))?1:2;g&&(g=!a);a=Rd(h,e,b);a=Array.isArray(a)?a:Jc;var k=zc(a),m=!!(4&k);if(!m){var p=k;p===0&&(p=$d(p,e));k=a;p|=1;var r=e,q=!!(2&p);q&&(r|=2);for(var t=!q,w=!0,z=0,I=0;z<k.length;z++){var O=sd(k[z],c,r);if(O instanceof c){if(!q){var ea=!!(zc(O.U)&2);t&&(t=!ea);w&&(w=ea)}k[I++]=O}}I<z&&(k.length=I);p|=4;p=w?p|16:p&-17;p=t?p|8:p&-9;Bc(k,p);q&&Object.freeze(k);k=p}if(g&&!(8&k||!a.length&&(l===1||l===4&&32&k))){Vd(k)&&(a=Array.prototype.slice.call(a),
k=$d(k,e),e=Ud(h,e,b,a));g=a;for(p=0;p<g.length;p++)r=g[p],q=Pd(r),r!==q&&(g[p]=q);k|=8;k=g.length?k&-17:k|16;Bc(g,k)}l===1||l===4&&32&k?Vd(k)||(b=k,e=!!(32&k),k|=!a.length||16&k&&(!m||e)?2:2048,k!==b&&Bc(a,k),Object.freeze(a)):(m=l!==5?!1:!!(32&k)||Vd(k)||!!xd(a),(l===2||m)&&Vd(k)&&(a=Array.prototype.slice.call(a),k=$d(k,e),k=ae(k,e),Bc(a,k),e=Ud(h,e,b,a)),Vd(k)||(b=k,k=ae(k,e),k!==b&&Bc(a,k)),m&&(f=td(a)));f=f||a;d=d!=null?rd(d,c):new c;f.push(d);zc(d.U)&2?yc(f,8):yc(f,16)}
function ce(a,b){var c=0;c=c===void 0?0:c;a=Qd(a,b);a=a==null?a:Number.isFinite(a)?a|0:void 0;return a!=null?a:c}
function de(a,b){var c=ee;var d=a.U;c=Xd(Wd(d),d,Ac(d),c);a=Qd(a,c===b?b:-1);return a==null||typeof a==="string"?a:void 0}
function K(a,b,c){return Td(a,b,qd(c))}
function fe(a,b,c){if(c!=null){if(!Number.isFinite(c))throw qc("enum");c|=0}return Td(a,b,c)}
;var ge;function L(a,b,c){this.U=Fd(a,b,c)}
L.prototype.toJSON=function(){return he(this)};
L.prototype.clone=function(){var a=this.U;return Nd(this,a,Ac(a),!1)};
L.prototype.cd=Ec;L.prototype.toString=function(){try{return ge=!0,he(this).toString()}finally{ge=!1}};
function he(a){var b;ge?b=a.U:b=Kd(a.U,Ld,void 0,void 0,!1);var c=!ge;Ac(c?a.U:b);if(a=b.length){var d=b[a-1],e=Hc(d);e?a--:d=void 0;var f=b;if(e){b:{var g=d;var h;var l=!1;if(g)for(var k in g)if(isNaN(+k))e=void 0,((e=h)!=null?e:h={})[k]=g[k];else if(e=g[k],Array.isArray(e)&&(Ic(e)||Gc(e)&&e.size===0)&&(e=null),e==null&&(l=!0),e!=null){var m=void 0;((m=h)!=null?m:h={})[k]=e}l||(h=g);if(h)for(var p in h){l=h;break b}l=null}g=l==null?d!=null:l!==d}for(;a>0;a--){h=f[a-1];if(!(h==null||Ic(h)||Gc(h)&&
h.size===0))break;var r=!0}if(f!==b||g||r){if(!c)f=Array.prototype.slice.call(f,0,a);else if(r||g||l)f.length=a;l&&f.push(l)}r=f}else r=b;return r}
;var ie=window;function je(){}
;function ke(){return Nb&&Rb?Rb.mobile:!(Nb&&Rb?!Rb.mobile&&(J("iPad")||J("Android")||J("Silk")):J("iPad")||J("Android")&&!J("Mobile")||J("Silk"))&&(J("iPod")||J("iPhone")||J("Android")||J("IEMobile"))}
;function le(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function me(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=me(a[c]);return b}
var ne="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function oe(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ne.length;f++)c=ne[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function pe(a){var b=arguments.length;if(b==1&&Array.isArray(arguments[0]))return pe.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c}
;function qe(){var a=re;return document.createRange().createContextualFragment(qb(pb(a[0])))}
;function se(a,b){var c=b.createRange();c.selectNode(b.body);a=pb(a);return c.createContextualFragment(qb(a))}
;function te(a){a=a.nodeName;return typeof a==="string"?a:"FORM"}
function ue(a){a=a.nodeType;return a===1||typeof a!=="number"}
;var ve="ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" "),
we=[["A",new Map([["href",{ja:2}]])],["AREA",new Map([["href",{ja:2}]])],["LINK",new Map([["href",{ja:5,conditions:new Map([["rel",new Set("alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" "))]])}]])],["SOURCE",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["IMG",new Map([["src",{ja:5}],["srcset",{ja:6}]])],["VIDEO",new Map([["src",{ja:5}]])],["AUDIO",new Map([["src",{ja:5}]])]],xe="title aria-atomic aria-autocomplete aria-busy aria-checked aria-current aria-disabled aria-dropeffect aria-expanded aria-haspopup aria-hidden aria-invalid aria-label aria-level aria-live aria-multiline aria-multiselectable aria-orientation aria-posinset aria-pressed aria-readonly aria-relevant aria-required aria-selected aria-setsize aria-sort aria-valuemax aria-valuemin aria-valuenow aria-valuetext alt align autocapitalize autocomplete autocorrect autofocus autoplay bgcolor border cellpadding cellspacing checked color cols colspan controls datetime disabled download draggable enctype face formenctype frameborder height hreflang hidden ismap label lang loop max maxlength media minlength min multiple muted nonce open placeholder preload rel required reversed role rows rowspan selected shape size sizes slot span spellcheck start step summary translate type valign value width wrap itemscope itemtype itemid itemprop itemref".split(" "),
ye=[["dir",{ja:3,conditions:Ta(function(){return new Map([["dir",new Set(["auto","ltr","rtl"])]])})}],
["async",{ja:3,conditions:Ta(function(){return new Map([["async",new Set(["async"])]])})}],
["cite",{ja:2}],["loading",{ja:3,conditions:Ta(function(){return new Map([["loading",new Set(["eager","lazy"])]])})}],
["poster",{ja:2}],["target",{ja:3,conditions:Ta(function(){return new Map([["target",new Set(["_self","_blank"])]])})}]],ze=new function(){var a=new Set(xe),b=new Map(ye),c=new Map(we);
this.l=new Set(ve);this.g=c;this.i=a;this.m=b};function Ae(){this.g=ze}
function Be(a,b){var c=document.implementation.createHTMLDocument("");a=Ce(a,b,c);c=c.body;c.appendChild(a);c=(new XMLSerializer).serializeToString(c);c=c.slice(c.indexOf(">")+1,c.lastIndexOf("</"));return pb(c)}
function Ce(a,b,c){b=se(b,c);b=document.createTreeWalker(b,5,function(h){if(h.nodeType===3)h=1;else if(ue(h))if(h=te(h),h===null)h=2;else{var l=a.g;h=h!=="FORM"&&(l.l.has(h)||l.g.has(h))?1:2}else h=2;return h});
for(var d=b.nextNode(),e=c.createDocumentFragment(),f=e;d!==null;){var g=void 0;if(d.nodeType===3)g=document.createTextNode(d.data);else if(ue(d))g=De(a,d,c);else throw Error("");f.appendChild(g);if(d=b.firstChild())f=g;else for(;!(d=b.nextSibling())&&(d=b.parentNode());)f=f.parentNode}return e}
function De(a,b,c){var d=te(b);c=c.createElement(d);b=b.attributes;for(var e=v(b),f=e.next();!f.done;f=e.next()){var g=f.value;f=g.name;g=g.value;var h=a.g;var l=h.g.get(d);h=(l==null?0:l.has(f))?l.get(f):h.i.has(f)?{ja:1}:(h=h.m.get(f))?h:{ja:0};a:{if(l=h.conditions){l=v(l);for(var k=l.next();!k.done;k=l.next()){var m=v(k.value);k=m.next().value;m=m.next().value;var p=void 0;if((k=(p=b.getNamedItem(k))==null?void 0:p.value)&&!m.has(k)){l=!1;break a}}}l=!0}if(l)switch(h.ja){case 1:Ee(c,f,g);break;
case 2:a:if(h=void 0,jb){try{h=new URL(g)}catch(r){h="https:";break a}h=h.protocol}else b:{h=document.createElement("a");try{h.href=g}catch(r){h=void 0;break b}h=h.protocol;h=h===":"||h===""?"https:":h}Ee(c,f,h!==void 0&&kb.indexOf(h.toLowerCase())!==-1?g:"about:invalid#zClosurez");break;case 3:Ee(c,f,g.toLowerCase());break;case 4:Ee(c,f,g);break;case 5:Ee(c,f,g);break;case 6:Ee(c,f,g)}}return c}
function Ee(a,b,c){a.setAttribute(b,c)}
var Fe=Ta(function(){return new Ae});function Ge(a){var b=Ha.apply(1,arguments);if(b.length===0)return $a(a[0]);for(var c=a[0],d=0;d<b.length;d++)c+=encodeURIComponent(b[d])+a[d+1];return $a(c)}
function He(a,b,c,d){function e(g,h){g!=null&&(Array.isArray(g)?g.forEach(function(l){return e(l,h)}):(b+=f+encodeURIComponent(h)+"="+encodeURIComponent(g),f="&"))}
var f=b.length?"&":"?";d.constructor===Object&&(d=Object.entries(d));Array.isArray(d)?d.forEach(function(g){return e(g[1],g[0])}):d.forEach(e);
return $a(a+b+c)}
;function Ie(a){var b=Je;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Ke(){var a=[];Ie(function(b){a.push(b)});
return a}
var Je={Wg:"allow-forms",Xg:"allow-modals",Yg:"allow-orientation-lock",Zg:"allow-pointer-lock",ah:"allow-popups",bh:"allow-popups-to-escape-sandbox",dh:"allow-presentation",eh:"allow-same-origin",fh:"allow-scripts",gh:"allow-top-navigation",hh:"allow-top-navigation-by-user-activation"},Le=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Ke()});
function Me(){var a=Ne(),b={};vb(Le(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ne(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Oe(a,b){this.width=a;this.height=b}
n=Oe.prototype;n.clone=function(){return new Oe(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Pe(){var a=document.body||document.documentElement;a:{var b=a.nodeType==9?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.direction||b.getPropertyValue("direction")||"";break a}b=""}return b||(a.currentStyle?a.currentStyle.direction:null)||a.style&&a.style.direction}
;var Qe=(new Date).getTime();function Re(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function Se(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(p){for(var r=g,q=0;q<64;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;q<80;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var t=e[1],w=e[2],z=e[3],I=e[4];for(q=0;q<80;q++){if(q<40)if(q<20){var O=z^t&(w^z);var ea=1518500249}else O=t^w^z,ea=1859775393;else q<60?(O=t&w|z&(t|w),ea=2400959708):(O=t^w^z,ea=3395469782);O=((p<<5|p>>>27)&4294967295)+O+I+ea+r[q]&4294967295;I=z;z=w;w=(t<<30|t>>>2)&4294967295;t=p;p=O}e[0]=e[0]+p&4294967295;e[1]=e[1]+t&4294967295;
e[2]=e[2]+w&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+I&4294967295}
function c(p,r){if(typeof p==="string"){p=unescape(encodeURIComponent(p));for(var q=[],t=0,w=p.length;t<w;++t)q.push(p.charCodeAt(t));p=q}r||(r=p.length);q=0;if(k==0)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64;for(;q<r;)if(f[k++]=p[q++],m++,k==64)for(k=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,m+=64}
function d(){var p=[],r=m*8;k<56?c(h,56-k):c(h,64-(k-56));for(var q=63;q>=56;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;q<5;q++)for(var t=24;t>=0;t-=8)p[r++]=e[q]>>t&255;return p}
for(var e=[],f=[],g=[],h=[128],l=1;l<64;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,af:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Te(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Ue(Re(d),a,c||null)].join(" "):null}
function Ue(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],vb(d,function(h){e.push(h)}),Ve(e.join(" "));
var f=[],g=[];vb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];vb(d,function(h){e.push(h)});
a=Ve(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function Ve(a){var b=Se();b.update(a);return b.af().toLowerCase()}
;var We={};function Xe(a){this.g=a||{cookie:""}}
n=Xe.prototype;n.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{ad:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.li;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ad}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ra(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{ad:0,path:b,domain:c});return d};
n.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ra(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var Ye=new Xe(typeof document=="undefined"?null:document);function Ze(a){return!!We.FPA_SAMESITE_PHASE2_MOD||!(a===void 0||!a)}
function $e(a){a=a===void 0?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Ze(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if(typeof document!=="undefined"){var c=new Xe(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID");Ze(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function af(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new Xe(document)).get(b));return a?Te(a,c,d):null}
function bf(a){var b=b===void 0?!1:b;var c=Re(String(C.location.href)),d=[];if($e(b)){c=c.indexOf("https:")==0||c.indexOf("chrome-extension:")==0||c.indexOf("chrome-untrusted://new-tab-page")==0||c.indexOf("moz-extension:")==0;var e=c?C.__SAPISID:C.__APISID;e||typeof document==="undefined"||(e=new Xe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Te(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ze(b)&&((b=af("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&
d.push(b),(a=af("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return d.length==0?null:d.join(" ")}
;var cf=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function df(){this.bb=this.bb;this.m=this.m}
df.prototype.bb=!1;df.prototype.dispose=function(){this.bb||(this.bb=!0,this.Ba())};
df.prototype[Symbol.dispose]=function(){this.dispose()};
df.prototype.addOnDisposeCallback=function(a,b){this.bb?b!==void 0?a.call(b):a():(this.m||(this.m=[]),b&&(a=a.bind(b)),this.m.push(a))};
df.prototype.Ba=function(){if(this.m)for(;this.m.length;)this.m.shift()()};function ef(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
ef.prototype.stopPropagation=function(){this.i=!0};
ef.prototype.preventDefault=function(){this.defaultPrevented=!0};var ff=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function gf(a,b){ef.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.l=null;a&&this.init(a,b)}
H(gf,ef);
gf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.l=a;a.defaultPrevented&&gf.Fa.preventDefault.call(this)};
gf.prototype.stopPropagation=function(){gf.Fa.stopPropagation.call(this);this.l.stopPropagation?this.l.stopPropagation():this.l.cancelBubble=!0};
gf.prototype.preventDefault=function(){gf.Fa.preventDefault.call(this);var a=this.l;a.preventDefault?a.preventDefault():a.returnValue=!1};var hf="closure_listenable_"+(Math.random()*1E6|0);var jf=0;function kf(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.lc=e;this.key=++jf;this.Sb=this.Zb=!1}
function lf(a){a.Sb=!0;a.listener=null;a.proxy=null;a.src=null;a.lc=null}
;function mf(a){this.src=a;this.listeners={};this.g=0}
mf.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=nf(a,b,d,e);g>-1?(b=a[g],c||(b.Zb=!1)):(b=new kf(b,this.src,f,!!d,e),b.Zb=c,a.push(b));return b};
mf.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=nf(e,b,c,d);return b>-1?(lf(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.g--),!0):!1};
function of(a,b){var c=b.type;c in a.listeners&&xb(a.listeners[c],b)&&(lf(b),a.listeners[c].length==0&&(delete a.listeners[c],a.g--))}
function nf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Sb&&f.listener==b&&f.capture==!!c&&f.lc==d)return e}return-1}
;var pf="closure_lm_"+(Math.random()*1E6|0),qf={},rf=0;function sf(a,b,c,d,e){if(d&&d.once)tf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)sf(a,b[f],c,d,e);else c=uf(c),a&&a[hf]?a.ra(b,c,Ma(d)?!!d.capture:!!d,e):vf(a,b,c,!1,d,e)}
function vf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=wf(a);h||(a[pf]=h=new mf(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=xf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ff||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(yf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");rf++}}
function xf(){function a(c){return b.call(a.src,a.listener,c)}
var b=zf;return a}
function tf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)tf(a,b[f],c,d,e);else c=uf(c),a&&a[hf]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):vf(a,b,c,!0,d,e)}
function Af(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Af(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=uf(c),a&&a[hf])?a.g.remove(String(b),c,d,e):a&&(a=wf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=nf(b,c,d,e)),(c=a>-1?b[a]:null)&&Bf(c))}
function Bf(a){if(typeof a!=="number"&&a&&!a.Sb){var b=a.src;if(b&&b[hf])of(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(yf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);rf--;(c=wf(b))?(of(c,a),c.g==0&&(c.src=null,b[pf]=null)):lf(a)}}}
function yf(a){return a in qf?qf[a]:qf[a]="on"+a}
function zf(a,b){if(a.Sb)a=!0;else{b=new gf(b,this);var c=a.listener,d=a.lc||a.src;a.Zb&&Bf(a);a=c.call(d,b)}return a}
function wf(a){a=a[pf];return a instanceof mf?a:null}
var Cf="__closure_events_fn_"+(Math.random()*1E9>>>0);function uf(a){if(typeof a==="function")return a;a[Cf]||(a[Cf]=function(b){return a.handleEvent(b)});
return a[Cf]}
;function Df(){df.call(this);this.g=new mf(this);this.B=this;this.u=null}
H(Df,df);Df.prototype[hf]=!0;Df.prototype.addEventListener=function(a,b,c,d){sf(this,a,b,c,d)};
Df.prototype.removeEventListener=function(a,b,c,d){Af(this,a,b,c,d)};
function Ef(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.B;c=b.type||b;typeof b==="string"?b=new ef(b,a):b instanceof ef?b.target=b.target||a:(e=b,b=new ef(c,a),oe(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.i&&f>=0;f--){var g=b.g=d[f];e=Ff(g,c,!0,b)&&e}b.i||(g=b.g=a,e=Ff(g,c,!0,b)&&e,b.i||(e=Ff(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=Ff(g,c,!1,b)&&e}
Df.prototype.Ba=function(){Df.Fa.Ba.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,lf(d[e]);delete a.listeners[c];a.g--}}this.u=null};
Df.prototype.ra=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function Ff(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Sb&&g.capture==c){var h=g.listener,l=g.lc||g.src;g.Zb&&of(a.g,g);e=h.call(l,d)!==!1&&e}}return e&&!d.defaultPrevented}
;function Gf(a){Df.call(this);var b=this;this.A=this.i=0;this.Ea=a!=null?a:{Ha:function(e,f){return setTimeout(e,f)},
xa:function(e){clearTimeout(e)}};
var c,d;this.l=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return B(function(e){return A(e,Hf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.A||If(this)}
y(Gf,Df);function Jf(){var a=Kf;Gf.g||(Gf.g=new Gf(a));return Gf.g}
Gf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ea.xa(this.A);delete Gf.g};
Gf.prototype.ya=function(){return this.l};
function If(a){a.A=a.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return a.l?((b=window.navigator)==null?0:b.onLine)?c.M(3):A(c,Hf(a),3):A(c,Hf(a),3);If(a);c.g=0})},3E4)}
function Hf(a,b){return a.s?a.s:a.s=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.Ea.Ha(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.B=[h.i];h.o=0;h.s=0;a.s=void 0;a.i&&(a.Ea.xa(a.i),a.i=0);g!==a.l&&(a.l=g,a.l?Ef(a,"networkstatus-online"):Ef(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.M(3)}})})}
;function Lf(a,b){this.i=a;this.m=b;this.l=0;this.g=null}
Lf.prototype.get=function(){if(this.l>0){this.l--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Mf(a,b){a.m(b);a.l<100&&(a.l++,b.next=a.g,a.g=b)}
;function Nf(a){Of||(Of=Pf());Of(a)}
var Of;function Pf(){if(typeof MessageChannel!=="undefined"){var a=new MessageChannel,b={},c=b;a.port1.onmessage=function(){if(b.next!==void 0){b=b.next;var d=b.Fd;b.Fd=null;d()}};
return function(d){c.next={Fd:d};c=c.next;a.port2.postMessage(0)}}return function(d){C.setTimeout(d,0)}}
;function Qf(){this.l=this.g=null}
Qf.prototype.add=function(a,b){var c=Rf.get();c.set(a,b);this.l?this.l.next=c:this.g=c;this.l=c};
Qf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.l=null),a.next=null);return a};
var Rf=new Lf(function(){return new Sf},function(a){return a.reset()});
function Sf(){this.next=this.scope=this.g=null}
Sf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Sf.prototype.reset=function(){this.next=this.scope=this.g=null};var Tf,Uf=!1,Vf=new Qf;function Wf(a,b){Tf||Xf();Uf||(Tf(),Uf=!0);Vf.add(a,b)}
function Xf(){var a=Promise.resolve(void 0);Tf=function(){a.then(Yf)}}
function Yf(){for(var a;a=Vf.remove();){try{a.g.call(a.scope)}catch(b){Mb(b)}Mf(Rf,a)}Uf=!1}
;function Zf(a){this.g=0;this.u=void 0;this.m=this.l=this.i=null;this.o=this.s=!1;if(a!=je)try{var b=this;a.call(void 0,function(c){$f(b,2,c)},function(c){$f(b,3,c)})}catch(c){$f(this,3,c)}}
function ag(){this.next=this.context=this.l=this.i=this.g=null;this.m=!1}
ag.prototype.reset=function(){this.context=this.l=this.i=this.g=null;this.m=!1};
var bg=new Lf(function(){return new ag},function(a){a.reset()});
function cg(a,b,c){var d=bg.get();d.i=a;d.l=b;d.context=c;return d}
Zf.prototype.then=function(a,b,c){return dg(this,cf(typeof a==="function"?a:null),cf(typeof b==="function"?b:null),c)};
Zf.prototype.$goog_Thenable=!0;Zf.prototype.cancel=function(a){if(this.g==0){var b=new eg(a);Wf(function(){fg(this,b)},this)}};
function fg(a,b){if(a.g==0)if(a.i){var c=a.i;if(c.l){for(var d=0,e=null,f=null,g=c.l;g&&(g.m||(d++,g.g==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.g==0&&d==1?fg(c,b):(f?(d=f,d.next==c.m&&(c.m=d),d.next=d.next.next):gg(c),hg(c,e,3,b)))}a.i=null}else $f(a,3,b)}
function ig(a,b){a.l||a.g!=2&&a.g!=3||jg(a);a.m?a.m.next=b:a.l=b;a.m=b}
function dg(a,b,c,d){var e=cg(null,null,null);e.g=new Zf(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.l=c?function(h){try{var l=c.call(d,h);l===void 0&&h instanceof eg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;ig(a,e);return e.g}
Zf.prototype.B=function(a){this.g=0;$f(this,2,a)};
Zf.prototype.D=function(a){this.g=0;$f(this,3,a)};
function $f(a,b,c){if(a.g==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.B,f=a.D;if(d instanceof Zf){ig(d,cg(e||je,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var l=d.then;if(typeof l==="function"){kg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.u=c,a.g=b,a.i=null,jg(a),b!=3||c instanceof eg||lg(a,c))}}
function kg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function jg(a){a.s||(a.s=!0,Wf(a.A,a))}
function gg(a){var b=null;a.l&&(b=a.l,a.l=b.next,b.next=null);a.l||(a.m=null);return b}
Zf.prototype.A=function(){for(var a;a=gg(this);)hg(this,a,this.g,this.u);this.s=!1};
function hg(a,b,c,d){if(c==3&&b.l&&!b.m)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,mg(b,c,d);else try{b.m?b.i.call(b.context):mg(b,c,d)}catch(e){ng.call(null,e)}Mf(bg,b)}
function mg(a,b,c){b==2?a.i.call(a.context,c):a.l&&a.l.call(a.context,c)}
function lg(a,b){a.o=!0;Wf(function(){a.o&&ng.call(null,b)})}
var ng=Mb;function eg(a){Pa.call(this,a)}
H(eg,Pa);eg.prototype.name="cancel";function og(a,b){Df.call(this);this.i=a||1;this.l=b||C;this.o=E(this.Pg,this);this.s=F()}
H(og,Df);n=og.prototype;n.enabled=!1;n.La=null;n.Pg=function(){if(this.enabled){var a=F()-this.s;a>0&&a<this.i*.8?this.La=this.l.setTimeout(this.o,this.i-a):(this.La&&(this.l.clearTimeout(this.La),this.La=null),Ef(this,"tick"),this.enabled&&(pg(this),this.start()))}};
n.start=function(){this.enabled=!0;this.La||(this.La=this.l.setTimeout(this.o,this.i),this.s=F())};
function pg(a){a.enabled=!1;a.La&&(a.l.clearTimeout(a.La),a.La=null)}
n.Ba=function(){og.Fa.Ba.call(this);pg(this);delete this.l};var qg=/^[6-9]$/,rg=/<\/?(?:b|em)>/gi;function sg(a){this.g=a}
var tg=new sg({});function ug(a){a=vg(a);return pb(a)}
function wg(a){a=vg(a);return $a(a)}
function vg(a){return a===null?"null":a===void 0?"undefined":a}
;function xg(a,b,c,d,e,f){this.A=a instanceof ob?a:ug(a);this.g=b;this.l=c;this.s=d;this.i=e;this.m=f||tg;this.o=!1;switch(this.s){case 0:case 32:case 38:case 400:case 407:case 35:case 33:case 41:case 34:case 44:case 45:case 40:case 46:case 56:case 30:case 94:case 92:case 93:case 411:case 410:case 71:this.o=!0}}
xg.prototype.getHtml=function(){return qb(this.A).toString()};
xg.prototype.u=function(){return this.l};
xg.prototype.getType=function(){return this.s};var yg=/^\s/,zg=/\s+/,Ag=/\s+/g,Bg=/^\s+|\s+$/g,Cg=/^\s+$/,Dg=/<[^>]*>/g,Eg=/&nbsp;/g,Fg=/&#x3000;/g,Gg=[/&/g,/&amp;/g,/</g,/&lt;/g,/>/g,/&gt;/g,/"/g,/&quot;/g,/'/g,/&#39;/g,/{/g,/&#123;/g],Hg=document.getElementsByTagName("head")[0],Ig=0,Jg=1;function Kg(a){var b={};if(a)for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}
function Lg(a,b){function c(){return b}
b===void 0&&(b=a);return{Nb:c,Td:function(){return a},
vf:c,Sh:function(){return a<b},
equals:function(d){return d&&a==d.Td()&&b==d.vf()}}}
function Mg(a,b,c,d){if(b==null||b===""){if(!d)return;b=""}c.push(a+"="+encodeURIComponent(String(b)))}
function Ng(a,b){var c=[],d;for(d in a)Mg(d,a[d],c,b);return c.join("&")}
function Og(a){var b={},c=Math.max(a.indexOf("?"),a.indexOf("#"));a=a.substr(c+1);if(c>=0&&a){c=a.split("&");var d;for(a=0;a<c.length;++a)if(d=c[a])d=d.split("="),b[d[0]]=d[1]||""}return b}
function Pg(a){return!!a&&!Cg.test(a)}
function Qg(a){for(var b=Gg.length,c=0;c<b;c+=2)a=a.replace(Gg[c],Gg[c+1].source);return a}
function Rg(a){for(var b=Gg.length,c=0;c<b;c+=2)a=a.replace(Gg[c+1],Gg[c].source);a=a.replace(Eg," ");return a.replace(Fg,"\u3000")}
function Sg(a,b){return a&&(a.indexOf(" ")>-1||zg.test(a))?(a=a.replace(Ag," "),a.replace(b?Bg:yg,"")):a}
function Tg(a,b,c){c&&(a=a.toLowerCase(),b=b.toLowerCase());return b.length<=a.length&&a.substring(0,b.length)==b}
function Ug(){}
function Vg(a){var b=Wg;if(b.indexOf)return b.indexOf(a);for(var c=b.length,d=0;d<c;++d)if(b[d]===a)return d;return-1}
function Xg(){return 0}
function Yg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function Zg(a,b){a+="";b.length&&(a+="i"+b.join("i"),a+="k"+(ub(b,173)!=-1?14:1));return a}
;function $g(a,b,c){this.g=a;this.J=b;this.D=c||"";this.u=(Ig++).toString(36);this.B=this.g.toLowerCase();this.l=Sg(this.B);this.F={};this.A={};this.o=this.I=this.m=!1;this.H=1}
$g.prototype.getId=function(){return this.u};
function ah(a){a=parseInt(a.u,36);return isNaN(a)?-1:a}
function bh(a,b,c,d){a.m||(a.F[b]=c,d&&(a.A[b]=c))}
;function ch(a,b,c,d,e,f){this.l=a;this.g=b;this.i=c;this.o=d;this.m=e;this.u=f;this.s=!0;this.g?this.g.length&&this.g[0].getType()==33&&(this.m=this.s=!1):this.g=[];this.i||(this.i=tg)}
ch.prototype.getType=function(){return this.s};function dh(){}
dh.prototype.yd=function(){};
dh.prototype.redirect=function(){};
dh.prototype.xd=function(){return""};
dh.prototype.he=function(){};function eh(){this.l={};this.g={}}
eh.prototype.set=function(a,b){this.l[a]=b};
eh.prototype.has=function(a){return!!this.l[a]};
function fh(a,b,c){b in a.g||(a.g[b]=[]);a.g[b].push(c)}
;function gh(a,b,c,d,e,f){this.s=a;this.A=b;this.B=c;this.o=d;this.i=e;this.config_=f;this.u={};this.m={};this.g=[];this.l=!1;a=this.A;b=a.l;for(var g in b)if(c=d=g,d=b[d])this.u[c]=d,this.g.push(d);g=a.g;for(var h in g){a=b=h;c=g[b];d=this.m[a]||[];for(e=0;e<c.length;++e)if(b=c[e])d.push(b),this.g.push(b);this.m[a]=d}this.g.sort(hh);for(g=0;h=this.g[g++];)h.sa(this.B,this.o);this.s.he(this.o);this.o.Ue();for(g=0;h=this.g[g++];)h.N(this);for(g=0;h=this.g[g++];)h.ga(this.config_);for(g=0;h=this.g[g++];)h.nb(this.config_);
for(g=0;h=this.g[g++];)h.P(this.config_);this.l=!0}
function ih(a){if(a.l){for(var b,c=0;b=a.g[c++];)b.Ga();a.l=!1}}
gh.prototype.isActive=function(){return this.l};
gh.prototype.get=function(a){return this.u[a]};
function jh(a,b){return a.m[b]||[]}
function hh(a,b){a=Vg(a.getType());b=Vg(b.getType());return a<0?1:b<0?-1:a-b}
var Wg=[127,551,149,134,494,123,121,126,553,118,115,128,160,173,119,116,152,153,129,120,374,124,158,155,131,130,147,570,141,143,138,144,139,140,135,136];function M(a){this.l=a}
n=M.prototype;n.sa=function(){};
n.N=function(){};
n.ga=function(){};
n.nb=function(){};
n.P=function(){};
n.getType=function(){return this.l};
n.Ga=function(){};function kh(){this.l=149;this.g={};this.i=0}
y(kh,M);n=kh.prototype;n.N=function(a){this.A=a.get(127)};
n.P=function(a){if(a.connectionType==this.qb()){this.config_=a;var b=this.A.i,c="https:"==document.location.protocol;this.s=b.protocol||"http"+(c?"s":"")+"://";this.o=b.host||"clients1."+a.ec;this.u=b.xc;this.m=b.De}};
n.Ga=function(){lh(this);this.i=0};
n.Be=function(a,b,c){mh(this,a.getId(),a.g,b,c);return!0};
n.qb=function(){return 1};
n.Pc=function(){return this.i};
n.Lc=function(a){var b=this.g[a];b&&(nh(b),delete this.g[a])};
function mh(a,b,c,d,e){a.config_.Jd||lh(a);var f=new XMLHttpRequest;c=a.s+a.o+a.u+"?"+(a.m?a.m+"&":"")+(d?d+"&":"")+"q="+encodeURIComponent(c)+"&xhr=t&xssi=t";f.open("GET",c,!0);f.withCredentials=!0;a.config_.visitorData&&f.setRequestHeader("X-Goog-Visitor-Id",a.config_.visitorData);f.onreadystatechange=function(){if(f.readyState==4){switch(f.status){case 403:a.i=1E3;break;case 302:case 500:case 502:case 503:++a.i;break;case 200:var g=f.responseText;g.lastIndexOf(")]}'\n",0)==0&&(g=g.substring(5));
e(JSON.parse(g));default:a.i=0}a.Lc(b)}};
a.g[b]=f;f.send(null)}
function lh(a){for(var b in a.g)nh(a.g[b]);a.g={}}
function nh(a){a.onreadystatechange=Ug;var b=a.readyState;b!=0&&b!=4&&a.abort()}
;var oh;function ph(){this.l=153}
y(ph,M);function qh(a,b){a.length&&b.push({getType:function(){return 507},
position:2})}
;function rh(a){this.o=a}
rh.prototype.getType=function(){return this.o};
rh.prototype.s=function(){return!0};function sh(a){this.l=152;this.D=a}
H(sh,M);sh.prototype.zb=Ug;var th=Wb(),uh;if(uh=th){for(var vh=ac(),wh=0,xh=Ra(String(vh)).split("."),yh=Ra("10").split("."),zh=Math.max(xh.length,yh.length),Ah=0;wh==0&&Ah<zh;Ah++){var Bh=xh[Ah]||"",Ch=yh[Ah]||"";do{var Dh=/(\d*)(\D*)(.*)/.exec(Bh)||["","","",""],Eh=/(\d*)(\D*)(.*)/.exec(Ch)||["","","",""];if(Dh[0].length==0&&Eh[0].length==0)break;wh=Sa(Dh[1].length==0?0:parseInt(Dh[1],10),Eh[1].length==0?0:parseInt(Eh[1],10))||Sa(Dh[2].length==0,Eh[2].length==0)||Sa(Dh[2],Eh[2]);Bh=Dh[3];Ch=Eh[3]}while(wh==0)}uh=wh>=0}
var Fh=uh,Gh=J("Gecko")&&!(Qb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge"))&&!(J("Trident")||J("MSIE"))&&!J("Edge"),Hh=Vb(),Ih=Qb().toLowerCase().indexOf("webkit")!=-1&&!J("Edge");Yb();var Jh=Zb(),Kh=ke()&&Yb(),Lh=bc(),Mh=Nb&&Rb&&Rb.platform?Rb.platform==="macOS":J("Macintosh"),Nh=ke();var Oh;pe("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));function Ph(a,b){b?a.setAttribute("role",b):a.removeAttribute("role")}
function Qh(a,b,c){Array.isArray(c)&&(c=c.join(" "));var d="aria-"+b;c===""||c==void 0?(Oh||(c={},Oh=(c.atomic=!1,c.autocomplete="none",c.dropeffect="none",c.haspopup=!1,c.live="off",c.multiline=!1,c.multiselectable=!1,c.orientation="vertical",c.readonly=!1,c.relevant="additions text",c.required=!1,c.sort="none",c.busy=!1,c.disabled=!1,c.hidden=!1,c.invalid="false",c)),c=Oh,b in c?a.setAttribute(d,c[b]):a.removeAttribute(d)):a.setAttribute(d,c)}
function Rh(a){var b=a.getAttribute("aria-activedescendant");return(a.nodeType==9?a:a.ownerDocument||a.document).getElementById(b==null||b==void 0?"":String(b))}
function Sh(a,b){var c="";b&&(c=b.id);Qh(a,"activedescendant",c)}
;var Th=document.documentElement.style.opacity!=void 0,Uh={rtl:"right",ltr:"left"};function Vh(a,b){try{if(a.setSelectionRange)a.setSelectionRange(b,b);else if(a.createTextRange){var c=a.createTextRange();c.collapse(!0);c.moveStart("character",b);c.select()}}catch(d){}}
function Wh(a){for(var b=0,c=0;a;){b+=a.offsetTop;c+=a.offsetLeft;try{a=a.offsetParent}catch(d){a=null}}return{Bc:b,Ta:c}}
function Xh(a){try{return Yh(a).activeElement==a}catch(b){}return!1}
function N(a,b){a=document.createElement(a);b&&(a.className=b);return a}
function P(a){return N("div",a)}
function Zh(a,b){a.innerHTML!=b&&rb(a,ug(b))}
function $h(a,b){a.dir!=b&&(a.dir=b,a.style.textAlign=Uh[b])}
function ai(a){a&&(a.preventDefault&&a.preventDefault(),a.returnValue=!1);return!1}
function bi(a){if(a=a||window.event)a.stopPropagation&&a.stopPropagation(),a.cancelBubble=a.cancel=!0;return ai(a)}
function ci(a){var b=N("a");nb(b,"#ifl");b.className="sbsb_i sbqs_b";a.appendChild(b);return b}
function di(a){var b=a||window;a=b.document;var c=b.innerWidth;b=b.innerHeight;if(!c){var d=a.documentElement;d&&(c=d.clientWidth,b=d.clientHeight);c||(c=a.body.clientWidth,b=a.body.clientHeight)}return{Ke:c,Yd:b}}
function Yh(a){return a?a.ownerDocument||a.document:window.document}
function ei(a){return a?(a=Yh(a),a.defaultView||a.parentWindow):window}
function fi(){return Th?"opacity":"filter"}
function gi(a){return Th?a+"":"alpha(opacity="+Math.floor(a*100)+")"}
;function hi(){this.o=507;ii(this)}
y(hi,rh);hi.prototype.g=function(){return this.i};
function ji(a,b,c,d){ii(a,c,d);rb(a.l,Be(Fe,b))}
function ii(a,b,c){a.i=P("sbfl_a");a.l=P("sbfl_b");a.l.onclick=function(){c&&c.openReportForm&&c.openReportForm(b)};
a.i.appendChild(a.l)}
;var ki=[30,35,33,41],li=[39,10,21];function mi(a,b){sh.call(this,507);this.m=a;this.g=b}
y(mi,sh);mi.prototype.N=function(a){this.i=a.get(128)};
mi.prototype.sa=function(a,b){b.addRule(".sbfl_a","font-size:12px;font-style:italic;color:#777;margin:-5px -18px -5px 0");b.addRule(".sbsb_c[dir=ltr] .sbfl_a","text-align:right");b.addRule(".sbsb_c[dir=rtl] .sbfl_a","text-align:left");b.addRule(".sbfl_a:hover","color:#333;cursor:pointer");b.addRule(".sbfl_b","background:rgba(255,255,255,.9)")};
mi.prototype.Hb=function(){return new hi};
function ni(a){return a.map(function(b){return{label:b.g}})}
mi.prototype.Ab=function(a,b){a=wb(this.i.m,function(c){a:if(ki.indexOf(c.getType())>=0)c=!1;else{c=c.i||[];for(var d=v(li),e=d.next();!e.done;e=d.next())if(c.indexOf(e.value)>=0){c=!1;break a}c=!0}return c},this);
a.length>0?(ji(b,this.m,ni(a),this.g),b.g().style.display=""):b.g().style.display="none"};var re=ha(['<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.16667 14.1667H7.50001V6.66667H9.16667V14.1667ZM12.5 6.66667H10.8333V14.1667H12.5V6.66667ZM15.8333 3.33333V4.16667H15V17.5H5.00001V4.16667H4.16667V3.33333H7.50001V2.5H12.5V3.33333H15.8333ZM14.1667 4.16667H5.83334V16.6667H14.1667V4.16667Z" fill="#030303"/></svg>']),oi=ha(["#ps"]);
function pi(a,b,c,d,e,f,g){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=f;this.Y=g;this.B=!0;this.A=!1;this.i=P("sbpqs_d");this.u=P();this.O=N("span","sbpqs_a");this.J&&(this.l=N("a"),nb(this.l,ib(oi)),this.l.className="sbsb_i",this.I=P("fr sbpqs_b"),this.u.appendChild(this.I),this.I.appendChild(this.l),this.m=P("sbpqs_c"),rb(this.m,Be(Fe,this.Y)),Ph(this.m,"alert"));this.u.appendChild(this.O);this.i.appendChild(this.u);this.m&&this.i.appendChild(this.m)}
y(pi,rh);pi.prototype.g=function(){return this.i};
pi.prototype.s=function(){return this.B};
function qi(a,b,c,d,e){a.A=!1;a.B=!0;a.ca=c;a.F=d;a.u.style.display="";rb(a.O,Be(Fe,b));a.J&&(a.m.style.display="none",b=qe(),a.l.textContent="",a.l.appendChild(b),a.l.onclick=function(f){ri(a,f)},a.l.title=e)}
function ri(a,b){a.A=!0;si(a.X,a.ca,function(){a.A&&(ti(a.W),a.i.onmouseover=a.i.onmouseout=a.i.onclick=null,a.u.style.display="none",a.m.style.display="",a.D.i==a.F&&ui(a.H),a.D.g==a.F&&(vi(a.D),wi(a.H)),a.B=!1)});
bi(b)}
;function xi(){sh.call(this,35)}
y(xi,sh);n=xi.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(){return new pi(this.u,this.m,this.g,this.i,this.B,this.A,this.o)};
n.Ab=function(a,b){qi(b,a.getHtml(),a.g,a.l,this.s)};
n.zb=function(a,b,c){yi(c,b.g,1)};function zi(a,b,c,d,e,f,g,h){this.o=35;this.X=b;this.W=c;this.H=d;this.D=e;this.J=g;this.Y=h;this.B=!0;this.A=!1;this.l=P("sbpqs_d");this.m=P();this.O=N("span","sbpqs_a");this.J&&(this.u=N("a"),nb(this.u,"#ps"),this.u.className="sbsb_i",this.I=P("fr sbpqs_b"),this.m.appendChild(this.I),this.I.appendChild(this.u),this.i=P("sbpqs_c"),rb(this.i,Be(Fe,this.Y)),Ph(this.i,"alert"));this.m.appendChild(this.O);this.l.appendChild(this.m);this.i&&this.l.appendChild(this.i)}
y(zi,rh);zi.prototype.g=function(){return this.l};
zi.prototype.s=function(){return this.B};
zi.prototype.ea=function(a){this.A=!0;si(this.X,this.ca,E(this.na,this));return bi(a)};
zi.prototype.na=function(){this.A&&(ti(this.W),this.l.onmouseover=this.l.onmouseout=this.l.onclick=null,this.m.style.display="none",this.i.style.display="",this.D.i==this.F&&ui(this.H),this.D.g==this.F&&(vi(this.D),wi(this.H)),this.B=!1)};function Ai(){sh.call(this,35)}
y(Ai,sh);n=Ai.prototype;n.sa=function(a,b){b.addRule(".sbpqs_a","color:#52188c");b.addRule(".sbdd_a[dir=ltr] .sbpqs_a","padding-right:8px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_a","padding-left:8px");b.addRule(".sbdd_a[dir=ltr] .sbpqs_b","padding-right:3px");b.addRule(".sbdd_a[dir=rtl] .sbpqs_b","padding-left:3px");b.addRule(".sbpqs_c","color:#666;line-height:22px")};
n.N=function(a){this.g=a.get(123);this.i=a.get(118);this.m=a.get(189);this.u=a.get(127);this.B=a.get(128)};
n.ga=function(a){this.P(a)};
n.P=function(a){this.A=a.rd;this.s=a.md;this.o=a.ld};
n.Hb=function(a){return new zi(this.u,this.m,this.g,this.i,this.B,a,this.A,this.o)};
n.Ab=function(a,b){var c=a.getHtml(),d=a.g;a=a.l;var e=this.s;b.A=!1;b.B=!0;b.ca=d;b.F=a;b.m.style.display="";rb(b.O,Be(Fe,c));b.J&&(b.i.style.display="none",rb(b.u,Be(Fe,e)),b.u.onclick=E(b.ea,b))};
n.zb=function(a,b,c){yi(c,b.g,1)};function Bi(){this.l=134;this.i={}}
y(Bi,M);n=Bi.prototype;n.N=function(a){this.m=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={});window.google.sbox["d"+this.m]=E(this.Pe,this)};
n.P=function(a){this.A=wg("//"+(a.nd||"clients1."+a.ec)+"/complete/deleteitems");this.s=a.vd;this.o=a.authuser;this.u=a.clientName};
n.Ga=function(){Ci(this)};
function Ci(a){a.g&&(Di.removeChild(a.g),a.g=null)}
n.Pe=function(a){Ci(this);a=a[0];var b=this.i[a];b&&(delete this.i[a],b())};
var Di=Hg;function Ei(){this.l=189}
y(Ei,M);Ei.prototype.N=function(a){this.g=a.get(134);this.i=a.get(123);this.s=a.get(118);this.A=a.get(553)};
Ei.prototype.ga=function(a){this.o=a.qf};
Ei.prototype.P=function(a){this.m=a.vd;this.u=!(!this.g||!this.m);this.o&&(a=this.s.g?3E3:0,window.setTimeout(E(this.B,this),a),this.o=!1)};
function si(a,b,c){a=a.g;a.i[b]=c;c=new Map;"1"===Og(window.location.search).ssl_dbg&&c.set("ssl_dbg","1");c.set("delq",b);c.set("client",a.u);c.set("callback","google.sbox.d"+a.m);b=a.A;c.set("tok",a.s);a.o&&c.set("authuser",a.o);a.g=N("script");b=ab(b).toString();var d=b.split(/[?#]/),e=/[?]/.test(b)?"?"+d[1]:"";c=He(d[0],e,/[#]/.test(b)?"#"+(e?d[2]:d[1]):"",c);tb(a.g,c);Di.appendChild(a.g)}
Ei.prototype.B=function(){var a=Fi(this.A,"",void 0,void 0,!0);Gi(this.i,a);Hi(this.i)};function Ii(){this.l=156}
y(Ii,M);Ii.prototype.N=function(a){this.m=a.get(189)};
Ii.prototype.i=function(a){var b=this.m,c={};b.u&&(c.tok=b.m);"1"===Og(window.location.search).ssl_dbg&&(c.ssl_dbg="1");for(var d in c)bh(a,d,c[d]);return 1};
Ii.prototype.g=function(){return 12};function Ji(a){this.l=156;this.o=a;this.m=null}
H(Ji,M);Ji.prototype.i=function(a){var b=1,c=a.D;a=Pg(a.g);var d=c=="focus"||c=="input";c=this.o.SEARCHBOX_INPUT_AUTOFOCUS&&c=="mousedown"&&this.m&&!this.m.isVisible();a||!d&&!c||(b=2);return b};
Ji.prototype.g=function(){return 2};
Ji.prototype.N=function(a){this.m=a.get(128)};function Ki(){this.l=157}
y(Ki,M);function Li(){this.l=156}
y(Li,M);Li.prototype.i=function(a){var b=Og(Ab(window.location.href));b.v&&bh(a,"video_id",b.v,!0);return 1};
Li.prototype.g=function(){return 24};function Mi(a,b,c){this.l=598;this.I=b;this.A=c;this.s="";this.i=a;this.u=!1}
y(Mi,M);Mi.prototype.N=function(a){this.F=a.get(553);this.g=a.get(128);this.D=a.get(118);this.B=a.get(150)};
Mi.prototype.ga=function(a){this.m=a.kd;this.H=a.mf};
function Ni(a,b){a.s=b;a.F.qd(a.s)}
function Oi(a){if(!a.I||a.g.isVisible())return!1;var b=a.D.g;if(!b||b.length==0)return!1;if(b!=a.m)return a.A=="always"&&a.g&&a.g.m&&a.g.m.length>0&&Pi(a.g),!1;if(a.i&&a.i.getRefinementsTuple){var c=a.i.getRefinementsTuple();if(c){var d=c[0];d=="ClearBySearchbox"?a.o=[]:d=="FromSearchResponse"&&a.u&&(a.o=c[1],a.u=!1)}}if(!a.o||a.o.length<=0)return a.g&&a.g.m&&a.g.m.length>0?(Pi(a.g),!1):a.A=="always"||a.A=="fallback";c=[];for(var e=d=0;e<a.o.length&&!(c.length>=a.H);++e){var f=a.o[e];f&&f.length>
0&&c.push(new xg(a.B.bold(b,f),f,d++,0,[71],null))}c.length>0&&Qi(a.g,c,!1);return!1}
;function Ri(){this.l=156}
y(Ri,M);Ri.prototype.N=function(a){this.m=a.get(598)};
Ri.prototype.i=function(a){var b=this.m,c;a:{if(b.i&&b.i.getPreviousQuery&&(c=b.i.getPreviousQuery()))break a;c=null}var d;d=(d=Og(Ab(window.location.href)))?(d=d.search_query||d.q)&&d==b.m:!1;c&&c!=b.m?(b.u=!0,b.m=c,Ni(b,c)):d||b.s==""?d&&b.s==""&&Ni(b,b.m):Ni(b,"");return a.D!="mousedown"&&a.D!="focus"||!Oi(this.m)?1:2};
Ri.prototype.g=function(){return 46};function Si(){this.l=149;this.i=Hg;this.g={}}
y(Si,M);n=Si.prototype;n.N=function(a){this.D=a.get(127);this.u=a.i.getId()};
n.ga=function(){"google"in window||(window.google={});"sbox"in window.google||(window.google.sbox={})};
n.P=function(a){this.config_=a;a.connectionType==this.qb()&&(a=this.D.i,this.s=a.protocol,this.o=a.host,this.B=a.xc,this.A=a.De,this.F="https:"==document.location.protocol,Ti(this,E(this.Qe,this)),(new Image).src=this.s+this.o+"/generate_204")};
n.Ga=function(){Ti(this,null);Ui(this)};
n.Be=function(a,b,c,d){c=a.getId();var e=a.g;this.config_.Jd||Ui(this);b=this.s+this.o+this.B+"?"+(this.A?this.A+"&":"")+(b?b+"&":"");a=[];Mg("q",e,a,!0);this.config_.Je||Mg("callback","google.sbox.p"+this.u,a);if(this.F){e="";for(var f=4+Math.floor(Math.random()*32),g,h=0;h<f;++h)g=Math.random()<.3?48+Math.floor(Math.random()*10):(Math.random()>.5?65:97)+Math.floor(Math.random()*26),e+=String.fromCharCode(g);Mg("gs_gbg",e,a)}e=N("script");this.config_.ig&&e.setAttribute("nonce",this.config_.ig);
tb(e,wg(b+a.join("&")));e.charset="utf-8";this.g[c]=e;this.m=d;this.i.appendChild(e);return!0};
n.qb=function(){return 0};
n.Pc=function(){return 0};
n.Lc=function(a){var b=this.g[a];b&&(this.i.removeChild(b),delete this.g[a])};
function Ui(a){for(var b in a.g)a.i.removeChild(a.g[b]);a.g={};a.m=null}
n.Qe=function(a){this.m&&this.m(a)};
function Ti(a,b){b||(b=Ug);var c=window.google;a.config_.Je?c.ac.h=b:c.sbox["p"+a.u]=b}
;function Vi(){this.l=115;this.o={}}
y(Vi,M);n=Vi.prototype;n.N=function(a){this.m=a.get(116);if(a=jh(a,154))for(var b,c=0;b=a[c++];)this.o[Wi]=b};
n.P=function(){this.g=!1};
n.Ga=function(){Xi(this)};
n.isVisible=function(){return this.g};
n.getHeight=function(){return this.g?this.m.getHeight():0};
function Xi(a){if(a.g){var b=a.m;b.B=0;Yi(b.o.m,!1);Zi(b.O,!1);Zi(b.i,!1);$i(b,b.W);aj(b.F,9);a.g=!1}}
var bj={Zd:"left",isFullWidth:!0,pb:null,marginWidth:0};function cj(){this.l=118}
y(cj,M);n=cj.prototype;n.N=function(a){this.m=a.get(119);this.A=a.get(130);this.X=a.get(145);this.s=a.get(117);this.I=a.get(123);this.B=a.get(374);this.F=a.get(121);this.Y=a.get(553);this.i=a.get(128);this.J=a.get(139);this.ca=a.get(173);this.ea=jh(a,160)};
n.ga=function(a){this.config_=a;this.g=this.o=this.m.g.value||""};
n.P=function(a){this.config_=a;this.D=this.O=!1;dj(this)};
function ej(a){var b={};aj(a.s,11,b);!b.cancel&&a.config_.Sf&&Nf(function(){var c=a.i;Hi(c.D);fj(c)})}
function gj(a,b){if(a.config_.Ac==0||a.config_.Ac==2||a.config_.Ac==3&&!a.o&&!b)return!1;a:{if(hj(a.i)&&(a.i.i!=null?b=ij(a.i):(b=a.i,b=hj(b)?b.m[0]:null),b.o))break a;b=null}var c;if(c=b){if(c=b=b.g)c=a.o,c=!(c||b?c&&b&&c.toLowerCase()==b.toLowerCase():1);c?(a.o=a.g,Tg(b,a.g,!0)&&(b=a.g+b.substr(a.g.length)),jj(a,b,Lg(b.length),"",!0),kj(a,b,!0),c=!0):c=!1}return c?(a.B.add(8),!0):!1}
function jj(a,b,c,d,e){a.config_.df&&!a.i.isVisible()&&d=="mousedown"&&lj(a.i,c,d);var f=!1,g=!1;if(b!=a.g||d=="onremovechip")Tg(d,"key")?a.B.add(1):d=="paste"&&a.B.add(2),f=!0,mj(a,b),aj(a.s,1,{Vb:d,pb:a.u}),g=F(),a.H||(a.H=g),a.W=g,Pg(b)&&(e=!0),g=!0;b=Fi(a.Y,b,c,d);switch(b.H){case 3:b.o=!0;case 2:e=!0;break;case 4:e=!1}e?(f&&(f=a.i,f.s&&!f.A&&(f.A=window.setTimeout(E(f.clear,f),f.config_.Tf))),a.O&&bh(b,"gs_is",1),Gi(a.I,b)):g&&(a.i.clear(),Hi(a.I));aj(a.s,2,{Vb:d})}
function wi(a){a=a.m;if(!a.u)try{a.g.focus(),a.u=!0,nj(a)}catch(b){}}
function oj(a,b){mj(a,b);pj(a.m);aj(a.s,4,{pb:a.u,input:b})}
function ui(a){a.g!=a.o&&mj(a,a.o);aj(a.s,5,{input:a.o,Lg:a.i.m,pb:a.u});pj(a.m)}
n.getHeight=function(){return this.m.getHeight()};
function qj(a){if(a.ca){if(a.config_.Sc)return!0;for(var b,c=0;b=a.ea[c++];)if(b.isEnabled())return!0}return!1}
n.clear=function(){this.g&&(mj(this,""),this.m.clear(),aj(this.s,1),aj(this.s,16),this.i.clear())};
function rj(a,b){var c=a.m.s.Nb();a.u==b?hj(a.i)&&c==a.g.length&&(a.i.i!=null?a.config_.jc&&!a.config_.Na&&yi(a.F,ij(a.i).g,6):a.config_.ge&&gj(a,!0)):a.A&&c==0&&a.A.g()}
function sj(a){var b=a.m.s.Nb();return a.config_.Na&&hj(a.i)&&a.i.i!=null&&b===a.g.length}
function kj(a,b,c){a.g=b||"";dj(a);pj(a.m);c||aj(a.s,4,{pb:a.u,input:a.g})}
function dj(a){var b=tj(a.X,a.g);if(b!=a.u){var c=a.m;c.o&&(c.o.dir=b);c.g.dir=b;c.B&&(c.B.dir=b);if(c.Bb){c=c.g;var d=0,e=c.style;c.nodeName!="INPUT"&&(d+=1);e.left=e.right="";e[b=="rtl"?"right":"left"]=d+"px"}a.u=b}}
function mj(a,b){a.g=a.o=b||"";dj(a)}
;function uj(){this.l=128}
y(uj,M);n=uj.prototype;n.N=function(a){this.o=a.get(129);this.O=a.get(145);this.I=a.get(115);this.D=a.get(123);this.u=a.get(118);this.ca=a.get(147);this.W=jh(a,153);this.Y=a.get(553);this.H=a.get(184);this.ea=a.get(157)};
n.ga=function(){this.W.sort(Xg)};
n.P=function(a){this.config_=a;this.i=this.g=null;this.s=this.F=!1;this.X=!0;this.B="";this.J=0};
n.Ga=function(){this.A&&(window.clearTimeout(this.A),this.A=null);this.m=null;fj(this)};
function Qi(a,b,c){var d=a.H&&a.H.i(b);a.clear();a.m=b;var e=hj(a)?b[0].g:a.u.o;a:{var f=e;if(a.O.g){for(var g=!1,h=!1,l,k=0;k<f.length;++k)if(l=f.charAt(k),!vj.test(l)&&(wj.test(l)?h=!0:g=!0,h&&g)){f=!0;break a}f=!1}else f=!0}f&&(e=a.u.o);a.B=tj(a.O,e);if(a.config_.wg&&hj(a)&&c&&!Nh){a.F=!0;c=a.o;if(c.o){c.F=a.B;xj(c);e=!1;for(f=0;g=b[f++];)yj(c,g)&&(e=!0);c=e}else c=!1;e=b[0].m.g.a||"";e=Rg(e);b=a.ca;f=0;e&&(b.g||zj(b),Aj(b),e in b.m?f=b.m[e]:(Zh(b.g,Qg(e)),b.m[e]=f=b.g.offsetWidth,Zh(b.g,"")));
a.J=f}else{a.F=!1;b=a.o;if(a.F||!a.config_.Hg&&!hj(a))c=[];else{c=[];e=[];for(f=0;a.W[f++]&&!qh(a.m,e););(f=e?e.length:0)&&(f-=Bj(e,c,0));for(g=0;g<a.m.length;++g)c.push(a.m[g]);f&&(f-=Bj(e,c,1));a.config_.Pf&&c.push(1);f&&(f-=Bj(e,c,2));f&&Bj(e,c,3);a.config_.Wd&&c.push(2);a.ea&&c.length>1&&c[0].getType()==5&&c.splice(1,0,3)}if(b.o){b.F=a.B;xj(b);e=!1;for(f=0;g=c[f++];)if(g==1)g=b,g.B?g.B.style.display="":(h=N("li"),l=h.style,l.position="relative",l.textAlign="center",l.whiteSpace="nowrap",h.dir=
g.H,g.i=P(),g.i.className="sbsb_g",g.config_.Wd&&(g.i.style.paddingBottom="1px"),Cj(g,g.config_.Eg,g.i,13),g.config_.Of?Cj(g,g.config_.Md,g.i,8):g.config_.Qf&&Cj(g,g.config_.Fg,g.i,14),h.appendChild(g.i),h.onmousedown=E(g.jd,g),h.className=g.config_.zc,g.B=h),g.g.appendChild(g.B);else if(g==2)if(g=b,g.A)g.A.style.display="";else{h=P("sbsb_j "+g.config_.zc);l=N("a");l.id="sbsb_f";nb(l,"http://www.google.com/support/websearch/bin/answer.py?hl="+g.config_.Wc+"&answer=106230");var m=g.config_.jg;k={xg:!0};
if(m instanceof ob)k=m;else{m=String(m).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");if(k==null?0:k.hi)m=m.replace(/(^|[\r\n\t ]) /g,"$1&#160;");if(k==null?0:k.xg)m=m.replace(/(\r\n|\n|\r)/g,"<br>");if(k==null?0:k.ii)m=m.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>');k=pb(m)}rb(l,k);h.appendChild(l);h.onmousedown=E(g.jd,g);g.A=h;g.o.appendChild(g.A)}else g==3?(g=b,h=g.ca.pop(),h||(h=N("li"),Qh(h,"hidden",!0),h.l=!0,l=N("div",
"sbsb_e"),h.appendChild(l)),g.g.appendChild(h)):yj(b,g)&&(e=!0);c=e}else c=!1;a.J=0}d&&(a.i=a.H.l(),Dj(a,a.H.g()));c?Pi(a):a.clear()}
function Dj(a,b){if(a.g!=b){var c=a.g;a.g=b;Ej(a,c)}}
n.ze=function(){if(hj(this))if(this.s){var a=this.g;this.g==this.m.length-1?this.i=this.g=null:this.g==null?this.g=0:++this.g;this.i=this.g;Fj(this,a,E(this.ze,this))}else Pi(this)};
n.Ae=function(){if(hj(this))if(this.s){var a=this.g;this.m&&this.g!=0?this.g==null?this.g=this.m.length-1:--this.g:this.i=this.g=null;this.i=this.g;Fj(this,a,E(this.Ae,this))}else Pi(this)};
n.isVisible=function(){return this.s};
n.isEnabled=function(){return this.X};
function ij(a){return a.i!=null?a.m[a.i]:null}
function hj(a){return!(!a.m||!a.m.length)}
function Pi(a){if(!a.s){a:{var b=a.I,c=Wi;if(c in b.o){if(b.i){if(c==Wi)break a;Xi(b);b.i.i.s=!1}b.i=b.o[c];c=b.m;b=b.i;b!=c.u&&(c.u=b,b=b.g.o,c.I?b!=c.I&&c.s.replaceChild(b,c.I):c.s.appendChild(b),c.I=b)}}c=a.I;if(!c.g){b=c.m;var d=Yg(bj);if(c.i){var e=c.i.i;d.pb=e.B;d.marginWidth=e.J;var f=e.config_.Mg;f||(f=e.B=="rtl"?"right":"left");d.Zd=f}$i(b,d.pb||b.W);e=d.marginWidth;b.X!=e&&(f=b.H.style,e?(f.width=e+"px",f.height="1px"):f.height="",b.X=e);b.ea=d.isFullWidth;b.ca=d.Zd;Yi(b.o.m,!0);Zi(b.O,
!0);Zi(b.i,!0);aj(b.F,14);b.Ad();c.g=!0}a.s=!0}}
function fj(a){a.s&&(a.A&&(window.clearTimeout(a.A),a.A=null),Xi(a.I),a.s=!1)}
n.clear=function(){fj(this);this.m=null;this.F=!1;this.g!=null&&Gj(this.o,this.g);this.i=this.g=null;this.o.clear()};
function vi(a){a.g!=null&&Gj(a.o,a.g);a.i=a.g=null}
function lj(a,b,c){if(hj(a))Pi(a);else{var d=a.u.o;d&&(b=Fi(a.Y,d,b||a.u.m.s,c),Gi(a.D,b))}}
function Bj(a,b,c){for(var d=0,e,f=0;f<a.length;++f)(e=a[f])&&e.position==c&&(c==3?e.la&&e.la(b)&&++d:(b.push(e),++d));return d}
function Fj(a,b,c){var d;(d=a.g==null)||(d=(d=a.o.m[a.g])?d.s():!1);d?(Ej(a,b),b=a.o,c=a.g,c=c===void 0?null:c,c===null?b.u.removeAttribute("aria-activedescendant"):(c=b.m[c])&&c.s()&&(c=c.g(),b.config_.Na&&(c=c.querySelector('[role="gridcell"]')),c&&Sh(b.u,c)),a.g==null?ui(a.u):(b=a.m[a.g],b.getType(),kj(a.u,b.g))):(Gj(a.o,b),c())}
function Ej(a,b){b!=null&&Gj(a.o,b);a.g!=null&&(b=a.o,(a=b.m[a.g])&&a.s()&&Hj(a.g().parentNode,b.X))}
var Wi=Jg++;function Ij(){this.l=154}
y(Ij,M);Ij.prototype.N=function(a){this.i=a.get(128);this.g=a.get(129)};function Jj(){this.l=145;this.g=wj.test("x")}
y(Jj,M);Jj.prototype.sa=function(a){this.i=a.kc()};
function tj(a,b){var c=a.i;a.g&&(wj.test(b)?c="ltr":vj.test(b)||(c="rtl"));return c}
var vj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$"),wj=RegExp("^[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*(?:\\d[\x00- !-@[-`{-\u00bf\u00d7\u00f7\u02b9-\u02ff\u2000-\u2bff]*$|[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u2c00-\ufb1c\ufdfe-\ufe6f\ufefd-\uffff])");function Kj(){this.l=117;this.i=[];this.g={Oe:1}}
y(Kj,M);function Q(a,b,c,d,e,f){var g=Lj(a,b);g||(g={},a.i.push({element:b,Kf:g}));var h=g[c];h||(h=g[c]=[],a=Mj(a,c,b.Oe?window:ei(b),h),typeof c!=="string"?b[c]=a:b.addEventListener?b.addEventListener(c,a,!1):b["on"+c]=a);h.push({eg:!!f,Zc:!1,priority:e||0,process:d});h.sort(Nj);d.lf=c}
function Oj(a,b,c){if(a=Lj(a,b))if(a=a[c.lf])for(var d=0;b=a[d++];)if(b.process==c){b.Zc=!0;break}}
function aj(a,b,c){c=c||{};(a=a.g[b])&&a(c,c.Vb)}
Kj.prototype.ra=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)};
function Mj(a,b,c,d){return E(function(e,f){if(d.length){if(!e){e={};var g=c.event;g&&(g.keyCode&&(e.keyCode=g.keyCode),e.dg=!0)}e.Vb=f||b;f=e;for(var h,l,k=0;g=d[k++];)g.Zc?l=!0:h||(g.eg?Pj(g,f):h=g.process(f));if(l)for(l=0;h=d[l];)h.Zc?d.splice(l,1):++l;if(e.oc)return delete e.oc,e.dg&&(e=c.event||e),bi(e),e.returnValue=!1}},a)}
function Lj(a,b){for(var c,d=0;d<a.i.length;++d)if(c=a.i[d],c.element==b)return c.Kf;return null}
function Pj(a,b){Nf(function(){a.process(b)})}
function Nj(a,b){return b.priority-a.priority}
;function Qj(){this.l=494;this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}}
y(Qj,M);Qj.prototype.P=function(){this.reset()};
Qj.prototype.reset=function(){this.g={};this.o=this.u=0;this.i=-1;this.m=0;this.s={}};function Rj(){this.l=374}
y(Rj,M);Rj.prototype.P=function(){this.reset()};
Rj.prototype.add=function(a){this.g||(this.g={});this.g[a]=!0};
Rj.prototype.reset=function(){this.g={}};function Sj(){this.l=120;this.D=-1}
y(Sj,M);Sj.prototype.N=function(a){this.H=a.get(191);this.g=a.get(123);this.m=a.get(118);this.A=a.get(374);this.i=a.get(494);this.B=a.get(126);this.o=a.get(128);this.F=jh(a,311)};
Sj.prototype.ga=function(a){this.u=a.lg};
Sj.prototype.P=function(a){this.config_=a;this.reset()};
function Tj(a,b){var c=a.m.o;var d=[];d[27]=64;d[0]=Uj(a.config_.clientName);d[28]=Uj(a.config_.requestIdentifier);d[1]=b==void 0?"":b+"";b=a.A;var e=[];for(f in b.g)e.push(parseInt(f,10));d[26]=e.join("j");var f="";a.o.i!=null?f=a.o.i+"":(b=a.B.i,(b.s>=10||b.u.Pc()>=3)&&(f="o"));d[2]=f;f="";if(b=a.o.m){e=0;for(var g,h=0;g=b[h++];){g=Zg(g.getType(),g.i||[]);if(g!=l){e>1&&(f+="l"+e);f+=(l?"j":"")+g;e=0;var l=g}++e}e>1&&(f+="l"+e)}d[3]=f;l="";f=a.o.m;b=a.i.s;if(f)for(e=0;h=f[e++];)h=Zg(h.getType(),
h.i||[]),h in b&&delete b[h];if(b)for(k in b)l+=(l?"j":"")+k;d[35]=l;var k=a.i.i;d[33]=k>-1?String(k):"";d[4]=Math.max(a.m.H-a.s,0);d[5]=Math.max(a.m.W-a.s,0);d[6]=a.D;d[7]=F()-a.s;d[18]=Math.max(a.m.na-a.s,0);d[8]=a.g.Cb;l=a.g;l=(k=l.i)?l.g.m:0;d[25]=k?"1"+(a.config_.gf?"a":"")+(a.config_.Hd?"c":""):"";d[10]=l;k=a.g;d[11]=k.i?k.g.o:0;d[12]=a.g.na;f=a.g;k=f.ca;l=f.Y;f=f.ea;d[9]=k;d[22]=l;d[17]=f;d[13]=a.g.Bb;d[14]=a.g.H;d[15]=a.g.J;k=a.g;l=[];for(b=e=0;b<=Vj;++b)f=k.I[b],f==0?e++:(e=e==1?"0j":e>1?
b+"-":"",l.push(e+f),e=0);d[16]=l.join("j");d[36]=a.g.O;k=0;for(var m in a.i.g)k++;d[30]=k;d[31]=a.i.u;d[32]=a.i.o;d[19]=Uj(a.config_.td);m=a.i;l=a.B.g;k=!1;l&&(k=l.i.g.e||"");l=0;k?(l|=1,m.m>1&&(l|=2)):m.m>0&&(l|=2);m=l;d[20]=m==0?"":m+"";for(k=0;m=a.F[k++];)l=m.l,Wj[l]&&(d[l]=d[l]==void 0?Uj(m.g()):"");d=d.join(".").replace(Xj,"");if(a.H&&a.u){m=c+d;b:{k=a.u;l=[];if(k)for(e=b=f=0;e<k.length;++e){h=k.charCodeAt(e);if(h<32||h>127||!Yj[h-32]){k=[];break b}f<<=6;f|=Yj[h-32]-1;b+=6;b>=8&&(l.push(f>>
b-8&255),b-=8)}k=l}f=k;k={};k.chain=Array(4);k.buffer=Array(4);k.Vg=Array(4);k.padding=Array(64);k.padding[0]=128;for(l=1;l<64;++l)k.padding[l]=0;Zj(k);l=Array(64);f.length>64&&(Zj(k),ak(k,f),f=bk(k));for(b=0;b<f.length;++b)l[b]=f[b]^92;for(b=f.length;b<64;++b)l[b]=92;Zj(k);for(b=0;b<64;++b)k.buffer[b]=l[b]^106;ck(k,k.buffer);k.total=64;ak(k,dk(m));m=bk(k);Zj(k);ck(k,l);k.total=64;ak(k,m);m=bk(k);m=m.slice(0,8);typeof m==="string"&&(m=dk(m));k="";if(m){l=m.length;for(e=b=f=0;l--;)for(b<<=8,b|=m[e++],
f+=8;f>=6;)k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b>>f-6&63),f-=6;f&&(k+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b<<8>>f+8-6&63))}m=k}else m="";c={oq:c,gs_l:d+"."+m};a.config_.fg&&(c.q=a.m.g);return c}
Sj.prototype.reset=function(){this.s=F();++this.D;var a=this.m;a.H=0;a.W=0;a.na=0;this.A.reset();a=this.g;if(a.i){var b=a.g;b.m=0;b.o=0}a.Cb=0;a.s=0;a.na=0;a.ca=0;a.Y=0;a.ea=0;a.Bb=0;a.H=0;a.J=0;a.O=0;a.I=[];for(b=0;b<=Vj;++b)a.I[b]=0;for(b=0;a=this.F[b++];)a.reset();this.i.reset()};
function Uj(a){return a?a.replace(ek,"-"):""}
var Xj=/\.+$/,ek=/\./g,Wj=Kg([23]);function fk(){this.l=121}
y(fk,M);fk.prototype.sa=function(a){this.m=a.Qd()};
fk.prototype.N=function(a){this.g=a.get(347);this.s=a.get(130);this.F=a.get(117);this.A=a.get(123);this.o=a.get(118);this.H=a.get(120);this.I=a.get(128);this.B=a.get(139);this.u=a.s;this.D=jh(a,294)};
fk.prototype.P=function(a){this.config_=a};
function yi(a,b,c){if(a.D){for(var d=!1,e=0,f;f=a.D[e++];)f.g(b,c)==2&&(d=!0);if(d)return}if(Pg(b)||a.config_.lb||a.s&&a.s.lb()){if(qg.test(c)){if(a.m&&!a.i){d=a.m;b:{if(e=d.getElementsByTagName("input"))for(var g=0;f=e[g++];)if(f.name=="btnI"&&f.type.toLowerCase()!="submit"){e=f;break b}e=null}e?d=null:(e=N("input"),e.type="hidden",e.name="btnI",e.value="1",d.appendChild(e),d=e);a.i=d}}else a.i&&(a.m.removeChild(a.i),a.i=null);a.g&&a.config_.Mc&&gk(a.g,c);a.u.yd(c);hk(a);aj(a.F,12,{query:b})}}
fk.prototype.redirect=function(a){this.g&&this.config_.Mc&&gk(this.g);this.u.redirect(a);hk(this)};
function hk(a){Hi(a.A);a.A.o=null;a.H.reset();a.I.clear();if(a.o.o!=a.o.g){var b=a.o;b.o=b.g}a.B&&a.B.clear()}
;function ik(){this.l=553}
y(ik,M);ik.prototype.N=function(a){this.g=jh(a,156);a.get(126)};
ik.prototype.ga=function(){this.g.sort(jk)};
ik.prototype.P=function(a){this.config_=a;this.i=a.kd};
ik.prototype.qd=function(a){this.i=a};
function Fi(a,b,c,d,e){b=new $g(b,c||Lg(b.length),d||"");c=1;if(a.g){var f;for(d=0;f=a.g[d++];)f=f.i(b),f>c&&(c=f)}b.H=c;a.config_.Jc!=null&&bh(b,"ds",a.config_.Jc,!0);a.config_.Ce!=null&&bh(b,"swl",a.config_.Ce,!0);bh(b,"pq",a.i,!0);e&&!b.m&&(b.I=!0);b.m||(b.s=F(),"cp"in b.A||(a=b.J.Nb(),bh(b,"cp",a,!0)),bh(b,"gs_id",b.u),b.i=Ng(b.A)+":"+b.B,b.m=!0);return b}
function jk(a,b){return a.g()-b.g()}
;function kk(){this.l=123;this.A=!1;this.F=-1}
y(kk,M);n=kk.prototype;n.N=function(a){this.g=a.get(133);this.W=a.get(130);this.Ec=a.get(118);this.Fc=a.get(120);this.X=a.get(494);this.Ve=a.get(124);this.Db=a.get(125);this.Eb=a.get(230);this.Gc=a.get(127)};
n.P=function(a){this.u=this.Gc.g;this.config_=a;this.A=!0;this.m={};this.D=0;this.Re=a.rf;this.Se=a.Wf;this.Za=-1;this.i=this.config_.enableCaching&&!!this.g};
n.Ga=function(){this.A=!1;lk(this);this.m=this.o=null;Hi(this)};
function Gi(a,b){if(!(!a.A||a.Se||a.W&&a.W.l())){var c=!0,d=ah(b);d>a.F&&(a.F=d);++a.Cb;a.X.g[b.getId()]=!0;Pg(a.Ec.g)||Pg(b.g)||(d=a.X,d.i=Math.max(d.i,0));d=F();for(var e in a.m)d-a.m[e].s>2500&&mk(a,e);a.i&&(e=a.g.get(b))&&((c=a.Re||b.I)&&a.config_.Xf&&(b.o=!0),a.Db.process(e),e.o&&++a.na,a.o=null);c&&(a.o=b,a.B||a.pe())}}
function Hi(a){a.Za=a.F}
function ti(a){if(a.i){a=a.g;for(var b in a.i)for(var c=a.i[b].g,d,e=0;d=c[e++];)if(d.getType()==35){delete a.i[b];break}for(b=0;b<a.g.length;++b)a.g[b].reset()}}
function nk(a,b){return E(function(c){this.zd(c,b)},a)}
n.pe=function(){lk(this);if(!(this.u.Pc()>2)){var a=this.o;this.o=null;if(a){var b=[],c=a.F;if(c)for(var d in c)Mg(d,c[d],b);b=this.u.Be(a,b.join("&"),nk(this,a),E(this.zd,this));a.o||(++this.ca,b?(this.m[a.getId()]=a,++this.s):++this.Y);a=100;b=(this.s-2)/2;for(c=1;c++<=b;)a*=2;a<this.D&&(a=this.D);this.B=window.setTimeout(E(this.pe,this),a)}}};
function lk(a){a.B!=null&&(window.clearTimeout(a.B),a.B=null)}
function mk(a,b){a.u.Lc(b);delete a.m[b];a.s&&--a.s}
n.zd=function(a,b){if(this.A){if(!b&&(b=this.m[(a[2]||{}).j],!b))return;if(!b.o){var c=this.Ve;var d=b,e=a[0],f=a[1],g={};if(a=a[2])for(var h in a){var l=a[h];h in c.g&&(l=c.g[h].parse(l));g[h]=l}h=l=a=!1;for(var k,m=0;k=f[m++];)if((k[1]||0)==33?l=!0:a=!0,l&&a){h=!0;break}a=0;l=[];for(m=0;k=f[m++];){var p=k[1]||0;if(!h||p!=33){var r=k[0];c.m&&(r=c.i.bold(e.toLowerCase(),Rg(r).replace(Dg,"")));var q=l,t=q.push,w=Rg(r).replace(Dg,""),z=a++,I=k[3];t.call(q,new xg(r,w,z,p,k[2]||[],I?new sg(I):tg))}}c=
new ch(d,l,new sg(g),!1,!0,!1);this.Eb&&(c=Be(this.Eb,c));if(this.i)for(d=this.g,e=c,(e.g&&e.g[0]||e.l.g!="")&&e&&e.m&&(d.i[e.l.i]=e),f=0;f<d.g.length;++f)d.g[f].update(e);ah(b)<=this.Za?!b||b.g||c.o||(this.O=F()-b.s):(++this.ea,this.Db.process(c)||++this.Bb,this.D=c.i.g.d||0,b&&(mk(this,b.getId()),d=b.s,d=F()-d,b.g?(this.J+=d,this.H=Math.max(d,this.H),++this.I[d>ok?Vj:pk[Math.floor(d/100)]]):this.O=d));c&&(b=c.i.g.q||"")&&(this.Fc.u=b)}}};
var pk=[0,1,2,3,4,5,5,6,6,6,7,7,7,7,7,8,8,8,8,8],Vj=pk[pk.length-1]+1,ok=pk.length*100-1;function qk(){this.l=124;this.g={}}
y(qk,M);qk.prototype.N=function(a){this.i=a.get(150);if(a=jh(a,158))for(var b,c=0;b=a[c++];)this.g[b.Ph()]=b};
qk.prototype.P=function(a){this.m=a.Rc};function rk(){this.l=125}
y(rk,M);rk.prototype.N=function(a){this.o=a.get(117);this.u=a.get(118);this.s=a.get(494);this.g=jh(a,122);this.i=a.get(126);this.m=a.get(128);this.g.sort(sk)};
rk.prototype.process=function(a){var b=a,c=this.u.g.toLowerCase(),d=this.i.g;c=Sg(c);var e=b.l;b=e?e.l:Sg(b.l.g.toLowerCase());var f=(d=d?d.l:null)?d.l:"";e=(c.indexOf(b)==0?c.indexOf(f)==0?d&&d.getId()==e.getId()?0:b.length>=f.length?1:-1:1:-1)==1;c=e!=-1;if(e){if(this.g)for(b=0;e=this.g[b++];)a=e.l(a);d=this.i.g=a;a=d.l.g;e=d.g;this.m.isEnabled()&&(b=d.getType()==0,Qi(this.m,e,b));b=this.s;var g=d.l;f=g.getId();if(f in b.g){var h=d.g.length;h>0&&(Pg(g.g)||(b.i=h),g=g.s,g=F()-g,b.o+=g,++b.u);d.i.g.e&&
++b.m;delete b.g[f]}d=d.g;for(g=0;f=d[g++];)h=f.getType(),b.s[Zg(h,f.i||[])]=!0;aj(this.o,3,{input:a,Lg:e})}return c};
function sk(a,b){return a.g()-b.g()}
;function tk(){this.l=126}
y(tk,M);tk.prototype.N=function(a){this.i=a.get(123)};
tk.prototype.P=function(){this.g=null};var uk=["expflags","plugin"];function vk(){this.l=127;this.m={}}
y(vk,M);vk.prototype.N=function(a){a=jh(a,149);for(var b,c=0;b=a[c++];)this.m[b.qb()]=b};
vk.prototype.P=function(a){var b="https:"==document.location.protocol,c=[];Mg("client",a.clientName,c);Mg("hl",a.Wc,c);Mg("gl",a.Fe,c);Mg("sugexp",a.td,c);Mg("gs_rn",64,c);Mg("gs_ri",a.requestIdentifier,c);var d=Og(a.url||C.location.href);uk.filter(function(e){return d.hasOwnProperty(e)}).forEach(function(e){return c.push(e+"="+d[e])});
a.authuser&&Mg("authuser",a.authuser,c);this.i={protocol:"http"+(b?"s":"")+"://",host:a.nd||"clients1."+a.ec,xc:a.xc||"/complete/search",De:c.length?c.join("&"):""};this.g&&this.g.qb()==a.connectionType||(this.g=this.m[a.connectionType])};function wk(){this.l=191}
y(wk,M);function dk(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a.charCodeAt(d);e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:(b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b}
function Zj(a){a.chain[0]=1732584193;a.chain[1]=4023233417;a.chain[2]=2562383102;a.chain[3]=271733878;a.Xb=a.total=0}
function ck(a,b){for(var c=a.Vg,d=0;d<64;d+=4)c[d/4]=b[d]|b[d+1]<<8|b[d+2]<<16|b[d+3]<<24;var e=a.chain[0];b=a.chain[1];d=a.chain[2];for(var f=a.chain[3],g,h,l,k=0;k<64;++k)k<16?(g=f^b&(d^f),h=k):k<32?(g=d^f&(b^d),h=5*k+1&15):k<48?(g=b^d^f,h=3*k+5&15):(g=d^(b|~f),h=7*k&15),l=f,f=d,d=b,e=e+g+xk[k]+c[h]&4294967295,g=yk[k],b=b+((e<<g|e>>>32-g)&4294967295)&4294967295,e=l;a.chain[0]=a.chain[0]+e&4294967295;a.chain[1]=a.chain[1]+b&4294967295;a.chain[2]=a.chain[2]+d&4294967295;a.chain[3]=a.chain[3]+f&4294967295}
function ak(a,b,c){c||(c=b.length);a.total+=c;for(var d=0;d<c;++d)a.buffer[a.Xb++]=b[d],a.Xb==64&&(ck(a,a.buffer),a.Xb=0)}
function bk(a){var b=Array(16),c=a.total*8,d=a.Xb;ak(a,a.padding,d<56?56-d:64-(d-56));for(var e=56;e<64;++e)a.buffer[e]=c&255,c>>>=8;ck(a,a.buffer);for(e=d=0;e<4;++e)for(c=0;c<32;c+=8)b[d++]=a.chain[e]>>c&255;return b}
var Yj=[0,0,0,0,0,0,0,0,0,0,0,0,0,63,0,0,53,54,55,56,57,58,59,60,61,62,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,0,0,0,0,64,0,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,0,0,0,0,0],yk=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],xk=[3614090360,3905402710,606105819,3250441966,4118548399,1200080426,
2821735955,4249261313,1770035416,2336552879,4294925233,2304563134,1804603682,4254626195,2792965006,1236535329,4129170786,3225465664,643717713,3921069994,3593408605,38016083,3634488961,3889429448,568446438,3275163606,4107603335,1163531501,2850285829,4243563512,1735328473,2368359562,4294588738,2272392833,1839030562,4259657740,2763975236,1272893353,4139469664,3200236656,681279174,3936430074,3572445317,76029189,3654602809,3873151461,530742520,3299628645,4096336452,1126891415,2878612391,4237533241,1700485571,
2399980690,4293915773,2240044497,1873313359,4264355552,2734768916,1309151649,4149444226,3174756917,718787259,3951481745];function zk(){this.l=150}
H(zk,M);
zk.prototype.bold=function(a,b){b=Qg(b.replace(rg,""));a=Qg(Sg(a,!0));if(Tg(b,a))return a+"<b>"+b.substr(a.length)+"</b>";for(var c="",d=[],e=b.length-1,f=-1,g,h=0;g=b.charAt(h);++h)g==" "||g=="\t"?c.length&&(d.push({t:c,Tb:f,e:h+1}),c="",f=-1):(c+=g,f==-1?f=h:h==e&&d.push({t:c,Tb:f,e:h+1}));a=a.split(/\s+/);c={};for(f=0;e=a[f++];)c[e]=1;f=-1;a=[];g=d.length-1;for(h=0;e=d[h];++h)c[e.t]?(e=f==-1,h==g?a.push({Tb:e?h:f,e:h}):e&&(f=h)):f>-1&&(a.push({Tb:f,e:h-1}),f=-1);if(!a.length)return"<b>"+b+"</b>";
c="";for(g=e=0;f=a[g];++g)(h=d[f.Tb].Tb)&&(c+="<b>"+b.substring(e,h-1)+"</b> "),e=d[f.e].e,c+=b.substring(h,e);e<b.length&&(c+="<b>"+b.substring(e)+"</b> ");return c};function Ak(){this.l=146}
H(Ak,M);function Bk(a){JSON.parse('"\\u30'+a.split(",").join("\\u30")+'"')}
Bk("02,0C,0D,01,FB,F2,A1,A3,A5,A7,A9,E3,E5,E7,C3,FC,A2,A4,A6,A8,AA,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CA,CB,CC,CD,CE,CF,D2,D5,D8,DB,DE,DF,E0,E1,E2,E4,E6,E8,E9,EA,EB,EC,ED,EF,F3,9B,9C");Bk("F4__,AC,AE,B0,B2,B4,B6,B8,BA,BC,BE,C0,C2,C5,C7,C9_____,D0,D3,D6,D9,DC");Bk("D1,D4,D7,DA,DD");Bk("F4____,AC_,AE_,B0_,B2_,B4_,B6_,B8_,BA_,BC_,BE_,C0_,C2__,C5_,C7_,C9______,D0__,D3__,D6__,D9__,DC");Bk("D1__,D4__,D7__,DA__,DD");Bk("A6,AB,AD,AF,B1,B3,B5,B7,B9,BB,BD,BF,C1,C4,C6,C8,CF,D2,D5,D8,DB");Bk("CF,D2,D5,D8,DB");function Ck(){this.l=116;this.ea=!0;this.isDarkTheme=!!document.body.dataset.dt}
y(Ck,M);n=Ck.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff",d=this.isDarkTheme?"#3c4043":"#ccc",e=this.isDarkTheme?"#5f6368":"#d9d9d9";this.W=a.kc();b.addRule(".sbdd_a",(Nh?"margin-top:-1px;":"")+"z-index:989");b.addRule(".sbdd_a[dir=ltr] .fl, .sbdd_a[dir=rtl] .fr","float:left");b.addRule(".sbdd_a[dir=ltr] .fr, .sbdd_a[dir=rtl] .fl","float:right");Nh?b.addRule(".sbdd_b","background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("border-radius:0 0 3px 3px;")+"cursor:default"):b.addRule(".sbdd_b",
"background:"+c+";border:1px solid "+(d+";border-top-color:")+(e+";")+b.prefix("box-shadow:0 2px 4px rgba(0,0,0,0.2);")+"cursor:default");b.addRule(".sbdd_c","border:0;display:block;position:absolute;top:0;z-index:988")};
n.N=function(a){this.J=a.get(130);a.get(115);this.o=a.get(118);this.F=a.get(117);this.Y=a.i.getId()};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.g=P();this.g.className="gstl_"+this.Y+" sbdd_a";Zi(this.g,!1);this.O=this.g;this.H=P("fl");this.g.appendChild(this.H);this.A=P();this.g.appendChild(this.A);this.s=P("sbdd_b");this.A.appendChild(this.s);this.na=P();this.A.appendChild(this.na);this.config_.Vd&&(this.i=N("iframe","gstl_"+this.Y+" sbdd_c"),Zi(this.i,!1),(this.config_.Ia||document.body).appendChild(this.i));if(this.m=this.config_.ef)typeof this.m==="number"&&(this.m+=this.config_.hc[2],this.m-=Dk(this)),Ek(this,this.g,
this.m);Fk(this);(a.Ia||document.body).appendChild(this.g);a=this.F;var b=E(this.Ad,this);Q(a,a.g,8,b)};
n.P=function(a){this.config_=a;this.g.style.position=a.Lb};
n.getHeight=function(){this.B||(this.B=this.s?Math.max(this.s.offsetHeight,0):0);return this.B};
n.Ad=function(){this.B=0;Fk(this);if(this.i){var a=this.config_.Cd[0],b=this.i.style;this.config_.Lb!="relative"&&(b.top=this.g.style.top,b.left=this.g.offsetLeft+this.H.offsetWidth+"px");b=this.i;a=this.getHeight()+a;b.style.height=Math.max(a,0)+"px";Ek(this,this.i,this.s.offsetWidth)}this.u&&xj(this.u.g)};
function Fk(a){var b,c;if(c=a.u)c=a.u.g,c=c.config_.Nf||c.H==c.F?c.Za:null;var d=(b=c)?b.offsetWidth:Gk(a.o.m);var e=a.m;c=Dk(a);e?typeof e==="string"&&(e=null):a.X||!a.ea?a.A.style.display="inline-block":(a.A.style.display="",e=d+a.config_.hc[2]-c,Ek(a,a.g,e));if(a.config_.Lb!="relative"){var f="rtl"==Pe()!=(a.D=="rtl"),g=a.config_.Ia;var h={Ta:0,Bc:0};if(f||!g||g==document.body||a.config_.Od)h=Wh(a.o.m.F),b&&(h.Ta=Wh(b).Ta);b=h;h=e;e=a.config_.hc;g=e[1];e=e[0];e=b.Bc+a.o.getHeight()+e;if(a.ca==
"right"){h="rtl"==Pe()!=(a.D=="rtl");var l=a.config_.Ia;g=-g;if(h||!l||l==document.body)g+=(ei(a.g)||window).document.documentElement.clientWidth-d-b.Ta;d=g;h=e;b=void 0}else b=b.Ta+g,a.ca=="center"&&h&&(b+=(d-h)/2),h=e,d=void 0;e={Ta:0,Bc:0};a.config_.Lb=="absolute"&&a.config_.Ia&&a.config_.Ia!=document.body&&(f||a.config_.Od)&&(e=Wh(a.config_.Ia));g=a.g.style;g.top=h-e.Bc+"px";g.left=g.right="";b!=void 0?g.left=b+c-e.Ta+"px":(b=0,a.config_.Ia&&f&&(b=document.body.clientWidth-(e.Ta+a.config_.Ia.offsetWidth)),
g.right=d+c-b+"px")}}
function Ek(a,b,c){typeof c==="number"?c>0&&(a.config_.Ug?b.style.width=c+"px":b.style.minWidth=c+"px"):b.style.width=c}
function Zi(a,b){a&&(a.style.display=b?"":"none")}
function $i(a,b){if(a.D!=b){a.D=b;var c=a.config_.Ia;c&&c!=document.body&&(c.style.textAlign=b=="rtl"?"right":"left");$h(a.g,b)}}
function Dk(a){return a.J&&a.J.i()&&(a=a.o.m.B.offsetWidth,typeof a==="number")?a:0}
;function Hk(){this.l=119;this.W=!1;this.s=Lg(0);this.ca=-1;this.ea=!1;this.isDarkTheme=!!document.body.dataset.dt}
y(Hk,M);n=Hk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.D=a;this.g=a.Qc();Ph(this.g,"combobox");Qh(this.g,"haspopup",!1);Qh(this.g,"autocomplete","list");this.Ec=a.kc();a.Hc()||(b.addRule(".sbib_a","background:"+c+";"+b.prefix("box-sizing:border-box;")),a=Mh&&Ih||th?6:5,b.addRule(".sbib_b",b.prefix("box-sizing:border-box;")+"height:100%;overflow:hidden;padding:"+a+"px 9px 0"),b.addRule(".sbib_c[dir=ltr]","float:right"),b.addRule(".sbib_c[dir=rtl]","float:left"),b.addRule(".sbib_d",b.prefix("box-sizing:border-box;")+
"height:100%;unicode-bidi:embed;white-space:nowrap"),b.addRule(".sbib_d[dir=ltr]","float:left"),b.addRule(".sbib_d[dir=rtl]","float:right"),Fh&&b.addRule(".sbib_a input::-ms-clear","display: none"),b.addRule(".sbib_a,.sbib_c","vertical-align:top"))};
n.N=function(a){this.i=a.get(118);this.m=a.get(117);this.X=a.get(128);this.I=a.get(173);this.Bb=!!a.get(136);this.Fc=a.i.getId()};
n.ga=function(a){this.config_=a;this.J=a.Ob;this.O=a.cg;this.Gc=a.Id;this.u=Xh(this.g);this.Dc();var b=this;th&&Q(this.m,this.g,"beforedeactivate",function(c){b.ea&&(b.ea=!1,c.oc=!0)},10);
a=(cc()||J("iPad")||J("iPod"))&&Jh;Gh&&Ik(this);(Kh||a)&&Jk(this);this.F=this.g};
n.nb=function(a){var b=!!a.kf[130];if(this.Bb||qj(this.i)||b||a.sf)(this.A=this.D.get("gs_id"))?(b&&(this.B=this.D.get("sb_chc")),this.o=this.D.get("sb_ifc")):(this.A=P("gstl_"+this.Fc+" sbib_a"),a=this.A.style,this.O&&(a.width=this.O+"px"),this.J&&(a.height=this.J+"px"),a=this.g.style,a.border="none",a.padding=Hh||th?"0 1px":"0",a.margin="0",a.height="auto",a.width="100%",this.g.className=this.config_.Vc,b&&(this.B=P("sbib_d"),this.B.id=this.D.getId("sb_chc"),this.A.appendChild(this.B)),qj(this.i)&&
this.I&&(this.I.g.className+=" sbib_c",b=this.I,a=this.Ec,b.s!=a&&(b.g.dir=b.s=a),this.A.appendChild(this.I.g)),this.o=P("sbib_b"),this.o.id=this.D.getId("sb_ifc"),this.A.appendChild(this.o),Kk(this,this.A,this.o)),this.config_.pd&&this.g&&this.o&&(this.g.removeAttribute("role"),Ph(this.o,"combobox"),this.g.removeAttribute("aria-haspopup"),Qh(this.o,"haspopup",!0)),this.config_.Na&&this.g&&(b=this.D.getId("sbsg"),Qh(this.g,"controls",b),this.config_.pd&&this.o?(Qh(this.o,"haspopup","grid"),Qh(this.o,
"owns",b)):Qh(this.g,"haspopup","grid")),this.config_.Ig||this.config_.bf||Lk(this,this.A),this.F=this.A;this.Gc&&(b=E(this.ne,this),Q(this.m,this.g,"blur",b,10),b=E(this.we,this),Q(this.m,this.g,"focus",b,10),this.Eb=!0);b=this.m;a=E(this.Jf,this);Q(b,b.g,8,a);Mk(this)};
n.P=function(a){this.config_=a;this.g.setAttribute("autocomplete","off");this.g.setAttribute("spellcheck",!1);this.g.style.outline=a.ie?"":"none";this.Cb=this.g.value;this.Eb&&this.we();Nk(this)};
n.Ga=function(){this.Eb&&this.ne();Ok(this)};
function Kk(a,b,c){Ok(a);c||(c=b);a.g.parentNode.replaceChild(b,a.g);c.appendChild(a.g);a.u&&a.config_.zg&&(th||Gh?Nf(function(){a.g.focus();Vh(a.g,a.s.Nb())}):a.g.focus());
Nk(a)}
n.getHeight=function(){var a=this.F?this.F.offsetHeight:0;this.J>a&&(a=this.J);return a};
function Gk(a){return a.O?a.O:a.F?a.F.offsetWidth:0}
n.select=function(){this.g.select();this.Dc()};
function pj(a){Lh&&(a.g.value="");a.g.value=a.i.g;Lh&&(a.g.value=a.g.value);nj(a)}
function Pk(a){a.u&&(a.g.blur(),a.u=!1)}
n.clear=function(){this.g.value=""};
function nj(a){if(a.u){var b=a.g.value.length;a.s=Lg(b);Vh(a.g,b)}}
function Lk(a,b){Q(a.m,b,"mouseup",function(){a.g.focus()})}
function Mk(a){function b(e){Q(a.m,a.g,e,E(a.te,a),10,c)}
Q(a.m,a.g,"keydown",E(a.Hf,a));(Hh||a.config_.Ye)&&Q(a.m,a.g,"keypress",E(a.If,a));Q(a.m,a.g,"select",E(a.Dc,a),10);var c=!1;b("mousedown");b("keyup");b("keypress");c=!0;b("mouseup");b("keydown");b("focus");b("blur");b("cut");b("paste");b("input");var d=E(a.Ef,a);Q(a.m,a.g,"compositionstart",d);Q(a.m,a.g,"compositionend",d)}
n.Ef=function(a){a=a.type;a=="compositionstart"?(a=this.i,a.D!=1&&(a.D=!0)):a=="compositionend"&&(a=this.i,a.D!=0&&(a.D=!1))};
n.Hf=function(a){var b=a.keyCode;this.ca=b;var c=(Ih||Gh)&&(b==38||b==40)&&hj(this.X),d=b==13,e=b==27;this.Y=!1;b!=9||a.shiftKey||(this.Y=gj(this.i));if(d){(b=ij(this.X))&&b.getType();var f=this;Nf(function(){var g=f.X,h=a.shiftKey?4:3;g.i!=null&&ij(g).getType();g=g.u;yi(g.F,g.g,h)})}if(c||d||e||this.Y)a.oc=!0};
n.If=function(a){var b=a.keyCode,c=b==9&&this.Y;if(b==13||b==27||c)a.oc=!0};
n.te=function(a){if(!this.Db){var b=a.Vb;if(!(b.indexOf("key")||a.ctrlKey||a.altKey||a.shiftKey||a.metaKey))a:if(a=a.keyCode,b!="keypress"){var c=a==38||a==40;if(b=="keydown"){var d=this.i;var e=a==229;(d.O=e)&&d.B.add(4);if(c)break a}else if(d=a!=this.ca,this.ca=-1,!c||d)break a;switch(a){case 27:a=this.i;a.config_.Dg?yi(a.F,a.g,5):(a.i.isVisible()?(c=a.i,Hi(c.D),fj(c)):Pk(a.m),ui(a));break;case 37:a=this.i;rj(a,"rtl");if(sj(a)&&(c=a.i,c.i!==null&&(a=c.o,(c=Qk(a,c.i))&&!(c.length<=1))))for(d=Rh(a.u),
e=1;e<c.length;e++)c[e].id===d.id&&Sh(a.u,c[e-1]);break;case 39:a=this.i;rj(a,"ltr");if(sj(a)&&(c=a.i,c.i!==null&&(a=c.o,c=Qk(a,c.i))))for(d=Rh(a.u),e=0;e<c.length-1;e++)c[e].id===d.id&&Sh(a.u,c[e+1]);break;case 38:this.i.i.Ae();break;case 40:a=this.i;c=this.s;hj(a.i)?a.i.ze():lj(a.i,c);break;case 46:a=this.i;a.g&&this.s.Td()==a.g.length&&(a.J&&a.J.clear(),a.config_.Cg&&yi(a.F,a.g,2));break;case 8:a=this.i,a.A&&this.s.Nb()==0&&a.A.g()}}this.Dc();jj(this.i,this.g.value,this.s,b)}};
n.Df=function(){this.u=!0;aj(this.i.s,10)};
n.Bf=function(){this.u=!1;ej(this.i)};
function Nk(a){a.W||(a.W=!0,a.Za=E(a.Df,a),Q(a.m,a.g,"focus",a.Za,99),a.na=E(a.Bf,a),Q(a.m,a.g,"blur",a.na,99))}
function Ok(a){a.W&&(a.W=!1,Oj(a.m,a.g,a.Za),Oj(a.m,a.g,a.na))}
n.we=function(){this.H||(this.H=new og(this.config_.vg||50),this.H.ra("tick",this.ug,void 0,this),this.H.start())};
n.ne=function(){this.H&&(pg(this.H),this.H=null)};
n.ug=function(){this.te({Vb:"polling"})};
n.Jf=function(){if(Gh){var a=this.g,b=document.createEvent("KeyboardEvent");b.initKeyEvent&&(b.initKeyEvent("keypress",!0,!0,null,!1,!1,!0,!1,27,0),a.dispatchEvent(b))}};
n.Dc=function(){if(this.u){a:{var a=this.g;try{if("selectionStart"in a){var b=a.selectionStart;var c=a.selectionEnd}else{var d=a.createTextRange(),e=Yh(a).selection.createRange();d.inRange(e)&&(d.setEndPoint("EndToStart",e),b=d.text.length,d.setEndPoint("EndToEnd",e),c=d.text.length)}if(b!==void 0){var f=Lg(b,c);break a}}catch(g){}f=null}f&&(this.s=f)}};
function Ik(a){var b;a.m.ra(window,"pagehide",function(){a.Db=!0;b=a.g.value});
a.m.ra(window,"pageshow",function(c){a.Db=!1;(c.persisted||b!==void 0)&&oj(a.i,b)})}
function Jk(a){a.m.ra(window,"pageshow",function(b){b.persisted&&a.Cb&&oj(a.i,a.Cb)})}
function Yi(a,b){a.config_.pd&&a.o?Qh(a.o,"expanded",b):Qh(a.g,"haspopup",b);b||a.g.removeAttribute("aria-activedescendant")}
;function Rk(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Sk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Tk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Rk(a).match(/\S+/g)||[],b=ub(a,b)>=0);return b}
function Hj(a,b){if(a.classList)a.classList.add(b);else if(!Tk(a,b)){var c=Rk(a);Sk(a,c+(c.length>0?" "+b:b))}}
function Uk(a,b){a.classList?a.classList.remove(b):Tk(a,b)&&Sk(a,Array.prototype.filter.call(a.classList?a.classList:Rk(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function Vk(){this.l=129;this.J={};this.W=[];this.Y=[];this.ca=[];this.m=[];this.ea=0;this.isDarkTheme=!!document.body.dataset.dt}
y(Vk,M);n=Vk.prototype;
n.sa=function(a,b){var c=this.isDarkTheme?"#202124":"#fff";this.O=a;this.u=a.Qc();this.H=a.kc();Nh||b.addRule(".sbsb_a","background:"+c);b.addRule(".sbsb_b","list-style-type:none;margin:0;padding:0");Nh||b.addRule(".sbsb_c","line-height:22px;overflow:hidden;padding:0 10px");b.addRule(".sbsb_d","background:#eee");b.addRule(".sbsb_e","height:1px;background-color:#e5e5e5");b.addRule("#sbsb_f","font-size:11px;color:#36c;text-decoration:none");b.addRule("#sbsb_f:hover","font-size:11px;color:#36c;text-decoration:underline");b.addRule(".sbsb_g",
"text-align:center;padding:8px 0 7px;position:relative");b.addRule(".sbsb_h","font-size:15px;height:28px;margin:0.2em"+(Ih?";-webkit-appearance:button":""));b.addRule(".sbsb_i","font-size:13px;color:#36c;text-decoration:none;line-height:100%");b.addRule(".sbsb_i:hover","text-decoration:underline");b.addRule(".sbsb_j","padding-top:1px 0 2px 0;font-size:11px");b.addRule(".sbdd_a[dir=ltr] .sbsb_j","padding-right:4px;text-align:right");b.addRule(".sbdd_a[dir=rtl] .sbsb_j","padding-left:4px;text-align:left");
Nh&&(b.addRule(".sbsb_c[dir=ltr] .sbsb_k","padding:10px 3px 11px 8px"),b.addRule(".sbsb_c[dir=rtl] .sbsb_k","padding:10px 8px 11px 3px"))};
n.N=function(a){this.D=a.get(128);this.s=a.get(118);this.I=a.get(121);a=jh(a,152);var b={};if(a)for(var c,d=0;c=a[d++];)b[c.D]=c;this.na=b};
n.ga=function(a){this.config_=a};
n.nb=function(a){this.o=P();a.Na?(this.g=P("sbsb_b"),Ph(this.g,"grid"),this.g.id=this.O.getId("sbsg")):(this.g=N("ul","sbsb_b"),Ph(this.g,"listbox"));this.o.appendChild(this.g)};
n.P=function(a){this.config_=a;var b=a.se;b&&(this.Za=this.O.Pd(b));this.o.className=a.Ng||"sbsb_a";this.X=a.Kg||"sbsb_d"};
function Qk(a,b){if(a.config_.Na&&(a=a.m[b]))return a.g().parentNode.querySelectorAll("[role=gridcell]")}
function Gj(a,b){(b=a.m[b])&&Uk(b.g().parentNode,a.X)}
n.clear=function(){for(var a,b,c;c=this.W.pop();)a=c.getType(),(b=this.J[a])||(b=this.J[a]=[]),b.push(c),a=c.g(),a.parentNode.removeChild(a);for(;a=this.g.firstChild;)a=this.g.removeChild(a),a.l?this.ca.push(a):a!=this.B&&a!=this.A&&this.Y.push(a);this.B&&(this.B.style.display="none");this.A&&(this.A.style.display="none");this.m=[]};
function yj(a,b){var c=b.getType(),d=a.na[c];if(!d)return!1;(c=(c=a.J[c])&&c.pop())||(c=Wk(a,d));d.Ab(b,c);a.W.push(c);var e=c.g();if(a.config_.Na)for(var f=e.querySelectorAll('[role="gridcell"]'),g=0;g<f.length;g++)f[g].id=e.id+("x"+g);f=Xk(a);f.appendChild(e);if(b.u!==void 0){a.m.push(c);g=a.F;var h=b.l;a.config_.Uf&&(e.onmouseover=function(){Dj(a.D,h)},e.onmouseout=function(){vi(a.D)});
var l=c.g();l.onclick=function(k){Pk(a.s.m);b.o&&kj(a.s,b.g);vi(a.D);var m=a.D;m.i=m.g=h;k=k||ei(l).event;d.zb(k,b,a.I)}}else g=a.H;
$h(f,g);return!0}
function Wk(a,b){b=b.Hb(a.I);var c=b.g();Hj(c,"sbse");c.id="sbse"+a.ea;(c=b.g())&&!a.config_.Na&&Ph(c,"option");a.ea++;return b}
function Cj(a,b,c,d){var e=N("input");e.type="button";e.value=Rg(b);e.onclick=function(){yi(a.I,a.s.g,d)};
if(a.config_.Mf){b="lsb";var f=N("span");var g=N("span");f.className="ds";g.className="lsbb";f.appendChild(g);g.appendChild(e)}else b="sbsb_h",f=e;e.className=b;c.appendChild(f)}
function Xk(a){var b=a.Y.pop();if(b)return a.g.appendChild(b),b;a.config_.Na?(b=P(),Ph(b,"row")):(b=N("li"),Ph(b,"presentation"));b.className="sbsb_c "+a.config_.zc;b.onmousedown=E(a.jd,a);a.g.appendChild(b);return b}
n.jd=function(a){a=a||ei(this.o).event;a.stopPropagation?(a.stopPropagation(),window.Polymer&&window.Polymer.Element&&a.preventDefault()):th&&!Hh&&(this.s.m.ea=!0);return!1};
function xj(a){if(a.i){var b=0,c=a.s.m.B;c&&(b=c.offsetWidth);c=a.i;a=Gk(a.s.m)-b-3;a>0&&(c.style.width=a+"px")}}
;function Yk(){this.l=147}
H(Yk,M);Yk.prototype.sa=function(a){this.u=a.Qd()||document.body};
Yk.prototype.ga=function(a){this.config_=a};
Yk.prototype.getHeight=function(){this.g||zj(this);Aj(this);this.i||(Zh(this.g,"|"),this.i=this.g.offsetHeight);return this.i};
function zj(a){var b=P(a.config_.Vc),c=b.style;c.background="transparent";c.color="#000";c.padding=0;c.position="absolute";c.whiteSpace="pre";a.g=b;a.g.style.visibility="hidden";a.u.appendChild(a.g)}
function Aj(a){var b=F();if(!a.o||a.o+3E3<b){a.o=b;b=a.g;var c=ei(b);b=(b=c.getComputedStyle?c.getComputedStyle(b,""):b.currentStyle)?b.fontSize:null;a.s&&b==a.s||(a.m={},a.i=null,a.s=b)}}
;function Zk(){eh.call(this);this.set(191,new wk);this.set(150,new zk);this.set(146,new Ak);this.set(147,new Yk);fh(this,149,new Si);this.set(145,new Jj);this.set(117,new Kj);this.set(494,new Qj);this.set(374,new Rj);this.set(120,new Sj);this.set(121,new fk);this.set(553,new ik);this.set(124,new qk);this.set(125,new rk);this.set(123,new kk);this.set(126,new tk);this.set(127,new vk);this.set(115,new Vi);this.set(118,new cj);this.set(128,new uj);fh(this,154,new Ij);this.set(116,new Ck);this.set(119,
new Hk);this.set(129,new Vk)}
y(Zk,eh);function $k(){this.l=347;this.i=[];this.m=0}
y($k,M);$k.prototype.N=function(a){this.o=a.get(120)};
$k.prototype.P=function(a){this.s="//"+(a.kg||"www."+a.ec)+"/gen_204?";this.g=a.Jg||{}};
function gk(a,b){b=Tj(a.o,b);for(var c in a.g)c in b||(b[c]=a.g[c]);c=Ng(b,!0);al(a,a.s+c)}
function al(a,b){var c=new Image,d=a.m,e=a.i;c.onerror=c.onload=c.onabort=function(){try{delete e[d]}catch(f){}};
a.i[a.m++]=c;c.src=b}
;function bl(){this.l=151;this.g=!0;this.i={}}
y(bl,M);n=bl.prototype;n.N=function(a){this.m=a.get(150)};
n.ga=function(){this.s=Kg([0])};
n.P=function(a){this.o=a.Rc;this.g=a.Hd};
n.Ga=function(){this.g=!1};
n.update=function(a){if(this.g){var b=a.g;if(b.length){var c=a.l.l;a:{var d=Number.MAX_VALUE;for(var e,f=0;e=b[f++];){if(!this.s[e.getType()]){d=-1;break a}e=e.g;d=Math.min(e.length,d)}}if(d!=-1){var g=b[0].g;if(Tg(g,c,!0))for(f=c.length+1;f<=d;){c=null;for(e=0;g=b[e++];){g=g.g;if(f>g.length)return;g=g.substr(0,f);if(!c)c=g;else if(c!=g)return}this.i[c]=a;++f}}}}};
n.get=function(a){if(this.g){var b=this.i[a.l];if(b){for(var c=a.B,d=a.l,e=b.i,f=this.o||!e.g.k,g=[],h,l,k=b.g,m,p=0;m=k[p++];)l=m.g,h=f?this.m.bold(c,l):Qg(l),g.push(new xg(h,l,m.l,m.getType(),m.i||[],m.m));delete this.i[d];return new ch(a,g,e,!0,b.m,!1)}}return null};
n.reset=function(){this.i={}};function cl(){this.l=133;this.i={};this.g=[];this.o=this.m=0}
y(cl,M);cl.prototype.N=function(a){this.g=jh(a,151);this.g.sort(dl)};
cl.prototype.P=function(){this.o=this.m=0};
cl.prototype.get=function(a){var b=this.i[a.i];if(b)++this.m;else if(this.g)for(var c=0;c<this.g.length;++c)if(b=this.g[c].get(a)){b&&b.m&&(this.i[b.l.i]=b);++this.o;break}return b?new ch(a,b.g,b.i,b.o,b.m,b.u):null};
cl.prototype.has=function(a){return!!this.i[a.i]};
function dl(){return 0}
;function el(a){this.l=a;this.g=new RegExp("(?:^|\\s+)"+a+"(?:$|\\s+)")}
function fl(a,b){b&&!a.g.test(b.className)&&(b.className+=" "+a.l)}
function gl(a,b){b&&(b.className=b.className.replace(a.g," "))}
;function hl(){this.l=570;this.m=!1}
H(hl,M);n=hl.prototype;n.sa=function(a){this.u=a};
n.N=function(a){this.s=a.get(117);this.A=a.get(118)};
n.ga=function(a){var b=a.Mb;if(this.g=b?this.u.Pd(b):null){b=this.s;var c=E(this.Cf,this);Q(b,b.g,10,c);b=this.s;c=E(this.Af,this);Q(b,b.g,11,c);Q(this.s,this.g,"mouseover",E(this.Gf,this));Q(this.s,this.g,"mouseout",E(this.Ff,this));a.Oc&&(this.o=new el(a.Oc));a.Nc&&(this.i=new el(a.Nc))}};
n.P=function(){this.m=!0;this.g&&this.A.m.u&&this.i&&fl(this.i,this.g)};
n.Ga=function(){this.m=!1;this.g&&(this.o&&gl(this.o,this.g),this.i&&gl(this.i,this.g))};
n.Gf=function(){this.m&&this.o&&fl(this.o,this.g)};
n.Ff=function(){this.m&&this.o&&gl(this.o,this.g)};
n.Cf=function(){this.m&&this.i&&fl(this.i,this.g)};
n.Af=function(){this.m&&this.i&&gl(this.i,this.g)};var il=ha(["//www.google.com/textinputassistant/","/","_tia.js"]);function jl(){this.l=160}
H(jl,M);n=jl.prototype;n.sa=function(a,b){this.m=a;a.Hc()||(b.addRule(".gsok_a","background:url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;display:inline-block;height:11px;line-height:0;width:19px"),b.addRule(".gsok_a img","border:none;visibility:hidden"))};
n.N=function(a){this.s=a.get(374);this.u=a.get(128)};
n.ga=function(a){this.o=!!a.mc;this.A=a.ke;this.D=a.qc;this.H=a.me;this.F=a.sg};
n.nb=function(){(this.i=this.m.get("gs_ok"))?this.g=this.i.firstChild:(this.g=N("img"),this.g.src=this.A+"/tia.png",this.i=N("span","gsok_a gsst_e"),this.i.id=this.m.getId("gs_ok"),this.i.appendChild(this.g));this.g.ds=E(this.cf,this);this.g.setAttribute("tia_field_name",this.m.Qc().name);this.g.setAttribute("tia_disable_swap",!0)};
n.P=function(a){a.Sc&&(this.o=!!a.mc);this.g.setAttribute("tia_property",a.le)};
n.isEnabled=function(){return this.o};
n.Sd=function(){return{tooltip:this.F}};
n.Bd=function(a){if(!this.B){a=document;var b="SCRIPT";a.contentType==="application/xhtml+xml"&&(b=b.toLowerCase());a=a.createElement(b);b=Ge(il,this.H,this.D);tb(a,b);document.body.appendChild(a);this.B=!0;this.s.add(3)}else if(this.g.onclick)this.g.onclick(a);return!1};
n.cf=function(){var a=this.u;Hi(a.D);fj(a)};
var kl=Jg++;var ll=ha(["#"]);function ml(){this.l=173;this.m={}}
y(ml,M);n=ml.prototype;
n.sa=function(a,b){this.o=a;a.Hc()||(b.addRule(".gsst_a","display:inline-block"),b.addRule(".gsst_a","cursor:pointer;padding:0 4px"),b.addRule(".gsst_a:hover","text-decoration:none!important"),b.addRule(".gsst_b","font-size:16px;padding:0 2px;position:relative;"+b.prefix("user-select:none;")+"white-space:nowrap"),b.addRule(".gsst_e","vertical-align:middle;"+(fi()+":"+gi(.6)+";")),b.addRule(".gsst_a:hover .gsst_e,.gsst_a:focus .gsst_e",fi()+":"+gi(.8)+";"),b.addRule(".gsst_a:active .gsst_e",fi()+":"+
gi(1)+";"))};
n.N=function(a){this.u=a.get(118);this.i=jh(a,160)};
n.ga=function(a){this.A=a.Sc;this.i.sort(nl)};
n.nb=function(a){this.g=this.o.get("gs_st");if(!this.g){this.g=P("gsst_b");this.g.id=this.o.getId("gs_st");if(a=a.Ob)this.g.style.lineHeight=a+"px";ol(this)}pl(this)};
n.P=function(){if(this.A)for(var a,b=0;a=this.i[b++];){var c=!!this.m[kl];if(a.isEnabled()!=c){for(;this.g.hasChildNodes();)this.g.removeChild(this.g.lastChild);ol(this);pl(this);break}}};
function nl(){return 0}
function ol(a){for(var b,c,d=0;c=a.i[d++];)if(c.isEnabled()){b=!0;var e=N("a","gsst_a");ql(a,e,c);e.appendChild(c.i);a.g.appendChild(e)}a.g.style.display=b?"":"none"}
function pl(a){a.m={};for(var b,c=0;b=a.i[c++];)if(b.isEnabled()){var d=kl,e=b.i.parentNode;e.onclick=E(b.Bd,b);a.m[d]=e;b.Sd&&(b=b.Sd(),b.Yh&&(d=a.m[d])&&d.style&&(d.style.visibility="hidden"),d=b.tooltip)&&(e.title=d)}}
function ql(a,b,c){nb(b,ib(ll));b.addEventListener("click",function(){return!1});
Hh&&(b.tabIndex=0);b.onkeydown=function(d){d=d||window.event;var e=d.keyCode;if(e==13||e==32)c.Bd(d),wi(a.u),bi(d)}}
Jg++;function rl(){this.o=33;this.l=P();this.l.className="gspr_a"}
H(rl,rh);rl.prototype.g=function(){return this.l};function sl(){sh.call(this,33)}
y(sl,sh);sl.prototype.sa=function(a,b){b.addRule(".gspr_a","padding-right:1px")};
sl.prototype.Hb=function(){return new rl};
sl.prototype.Ab=function(a,b){rb(b.l,Be(Fe,a.m.g.b||""))};
sl.prototype.zb=function(a,b,c){yi(c,b.g,1)};function tl(a,b){this.o=0;this.u=a;this.D=b;this.m=P();this.l=P("sbqs_a");this.m.appendChild(this.l);this.B=P("sbqs_c");this.m.appendChild(this.B)}
y(tl,rh);tl.prototype.g=function(){return this.m};
function ul(a,b,c,d){rb(a.B,ug(b));a.A=c;d&&!a.i&&(a.i=ci(a.l),a.i.onclick=E(function(e){Pk(this.u.m);kj(this.u,this.A);yi(this.D,this.A,9);return bi(e)},a));
d?(rb(a.i,ug(d+" &raquo;")),a.l.style.display="",Qh(a.l,"hidden",!0)):a.i&&(a.l.style.display="none")}
;function vl(){sh.call(this,0)}
H(vl,sh);n=vl.prototype;n.sa=function(a,b){b.addRule(".sbsb_c[dir=ltr] .sbqs_a","float:right");b.addRule(".sbsb_c[dir=rtl] .sbqs_a","float:left");b.addRule(".sbqs_b","visibility:hidden");b.addRule(".sbsb_d .sbqs_b","visibility:visible");b.addRule(".sbsb_c[dir=ltr] .sbqs_b","padding-left:5px;");b.addRule(".sbsb_c[dir=rtl] .sbqs_b","padding-right:5px;");b.addRule(".sbqs_c","word-wrap:break-word")};
n.N=function(a){this.g=a.get(118)};
n.P=function(a){this.i=a.Ld?a.Md:""};
n.Hb=function(a){return new tl(this.g,a)};
n.Ab=function(a,b){ul(b,a.getHtml(),a.g,this.i)};
n.zb=function(a,b,c){yi(c,b.g,1)};function wl(a){Zk.call(this);fh(this,149,new kh);this.set(347,new $k);this.set(133,new cl);fh(this,151,new bl);this.set(570,new hl);this.set(134,new Bi);this.set(189,new Ei);fh(this,156,new Ii);a.ENABLE_DELETE_ICON?fh(this,152,new xi):fh(this,152,new Ai);fh(this,152,new sl);fh(this,152,new vl);this.set(173,new ml);fh(this,160,new jl);this.set(157,new Ki);fh(this,156,new Li);a.SEARCHBOX_BEHAVIOR_EXPERIMENT=="zero-prefix"&&fh(this,156,new Ji(a));var b=a.SBOX_STRINGS||{};a.SEARCHBOX_REPORTING&&a.SEARCHBOX_COMPONENT&&
b.SBOX_REPORT_SUGGESTIONS&&(fh(this,153,new ph),fh(this,152,new mi(b.SBOX_REPORT_SUGGESTIONS,a.SEARCHBOX_COMPONENT)));a.SEARCHBOX_COMPONENT&&(this.set(598,new Mi(a.SEARCHBOX_COMPONENT,a.SEARCHBOX_ENABLE_REFINEMENT_SUGGEST,a.SEARCHBOX_ZERO_TYPING_SUGGEST_USE_REGULAR_SUGGEST)),fh(this,156,new Ri))}
y(wl,Zk);function xl(){return{uf:function(){return{clientName:"hp",requestIdentifier:"hp",ec:"google.com",Fe:"",Wc:"en",Jc:"",kd:"",videoId:"",vd:"",authuser:0,lg:"",xi:"",Ce:null,td:"",Jd:!1,nd:"",xc:"",connectionType:0,transport:null,Je:!1,ki:!1,Wf:!1,enableCaching:!0,mf:10,Oh:10,gf:!0,Hd:!0,Kh:!1,rf:!1,fg:!1,gg:!1,bi:!1,Sf:!0,df:!1,Tf:500,Sc:!1,Lf:!0,Th:!0,oi:!1,mc:!1,qc:"",ke:"//www.google.com/textinputassistant",le:"",me:7,Qh:!1,Rh:!1,Pf:!1,Of:!0,Qf:!1,Wd:!1,Na:!1,Dg:!1,Cg:!1,Ac:1,ge:!0,jc:!1,Ld:!1,Id:!1,
vg:10,Rc:!1,zg:!0,Ia:document.body,Rf:!0,Ge:null,kf:{},Nh:{},ji:0,sf:!1,Xf:!0,lb:!1,qf:!1,Hg:!1,si:null,hf:!1,kg:null,Jg:null,Mc:!1,Uf:!0,pd:!1,Ye:!1,ui:1,ie:!1,Eg:"Search",Md:"I'm  Feeling Lucky",Fg:"",jg:"Learn more",md:"Remove",ld:"This search was removed from your Web History",Uh:"",Jh:"Did you mean:",sg:"",mi:"",Ai:"Search by voice",zi:'Listening for "Ok Google"',yi:'Say "Ok Google"',Ih:"Clear Search",Ob:0,cg:0,Vc:"",zc:"",ai:!1,Lb:"absolute",Mf:!1,Vd:!1,se:null,Nf:!0,hc:[0,0,0],ef:null,Mg:null,
Cd:[0],rd:!0,Ie:"",Ng:"",Kg:"",Mb:null,Oc:"",Nc:"",Hh:1,Ug:!1,Od:!1,di:0,Ig:!1,bf:!1,Lh:!1,wg:!0}}}}
;function yl(a,b,c,d,e){var f=Gh?"-moz-":th?"-ms-":Hh?"-o-":Ih?"-webkit-":"",g=".gstl_"+d,h=new RegExp("(\\.("+e.join("|")+")\\b)"),l=[];return{addRule:function(k,m){if(b){if(c){k=k.split(",");for(var p=[],r=0,q;q=k[r++];)q=h.test(q)?q.replace(h,g+"$1"):g+" "+q,p.push(q);k=p.join(",")}l.push(k,"{",m,"}")}},
Ue:function(){if(b&&l.length){b=!1;var k=N("style");k.setAttribute("type","text/css");(a||Hg).appendChild(k);var m=l.join("");l=null;k.styleSheet?k.styleSheet.cssText=m:k.appendChild(document.createTextNode(m))}},
prefix:function(k,m){var p=k+(m||"");f&&(p+=m?k+f+m:f+k);return p}}}
;function zl(a,b,c,d){this.i=a;this.I=b;this.F=c;this.H=d;this.l=-1;this.D=!1}
n=zl.prototype;n.install=function(a){if(!this.D){a=Al(a);this.l<0&&(this.l=Bl(a));var b=Yh(this.i),c=Cl(this),d=!!b.getElementById("gs_id"+this.l),e=this,f=["gssb_c","gssb_k","sbdd_a","sbdd_c","sbib_a"];a.Ie&&f.push(a.Ie);f=yl(a.Ge,a.Rf,a.hf,this.l,f);this.A=a.lb;this.g=new gh(this.F,this.H,{Hc:function(){return d},
get:function(g){return b.getElementById(g+e.l)},
Pd:function(g){return b.getElementById(g)},
Qd:function(){return e.I},
kc:function(){return c},
getId:function(g){return g+e.l},
Qc:function(){return e.i}},f,this,a);
this.g.get(347);this.u=this.g.get(130);this.g.get(115);this.m=this.g.get(117);this.g.get(123);this.g.get(135);this.J=this.g.get(118);this.Y=this.g.get(119);this.O=this.g.get(374);this.o=this.g.get(120);this.g.get(189);this.W=this.g.get(553);this.g.get(419);this.g.get(126);this.g.get(128);this.g.get(139);this.X=this.g.get(121);a=ei(this.i);this.s=di(a);this.B=E(this.Bg,this);this.m.ra(a,"resize",this.B);this.D=!0}};
n.isActive=function(){return!!this.g&&this.g.isActive()};
function Dl(a,b){function c(d){yi(a.X,a.J.g,12);return ai(d)}
a.m.ra(b,"keyup",function(d){d.keyCode!=13&&d.keyCode!=32||c(d)});
a.m.ra(b,"click",c)}
n.getId=function(){return this.l};
n.lb=function(){return this.A||!!this.u&&this.u.lb()};
n.qd=function(a){this.W.qd(a)};
function Bl(a){a=ei(a.Ge||Hg);a.nextSearchboxId==void 0&&(a.nextSearchboxId=50);return a.nextSearchboxId++}
function Cl(a){if(a.i)for(a=a.i;a=a.parentNode;){var b=a.dir;if(b)return b}return"ltr"}
function Al(a){a=Yg(a);var b=a.qc;b?a.qc=b.toLowerCase():a.mc=!1;a.jc&&!a.Ld&&(a.jc=!1);Jh||(a.gg=!1);return a}
n.Bg=function(){var a=di(ei(this.i));if(a.Ke!=this.s.Ke||a.Yd!=this.s.Yd)this.s=a,aj(this.m,8)};function El(){this.B="sbhcn";this.A="sbfcn";this.D="gsfi";this.i="gsfs";this.u=function(){return!0};
G("ytvoicesearchloggingparams",E(this.wf,this))}
y(El,dh);n=El.prototype;n.wf=function(){this.g.O.add(6);return Tj(this.g.o,15)};
n.yd=function(a){Pk(this.g.Y);this.u(Tj(this.g.o,a))&&this.l.submit()};
n.redirect=function(a){this.I(this.xd(a))};
n.xd=function(a){var b=a.indexOf("?")>=0?"&":"?",c=Tj(this.g.o);var d=this.g;c||(c=Tj(d.o));d=Ng(c);return a+b+d};
n.he=function(a){if(this.o||this.m){if(this.s>22){var b=(this.s-22)/2;a.addRule(".sbsb_c","padding:"+b+"px 24px "+b+"px 10px")}else a.addRule(".sbsb_c","padding:4px 24px 4px 10px");this.J?a.addRule(".sbsb_a","padding: 16px 0 0"):a.addRule(".sbsb_a","padding: 16px 0");a.addRule(".sbdd_b","border-top: 0");a.addRule(".sbib_a","background:transparent");a.addRule(".sbib_b","padding: 0")}b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#030303" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule(".sbpqs_a","display: flex; align-items:center; white-space: pre;");a.addRule(".sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64,'+window.btoa('<svg fill="#030303" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule(".sbqs_c","display: flex; align-items:center; white-space: pre;");a.addRule(".sbqs_c:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" xmlns="http://www.w3.org/2000/svg"><path d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"/></svg>')+
'");';a.addRule("html[dark] .sbpqs_a:before",b);b='background: no-repeat url("data:image/svg+xml;base64, '+window.btoa('<svg fill="#f1f1f1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11ZM16.2961 16.9961C14.8853 18.2431 13.031 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11C19 13.0274 18.2458 14.8786 17.0028 16.2885L20.5583 19.8441L20.9119 20.1976L20.2048 20.9047L19.8512 20.5512L16.2961 16.9961Z"/>\n</svg>')+
'");';a.addRule("html[dark] .sbqs_c:before",b);a.addRule(".sbpqs_a:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbqs_c:before",'height: 20px; width: 20px; content: " ";');a.addRule(".sbpqs_c","display: flex; align-items:center; margin-left: 34px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_c","margin-right: 34px;");a.addRule(".sbsb_c","line-height: 32px;");a.addRule(".sbpqs_c","line-height: 32px;");a.addRule(".sbsb_a","padding: 16px 0 8px");a.addRule(".sbfl_a","margin:-5px -18px -9px 0");
a.addRule("."+this.i,"font-size:1.6rem;color:#222");a.addRule(".sbdd_c","z-index:2010");a.addRule(".sbdd_a","z-index:2021");a.addRule(".sbib_a","background:transparent; width: 100%; flex: 1;");a.addRule("ytd-masthead[dark] .gsst_e","filter: invert(100%)");a.addRule(".sbpqs_a","color: #030303");a.addRule(".sbqs_c b","font-weight:500");a.addRule(".sbpqs_a b","font-weight: 500");a.addRule("html[dark] .sbqs_c b","font-weight: 600");a.addRule("html[dark] .sbpqs_a b","font-weight: 600");a.addRule(".sbsb_c[dir=ltr]",
"padding: 0px 24px 0px 16px;");a.addRule(".sbsb_c[dir=rtl]","padding: 0px 16px 0px 24px;");a.addRule(".sbdd_b","border-radius: 12px;");a.addRule(".sbsb_a","border-radius: 12px;");a.addRule(".sbsb_c[dir=ltr] .sbpqs_a:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=ltr] .sbqs_c:before","margin-right: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbpqs_a:before","margin-left: 14px;");a.addRule(".sbsb_c[dir=rtl] .sbqs_c:before","margin-left: 14px;");a.addRule(".sbfl_a","margin:-5px -10px -9px 0");this.H&&
(a.addRule(".sbsb_c","padding:0px 12px 0px 16px"),a.addRule(".sbpqs_b","display: flex; align-items: center; height: 32px;"));this.F&&(a.addRule(".sbpqs_b","display: none"),a.addRule(".sbsb_d .sbpqs_b","display: flex; align-items: center; height: 32px;"));a.addRule("html[dark] .sbsb_a","background: var(--yt-spec-raised-background);");a.addRule("html[dark] .sbdd_b","border: none; background: none; box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);");a.addRule("html[dark] .sbsb_i","color: var(--yt-spec-call-to-action)");
a.addRule("html[dark] .sbsb_d","background: var(--yt-spec-additive-background);");a.addRule(".sbfl_b","background: none; color: var(--yt-spec-text-secondary);");a.addRule("html[dark] .sbfl_a:hover","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbpqs_a","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbqs_c","color: var(--yt-spec-text-primary);");a.addRule("html[dark] .sbse","color: var(--yt-spec-text-primary);")};
n.install=function(a,b,c,d,e,f,g){this.l=a;this.I=f;g&&(this.u=g);f=xl().uf();f.clientName="youtube";f.requestIdentifier="youtube";f.Jc="yt";f.Wc=d.REQUEST_LANGUAGE;f.Fe=d.REQUEST_DOMAIN;f.Lf=!1;f.Ac=0;f.ge=!1;f.jc=!1;f.ie=!1;f.Rc=!0;f.Vc=this.D;f.zc=this.i;f.Oc=this.B;f.Nc=this.A;f.Zh=!0;f.mc=d.HAS_ON_SCREEN_KEYBOARD;f.qc=d.REQUEST_LANGUAGE;f.ke="//www.gstatic.com/inputtools/images";f.le="youtube";f.me=14;f.Mc=!0;f.Lb="fixed";this.o=d.IS_POLYMER;this.m=d.IS_FUSION;this.J=d.SEARCHBOX_REPORTING;this.s=
d.SEARCHBOX_TAP_TARGET_EXPERIMENT;this.H=d.ENABLE_DELETE_ICON;this.F=d.ENABLE_DELETE_ICON_HOVER;f.nd="suggestqueries-clients6.youtube.com";d.PQ&&(f.kd=d.PQ);f.vd=d.PSUGGEST_TOKEN;f.authuser=d.SESSION_INDEX;f.ld=e.SUGGESTION_DISMISSED_LABEL;f.md=e.SUGGESTION_DISMISS_LABEL;f.rd=!d.HIDE_REMOVE_LINK;f.ti=Kg([0,33,35]);this.o?(f.Mb="search-container",f.Ob=24):this.m?(f.Mb="masthead-search",f.Ob=24):(f.Mb="masthead-search-terms",f.Ob=30);Vb()||(f.Vd=!0);f.se=f.Mb;e=this.l.offsetHeight;f.hc=[e+(56-e)/2-
40+4,0,0];e=[0];Wb()&&ac()=="8.0"&&(e[0]=-1);f.Cd=e;(e=d.REQUEST_LANGUAGE)?(e=e.toLowerCase(),e=e=="zh-tw"||e=="zh-cn"||e=="ja"||e=="ko"):e=!1;e&&(f.Id=!0);if(e=d.SUGG_EXP_ID)f.td=e;d.SEND_VISITOR_DATA&&(f.connectionType=1);d.SEND_VISITOR_DATA&&"VISITOR_DATA"in d&&(f.visitorData=d.VISITOR_DATA);if(this.g){a=this.g;b=f;c=ei(a.i);d=a.B;c.removeEventListener?c.removeEventListener("resize",d,!1):c.detachEvent("onresize",d);ih(a.g);b=Al(b);a.A=b.lb;a=a.g;ih(a);for(d=0;c=a.g[d++];)c.P(b);a.l=!0}else d=
new wl(d),this.g=new zl(b,a,this,d),this.g.install(f),c&&(Dl(this.g,c),c.onclick=null)};function Fl(){this.data=[];this.g=-1}
Fl.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Fl.prototype.get=function(a){return!!this.data[a]};
function Gl(a){a.g===-1&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Hl(){this.blockSize=-1}
;function Il(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.s=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.m=this.l=0;this.reset()}
H(Il,Hl);Il.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.m=this.l=0};
function Jl(a,b,c){c||(c=0);var d=a.s;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.g[0];c=a.g[1];e=a.g[2];for(var f=a.g[3],g=a.g[4],h,l,k=0;k<80;k++)k<40?k<20?(h=f^c&(e^f),l=1518500249):(h=c^e^f,l=1859775393):k<60?(h=c&e|f&(c|e),l=2400959708):(h=c^e^f,l=3395469782),
h=(b<<5|b>>>27)+h+g+l+d[k]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+e&4294967295;a.g[3]=a.g[3]+f&4294967295;a.g[4]=a.g[4]+g&4294967295}
Il.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.l;d<b;){if(f==0)for(;d<=c;)Jl(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Jl(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Jl(this,e);f=0;break}}this.l=f;this.m+=b}};
Il.prototype.digest=function(){var a=[],b=this.m*8;this.l<56?this.update(this.i,56-this.l):this.update(this.i,this.blockSize-(this.l-56));for(var c=this.blockSize-1;c>=56;c--)this.o[c]=b&255,b/=256;Jl(this,this.o);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Kl(){}
Kl.prototype.next=function(){return Ll};
var Ll={done:!0,value:void 0};Kl.prototype.kb=function(){return this};function Ml(a){if(a instanceof Nl||a instanceof Ol||a instanceof Pl)return a;if(typeof a.next=="function")return new Nl(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new Nl(function(){return a[Symbol.iterator]()});
if(typeof a.kb=="function")return new Nl(function(){return a.kb()});
throw Error("Not an iterator or iterable.");}
function Nl(a){this.g=a}
Nl.prototype.kb=function(){return new Ol(this.g())};
Nl.prototype[Symbol.iterator]=function(){return new Pl(this.g())};
Nl.prototype.l=function(){return new Pl(this.g())};
function Ol(a){this.g=a}
y(Ol,Kl);Ol.prototype.next=function(){return this.g.next()};
Ol.prototype[Symbol.iterator]=function(){return new Pl(this.g)};
Ol.prototype.l=function(){return new Pl(this.g)};
function Pl(a){Nl.call(this,function(){return a});
this.i=a}
y(Pl,Nl);Pl.prototype.next=function(){return this.i.next()};function Ql(a){var b=[];Rl(new Sl,a,b);return b.join("")}
function Sl(){}
function Rl(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Rl(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Tl(d,c),c.push(":"),Rl(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Tl(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ul={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Vl=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Tl(a,b){b.push('"',a.replace(Vl,function(c){var d=Ul[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Ul[c]=d);return d}),'"')}
;function Wl(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function R(a){df.call(this);this.s=1;this.i=[];this.o=0;this.g=[];this.l={};this.u=!!a}
H(R,df);n=R.prototype;n.subscribe=function(a,b,c){var d=this.l[a];d||(d=this.l[a]=[]);var e=this.s;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.s=e+3;d.push(e);return e};
n.Cc=function(a){var b=this.g[a];if(b){var c=this.l[b];this.o!=0?(this.i.push(a),this.g[a+1]=function(){}):(c&&xb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
n.qe=function(a,b){var c=this.l[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.u)for(f=0;f<c.length;f++)e=c[f],Xl(this.g[e+1],this.g[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.bb;f++){var g=c[f];this.g[g+1].apply(this.g[g+2],d)}}finally{if(this.o--,this.i.length>0&&this.o==0)for(;c=this.i.pop();)this.Cc(c)}}return f!=0}return!1};
function Xl(a,b,c){Wf(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.l[a];b&&(b.forEach(this.Cc,this),delete this.l[a])}else this.g.length=0,this.l={}};
n.Ba=function(){R.Fa.Ba.call(this);this.clear();this.i.length=0};function Yl(a){this.g=a}
Yl.prototype.set=function(a,b){b===void 0?this.g.remove(a):this.g.set(a,Ql(b))};
Yl.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Yl.prototype.remove=function(a){this.g.remove(a)};function Zl(a){this.g=a}
H(Zl,Yl);function $l(a){this.data=a}
function am(a){return a===void 0||a instanceof $l?a:new $l(a)}
Zl.prototype.set=function(a,b){Zl.Fa.set.call(this,a,am(b))};
Zl.prototype.l=function(a){a=Zl.Fa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Zl.prototype.get=function(a){if(a=this.l(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function bm(a){this.g=a}
H(bm,Zl);bm.prototype.set=function(a,b,c){if(b=am(b)){if(c){if(c<F()){bm.prototype.remove.call(this,a);return}b.expiration=c}b.creation=F()}bm.Fa.set.call(this,a,b)};
bm.prototype.l=function(a){var b=bm.Fa.l.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<F()||c&&c>F())bm.prototype.remove.call(this,a);else return b}};function cm(){}
;function dm(){}
H(dm,cm);dm.prototype[Symbol.iterator]=function(){return Ml(this.kb(!0)).l()};
dm.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function em(a){this.g=a;this.l=null}
H(em,dm);n=em.prototype;n.set=function(a,b){fm(this);try{this.g.setItem(a,b)}catch(c){if(this.g.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){fm(this);a=this.g.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){fm(this);this.g.removeItem(a)};
n.kb=function(a){fm(this);var b=0,c=this.g,d=new Kl;d.next=function(){if(b>=c.length)return Ll;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
n.clear=function(){fm(this);this.g.clear()};
n.key=function(a){fm(this);return this.g.key(a)};
function fm(a){if(a.g==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.l)!=null?b:a.l=gm(a.g))||Mb(Error("Storage mechanism: Storage unavailable"))}
function gm(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&(b.name==="QuotaExceededError"||b.code===22||b.code===1014||b.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}}
;function hm(){var a=null;try{a=C.localStorage||null}catch(b){}em.call(this,a)}
H(hm,em);function im(a,b){this.l=a;this.g=b+"::"}
H(im,dm);im.prototype.set=function(a,b){this.l.set(this.g+a,b)};
im.prototype.get=function(a){return this.l.get(this.g+a)};
im.prototype.remove=function(a){this.l.remove(this.g+a)};
im.prototype.kb=function(a){var b=this.l[Symbol.iterator](),c=this,d=new Kl;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.g.length):c.l.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var S={},jm=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";S.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
S.sd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var km={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lm={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Nd:function(a){return[].concat.apply([],a)}};
S.Gg=function(){jm?(S.jb=Uint8Array,S.Ka=Uint16Array,S.Ne=Int32Array,S.assign(S,km)):(S.jb=Array,S.Ka=Array,S.Ne=Array,S.assign(S,lm))};
S.Gg();var mm=!0;try{new Uint8Array(1)}catch(a){mm=!1}
function nm(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new S.jb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var om={};om=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var pm={},qm,rm=[],sm=0;sm<256;sm++){qm=sm;for(var tm=0;tm<8;tm++)qm=qm&1?3988292384^qm>>>1:qm>>>1;rm[sm]=qm}pm=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rm[(a^b[d])&255];return a^-1};var um={};um={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vm(a){for(var b=a.length;--b>=0;)a[b]=0}
var wm=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xm=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],ym=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zm=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Am=Array(576);vm(Am);var Bm=Array(60);vm(Bm);var Cm=Array(512);vm(Cm);var Dm=Array(256);vm(Dm);var Em=Array(29);vm(Em);var Fm=Array(30);vm(Fm);function Gm(a,b,c,d,e){this.Ee=a;this.pf=b;this.nf=c;this.ff=d;this.pg=e;this.Xd=a&&a.length}
var Hm,Im,Jm;function Km(a,b){this.Gd=a;this.vb=0;this.Va=b}
function Lm(a,b){a.ba[a.pending++]=b&255;a.ba[a.pending++]=b>>>8&255}
function Mm(a,b,c){a.ha>16-c?(a.pa|=b<<a.ha&65535,Lm(a,a.pa),a.pa=b>>16-a.ha,a.ha+=c-16):(a.pa|=b<<a.ha&65535,a.ha+=c)}
function Nm(a,b,c){Mm(a,c[b*2],c[b*2+1])}
function Om(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function Pm(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=Om(d[e]++,e))}
function Qm(a){var b;for(b=0;b<286;b++)a.ta[b*2]=0;for(b=0;b<30;b++)a.cb[b*2]=0;for(b=0;b<19;b++)a.ka[b*2]=0;a.ta[512]=1;a.Ra=a.yb=0;a.za=a.matches=0}
function Rm(a){a.ha>8?Lm(a,a.pa):a.ha>0&&(a.ba[a.pending++]=a.pa);a.pa=0;a.ha=0}
function Sm(a,b,c){Rm(a);Lm(a,c);Lm(a,~c);S.mb(a.ba,a.window,b,c,a.pending);a.pending+=c}
function Tm(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Um(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Qa;){e<a.Qa&&Tm(b,a.da[e+1],a.da[e],a.depth)&&e++;if(Tm(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function Vm(a,b,c){var d=0;if(a.za!==0){do{var e=a.ba[a.Ib+d*2]<<8|a.ba[a.Ib+d*2+1];var f=a.ba[a.Yc+d];d++;if(e===0)Nm(a,f,b);else{var g=Dm[f];Nm(a,g+256+1,b);var h=wm[g];h!==0&&(f-=Em[g],Mm(a,f,h));e--;g=e<256?Cm[e]:Cm[256+(e>>>7)];Nm(a,g,c);h=xm[g];h!==0&&(e-=Fm[g],Mm(a,e,h))}}while(d<a.za)}Nm(a,256,b)}
function Wm(a,b){var c=b.Gd,d=b.Va.Ee,e=b.Va.Xd,f=b.Va.ff,g,h=-1;a.Qa=0;a.sb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Qa]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Qa<2;){var l=a.da[++a.Qa]=h<2?++h:0;c[l*2]=1;a.depth[l]=0;a.Ra--;e&&(a.yb-=d[l*2+1])}b.vb=h;for(g=a.Qa>>1;g>=1;g--)Um(a,c,g);l=f;do g=a.da[1],a.da[1]=a.da[a.Qa--],Um(a,c,1),d=a.da[1],a.da[--a.sb]=g,a.da[--a.sb]=d,c[l*2]=c[g*2]+c[d*2],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=l,a.da[1]=l++,Um(a,c,1);while(a.Qa>=
2);a.da[--a.sb]=a.da[1];g=b.Gd;l=b.vb;d=b.Va.Ee;e=b.Va.Xd;f=b.Va.pf;var k=b.Va.nf,m=b.Va.pg,p,r=0;for(p=0;p<=15;p++)a.Ma[p]=0;g[a.da[a.sb]*2+1]=0;for(b=a.sb+1;b<573;b++){var q=a.da[b];p=g[g[q*2+1]*2+1]+1;p>m&&(p=m,r++);g[q*2+1]=p;if(!(q>l)){a.Ma[p]++;var t=0;q>=k&&(t=f[q-k]);var w=g[q*2];a.Ra+=w*(p+t);e&&(a.yb+=w*(d[q*2+1]+t))}}if(r!==0){do{for(p=m-1;a.Ma[p]===0;)p--;a.Ma[p]--;a.Ma[p+1]+=2;a.Ma[m]--;r-=2}while(r>0);for(p=m;p!==0;p--)for(q=a.Ma[p];q!==0;)d=a.da[--b],d>l||(g[d*2+1]!==p&&(a.Ra+=(p-g[d*
2+1])*g[d*2],g[d*2+1]=p),q--)}Pm(c,h,a.Ma)}
function Xm(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];++g<h&&k===f||(g<l?a.ka[k*2]+=g:k!==0?(k!==e&&a.ka[k*2]++,a.ka[32]++):g<=10?a.ka[34]++:a.ka[36]++,g=0,e=k,f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function Ym(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;f===0&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[(d+1)*2+1];if(!(++g<h&&k===f)){if(g<l){do Nm(a,k,a.ka);while(--g!==0)}else k!==0?(k!==e&&(Nm(a,k,a.ka),g--),Nm(a,16,a.ka),Mm(a,g-3,2)):g<=10?(Nm(a,17,a.ka),Mm(a,g-3,3)):(Nm(a,18,a.ka),Mm(a,g-11,7));g=0;e=k;f===0?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function Zm(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ta[c*2]!==0)return 0;if(a.ta[18]!==0||a.ta[20]!==0||a.ta[26]!==0)return 1;for(c=32;c<256;c++)if(a.ta[c*2]!==0)return 1;return 0}
var $m=!1;function an(a,b,c){a.ba[a.Ib+a.za*2]=b>>>8&255;a.ba[a.Ib+a.za*2+1]=b&255;a.ba[a.Yc+a.za]=c&255;a.za++;b===0?a.ta[c*2]++:(a.matches++,b--,a.ta[(Dm[c]+256+1)*2]++,a.cb[(b<256?Cm[b]:Cm[256+(b>>>7)])*2]++);return a.za===a.Qb-1}
;function bn(a,b){a.msg=um[b];return b}
function cn(a){for(var b=a.length;--b>=0;)a[b]=0}
function dn(a){var b=a.state,c=b.pending;c>a.T&&(c=a.T);c!==0&&(S.mb(a.output,b.ba,b.Rb,c,a.wb),a.wb+=c,b.Rb+=c,a.ud+=c,a.T-=c,b.pending-=c,b.pending===0&&(b.Rb=0))}
function en(a,b){var c=a.va>=0?a.va:-1,d=a.C-a.va,e=0;if(a.level>0){a.R.Kc===2&&(a.R.Kc=Zm(a));Wm(a,a.pc);Wm(a,a.fc);Xm(a,a.ta,a.pc.vb);Xm(a,a.cb,a.fc.vb);Wm(a,a.Dd);for(e=18;e>=3&&a.ka[zm[e]*2+1]===0;e--);a.Ra+=3*(e+1)+5+5+4;var f=a.Ra+3+7>>>3;var g=a.yb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)Mm(a,b?1:0,3),Sm(a,c,d);else if(a.strategy===4||g===f)Mm(a,2+(b?1:0),3),Vm(a,Am,Bm);else{Mm(a,4+(b?1:0),3);c=a.pc.vb+1;d=a.fc.vb+1;e+=1;Mm(a,c-257,5);Mm(a,d-1,5);Mm(a,e-4,4);for(f=0;f<e;f++)Mm(a,
a.ka[zm[f]*2+1],3);Ym(a,a.ta,c-1);Ym(a,a.cb,d-1);Vm(a,a.ta,a.cb)}Qm(a);b&&Rm(a);a.va=a.C;dn(a.R)}
function T(a,b){a.ba[a.pending++]=b}
function fn(a,b){a.ba[a.pending++]=b>>>8&255;a.ba[a.pending++]=b&255}
function gn(a,b){var c=a.fe,d=a.C,e=a.wa,f=a.je,g=a.C>a.ma-262?a.C-(a.ma-262):0,h=a.window,l=a.Xa,k=a.Ja,m=a.C+258,p=h[d+e-1],r=h[d+e];a.wa>=a.Ud&&(c>>=2);f>a.G&&(f=a.G);do{var q=b;if(h[q+e]===r&&h[q+e-1]===p&&h[q]===h[d]&&h[++q]===h[d+1]){d+=2;for(q++;h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&h[++d]===h[++q]&&d<m;);q=258-(m-d);d=m-258;if(q>e){a.ub=b;e=q;if(q>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=k[b&l])>g&&--c!==0);return e<=
a.G?e:a.G}
function hn(a){var b=a.ma,c;do{var d=a.Le-a.G-a.C;if(a.C>=b+(b-262)){S.mb(a.window,a.window,b,b,0);a.ub-=b;a.C-=b;a.va-=b;var e=c=a.nc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ja[--e],a.Ja[e]=f>=b?f-b:0;while(--c);d+=b}if(a.R.oa===0)break;e=a.R;c=a.window;f=a.C+a.G;var g=e.oa;g>d&&(g=d);g===0?c=0:(e.oa-=g,S.mb(c,e.input,e.hb,g,f),e.state.wrap===1?e.L=om(e.L,c,g,f):e.state.wrap===2&&(e.L=pm(e.L,c,g,f)),e.hb+=g,e.ib+=g,c=g);a.G+=c;if(a.G+a.la>=3)for(d=a.C-a.la,a.S=a.window[d],
a.S=(a.S<<a.Pa^a.window[d+1])&a.Oa;a.la&&!(a.S=(a.S<<a.Pa^a.window[d+3-1])&a.Oa,a.Ja[d&a.Xa]=a.head[a.S],a.head[a.S]=d,d++,a.la--,a.G+a.la<3););}while(a.G<262&&a.R.oa!==0)}
function jn(a,b){for(var c;;){if(a.G<262){hn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Xa]=a.head[a.S],a.head[a.S]=a.C);c!==0&&a.C-c<=a.ma-262&&(a.V=gn(a,c));if(a.V>=3)if(c=an(a,a.C-a.ub,a.V-3),a.G-=a.V,a.V<=a.bd&&a.G>=3){a.V--;do a.C++,a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Xa]=a.head[a.S],a.head[a.S]=a.C;while(--a.V!==0);a.C++}else a.C+=a.V,a.V=0,a.S=a.window[a.C],a.S=(a.S<<a.Pa^a.window[a.C+1])&a.Oa;else c=an(a,0,
a.window[a.C]),a.G--,a.C++;if(c&&(en(a,!1),a.R.T===0))return 1}a.la=a.C<2?a.C:2;return b===4?(en(a,!0),a.R.T===0?3:4):a.za&&(en(a,!1),a.R.T===0)?1:2}
function kn(a,b){for(var c,d;;){if(a.G<262){hn(a);if(a.G<262&&b===0)return 1;if(a.G===0)break}c=0;a.G>=3&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,c=a.Ja[a.C&a.Xa]=a.head[a.S],a.head[a.S]=a.C);a.wa=a.V;a.oe=a.ub;a.V=2;c!==0&&a.wa<a.bd&&a.C-c<=a.ma-262&&(a.V=gn(a,c),a.V<=5&&(a.strategy===1||a.V===3&&a.C-a.ub>4096)&&(a.V=2));if(a.wa>=3&&a.V<=a.wa){d=a.C+a.G-3;c=an(a,a.C-1-a.oe,a.wa-3);a.G-=a.wa-1;a.wa-=2;do++a.C<=d&&(a.S=(a.S<<a.Pa^a.window[a.C+3-1])&a.Oa,a.Ja[a.C&a.Xa]=a.head[a.S],a.head[a.S]=a.C);
while(--a.wa!==0);a.fb=0;a.V=2;a.C++;if(c&&(en(a,!1),a.R.T===0))return 1}else if(a.fb){if((c=an(a,0,a.window[a.C-1]))&&en(a,!1),a.C++,a.G--,a.R.T===0)return 1}else a.fb=1,a.C++,a.G--}a.fb&&(an(a,0,a.window[a.C-1]),a.fb=0);a.la=a.C<2?a.C:2;return b===4?(en(a,!0),a.R.T===0?3:4):a.za&&(en(a,!1),a.R.T===0)?1:2}
function ln(a,b){for(var c,d,e,f=a.window;;){if(a.G<=258){hn(a);if(a.G<=258&&b===0)return 1;if(a.G===0)break}a.V=0;if(a.G>=3&&a.C>0&&(d=a.C-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.C+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.V=258-(e-d);a.V>a.G&&(a.V=a.G)}a.V>=3?(c=an(a,1,a.V-3),a.G-=a.V,a.C+=a.V,a.V=0):(c=an(a,0,a.window[a.C]),a.G--,a.C++);if(c&&(en(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(en(a,!0),a.R.T===0?3:4):
a.za&&(en(a,!1),a.R.T===0)?1:2}
function mn(a,b){for(var c;;){if(a.G===0&&(hn(a),a.G===0)){if(b===0)return 1;break}a.V=0;c=an(a,0,a.window[a.C]);a.G--;a.C++;if(c&&(en(a,!1),a.R.T===0))return 1}a.la=0;return b===4?(en(a,!0),a.R.T===0?3:4):a.za&&(en(a,!1),a.R.T===0)?1:2}
function nn(a,b,c,d,e){this.yf=a;this.og=b;this.rg=c;this.ng=d;this.tf=e}
var on;on=[new nn(0,0,0,0,function(a,b){var c=65535;for(c>a.Aa-5&&(c=a.Aa-5);;){if(a.G<=1){hn(a);if(a.G===0&&b===0)return 1;if(a.G===0)break}a.C+=a.G;a.G=0;var d=a.va+c;if(a.C===0||a.C>=d)if(a.G=a.C-d,a.C=d,en(a,!1),a.R.T===0)return 1;if(a.C-a.va>=a.ma-262&&(en(a,!1),a.R.T===0))return 1}a.la=0;if(b===4)return en(a,!0),a.R.T===0?3:4;a.C>a.va&&en(a,!1);return 1}),
new nn(4,4,8,4,jn),new nn(4,5,16,8,jn),new nn(4,6,32,32,jn),new nn(4,4,16,16,kn),new nn(8,16,32,32,kn),new nn(8,16,128,128,kn),new nn(8,32,128,256,kn),new nn(32,128,258,1024,kn),new nn(32,258,258,4096,kn)];
function pn(){this.R=null;this.status=0;this.ba=null;this.wrap=this.pending=this.Rb=this.Aa=0;this.K=null;this.Ca=0;this.method=8;this.tb=-1;this.Xa=this.wd=this.ma=0;this.window=null;this.Le=0;this.head=this.Ja=null;this.je=this.Ud=this.strategy=this.level=this.bd=this.fe=this.wa=this.G=this.ub=this.C=this.fb=this.oe=this.V=this.va=this.Pa=this.Oa=this.Tc=this.nc=this.S=0;this.ta=new S.Ka(1146);this.cb=new S.Ka(122);this.ka=new S.Ka(78);cn(this.ta);cn(this.cb);cn(this.ka);this.Dd=this.fc=this.pc=
null;this.Ma=new S.Ka(16);this.da=new S.Ka(573);cn(this.da);this.sb=this.Qa=0;this.depth=new S.Ka(573);cn(this.depth);this.ha=this.pa=this.la=this.matches=this.yb=this.Ra=this.Ib=this.za=this.Qb=this.Yc=0}
function qn(a,b){if(!a||!a.state||b>5||b<0)return a?bn(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.oa!==0||c.status===666&&b!==4)return bn(a,a.T===0?-5:-2);c.R=a;var d=c.tb;c.tb=b;if(c.status===42)if(c.wrap===2)a.L=0,T(c,31),T(c,139),T(c,8),c.K?(T(c,(c.K.text?1:0)+(c.K.Sa?2:0)+(c.K.extra?4:0)+(c.K.name?8:0)+(c.K.comment?16:0)),T(c,c.K.time&255),T(c,c.K.time>>8&255),T(c,c.K.time>>16&255),T(c,c.K.time>>24&255),T(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),T(c,c.K.gi&255),c.K.extra&&c.K.extra.length&&
(T(c,c.K.extra.length&255),T(c,c.K.extra.length>>8&255)),c.K.Sa&&(a.L=pm(a.L,c.ba,c.pending,0)),c.Ca=0,c.status=69):(T(c,0),T(c,0),T(c,0),T(c,0),T(c,0),T(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),T(c,3),c.status=113);else{var e=8+(c.wd-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.C!==0&&(e|=32);c.status=113;fn(c,e+(31-e%31));c.C!==0&&(fn(c,a.L>>>16),fn(c,a.L&65535));a.L=1}if(c.status===69)if(c.K.extra){for(e=c.pending;c.Ca<(c.K.extra.length&65535)&&(c.pending!==c.Aa||
(c.K.Sa&&c.pending>e&&(a.L=pm(a.L,c.ba,c.pending-e,e)),dn(a),e=c.pending,c.pending!==c.Aa));)T(c,c.K.extra[c.Ca]&255),c.Ca++;c.K.Sa&&c.pending>e&&(a.L=pm(a.L,c.ba,c.pending-e,e));c.Ca===c.K.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(c.status===73)if(c.K.name){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=pm(a.L,c.ba,c.pending-e,e)),dn(a),e=c.pending,c.pending===c.Aa)){var f=1;break}f=c.Ca<c.K.name.length?c.K.name.charCodeAt(c.Ca++)&255:0;T(c,f)}while(f!==0);c.K.Sa&&c.pending>
e&&(a.L=pm(a.L,c.ba,c.pending-e,e));f===0&&(c.Ca=0,c.status=91)}else c.status=91;if(c.status===91)if(c.K.comment){e=c.pending;do{if(c.pending===c.Aa&&(c.K.Sa&&c.pending>e&&(a.L=pm(a.L,c.ba,c.pending-e,e)),dn(a),e=c.pending,c.pending===c.Aa)){f=1;break}f=c.Ca<c.K.comment.length?c.K.comment.charCodeAt(c.Ca++)&255:0;T(c,f)}while(f!==0);c.K.Sa&&c.pending>e&&(a.L=pm(a.L,c.ba,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.K.Sa?(c.pending+2>c.Aa&&dn(a),c.pending+2<=c.Aa&&(T(c,
a.L&255),T(c,a.L>>8&255),a.L=0,c.status=113)):c.status=113);if(c.pending!==0){if(dn(a),a.T===0)return c.tb=-1,0}else if(a.oa===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return bn(a,-5);if(c.status===666&&a.oa!==0)return bn(a,-5);if(a.oa!==0||c.G!==0||b!==0&&c.status!==666){d=c.strategy===2?mn(c,b):c.strategy===3?ln(c,b):on[c.level].tf(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.T===0&&(c.tb=-1),0;if(d===2&&(b===1?(Mm(c,2,3),Nm(c,256,Am),c.ha===16?(Lm(c,c.pa),c.pa=0,c.ha=0):c.ha>=
8&&(c.ba[c.pending++]=c.pa&255,c.pa>>=8,c.ha-=8)):b!==5&&(Mm(c,0,3),Sm(c,0,0),b===3&&(cn(c.head),c.G===0&&(c.C=0,c.va=0,c.la=0))),dn(a),a.T===0))return c.tb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(T(c,a.L&255),T(c,a.L>>8&255),T(c,a.L>>16&255),T(c,a.L>>24&255),T(c,a.ib&255),T(c,a.ib>>8&255),T(c,a.ib>>16&255),T(c,a.ib>>24&255)):(fn(c,a.L>>>16),fn(c,a.L&65535));dn(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var rn={};rn=function(){this.input=null;this.ib=this.oa=this.hb=0;this.output=null;this.ud=this.T=this.wb=0;this.msg="";this.state=null;this.Kc=2;this.L=0};var sn=Object.prototype.toString;
function tn(a){if(!(this instanceof tn))return new tn(a);a=this.options=S.assign({level:-1,method:8,chunkSize:16384,Ya:15,qg:8,strategy:0,Wa:""},a||{});a.raw&&a.Ya>0?a.Ya=-a.Ya:a.zf&&a.Ya>0&&a.Ya<16&&(a.Ya+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.R=new rn;this.R.T=0;var b=this.R;var c=a.level,d=a.method,e=a.Ya,f=a.qg,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=bn(b,-2);else{e===8&&(e=9);var l=new pn;
b.state=l;l.R=b;l.wrap=h;l.K=null;l.wd=e;l.ma=1<<l.wd;l.Xa=l.ma-1;l.Tc=f+7;l.nc=1<<l.Tc;l.Oa=l.nc-1;l.Pa=~~((l.Tc+3-1)/3);l.window=new S.jb(l.ma*2);l.head=new S.Ka(l.nc);l.Ja=new S.Ka(l.ma);l.Qb=1<<f+6;l.Aa=l.Qb*4;l.ba=new S.jb(l.Aa);l.Ib=1*l.Qb;l.Yc=3*l.Qb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.ib=b.ud=0;b.Kc=2;c=b.state;c.pending=0;c.Rb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.L=c.wrap===2?0:1;c.tb=0;if(!$m){d=Array(16);for(f=g=0;f<28;f++)for(Em[f]=g,e=0;e<1<<wm[f];e++)Dm[g++]=
f;Dm[g-1]=f;for(f=g=0;f<16;f++)for(Fm[f]=g,e=0;e<1<<xm[f];e++)Cm[g++]=f;for(g>>=7;f<30;f++)for(Fm[f]=g<<7,e=0;e<1<<xm[f]-7;e++)Cm[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Am[e*2+1]=8,e++,d[8]++;for(;e<=255;)Am[e*2+1]=9,e++,d[9]++;for(;e<=279;)Am[e*2+1]=7,e++,d[7]++;for(;e<=287;)Am[e*2+1]=8,e++,d[8]++;Pm(Am,287,d);for(e=0;e<30;e++)Bm[e*2+1]=5,Bm[e*2]=Om(e,5);Hm=new Gm(Am,wm,257,286,15);Im=new Gm(Bm,xm,0,30,15);Jm=new Gm([],ym,0,19,7);$m=!0}c.pc=new Km(c.ta,Hm);c.fc=new Km(c.cb,Im);c.Dd=
new Km(c.ka,Jm);c.pa=0;c.ha=0;Qm(c);c=0}else c=bn(b,-2);c===0&&(b=b.state,b.Le=2*b.ma,cn(b.head),b.bd=on[b.level].og,b.Ud=on[b.level].yf,b.je=on[b.level].rg,b.fe=on[b.level].ng,b.C=0,b.va=0,b.G=0,b.la=0,b.V=b.wa=2,b.fb=0,b.S=0);b=c}}else b=-2;if(b!==0)throw Error(um[b]);a.header&&(b=this.R)&&b.state&&b.state.wrap===2&&(b.state.K=a.header);if(a.Jb){var k;typeof a.Jb==="string"?k=nm(a.Jb):sn.call(a.Jb)==="[object ArrayBuffer]"?k=new Uint8Array(a.Jb):k=a.Jb;a=this.R;f=k;g=f.length;if(a&&a.state)if(k=
a.state,b=k.wrap,b===2||b===1&&k.status!==42||k.G)b=-2;else{b===1&&(a.L=om(a.L,f,g,0));k.wrap=0;g>=k.ma&&(b===0&&(cn(k.head),k.C=0,k.va=0,k.la=0),c=new S.jb(k.ma),S.mb(c,f,g-k.ma,k.ma,0),f=c,g=k.ma);c=a.oa;d=a.hb;e=a.input;a.oa=g;a.hb=0;a.input=f;for(hn(k);k.G>=3;){f=k.C;g=k.G-2;do k.S=(k.S<<k.Pa^k.window[f+3-1])&k.Oa,k.Ja[f&k.Xa]=k.head[k.S],k.head[k.S]=f,f++;while(--g);k.C=f;k.G=2;hn(k)}k.C+=k.G;k.va=k.C;k.la=k.G;k.G=0;k.V=k.wa=2;k.fb=0;a.hb=d;a.input=e;a.oa=c;k.wrap=b;b=0}else b=-2;if(b!==0)throw Error(um[b]);
this.Ch=!0}}
tn.prototype.push=function(a,b){var c=this.R,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=nm(a):sn.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.oa=c.input.length;do{c.T===0&&(c.output=new S.jb(d),c.wb=0,c.T=d);a=qn(c,e);if(a!==1&&a!==0)return un(this,a),this.ended=!0,!1;if(c.T===0||c.oa===0&&(e===4||e===2))if(this.options.Wa==="string"){var f=S.sd(c.output,c.wb);b=f;f=f.length;if(f<65537&&(b.subarray&&mm||!b.subarray))b=
String.fromCharCode.apply(null,S.sd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=S.sd(c.output,c.wb),this.chunks.push(b)}while((c.oa>0||c.T===0)&&a!==1);if(e===4)return(c=this.R)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=bn(c,-2):(c.state=null,a=d===113?bn(c,-3):0)):a=-2,un(this,a),this.ended=!0,a===0;e===2&&(un(this,0),c.T=0);return!0};
function un(a,b){b===0&&(a.result=a.options.Wa==="string"?a.chunks.join(""):S.Nd(a.chunks));a.chunks=[];a.err=b;a.msg=a.R.msg}
;function vn(a){this.name=a}
;var wn=new vn("rawColdConfigGroup");var xn=new vn("rawHotConfigGroup");function yn(a){this.U=Fd(a)}
y(yn,L);yn.prototype.g=function(a){K(this,5,a)};function zn(a){this.U=Fd(a)}
y(zn,L);function An(a){this.U=Fd(a)}
y(An,L);function Bn(a){this.U=Fd(a)}
y(Bn,L);Bn.prototype.qb=function(){return ce(this,61)};
Bn.prototype.getPlayerType=function(){return ce(this,36)};
Bn.prototype.setHomeGroupInfo=function(a){return Zd(this,An,81,a)};function Cn(a){this.U=Fd(a)}
y(Cn,L);var Dn=[2,3,4,5,6];function En(a){this.U=Fd(a)}
y(En,L);function Fn(a){this.U=Fd(a)}
y(Fn,L);function Gn(a){this.U=Fd(a)}
y(Gn,L);function Hn(a){this.U=Fd(a)}
y(Hn,L);Hn.prototype.setSafetyMode=function(a){return fe(this,5,a)};function In(a){this.U=Fd(a)}
y(In,L);var Jn={Bh:"WEB_DISPLAY_MODE_UNKNOWN",xh:"WEB_DISPLAY_MODE_BROWSER",zh:"WEB_DISPLAY_MODE_MINIMAL_UI",Ah:"WEB_DISPLAY_MODE_STANDALONE",yh:"WEB_DISPLAY_MODE_FULLSCREEN"};function Kn(a){this.U=Fd(a,500)}
y(Kn,L);function Ln(a){this.U=Fd(a)}
y(Ln,L);function Mn(a){this.U=Fd(a)}
y(Mn,L);Mn.prototype.getPlaylistId=function(){return de(this,2)};
var ee=[1,2];function Nn(a){this.U=Fd(a)}
y(Nn,L);var On=C.window,Pn,Qn,Rn=(On==null?void 0:(Pn=On.yt)==null?void 0:Pn.config_)||(On==null?void 0:(Qn=On.ytcfg)==null?void 0:Qn.data_)||{};G("yt.config_",Rn);function Sn(){var a=arguments;a.length>1?Rn[a[0]]=a[1]:a.length===1&&Object.assign(Rn,a[0])}
function U(a,b){return a in Rn?Rn[a]:b}
;var Tn={};function Un(){return Tn.clicktracking||(Tn.clicktracking="clicktracking".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function V(a){a=Vn(a);return typeof a==="string"&&a==="false"?!1:!!a}
function W(a,b){a=Vn(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Vn(a){return U("EXPERIMENT_FLAGS",{})[a]}
function Wn(){for(var a=[],b=U("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=U("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;function Xn(a,b,c,d){Ye.set(""+a,b,{ad:c,path:"/",domain:d===void 0?"youtube.com":d,secure:!1})}
;var Yn=[];function Zn(a){Yn.forEach(function(b){return b(a)})}
function $n(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){ao(b)}}:a}
function ao(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=U("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Sn("ERRORS",b));Zn(a)}
function bo(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=U("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Sn("ERRORS",f))}
;var co=/^[\w.]*$/,eo={q:!0,search_query:!0};function fo(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=go(f[0]||""),h=go(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?yb(l,h):c[g]=[l,h]}else c[g]=h}catch(r){var k=r,m=f[0],p=String(fo);k.args=[{key:m,value:f[1],query:a,method:ho===p?"unchanged":p}];eo.hasOwnProperty(m)||bo(k)}}return c}
var ho=String(fo);function io(a){var b=[];le(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];vb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function jo(a){a.charAt(0)==="?"&&(a=a.substring(1));return fo(a,"&")}
function ko(a,b){return lo(a,b||{},!0)}
function lo(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=jo(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return Ib(a,e)+d}
function mo(a){if(!b)var b=window.location.href;var c=a.match(Bb)[1]||null,d=Db(a);c&&d?(a=a.match(Bb),b=b.match(Bb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Db(b)===d&&(Number(b.match(Bb)[4]||null)||null)===(Number(a.match(Bb)[4]||null)||null):!0;return a}
function go(a){return a&&a.match(co)?a:Ab(a)}
;var no=gc||hc;function oo(a){var b=Qb();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var po=Date.now().toString();function qo(a){var b=ro;a=a===void 0?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Qe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(fb){f=2;break a}f=f?f===b.l.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?ie:g;try{var h=g.history.length}catch(fb){h=0}e.u_his=h;var l;e.u_h=(l=ie.screen)==null?void 0:l.height;var k;e.u_w=(k=ie.screen)==null?void 0:k.width;var m;e.u_ah=(m=ie.screen)==null?void 0:m.availHeight;var p;e.u_aw=
(p=ie.screen)==null?void 0:p.availWidth;var r;e.u_cd=(r=ie.screen)==null?void 0:r.colorDepth}catch(fb){}h=b.g;try{var q=h.screenX;var t=h.screenY}catch(fb){}try{var w=h.outerWidth;var z=h.outerHeight}catch(fb){}try{var I=h.innerWidth;var O=h.innerHeight}catch(fb){}try{var ea=h.screenLeft;var ka=h.screenTop}catch(fb){}try{I=h.innerWidth,O=h.innerHeight}catch(fb){}try{var Da=h.screen.availWidth;var Va=h.screen.availTop}catch(fb){}q=[ea,ka,q,t,Da,Va,w,z,I,O];t=b.g.top;try{var gb=(t||window).document,
qa=gb.compatMode=="CSS1Compat"?gb.documentElement:gb.body;var Ea=(new Oe(qa.clientWidth,qa.clientHeight)).round()}catch(fb){Ea=new Oe(-12245933,-12245933)}gb=Ea;Ea={};var La=La===void 0?C:La;qa=new Fl;"SVGElement"in La&&"createElementNS"in La.document&&qa.set(0);t=Me();t["allow-top-navigation-by-user-activation"]&&qa.set(1);t["allow-popups-to-escape-sandbox"]&&qa.set(2);La.crypto&&La.crypto.subtle&&qa.set(3);"TextDecoder"in La&&"TextEncoder"in La&&qa.set(4);La=Gl(qa);Ea.bc=La;Ea.bih=gb.height;Ea.biw=
gb.width;Ea.brdim=q.join();b=b.l;b=(Ea.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ea.wgl=!!ie.WebGLRenderingContext,Ea);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ro=new function(){var a=window.document;this.g=window;this.l=a};
G("yt.ads_.signals_.getAdSignalsString",function(a){return io(qo(a))});F();var so="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function to(){if(!so)return null;var a=so();return"open"in a?a:null}
;function uo(a,b){typeof a==="function"&&(a=$n(a));return window.setTimeout(a,b)}
;var vo="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(vo);var wo={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},xo="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(vo)),yo=!1;function zo(a,b,c,d,e,f,g,h){function l(){(k&&"readyState"in k?k.readyState:0)===4&&b&&$n(b)(k)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var k=to();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;V("debug_forward_web_query_parameters")&&(a=Ao(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Bo(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(p){bo(p)}}k.send(d);return k}
function Bo(a,b){b=b===void 0?{}:b;var c=mo(a),d=U("INNERTUBE_CLIENT_NAME"),e=V("web_ajax_ignore_global_headers_if_set"),f;for(f in wo){var g=U(wo[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=U("VISITOR_DATA"));var l;if(!(l=!g)){if(!(l=c||(Db(a)?!1:!0))){l=a;var k;if(k=V("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))k=Db(l),k=k!==null?k.split(".").reverse():null,k=k===null?
!1:k[1]==="google"?!0:k[2]==="google"?k[0]==="au"&&k[1]==="com"?!0:k[0]==="uk"&&k[1]==="co"?!0:!1:!1;k&&(l=Cb(l.match(Bb)[5]||null)||"",l=l.split("/"),l="/"+(l.length>1?l[1]:""),k=l==="/pagead");l=k?!0:!1}l=!l}l||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Db(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Db(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(p){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Db(a)||(b["X-YouTube-Ad-Signals"]=io(qo()));return b}
function Co(a,b){b.method="POST";b.postParams||(b.postParams={});return Do(a,b)}
function Do(a,b){var c=b.format||"JSON";a=Eo(a,b);var d=Fo(a,b),e=!1,f=Go(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,p=400<=l.status&&l.status<500,r=500<=l.status&&l.status<600;if(k||p||r)m=Ho(a,c,l,b.convertToSafeHtml);k&&(k=Io(c,l,m));m=m||{};p=b.context||C;k?b.onSuccess&&b.onSuccess.call(p,l,m):b.onError&&b.onError.call(p,l,m);b.onFinish&&
b.onFinish.call(p,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=uo(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Eo(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=U("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ko(a,b);return a}
function Fo(a,b){var c=U("XSRF_FIELD_NAME"),d=U("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=U("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Db(a)&&!b.withCredentials&&Db(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(V("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=jo(e),oe(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):Hb(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!yo&&a&&b.method!=="POST"&&(yo=!0,ao(Error("AJAX request with postData should use POST")));return e}
function Ho(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,bo(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Jo(a):null)e={},vb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Ko(g)})}d&&Lo(e);
return e}
function Lo(a){if(Ma(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=pb(a[b]);a[c]=d}else Lo(a[b])}}
function Io(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function Jo(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function Ko(a){var b="";vb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ao(a){var b=window.location.search,c=Db(a);V("debug_handle_relative_url_for_query_forward_killswitch")||!c&&mo(a)&&(c=document.location.hostname);var d=Cb(a.match(Bb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=jo(b),f={};vb(xo,function(g){e[g]&&(f[g]=e[g])});
return lo(a,f||{},!1)}
var Go=zo;function Mo(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function No(){}
;function Oo(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;G("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Po={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Qo={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Ro={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},So={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function To(){var a=C.navigator;return a?a.connection:void 0}
;function Uo(a){var b=Ha.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Uo,Error);function Vo(){try{return Wo(),!0}catch(a){return!1}}
function Wo(){if(U("DATASYNC_ID")!==void 0)return U("DATASYNC_ID");throw new Uo("Datasync ID not set","unknown");}
;function Xo(){}
function Yo(a,b){return Kf.ab(a,0,b)}
Xo.prototype.Ha=function(a,b){return this.ab(a,1,b)};
Xo.prototype.Fb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Zo=W("web_emulated_idle_callback_delay",300),$o=1E3/60-3,ap=[8,5,4,3,2,1,0];
function bp(a){a=a===void 0?{}:a;df.call(this);this.l=[];this.i={};this.I=this.g=0;this.H=this.s=!1;this.B=[];this.D=this.J=!1;for(var b=v(ap),c=b.next();!c.done;c=b.next())this.l[c.value]=[];this.o=0;this.na=a.timeout||1;this.A=$o;this.u=0;this.O=this.tg.bind(this);this.ea=this.Qg.bind(this);this.X=this.Te.bind(this);this.Y=this.Vf.bind(this);this.ca=this.yg.bind(this);this.W=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!V("disable_scheduler_requestIdleCallback");(this.F=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.O)}
y(bp,df);n=bp.prototype;n.Fb=function(a){var b=F();cp(a);a=F()-b;this.s||(this.A-=a)};
n.ab=function(a,b,c){++this.I;if(b===10)return this.Fb(a),this.I;var d=this.I;this.i[d]=a;this.s&&!c?this.B.push({id:d,priority:b}):(this.l[b].push(d),this.H||this.s||(this.g!==0&&dp(this)!==this.u&&ep(this),this.start()));return d};
n.xa=function(a){delete this.i[a]};
function fp(a){a.B.length=0;for(var b=5;b>=0;b--)a.l[b].length=0;a.l[8].length=0;a.i={};ep(a)}
function dp(a){if(a.l[8].length){if(a.D)return 4;if(!document.hidden&&a.F)return 3}for(var b=5;b>=a.o;b--)if(a.l[b].length>0)return b>0?!document.hidden&&a.F?3:2:1;return 0}
function gp(a){var b=D("yt.logging.errors.log");b&&b(a)}
function cp(a){try{a()}catch(b){gp(b)}}
function hp(a){for(var b=v(ap),c=b.next();!c.done;c=b.next())if(a.l[c.value].length)return!0;return!1}
n.Vf=function(a){var b=void 0;a&&(b=a.timeRemaining());this.J=!0;ip(this,b);this.J=!1};
n.Qg=function(){ip(this)};
n.Te=function(){jp(this)};
n.yg=function(a){this.D=!0;var b=dp(this);b===4&&b!==this.u&&(ep(this),this.start());ip(this,void 0,a);this.D=!1};
n.tg=function(){document.hidden||jp(this);this.g&&(ep(this),this.start())};
function jp(a){ep(a);a.s=!0;for(var b=F(),c=a.l[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&cp(e)}kp(a);a.s=!1;hp(a)&&a.start();b=F()-b;a.A-=b}
function kp(a){for(var b=0,c=a.B.length;b<c;b++){var d=a.B[b];a.l[d.priority].push(d.id)}a.B.length=0}
function ip(a,b,c){a.D&&a.u===4&&a.g||ep(a);a.s=!0;b=F()+(b||a.A);for(var d=a.l[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){gp(k)}}for(d=a.l[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&cp(e);d=a.J?0:1;d=a.o>d?a.o:d;if(!(F()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.l[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&cp(c)}while(c&&F()<b)}a.s=!1;kp(a);a.A=$o;hp(a)&&a.start()}
n.start=function(){this.H=!1;if(this.g===0)switch(this.u=dp(this),this.u){case 1:var a=this.Y;this.g=this.W?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Zo);break;case 2:this.g=window.setTimeout(this.ea,this.na);break;case 3:this.g=window.requestAnimationFrame(this.ca);break;case 4:this.g=window.setTimeout(this.X,0)}};
function ep(a){if(a.g){switch(a.u){case 1:var b=a.g;a.W?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
n.Ba=function(){fp(this);ep(this);this.F&&document.removeEventListener("visibilitychange",this.O);df.prototype.Ba.call(this)};var lp=D("yt.scheduler.instance.timerIdMap_")||{},mp=W("kevlar_tuner_scheduler_soft_state_timer_ms",800),np=0,op=0;function pp(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.bb)a=new bp(U("scheduler")||{}),G("ytglobal.schedulerInstanceInstance_",a);return a}
function qp(){rp();var a=D("ytglobal.schedulerInstanceInstance_");a&&(a&&typeof a.dispose=="function"&&a.dispose(),G("ytglobal.schedulerInstanceInstance_",null))}
function rp(){fp(pp());for(var a in lp)lp.hasOwnProperty(a)&&delete lp[Number(a)]}
function sp(a,b,c){if(!c)return c=c===void 0,-pp().ab(a,b,c);var d=window.setTimeout(function(){var e=pp().ab(a,b);lp[d]=e},c);
return d}
function tp(a){pp().Fb(a)}
function up(a){var b=pp();if(a<0)b.xa(-a);else{var c=lp[a];c?(b.xa(c),delete lp[a]):window.clearTimeout(a)}}
function vp(){wp()}
function wp(){window.clearTimeout(np);pp().start()}
function xp(){var a=pp();ep(a);a.H=!0;window.clearTimeout(np);np=window.setTimeout(vp,mp)}
function yp(){window.clearTimeout(op);op=window.setTimeout(function(){zp(0)},mp)}
function zp(a){yp();var b=pp();b.o=a;b.start()}
function Ap(a){yp();var b=pp();b.o>a&&(b.o=a,b.start())}
function Bp(){window.clearTimeout(op);var a=pp();a.o=0;a.start()}
;function Cp(){Xo.apply(this,arguments)}
y(Cp,Xo);function Dp(){Cp.g||(Cp.g=new Cp);return Cp.g}
Cp.prototype.ab=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):uo(a,c||0)};
Cp.prototype.xa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Cp.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var Kf=Dp();
V("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(G("yt.scheduler.instance.dispose",qp),G("yt.scheduler.instance.addJob",sp),G("yt.scheduler.instance.addImmediateJob",tp),G("yt.scheduler.instance.cancelJob",up),G("yt.scheduler.instance.cancelAllJobs",rp),G("yt.scheduler.instance.start",wp),G("yt.scheduler.instance.pause",xp),G("yt.scheduler.instance.setPriorityThreshold",zp),G("yt.scheduler.instance.enablePriorityThreshold",Ap),G("yt.scheduler.instance.clearPriorityThreshold",Bp),G("yt.scheduler.initialized",
!0));function Ep(a){var b=new hm;this.g=(a=(b.l=gm(b.g))?a?new im(b,a):b:null)?new bm(a):null;this.l=document.domain||window.location.hostname}
Ep.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape(Ql(b))}catch(f){return}else e=escape(b);Xn(a,e,c,this.l)};
Ep.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Ye.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Ep.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.l;Ye.remove(""+a,"/",b===void 0?"youtube.com":b)};var Fp=function(){var a;return function(){a||(a=new Ep("ytidb"));return a}}();
function Gp(){var a;return(a=Fp())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Hp=[],Ip=!1;function Jp(a){Ip||(Hp.push({type:"ERROR",payload:a}),Hp.length>10&&Hp.shift())}
function Kp(a,b){Ip||(Hp.push({type:"EVENT",eventType:a,payload:b}),Hp.length>10&&Hp.shift())}
;function Lp(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Mp(a){return a.substr(0,a.indexOf(":"))||a}
;var Np={},Op=(Np.AUTH_INVALID="No user identifier specified.",Np.EXPLICIT_ABORT="Transaction was explicitly aborted.",Np.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Np.MISSING_INDEX="Index not created.",Np.MISSING_OBJECT_STORES="Object stores not created.",Np.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Np.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Np.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Np.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Np.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Np.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Np.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Np),Pp={},Qp=(Pp.AUTH_INVALID="ERROR",Pp.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Pp.EXPLICIT_ABORT="IGNORED",Pp.IDB_NOT_SUPPORTED="ERROR",Pp.MISSING_INDEX=
"WARNING",Pp.MISSING_OBJECT_STORES="ERROR",Pp.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Pp.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Pp.QUOTA_EXCEEDED="WARNING",Pp.QUOTA_MAYBE_EXCEEDED="WARNING",Pp.UNKNOWN_ABORT="WARNING",Pp.INCOMPATIBLE_DB_VERSION="WARNING",Pp),Rp={},Sp=(Rp.AUTH_INVALID=!1,Rp.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Rp.EXPLICIT_ABORT=!1,Rp.IDB_NOT_SUPPORTED=!1,Rp.MISSING_INDEX=!1,Rp.MISSING_OBJECT_STORES=!1,Rp.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Rp.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Rp.QUOTA_EXCEEDED=!1,Rp.QUOTA_MAYBE_EXCEEDED=!0,Rp.UNKNOWN_ABORT=!0,Rp.INCOMPATIBLE_DB_VERSION=!1,Rp);function X(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Op[a]:c;d=d===void 0?Qp[a]:d;e=e===void 0?Sp[a]:e;Uo.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Uo);function Tp(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Op.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Tp.prototype)}
y(Tp,X);function Up(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Up.prototype)}
y(Up,Error);var Vp=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Wp(a,b,c,d){b=Mp(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new X("QUOTA_EXCEEDED",a);if(ic&&e.name==="UnknownError")return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Up)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Vp.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",fi:e.name})];e.level="WARNING";return e}
function Xp(a,b,c){var d=Gp();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Yp(a){if(!a)throw Error();throw a;}
function Zp(a){return a}
function $p(a){this.g=a}
function aq(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=v(d.l);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=v(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.l=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
aq.resolve=function(a){return new aq(new $p(function(b,c){a instanceof aq?a.then(b,c):b(a)}))};
aq.reject=function(a){return new aq(new $p(function(b,c){c(a)}))};
aq.prototype.then=function(a,b){var c=this,d=a!=null?a:Zp,e=b!=null?b:Yp;return new aq(new $p(function(f,g){c.state.status==="PENDING"?(c.g.push(function(){bq(c,c,d,f,g)}),c.l.push(function(){cq(c,c,e,f,g)})):c.state.status==="FULFILLED"?bq(c,c,d,f,g):c.state.status==="REJECTED"&&cq(c,c,e,f,g)}))};
function dq(a,b){a.then(void 0,b)}
function bq(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof aq?eq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function cq(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof aq?eq(a,b,f,d,e):d(f)}catch(g){e(g)}}
function eq(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof aq?eq(a,b,f,d,e):d(f)},function(f){e(f)})}
;function fq(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gq(a){return new Promise(function(b,c){fq(a,b,c)})}
function hq(a){return new aq(new $p(function(b,c){fq(a,b,c)}))}
;function iq(a,b){return new aq(new $p(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var jq=window,Y=jq.ytcsi&&jq.ytcsi.now?jq.ytcsi.now:jq.performance&&jq.performance.timing&&jq.performance.now&&jq.performance.timing.navigationStart?function(){return jq.performance.timing.navigationStart+jq.performance.now()}:function(){return(new Date).getTime()};function kq(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.l=!1}
n=kq.prototype;n.add=function(a,b,c){return lq(this,[a],{mode:"readwrite",qa:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return lq(this,[a],{mode:"readwrite",qa:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.g.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
function mq(a,b,c){a=a.g.createObjectStore(b,c);return new nq(a)}
n.delete=function(a,b){return lq(this,[a],{mode:"readwrite",qa:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return lq(this,[a],{mode:"readonly",qa:!0},function(c){return c.objectStore(a).get(b)})};
function oq(a,b,c){return lq(a,[b],{mode:"readwrite",qa:!0},function(d){d=d.objectStore(b);return hq(d.g.put(c,void 0))})}
n.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function lq(a,b,c,d){var e,f,g,h,l,k,m,p,r,q,t,w;return B(function(z){switch(z.g){case 1:var I={mode:"readonly",qa:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?I.mode=c:Object.assign(I,c);e=I;a.transactionCount++;f=e.qa?3:1;g=0;case 2:if(h){z.M(4);break}g++;l=Math.round(Y());wa(z,5);k=a.g.transaction(b,e.mode);I=new pq(k);I=qq(I,d);return A(z,I,7);case 7:return m=z.l,p=Math.round(Y()),rq(a,l,p,g,void 0,b.join(),e),z.return(m);case 5:r=xa(z);q=Math.round(Y());t=Wp(r,a.g.name,b.join(),
a.g.version);if((w=t instanceof X&&!t.g)||g>=f)rq(a,l,q,g,t,b.join(),e),h=t;z.M(2);break;case 4:return z.return(Promise.reject(h))}})}
function rq(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Kp("QUOTA_EXCEEDED",{dbName:Mp(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&e.type==="UNKNOWN_ABORT"&&(c-=a.i,c<0&&c>=2147483648&&(c=0),Kp("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.l=!0),sq(a,!1,d,f,b,g.tag),Jp(e)):sq(a,!0,d,f,b,g.tag)}
function sq(a,b,c,d,e,f){Kp("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.l,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.g.name};
function nq(a){this.g=a}
n=nq.prototype;n.add=function(a,b){return hq(this.g.add(a,b))};
n.autoIncrement=function(){return this.g.autoIncrement};
n.clear=function(){return hq(this.g.clear()).then(function(){})};
function tq(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function uq(a,b){return vq(a,{query:b},function(c){return c.delete().then(function(){return wq(c)})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?uq(this,a):hq(this.g.delete(a))};
n.get=function(a){return hq(this.g.get(a))};
n.index=function(a){try{return new xq(this.g.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Up(a,this.g.name);throw b;}};
n.getName=function(){return this.g.name};
n.keyPath=function(){return this.g.keyPath};
function vq(a,b,c){a=a.g.openCursor(b.query,b.direction);return yq(a).then(function(d){return iq(d,c)})}
function pq(a){var b=this;this.g=a;this.i=new Map;this.l=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.l){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(l===null)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function qq(a,b){var c=new Promise(function(d,e){try{dq(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
pq.prototype.abort=function(){this.g.abort();this.l=!0;throw new X("EXPLICIT_ABORT");};
pq.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new nq(a),this.i.set(a,b));return b};
function xq(a){this.g=a}
xq.prototype.delete=function(a){return zq(this,{query:a},function(b){return b.delete().then(function(){return wq(b)})})};
xq.prototype.get=function(a){return hq(this.g.get(a))};
xq.prototype.keyPath=function(){return this.g.keyPath};
xq.prototype.unique=function(){return this.g.unique};
function zq(a,b,c){a=a.g.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return yq(a).then(function(d){return iq(d,c)})}
function Aq(a,b){this.request=a;this.cursor=b}
function yq(a){return hq(a).then(function(b){return b?new Aq(a,b):null})}
function wq(a){a.cursor.continue(void 0);return yq(a.request)}
Aq.prototype.delete=function(){return hq(this.cursor.delete()).then(function(){})};
Aq.prototype.update=function(a){return hq(this.cursor.update(a))};function Bq(a,b,c){return new Promise(function(d,e){function f(){r||(r=new kq(g.result,{closed:p}));return r}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.We,l=c.Xe,k=c.Og,m=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(q){try{if(q.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&q.dataLoss!=="none"&&Kp("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:Mp(a)});var t=f(),w=new pq(g.transaction);m&&
m(t,function(z){return q.oldVersion<z&&q.newVersion>=z},w);
w.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var q=g.result;l&&q.addEventListener("versionchange",function(){l(f())});
q.addEventListener("close",function(){Kp("IDB_UNEXPECTEDLY_CLOSED",{dbName:Mp(a),dbVersion:q.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Cq(a,b,c){c=c===void 0?{}:c;return Bq(a,b,c)}
function Dq(a,b){b=b===void 0?{}:b;var c,d,e,f;return B(function(g){if(g.g==1)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.We)&&c.addEventListener("blocked",function(){e()}),A(g,gq(c),4);
if(g.g!=2)g.g=0,g.o=0;else throw f=xa(g),Wp(f,a,"",-1);})}
;function Eq(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.m=0}
Eq.prototype.l=function(a,b,c){c=c===void 0?{}:c;return Cq(a,b,c)};
Eq.prototype.delete=function(a){a=a===void 0?{}:a;return Dq(this.name,a)};
function Fq(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Gq(a,b){if(!b)throw Xp("openWithToken",Mp(a.name));return Hq(a)}
function Hq(a){function b(){var f,g,h,l,k,m,p,r,q,t;return B(function(w){switch(w.g){case 1:return g=(f=Error().stack)!=null?f:"",wa(w,2),A(w,a.l(a.name,a.options.version,d),4);case 4:for(var z=h=w.l,I=a.options,O=[],ea=v(Object.keys(I.xb)),ka=ea.next();!ka.done;ka=ea.next()){ka=ka.value;var Da=I.xb[ka],Va=Da.Ag===void 0?Number.MAX_VALUE:Da.Ag;!(z.g.version>=Da.Gb)||z.g.version>=Va||z.g.objectStoreNames.contains(ka)||O.push(ka)}l=O;if(l.length===0){w.M(5);break}k=Object.keys(a.options.xb);m=h.objectStoreNames();
if(a.o<W("ytidb_reopen_db_retries",0))return a.o++,h.close(),Jp(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),w.return(b());if(!(a.m<W("ytidb_remake_db_retries",1))){w.M(6);break}a.m++;return A(w,a.delete(),7);case 7:return Jp(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),w.return(b());case 6:throw new Tp(m,k);case 5:return w.return(h);case 2:p=xa(w);if(p instanceof DOMException?
p.name!=="VersionError":"DOMError"in self&&p instanceof DOMError?p.name!=="VersionError":!(p instanceof Object&&"message"in p)||p.message!=="An attempt was made to open a database using a lower version than the existing version."){w.M(8);break}return A(w,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:r=w.l;q=r.g.version;if(a.options.version!==void 0&&q>a.options.version+1)throw r.close(),a.i=!1,Fq(a,q);return w.return(r);case 8:throw c(),p instanceof Error&&!V("ytidb_async_stack_killswitch")&&
(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Wp(p,a.name,"",(t=a.options.version)!=null?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Fq(a);if(a.g)return a.g;var d={Xe:function(f){f.close()},
closed:c,Og:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Iq=new Eq("YtIdbMeta",{xb:{databases:{Gb:1}},upgrade:function(a,b){b(1)&&mq(a,"databases",{keyPath:"actualName"})}});
function Jq(a,b){var c;return B(function(d){if(d.g==1)return A(d,Gq(Iq,b),2);c=d.l;return d.return(lq(c,["databases"],{qa:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return hq(f.g.put(a,void 0)).then(function(){})})}))})}
function Kq(a,b){var c;return B(function(d){if(d.g==1)return a?A(d,Gq(Iq,b),2):d.return();c=d.l;return d.return(c.delete("databases",a))})}
function Lq(a,b){var c,d;return B(function(e){return e.g==1?(c=[],A(e,Gq(Iq,b),2)):e.g!=3?(d=e.l,A(e,lq(d,["databases"],{qa:!0,mode:"readonly"},function(f){c.length=0;return vq(f.objectStore("databases"),{},function(g){a(g.cursor.value)&&c.push(g.cursor.value);return wq(g)})}),3)):e.return(c)})}
function Mq(a){return Lq(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
;var Nq,Oq=new function(){}(new function(){});
function Pq(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Gp();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=no)f=/WebKit\/([0-9]+)/.exec(Qb()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Qb()),f=!(f&&parseInt(f[1],10)>=602));if(f||ec)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Jq(d,Oq),4);case 4:return A(e,Kq("yt-idb-test-do-not-use",Oq),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Qq(){if(Nq!==void 0)return Nq;Ip=!0;return Nq=Pq().then(function(a){Ip=!1;var b;if((b=Fp())!=null&&b.g){var c;b={hasSucceededOnce:((c=Gp())==null?void 0:c.hasSucceededOnce)||a};var d;(d=Fp())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Rq(){return D("ytglobal.idbToken_")||void 0}
function Sq(){var a=Rq();return a?Promise.resolve(a):Qq().then(function(b){(b=b?Oq:void 0)&&G("ytglobal.idbToken_",b);return b})}
;new Wl;function Tq(a){if(!Vo())throw a=new X("AUTH_INVALID",{dbName:a}),Jp(a),a;var b=Wo();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Uq(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=(e=Error().stack)!=null?e:"",A(m,Sq(),2);case 2:g=m.l;if(!g)throw h=Xp("openDbImpl",a,b),V("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Jp(h),h;Lp(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Tq(a);wa(m,3);return A(m,Jq(l,g),5);case 5:return A(m,Cq(l.actualName,b,d),6);case 6:return m.return(m.l);case 3:return k=xa(m),wa(m,7),A(m,Kq(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw k;}})}
function Vq(a,b,c){c=c===void 0?{}:c;return Uq(a,b,!1,c)}
function Wq(a,b,c){c=c===void 0?{}:c;return Uq(a,b,!0,c)}
function Xq(a,b){b=b===void 0?{}:b;var c,d;return B(function(e){if(e.g==1)return A(e,Sq(),2);if(e.g!=3){c=e.l;if(!c)return e.return();Lp(a);d=Tq(a);return A(e,Dq(d.actualName,b),3)}return A(e,Kq(d.actualName,c),0)})}
function Yq(a,b,c){a=a.map(function(d){return B(function(e){return e.g==1?A(e,Dq(d.actualName,b),2):A(e,Kq(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Zq(){var a=a===void 0?{}:a;var b,c;return B(function(d){if(d.g==1)return A(d,Sq(),2);if(d.g!=3){b=d.l;if(!b)return d.return();Lp("LogsDatabaseV2");return A(d,Mq(b),3)}c=d.l;return A(d,Yq(c,a,b),0)})}
function $q(a,b){b=b===void 0?{}:b;var c;return B(function(d){if(d.g==1)return A(d,Sq(),2);if(d.g!=3){c=d.l;if(!c)return d.return();Lp(a);return A(d,Dq(a,b),3)}return A(d,Kq(a,c),0)})}
;function ar(a,b){Eq.call(this,a,b);this.options=b;Lp(a)}
y(ar,Eq);function br(a,b){var c;return function(){c||(c=new ar(a,b));return c}}
ar.prototype.l=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?Wq:Vq)(a,b,Object.assign({},c))};
ar.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?$q:Xq)(this.name,a)};
function cr(a,b){return br(a,b)}
;var dr={},er=cr("ytGcfConfig",{xb:(dr.coldConfigStore={Gb:1},dr.hotConfigStore={Gb:1},dr),shared:!1,upgrade:function(a,b){b(1)&&(tq(mq(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),tq(mq(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function fr(a){return Gq(er(),a)}
function gr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,fr(c),2);case 2:return e=g.l,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,oq(e,"hotConfigStore",d),4);case 4:return f=g.l,g.return(f)}})}
function hr(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,fr(d),2);case 2:return f=h.l,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,oq(f,"coldConfigStore",e),4);case 4:return g=h.l,h.return(g)}})}
function ir(a){var b,c;return B(function(d){return d.g==1?A(d,fr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,lq(b,["coldConfigStore"],{mode:"readwrite",qa:!0},function(e){return zq(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
function jr(a){var b,c;return B(function(d){return d.g==1?A(d,fr(a),2):d.g!=3?(b=d.l,c=void 0,A(d,lq(b,["hotConfigStore"],{mode:"readwrite",qa:!0},function(e){return zq(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.cursor.value})}),3)):d.return(c)})}
;function kr(){df.call(this);this.l=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.l=[].concat(x(a)),this.g=a):(this.g=[],G("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(kr,df);kr.prototype.Ba=function(){for(var a=v(this.l),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.l.length=0;df.prototype.Ba.call(this)};function lr(){this.l=0;this.i=new kr}
function mr(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!V("start_client_gcf")){g.M(0);break}c&&(a.m=c,G("yt.gcf.config.hotConfigGroup",a.m||null));a.g(b);d=Rq();if(!d){g.M(3);break}if(c){g.M(4);break}return A(g,jr(d),5);case 5:e=g.l,c=(f=e)==null?void 0:f.config;case 4:return A(g,gr(c,b,d),3);case 3:if(c)for(var h=c,l=v(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function nr(a,b,c){var d,e,f,g;return B(function(h){if(h.g==1){if(!V("start_client_gcf"))return h.M(0);a.coldHashData=b;G("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Rq())?c?h.M(4):A(h,ir(d),5):h.M(0)}h.g!=4&&(e=h.l,c=(f=e)==null?void 0:f.config);if(!c)return h.M(0);g=c.configData;return A(h,hr(c,b,g,d),0)})}
lr.prototype.g=function(a){this.hotHashData=a;G("yt.gcf.config.hotHashData",this.hotHashData||null)};function or(){return"INNERTUBE_API_KEY"in Rn&&"INNERTUBE_API_VERSION"in Rn}
function pr(){return{Vh:U("INNERTUBE_API_KEY"),Yf:U("INNERTUBE_API_VERSION"),Uc:U("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ae:U("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Zf:U("INNERTUBE_CONTEXT_CLIENT_NAME",1),be:U("INNERTUBE_CONTEXT_CLIENT_VERSION"),de:U("INNERTUBE_CONTEXT_HL"),ce:U("INNERTUBE_CONTEXT_GL"),ag:U("INNERTUBE_HOST_OVERRIDE")||"",bg:!!U("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Wh:!!U("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:U("SERIALIZED_CLIENT_CONFIG_DATA")}}
function qr(a){var b={client:{hl:a.de,gl:a.ce,clientName:a.ae,clientVersion:a.be,configInfo:a.Uc}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=U("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Wn();c.length>0&&(b.request={internalExperimentFlags:c});rr(a,void 0,b);sr(void 0,b);tr(void 0,b);ur(a,void 0,b);vr(void 0,b);V("start_client_gcf")&&wr(void 0,b);U("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&
(b.user={onBehalfOfUser:U("DELEGATED_SESSION_ID")});!V("fill_delegate_context_in_gel_killswitch")&&(a=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=U("INNERTUBE_CONTEXT");var d;if(V("enable_persistent_device_token")&&(a==null?0:(d=a.client)==null?0:d.rolloutToken)){var e;b.client.rolloutToken=a==null?void 0:(e=a.client)==null?void 0:e.rolloutToken}d=Object;e=d.assign;a=b.client;c={};for(var f=v(Object.entries(jo(U("DEVICE",
"")))),g=f.next();!g.done;g=f.next()){var h=v(g.value);g=h.next().value;h=h.next().value;g==="cbrand"?c.deviceMake=h:g==="cmodel"?c.deviceModel=h:g==="cbr"?c.browserName=h:g==="cbrver"?c.browserVersion=h:g==="cos"?c.osName=h:g==="cosver"?c.osVersion=h:g==="cplatform"&&(c.platform=h)}b.client=e.call(d,a,c);return b}
function rr(a,b,c){a=a.ae;if(a==="WEB"||a==="MWEB"||a===1||a===2)if(b){c=Yd(b,zn,96)||new zn;var d=Mo();d=Object.keys(Jn).indexOf(d);d=d===-1?null:d;d!==null&&fe(c,3,d);Zd(b,zn,96,c)}else c&&(c.client.mainAppWebInfo=(d=c.client.mainAppWebInfo)!=null?d:{},c.client.mainAppWebInfo.webDisplayMode=Mo())}
function sr(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Yd(a,Fn,7)||new Fn,K(b,4,c),Zd(a,Fn,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function tr(a,b){var c;if(V("web_log_memory_total_kbytes")&&((c=C.navigator)==null?0:c.deviceMemory)){var d;c=(d=C.navigator)==null?void 0:d.deviceMemory;a?Td(a,95,od(c*1E6)):b&&(b.client.memoryTotalKbytes=""+c*1E6)}}
function ur(a,b,c){if(a.appInstallData)if(b){var d;c=(d=Yd(b,yn,62))!=null?d:new yn;K(c,6,a.appInstallData);Zd(b,yn,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function vr(a,b){a:{var c=To();if(c){var d=Po[c.type||"unknown"]||"CONN_UNKNOWN";c=Po[c.effectiveType||"unknown"]||"CONN_UNKNOWN";d==="CONN_CELLULAR_UNKNOWN"&&c!=="CONN_UNKNOWN"&&(d=c);if(d!=="CONN_UNKNOWN")break a;if(c!=="CONN_UNKNOWN"){d=c;break a}}d=void 0}d&&(a?fe(a,61,Qo[d]):b&&(b.client.connectionType=d));V("web_log_effective_connection_type")&&(d=To(),d=d!=null&&d.effectiveType?So.hasOwnProperty(d.effectiveType)?So[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?fe(a,94,Ro[d]):
b&&(b.client.effectiveConnectionType=d)))}
function xr(a,b,c){c=c===void 0?{}:c;var d={};U("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":U("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||U("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Eh||U("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().Dh;else{No.g||(No.g=new No);a={};c=[];var e=V("enable_first_party_auth_v2");"USER_SESSION_ID"in Rn&&e&&c.push({key:"u",value:U("USER_SESSION_ID")});if(c=bf(c))a.Authorization=c,c=void 0,c===void 0&&
(c=Number(U("SESSION_INDEX",0)),c=isNaN(c)?0:c),V("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Rn||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in Rn&&(a["X-Goog-PageId"]=U("DELEGATED_SESSION_ID"));V("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function wr(a,b){if(!lr.g){var c=new lr;lr.g=c}c=lr.g;var d=Y()-c.l;if(c.l!==0&&d<W("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.l=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(d=e.coldConfigData,c=e.coldHashData,e=e.hotHashData,a){var g;b=(g=Yd(a,yn,62))!=null?g:new yn;g=K(b,1,d);K(g,3,c).g(e);Zd(a,yn,62,b)}else b&&(b.client.configInfo=b.client.configInfo||{},d&&(b.client.configInfo.coldConfigData=
d),c&&(b.client.configInfo.coldHashData=c),e&&(b.client.configInfo.hotHashData=e))}
;var yr=typeof TextEncoder!=="undefined"?new TextEncoder:null,zr=yr?function(a){return yr.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Ar=D("ytPubsub2Pubsub2Instance")||new R;R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Cc;R.prototype.publish=R.prototype.qe;R.prototype.clear=R.prototype.clear;G("ytPubsub2Pubsub2Instance",Ar);G("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});G("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});G("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});G("ytPubsub2Pubsub2SkipSubKey",null);function Br(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={wi:a,vi:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Cr=void 0,Dr=void 0;function Er(){if(!Dr){var a=U("WORKER_SERIALIZATION_URL");Dr=a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?$a(a):null:null}return Dr||void 0}
function Fr(){var a=Er();Cr||a===void 0||(Cr=new Worker(ab(a),void 0));return Cr}
;var Gr=W("max_body_size_to_compress",5E5),Hr=W("min_body_size_to_compress",500),Ir=!0,Jr=0,Kr=0,Lr=W("compression_performance_threshold_lr",250),Mr=W("slow_compressions_before_abandon_count",4),Nr=!1,Or=new Map,Pr=1,Qr=!0;function Rr(){if(typeof Worker==="function"&&Er()&&!Nr){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=Or.get(c.key);d&&(Sr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Or.delete(c.key))}},b=Fr();
b&&(b.addEventListener("message",a),b.onerror=function(){Or.clear()},Nr=!0)}}
function Tr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(Ir)try{try{var g=(new Blob(b.split(""))).size}catch(m){bo(m),g=null}if(g!=null&&(g>Gr||g<Hr))d(a,c);else{if(V("gzip_gel_with_worker")&&(V("initial_gzip_use_main_thread")&&!Qr||!V("initial_gzip_use_main_thread"))){Nr||Rr();var h=Fr();if(h&&!e){Or.set(Pr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Pr});Pr++;return}}var l=zr(b);b=(b=void 0,{});b.zf=!0;var k=new tn(b);
k.push(l,!0);if(k.err)throw k.msg||um[k.err];Sr(k.result,f,a,c,d)}}catch(m){bo(m),d(a,c)}else d(a,c)}
function Sr(a,b,c,d,e){Qr=!1;var f=Y();b.ticks.gelc=f;Kr++;V("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Lr&&(Jr++,V("abandon_compression_after_N_slow_zips")?Kr===W("compression_disable_point")&&Jr>Mr&&(Ir=!1):Ir=!1);V("gel_compression_csi_killswitch")||!V("log_gel_compression_latency")&&!V("log_gel_compression_latency_lr")||Br("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Ur(a){a=Object.assign({},a);delete a.Authorization;var b=bf();if(b){var c=new Il;c.update(U("INNERTUBE_API_KEY"));c.update(b);a.hash=lc(c.digest(),3)}return a}
;var Vr;function Wr(){Vr||(Vr=new Ep("yt.innertube"));return Vr}
function Xr(a,b,c,d){if(d)return null;d=Wr().get("nextId",!0)||1;var e=Wr().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ur(c),requestTime:Math.round(Y())};Wr().set("nextId",d+1,86400,!0);Wr().set("requests",e,86400,!0);return d}
function Yr(a){var b=Wr().get("requests",!0)||{};delete b[a];Wr().set("requests",b,86400,!0)}
function Zr(a){var b=Wr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(Y())-d.requestTime<6E4)){var e=d.authState;var f=Ur(xr(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),$r(a,d.method,e,{}));delete b[c]}}Wr().set("requests",b,86400,!0)}}
;function as(a){this.Yb=this.g=!1;this.potentialEsfErrorCounter=this.l=0;this.handleError=function(){};
this.rb=function(){};
this.now=Date.now;this.Kb=!1;var b;this.He=(b=a.He)!=null?b:100;var c;this.ye=(c=a.ye)!=null?c:1;var d;this.ue=(d=a.ue)!=null?d:2592E6;var e;this.re=(e=a.re)!=null?e:12E4;var f;this.xe=(f=a.xe)!=null?f:5E3;var g;this.Z=(g=a.Z)!=null?g:void 0;this.ic=!!a.ic;var h;this.dc=(h=a.dc)!=null?h:.1;var l;this.uc=(l=a.uc)!=null?l:10;a.handleError&&(this.handleError=a.handleError);a.rb&&(this.rb=a.rb);a.Kb&&(this.Kb=a.Kb);a.Yb&&(this.Yb=a.Yb);this.aa=a.aa;this.Ea=a.Ea;this.fa=a.fa;this.ia=a.ia;this.sendFn=a.sendFn;
this.hd=a.hd;this.ed=a.ed;bs(this)&&(!this.aa||this.aa("networkless_logging"))&&cs(this)}
function cs(a){bs(a)&&!a.Kb&&(a.g=!0,a.ic&&Math.random()<=a.dc&&a.fa.Ze(a.Z),ds(a),a.ia.ya()&&a.Ub(),a.ia.ra(a.hd,a.Ub.bind(a)),a.ia.ra(a.ed,a.Ed.bind(a)))}
n=as.prototype;n.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(bs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.fa.set(d,this.Z).then(function(e){d.id=e;c.ia.ya()&&es(c,d)}).catch(function(e){es(c,d);
fs(c,e)})}else this.sendFn(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(bs(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.aa&&this.aa("nwl_skip_retry")&&(e.skipRetry=c);if(this.ia.ya()||this.aa&&this.aa("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(l.g==1)return A(l,d.fa.set(e,d.Z).catch(function(k){fs(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.fa.set(e,this.Z).catch(function(g){d.sendFn(a,b,e.skipRetry);
fs(d,g)})}else this.sendFn(a,b,this.aa&&this.aa("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(bs(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.fa.ob(d.id,c.Z):e=!0;c.ia.gb&&c.aa&&c.aa("vss_network_hint")&&c.ia.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.fa.set(d,this.Z).then(function(g){d.id=g;e&&c.fa.ob(d.id,c.Z)}).catch(function(g){fs(c,g)})}else this.sendFn(a,b,void 0,!0)};
n.Ub=function(){var a=this;if(!bs(this))throw Error("IndexedDB is not supported: throttleSend");this.l||(this.l=this.Ea.Ha(function(){var b;return B(function(c){if(c.g==1)return A(c,a.fa.Rd("NEW",a.Z),2);if(c.g!=3)return b=c.l,b?A(c,es(a,b),3):(a.Ed(),c.return());a.l&&(a.l=0,a.Ub());c.g=0})},this.He))};
n.Ed=function(){this.Ea.xa(this.l);this.l=0};
function es(a,b){var c;return B(function(d){switch(d.g){case 1:if(!bs(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.M(2);break}return A(d,a.fa.mg(b.id,a.Z),3);case 3:(c=d.l)||a.rb(Error("The request cannot be found in the database."));case 2:if(gs(a,b,a.ue)){d.M(4);break}a.rb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.M(5);break}return A(d,a.fa.ob(b.id,a.Z),5);case 5:return d.return();case 4:b.skipRetry||(b=hs(a,b));if(!b){d.M(0);
break}if(!b.skipRetry||b.id===void 0){d.M(8);break}return A(d,a.fa.ob(b.id,a.Z),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function hs(a,b){if(!bs(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=is(f);(h=js(f))&&a.aa&&a.aa("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.aa&&a.aa("nwl_consider_error_code")&&g||a.aa&&!a.aa("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.uc)){m.M(2);break}if(!a.ia.yc){m.M(3);break}return A(m,a.ia.yc(),3);case 3:if(a.ia.ya()){m.M(2);break}c(e,f);if(!a.aa||!a.aa("nwl_consider_error_code")||((l=b)==null?void 0:l.id)===
void 0){m.M(6);break}return A(m,a.fa.od(b.id,a.Z,!1),6);case 6:return m.return();case 2:if(a.aa&&a.aa("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.uc)return m.return();a.potentialEsfErrorCounter++;if(((k=b)==null?void 0:k.id)===void 0){m.M(8);break}return b.sendCount<a.ye?A(m,a.fa.od(b.id,a.Z,!0,h?!1:void 0),12):A(m,a.fa.ob(b.id,a.Z),8);case 12:a.Ea.Ha(function(){a.ia.ya()&&a.Ub()},a.xe);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(h.g==1)return((g=b)==null?void 0:g.id)===void 0?h.M(2):A(h,a.fa.ob(b.id,a.Z),2);a.ia.gb&&a.aa&&a.aa("vss_network_hint")&&a.ia.gb(!0);d(e,f);h.g=0})};
return b}
function gs(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ds(a){if(!bs(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.fa.Rd("QUEUED",a.Z).then(function(b){b&&!gs(a,b,a.re)?a.Ea.Ha(function(){return B(function(c){if(c.g==1)return b.id===void 0?c.M(2):A(c,a.fa.od(b.id,a.Z),2);ds(a);c.g=0})}):a.ia.ya()&&a.Ub()})}
function fs(a,b){a.Me&&!a.ia.ya()?a.Me(b):a.handleError(b)}
function bs(a){return!!a.Z||a.Yb}
function is(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function js(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var ks;
function ls(){if(ks)return ks();var a={};ks=cr("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Gb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&mq(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),tq(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return ks()}
;function ms(a){return Gq(ls(),a)}
function ns(a,b){var c,d,e,f;return B(function(g){if(g.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,ms(b),2);if(g.g!=3)return d=g.l,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:U("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,oq(d,"LogsRequestsStore",e),3);f=g.l;c.ticks.tc=Y();os(c);return g.return(f)})}
function ps(a,b){var c,d,e,f,g,h,l,k;return B(function(m){if(m.g==1)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(m,ms(b),2);if(m.g!=3)return d=m.l,e=U("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),l="prev",V("use_fifo_for_networkless")&&(l="next"),k=void 0,A(m,lq(d,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(p){return zq(p.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:l},function(r){r.cursor.value&&
(k=r.cursor.value,a==="NEW"&&(k.status="QUEUED",r.update(k)))})}),3);
c.ticks.tc=Y();os(c);return m.return(k)})}
function qs(a,b){var c;return B(function(d){if(d.g==1)return A(d,ms(b),2);c=d.l;return d.return(lq(c,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",hq(f.g.put(g,void 0)).then(function(){return g})})}))})}
function rs(a,b,c,d){c=c===void 0?!0:c;var e;return B(function(f){if(f.g==1)return A(f,ms(b),2);e=f.l;return f.return(lq(e,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),d!==void 0&&(l.options.compress=d),hq(h.g.put(l,void 0)).then(function(){return l})):aq.resolve(void 0)})}))})}
function ss(a,b){var c;return B(function(d){if(d.g==1)return A(d,ms(b),2);c=d.l;return d.return(c.delete("LogsRequestsStore",a))})}
function ts(a){var b,c;return B(function(d){if(d.g==1)return A(d,ms(a),2);b=d.l;c=Y()-2592E6;return A(d,lq(b,["LogsRequestsStore"],{mode:"readwrite",qa:!0},function(e){return vq(e.objectStore("LogsRequestsStore"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return wq(f)})})}),0)})}
function us(){B(function(a){return A(a,Zq(),0)})}
function os(a){V("nwl_csi_killswitch")||Br("networkless_performance",a,{sampleRate:1})}
;var vs={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,
webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,
miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506};var ws={},xs=cr("ServiceWorkerLogsDatabase",{xb:(ws.SWHealthLog={Gb:1},ws),shared:!0,upgrade:function(a,b){b(1)&&tq(mq(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ys(a){return Gq(xs(),a)}
function zs(a){var b,c;B(function(d){if(d.g==1)return A(d,ys(a),2);b=d.l;c=Y()-2592E6;return A(d,lq(b,["SWHealthLog"],{mode:"readwrite",qa:!0},function(e){return vq(e.objectStore("SWHealthLog"),{},function(f){if(f.cursor.value.timestamp<=c)return f.delete().then(function(){return wq(f)})})}),0)})}
function As(a){var b;return B(function(c){if(c.g==1)return A(c,ys(a),2);b=c.l;return A(c,b.clear("SWHealthLog"),0)})}
;var Bs={},Cs=0;function Ds(a){var b=new Image,c=""+Cs++;Bs[c]=b;b.onload=b.onerror=function(){delete Bs[c]};
b.src=a}
;var Es;function Fs(){Es||(Es=new Ep("yt.offline"));return Es}
function Gs(a){if(V("offline_error_handling")){var b=Fs().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Fs().set("errors",b,2592E3,!0)}}
;function Hs(){this.g=new Map;this.l=!1}
function Is(){if(!Hs.g){var a=D("yt.networkRequestMonitor.instance")||new Hs;G("yt.networkRequestMonitor.instance",a);Hs.g=a}return Hs.g}
Hs.prototype.requestComplete=function(a,b){b&&(this.l=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Hs.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:a===!1&&this.l?!0:null};
Hs.prototype.removeParams=function(a){return a.split("?")[0]};
Hs.prototype.removeParams=Hs.prototype.removeParams;Hs.prototype.isEndpointCFR=Hs.prototype.isEndpointCFR;Hs.prototype.requestComplete=Hs.prototype.requestComplete;Hs.getInstance=Is;function Z(){Df.call(this);var a=this;this.i=!1;this.l=Jf();this.l.ra("networkstatus-online",function(){if(a.i&&V("offline_error_handling")){var b=Fs().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Uo(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;ao(d)}Fs().set("errors",{},2592E3,!0)}}})}
y(Z,Df);function Js(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;G("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
n=Z.prototype;n.ya=function(){return this.l.ya()};
n.gb=function(a){this.l.l=a};
n.xf=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
n.jf=function(){this.i=!0};
n.ra=function(a,b){return this.l.ra(a,b)};
n.yc=function(a){a=Hf(this.l,a);a.then(function(b){V("use_cfr_monitor")&&Is().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.yc;Z.prototype.listen=Z.prototype.ra;Z.prototype.enableErrorFlushing=Z.prototype.jf;Z.prototype.getWindowStatus=Z.prototype.xf;Z.prototype.networkStatusHint=Z.prototype.gb;Z.prototype.isNetworkAvailable=Z.prototype.ya;Z.getInstance=Js;function Ks(a){a=a===void 0?{}:a;Df.call(this);var b=this;this.l=this.s=0;this.i=Js();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.wc?(this.wc=a.wc,c("networkstatus-online",function(){Ls(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ls(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){Ef(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ef(b,"publicytnetworkstatus-offline")})))}
y(Ks,Df);Ks.prototype.ya=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Ks.prototype.gb=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Ks.prototype.yc=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return V("skip_network_check_if_cfr")&&Is().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ya())})):c?d.return(c(a)):d.return(!0)})};
function Ls(a,b){a.wc?a.l?(Kf.xa(a.s),a.s=Kf.Ha(function(){a.o!==b&&(Ef(a,b),a.o=b,a.l=Y())},a.wc-(Y()-a.l))):(Ef(a,b),a.o=b,a.l=Y()):Ef(a,b)}
;var Ms;function Ns(){var a=as.call;Ms||(Ms=new Ks({ci:!0,Mh:!0}));a.call(as,this,{fa:{Ze:ts,ob:ss,Rd:ps,mg:qs,od:rs,set:ns},ia:Ms,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;bo(new Uo(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else ao(b)},
rb:bo,sendFn:Os,now:Y,Me:Gs,Ea:Dp(),hd:"publicytnetworkstatus-online",ed:"publicytnetworkstatus-offline",ic:!0,dc:.1,uc:W("potential_esf_error_limit",10),aa:V,Kb:!(Vo()&&Db(document.location.toString())!=="www.youtube-nocookie.com")});this.i=new Wl;V("networkless_immediately_drop_all_requests")&&us();$q("LogsDatabaseV2")}
y(Ns,as);function Ps(){var a=D("yt.networklessRequestController.instance");a||(a=new Ns,G("yt.networklessRequestController.instance",a),V("networkless_logging")&&Sq().then(function(b){a.Z=b;cs(a);a.i.resolve();a.ic&&Math.random()<=a.dc&&a.Z&&zs(a.Z);V("networkless_immediately_drop_sw_health_store")&&Qs(a)}));
return a}
Ns.prototype.writeThenSend=function(a,b){b||(b={});b=Rs(a,b);Vo()||(this.g=!1);as.prototype.writeThenSend.call(this,a,b)};
Ns.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Rs(a,b);Vo()||(this.g=!1);as.prototype.sendThenWrite.call(this,a,b,c)};
Ns.prototype.sendAndWrite=function(a,b){b||(b={});b=Rs(a,b);Vo()||(this.g=!1);as.prototype.sendAndWrite.call(this,a,b)};
Ns.prototype.awaitInitialization=function(){return this.i.promise};
function Qs(a){var b;B(function(c){if(!a.Z)throw b=Xp("clearSWHealthLogsDb"),b;return c.return(As(a.Z).catch(function(d){a.handleError(d)}))})}
function Os(a,b,c,d){d=d===void 0?!1:d;b=V("web_fp_via_jspb")?Object.assign({},b):b;V("use_cfr_monitor")&&Ss(a,b);if(V("use_request_time_ms_header"))b.headers&&mo(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)zo(a,void 0,"POST",f,void 0);else if(U("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)zo(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new Qa({url:a});if(l.i&&l.l||l.m){var k=Cb(a.match(Bb)[5]||null),m;if(!(m=!k||!k.endsWith("/aclk"))){var p=a.search(Kb),r=Jb(a,0,"ri",p);if(r<0)var q=null;else{var t=a.indexOf("&",r);if(t<0||t>p)t=p;q=Ab(a.slice(r+3,t!==-1?t:0))}m=q!=="1"}var w=!m;break b}}catch(I){}w=!1}if(w){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(I){}z=!1}c=z?!0:!1}else c=!1;c||Ds(a)}}else b.compress?
b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),Tr(a,b.postBody,b,Do,d)):Tr(a,JSON.stringify(b.postParams),b,Co,d):Do(a,b)}
function Rs(a,b){V("use_event_time_ms_header")&&mo(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(Y())));return b}
function Ss(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Is().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Is().requestComplete(a,!0);d(e,f)}}
;var Ts=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};G("ytNetworklessLoggingInitializationOptions",Ts);function Us(a){var b=this;this.config_=null;a?this.config_=a:or()&&(this.config_=pr());Yo(function(){Zr(b)},5E3)}
Us.prototype.isReady=function(){!this.config_&&or()&&(this.config_=pr());return!!this.config_};
function $r(a,b,c,d){function e(p){p=p===void 0?!1:p;var r;if(d.retry&&h!="www.youtube-nocookie.com"&&(p||V("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(r=Xr(b,c,k,l)),r)){var q=g.onSuccess,t=g.onFetchSuccess;g.onSuccess=function(I,O){Yr(r);q(I,O)};
c.onFetchSuccess=function(I,O){Yr(r);t(I,O)}}try{if(p&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ps().writeThenSend(m,g):Ps().sendAndWrite(m,g);
else if(d.compress){var w=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));Tr(m,z,g,Do,w)}else Tr(m,JSON.stringify(g.postParams),g,Co,w)}else V("web_all_payloads_via_jspb")?Do(m,g):Co(m,g)}catch(I){if(I.name==="InvalidAccessError")r&&(Yr(r),r=0),bo(Error("An extension is blocking network request."));else throw I;}r&&Yo(function(){Zr(a)},5E3)}
!U("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&bo(new Uo("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Uo("innertube xhrclient not ready",b,c,d);ao(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
onFetchSuccess:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
onFetchError:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.ag)&&(h=f);var l=a.config_.bg||!1,k=xr(l,h,d);Object.assign(g.headers,k);g.headers.Authorization&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m=ko(""+h+("/youtubei/"+a.config_.Yf+"/"+b),{alt:"json"});D("ytNetworklessLoggingInitializationOptions")&&Ts.isNwlInitialized?Qq().then(function(p){e(p)}):e(!1)}
;var Vs=0;G("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Vs});G("ytEventsEventsListeners",C.ytEventsEventsListeners||{});G("ytEventsEventsCounter",C.ytEventsEventsCounter||{count:0});var Ws=C.ytPubsubPubsubInstance||new R,Xs=C.ytPubsubPubsubSubscribedKeys||{},Ys=C.ytPubsubPubsubTopicToKeys||{},Zs=C.ytPubsubPubsubIsSynchronous||{};R.prototype.subscribe=R.prototype.subscribe;R.prototype.unsubscribeByKey=R.prototype.Cc;R.prototype.publish=R.prototype.qe;R.prototype.clear=R.prototype.clear;G("ytPubsubPubsubInstance",Ws);G("ytPubsubPubsubTopicToKeys",Ys);G("ytPubsubPubsubIsSynchronous",Zs);G("ytPubsubPubsubSubscribedKeys",Xs);var $s=Symbol("injectionDeps");function at(){this.key=lr}
function bt(){this.l=new Map;this.g=new Map}
bt.prototype.resolve=function(a){return a instanceof at?ct(this,a.key,[],!0):ct(this,a,[])};
function ct(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.l.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.l.get(b);c.push(b);if(d.Tg!==void 0)var e=d.Tg;else if(d.Sg)e=d[$s]?dt(a,d[$s],c):[],e=d.Sg.apply(d,x(e));else if(d.Rg){e=d.Rg;var f=e[$s]?dt(a,e[$s],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ri||a.g.set(b,e);return e}
function dt(a,b,c){return b?b.map(function(d){return d instanceof at?ct(a,d.key,c,!0):ct(a,d,c)}):[]}
;var et;function ft(){et||(et=new bt);return et}
;var gt=window;function ht(){var a,b;return"h5vcc"in gt&&((a=gt.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=gt.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in gt&&gt.performance.mark&&gt.performance.measure?2:0}
function it(a){var b=ht();switch(b){case 1:gt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:gt.performance.mark(a+"-start");break;case 0:break;default:sb(b,"unknown trace type")}}
function jt(a){var b=ht();switch(b){case 1:gt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";gt.performance.mark(c);gt.performance.measure(a,b,c);break;case 0:break;default:sb(b,"unknown trace type")}}
;var kt=V("web_enable_lifecycle_monitoring")&&ht()!==0,lt=V("web_enable_lifecycle_monitoring");function mt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function nt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?Dp():d;this.m=c;this.l=d;this.i=new Wl;this.g=a;for(a={eb:0};a.eb<this.g.length;a={sc:void 0,eb:a.eb},a.eb++)a.sc=this.g[a.eb],c=function(e){return function(){e.sc.Xc();b.g[e.eb].vc=!0;b.g.every(function(f){return f.vc===!0})&&b.i.resolve()}}(a),d=this.l.ab(c,ot(this,a.sc)),this.g[a.eb]=Object.assign({},a.sc,{Xc:c,
jobId:d})}
function pt(a){var b=Array.from(a.g.keys()).sort(function(d,e){return ot(a,a.g[e])-ot(a,a.g[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],c.jobId===void 0||c.vc||(a.l.xa(c.jobId),a.l.ab(c.Xc,10))}
nt.prototype.cancel=function(){for(var a=v(this.g),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.vc||this.l.xa(b.jobId),b.vc=!0;this.i.resolve()};
function ot(a,b){var c;return(c=b.priority)!=null?c:a.m}
;function qt(a){this.state=a;this.i=[];this.o=void 0;this.u={};kt&&it(this.state)}
qt.prototype.install=function(a){this.i.push(a);return this};
function rt(a){kt&&jt(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&d.Wa==="none"}):d.from===a.state&&d.Wa==="none"});
if(b){a.l&&(pt(a.l),a.l=void 0);lt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";kt&&it(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(st(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function st(a,b){var c=b.filter(function(e){return tt(a,e)===10}),d=b.filter(function(e){return tt(a,e)!==10});
return a.u.ni?function(){var e=Ha.apply(0,arguments);return B(function(f){if(f.g==1)return A(f,a.D.apply(a,[c].concat(x(e))),2);a.s.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ha.apply(0,arguments);
a.F.apply(a,[c].concat(x(e)));a.s.apply(a,[d].concat(x(e)))}}
qt.prototype.F=function(a){for(var b=Ha.apply(1,arguments),c=Dp(),d=v(a),e=d.next(),f={};!e.done;f={Pb:void 0},e=d.next())f.Pb=e.value,c.Fb(function(g){return function(){ut(g.Pb.name);vt(function(){return g.Pb.Ic.apply(g.Pb,x(b))});
wt(g.Pb.name)}}(f))};
qt.prototype.D=function(a){var b=Ha.apply(1,arguments),c,d,e,f,g;return B(function(h){h.g==1&&(c=Dp(),d=v(a),e=d.next(),f={});if(h.g!=3){if(e.done)return h.M(0);f.Ua=e.value;f.Wb=void 0;g=function(l){return function(){ut(l.Ua.name);var k=vt(function(){return l.Ua.Ic.apply(l.Ua,x(b))});
Qc(k)?l.Wb=V("web_lifecycle_error_handling_killswitch")?k.then(function(){wt(l.Ua.name)}):k.then(function(){wt(l.Ua.name)},function(m){mt(m);
wt(l.Ua.name)}):wt(l.Ua.name)}}(f);
c.Fb(g);return f.Wb?A(h,f.Wb,3):h.M(3)}f={Ua:void 0,Wb:void 0};e=d.next();return h.M(2)})};
qt.prototype.s=function(a){var b=Ha.apply(1,arguments),c=this,d=a.map(function(e){return{Xc:function(){ut(e.name);vt(function(){return e.Ic.apply(e,x(b))});
wt(e.name)},
priority:tt(c,e)}});
d.length&&(this.l=new nt(d))};
function tt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function ut(a){kt&&a&&it(a)}
function wt(a){kt&&a&&jt(a)}
da.Object.defineProperties(qt.prototype,{m:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function vt(a){if(V("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){mt(b)}}
;function xt(a){qt.call(this,a===void 0?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Wa:"application_navigating",action:this.A},{from:"application_navigating",Wa:"none",action:this.B},{from:"application_navigating",Wa:"application_navigating",action:function(){}},
{from:"none",Wa:"none",action:function(){}}]}
var zt;y(xt,qt);xt.prototype.A=function(a,b){var c=this;this.g=Yo(function(){c.m==="application_navigating"&&rt(c)},5E3);
a(b==null?void 0:b.event)};
xt.prototype.B=function(a,b){this.g&&(Kf.xa(this.g),this.g=null);a(b==null?void 0:b.event)};
function At(){zt||(zt=new xt);return zt}
;var Bt=[];G("yt.logging.transport.getScrapedGelPayloads",function(){return Bt});function Ct(){this.store={};this.g={}}
Ct.prototype.storePayload=function(a,b){a=Dt(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);V("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
Ct.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Et(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
Ct.prototype.extractMatchingEntries=function(a){a=Et(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
Ct.prototype.getSequenceCount=function(a){a=Et(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Et(a,b){var c=Dt(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Dt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ft(b.auth,g[0])){var h=b.isJspb;Ft(h===void 0?"undefined":h?"true":"false",g[1])&&Ft(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Ft(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function Ft(a,b){return a===void 0||a==="undefined"?!0:a===b}
Ct.prototype.getSequenceCount=Ct.prototype.getSequenceCount;Ct.prototype.extractMatchingEntries=Ct.prototype.extractMatchingEntries;Ct.prototype.smartExtractMatchingEntries=Ct.prototype.smartExtractMatchingEntries;Ct.prototype.storePayload=Ct.prototype.storePayload;function Dt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;var Gt=W("initial_gel_batch_timeout",2E3),Ht=W("gel_queue_timeout_max_ms",6E4),It=W("gel_min_batch_size",5),Jt=void 0;function Kt(){this.m=this.g=this.l=0;this.i=!1}
var Lt=new Kt,Mt=new Kt,Nt=new Kt,Ot=new Kt,Pt,Qt=!0,Rt=1,St=new Map,Tt=C.ytLoggingTransportTokensToCttTargetIds_||{};G("ytLoggingTransportTokensToCttTargetIds_",Tt);var Ut=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};G("ytLoggingTransportTokensToJspbCttTargetIds_",Ut);var Vt={};function Wt(){var a=D("yt.logging.ims");a||(a=new Ct,G("yt.logging.ims",a));return a}
function Xt(a,b){if(a.endpoint==="log_event"){Yt(a);var c=Zt(a),d=$t(a.payload)||"";a:{if(V("enable_web_tiered_gel")){var e=vs[d||""];var f,g;if(ft().resolve(new at)==null)var h=void 0;else{var l;h=(l=D("yt.gcf.config.hotConfigGroup"))!=null?l:U("RAW_HOT_CONFIG_GROUP");h=h==null?void 0:(f=h.loggingHotConfig)==null?void 0:(g=f.eventLoggingConfig)==null?void 0:g.payloadPolicies}if(f=h)for(g=0;g<f.length;g++)if(f[g].payloadNumber===e){e=f[g];break a}}e=void 0}f=200;if(e){if(e.enabled===!1&&!V("web_payload_policy_disabled_killswitch"))return;
f=au(e.tier);if(f===400){bu(a,b);return}}Vt[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Wt().storePayload(e,a.payload);cu(b,c,e,d==="gelDebuggingEvent")}}
function cu(a,b,c,d){function e(){du(V("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=f===void 0?!1:f;d=d===void 0?!1:d;a&&(Jt=new a);a=W("tvhtml5_logging_max_batch_ads_fork")||W("tvhtml5_logging_max_batch")||W("web_logging_max_batch")||100;var g=Y(),h=eu(f,c.tier),l=h.m;d&&(h.i=!0);d=0;c&&(d=Wt().getSequenceCount(c));d>=1E3?e():d>=a?Pt||(Pt=fu(function(){e();Pt=void 0},0)):g-l>=10&&(gu(f,c.tier),h.m=g)}
function bu(a,b){if(a.endpoint==="log_event"){V("more_accurate_gel_parser")&&Wt().storePayload({isJspb:!1},a.payload);Yt(a);var c=Zt(a),d=new Map;d.set(c,[a.payload]);var e=$t(a.payload)||"";b&&(Jt=new b);return new Zf(function(f,g){Jt&&Jt.isReady()?hu(d,Jt,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Zt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Tt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function du(a,b,c){var d={writeThenSend:!0};d=d===void 0?{}:d;b=b===void 0?!1:b;new Zf(function(e,f){var g=eu(b,c),h=g.i;g.i=!1;iu(g.l);iu(g.g);g.g=0;Jt&&Jt.isReady()?c===void 0&&V("enable_web_tiered_gel")?ju(e,f,d,a,b,300,h):ju(e,f,d,a,b,c,h):(gu(b,c),e())})}
function ju(a,b,c,d,e,f,g){var h=Jt;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},p={isJspb:e,cttAuthInfo:d};if(d!==void 0)e?(b=V("enable_web_tiered_gel")?Wt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Wt().extractMatchingEntries(p),l.set(d,b),ku(l,h,a,c,g)):(l=V("enable_web_tiered_gel")?Wt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Wt().extractMatchingEntries(p),k.set(d,l),hu(k,h,a,b,
c,!1,g));else if(e){b=v(Object.keys(Vt));for(k=b.next();!k.done;k=b.next())k=k.value,f=V("enable_web_tiered_gel")?Wt().smartExtractMatchingEntries({keys:[m,p],sizeLimit:1E3}):Wt().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),f.length>0&&l.set(k,f),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete Vt[k];ku(l,h,a,c,g)}else{l=v(Object.keys(Vt));for(m=l.next();!m.done;m=l.next())m=m.value,p=V("enable_web_tiered_gel")?Wt().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Wt().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),p.length>0&&k.set(m,p),(V("web_fp_via_jspb_and_json")&&c.writeThenSend||!V("web_fp_via_jspb_and_json"))&&delete Vt[m];hu(k,h,a,b,c,!1,g)}}
function gu(a,b){function c(){du(void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=eu(a,b),e=d===Ot||d===Nt?5E3:Ht;V("web_gel_timeout_cap")&&!d.g&&(e=fu(function(){c()},e),d.g=e);
iu(d.l);e=U("LOGGING_BATCH_TIMEOUT",W("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&Qt&&(e=Gt);e=fu(function(){W("gel_min_batch_size")>0?Wt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=It&&c():c()},e);
d.l=e}
function hu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(Y()),l=a.size,k=lu(g);a=v(a);var m=a.next();for(g={};!m.done;g={dd:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,gd:void 0,fd:void 0},m=a.next()){var p=v(m.value);m=p.next().value;p=p.next().value;g.batchRequest=me({context:qr(b.config_||pr())});if(!Ka(p)&&!V("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=Tt[m])&&mu(g.batchRequest,m,p);delete Tt[m];g.dangerousLogToVisitorSession=m===
"visitorOnlyApprovedKey";nu(g.batchRequest,h,g.dangerousLogToVisitorSession);ou(e);g.gd=function(r){V("start_client_gcf")&&Kf.Ha(function(){return B(function(q){return A(q,pu(r),0)})});
l--;l||c()};
g.dd=0;g.fd=function(r){return function(){r.dd++;if(e.bypassNetworkless&&r.dd===1)try{$r(b,k,r.batchRequest,qu({writeThenSend:!0},r.dangerousLogToVisitorSession,r.gd,r.fd,f)),Qt=!1}catch(q){ao(q),d()}l--;l||c()}}(g);
try{$r(b,k,g.batchRequest,qu(e,g.dangerousLogToVisitorSession,g.gd,g.fd,f)),Qt=!1}catch(r){ao(r),d()}}}
function ku(a,b,c,d,e){d=d===void 0?{}:d;var f=Math.round(Y()),g={value:a.size},h=new Map([].concat(x(a))),l=v(h);for(h=l.next();!h.done;h=l.next()){var k=v(h.value).next().value,m=a.get(k);h=new Nn;var p=b.config_||pr(),r=new In,q=new Bn;K(q,1,p.de);K(q,2,p.ce);fe(q,16,p.Zf);K(q,17,p.be);if(p.Uc){var t=p.Uc,w=new yn;t.coldConfigData&&K(w,1,t.coldConfigData);t.appInstallData&&K(w,6,t.appInstallData);t.coldHashData&&K(w,3,t.coldHashData);t.hotHashData&&w.g(t.hotHashData);Zd(q,yn,62,w)}if((t=C.devicePixelRatio)&&
t!=1){if(t!=null&&typeof t!=="number")throw Error("Value of float/double field must be a number, found "+typeof t+": "+t);Td(q,65,t)}t=U("EXPERIMENTS_TOKEN","");t!==""&&K(q,54,t);t=Wn();if(t.length>0){w=new En;for(var z=0;z<t.length;z++){var I=new Cn;K(I,1,t[z].key);a:{var O=I,ea=qd(t[z].value),ka=Dn;O=O.U;var Da=Ac(O);Lc(Da);if(ea==null){var Va=Wd(O);if(Xd(Va,O,Da,ka)===2)Va.set(ka,0);else break a}else{Va=O;ka.includes(2);var gb=Wd(Va),qa=Xd(gb,Va,Da,ka);qa!==2&&(qa&&(Da=Ud(Va,Da,qa)),gb.set(ka,
2))}Ud(O,Da,2,ea)}be(w,15,Cn,I)}Zd(r,En,5,w)}rr(p,q);sr(r);tr(q);ur(p,q);vr(q);V("start_client_gcf")&&wr(q);U("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(p=new Hn,K(p,3,U("DELEGATED_SESSION_ID")));!V("fill_delegate_context_in_gel_killswitch")&&(t=U("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(w=Yd(r,Hn,3)||new Hn,p=r,t=K(w,18,t),Zd(p,Hn,3,t));p=q;t=v(Object.entries(jo(U("DEVICE",""))));for(w=t.next();!w.done;w=t.next())z=v(w.value),w=z.next().value,z=z.next().value,w==="cbrand"?
K(p,12,z):w==="cmodel"?K(p,13,z):w==="cbr"?K(p,87,z):w==="cbrver"?K(p,88,z):w==="cos"?K(p,18,z):w==="cosver"?K(p,19,z):w==="cplatform"&&fe(p,42,Oo(z));Zd(r,Bn,1,q);Zd(h,In,1,r);if(q=Ut[k])a:{if(de(q,1))r=1;else if(q.getPlaylistId())r=2;else break a;Zd(h,Mn,4,q);q=Yd(h,In,1)||new In;p=Yd(q,Hn,3)||new Hn;t=new Gn;K(t,2,k);fe(t,1,r);be(p,12,Gn,t);Zd(q,Hn,3,p)}delete Ut[k];k=k==="visitorOnlyApprovedKey";ru()||Td(h,2,od(f));!k&&(r=U("EVENT_ID"))&&(q=su(),p=new Ln,K(p,1,r),Td(p,2,od(q)),Zd(h,Ln,5,p));ou(d);
if(V("jspb_serialize_with_worker")&&(r=Fr())&&d.writeThenSend){St.set(Rt,{client:b,resolve:c,networklessOptions:d,isIsolated:!1,useVSSEndpoint:e,dangerousLogToVisitorSession:k,requestsOutstanding:g});a=r;b=a.postMessage;c=he(h);b.call(a,{op:"gelBatchToSerialize",batchRequest:c,clientEvents:m,key:Rt});Rt++;break}if(m){r=[];for(q=0;q<m.length;q++)try{r.push(new Kn(m[q]))}catch(La){ao(new Uo("Transport failed to deserialize "+String(m[q])))}m=r}else m=[];m=v(m);for(r=m.next();!r.done;r=m.next())be(h,
3,Kn,r.value);m={startTime:Y(),ticks:{},infos:{}};try{ge=!0;var Ea=JSON.stringify(he(h),Gd)}finally{ge=!1}m.ticks.geljspc=Y();V("log_jspb_serialize_latency")&&Br("gel_jspb_serialize",m,{sampleRate:.1});tu(Ea,b,c,d,e,k,g)}}
function tu(a,b,c,d,e,f,g){d=d===void 0?{}:d;g=g===void 0?{value:0}:g;e=lu(e);d=qu(d,f,function(h){V("start_client_gcf")&&Kf.Ha(function(){return B(function(l){return A(l,pu(h),0)})});
g.value--;g.value||c()},function(){g.value--;
g.value||c()},!1);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;$r(b,e,"",d);Qt=!1}
function ou(a){V("always_send_and_write")&&(a.writeThenSend=!1)}
function qu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Gh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:V("compress_gel")||V("compress_gel_lr")};ru()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function nu(a,b,c){ru()||(a.requestTimeMs=String(b));V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=U("EVENT_ID"))&&(c=su(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function su(){var a=U("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*65535/2));a++;a>65535&&(a=1);Sn("BATCH_CLIENT_COUNTER",a);return a}
function mu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Yt(a){if(!D("yt.logging.transport.enableScrapingForTest")){var b=Vn("il_payload_scraping");if((b!==void 0?String(b):"")==="enable_il_payload_scraping")Bt=[],G("yt.logging.transport.enableScrapingForTest",!0),G("yt.logging.transport.scrapedPayloadsForTesting",Bt),G("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),G("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
G("yt.logging.transport.scrapeClientEvent",!0);else return}b=D("yt.logging.transport.scrapedPayloadsForTesting");var c=D("yt.logging.transport.payloadToScrape"),d=D("yt.logging.transport.scrapeClientEvent");if(c&&c.length>=1)for(var e=0;e<c.length;e++)if(a&&a.payload[c[e]])if(d)b.push(a.payload);else{var f=void 0;b.push(((f=a)==null?void 0:f.payload)[c[e]])}G("yt.logging.transport.scrapedPayloadsForTesting",b)}
function ru(){return V("use_request_time_ms_header")||V("lr_use_request_time_ms_header")}
function fu(a,b){return V("transport_use_scheduler")===!1?uo(a,b):V("logging_avoid_blocking_during_navigation")||V("lr_logging_avoid_blocking_during_navigation")?Yo(function(){if(At().m==="none")a();else{var c={};At().install((c.none={Ic:a},c))}},b):Yo(a,b)}
function iu(a){V("transport_use_scheduler")?Kf.xa(a):window.clearTimeout(a)}
function pu(a){var b,c,d,e,f,g,h,l,k,m;return B(function(p){if(p.g==1){d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup;var r=d?d[xn.name]:void 0;e=r;g=(f=d)==null?void 0:f.hotHashData;r=d?d[wn.name]:void 0;h=r;k=(l=d)==null?void 0:l.coldHashData;return(m=ft().resolve(new at))?g?e?A(p,mr(m,g,e),2):A(p,mr(m,g),2):p.M(2):p.return()}return k?h?A(p,nr(m,k,h),0):A(p,nr(m,k),0):p.M(0)})}
function eu(a,b){b=b===void 0?200:b;return a?b===300?Ot:Mt:b===300?Nt:Lt}
function $t(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,vs[b])return b}
function au(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function lu(a){return(a===void 0?0:a)&&V("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var uu=C.ytLoggingGelSequenceIdObj_||{};G("ytLoggingGelSequenceIdObj_",uu);var vu,wu=C.ytLoggingDocDocumentNonce_;
if(!wu){var xu;a:{if(window.crypto&&window.crypto.getRandomValues)try{var yu=Array(16),zu=new Uint8Array(16);window.crypto.getRandomValues(zu);for(var Au=0;Au<yu.length;Au++)yu[Au]=zu[Au];xu=yu;break a}catch(a){}for(var Bu=Array(16),Cu=0;Cu<16;Cu++){for(var Du=Date.now(),Eu=0;Eu<Du%23;Eu++)Bu[Cu]=Math.random();Bu[Cu]=Math.floor(Math.random()*256)}if(po)for(var Fu=1,Gu=0;Gu<po.length;Gu++)Bu[Fu%16]=Bu[Fu%16]^Bu[(Fu-1)%16]/4^po.charCodeAt(Gu),Fu++;xu=Bu}for(var Hu=xu,Iu=[],Ju=0;Ju<Hu.length;Ju++)Iu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Hu[Ju]&
63));wu=Iu.join("");G("ytLoggingDocDocumentNonce_",wu)}vu=wu;function Ku(a){return U("client-screen-nonce-store",{})[a===void 0?0:a]}
function Lu(a,b){b=b===void 0?0:b;var c=U("client-screen-nonce-store");c||(c={},Sn("client-screen-nonce-store",c));c[b]=a}
function Mu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
G("yt_logging_screen.getRootVeType",function(a){return U(Mu(a===void 0?0:a))});
function Nu(){var a=U("csn-to-ctt-auth-info");a||(a={},Sn("csn-to-ctt-auth-info",a));return a}
function Ou(a){a=Ku(a===void 0?0:a);if(!a&&!U("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
G("yt_logging_screen.getCurrentCsn",Ou);function Pu(a,b,c){var d=Nu();(c=Ou(c))&&delete d[c];b&&(d[a]=b)}
G("yt_logging_screen.getCttAuthInfo",function(a){return Nu()[a]});
G("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Ku(c)||b!==U(Mu(c)))if(Pu(a,d,c),Lu(a,c),Sn(Mu(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:vu,clientScreenNonce:a};var f=f===void 0?{}:f;var g=Us;U("ytLoggingEventsDefaultDisabled",!1)&&Us===Us&&(g=null);f=f===void 0?{}:f;var h={},l=Math.round(f.timestamp||Y());h.eventTimeMs=l<Number.MAX_SAFE_INTEGER?l:0;h.foregroundHeartbeatScreenAssociated=e;e=D("_lact",window);e=e==null?-1:Math.max(Date.now()-
e,0);h.context={lastActivityMs:String(f.timestamp||!isFinite(e)?-1:e)};f.sequenceGroup&&!V("web_gel_sequence_info_killswitch")&&(e=h.context,l=f.sequenceGroup,uu[l]=l in uu?uu[l]+1:0,e.sequence={index:uu[l],groupKey:l},f.endOfSequence&&delete uu[f.sequenceGroup]);(f.sendIsolatedPayload?bu:Xt)({endpoint:"log_event",payload:h,cttAuthInfo:f.cttAuthInfo,dangerousLogToVisitorSession:f.dangerousLogToVisitorSession},g)}},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var Qu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Ru(a,b){var c=c===void 0?!0:c;var d=U("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=Db(window.location.href);e&&d.push(e);e=Db(a);if(ub(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),nb(d,a),a=d.href)if(a=Eb(a),a=Fb(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Ou()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Su(a,b,f)}else Su(a,b)}
function Su(a,b,c){a=Tu(a);b=b?Hb(b):"";c=c||5;($e()||(gc||hc)&&oo("applewebkit")&&!oo("version")&&(!oo("safari")||oo("gsa/"))||fc&&oo("version/")||!U("EOM_VISITOR_DATA"))&&Xn(a,b,c)}
function Tu(a){var b=a;a=v(Qu);for(var c=a.next();!c.done;c=a.next()){for(var d=c.value,e=b.search(Kb),f=0,g=[];(c=Jb(b,f,d,e))>=0;)g.push(b.substring(f,c)),f=Math.min(b.indexOf("&",c)+1||e,e);g.push(b.slice(f));b=g.join("").replace(Lb,"$1")}for(c=a=0;c<b.length;++c)a=31*a+b.charCodeAt(c)>>>0;return"ST-"+a.toString(36)}
;new R;function Uu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(U("INNERTUBE_CLIENT_NAME")==="WEB"||U("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
;function Vu(a,b){b=b?{feature:b}:{};var c=U("EVENT_ID");c&&(b.ei=c,c=((c=document.getElementById("masthead-search"))?c.dataset?c.dataset[Un()]:c.getAttribute("data-clicktracking"):null)||"",b.ved=c,Ru(a,b));b=D("yt.window.navigate");try{b(a)}catch(h){var d=d===void 0?{}:d;var e=e===void 0?"":e;var f=f===void 0?window:f;a=Ib(a,d);U("LOGGED_IN",!0)&&Uu()&&(d=U("VALID_SESSION_TEMPDATA_DOMAINS",[]),(b=Db(window.location.href))&&d.push(b),b=Db(a),ub(d,b)>=0||!b&&a.lastIndexOf("/",0)==0?(d=Eb(a),(d=Fb(d))?
(d=Tu(d),d=(d=Ye.get(""+d,void 0)||null)?jo(d):{}):d=null):d=null,d==null&&(d={}),b=d,c=void 0,Uu()?(c||(c=U("LOGIN_INFO")),c?(b.session_logininfo=c,b=!0):b=!1):b=!1,b&&Ru(a,d));e=a+e;var g=g===void 0?hb:g;a:if(g=g===void 0?hb:g,e instanceof bb)g=e;else{for(a=0;a<g.length;++a)if(d=g[a],d instanceof db&&d.hg(e)){g=new bb(e);break a}g=void 0}f=f.location;g=mb(g||cb);g!==void 0&&(f.href=g)}}
;G("searchbox.yt.install",function(a,b,c,d,e,f,g){oh||(oh=new El);oh.install(a,b,c,d,e,f,g)});
G("yt.www.masthead.searchbox.initPolymer",function(a,b,c,d){var e=Kf.Ha;if(a&&e){var f=U("SBOX_SETTINGS"),g=U("SBOX_LABELS");f&&g&&(a=D("searchbox.yt.install")(a,b,c,f,g,Vu,d))&&e(a,100)}});}).call(this);
