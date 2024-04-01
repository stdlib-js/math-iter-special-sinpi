// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSinpi=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,A(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function x(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function U(r){var e,t;if("string"!=typeof r)throw new TypeError(U("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[x(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(U("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(U("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString;var M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"";var z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString;var J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var or=function(r){if(arguments.length){if(!H(r))throw new TypeError(U("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),ir=or.document&&or.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;$(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return lr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(U("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof C||"object"==typeof ar||"function"==typeof ir?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function yr(r){return"function"===pr(r)}function vr(r){return"number"==typeof r}var dr=Number,gr=dr.prototype.toString;var br=B();function hr(r){return"object"==typeof r&&(r instanceof dr||(br?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function wr(r){return vr(r)||hr(r)}$(wr,"isPrimitive",vr),$(wr,"isObject",hr);var mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null;var jr,Ar=Object,_r=Object.getPrototypeOf;jr=yr(Object.getPrototypeOf)?_r:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Er=jr;var Or=Object.prototype;function Sr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(e=function(r){return null==r?null:(r=Ar(r),Er(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&yr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&yr(e.isPrototypeOf)&&(e===Or||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Nr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!yr(u.next))throw new TypeError(U("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!yr(e))throw new TypeError(U("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Sr(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(U("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;if(a)return{done:!0};if((t=r.next()).done)return a=!0,t;return{value:vr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),mr&&yr(r[mr])&&$(o,mr,(function(){return Nr(r[mr](),e,n)})),o}function xr(r){return r!=r}var Ur=Number.POSITIVE_INFINITY,Tr=dr.NEGATIVE_INFINITY;function Fr(r){return r===Ur||r===Tr}var Ir="function"==typeof Uint32Array;var kr="function"==typeof Uint32Array?Uint32Array:null;var Vr,Pr="function"==typeof Uint32Array?Uint32Array:void 0;Vr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ir&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")};var Gr=Vr,Lr="function"==typeof Float64Array;var $r="function"==typeof Float64Array?Float64Array:null;var Cr,Hr="function"==typeof Float64Array?Float64Array:void 0;Cr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Hr:function(){throw new Error("not implemented")};var Wr=Cr,Br="function"==typeof Uint8Array;var Rr="function"==typeof Uint8Array?Uint8Array:null;var Mr,Zr="function"==typeof Uint8Array?Uint8Array:void 0;Mr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,256,257]),t=e,r=(Br&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Zr:function(){throw new Error("not implemented")};var Xr=Mr,Yr="function"==typeof Uint16Array;var zr="function"==typeof Uint16Array?Uint16Array:null;var qr,Dr="function"==typeof Uint16Array?Uint16Array:void 0;qr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Yr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Dr:function(){throw new Error("not implemented")};var Jr,Kr={uint16:qr,uint8:Xr};(Jr=new Kr.uint16(1))[0]=4660;var Qr=52===new Kr.uint8(Jr.buffer)[0],re=!0===Qr?1:0,ee=new Wr(1),te=new Gr(ee.buffer);function ne(r){return ee[0]=r,te[re]}function oe(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var ie=-.16666666666666632,ae=.00833333333332249,ue=-.0001984126982985795,ce=27557313707070068e-22,fe=-2.5050760253406863e-8,le=1.58969099521155e-10;function se(r,e){var t,n,o;return t=ae+(o=r*r)*(ue+o*ce)+o*(o*o)*(fe+o*le),n=o*r,0===e?r+n*(ie+o*t):r-(o*(.5*e-n*t)-e-n*ie)}var pe,ye,ve=2147483647,de=2146435072,ge=1048575,be=!0===Qr?0:1,he=new Wr(1),we=new Gr(he.buffer);!0===Qr?(pe=1,ye=0):(pe=0,ye=1);var me={HIGH:pe,LOW:ye},je=new Wr(1),Ae=new Gr(je.buffer),_e=me.HIGH,Ee=me.LOW;function Oe(r,e){return Ae[_e]=r,Ae[Ee]=e,je[0]}var Se,Ne,xe=Math.floor,Ue=1023,Te=1023,Fe=-1023,Ie=-1074,ke=2147483648;!0===Qr?(Se=1,Ne=0):(Se=0,Ne=1);var Ve={HIGH:Se,LOW:Ne},Pe=new Wr(1),Ge=new Gr(Pe.buffer),Le=Ve.HIGH,$e=Ve.LOW;function Ce(r,e,t,n){return Pe[0]=r,e[n]=Ge[Le],e[n+t]=Ge[$e],e}function He(r){return Ce(r,[0,0],1,0)}$(He,"assign",Ce);var We=[0,0];function Be(r,e){var t,n;return He.assign(r,We,1,0),t=We[0],t&=ve,n=ne(e),Oe(t|=n&=ke,We[1])}var Re=22250738585072014e-324;function Me(r){return Math.abs(r)}var Ze=4503599627370496;function Xe(r,e,t,n){return xr(r)||Fr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Me(r)<Re?(e[n]=r*Ze,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Xe(r,[0,0],1,0)}),"assign",Xe);var Ye=2220446049250313e-31,ze=2148532223,qe=[0,0],De=[0,0];function Je(r,e){var t,n;return 0===e||0===r||xr(r)||Fr(r)?r:(Xe(r,qe,1,0),r=qe[0],e+=qe[1],e+=function(r){var e=ne(r);return(e=(e&de)>>>20)-Ue|0}(r),e<Ie?Be(0,r):e>Te?r<0?Tr:Ur:(e<=Fe?(e+=52,n=Ye):n=1,He.assign(r,De,1,0),t=De[0],t&=ze,n*Oe(t|=e+Ue<<20,De[1])))}function Ke(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Qe=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],rt=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],et=16777216,tt=5.960464477539063e-8,nt=Ke(20),ot=Ke(20),it=Ke(20),at=Ke(20);function ut(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=tt*b|0,at[y]=b-et*l|0,b=n[g-1]+l,g-=1;if(b=Je(b,o),b-=8*xe(.125*b),b-=d=0|b,s=0,o>0?(d+=y=at[t-1]>>24-o,at[t-1]-=y<<24-o,s=at[t-1]>>23-o):0===o?s=at[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=at[y],0===f?0!==g&&(f=1,at[y]=16777216-g):at[y]=16777215-g;if(o>0)switch(o){case 1:at[t-1]&=8388607;break;case 2:at[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=Je(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=at[y];if(0===g){for(v=1;0===at[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Qe[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return ut(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===at[t];)t-=1,o-=24;else(b=Je(b,-o))>=et?(l=tt*b|0,at[t]=b-et*l|0,o+=24,at[t+=1]=l):at[t]=0|b;for(l=Je(1,o),y=t;y>=0;y--)n[y]=l*at[y],l*=tt;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=rt[v]*n[y+v];it[t-y]=l}for(l=0,y=t;y>=0;y--)l+=it[y];for(e[0]=0===s?l:-l,l=it[0]-l,y=1;y<=t;y++)l+=it[y];return e[1]=0===s?l:-l,7&d}function ct(r,e,t,n){var o,i,a,u,c,f,l;for(4,(i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)nt[c]=f<0?0:Qe[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*nt[a+(c-f)];ot[c]=o}return 4,ut(r,e,4,ot,u,4,i,a,nt)}var ft=Math.round,lt=.6366197723675814,st=1.5707963267341256,pt=6077100506506192e-26,yt=6077100506303966e-26,vt=20222662487959506e-37,dt=20222662487111665e-37,gt=84784276603689e-45,bt=2047;function ht(r,e,t){var n,o,i,a,u;return i=r-(n=ft(r*lt))*st,a=n*pt,u=e>>20|0,t[0]=i-a,u-(ne(t[0])>>20&bt)>16&&(a=n*vt-((o=i)-(i=o-(a=n*yt))-a),t[0]=i-a,u-(ne(t[0])>>20&bt)>49&&(a=n*gt-((o=i)-(i=o-(a=n*dt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var wt=0,mt=16777216,jt=1.5707963267341256,At=6077100506506192e-26,_t=2*At,Et=3*At,Ot=4*At,St=598523,Nt=1072243195,xt=1073928572,Ut=1074752122,Tt=1074977148,Ft=1075183036,It=1075388923,kt=1075594811,Vt=1094263291,Pt=[0,0,0],Gt=[0,0];function Lt(r,e){var t,n,o,i,a,u,c;if((o=ne(r)&ve|0)<=Nt)return e[0]=r,e[1]=0,0;if(o<=Ut)return(o&ge)===St?ht(r,o,e):o<=xt?r>0?(c=r-jt,e[0]=c-At,e[1]=c-e[0]-At,1):(c=r+jt,e[0]=c+At,e[1]=c-e[0]+At,-1):r>0?(c=r-2*jt,e[0]=c-_t,e[1]=c-e[0]-_t,2):(c=r+2*jt,e[0]=c+_t,e[1]=c-e[0]+_t,-2);if(o<=kt)return o<=Ft?o===Tt?ht(r,o,e):r>0?(c=r-3*jt,e[0]=c-Et,e[1]=c-e[0]-Et,3):(c=r+3*jt,e[0]=c+Et,e[1]=c-e[0]+Et,-3):o===It?ht(r,o,e):r>0?(c=r-4*jt,e[0]=c-Ot,e[1]=c-e[0]-Ot,4):(c=r+4*jt,e[0]=c+Ot,e[1]=c-e[0]+Ot,-4);if(o<Vt)return ht(r,o,e);if(o>=de)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return he[0]=r,we[be]}(r),c=Oe(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Pt[a]=0|c,c=(c-Pt[a])*mt;for(Pt[2]=c,i=3;Pt[i-1]===wt;)i-=1;return u=ct(Pt,Gt,n,i),r<0?(e[0]=-Gt[0],e[1]=-Gt[1],-u):(e[0]=Gt[0],e[1]=Gt[1],u)}var $t=[0,0],Ct=2147483647,Ht=1072243195,Wt=1044381696,Bt=2146435072;function Rt(r){var e;if(e=ne(r),(e&=Ct)<=Ht)return e<Wt?1:oe(r,0);if(e>=Bt)return NaN;switch(3&Lt(r,$t)){case 0:return oe($t[0],$t[1]);case 1:return-se($t[0],$t[1]);case 2:return-oe($t[0],$t[1]);default:return se($t[0],$t[1])}}var Mt=1072243195,Zt=1045430272,Xt=[0,0];function Yt(r){var e;if(e=ne(r),(e&=ve)<=Mt)return e<Zt?r:se(r,0);if(e>=de)return NaN;switch(3&Lt(r,Xt)){case 0:return se(Xt[0],Xt[1]);case 1:return oe(Xt[0],Xt[1]);case 2:return-se(Xt[0],Xt[1]);default:return-oe(Xt[0],Xt[1])}}var zt=3.141592653589793;function qt(r){var e,t;return xr(r)||Fr(r)?NaN:0===(e=Me(t=r%2))||1===e?Be(0,t):e<.25?Yt(zt*t):e<.75?Be(Rt(zt*(e=.5-e)),t):e<1.25?(t=Be(1,t)-t,Yt(zt*t)):e<1.75?-Be(Rt(zt*(e-=1.5)),t):(t-=Be(2,t),Yt(zt*t))}return function(r){return Nr(r,qt)}}));
//# sourceMappingURL=index.js.map
