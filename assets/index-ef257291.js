(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ne(){}const As=t=>t;function z(t,e){for(const n in e)t[n]=e[n];return t}function Os(t){return t()}function ri(){return Object.create(null)}function Ae(t){t.forEach(Os)}function ve(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let mn;function ca(t,e){return mn||(mn=document.createElement("a")),mn.href=e,t===mn.href}function ua(t){return Object.keys(t).length===0}function Ps(t,...e){if(t==null)return ne;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function fa(t){let e;return Ps(t,n=>e=n)(),e}function Wn(t,e,n){t.$$.on_destroy.push(Ps(e,n))}function se(t,e,n,r){if(t){const i=Ns(t,e,n,r);return t[0](i)}}function Ns(t,e,n,r){return t[1]&&r?z(n.ctx.slice(),t[1](r(e))):n.ctx}function oe(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function ae(t,e,n,r,i,s){if(i){const a=Ns(e,n,r,s);t.p(a,i)}}function le(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ye(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Y(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Ds(t){const e={};for(const n in t)e[n]=!0;return e}function ge(t){return t&&ve(t.destroy)?t.destroy:ne}const Ls=typeof window<"u";let da=Ls?()=>window.performance.now():()=>Date.now(),Rr=Ls?t=>requestAnimationFrame(t):ne;const Pt=new Set;function Ms(t){Pt.forEach(e=>{e.c(t)||(Pt.delete(e),e.f())}),Pt.size!==0&&Rr(Ms)}function ha(t){let e;return Pt.size===0&&Rr(Ms),{promise:new Promise(n=>{Pt.add(e={c:t,f:n})}),abort(){Pt.delete(e)}}}function J(t,e){t.appendChild(e)}function Bs(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ma(t){const e=te("style");return ga(Bs(t),e),e.sheet}function ga(t,e){return J(t.head||t,e),e.sheet}function A(t,e,n){t.insertBefore(e,n||null)}function R(t){t.parentNode&&t.parentNode.removeChild(t)}function pa(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function te(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return document.createTextNode(t)}function he(){return we(" ")}function Ie(){return we("")}function ct(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function ba(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _a(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:m(t,r,e[r])}function ii(t,e){for(const n in e)m(t,n,e[n])}function ya(t,e){Object.keys(e).forEach(n=>{ka(t,n,e[n])})}function ka(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function Rn(t){return/-/.test(t)?ya:De}function va(t){return Array.from(t.childNodes)}function zs(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function st(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function me(t,e,n){t.classList[n?"add":"remove"](e)}function Us(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}class Ia{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=X(n.nodeName):this.e=te(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)A(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(R)}}function ut(t,e){return new t(e)}const An=new Map;let On=0;function Sa(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ea(t,e){const n={stylesheet:ma(e),rules:{}};return An.set(t,n),n}function si(t,e,n,r,i,s,a,o=0){const l=16.666/r;let c=`{
`;for(let _=0;_<=1;_+=l){const b=e+(n-e)*s(_);c+=_*100+`%{${a(b,1-b)}}
`}const u=c+`100% {${a(n,1-n)}}
}`,f=`__svelte_${Sa(u)}_${o}`,d=Bs(t),{stylesheet:h,rules:p}=An.get(d)||Ea(d,t);p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${u}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${i}ms 1 both`,On+=1,f}function Ta(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),On-=i,On||wa())}function wa(){Rr(()=>{On||(An.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&R(e)}),An.clear())})}let xt;function Xt(t){xt=t}function Ce(){if(!xt)throw new Error("Function called outside component initialization");return xt}function Ca(t){Ce().$$.before_update.push(t)}function Ar(t){Ce().$$.on_mount.push(t)}function Ra(t){Ce().$$.on_destroy.push(t)}function Aa(){const t=Ce();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=Us(e,n,{cancelable:r});return i.slice().forEach(a=>{a.call(t,s)}),!s.defaultPrevented}return!0}}function Oa(t,e){return Ce().$$.context.set(t,e),e}function Pa(t){return Ce().$$.context.get(t)}function Na(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Ct=[],$=[];let Nt=[];const gr=[],Ws=Promise.resolve();let pr=!1;function js(){pr||(pr=!0,Ws.then(Hs))}function Fs(){return js(),Ws}function Bt(t){Nt.push(t)}function Te(t){gr.push(t)}const tr=new Set;let Et=0;function Hs(){if(Et!==0)return;const t=xt;do{try{for(;Et<Ct.length;){const e=Ct[Et];Et++,Xt(e),Da(e.$$)}}catch(e){throw Ct.length=0,Et=0,e}for(Xt(null),Ct.length=0,Et=0;$.length;)$.pop()();for(let e=0;e<Nt.length;e+=1){const n=Nt[e];tr.has(n)||(tr.add(n),n())}Nt.length=0}while(Ct.length);for(;gr.length;)gr.pop()();pr=!1,tr.clear(),Xt(t)}function Da(t){if(t.fragment!==null){t.update(),Ae(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Bt)}}function La(t){const e=[],n=[];Nt.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Nt=e}let Ht;function Ma(){return Ht||(Ht=Promise.resolve(),Ht.then(()=>{Ht=null})),Ht}function nr(t,e,n){t.dispatchEvent(Us(`${e?"intro":"outro"}${n}`))}const In=new Set;let Ke;function ue(){Ke={r:0,c:[],p:Ke}}function fe(){Ke.r||Ae(Ke.c),Ke=Ke.p}function y(t,e){t&&t.i&&(In.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(In.has(t))return;In.add(t),Ke.c.push(()=>{In.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Ba={duration:0};function gn(t,e,n,r){const i={direction:"both"};let s=e(t,n,i),a=r?0:1,o=null,l=null,c=null;function u(){c&&Ta(t,c)}function f(h,p){const g=h.b-a;return p*=Math.abs(g),{a,b:h.b,d:g,duration:p,start:h.start,end:h.start+p,group:h.group}}function d(h){const{delay:p=0,duration:g=300,easing:_=As,tick:b=ne,css:v}=s||Ba,w={start:da()+p,b:h};h||(w.group=Ke,Ke.r+=1),o||l?l=w:(v&&(u(),c=si(t,a,h,g,p,_,v)),h&&b(0,1),o=f(w,g),Bt(()=>nr(t,h,"start")),ha(I=>{if(l&&I>l.start&&(o=f(l,g),l=null,nr(t,o.b,"start"),v&&(u(),c=si(t,a,o.b,o.duration,0,_,s.css))),o){if(I>=o.end)b(a=o.b,1-a),nr(t,o.b,"end"),l||(o.b?u():--o.group.r||Ae(o.group.c)),o=null;else if(I>=o.start){const T=I-o.start;a=o.a+o.d*_(T/o.duration),b(a,1-a)}}return!!(o||l)}))}return{run(h){ve(s)?Ma().then(()=>{s=s(i),d(h)}):d(h)},end(){u(),o=l=null}}}function ce(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const a=t[s],o=e[s];if(o){for(const l in a)l in o||(r[l]=1);for(const l in o)i[l]||(n[l]=o[l],i[l]=1);t[s]=o}else for(const l in a)i[l]=1}for(const a in r)a in n||(n[a]=void 0);return n}function ke(t){return typeof t=="object"&&t!==null?t:{}}function _e(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function L(t){t&&t.c()}function P(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||Bt(()=>{const a=t.$$.on_mount.map(Os).filter(ve);t.$$.on_destroy?t.$$.on_destroy.push(...a):Ae(a),t.$$.on_mount=[]}),s.forEach(Bt)}function N(t,e){const n=t.$$;n.fragment!==null&&(La(n.after_update),Ae(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function za(t,e){t.$$.dirty[0]===-1&&(Ct.push(t),js(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,n,r,i,s,a,o=[-1]){const l=xt;Xt(t);const c=t.$$={fragment:null,ctx:[],props:s,update:ne,not_equal:i,bound:ri(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ri(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let u=!1;if(c.ctx=n?n(t,e.props||{},(f,d,...h)=>{const p=h.length?h[0]:d;return c.ctx&&i(c.ctx[f],c.ctx[f]=p)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](p),u&&za(t,f)),d}):[],c.update(),u=!0,Ae(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const f=va(e.target);c.fragment&&c.fragment.l(f),f.forEach(R)}else c.fragment&&c.fragment.c();e.intro&&y(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Hs()}Xt(l)}class Q{$destroy(){N(this,1),this.$destroy=ne}$on(e,n){if(!ve(n))return ne;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ua(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function oi(t){let e,n=li(t[1],t[2])+"",r;return{c(){e=new Ia(!1),r=Ie(),e.a=r},m(i,s){e.m(n,i,s),A(i,r,s)},p(i,s){s&6&&n!==(n=li(i[1],i[2])+"")&&e.p(n)},d(i){i&&R(r),i&&e.d()}}}function Ua(t){let e,n=t[0]&&oi(t);return{c(){n&&n.c(),e=Ie()},m(r,i){n&&n.m(r,i),A(r,e,i)},p(r,[i]){r[0]?n?n.p(r,i):(n=oi(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ne,o:ne,d(r){n&&n.d(r),r&&R(e)}}}function Wa(t,e,n){let{observable:r=!1}=e,{component:i}=e,{code:s}=e;return t.$$set=a=>{"observable"in a&&n(0,r=a.observable),"component"in a&&n(1,i=a.component),"code"in a&&n(2,s=a.code)},[r,i,s]}let ja=class extends Q{constructor(e){super(),x(this,e,Wa,Ua,Z,{observable:0,component:1,code:2})}};const Or=ja,Fa=()=>typeof window<"u",Pr=Fa(),Ha=".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}",Vs=Pr?document.createElement("style"):void 0;if(Pr){const t=Vs;t.textContent=Ha,t.id="svelteui-inject"}function ai(t,e,n){return Pr&&document.head.appendChild(Vs),`
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${t} Component Error]:</h2>
            <h3>${e}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${n||""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `}function li(t,e){const{message:n,solution:r}=e;return r?ai(t,n,r):ai(t,n)}function ie(t,e){const n=[];if(e)for(let r=0;r<e.length;r++){const i=e[r],s=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?n.push(s(t,i[1])):n.push(s(t))}return{update(r){if((r&&r.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(r)for(let i=0;i<r.length;i++){const s=n[i];if(s&&s.update){const a=r[i];Array.isArray(a)&&a.length>1?s.update(a[1]):s.update()}}},destroy(){for(let r=0;r<n.length;r++){const i=n[r];i&&i.destroy&&i.destroy()}}}}const br="!",Va=new RegExp(`^[^${br}]+(?:${br}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function He(t,e=[]){let n;const r=[];t.$on=(s,a)=>{const o=s;let l=()=>{};for(const c of e){if(typeof c=="string"&&c===o){const u=t.$$.callbacks[o]||(t.$$.callbacks[o]=[]);return u.push(a),()=>{const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}if(typeof c=="object"&&c.name===o){const u=a;a=(...f)=>{typeof c=="object"&&c.shouldExclude()||u(...f)}}}return n?l=n(o,a):r.push([o,a]),()=>{l()}};function i(s){Na(t,s)}return s=>{const a=[],o={};n=(l,c)=>{let u=l,f=c,d=!1;if(u.match(Va)){const _=u.split(br);u=_[0];const b=Object.fromEntries(_.slice(1).map(v=>[v,!0]));b.passive&&(d=d||{},d.passive=!0),b.nonpassive&&(d=d||{},d.passive=!1),b.capture&&(d=d||{},d.capture=!0),b.once&&(d=d||{},d.once=!0),b.preventDefault&&(f=ba(f)),b.stopPropagation&&(f=_a(f))}const p=ct(s,u,f,d),g=()=>{p();const _=a.indexOf(g);_>-1&&a.splice(_,1)};return a.push(g),u in o||(o[u]=ct(s,u,i)),g};for(let l=0;l<r.length;l++)n(r[l][0],r[l][1]);return{destroy:()=>{for(let l=0;l<a.length;l++)a[l]();for(const l of Object.entries(o))l[1]()}}}}function qa(t){const e=t-1;return e*e*e+1}function pn(t){return-.5*(Math.cos(Math.PI*t)-1)}function ci(t,{delay:e=0,duration:n=400,easing:r=As}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function ui(t,{delay:e=0,duration:n=400,easing:r=qa,start:i=0,opacity:s=0}={}){const a=getComputedStyle(t),o=+a.opacity,l=a.transform==="none"?"":a.transform,c=1-i,u=o*(1-s);return{delay:e,duration:n,easing:r,css:(f,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${o-u*d}
		`}}const qs={};function Wt(){return Pa(qs)}const Tt=[];function Nr(t,e=ne){let n;const r=new Set;function i(o){if(Z(t,o)&&(t=o,n)){const l=!Tt.length;for(const c of r)c[1](),Tt.push(c,t);if(l){for(let c=0;c<Tt.length;c+=2)Tt[c][0](Tt[c+1]);Tt.length=0}}}function s(o){i(o(t))}function a(o,l=ne){const c=[o,l];return r.add(c),r.size===1&&(n=e(i)||ne),o(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:a}}const Dt=Nr("light");function bt(){let t;return Dt==null||Dt.subscribe(n=>{t=n}),{...Zs,colorNames:sl,colorScheme:t,dark:Be==null?void 0:Be.selector,fn:{themeColor:Rt.themeColor,size:Rt.size,radius:Rt.radius,rgba:Rt.rgba,variant:Rt.variant}}}function Ga(t){let e,n,r,i,s,a;const o=t[18].default,l=se(o,t,t[17],null);let c=[{id:"SVELTEUI_PROVIDER"},{class:n=t[4](t[2],t[3].root,t[6]())},t[7]],u={};for(let f=0;f<c.length;f+=1)u=z(u,c[f]);return{c(){e=te("div"),l&&l.c(),De(e,u)},m(f,d){A(f,e,d),l&&l.m(e,null),t[19](e),i=!0,s||(a=[ge(r=ie.call(null,e,t[1])),ge(t[5].call(null,e))],s=!0)},p(f,[d]){l&&l.p&&(!i||d&131072)&&ae(l,o,f,f[17],i?oe(o,f[17],d,null):le(f[17]),null),De(e,u=ce(c,[{id:"SVELTEUI_PROVIDER"},(!i||d&28&&n!==(n=f[4](f[2],f[3].root,f[6]())))&&{class:n},d&128&&f[7]])),r&&ve(r.update)&&d&2&&r.update.call(null,f[1])},i(f){i||(y(l,f),i=!0)},o(f){k(l,f),i=!1},d(f){f&&R(e),l&&l.d(f),t[19](null),s=!1,Ae(a)}}}function Ka(t,e,n){let r,i,s,a;const o=["use","class","element","theme","styles","defaultProps","themeObserver","withNormalizeCSS","withGlobalStyles","override","inherit"];let l=Y(e,o),c;Wn(t,Dt,M=>n(21,c=M));let{$$slots:u={},$$scope:f}=e,{use:d=[],class:h="",element:p=void 0,theme:g=bt(),styles:_={},defaultProps:b={},themeObserver:v="light",withNormalizeCSS:w=!1,withGlobalStyles:I=!1,override:T={},inherit:O=!1}=e;Ca(()=>{const M=document.documentElement.classList;c==="dark"&&M.add(Be.className),c==="light"&&M.remove(Be.className)});const E=Wt(),V=Me(()=>({root:{}})),q=He(Ce()),C=bt(),S=()=>v===null?null:v==="light"?i:Be;function G(M){$[M?"unshift":"push"](()=>{p=M,n(0,p)})}return t.$$set=M=>{e=z(z({},e),ye(M)),n(7,l=Y(e,o)),"use"in M&&n(1,d=M.use),"class"in M&&n(2,h=M.class),"element"in M&&n(0,p=M.element),"theme"in M&&n(8,g=M.theme),"styles"in M&&n(9,_=M.styles),"defaultProps"in M&&n(10,b=M.defaultProps),"themeObserver"in M&&n(11,v=M.themeObserver),"withNormalizeCSS"in M&&n(12,w=M.withNormalizeCSS),"withGlobalStyles"in M&&n(13,I=M.withGlobalStyles),"override"in M&&n(14,T=M.override),"inherit"in M&&n(15,O=M.inherit),"$$scope"in M&&n(17,f=M.$$scope)},t.$$.update=()=>{t.$$.dirty&8192&&I&&Fl(),t.$$.dirty&4096&&w&&Hl(),t.$$.dirty&34560&&n(16,r={themeOverride:O?{...E.theme,...g}:g,styles:O?{...E.styles,..._}:_,defaultProps:O?{...E.styles,...b}:b}),t.$$.dirty&65536&&Oa(qs,{theme:r.themeOverride,styles:{},defaultProps:{}}),t.$$.dirty&2048&&Dt.set(v),t.$$.dirty&65536&&(i=rl(C,r.themeOverride)),t.$$.dirty&16384&&n(4,{cx:s,classes:a}=V(null,{override:T}),s,(n(3,a),n(23,V),n(14,T)))},[p,d,h,a,s,q,S,l,g,_,b,v,w,I,T,O,r,f,u,G]}class Ja extends Q{constructor(e){super(),x(this,e,Ka,Ga,Z,{use:1,class:2,element:0,theme:8,styles:9,defaultProps:10,themeObserver:11,withNormalizeCSS:12,withGlobalStyles:13,override:14,inherit:15})}}const Xa=Ja;function ee(t,e=0){var i,s;const n=((i=Wt())==null?void 0:i.theme)||bt();let r="50";return Ya(t)?(e!==Number(0)&&(r=`${e.toString()}00`),(s=n.colors[`${t}${r}`])==null?void 0:s.value):t}function Ya(t){let e=!1;switch(t){case"dark":e=!0;break;case"gray":e=!0;break;case"red":e=!0;break;case"pink":e=!0;break;case"grape":e=!0;break;case"violet":e=!0;break;case"indigo":e=!0;break;case"blue":e=!0;break;case"cyan":e=!0;break;case"teal":e=!0;break;case"green":e=!0;break;case"lime":e=!0;break;case"yellow":e=!0;break;case"orange":e=!0;break;default:e=!1;break}return e}function Za(t){var e,n;return typeof t.size=="number"?t.size:typeof t.sizes[t.size]=="number"?t.sizes[t.size]:+((e=t.sizes[t.size])==null?void 0:e.value)||+((n=t.sizes.md)==null?void 0:n.value)}function xa(t){var n;const e=((n=Wt())==null?void 0:n.theme)||bt();return typeof t=="number"?t:e.radii[t].value}function Qa(t){const e=t.replace("#","");return typeof e=="string"&&e.length===6&&!Number.isNaN(Number(`0x${e}`))}function $a(t){const e=t.replace("#",""),n=parseInt(e,16),r=n>>16&255,i=n>>8&255,s=n&255;return{r,g:i,b:s,a:1}}function el(t){const[e,n,r,i]=t.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:e,g:n,b:r,a:i||1}}function tl(t){return Qa(t)?$a(t):t.startsWith("rgb")?el(t):{r:0,g:0,b:0,a:1}}const Gs=(t,e)=>{const{themeColor:n,rgba:r}=Rt,i={"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"}},s={filled:{[`${Be.selector} &`]:{backgroundColor:n(t,8)},border:"transparent",backgroundColor:n(t,6),color:"White","&:hover":{backgroundColor:n(t,7)},...i},light:{[`${Be.selector} &`]:{backgroundColor:r(n(t,8),.35),color:t==="dark"?n("dark",0):n(t,2),"&:hover":{backgroundColor:r(n(t,7),.45)}},border:"transparent",backgroundColor:n(t,0),color:t==="dark"?n("dark",9):n(t,6),"&:hover":{backgroundColor:n(t,1)},...i},outline:{[`${Be.selector} &`]:{border:`1px solid ${n(t,4)}`,color:`${n(t,4)}`,"&:hover":{backgroundColor:r(n(t,4),.05)}},border:`1px solid ${n(t,7)}`,backgroundColor:"transparent",color:n(t,7),"&:hover":{backgroundColor:r(n(t,0),.35)},...i},subtle:{[`${Be.selector} &`]:{color:t==="dark"?n("dark",0):n(t,2),"&:hover":{backgroundColor:r(n(t,8),.35)}},border:"transparent",backgroundColor:"transparent",color:t==="dark"?n("dark",9):n(t,6),"&:hover":{backgroundColor:n(t,0)},...i},default:{[`${Be.selector} &`]:{border:`1px solid ${n("dark",5)}`,backgroundColor:n("dark",5),color:"White","&:hover":{backgroundColor:n("dark",4)}},border:`1px solid ${n("gray",4)}`,backgroundColor:"White",color:"Black","&:hover":{backgroundColor:n("gray",0)},...i},white:{border:"transparent",backgroundColor:"White",color:n(t,7),"&:hover":{backgroundColor:"White"},...i},gradient:{}};return e&&(s.gradient={border:"transparent",background:`linear-gradient(${e.deg}deg, $${e.from}600 0%, $${e.to}600 100%)`,color:"White"}),s};function nl(t="svelteui"){return`${t}-${Math.random().toString(36).substring(2,10)}`}function rl(t,e){return e?Object.keys(t).reduce((n,r)=>(n[r]=typeof e[r]=="object"?{...t[r],...e[r]}:typeof e[r]=="number"?e[r]:e[r]||t[r],n),{}):t}function Ge(t,e=1){if(typeof t!="string"||e>1||e<0)return"rgba(0, 0, 0, 1)";const{r:n,g:r,b:i}=tl(t);return`rgba(${n}, ${r}, ${i}, ${e})`}const rr={from:"indigo",to:"cyan",deg:45};function il({variant:t,color:e,gradient:n}){var s;const r=((s=Wt())==null?void 0:s.theme)||bt(),i=6;if(t==="light")return{border:"transparent",background:[Ge(ee(e,8),.35),Ge(ee(e,0),1)],color:[e==="dark"?ee("dark",0):ee(e,2),e==="dark"?ee("dark",9):ee(e,i)],hover:[Ge(ee(e,7),.45),Ge(ee(e,1),.65)]};if(t==="default")return{border:[ee("dark",5),ee("gray",4)],background:[ee("dark",5),r.colors.white.value],color:[r.colors.white.value,r.colors.black.value],hover:[ee("dark",4),ee("gray",0)]};if(t==="white")return{border:"transparent",background:r.colors.white.value,color:ee(e,i),hover:null};if(t==="outline")return{border:[ee(e,4),ee(e,i)],background:"transparent",color:[ee(e,4),ee(e,i)],hover:[Ge(ee(e,4),.05),Ge(ee(e,0),.35)]};if(t==="gradient"){const a={from:(n==null?void 0:n.from)||rr.from,to:(n==null?void 0:n.to)||rr.to,deg:(n==null?void 0:n.deg)||rr.deg};return{background:`linear-gradient(${a.deg}deg, ${ee(a.from,i)} 0%, ${ee(a.to,i)} 100%)`,color:r.colors.white.value,border:"transparent",hover:null}}return t==="subtle"?{border:"transparent",background:"transparent",color:[e==="dark"?ee("dark",0):ee(e,2),e==="dark"?ee("dark",9):ee(e,i)],hover:[Ge(ee(e,8),.35),Ge(ee(e,0),1)]}:{border:"transparent",background:[ee(e,8),ee(e,i)],color:r.colors.white.value,hover:ee(e,7)}}const Rt={size:Za,radius:xa,themeColor:ee,variant:il,rgba:Ge},Ks={primary:"#228be6",white:"#ffffff",black:"#000000",dark50:"#C1C2C5",dark100:"#A6A7AB",dark200:"#909296",dark300:"#5c5f66",dark400:"#373A40",dark500:"#2C2E33",dark600:"#25262b",dark700:"#1A1B1E",dark800:"#141517",dark900:"#101113",gray50:"#f8f9fa",gray100:"#f1f3f5",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#868e96",gray700:"#495057",gray800:"#343a40",gray900:"#212529",red50:"#fff5f5",red100:"#ffe3e3",red200:"#ffc9c9",red300:"#ffa8a8",red400:"#ff8787",red500:"#ff6b6b",red600:"#fa5252",red700:"#f03e3e",red800:"#e03131",red900:"#c92a2a",pink50:"#fff0f6",pink100:"#ffdeeb",pink200:"#fcc2d7",pink300:"#faa2c1",pink400:"#f783ac",pink500:"#f06595",pink600:"#e64980",pink700:"#d6336c",pink800:"#c2255c",pink900:"#a61e4d",grape50:"#f8f0fc",grape100:"#f3d9fa",grape200:"#eebefa",grape300:"#e599f7",grape400:"#da77f2",grape500:"#cc5de8",grape600:"#be4bdb",grape700:"#ae3ec9",grape800:"#9c36b5",grape900:"#862e9c",violet50:"#f3f0ff",violet100:"#e5dbff",violet200:"#d0bfff",violet300:"#b197fc",violet400:"#9775fa",violet500:"#845ef7",violet600:"#7950f2",violet700:"#7048e8",violet800:"#6741d9",violet900:"#5f3dc4",indigo50:"#edf2ff",indigo100:"#dbe4ff",indigo200:"#bac8ff",indigo300:"#91a7ff",indigo400:"#748ffc",indigo500:"#5c7cfa",indigo600:"#4c6ef5",indigo700:"#4263eb",indigo800:"#3b5bdb",indigo900:"#364fc7",blue50:"#e7f5ff",blue100:"#d0ebff",blue200:"#a5d8ff",blue300:"#74c0fc",blue400:"#4dabf7",blue500:"#339af0",blue600:"#228be6",blue700:"#1c7ed6",blue800:"#1971c2",blue900:"#1864ab",cyan50:"#e3fafc",cyan100:"#c5f6fa",cyan200:"#99e9f2",cyan300:"#66d9e8",cyan400:"#3bc9db",cyan500:"#22b8cf",cyan600:"#15aabf",cyan700:"#1098ad",cyan800:"#0c8599",cyan900:"#0b7285",teal50:"#e6fcf5",teal100:"#c3fae8",teal200:"#96f2d7",teal300:"#63e6be",teal400:"#38d9a9",teal500:"#20c997",teal600:"#12b886",teal700:"#0ca678",teal800:"#099268",teal900:"#087f5b",green50:"#ebfbee",green100:"#d3f9d8",green200:"#b2f2bb",green300:"#8ce99a",green400:"#69db7c",green500:"#51cf66",green600:"#40c057",green700:"#37b24d",green800:"#2f9e44",green900:"#2b8a3e",lime50:"#f4fce3",lime100:"#e9fac8",lime200:"#d8f5a2",lime300:"#c0eb75",lime400:"#a9e34b",lime500:"#94d82d",lime600:"#82c91e",lime700:"#74b816",lime800:"#66a80f",lime900:"#5c940d",yellow50:"#fff9db",yellow100:"#fff3bf",yellow200:"#ffec99",yellow300:"#ffe066",yellow400:"#ffd43b",yellow500:"#fcc419",yellow600:"#fab005",yellow700:"#f59f00",yellow800:"#f08c00",yellow900:"#e67700",orange50:"#fff4e6",orange100:"#ffe8cc",orange200:"#ffd8a8",orange300:"#ffc078",orange400:"#ffa94d",orange500:"#ff922b",orange600:"#fd7e14",orange700:"#f76707",orange800:"#e8590c",orange900:"#d9480f"},sl={blue:"blue",cyan:"cyan",dark:"dark",grape:"grape",gray:"gray",green:"green",indigo:"indigo",lime:"lime",orange:"orange",pink:"pink",red:"red",teal:"teal",violet:"violet",yellow:"yellow"},ol={}.hasOwnProperty;function al(...t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];if(!r)continue;const i=typeof r;if(i==="string"||i==="number")e.push(r);else if(Array.isArray(r)){if(r.length){const s={...r};s&&e.push(s)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(const s in r)ol.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}return e.join(" ")}function ll(){return{cx:al}}function cl(t){const e={};return Object.keys(t).forEach(n=>{const[r,i]=t[n];e[r]=i}),e}const fi="svelteui";function ul(t){return`__svelteui-ref-${t||""}`}function fl(t,e){const n=[],r={},i=s=>{Object.keys(s).map(a=>{if(a!=="variants"&&(a==="ref"&&n.push(s.ref),a==="darkMode"&&(s[`${e.dark} &`]=s.darkMode),!(s[a]===null||typeof s[a]!="object"))){if(i(s[a]),a==="darkMode")delete s[a];else if(!a.startsWith("@media")){if(!a.startsWith("&")&&!a.startsWith(e.dark)){const o=Qt(s[a]);r[a]=o().toString(),s[`& .${o().toString()}`]=s[a],delete s[a]}}}})};return i(t),delete t["& .root"],{classMap:r,refs:Array.from(new Set(n))}}function Me(t){const e=typeof t=="function"?t:()=>t;function n(r={},i){var b;const s=((b=Wt())==null?void 0:b.theme)||bt(),{cx:a}=ll(),{override:o,name:l}=i||{},c=e(s,r,ul),u=Object.assign({},c),{classMap:f,refs:d}=fl(u,s),h=c.root??void 0,p=h!==void 0?{...h,...u}:c,g=Qt(p),_=cl(Object.keys(c).map(v=>{const w=d.find(q=>q.includes(v))??"",I=(w==null?void 0:w.split("-"))??[],T=(w==null?void 0:w.split("-")[(I==null?void 0:I.length)-1])===v,O=v.toString();let E=f[O]??O;w&&T&&(E=`${E} ${w}`),v==="root"&&(E=g({css:o}).toString());let V=`${fi}-${v.toString()}`;return l&&(V=`${fi}-${l}-${v.toString()}`,E=`${E} ${V}`),[v,E]}));return{cx:a,theme:s,classes:_,getStyles:Qt(p)}}return n}var re="colors",Oe="sizes",B="space",Js={gap:B,gridGap:B,columnGap:B,gridColumnGap:B,rowGap:B,gridRowGap:B,inset:B,insetBlock:B,insetBlockEnd:B,insetBlockStart:B,insetInline:B,insetInlineEnd:B,insetInlineStart:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockEnd:B,marginBlockStart:B,marginInline:B,marginInlineEnd:B,marginInlineStart:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockEnd:B,paddingBlockStart:B,paddingInline:B,paddingInlineEnd:B,paddingInlineStart:B,top:B,right:B,bottom:B,left:B,scrollMargin:B,scrollMarginTop:B,scrollMarginRight:B,scrollMarginBottom:B,scrollMarginLeft:B,scrollMarginX:B,scrollMarginY:B,scrollMarginBlock:B,scrollMarginBlockEnd:B,scrollMarginBlockStart:B,scrollMarginInline:B,scrollMarginInlineEnd:B,scrollMarginInlineStart:B,scrollPadding:B,scrollPaddingTop:B,scrollPaddingRight:B,scrollPaddingBottom:B,scrollPaddingLeft:B,scrollPaddingX:B,scrollPaddingY:B,scrollPaddingBlock:B,scrollPaddingBlockEnd:B,scrollPaddingBlockStart:B,scrollPaddingInline:B,scrollPaddingInlineEnd:B,scrollPaddingInlineStart:B,fontSize:"fontSizes",background:re,backgroundColor:re,backgroundImage:re,borderImage:re,border:re,borderBlock:re,borderBlockEnd:re,borderBlockStart:re,borderBottom:re,borderBottomColor:re,borderColor:re,borderInline:re,borderInlineEnd:re,borderInlineStart:re,borderLeft:re,borderLeftColor:re,borderRight:re,borderRightColor:re,borderTop:re,borderTopColor:re,caretColor:re,color:re,columnRuleColor:re,fill:re,outline:re,outlineColor:re,stroke:re,textDecorationColor:re,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Oe,minBlockSize:Oe,maxBlockSize:Oe,inlineSize:Oe,minInlineSize:Oe,maxInlineSize:Oe,width:Oe,minWidth:Oe,maxWidth:Oe,height:Oe,minHeight:Oe,maxHeight:Oe,flexBasis:Oe,gridTemplateColumns:Oe,gridTemplateRows:Oe,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},dl=(t,e)=>typeof e=="function"?{"()":Function.prototype.toString.call(e)}:e,rn=()=>{const t=Object.create(null);return(e,n,...r)=>{const i=(s=>JSON.stringify(s,dl))(e);return i in t?t[i]:t[i]=n(e,...r)}},Sn=Symbol.for("sxs.internal"),Dr=(t,e)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)),di=t=>{for(const e in t)return!0;return!1},{hasOwnProperty:hl}=Object.prototype,_r=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),ml=/\s+(?![^()]*\))/,wt=t=>e=>t(...typeof e=="string"?String(e).split(ml):[e]),hi={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:wt((t,e)=>({marginBlockStart:t,marginBlockEnd:e||t})),marginInline:wt((t,e)=>({marginInlineStart:t,marginInlineEnd:e||t})),maxSize:wt((t,e)=>({maxBlockSize:t,maxInlineSize:e||t})),minSize:wt((t,e)=>({minBlockSize:t,minInlineSize:e||t})),paddingBlock:wt((t,e)=>({paddingBlockStart:t,paddingBlockEnd:e||t})),paddingInline:wt((t,e)=>({paddingInlineStart:t,paddingInlineEnd:e||t}))},ir=/([\d.]+)([^]*)/,gl=(t,e)=>t.length?t.reduce((n,r)=>(n.push(...e.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):e,pl=(t,e)=>t in bl&&typeof e=="string"?e.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,s)=>r+(i==="stretch"?`-moz-available${s};${_r(t)}:${r}-webkit-fill-available`:`-moz-fit-content${s};${_r(t)}:${r}fit-content`)+s):String(e),bl={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Ye=t=>t?t+"-":"",Xs=(t,e,n)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,s,a,o)=>a=="$"==!!s?r:(i||a=="--"?"calc(":"")+"var(--"+(a==="$"?Ye(e)+(o.includes("$")?"":Ye(n))+o.replace(/\$/g,"-"):o)+")"+(i||a=="--"?"*"+(i||"")+(s||"1")+")":"")),_l=/\s*,\s*(?![^()]*\))/,yl=Object.prototype.toString,At=(t,e,n,r,i)=>{let s,a,o;const l=(c,u,f)=>{let d,h;const p=g=>{for(d in g){const v=d.charCodeAt(0)===64,w=v&&Array.isArray(g[d])?g[d]:[g[d]];for(h of w){const I=/[A-Z]/.test(b=d)?b:b.replace(/-[^]/g,O=>O[1].toUpperCase()),T=typeof h=="object"&&h&&h.toString===yl&&(!r.utils[I]||!u.length);if(I in r.utils&&!T){const O=r.utils[I];if(O!==a){a=O,p(O(h)),a=null;continue}}else if(I in hi){const O=hi[I];if(O!==o){o=O,p(O(h)),o=null;continue}}if(v&&(_=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=_.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(O,E,V,q,C,S)=>{const G=ir.test(E),M=.0625*(G?-1:1),[j,F]=G?[q,E]:[E,q];return"("+(V[0]==="="?"":V[0]===">"===G?"max-":"min-")+j+":"+(V[0]!=="="&&V.length===1?F.replace(ir,(Le,Se,U)=>Number(Se)+M*(V===">"?1:-1)+U):F)+(C?") and ("+(C[0]===">"?"min-":"max-")+j+":"+(C.length===1?S.replace(ir,(Le,Se,U)=>Number(Se)+M*(C===">"?-1:1)+U):S):"")+")"})),T){const O=v?f.concat(d):[...f],E=v?[...u]:gl(u,d.split(_l));s!==void 0&&i(mi(...s)),s=void 0,l(h,E,O)}else s===void 0&&(s=[[],u,f]),d=v||d.charCodeAt(0)!==36?d:`--${Ye(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=T?h:typeof h=="number"?h&&I in kl?String(h)+"px":String(h):Xs(pl(I,h??""),r.prefix,r.themeMap[I]),s[0].push(`${v?`${d} `:`${_r(d)}:`}${h}`)}}var _,b};p(c),s!==void 0&&i(mi(...s)),s=void 0};l(t,e,n)},mi=(t,e,n)=>`${n.map(r=>`${r}{`).join("")}${e.length?`${e.join(",")}{`:""}${t.join(";")}${e.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,kl={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},gi=t=>String.fromCharCode(t+(t>25?39:97)),mt=t=>(e=>{let n,r="";for(n=Math.abs(e);n>52;n=n/52|0)r=gi(n%52)+r;return gi(n%52)+r})(((e,n)=>{let r=n.length;for(;r;)e=33*e^n.charCodeAt(--r);return e})(5381,JSON.stringify(t))>>>0),Gt=["themed","global","styled","onevar","resonevar","allvar","inline"],vl=t=>{if(t.href&&!t.href.startsWith(location.origin))return!1;try{return!!t.cssRules}catch{return!1}},Il=t=>{let e;const n=()=>{const{cssRules:i}=e.sheet;return[].map.call(i,(s,a)=>{const{cssText:o}=s;let l="";if(o.startsWith("--sxs"))return"";if(i[a-1]&&(l=i[a-1].cssText).startsWith("--sxs")){if(!s.cssRules.length)return"";for(const c in e.rules)if(e.rules[c].group===s)return`--sxs{--sxs:${[...e.rules[c].cache].join(" ")}}${o}`;return s.cssRules.length?`${l}${o}`:""}return o}).join("")},r=()=>{if(e){const{rules:o,sheet:l}=e;if(!l.deleteRule){for(;Object(Object(l.cssRules)[0]).type===3;)l.cssRules.splice(0,1);l.cssRules=[]}for(const c in o)delete o[c]}const i=Object(t).styleSheets||[];for(const o of i)if(vl(o)){for(let l=0,c=o.cssRules;c[l];++l){const u=Object(c[l]);if(u.type!==1)continue;const f=Object(c[l+1]);if(f.type!==4)continue;++l;const{cssText:d}=u;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),p=Gt[h[0]];p&&(e||(e={sheet:o,reset:r,rules:{},toString:n}),e.rules[p]={group:f,index:l,cache:new Set(h)})}if(e)break}if(!e){const o=(l,c)=>({type:c,cssRules:[],insertRule(u,f){this.cssRules.splice(f,0,o(u,{import:3,undefined:1}[(u.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return l==="@media{}"?`@media{${[].map.call(this.cssRules,u=>u.cssText).join("")}}`:l}});e={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:o("","text/css"),rules:{},reset:r,toString:n}}const{sheet:s,rules:a}=e;for(let o=Gt.length-1;o>=0;--o){const l=Gt[o];if(!a[l]){const c=Gt[o+1],u=a[c]?a[c].index:s.cssRules.length;s.insertRule("@media{}",u),s.insertRule(`--sxs{--sxs:${o}}`,u),a[l]={group:s.cssRules[u+1],index:u,cache:new Set([o])}}Sl(a[l])}};return r(),e},Sl=t=>{const e=t.group;let n=e.cssRules.length;t.apply=r=>{try{e.insertRule(r,n),++n}catch{}}},Vt=Symbol(),El=rn(),Tl=(t,e)=>El(t,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[Sn]){r.type==null&&(r.type=i[Sn].type);for(const s of i[Sn].composers)r.composers.add(s)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(wl(i,t));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),Cl(t,r,e)}),wl=({variants:t,compoundVariants:e,defaultVariants:n,...r},i)=>{const s=`${Ye(i.prefix)}c-${mt(r)}`,a=[],o=[],l=Object.create(null),c=[];for(const d in n)l[d]=String(n[d]);if(typeof t=="object"&&t)for(const d in t){u=l,f=d,hl.call(u,f)||(l[d]="undefined");const h=t[d];for(const p in h){const g={[d]:String(p)};String(p)==="undefined"&&c.push(d);const _=h[p],b=[g,_,!di(_)];a.push(b)}}var u,f;if(typeof e=="object"&&e)for(const d of e){let{css:h,...p}=d;h=typeof h=="object"&&h||{};for(const _ in p)p[_]=String(p[_]);const g=[p,h,!di(h)];o.push(g)}return[s,r,a,o,l,c]},Cl=(t,e,n)=>{const[r,i,s,a]=Rl(e.composers),o=typeof e.type=="function"||e.type.$$typeof?(f=>{function d(){for(let h=0;h<d[Vt].length;h++){const[p,g]=d[Vt][h];f.rules[p].apply(g)}return d[Vt]=[],null}return d[Vt]=[],d.rules={},Gt.forEach(h=>d.rules[h]={apply:p=>d[Vt].push([h,p])}),d})(n):null,l=(o||n).rules,c=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,u=f=>{f=typeof f=="object"&&f||Al;const{css:d,...h}=f,p={};for(const b in s)if(delete h[b],b in f){let v=f[b];typeof v=="object"&&v?p[b]={"@initial":s[b],...v}:(v=String(v),p[b]=v!=="undefined"||a.has(b)?v:s[b])}else p[b]=s[b];const g=new Set([...i]);for(const[b,v,w,I]of e.composers){n.rules.styled.cache.has(b)||(n.rules.styled.cache.add(b),At(v,[`.${b}`],[],t,E=>{l.styled.apply(E)}));const T=pi(w,p,t.media),O=pi(I,p,t.media,!0);for(const E of T)if(E!==void 0)for(const[V,q,C]of E){const S=`${b}-${mt(q)}-${V}`;g.add(S);const G=(C?n.rules.resonevar:n.rules.onevar).cache,M=C?l.resonevar:l.onevar;G.has(S)||(G.add(S),At(q,[`.${S}`],[],t,j=>{M.apply(j)}))}for(const E of O)if(E!==void 0)for(const[V,q]of E){const C=`${b}-${mt(q)}-${V}`;g.add(C),n.rules.allvar.cache.has(C)||(n.rules.allvar.cache.add(C),At(q,[`.${C}`],[],t,S=>{l.allvar.apply(S)}))}}if(typeof d=="object"&&d){const b=`${r}-i${mt(d)}-css`;g.add(b),n.rules.inline.cache.has(b)||(n.rules.inline.cache.add(b),At(d,[`.${b}`],[],t,v=>{l.inline.apply(v)}))}for(const b of String(f.className||"").trim().split(/\s+/))b&&g.add(b);const _=h.className=[...g].join(" ");return{type:e.type,className:_,selector:c,props:h,toString:()=>_,deferredInjector:o}};return Dr(u,{className:r,selector:c,[Sn]:e,toString:()=>(n.rules.styled.cache.has(r)||u(),r)})},Rl=t=>{let e="";const n=[],r={},i=[];for(const[s,,,,a,o]of t){e===""&&(e=s),n.push(s),i.push(...o);for(const l in a){const c=a[l];(r[l]===void 0||c!=="undefined"||o.includes(c))&&(r[l]=c)}}return[e,n,r,new Set(i)]},pi=(t,e,n,r)=>{const i=[];e:for(let[s,a,o]of t){if(o)continue;let l,c=0,u=!1;for(l in s){const f=s[l];let d=e[l];if(d!==f){if(typeof d!="object"||!d)continue e;{let h,p,g=0;for(const _ in d){if(f===String(d[_])){if(_!=="@initial"){const b=_.slice(1);(p=p||[]).push(b in n?n[b]:_.replace(/^@media ?/,"")),u=!0}c+=g,h=!0}++g}if(p&&p.length&&(a={["@media "+p.join(", ")]:a}),!h)continue e}}}(i[c]=i[c]||[]).push([r?"cv":`${l}-${s[l]}`,a,u])}return i},Al={},Ol=rn(),Pl=(t,e)=>Ol(t,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let s=mt(i);if(!e.rules.global.cache.has(s)){if(e.rules.global.cache.add(s),"@import"in i){let a=[].indexOf.call(e.sheet.cssRules,e.rules.themed.group)-1;for(let o of[].concat(i["@import"]))o=o.includes('"')||o.includes("'")?o:`"${o}"`,e.sheet.insertRule(`@import ${o};`,a++);delete i["@import"]}At(i,[],[],t,a=>{e.rules.global.apply(a)})}}return""};return Dr(r,{toString:r})}),Nl=rn(),Dl=(t,e)=>Nl(t,()=>n=>{const r=`${Ye(t.prefix)}k-${mt(n)}`,i=()=>{if(!e.rules.global.cache.has(r)){e.rules.global.cache.add(r);const s=[];At(n,[],[],t,o=>s.push(o));const a=`@keyframes ${r}{${s.join("")}}`;e.rules.global.apply(a)}return r};return Dr(i,{get name(){return i()},toString:i})}),Ll=class{constructor(t,e,n,r){this.token=t==null?"":String(t),this.value=e==null?"":String(e),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Ye(this.prefix)+Ye(this.scale)+this.token}toString(){return this.computedValue}},Ml=rn(),Bl=(t,e)=>Ml(t,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${Ye(t.prefix)}t-${mt(r)}`}`,s={},a=[];for(const l in r){s[l]={};for(const c in r[l]){const u=`--${Ye(t.prefix)}${l}-${c}`,f=Xs(String(r[l][c]),t.prefix,l);s[l][c]=new Ll(c,f,l,t.prefix),a.push(`${u}:${f}`)}}const o=()=>{if(a.length&&!e.rules.themed.cache.has(n)){e.rules.themed.cache.add(n);const l=`${r===t.theme?":root,":""}.${n}{${a.join(";")}}`;e.rules.themed.apply(l)}return n};return{...s,get className(){return o()},selector:i,toString:o}}),zl=rn(),Ul=t=>{let e=!1;const n=zl(t,r=>{e=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",s=typeof r.media=="object"&&r.media||{},a=typeof r.root=="object"?r.root||null:globalThis.document||null,o=typeof r.theme=="object"&&r.theme||{},l={prefix:i,media:s,theme:o,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...Js},utils:typeof r.utils=="object"&&r.utils||{}},c=Il(a),u={css:Tl(l,c),globalCss:Pl(l,c),keyframes:Dl(l,c),createTheme:Bl(l,c),reset(){c.reset(),u.theme.toString()},theme:{},sheet:c,config:l,prefix:i,getCssText:c.toString,toString:c.toString};return String(u.theme=u.createTheme(o)),u});return e||n.reset(),n};const{css:Qt,globalCss:Ys,keyframes:Wl,getCssText:d1,theme:Zs,createTheme:jl,config:h1,reset:m1}=Ul({prefix:"svelteui",theme:{colors:Ks,space:{0:"0rem",xs:10,sm:12,md:16,lg:20,xl:24,xsPX:"10px",smPX:"12px",mdPX:"16px",lgPX:"20px",xlPX:"24px",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",7:"0.875rem",8:"1rem",9:"1.25rem",10:"1.5rem",11:"1.75rem",12:"2rem",13:"2.25rem",14:"2.5rem",15:"2.75rem",16:"3rem",17:"3.5rem",18:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},fonts:{standard:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fallback:"Segoe UI, system-ui, sans-serif"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeights:{xs:1,sm:1.25,md:1.5,lg:1.625,xl:1.75},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},sizes:{},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"32px",squared:"33%",rounded:"50%",pill:"9999px"},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},zIndices:{1:"100",2:"200",3:"300",4:"400",5:"500",10:"1000",max:"9999"},borderWidths:{light:"1px",normal:"2px",bold:"3px",extrabold:"4px",black:"5px",xs:"1px",sm:"2px",md:"3px",lg:"4px",xl:"5px"},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},borderStyles:{},transitions:{}},media:{xs:"(min-width: 576px)",sm:"(min-width: 768px)",md:"(min-width: 992px)",lg:"(min-width: 1200px)",xl:"(min-width: 1400px)"},utils:{focusRing:t=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:t==="always"||t==="auto"?"2px solid $primary":"none"},"&:focus:not(:focus-visible)":{outline:t==="auto"||t==="never"?"none":void 0}}),p:t=>({padding:t}),pt:t=>({paddingTop:t}),pr:t=>({paddingRight:t}),pb:t=>({paddingBottom:t}),pl:t=>({paddingLeft:t}),px:t=>({paddingLeft:t,paddingRight:t}),py:t=>({paddingTop:t,paddingBottom:t}),m:t=>({margin:t}),mt:t=>({marginTop:t}),mr:t=>({marginRight:t}),mb:t=>({marginBottom:t}),ml:t=>({marginLeft:t}),mx:t=>({marginLeft:t,marginRight:t}),my:t=>({marginTop:t,marginBottom:t}),ta:t=>({textAlign:t}),tt:t=>({textTransform:t}),to:t=>({textOverflow:t}),d:t=>({display:t}),dflex:t=>({display:"flex",alignItems:t,justifyContent:t}),fd:t=>({flexDirection:t}),fw:t=>({flexWrap:t}),ai:t=>({alignItems:t}),ac:t=>({alignContent:t}),jc:t=>({justifyContent:t}),as:t=>({alignSelf:t}),fg:t=>({flexGrow:t}),fs:t=>({fontSize:t}),fb:t=>({flexBasis:t}),bc:t=>({backgroundColor:t}),bf:t=>({backdropFilter:t}),bg:t=>({background:t}),bgBlur:t=>({bf:"saturate(180%) blur(10px)",bg:t}),bgColor:t=>({backgroundColor:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),bgClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),br:t=>({borderRadius:t}),bw:t=>({borderWidth:t}),btrr:t=>({borderTopRightRadius:t}),bbrr:t=>({borderBottomRightRadius:t}),bblr:t=>({borderBottomLeftRadius:t}),btlr:t=>({borderTopLeftRadius:t}),bs:t=>({boxShadow:t}),normalShadow:t=>({boxShadow:`0 4px 14px 0 $${t}`}),lh:t=>({lineHeight:t}),ov:t=>({overflow:t}),ox:t=>({overflowX:t}),oy:t=>({overflowY:t}),pe:t=>({pointerEvents:t}),events:t=>({pointerEvents:t}),us:t=>({WebkitUserSelect:t,userSelect:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),w:t=>({width:t}),h:t=>({height:t}),minW:t=>({minWidth:t}),minH:t=>({minWidth:t}),mw:t=>({maxWidth:t}),maxW:t=>({maxWidth:t}),mh:t=>({maxHeight:t}),maxH:t=>({maxHeight:t}),size:t=>({width:t,height:t}),minSize:t=>({minWidth:t,minHeight:t,width:t,height:t}),sizeMin:t=>({minWidth:t,minHeight:t,width:t,height:t}),maxSize:t=>({maxWidth:t,maxHeight:t}),sizeMax:t=>({maxWidth:t,maxHeight:t}),appearance:t=>({WebkitAppearance:t,appearance:t}),scale:t=>({transform:`scale(${t})`}),linearGradient:t=>({backgroundImage:`linear-gradient(${t})`}),tdl:t=>({textDecorationLine:t}),textGradient:t=>({backgroundImage:`linear-gradient(${t})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"})},themeMap:{...Js,width:"space",height:"space",minWidth:"space",maxWidth:"space",minHeight:"space",maxHeight:"space",flexBasis:"space",gridTemplateColumns:"space",gridTemplateRows:"space",blockSize:"space",minBlockSize:"space",maxBlockSize:"space",inlineSize:"space",minInlineSize:"space",maxInlineSize:"space",borderWidth:"borderWeights"}}),Be=jl("dark-theme",{colors:Ks,shadows:{xs:"-4px 0 15px rgb(0 0 0 / 50%)",sm:"0 5px 20px -5px rgba(20, 20, 20, 0.1)",md:"0 8px 30px rgba(20, 20, 20, 0.15)",lg:"0 30px 60px rgba(20, 20, 20, 0.15)",xl:"0 40px 80px rgba(20, 20, 20, 0.25)"}}),Fl=Ys({a:{focusRing:"auto"},body:{[`${Be.selector} &`]:{backgroundColor:"$dark700",color:"$dark50"},backgroundColor:"$white",color:"$black"}}),Hl=Ys({html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%",margin:0},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em",margin:0},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}}),bn={xs:18,sm:22,md:28,lg:34,xl:44};function Vl(t,e){const n={from:"indigo",to:"cyan",deg:45};return e==="hover"||e==="transparent"?{[`${e}`]:{[`${Be.selector} &`]:{color:`$${t}800`,"&:hover":{backgroundColor:e==="transparent"?null:"$dark800"}},border:"1px solid transparent",backgroundColor:"transparent",color:`$${t}700`,"&:hover":{backgroundColor:e==="transparent"?null:`$${t}50`},"&:disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"}}}:Gs(t,n)}const ql=Me((t,{color:e,radius:n,size:r,variant:i})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:typeof r=="string"?bn[r]:`${r}px`,minHeight:typeof r=="string"?bn[r]:`${r}px`,width:typeof r=="string"?bn[r]:`${r}px`,minWidth:typeof r=="string"?bn[r]:`${r}px`,borderRadius:`$${n}`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"},"&.loading":{"&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${n}`,cursor:"not-allowed"}}},variants:{variation:Vl(e,i)}})),Gl=Object.freeze([{error:!0,message:"If using the 'href' prop, set 'root' prop to an anchor ('a') tag",solution:`
                If your component looks like this:

                &lt;ActionIcon href='https://example.com'&gt;
                          ^^^ - Try adding prop root='a'
                       &lt;Icon /&gt;
                &lt;/ActionIcon&gt;
                `}]),bi={mt:"marginTop",mb:"marginBottom",ml:"marginLeft",mr:"marginRight",pt:"paddingTop",pb:"paddingBottom",pl:"paddingLeft",pr:"paddingRight"},Kl=["-xs","-sm","-md","-lg","-xl"];function ft(t){return typeof t=="string"||typeof t=="number"}function dt(t,e){return Kl.includes(t)?e.fn.size({size:t.replace("-",""),sizes:e.space})*-1:e.fn.size({size:t,sizes:e.space})}function Jl(t,e){const n={};if(ft(t.p)){const r=dt(t.p,e);n.padding=r}if(ft(t.m)){const r=dt(t.m,e);n.margin=r}if(ft(t.py)){const r=dt(t.py,e);n.paddingTop=r,n.paddingBottom=r}if(ft(t.px)){const r=dt(t.px,e);n.paddingLeft=r,n.paddingRight=r}if(ft(t.my)){const r=dt(t.my,e);n.marginTop=r,n.marginBottom=r}if(ft(t.mx)){const r=dt(t.mx,e);n.marginLeft=r,n.marginRight=r}return Object.keys(bi).forEach(r=>{ft(t[r])&&(n[bi[r]]=e.fn.size({size:dt(t[r],e),sizes:e.space}))}),n}function Xl(t){let e,n,r,i,s,a;const o=t[28].default,l=se(o,t,t[32],null);let c=[{class:n=t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]],u={};for(let f=0;f<c.length;f+=1)u=z(u,c[f]);return{c(){e=te("div"),l&&l.c(),De(e,u)},m(f,d){A(f,e,d),l&&l.m(e,null),t[31](e),i=!0,s||(a=[ge(t[8].call(null,e)),ge(r=ie.call(null,e,t[1]))],s=!0)},p(f,d){l&&l.p&&(!i||d[1]&2)&&ae(l,o,f,f[32],i?oe(o,f[32],d,null):le(f[32]),null),De(e,u=ce(c,[(!i||d[0]&196&&n!==(n=f[2]+" "+f[7]({css:{...f[11](f[10]),...f[6]}})))&&{class:n},d[0]&4096&&f[12]])),r&&ve(r.update)&&d[0]&2&&r.update.call(null,f[1])},i(f){i||(y(l,f),i=!0)},o(f){k(l,f),i=!1},d(f){f&&R(e),l&&l.d(f),t[31](null),s=!1,Ae(a)}}}function Yl(t){let e,n,r;const i=[{use:[t[8],[ie,t[1]]]},{class:t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]];var s=t[3];function a(o){let l={$$slots:{default:[xl]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=z(l,i[c]);return{props:l}}return s&&(e=ut(s,a(t)),t[30](e)),{c(){e&&L(e.$$.fragment),n=Ie()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,l){const c=l[0]&7622?ce(i,[l[0]&258&&{use:[o[8],[ie,o[1]]]},l[0]&3268&&{class:o[2]+" "+o[7]({css:{...o[11](o[10]),...o[6]}})},l[0]&4096&&ke(o[12])]):{};if(l[1]&2&&(c.$$scope={dirty:l,ctx:o}),l[0]&8&&s!==(s=o[3])){if(e){ue();const u=e;k(u.$$.fragment,1,0,()=>{N(u,1)}),fe()}s?(e=ut(s,a(o)),o[30](e),L(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){t[30](null),o&&R(n),e&&N(e,o)}}}function Zl(t){let e,n=t[9]()&&Ql(t);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){r[9]()&&n.p(r,i)},i(r){e||(y(n),e=!0)},o(r){k(n),e=!1},d(r){n&&n.d(r)}}}function xl(t){let e;const n=t[28].default,r=se(n,t,t[32],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[1]&2)&&ae(r,n,i,i[32],e?oe(n,i[32],s,null):le(i[32]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Ql(t){let e,n,r,i,s,a;const o=t[28].default,l=se(o,t,t[32],null);let c=[{class:n=t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]],u={};for(let f=0;f<c.length;f+=1)u=z(u,c[f]);return{c(){e=te(t[9]()),l&&l.c(),Rn(t[9]())(e,u)},m(f,d){A(f,e,d),l&&l.m(e,null),t[29](e),i=!0,s||(a=[ge(t[8].call(null,e)),ge(r=ie.call(null,e,t[1]))],s=!0)},p(f,d){l&&l.p&&(!i||d[1]&2)&&ae(l,o,f,f[32],i?oe(o,f[32],d,null):le(f[32]),null),Rn(f[9]())(e,u=ce(c,[(!i||d[0]&196&&n!==(n=f[2]+" "+f[7]({css:{...f[11](f[10]),...f[6]}})))&&{class:n},d[0]&4096&&f[12]])),r&&ve(r.update)&&d[0]&2&&r.update.call(null,f[1])},i(f){i||(y(l,f),i=!0)},o(f){k(l,f),i=!1},d(f){f&&R(e),l&&l.d(f),t[29](null),s=!1,Ae(a)}}}function $l(t){let e,n,r,i;const s=[Zl,Yl,Xl],a=[];function o(l,c){return l[4]?0:l[5]&&typeof l[3]!="string"?1:2}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function ec(t,e,n){var Qe;let r,i;const s=["use","element","class","css","root","m","my","mx","mt","mb","ml","mr","p","py","px","pt","pb","pl","pr"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",css:d={},root:h=void 0,m:p=void 0,my:g=void 0,mx:_=void 0,mt:b=void 0,mb:v=void 0,ml:w=void 0,mr:I=void 0,p:T=void 0,py:O=void 0,px:E=void 0,pt:V=void 0,pb:q=void 0,pl:C=void 0,pr:S=void 0}=e;const G=He(Ce()),M=()=>h,j=((Qe=Wt())==null?void 0:Qe.theme)||bt(),F=typeof d=="function"?d:()=>d;let Le,Se;function U(H){$[H?"unshift":"push"](()=>{u=H,n(0,u)})}function It(H){$[H?"unshift":"push"](()=>{u=H,n(0,u)})}function Ft(H){$[H?"unshift":"push"](()=>{u=H,n(0,u)})}return t.$$set=H=>{e=z(z({},e),ye(H)),n(12,a=Y(e,s)),"use"in H&&n(1,c=H.use),"element"in H&&n(0,u=H.element),"class"in H&&n(2,f=H.class),"css"in H&&n(13,d=H.css),"root"in H&&n(3,h=H.root),"m"in H&&n(14,p=H.m),"my"in H&&n(15,g=H.my),"mx"in H&&n(16,_=H.mx),"mt"in H&&n(17,b=H.mt),"mb"in H&&n(18,v=H.mb),"ml"in H&&n(19,w=H.ml),"mr"in H&&n(20,I=H.mr),"p"in H&&n(21,T=H.p),"py"in H&&n(22,O=H.py),"px"in H&&n(23,E=H.px),"pt"in H&&n(24,V=H.pt),"pb"in H&&n(25,q=H.pb),"pl"in H&&n(26,C=H.pl),"pr"in H&&n(27,S=H.pr),"$$scope"in H&&n(32,l=H.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&8&&(n(4,Le=h&&typeof h=="string"),n(5,Se=h&&typeof h=="function")),t.$$.dirty[0]&268419072&&n(6,i=Jl({m:p,my:g,mx:_,mt:b,mb:v,ml:w,mr:I,p:T,py:O,px:E,pt:V,pb:q,pl:C,pr:S},j))},r=Qt({}),[u,c,f,h,Le,Se,i,r,G,M,j,F,a,d,p,g,_,b,v,w,I,T,O,E,V,q,C,S,o,U,It,Ft,l]}class tc extends Q{constructor(e){super(),x(this,e,ec,$l,Z,{use:1,element:0,class:2,css:13,root:3,m:14,my:15,mx:16,mt:17,mb:18,ml:19,mr:20,p:21,py:22,px:23,pt:24,pb:25,pl:26,pr:27},null,[-1,-1])}}const ze=tc;function nc(t){let e,n,r,i,s,a,o,l,c,u,f;return{c(){e=X("svg"),n=X("g"),r=X("g"),i=X("circle"),s=X("path"),a=X("animateTransform"),m(i,"stroke-opacity",".5"),m(i,"cx","16"),m(i,"cy","16"),m(i,"r","16"),m(a,"attributeName","transform"),m(a,"type","rotate"),m(a,"from","0 16 16"),m(a,"to","360 16 16"),m(a,"dur","1s"),m(a,"repeatCount","indefinite"),m(s,"d","M32 16c0-9.94-8.06-16-16-16"),m(r,"transform","translate(2.5 2.5)"),m(r,"stroke-width","5"),m(n,"fill","none"),m(n,"fill-rule","evenodd"),m(e,"width",o=`${t[1]}px`),m(e,"height",l=`${t[1]}px`),m(e,"viewBox","0 0 38 38"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"stroke",t[2]),m(e,"class",t[3])},m(d,h){A(d,e,h),J(e,n),J(n,r),J(r,i),J(r,s),J(s,a),u||(f=ge(c=ie.call(null,e,t[0])),u=!0)},p(d,[h]){h&2&&o!==(o=`${d[1]}px`)&&m(e,"width",o),h&2&&l!==(l=`${d[1]}px`)&&m(e,"height",l),h&4&&m(e,"stroke",d[2]),h&8&&m(e,"class",d[3]),c&&ve(c.update)&&h&1&&c.update.call(null,d[0])},i:ne,o:ne,d(d){d&&R(e),u=!1,f()}}}function rc(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class ic extends Q{constructor(e){super(),x(this,e,rc,nc,Z,{use:0,size:1,color:2,class:3})}}const sc=ic;function oc(t){let e,n,r,i,s,a,o,l,c,u,f,d,h,p,g,_,b,v,w,I;return{c(){e=X("svg"),n=X("rect"),r=X("animate"),i=X("animate"),s=X("rect"),a=X("animate"),o=X("animate"),l=X("rect"),c=X("animate"),u=X("animate"),f=X("rect"),d=X("animate"),h=X("animate"),p=X("rect"),g=X("animate"),_=X("animate"),m(r,"attributeName","height"),m(r,"begin","0.5s"),m(r,"dur","1s"),m(r,"values","120;110;100;90;80;70;60;50;40;140;120"),m(r,"calcMode","linear"),m(r,"repeatCount","indefinite"),m(i,"attributeName","y"),m(i,"begin","0.5s"),m(i,"dur","1s"),m(i,"values","10;15;20;25;30;35;40;45;50;0;10"),m(i,"calcMode","linear"),m(i,"repeatCount","indefinite"),m(n,"y","10"),m(n,"width","15"),m(n,"height","120"),m(n,"rx","6"),m(a,"attributeName","height"),m(a,"begin","0.25s"),m(a,"dur","1s"),m(a,"values","120;110;100;90;80;70;60;50;40;140;120"),m(a,"calcMode","linear"),m(a,"repeatCount","indefinite"),m(o,"attributeName","y"),m(o,"begin","0.25s"),m(o,"dur","1s"),m(o,"values","10;15;20;25;30;35;40;45;50;0;10"),m(o,"calcMode","linear"),m(o,"repeatCount","indefinite"),m(s,"x","30"),m(s,"y","10"),m(s,"width","15"),m(s,"height","120"),m(s,"rx","6"),m(c,"attributeName","height"),m(c,"begin","0s"),m(c,"dur","1s"),m(c,"values","120;110;100;90;80;70;60;50;40;140;120"),m(c,"calcMode","linear"),m(c,"repeatCount","indefinite"),m(u,"attributeName","y"),m(u,"begin","0s"),m(u,"dur","1s"),m(u,"values","10;15;20;25;30;35;40;45;50;0;10"),m(u,"calcMode","linear"),m(u,"repeatCount","indefinite"),m(l,"x","60"),m(l,"width","15"),m(l,"height","140"),m(l,"rx","6"),m(d,"attributeName","height"),m(d,"begin","0.25s"),m(d,"dur","1s"),m(d,"values","120;110;100;90;80;70;60;50;40;140;120"),m(d,"calcMode","linear"),m(d,"repeatCount","indefinite"),m(h,"attributeName","y"),m(h,"begin","0.25s"),m(h,"dur","1s"),m(h,"values","10;15;20;25;30;35;40;45;50;0;10"),m(h,"calcMode","linear"),m(h,"repeatCount","indefinite"),m(f,"x","90"),m(f,"y","10"),m(f,"width","15"),m(f,"height","120"),m(f,"rx","6"),m(g,"attributeName","height"),m(g,"begin","0.5s"),m(g,"dur","1s"),m(g,"values","120;110;100;90;80;70;60;50;40;140;120"),m(g,"calcMode","linear"),m(g,"repeatCount","indefinite"),m(_,"attributeName","y"),m(_,"begin","0.5s"),m(_,"dur","1s"),m(_,"values","10;15;20;25;30;35;40;45;50;0;10"),m(_,"calcMode","linear"),m(_,"repeatCount","indefinite"),m(p,"x","120"),m(p,"y","10"),m(p,"width","15"),m(p,"height","120"),m(p,"rx","6"),m(e,"viewBox","0 0 135 140"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill",t[2]),m(e,"width",b=`${t[1]}px`),m(e,"class",t[3])},m(T,O){A(T,e,O),J(e,n),J(n,r),J(n,i),J(e,s),J(s,a),J(s,o),J(e,l),J(l,c),J(l,u),J(e,f),J(f,d),J(f,h),J(e,p),J(p,g),J(p,_),w||(I=ge(v=ie.call(null,e,t[0])),w=!0)},p(T,[O]){O&4&&m(e,"fill",T[2]),O&2&&b!==(b=`${T[1]}px`)&&m(e,"width",b),O&8&&m(e,"class",T[3]),v&&ve(v.update)&&O&1&&v.update.call(null,T[0])},i:ne,o:ne,d(T){T&&R(e),w=!1,I()}}}function ac(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class lc extends Q{constructor(e){super(),x(this,e,ac,oc,Z,{use:0,size:1,color:2,class:3})}}const cc=lc;function uc(t){let e,n,r,i,s,a,o,l,c,u,f,d,h,p,g;return{c(){e=X("svg"),n=X("circle"),r=X("animate"),i=X("animate"),s=X("circle"),a=X("animate"),o=X("animate"),l=X("circle"),c=X("animate"),u=X("animate"),m(r,"attributeName","r"),m(r,"from","15"),m(r,"to","15"),m(r,"begin","0s"),m(r,"dur","0.8s"),m(r,"values","15;9;15"),m(r,"calcMode","linear"),m(r,"repeatCount","indefinite"),m(i,"attributeName","fill-opacity"),m(i,"from","1"),m(i,"to","1"),m(i,"begin","0s"),m(i,"dur","0.8s"),m(i,"values","1;.5;1"),m(i,"calcMode","linear"),m(i,"repeatCount","indefinite"),m(n,"cx","15"),m(n,"cy","15"),m(n,"r","15"),m(a,"attributeName","r"),m(a,"from","9"),m(a,"to","9"),m(a,"begin","0s"),m(a,"dur","0.8s"),m(a,"values","9;15;9"),m(a,"calcMode","linear"),m(a,"repeatCount","indefinite"),m(o,"attributeName","fill-opacity"),m(o,"from","0.5"),m(o,"to","0.5"),m(o,"begin","0s"),m(o,"dur","0.8s"),m(o,"values",".5;1;.5"),m(o,"calcMode","linear"),m(o,"repeatCount","indefinite"),m(s,"cx","60"),m(s,"cy","15"),m(s,"r","9"),m(s,"fill-opacity","0.3"),m(c,"attributeName","r"),m(c,"from","15"),m(c,"to","15"),m(c,"begin","0s"),m(c,"dur","0.8s"),m(c,"values","15;9;15"),m(c,"calcMode","linear"),m(c,"repeatCount","indefinite"),m(u,"attributeName","fill-opacity"),m(u,"from","1"),m(u,"to","1"),m(u,"begin","0s"),m(u,"dur","0.8s"),m(u,"values","1;.5;1"),m(u,"calcMode","linear"),m(u,"repeatCount","indefinite"),m(l,"cx","105"),m(l,"cy","15"),m(l,"r","15"),m(e,"width",f=`${t[1]}px`),m(e,"height",d=`${Number(t[1])/4}px`),m(e,"viewBox","0 0 120 30"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill",t[2]),m(e,"class",t[3])},m(_,b){A(_,e,b),J(e,n),J(n,r),J(n,i),J(e,s),J(s,a),J(s,o),J(e,l),J(l,c),J(l,u),p||(g=ge(h=ie.call(null,e,t[0])),p=!0)},p(_,[b]){b&2&&f!==(f=`${_[1]}px`)&&m(e,"width",f),b&2&&d!==(d=`${Number(_[1])/4}px`)&&m(e,"height",d),b&4&&m(e,"fill",_[2]),b&8&&m(e,"class",_[3]),h&&ve(h.update)&&b&1&&h.update.call(null,_[0])},i:ne,o:ne,d(_){_&&R(e),p=!1,g()}}}function fc(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class dc extends Q{constructor(e){super(),x(this,e,fc,uc,Z,{use:0,size:1,color:2,class:3})}}const hc=dc,_i={xs:18,sm:22,md:36,lg:44,xl:58},yi=(t,e=!1)=>Zs.colors[e?`${t}400`:`${t}600`].value;function mc(t){let e,n,r;const i=[{use:[t[5],[ie,t[1]]]},{color:t[4]==="white"?"white":yi(t[4])},{size:_i[t[3]]},{class:t[2]},t[8]];var s=t[6][t[7]];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=z(l,i[c]);return{props:l}}return s&&(e=ut(s,a()),t[10](e)),{c(){e&&L(e.$$.fragment),n=Ie()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,[l]){const c=l&318?ce(i,[l&34&&{use:[o[5],[ie,o[1]]]},l&16&&{color:o[4]==="white"?"white":yi(o[4])},l&8&&{size:_i[o[3]]},l&4&&{class:o[2]},l&256&&ke(o[8])]):{};if(s!==(s=o[6][o[7]])){if(e){ue();const u=e;k(u.$$.fragment,1,0,()=>{N(u,1)}),fe()}s?(e=ut(s,a()),o[10](e),L(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){t[10](null),o&&R(n),e&&N(e,o)}}}function gc(t,e,n){const r=["use","element","class","size","color","variant"];let i=Y(e,r),{use:s=[],element:a=void 0,class:o="",size:l="md",color:c="blue",variant:u="circle"}=e;const f=He(Ce()),d={bars:cc,circle:sc,dots:hc},h=u in d?u:"circle";function p(g){$[g?"unshift":"push"](()=>{a=g,n(0,a)})}return t.$$set=g=>{e=z(z({},e),ye(g)),n(8,i=Y(e,r)),"use"in g&&n(1,s=g.use),"element"in g&&n(0,a=g.element),"class"in g&&n(2,o=g.class),"size"in g&&n(3,l=g.size),"color"in g&&n(4,c=g.color),"variant"in g&&n(9,u=g.variant)},[a,s,o,l,c,f,d,h,i,u,p]}class pc extends Q{constructor(e){super(),x(this,e,gc,mc,Z,{use:1,element:0,class:2,size:3,color:4,variant:9})}}const sn=pc;function bc(t){let e;const n=t[20].default,r=se(n,t,t[22],null),i=r||yc();return{c(){i&&i.c()},m(s,a){i&&i.m(s,a),e=!0},p(s,a){r&&r.p&&(!e||a&4194304)&&ae(r,n,s,s[22],e?oe(n,s[22],a,null):le(s[22]),null)},i(s){e||(y(i,s),e=!0)},o(s){k(i,s),e=!1},d(s){i&&i.d(s)}}}function _c(t){let e,n;return e=new sn({props:{size:t[6].size,color:t[6].color,variant:t[6].variant}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&64&&(s.size=r[6].size),i&64&&(s.color=r[6].color),i&64&&(s.variant=r[6].variant),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function yc(t){let e;return{c(){e=we("+")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function kc(t){let e,n,r,i;const s=[_c,bc],a=[];function o(l,c){return l[7]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function vc(t){let e,n,r,i,s;e=new Or({props:{observable:t[11],component:"ActionIcon",code:t[12]}});const a=[{use:[t[15],[ie,t[2]]]},{tabindex:0},{disabled:t[8]||t[7]},{class:t[14](t[3],{loading:t[7],disabled:t[8]},t[13]({css:t[1],variation:t[5]}))},{target:t[10]?"_blank":null},{rel:t[10]?"noreferrer noopener":null},{root:t[4]},{href:t[9]},t[16]];function o(c){t[21](c)}let l={$$slots:{default:[kc]},$$scope:{ctx:t}};for(let c=0;c<a.length;c+=1)l=z(l,a[c]);return t[0]!==void 0&&(l.element=t[0]),r=new ze({props:l}),$.push(()=>_e(r,"element",o)),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(c,u){P(e,c,u),A(c,n,u),P(r,c,u),s=!0},p(c,[u]){const f={};u&2048&&(f.observable=c[11]),u&4096&&(f.code=c[12]),e.$set(f);const d=u&124862?ce(a,[u&32772&&{use:[c[15],[ie,c[2]]]},a[1],u&384&&{disabled:c[8]||c[7]},u&25002&&{class:c[14](c[3],{loading:c[7],disabled:c[8]},c[13]({css:c[1],variation:c[5]}))},u&1024&&{target:c[10]?"_blank":null},u&1024&&{rel:c[10]?"noreferrer noopener":null},u&16&&{root:c[4]},u&512&&{href:c[9]},u&65536&&ke(c[16])]):{};u&4194496&&(d.$$scope={dirty:u,ctx:c}),!i&&u&1&&(i=!0,d.element=c[0],Te(()=>i=!1)),r.$set(d)},i(c){s||(y(e.$$.fragment,c),y(r.$$.fragment,c),s=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),s=!1},d(c){N(e,c),c&&R(n),N(r,c)}}}function Ic(t,e,n){let r,i;const s=["use","element","class","override","root","color","variant","size","radius","loaderProps","loading","disabled","href","external"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},root:h="button",color:p="gray",variant:g="hover",size:_="md",radius:b="sm",loaderProps:v={size:"xs",color:"gray",variant:"circle"},loading:w=!1,disabled:I=!1,href:T="",external:O=!1}=e;const E=He(Ce());let V=!1,q;h!=="a"&&e.href&&(V=!0,q=Gl[0]);function C(S){u=S,n(0,u)}return t.$$set=S=>{n(23,e=z(z({},e),ye(S))),n(16,a=Y(e,s)),"use"in S&&n(2,c=S.use),"element"in S&&n(0,u=S.element),"class"in S&&n(3,f=S.class),"override"in S&&n(1,d=S.override),"root"in S&&n(4,h=S.root),"color"in S&&n(17,p=S.color),"variant"in S&&n(5,g=S.variant),"size"in S&&n(18,_=S.size),"radius"in S&&n(19,b=S.radius),"loaderProps"in S&&n(6,v=S.loaderProps),"loading"in S&&n(7,w=S.loading),"disabled"in S&&n(8,I=S.disabled),"href"in S&&n(9,T=S.href),"external"in S&&n(10,O=S.external),"$$scope"in S&&n(22,l=S.$$scope)},t.$$.update=()=>{t.$$.dirty&2048&&V&&n(1,d={display:"none"}),t.$$.dirty&917536&&n(14,{cx:r,getStyles:i}=ql({color:p,radius:b,size:_,variant:g},{name:"ActionIcon"}),r,(n(13,i),n(17,p),n(19,b),n(18,_),n(5,g)))},e=ye(e),[u,d,c,f,h,g,v,w,I,T,O,V,q,i,r,E,a,p,_,b,o,C,l]}class Sc extends Q{constructor(e){super(),x(this,e,Ic,vc,Z,{use:2,element:0,class:3,override:1,root:4,color:17,variant:5,size:18,radius:19,loaderProps:6,loading:7,disabled:8,href:9,external:10})}}const Ec=Sc;function Tc(t){let e,n,r=[{width:t[0]},{height:t[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[2]],i={};for(let s=0;s<r.length;s+=1)i=z(i,r[s]);return{c(){e=X("svg"),n=X("path"),m(n,"d","M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"),m(n,"fill","currentColor"),m(n,"fill-rule","evenodd"),m(n,"clip-rule","evenodd"),ii(e,i)},m(s,a){A(s,e,a),J(e,n)},p(s,[a]){ii(e,i=ce(r,[a&1&&{width:s[0]},a&2&&{height:s[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&4&&s[2]]))},i:ne,o:ne,d(s){s&&R(e)}}}function wc(t,e,n){const r=["width","height"];let i=Y(e,r),{width:s=16}=e,{height:a=16}=e;return t.$$set=o=>{e=z(z({},e),ye(o)),n(2,i=Y(e,r)),"width"in o&&n(0,s=o.width),"height"in o&&n(1,a=o.height)},[s,a,i]}class Cc extends Q{constructor(e){super(),x(this,e,wc,Tc,Z,{width:0,height:1})}}const Rc=Cc;function Ac(t){let e,n;return e=new Rc({props:{width:t[16][t[4]],height:t[16][t[4]]}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&16&&(s.width=r[16][r[4]]),i&16&&(s.height=r[16][r[4]]),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Oc(t){let e,n,r;const i=[{class:t[2]},{use:[t[15],[ie,t[1]]]},{override:t[3]},{root:t[5]},{color:t[6]},{variant:t[7]},{size:t[8]},{radius:t[9]},{loaderProps:t[10]},{loading:t[11]},{disabled:t[12]},{href:t[13]},{external:t[14]},t[17]];function s(o){t[18](o)}let a={$$slots:{default:[Ac]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new Ec({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&196590?ce(i,[l&4&&{class:o[2]},l&32770&&{use:[o[15],[ie,o[1]]]},l&8&&{override:o[3]},l&32&&{root:o[5]},l&64&&{color:o[6]},l&128&&{variant:o[7]},l&256&&{size:o[8]},l&512&&{radius:o[9]},l&1024&&{loaderProps:o[10]},l&2048&&{loading:o[11]},l&4096&&{disabled:o[12]},l&8192&&{href:o[13]},l&16384&&{external:o[14]},l&131072&&ke(o[17])]):{};l&524304&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Pc(t,e,n){const r=["use","element","class","override","iconSize","root","color","variant","size","radius","loaderProps","loading","disabled","href","external"];let i=Y(e,r),{use:s=[],element:a=void 0,class:o="",override:l={},iconSize:c="md",root:u="button",color:f="gray",variant:d="hover",size:h="md",radius:p="sm",loaderProps:g={size:"xs",color:"gray",variant:"circle"},loading:_=!1,disabled:b=!1,href:v="",external:w=!1}=e;const I=He(Ce()),T={xs:12,sm:14,md:16,lg:20,xl:24};function O(E){a=E,n(0,a)}return t.$$set=E=>{e=z(z({},e),ye(E)),n(17,i=Y(e,r)),"use"in E&&n(1,s=E.use),"element"in E&&n(0,a=E.element),"class"in E&&n(2,o=E.class),"override"in E&&n(3,l=E.override),"iconSize"in E&&n(4,c=E.iconSize),"root"in E&&n(5,u=E.root),"color"in E&&n(6,f=E.color),"variant"in E&&n(7,d=E.variant),"size"in E&&n(8,h=E.size),"radius"in E&&n(9,p=E.radius),"loaderProps"in E&&n(10,g=E.loaderProps),"loading"in E&&n(11,_=E.loading),"disabled"in E&&n(12,b=E.disabled),"href"in E&&n(13,v=E.href),"external"in E&&n(14,w=E.external)},[a,s,o,l,c,u,f,d,h,p,g,_,b,v,w,I,T,i,O]}class Nc extends Q{constructor(e){super(),x(this,e,Pc,Oc,Z,{use:1,element:0,class:2,override:3,iconSize:4,root:5,color:6,variant:7,size:8,radius:9,loaderProps:10,loading:11,disabled:12,href:13,external:14})}}const Dc=Nc,Lc='input, textarea, select, a, button, [tabindex]:not([tabindex="-1"])';function Mc(t){let e=t.querySelector("[autofocus]");if(!e){const n=t.querySelectorAll(Lc);if(n.length===0)return;e=n[0]}setTimeout(()=>e==null?void 0:e.focus({preventScroll:!0}),0)}function Bc(){const t=document.createElement("style");return t.type="text/css",t.setAttribute("svelteui-scroll-lock",""),t}function zc(){if(typeof window>"u"||typeof document>"u")return 0;const t=parseInt(window.getComputedStyle(document.body).paddingRight,10),e=window.innerWidth-document.documentElement.clientWidth;return t+e}const Uc=({disableBodyPadding:t})=>{const e=t?null:zc();return`body {
        --removed-scroll-width: ${e}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${e?"padding-right: var(--removed-scroll-width) !important;":""}
        `};function Wc(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function jc(t){(document.head||document.getElementsByTagName("head")[0]).appendChild(t)}const ki=()=>typeof window<"u",xs={browser:ki(),server:!ki()},Fc=xs.browser?window:void 0;function Hc(t,e,n={disableBodyPadding:!1}){const{browser:r}=xs;let i;r&&(i=Fc);let s=e??!1;const{disableBodyPadding:a}=n;let o;const l=()=>{const u=Uc({disableBodyPadding:a}),f=Bc();Wc(f,u),jc(f),o=f},c=()=>{var u;o&&((u=o==null?void 0:o.parentNode)==null||u.removeChild(o),o=null)};return s?l():c(),e!==void 0&&(s=e),e===void 0&&typeof i<"u"&&i.document.body.style.overflow==="hidden"&&(s=e),{update:u=>{u?l():(i.document.body.style.overflow==="visible"&&(s=e),c())},destroy:()=>{c()}}}function Vc(t,e="body"){let n;async function r(s){if(e=s,typeof e=="string"){if(n=document.querySelector(e),n===null&&(await Fs(),n=document.querySelector(e)),n===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)n=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);n.appendChild(t),t.hidden=!1}function i(){t.parentNode&&t.parentNode.removeChild(t)}return r(e),{update:r,destroy:i}}function qc(t){let e,n,r,i,s,a;const o=t[8].default,l=se(o,t,t[7],null);return{c(){e=te("div"),l&&l.c(),m(e,"class",t[2]),e.hidden=!0,st(e,"position",t[4]),st(e,"zIndex",t[5])},m(c,u){A(c,e,u),l&&l.m(e,null),t[9](e),i=!0,s||(a=[ge(n=ie.call(null,e,t[1])),ge(t[6].call(null,e)),ge(r=Vc.call(null,e,t[3]))],s=!0)},p(c,[u]){l&&l.p&&(!i||u&128)&&ae(l,o,c,c[7],i?oe(o,c[7],u,null):le(c[7]),null),(!i||u&4)&&m(e,"class",c[2]),(!i||u&16)&&st(e,"position",c[4]),(!i||u&32)&&st(e,"zIndex",c[5]),n&&ve(n.update)&&u&2&&n.update.call(null,c[1]),r&&ve(r.update)&&u&8&&r.update.call(null,c[3])},i(c){i||(y(l,c),i=!0)},o(c){k(l,c),i=!1},d(c){c&&R(e),l&&l.d(c),t[9](null),s=!1,Ae(a)}}}function Gc(t,e,n){let{$$slots:r={},$$scope:i}=e,{use:s=[],element:a=void 0,class:o="",target:l="body",position:c="relative",zIndex:u=1}=e;const f=He(Ce());function d(h){$[h?"unshift":"push"](()=>{a=h,n(0,a)})}return t.$$set=h=>{"use"in h&&n(1,s=h.use),"element"in h&&n(0,a=h.element),"class"in h&&n(2,o=h.class),"target"in h&&n(3,l=h.target),"position"in h&&n(4,c=h.position),"zIndex"in h&&n(5,u=h.zIndex),"$$scope"in h&&n(7,i=h.$$scope)},[a,s,o,l,c,u,f,i,r,d]}class Kc extends Q{constructor(e){super(),x(this,e,Gc,qc,Z,{use:1,element:0,class:2,target:3,position:4,zIndex:5})}}const Jc=Kc;function Xc(t){let e;const n=t[5].default,r=se(n,t,t[7],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&128)&&ae(r,n,i,i[7],e?oe(n,i[7],s,null):le(i[7]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Yc(t){let e,n,r;function i(a){t[6](a)}let s={class:t[3],use:t[2],target:t[4],$$slots:{default:[Zc]},$$scope:{ctx:t}};return t[0]!==void 0&&(s.element=t[0]),e=new Jc({props:s}),$.push(()=>_e(e,"element",i)),{c(){L(e.$$.fragment)},m(a,o){P(e,a,o),r=!0},p(a,o){const l={};o&8&&(l.class=a[3]),o&4&&(l.use=a[2]),o&16&&(l.target=a[4]),o&128&&(l.$$scope={dirty:o,ctx:a}),!n&&o&1&&(n=!0,l.element=a[0],Te(()=>n=!1)),e.$set(l)},i(a){r||(y(e.$$.fragment,a),r=!0)},o(a){k(e.$$.fragment,a),r=!1},d(a){N(e,a)}}}function Zc(t){let e;const n=t[5].default,r=se(n,t,t[7],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&128)&&ae(r,n,i,i[7],e?oe(n,i[7],s,null):le(i[7]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function xc(t){let e,n,r,i;const s=[Yc,Xc],a=[];function o(l,c){return l[1]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function Qc(t,e,n){let{$$slots:r={},$$scope:i}=e,{withinPortal:s=!0,use:a=[],element:o=void 0,class:l="",target:c="body"}=e;function u(f){o=f,n(0,o)}return t.$$set=f=>{"withinPortal"in f&&n(1,s=f.withinPortal),"use"in f&&n(2,a=f.use),"element"in f&&n(0,o=f.element),"class"in f&&n(3,l=f.class),"target"in f&&n(4,c=f.target),"$$scope"in f&&n(7,i=f.$$scope)},[o,s,a,l,c,r,u,i]}class $c extends Q{constructor(e){super(),x(this,e,Qc,xc,Z,{withinPortal:1,use:2,element:0,class:3,target:4})}}const eu=$c,tu=Me((t,{iconSize:e})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:`${t.fn.size({size:e,sizes:t.space})}px`,minHeight:`${t.fn.size({size:e,sizes:t.space})}px`,width:`${t.fn.size({size:e,sizes:t.space})}px`,minWidth:`${t.fn.size({size:e,sizes:t.space})}px`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none"},icon:{height:`${t.fn.size({size:e,sizes:t.space})}px`,minHeight:`${t.fn.size({size:e,sizes:t.space})}px`,position:"static",margin:0,ml:0,mr:0,mt:0,mb:0}}));function nu(t){let e,n=(t[2]instanceof HTMLElement||t[2]instanceof SVGElement)&&vi(t);return{c(){n&&n.c(),e=Ie()},m(r,i){n&&n.m(r,i),A(r,e,i)},p(r,i){r[2]instanceof HTMLElement||r[2]instanceof SVGElement?n?n.p(r,i):(n=vi(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ne,o:ne,d(r){n&&n.d(r),r&&R(e)}}}function ru(t){let e,n,r;const i=[{class:t[5](t[0],t[4]({css:t[1]}))},t[3]];var s=t[2];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=z(l,i[c]);return{props:l}}return s&&(e=ut(s,a())),{c(){e&&L(e.$$.fragment),n=Ie()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,l){const c=l&59?ce(i,[l&51&&{class:o[5](o[0],o[4]({css:o[1]}))},l&8&&ke(o[3])]):{};if(l&4&&s!==(s=o[2])){if(e){ue();const u=e;k(u.$$.fragment,1,0,()=>{N(u,1)}),fe()}s?(e=ut(s,a()),L(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){o&&R(n),e&&N(e,o)}}}function vi(t){let e,n=t[2].outerHTML+"",r;return{c(){e=te("span"),m(e,"class",r=t[5](t[0],t[4]({css:t[1]})))},m(i,s){A(i,e,s),e.innerHTML=n},p(i,s){s&4&&n!==(n=i[2].outerHTML+"")&&(e.innerHTML=n),s&51&&r!==(r=i[5](i[0],i[4]({css:i[1]})))&&m(e,"class",r)},d(i){i&&R(e)}}}function iu(t){let e,n,r,i;const s=[ru,nu],a=[];function o(l,c){return typeof l[2]=="function"?0:l[6]?-1:1}return~(e=o(t))&&(n=a[e]=s[e](t)),{c(){n&&n.c(),r=Ie()},m(l,c){~e&&a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?~e&&a[e].p(l,c):(n&&(ue(),k(a[u],1,1,()=>{a[u]=null}),fe()),~e?(n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r)):n=null)},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){~e&&a[e].d(l),l&&R(r)}}}function su(t,e,n){let r,i,s,{className:a="",override:o={},icon:l=void 0,iconSize:c=16,iconProps:u={}}=e;const f=typeof HTMLElement>"u"&&typeof SVGElement>"u";return t.$$set=d=>{"className"in d&&n(0,a=d.className),"override"in d&&n(1,o=d.override),"icon"in d&&n(2,l=d.icon),"iconSize"in d&&n(7,c=d.iconSize),"iconProps"in d&&n(3,u=d.iconProps)},t.$$.update=()=>{t.$$.dirty&128&&n(5,{cx:r,getStyles:i,classes:s}=tu({iconSize:c},{name:"IconRenderer"}),r,(n(4,i),n(7,c)),(n(8,s),n(7,c))),t.$$.dirty&260&&!f&&(l instanceof HTMLElement||l instanceof SVGElement)&&l.classList.add(...s.icon.split(" "))},[a,o,l,u,i,r,f,c,s]}class ou extends Q{constructor(e){super(),x(this,e,su,iu,Z,{className:0,override:1,icon:2,iconSize:7,iconProps:3})}}const au=ou;function Ii(t,e,n,r=!1){if(t==="dimmed")return r?"$dark200":"$gray600";if(e==="gradient"||n)return`$${t}600`;if(e==="link")return r?"$blue400":"$blue700";if(e==="text")return r?`$${t}500`:`$${t}700`}const lu=Me((t,{align:e,color:n,inherit:r,inline:i,lineClamp:s,size:a,tracking:o,transform:l,underline:c,weight:u,gradient:f,variant:d})=>{var h;return{root:{focusRing:"auto",[`${t.dark} &`]:{color:n==="dark"?"$dark50":Ii(n,d,f,!0)},fontFamily:r?"inherit":"$standard",fontSize:r?"inherit":typeof a=="string"?`$${a}`:`${a}px`,fontWeight:r?"inherit":`$${u}`,letterSpacing:(h=t.letterSpacings[o])==null?void 0:h.value,lineHeight:r?"inherit":i?1:typeof a=="string"?`$${a}`:`${a}px`,textTransform:l,textDecoration:c?"underline":"none",textAlign:e,cursor:d==="link"?"pointer":"inherit",color:n==="green"?"Black":Ii(n,d,f),backgroundImage:d==="gradient"?`linear-gradient(${f==null?void 0:f.deg}deg, $${f==null?void 0:f.from}600 0%, $${f==null?void 0:f.to}600 100%)`:null,WebkitBackgroundClip:d==="gradient"?"text":null,WebkitTextFillColor:d==="gradient"?"transparent":null,...s!==void 0?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:s,WebkitBoxOrient:"vertical"}:{},"&:hover":d==="link"&&c===!0?{textDecoration:"underline"}:void 0}}}),cu=Object.freeze([{error:!0,message:"If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",solution:`
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `},{error:!0,message:"If using the 'link' variant, an href needs to be set and the root must be an anchor",solution:`
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `}]);function uu(t){let e;const n=t[24].default,r=se(n,t,t[26],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&67108864)&&ae(r,n,i,i[26],e?oe(n,i[26],s,null):le(i[26]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function fu(t){let e,n,r,i,s;e=new Or({props:{observable:t[6],component:"Text",code:t[7]}});const a=[{root:t[4]},{use:[t[10],[ie,t[1]]]},{class:t[9](t[2],t[8]({css:t[3]}))},{href:t[5]??void 0},t[11]];function o(c){t[25](c)}let l={$$slots:{default:[uu]},$$scope:{ctx:t}};for(let c=0;c<a.length;c+=1)l=z(l,a[c]);return t[0]!==void 0&&(l.element=t[0]),r=new ze({props:l}),$.push(()=>_e(r,"element",o)),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(c,u){P(e,c,u),A(c,n,u),P(r,c,u),s=!0},p(c,[u]){const f={};u&64&&(f.observable=c[6]),u&128&&(f.code=c[7]),e.$set(f);const d=u&3902?ce(a,[u&16&&{root:c[4]},u&1026&&{use:[c[10],[ie,c[1]]]},u&780&&{class:c[9](c[2],c[8]({css:c[3]}))},u&32&&{href:c[5]??void 0},u&2048&&ke(c[11])]):{};u&67108864&&(d.$$scope={dirty:u,ctx:c}),!i&&u&1&&(i=!0,d.element=c[0],Te(()=>i=!1)),r.$set(d)},i(c){s||(y(e.$$.fragment,c),y(r.$$.fragment,c),s=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),s=!1},d(c){N(e,c),c&&R(n),N(r,c)}}}function du(t,e,n){let r,i;const s=["use","element","class","override","align","color","root","transform","variant","size","weight","gradient","inline","lineClamp","underline","inherit","href","tracking"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},align:h="left",color:p="dark",root:g=void 0,transform:_="none",variant:b="text",size:v="md",weight:w="normal",gradient:I={from:"indigo",to:"cyan",deg:45},inline:T=!0,lineClamp:O=void 0,underline:E=!1,inherit:V=!1,href:q="",tracking:C="normal"}=e;const S=He(Ce());let G=!1,M;I.from==="indigo"&&I.to==="cyan0"&&I.deg===45&&b!=="gradient"&&(G=!0,M=cu[0]);function j(F){u=F,n(0,u)}return t.$$set=F=>{e=z(z({},e),ye(F)),n(11,a=Y(e,s)),"use"in F&&n(1,c=F.use),"element"in F&&n(0,u=F.element),"class"in F&&n(2,f=F.class),"override"in F&&n(3,d=F.override),"align"in F&&n(12,h=F.align),"color"in F&&n(13,p=F.color),"root"in F&&n(4,g=F.root),"transform"in F&&n(14,_=F.transform),"variant"in F&&n(15,b=F.variant),"size"in F&&n(16,v=F.size),"weight"in F&&n(17,w=F.weight),"gradient"in F&&n(18,I=F.gradient),"inline"in F&&n(19,T=F.inline),"lineClamp"in F&&n(20,O=F.lineClamp),"underline"in F&&n(21,E=F.underline),"inherit"in F&&n(22,V=F.inherit),"href"in F&&n(5,q=F.href),"tracking"in F&&n(23,C=F.tracking),"$$scope"in F&&n(26,l=F.$$scope)},t.$$.update=()=>{t.$$.dirty&16773120&&n(9,{cx:r,getStyles:i}=lu({lineClamp:O,underline:E,inline:T,inherit:V,gradient:I,variant:b,align:h,color:p,transform:_,size:v,weight:w,tracking:C},{name:"Text"}),r,(n(8,i),n(20,O),n(21,E),n(19,T),n(22,V),n(18,I),n(15,b),n(12,h),n(13,p),n(14,_),n(16,v),n(17,w),n(23,C)))},[u,c,f,d,g,q,G,M,i,r,S,a,h,p,_,b,v,w,I,T,O,E,V,C,o,j,l]}class hu extends Q{constructor(e){super(),x(this,e,du,fu,Z,{use:1,element:0,class:2,override:3,align:12,color:13,root:4,transform:14,variant:15,size:16,weight:17,gradient:18,inline:19,lineClamp:20,underline:21,inherit:22,href:5,tracking:23})}}const Lr=hu,Si={xs:{height:30,padding:"0px 14px"},sm:{height:36,padding:"0px 18px"},md:{height:42,padding:"0px 22px"},lg:{height:50,padding:"0px 26px"},xl:{height:60,padding:"0px 32px"},"compact-xs":{height:22,padding:"0 7px"},"compact-sm":{height:26,padding:"0 8px"},"compact-md":{height:30,padding:"0 10px"},"compact-lg":{height:34,padding:"0 12px"},"compact-xl":{height:40,padding:"0 14px"}},mu=Me((t,{color:e,compact:n,fullSize:r,gradient:i,radius:s,size:a,variant:o})=>({root:{focusRing:"auto",cursor:"pointer",position:"relative",boxSizing:"border-box",textDecoration:"none",outline:"none",userSelect:"none",appearance:"none",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",background:null,borderRadius:typeof s=="number"?s:`$${s}`,height:typeof a=="number"?`${a}px`:Si[n?`compact-${a}`:a].height,padding:typeof a=="number"?`0px ${a}px`:Si[n?`compact-${a}`:a].padding,fontFamily:"$standard",fontWeight:"$SemiBold",fontSize:`$${a}`,lineHeight:1,flexGrow:0,width:r?"100%":"auto","&:hover":{backgroundColor:o==="gradient"?null:t.fn.themeColor(e,7),backgroundSize:o==="gradient"?"200%":null},"&:active":{transform:"translateY(1px)"},"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"},"&.loading":{pointerEvents:"none","&::before":{content:'""',position:"absolute",inset:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${s}`,cursor:"not-allowed"}}},variants:{variation:Gs(e,i)}})),Ei=Object.freeze([{error:!0,message:"If using the disabled prop, a loading cannot be set at the same time",solution:`
                If your component looks like this:
                
                &lt;Button disabled loading ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `},{error:!0,message:"If using the external prop, a href prop must be associated with it. If you have an href prop there must be content inside.",solution:`
                If your component looks like this:
                
                &lt;Button external ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ - Try adding the href prop too
                `}]);function gu(t){let e;return{c(){e=te("div"),m(e,"class","ripple svelte-3pkhve")},m(n,r){A(n,e,r),t[4](e)},p:ne,i:ne,o:ne,d(n){n&&R(e),t[4](null)}}}function pu(t){return t.constructor.name==="TouchEvent"}function Ti(t,e){t.style.transform=e,t.style.webkitTransform=e}function sr(t,e){t.style.opacity=e.toString()}const bu=(t,e)=>{const n=e.getBoundingClientRect(),r=pu(t)?t.touches[t.touches.length-1]:t,i=r.clientX-n.left,s=r.clientY-n.top;let a=0,o=.3;const l=e.dataset.center;e.dataset.circle?(o=.15,a=e.clientWidth/2,a=l?a:a+Math.sqrt((i-a)**2+(s-a)**2)/4):a=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const u=`${(e.clientWidth-a*2)/2}px`,f=`${(e.clientHeight-a*2)/2}px`,d=l?u:`${i-a}px`,h=l?f:`${s-a}px`;return{radius:a,scale:o,x:d,y:h,centerX:u,centerY:f}},Qs=function(t,e){const n=["touchcancel","mouseleave","dragstart"];let r=e.currentTarget||e.target;if(r&&!r.classList.contains("ripple")&&(r=r.querySelector(".ripple")),!r)return;const i=r.dataset.event;if(i&&i!==t)return;r.dataset.event=t;const s=document.createElement("span"),{radius:a,scale:o,x:l,y:c,centerX:u,centerY:f}=bu(e,r),d=r.dataset.color,h=`${a*2}px`;s.className="animation",s.style.width=h,s.style.height=h,s.style.background=d,s.classList.add("animation-enter"),s.classList.add("animation--visible"),Ti(s,`translate(${l}, ${c}) scale3d(${o},${o},${o})`),sr(s,0),s.dataset.activated=String(performance.now()),r.appendChild(s),setTimeout(()=>{s.classList.remove("animation-enter"),s.classList.add("animation-in"),Ti(s,`translate(${u}, ${f}) scale3d(1,1,1)`),sr(s,.25)},0);const p=t==="mousedown"?"mouseup":"touchend",g=function(){document.removeEventListener(p,g),n.forEach(v=>{document.removeEventListener(v,g)});const _=performance.now()-Number(s.dataset.activated),b=Math.max(250-_,0);setTimeout(()=>{s.classList.remove("animation-in"),s.classList.add("animation-out"),sr(s,0),setTimeout(()=>{s&&r.removeChild(s),r.children.length===0&&delete r.dataset.event},300)},b)};document.addEventListener(p,g),n.forEach(_=>{document.addEventListener(_,g,{passive:!0})})},wi=function(t){t.button===0&&Qs(t.type,t)},Ci=function(t){if(t.changedTouches)for(let e=0;e<t.changedTouches.length;++e)Qs(t.type,t.changedTouches[e])};function _u(t,e,n){let{center:r=!1}=e,{circle:i=!1}=e,{color:s="currentColor"}=e,a,o;Ar(async()=>{await Fs();try{r&&n(0,a.dataset.center="true",a),i&&n(0,a.dataset.circle="true",a),n(0,a.dataset.color=s,a),o=a.parentElement}catch{}if(!o){console.error("Ripple: Trigger element not found.");return}let c=window.getComputedStyle(o);(c.position.length===0||c.position==="static")&&(o.style.position="relative"),o.addEventListener("touchstart",Ci,{passive:!0}),o.addEventListener("mousedown",wi,{passive:!0})}),Ra(()=>{o&&(o.removeEventListener("mousedown",wi),o.removeEventListener("touchstart",Ci))});function l(c){$[c?"unshift":"push"](()=>{a=c,n(0,a)})}return t.$$set=c=>{"center"in c&&n(1,r=c.center),"circle"in c&&n(2,i=c.circle),"color"in c&&n(3,s=c.color)},[a,r,i,s,l]}class yu extends Q{constructor(e){super(),x(this,e,_u,gu,Z,{center:1,circle:2,color:3})}}const $s=yu;const ku=t=>({}),Ri=t=>({}),vu=t=>({}),Ai=t=>({}),Iu=t=>({}),Oi=t=>({}),Su=t=>({}),Pi=t=>({});function Eu(t){let e,n,r,i,s,a,o,l,c,u,f,d,h;const p=[Cu,wu],g=[];function _(C,S){return C[11]&&C[5]==="left"?0:C[20].leftIcon?1:-1}~(n=_(t))&&(r=g[n]=p[n](t));const b=t[27].default,v=se(b,t,t[26],null),w=v||Au();let I=t[13]&&Ni();const T=[Pu,Ou],O=[];function E(C,S){return C[11]&&C[5]==="right"?0:C[20].rightIcon?1:-1}~(o=E(t))&&(l=O[o]=T[o](t));let V=[{class:c=t[16](t[3],t[17]({css:t[1],variation:t[4]}),{disabled:t[9],loading:t[11]})},{disabled:t[9]},t[19],{tabindex:"0"}],q={};for(let C=0;C<V.length;C+=1)q=z(q,V[C]);return{c(){e=te("button"),r&&r.c(),i=he(),w&&w.c(),s=he(),I&&I.c(),a=he(),l&&l.c(),De(e,q),me(e,"compact",t[10]),me(e,"uppercase",t[12]),me(e,"svelte-1n9fp7y",!0)},m(C,S){A(C,e,S),~n&&g[n].m(e,null),J(e,i),w&&w.m(e,null),J(e,s),I&&I.m(e,null),J(e,a),~o&&O[o].m(e,null),e.autofocus&&e.focus(),t[29](e),f=!0,d||(h=[ge(u=ie.call(null,e,t[2])),ge(t[18].call(null,e))],d=!0)},p(C,S){let G=n;n=_(C),n===G?~n&&g[n].p(C,S):(r&&(ue(),k(g[G],1,1,()=>{g[G]=null}),fe()),~n?(r=g[n],r?r.p(C,S):(r=g[n]=p[n](C),r.c()),y(r,1),r.m(e,i)):r=null),v&&v.p&&(!f||S&67108864)&&ae(v,b,C,C[26],f?oe(b,C[26],S,null):le(C[26]),null),C[13]?I?S&8192&&y(I,1):(I=Ni(),I.c(),y(I,1),I.m(e,a)):I&&(ue(),k(I,1,1,()=>{I=null}),fe());let M=o;o=E(C),o===M?~o&&O[o].p(C,S):(l&&(ue(),k(O[M],1,1,()=>{O[M]=null}),fe()),~o?(l=O[o],l?l.p(C,S):(l=O[o]=T[o](C),l.c()),y(l,1),l.m(e,null)):l=null),De(e,q=ce(V,[(!f||S&199194&&c!==(c=C[16](C[3],C[17]({css:C[1],variation:C[4]}),{disabled:C[9],loading:C[11]})))&&{class:c},(!f||S&512)&&{disabled:C[9]},S&524288&&C[19],{tabindex:"0"}])),u&&ve(u.update)&&S&4&&u.update.call(null,C[2]),me(e,"compact",C[10]),me(e,"uppercase",C[12]),me(e,"svelte-1n9fp7y",!0)},i(C){f||(y(r),y(w,C),y(I),y(l),f=!0)},o(C){k(r),k(w,C),k(I),k(l),f=!1},d(C){C&&R(e),~n&&g[n].d(),w&&w.d(C),I&&I.d(),~o&&O[o].d(),t[29](null),d=!1,Ae(h)}}}function Tu(t){let e,n,r,i,s,a,o,l,c,u,f,d,h,p;const g=[Lu,Du],_=[];function b(S,G){return S[11]&&S[5]==="left"?0:S[20].leftIcon?1:-1}~(n=b(t))&&(r=_[n]=g[n](t));const v=t[27].default,w=se(v,t,t[26],null),I=w||Bu();let T=t[13]&&Di();const O=[Uu,zu],E=[];function V(S,G){return S[11]&&S[5]==="right"?0:S[20].rightIcon?1:-1}~(o=V(t))&&(l=E[o]=O[o](t));let q=[{href:t[7]},{class:c=t[16](t[3],t[17]({css:t[1],variation:t[4]}),{disabled:t[9],loading:t[11]})},{role:"button"},{rel:"noreferrer noopener"},{target:u=t[8]?"_blank":"_self"},t[19],{tabindex:"0"}],C={};for(let S=0;S<q.length;S+=1)C=z(C,q[S]);return{c(){e=te("a"),r&&r.c(),i=he(),I&&I.c(),s=he(),T&&T.c(),a=he(),l&&l.c(),De(e,C),me(e,"compact",t[10]),me(e,"uppercase",t[12]),me(e,"svelte-1n9fp7y",!0)},m(S,G){A(S,e,G),~n&&_[n].m(e,null),J(e,i),I&&I.m(e,null),J(e,s),T&&T.m(e,null),J(e,a),~o&&E[o].m(e,null),t[28](e),d=!0,h||(p=[ge(f=ie.call(null,e,t[2])),ge(t[18].call(null,e))],h=!0)},p(S,G){let M=n;n=b(S),n===M?~n&&_[n].p(S,G):(r&&(ue(),k(_[M],1,1,()=>{_[M]=null}),fe()),~n?(r=_[n],r?r.p(S,G):(r=_[n]=g[n](S),r.c()),y(r,1),r.m(e,i)):r=null),w&&w.p&&(!d||G&67108864)&&ae(w,v,S,S[26],d?oe(v,S[26],G,null):le(S[26]),null),S[13]?T?G&8192&&y(T,1):(T=Di(),T.c(),y(T,1),T.m(e,a)):T&&(ue(),k(T,1,1,()=>{T=null}),fe());let j=o;o=V(S),o===j?~o&&E[o].p(S,G):(l&&(ue(),k(E[j],1,1,()=>{E[j]=null}),fe()),~o?(l=E[o],l?l.p(S,G):(l=E[o]=O[o](S),l.c()),y(l,1),l.m(e,null)):l=null),De(e,C=ce(q,[(!d||G&128)&&{href:S[7]},(!d||G&199194&&c!==(c=S[16](S[3],S[17]({css:S[1],variation:S[4]}),{disabled:S[9],loading:S[11]})))&&{class:c},{role:"button"},{rel:"noreferrer noopener"},(!d||G&256&&u!==(u=S[8]?"_blank":"_self"))&&{target:u},G&524288&&S[19],{tabindex:"0"}])),f&&ve(f.update)&&G&4&&f.update.call(null,S[2]),me(e,"compact",S[10]),me(e,"uppercase",S[12]),me(e,"svelte-1n9fp7y",!0)},i(S){d||(y(r),y(I,S),y(T),y(l),d=!0)},o(S){k(r),k(I,S),k(T),k(l),d=!1},d(S){S&&R(e),~n&&_[n].d(),I&&I.d(S),T&&T.d(),~o&&E[o].d(),t[28](null),h=!1,Ae(p)}}}function wu(t){let e,n;const r=t[27].leftIcon,i=se(r,t,t[26],Ai),s=i||Ru();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-left svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&ae(i,r,a,a[26],n?oe(r,a[26],o,vu):le(a[26]),Ai)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&R(e),s&&s.d(a)}}}function Cu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),L(n.$$.fragment),m(e,"class","loader-left svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&R(e),N(n)}}}function Ru(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Au(t){let e;return{c(){e=we("Button")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Ni(t){let e,n;return e=new $s({props:{center:!1,circle:!1}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Ou(t){let e,n;const r=t[27].rightIcon,i=se(r,t,t[26],Ri),s=i||Nu();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-right svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&ae(i,r,a,a[26],n?oe(r,a[26],o,ku):le(a[26]),Ri)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&R(e),s&&s.d(a)}}}function Pu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),L(n.$$.fragment),m(e,"class","loader-right svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&R(e),N(n)}}}function Nu(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Du(t){let e,n;const r=t[27].leftIcon,i=se(r,t,t[26],Pi),s=i||Mu();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-left svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&ae(i,r,a,a[26],n?oe(r,a[26],o,Su):le(a[26]),Pi)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&R(e),s&&s.d(a)}}}function Lu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),L(n.$$.fragment),m(e,"class","loader-left svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&R(e),N(n)}}}function Mu(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Bu(t){let e;return{c(){e=we("Button")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Di(t){let e,n;return e=new $s({props:{center:!1,circle:!1}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function zu(t){let e,n;const r=t[27].rightIcon,i=se(r,t,t[26],Oi),s=i||Wu();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-right svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&ae(i,r,a,a[26],n?oe(r,a[26],o,Iu):le(a[26]),Oi)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&R(e),s&&s.d(a)}}}function Uu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),L(n.$$.fragment),m(e,"class","loader-right svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&R(e),N(n)}}}function Wu(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function ju(t){let e,n,r,i,s,a;e=new Or({props:{observable:t[14],component:"Button",code:t[15]}});const o=[Tu,Eu],l=[];function c(u,f){return u[7]&&!u[9]?0:1}return r=c(t),i=l[r]=o[r](t),{c(){L(e.$$.fragment),n=he(),i.c(),s=Ie()},m(u,f){P(e,u,f),A(u,n,f),l[r].m(u,f),A(u,s,f),a=!0},p(u,[f]){const d={};f&16384&&(d.observable=u[14]),f&32768&&(d.code=u[15]),e.$set(d);let h=r;r=c(u),r===h?l[r].p(u,f):(ue(),k(l[h],1,1,()=>{l[h]=null}),fe(),i=l[r],i?i.p(u,f):(i=l[r]=o[r](u),i.c()),y(i,1),i.m(s.parentNode,s))},i(u){a||(y(e.$$.fragment,u),y(i),a=!0)},o(u){k(e.$$.fragment,u),k(i),a=!1},d(u){N(e,u),u&&R(n),l[r].d(u),u&&R(s)}}}function Fu(t,e,n){let r,i;const s=["use","element","class","override","variant","color","size","radius","gradient","loaderPosition","loaderProps","href","external","disabled","compact","loading","uppercase","fullSize","ripple"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e;const c=Ds(o);let{use:u=[],element:f=void 0,class:d="",override:h={},variant:p="filled",color:g="blue",size:_="sm",radius:b="sm",gradient:v={from:"indigo",to:"cyan",deg:45},loaderPosition:w="left",loaderProps:I={size:"xs",color:"white",variant:"circle"},href:T=null,external:O=!1,disabled:E=!1,compact:V=!1,loading:q=!1,uppercase:C=!1,fullSize:S=!1,ripple:G=!1}=e;const M=He(Ce());let j=!1,F;E&&q&&(j=!0,F=Ei[0]),(O&&typeof T!="string"||(T==null?void 0:T.length)<1)&&(j=!0,F=Ei[1]);function Le(U){$[U?"unshift":"push"](()=>{f=U,n(0,f)})}function Se(U){$[U?"unshift":"push"](()=>{f=U,n(0,f)})}return t.$$set=U=>{e=z(z({},e),ye(U)),n(19,a=Y(e,s)),"use"in U&&n(2,u=U.use),"element"in U&&n(0,f=U.element),"class"in U&&n(3,d=U.class),"override"in U&&n(1,h=U.override),"variant"in U&&n(4,p=U.variant),"color"in U&&n(21,g=U.color),"size"in U&&n(22,_=U.size),"radius"in U&&n(23,b=U.radius),"gradient"in U&&n(24,v=U.gradient),"loaderPosition"in U&&n(5,w=U.loaderPosition),"loaderProps"in U&&n(6,I=U.loaderProps),"href"in U&&n(7,T=U.href),"external"in U&&n(8,O=U.external),"disabled"in U&&n(9,E=U.disabled),"compact"in U&&n(10,V=U.compact),"loading"in U&&n(11,q=U.loading),"uppercase"in U&&n(12,C=U.uppercase),"fullSize"in U&&n(25,S=U.fullSize),"ripple"in U&&n(13,G=U.ripple),"$$scope"in U&&n(26,l=U.$$scope)},t.$$.update=()=>{t.$$.dirty&16384&&j&&n(1,h={display:"none"}),t.$$.dirty&65012752&&n(17,{getStyles:r,cx:i}=mu({color:g,compact:V,fullSize:S,gradient:v,radius:b,size:_,variant:p},{name:"Button"}),r,(n(16,i),n(21,g),n(10,V),n(25,S),n(24,v),n(23,b),n(22,_),n(4,p)))},[f,h,u,d,p,w,I,T,O,E,V,q,C,G,j,F,i,r,M,a,c,g,_,b,v,S,l,o,Le,Se]}class Hu extends Q{constructor(e){super(),x(this,e,Fu,ju,Z,{use:2,element:0,class:3,override:1,variant:4,color:21,size:22,radius:23,gradient:24,loaderPosition:5,loaderProps:6,href:7,external:8,disabled:9,compact:10,loading:11,uppercase:12,fullSize:25,ripple:13})}}const jn=Hu,Vu=Me((t,{radius:e,shadow:n,withBorder:r,padding:i})=>({root:{[`${t.dark} &`]:{bc:t.colors.dark700.value,color:t.colors.dark50.value,border:r?`1px solid ${t.colors.dark600.value}`:void 0},padding:t.fn.size({size:i,sizes:t.space}),outline:0,display:"block",textDecoration:"none",color:"black",backgroundColor:"white",boxSizing:"border-box",borderRadius:`$${e}`,WebkitTapHighlightColor:"transparent",boxShadow:t.shadows[n].value||n||"none",border:r?`1px solid ${t.colors.gray200.value}`:void 0}}));function qu(t){let e;const n=t[11].default,r=se(n,t,t[13],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&8192)&&ae(r,n,i,i[13],e?oe(n,i[13],s,null):le(i[13]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Gu(t){let e,n,r;const i=[{class:t[5](t[2],t[4]({css:t[3]}))},{use:t[1]},t[6]];function s(o){t[12](o)}let a={$$slots:{default:[qu]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ce(i,[l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&2&&{use:o[1]},l&64&&ke(o[6])]):{};l&8192&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Ku(t,e,n){let r,i;const s=["use","element","class","override","shadow","radius","withBorder","padding"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},shadow:h="xs",radius:p="sm",withBorder:g=!1,padding:_="md"}=e;function b(v){u=v,n(0,u)}return t.$$set=v=>{e=z(z({},e),ye(v)),n(6,a=Y(e,s)),"use"in v&&n(1,c=v.use),"element"in v&&n(0,u=v.element),"class"in v&&n(2,f=v.class),"override"in v&&n(3,d=v.override),"shadow"in v&&n(7,h=v.shadow),"radius"in v&&n(8,p=v.radius),"withBorder"in v&&n(9,g=v.withBorder),"padding"in v&&n(10,_=v.padding),"$$scope"in v&&n(13,l=v.$$scope)},t.$$.update=()=>{t.$$.dirty&1920&&n(5,{cx:r,getStyles:i}=Vu({radius:p,shadow:h,withBorder:g,padding:_},{name:"Paper"}),r,(n(4,i),n(8,p),n(7,h),n(9,g),n(10,_)))},[u,c,f,d,i,r,a,h,p,g,_,o,b,l]}class Ju extends Q{constructor(e){super(),x(this,e,Ku,Gu,Z,{use:1,element:0,class:2,override:3,shadow:7,radius:8,withBorder:9,padding:10})}}const Xu=Ju,Yu=Me((t,{inline:e})=>({root:{display:e?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}));function Zu(t){let e;const n=t[8].default,r=se(n,t,t[10],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&1024)&&ae(r,n,i,i[10],e?oe(n,i[10],s,null):le(i[10]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function xu(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[9](o)}let a={$$slots:{default:[Zu]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ce(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&1024&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Qu(t,e,n){let r,i;const s=["use","element","class","override","inline"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},inline:h=!1}=e;function p(g){u=g,n(0,u)}return t.$$set=g=>{e=z(z({},e),ye(g)),n(6,a=Y(e,s)),"use"in g&&n(1,c=g.use),"element"in g&&n(0,u=g.element),"class"in g&&n(2,f=g.class),"override"in g&&n(3,d=g.override),"inline"in g&&n(7,h=g.inline),"$$scope"in g&&n(10,l=g.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(5,{cx:r,getStyles:i}=Yu({inline:h},{name:"Center"}),r,(n(4,i),n(7,h)))},[u,c,f,d,i,r,a,h,o,p,l]}class $u extends Q{constructor(e){super(),x(this,e,Qu,xu,Z,{use:1,element:0,class:2,override:3,inline:7})}}const ef=$u,Li={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},tf=Me((t,{align:e,direction:n,grow:r,noWrap:i,position:s,spacing:a,children:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:n,alignItems:e||(n==="row"?"center":r?"stretch":s==="apart"?"flex-start":Li[s]),flexWrap:i?"nowrap":"wrap",justifyContent:n==="row"?Li[s]:void 0,gap:t.fn.size({size:a,sizes:t.space}),"& > *":{boxSizing:"border-box",maxWidth:r&&n==="row"?`calc(${100/o}% - ${t.fn.size({size:a,sizes:t.space})-t.fn.size({size:a,sizes:t.space})/o}px)`:void 0,flexGrow:r?1:0}}}));function nf(t){let e;const n=t[14].default,r=se(n,t,t[16],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&65536)&&ae(r,n,i,i[16],e?oe(n,i[16],s,null):le(i[16]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function rf(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[15](o)}let a={$$slots:{default:[nf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ce(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&65536&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function sf(t,e,n){let r,i;const s=["use","element","class","override","position","noWrap","grow","spacing","direction","align"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},position:h="left",noWrap:p=!1,grow:g=!1,spacing:_="md",direction:b="row",align:v="center"}=e,w;function I(T){u=T,n(0,u)}return t.$$set=T=>{e=z(z({},e),ye(T)),n(6,a=Y(e,s)),"use"in T&&n(1,c=T.use),"element"in T&&n(0,u=T.element),"class"in T&&n(2,f=T.class),"override"in T&&n(3,d=T.override),"position"in T&&n(7,h=T.position),"noWrap"in T&&n(8,p=T.noWrap),"grow"in T&&n(9,g=T.grow),"spacing"in T&&n(10,_=T.spacing),"direction"in T&&n(11,b=T.direction),"align"in T&&n(12,v=T.align),"$$scope"in T&&n(16,l=T.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&Ar(()=>{n(13,w=u.childElementCount)}),t.$$.dirty&16256&&n(5,{cx:r,getStyles:i}=tf({align:v,children:w,direction:b,grow:g,noWrap:p,position:h,spacing:_},{name:"Group"}),r,(n(4,i),n(12,v),n(13,w),n(11,b),n(9,g),n(8,p),n(7,h),n(10,_),n(0,u)))},[u,c,f,d,i,r,a,h,p,g,_,b,v,w,o,I,l]}class of extends Q{constructor(e){super(),x(this,e,sf,rf,Z,{use:1,element:0,class:2,override:3,position:7,noWrap:8,grow:9,spacing:10,direction:11,align:12})}}const on=of,af=Me((t,{fluid:e,size:n,sizes:r})=>({root:{paddingLeft:t.fn.size({size:n,sizes:t.space}),paddingRight:t.fn.size({size:n,sizes:t.space}),maxWidth:e?"100%":typeof n=="number"?`${n}px`:r[n]??r.md,marginLeft:"auto",marginRight:"auto"}}));function lf(t){let e;const n=t[10].default,r=se(n,t,t[12],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&4096)&&ae(r,n,i,i[12],e?oe(n,i[12],s,null):le(i[12]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function cf(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[11](o)}let a={$$slots:{default:[lf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ce(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&4096&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function uf(t,e,n){let r,i;const s=["use","element","class","override","size","fluid","sizes"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},size:h="md",fluid:p=!1,sizes:g={xs:540,sm:720,md:960,lg:1140,xl:1320}}=e;function _(b){u=b,n(0,u)}return t.$$set=b=>{e=z(z({},e),ye(b)),n(6,a=Y(e,s)),"use"in b&&n(1,c=b.use),"element"in b&&n(0,u=b.element),"class"in b&&n(2,f=b.class),"override"in b&&n(3,d=b.override),"size"in b&&n(7,h=b.size),"fluid"in b&&n(8,p=b.fluid),"sizes"in b&&n(9,g=b.sizes),"$$scope"in b&&n(12,l=b.$$scope)},t.$$.update=()=>{t.$$.dirty&896&&n(5,{cx:r,getStyles:i}=af({fluid:p,size:h,sizes:g},{name:"Container"}),r,(n(4,i),n(8,p),n(7,h),n(9,g)))},[u,c,f,d,i,r,a,h,p,g,o,_,l]}class ff extends Q{constructor(e){super(),x(this,e,uf,cf,Z,{use:1,element:0,class:2,override:3,size:7,fluid:8,sizes:9})}}const eo=ff,df=Wl({"from, to":{opacity:.4},"50%":{opacity:1}}),hf=Me((t,{animate:e,circle:n,height:r,radius:i,width:s})=>({root:{[`${t.dark} &`]:{"&.visible":{"&::before":{background:t.fn.themeColor("dark",7)},"&::after":{background:t.fn.themeColor("dark",4)}}},height:r,width:n?r:`${s}%`,borderRadius:n?r:`$${i}`,position:"relative",overflow:"hidden","&.visible":{"&::before":{content:'""',position:"absolute",background:"white",top:0,bottom:0,left:0,right:0,zIndex:10},"&::after":{content:'""',position:"absolute",background:t.fn.themeColor("gray",3),top:0,bottom:0,left:0,right:0,animation:e?`${df} 1500ms linear infinite`:"none",zIndex:11}}}}));function mf(t){let e;const n=t[13].default,r=se(n,t,t[15],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&32768)&&ae(r,n,i,i[15],e?oe(n,i[15],s,null):le(i[15]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function gf(t){let e,n,r;const i=[{class:t[6](t[2],{visible:t[4]},t[5]({css:t[3]}))},{use:t[1]},t[7]];function s(o){t[14](o)}let a={$$slots:{default:[mf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&254?ce(i,[l&124&&{class:o[6](o[2],{visible:o[4]},o[5]({css:o[3]}))},l&2&&{use:o[1]},l&128&&ke(o[7])]):{};l&32768&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function pf(t,e,n){let r,i;const s=["use","element","class","override","visible","height","width","circle","radius","animate"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},visible:h=!0,height:p="auto",width:g=100,circle:_=null,radius:b=null,animate:v=!0}=e;function w(I){u=I,n(0,u)}return t.$$set=I=>{e=z(z({},e),ye(I)),n(7,a=Y(e,s)),"use"in I&&n(1,c=I.use),"element"in I&&n(0,u=I.element),"class"in I&&n(2,f=I.class),"override"in I&&n(3,d=I.override),"visible"in I&&n(4,h=I.visible),"height"in I&&n(8,p=I.height),"width"in I&&n(9,g=I.width),"circle"in I&&n(10,_=I.circle),"radius"in I&&n(11,b=I.radius),"animate"in I&&n(12,v=I.animate),"$$scope"in I&&n(15,l=I.$$scope)},t.$$.update=()=>{t.$$.dirty&7936&&n(6,{cx:r,getStyles:i}=hf({animate:v,circle:_,height:p,radius:b,width:g},{name:"Skeleton"}),r,(n(5,i),n(12,v),n(10,_),n(8,p),n(11,b),n(9,g)))},[u,c,f,d,h,i,r,a,p,g,_,b,v,o,w,l]}class bf extends Q{constructor(e){super(),x(this,e,pf,gf,Z,{use:1,element:0,class:2,override:3,visible:4,height:8,width:9,circle:10,radius:11,animate:12})}}const _f=bf,yf=Me((t,{radius:e,height:n,width:r,fit:i})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:{width:r,height:n,fontFamily:"$standard",display:"block",border:0,borderRadius:t.fn.radius(e),objectFit:i},caption:{[`${t.dark} &`]:{color:t.fn.themeColor("dark",2)},color:t.fn.themeColor("gray",7),marginTop:t.space.xsPX.value},placeholder:{[`${t.dark} &`]:{color:t.fn.themeColor("dark",2),backgroundColor:t.fn.themeColor("dark",8)},width:r,height:n,position:"absolute",top:0,right:0,left:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.fn.themeColor("gray",6),backgroundColor:t.fn.themeColor("gray",0),borderRadius:t.fn.radius(e)}}));function kf(t){let e,n;return{c(){e=X("svg"),n=X("path"),m(n,"d","M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"),m(n,"fill","currentColor"),m(n,"fill-rule","evenodd"),m(n,"clip-rule","evenodd"),m(e,"width","15"),m(e,"height","15"),m(e,"viewBox","0 0 15 15"),m(e,"fill","none"),m(e,"xmlns","http://www.w3.org/2000/svg"),st(e,"width",t[0].width),st(e,"height",t[0].height)},m(r,i){A(r,e,i),J(e,n)},p(r,[i]){i&1&&st(e,"width",r[0].width),i&1&&st(e,"height",r[0].height)},i:ne,o:ne,d(r){r&&R(e)}}}function vf(t,e,n){let{style:r={}}=e;return t.$$set=i=>{"style"in i&&n(0,r=i.style)},[r]}class If extends Q{constructor(e){super(),x(this,e,vf,kf,Z,{style:0})}}const Sf=If,Ef=t=>({}),Mi=t=>({});function Tf(t){let e,n,r,i,s,a,o=[{class:n=t[11].image},{src:r=t[4]},{alt:t[5]},t[16]],l={};for(let c=0;c<o.length;c+=1)l=z(l,o[c]);return{c(){e=te("img"),De(e,l)},m(c,u){A(c,e,u),t[24](e),s||(a=[ge(i=ie.call(null,e,t[1])),ge(t[13].call(null,e)),ct(e,"load",t[14]),ct(e,"error",t[15])],s=!0)},p(c,u){De(e,l=ce(o,[u&2048&&n!==(n=c[11].image)&&{class:n},u&16&&!ca(e.src,r=c[4])&&{src:r},u&32&&{alt:c[5]},u&65536&&c[16]])),i&&ve(i.update)&&u&2&&i.update.call(null,c[1])},d(c){c&&R(e),t[24](null),s=!1,Ae(a)}}}function Bi(t){let e,n,r;const i=t[23].placeholder,s=se(i,t,t[25],Mi),a=s||wf();return{c(){e=te("div"),a&&a.c(),m(e,"class",n=t[11].placeholder),m(e,"title",t[5])},m(o,l){A(o,e,l),a&&a.m(e,null),r=!0},p(o,l){s&&s.p&&(!r||l&33554432)&&ae(s,i,o,o[25],r?oe(i,o[25],l,Ef):le(o[25]),Mi),(!r||l&2048&&n!==(n=o[11].placeholder))&&m(e,"class",n),(!r||l&32)&&m(e,"title",o[5])},i(o){r||(y(a,o),r=!0)},o(o){k(a,o),r=!1},d(o){o&&R(e),a&&a.d(o)}}}function wf(t){let e,n;return e=new Sf({props:{style:{width:40,height:40}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p:ne,i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function zi(t){let e,n;return e=new Lr({props:{class:t[11].caption,root:"figcaption",size:"sm",align:"center",$$slots:{default:[Cf]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&2048&&(s.class=r[11].caption),i&33554496&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Cf(t){let e;return{c(){e=we(t[6])},m(n,r){A(n,e,r)},p(n,r){r&64&&zs(e,n[6])},d(n){n&&R(e)}}}function Rf(t){let e,n,r,i,s,a,o,l;r=new _f({props:{visible:t[7]?t[8]:!1,$$slots:{default:[Tf]},$$scope:{ctx:t}}});let c=t[9]&&Bi(t),u=t[6]&&zi(t);return{c(){e=te("figure"),n=te("div"),L(r.$$.fragment),i=he(),c&&c.c(),a=he(),u&&u.c(),m(n,"class",s=t[11].imageWrapper),m(e,"class",o=t[11].figure)},m(f,d){A(f,e,d),J(e,n),P(r,n,null),J(n,i),c&&c.m(n,null),J(e,a),u&&u.m(e,null),l=!0},p(f,d){const h={};d&384&&(h.visible=f[7]?f[8]:!1),d&33622067&&(h.$$scope={dirty:d,ctx:f}),r.$set(h),f[9]?c?(c.p(f,d),d&512&&y(c,1)):(c=Bi(f),c.c(),y(c,1),c.m(n,null)):c&&(ue(),k(c,1,1,()=>{c=null}),fe()),(!l||d&2048&&s!==(s=f[11].imageWrapper))&&m(n,"class",s),f[6]?u?(u.p(f,d),d&64&&y(u,1)):(u=zi(f),u.c(),y(u,1),u.m(e,null)):u&&(ue(),k(u,1,1,()=>{u=null}),fe()),(!l||d&2048&&o!==(o=f[11].figure))&&m(e,"class",o)},i(f){l||(y(r.$$.fragment,f),y(c),y(u),l=!0)},o(f){k(r.$$.fragment,f),k(c),k(u),l=!1},d(f){f&&R(e),N(r),c&&c.d(),u&&u.d()}}}function Af(t){let e,n;return e=new ze({props:{class:t[12](t[3],t[10]({css:t[2]})),$$slots:{default:[Rf]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&5132&&(s.class=r[12](r[3],r[10]({css:r[2]}))),i&33623027&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Of(t,e,n){let r,i,s;const a=["use","element","override","radius","class","src","alt","fit","width","height","caption","usePlaceholder","loader"];let o=Y(e,a),{$$slots:l={},$$scope:c}=e,{use:u=[],element:f=void 0,override:d={},radius:h=0,class:p="",src:g=void 0,alt:_="",fit:b="cover",width:v="100%",height:w="auto",caption:I=void 0,usePlaceholder:T=!1,loader:O=!1}=e;const E=He(Ce());let V=!1,q=!1,C=!1;const S=()=>n(8,V=!0),G=()=>n(22,q=!0);function M(j){$[j?"unshift":"push"](()=>{f=j,n(0,f)})}return t.$$set=j=>{e=z(z({},e),ye(j)),n(16,o=Y(e,a)),"use"in j&&n(1,u=j.use),"element"in j&&n(0,f=j.element),"override"in j&&n(2,d=j.override),"radius"in j&&n(17,h=j.radius),"class"in j&&n(3,p=j.class),"src"in j&&n(4,g=j.src),"alt"in j&&n(5,_=j.alt),"fit"in j&&n(18,b=j.fit),"width"in j&&n(19,v=j.width),"height"in j&&n(20,w=j.height),"caption"in j&&n(6,I=j.caption),"usePlaceholder"in j&&n(21,T=j.usePlaceholder),"loader"in j&&n(7,O=j.loader),"$$scope"in j&&n(25,c=j.$$scope)},t.$$.update=()=>{t.$$.dirty&6291712&&n(9,C=T&&(!V||q)),t.$$.dirty&1966080&&n(12,{cx:r,classes:i,getStyles:s}=yf({radius:h,fit:b,height:w,width:v},{name:"Image"}),r,(n(11,i),n(17,h),n(18,b),n(20,w),n(19,v)),(n(10,s),n(17,h),n(18,b),n(20,w),n(19,v)))},[f,u,d,p,g,_,I,O,V,C,s,i,r,E,S,G,o,h,b,v,w,T,q,l,M,c]}class Pf extends Q{constructor(e){super(),x(this,e,Of,Af,Z,{use:1,element:0,override:2,radius:17,class:3,src:4,alt:5,fit:18,width:19,height:20,caption:6,usePlaceholder:21,loader:7})}}const to=Pf,We={xs:30,sm:36,md:42,lg:50,xl:60},Nf=Me((t,{icon:e,iconWidth:n,invalid:r,multiline:i,radius:s,rightSectionWidth:a,size:o,variant:l,showRightSection:c})=>({root:{darkMode:{"& .input":l==="headless"?{}:{color:"$dark50"},"&:disabled":{backgroundColor:"$dark600"},"&::placeholder":{color:"$dark300"}},position:"relative"},input:l==="headless"?{}:{height:i?l==="unstyled"?void 0:"auto":typeof o=="number"?`${o}px`:We[o]??We.md,WebkitTapHighlightColor:"transparent",lineHeight:i?"$md":`${We[o]-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:typeof o=="number"?`${o}px`:`${o}`,width:"100%",color:"Black",display:"block",textAlign:"left",minHeight:l==="default"||l==="filled"?We[o]??We.md:null,paddingLeft:l==="default"&&e||l==="filled"&&e?We[o]??We.md/3:12,paddingRight:(l==="default"||l==="filled")&&c?a:null,borderRadius:l==="default"||l==="filled"?`$${s}`:null,"&:disabled":{backgroundColor:"$gray100",color:"$dark200",opacity:.6,cursor:"not-allowed","&::placeholder":{color:"$dark200"}},"&::placeholder":{opacity:1,userSelect:"none",color:"$gray500"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"},"&.defaultVariant":{[`${t.dark} &`]:{border:"1px solid $dark500",backgroundColor:"$dark800","&:focus, &:focus-within":{borderColor:"$blue800"}},border:"1px solid $gray400",backgroundColor:"White",transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:"$blue500"}},"&.filledVariant":{[`${t.dark} &`]:{backgroundColor:"$dark500","&:focus, &:focus-within":{borderColor:"$blue800 !important"}},border:"1px solid transparent",backgroundColor:"$gray100","&:focus, &:focus-within":{outline:"none",borderColor:"$blue500 !important"}},"&.unstyledVariant":{[`${t.dark} &`]:{color:"$dark50"},borderWidth:0,color:"Black",backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}},withIcon:{paddingLeft:typeof n=="number"?n:We[o]??We.md},disabled:{darkMode:{backgroundColor:"$dark600 !important"},backgroundColor:"$gray100 !important",color:"$dark200 !important",opacity:.6,cursor:"not-allowed","&::placeholder":{color:"$dark200 !important"}},invalid:{darkMode:{color:"$red600 !important",borderColor:"$red600 !important","&::placeholder":{color:"$red600 !important"}},color:"$red700 !important",borderColor:"$red700 !important","&::placeholder":{opacity:1,color:"$red700 !important"}},icon:{darkMode:{color:r?"red600":"$dark200"},pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:8,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:We[o]??We.md,color:r?"$red700":"$gray500"},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:a}})),Df=t=>({}),Ui=t=>({});function Wi(t){let e,n;const r=[{icon:t[6]},{className:t[22].icon},t[7],{iconSize:16}];let i={};for(let s=0;s<r.length;s+=1)i=z(i,r[s]);return e=new au({props:i}),{c(){L(e.$$.fragment)},m(s,a){P(e,s,a),n=!0},p(s,a){const o=a[0]&4194496?ce(r,[a[0]&64&&{icon:s[6]},a[0]&4194304&&{className:s[22].icon},a[0]&128&&ke(s[7]),r[3]]):{};e.$set(o)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){N(e,s)}}}function Lf(t){let e,n,r,i,s;const a=[{use:[t[24],[ie,t[2]]]},{"aria-invalid":t[15]},{class:t[23](t[3],{[t[22].disabled]:t[14],[t[22].invalid]:t[15],[t[22].withIcon]:t[6]},`${t[13]}Variant`)},{disabled:t[14]},{required:t[12]},{id:t[11]},{type:t[17]},t[28]];function o(f){t[37](f)}function l(f){t[38](f)}var c=t[5];function u(f){let d={$$slots:{default:[zf]},$$scope:{ctx:f}};for(let h=0;h<a.length;h+=1)d=z(d,a[h]);return f[0]!==void 0&&(d.element=f[0]),f[1]!==void 0&&(d.value=f[1]),{props:d}}return c&&(e=ut(c,u(t)),$.push(()=>_e(e,"element",o)),$.push(()=>_e(e,"value",l))),{c(){e&&L(e.$$.fragment),i=Ie()},m(f,d){e&&P(e,f,d),A(f,i,d),s=!0},p(f,d){const h=d[0]&297990220?ce(a,[d[0]&16777220&&{use:[f[24],[ie,f[2]]]},d[0]&32768&&{"aria-invalid":f[15]},d[0]&12640328&&{class:f[23](f[3],{[f[22].disabled]:f[14],[f[22].invalid]:f[15],[f[22].withIcon]:f[6]},`${f[13]}Variant`)},d[0]&16384&&{disabled:f[14]},d[0]&4096&&{required:f[12]},d[0]&2048&&{id:f[11]},d[0]&131072&&{type:f[17]},d[0]&268435456&&ke(f[28])]):{};if(d[1]&256&&(h.$$scope={dirty:d,ctx:f}),!n&&d[0]&1&&(n=!0,h.element=f[0],Te(()=>n=!1)),!r&&d[0]&2&&(r=!0,h.value=f[1],Te(()=>r=!1)),d[0]&32&&c!==(c=f[5])){if(e){ue();const p=e;k(p.$$.fragment,1,0,()=>{N(p,1)}),fe()}c?(e=ut(c,u(f)),$.push(()=>_e(e,"element",o)),$.push(()=>_e(e,"value",l)),L(e.$$.fragment),y(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else c&&e.$set(h)},i(f){s||(e&&y(e.$$.fragment,f),s=!0)},o(f){e&&k(e.$$.fragment,f),s=!1},d(f){f&&R(i),e&&N(e,f)}}}function Mf(t){let e,n=t[25]()&&Uf(t);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){r[25]()&&n.p(r,i)},i(r){e||(y(n),e=!0)},o(r){k(n),e=!1},d(r){n&&n.d(r)}}}function Bf(t){let e,n,r,i,s,a=[{value:t[1]},{type:t[17]},{required:t[12]},{disabled:t[14]},{id:t[11]},{placeholder:t[18]},{autocomplete:t[16]},{"aria-invalid":t[15]},{class:n=t[23](t[3],t[22].input,{[t[22].disabled]:t[14],[t[22].invalid]:t[15]},`${t[13]}Variant`)},t[28]],o={};for(let l=0;l<a.length;l+=1)o=z(o,a[l]);return{c(){e=te("input"),De(e,o),me(e,"disabled",t[14]),me(e,"invalid",t[15]),me(e,"withIcon",t[6])},m(l,c){A(l,e,c),"value"in o&&(e.value=o.value),e.autofocus&&e.focus(),t[35](e),i||(s=[ge(r=ie.call(null,e,t[2])),ge(t[24].call(null,e)),ct(e,"input",t[27])],i=!0)},p(l,c){De(e,o=ce(a,[c[0]&2&&e.value!==l[1]&&{value:l[1]},c[0]&131072&&{type:l[17]},c[0]&4096&&{required:l[12]},c[0]&16384&&{disabled:l[14]},c[0]&2048&&{id:l[11]},c[0]&262144&&{placeholder:l[18]},c[0]&65536&&{autocomplete:l[16]},c[0]&32768&&{"aria-invalid":l[15]},c[0]&12640264&&n!==(n=l[23](l[3],l[22].input,{[l[22].disabled]:l[14],[l[22].invalid]:l[15]},`${l[13]}Variant`))&&{class:n},c[0]&268435456&&l[28]])),"value"in o&&(e.value=o.value),r&&ve(r.update)&&c[0]&4&&r.update.call(null,l[2]),me(e,"disabled",l[14]),me(e,"invalid",l[15]),me(e,"withIcon",l[6])},i:ne,o:ne,d(l){l&&R(e),t[35](null),i=!1,Ae(s)}}}function zf(t){let e;const n=t[34].default,r=se(n,t,t[39],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[1]&256)&&ae(r,n,i,i[39],e?oe(n,i[39],s,null):le(i[39]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Uf(t){let e,n,r,i,s,a;const o=t[34].default,l=se(o,t,t[39],null);let c=[{value:t[1]},{required:t[12]},{disabled:t[14]},{id:t[11]},{autocomplete:t[16]},{type:t[17]},{"aria-invalid":t[15]},{class:n=t[23](t[3],t[22].input,`${t[13]}Variant`)},t[28]],u={};for(let f=0;f<c.length;f+=1)u=z(u,c[f]);return{c(){e=te(t[25]()),l&&l.c(),Rn(t[25]())(e,u),me(e,"disabled",t[14]),me(e,"invalid",t[15]),me(e,"withIcon",t[6])},m(f,d){A(f,e,d),l&&l.m(e,null),t[36](e),i=!0,s||(a=[ct(e,"change",t[26]),ge(r=ie.call(null,e,t[2])),ge(t[24].call(null,e))],s=!0)},p(f,d){l&&l.p&&(!i||d[1]&256)&&ae(l,o,f,f[39],i?oe(o,f[39],d,null):le(f[39]),null),Rn(f[25]())(e,u=ce(c,[(!i||d[0]&2)&&{value:f[1]},(!i||d[0]&4096)&&{required:f[12]},(!i||d[0]&16384)&&{disabled:f[14]},(!i||d[0]&2048)&&{id:f[11]},(!i||d[0]&65536)&&{autocomplete:f[16]},(!i||d[0]&131072)&&{type:f[17]},(!i||d[0]&32768)&&{"aria-invalid":f[15]},(!i||d[0]&12591112&&n!==(n=f[23](f[3],f[22].input,`${f[13]}Variant`)))&&{class:n},d[0]&268435456&&f[28]])),r&&ve(r.update)&&d[0]&4&&r.update.call(null,f[2]),me(e,"disabled",f[14]),me(e,"invalid",f[15]),me(e,"withIcon",f[6])},i(f){i||(y(l,f),i=!0)},o(f){k(l,f),i=!1},d(f){f&&R(e),l&&l.d(f),t[36](null),s=!1,Ae(a)}}}function ji(t){let e,n,r;const i=t[34].rightSection,s=se(i,t,t[39],Ui);let a=[t[9],{class:n=t[22].rightSection}],o={};for(let l=0;l<a.length;l+=1)o=z(o,a[l]);return{c(){e=te("div"),s&&s.c(),De(e,o)},m(l,c){A(l,e,c),s&&s.m(e,null),r=!0},p(l,c){s&&s.p&&(!r||c[1]&256)&&ae(s,i,l,l[39],r?oe(i,l[39],c,Df):le(l[39]),Ui),De(e,o=ce(a,[c[0]&512&&l[9],(!r||c[0]&4194304&&n!==(n=l[22].rightSection))&&{class:n}]))},i(l){r||(y(s,l),r=!0)},o(l){k(s,l),r=!1},d(l){l&&R(e),s&&s.d(l)}}}function Wf(t){let e,n,r,i,s,a,o,l=t[6]&&Wi(t);const c=[Bf,Mf,Lf],u=[];function f(h,p){return p[0]&524320&&(n=null),h[19]&&h[5]==="input"?0:(n==null&&(n=!!(h[19]&&Ff(String(h[5])))),n?1:h[20]&&typeof h[5]!="string"?2:-1)}~(r=f(t,[-1,-1]))&&(i=u[r]=c[r](t));let d=t[8]&&ji(t);return{c(){l&&l.c(),e=he(),i&&i.c(),s=he(),d&&d.c(),a=Ie()},m(h,p){l&&l.m(h,p),A(h,e,p),~r&&u[r].m(h,p),A(h,s,p),d&&d.m(h,p),A(h,a,p),o=!0},p(h,p){h[6]?l?(l.p(h,p),p[0]&64&&y(l,1)):(l=Wi(h),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(ue(),k(l,1,1,()=>{l=null}),fe());let g=r;r=f(h,p),r===g?~r&&u[r].p(h,p):(i&&(ue(),k(u[g],1,1,()=>{u[g]=null}),fe()),~r?(i=u[r],i?i.p(h,p):(i=u[r]=c[r](h),i.c()),y(i,1),i.m(s.parentNode,s)):i=null),h[8]?d?(d.p(h,p),p[0]&256&&y(d,1)):(d=ji(h),d.c(),y(d,1),d.m(a.parentNode,a)):d&&(ue(),k(d,1,1,()=>{d=null}),fe())},i(h){o||(y(l),y(i),y(d),o=!0)},o(h){k(l),k(i),k(d),o=!1},d(h){l&&l.d(h),h&&R(e),~r&&u[r].d(h),h&&R(s),d&&d.d(h),h&&R(a)}}}function jf(t){let e,n;const r=[t[10],{class:t[21]({css:t[4]})},t[28]];let i={$$slots:{default:[Wf]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=z(i,r[s]);return e=new ze({props:i}),{c(){L(e.$$.fragment)},m(s,a){P(e,s,a),n=!0},p(s,a){const o=a[0]&270533648?ce(r,[a[0]&1024&&ke(s[10]),a[0]&2097168&&{class:s[21]({css:s[4]})},a[0]&268435456&&ke(s[28])]):{};a[0]&283114479|a[1]&256&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){N(e,s)}}}function Ff(t){return["input","select","textarea","datalist"].includes(t)}function Hf(t,e,n){let r,i,s;const a=["use","element","class","override","root","icon","iconWidth","iconProps","showRightSection","rightSectionWidth","rightSectionProps","wrapperProps","id","required","radius","variant","disabled","size","value","invalid","multiline","autocomplete","type","placeholder"];let o=Y(e,a),{$$slots:l={},$$scope:c}=e;const u=Ds(l);let{use:f=[],element:d=void 0,class:h="",override:p={},root:g="input",icon:_=null,iconWidth:b=36,iconProps:v={size:20,color:"currentColor"},showRightSection:w=u.rightSection,rightSectionWidth:I=36,rightSectionProps:T={},wrapperProps:O={},id:E="input-id",required:V=!1,radius:q="sm",variant:C="default",disabled:S=!1,size:G="sm",value:M="",invalid:j=!1,multiline:F=!1,autocomplete:Le="on",type:Se="text",placeholder:U=void 0}=e;const It=He(Ce());function Ft(){return g}let Qe=!0,H=!1;function Zn(){n(1,M=this.value)}function xn(D){D.target.type==="checkbox"?n(1,M=D.target.checked):D.target.type==="number"||D.target.type==="range"?n(1,M=+D.target.value):n(1,M=D.target.value)}function Qn(D){$[D?"unshift":"push"](()=>{d=D,n(0,d)})}function $n(D){$[D?"unshift":"push"](()=>{d=D,n(0,d)})}function St(D){d=D,n(0,d)}function er(D){M=D,n(1,M)}return t.$$set=D=>{e=z(z({},e),ye(D)),n(28,o=Y(e,a)),"use"in D&&n(2,f=D.use),"element"in D&&n(0,d=D.element),"class"in D&&n(3,h=D.class),"override"in D&&n(4,p=D.override),"root"in D&&n(5,g=D.root),"icon"in D&&n(6,_=D.icon),"iconWidth"in D&&n(29,b=D.iconWidth),"iconProps"in D&&n(7,v=D.iconProps),"showRightSection"in D&&n(8,w=D.showRightSection),"rightSectionWidth"in D&&n(30,I=D.rightSectionWidth),"rightSectionProps"in D&&n(9,T=D.rightSectionProps),"wrapperProps"in D&&n(10,O=D.wrapperProps),"id"in D&&n(11,E=D.id),"required"in D&&n(12,V=D.required),"radius"in D&&n(31,q=D.radius),"variant"in D&&n(13,C=D.variant),"disabled"in D&&n(14,S=D.disabled),"size"in D&&n(32,G=D.size),"value"in D&&n(1,M=D.value),"invalid"in D&&n(15,j=D.invalid),"multiline"in D&&n(33,F=D.multiline),"autocomplete"in D&&n(16,Le=D.autocomplete),"type"in D&&n(17,Se=D.type),"placeholder"in D&&n(18,U=D.placeholder),"$$scope"in D&&n(39,c=D.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&32&&(n(19,Qe=g&&typeof g=="string"),n(20,H=g&&typeof g=="function")),t.$$.dirty[0]&1610654016|t.$$.dirty[1]&7&&n(23,{cx:r,classes:i,getStyles:s}=Nf({icon:_,iconWidth:b,invalid:j,multiline:F,radius:q,rightSectionWidth:I,showRightSection:w,size:G,variant:C},{name:"Input"}),r,(n(22,i),n(6,_),n(29,b),n(15,j),n(33,F),n(31,q),n(30,I),n(8,w),n(32,G),n(13,C)),(n(21,s),n(6,_),n(29,b),n(15,j),n(33,F),n(31,q),n(30,I),n(8,w),n(32,G),n(13,C)))},[d,M,f,h,p,g,_,v,w,T,O,E,V,C,S,j,Le,Se,U,Qe,H,s,i,r,It,Ft,Zn,xn,o,b,I,q,G,F,l,Qn,$n,St,er,c]}class Vf extends Q{constructor(e){super(),x(this,e,Hf,jf,Z,{use:2,element:0,class:3,override:4,root:5,icon:6,iconWidth:29,iconProps:7,showRightSection:8,rightSectionWidth:30,rightSectionProps:9,wrapperProps:10,id:11,required:12,radius:31,variant:13,disabled:14,size:32,value:1,invalid:15,multiline:33,autocomplete:16,type:17,placeholder:18},null,[-1,-1])}}const Fi=Vf,qf={app:100,modal:200,popover:300,overlay:400};function Gf(t){return qf[t]}function Kf(t){let e,n,r;const i=[{use:[t[10],[ie,t[1]]]},{id:"innerOverlay"},{css:{...t[9],...t[8],opacity:t[4],borderRadius:`${t[6]}`,...t[3]}},t[11],{class:t[2]}];function s(o){t[17](o)}let a={$$slots:{default:[xf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l&3934?ce(i,[l&1026&&{use:[o[10],[ie,o[1]]]},i[1],l&856&&{css:{...o[9],...o[8],opacity:o[4],borderRadius:`${o[6]}`,...o[3]}},l&2048&&ke(o[11]),l&4&&{class:o[2]}]):{};l&262272&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Jf(t){let e,n,r;const i=[{use:[t[10],[ie,t[1]]]},{id:"outterOverlay"},{css:{...t[8],backdropFilter:`blur(${t[5]}px)`}},{class:t[2]},t[11]];function s(o){t[16](o)}let a={$$slots:{default:[Qf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l&3366?ce(i,[l&1026&&{use:[o[10],[ie,o[1]]]},i[1],l&288&&{css:{...o[8],backdropFilter:`blur(${o[5]}px)`}},l&4&&{class:o[2]},l&2048&&ke(o[11])]):{};l&263e3&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Xf(t){let e;const n=t[15].default,r=se(n,t,t[18],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262144)&&ae(r,n,i,i[18],e?oe(n,i[18],s,null):le(i[18]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Yf(t){let e,n;return e=new ef({props:{$$slots:{default:[Zf]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&262144&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Zf(t){let e;const n=t[15].default,r=se(n,t,t[18],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262144)&&ae(r,n,i,i[18],e?oe(n,i[18],s,null):le(i[18]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function xf(t){let e,n,r,i;const s=[Yf,Xf],a=[];function o(l,c){return l[7]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let u=e;e=o(l),e===u?a[e].p(l,c):(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function Qf(t){let e,n;return e=new ze({props:{id:"innerOverlay",css:{...t[9],...t[8],opacity:t[4],borderRadius:`${t[6]}`,...t[3]}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&856&&(s.css={...r[9],...r[8],opacity:r[4],borderRadius:`${r[6]}`,...r[3]}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function $f(t){let e,n,r,i;const s=[Jf,Kf],a=[];function o(l,c){return l[5]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let u=e;e=o(l),e===u?a[e].p(l,c):(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function ed(t,e,n){let r,i;const s=["use","element","class","override","opacity","color","blur","gradient","zIndex","radius","center"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:u=void 0,class:f="",override:d={},opacity:h=.6,color:p="#fff",blur:g=0,gradient:_="",zIndex:b=Gf("modal"),radius:v=0,center:w=!1}=e;const I=He(Ce());function T(E){u=E,n(0,u)}function O(E){u=E,n(0,u)}return t.$$set=E=>{e=z(z({},e),ye(E)),n(11,a=Y(e,s)),"use"in E&&n(1,c=E.use),"element"in E&&n(0,u=E.element),"class"in E&&n(2,f=E.class),"override"in E&&n(3,d=E.override),"opacity"in E&&n(4,h=E.opacity),"color"in E&&n(12,p=E.color),"blur"in E&&n(5,g=E.blur),"gradient"in E&&n(13,_=E.gradient),"zIndex"in E&&n(14,b=E.zIndex),"radius"in E&&n(6,v=E.radius),"center"in E&&n(7,w=E.center),"$$scope"in E&&n(18,l=E.$$scope)},t.$$.update=()=>{t.$$.dirty&12288&&n(9,r=_?{backgroundImage:_}:{backgroundColor:p}),t.$$.dirty&16384&&n(8,i={position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:b})},[u,c,f,d,h,g,v,w,i,r,I,a,p,_,b,o,T,O,l]}class td extends Q{constructor(e){super(),x(this,e,ed,$f,Z,{use:1,element:0,class:2,override:3,opacity:4,color:12,blur:5,gradient:13,zIndex:14,radius:6,center:7})}}const nd=td,Hi={xs:320,sm:380,md:440,lg:620,xl:780,full:"100%"},rd=Me((t,{centered:e,overflow:n,size:r,zIndex:i})=>{const s=!(r in Hi);return{close:{},overlay:{},root:{position:"fixed",zIndex:i,top:0,left:0,right:0,bottom:0},inner:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",padding:`${+t.space.xl.value*2}px ${+t.space.md.value}px`,display:"flex",justifyContent:"center",alignItems:e?"center":"flex-start"},title:{marginRight:+t.space.md.value,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"},modal:{[`${t.dark} &`]:{backgroundColor:t.fn.themeColor("dark",7)},position:"relative",width:typeof r=="string"&&s?r:t.fn.size({sizes:Hi,size:r}),outline:0,backgroundColor:"white",marginTop:e?"auto":void 0,marginBottom:e?"auto":void 0,zIndex:1,marginLeft:"calc(var(--removed-scroll-width, 0px) * -1)"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:parseInt(t.space.md.value),marginRight:-9},body:{maxHeight:n==="inside"?"calc(100vh - 185px)":null,overflowY:n==="inside"?"auto":null,wordBreak:"break-word"}}});function Vi(t){let e,n;return e=new eu({props:{class:t[27](),withinPortal:t[16],target:t[15],$$slots:{default:[ld]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i[0]&65536&&(s.withinPortal=r[16]),i[0]&32768&&(s.target=r[15]),i[0]&270434287|i[1]&512&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function qi(t){let e,n,r,i,s;n=new Lr({props:{id:t[23],class:t[18].title,$$slots:{default:[id]},$$scope:{ctx:t}}});let a=t[6]&&Gi(t);return{c(){e=te("div"),L(n.$$.fragment),r=he(),a&&a.c(),m(e,"class",i=t[18].header)},m(o,l){A(o,e,l),P(n,e,null),J(e,r),a&&a.m(e,null),s=!0},p(o,l){const c={};l[0]&262144&&(c.class=o[18].title),l[0]&32|l[1]&512&&(c.$$scope={dirty:l,ctx:o}),n.$set(c),o[6]?a?(a.p(o,l),l[0]&64&&y(a,1)):(a=Gi(o),a.c(),y(a,1),a.m(e,null)):a&&(ue(),k(a,1,1,()=>{a=null}),fe()),(!s||l[0]&262144&&i!==(i=o[18].header))&&m(e,"class",i)},i(o){s||(y(n.$$.fragment,o),y(a),s=!0)},o(o){k(n.$$.fragment,o),k(a),s=!1},d(o){o&&R(e),N(n),a&&a.d()}}}function id(t){let e;return{c(){e=we(t[5])},m(n,r){A(n,e,r)},p(n,r){r[0]&32&&zs(e,n[5])},d(n){n&&R(e)}}}function Gi(t){let e,n;return e=new Dc({props:{iconSize:16,"aria-label":t[10],class:t[18].close}}),e.$on("click",t[26]),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i[0]&1024&&(s["aria-label"]=r[10]),i[0]&262144&&(s.class=r[18].close),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function sd(t){let e;return{c(){e=we("Place some content")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function od(t){let e,n,r,i,s=(t[5]||t[6])&&qi(t);const a=t[36].default,o=se(a,t,t[40],null),l=o||sd();return{c(){s&&s.c(),e=he(),n=te("div"),l&&l.c(),m(n,"id",t[24]),m(n,"class",r=t[18].body)},m(c,u){s&&s.m(c,u),A(c,e,u),A(c,n,u),l&&l.m(n,null),i=!0},p(c,u){c[5]||c[6]?s?(s.p(c,u),u[0]&96&&y(s,1)):(s=qi(c),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(ue(),k(s,1,1,()=>{s=null}),fe()),o&&o.p&&(!i||u[1]&512)&&ae(o,a,c,c[40],i?oe(a,c[40],u,null):le(c[40]),null),(!i||u[0]&262144&&r!==(r=c[18].body))&&m(n,"class",r)},i(c){i||(y(s),y(l,c),i=!0)},o(c){k(s),k(l,c),i=!1},d(c){s&&s.d(c),c&&R(e),c&&R(n),l&&l.d(c)}}}function ad(t){let e,n,r,i,s,a,o,l,c,u,f,d,h;return r=new Xu({props:{class:t[18].modal,shadow:t[11],padding:t[12],radius:t[9],role:"dialog","aria-labelledby":t[23],"aria-describedby":t[24],"aria-modal":!0,tabindex:-1,use:[Mc],$$slots:{default:[od]},$$scope:{ctx:t}}}),o=new nd({props:{class:t[18].overlay,override:{position:"fixed"},zIndex:0,blur:t[8],color:t[7]||"black",opacity:t[25]}}),o.$on("mousedown",t[37]),{c(){e=te("div"),n=te("div"),L(r.$$.fragment),s=he(),a=te("div"),L(o.$$.fragment),m(e,"role","presentation"),m(e,"class",c=t[18].inner)},m(p,g){A(p,e,g),J(e,n),P(r,n,null),J(e,s),J(e,a),P(o,a,null),f=!0,d||(h=[ge(u=Hc.call(null,e,t[20])),ct(e,"keydown",t[38],!0)],d=!0)},p(p,g){t=p;const _={};g[0]&262144&&(_.class=t[18].modal),g[0]&2048&&(_.shadow=t[11]),g[0]&4096&&(_.padding=t[12]),g[0]&512&&(_.radius=t[9]),g[0]&263264|g[1]&512&&(_.$$scope={dirty:g,ctx:t}),r.$set(_);const b={};g[0]&262144&&(b.class=t[18].overlay),g[0]&256&&(b.blur=t[8]),g[0]&128&&(b.color=t[7]||"black"),o.$set(b),(!f||g[0]&262144&&c!==(c=t[18].inner))&&m(e,"class",c),u&&ve(u.update)&&g[0]&1048576&&u.update.call(null,t[20])},i(p){f||(y(r.$$.fragment,p),Bt(()=>{i||(i=gn(n,ui,{duration:100,easing:pn},!0)),i.run(1)}),y(o.$$.fragment,p),Bt(()=>{l||(l=gn(a,ci,{duration:200,easing:pn},!0)),l.run(1)}),f=!0)},o(p){k(r.$$.fragment,p),i||(i=gn(n,ui,{duration:100,easing:pn},!1)),i.run(0),k(o.$$.fragment,p),l||(l=gn(a,ci,{duration:200,easing:pn},!1)),l.run(0),f=!1},d(p){p&&R(e),N(r),p&&i&&i.end(),N(o),p&&l&&l.end(),d=!1,Ae(h)}}}function ld(t){let e,n,r;const i=[{id:t[22]},{use:t[1]},t[28],{class:t[19](t[2],t[17]({css:t[3]}))}];function s(o){t[39](o)}let a={$$slots:{default:[ad]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l[0]&273285134?ce(i,[l[0]&4194304&&{id:o[22]},l[0]&2&&{use:o[1]},l[0]&268435456&&ke(o[28]),l[0]&655372&&{class:o[19](o[2],o[17]({css:o[3]}))}]):{};l[0]&1343456|l[1]&512&&(c.$$scope={dirty:l,ctx:o}),!n&&l[0]&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function cd(t){let e,n,r=t[4]&&Vi(t);return{c(){r&&r.c(),e=Ie()},m(i,s){r&&r.m(i,s),A(i,e,s),n=!0},p(i,s){i[4]?r?(r.p(i,s),s[0]&16&&y(r,1)):(r=Vi(i),r.c(),y(r,1),r.m(e.parentNode,e)):r&&(ue(),k(r,1,1,()=>{r=null}),fe())},i(i){n||(y(r),n=!0)},o(i){k(r),n=!1},d(i){r&&r.d(i),i&&R(e)}}}function ud(t,e,n){let r,i,s,a;const o=["use","element","class","override","opened","title","zIndex","overflow","withCloseButton","overlayOpacity","overlayColor","overlayBlur","radius","size","closeButtonLabel","id","shadow","padding","closeOnClickOutside","closeOnEscape","trapFocus","centered","target","withinPortal"];let l=Y(e,o),c;Wn(t,Dt,W=>n(41,c=W));let{$$slots:u={},$$scope:f}=e,{use:d=[],element:h=void 0,class:p="",override:g={},opened:_=!1,title:b="",zIndex:v=200,overflow:w="outside",withCloseButton:I=!0,overlayOpacity:T=null,overlayColor:O=null,overlayBlur:E=0,radius:V="sm",size:q="md",closeButtonLabel:C="svelteui-close-button",id:S="svelteui",shadow:G="lg",padding:M="lg",closeOnClickOutside:j=!0,closeOnEscape:F=!0,trapFocus:Le=!1,centered:Se=null,target:U="#SVELTEUI_PROVIDER",withinPortal:It=!0}=e;const Ft=Aa(),Qe=W=>W,H=nl(S),Zn=`${H}-title`,xn=`${H}-body`,Qn=typeof T=="number"?T:c==="dark"?.85:.75,$n=W=>{!Le&&W.code==="Escape"&&F&&St()};function St(){Ft("close")}const er=Qt({zIndex:v}),D=()=>j&&St(),aa=W=>{var ni;((ni=Qe(W.target))==null?void 0:ni.getAttribute("data-svelteui-stop-propagation"))!=="true"&&W.code==="Escape"&&F&&St()};function la(W){h=W,n(0,h)}return t.$$set=W=>{e=z(z({},e),ye(W)),n(28,l=Y(e,o)),"use"in W&&n(1,d=W.use),"element"in W&&n(0,h=W.element),"class"in W&&n(2,p=W.class),"override"in W&&n(3,g=W.override),"opened"in W&&n(4,_=W.opened),"title"in W&&n(5,b=W.title),"zIndex"in W&&n(29,v=W.zIndex),"overflow"in W&&n(30,w=W.overflow),"withCloseButton"in W&&n(6,I=W.withCloseButton),"overlayOpacity"in W&&n(31,T=W.overlayOpacity),"overlayColor"in W&&n(7,O=W.overlayColor),"overlayBlur"in W&&n(8,E=W.overlayBlur),"radius"in W&&n(9,V=W.radius),"size"in W&&n(32,q=W.size),"closeButtonLabel"in W&&n(10,C=W.closeButtonLabel),"id"in W&&n(33,S=W.id),"shadow"in W&&n(11,G=W.shadow),"padding"in W&&n(12,M=W.padding),"closeOnClickOutside"in W&&n(13,j=W.closeOnClickOutside),"closeOnEscape"in W&&n(14,F=W.closeOnEscape),"trapFocus"in W&&n(34,Le=W.trapFocus),"centered"in W&&n(35,Se=W.centered),"target"in W&&n(15,U=W.target),"withinPortal"in W&&n(16,It=W.withinPortal),"$$scope"in W&&n(40,f=W.$$scope)},t.$$.update=()=>{if(t.$$.dirty[1]&8&&Ar(()=>{Le||typeof window<"u"&&window.addEventListener("keydown",$n)}),t.$$.dirty[0]&32784&&_&&(typeof U=="string"&&!document.querySelector(U)||!U))throw new Error(`Wrap your app in the SvelteUIProvider, or provide a sufficent target throught the "target={''}" prop `);t.$$.dirty[0]&16&&n(20,r=_),t.$$.dirty[0]&1610612736|t.$$.dirty[1]&18&&n(19,{cx:i,classes:s,getStyles:a}=rd({centered:Se,overflow:w,size:q,zIndex:v},{name:"Modal"}),i,(n(18,s),n(35,Se),n(30,w),n(32,q),n(29,v)),(n(17,a),n(35,Se),n(30,w),n(32,q),n(29,v)))},[h,d,p,g,_,b,I,O,E,V,C,G,M,j,F,U,It,a,s,i,r,Qe,H,Zn,xn,Qn,St,er,l,v,w,T,q,S,Le,Se,u,D,aa,la,f]}class fd extends Q{constructor(e){super(),x(this,e,ud,cd,Z,{use:1,element:0,class:2,override:3,opened:4,title:5,zIndex:29,overflow:30,withCloseButton:6,overlayOpacity:31,overlayColor:7,overlayBlur:8,radius:9,size:32,closeButtonLabel:10,id:33,shadow:11,padding:12,closeOnClickOutside:13,closeOnEscape:14,trapFocus:34,centered:35,target:15,withinPortal:16},null,[-1,-1])}}const dd=fd,Ki={1:{fontSize:34,lineHeight:1.3},2:{fontSize:26,lineHeight:1.35},3:{fontSize:22,lineHeight:1.4},4:{fontSize:18,lineHeight:1.45},5:{fontSize:16,lineHeight:1.5},6:{fontSize:14,lineHeight:1.5}},hd=Me(()=>({root:{margin:0}}));function md(t){let e;const n=t[8].default,r=se(n,t,t[10],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&1024)&&ae(r,n,i,i[10],e?oe(n,i[10],s,null):le(i[10]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function gd(t){let e,n,r;const i=[{class:t[5](t[1],Ji,t[4].root)},{root:t[3]},{size:Ki[t[2]].fontSize},t[6]];function s(o){t[9](o)}let a={$$slots:{default:[md]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=z(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new Lr({props:a}),$.push(()=>_e(e,"element",s)),{c(){L(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ce(i,[l&50&&{class:o[5](o[1],Ji,o[4].root)},l&8&&{root:o[3]},l&4&&{size:Ki[o[2]].fontSize},l&64&&ke(o[6])]):{};l&1024&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Te(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}const Ji="title";function pd(t,e,n){let r,i;const s=["element","class","override","order"];let a=Y(e,s),{$$slots:o={},$$scope:l}=e,{element:c=void 0,class:u="",override:f={},order:d=1}=e,h;function p(g){c=g,n(0,c)}return t.$$set=g=>{e=z(z({},e),ye(g)),n(6,a=Y(e,s)),"element"in g&&n(0,c=g.element),"class"in g&&n(1,u=g.class),"override"in g&&n(7,f=g.override),"order"in g&&n(2,d=g.order),"$$scope"in g&&n(10,l=g.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(3,h=`h${d}`),t.$$.dirty&128&&n(5,{cx:r,classes:i}=hd(null,{override:f,name:"Title"}),r,(n(4,i),n(7,f)))},[c,u,d,h,i,r,a,f,o,p,l]}class bd extends Q{constructor(e){super(),x(this,e,pd,gd,Z,{element:0,class:1,override:7,order:2})}}const _d=bd;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(d=64)),r.push(n[u],n[f],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(no(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||c==null||f==null)throw new kd;const d=s<<2|o>>4;if(r.push(d),c!==64){const h=o<<4&240|c>>2;if(r.push(h),f!==64){const p=c<<6&192|f;r.push(p)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vd=function(t){const e=no(t);return ro.encodeByteArray(e,!0)},Pn=function(t){return vd(t).replace(/\./g,"")},io=function(t){try{return ro.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=()=>Id().__FIREBASE_DEFAULTS__,Ed=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Td=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&io(t[1]);return e&&JSON.parse(e)},Fn=()=>{try{return Sd()||Ed()||Td()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},so=t=>{var e,n;return(n=(e=Fn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wd=t=>{const e=so(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Cd=()=>{var t;return(t=Fn())===null||t===void 0?void 0:t.config},oo=t=>{var e;return(e=Fn())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[Pn(JSON.stringify(n)),Pn(JSON.stringify(a)),o].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Od(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Pd(){var t;const e=(t=Fn())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Dd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ld(){const t=Re();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Md(){try{return typeof indexedDB=="object"}catch{return!1}}function Bd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="FirebaseError";class xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zd,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Ud(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new xe(i,o,r)}}function Ud(t,e){return t.replace(Wd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Wd=/\{\$([^}]+)}/g;function jd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Xi(s)&&Xi(a)){if(!Nn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Fd(t,e){const n=new Hd(t,e);return n.subscribe.bind(n)}class Hd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vd(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=or),i.error===void 0&&(i.error=or),i.complete===void 0&&(i.complete=or);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class _t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Rd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Kd(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Gd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gd(t){return t===ht?void 0:t}function Kd(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const Xd={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},Yd=de.INFO,Zd={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},xd=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Zd[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ao{constructor(e){this.name=e,this._logLevel=Yd,this._logHandler=xd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const Qd=(t,e)=>e.some(n=>t instanceof n);let Yi,Zi;function $d(){return Yi||(Yi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function eh(){return Zi||(Zi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,yr=new WeakMap,co=new WeakMap,ar=new WeakMap,Mr=new WeakMap;function th(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(ot(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&lo.set(n,t)}).catch(()=>{}),Mr.set(e,t),e}function nh(t){if(yr.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});yr.set(t,e)}let kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||co.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rh(t){kr=t(kr)}function ih(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lr(this),e,...n);return co.set(r,e.sort?e.sort():[e]),ot(r)}:eh().includes(t)?function(...e){return t.apply(lr(this),e),ot(lo.get(this))}:function(...e){return ot(t.apply(lr(this),e))}}function sh(t){return typeof t=="function"?ih(t):(t instanceof IDBTransaction&&nh(t),Qd(t,$d())?new Proxy(t,kr):t)}function ot(t){if(t instanceof IDBRequest)return th(t);if(ar.has(t))return ar.get(t);const e=sh(t);return e!==t&&(ar.set(t,e),Mr.set(e,t)),e}const lr=t=>Mr.get(t);function oh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=ot(a);return r&&a.addEventListener("upgradeneeded",l=>{r(ot(a.result),l.oldVersion,l.newVersion,ot(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const ah=["get","getKey","getAll","getAllKeys","count"],lh=["put","add","delete","clear"],cr=new Map;function xi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ah.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return cr.set(e,s),s}rh(t=>({...t,get:(e,n,r)=>xi(e,n)||t.get(e,n,r),has:(e,n)=>!!xi(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uh(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uh(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",Qi="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new ao("@firebase/app"),fh="@firebase/app-compat",dh="@firebase/analytics-compat",hh="@firebase/analytics",mh="@firebase/app-check-compat",gh="@firebase/app-check",ph="@firebase/auth",bh="@firebase/auth-compat",_h="@firebase/database",yh="@firebase/database-compat",kh="@firebase/functions",vh="@firebase/functions-compat",Ih="@firebase/installations",Sh="@firebase/installations-compat",Eh="@firebase/messaging",Th="@firebase/messaging-compat",wh="@firebase/performance",Ch="@firebase/performance-compat",Rh="@firebase/remote-config",Ah="@firebase/remote-config-compat",Oh="@firebase/storage",Ph="@firebase/storage-compat",Nh="@firebase/firestore",Dh="@firebase/firestore-compat",Lh="firebase",Mh="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="[DEFAULT]",Bh={[vr]:"fire-core",[fh]:"fire-core-compat",[hh]:"fire-analytics",[dh]:"fire-analytics-compat",[gh]:"fire-app-check",[mh]:"fire-app-check-compat",[ph]:"fire-auth",[bh]:"fire-auth-compat",[_h]:"fire-rtdb",[yh]:"fire-rtdb-compat",[kh]:"fire-fn",[vh]:"fire-fn-compat",[Ih]:"fire-iid",[Sh]:"fire-iid-compat",[Eh]:"fire-fcm",[Th]:"fire-fcm-compat",[wh]:"fire-perf",[Ch]:"fire-perf-compat",[Rh]:"fire-rc",[Ah]:"fire-rc-compat",[Oh]:"fire-gcs",[Ph]:"fire-gcs-compat",[Nh]:"fire-fst",[Dh]:"fire-fst-compat","fire-js":"fire-js",[Lh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=new Map,Sr=new Map;function zh(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zt(t){const e=t.name;if(Sr.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,t);for(const n of Dn.values())zh(n,t);return!0}function Br(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},at=new an("app","Firebase",Uh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=Mh;function uo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw at.create("bad-app-name",{appName:String(i)});if(n||(n=Cd()),!n)throw at.create("no-options");const s=Dn.get(i);if(s){if(Nn(n,s.options)&&Nn(r,s.config))return s;throw at.create("duplicate-app",{appName:i})}const a=new Jd(i);for(const l of Sr.values())a.addComponent(l);const o=new Wh(n,r,a);return Dn.set(i,o),o}function fo(t=Ir){const e=Dn.get(t);if(!e&&t===Ir)return uo();if(!e)throw at.create("no-app",{appName:t});return e}function lt(t,e,n){var r;let i=(r=Bh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}zt(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="firebase-heartbeat-database",Fh=1,$t="firebase-heartbeat-store";let ur=null;function ho(){return ur||(ur=oh(jh,Fh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($t)}}}).catch(t=>{throw at.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Hh(t){try{return(await ho()).transaction($t).objectStore($t).get(mo(t))}catch(e){if(e instanceof xe)yt.warn(e.message);else{const n=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function $i(t,e){try{const r=(await ho()).transaction($t,"readwrite");return await r.objectStore($t).put(e,mo(t)),r.done}catch(n){if(n instanceof xe)yt.warn(n.message);else{const r=at.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(r.message)}}}function mo(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=1024,qh=30*24*60*60*1e3;class Gh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jh(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=es();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=es(),{heartbeatsToSend:n,unsentEntries:r}=Kh(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function es(){return new Date().toISOString().substring(0,10)}function Kh(t,e=Vh){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ts(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ts(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Jh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?Bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Hh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $i(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ts(t){return Pn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t){zt(new _t("platform-logger",e=>new ch(e),"PRIVATE")),zt(new _t("heartbeat",e=>new Gh(e),"PRIVATE")),lt(vr,Qi,t),lt(vr,Qi,"esm2017"),lt("fire-js","")}Xh("");function zr(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function go(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Yh=go,po=new an("auth","Firebase",go());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=new ao("@firebase/auth");function En(t,...e){ns.logLevel<=de.ERROR&&ns.error(`Auth (${cn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(t,...e){throw Ur(t,...e)}function Ve(t,...e){return Ur(t,...e)}function Zh(t,e,n){const r=Object.assign(Object.assign({},Yh()),{[e]:n});return new an("auth","Firebase",r).create(e,{appName:t.name})}function Ur(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return po.create(t,...e)}function K(t,e,...n){if(!t)throw Ur(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw En(e),new Error(e)}function Ze(t,e){t||Je(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new Map;function Xe(t){Ze(t instanceof Function,"Expected a class definition");let e=rs.get(t);return e?(Ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rs.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(t,e){const n=Br(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nn(s,e??{}))return i;Fe(i,"already-initialized")}return n.initialize({options:e})}function Qh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $h(){return is()==="http:"||is()==="https:"}function is(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||Nd()||"connection"in navigator)?navigator.onLine:!0}function tm(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ze(n>e,"Short delay should be less than long delay!"),this.isMobile=Od()||Dd()}get(){return em()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t,e){Ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=new un(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fn(t,e,n,r,i={}){return _o(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=ln(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bo.fetch()(yo(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function _o(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nm),e);try{const i=new im(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _n(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw _n(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw _n(t,"user-disabled",a);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Zh(t,u,c);Fe(t,u)}}catch(i){if(i instanceof xe)throw i;Fe(t,"internal-error",{message:String(i)})}}async function Vn(t,e,n,r,i={}){const s=await fn(t,e,n,r,i);return"mfaPendingCredential"in s&&Fe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function yo(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wr(t.config,i):`${t.config.apiScheme}://${i}`}class im{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),rm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _n(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ve(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e){return fn(t,"POST","/v1/accounts:delete",e)}async function om(t,e){return fn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function am(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=jr(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yt(fr(i.auth_time)),issuedAtTime:Yt(fr(i.iat)),expirationTime:Yt(fr(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fr(t){return Number(t)*1e3}function jr(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return En("JWT malformed, contained fewer than 3 sections"),null;try{const i=io(n);return i?JSON.parse(i):(En("Failed to decode base64 JWT payload"),null)}catch(i){return En("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function lm(t){const e=jr(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xe&&cm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ln(t){var e;const n=t.auth,r=await t.getIdToken(),i=await en(t,om(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?hm(s.providerUserInfo):[],o=dm(t.providerData,a),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ko(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function fm(t){const e=Ue(t);await Ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dm(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function hm(t){return t.map(e=>{var{providerId:n}=e,r=zr(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mm(t,e){const n=await _o(t,{},async()=>{const r=ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=yo(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",bo.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await mm(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new tn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=zr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new um(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ko(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await en(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return am(this,e)}reload(){return fm(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ln(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await en(this,sm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,l,c,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,p=(a=n.photoURL)!==null&&a!==void 0?a:void 0,g=(o=n.tenantId)!==null&&o!==void 0?o:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,b=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:w,emailVerified:I,isAnonymous:T,providerData:O,stsTokenManager:E}=n;K(w&&E,e,"internal-error");const V=tn.fromJSON(this.name,E);K(typeof w=="string",e,"internal-error"),$e(f,e.name),$e(d,e.name),K(typeof I=="boolean",e,"internal-error"),K(typeof T=="boolean",e,"internal-error"),$e(h,e.name),$e(p,e.name),$e(g,e.name),$e(_,e.name),$e(b,e.name),$e(v,e.name);const q=new gt({uid:w,auth:e,email:d,emailVerified:I,displayName:f,isAnonymous:T,photoURL:p,phoneNumber:h,tenantId:g,stsTokenManager:V,createdAt:b,lastLoginAt:v});return O&&Array.isArray(O)&&(q.providerData=O.map(C=>Object.assign({},C))),_&&(q._redirectEventId=_),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new tn;i.updateFromServerResponse(n);const s=new gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ln(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vo.type="NONE";const ss=vo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(t,e,n){return`firebase:${t}:${e}:${n}`}class Lt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lt(Xe(ss),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xe(ss);const a=Tn(r,e.config.apiKey,e.name);let o=null;for(const c of n)try{const u=await c._get(a);if(u){const f=gt._fromJSON(e,u);c!==s&&(o=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lt(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Lt(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function os(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Eo(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Io(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wo(e))return"Blackberry";if(Co(e))return"Webos";if(Fr(e))return"Safari";if((e.includes("chrome/")||So(e))&&!e.includes("edge/"))return"Chrome";if(To(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Io(t=Re()){return/firefox\//i.test(t)}function Fr(t=Re()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function So(t=Re()){return/crios\//i.test(t)}function Eo(t=Re()){return/iemobile/i.test(t)}function To(t=Re()){return/android/i.test(t)}function wo(t=Re()){return/blackberry/i.test(t)}function Co(t=Re()){return/webos/i.test(t)}function qn(t=Re()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gm(t=Re()){var e;return qn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pm(){return Ld()&&document.documentMode===10}function Ro(t=Re()){return qn(t)||To(t)||Co(t)||wo(t)||/windows phone/i.test(t)||Eo(t)}function bm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t,e=[]){let n;switch(t){case"Browser":n=os(Re());break;case"Worker":n=`${os(Re())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new as(this),this.idTokenSubscription=new as(this),this.beforeStateQueue=new _m(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=po,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ln(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Xe(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xe(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Lt.create(this,[Xe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return K(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ao(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gn(t){return Ue(t)}class as{constructor(e){this.auth=e,this.observer=null,this.addObserver=Fd(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function km(t,e,n){const r=Gn(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Oo(e),{host:a,port:o}=vm(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Im()}function Oo(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vm(t){const e=Oo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ls(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:ls(a)}}}function ls(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Im(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,n){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}}async function Sm(t,e){return fn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Em(t,e){return Vn(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function wm(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Hr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Em(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Tm(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Sm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return wm(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mt(t,e){return Vn(t,"POST","/v1/accounts:signInWithIdp",Hn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm="http://localhost";class kt extends Hr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=zr(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new kt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Mt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mt(e,n)}buildRequest(){const e={requestUri:Cm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ln(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Am(t){const e=Kt(Jt(t)).link,n=e?Kt(Jt(e)).deep_link_id:null,r=Kt(Jt(t)).deep_link_id;return(r?Kt(Jt(r)).link:null)||r||n||e||t}class Vr{constructor(e){var n,r,i,s,a,o;const l=Kt(Jt(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Rm((i=l.mode)!==null&&i!==void 0?i:null);K(c&&u&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=Am(e);try{return new Vr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(){this.providerId=jt.PROVIDER_ID}static credential(e,n){return nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Vr.parseLink(n);return K(r,"argument-error"),nn._fromEmailAndCode(e,r.code,r.tenantId)}}jt.PROVIDER_ID="password";jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn extends Po{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends dn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return et.credential(e.oauthAccessToken)}catch{return null}}}et.FACEBOOK_SIGN_IN_METHOD="facebook.com";et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return tt.credential(n,r)}catch{return null}}}tt.GOOGLE_SIGN_IN_METHOD="google.com";tt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends dn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nt.credential(e.oauthAccessToken)}catch{return null}}}nt.GITHUB_SIGN_IN_METHOD="github.com";nt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends dn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return rt.credential(n,r)}catch{return null}}}rt.TWITTER_SIGN_IN_METHOD="twitter.com";rt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),a=cs(r);return new Ut({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cs(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends xe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mn(e,n,r,i)}}function No(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mn._fromErrorAndOperation(t,s,e,r):s})}async function Om(t,e,n=!1){const r=await en(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ut._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await en(t,No(r,i,e,t),n);K(s.idToken,r,"internal-error");const a=jr(s.idToken);K(a,r,"internal-error");const{sub:o}=a;return K(t.uid===o,r,"user-mismatch"),Ut._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e,n=!1){const r="signIn",i=await No(t,r,e),s=await Ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Nm(t,e){return Do(Gn(t),e)}function Dm(t,e,n){return Nm(Ue(t),jt.credential(e,n))}function Lm(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function Mm(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const Bn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bn,"1"),this.storage.removeItem(Bn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){const t=Re();return Fr(t)||qn(t)}const zm=1e3,Um=10;class Mo extends Lo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bm()&&bm(),this.fallbackToPolling=Ro(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);pm()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Um):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mo.type="LOCAL";const Wm=Mo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Lo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bo.type="SESSION";const zo=Bo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await jm(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kn.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=qr("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function Hm(t){qe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Vm(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Gm(){return Uo()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo="firebaseLocalStorageDb",Km=1,zn="firebaseLocalStorage",jo="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jn(t,e){return t.transaction([zn],e?"readwrite":"readonly").objectStore(zn)}function Jm(){const t=indexedDB.deleteDatabase(Wo);return new hn(t).toPromise()}function Tr(){const t=indexedDB.open(Wo,Km);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zn,{keyPath:jo})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zn)?e(r):(r.close(),await Jm(),e(await Tr()))})})}async function us(t,e,n){const r=Jn(t,!0).put({[jo]:e,value:n});return new hn(r).toPromise()}async function Xm(t,e){const n=Jn(t,!1).get(e),r=await new hn(n).toPromise();return r===void 0?null:r.value}function fs(t,e){const n=Jn(t,!0).delete(e);return new hn(n).toPromise()}const Ym=800,Zm=3;class Fo{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Zm)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Uo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(Gm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Vm(),!this.activeServiceWorker)return;this.sender=new Fm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tr();return await us(e,Bn,"1"),await fs(e,Bn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>us(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Xm(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>fs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jn(i,!1).getAll();return new hn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ym)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fo.type="LOCAL";const xm=Fo;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $m(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ve("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qm().appendChild(r)})}function eg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new un(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t,e){return e?Xe(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Hr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ng(t){return Do(t.auth,new Gr(t),t.bypassAuthState)}function rg(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Pm(n,new Gr(t),t.bypassAuthState)}async function ig(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Om(n,new Gr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ng;case"linkViaPopup":case"linkViaRedirect":return ig;case"reauthViaPopup":case"reauthViaRedirect":return rg;default:Fe(this.auth,"internal-error")}}resolve(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=new un(2e3,1e4);class Ot extends Ho{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Ze(this.filter.length===1,"Popup operations only handle one event");const e=qr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sg.get())};e()}}Ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="pendingRedirect",wn=new Map;class ag extends Ho{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wn.get(this.auth._key());if(!e){try{const r=await lg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wn.set(this.auth._key(),e)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lg(t,e){const n=fg(e),r=ug(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function cg(t,e){wn.set(t._key(),e)}function ug(t){return Xe(t._redirectPersistence)}function fg(t){return Tn(og,t.config.apiKey,t.name)}async function dg(t,e,n=!1){const r=Gn(t),i=tg(r,e),a=await new ag(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg=10*60*1e3;class mg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Vo(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hg&&this.cachedEventUids.clear(),this.cachedEventUids.has(ds(e))}saveEventToCache(e){this.cachedEventUids.add(ds(e)),this.lastProcessedEventTime=Date.now()}}function ds(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Vo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vo(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pg(t,e={}){return fn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_g=/^https?/;async function yg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pg(t);for(const n of e)try{if(kg(n))return}catch{}Fe(t,"unauthorized-domain")}function kg(t){const e=Er(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!_g.test(n))return!1;if(bg.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new un(3e4,6e4);function hs(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ig(t){return new Promise((e,n)=>{var r,i,s;function a(){hs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hs(),n(Ve(t,"network-request-failed"))},timeout:vg.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)a();else{const o=eg("iframefcb");return qe()[o]=()=>{gapi.load?a():n(Ve(t,"network-request-failed"))},$m(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Cn=null,e})}let Cn=null;function Sg(t){return Cn=Cn||Ig(t),Cn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=new un(5e3,15e3),Tg="__/auth/iframe",wg="emulator/auth/iframe",Cg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ag(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wr(e,wg):`https://${t.config.authDomain}/${Tg}`,r={apiKey:e.apiKey,appName:t.name,v:cn},i=Rg.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ln(r).slice(1)}`}async function Og(t){const e=await Sg(t),n=qe().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Ag(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Cg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ve(t,"network-request-failed"),o=qe().setTimeout(()=>{s(a)},Eg.get());function l(){qe().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ng=500,Dg=600,Lg="_blank",Mg="http://localhost";class ms{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Bg(t,e,n,r=Ng,i=Dg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Pg),{width:r.toString(),height:i.toString(),top:s,left:a}),c=Re().toLowerCase();n&&(o=So(c)?Lg:n),Io(c)&&(e=e||Mg,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[h,p])=>`${d}${h}=${p},`,"");if(gm(c)&&o!=="_self")return zg(e||"",o),new ms(null);const f=window.open(e||"",o,u);K(f,t,"popup-blocked");try{f.focus()}catch{}return new ms(f)}function zg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="__/auth/handler",Wg="emulator/auth/handler";function gs(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cn,eventId:i};if(e instanceof Po){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",jd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))a[l]=c}if(e instanceof dn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];return`${jg(t)}?${ln(o).slice(1)}`}function jg({config:t}){return t.emulator?Wr(t,Wg):`https://${t.authDomain}/${Ug}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="webStorageSupport";class Fg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zo,this._completeRedirectFn=dg,this._overrideRedirectResult=cg}async _openPopup(e,n,r,i){var s;Ze((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=gs(e,n,r,Er(),i);return Bg(e,a,qr())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Hm(gs(e,n,r,Er(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ze(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Og(e),r=new mg(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dr,{type:dr},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dr];a!==void 0&&n(!!a),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ro()||Fr()||qn()}}const Hg=Fg;var ps="@firebase/auth",bs="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Gg(t){zt(new _t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=r.options;return((o,l)=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ao(t)},u=new ym(o,l,c);return Qh(u,n),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zt(new _t("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new Vg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(ps,bs,qg(t)),lt(ps,bs,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=5*60,Jg=oo("authIdTokenMaxAge")||Kg;let _s=null;const Xg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Jg)return;const i=n==null?void 0:n.token;_s!==i&&(_s=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yg(t=fo()){const e=Br(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xh(t,{popupRedirectResolver:Hg,persistence:[xm,Wm,zo]}),r=oo("authTokenSyncURL");if(r){const s=Xg(r);Mm(n,s,()=>s(n.currentUser)),Lm(n,a=>s(a))}const i=so("auth");return i&&km(n,`http://${i}`),n}Gg("Browser");var Zg="firebase",xg="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Zg,xg,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo="firebasestorage.googleapis.com",Go="storageBucket",Qg=2*60*1e3,$g=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends xe{constructor(e,n,r=0){super(hr(e),`Firebase Storage: ${n} (${hr(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hr(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function hr(t){return"storage/"+t}function Kr(){const t="An unknown error occurred, please check the error payload for server response.";return new be(pe.UNKNOWN,t)}function ep(t){return new be(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tp(t){return new be(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function np(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(pe.UNAUTHENTICATED,t)}function rp(){return new be(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function ip(t){return new be(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sp(){return new be(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function op(){return new be(pe.CANCELED,"User canceled the upload/download.")}function ap(t){return new be(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function lp(t){return new be(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cp(){return new be(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Go+"' property when initializing the app?")}function up(){return new be(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function fp(){return new be(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dp(t){return new be(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wr(t){return new be(pe.INVALID_ARGUMENT,t)}function Ko(){return new be(pe.APP_DELETED,"The Firebase app was deleted.")}function hp(t){return new be(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zt(t,e){return new be(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qt(t){throw new be(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ne.makeFromUrl(e,n)}catch{return new Ne(e,"")}if(r.path==="")return r;throw lp(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const u="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${f}/${u}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},g=n===qo?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",b=new RegExp(`^https?://${g}/${i}/${_}`,"i"),w=[{regex:o,indices:l,postModify:s},{regex:h,indices:p,postModify:c},{regex:b,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<w.length;I++){const T=w[I],O=T.regex.exec(e);if(O){const E=O[T.indices.bucket];let V=O[T.indices.path];V||(V=""),r=new Ne(E,V),T.postModify(r);break}}if(r==null)throw ap(e);return r}}class mp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t,e,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return o===2}let c=!1;function u(..._){c||(c=!0,e.apply(null,_))}function f(_){i=setTimeout(()=>{i=null,t(h,l())},_)}function d(){s&&clearTimeout(s)}function h(_,...b){if(c){d();return}if(_){d(),u.call(null,_,...b);return}if(l()||a){d(),u.call(null,_,...b);return}r<64&&(r*=2);let w;o===1?(o=2,w=0):w=(r+Math.random())*1e3,f(w)}let p=!1;function g(_){p||(p=!0,d(),!c&&(i!==null?(_||(o=2),clearTimeout(i),f(0)):_||(o=1)))}return f(0),s=setTimeout(()=>{a=!0,g(!0)},n),g}function pp(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t){return t!==void 0}function _p(t){return typeof t=="object"&&!Array.isArray(t)}function Jr(t){return typeof t=="string"||t instanceof String}function ys(t){return Xr()&&t instanceof Blob}function Xr(){return typeof Blob<"u"&&!Pd()}function Cr(t,e,n,r){if(r<e)throw wr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Jo(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(pt||(pt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n,r,i,s,a,o,l,c,u,f,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=f,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,p)=>{this.resolve_=h,this.reject_=p,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===pt.NO_ERROR,l=s.getStatus();if(!o||yp(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===pt.ABORT;r(!1,new yn(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yn(c,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());bp(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=Kr();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(i.canceled){const l=this.appDelete_?Ko():op();a(l)}else{const l=sp();a(l)}};this.canceled_?n(!1,new yn(!1,null,!0)):this.backoffId_=gp(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yn{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vp(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Ip(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Sp(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Ep(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Tp(t,e,n,r,i,s,a=!0){const o=Jo(t.urlParams),l=t.url+o,c=Object.assign({},t.headers);return Sp(c,e),vp(c,n),Ip(c,s),Ep(c,r),new kp(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Cp(...t){const e=wp();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xr())return new Blob(t);throw new be(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Rp(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){if(typeof atob>"u")throw dp("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mr{constructor(e,n){this.data=e,this.contentType=n||null}}function Xo(t,e){switch(t){case je.RAW:return new mr(Yo(e));case je.BASE64:case je.BASE64URL:return new mr(Zo(t,e));case je.DATA_URL:return new mr(Pp(e),Np(e))}throw Kr()}function Yo(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Op(t){let e;try{e=decodeURIComponent(t)}catch{throw Zt(je.DATA_URL,"Malformed data URL.")}return Yo(e)}function Zo(t,e){switch(t){case je.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Zt(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case je.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Zt(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Ap(e)}catch(i){throw i.message.includes("polyfill")?i:Zt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class xo{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zt(je.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Dp(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Pp(t){const e=new xo(t);return e.base64?Zo(je.BASE64,e.rest):Op(e.rest)}function Np(t){return new xo(t).contentType}function Dp(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n){let r=0,i="";ys(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ys(this.data_)){const r=this.data_,i=Rp(r,e,n);return i===null?null:new it(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new it(r,!0)}}static getBlob(...e){if(Xr()){const n=e.map(r=>r instanceof it?r.data_:r);return new it(Cp.apply(null,n))}else{const n=e.map(a=>Jr(a)?Xo(je.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let o=0;o<a.length;o++)i[s++]=a[o]}),new it(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(t){let e;try{e=JSON.parse(t)}catch{return null}return _p(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Mp(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Qo(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bp(t,e){return e}class Pe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Bp}}let kn=null;function zp(t){return!Jr(t)||t.length<2?t:Qo(t)}function $o(){if(kn)return kn;const t=[];t.push(new Pe("bucket")),t.push(new Pe("generation")),t.push(new Pe("metageneration")),t.push(new Pe("name","fullPath",!0));function e(s,a){return zp(a)}const n=new Pe("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new Pe("size");return i.xform=r,t.push(i),t.push(new Pe("timeCreated")),t.push(new Pe("updated")),t.push(new Pe("md5Hash",null,!0)),t.push(new Pe("cacheControl",null,!0)),t.push(new Pe("contentDisposition",null,!0)),t.push(new Pe("contentEncoding",null,!0)),t.push(new Pe("contentLanguage",null,!0)),t.push(new Pe("contentType",null,!0)),t.push(new Pe("metadata","customMetadata",!0)),kn=t,kn}function Up(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ne(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Wp(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return Up(r,t),r}function ea(t,e,n){const r=Yr(e);return r===null?null:Wp(t,r,n)}function jp(t,e,n,r){const i=Yr(e);if(i===null||!Jr(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,f=t.fullPath,d="/b/"+a(u)+"/o/"+a(f),h=Xn(d,n,r),p=Jo({alt:"media",token:c});return h+p})[0]}function Fp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="prefixes",vs="items";function Hp(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[ks])for(const i of n[ks]){const s=i.replace(/\/$/,""),a=t._makeStorageReference(new Ne(e,s));r.prefixes.push(a)}if(n[vs])for(const i of n[vs]){const s=t._makeStorageReference(new Ne(e,i.name));r.items.push(s)}return r}function Vp(t,e,n){const r=Yr(n);return r===null?null:Hp(t,e,r)}class Zr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t){if(!t)throw Kr()}function qp(t,e){function n(r,i){const s=ea(t,i,e);return xr(s!==null),s}return n}function Gp(t,e){function n(r,i){const s=Vp(t,e,i);return xr(s!==null),s}return n}function Kp(t,e){function n(r,i){const s=ea(t,i,e);return xr(s!==null),jp(s,i,t.host,t._protocol)}return n}function Qr(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=rp():i=np():n.getStatus()===402?i=tp(t.bucket):n.getStatus()===403?i=ip(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Jp(t){const e=Qr(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=ep(t.path)),s.serverResponse=i.serverResponse,s}return n}function Xp(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const a=e.bucketOnlyServerUrl(),o=Xn(a,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,u=new Zr(o,l,Gp(t,e.bucket),c);return u.urlParams=s,u.errorHandler=Qr(e),u}function Yp(t,e,n){const r=e.fullServerUrl(),i=Xn(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new Zr(i,s,Kp(t,n),a);return o.errorHandler=Jp(e),o}function Zp(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xp(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Zp(null,e)),r}function Qp(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let w="";for(let I=0;I<2;I++)w=w+Math.random().toString().slice(2);return w}const l=o();a["Content-Type"]="multipart/related; boundary="+l;const c=xp(e,r,i),u=Fp(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",h=it.getBlob(f,r,d);if(h===null)throw up();const p={name:c.fullPath},g=Xn(s,t.host,t._protocol),_="POST",b=t.maxUploadRetryTime,v=new Zr(g,_,qp(t,n),b);return v.urlParams=p,v.headers=a,v.body=h.uploadData(),v.errorHandler=Qr(e),v}class $p{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw qt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e0 extends $p{initXhr(){this.xhr_.responseType="text"}}function $r(){return new e0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this._service=e,n instanceof Ne?this._location=n:this._location=Ne.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vt(e,n)}get root(){const e=new Ne(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Qo(this._location.path)}get storage(){return this._service}get parent(){const e=Lp(this._location.path);if(e===null)return null;const n=new Ne(this._location.bucket,e);return new vt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hp(e)}}function t0(t,e,n){t._throwIfRoot("uploadBytes");const r=Qp(t.storage,t._location,$o(),new it(e,!0),n);return t.storage.makeRequestWithTokens(r,$r).then(i=>({metadata:i,ref:t}))}function n0(t,e,n=je.RAW,r){t._throwIfRoot("uploadString");const i=Xo(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),t0(t,i.data,s)}function r0(t,e){e!=null&&typeof e.maxResults=="number"&&Cr("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=Xp(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,$r)}function i0(t){t._throwIfRoot("getDownloadURL");const e=Yp(t.storage,t._location,$o());return t.storage.makeRequestWithTokens(e,$r).then(n=>{if(n===null)throw fp();return n})}function s0(t,e){const n=Mp(t._location.path,e),r=new Ne(t._location.bucket,n);return new vt(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){return/^[A-Za-z]+:\/\//.test(t)}function a0(t,e){return new vt(t,e)}function ta(t,e){if(t instanceof ei){const n=t;if(n._bucket==null)throw cp();const r=new vt(n,n._bucket);return e!=null?ta(r,e):r}else return e!==void 0?s0(t,e):t}function l0(t,e){if(e&&o0(e)){if(t instanceof ei)return a0(t,e);throw wr("To use ref(service, url), the first argument must be a Storage instance.")}else return ta(t,e)}function Is(t,e){const n=e==null?void 0:e[Go];return n==null?null:Ne.makeFromBucketSpec(n,t)}function c0(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Ad(i,t.app.options.projectId))}class ei{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=qo,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Qg,this._maxUploadRetryTime=$g,this._requests=new Set,i!=null?this._bucket=Ne.makeFromBucketSpec(i,this._host):this._bucket=Is(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,e):this._bucket=Is(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vt(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new mp(Ko());{const a=Tp(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ss="@firebase/storage",Es="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na="storage";function u0(t,e,n,r){return t=Ue(t),n0(t,e,n,r)}function f0(t,e){return t=Ue(t),r0(t,e)}function d0(t){return t=Ue(t),i0(t)}function ra(t,e){return t=Ue(t),l0(t,e)}function h0(t=fo(),e){t=Ue(t);const r=Br(t,na).getImmediate({identifier:e}),i=wd("storage");return i&&m0(r,...i),r}function m0(t,e,n,r={}){c0(t,e,n,r)}function g0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ei(n,r,i,e,cn)}function p0(){zt(new _t(na,g0,"PUBLIC").setMultipleInstances(!0)),lt(Ss,Es,""),lt(Ss,Es,"esm2017")}p0();const b0={apiKey:"AIzaSyDfn7JlTVzJ2-jxhhgwrdf6tbmYLinZRtI",authDomain:"peperepo-96e21.firebaseapp.com",projectId:"peperepo-96e21",storageBucket:"peperepo-96e21.appspot.com",messagingSenderId:"848166096970",appId:"1:848166096970:web:f2618030d2d45ebb1bd6b3"},ia=uo(b0),Yn=Yg(ia),sa=h0(ia),_0=ra(sa),ti=Nr(!1);function y0(t,e){Dm(Yn,t,e).then(n=>{ti.set(n.user!==void 0)}).catch(n=>{console.error(n)})}Yn.onAuthStateChanged(t=>{ti.set(t!==null)});function k0(t){let e;return{c(){e=we("Login")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function v0(t){let e,n,r,i,s,a,o,l;function c(h){t[3](h)}let u={size:"xs",type:"email",placeholder:"John@Doe.com"};t[0]!==void 0&&(u.value=t[0]),e=new Fi({props:u}),$.push(()=>_e(e,"value",c));function f(h){t[4](h)}let d={size:"xs",type:"password",placeholder:"password101"};return t[1]!==void 0&&(d.value=t[1]),i=new Fi({props:d}),$.push(()=>_e(i,"value",f)),o=new jn({props:{size:"xs",variant:"subtle",$$slots:{default:[k0]},$$scope:{ctx:t}}}),o.$on("click",t[2]),{c(){L(e.$$.fragment),r=he(),L(i.$$.fragment),a=he(),L(o.$$.fragment)},m(h,p){P(e,h,p),A(h,r,p),P(i,h,p),A(h,a,p),P(o,h,p),l=!0},p(h,p){const g={};!n&&p&1&&(n=!0,g.value=h[0],Te(()=>n=!1)),e.$set(g);const _={};!s&&p&2&&(s=!0,_.value=h[1],Te(()=>s=!1)),i.$set(_);const b={};p&32&&(b.$$scope={dirty:p,ctx:h}),o.$set(b)},i(h){l||(y(e.$$.fragment,h),y(i.$$.fragment,h),y(o.$$.fragment,h),l=!0)},o(h){k(e.$$.fragment,h),k(i.$$.fragment,h),k(o.$$.fragment,h),l=!1},d(h){N(e,h),h&&R(r),N(i,h),h&&R(a),N(o,h)}}}function I0(t){let e,n;return e=new on({props:{spacing:"xs",$$slots:{default:[v0]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&35&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function S0(t,e,n){let r,i;const s=()=>{y0(r,i)};function a(l){r=l,n(0,r)}function o(l){i=l,n(1,i)}return[r,i,s,a,o]}class E0 extends Q{constructor(e){super(),x(this,e,S0,I0,Z,{})}}function T0(t){let e;return{c(){e=we("Log out")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function w0(t){let e,n,r,i;return r=new jn({props:{variant:"subtle",size:"xs",$$slots:{default:[T0]},$$scope:{ctx:t}}}),r.$on("click",t[0]),{c(){e=te("span"),e.textContent=`${Yn.currentUser.email}`,n=he(),L(r.$$.fragment)},m(s,a){A(s,e,a),A(s,n,a),P(r,s,a),i=!0},p(s,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:s}),r.$set(o)},i(s){i||(y(r.$$.fragment,s),i=!0)},o(s){k(r.$$.fragment,s),i=!1},d(s){s&&R(e),s&&R(n),N(r,s)}}}function C0(t){let e,n;return e=new on({props:{spacing:"xs",$$slots:{default:[w0]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function R0(t){return[()=>{Yn.signOut()}]}class A0 extends Q{constructor(e){super(),x(this,e,R0,C0,Z,{})}}let vn;const O0=new Uint8Array(16);function P0(){if(!vn&&(vn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vn(O0)}const Ee=[];for(let t=0;t<256;++t)Ee.push((t+256).toString(16).slice(1));function N0(t,e=0){return(Ee[t[e+0]]+Ee[t[e+1]]+Ee[t[e+2]]+Ee[t[e+3]]+"-"+Ee[t[e+4]]+Ee[t[e+5]]+"-"+Ee[t[e+6]]+Ee[t[e+7]]+"-"+Ee[t[e+8]]+Ee[t[e+9]]+"-"+Ee[t[e+10]]+Ee[t[e+11]]+Ee[t[e+12]]+Ee[t[e+13]]+Ee[t[e+14]]+Ee[t[e+15]]).toLowerCase()}const D0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ts={randomUUID:D0};function L0(t,e,n){if(Ts.randomUUID&&!e&&!t)return Ts.randomUUID();t=t||{};const r=t.random||(t.rng||P0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return N0(r)}const Un=Nr([]),M0=t=>{const e=ra(sa,L0()+".jpg");u0(e,t,"data_url").then(n=>{B0()})},oa=()=>{f0(_0).then(t=>{t.items.forEach(e=>{d0(e).then(r=>{Un.set([...fa(Un),r])})})})},B0=()=>{Un.set([]),oa()};function z0(t){let e;return{c(){e=we("Upload new Pepe")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function U0(t){let e;return{c(){e=we("Upload")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function W0(t){let e,n,r,i,s,a,o,l;return e=new to({props:{src:t[1]}}),s=new jn({props:{$$slots:{default:[U0]},$$scope:{ctx:t}}}),s.$on("click",t[4]),{c(){L(e.$$.fragment),n=he(),r=te("input"),i=he(),L(s.$$.fragment),m(r,"type","file"),m(r,"accept",".jpg, .jpeg, png"),m(r,"alt","image input")},m(c,u){P(e,c,u),A(c,n,u),A(c,r,u),A(c,i,u),P(s,c,u),a=!0,o||(l=ct(r,"change",t[6]),o=!0)},p(c,u){const f={};u&2&&(f.src=c[1]),e.$set(f);const d={};u&128&&(d.$$scope={dirty:u,ctx:c}),s.$set(d)},i(c){a||(y(e.$$.fragment,c),y(s.$$.fragment,c),a=!0)},o(c){k(e.$$.fragment,c),k(s.$$.fragment,c),a=!1},d(c){N(e,c),c&&R(n),c&&R(r),c&&R(i),N(s,c),o=!1,l()}}}function j0(t){let e,n,r,i;return e=new jn({props:{size:"xs",variant:"outline",$$slots:{default:[z0]},$$scope:{ctx:t}}}),e.$on("click",t[5]),r=new dd({props:{opened:t[0],title:"Upload rare pepe",$$slots:{default:[W0]},$$scope:{ctx:t}}}),r.$on("close",t[3]),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},p(s,[a]){const o={};a&128&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const l={};a&1&&(l.opened=s[0]),a&130&&(l.$$scope={dirty:a,ctx:s}),r.$set(l)},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&R(n),N(r,s)}}}function F0(t,e,n){let r=!1,i;const s=u=>{let f=u.target.files[0],d=new FileReader;d.readAsDataURL(f),d.onload=h=>{n(1,i=h.target.result.toString())}};return[r,i,s,()=>{n(0,r=!1),n(1,i=void 0)},()=>{i!==void 0&&M0(i)},()=>n(0,r=!0),u=>s(u)]}class H0 extends Q{constructor(e){super(),x(this,e,F0,j0,Z,{})}}function V0(t){let e,n;return e=new E0({}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function q0(t){let e,n;return e=new on({props:{$$slots:{default:[G0]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function G0(t){let e,n,r,i;return e=new H0({}),r=new A0({}),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&R(n),N(r,s)}}}function K0(t){let e,n,r,i;const s=[q0,V0],a=[];function o(l,c){return l[0]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=Ie()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let u=e;e=o(l),e!==u&&(ue(),k(a[u],1,1,()=>{a[u]=null}),fe(),n=a[e],n||(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&R(r)}}}function J0(t,e,n){let r;return Wn(t,ti,i=>n(0,r=i)),[r]}class X0 extends Q{constructor(e){super(),x(this,e,J0,K0,Z,{})}}function Y0(t){let e;return{c(){e=we("pepe repo")},m(n,r){A(n,e,r)},d(n){n&&R(e)}}}function Z0(t){let e,n,r,i;return e=new _d({props:{$$slots:{default:[Y0]},$$scope:{ctx:t}}}),r=new X0({}),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},p(s,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&R(n),N(r,s)}}}function x0(t){let e,n;return e=new on({props:{position:"apart",my:"lg",$$slots:{default:[Z0]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Q0(t){let e,n;return e=new eo({props:{$$slots:{default:[x0]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class $0 extends Q{constructor(e){super(),x(this,e,null,Q0,Z,{})}}function ws(t,e,n){const r=t.slice();return r[2]=e[n],r}function Cs(t){let e,n;return e=new to({props:{radius:"md",width:Rs,height:Rs,src:t[2],alt:""}}),e.$on("click",t[1]),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&1&&(s.src=r[2]),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function e1(t){let e,n,r=t[0],i=[];for(let a=0;a<r.length;a+=1)i[a]=Cs(ws(t,r,a));const s=a=>k(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=Ie()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);A(a,e,o),n=!0},p(a,o){if(o&1){r=a[0];let l;for(l=0;l<r.length;l+=1){const c=ws(a,r,l);i[l]?(i[l].p(c,o),y(i[l],1)):(i[l]=Cs(c),i[l].c(),y(i[l],1),i[l].m(e.parentNode,e))}for(ue(),l=r.length;l<i.length;l+=1)s(l);fe()}},i(a){if(!n){for(let o=0;o<r.length;o+=1)y(i[o]);n=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)k(i[o]);n=!1},d(a){pa(i,a),a&&R(e)}}}function t1(t){let e,n;return e=new on({props:{$$slots:{default:[e1]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&33&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}const Rs=300;function n1(t,e,n){let r;return Wn(t,Un,s=>n(0,r=s)),oa(),[r,()=>{console.log("first")}]}class r1 extends Q{constructor(e){super(),x(this,e,n1,t1,Z,{})}}function i1(t){let e,n;return e=new r1({}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function s1(t){let e,n;return e=new eo({props:{$$slots:{default:[i1]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class o1 extends Q{constructor(e){super(),x(this,e,null,s1,Z,{})}}function a1(t){let e,n,r,i;return e=new $0({}),r=new o1({}),{c(){L(e.$$.fragment),n=he(),L(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&R(n),N(r,s)}}}function l1(t){let e,n;return e=new Xa({props:{withGlobalStyles:!0,themeObserver:"dark",$$slots:{default:[a1]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class c1 extends Q{constructor(e){super(),x(this,e,null,l1,Z,{})}}new c1({target:document.getElementById("app")});
