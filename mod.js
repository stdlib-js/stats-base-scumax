// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,i=n.__defineSetter__,l=n.__lookupGetter__,f=n.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,e){var u,c,y,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(l.call(r,t)||f.call(r,t)?(u=r.__proto__,r.__proto__=n,delete r[t],r[t]=e.value,r.__proto__=u):r[t]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&a&&a.call(r,t,e.get),p&&i&&i.call(r,t,e.set),r};var u=t;function c(r){return r!=r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var p=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;var v,_="function"==typeof Symbol?Symbol.toStringTag:"";v=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,o,a;if(null==r)return p.call(r);e=r[_],a=_,t=null!=(o=r)&&b.call(o,a);try{r[_]=void 0}catch(t){return p.call(r)}return n=p.call(r),t?r[_]=e:delete r[_],n}:function(r){return p.call(r)};var d=v,m="function"==typeof Float32Array;var s=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null;var A,j="function"==typeof Float32Array?Float32Array:void 0;A=function(){var r,t,e;if("function"!=typeof w)return!1;try{t=new w([1,3.14,-3.14,5e40]),e=t,r=(m&&e instanceof Float32Array||"[object Float32Array]"===d(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?j:function(){throw new Error("not implemented")};var g=A,S="function"==typeof Uint32Array;var h="function"==typeof Uint32Array?Uint32Array:null;var F,O="function"==typeof Uint32Array?Uint32Array:void 0;F=function(){var r,t,e;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(S&&e instanceof Uint32Array||"[object Uint32Array]"===d(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?O:function(){throw new Error("not implemented")};var U=F,E=new g(1);new U(E.buffer)[0]=2139095040;var P=E[0];function T(r){return 0===r&&1/r===P}function I(r,t,e,n,o){var a,i,l,f,u;if(r<=0)return n;if(l=o<0?(1-r)*o:0,a=t[i=e<0?(1-r)*e:0],n[l]=a,l+=o,u=1,!1===c(a))for(;u<r;u++){if(c(f=t[i+=e])){a=f;break}(f>a||f===a&&T(f))&&(a=f),n[l]=a,l+=o}if(c(a))for(;u<r;u++)n[l]=a,l+=o;return n}function k(r,t,e,n,o,a,i){var l,f,u,y,p;if(r<=0)return o;if(u=i,l=t[f=n],o[u]=l,u+=a,p=1,!1===c(l))for(;p<r;p++){if(c(y=t[f+=e])){l=y;break}(y>l||y===l&&T(y))&&(l=y),o[u]=l,u+=a}if(c(l))for(;p<r;p++)o[u]=l,u+=a;return o}u(I,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:k});export{I as default,k as ndarray};
//# sourceMappingURL=mod.js.map
