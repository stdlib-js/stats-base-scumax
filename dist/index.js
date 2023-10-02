"use strict";var c=function(v,f){return function(){return f||v((f={exports:{}}).exports,f),f.exports}};var j=c(function(G,p){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(v,f,q,s,u){var a,n,r,i,e;if(v<=0)return s;if(q<0?n=(1-v)*q:n=0,u<0?r=(1-v)*u:r=0,a=f[n],s[r]=a,r+=u,e=1,x(a)===!1)for(e;e<v;e++){if(n+=q,i=f[n],x(i)){a=i;break}(i>a||i===a&&E(i))&&(a=i),s[r]=a,r+=u}if(x(a))for(e;e<v;e++)s[r]=a,r+=u;return s}p.exports=O
});var k=c(function(H,b){
var m=require('@stdlib/math-base-assert-is-nanf/dist'),g=require('@stdlib/math-base-assert-is-positive-zerof/dist');function h(v,f,q,s,u,a,n){var r,i,e,o,t;if(v<=0)return u;if(i=s,e=n,r=f[i],u[e]=r,e+=a,t=1,m(r)===!1)for(t;t<v;t++){if(i+=q,o=f[i],m(o)){r=o;break}(o>r||o===r&&g(o))&&(r=o),u[e]=r,e+=a}if(m(r))for(t;t<v;t++)u[e]=r,e+=a;return u}b.exports=h
});var Z=c(function(I,R){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),P=j(),z=k();w(P,"ndarray",z);R.exports=P
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=Z(),l,_=B(A(__dirname,"./native.js"));C(_)?l=D:l=_;module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
