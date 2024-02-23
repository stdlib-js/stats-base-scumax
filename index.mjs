// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zerof@v0.1.1-esm/index.mjs";function t(r,t,i,n,f){var a,o,d,m,l;if(r<=0)return n;if(d=f<0?(1-r)*f:0,a=t[o=i<0?(1-r)*i:0],n[d]=a,d+=f,l=1,!1===e(a))for(;l<r;l++){if(m=t[o+=i],e(m)){a=m;break}(m>a||m===a&&s(m))&&(a=m),n[d]=a,d+=f}if(e(a))for(;l<r;l++)n[d]=a,d+=f;return n}function i(r,t,i,n,f,a,o){var d,m,l,p,j;if(r<=0)return f;if(l=o,d=t[m=n],f[l]=d,l+=a,j=1,!1===e(d))for(;j<r;j++){if(p=t[m+=i],e(p)){d=p;break}(p>d||p===d&&s(p))&&(d=p),f[l]=d,l+=a}if(e(d))for(;j<r;j++)f[l]=d,l+=a;return f}r(t,"ndarray",i);export{t as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
