// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function o(r,e,t){var o=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(o=!0,r=r.substr(1)),r=t?r+n(i):n(i)+r,o&&(r="-"+r)),r}var i=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=o(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=o(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):i.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,v=/^(\d+)$/,d=/^(\d+)e/,g=/\.0$/,b=/\.0*e/,h=/(\..*[^0])0*e/;function w(r){var e,n,o=parseFloat(r.arg);if(!isFinite(o)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);o=r.arg}switch(r.specifier){case"e":case"E":n=o.toExponential(r.precision);break;case"f":case"F":n=o.toFixed(r.precision);break;case"g":case"G":c(o)<1e-4?((e=r.precision)>0&&(e-=1),n=o.toExponential(e)):n=o.toPrecision(r.precision),r.alternate||(n=s.call(n,h,"$1e"),n=s.call(n,b,"e"),n=s.call(n,g,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,v,"$1."),n=s.call(n,d,"$1.e")),o>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,i,a,c,f,l,s,p,y,v,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=o(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,v=n.padRight,d=void 0,(d=y-p.length)<0?p:p=v?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function U(r){var e,t,n,o;for(t=[],o=0,n=S.exec(r);n;)(e=r.slice(o,S.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),o=S.lastIndex,n=S.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function N(r){var e,t;if("string"!=typeof r)throw new TypeError(N("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[U(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return O.apply(null,e)}var T,F=Object.prototype,I=F.toString,k=F.__defineGetter__,V=F.__defineSetter__,P=F.__lookupGetter__,G=F.__lookupSetter__;T=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(N("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(N("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(P.call(r,e)||G.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&k&&k.call(r,e,t.get),a&&V&&V.call(r,e,t.set),r};var L=T;function $(r,e,t){L(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var C=/./;function H(r){return"boolean"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function B(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,M=Object.prototype.hasOwnProperty;function Z(r,e){return null!=r&&M.call(r,e)}var X="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof X?X.toStringTag:"",z=B()?function(r){var e,t,n;if(null==r)return R.call(r);t=r[Y],e=Z(r,Y);try{r[Y]=void 0}catch(e){return R.call(r)}return n=R.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return R.call(r)},q=Boolean,D=Boolean.prototype.toString,J=B();function K(r){return"object"==typeof r&&(r instanceof q||(J?function(r){try{return D.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return H(r)||K(r)}$(Q,"isPrimitive",H),$(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof globalThis?globalThis:null,nr=function(r){if(arguments.length){if(!H(r))throw new TypeError(N("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(tr)return tr;if(rr)return rr;if(er)return er;throw new Error("unexpected error. Unable to resolve global object.")}(),or=nr.document&&nr.document.childNodes,ir=Int8Array;function ar(){return/^\s*function\s*([^(]*)/i}var ur=/^\s*function\s*([^(]*)/i;$(ar,"REGEXP",ur);var cr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function fr(r){return null!==r&&"object"==typeof r}function lr(r){var e,t,n,o;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ur.exec(n.toString()))return e[1]}return fr(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}$(fr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(N("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!cr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(fr));var sr="function"==typeof C||"object"==typeof ir||"function"==typeof or?function(r){return lr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"==(e=typeof r)?lr(r).toLowerCase():e};function pr(r){return"function"===sr(r)}function yr(r){return"number"==typeof r}var vr=Number,dr=vr.prototype.toString,gr=B();function br(r){return"object"==typeof r&&(r instanceof vr||(gr?function(r){try{return dr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function hr(r){return yr(r)||br(r)}$(hr,"isPrimitive",yr),$(hr,"isObject",br);var wr,mr="function"==typeof X&&"symbol"==typeof X("foo")&&Z(X,"iterator")&&"symbol"==typeof X.iterator?Symbol.iterator:null,jr=Object,Ar=Object.getPrototypeOf;wr=pr(Object.getPrototypeOf)?Ar:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var _r=wr,Er=Object.prototype;function Or(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!cr(r)}(r)&&(e=function(r){return null==r?null:(r=jr(r),_r(r))}(r),!e||!Z(r,"constructor")&&Z(e,"constructor")&&pr(e.constructor)&&"[object Function]"===z(e.constructor)&&Z(e,"isPrototypeOf")&&pr(e.isPrototypeOf)&&(e===Er||function(r){var e;for(e in r)if(!Z(r,e))return!1;return!0}(r)))}function Sr(r,e,t){var n,o,i,a,u,c;if(c=typeof(u=r),null===u||"object"!==c&&"function"!==c||!pr(u.next))throw new TypeError(N("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",r));if(!pr(e))throw new TypeError(N("invalid argument. Second argument must be a function. Value: `%s`.",e));if(n={invalid:NaN},arguments.length>2&&(i=function(r,e){return Or(e)?(Z(e,"invalid")&&(r.invalid=e.invalid),null):new TypeError(N("invalid argument. Options argument must be an object. Value: `%s`.",e))}(n,t),i))throw i;return $(o={},"next",(function(){var t;return a?{done:!0}:(t=r.next()).done?(a=!0,t):{value:yr(t.value)?e(t.value):n.invalid,done:!1}})),$(o,"return",(function(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}})),mr&&pr(r[mr])&&$(o,mr,(function(){return Sr(r[mr](),e,n)})),o}function xr(r){return r!=r}var Ur=Number.POSITIVE_INFINITY,Nr=vr.NEGATIVE_INFINITY;function Tr(r){return r===Ur||r===Nr}var Fr,Ir="function"==typeof Uint32Array,kr="function"==typeof Uint32Array?Uint32Array:null,Vr="function"==typeof Uint32Array?Uint32Array:void 0;Fr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Ir&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Pr,Gr=Fr,Lr="function"==typeof Float64Array,$r="function"==typeof Float64Array?Float64Array:null,Cr="function"==typeof Float64Array?Float64Array:void 0;Pr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([1,3.14,-3.14,NaN]),t=e,r=(Lr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Cr:function(){throw new Error("not implemented")};var Hr,Wr=Pr,Br="function"==typeof Uint8Array,Rr="function"==typeof Uint8Array?Uint8Array:null,Mr="function"==typeof Uint8Array?Uint8Array:void 0;Hr=function(){var r,e,t;if("function"!=typeof Rr)return!1;try{e=new Rr(e=[1,3.14,-3.14,256,257]),t=e,r=(Br&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")};var Zr,Xr=Hr,Yr="function"==typeof Uint16Array,zr="function"==typeof Uint16Array?Uint16Array:null,qr="function"==typeof Uint16Array?Uint16Array:void 0;Zr=function(){var r,e,t;if("function"!=typeof zr)return!1;try{e=new zr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(Yr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var Dr,Jr={uint16:Zr,uint8:Xr};(Dr=new Jr.uint16(1))[0]=4660;var Kr=52===new Jr.uint8(Dr.buffer)[0],Qr=!0===Kr?1:0,re=new Wr(1),ee=new Gr(re.buffer);function te(r){return re[0]=r,ee[Qr]}function ne(r,e){var t,n,o,i;return o=(i=r*r)*i,n=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),n+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(o=1-(t=.5*i))+(1-o-t+(i*n-r*e))}var oe=-.16666666666666632,ie=.00833333333332249,ae=-.0001984126982985795,ue=27557313707070068e-22,ce=-2.5050760253406863e-8,fe=1.58969099521155e-10;function le(r,e){var t,n,o;return t=ie+(o=r*r)*(ae+o*ue)+o*(o*o)*(ce+o*fe),n=o*r,0===e?r+n*(oe+o*t):r-(o*(.5*e-n*t)-e-n*oe)}var se,pe,ye=2147483647,ve=2146435072,de=1048575,ge=!0===Kr?0:1,be=new Wr(1),he=new Gr(be.buffer);!0===Kr?(se=1,pe=0):(se=0,pe=1);var we={HIGH:se,LOW:pe},me=new Wr(1),je=new Gr(me.buffer),Ae=we.HIGH,_e=we.LOW;function Ee(r,e){return je[Ae]=r,je[_e]=e,me[0]}var Oe,Se,xe=Math.floor,Ue=1023,Ne=1023,Te=-1023,Fe=-1074,Ie=2147483648;!0===Kr?(Oe=1,Se=0):(Oe=0,Se=1);var ke={HIGH:Oe,LOW:Se},Ve=new Wr(1),Pe=new Gr(Ve.buffer),Ge=ke.HIGH,Le=ke.LOW;function $e(r,e,t,n){return Ve[0]=r,e[n]=Pe[Ge],e[n+t]=Pe[Le],e}function Ce(r){return $e(r,[0,0],1,0)}$(Ce,"assign",$e);var He=[0,0];function We(r,e){var t,n;return Ce.assign(r,He,1,0),t=He[0],t&=ye,n=te(e),Ee(t|=n&=Ie,He[1])}var Be=22250738585072014e-324;function Re(r){return Math.abs(r)}var Me=4503599627370496;function Ze(r,e,t,n){return xr(r)||Tr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&Re(r)<Be?(e[n]=r*Me,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return Ze(r,[0,0],1,0)}),"assign",Ze);var Xe=2220446049250313e-31,Ye=2148532223,ze=[0,0],qe=[0,0];function De(r,e){var t,n;return 0===e||0===r||xr(r)||Tr(r)?r:(Ze(r,ze,1,0),r=ze[0],e+=ze[1],e+=function(r){var e=te(r);return(e=(e&ve)>>>20)-Ue|0}(r),e<Fe?We(0,r):e>Ne?r<0?Nr:Ur:(e<=Te?(e+=52,n=Xe):n=1,Ce.assign(r,qe,1,0),t=qe[0],t&=Ye,n*Ee(t|=e+Ue<<20,qe[1])))}function Je(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var Ke=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],rt=16777216,et=5.960464477539063e-8,tt=Je(20),nt=Je(20),ot=Je(20),it=Je(20);function at(r,e,t,n,o,i,a,u,c){var f,l,s,p,y,v,d,g,b;for(p=i,b=n[t],g=t,y=0;g>0;y++)l=et*b|0,it[y]=b-rt*l|0,b=n[g-1]+l,g-=1;if(b=De(b,o),b-=8*xe(.125*b),b-=d=0|b,s=0,o>0?(d+=y=it[t-1]>>24-o,it[t-1]-=y<<24-o,s=it[t-1]>>23-o):0===o?s=it[t-1]>>23:b>=.5&&(s=2),s>0){for(d+=1,f=0,y=0;y<t;y++)g=it[y],0===f?0!==g&&(f=1,it[y]=16777216-g):it[y]=16777215-g;if(o>0)switch(o){case 1:it[t-1]&=8388607;break;case 2:it[t-1]&=4194303}2===s&&(b=1-b,0!==f&&(b-=De(1,o)))}if(0===b){for(g=0,y=t-1;y>=i;y--)g|=it[y];if(0===g){for(v=1;0===it[i-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=Ke[a+y],l=0,g=0;g<=u;g++)l+=r[g]*c[u+(y-g)];n[y]=l}return at(r,e,t+=v,n,o,i,a,u,c)}}if(0===b)for(t-=1,o-=24;0===it[t];)t-=1,o-=24;else(b=De(b,-o))>=rt?(l=et*b|0,it[t]=b-rt*l|0,o+=24,it[t+=1]=l):it[t]=0|b;for(l=De(1,o),y=t;y>=0;y--)n[y]=l*it[y],l*=et;for(y=t;y>=0;y--){for(l=0,v=0;v<=p&&v<=t-y;v++)l+=Qe[v]*n[y+v];ot[t-y]=l}for(l=0,y=t;y>=0;y--)l+=ot[y];for(e[0]=0===s?l:-l,l=ot[0]-l,y=1;y<=t;y++)l+=ot[y];return e[1]=0===s?l:-l,7&d}function ut(r,e,t,n){var o,i,a,u,c,f,l;for((i=(t-3)/24|0)<0&&(i=0),u=t-24*(i+1),f=i-(a=n-1),l=a+4,c=0;c<=l;c++)tt[c]=f<0?0:Ke[f],f+=1;for(c=0;c<=4;c++){for(o=0,f=0;f<=a;f++)o+=r[f]*tt[a+(c-f)];nt[c]=o}return at(r,e,4,nt,u,4,i,a,tt)}var ct=Math.round,ft=.6366197723675814,lt=1.5707963267341256,st=6077100506506192e-26,pt=6077100506303966e-26,yt=20222662487959506e-37,vt=20222662487111665e-37,dt=84784276603689e-45,gt=2047;function bt(r,e,t){var n,o,i,a,u;return i=r-(n=ct(r*ft))*lt,a=n*st,u=e>>20|0,t[0]=i-a,u-(te(t[0])>>20&gt)>16&&(a=n*yt-((o=i)-(i=o-(a=n*pt))-a),t[0]=i-a,u-(te(t[0])>>20&gt)>49&&(a=n*dt-((o=i)-(i=o-(a=n*vt))-a),t[0]=i-a)),t[1]=i-t[0]-a,n}var ht=0,wt=16777216,mt=1.5707963267341256,jt=6077100506506192e-26,At=2*jt,_t=3*jt,Et=4*jt,Ot=598523,St=1072243195,xt=1073928572,Ut=1074752122,Nt=1074977148,Tt=1075183036,Ft=1075388923,It=1075594811,kt=1094263291,Vt=[0,0,0],Pt=[0,0];function Gt(r,e){var t,n,o,i,a,u,c;if((o=te(r)&ye|0)<=St)return e[0]=r,e[1]=0,0;if(o<=Ut)return(o&de)===Ot?bt(r,o,e):o<=xt?r>0?(c=r-mt,e[0]=c-jt,e[1]=c-e[0]-jt,1):(c=r+mt,e[0]=c+jt,e[1]=c-e[0]+jt,-1):r>0?(c=r-2*mt,e[0]=c-At,e[1]=c-e[0]-At,2):(c=r+2*mt,e[0]=c+At,e[1]=c-e[0]+At,-2);if(o<=It)return o<=Tt?o===Nt?bt(r,o,e):r>0?(c=r-3*mt,e[0]=c-_t,e[1]=c-e[0]-_t,3):(c=r+3*mt,e[0]=c+_t,e[1]=c-e[0]+_t,-3):o===Ft?bt(r,o,e):r>0?(c=r-4*mt,e[0]=c-Et,e[1]=c-e[0]-Et,4):(c=r+4*mt,e[0]=c+Et,e[1]=c-e[0]+Et,-4);if(o<kt)return bt(r,o,e);if(o>=ve)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return be[0]=r,he[ge]}(r),c=Ee(o-((n=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)Vt[a]=0|c,c=(c-Vt[a])*wt;for(Vt[2]=c,i=3;Vt[i-1]===ht;)i-=1;return u=ut(Vt,Pt,n,i),r<0?(e[0]=-Pt[0],e[1]=-Pt[1],-u):(e[0]=Pt[0],e[1]=Pt[1],u)}var Lt=[0,0],$t=2147483647,Ct=1072243195,Ht=1044381696,Wt=2146435072;function Bt(r){var e;if(e=te(r),(e&=$t)<=Ct)return e<Ht?1:ne(r,0);if(e>=Wt)return NaN;switch(3&Gt(r,Lt)){case 0:return ne(Lt[0],Lt[1]);case 1:return-le(Lt[0],Lt[1]);case 2:return-ne(Lt[0],Lt[1]);default:return le(Lt[0],Lt[1])}}var Rt=1072243195,Mt=1045430272,Zt=[0,0];function Xt(r){var e;if(e=te(r),(e&=ye)<=Rt)return e<Mt?r:le(r,0);if(e>=ve)return NaN;switch(3&Gt(r,Zt)){case 0:return le(Zt[0],Zt[1]);case 1:return ne(Zt[0],Zt[1]);case 2:return-le(Zt[0],Zt[1]);default:return-ne(Zt[0],Zt[1])}}var Yt=3.141592653589793;function zt(r){var e,t;return xr(r)||Tr(r)?NaN:0===(e=Re(t=r%2))||1===e?We(0,t):e<.25?Xt(Yt*t):e<.75?We(Bt(Yt*(e=.5-e)),t):e<1.25?(t=We(1,t)-t,Xt(Yt*t)):e<1.75?-We(Bt(Yt*(e-=1.5)),t):(t-=We(2,t),Xt(Yt*t))}return function(r){return Sr(r,zt)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSinpi=e();
//# sourceMappingURL=browser.js.map
