var ct=Object.defineProperty;var it=(e,t,l)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l;var ve=(e,t,l)=>(it(e,typeof t!="symbol"?t+"":t,l),l);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function l(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=l(s);fetch(s.href,c)}})();function R(){}function We(e){return e()}function Oe(){return Object.create(null)}function re(e){e.forEach(We)}function Qe(e){return typeof e=="function"}function Xe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let _e;function M(e,t){return e===t?!0:(_e||(_e=document.createElement("a")),_e.href=t,e===_e.href)}function ot(e){return Object.keys(e).length===0}function _(e,t){e.appendChild(t)}function E(e,t,l){e.insertBefore(t,l||null)}function w(e){e.parentNode&&e.parentNode.removeChild(e)}function ne(e,t){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(t)}function d(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function O(){return N(" ")}function ft(){return N("")}function Y(e,t,l,n){return e.addEventListener(t,l,n),()=>e.removeEventListener(t,l,n)}function h(e,t,l){l==null?e.removeAttribute(t):e.getAttribute(t)!==l&&e.setAttribute(t,l)}function ut(e){return Array.from(e.childNodes)}function X(e,t){e.value=t??""}function Ae(e,t,l,n){l==null?e.style.removeProperty(t):e.style.setProperty(t,l,n?"important":"")}function H(e,t,l){for(let n=0;n<e.options.length;n+=1){const s=e.options[n];if(s.__value===t){s.selected=!0;return}}(!l||t!==void 0)&&(e.selectedIndex=-1)}function ie(e){const t=e.querySelector(":checked");return t&&t.__value}let Se;function oe(e){Se=e}const le=[],de=[];let se=[];const ke=[],at=Promise.resolve();let $e=!1;function _t(){$e||($e=!0,at.then(Ze))}function W(e){se.push(e)}function Be(e){ke.push(e)}const be=new Set;let te=0;function Ze(){if(te!==0)return;const e=Se;do{try{for(;te<le.length;){const t=le[te];te++,oe(t),ht(t.$$)}}catch(t){throw le.length=0,te=0,t}for(oe(null),le.length=0,te=0;de.length;)de.pop()();for(let t=0;t<se.length;t+=1){const l=se[t];be.has(l)||(be.add(l),l())}se.length=0}while(le.length);for(;ke.length;)ke.pop()();$e=!1,be.clear(),oe(e)}function ht(e){if(e.fragment!==null){e.update(),re(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function dt(e){const t=[],l=[];se.forEach(n=>e.indexOf(n)===-1?t.push(n):l.push(n)),l.forEach(n=>n()),se=t}const he=new Set;let gt;function xe(e,t){e&&e.i&&(he.delete(e),e.i(t))}function pt(e,t,l,n){if(e&&e.o){if(he.has(e))return;he.add(e),gt.c.push(()=>{he.delete(e),n&&(l&&e.d(1),n())}),e.o(t)}else n&&n()}function V(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ne(e,t,l){const n=e.$$.props[t];n!==void 0&&(e.$$.bound[n]=l,l(e.$$.ctx[n]))}function mt(e){e&&e.c()}function et(e,t,l){const{fragment:n,after_update:s}=e.$$;n&&n.m(t,l),W(()=>{const c=e.$$.on_mount.map(We).filter(Qe);e.$$.on_destroy?e.$$.on_destroy.push(...c):re(c),e.$$.on_mount=[]}),s.forEach(W)}function tt(e,t){const l=e.$$;l.fragment!==null&&(dt(l.after_update),re(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function vt(e,t){e.$$.dirty[0]===-1&&(le.push(e),_t(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function lt(e,t,l,n,s,c,u=null,a=[-1]){const p=Se;oe(e);const f=e.$$={fragment:null,ctx:[],props:c,update:R,not_equal:s,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:Oe(),dirty:a,skip_bound:!1,root:t.target||p.$$.root};u&&u(f.root);let S=!1;if(f.ctx=l?l(e,t.props||{},(g,T,...A)=>{const b=A.length?A[0]:T;return f.ctx&&s(f.ctx[g],f.ctx[g]=b)&&(!f.skip_bound&&f.bound[g]&&f.bound[g](b),S&&vt(e,g)),T}):[],f.update(),S=!0,re(f.before_update),f.fragment=n?n(f.ctx):!1,t.target){if(t.hydrate){const g=ut(t.target);f.fragment&&f.fragment.l(g),g.forEach(w)}else f.fragment&&f.fragment.c();t.intro&&xe(e.$$.fragment),et(e,t.target,t.anchor),Ze()}oe(p)}class nt{constructor(){ve(this,"$$");ve(this,"$$set")}$destroy(){tt(this,1),this.$destroy=R}$on(t,l){if(!Qe(l))return R;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(t){this.$$set&&!ot(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(bt);function Te(e,t,l){const n=e.slice();return n[13]=t[l],n}function Ie(e,t,l){const n=e.slice();return n[13]=t[l],n}function Ke(e,t,l){const n=e.slice();return n[13]=t[l],n}function je(e){let t,l=e[13]+"",n;return{c(){t=d("option"),n=N(l),t.__value=e[13],X(t,t.__value)},m(s,c){E(s,t,c),_(t,n)},p:R,d(s){s&&w(t)}}}function Fe(e){let t,l=e[13]+"",n;return{c(){t=d("option"),n=N(l),t.__value=e[13],X(t,t.__value)},m(s,c){E(s,t,c),_(t,n)},p:R,d(s){s&&w(t)}}}function Me(e){let t,l=e[13]+"",n;return{c(){t=d("option"),n=N(l),t.__value=e[13],X(t,t.__value)},m(s,c){E(s,t,c),_(t,n)},p:R,d(s){s&&w(t)}}}function kt(e){let t,l,n,s,c,u,a,p,f,S,g,T,A,b=V(e[4]),k=[];for(let o=0;o<b.length;o+=1)k[o]=je(Ke(e,b,o));let q=V(e[5]),$=[];for(let o=0;o<q.length;o+=1)$[o]=Fe(Ie(e,q,o));let I=V(e[6]),y=[];for(let o=0;o<I.length;o+=1)y[o]=Me(Te(e,I,o));return{c(){t=d("label"),l=N("Gwiazdki: "),n=d("select");for(let o=0;o<k.length;o+=1)k[o].c();s=O(),c=d("label"),u=N("Kolor: "),a=d("select");for(let o=0;o<$.length;o+=1)$[o].c();p=O(),f=d("label"),S=N("Typ: "),g=d("select");for(let o=0;o<y.length;o+=1)y[o].c();e[0]===void 0&&W(()=>e[7].call(n)),e[2]===void 0&&W(()=>e[9].call(a)),e[3]===void 0&&W(()=>e[11].call(g))},m(o,m){E(o,t,m),_(t,l),_(t,n);for(let r=0;r<k.length;r+=1)k[r]&&k[r].m(n,null);H(n,e[0],!0),E(o,s,m),E(o,c,m),_(c,u),_(c,a);for(let r=0;r<$.length;r+=1)$[r]&&$[r].m(a,null);H(a,e[2],!0),E(o,p,m),E(o,f,m),_(f,S),_(f,g);for(let r=0;r<y.length;r+=1)y[r]&&y[r].m(g,null);H(g,e[3],!0),T||(A=[Y(n,"change",e[7]),Y(n,"change",e[8]),Y(a,"change",e[9]),Y(a,"change",e[10]),Y(g,"change",e[11]),Y(g,"change",e[12])],T=!0)},p(o,[m]){if(m&16){b=V(o[4]);let r;for(r=0;r<b.length;r+=1){const K=Ke(o,b,r);k[r]?k[r].p(K,m):(k[r]=je(K),k[r].c(),k[r].m(n,null))}for(;r<k.length;r+=1)k[r].d(1);k.length=b.length}if(m&17&&H(n,o[0]),m&32){q=V(o[5]);let r;for(r=0;r<q.length;r+=1){const K=Ie(o,q,r);$[r]?$[r].p(K,m):($[r]=Fe(K),$[r].c(),$[r].m(a,null))}for(;r<$.length;r+=1)$[r].d(1);$.length=q.length}if(m&36&&H(a,o[2]),m&64){I=V(o[6]);let r;for(r=0;r<I.length;r+=1){const K=Te(o,I,r);y[r]?y[r].p(K,m):(y[r]=Me(K),y[r].c(),y[r].m(g,null))}for(;r<y.length;r+=1)y[r].d(1);y.length=I.length}m&72&&H(g,o[3])},i:R,o:R,d(o){o&&(w(t),w(s),w(c),w(p),w(f)),ne(k,o),ne($,o),ne(y,o),T=!1,re(A)}}}function $t(e,t,l){let n=[0,1,2,3,4,5],s=["SSS","SS","S","A","B","C","D","E","F","G"],c=["Full","Empty","Pig","Snek","Black","White"],{count:u=0}=t,a="C",p="Full",{value:f=`/star/${p}/${a}.png`}=t;function S(){u=ie(this),l(0,u),l(4,n)}const g=()=>l(1,f=`/star/${p}/${a}.png`);function T(){a=ie(this),l(2,a),l(5,s)}const A=()=>l(1,f=`/star/${p}/${a}.png`);function b(){p=ie(this),l(3,p),l(6,c)}const k=()=>l(1,f=`/star/${p}/${a}.png`);return e.$$set=q=>{"count"in q&&l(0,u=q.count),"value"in q&&l(1,f=q.value)},[u,f,a,p,n,s,c,S,g,T,A,b,k]}class St extends nt{constructor(t){super(),lt(this,t,$t,kt,Xe,{count:0,value:1})}}const yt="/pwlogo.png",wt="/assets/empty-DKEaaJ7g.png",Et="/assets/shield-DfTVy6-H.png",qt="/assets/fire-D3xP8ToV.png",Ct="/assets/heart-C5E-YPIn.png";function Ve(e,t,l){const n=e.slice();return n[14]=t[l],n[16]=l,n}function Ye(e,t,l){const n=e.slice();return n[17]=t[l],n}function He(e,t,l){const n=e.slice();return n[17]=t[l],n}function Re(e){let t,l=e[17]+"",n;return{c(){t=d("option"),n=N(l),t.__value=e[17],X(t,t.__value)},m(s,c){E(s,t,c),_(t,n)},p:R,d(s){s&&w(t)}}}function ze(e){let t,l=e[17]+"",n;return{c(){t=d("option"),n=N(l),t.__value=e[17],X(t,t.__value)},m(s,c){E(s,t,c),_(t,n)},p:R,d(s){s&&w(t)}}}function Ge(e){let t,l,n,s,c,u,a,p;return{c(){t=d("img"),n=O(),s=d("img"),u=O(),a=d("img"),M(t.src,l=Et)||h(t,"src",l),h(t,"class","scalp svelte-1kfcsqf"),h(t,"alt","Defense"),M(s.src,c=qt)||h(s,"src",c),h(s,"class","scalp svelte-1kfcsqf"),h(s,"alt","Attack"),M(a.src,p=Ct)||h(a,"src",p),h(a,"class","scalp svelte-1kfcsqf"),h(a,"alt","Health")},m(f,S){E(f,t,S),E(f,n,S),E(f,s,S),E(f,u,S),E(f,a,S)},d(f){f&&(w(t),w(n),w(s),w(u),w(a))}}}function Je(e){let t,l=V({length:e[2]}),n=[];for(let s=0;s<l.length;s+=1)n[s]=Ue(Ve(e,l,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();t=ft()},m(s,c){for(let u=0;u<n.length;u+=1)n[u]&&n[u].m(s,c);E(s,t,c)},p(s,c){if(c&12){l=V({length:s[2]});let u;for(u=0;u<l.length;u+=1){const a=Ve(s,l,u);n[u]?n[u].p(a,c):(n[u]=Ue(a),n[u].c(),n[u].m(t.parentNode,t))}for(;u<n.length;u+=1)n[u].d(1);n.length=l.length}},d(s){s&&w(t),ne(n,s)}}}function Ue(e){let t,l;return{c(){t=d("img"),M(t.src,l=e[3])||h(t,"src",l),h(t,"class","star svelte-1kfcsqf"),h(t,"alt","Star"),Ae(t,"left",239-18*e[2]+36*e[16]+"px")},m(n,s){E(n,t,s)},p(n,s){s&8&&!M(t.src,l=n[3])&&h(t,"src",l),s&4&&Ae(t,"left",239-18*n[2]+36*n[16]+"px")},d(n){n&&w(t)}}}function Pt(e){let t,l,n,s,c,u,a,p,f,S,g,T,A,b,k,q,$,I,y,o,m,r,K,ye,Q,we,P,Z,Ee,qe,z,fe,Ce,G,ue,Pe,J,ae,De,ge,U,pe,Le,x=V(e[6]),D=[];for(let i=0;i<x.length;i+=1)D[i]=Re(He(e,x,i));let ee=V(e[7]),L=[];for(let i=0;i<ee.length;i+=1)L[i]=ze(Ye(e,ee,i));function st(i){e[10](i)}function rt(i){e[11](i)}let me={};e[3]!==void 0&&(me.value=e[3]),e[2]!==void 0&&(me.count=e[2]),b=new St({props:me}),de.push(()=>Ne(b,"value",st)),de.push(()=>Ne(b,"count",rt));let j=e[1]&&Ge(),B=e[2]>0&&Je(e);return{c(){t=d("main"),l=d("div"),l.innerHTML=`<a href="https://sanakan.pl" target="_blank" rel="noreferrer"><img src="${yt}" class="logo svelte-1kfcsqf" alt="Logo"/></a>`,n=O(),s=d("div"),c=d("label"),u=N("Ramka: "),a=d("select");for(let i=0;i<D.length;i+=1)D[i].c();p=O(),f=d("label"),S=N("Dere: "),g=d("select");for(let i=0;i<L.length;i+=1)L[i].c();T=O(),A=d("div"),mt(b.$$.fragment),$=O(),I=d("div"),y=d("label"),o=N("Link do obrazka: "),m=d("input"),r=O(),K=d("label"),ye=N("Pokaż statystyki: "),Q=d("input"),we=O(),P=d("div"),Z=d("img"),qe=O(),z=d("img"),Ce=O(),G=d("img"),Pe=O(),J=d("img"),De=O(),j&&j.c(),ge=O(),B&&B.c(),e[4]===void 0&&W(()=>e[8].call(a)),h(g,"id","dere-select"),e[5]===void 0&&W(()=>e[9].call(g)),h(s,"class","selector svelte-1kfcsqf"),h(A,"class","selector svelte-1kfcsqf"),h(m,"id","url-scalp"),h(m,"placeholder",e[0]),h(Q,"id","show-stats"),h(Q,"type","checkbox"),h(I,"class","selector svelte-1kfcsqf"),M(Z.src,Ee=wt)||h(Z,"src",Ee),h(Z,"class","scalp svelte-1kfcsqf"),h(Z,"alt","Cardboard"),M(z.src,fe=e[0])||h(z,"src",fe),h(z,"class","scalp svelte-1kfcsqf"),h(z,"alt","Scalpel"),M(G.src,ue="/borders/"+e[4]+".png")||h(G,"src",ue),h(G,"class","border svelte-1kfcsqf"),h(G,"alt","Border"),M(J.src,ae="/dere/"+e[5]+".png")||h(J,"src",ae),h(J,"class","dere svelte-1kfcsqf"),h(J,"alt","Dere"),h(P,"class","looks svelte-1kfcsqf")},m(i,C){E(i,t,C),_(t,l),_(t,n),_(t,s),_(s,c),_(c,u),_(c,a);for(let F=0;F<D.length;F+=1)D[F]&&D[F].m(a,null);H(a,e[4],!0),_(s,p),_(s,f),_(f,S),_(f,g);for(let F=0;F<L.length;F+=1)L[F]&&L[F].m(g,null);H(g,e[5],!0),_(t,T),_(t,A),et(b,A,null),_(t,$),_(t,I),_(I,y),_(y,o),_(y,m),X(m,e[0]),_(I,r),_(I,K),_(K,ye),_(K,Q),Q.checked=e[1],_(t,we),_(t,P),_(P,Z),_(P,qe),_(P,z),_(P,Ce),_(P,G),_(P,Pe),_(P,J),_(P,De),j&&j.m(P,null),_(P,ge),B&&B.m(P,null),U=!0,pe||(Le=[Y(a,"change",e[8]),Y(g,"change",e[9]),Y(m,"input",e[12]),Y(Q,"change",e[13])],pe=!0)},p(i,[C]){if(C&64){x=V(i[6]);let v;for(v=0;v<x.length;v+=1){const ce=He(i,x,v);D[v]?D[v].p(ce,C):(D[v]=Re(ce),D[v].c(),D[v].m(a,null))}for(;v<D.length;v+=1)D[v].d(1);D.length=x.length}if(C&80&&H(a,i[4]),C&128){ee=V(i[7]);let v;for(v=0;v<ee.length;v+=1){const ce=Ye(i,ee,v);L[v]?L[v].p(ce,C):(L[v]=ze(ce),L[v].c(),L[v].m(g,null))}for(;v<L.length;v+=1)L[v].d(1);L.length=ee.length}C&160&&H(g,i[5]);const F={};!k&&C&8&&(k=!0,F.value=i[3],Be(()=>k=!1)),!q&&C&4&&(q=!0,F.count=i[2],Be(()=>q=!1)),b.$set(F),(!U||C&1)&&h(m,"placeholder",i[0]),C&1&&m.value!==i[0]&&X(m,i[0]),C&2&&(Q.checked=i[1]),(!U||C&1&&!M(z.src,fe=i[0]))&&h(z,"src",fe),(!U||C&80&&!M(G.src,ue="/borders/"+i[4]+".png"))&&h(G,"src",ue),(!U||C&160&&!M(J.src,ae="/dere/"+i[5]+".png"))&&h(J,"src",ae),i[1]?j||(j=Ge(),j.c(),j.m(P,ge)):j&&(j.d(1),j=null),i[2]>0?B?B.p(i,C):(B=Je(i),B.c(),B.m(P,null)):B&&(B.d(1),B=null)},i(i){U||(xe(b.$$.fragment,i),U=!0)},o(i){pt(b.$$.fragment,i),U=!1},d(i){i&&w(t),ne(D,i),ne(L,i),tt(b),j&&j.d(),B&&B.d(),pe=!1,re(Le)}}}function Dt(e,t,l){let n=["SSS","SS","S","A","B","C","D","E"],s=["Bodere","Dandere","Deredere","Kamidere","Kuudere","Mayadere","Tsundere","Yandere","Raito","Yami","Yato"],c="https://sanakan.pl/i/ss/fga432a.png",u=!1,a=0,p,f="C",S="Kamidere";function g(){f=ie(this),l(4,f),l(6,n)}function T(){S=ie(this),l(5,S),l(7,s)}function A($){p=$,l(3,p)}function b($){a=$,l(2,a)}function k(){c=this.value,l(0,c)}function q(){u=this.checked,l(1,u)}return[c,u,a,p,f,S,n,s,g,T,A,b,k,q]}class Lt extends nt{constructor(t){super(),lt(this,t,Dt,Pt,Xe,{})}}new Lt({target:document.getElementById("app")});