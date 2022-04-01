// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).iterSinpi=t()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(n){var e=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(t,n,e.get?e:{enumerable:!0,get:function(){return r[n]}})})),t}var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return t({},"x",{}),!0}catch(r){return!1}},e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,t,n){var e,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(r,t)||c.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),v="get"in n,y="set"in n,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&i&&i.call(r,t,n.get),y&&a&&a.call(r,t,n.set),r},v=e,y=l,p=n()?v:y;var s=function(r,t,n){p(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})},b=s,d=/./;var m=function(r){return"boolean"==typeof r};var w=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var j=function(){return w&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,h=_;var g=function(r){return h.call(r)},A=Object.prototype.hasOwnProperty;var O=function(r,t){return null!=r&&A.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",E=O,S=N,U=_;var P=g,T=function(r){var t,n,e;if(null==r)return U.call(r);n=r[S],t=E(r,S);try{r[S]=void 0}catch(t){return U.call(r)}return e=U.call(r),t?r[S]=n:delete r[S],e},F=j()?T:P,I=Boolean.prototype.toString;var x=F,G=function(r){try{return I.call(r),!0}catch(r){return!1}},V=j();var H=function(r){return"object"==typeof r&&(r instanceof Boolean||(V?G(r):"[object Boolean]"===x(r)))},B=m,L=H;var M=b,k=function(r){return B(r)||L(r)},W=H;M(k,"isPrimitive",m),M(k,"isObject",W);var C=k;var R=function(){return new Function("return this;")()},X="object"==typeof self?self:null,Y="object"==typeof window?window:null,z="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},D="object"==typeof z?z:null;module.exports=D;var q=C.isPrimitive,J=R,K=X,Q=Y,Z=r(Object.freeze({__proto__:null}));var $=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return J()}if(K)return K;if(Q)return Q;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")},rr=$(),tr=rr.document&&rr.document.childNodes,nr=Int8Array,er=d,or=tr,ur=nr;var ir=function(){return"function"==typeof er||"object"==typeof ur||"function"==typeof or};var ar=function(){return/^\s*function\s*([^(]*)/i},fr=ar;b(fr,"REGEXP",ar());var cr=fr,lr=F;var vr=Array.isArray?Array.isArray:function(r){return"[object Array]"===lr(r)},yr=vr;var pr=function(r){return null!==r&&"object"==typeof r};b(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!yr(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(pr));var sr=pr;var br=F,dr=cr.REGEXP,mr=function(r){return sr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var wr=function(r){var t,n,e;if(("Object"===(n=br(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=dr.exec(e.toString()))return t[1]}return mr(r)?"Buffer":n},jr=wr;var _r=wr;var hr=function(r){var t;return null===r?"null":"object"===(t=typeof r)?jr(r).toLowerCase():t},gr=function(r){return _r(r).toLowerCase()},Ar=ir()?gr:hr;var Or=function(r){return"function"===Ar(r)},Nr=Or;var Er=function(r){var t=typeof r;return null!==r&&("object"===t||"function"===t)&&Nr(r.next)};var Sr=function(r){return"number"==typeof r},Ur=Number,Pr=Ur.prototype.toString;var Tr=F,Fr=Ur,Ir=function(r){try{return Pr.call(r),!0}catch(r){return!1}},xr=j();var Gr=function(r){return"object"==typeof r&&(r instanceof Fr||(xr?Ir(r):"[object Number]"===Tr(r)))},Vr=Sr,Hr=Gr;var Br=b,Lr=function(r){return Vr(r)||Hr(r)},Mr=Gr;Br(Lr,"isPrimitive",Sr),Br(Lr,"isObject",Mr);var kr=Lr,Wr=O;var Cr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Wr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null,Rr=vr;var Xr=function(r){return"object"==typeof r&&null!==r&&!Rr(r)},Yr=Object.getPrototypeOf;var zr=function(r){return r.__proto__},Dr=F,qr=zr;var Jr=function(r){var t=qr(r);return t||null===t?t:"[object Function]"===Dr(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Kr=Yr,Qr=Jr,Zr=Or(Object.getPrototypeOf)?Kr:Qr;var $r=Xr,rt=Or,tt=function(r){return null==r?null:(r=Object(r),Zr(r))},nt=O,et=F,ot=Object.prototype;var ut=function(r){var t;return!!$r(r)&&(!(t=tt(r))||!nt(r,"constructor")&&nt(t,"constructor")&&rt(t.constructor)&&"[object Function]"===et(t.constructor)&&nt(t,"isPrototypeOf")&&rt(t.isPrototypeOf)&&(t===ot||function(r){var t;for(t in r)if(!nt(r,t))return!1;return!0}(r)))},it=ut,at=O;var ft=b,ct=Or,lt=Er,vt=kr.isPrimitive,yt=Cr,pt=function(r,t){return it(t)?(at(t,"invalid")&&(r.invalid=t.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+t+"`.")};var st=function r(t,n,e){var o,u,i,a;if(!lt(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!ct(n))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");if(o={invalid:NaN},arguments.length>2&&(i=pt(o,e)))throw i;return ft(u={},"next",f),ft(u,"return",c),yt&&ct(t[yt])&&ft(u,yt,l),u;function f(){var r;return a?{done:!0}:(r=t.next()).done?(a=!0,r):{value:vt(r.value)?n(r.value):o.invalid,done:!1}}function c(r){return a=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return r(t[yt](),n,o)}},bt=st;var dt=function(r){return r!=r},mt=Number.POSITIVE_INFINITY,wt=Ur.NEGATIVE_INFINITY,jt=mt,_t=wt;var ht=function(r){return r===jt||r===_t},gt=F,At="function"==typeof Uint32Array;var Ot="function"==typeof Uint32Array?Uint32Array:null,Nt=function(r){return At&&r instanceof Uint32Array||"[object Uint32Array]"===gt(r)},Et=Ot;var St=function(){var r,t;if("function"!=typeof Et)return!1;try{t=new Et(t=[1,3.14,-3.14,4294967296,4294967297]),r=Nt(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Ut="function"==typeof Uint32Array?Uint32Array:void 0,Pt=function(){throw new Error("not implemented")},Tt=St()?Ut:Pt,Ft=F,It="function"==typeof Float64Array;var xt="function"==typeof Float64Array?Float64Array:null,Gt=function(r){return It&&r instanceof Float64Array||"[object Float64Array]"===Ft(r)},Vt=xt;var Ht=function(){var r,t;if("function"!=typeof Vt)return!1;try{t=new Vt([1,3.14,-3.14,NaN]),r=Gt(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var Bt="function"==typeof Float64Array?Float64Array:void 0,Lt=function(){throw new Error("not implemented")},Mt=Ht()?Bt:Lt,kt=F,Wt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null,Rt=function(r){return Wt&&r instanceof Uint8Array||"[object Uint8Array]"===kt(r)},Xt=Ct;var Yt=function(){var r,t;if("function"!=typeof Xt)return!1;try{t=new Xt(t=[1,3.14,-3.14,256,257]),r=Rt(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var zt="function"==typeof Uint8Array?Uint8Array:void 0,Dt=function(){throw new Error("not implemented")},qt=Yt()?zt:Dt,Jt=F,Kt="function"==typeof Uint16Array;var Qt="function"==typeof Uint16Array?Uint16Array:null,Zt=function(r){return Kt&&r instanceof Uint16Array||"[object Uint16Array]"===Jt(r)},$t=Qt;var rn=function(){var r,t;if("function"!=typeof $t)return!1;try{t=new $t(t=[1,3.14,-3.14,65536,65537]),r=Zt(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var tn,nn="function"==typeof Uint16Array?Uint16Array:void 0,en=function(){throw new Error("not implemented")},on={uint16:rn()?nn:en,uint8:qt};(tn=new on.uint16(1))[0]=4660;var un=52===new on.uint8(tn.buffer)[0],an=Tt,fn=!0===un?1:0,cn=new Mt(1),ln=new an(cn.buffer);var vn=function(r){return cn[0]=r,ln[fn]};var yn=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},pn=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var sn=function(r,t){var n,e,o,u;return o=(u=r*r)*u,e=u*yn(u),e+=o*o*pn(u),(o=1-(n=.5*u))+(1-o-n+(u*e-r*t))},bn=-.16666666666666632;var dn=function(r,t){var n,e,o;return n=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===t?r+e*(bn+o*n):r-(o*(.5*t-e*n)-t-e*bn)},mn=Tt,wn=!0===un?0:1,jn=new Mt(1),_n=new mn(jn.buffer);var hn,gn,An=function(r){return jn[0]=r,_n[wn]};!0===un?(hn=1,gn=0):(hn=0,gn=1);var On=Tt,Nn={HIGH:hn,LOW:gn},En=new Mt(1),Sn=new On(En.buffer),Un=Nn.HIGH,Pn=Nn.LOW;var Tn,Fn,In=function(r,t){return Sn[Un]=r,Sn[Pn]=t,En[0]},xn=In,Gn=Math.floor;!0===un?(Tn=1,Fn=0):(Tn=0,Fn=1);var Vn=Tt,Hn={HIGH:Tn,LOW:Fn},Bn=new Mt(1),Ln=new Vn(Bn.buffer),Mn=Hn.HIGH,kn=Hn.LOW;var Wn=function(r,t){return Bn[0]=t,r[0]=Ln[Mn],r[1]=Ln[kn],r};var Cn=function(r,t){return 1===arguments.length?Wn([0,0],r):Wn(r,t)},Rn=Cn,Xn=vn,Yn=xn,zn=[0,0];var Dn=function(r,t){var n,e;return Rn(zn,r),n=zn[0],n&=2147483647,e=Xn(t),Yn(n|=e&=2147483648,zn[1])};var qn=function(r){return Math.abs(r)},Jn=ht,Kn=dt,Qn=qn;var Zn=function(r,t){return Kn(t)||Jn(t)?(r[0]=t,r[1]=0,r):0!==t&&Qn(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)};var $n=function(r,t){return 1===arguments.length?Zn([0,0],r):Zn(r,t)},re=vn;var te=function(r){var t=re(r);return(t=(2146435072&t)>>>20)-1023|0},ne=mt,ee=wt,oe=dt,ue=ht,ie=Dn,ae=$n,fe=te,ce=Cn,le=xn,ve=[0,0],ye=[0,0];var pe=function(r,t){var n,e;return 0===t||0===r||oe(r)||ue(r)?r:(ae(ve,r),t+=ve[1],(t+=fe(r=ve[0]))<-1074?ie(0,r):t>1023?r<0?ee:ne:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,ce(ye,r),n=ye[0],n&=2148532223,e*le(n|=t+1023<<20,ye[1])))};var se=function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n};var be=Gn,de=pe,me=function(r){return se(0,r)},we=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],_e=16777216,he=5.960464477539063e-8,ge=me(20),Ae=me(20),Oe=me(20),Ne=me(20);function Ee(r,t,n,e,o,u,i,a,f){var c,l,v,y,p,s,b,d,m;for(y=u,m=e[n],d=n,p=0;d>0;p++)l=he*m|0,Ne[p]=m-_e*l|0,m=e[d-1]+l,d-=1;if(m=de(m,o),m-=8*be(.125*m),m-=b=0|m,v=0,o>0?(b+=p=Ne[n-1]>>24-o,Ne[n-1]-=p<<24-o,v=Ne[n-1]>>23-o):0===o?v=Ne[n-1]>>23:m>=.5&&(v=2),v>0){for(b+=1,c=0,p=0;p<n;p++)d=Ne[p],0===c?0!==d&&(c=1,Ne[p]=16777216-d):Ne[p]=16777215-d;if(o>0)switch(o){case 1:Ne[n-1]&=8388607;break;case 2:Ne[n-1]&=4194303}2===v&&(m=1-m,0!==c&&(m-=de(1,o)))}if(0===m){for(d=0,p=n-1;p>=u;p--)d|=Ne[p];if(0===d){for(s=1;0===Ne[u-s];s++);for(p=n+1;p<=n+s;p++){for(f[a+p]=we[i+p],l=0,d=0;d<=a;d++)l+=r[d]*f[a+(p-d)];e[p]=l}return Ee(r,t,n+=s,e,o,u,i,a,f)}}if(0===m)for(n-=1,o-=24;0===Ne[n];)n-=1,o-=24;else(m=de(m,-o))>=_e?(l=he*m|0,Ne[n]=m-_e*l|0,o+=24,Ne[n+=1]=l):Ne[n]=0|m;for(l=de(1,o),p=n;p>=0;p--)e[p]=l*Ne[p],l*=he;for(p=n;p>=0;p--){for(l=0,s=0;s<=y&&s<=n-p;s++)l+=je[s]*e[p+s];Oe[n-p]=l}for(l=0,p=n;p>=0;p--)l+=Oe[p];for(t[0]=0===v?l:-l,l=Oe[0]-l,p=1;p<=n;p++)l+=Oe[p];return t[1]=0===v?l:-l,7&b}var Se=function(r,t,n,e){var o,u,i,a,f,c,l;for(4,(u=(n-3)/24|0)<0&&(u=0),a=n-24*(u+1),c=u-(i=e-1),l=i+4,f=0;f<=l;f++)ge[f]=c<0?0:we[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=i;c++)o+=r[c]*ge[i+(f-c)];Ae[f]=o}return 4,Ee(r,t,4,Ae,a,4,u,i,ge)},Ue=Math.round,Pe=vn;var Te=vn,Fe=An,Ie=xn,xe=Se,Ge=function(r,t,n){var e,o,u,i,a;return u=r-1.5707963267341256*(e=Ue(.6366197723675814*r)),i=6077100506506192e-26*e,a=t>>20|0,n[0]=u-i,a-(Pe(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,a-(Pe(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e},Ve=1.5707963267341256,He=6077100506506192e-26,Be=2*He,Le=3*He,Me=4*He,ke=[0,0,0],We=[0,0];var Ce=function(r,t){var n,e,o,u,i,a,f;if((o=2147483647&Te(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ge(r,o,t):o<=1073928572?r>0?(f=r-Ve,t[0]=f-He,t[1]=f-t[0]-He,1):(f=r+Ve,t[0]=f+He,t[1]=f-t[0]+He,-1):r>0?(f=r-2*Ve,t[0]=f-Be,t[1]=f-t[0]-Be,2):(f=r+2*Ve,t[0]=f+Be,t[1]=f-t[0]+Be,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ge(r,o,t):r>0?(f=r-3*Ve,t[0]=f-Le,t[1]=f-t[0]-Le,3):(f=r+3*Ve,t[0]=f+Le,t[1]=f-t[0]+Le,-3):1075388923===o?Ge(r,o,t):r>0?(f=r-4*Ve,t[0]=f-Me,t[1]=f-t[0]-Me,4):(f=r+4*Ve,t[0]=f+Me,t[1]=f-t[0]+Me,-4);if(o<1094263291)return Ge(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=Fe(r),f=Ie(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)ke[i]=0|f,f=16777216*(f-ke[i]);for(ke[2]=f,u=3;0===ke[u-1];)u-=1;return a=xe(ke,We,e,u),r<0?(t[0]=-We[0],t[1]=-We[1],-a):(t[0]=We[0],t[1]=We[1],a)},Re=vn,Xe=sn,Ye=dn,ze=Ce,De=[0,0];var qe=vn,Je=sn,Ke=dn,Qe=Ce,Ze=[0,0];var $e=dt,ro=ht,to=function(r){var t;if(t=Re(r),(t&=2147483647)<=1072243195)return t<1044381696?1:Xe(r,0);if(t>=2146435072)return NaN;switch(3&ze(r,De)){case 0:return Xe(De[0],De[1]);case 1:return-Ye(De[0],De[1]);case 2:return-Xe(De[0],De[1]);default:return Ye(De[0],De[1])}},no=function(r){var t;if(t=qe(r),(t&=2147483647)<=1072243195)return t<1045430272?r:Ke(r,0);if(t>=2146435072)return NaN;switch(3&Qe(r,Ze)){case 0:return Ke(Ze[0],Ze[1]);case 1:return Je(Ze[0],Ze[1]);case 2:return-Ke(Ze[0],Ze[1]);default:return-Je(Ze[0],Ze[1])}},eo=qn,oo=Dn,uo=3.141592653589793;var io=bt,ao=function(r){var t,n;return $e(r)||ro(r)?NaN:0===(t=eo(n=r%2))||1===t?oo(0,n):t<.25?no(uo*n):t<.75?oo(to(uo*(t=.5-t)),n):t<1.25?(n=oo(1,n)-n,no(uo*n)):t<1.75?-oo(to(uo*(t-=1.5)),n):(n-=oo(2,n),no(uo*n))};var fo=function(r){return io(r,ao)};return fo}));
//# sourceMappingURL=bundle.js.map
