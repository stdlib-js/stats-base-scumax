// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(t){"use strict";var r,e="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,o=Object.prototype,a=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,l=o.__lookupGetter__,u=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===a.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(t,r)||u.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t};var c=r;function y(t){return t!=t}var p,b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,_=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"";p=b&&"symbol"==typeof Symbol.toStringTag?function(t){var r,e,n,o,a;if(null==t)return d.call(t);e=t[s],a=s,r=null!=(o=t)&&_.call(o,a);try{t[s]=void 0}catch(r){return d.call(t)}return n=d.call(t),r?t[s]=e:delete t[s],n}:function(t){return d.call(t)};var v,m=p,w="function"==typeof Float32Array,j=Number.POSITIVE_INFINITY,A="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;v=function(){var t,r,e;if("function"!=typeof A)return!1;try{r=new A([1,3.14,-3.14,5e40]),e=r,t=(w&&e instanceof Float32Array||"[object Float32Array]"===m(e))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===j}catch(r){t=!1}return t}()?g:function(){throw new Error("not implemented")};var h,S=v,F="function"==typeof Uint32Array,O="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;h=function(){var t,r,e;if("function"!=typeof O)return!1;try{r=new O(r=[1,3.14,-3.14,4294967296,4294967297]),e=r,t=(F&&e instanceof Uint32Array||"[object Uint32Array]"===m(e))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var P=h,U=new S(1);new P(U.buffer)[0]=2139095040;var E=U[0];function x(t){return 0===t&&1/t===E}function I(t,r,e,n,o){var a,i,f,l,u;if(t<=0)return n;if(f=o<0?(1-t)*o:0,a=r[i=e<0?(1-t)*e:0],n[f]=a,f+=o,u=1,!1===y(a))for(;u<t;u++){if(y(l=r[i+=e])){a=l;break}(l>a||l===a&&x(l))&&(a=l),n[f]=a,f+=o}if(y(a))for(;u<t;u++)n[f]=a,f+=o;return n}function k(t,r,e,n,o,a,i){var f,l,u,c,p;if(t<=0)return o;if(u=i,f=r[l=n],o[u]=f,u+=a,p=1,!1===y(f))for(;p<t;p++){if(y(c=r[l+=e])){f=c;break}(c>f||c===f&&x(c))&&(f=c),o[u]=f,u+=a}if(y(f))for(;p<t;p++)o[u]=f,u+=a;return o}c(I,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:k}),t.default=I,t.ndarray=k,Object.defineProperty(t,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).scumax={});
//# sourceMappingURL=index.js.map
