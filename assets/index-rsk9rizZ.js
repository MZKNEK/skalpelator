var Qt=Object.defineProperty;var xt=(t,e,n)=>e in t?Qt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var nt=(t,e,n)=>(xt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Y(){}function Ut(t){return t()}function kt(){return Object.create(null)}function Ce(t){t.forEach(Ut)}function Yt(t){return typeof t=="function"}function ct(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ge;function q(t,e){return t===e?!0:(Ge||(Ge=document.createElement("a")),Ge.href=e,t===Ge.href)}function $t(t){return Object.keys(t).length===0}const en=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function a(t,e){t.appendChild(e)}function S(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode&&t.parentNode.removeChild(t)}function Re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function Ie(t){return document.createTextNode(t)}function P(){return Ie(" ")}function Gt(){return Ie("")}function B(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function lt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function tn(t){return Array.from(t.childNodes)}function ve(t,e){t.value=e??""}function fe(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function ae(t,e,n){for(let l=0;l<t.options.length;l+=1){const o=t.options[l];if(o.__value===e){o.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function He(t){const e=t.querySelector(":checked");return e&&e.__value}function Ke(t,e,n){t.classList.toggle(e,!!n)}function nn(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}let Ue;function We(t){Ue=t}function ut(){if(!Ue)throw new Error("Function called outside component initialization");return Ue}function ln(t){ut().$$.on_mount.push(t)}function on(t){ut().$$.on_destroy.push(t)}function sn(){const t=ut();return(e,n,{cancelable:l=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=nn(e,n,{cancelable:l});return o.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const Be=[],de=[];let je=[];const st=[],rn=Promise.resolve();let rt=!1;function cn(){rt||(rt=!0,rn.then(Kt))}function Pe(t){je.push(t)}function Je(t){st.push(t)}const ot=new Set;let Ne=0;function Kt(){if(Ne!==0)return;const t=Ue;do{try{for(;Ne<Be.length;){const e=Be[Ne];Ne++,We(e),un(e.$$)}}catch(e){throw Be.length=0,Ne=0,e}for(We(null),Be.length=0,Ne=0;de.length;)de.pop()();for(let e=0;e<je.length;e+=1){const n=je[e];ot.has(n)||(ot.add(n),n())}je.length=0}while(Be.length);for(;st.length;)st.pop()();rt=!1,ot.clear(),We(t)}function un(t){if(t.fragment!==null){t.update(),Ce(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Pe)}}function an(t){const e=[],n=[];je.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),je=e}const Ve=new Set;let De;function fn(){De={r:0,c:[],p:De}}function dn(){De.r||Ce(De.c),De=De.p}function ze(t,e){t&&t.i&&(Ve.delete(t),t.i(e))}function Xe(t,e,n,l){if(t&&t.o){if(Ve.has(t))return;Ve.add(t),De.c.push(()=>{Ve.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function $(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Qe(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function Vt(t){t&&t.c()}function at(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),Pe(()=>{const i=t.$$.on_mount.map(Ut).filter(Yt);t.$$.on_destroy?t.$$.on_destroy.push(...i):Ce(i),t.$$.on_mount=[]}),o.forEach(Pe)}function ft(t,e){const n=t.$$;n.fragment!==null&&(an(n.after_update),Ce(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function hn(t,e){t.$$.dirty[0]===-1&&(Be.push(t),cn(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function dt(t,e,n,l,o,i,r=null,f=[-1]){const h=Ue;We(t);const s=t.$$={fragment:null,ctx:[],props:i,update:Y,not_equal:o,bound:kt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(h?h.$$.context:[])),callbacks:kt(),dirty:f,skip_bound:!1,root:e.target||h.$$.root};r&&r(s.root);let b=!1;if(s.ctx=n?n(t,e.props||{},(v,y,...w)=>{const k=w.length?w[0]:y;return s.ctx&&o(s.ctx[v],s.ctx[v]=k)&&(!s.skip_bound&&s.bound[v]&&s.bound[v](k),b&&hn(t,v)),y}):[],s.update(),b=!0,Ce(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const v=tn(e.target);s.fragment&&s.fragment.l(v),v.forEach(L)}else s.fragment&&s.fragment.c();e.intro&&ze(t.$$.fragment),at(t,e.target,e.anchor),Kt()}We(h)}class ht{constructor(){nt(this,"$$");nt(this,"$$set")}$destroy(){ft(this,1),this.$destroy=Y}$on(e,n){if(!Yt(n))return Y;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gn);function Et(t,e,n){const l=t.slice();return l[13]=e[n],l}function Pt(t,e,n){const l=t.slice();return l[13]=e[n],l}function Ct(t,e,n){const l=t.slice();return l[13]=e[n],l}function Lt(t){let e,n=t[13]+"",l;return{c(){e=d("option"),l=Ie(n),e.__value=t[13],ve(e,e.__value)},m(o,i){S(o,e,i),a(e,l)},p:Y,d(o){o&&L(e)}}}function St(t){let e,n=t[13]+"",l;return{c(){e=d("option"),l=Ie(n),e.__value=t[13],ve(e,e.__value)},m(o,i){S(o,e,i),a(e,l)},p:Y,d(o){o&&L(e)}}}function At(t){let e,n=t[13]+"",l;return{c(){e=d("option"),l=Ie(n),e.__value=t[13],ve(e,e.__value)},m(o,i){S(o,e,i),a(e,l)},p:Y,d(o){o&&L(e)}}}function mn(t){let e,n,l,o,i,r,f,h,s,b,v,y,w,k,Z,E,F=$(t[4]),C=[];for(let _=0;_<F.length;_+=1)C[_]=Lt(Ct(t,F,_));let R=$(t[5]),p=[];for(let _=0;_<R.length;_+=1)p[_]=St(Pt(t,R,_));let T=$(t[6]),I=[];for(let _=0;_<T.length;_+=1)I[_]=At(Et(t,T,_));return{c(){e=d("label"),n=d("div"),n.textContent="Gwiazdki:",l=P(),o=d("select");for(let _=0;_<C.length;_+=1)C[_].c();i=P(),r=d("label"),f=d("div"),f.textContent="Kolor:",h=P(),s=d("select");for(let _=0;_<p.length;_+=1)p[_].c();b=P(),v=d("label"),y=d("div"),y.textContent="Typ:",w=P(),k=d("select");for(let _=0;_<I.length;_+=1)I[_].c();u(n,"class","stext svelte-1ykdeqd"),u(o,"class","nselect"),t[0]===void 0&&Pe(()=>t[7].call(o)),u(f,"class","stext svelte-1ykdeqd"),u(s,"class","nselect"),t[2]===void 0&&Pe(()=>t[9].call(s)),u(y,"class","stext svelte-1ykdeqd"),u(k,"class","nselect"),t[3]===void 0&&Pe(()=>t[11].call(k))},m(_,M){S(_,e,M),a(e,n),a(e,l),a(e,o);for(let m=0;m<C.length;m+=1)C[m]&&C[m].m(o,null);ae(o,t[0],!0),S(_,i,M),S(_,r,M),a(r,f),a(r,h),a(r,s);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(s,null);ae(s,t[2],!0),S(_,b,M),S(_,v,M),a(v,y),a(v,w),a(v,k);for(let m=0;m<I.length;m+=1)I[m]&&I[m].m(k,null);ae(k,t[3],!0),Z||(E=[B(o,"change",t[7]),B(o,"change",t[8]),B(s,"change",t[9]),B(s,"change",t[10]),B(k,"change",t[11]),B(k,"change",t[12])],Z=!0)},p(_,[M]){if(M&16){F=$(_[4]);let m;for(m=0;m<F.length;m+=1){const W=Ct(_,F,m);C[m]?C[m].p(W,M):(C[m]=Lt(W),C[m].c(),C[m].m(o,null))}for(;m<C.length;m+=1)C[m].d(1);C.length=F.length}if(M&17&&ae(o,_[0]),M&32){R=$(_[5]);let m;for(m=0;m<R.length;m+=1){const W=Pt(_,R,m);p[m]?p[m].p(W,M):(p[m]=St(W),p[m].c(),p[m].m(s,null))}for(;m<p.length;m+=1)p[m].d(1);p.length=R.length}if(M&36&&ae(s,_[2]),M&64){T=$(_[6]);let m;for(m=0;m<T.length;m+=1){const W=Et(_,T,m);I[m]?I[m].p(W,M):(I[m]=At(W),I[m].c(),I[m].m(k,null))}for(;m<I.length;m+=1)I[m].d(1);I.length=T.length}M&72&&ae(k,_[3])},i:Y,o:Y,d(_){_&&(L(e),L(i),L(r),L(b),L(v)),Re(C,_),Re(p,_),Re(I,_),Z=!1,Ce(E)}}}function _n(t,e,n){let l=[0,1,2,3,4,5],o=["SSS","SS","S","A","B","C","D","E","F","G"],i=["Full","Empty","Pig","Snek","Black","White"],{count:r=0}=e,f="C",h="Full",{value:s=`/star/${h}/${f}.png`}=e;function b(){r=He(this),n(0,r),n(4,l)}const v=()=>n(1,s=`/star/${h}/${f}.png`);function y(){f=He(this),n(2,f),n(5,o)}const w=()=>n(1,s=`/star/${h}/${f}.png`);function k(){h=He(this),n(3,h),n(6,i)}const Z=()=>n(1,s=`/star/${h}/${f}.png`);return t.$$set=E=>{"count"in E&&n(0,r=E.count),"value"in E&&n(1,s=E.value)},[r,s,f,h,l,o,i,b,v,y,w,k,Z]}class pn extends ht{constructor(e){super(),dt(this,e,_n,mn,ct,{count:0,value:1})}}function Dt(t,e,n){return t>=e*n?{width:e*n,height:e}:{width:t,height:t/n}}function it(t,e,n,l){return{x:It(t.x,e.width,n.width,l),y:It(t.y,e.height,n.height,l)}}function It(t,e,n,l){let o=e*l/2-n/2;return l<1&&(o=n/2-e*l/2),Math.min(o,Math.max(t,-o))}function Mt(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function vn(t,e,n,l,o,i=!0){const r=i?bn:wn,f={x:r(100,((e.width-n.width/o)/2-t.x/o)/e.width*100),y:r(100,((e.height-n.height/o)/2-t.y/o)/e.height*100),width:r(100,n.width/e.width*100/o),height:r(100,n.height/e.height*100/o)},h=r(e.naturalWidth,f.width*e.naturalWidth/100,!0),s=r(e.naturalHeight,f.height*e.naturalHeight/100,!0),v=e.naturalWidth>=e.naturalHeight*l?{width:Math.round(s*l),height:s}:{width:h,height:Math.round(h/l)},y={...v,x:r(e.naturalWidth-v.width,f.x*e.naturalWidth/100,!0),y:r(e.naturalHeight-v.height,f.y*e.naturalHeight/100,!0)};return{croppedAreaPercentages:f,croppedAreaPixels:y}}function bn(t,e,n=!1){const l=n?Math.round(e):e;return Math.min(t,Math.max(0,l))}function wn(t,e){return e}function Ot(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}const{window:yn}=en;function Zt(t){let e;return{c(){e=d("div"),u(e,"class","cropperArea svelte-12kodkg"),fe(e,"width",t[8].width+"px"),fe(e,"height",t[8].height+"px"),u(e,"data-testid","cropper"),Ke(e,"round",t[3]==="round"),Ke(e,"grid",t[4])},m(n,l){S(n,e,l)},p(n,l){l[0]&256&&fe(e,"width",n[8].width+"px"),l[0]&256&&fe(e,"height",n[8].height+"px"),l[0]&8&&Ke(e,"round",n[3]==="round"),l[0]&16&&Ke(e,"grid",n[4])},d(n){n&&L(e)}}}function kn(t){let e,n,l,o,i,r,f=t[8]&&Zt(t);return{c(){e=d("div"),n=d("img"),o=P(),f&&f.c(),u(n,"class","image svelte-12kodkg"),q(n.src,l=t[2])||u(n,"src",l),u(n,"alt",""),fe(n,"transform","translate("+t[1].x+"px, "+t[1].y+"px) scale("+t[0]+")"),u(n,"crossorigin",t[5]),u(e,"class","container svelte-12kodkg"),u(e,"tabindex",t[6]),u(e,"role","button"),u(e,"data-testid","container")},m(h,s){S(h,e,s),a(e,n),t[21](n),a(e,o),f&&f.m(e,null),t[22](e),i||(r=[B(yn,"resize",t[11]),B(n,"load",t[10]),B(e,"mousedown",lt(t[12])),B(e,"touchstart",lt(t[13])),B(e,"wheel",lt(t[14]))],i=!0)},p(h,s){s[0]&4&&!q(n.src,l=h[2])&&u(n,"src",l),s[0]&3&&fe(n,"transform","translate("+h[1].x+"px, "+h[1].y+"px) scale("+h[0]+")"),s[0]&32&&u(n,"crossorigin",h[5]),h[8]?f?f.p(h,s):(f=Zt(h),f.c(),f.m(e,null)):f&&(f.d(1),f=null),s[0]&64&&u(e,"tabindex",h[6])},i:Y,o:Y,d(h){h&&L(e),t[21](null),f&&f.d(),t[22](null),i=!1,Ce(r)}}}function En(t,e,n){let{image:l}=e,{crop:o={x:0,y:0}}=e,{zoom:i=1}=e,{aspect:r=4/3}=e,{minZoom:f=1}=e,{maxZoom:h=3}=e,{cropSize:s=null}=e,{cropShape:b="rect"}=e,{showGrid:v=!0}=e,{zoomSpeed:y=1}=e,{crossOrigin:w=null}=e,{restrictPosition:k=!0}=e,{tabindex:Z=void 0}=e,E=null,F={width:0,height:0,naturalWidth:0,naturalHeight:0},C=null,R=null,p=null,T={x:0,y:0},I={x:0,y:0},_=0,M=null,m=null;const W=sn();ln(()=>{p&&p.complete&&Le(),C&&(C.addEventListener("gesturestart",X),C.addEventListener("gesturechange",X))}),on(()=>{C&&(C.removeEventListener("gesturestart",X),C.removeEventListener("gesturechange",X)),he()});const X=c=>c.preventDefault(),he=()=>{typeof document<"u"&&(document.removeEventListener("mousemove",ge),document.removeEventListener("mouseup",me),document.removeEventListener("touchmove",te),document.removeEventListener("touchend",me))},Le=()=>{Se(),ce()},se=()=>s?s.width/s.height:r,Se=()=>{p&&(F={width:p.width,height:p.height,naturalWidth:p.naturalWidth,naturalHeight:p.naturalHeight},n(8,E=s||Dt(p.width,p.height,r))),C&&(R=C.getBoundingClientRect())},be=c=>({x:Number(c.clientX),y:Number(c.clientY)}),ee=c=>({x:Number(c.clientX),y:Number(c.clientY)}),re=c=>{document.addEventListener("mousemove",ge),document.addEventListener("mouseup",me),we(be(c))},ge=c=>ye(be(c)),Me=c=>{document.addEventListener("touchmove",te,{passive:!1}),document.addEventListener("touchend",me),c.touches.length===2?ne(c):c.touches.length===1&&we(ee(c.touches[0]))},te=c=>{c.preventDefault(),c.touches.length===2?Ae(c):c.touches.length===1&&ye(ee(c.touches[0]))},we=({x:c,y:D})=>{T={x:c,y:D},I={x:o.x,y:o.y}},ye=({x:c,y:D})=>{M&&window.cancelAnimationFrame(M),M=window.requestAnimationFrame(()=>{if(c===void 0||D===void 0||!E)return;const j=c-T.x,J=D-T.y,oe={x:I.x+j,y:I.y+J};n(1,o=k?it(oe,F,E,i):oe)})},me=()=>{he(),ce()},ne=c=>{const D=ee(c.touches[0]),j=ee(c.touches[1]);_=Mt(D,j),we(Ot(D,j))},Ae=c=>{const D=ee(c.touches[0]),j=ee(c.touches[1]),J=Ot(D,j);ye(J),m&&window.cancelAnimationFrame(m),m=window.requestAnimationFrame(()=>{const oe=Mt(D,j),G=i*(oe/_);pe(G,J),_=oe})},A=c=>{const D=be(c),j=i-c.deltaY*y/200;pe(j,D)},H=({x:c,y:D})=>{if(!R)throw new Error("The Cropper is not mounted");return{x:R.width/2-(c-R.left),y:R.height/2-(D-R.top)}},_e=({x:c,y:D})=>({x:(c+o.x)/i,y:(D+o.y)/i}),pe=(c,D)=>{if(!E)return;const j=H(D),J=_e(j);n(0,i=Math.min(h,Math.max(c,f)));const oe={x:J.x*i-j.x,y:J.y*i-j.y};n(1,o=k?it(oe,F,E,i):oe)},ce=()=>{if(!E||E.width===0)return;const c=k?it(o,F,E,i):o,{croppedAreaPercentages:D,croppedAreaPixels:j}=vn(c,F,E,se(),i,k);W("cropcomplete",{percent:D,pixels:j})};function le(c){de[c?"unshift":"push"](()=>{p=c,n(7,p)})}function ke(c){de[c?"unshift":"push"](()=>{C=c,n(9,C)})}return t.$$set=c=>{"image"in c&&n(2,l=c.image),"crop"in c&&n(1,o=c.crop),"zoom"in c&&n(0,i=c.zoom),"aspect"in c&&n(15,r=c.aspect),"minZoom"in c&&n(16,f=c.minZoom),"maxZoom"in c&&n(17,h=c.maxZoom),"cropSize"in c&&n(18,s=c.cropSize),"cropShape"in c&&n(3,b=c.cropShape),"showGrid"in c&&n(4,v=c.showGrid),"zoomSpeed"in c&&n(19,y=c.zoomSpeed),"crossOrigin"in c&&n(5,w=c.crossOrigin),"restrictPosition"in c&&n(20,k=c.restrictPosition),"tabindex"in c&&n(6,Z=c.tabindex)},t.$$.update=()=>{t.$$.dirty[0]&295040&&p&&n(8,E=s||Dt(p.width,p.height,r)),t.$$.dirty[0]&1&&i&&ce()},[i,o,l,b,v,w,Z,p,E,C,Le,Se,re,Me,A,r,f,h,s,y,k,le,ke]}class Pn extends ht{constructor(e){super(),dt(this,e,En,kn,ct,{image:2,crop:1,zoom:0,aspect:15,minZoom:16,maxZoom:17,cropSize:18,cropShape:3,showGrid:4,zoomSpeed:19,crossOrigin:5,restrictPosition:20,tabindex:6},null,[-1,-1])}}const gt=t=>new Promise((e,n)=>{const l=new Image;l.addEventListener("load",()=>e(l)),l.addEventListener("error",o=>n(o)),l.setAttribute("crossOrigin","anonymous"),l.src=t});async function Cn(t){const e=await gt(t),n=document.createElement("canvas"),l=n.getContext("2d");return l.imageSmoothingEnabled=!1,n.width=e.width,n.height=e.height,l.scale(-1,1),l.drawImage(e,0,0,e.width*-1,e.height),new Promise(o=>{n.toBlob(i=>{o(URL.createObjectURL(i))},"image/png")})}async function Ln(t,e){const n=await gt(t),l=document.createElement("canvas"),o=l.getContext("2d");return o.imageSmoothingEnabled=!1,l.width=e.width,l.height=e.height,o.drawImage(n,e.x,e.y,e.width,e.height,0,0,e.width,e.height),l.width!=448||l.height!=650?Sn(l.toDataURL(),448,650):new Promise(i=>{l.toBlob(r=>{i(URL.createObjectURL(r))},"image/png")})}async function Sn(t,e,n){const l=await gt(t),o=document.createElement("canvas"),i=o.getContext("2d");return i.imageSmoothingEnabled=!1,o.width=e,o.height=n,i.drawImage(l,0,0,o.width,o.height),new Promise(r=>{o.toBlob(f=>{r(URL.createObjectURL(f))},"image/png")})}const An="/pwlogo.png",Dn="/assets/empty-DKEaaJ7g.png",In="/assets/shield-DfTVy6-H.png",Mn="/assets/fire-D3xP8ToV.png",On="/assets/heart-C5E-YPIn.png";function Tt(t,e,n){const l=t.slice();return l[40]=e[n],l[42]=n,l}function Nt(t,e,n){const l=t.slice();return l[43]=e[n],l}function Bt(t,e,n){const l=t.slice();return l[43]=e[n],l}function Rt(t){let e,n=t[43]+"",l;return{c(){e=d("option"),l=Ie(n),e.__value=t[43],ve(e,e.__value)},m(o,i){S(o,e,i),a(e,l)},p:Y,d(o){o&&L(e)}}}function jt(t){let e,n=t[43]+"",l;return{c(){e=d("option"),l=Ie(n),e.__value=t[43],ve(e,e.__value)},m(o,i){S(o,e,i),a(e,l)},p:Y,d(o){o&&L(e)}}}function Ft(t){let e,n,l,o,i,r,f,h;return{c(){e=d("label"),n=d("div"),n.textContent="Link do obrazka:",l=P(),o=d("input"),i=P(),r=d("br"),u(n,"class","ltext svelte-1o5n4yv")},m(s,b){S(s,e,b),a(e,n),a(e,l),a(e,o),ve(o,t[0]),a(e,i),S(s,r,b),f||(h=B(o,"input",t[28]),f=!0)},p(s,b){b[0]&1&&o.value!==s[0]&&ve(o,s[0])},d(s){s&&(L(e),L(r)),f=!1,h()}}}function Zn(t){let e,n;return{c(){e=d("img"),q(e.src,n=t[0])||u(e,"src",n),u(e,"class","scalp svelte-1o5n4yv"),u(e,"alt","Scalpel")},m(l,o){S(l,e,o)},p(l,o){o[0]&1&&!q(e.src,n=l[0])&&u(e,"src",n)},i:Y,o:Y,d(l){l&&L(e)}}}function Tn(t){let e,n,l,o,i,r,f,h,s;function b(w){t[36](w)}function v(w){t[37](w)}let y={image:t[0],showGrid:!1,crop:{x:0,y:0},maxZoom:5,zoomSpeed:.05,cropSize:{width:448,height:650},restrictPosition:!0};return t[14]!==void 0&&(y.zoom=t[14]),t[13]!==void 0&&(y.minZoom=t[13]),r=new Pn({props:y}),de.push(()=>Qe(r,"zoom",b)),de.push(()=>Qe(r,"minZoom",v)),r.$on("cropcomplete",t[21]),{c(){e=d("div"),n=d("img"),o=P(),i=d("div"),Vt(r.$$.fragment),q(n.src,l=t[0])||u(n,"src",l),u(n,"class","wrapper_img svelte-1o5n4yv"),u(n,"alt","Scalpel"),u(n,"style",t[17]),u(e,"class","wrapper svelte-1o5n4yv"),u(i,"class","canva svelte-1o5n4yv")},m(w,k){S(w,e,k),a(e,n),t[35](n),S(w,o,k),S(w,i,k),at(r,i,null),s=!0},p(w,k){(!s||k[0]&1&&!q(n.src,l=w[0]))&&u(n,"src",l);const Z={};k[0]&1&&(Z.image=w[0]),!f&&k[0]&16384&&(f=!0,Z.zoom=w[14],Je(()=>f=!1)),!h&&k[0]&8192&&(h=!0,Z.minZoom=w[13],Je(()=>h=!1)),r.$set(Z)},i(w){s||(ze(r.$$.fragment,w),s=!0)},o(w){Xe(r.$$.fragment,w),s=!1},d(w){w&&(L(e),L(o),L(i)),t[35](null),ft(r)}}}function Nn(t){let e,n,l,o,i,r,f,h,s=t[2]&&qt(),b=t[6]>0&&Ht(t);return{c(){e=d("img"),l=P(),o=d("img"),r=P(),s&&s.c(),f=P(),b&&b.c(),h=Gt(),q(e.src,n="/borders/"+t[8]+".png")||u(e,"src",n),u(e,"class","border svelte-1o5n4yv"),u(e,"alt","Border"),q(o.src,i="/dere/"+t[9]+".png")||u(o,"src",i),u(o,"class","stats svelte-1o5n4yv"),u(o,"alt","Dere")},m(v,y){S(v,e,y),S(v,l,y),S(v,o,y),S(v,r,y),s&&s.m(v,y),S(v,f,y),b&&b.m(v,y),S(v,h,y)},p(v,y){y[0]&33024&&!q(e.src,n="/borders/"+v[8]+".png")&&u(e,"src",n),y[0]&66048&&!q(o.src,i="/dere/"+v[9]+".png")&&u(o,"src",i),v[2]?s||(s=qt(),s.c(),s.m(f.parentNode,f)):s&&(s.d(1),s=null),v[6]>0?b?b.p(v,y):(b=Ht(v),b.c(),b.m(h.parentNode,h)):b&&(b.d(1),b=null)},d(v){v&&(L(e),L(l),L(o),L(r),L(f),L(h)),s&&s.d(v),b&&b.d(v)}}}function Bn(t){let e,n;return{c(){e=d("img"),q(e.src,n=t[1])||u(e,"src",n),u(e,"class","border svelte-1o5n4yv"),u(e,"alt","Border")},m(l,o){S(l,e,o)},p(l,o){o[0]&2&&!q(e.src,n=l[1])&&u(e,"src",n)},d(l){l&&L(e)}}}function qt(t){let e,n,l,o,i,r,f,h;return{c(){e=d("img"),l=P(),o=d("img"),r=P(),f=d("img"),q(e.src,n=In)||u(e,"src",n),u(e,"class","stats svelte-1o5n4yv"),u(e,"alt","Defense"),q(o.src,i=Mn)||u(o,"src",i),u(o,"class","stats svelte-1o5n4yv"),u(o,"alt","Attack"),q(f.src,h=On)||u(f,"src",h),u(f,"class","stats svelte-1o5n4yv"),u(f,"alt","Health")},m(s,b){S(s,e,b),S(s,l,b),S(s,o,b),S(s,r,b),S(s,f,b)},d(s){s&&(L(e),L(l),L(o),L(r),L(f))}}}function Ht(t){let e,n=$({length:t[6]}),l=[];for(let o=0;o<n.length;o+=1)l[o]=Wt(Tt(t,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=Gt()},m(o,i){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,i);S(o,e,i)},p(o,i){if(i[0]&192){n=$({length:o[6]});let r;for(r=0;r<n.length;r+=1){const f=Tt(o,n,r);l[r]?l[r].p(f,i):(l[r]=Wt(f),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&L(e),Re(l,o)}}}function Wt(t){let e,n;return{c(){e=d("img"),q(e.src,n=t[7])||u(e,"src",n),u(e,"class","star svelte-1o5n4yv"),u(e,"alt","Star"),fe(e,"left",239-18*t[6]+36*t[42]+"px")},m(l,o){S(l,e,o)},p(l,o){o[0]&128&&!q(e.src,n=l[7])&&u(e,"src",n),o[0]&64&&fe(e,"left",239-18*l[6]+36*l[42]+"px")},d(l){l&&L(e)}}}function zt(t){let e,n,l,o;return{c(){e=d("div"),n=d("button"),n.textContent="Zapisz",u(n,"type","button"),u(e,"class","editor svelte-1o5n4yv")},m(i,r){S(i,e,r),a(e,n),l||(o=B(n,"click",t[38]),l=!0)},p:Y,d(i){i&&L(e),l=!1,o()}}}function Rn(t){let e,n,l,o,i,r,f,h,s,b,v,y,w,k,Z,E,F,C,R,p,T,I,_,M,m,W,X,he,Le,se,Se,be,ee,re,ge,Me,te,we,ye,me,ne,Ae,A,H,_e,pe,ce,le,ke,c,D,j,J,oe,G,Oe,mt,_t,x,ie,xe,pt,Fe,$e,vt,Ze=$(t[15]),z=[];for(let g=0;g<Ze.length;g+=1)z[g]=Rt(Bt(t,Ze,g));let Te=$(t[16]),U=[];for(let g=0;g<Te.length;g+=1)U[g]=jt(Nt(t,Te,g));function Xt(g){t[24](g)}function Jt(g){t[25](g)}let et={};t[7]!==void 0&&(et.value=t[7]),t[6]!==void 0&&(et.count=t[6]),E=new pn({props:et}),de.push(()=>Qe(E,"value",Xt)),de.push(()=>Qe(E,"count",Jt));let K=!t[4]&&Ft(t);const bt=[Tn,Zn],Ee=[];function wt(g,N){return g[3]?0:1}x=wt(t),ie=Ee[x]=bt[x](t);function yt(g,N){return g[1]?Bn:Nn}let Ye=yt(t),ue=Ye(t),V=t[3]&&zt(t);return{c(){e=d("main"),n=d("div"),n.innerHTML=`<a href="https://sanakan.pl" target="_blank" rel="noreferrer"><img src="${An}" class="logo svelte-1o5n4yv" alt="Logo"/></a>`,l=P(),o=d("div"),i=d("label"),r=d("div"),r.textContent="Ramka:",f=P(),h=d("select");for(let g=0;g<z.length;g+=1)z[g].c();s=P(),b=d("label"),v=d("div"),v.textContent="Dere:",y=P(),w=d("select");for(let g=0;g<U.length;g+=1)U[g].c();k=P(),Z=d("div"),Vt(E.$$.fragment),R=P(),p=d("div"),T=d("label"),I=d("div"),I.textContent="Lokalny plik:",_=d("input"),M=d("br"),m=P(),K&&K.c(),W=P(),X=d("label"),he=d("div"),he.textContent="Link do ramki:",Le=P(),se=d("input"),Se=P(),be=d("br"),ee=P(),re=d("label"),ge=d("div"),ge.textContent="Pokaż statystyki:",Me=P(),te=d("input"),we=P(),ye=d("br"),me=P(),ne=d("label"),Ae=d("div"),Ae.textContent="Odbicie lustrzane:",A=P(),H=d("input"),_e=P(),pe=d("br"),ce=P(),le=d("label"),ke=d("div"),ke.textContent="Tryb edycji:",c=P(),D=d("input"),j=P(),J=d("br"),oe=P(),G=d("div"),Oe=d("img"),_t=P(),ie.c(),xe=P(),ue.c(),pt=P(),V&&V.c(),u(r,"class","stext svelte-1o5n4yv"),t[8]===void 0&&Pe(()=>t[22].call(h)),u(v,"class","stext svelte-1o5n4yv"),u(w,"class","nselect"),t[9]===void 0&&Pe(()=>t[23].call(w)),u(o,"class","selector svelte-1o5n4yv"),u(Z,"class","selector svelte-1o5n4yv"),u(I,"class","ltext svelte-1o5n4yv"),u(_,"type","file"),u(_,"accept",".jpg, .jpeg, .png"),u(he,"class","ltext svelte-1o5n4yv"),u(ge,"class","ltext svelte-1o5n4yv"),u(te,"type","checkbox"),u(Ae,"class","ltext svelte-1o5n4yv"),u(H,"type","checkbox"),u(ne,"class","mirror svelte-1o5n4yv"),u(ke,"class","ltext svelte-1o5n4yv"),u(D,"type","checkbox"),u(le,"class","exp svelte-1o5n4yv"),u(p,"class","selector svelte-1o5n4yv"),q(Oe.src,mt=Dn)||u(Oe,"src",mt),u(Oe,"class","cardboard svelte-1o5n4yv"),u(Oe,"alt","Cardboard"),u(G,"class","looks svelte-1o5n4yv"),fe(G,"border-color",t[11])},m(g,N){S(g,e,N),a(e,n),a(e,l),a(e,o),a(o,i),a(i,r),a(i,f),a(i,h);for(let Q=0;Q<z.length;Q+=1)z[Q]&&z[Q].m(h,null);ae(h,t[8],!0),a(o,s),a(o,b),a(b,v),a(b,y),a(b,w);for(let Q=0;Q<U.length;Q+=1)U[Q]&&U[Q].m(w,null);ae(w,t[9],!0),a(e,k),a(e,Z),at(E,Z,null),a(e,R),a(e,p),a(p,T),a(T,I),a(T,_),t[27](_),a(p,M),a(p,m),K&&K.m(p,null),a(p,W),a(p,X),a(X,he),a(X,Le),a(X,se),ve(se,t[1]),a(X,Se),a(p,be),a(p,ee),a(p,re),a(re,ge),a(re,Me),a(re,te),te.checked=t[2],a(re,we),a(p,ye),a(p,me),a(p,ne),a(ne,Ae),a(ne,A),a(ne,H),H.checked=t[5],a(ne,_e),a(p,pe),a(p,ce),a(p,le),a(le,ke),a(le,c),a(le,D),D.checked=t[3],a(le,j),a(p,J),a(e,oe),a(e,G),a(G,Oe),a(G,_t),Ee[x].m(G,null),a(G,xe),ue.m(G,null),a(e,pt),V&&V.m(e,null),Fe=!0,$e||(vt=[B(h,"change",t[22]),B(w,"change",t[23]),B(_,"change",t[26]),B(se,"input",t[29]),B(te,"change",t[30]),B(H,"change",t[31]),B(H,"change",t[32]),B(D,"change",t[33]),B(D,"change",t[34])],$e=!0)},p(g,N){if(N[0]&32768){Ze=$(g[15]);let O;for(O=0;O<Ze.length;O+=1){const qe=Bt(g,Ze,O);z[O]?z[O].p(qe,N):(z[O]=Rt(qe),z[O].c(),z[O].m(h,null))}for(;O<z.length;O+=1)z[O].d(1);z.length=Ze.length}if(N[0]&33024&&ae(h,g[8]),N[0]&65536){Te=$(g[16]);let O;for(O=0;O<Te.length;O+=1){const qe=Nt(g,Te,O);U[O]?U[O].p(qe,N):(U[O]=jt(qe),U[O].c(),U[O].m(w,null))}for(;O<U.length;O+=1)U[O].d(1);U.length=Te.length}N[0]&66048&&ae(w,g[9]);const Q={};!F&&N[0]&128&&(F=!0,Q.value=g[7],Je(()=>F=!1)),!C&&N[0]&64&&(C=!0,Q.count=g[6],Je(()=>C=!1)),E.$set(Q),g[4]?K&&(K.d(1),K=null):K?K.p(g,N):(K=Ft(g),K.c(),K.m(p,W)),N[0]&2&&se.value!==g[1]&&ve(se,g[1]),N[0]&4&&(te.checked=g[2]),N[0]&32&&(H.checked=g[5]),N[0]&8&&(D.checked=g[3]);let tt=x;x=wt(g),x===tt?Ee[x].p(g,N):(fn(),Xe(Ee[tt],1,1,()=>{Ee[tt]=null}),dn(),ie=Ee[x],ie?ie.p(g,N):(ie=Ee[x]=bt[x](g),ie.c()),ze(ie,1),ie.m(G,xe)),Ye===(Ye=yt(g))&&ue?ue.p(g,N):(ue.d(1),ue=Ye(g),ue&&(ue.c(),ue.m(G,null))),(!Fe||N[0]&2048)&&fe(G,"border-color",g[11]),g[3]?V?V.p(g,N):(V=zt(g),V.c(),V.m(e,null)):V&&(V.d(1),V=null)},i(g){Fe||(ze(E.$$.fragment,g),ze(ie),Fe=!0)},o(g){Xe(E.$$.fragment,g),Xe(ie),Fe=!1},d(g){g&&L(e),Re(z,g),Re(U,g),ft(E),t[27](null),K&&K.d(),Ee[x].d(),ue.d(),V&&V.d(),$e=!1,Ce(vt)}}}function jn(t,e,n){let l=["SSS","SS","S","A","B","C","D","E"],o=["Bodere","Dandere","Deredere","Kamidere","Kuudere","Mayadere","Tsundere","Yandere","Raito","Yami","Yato"],i="https://sanakan.pl/i/ss/fga432a.png",r="",f=!1,h=!1,s=!1,b=!1,v=0,y,w="C",k="Kamidere",Z,E,F,C,R,p,T;async function I(){try{const A=await Ln(i,Z),H=document.createElement("a");H.href=A,H.download="skalpelek.png",H.click()}catch{alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.")}}async function _(){try{const A=await Cn(i);n(0,i=A),n(4,s=!0)}catch{alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.")}}function M(A){let H=A.target.files[0],_e=new FileReader;_e.onload=pe=>{n(0,i=pe.target.result),n(4,s=!0)},_e.readAsDataURL(H),n(3,h=!1),n(13,p=1),n(14,T=1)}function m(A){Z=A.detail.pixels;const{x:H,y:_e,width:pe}=A.detail.pixels,ce=448/pe,le=-_e*ce,ke=-H*ce-448/2,c=E.naturalWidth*ce;n(11,C=Z.width<448||Z.height<650?"#ff6242":"#242424");const D=448/650,j=E.naturalWidth/E.naturalHeight,J=D/j;n(13,p=J>1?J:1),n(14,T=T<p?p:T),n(10,E.style=`margin: ${le}px 0 0 ${ke}px; width: ${c}px;`,E)}function W(){w=He(this),n(8,w),n(15,l)}function X(){k=He(this),n(9,k),n(16,o)}function he(A){y=A,n(7,y)}function Le(A){v=A,n(6,v)}const se=A=>M(A);function Se(A){de[A?"unshift":"push"](()=>{R=A,n(12,R)})}function be(){i=this.value,n(0,i)}function ee(){r=this.value,n(1,r)}function re(){f=this.checked,n(2,f)}function ge(){b=this.checked,n(5,b)}const Me=()=>_();function te(){h=this.checked,n(3,h)}const we=()=>n(11,C="#242424");function ye(A){de[A?"unshift":"push"](()=>{E=A,n(10,E)})}function me(A){T=A,n(14,T)}function ne(A){p=A,n(13,p)}return[i,r,f,h,s,b,v,y,w,k,E,C,R,p,T,l,o,F,I,_,M,m,W,X,he,Le,se,Se,be,ee,re,ge,Me,te,we,ye,me,ne,async()=>{I()}]}class Fn extends ht{constructor(e){super(),dt(this,e,jn,Rn,ct,{},null,[-1,-1])}}new Fn({target:document.getElementById("app")});
