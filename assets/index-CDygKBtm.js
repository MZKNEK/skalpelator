var Kt=Object.defineProperty;var Vt=(t,e,n)=>e in t?Kt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var et=(t,e,n)=>(Vt(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Q(){}function Ht(t){return t()}function vt(){return Object.create(null)}function Ee(t){t.forEach(Ht)}function Wt(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Ue;function H(t,e){return t===e?!0:(Ue||(Ue=document.createElement("a")),Ue.href=e,t===Ue.href)}function Xt(t){return Object.keys(t).length===0}const Jt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function a(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function Be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function Ae(t){return document.createTextNode(t)}function P(){return Ae(" ")}function zt(){return Ae("")}function B(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function u(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Qt(t){return Array.from(t.childNodes)}function pe(t,e){t.value=e??""}function ae(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function ue(t,e,n){for(let l=0;l<t.options.length;l+=1){const o=t.options[l];if(o.__value===e){o.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function qe(t){const e=t.querySelector(":checked");return e&&e.__value}function Ye(t,e,n){t.classList.toggle(e,!!n)}function $t(t,e,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:l})}let We;function He(t){We=t}function rt(){if(!We)throw new Error("Function called outside component initialization");return We}function en(t){rt().$$.on_mount.push(t)}function tn(t){rt().$$.on_destroy.push(t)}function nn(){const t=rt();return(e,n,{cancelable:l=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=$t(e,n,{cancelable:l});return o.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}const Te=[],fe=[];let Re=[];const ot=[],ln=Promise.resolve();let it=!1;function on(){it||(it=!0,ln.then(xt))}function Pe(t){Re.push(t)}function Ve(t){ot.push(t)}const nt=new Set;let Ze=0;function xt(){if(Ze!==0)return;const t=We;do{try{for(;Ze<Te.length;){const e=Te[Ze];Ze++,He(e),sn(e.$$)}}catch(e){throw Te.length=0,Ze=0,e}for(He(null),Te.length=0,Ze=0;fe.length;)fe.pop()();for(let e=0;e<Re.length;e+=1){const n=Re[e];nt.has(n)||(nt.add(n),n())}Re.length=0}while(Te.length);for(;ot.length;)ot.pop()();it=!1,nt.clear(),He(t)}function sn(t){if(t.fragment!==null){t.update(),Ee(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Pe)}}function rn(t){const e=[],n=[];Re.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),Re=e}const Ge=new Set;let Se;function cn(){Se={r:0,c:[],p:Se}}function un(){Se.r||Ee(Se.c),Se=Se.p}function Ne(t,e){t&&t.i&&(Ge.delete(t),t.i(e))}function Ke(t,e,n,l){if(t&&t.o){if(Ge.has(t))return;Ge.add(t),Se.c.push(()=>{Ge.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function J(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Xe(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function Ut(t){t&&t.c()}function ct(t,e,n){const{fragment:l,after_update:o}=t.$$;l&&l.m(e,n),Pe(()=>{const i=t.$$.on_mount.map(Ht).filter(Wt);t.$$.on_destroy?t.$$.on_destroy.push(...i):Ee(i),t.$$.on_mount=[]}),o.forEach(Pe)}function ut(t,e){const n=t.$$;n.fragment!==null&&(rn(n.after_update),Ee(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function an(t,e){t.$$.dirty[0]===-1&&(Te.push(t),on(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function at(t,e,n,l,o,i,r=null,f=[-1]){const d=We;He(t);const s=t.$$={fragment:null,ctx:[],props:i,update:Q,not_equal:o,bound:vt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:vt(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};r&&r(s.root);let v=!1;if(s.ctx=n?n(t,e.props||{},(b,k,...D)=>{const w=D.length?D[0]:k;return s.ctx&&o(s.ctx[b],s.ctx[b]=w)&&(!s.skip_bound&&s.bound[b]&&s.bound[b](w),v&&an(t,b)),k}):[],s.update(),v=!0,Ee(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const b=Qt(e.target);s.fragment&&s.fragment.l(b),b.forEach(C)}else s.fragment&&s.fragment.c();e.intro&&Ne(t.$$.fragment),ct(t,e.target,e.anchor),xt()}He(d)}class ft{constructor(){et(this,"$$");et(this,"$$set")}$destroy(){ut(this,1),this.$destroy=Q}$on(e,n){if(!Wt(n))return Q;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Xt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const fn="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(fn);function wt(t,e,n){const l=t.slice();return l[13]=e[n],l}function yt(t,e,n){const l=t.slice();return l[13]=e[n],l}function kt(t,e,n){const l=t.slice();return l[13]=e[n],l}function Pt(t){let e,n=t[13]+"",l;return{c(){e=h("option"),l=Ae(n),e.__value=t[13],pe(e,e.__value)},m(o,i){L(o,e,i),a(e,l)},p:Q,d(o){o&&C(e)}}}function Et(t){let e,n=t[13]+"",l;return{c(){e=h("option"),l=Ae(n),e.__value=t[13],pe(e,e.__value)},m(o,i){L(o,e,i),a(e,l)},p:Q,d(o){o&&C(e)}}}function Ct(t){let e,n=t[13]+"",l;return{c(){e=h("option"),l=Ae(n),e.__value=t[13],pe(e,e.__value)},m(o,i){L(o,e,i),a(e,l)},p:Q,d(o){o&&C(e)}}}function hn(t){let e,n,l,o,i,r,f,d,s,v,b,k,D,w,M,y,F=J(t[4]),E=[];for(let _=0;_<F.length;_+=1)E[_]=Pt(kt(t,F,_));let R=J(t[5]),p=[];for(let _=0;_<R.length;_+=1)p[_]=Et(yt(t,R,_));let T=J(t[6]),I=[];for(let _=0;_<T.length;_+=1)I[_]=Ct(wt(t,T,_));return{c(){e=h("label"),n=h("div"),n.textContent="Gwiazdki:",l=P(),o=h("select");for(let _=0;_<E.length;_+=1)E[_].c();i=P(),r=h("label"),f=h("div"),f.textContent="Kolor:",d=P(),s=h("select");for(let _=0;_<p.length;_+=1)p[_].c();v=P(),b=h("label"),k=h("div"),k.textContent="Typ:",D=P(),w=h("select");for(let _=0;_<I.length;_+=1)I[_].c();u(n,"class","stext svelte-1ykdeqd"),u(o,"class","nselect"),t[0]===void 0&&Pe(()=>t[7].call(o)),u(f,"class","stext svelte-1ykdeqd"),u(s,"class","nselect"),t[2]===void 0&&Pe(()=>t[9].call(s)),u(k,"class","stext svelte-1ykdeqd"),u(w,"class","nselect"),t[3]===void 0&&Pe(()=>t[11].call(w))},m(_,O){L(_,e,O),a(e,n),a(e,l),a(e,o);for(let g=0;g<E.length;g+=1)E[g]&&E[g].m(o,null);ue(o,t[0],!0),L(_,i,O),L(_,r,O),a(r,f),a(r,d),a(r,s);for(let g=0;g<p.length;g+=1)p[g]&&p[g].m(s,null);ue(s,t[2],!0),L(_,v,O),L(_,b,O),a(b,k),a(b,D),a(b,w);for(let g=0;g<I.length;g+=1)I[g]&&I[g].m(w,null);ue(w,t[3],!0),M||(y=[B(o,"change",t[7]),B(o,"change",t[8]),B(s,"change",t[9]),B(s,"change",t[10]),B(w,"change",t[11]),B(w,"change",t[12])],M=!0)},p(_,[O]){if(O&16){F=J(_[4]);let g;for(g=0;g<F.length;g+=1){const z=kt(_,F,g);E[g]?E[g].p(z,O):(E[g]=Pt(z),E[g].c(),E[g].m(o,null))}for(;g<E.length;g+=1)E[g].d(1);E.length=F.length}if(O&17&&ue(o,_[0]),O&32){R=J(_[5]);let g;for(g=0;g<R.length;g+=1){const z=yt(_,R,g);p[g]?p[g].p(z,O):(p[g]=Et(z),p[g].c(),p[g].m(s,null))}for(;g<p.length;g+=1)p[g].d(1);p.length=R.length}if(O&36&&ue(s,_[2]),O&64){T=J(_[6]);let g;for(g=0;g<T.length;g+=1){const z=wt(_,T,g);I[g]?I[g].p(z,O):(I[g]=Ct(z),I[g].c(),I[g].m(w,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=T.length}O&72&&ue(w,_[3])},i:Q,o:Q,d(_){_&&(C(e),C(i),C(r),C(v),C(b)),Be(E,_),Be(p,_),Be(I,_),M=!1,Ee(y)}}}function dn(t,e,n){let l=[0,1,2,3,4,5],o=["SSS","SS","S","A","B","C","D","E","F","G"],i=["Full","Empty","Pig","Snek","Black","White"],{count:r=0}=e,f="C",d="Full",{value:s=`/star/${d}/${f}.png`}=e;function v(){r=qe(this),n(0,r),n(4,l)}const b=()=>n(1,s=`/star/${d}/${f}.png`);function k(){f=qe(this),n(2,f),n(5,o)}const D=()=>n(1,s=`/star/${d}/${f}.png`);function w(){d=qe(this),n(3,d),n(6,i)}const M=()=>n(1,s=`/star/${d}/${f}.png`);return t.$$set=y=>{"count"in y&&n(0,r=y.count),"value"in y&&n(1,s=y.value)},[r,s,f,d,l,o,i,v,b,k,D,w,M]}class gn extends ft{constructor(e){super(),at(this,e,dn,hn,st,{count:0,value:1})}}function Lt(t,e,n){return t>=e*n?{width:e*n,height:e}:{width:t,height:t/n}}function lt(t,e,n,l){return{x:St(t.x,e.width,n.width,l),y:St(t.y,e.height,n.height,l)}}function St(t,e,n,l){let o=e*l/2-n/2;return l<1&&(o=n/2-e*l/2),Math.min(o,Math.max(t,-o))}function At(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function mn(t,e,n,l,o,i=!0){const r=i?_n:pn,f={x:r(100,((e.width-n.width/o)/2-t.x/o)/e.width*100),y:r(100,((e.height-n.height/o)/2-t.y/o)/e.height*100),width:r(100,n.width/e.width*100/o),height:r(100,n.height/e.height*100/o)},d=r(e.naturalWidth,f.width*e.naturalWidth/100,!0),s=r(e.naturalHeight,f.height*e.naturalHeight/100,!0),b=e.naturalWidth>=e.naturalHeight*l?{width:Math.round(s*l),height:s}:{width:d,height:Math.round(d/l)},k={...b,x:r(e.naturalWidth-b.width,f.x*e.naturalWidth/100,!0),y:r(e.naturalHeight-b.height,f.y*e.naturalHeight/100,!0)};return{croppedAreaPercentages:f,croppedAreaPixels:k}}function _n(t,e,n=!1){const l=n?Math.round(e):e;return Math.min(t,Math.max(0,l))}function pn(t,e){return e}function Dt(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}const{window:bn}=Jt;function It(t){let e;return{c(){e=h("div"),u(e,"class","cropperArea svelte-12kodkg"),ae(e,"width",t[8].width+"px"),ae(e,"height",t[8].height+"px"),u(e,"data-testid","cropper"),Ye(e,"round",t[3]==="round"),Ye(e,"grid",t[4])},m(n,l){L(n,e,l)},p(n,l){l[0]&256&&ae(e,"width",n[8].width+"px"),l[0]&256&&ae(e,"height",n[8].height+"px"),l[0]&8&&Ye(e,"round",n[3]==="round"),l[0]&16&&Ye(e,"grid",n[4])},d(n){n&&C(e)}}}function vn(t){let e,n,l,o,i,r,f=t[8]&&It(t);return{c(){e=h("div"),n=h("img"),o=P(),f&&f.c(),u(n,"class","image svelte-12kodkg"),H(n.src,l=t[2])||u(n,"src",l),u(n,"alt",""),ae(n,"transform","translate("+t[1].x+"px, "+t[1].y+"px) scale("+t[0]+")"),u(n,"crossorigin",t[5]),u(e,"class","container svelte-12kodkg"),u(e,"tabindex",t[6]),u(e,"role","button"),u(e,"data-testid","container")},m(d,s){L(d,e,s),a(e,n),t[21](n),a(e,o),f&&f.m(e,null),t[22](e),i||(r=[B(bn,"resize",t[11]),B(n,"load",t[10]),B(e,"mousedown",tt(t[12])),B(e,"touchstart",tt(t[13])),B(e,"wheel",tt(t[14]))],i=!0)},p(d,s){s[0]&4&&!H(n.src,l=d[2])&&u(n,"src",l),s[0]&3&&ae(n,"transform","translate("+d[1].x+"px, "+d[1].y+"px) scale("+d[0]+")"),s[0]&32&&u(n,"crossorigin",d[5]),d[8]?f?f.p(d,s):(f=It(d),f.c(),f.m(e,null)):f&&(f.d(1),f=null),s[0]&64&&u(e,"tabindex",d[6])},i:Q,o:Q,d(d){d&&C(e),t[21](null),f&&f.d(),t[22](null),i=!1,Ee(r)}}}function wn(t,e,n){let{image:l}=e,{crop:o={x:0,y:0}}=e,{zoom:i=1}=e,{aspect:r=4/3}=e,{minZoom:f=1}=e,{maxZoom:d=3}=e,{cropSize:s=null}=e,{cropShape:v="rect"}=e,{showGrid:b=!0}=e,{zoomSpeed:k=1}=e,{crossOrigin:D=null}=e,{restrictPosition:w=!0}=e,{tabindex:M=void 0}=e,y=null,F={width:0,height:0,naturalWidth:0,naturalHeight:0},E=null,R=null,p=null,T={x:0,y:0},I={x:0,y:0},_=0,O=null,g=null;const z=nn();en(()=>{p&&p.complete&&Ce(),E&&(E.addEventListener("gesturestart",K),E.addEventListener("gesturechange",K))}),tn(()=>{E&&(E.removeEventListener("gesturestart",K),E.removeEventListener("gesturechange",K)),he()});const K=c=>c.preventDefault(),he=()=>{typeof document<"u"&&(document.removeEventListener("mousemove",de),document.removeEventListener("mouseup",ge),document.removeEventListener("touchmove",ee),document.removeEventListener("touchend",ge))},Ce=()=>{Le(),se()},oe=()=>s?s.width/s.height:r,Le=()=>{p&&(F={width:p.width,height:p.height,naturalWidth:p.naturalWidth,naturalHeight:p.naturalHeight},n(8,y=s||Lt(p.width,p.height,r))),E&&(R=E.getBoundingClientRect())},be=c=>({x:Number(c.clientX),y:Number(c.clientY)}),$=c=>({x:Number(c.clientX),y:Number(c.clientY)}),ie=c=>{document.addEventListener("mousemove",de),document.addEventListener("mouseup",ge),ve(be(c))},de=c=>we(be(c)),De=c=>{document.addEventListener("touchmove",ee,{passive:!1}),document.addEventListener("touchend",ge),c.touches.length===2?te(c):c.touches.length===1&&ve($(c.touches[0]))},ee=c=>{c.preventDefault(),c.touches.length===2?ye(c):c.touches.length===1&&we($(c.touches[0]))},ve=({x:c,y:A})=>{T={x:c,y:A},I={x:o.x,y:o.y}},we=({x:c,y:A})=>{O&&window.cancelAnimationFrame(O),O=window.requestAnimationFrame(()=>{if(c===void 0||A===void 0||!y)return;const j=c-T.x,V=A-T.y,le={x:I.x+j,y:I.y+V};n(1,o=w?lt(le,F,y,i):le)})},ge=()=>{he(),se()},te=c=>{const A=$(c.touches[0]),j=$(c.touches[1]);_=At(A,j),ve(Dt(A,j))},ye=c=>{const A=$(c.touches[0]),j=$(c.touches[1]),V=Dt(A,j);we(V),g&&window.cancelAnimationFrame(g),g=window.requestAnimationFrame(()=>{const le=At(A,j),Y=i*(le/_);_e(Y,V),_=le})},S=c=>{const A=be(c),j=i-c.deltaY*k/200;_e(j,A)},W=({x:c,y:A})=>{if(!R)throw new Error("The Cropper is not mounted");return{x:R.width/2-(c-R.left),y:R.height/2-(A-R.top)}},me=({x:c,y:A})=>({x:(c+o.x)/i,y:(A+o.y)/i}),_e=(c,A)=>{if(!y)return;const j=W(A),V=me(j);n(0,i=Math.min(d,Math.max(c,f)));const le={x:V.x*i-j.x,y:V.y*i-j.y};n(1,o=w?lt(le,F,y,i):le)},se=()=>{if(!y||y.width===0)return;const c=w?lt(o,F,y,i):o,{croppedAreaPercentages:A,croppedAreaPixels:j}=mn(c,F,y,oe(),i,w);z("cropcomplete",{percent:A,pixels:j})};function ne(c){fe[c?"unshift":"push"](()=>{p=c,n(7,p)})}function ke(c){fe[c?"unshift":"push"](()=>{E=c,n(9,E)})}return t.$$set=c=>{"image"in c&&n(2,l=c.image),"crop"in c&&n(1,o=c.crop),"zoom"in c&&n(0,i=c.zoom),"aspect"in c&&n(15,r=c.aspect),"minZoom"in c&&n(16,f=c.minZoom),"maxZoom"in c&&n(17,d=c.maxZoom),"cropSize"in c&&n(18,s=c.cropSize),"cropShape"in c&&n(3,v=c.cropShape),"showGrid"in c&&n(4,b=c.showGrid),"zoomSpeed"in c&&n(19,k=c.zoomSpeed),"crossOrigin"in c&&n(5,D=c.crossOrigin),"restrictPosition"in c&&n(20,w=c.restrictPosition),"tabindex"in c&&n(6,M=c.tabindex)},t.$$.update=()=>{t.$$.dirty[0]&295040&&p&&n(8,y=s||Lt(p.width,p.height,r)),t.$$.dirty[0]&1&&i&&se()},[i,o,l,v,b,D,M,p,y,E,Ce,Le,ie,De,S,r,f,d,s,k,w,ne,ke]}class yn extends ft{constructor(e){super(),at(this,e,wn,vn,st,{image:2,crop:1,zoom:0,aspect:15,minZoom:16,maxZoom:17,cropSize:18,cropShape:3,showGrid:4,zoomSpeed:19,crossOrigin:5,restrictPosition:20,tabindex:6},null,[-1,-1])}}const ht=t=>new Promise((e,n)=>{const l=new Image;l.addEventListener("load",()=>e(l)),l.addEventListener("error",o=>n(o)),l.setAttribute("crossOrigin","anonymous"),l.src=t});async function kn(t){const e=await ht(t),n=document.createElement("canvas"),l=n.getContext("2d");return n.width=e.width,n.height=e.height,l.scale(-1,1),l.drawImage(e,0,0,e.width*-1,e.height),new Promise(o=>{n.toBlob(i=>{o(URL.createObjectURL(i))},"image/png")})}async function Pn(t,e){const n=await ht(t),l=document.createElement("canvas"),o=l.getContext("2d");return l.width=e.width,l.height=e.height,o.drawImage(n,e.x,e.y,e.width,e.height,0,0,e.width,e.height),l.width!=448||l.height!=650?En(l.toDataURL(),448,650):new Promise(i=>{l.toBlob(r=>{i(URL.createObjectURL(r))},"image/png")})}async function En(t,e,n){const l=await ht(t),o=document.createElement("canvas"),i=o.getContext("2d");return o.width=e,o.height=n,i.drawImage(l,0,0,o.width,o.height),new Promise(r=>{o.toBlob(f=>{r(URL.createObjectURL(f))},"image/png")})}const Cn="/pwlogo.png",Ln="/assets/empty-DKEaaJ7g.png",Sn="/assets/shield-DfTVy6-H.png",An="/assets/fire-D3xP8ToV.png",Dn="/assets/heart-C5E-YPIn.png";function Mt(t,e,n){const l=t.slice();return l[40]=e[n],l[42]=n,l}function Ot(t,e,n){const l=t.slice();return l[43]=e[n],l}function Zt(t,e,n){const l=t.slice();return l[43]=e[n],l}function Tt(t){let e,n=t[43]+"",l;return{c(){e=h("option"),l=Ae(n),e.__value=t[43],pe(e,e.__value)},m(o,i){L(o,e,i),a(e,l)},p:Q,d(o){o&&C(e)}}}function Nt(t){let e,n=t[43]+"",l;return{c(){e=h("option"),l=Ae(n),e.__value=t[43],pe(e,e.__value)},m(o,i){L(o,e,i),a(e,l)},p:Q,d(o){o&&C(e)}}}function Bt(t){let e,n,l,o,i,r,f,d;return{c(){e=h("label"),n=h("div"),n.textContent="Link do obrazka:",l=P(),o=h("input"),i=P(),r=h("br"),u(n,"class","ltext svelte-8x5hg4")},m(s,v){L(s,e,v),a(e,n),a(e,l),a(e,o),pe(o,t[0]),a(e,i),L(s,r,v),f||(d=B(o,"input",t[28]),f=!0)},p(s,v){v[0]&1&&o.value!==s[0]&&pe(o,s[0])},d(s){s&&(C(e),C(r)),f=!1,d()}}}function In(t){let e,n;return{c(){e=h("img"),H(e.src,n=t[0])||u(e,"src",n),u(e,"class","scalp svelte-8x5hg4"),u(e,"alt","Scalpel")},m(l,o){L(l,e,o)},p(l,o){o[0]&1&&!H(e.src,n=l[0])&&u(e,"src",n)},d(l){l&&C(e)}}}function Mn(t){let e,n,l;return{c(){e=h("div"),n=h("img"),H(n.src,l=t[0])||u(n,"src",l),u(n,"class","wrapper_img svelte-8x5hg4"),u(n,"alt","Scalpel"),u(n,"style",t[17]),u(e,"class","wrapper svelte-8x5hg4")},m(o,i){L(o,e,i),a(e,n),t[35](n)},p(o,i){i[0]&1&&!H(n.src,l=o[0])&&u(n,"src",l)},d(o){o&&C(e),t[35](null)}}}function On(t){let e,n,l,o,i,r,f,d,s=t[2]&&Rt(),v=t[6]>0&&jt(t);return{c(){e=h("img"),l=P(),o=h("img"),r=P(),s&&s.c(),f=P(),v&&v.c(),d=zt(),H(e.src,n="/borders/"+t[8]+".png")||u(e,"src",n),u(e,"class","border svelte-8x5hg4"),u(e,"alt","Border"),H(o.src,i="/dere/"+t[9]+".png")||u(o,"src",i),u(o,"class","stats svelte-8x5hg4"),u(o,"alt","Dere")},m(b,k){L(b,e,k),L(b,l,k),L(b,o,k),L(b,r,k),s&&s.m(b,k),L(b,f,k),v&&v.m(b,k),L(b,d,k)},p(b,k){k[0]&33024&&!H(e.src,n="/borders/"+b[8]+".png")&&u(e,"src",n),k[0]&66048&&!H(o.src,i="/dere/"+b[9]+".png")&&u(o,"src",i),b[2]?s||(s=Rt(),s.c(),s.m(f.parentNode,f)):s&&(s.d(1),s=null),b[6]>0?v?v.p(b,k):(v=jt(b),v.c(),v.m(d.parentNode,d)):v&&(v.d(1),v=null)},d(b){b&&(C(e),C(l),C(o),C(r),C(f),C(d)),s&&s.d(b),v&&v.d(b)}}}function Zn(t){let e,n;return{c(){e=h("img"),H(e.src,n=t[1])||u(e,"src",n),u(e,"class","border svelte-8x5hg4"),u(e,"alt","Border")},m(l,o){L(l,e,o)},p(l,o){o[0]&2&&!H(e.src,n=l[1])&&u(e,"src",n)},d(l){l&&C(e)}}}function Rt(t){let e,n,l,o,i,r,f,d;return{c(){e=h("img"),l=P(),o=h("img"),r=P(),f=h("img"),H(e.src,n=Sn)||u(e,"src",n),u(e,"class","stats svelte-8x5hg4"),u(e,"alt","Defense"),H(o.src,i=An)||u(o,"src",i),u(o,"class","stats svelte-8x5hg4"),u(o,"alt","Attack"),H(f.src,d=Dn)||u(f,"src",d),u(f,"class","stats svelte-8x5hg4"),u(f,"alt","Health")},m(s,v){L(s,e,v),L(s,l,v),L(s,o,v),L(s,r,v),L(s,f,v)},d(s){s&&(C(e),C(l),C(o),C(r),C(f))}}}function jt(t){let e,n=J({length:t[6]}),l=[];for(let o=0;o<n.length;o+=1)l[o]=Ft(Mt(t,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=zt()},m(o,i){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,i);L(o,e,i)},p(o,i){if(i[0]&192){n=J({length:o[6]});let r;for(r=0;r<n.length;r+=1){const f=Mt(o,n,r);l[r]?l[r].p(f,i):(l[r]=Ft(f),l[r].c(),l[r].m(e.parentNode,e))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&C(e),Be(l,o)}}}function Ft(t){let e,n;return{c(){e=h("img"),H(e.src,n=t[7])||u(e,"src",n),u(e,"class","star svelte-8x5hg4"),u(e,"alt","Star"),ae(e,"left",239-18*t[6]+36*t[42]+"px")},m(l,o){L(l,e,o)},p(l,o){o[0]&128&&!H(e.src,n=l[7])&&u(e,"src",n),o[0]&64&&ae(e,"left",239-18*l[6]+36*l[42]+"px")},d(l){l&&C(e)}}}function qt(t){let e,n,l,o,i,r,f,d,s,v;function b(w){t[37](w)}function k(w){t[38](w)}let D={image:t[0],crop:{x:0,y:0},maxZoom:5,zoomSpeed:.05,cropSize:{width:448,height:650},restrictPosition:!0};return t[14]!==void 0&&(D.zoom=t[14]),t[13]!==void 0&&(D.minZoom=t[13]),i=new yn({props:D}),fe.push(()=>Xe(i,"zoom",b)),fe.push(()=>Xe(i,"minZoom",k)),i.$on("cropcomplete",t[21]),{c(){e=h("div"),n=h("button"),n.textContent="Zapisz",l=P(),o=h("div"),Ut(i.$$.fragment),u(n,"type","button"),u(e,"class","editor svelte-8x5hg4"),u(o,"class","canva svelte-8x5hg4")},m(w,M){L(w,e,M),a(e,n),L(w,l,M),L(w,o,M),ct(i,o,null),d=!0,s||(v=B(n,"click",t[36]),s=!0)},p(w,M){const y={};M[0]&1&&(y.image=w[0]),!r&&M[0]&16384&&(r=!0,y.zoom=w[14],Ve(()=>r=!1)),!f&&M[0]&8192&&(f=!0,y.minZoom=w[13],Ve(()=>f=!1)),i.$set(y)},i(w){d||(Ne(i.$$.fragment,w),d=!0)},o(w){Ke(i.$$.fragment,w),d=!1},d(w){w&&(C(e),C(l),C(o)),ut(i),s=!1,v()}}}function Tn(t){let e,n,l,o,i,r,f,d,s,v,b,k,D,w,M,y,F,E,R,p,T,I,_,O,g,z,K,he,Ce,oe,Le,be,$,ie,de,De,ee,ve,we,ge,te,ye,S,W,me,_e,se,ne,ke,c,A,j,V,le,Y,Ie,dt,gt,Je,mt,je,Qe,_t,Me=J(t[15]),x=[];for(let m=0;m<Me.length;m+=1)x[m]=Tt(Zt(t,Me,m));let Oe=J(t[16]),U=[];for(let m=0;m<Oe.length;m+=1)U[m]=Nt(Ot(t,Oe,m));function Yt(m){t[24](m)}function Gt(m){t[25](m)}let $e={};t[7]!==void 0&&($e.value=t[7]),t[6]!==void 0&&($e.count=t[6]),y=new gn({props:$e}),fe.push(()=>Xe(y,"value",Yt)),fe.push(()=>Xe(y,"count",Gt));let G=!t[4]&&Bt(t);function pt(m,N){return m[3]?Mn:In}let ze=pt(t),re=ze(t);function bt(m,N){return m[1]?Zn:On}let xe=bt(t),ce=xe(t),q=t[3]&&qt(t);return{c(){e=h("main"),n=h("div"),n.innerHTML=`<a href="https://sanakan.pl" target="_blank" rel="noreferrer"><img src="${Cn}" class="logo svelte-8x5hg4" alt="Logo"/></a>`,l=P(),o=h("div"),i=h("label"),r=h("div"),r.textContent="Ramka:",f=P(),d=h("select");for(let m=0;m<x.length;m+=1)x[m].c();s=P(),v=h("label"),b=h("div"),b.textContent="Dere:",k=P(),D=h("select");for(let m=0;m<U.length;m+=1)U[m].c();w=P(),M=h("div"),Ut(y.$$.fragment),R=P(),p=h("div"),T=h("label"),I=h("div"),I.textContent="Lokalny plik:",_=h("input"),O=h("br"),g=P(),G&&G.c(),z=P(),K=h("label"),he=h("div"),he.textContent="Link do ramki:",Ce=P(),oe=h("input"),Le=P(),be=h("br"),$=P(),ie=h("label"),de=h("div"),de.textContent="Pokaż statystyki:",De=P(),ee=h("input"),ve=P(),we=h("br"),ge=P(),te=h("label"),ye=h("div"),ye.textContent="Odbicie lustrzane:",S=P(),W=h("input"),me=P(),_e=h("br"),se=P(),ne=h("label"),ke=h("div"),ke.textContent="Tryb edycji:",c=P(),A=h("input"),j=P(),V=h("br"),le=P(),Y=h("div"),Ie=h("img"),gt=P(),re.c(),Je=P(),ce.c(),mt=P(),q&&q.c(),u(r,"class","stext svelte-8x5hg4"),t[8]===void 0&&Pe(()=>t[22].call(d)),u(b,"class","stext svelte-8x5hg4"),u(D,"class","nselect"),t[9]===void 0&&Pe(()=>t[23].call(D)),u(o,"class","selector svelte-8x5hg4"),u(M,"class","selector svelte-8x5hg4"),u(I,"class","ltext svelte-8x5hg4"),u(_,"type","file"),u(_,"accept",".jpg, .jpeg, .png"),u(he,"class","ltext svelte-8x5hg4"),u(de,"class","ltext svelte-8x5hg4"),u(ee,"type","checkbox"),u(ye,"class","ltext svelte-8x5hg4"),u(W,"type","checkbox"),u(te,"class","mirror svelte-8x5hg4"),u(ke,"class","ltext svelte-8x5hg4"),u(A,"type","checkbox"),u(ne,"class","exp svelte-8x5hg4"),u(p,"class","selector svelte-8x5hg4"),H(Ie.src,dt=Ln)||u(Ie,"src",dt),u(Ie,"class","cardboard svelte-8x5hg4"),u(Ie,"alt","Cardboard"),u(Y,"class","looks svelte-8x5hg4"),ae(Y,"border-color",t[11])},m(m,N){L(m,e,N),a(e,n),a(e,l),a(e,o),a(o,i),a(i,r),a(i,f),a(i,d);for(let X=0;X<x.length;X+=1)x[X]&&x[X].m(d,null);ue(d,t[8],!0),a(o,s),a(o,v),a(v,b),a(v,k),a(v,D);for(let X=0;X<U.length;X+=1)U[X]&&U[X].m(D,null);ue(D,t[9],!0),a(e,w),a(e,M),ct(y,M,null),a(e,R),a(e,p),a(p,T),a(T,I),a(T,_),t[27](_),a(p,O),a(p,g),G&&G.m(p,null),a(p,z),a(p,K),a(K,he),a(K,Ce),a(K,oe),pe(oe,t[1]),a(K,Le),a(p,be),a(p,$),a(p,ie),a(ie,de),a(ie,De),a(ie,ee),ee.checked=t[2],a(ie,ve),a(p,we),a(p,ge),a(p,te),a(te,ye),a(te,S),a(te,W),W.checked=t[5],a(te,me),a(p,_e),a(p,se),a(p,ne),a(ne,ke),a(ne,c),a(ne,A),A.checked=t[3],a(ne,j),a(p,V),a(e,le),a(e,Y),a(Y,Ie),a(Y,gt),re.m(Y,null),a(Y,Je),ce.m(Y,null),a(e,mt),q&&q.m(e,null),je=!0,Qe||(_t=[B(d,"change",t[22]),B(D,"change",t[23]),B(_,"change",t[26]),B(oe,"input",t[29]),B(ee,"change",t[30]),B(W,"change",t[31]),B(W,"change",t[32]),B(A,"change",t[33]),B(A,"change",t[34])],Qe=!0)},p(m,N){if(N[0]&32768){Me=J(m[15]);let Z;for(Z=0;Z<Me.length;Z+=1){const Fe=Zt(m,Me,Z);x[Z]?x[Z].p(Fe,N):(x[Z]=Tt(Fe),x[Z].c(),x[Z].m(d,null))}for(;Z<x.length;Z+=1)x[Z].d(1);x.length=Me.length}if(N[0]&33024&&ue(d,m[8]),N[0]&65536){Oe=J(m[16]);let Z;for(Z=0;Z<Oe.length;Z+=1){const Fe=Ot(m,Oe,Z);U[Z]?U[Z].p(Fe,N):(U[Z]=Nt(Fe),U[Z].c(),U[Z].m(D,null))}for(;Z<U.length;Z+=1)U[Z].d(1);U.length=Oe.length}N[0]&66048&&ue(D,m[9]);const X={};!F&&N[0]&128&&(F=!0,X.value=m[7],Ve(()=>F=!1)),!E&&N[0]&64&&(E=!0,X.count=m[6],Ve(()=>E=!1)),y.$set(X),m[4]?G&&(G.d(1),G=null):G?G.p(m,N):(G=Bt(m),G.c(),G.m(p,z)),N[0]&2&&oe.value!==m[1]&&pe(oe,m[1]),N[0]&4&&(ee.checked=m[2]),N[0]&32&&(W.checked=m[5]),N[0]&8&&(A.checked=m[3]),ze===(ze=pt(m))&&re?re.p(m,N):(re.d(1),re=ze(m),re&&(re.c(),re.m(Y,Je))),xe===(xe=bt(m))&&ce?ce.p(m,N):(ce.d(1),ce=xe(m),ce&&(ce.c(),ce.m(Y,null))),(!je||N[0]&2048)&&ae(Y,"border-color",m[11]),m[3]?q?(q.p(m,N),N[0]&8&&Ne(q,1)):(q=qt(m),q.c(),Ne(q,1),q.m(e,null)):q&&(cn(),Ke(q,1,1,()=>{q=null}),un())},i(m){je||(Ne(y.$$.fragment,m),Ne(q),je=!0)},o(m){Ke(y.$$.fragment,m),Ke(q),je=!1},d(m){m&&C(e),Be(x,m),Be(U,m),ut(y),t[27](null),G&&G.d(),re.d(),ce.d(),q&&q.d(),Qe=!1,Ee(_t)}}}function Nn(t,e,n){let l=["SSS","SS","S","A","B","C","D","E"],o=["Bodere","Dandere","Deredere","Kamidere","Kuudere","Mayadere","Tsundere","Yandere","Raito","Yami","Yato"],i="https://sanakan.pl/i/ss/fga432a.png",r="",f=!1,d=!1,s=!1,v=!1,b=0,k,D="C",w="Kamidere",M,y,F,E,R,p,T;async function I(){try{const S=await Pn(i,M),W=document.createElement("a");W.href=S,W.download="skalpelek.png",W.click()}catch{alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.")}}async function _(){try{const S=await kn(i);n(0,i=S),n(4,s=!0)}catch{alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.")}}function O(S){let W=S.target.files[0],me=new FileReader;me.onload=_e=>{n(0,i=_e.target.result),n(4,s=!0)},me.readAsDataURL(W)}function g(S){M=S.detail.pixels;const{x:W,y:me,width:_e}=S.detail.pixels,se=448/_e,ne=-me*se,ke=-W*se-448/2,c=y.naturalWidth*se;n(11,E=M.width<448||M.height<650?"#ff6242":"#242424");const A=448/650,j=y.naturalWidth/y.naturalHeight,V=A/j;n(13,p=V>1?V:1),n(14,T=T<p?p:T),n(10,y.style=`margin: ${ne}px 0 0 ${ke}px; width: ${c}px;`,y)}function z(){D=qe(this),n(8,D),n(15,l)}function K(){w=qe(this),n(9,w),n(16,o)}function he(S){k=S,n(7,k)}function Ce(S){b=S,n(6,b)}const oe=S=>O(S);function Le(S){fe[S?"unshift":"push"](()=>{R=S,n(12,R)})}function be(){i=this.value,n(0,i)}function $(){r=this.value,n(1,r)}function ie(){f=this.checked,n(2,f)}function de(){v=this.checked,n(5,v)}const De=()=>_();function ee(){d=this.checked,n(3,d)}const ve=()=>n(11,E="#242424");function we(S){fe[S?"unshift":"push"](()=>{y=S,n(10,y)})}const ge=async()=>{I()};function te(S){T=S,n(14,T)}function ye(S){p=S,n(13,p)}return[i,r,f,d,s,v,b,k,D,w,y,E,R,p,T,l,o,F,I,_,O,g,z,K,he,Ce,oe,Le,be,$,ie,de,De,ee,ve,we,ge,te,ye]}class Bn extends ft{constructor(e){super(),at(this,e,Nn,Tn,st,{},null,[-1,-1])}}new Bn({target:document.getElementById("app")});