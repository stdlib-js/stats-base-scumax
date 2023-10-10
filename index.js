// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=u.call(i,v,"$1e"),i=u.call(i,w,"e"),i=u.call(i,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,d,"e-0$1"),r.alternate&&(i=u.call(i,y,"$1."),i=u.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===p.call(r.specifier)?p.call(i):f.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var E=String.fromCharCode,S=isNaN,k=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,i,a,o,s,f,p,u;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,p=0;p<r.length;p++)if(l(i=r[p]))s+=i;else{if(e=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(f=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[f],10),f+=1,S(i.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[f],10),f+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[f],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=A(i.arg,i.width,i.padRight)),s+=i.arg||"",f+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,i,n;for(t=[],n=0,i=j.exec(r);i;)(e=r.slice(n,j.lastIndex-i[0].length)).length&&t.push(e),t.push(T(i)),n=j.lastIndex,i=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,i;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return F.apply(null,t)}var O,U=Object.prototype,C=U.toString,P=U.__defineGetter__,R=U.__defineSetter__,N=U.__lookupGetter__,Z=U.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||Z.call(r,e)?(i=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};var G=O;function W(r){return r!=r}var L,X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";L=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,n,a;if(null==r)return z.call(r);t=r[q],a=q,e=null!=(n=r)&&M.call(n,a);try{r[q]=void 0}catch(e){return z.call(r)}return i=z.call(r),e?r[q]=t:delete r[q],i}:function(r){return z.call(r)};var B,D=L,H="function"==typeof Float32Array,J=Number.POSITIVE_INFINITY,K="function"==typeof Float32Array?Float32Array:null,Q="function"==typeof Float32Array?Float32Array:void 0;B=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,5e40]),t=e,r=(H&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===J}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=B,tr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;rr=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(tr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ar=rr,or=new er(1);new ar(or.buffer)[0]=2139095040;var cr,lr=or[0];function sr(r){return 0===r&&1/r===lr}function fr(r,e,t,i,n){var a,o,c,l,s;if(r<=0)return i;if(c=n<0?(1-r)*n:0,a=e[o=t<0?(1-r)*t:0],i[c]=a,c+=n,s=1,!1===W(a))for(;s<r;s++){if(W(l=e[o+=t])){a=l;break}(l>a||l===a&&sr(l))&&(a=l),i[c]=a,c+=n}if(W(a))for(;s<r;s++)i[c]=a,c+=n;return i}return cr=function(r,e,t,i,n,a,o){var c,l,s,f,p;if(r<=0)return n;if(s=o,c=e[l=i],n[s]=c,s+=a,p=1,!1===W(c))for(;p<r;p++){if(W(f=e[l+=t])){c=f;break}(f>c||f===c&&sr(f))&&(c=f),n[s]=c,s+=a}if(W(c))for(;p<r;p++)n[s]=c,s+=a;return n},G(fr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:cr}),fr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).scumax=e();
//# sourceMappingURL=index.js.map
