// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function i(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function n(r,e,t){var n=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+i(a):i(a)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,i,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(i=r.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(i=(-c).toString(e),r.precision&&(i=n(i,r.precision,r.padRight)),i="-"+i):(i=c.toString(e),c||r.precision?r.precision&&(i=n(i,r.precision,r.padRight)):i="",r.sign&&(i=r.sign+i)),16===e&&(r.alternate&&(i="0x"+i),i=r.specifier===o.call(r.specifier)?o.call(i):a.call(i)),8===e&&r.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function l(r){return"string"==typeof r}var s=Math.abs,p=String.prototype.toLowerCase,f=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,i,n=parseFloat(r.arg);if(!isFinite(n)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+i);n=r.arg}switch(r.specifier){case"e":case"E":i=n.toExponential(r.precision);break;case"f":case"F":i=n.toFixed(r.precision);break;case"g":case"G":s(n)<1e-4?((e=r.precision)>0&&(e-=1),i=n.toExponential(e)):i=n.toPrecision(r.precision),r.alternate||(i=u.call(i,b,"$1e"),i=u.call(i,w,"e"),i=u.call(i,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return i=u.call(i,g,"e+0$1"),i=u.call(i,d,"e-0$1"),r.alternate&&(i=u.call(i,y,"$1."),i=u.call(i,h,"$1.e")),n>=0&&r.sign&&(i=r.sign+i),i=r.specifier===f.call(r.specifier)?f.call(i):p.call(i)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var i=e-r.length;return i<0?r:r=t?r+_(i):_(i)+r}var E=String.fromCharCode,S=isNaN,k=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,i,a,o,s,p,f,u;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",p=1,f=0;f<r.length;f++)if(l(i=r[f]))s+=i;else{if(e=void 0!==i.precision,!(i=x(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+i+"`.");for(i.mapping&&(p=i.mapping),t=i.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[p],10),p+=1,S(i.width))throw new TypeError("the argument for * width at position "+p+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(e&&"*"===i.precision){if(i.precision=parseInt(arguments[p],10),p+=1,S(i.precision))throw new TypeError("the argument for * precision at position "+p+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,e=!1)}switch(i.arg=arguments[p],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=e?i.precision:-1;break;case"c":if(!S(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=S(o)?String(i.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(i.precision=6),i.arg=m(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=A(i.arg,i.width,i.padRight)),s+=i.arg||"",p+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,i,n;for(t=[],n=0,i=j.exec(r);i;)(e=r.slice(n,j.lastIndex-i[0].length)).length&&t.push(e),t.push(I(i)),n=j.lastIndex,i=j.exec(r);return(e=r.slice(n)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,i;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,i=1;i<t.length;i++)t[i]=arguments[i];return F.apply(null,t)}var O,U=Object.prototype,C=U.toString,P=U.__defineGetter__,R=U.__defineSetter__,N=U.__lookupGetter__,Z=U.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var i,n,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(N.call(r,e)||Z.call(r,e)?(i=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};var G=O;function W(r){return r!=r}var L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var X=Object.prototype.toString;var z=Object.prototype.hasOwnProperty;var M,Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";M=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,i,n,a;if(null==r)return X.call(r);t=r[q],a=q,e=null!=(n=r)&&z.call(n,a);try{r[q]=void 0}catch(e){return X.call(r)}return i=X.call(r),e?r[q]=t:delete r[q],i}:function(r){return X.call(r)};var B=M,D="function"==typeof Float32Array;var H=Number.POSITIVE_INFINITY,J="function"==typeof Float32Array?Float32Array:null;var K,Q="function"==typeof Float32Array?Float32Array:void 0;K=function(){var r,e,t;if("function"!=typeof J)return!1;try{e=new J([1,3.14,-3.14,5e40]),t=e,r=(D&&t instanceof Float32Array||"[object Float32Array]"===B(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===H}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr=K,er="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var ir,nr="function"==typeof Uint32Array?Uint32Array:void 0;ir=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ar=ir,or=new rr(1);new ar(or.buffer)[0]=2139095040;var cr=or[0];function lr(r){return 0===r&&1/r===cr}function sr(r,e,t,i,n){var a,o,c,l,s;if(r<=0)return i;if(c=n<0?(1-r)*n:0,a=e[o=t<0?(1-r)*t:0],i[c]=a,c+=n,s=1,!1===W(a))for(;s<r;s++){if(W(l=e[o+=t])){a=l;break}(l>a||l===a&&lr(l))&&(a=l),i[c]=a,c+=n}if(W(a))for(;s<r;s++)i[c]=a,c+=n;return i}function pr(r,e,t,i,n,a,o){var c,l,s,p,f;if(r<=0)return n;if(s=o,c=e[l=i],n[s]=c,s+=a,f=1,!1===W(c))for(;f<r;f++){if(W(p=e[l+=t])){c=p;break}(p>c||p===c&&lr(p))&&(c=p),n[s]=c,s+=a}if(W(c))for(;f<r;f++)n[s]=c,s+=a;return n}G(sr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:pr});export{sr as default,pr as ndarray};
//# sourceMappingURL=mod.js.map
