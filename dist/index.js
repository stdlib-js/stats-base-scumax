"use strict";var c=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var m=c(function(D,j){
var x=require('@stdlib/math-base-assert-is-nanf/dist'),E=require('@stdlib/math-base-assert-is-positive-zerof/dist');function O(e,a,n,f,i,t,q){var r,o,u,v,s;if(e<=0)return i;if(o=f,u=q,r=a[o],i[u]=r,u+=t,s=1,x(r)===!1)for(s;s<e;s++){if(o+=n,v=a[o],x(v)){r=v;break}(v>r||v===r&&E(v))&&(r=v),i[u]=r,u+=t}if(x(r))for(s;s<e;s++)i[u]=r,u+=t;return i}j.exports=O
});var d=c(function(F,y){
var l=require('@stdlib/strided-base-stride2offset/dist'),P=m();function Z(e,a,n,f,i){var t=l(e,n),q=l(e,i);return P(e,a,n,t,f,i,q)}y.exports=Z
});var b=c(function(G,_){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=d(),h=m();g(R,"ndarray",h);_.exports=R
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=b(),p,k=z(w(__dirname,"./native.js"));A(k)?p=B:p=k;module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
