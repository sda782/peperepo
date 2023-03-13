(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ne(){}const Os=t=>t;function M(t,e){for(const n in e)t[n]=e[n];return t}function Ps(t){return t()}function ii(){return Object.create(null)}function Ae(t){t.forEach(Ps)}function Ie(t){return typeof t=="function"}function Z(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let mn;function ua(t,e){return mn||(mn=document.createElement("a")),mn.href=e,t===mn.href}function fa(t){return Object.keys(t).length===0}function Ns(t,...e){if(t==null)return ne;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function da(t){let e;return Ns(t,n=>e=n)(),e}function Wn(t,e,n){t.$$.on_destroy.push(Ns(e,n))}function re(t,e,n,r){if(t){const i=Ds(t,e,n,r);return t[0](i)}}function Ds(t,e,n,r){return t[1]&&r?M(n.ctx.slice(),t[1](r(e))):n.ctx}function ie(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],a=Math.max(e.dirty.length,i.length);for(let o=0;o<a;o+=1)s[o]=e.dirty[o]|i[o];return s}return e.dirty|i}return e.dirty}function se(t,e,n,r,i,s){if(i){const a=Ds(e,n,r,s);t.p(a,i)}}function oe(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ye(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function X(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function Ls(t){const e={};for(const n in t)e[n]=!0;return e}function ge(t){return t&&Ie(t.destroy)?t.destroy:ne}const Ms=typeof window<"u";let ha=Ms?()=>window.performance.now():()=>Date.now(),Cr=Ms?t=>requestAnimationFrame(t):ne;const Pt=new Set;function zs(t){Pt.forEach(e=>{e.c(t)||(Pt.delete(e),e.f())}),Pt.size!==0&&Cr(zs)}function ma(t){let e;return Pt.size===0&&Cr(zs),{promise:new Promise(n=>{Pt.add(e={c:t,f:n})}),abort(){Pt.delete(e)}}}function J(t,e){t.appendChild(e)}function Bs(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ga(t){const e=te("style");return pa(Bs(t),e),e.sheet}function pa(t,e){return J(t.head||t,e),e.sheet}function A(t,e,n){t.insertBefore(e,n||null)}function C(t){t.parentNode&&t.parentNode.removeChild(t)}function ba(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function te(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function we(t){return document.createTextNode(t)}function he(){return we(" ")}function ve(){return we("")}function ct(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _a(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ya(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function De(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:m(t,r,e[r])}function si(t,e){for(const n in e)m(t,n,e[n])}function ka(t,e){Object.keys(e).forEach(n=>{va(t,n,e[n])})}function va(t,e,n){e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:m(t,e,n)}function Cn(t){return/-/.test(t)?ka:De}function Ia(t){return Array.from(t.childNodes)}function Us(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ke(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function me(t,e,n){t.classList[n?"add":"remove"](e)}function Ws(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}class Sa{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,r=null){this.e||(this.is_svg?this.e=Y(n.nodeName):this.e=te(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(r)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)A(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(C)}}function ut(t,e){return new t(e)}const An=new Map;let On=0;function Ea(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ta(t,e){const n={stylesheet:ga(e),rules:{}};return An.set(t,n),n}function oi(t,e,n,r,i,s,a,o=0){const l=16.666/r;let c=`{
`;for(let b=0;b<=1;b+=l){const _=e+(n-e)*s(b);c+=b*100+`%{${a(_,1-_)}}
`}const f=c+`100% {${a(n,1-n)}}
}`,u=`__svelte_${Ea(f)}_${o}`,d=Bs(t),{stylesheet:h,rules:g}=An.get(d)||Ta(d,t);g[u]||(g[u]=!0,h.insertRule(`@keyframes ${u} ${f}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${r}ms linear ${i}ms 1 both`,On+=1,u}function wa(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),On-=i,On||Ra())}function Ra(){Cr(()=>{On||(An.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&C(e)}),An.clear())})}let Qt;function Xt(t){Qt=t}function Re(){if(!Qt)throw new Error("Function called outside component initialization");return Qt}function Ca(t){Re().$$.before_update.push(t)}function Ar(t){Re().$$.on_mount.push(t)}function Aa(t){Re().$$.on_destroy.push(t)}function Oa(){const t=Re();return(e,n,{cancelable:r=!1}={})=>{const i=t.$$.callbacks[e];if(i){const s=Ws(e,n,{cancelable:r});return i.slice().forEach(a=>{a.call(t,s)}),!s.defaultPrevented}return!0}}function Pa(t,e){return Re().$$.context.set(t,e),e}function Na(t){return Re().$$.context.get(t)}function Da(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const Rt=[],$=[];let Nt=[];const gr=[],js=Promise.resolve();let pr=!1;function Fs(){pr||(pr=!0,js.then(Vs))}function Hs(){return Fs(),js}function zt(t){Nt.push(t)}function Se(t){gr.push(t)}const tr=new Set;let Et=0;function Vs(){if(Et!==0)return;const t=Qt;do{try{for(;Et<Rt.length;){const e=Rt[Et];Et++,Xt(e),La(e.$$)}}catch(e){throw Rt.length=0,Et=0,e}for(Xt(null),Rt.length=0,Et=0;$.length;)$.pop()();for(let e=0;e<Nt.length;e+=1){const n=Nt[e];tr.has(n)||(tr.add(n),n())}Nt.length=0}while(Rt.length);for(;gr.length;)gr.pop()();pr=!1,tr.clear(),Xt(t)}function La(t){if(t.fragment!==null){t.update(),Ae(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(zt)}}function Ma(t){const e=[],n=[];Nt.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),Nt=e}let Ht;function za(){return Ht||(Ht=Promise.resolve(),Ht.then(()=>{Ht=null})),Ht}function nr(t,e,n){t.dispatchEvent(Ws(`${e?"intro":"outro"}${n}`))}const In=new Set;let Je;function ce(){Je={r:0,c:[],p:Je}}function ue(){Je.r||Ae(Je.c),Je=Je.p}function y(t,e){t&&t.i&&(In.delete(t),t.i(e))}function k(t,e,n,r){if(t&&t.o){if(In.has(t))return;In.add(t),Je.c.push(()=>{In.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const Ba={duration:0};function gn(t,e,n,r){const i={direction:"both"};let s=e(t,n,i),a=r?0:1,o=null,l=null,c=null;function f(){c&&wa(t,c)}function u(h,g){const p=h.b-a;return g*=Math.abs(p),{a,b:h.b,d:p,duration:g,start:h.start,end:h.start+g,group:h.group}}function d(h){const{delay:g=0,duration:p=300,easing:b=Os,tick:_=ne,css:v}=s||Ba,w={start:ha()+g,b:h};h||(w.group=Je,Je.r+=1),o||l?l=w:(v&&(f(),c=oi(t,a,h,p,g,b,v)),h&&_(0,1),o=u(w,p),zt(()=>nr(t,h,"start")),ma(I=>{if(l&&I>l.start&&(o=u(l,p),l=null,nr(t,o.b,"start"),v&&(f(),c=oi(t,a,o.b,o.duration,0,b,s.css))),o){if(I>=o.end)_(a=o.b,1-a),nr(t,o.b,"end"),l||(o.b?f():--o.group.r||Ae(o.group.c)),o=null;else if(I>=o.start){const T=I-o.start;a=o.a+o.d*b(T/o.duration),_(a,1-a)}}return!!(o||l)}))}return{run(h){Ie(s)?za().then(()=>{s=s(i),d(h)}):d(h)},end(){f(),o=l=null}}}function ae(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const a=t[s],o=e[s];if(o){for(const l in a)l in o||(r[l]=1);for(const l in o)i[l]||(n[l]=o[l],i[l]=1);t[s]=o}else for(const l in a)i[l]=1}for(const a in r)a in n||(n[a]=void 0);return n}function ke(t){return typeof t=="object"&&t!==null?t:{}}function _e(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function D(t){t&&t.c()}function P(t,e,n,r){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),r||zt(()=>{const a=t.$$.on_mount.map(Ps).filter(Ie);t.$$.on_destroy?t.$$.on_destroy.push(...a):Ae(a),t.$$.on_mount=[]}),s.forEach(zt)}function N(t,e){const n=t.$$;n.fragment!==null&&(Ma(n.after_update),Ae(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ua(t,e){t.$$.dirty[0]===-1&&(Rt.push(t),Fs(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Q(t,e,n,r,i,s,a,o=[-1]){const l=Qt;Xt(t);const c=t.$$={fragment:null,ctx:[],props:s,update:ne,not_equal:i,bound:ii(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:ii(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};a&&a(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(u,d,...h)=>{const g=h.length?h[0]:d;return c.ctx&&i(c.ctx[u],c.ctx[u]=g)&&(!c.skip_bound&&c.bound[u]&&c.bound[u](g),f&&Ua(t,u)),d}):[],c.update(),f=!0,Ae(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const u=Ia(e.target);c.fragment&&c.fragment.l(u),u.forEach(C)}else c.fragment&&c.fragment.c();e.intro&&y(t.$$.fragment),P(t,e.target,e.anchor,e.customElement),Vs()}Xt(l)}class x{$destroy(){N(this,1),this.$destroy=ne}$on(e,n){if(!Ie(n))return ne;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!fa(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ai(t){let e,n=ci(t[1],t[2])+"",r;return{c(){e=new Sa(!1),r=ve(),e.a=r},m(i,s){e.m(n,i,s),A(i,r,s)},p(i,s){s&6&&n!==(n=ci(i[1],i[2])+"")&&e.p(n)},d(i){i&&C(r),i&&e.d()}}}function Wa(t){let e,n=t[0]&&ai(t);return{c(){n&&n.c(),e=ve()},m(r,i){n&&n.m(r,i),A(r,e,i)},p(r,[i]){r[0]?n?n.p(r,i):(n=ai(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ne,o:ne,d(r){n&&n.d(r),r&&C(e)}}}function ja(t,e,n){let{observable:r=!1}=e,{component:i}=e,{code:s}=e;return t.$$set=a=>{"observable"in a&&n(0,r=a.observable),"component"in a&&n(1,i=a.component),"code"in a&&n(2,s=a.code)},[r,i,s]}let Fa=class extends x{constructor(e){super(),Q(this,e,ja,Wa,Z,{observable:0,component:1,code:2})}};const Or=Fa,Ha=()=>typeof window<"u",Pr=Ha(),Va=".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}",qs=Pr?document.createElement("style"):void 0;if(Pr){const t=qs;t.textContent=Va,t.id="svelteui-inject"}function li(t,e,n){return Pr&&document.head.appendChild(qs),`
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
    `}function ci(t,e){const{message:n,solution:r}=e;return r?li(t,n,r):li(t,n)}function fe(t,e){const n=[];if(e)for(let r=0;r<e.length;r++){const i=e[r],s=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?n.push(s(t,i[1])):n.push(s(t))}return{update(r){if((r&&r.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(r)for(let i=0;i<r.length;i++){const s=n[i];if(s&&s.update){const a=r[i];Array.isArray(a)&&a.length>1?s.update(a[1]):s.update()}}},destroy(){for(let r=0;r<n.length;r++){const i=n[r];i&&i.destroy&&i.destroy()}}}}const br="!",qa=new RegExp(`^[^${br}]+(?:${br}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function He(t,e=[]){let n;const r=[];t.$on=(s,a)=>{const o=s;let l=()=>{};for(const c of e){if(typeof c=="string"&&c===o){const f=t.$$.callbacks[o]||(t.$$.callbacks[o]=[]);return f.push(a),()=>{const u=f.indexOf(a);u!==-1&&f.splice(u,1)}}if(typeof c=="object"&&c.name===o){const f=a;a=(...u)=>{typeof c=="object"&&c.shouldExclude()||f(...u)}}}return n?l=n(o,a):r.push([o,a]),()=>{l()}};function i(s){Da(t,s)}return s=>{const a=[],o={};n=(l,c)=>{let f=l,u=c,d=!1;if(f.match(qa)){const b=f.split(br);f=b[0];const _=Object.fromEntries(b.slice(1).map(v=>[v,!0]));_.passive&&(d=d||{},d.passive=!0),_.nonpassive&&(d=d||{},d.passive=!1),_.capture&&(d=d||{},d.capture=!0),_.once&&(d=d||{},d.once=!0),_.preventDefault&&(u=_a(u)),_.stopPropagation&&(u=ya(u))}const g=ct(s,f,u,d),p=()=>{g();const b=a.indexOf(p);b>-1&&a.splice(b,1)};return a.push(p),f in o||(o[f]=ct(s,f,i)),p};for(let l=0;l<r.length;l++)n(r[l][0],r[l][1]);return{destroy:()=>{for(let l=0;l<a.length;l++)a[l]();for(const l of Object.entries(o))l[1]()}}}}function Ga(t){const e=t-1;return e*e*e+1}function pn(t){return-.5*(Math.cos(Math.PI*t)-1)}function ui(t,{delay:e=0,duration:n=400,easing:r=Os}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:s=>`opacity: ${s*i}`}}function fi(t,{delay:e=0,duration:n=400,easing:r=Ga,start:i=0,opacity:s=0}={}){const a=getComputedStyle(t),o=+a.opacity,l=a.transform==="none"?"":a.transform,c=1-i,f=o*(1-s);return{delay:e,duration:n,easing:r,css:(u,d)=>`
			transform: ${l} scale(${1-c*d});
			opacity: ${o-f*d}
		`}}const Gs={};function Wt(){return Na(Gs)}const Tt=[];function Nr(t,e=ne){let n;const r=new Set;function i(o){if(Z(t,o)&&(t=o,n)){const l=!Tt.length;for(const c of r)c[1](),Tt.push(c,t);if(l){for(let c=0;c<Tt.length;c+=2)Tt[c][0](Tt[c+1]);Tt.length=0}}}function s(o){i(o(t))}function a(o,l=ne){const c=[o,l];return r.add(c),r.size===1&&(n=e(i)||ne),o(t),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:s,subscribe:a}}const Dt=Nr("light");function bt(){let t;return Dt==null||Dt.subscribe(n=>{t=n}),{...Qs,colorNames:ol,colorScheme:t,dark:Be==null?void 0:Be.selector,fn:{themeColor:Ct.themeColor,size:Ct.size,radius:Ct.radius,rgba:Ct.rgba,variant:Ct.variant}}}function Ka(t){let e,n,r,i,s,a;const o=t[18].default,l=re(o,t,t[17],null);let c=[{id:"SVELTEUI_PROVIDER"},{class:n=t[4](t[2],t[3].root,t[6]())},t[7]],f={};for(let u=0;u<c.length;u+=1)f=M(f,c[u]);return{c(){e=te("div"),l&&l.c(),De(e,f)},m(u,d){A(u,e,d),l&&l.m(e,null),t[19](e),i=!0,s||(a=[ge(r=fe.call(null,e,t[1])),ge(t[5].call(null,e))],s=!0)},p(u,[d]){l&&l.p&&(!i||d&131072)&&se(l,o,u,u[17],i?ie(o,u[17],d,null):oe(u[17]),null),De(e,f=ae(c,[{id:"SVELTEUI_PROVIDER"},(!i||d&28&&n!==(n=u[4](u[2],u[3].root,u[6]())))&&{class:n},d&128&&u[7]])),r&&Ie(r.update)&&d&2&&r.update.call(null,u[1])},i(u){i||(y(l,u),i=!0)},o(u){k(l,u),i=!1},d(u){u&&C(e),l&&l.d(u),t[19](null),s=!1,Ae(a)}}}function Ja(t,e,n){let r,i,s,a;const o=["use","class","element","theme","styles","defaultProps","themeObserver","withNormalizeCSS","withGlobalStyles","override","inherit"];let l=X(e,o),c;Wn(t,Dt,z=>n(21,c=z));let{$$slots:f={},$$scope:u}=e,{use:d=[],class:h="",element:g=void 0,theme:p=bt(),styles:b={},defaultProps:_={},themeObserver:v="light",withNormalizeCSS:w=!1,withGlobalStyles:I=!1,override:T={},inherit:O=!1}=e;Ca(()=>{const z=document.documentElement.classList;c==="dark"&&z.add(Be.className),c==="light"&&z.remove(Be.className)});const E=Wt(),V=Le(()=>({root:{}})),q=He(Re()),R=bt(),S=()=>v===null?null:v==="light"?i:Be;function G(z){$[z?"unshift":"push"](()=>{g=z,n(0,g)})}return t.$$set=z=>{e=M(M({},e),ye(z)),n(7,l=X(e,o)),"use"in z&&n(1,d=z.use),"class"in z&&n(2,h=z.class),"element"in z&&n(0,g=z.element),"theme"in z&&n(8,p=z.theme),"styles"in z&&n(9,b=z.styles),"defaultProps"in z&&n(10,_=z.defaultProps),"themeObserver"in z&&n(11,v=z.themeObserver),"withNormalizeCSS"in z&&n(12,w=z.withNormalizeCSS),"withGlobalStyles"in z&&n(13,I=z.withGlobalStyles),"override"in z&&n(14,T=z.override),"inherit"in z&&n(15,O=z.inherit),"$$scope"in z&&n(17,u=z.$$scope)},t.$$.update=()=>{t.$$.dirty&8192&&I&&Hl(),t.$$.dirty&4096&&w&&Vl(),t.$$.dirty&34560&&n(16,r={themeOverride:O?{...E.theme,...p}:p,styles:O?{...E.styles,...b}:b,defaultProps:O?{...E.styles,..._}:_}),t.$$.dirty&65536&&Pa(Gs,{theme:r.themeOverride,styles:{},defaultProps:{}}),t.$$.dirty&2048&&Dt.set(v),t.$$.dirty&65536&&(i=il(R,r.themeOverride)),t.$$.dirty&16384&&n(4,{cx:s,classes:a}=V(null,{override:T}),s,(n(3,a),n(23,V),n(14,T)))},[g,d,h,a,s,q,S,l,p,b,_,v,w,I,T,O,r,u,f,G]}class Xa extends x{constructor(e){super(),Q(this,e,Ja,Ka,Z,{use:1,class:2,element:0,theme:8,styles:9,defaultProps:10,themeObserver:11,withNormalizeCSS:12,withGlobalStyles:13,override:14,inherit:15})}}const Ya=Xa;function ee(t,e=0){var i,s;const n=((i=Wt())==null?void 0:i.theme)||bt();let r="50";return Za(t)?(e!==Number(0)&&(r=`${e.toString()}00`),(s=n.colors[`${t}${r}`])==null?void 0:s.value):t}function Za(t){let e=!1;switch(t){case"dark":e=!0;break;case"gray":e=!0;break;case"red":e=!0;break;case"pink":e=!0;break;case"grape":e=!0;break;case"violet":e=!0;break;case"indigo":e=!0;break;case"blue":e=!0;break;case"cyan":e=!0;break;case"teal":e=!0;break;case"green":e=!0;break;case"lime":e=!0;break;case"yellow":e=!0;break;case"orange":e=!0;break;default:e=!1;break}return e}function Qa(t){var e,n;return typeof t.size=="number"?t.size:typeof t.sizes[t.size]=="number"?t.sizes[t.size]:+((e=t.sizes[t.size])==null?void 0:e.value)||+((n=t.sizes.md)==null?void 0:n.value)}function xa(t){var n;const e=((n=Wt())==null?void 0:n.theme)||bt();return typeof t=="number"?t:e.radii[t].value}function $a(t){const e=t.replace("#","");return typeof e=="string"&&e.length===6&&!Number.isNaN(Number(`0x${e}`))}function el(t){const e=t.replace("#",""),n=parseInt(e,16),r=n>>16&255,i=n>>8&255,s=n&255;return{r,g:i,b:s,a:1}}function tl(t){const[e,n,r,i]=t.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:e,g:n,b:r,a:i||1}}function nl(t){return $a(t)?el(t):t.startsWith("rgb")?tl(t):{r:0,g:0,b:0,a:1}}const Ks=(t,e)=>{const{themeColor:n,rgba:r}=Ct,i={"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"}},s={filled:{[`${Be.selector} &`]:{backgroundColor:n(t,8)},border:"transparent",backgroundColor:n(t,6),color:"White","&:hover":{backgroundColor:n(t,7)},...i},light:{[`${Be.selector} &`]:{backgroundColor:r(n(t,8),.35),color:t==="dark"?n("dark",0):n(t,2),"&:hover":{backgroundColor:r(n(t,7),.45)}},border:"transparent",backgroundColor:n(t,0),color:t==="dark"?n("dark",9):n(t,6),"&:hover":{backgroundColor:n(t,1)},...i},outline:{[`${Be.selector} &`]:{border:`1px solid ${n(t,4)}`,color:`${n(t,4)}`,"&:hover":{backgroundColor:r(n(t,4),.05)}},border:`1px solid ${n(t,7)}`,backgroundColor:"transparent",color:n(t,7),"&:hover":{backgroundColor:r(n(t,0),.35)},...i},subtle:{[`${Be.selector} &`]:{color:t==="dark"?n("dark",0):n(t,2),"&:hover":{backgroundColor:r(n(t,8),.35)}},border:"transparent",backgroundColor:"transparent",color:t==="dark"?n("dark",9):n(t,6),"&:hover":{backgroundColor:n(t,0)},...i},default:{[`${Be.selector} &`]:{border:`1px solid ${n("dark",5)}`,backgroundColor:n("dark",5),color:"White","&:hover":{backgroundColor:n("dark",4)}},border:`1px solid ${n("gray",4)}`,backgroundColor:"White",color:"Black","&:hover":{backgroundColor:n("gray",0)},...i},white:{border:"transparent",backgroundColor:"White",color:n(t,7),"&:hover":{backgroundColor:"White"},...i},gradient:{}};return e&&(s.gradient={border:"transparent",background:`linear-gradient(${e.deg}deg, $${e.from}600 0%, $${e.to}600 100%)`,color:"White"}),s};function rl(t="svelteui"){return`${t}-${Math.random().toString(36).substring(2,10)}`}function il(t,e){return e?Object.keys(t).reduce((n,r)=>(n[r]=typeof e[r]=="object"?{...t[r],...e[r]}:typeof e[r]=="number"?e[r]:e[r]||t[r],n),{}):t}function Ge(t,e=1){if(typeof t!="string"||e>1||e<0)return"rgba(0, 0, 0, 1)";const{r:n,g:r,b:i}=nl(t);return`rgba(${n}, ${r}, ${i}, ${e})`}const rr={from:"indigo",to:"cyan",deg:45};function sl({variant:t,color:e,gradient:n}){var s;const r=((s=Wt())==null?void 0:s.theme)||bt(),i=6;if(t==="light")return{border:"transparent",background:[Ge(ee(e,8),.35),Ge(ee(e,0),1)],color:[e==="dark"?ee("dark",0):ee(e,2),e==="dark"?ee("dark",9):ee(e,i)],hover:[Ge(ee(e,7),.45),Ge(ee(e,1),.65)]};if(t==="default")return{border:[ee("dark",5),ee("gray",4)],background:[ee("dark",5),r.colors.white.value],color:[r.colors.white.value,r.colors.black.value],hover:[ee("dark",4),ee("gray",0)]};if(t==="white")return{border:"transparent",background:r.colors.white.value,color:ee(e,i),hover:null};if(t==="outline")return{border:[ee(e,4),ee(e,i)],background:"transparent",color:[ee(e,4),ee(e,i)],hover:[Ge(ee(e,4),.05),Ge(ee(e,0),.35)]};if(t==="gradient"){const a={from:(n==null?void 0:n.from)||rr.from,to:(n==null?void 0:n.to)||rr.to,deg:(n==null?void 0:n.deg)||rr.deg};return{background:`linear-gradient(${a.deg}deg, ${ee(a.from,i)} 0%, ${ee(a.to,i)} 100%)`,color:r.colors.white.value,border:"transparent",hover:null}}return t==="subtle"?{border:"transparent",background:"transparent",color:[e==="dark"?ee("dark",0):ee(e,2),e==="dark"?ee("dark",9):ee(e,i)],hover:[Ge(ee(e,8),.35),Ge(ee(e,0),1)]}:{border:"transparent",background:[ee(e,8),ee(e,i)],color:r.colors.white.value,hover:ee(e,7)}}const Ct={size:Qa,radius:xa,themeColor:ee,variant:sl,rgba:Ge},Js={primary:"#228be6",white:"#ffffff",black:"#000000",dark50:"#C1C2C5",dark100:"#A6A7AB",dark200:"#909296",dark300:"#5c5f66",dark400:"#373A40",dark500:"#2C2E33",dark600:"#25262b",dark700:"#1A1B1E",dark800:"#141517",dark900:"#101113",gray50:"#f8f9fa",gray100:"#f1f3f5",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#868e96",gray700:"#495057",gray800:"#343a40",gray900:"#212529",red50:"#fff5f5",red100:"#ffe3e3",red200:"#ffc9c9",red300:"#ffa8a8",red400:"#ff8787",red500:"#ff6b6b",red600:"#fa5252",red700:"#f03e3e",red800:"#e03131",red900:"#c92a2a",pink50:"#fff0f6",pink100:"#ffdeeb",pink200:"#fcc2d7",pink300:"#faa2c1",pink400:"#f783ac",pink500:"#f06595",pink600:"#e64980",pink700:"#d6336c",pink800:"#c2255c",pink900:"#a61e4d",grape50:"#f8f0fc",grape100:"#f3d9fa",grape200:"#eebefa",grape300:"#e599f7",grape400:"#da77f2",grape500:"#cc5de8",grape600:"#be4bdb",grape700:"#ae3ec9",grape800:"#9c36b5",grape900:"#862e9c",violet50:"#f3f0ff",violet100:"#e5dbff",violet200:"#d0bfff",violet300:"#b197fc",violet400:"#9775fa",violet500:"#845ef7",violet600:"#7950f2",violet700:"#7048e8",violet800:"#6741d9",violet900:"#5f3dc4",indigo50:"#edf2ff",indigo100:"#dbe4ff",indigo200:"#bac8ff",indigo300:"#91a7ff",indigo400:"#748ffc",indigo500:"#5c7cfa",indigo600:"#4c6ef5",indigo700:"#4263eb",indigo800:"#3b5bdb",indigo900:"#364fc7",blue50:"#e7f5ff",blue100:"#d0ebff",blue200:"#a5d8ff",blue300:"#74c0fc",blue400:"#4dabf7",blue500:"#339af0",blue600:"#228be6",blue700:"#1c7ed6",blue800:"#1971c2",blue900:"#1864ab",cyan50:"#e3fafc",cyan100:"#c5f6fa",cyan200:"#99e9f2",cyan300:"#66d9e8",cyan400:"#3bc9db",cyan500:"#22b8cf",cyan600:"#15aabf",cyan700:"#1098ad",cyan800:"#0c8599",cyan900:"#0b7285",teal50:"#e6fcf5",teal100:"#c3fae8",teal200:"#96f2d7",teal300:"#63e6be",teal400:"#38d9a9",teal500:"#20c997",teal600:"#12b886",teal700:"#0ca678",teal800:"#099268",teal900:"#087f5b",green50:"#ebfbee",green100:"#d3f9d8",green200:"#b2f2bb",green300:"#8ce99a",green400:"#69db7c",green500:"#51cf66",green600:"#40c057",green700:"#37b24d",green800:"#2f9e44",green900:"#2b8a3e",lime50:"#f4fce3",lime100:"#e9fac8",lime200:"#d8f5a2",lime300:"#c0eb75",lime400:"#a9e34b",lime500:"#94d82d",lime600:"#82c91e",lime700:"#74b816",lime800:"#66a80f",lime900:"#5c940d",yellow50:"#fff9db",yellow100:"#fff3bf",yellow200:"#ffec99",yellow300:"#ffe066",yellow400:"#ffd43b",yellow500:"#fcc419",yellow600:"#fab005",yellow700:"#f59f00",yellow800:"#f08c00",yellow900:"#e67700",orange50:"#fff4e6",orange100:"#ffe8cc",orange200:"#ffd8a8",orange300:"#ffc078",orange400:"#ffa94d",orange500:"#ff922b",orange600:"#fd7e14",orange700:"#f76707",orange800:"#e8590c",orange900:"#d9480f"},ol={blue:"blue",cyan:"cyan",dark:"dark",grape:"grape",gray:"gray",green:"green",indigo:"indigo",lime:"lime",orange:"orange",pink:"pink",red:"red",teal:"teal",violet:"violet",yellow:"yellow"},al={}.hasOwnProperty;function ll(...t){const e=[];for(let n=0;n<t.length;n++){const r=t[n];if(!r)continue;const i=typeof r;if(i==="string"||i==="number")e.push(r);else if(Array.isArray(r)){if(r.length){const s={...r};s&&e.push(s)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(const s in r)al.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}return e.join(" ")}function cl(){return{cx:ll}}function ul(t){const e={};return Object.keys(t).forEach(n=>{const[r,i]=t[n];e[r]=i}),e}const di="svelteui";function fl(t){return`__svelteui-ref-${t||""}`}function dl(t,e){const n=[],r={},i=s=>{Object.keys(s).map(a=>{if(a!=="variants"&&(a==="ref"&&n.push(s.ref),a==="darkMode"&&(s[`${e.dark} &`]=s.darkMode),!(s[a]===null||typeof s[a]!="object"))){if(i(s[a]),a==="darkMode")delete s[a];else if(!a.startsWith("@media")){if(!a.startsWith("&")&&!a.startsWith(e.dark)){const o=xt(s[a]);r[a]=o().toString(),s[`& .${o().toString()}`]=s[a],delete s[a]}}}})};return i(t),delete t["& .root"],{classMap:r,refs:Array.from(new Set(n))}}function Le(t){const e=typeof t=="function"?t:()=>t;function n(r={},i){var _;const s=((_=Wt())==null?void 0:_.theme)||bt(),{cx:a}=cl(),{override:o,name:l}=i||{},c=e(s,r,fl),f=Object.assign({},c),{classMap:u,refs:d}=dl(f,s),h=c.root??void 0,g=h!==void 0?{...h,...f}:c,p=xt(g),b=ul(Object.keys(c).map(v=>{const w=d.find(q=>q.includes(v))??"",I=(w==null?void 0:w.split("-"))??[],T=(w==null?void 0:w.split("-")[(I==null?void 0:I.length)-1])===v,O=v.toString();let E=u[O]??O;w&&T&&(E=`${E} ${w}`),v==="root"&&(E=p({css:o}).toString());let V=`${di}-${v.toString()}`;return l&&(V=`${di}-${l}-${v.toString()}`,E=`${E} ${V}`),[v,E]}));return{cx:a,theme:s,classes:b,getStyles:xt(g)}}return n}var le="colors",Oe="sizes",B="space",Xs={gap:B,gridGap:B,columnGap:B,gridColumnGap:B,rowGap:B,gridRowGap:B,inset:B,insetBlock:B,insetBlockEnd:B,insetBlockStart:B,insetInline:B,insetInlineEnd:B,insetInlineStart:B,margin:B,marginTop:B,marginRight:B,marginBottom:B,marginLeft:B,marginBlock:B,marginBlockEnd:B,marginBlockStart:B,marginInline:B,marginInlineEnd:B,marginInlineStart:B,padding:B,paddingTop:B,paddingRight:B,paddingBottom:B,paddingLeft:B,paddingBlock:B,paddingBlockEnd:B,paddingBlockStart:B,paddingInline:B,paddingInlineEnd:B,paddingInlineStart:B,top:B,right:B,bottom:B,left:B,scrollMargin:B,scrollMarginTop:B,scrollMarginRight:B,scrollMarginBottom:B,scrollMarginLeft:B,scrollMarginX:B,scrollMarginY:B,scrollMarginBlock:B,scrollMarginBlockEnd:B,scrollMarginBlockStart:B,scrollMarginInline:B,scrollMarginInlineEnd:B,scrollMarginInlineStart:B,scrollPadding:B,scrollPaddingTop:B,scrollPaddingRight:B,scrollPaddingBottom:B,scrollPaddingLeft:B,scrollPaddingX:B,scrollPaddingY:B,scrollPaddingBlock:B,scrollPaddingBlockEnd:B,scrollPaddingBlockStart:B,scrollPaddingInline:B,scrollPaddingInlineEnd:B,scrollPaddingInlineStart:B,fontSize:"fontSizes",background:le,backgroundColor:le,backgroundImage:le,borderImage:le,border:le,borderBlock:le,borderBlockEnd:le,borderBlockStart:le,borderBottom:le,borderBottomColor:le,borderColor:le,borderInline:le,borderInlineEnd:le,borderInlineStart:le,borderLeft:le,borderLeftColor:le,borderRight:le,borderRightColor:le,borderTop:le,borderTopColor:le,caretColor:le,color:le,columnRuleColor:le,fill:le,outline:le,outlineColor:le,stroke:le,textDecorationColor:le,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:Oe,minBlockSize:Oe,maxBlockSize:Oe,inlineSize:Oe,minInlineSize:Oe,maxInlineSize:Oe,width:Oe,minWidth:Oe,maxWidth:Oe,height:Oe,minHeight:Oe,maxHeight:Oe,flexBasis:Oe,gridTemplateColumns:Oe,gridTemplateRows:Oe,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},hl=(t,e)=>typeof e=="function"?{"()":Function.prototype.toString.call(e)}:e,rn=()=>{const t=Object.create(null);return(e,n,...r)=>{const i=(s=>JSON.stringify(s,hl))(e);return i in t?t[i]:t[i]=n(e,...r)}},Sn=Symbol.for("sxs.internal"),Dr=(t,e)=>Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)),hi=t=>{for(const e in t)return!0;return!1},{hasOwnProperty:ml}=Object.prototype,_r=t=>t.includes("-")?t:t.replace(/[A-Z]/g,e=>"-"+e.toLowerCase()),gl=/\s+(?![^()]*\))/,wt=t=>e=>t(...typeof e=="string"?String(e).split(gl):[e]),mi={appearance:t=>({WebkitAppearance:t,appearance:t}),backfaceVisibility:t=>({WebkitBackfaceVisibility:t,backfaceVisibility:t}),backdropFilter:t=>({WebkitBackdropFilter:t,backdropFilter:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),boxDecorationBreak:t=>({WebkitBoxDecorationBreak:t,boxDecorationBreak:t}),clipPath:t=>({WebkitClipPath:t,clipPath:t}),content:t=>({content:t.includes('"')||t.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(t)?t:`"${t}"`}),hyphens:t=>({WebkitHyphens:t,hyphens:t}),maskImage:t=>({WebkitMaskImage:t,maskImage:t}),maskSize:t=>({WebkitMaskSize:t,maskSize:t}),tabSize:t=>({MozTabSize:t,tabSize:t}),textSizeAdjust:t=>({WebkitTextSizeAdjust:t,textSizeAdjust:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),marginBlock:wt((t,e)=>({marginBlockStart:t,marginBlockEnd:e||t})),marginInline:wt((t,e)=>({marginInlineStart:t,marginInlineEnd:e||t})),maxSize:wt((t,e)=>({maxBlockSize:t,maxInlineSize:e||t})),minSize:wt((t,e)=>({minBlockSize:t,minInlineSize:e||t})),paddingBlock:wt((t,e)=>({paddingBlockStart:t,paddingBlockEnd:e||t})),paddingInline:wt((t,e)=>({paddingInlineStart:t,paddingInlineEnd:e||t}))},ir=/([\d.]+)([^]*)/,pl=(t,e)=>t.length?t.reduce((n,r)=>(n.push(...e.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):e,bl=(t,e)=>t in _l&&typeof e=="string"?e.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,s)=>r+(i==="stretch"?`-moz-available${s};${_r(t)}:${r}-webkit-fill-available`:`-moz-fit-content${s};${_r(t)}:${r}fit-content`)+s):String(e),_l={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},Ze=t=>t?t+"-":"",Ys=(t,e,n)=>t.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,s,a,o)=>a=="$"==!!s?r:(i||a=="--"?"calc(":"")+"var(--"+(a==="$"?Ze(e)+(o.includes("$")?"":Ze(n))+o.replace(/\$/g,"-"):o)+")"+(i||a=="--"?"*"+(i||"")+(s||"1")+")":"")),yl=/\s*,\s*(?![^()]*\))/,kl=Object.prototype.toString,At=(t,e,n,r,i)=>{let s,a,o;const l=(c,f,u)=>{let d,h;const g=p=>{for(d in p){const v=d.charCodeAt(0)===64,w=v&&Array.isArray(p[d])?p[d]:[p[d]];for(h of w){const I=/[A-Z]/.test(_=d)?_:_.replace(/-[^]/g,O=>O[1].toUpperCase()),T=typeof h=="object"&&h&&h.toString===kl&&(!r.utils[I]||!f.length);if(I in r.utils&&!T){const O=r.utils[I];if(O!==a){a=O,g(O(h)),a=null;continue}}else if(I in mi){const O=mi[I];if(O!==o){o=O,g(O(h)),o=null;continue}}if(v&&(b=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=b.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(O,E,V,q,R,S)=>{const G=ir.test(E),z=.0625*(G?-1:1),[j,F]=G?[q,E]:[E,q];return"("+(V[0]==="="?"":V[0]===">"===G?"max-":"min-")+j+":"+(V[0]!=="="&&V.length===1?F.replace(ir,(Me,Ee,U)=>Number(Ee)+z*(V===">"?1:-1)+U):F)+(R?") and ("+(R[0]===">"?"min-":"max-")+j+":"+(R.length===1?S.replace(ir,(Me,Ee,U)=>Number(Ee)+z*(R===">"?-1:1)+U):S):"")+")"})),T){const O=v?u.concat(d):[...u],E=v?[...f]:pl(f,d.split(yl));s!==void 0&&i(gi(...s)),s=void 0,l(h,E,O)}else s===void 0&&(s=[[],f,u]),d=v||d.charCodeAt(0)!==36?d:`--${Ze(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=T?h:typeof h=="number"?h&&I in vl?String(h)+"px":String(h):Ys(bl(I,h??""),r.prefix,r.themeMap[I]),s[0].push(`${v?`${d} `:`${_r(d)}:`}${h}`)}}var b,_};g(c),s!==void 0&&i(gi(...s)),s=void 0};l(t,e,n)},gi=(t,e,n)=>`${n.map(r=>`${r}{`).join("")}${e.length?`${e.join(",")}{`:""}${t.join(";")}${e.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,vl={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},pi=t=>String.fromCharCode(t+(t>25?39:97)),mt=t=>(e=>{let n,r="";for(n=Math.abs(e);n>52;n=n/52|0)r=pi(n%52)+r;return pi(n%52)+r})(((e,n)=>{let r=n.length;for(;r;)e=33*e^n.charCodeAt(--r);return e})(5381,JSON.stringify(t))>>>0),Gt=["themed","global","styled","onevar","resonevar","allvar","inline"],Il=t=>{if(t.href&&!t.href.startsWith(location.origin))return!1;try{return!!t.cssRules}catch{return!1}},Sl=t=>{let e;const n=()=>{const{cssRules:i}=e.sheet;return[].map.call(i,(s,a)=>{const{cssText:o}=s;let l="";if(o.startsWith("--sxs"))return"";if(i[a-1]&&(l=i[a-1].cssText).startsWith("--sxs")){if(!s.cssRules.length)return"";for(const c in e.rules)if(e.rules[c].group===s)return`--sxs{--sxs:${[...e.rules[c].cache].join(" ")}}${o}`;return s.cssRules.length?`${l}${o}`:""}return o}).join("")},r=()=>{if(e){const{rules:o,sheet:l}=e;if(!l.deleteRule){for(;Object(Object(l.cssRules)[0]).type===3;)l.cssRules.splice(0,1);l.cssRules=[]}for(const c in o)delete o[c]}const i=Object(t).styleSheets||[];for(const o of i)if(Il(o)){for(let l=0,c=o.cssRules;c[l];++l){const f=Object(c[l]);if(f.type!==1)continue;const u=Object(c[l+1]);if(u.type!==4)continue;++l;const{cssText:d}=f;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),g=Gt[h[0]];g&&(e||(e={sheet:o,reset:r,rules:{},toString:n}),e.rules[g]={group:u,index:l,cache:new Set(h)})}if(e)break}if(!e){const o=(l,c)=>({type:c,cssRules:[],insertRule(f,u){this.cssRules.splice(u,0,o(f,{import:3,undefined:1}[(f.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return l==="@media{}"?`@media{${[].map.call(this.cssRules,f=>f.cssText).join("")}}`:l}});e={sheet:t?(t.head||t).appendChild(document.createElement("style")).sheet:o("","text/css"),rules:{},reset:r,toString:n}}const{sheet:s,rules:a}=e;for(let o=Gt.length-1;o>=0;--o){const l=Gt[o];if(!a[l]){const c=Gt[o+1],f=a[c]?a[c].index:s.cssRules.length;s.insertRule("@media{}",f),s.insertRule(`--sxs{--sxs:${o}}`,f),a[l]={group:s.cssRules[f+1],index:f,cache:new Set([o])}}El(a[l])}};return r(),e},El=t=>{const e=t.group;let n=e.cssRules.length;t.apply=r=>{try{e.insertRule(r,n),++n}catch{}}},Vt=Symbol(),Tl=rn(),wl=(t,e)=>Tl(t,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[Sn]){r.type==null&&(r.type=i[Sn].type);for(const s of i[Sn].composers)r.composers.add(s)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(Rl(i,t));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),Cl(t,r,e)}),Rl=({variants:t,compoundVariants:e,defaultVariants:n,...r},i)=>{const s=`${Ze(i.prefix)}c-${mt(r)}`,a=[],o=[],l=Object.create(null),c=[];for(const d in n)l[d]=String(n[d]);if(typeof t=="object"&&t)for(const d in t){f=l,u=d,ml.call(f,u)||(l[d]="undefined");const h=t[d];for(const g in h){const p={[d]:String(g)};String(g)==="undefined"&&c.push(d);const b=h[g],_=[p,b,!hi(b)];a.push(_)}}var f,u;if(typeof e=="object"&&e)for(const d of e){let{css:h,...g}=d;h=typeof h=="object"&&h||{};for(const b in g)g[b]=String(g[b]);const p=[g,h,!hi(h)];o.push(p)}return[s,r,a,o,l,c]},Cl=(t,e,n)=>{const[r,i,s,a]=Al(e.composers),o=typeof e.type=="function"||e.type.$$typeof?(u=>{function d(){for(let h=0;h<d[Vt].length;h++){const[g,p]=d[Vt][h];u.rules[g].apply(p)}return d[Vt]=[],null}return d[Vt]=[],d.rules={},Gt.forEach(h=>d.rules[h]={apply:g=>d[Vt].push([h,g])}),d})(n):null,l=(o||n).rules,c=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,f=u=>{u=typeof u=="object"&&u||Ol;const{css:d,...h}=u,g={};for(const _ in s)if(delete h[_],_ in u){let v=u[_];typeof v=="object"&&v?g[_]={"@initial":s[_],...v}:(v=String(v),g[_]=v!=="undefined"||a.has(_)?v:s[_])}else g[_]=s[_];const p=new Set([...i]);for(const[_,v,w,I]of e.composers){n.rules.styled.cache.has(_)||(n.rules.styled.cache.add(_),At(v,[`.${_}`],[],t,E=>{l.styled.apply(E)}));const T=bi(w,g,t.media),O=bi(I,g,t.media,!0);for(const E of T)if(E!==void 0)for(const[V,q,R]of E){const S=`${_}-${mt(q)}-${V}`;p.add(S);const G=(R?n.rules.resonevar:n.rules.onevar).cache,z=R?l.resonevar:l.onevar;G.has(S)||(G.add(S),At(q,[`.${S}`],[],t,j=>{z.apply(j)}))}for(const E of O)if(E!==void 0)for(const[V,q]of E){const R=`${_}-${mt(q)}-${V}`;p.add(R),n.rules.allvar.cache.has(R)||(n.rules.allvar.cache.add(R),At(q,[`.${R}`],[],t,S=>{l.allvar.apply(S)}))}}if(typeof d=="object"&&d){const _=`${r}-i${mt(d)}-css`;p.add(_),n.rules.inline.cache.has(_)||(n.rules.inline.cache.add(_),At(d,[`.${_}`],[],t,v=>{l.inline.apply(v)}))}for(const _ of String(u.className||"").trim().split(/\s+/))_&&p.add(_);const b=h.className=[...p].join(" ");return{type:e.type,className:b,selector:c,props:h,toString:()=>b,deferredInjector:o}};return Dr(f,{className:r,selector:c,[Sn]:e,toString:()=>(n.rules.styled.cache.has(r)||f(),r)})},Al=t=>{let e="";const n=[],r={},i=[];for(const[s,,,,a,o]of t){e===""&&(e=s),n.push(s),i.push(...o);for(const l in a){const c=a[l];(r[l]===void 0||c!=="undefined"||o.includes(c))&&(r[l]=c)}}return[e,n,r,new Set(i)]},bi=(t,e,n,r)=>{const i=[];e:for(let[s,a,o]of t){if(o)continue;let l,c=0,f=!1;for(l in s){const u=s[l];let d=e[l];if(d!==u){if(typeof d!="object"||!d)continue e;{let h,g,p=0;for(const b in d){if(u===String(d[b])){if(b!=="@initial"){const _=b.slice(1);(g=g||[]).push(_ in n?n[_]:b.replace(/^@media ?/,"")),f=!0}c+=p,h=!0}++p}if(g&&g.length&&(a={["@media "+g.join(", ")]:a}),!h)continue e}}}(i[c]=i[c]||[]).push([r?"cv":`${l}-${s[l]}`,a,f])}return i},Ol={},Pl=rn(),Nl=(t,e)=>Pl(t,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let s=mt(i);if(!e.rules.global.cache.has(s)){if(e.rules.global.cache.add(s),"@import"in i){let a=[].indexOf.call(e.sheet.cssRules,e.rules.themed.group)-1;for(let o of[].concat(i["@import"]))o=o.includes('"')||o.includes("'")?o:`"${o}"`,e.sheet.insertRule(`@import ${o};`,a++);delete i["@import"]}At(i,[],[],t,a=>{e.rules.global.apply(a)})}}return""};return Dr(r,{toString:r})}),Dl=rn(),Ll=(t,e)=>Dl(t,()=>n=>{const r=`${Ze(t.prefix)}k-${mt(n)}`,i=()=>{if(!e.rules.global.cache.has(r)){e.rules.global.cache.add(r);const s=[];At(n,[],[],t,o=>s.push(o));const a=`@keyframes ${r}{${s.join("")}}`;e.rules.global.apply(a)}return r};return Dr(i,{get name(){return i()},toString:i})}),Ml=class{constructor(t,e,n,r){this.token=t==null?"":String(t),this.value=e==null?"":String(e),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+Ze(this.prefix)+Ze(this.scale)+this.token}toString(){return this.computedValue}},zl=rn(),Bl=(t,e)=>zl(t,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${Ze(t.prefix)}t-${mt(r)}`}`,s={},a=[];for(const l in r){s[l]={};for(const c in r[l]){const f=`--${Ze(t.prefix)}${l}-${c}`,u=Ys(String(r[l][c]),t.prefix,l);s[l][c]=new Ml(c,u,l,t.prefix),a.push(`${f}:${u}`)}}const o=()=>{if(a.length&&!e.rules.themed.cache.has(n)){e.rules.themed.cache.add(n);const l=`${r===t.theme?":root,":""}.${n}{${a.join(";")}}`;e.rules.themed.apply(l)}return n};return{...s,get className(){return o()},selector:i,toString:o}}),Ul=rn(),Wl=t=>{let e=!1;const n=Ul(t,r=>{e=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",s=typeof r.media=="object"&&r.media||{},a=typeof r.root=="object"?r.root||null:globalThis.document||null,o=typeof r.theme=="object"&&r.theme||{},l={prefix:i,media:s,theme:o,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...Xs},utils:typeof r.utils=="object"&&r.utils||{}},c=Sl(a),f={css:wl(l,c),globalCss:Nl(l,c),keyframes:Ll(l,c),createTheme:Bl(l,c),reset(){c.reset(),f.theme.toString()},theme:{},sheet:c,config:l,prefix:i,getCssText:c.toString,toString:c.toString};return String(f.theme=f.createTheme(o)),f});return e||n.reset(),n};const{css:xt,globalCss:Zs,keyframes:jl,getCssText:I1,theme:Qs,createTheme:Fl,config:S1,reset:E1}=Wl({prefix:"svelteui",theme:{colors:Js,space:{0:"0rem",xs:10,sm:12,md:16,lg:20,xl:24,xsPX:"10px",smPX:"12px",mdPX:"16px",lgPX:"20px",xlPX:"24px",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",7:"0.875rem",8:"1rem",9:"1.25rem",10:"1.5rem",11:"1.75rem",12:"2rem",13:"2.25rem",14:"2.5rem",15:"2.75rem",16:"3rem",17:"3.5rem",18:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},fonts:{standard:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fallback:"Segoe UI, system-ui, sans-serif"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeights:{xs:1,sm:1.25,md:1.5,lg:1.625,xl:1.75},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},sizes:{},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"32px",squared:"33%",rounded:"50%",pill:"9999px"},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},zIndices:{1:"100",2:"200",3:"300",4:"400",5:"500",10:"1000",max:"9999"},borderWidths:{light:"1px",normal:"2px",bold:"3px",extrabold:"4px",black:"5px",xs:"1px",sm:"2px",md:"3px",lg:"4px",xl:"5px"},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},borderStyles:{},transitions:{}},media:{xs:"(min-width: 576px)",sm:"(min-width: 768px)",md:"(min-width: 992px)",lg:"(min-width: 1200px)",xl:"(min-width: 1400px)"},utils:{focusRing:t=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:t==="always"||t==="auto"?"2px solid $primary":"none"},"&:focus:not(:focus-visible)":{outline:t==="auto"||t==="never"?"none":void 0}}),p:t=>({padding:t}),pt:t=>({paddingTop:t}),pr:t=>({paddingRight:t}),pb:t=>({paddingBottom:t}),pl:t=>({paddingLeft:t}),px:t=>({paddingLeft:t,paddingRight:t}),py:t=>({paddingTop:t,paddingBottom:t}),m:t=>({margin:t}),mt:t=>({marginTop:t}),mr:t=>({marginRight:t}),mb:t=>({marginBottom:t}),ml:t=>({marginLeft:t}),mx:t=>({marginLeft:t,marginRight:t}),my:t=>({marginTop:t,marginBottom:t}),ta:t=>({textAlign:t}),tt:t=>({textTransform:t}),to:t=>({textOverflow:t}),d:t=>({display:t}),dflex:t=>({display:"flex",alignItems:t,justifyContent:t}),fd:t=>({flexDirection:t}),fw:t=>({flexWrap:t}),ai:t=>({alignItems:t}),ac:t=>({alignContent:t}),jc:t=>({justifyContent:t}),as:t=>({alignSelf:t}),fg:t=>({flexGrow:t}),fs:t=>({fontSize:t}),fb:t=>({flexBasis:t}),bc:t=>({backgroundColor:t}),bf:t=>({backdropFilter:t}),bg:t=>({background:t}),bgBlur:t=>({bf:"saturate(180%) blur(10px)",bg:t}),bgColor:t=>({backgroundColor:t}),backgroundClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),bgClip:t=>({WebkitBackgroundClip:t,backgroundClip:t}),br:t=>({borderRadius:t}),bw:t=>({borderWidth:t}),btrr:t=>({borderTopRightRadius:t}),bbrr:t=>({borderBottomRightRadius:t}),bblr:t=>({borderBottomLeftRadius:t}),btlr:t=>({borderTopLeftRadius:t}),bs:t=>({boxShadow:t}),normalShadow:t=>({boxShadow:`0 4px 14px 0 $${t}`}),lh:t=>({lineHeight:t}),ov:t=>({overflow:t}),ox:t=>({overflowX:t}),oy:t=>({overflowY:t}),pe:t=>({pointerEvents:t}),events:t=>({pointerEvents:t}),us:t=>({WebkitUserSelect:t,userSelect:t}),userSelect:t=>({WebkitUserSelect:t,userSelect:t}),w:t=>({width:t}),h:t=>({height:t}),minW:t=>({minWidth:t}),minH:t=>({minWidth:t}),mw:t=>({maxWidth:t}),maxW:t=>({maxWidth:t}),mh:t=>({maxHeight:t}),maxH:t=>({maxHeight:t}),size:t=>({width:t,height:t}),minSize:t=>({minWidth:t,minHeight:t,width:t,height:t}),sizeMin:t=>({minWidth:t,minHeight:t,width:t,height:t}),maxSize:t=>({maxWidth:t,maxHeight:t}),sizeMax:t=>({maxWidth:t,maxHeight:t}),appearance:t=>({WebkitAppearance:t,appearance:t}),scale:t=>({transform:`scale(${t})`}),linearGradient:t=>({backgroundImage:`linear-gradient(${t})`}),tdl:t=>({textDecorationLine:t}),textGradient:t=>({backgroundImage:`linear-gradient(${t})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"})},themeMap:{...Xs,width:"space",height:"space",minWidth:"space",maxWidth:"space",minHeight:"space",maxHeight:"space",flexBasis:"space",gridTemplateColumns:"space",gridTemplateRows:"space",blockSize:"space",minBlockSize:"space",maxBlockSize:"space",inlineSize:"space",minInlineSize:"space",maxInlineSize:"space",borderWidth:"borderWeights"}}),Be=Fl("dark-theme",{colors:Js,shadows:{xs:"-4px 0 15px rgb(0 0 0 / 50%)",sm:"0 5px 20px -5px rgba(20, 20, 20, 0.1)",md:"0 8px 30px rgba(20, 20, 20, 0.15)",lg:"0 30px 60px rgba(20, 20, 20, 0.15)",xl:"0 40px 80px rgba(20, 20, 20, 0.25)"}}),Hl=Zs({a:{focusRing:"auto"},body:{[`${Be.selector} &`]:{backgroundColor:"$dark700",color:"$dark50"},backgroundColor:"$white",color:"$black"}}),Vl=Zs({html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%",margin:0},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em",margin:0},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}}),bn={xs:18,sm:22,md:28,lg:34,xl:44};function ql(t,e){const n={from:"indigo",to:"cyan",deg:45};return e==="hover"||e==="transparent"?{[`${e}`]:{[`${Be.selector} &`]:{color:`$${t}800`,"&:hover":{backgroundColor:e==="transparent"?null:"$dark800"}},border:"1px solid transparent",backgroundColor:"transparent",color:`$${t}700`,"&:hover":{backgroundColor:e==="transparent"?null:`$${t}50`},"&:disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"}}}:Ks(t,n)}const Gl=Le((t,{color:e,radius:n,size:r,variant:i})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:typeof r=="string"?bn[r]:`${r}px`,minHeight:typeof r=="string"?bn[r]:`${r}px`,width:typeof r=="string"?bn[r]:`${r}px`,minWidth:typeof r=="string"?bn[r]:`${r}px`,borderRadius:`$${n}`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none","&:not(:disabled):active":{transform:"translateY(1px)"},"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"},"&.loading":{"&::before":{content:'""',position:"absolute",top:-1,left:-1,right:-1,bottom:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${n}`,cursor:"not-allowed"}}},variants:{variation:ql(e,i)}})),Kl=Object.freeze([{error:!0,message:"If using the 'href' prop, set 'root' prop to an anchor ('a') tag",solution:`
                If your component looks like this:

                &lt;ActionIcon href='https://example.com'&gt;
                          ^^^ - Try adding prop root='a'
                       &lt;Icon /&gt;
                &lt;/ActionIcon&gt;
                `}]),_i={mt:"marginTop",mb:"marginBottom",ml:"marginLeft",mr:"marginRight",pt:"paddingTop",pb:"paddingBottom",pl:"paddingLeft",pr:"paddingRight"},Jl=["-xs","-sm","-md","-lg","-xl"];function ft(t){return typeof t=="string"||typeof t=="number"}function dt(t,e){return Jl.includes(t)?e.fn.size({size:t.replace("-",""),sizes:e.space})*-1:e.fn.size({size:t,sizes:e.space})}function Xl(t,e){const n={};if(ft(t.p)){const r=dt(t.p,e);n.padding=r}if(ft(t.m)){const r=dt(t.m,e);n.margin=r}if(ft(t.py)){const r=dt(t.py,e);n.paddingTop=r,n.paddingBottom=r}if(ft(t.px)){const r=dt(t.px,e);n.paddingLeft=r,n.paddingRight=r}if(ft(t.my)){const r=dt(t.my,e);n.marginTop=r,n.marginBottom=r}if(ft(t.mx)){const r=dt(t.mx,e);n.marginLeft=r,n.marginRight=r}return Object.keys(_i).forEach(r=>{ft(t[r])&&(n[_i[r]]=e.fn.size({size:dt(t[r],e),sizes:e.space}))}),n}function Yl(t){let e,n,r,i,s,a;const o=t[28].default,l=re(o,t,t[32],null);let c=[{class:n=t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]],f={};for(let u=0;u<c.length;u+=1)f=M(f,c[u]);return{c(){e=te("div"),l&&l.c(),De(e,f)},m(u,d){A(u,e,d),l&&l.m(e,null),t[31](e),i=!0,s||(a=[ge(t[8].call(null,e)),ge(r=fe.call(null,e,t[1]))],s=!0)},p(u,d){l&&l.p&&(!i||d[1]&2)&&se(l,o,u,u[32],i?ie(o,u[32],d,null):oe(u[32]),null),De(e,f=ae(c,[(!i||d[0]&196&&n!==(n=u[2]+" "+u[7]({css:{...u[11](u[10]),...u[6]}})))&&{class:n},d[0]&4096&&u[12]])),r&&Ie(r.update)&&d[0]&2&&r.update.call(null,u[1])},i(u){i||(y(l,u),i=!0)},o(u){k(l,u),i=!1},d(u){u&&C(e),l&&l.d(u),t[31](null),s=!1,Ae(a)}}}function Zl(t){let e,n,r;const i=[{use:[t[8],[fe,t[1]]]},{class:t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]];var s=t[3];function a(o){let l={$$slots:{default:[xl]},$$scope:{ctx:o}};for(let c=0;c<i.length;c+=1)l=M(l,i[c]);return{props:l}}return s&&(e=ut(s,a(t)),t[30](e)),{c(){e&&D(e.$$.fragment),n=ve()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,l){const c=l[0]&7622?ae(i,[l[0]&258&&{use:[o[8],[fe,o[1]]]},l[0]&3268&&{class:o[2]+" "+o[7]({css:{...o[11](o[10]),...o[6]}})},l[0]&4096&&ke(o[12])]):{};if(l[1]&2&&(c.$$scope={dirty:l,ctx:o}),l[0]&8&&s!==(s=o[3])){if(e){ce();const f=e;k(f.$$.fragment,1,0,()=>{N(f,1)}),ue()}s?(e=ut(s,a(o)),o[30](e),D(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){t[30](null),o&&C(n),e&&N(e,o)}}}function Ql(t){let e,n=t[9]()&&$l(t);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){r[9]()&&n.p(r,i)},i(r){e||(y(n),e=!0)},o(r){k(n),e=!1},d(r){n&&n.d(r)}}}function xl(t){let e;const n=t[28].default,r=re(n,t,t[32],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[1]&2)&&se(r,n,i,i[32],e?ie(n,i[32],s,null):oe(i[32]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function $l(t){let e,n,r,i,s,a;const o=t[28].default,l=re(o,t,t[32],null);let c=[{class:n=t[2]+" "+t[7]({css:{...t[11](t[10]),...t[6]}})},t[12]],f={};for(let u=0;u<c.length;u+=1)f=M(f,c[u]);return{c(){e=te(t[9]()),l&&l.c(),Cn(t[9]())(e,f)},m(u,d){A(u,e,d),l&&l.m(e,null),t[29](e),i=!0,s||(a=[ge(t[8].call(null,e)),ge(r=fe.call(null,e,t[1]))],s=!0)},p(u,d){l&&l.p&&(!i||d[1]&2)&&se(l,o,u,u[32],i?ie(o,u[32],d,null):oe(u[32]),null),Cn(u[9]())(e,f=ae(c,[(!i||d[0]&196&&n!==(n=u[2]+" "+u[7]({css:{...u[11](u[10]),...u[6]}})))&&{class:n},d[0]&4096&&u[12]])),r&&Ie(r.update)&&d[0]&2&&r.update.call(null,u[1])},i(u){i||(y(l,u),i=!0)},o(u){k(l,u),i=!1},d(u){u&&C(e),l&&l.d(u),t[29](null),s=!1,Ae(a)}}}function ec(t){let e,n,r,i;const s=[Ql,Zl,Yl],a=[];function o(l,c){return l[4]?0:l[5]&&typeof l[3]!="string"?1:2}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function tc(t,e,n){var $e;let r,i;const s=["use","element","class","css","root","m","my","mx","mt","mb","ml","mr","p","py","px","pt","pb","pl","pr"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",css:d={},root:h=void 0,m:g=void 0,my:p=void 0,mx:b=void 0,mt:_=void 0,mb:v=void 0,ml:w=void 0,mr:I=void 0,p:T=void 0,py:O=void 0,px:E=void 0,pt:V=void 0,pb:q=void 0,pl:R=void 0,pr:S=void 0}=e;const G=He(Re()),z=()=>h,j=(($e=Wt())==null?void 0:$e.theme)||bt(),F=typeof d=="function"?d:()=>d;let Me,Ee;function U(H){$[H?"unshift":"push"](()=>{f=H,n(0,f)})}function It(H){$[H?"unshift":"push"](()=>{f=H,n(0,f)})}function Ft(H){$[H?"unshift":"push"](()=>{f=H,n(0,f)})}return t.$$set=H=>{e=M(M({},e),ye(H)),n(12,a=X(e,s)),"use"in H&&n(1,c=H.use),"element"in H&&n(0,f=H.element),"class"in H&&n(2,u=H.class),"css"in H&&n(13,d=H.css),"root"in H&&n(3,h=H.root),"m"in H&&n(14,g=H.m),"my"in H&&n(15,p=H.my),"mx"in H&&n(16,b=H.mx),"mt"in H&&n(17,_=H.mt),"mb"in H&&n(18,v=H.mb),"ml"in H&&n(19,w=H.ml),"mr"in H&&n(20,I=H.mr),"p"in H&&n(21,T=H.p),"py"in H&&n(22,O=H.py),"px"in H&&n(23,E=H.px),"pt"in H&&n(24,V=H.pt),"pb"in H&&n(25,q=H.pb),"pl"in H&&n(26,R=H.pl),"pr"in H&&n(27,S=H.pr),"$$scope"in H&&n(32,l=H.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&8&&(n(4,Me=h&&typeof h=="string"),n(5,Ee=h&&typeof h=="function")),t.$$.dirty[0]&268419072&&n(6,i=Xl({m:g,my:p,mx:b,mt:_,mb:v,ml:w,mr:I,p:T,py:O,px:E,pt:V,pb:q,pl:R,pr:S},j))},r=xt({}),[f,c,u,h,Me,Ee,i,r,G,z,j,F,a,d,g,p,b,_,v,w,I,T,O,E,V,q,R,S,o,U,It,Ft,l]}class nc extends x{constructor(e){super(),Q(this,e,tc,ec,Z,{use:1,element:0,class:2,css:13,root:3,m:14,my:15,mx:16,mt:17,mb:18,ml:19,mr:20,p:21,py:22,px:23,pt:24,pb:25,pl:26,pr:27},null,[-1,-1])}}const ze=nc;function rc(t){let e,n,r,i,s,a,o,l,c,f,u;return{c(){e=Y("svg"),n=Y("g"),r=Y("g"),i=Y("circle"),s=Y("path"),a=Y("animateTransform"),m(i,"stroke-opacity",".5"),m(i,"cx","16"),m(i,"cy","16"),m(i,"r","16"),m(a,"attributeName","transform"),m(a,"type","rotate"),m(a,"from","0 16 16"),m(a,"to","360 16 16"),m(a,"dur","1s"),m(a,"repeatCount","indefinite"),m(s,"d","M32 16c0-9.94-8.06-16-16-16"),m(r,"transform","translate(2.5 2.5)"),m(r,"stroke-width","5"),m(n,"fill","none"),m(n,"fill-rule","evenodd"),m(e,"width",o=`${t[1]}px`),m(e,"height",l=`${t[1]}px`),m(e,"viewBox","0 0 38 38"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"stroke",t[2]),m(e,"class",t[3])},m(d,h){A(d,e,h),J(e,n),J(n,r),J(r,i),J(r,s),J(s,a),f||(u=ge(c=fe.call(null,e,t[0])),f=!0)},p(d,[h]){h&2&&o!==(o=`${d[1]}px`)&&m(e,"width",o),h&2&&l!==(l=`${d[1]}px`)&&m(e,"height",l),h&4&&m(e,"stroke",d[2]),h&8&&m(e,"class",d[3]),c&&Ie(c.update)&&h&1&&c.update.call(null,d[0])},i:ne,o:ne,d(d){d&&C(e),f=!1,u()}}}function ic(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class sc extends x{constructor(e){super(),Q(this,e,ic,rc,Z,{use:0,size:1,color:2,class:3})}}const oc=sc;function ac(t){let e,n,r,i,s,a,o,l,c,f,u,d,h,g,p,b,_,v,w,I;return{c(){e=Y("svg"),n=Y("rect"),r=Y("animate"),i=Y("animate"),s=Y("rect"),a=Y("animate"),o=Y("animate"),l=Y("rect"),c=Y("animate"),f=Y("animate"),u=Y("rect"),d=Y("animate"),h=Y("animate"),g=Y("rect"),p=Y("animate"),b=Y("animate"),m(r,"attributeName","height"),m(r,"begin","0.5s"),m(r,"dur","1s"),m(r,"values","120;110;100;90;80;70;60;50;40;140;120"),m(r,"calcMode","linear"),m(r,"repeatCount","indefinite"),m(i,"attributeName","y"),m(i,"begin","0.5s"),m(i,"dur","1s"),m(i,"values","10;15;20;25;30;35;40;45;50;0;10"),m(i,"calcMode","linear"),m(i,"repeatCount","indefinite"),m(n,"y","10"),m(n,"width","15"),m(n,"height","120"),m(n,"rx","6"),m(a,"attributeName","height"),m(a,"begin","0.25s"),m(a,"dur","1s"),m(a,"values","120;110;100;90;80;70;60;50;40;140;120"),m(a,"calcMode","linear"),m(a,"repeatCount","indefinite"),m(o,"attributeName","y"),m(o,"begin","0.25s"),m(o,"dur","1s"),m(o,"values","10;15;20;25;30;35;40;45;50;0;10"),m(o,"calcMode","linear"),m(o,"repeatCount","indefinite"),m(s,"x","30"),m(s,"y","10"),m(s,"width","15"),m(s,"height","120"),m(s,"rx","6"),m(c,"attributeName","height"),m(c,"begin","0s"),m(c,"dur","1s"),m(c,"values","120;110;100;90;80;70;60;50;40;140;120"),m(c,"calcMode","linear"),m(c,"repeatCount","indefinite"),m(f,"attributeName","y"),m(f,"begin","0s"),m(f,"dur","1s"),m(f,"values","10;15;20;25;30;35;40;45;50;0;10"),m(f,"calcMode","linear"),m(f,"repeatCount","indefinite"),m(l,"x","60"),m(l,"width","15"),m(l,"height","140"),m(l,"rx","6"),m(d,"attributeName","height"),m(d,"begin","0.25s"),m(d,"dur","1s"),m(d,"values","120;110;100;90;80;70;60;50;40;140;120"),m(d,"calcMode","linear"),m(d,"repeatCount","indefinite"),m(h,"attributeName","y"),m(h,"begin","0.25s"),m(h,"dur","1s"),m(h,"values","10;15;20;25;30;35;40;45;50;0;10"),m(h,"calcMode","linear"),m(h,"repeatCount","indefinite"),m(u,"x","90"),m(u,"y","10"),m(u,"width","15"),m(u,"height","120"),m(u,"rx","6"),m(p,"attributeName","height"),m(p,"begin","0.5s"),m(p,"dur","1s"),m(p,"values","120;110;100;90;80;70;60;50;40;140;120"),m(p,"calcMode","linear"),m(p,"repeatCount","indefinite"),m(b,"attributeName","y"),m(b,"begin","0.5s"),m(b,"dur","1s"),m(b,"values","10;15;20;25;30;35;40;45;50;0;10"),m(b,"calcMode","linear"),m(b,"repeatCount","indefinite"),m(g,"x","120"),m(g,"y","10"),m(g,"width","15"),m(g,"height","120"),m(g,"rx","6"),m(e,"viewBox","0 0 135 140"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill",t[2]),m(e,"width",_=`${t[1]}px`),m(e,"class",t[3])},m(T,O){A(T,e,O),J(e,n),J(n,r),J(n,i),J(e,s),J(s,a),J(s,o),J(e,l),J(l,c),J(l,f),J(e,u),J(u,d),J(u,h),J(e,g),J(g,p),J(g,b),w||(I=ge(v=fe.call(null,e,t[0])),w=!0)},p(T,[O]){O&4&&m(e,"fill",T[2]),O&2&&_!==(_=`${T[1]}px`)&&m(e,"width",_),O&8&&m(e,"class",T[3]),v&&Ie(v.update)&&O&1&&v.update.call(null,T[0])},i:ne,o:ne,d(T){T&&C(e),w=!1,I()}}}function lc(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class cc extends x{constructor(e){super(),Q(this,e,lc,ac,Z,{use:0,size:1,color:2,class:3})}}const uc=cc;function fc(t){let e,n,r,i,s,a,o,l,c,f,u,d,h,g,p;return{c(){e=Y("svg"),n=Y("circle"),r=Y("animate"),i=Y("animate"),s=Y("circle"),a=Y("animate"),o=Y("animate"),l=Y("circle"),c=Y("animate"),f=Y("animate"),m(r,"attributeName","r"),m(r,"from","15"),m(r,"to","15"),m(r,"begin","0s"),m(r,"dur","0.8s"),m(r,"values","15;9;15"),m(r,"calcMode","linear"),m(r,"repeatCount","indefinite"),m(i,"attributeName","fill-opacity"),m(i,"from","1"),m(i,"to","1"),m(i,"begin","0s"),m(i,"dur","0.8s"),m(i,"values","1;.5;1"),m(i,"calcMode","linear"),m(i,"repeatCount","indefinite"),m(n,"cx","15"),m(n,"cy","15"),m(n,"r","15"),m(a,"attributeName","r"),m(a,"from","9"),m(a,"to","9"),m(a,"begin","0s"),m(a,"dur","0.8s"),m(a,"values","9;15;9"),m(a,"calcMode","linear"),m(a,"repeatCount","indefinite"),m(o,"attributeName","fill-opacity"),m(o,"from","0.5"),m(o,"to","0.5"),m(o,"begin","0s"),m(o,"dur","0.8s"),m(o,"values",".5;1;.5"),m(o,"calcMode","linear"),m(o,"repeatCount","indefinite"),m(s,"cx","60"),m(s,"cy","15"),m(s,"r","9"),m(s,"fill-opacity","0.3"),m(c,"attributeName","r"),m(c,"from","15"),m(c,"to","15"),m(c,"begin","0s"),m(c,"dur","0.8s"),m(c,"values","15;9;15"),m(c,"calcMode","linear"),m(c,"repeatCount","indefinite"),m(f,"attributeName","fill-opacity"),m(f,"from","1"),m(f,"to","1"),m(f,"begin","0s"),m(f,"dur","0.8s"),m(f,"values","1;.5;1"),m(f,"calcMode","linear"),m(f,"repeatCount","indefinite"),m(l,"cx","105"),m(l,"cy","15"),m(l,"r","15"),m(e,"width",u=`${t[1]}px`),m(e,"height",d=`${Number(t[1])/4}px`),m(e,"viewBox","0 0 120 30"),m(e,"xmlns","http://www.w3.org/2000/svg"),m(e,"fill",t[2]),m(e,"class",t[3])},m(b,_){A(b,e,_),J(e,n),J(n,r),J(n,i),J(e,s),J(s,a),J(s,o),J(e,l),J(l,c),J(l,f),g||(p=ge(h=fe.call(null,e,t[0])),g=!0)},p(b,[_]){_&2&&u!==(u=`${b[1]}px`)&&m(e,"width",u),_&2&&d!==(d=`${Number(b[1])/4}px`)&&m(e,"height",d),_&4&&m(e,"fill",b[2]),_&8&&m(e,"class",b[3]),h&&Ie(h.update)&&_&1&&h.update.call(null,b[0])},i:ne,o:ne,d(b){b&&C(e),g=!1,p()}}}function dc(t,e,n){let{use:r=[]}=e,{size:i=25}=e,{color:s="blue"}=e,{class:a=""}=e;return t.$$set=o=>{"use"in o&&n(0,r=o.use),"size"in o&&n(1,i=o.size),"color"in o&&n(2,s=o.color),"class"in o&&n(3,a=o.class)},[r,i,s,a]}class hc extends x{constructor(e){super(),Q(this,e,dc,fc,Z,{use:0,size:1,color:2,class:3})}}const mc=hc,yi={xs:18,sm:22,md:36,lg:44,xl:58},ki=(t,e=!1)=>Qs.colors[e?`${t}400`:`${t}600`].value;function gc(t){let e,n,r;const i=[{use:[t[5],[fe,t[1]]]},{color:t[4]==="white"?"white":ki(t[4])},{size:yi[t[3]]},{class:t[2]},t[8]];var s=t[6][t[7]];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=M(l,i[c]);return{props:l}}return s&&(e=ut(s,a()),t[10](e)),{c(){e&&D(e.$$.fragment),n=ve()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,[l]){const c=l&318?ae(i,[l&34&&{use:[o[5],[fe,o[1]]]},l&16&&{color:o[4]==="white"?"white":ki(o[4])},l&8&&{size:yi[o[3]]},l&4&&{class:o[2]},l&256&&ke(o[8])]):{};if(s!==(s=o[6][o[7]])){if(e){ce();const f=e;k(f.$$.fragment,1,0,()=>{N(f,1)}),ue()}s?(e=ut(s,a()),o[10](e),D(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){t[10](null),o&&C(n),e&&N(e,o)}}}function pc(t,e,n){const r=["use","element","class","size","color","variant"];let i=X(e,r),{use:s=[],element:a=void 0,class:o="",size:l="md",color:c="blue",variant:f="circle"}=e;const u=He(Re()),d={bars:uc,circle:oc,dots:mc},h=f in d?f:"circle";function g(p){$[p?"unshift":"push"](()=>{a=p,n(0,a)})}return t.$$set=p=>{e=M(M({},e),ye(p)),n(8,i=X(e,r)),"use"in p&&n(1,s=p.use),"element"in p&&n(0,a=p.element),"class"in p&&n(2,o=p.class),"size"in p&&n(3,l=p.size),"color"in p&&n(4,c=p.color),"variant"in p&&n(9,f=p.variant)},[a,s,o,l,c,u,d,h,i,f,g]}class bc extends x{constructor(e){super(),Q(this,e,pc,gc,Z,{use:1,element:0,class:2,size:3,color:4,variant:9})}}const sn=bc;function _c(t){let e;const n=t[20].default,r=re(n,t,t[22],null),i=r||kc();return{c(){i&&i.c()},m(s,a){i&&i.m(s,a),e=!0},p(s,a){r&&r.p&&(!e||a&4194304)&&se(r,n,s,s[22],e?ie(n,s[22],a,null):oe(s[22]),null)},i(s){e||(y(i,s),e=!0)},o(s){k(i,s),e=!1},d(s){i&&i.d(s)}}}function yc(t){let e,n;return e=new sn({props:{size:t[6].size,color:t[6].color,variant:t[6].variant}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&64&&(s.size=r[6].size),i&64&&(s.color=r[6].color),i&64&&(s.variant=r[6].variant),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function kc(t){let e;return{c(){e=we("+")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function vc(t){let e,n,r,i;const s=[yc,_c],a=[];function o(l,c){return l[7]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function Ic(t){let e,n,r,i,s;e=new Or({props:{observable:t[11],component:"ActionIcon",code:t[12]}});const a=[{use:[t[15],[fe,t[2]]]},{tabindex:0},{disabled:t[8]||t[7]},{class:t[14](t[3],{loading:t[7],disabled:t[8]},t[13]({css:t[1],variation:t[5]}))},{target:t[10]?"_blank":null},{rel:t[10]?"noreferrer noopener":null},{root:t[4]},{href:t[9]},t[16]];function o(c){t[21](c)}let l={$$slots:{default:[vc]},$$scope:{ctx:t}};for(let c=0;c<a.length;c+=1)l=M(l,a[c]);return t[0]!==void 0&&(l.element=t[0]),r=new ze({props:l}),$.push(()=>_e(r,"element",o)),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(c,f){P(e,c,f),A(c,n,f),P(r,c,f),s=!0},p(c,[f]){const u={};f&2048&&(u.observable=c[11]),f&4096&&(u.code=c[12]),e.$set(u);const d=f&124862?ae(a,[f&32772&&{use:[c[15],[fe,c[2]]]},a[1],f&384&&{disabled:c[8]||c[7]},f&25002&&{class:c[14](c[3],{loading:c[7],disabled:c[8]},c[13]({css:c[1],variation:c[5]}))},f&1024&&{target:c[10]?"_blank":null},f&1024&&{rel:c[10]?"noreferrer noopener":null},f&16&&{root:c[4]},f&512&&{href:c[9]},f&65536&&ke(c[16])]):{};f&4194496&&(d.$$scope={dirty:f,ctx:c}),!i&&f&1&&(i=!0,d.element=c[0],Se(()=>i=!1)),r.$set(d)},i(c){s||(y(e.$$.fragment,c),y(r.$$.fragment,c),s=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),s=!1},d(c){N(e,c),c&&C(n),N(r,c)}}}function Sc(t,e,n){let r,i;const s=["use","element","class","override","root","color","variant","size","radius","loaderProps","loading","disabled","href","external"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},root:h="button",color:g="gray",variant:p="hover",size:b="md",radius:_="sm",loaderProps:v={size:"xs",color:"gray",variant:"circle"},loading:w=!1,disabled:I=!1,href:T="",external:O=!1}=e;const E=He(Re());let V=!1,q;h!=="a"&&e.href&&(V=!0,q=Kl[0]);function R(S){f=S,n(0,f)}return t.$$set=S=>{n(23,e=M(M({},e),ye(S))),n(16,a=X(e,s)),"use"in S&&n(2,c=S.use),"element"in S&&n(0,f=S.element),"class"in S&&n(3,u=S.class),"override"in S&&n(1,d=S.override),"root"in S&&n(4,h=S.root),"color"in S&&n(17,g=S.color),"variant"in S&&n(5,p=S.variant),"size"in S&&n(18,b=S.size),"radius"in S&&n(19,_=S.radius),"loaderProps"in S&&n(6,v=S.loaderProps),"loading"in S&&n(7,w=S.loading),"disabled"in S&&n(8,I=S.disabled),"href"in S&&n(9,T=S.href),"external"in S&&n(10,O=S.external),"$$scope"in S&&n(22,l=S.$$scope)},t.$$.update=()=>{t.$$.dirty&2048&&V&&n(1,d={display:"none"}),t.$$.dirty&917536&&n(14,{cx:r,getStyles:i}=Gl({color:g,radius:_,size:b,variant:p},{name:"ActionIcon"}),r,(n(13,i),n(17,g),n(19,_),n(18,b),n(5,p)))},e=ye(e),[f,d,c,u,h,p,v,w,I,T,O,V,q,i,r,E,a,g,b,_,o,R,l]}class Ec extends x{constructor(e){super(),Q(this,e,Sc,Ic,Z,{use:2,element:0,class:3,override:1,root:4,color:17,variant:5,size:18,radius:19,loaderProps:6,loading:7,disabled:8,href:9,external:10})}}const Tc=Ec;function wc(t){let e,n,r=[{width:t[0]},{height:t[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[2]],i={};for(let s=0;s<r.length;s+=1)i=M(i,r[s]);return{c(){e=Y("svg"),n=Y("path"),m(n,"d","M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"),m(n,"fill","currentColor"),m(n,"fill-rule","evenodd"),m(n,"clip-rule","evenodd"),si(e,i)},m(s,a){A(s,e,a),J(e,n)},p(s,[a]){si(e,i=ae(r,[a&1&&{width:s[0]},a&2&&{height:s[1]},{viewBox:"0 0 15 15"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},a&4&&s[2]]))},i:ne,o:ne,d(s){s&&C(e)}}}function Rc(t,e,n){const r=["width","height"];let i=X(e,r),{width:s=16}=e,{height:a=16}=e;return t.$$set=o=>{e=M(M({},e),ye(o)),n(2,i=X(e,r)),"width"in o&&n(0,s=o.width),"height"in o&&n(1,a=o.height)},[s,a,i]}class Cc extends x{constructor(e){super(),Q(this,e,Rc,wc,Z,{width:0,height:1})}}const Ac=Cc;function Oc(t){let e,n;return e=new Ac({props:{width:t[16][t[4]],height:t[16][t[4]]}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&16&&(s.width=r[16][r[4]]),i&16&&(s.height=r[16][r[4]]),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Pc(t){let e,n,r;const i=[{class:t[2]},{use:[t[15],[fe,t[1]]]},{override:t[3]},{root:t[5]},{color:t[6]},{variant:t[7]},{size:t[8]},{radius:t[9]},{loaderProps:t[10]},{loading:t[11]},{disabled:t[12]},{href:t[13]},{external:t[14]},t[17]];function s(o){t[18](o)}let a={$$slots:{default:[Oc]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new Tc({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&196590?ae(i,[l&4&&{class:o[2]},l&32770&&{use:[o[15],[fe,o[1]]]},l&8&&{override:o[3]},l&32&&{root:o[5]},l&64&&{color:o[6]},l&128&&{variant:o[7]},l&256&&{size:o[8]},l&512&&{radius:o[9]},l&1024&&{loaderProps:o[10]},l&2048&&{loading:o[11]},l&4096&&{disabled:o[12]},l&8192&&{href:o[13]},l&16384&&{external:o[14]},l&131072&&ke(o[17])]):{};l&524304&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Nc(t,e,n){const r=["use","element","class","override","iconSize","root","color","variant","size","radius","loaderProps","loading","disabled","href","external"];let i=X(e,r),{use:s=[],element:a=void 0,class:o="",override:l={},iconSize:c="md",root:f="button",color:u="gray",variant:d="hover",size:h="md",radius:g="sm",loaderProps:p={size:"xs",color:"gray",variant:"circle"},loading:b=!1,disabled:_=!1,href:v="",external:w=!1}=e;const I=He(Re()),T={xs:12,sm:14,md:16,lg:20,xl:24};function O(E){a=E,n(0,a)}return t.$$set=E=>{e=M(M({},e),ye(E)),n(17,i=X(e,r)),"use"in E&&n(1,s=E.use),"element"in E&&n(0,a=E.element),"class"in E&&n(2,o=E.class),"override"in E&&n(3,l=E.override),"iconSize"in E&&n(4,c=E.iconSize),"root"in E&&n(5,f=E.root),"color"in E&&n(6,u=E.color),"variant"in E&&n(7,d=E.variant),"size"in E&&n(8,h=E.size),"radius"in E&&n(9,g=E.radius),"loaderProps"in E&&n(10,p=E.loaderProps),"loading"in E&&n(11,b=E.loading),"disabled"in E&&n(12,_=E.disabled),"href"in E&&n(13,v=E.href),"external"in E&&n(14,w=E.external)},[a,s,o,l,c,f,u,d,h,g,p,b,_,v,w,I,T,i,O]}class Dc extends x{constructor(e){super(),Q(this,e,Nc,Pc,Z,{use:1,element:0,class:2,override:3,iconSize:4,root:5,color:6,variant:7,size:8,radius:9,loaderProps:10,loading:11,disabled:12,href:13,external:14})}}const Lc=Dc,Mc='input, textarea, select, a, button, [tabindex]:not([tabindex="-1"])';function zc(t){let e=t.querySelector("[autofocus]");if(!e){const n=t.querySelectorAll(Mc);if(n.length===0)return;e=n[0]}setTimeout(()=>e==null?void 0:e.focus({preventScroll:!0}),0)}function Bc(){const t=document.createElement("style");return t.type="text/css",t.setAttribute("svelteui-scroll-lock",""),t}function Uc(){if(typeof window>"u"||typeof document>"u")return 0;const t=parseInt(window.getComputedStyle(document.body).paddingRight,10),e=window.innerWidth-document.documentElement.clientWidth;return t+e}const Wc=({disableBodyPadding:t})=>{const e=t?null:Uc();return`body {
        --removed-scroll-width: ${e}px;
        touch-action: none;
        overflow: hidden !important;
        position: relative !important;
        ${e?"padding-right: var(--removed-scroll-width) !important;":""}
        `};function jc(t,e){t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}function Fc(t){(document.head||document.getElementsByTagName("head")[0]).appendChild(t)}const vi=()=>typeof window<"u",xs={browser:vi(),server:!vi()},Hc=xs.browser?window:void 0;function Vc(t,e,n={disableBodyPadding:!1}){const{browser:r}=xs;let i;r&&(i=Hc);let s=e??!1;const{disableBodyPadding:a}=n;let o;const l=()=>{const f=Wc({disableBodyPadding:a}),u=Bc();jc(u,f),Fc(u),o=u},c=()=>{var f;o&&((f=o==null?void 0:o.parentNode)==null||f.removeChild(o),o=null)};return s?l():c(),e!==void 0&&(s=e),e===void 0&&typeof i<"u"&&i.document.body.style.overflow==="hidden"&&(s=e),{update:f=>{f?l():(i.document.body.style.overflow==="visible"&&(s=e),c())},destroy:()=>{c()}}}function qc(t,e="body"){let n;async function r(s){if(e=s,typeof e=="string"){if(n=document.querySelector(e),n===null&&(await Hs(),n=document.querySelector(e)),n===null)throw new Error(`No element found matching css selector: "${e}"`)}else if(e instanceof HTMLElement)n=e;else throw new TypeError(`Unknown portal target type: ${e===null?"null":typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);n.appendChild(t),t.hidden=!1}function i(){t.parentNode&&t.parentNode.removeChild(t)}return r(e),{update:r,destroy:i}}function Gc(t){let e,n,r,i,s,a;const o=t[8].default,l=re(o,t,t[7],null);return{c(){e=te("div"),l&&l.c(),m(e,"class",t[2]),e.hidden=!0,Ke(e,"position",t[4]),Ke(e,"zIndex",t[5])},m(c,f){A(c,e,f),l&&l.m(e,null),t[9](e),i=!0,s||(a=[ge(n=fe.call(null,e,t[1])),ge(t[6].call(null,e)),ge(r=qc.call(null,e,t[3]))],s=!0)},p(c,[f]){l&&l.p&&(!i||f&128)&&se(l,o,c,c[7],i?ie(o,c[7],f,null):oe(c[7]),null),(!i||f&4)&&m(e,"class",c[2]),(!i||f&16)&&Ke(e,"position",c[4]),(!i||f&32)&&Ke(e,"zIndex",c[5]),n&&Ie(n.update)&&f&2&&n.update.call(null,c[1]),r&&Ie(r.update)&&f&8&&r.update.call(null,c[3])},i(c){i||(y(l,c),i=!0)},o(c){k(l,c),i=!1},d(c){c&&C(e),l&&l.d(c),t[9](null),s=!1,Ae(a)}}}function Kc(t,e,n){let{$$slots:r={},$$scope:i}=e,{use:s=[],element:a=void 0,class:o="",target:l="body",position:c="relative",zIndex:f=1}=e;const u=He(Re());function d(h){$[h?"unshift":"push"](()=>{a=h,n(0,a)})}return t.$$set=h=>{"use"in h&&n(1,s=h.use),"element"in h&&n(0,a=h.element),"class"in h&&n(2,o=h.class),"target"in h&&n(3,l=h.target),"position"in h&&n(4,c=h.position),"zIndex"in h&&n(5,f=h.zIndex),"$$scope"in h&&n(7,i=h.$$scope)},[a,s,o,l,c,f,u,i,r,d]}class Jc extends x{constructor(e){super(),Q(this,e,Kc,Gc,Z,{use:1,element:0,class:2,target:3,position:4,zIndex:5})}}const Xc=Jc;function Yc(t){let e;const n=t[5].default,r=re(n,t,t[7],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&128)&&se(r,n,i,i[7],e?ie(n,i[7],s,null):oe(i[7]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Zc(t){let e,n,r;function i(a){t[6](a)}let s={class:t[3],use:t[2],target:t[4],$$slots:{default:[Qc]},$$scope:{ctx:t}};return t[0]!==void 0&&(s.element=t[0]),e=new Xc({props:s}),$.push(()=>_e(e,"element",i)),{c(){D(e.$$.fragment)},m(a,o){P(e,a,o),r=!0},p(a,o){const l={};o&8&&(l.class=a[3]),o&4&&(l.use=a[2]),o&16&&(l.target=a[4]),o&128&&(l.$$scope={dirty:o,ctx:a}),!n&&o&1&&(n=!0,l.element=a[0],Se(()=>n=!1)),e.$set(l)},i(a){r||(y(e.$$.fragment,a),r=!0)},o(a){k(e.$$.fragment,a),r=!1},d(a){N(e,a)}}}function Qc(t){let e;const n=t[5].default,r=re(n,t,t[7],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&128)&&se(r,n,i,i[7],e?ie(n,i[7],s,null):oe(i[7]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function xc(t){let e,n,r,i;const s=[Zc,Yc],a=[];function o(l,c){return l[1]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function $c(t,e,n){let{$$slots:r={},$$scope:i}=e,{withinPortal:s=!0,use:a=[],element:o=void 0,class:l="",target:c="body"}=e;function f(u){o=u,n(0,o)}return t.$$set=u=>{"withinPortal"in u&&n(1,s=u.withinPortal),"use"in u&&n(2,a=u.use),"element"in u&&n(0,o=u.element),"class"in u&&n(3,l=u.class),"target"in u&&n(4,c=u.target),"$$scope"in u&&n(7,i=u.$$scope)},[o,s,a,l,c,r,f,i]}class eu extends x{constructor(e){super(),Q(this,e,$c,xc,Z,{withinPortal:1,use:2,element:0,class:3,target:4})}}const tu=eu,nu=Le((t,{iconSize:e})=>({root:{focusRing:"auto",position:"relative",appearance:"none",WebkitAppearance:"none",WebkitTapHighlightColor:"transparent",boxSizing:"border-box",height:`${t.fn.size({size:e,sizes:t.space})}px`,minHeight:`${t.fn.size({size:e,sizes:t.space})}px`,width:`${t.fn.size({size:e,sizes:t.space})}px`,minWidth:`${t.fn.size({size:e,sizes:t.space})}px`,padding:0,lineHeight:1,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",textDecoration:"none"},icon:{height:`${t.fn.size({size:e,sizes:t.space})}px`,minHeight:`${t.fn.size({size:e,sizes:t.space})}px`,position:"static",margin:0,ml:0,mr:0,mt:0,mb:0}}));function ru(t){let e,n=(t[2]instanceof HTMLElement||t[2]instanceof SVGElement)&&Ii(t);return{c(){n&&n.c(),e=ve()},m(r,i){n&&n.m(r,i),A(r,e,i)},p(r,i){r[2]instanceof HTMLElement||r[2]instanceof SVGElement?n?n.p(r,i):(n=Ii(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},i:ne,o:ne,d(r){n&&n.d(r),r&&C(e)}}}function iu(t){let e,n,r;const i=[{class:t[5](t[0],t[4]({css:t[1]}))},t[3]];var s=t[2];function a(o){let l={};for(let c=0;c<i.length;c+=1)l=M(l,i[c]);return{props:l}}return s&&(e=ut(s,a())),{c(){e&&D(e.$$.fragment),n=ve()},m(o,l){e&&P(e,o,l),A(o,n,l),r=!0},p(o,l){const c=l&59?ae(i,[l&51&&{class:o[5](o[0],o[4]({css:o[1]}))},l&8&&ke(o[3])]):{};if(l&4&&s!==(s=o[2])){if(e){ce();const f=e;k(f.$$.fragment,1,0,()=>{N(f,1)}),ue()}s?(e=ut(s,a()),D(e.$$.fragment),y(e.$$.fragment,1),P(e,n.parentNode,n)):e=null}else s&&e.$set(c)},i(o){r||(e&&y(e.$$.fragment,o),r=!0)},o(o){e&&k(e.$$.fragment,o),r=!1},d(o){o&&C(n),e&&N(e,o)}}}function Ii(t){let e,n=t[2].outerHTML+"",r;return{c(){e=te("span"),m(e,"class",r=t[5](t[0],t[4]({css:t[1]})))},m(i,s){A(i,e,s),e.innerHTML=n},p(i,s){s&4&&n!==(n=i[2].outerHTML+"")&&(e.innerHTML=n),s&51&&r!==(r=i[5](i[0],i[4]({css:i[1]})))&&m(e,"class",r)},d(i){i&&C(e)}}}function su(t){let e,n,r,i;const s=[iu,ru],a=[];function o(l,c){return typeof l[2]=="function"?0:l[6]?-1:1}return~(e=o(t))&&(n=a[e]=s[e](t)),{c(){n&&n.c(),r=ve()},m(l,c){~e&&a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let f=e;e=o(l),e===f?~e&&a[e].p(l,c):(n&&(ce(),k(a[f],1,1,()=>{a[f]=null}),ue()),~e?(n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r)):n=null)},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){~e&&a[e].d(l),l&&C(r)}}}function ou(t,e,n){let r,i,s,{className:a="",override:o={},icon:l=void 0,iconSize:c=16,iconProps:f={}}=e;const u=typeof HTMLElement>"u"&&typeof SVGElement>"u";return t.$$set=d=>{"className"in d&&n(0,a=d.className),"override"in d&&n(1,o=d.override),"icon"in d&&n(2,l=d.icon),"iconSize"in d&&n(7,c=d.iconSize),"iconProps"in d&&n(3,f=d.iconProps)},t.$$.update=()=>{t.$$.dirty&128&&n(5,{cx:r,getStyles:i,classes:s}=nu({iconSize:c},{name:"IconRenderer"}),r,(n(4,i),n(7,c)),(n(8,s),n(7,c))),t.$$.dirty&260&&!u&&(l instanceof HTMLElement||l instanceof SVGElement)&&l.classList.add(...s.icon.split(" "))},[a,o,l,f,i,r,u,c,s]}class au extends x{constructor(e){super(),Q(this,e,ou,su,Z,{className:0,override:1,icon:2,iconSize:7,iconProps:3})}}const lu=au;function Si(t,e,n,r=!1){if(t==="dimmed")return r?"$dark200":"$gray600";if(e==="gradient"||n)return`$${t}600`;if(e==="link")return r?"$blue400":"$blue700";if(e==="text")return r?`$${t}500`:`$${t}700`}const cu=Le((t,{align:e,color:n,inherit:r,inline:i,lineClamp:s,size:a,tracking:o,transform:l,underline:c,weight:f,gradient:u,variant:d})=>{var h;return{root:{focusRing:"auto",[`${t.dark} &`]:{color:n==="dark"?"$dark50":Si(n,d,u,!0)},fontFamily:r?"inherit":"$standard",fontSize:r?"inherit":typeof a=="string"?`$${a}`:`${a}px`,fontWeight:r?"inherit":`$${f}`,letterSpacing:(h=t.letterSpacings[o])==null?void 0:h.value,lineHeight:r?"inherit":i?1:typeof a=="string"?`$${a}`:`${a}px`,textTransform:l,textDecoration:c?"underline":"none",textAlign:e,cursor:d==="link"?"pointer":"inherit",color:n==="green"?"Black":Si(n,d,u),backgroundImage:d==="gradient"?`linear-gradient(${u==null?void 0:u.deg}deg, $${u==null?void 0:u.from}600 0%, $${u==null?void 0:u.to}600 100%)`:null,WebkitBackgroundClip:d==="gradient"?"text":null,WebkitTextFillColor:d==="gradient"?"transparent":null,...s!==void 0?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:s,WebkitBoxOrient:"vertical"}:{},"&:hover":d==="link"&&c===!0?{textDecoration:"underline"}:void 0}}}),uu=Object.freeze([{error:!0,message:"If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",solution:`
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `},{error:!0,message:"If using the 'link' variant, an href needs to be set and the root must be an anchor",solution:`
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `}]);function fu(t){let e;const n=t[24].default,r=re(n,t,t[26],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&67108864)&&se(r,n,i,i[26],e?ie(n,i[26],s,null):oe(i[26]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function du(t){let e,n,r,i,s;e=new Or({props:{observable:t[6],component:"Text",code:t[7]}});const a=[{root:t[4]},{use:[t[10],[fe,t[1]]]},{class:t[9](t[2],t[8]({css:t[3]}))},{href:t[5]??void 0},t[11]];function o(c){t[25](c)}let l={$$slots:{default:[fu]},$$scope:{ctx:t}};for(let c=0;c<a.length;c+=1)l=M(l,a[c]);return t[0]!==void 0&&(l.element=t[0]),r=new ze({props:l}),$.push(()=>_e(r,"element",o)),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(c,f){P(e,c,f),A(c,n,f),P(r,c,f),s=!0},p(c,[f]){const u={};f&64&&(u.observable=c[6]),f&128&&(u.code=c[7]),e.$set(u);const d=f&3902?ae(a,[f&16&&{root:c[4]},f&1026&&{use:[c[10],[fe,c[1]]]},f&780&&{class:c[9](c[2],c[8]({css:c[3]}))},f&32&&{href:c[5]??void 0},f&2048&&ke(c[11])]):{};f&67108864&&(d.$$scope={dirty:f,ctx:c}),!i&&f&1&&(i=!0,d.element=c[0],Se(()=>i=!1)),r.$set(d)},i(c){s||(y(e.$$.fragment,c),y(r.$$.fragment,c),s=!0)},o(c){k(e.$$.fragment,c),k(r.$$.fragment,c),s=!1},d(c){N(e,c),c&&C(n),N(r,c)}}}function hu(t,e,n){let r,i;const s=["use","element","class","override","align","color","root","transform","variant","size","weight","gradient","inline","lineClamp","underline","inherit","href","tracking"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},align:h="left",color:g="dark",root:p=void 0,transform:b="none",variant:_="text",size:v="md",weight:w="normal",gradient:I={from:"indigo",to:"cyan",deg:45},inline:T=!0,lineClamp:O=void 0,underline:E=!1,inherit:V=!1,href:q="",tracking:R="normal"}=e;const S=He(Re());let G=!1,z;I.from==="indigo"&&I.to==="cyan0"&&I.deg===45&&_!=="gradient"&&(G=!0,z=uu[0]);function j(F){f=F,n(0,f)}return t.$$set=F=>{e=M(M({},e),ye(F)),n(11,a=X(e,s)),"use"in F&&n(1,c=F.use),"element"in F&&n(0,f=F.element),"class"in F&&n(2,u=F.class),"override"in F&&n(3,d=F.override),"align"in F&&n(12,h=F.align),"color"in F&&n(13,g=F.color),"root"in F&&n(4,p=F.root),"transform"in F&&n(14,b=F.transform),"variant"in F&&n(15,_=F.variant),"size"in F&&n(16,v=F.size),"weight"in F&&n(17,w=F.weight),"gradient"in F&&n(18,I=F.gradient),"inline"in F&&n(19,T=F.inline),"lineClamp"in F&&n(20,O=F.lineClamp),"underline"in F&&n(21,E=F.underline),"inherit"in F&&n(22,V=F.inherit),"href"in F&&n(5,q=F.href),"tracking"in F&&n(23,R=F.tracking),"$$scope"in F&&n(26,l=F.$$scope)},t.$$.update=()=>{t.$$.dirty&16773120&&n(9,{cx:r,getStyles:i}=cu({lineClamp:O,underline:E,inline:T,inherit:V,gradient:I,variant:_,align:h,color:g,transform:b,size:v,weight:w,tracking:R},{name:"Text"}),r,(n(8,i),n(20,O),n(21,E),n(19,T),n(22,V),n(18,I),n(15,_),n(12,h),n(13,g),n(14,b),n(16,v),n(17,w),n(23,R)))},[f,c,u,d,p,q,G,z,i,r,S,a,h,g,b,_,v,w,I,T,O,E,V,R,o,j,l]}class mu extends x{constructor(e){super(),Q(this,e,hu,du,Z,{use:1,element:0,class:2,override:3,align:12,color:13,root:4,transform:14,variant:15,size:16,weight:17,gradient:18,inline:19,lineClamp:20,underline:21,inherit:22,href:5,tracking:23})}}const Lr=mu,Ei={xs:{height:30,padding:"0px 14px"},sm:{height:36,padding:"0px 18px"},md:{height:42,padding:"0px 22px"},lg:{height:50,padding:"0px 26px"},xl:{height:60,padding:"0px 32px"},"compact-xs":{height:22,padding:"0 7px"},"compact-sm":{height:26,padding:"0 8px"},"compact-md":{height:30,padding:"0 10px"},"compact-lg":{height:34,padding:"0 12px"},"compact-xl":{height:40,padding:"0 14px"}},gu=Le((t,{color:e,compact:n,fullSize:r,gradient:i,radius:s,size:a,variant:o})=>({root:{focusRing:"auto",cursor:"pointer",position:"relative",boxSizing:"border-box",textDecoration:"none",outline:"none",userSelect:"none",appearance:"none",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center",background:null,borderRadius:typeof s=="number"?s:`$${s}`,height:typeof a=="number"?`${a}px`:Ei[n?`compact-${a}`:a].height,padding:typeof a=="number"?`0px ${a}px`:Ei[n?`compact-${a}`:a].padding,fontFamily:"$standard",fontWeight:"$SemiBold",fontSize:`$${a}`,lineHeight:1,flexGrow:0,width:r?"100%":"auto","&:hover":{backgroundColor:o==="gradient"?null:t.fn.themeColor(e,7),backgroundSize:o==="gradient"?"200%":null},"&:active":{transform:"translateY(1px)"},"&.disabled":{pointerEvents:"none",borderColor:"transparent",backgroundColor:"rgb(233, 236, 239)",background:"rgb(233, 236, 239)",color:"rgb(173, 181, 189)",cursor:"not-allowed"},"&.loading":{pointerEvents:"none","&::before":{content:'""',position:"absolute",inset:-1,backgroundColor:"rgba(255, 255, 255, .5)",borderRadius:`$${s}`,cursor:"not-allowed"}}},variants:{variation:Ks(e,i)}})),Ti=Object.freeze([{error:!0,message:"If using the disabled prop, a loading cannot be set at the same time",solution:`
                If your component looks like this:
                
                &lt;Button disabled loading ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ ^^^^^^^ - Try removing one of these
                `},{error:!0,message:"If using the external prop, a href prop must be associated with it. If you have an href prop there must be content inside.",solution:`
                If your component looks like this:
                
                &lt;Button external ...&gt; Button Text &lt;/Button&gt;
                         ^^^^^^^^ - Try adding the href prop too
                `}]);function pu(t){let e;return{c(){e=te("div"),m(e,"class","ripple svelte-3pkhve")},m(n,r){A(n,e,r),t[4](e)},p:ne,i:ne,o:ne,d(n){n&&C(e),t[4](null)}}}function bu(t){return t.constructor.name==="TouchEvent"}function wi(t,e){t.style.transform=e,t.style.webkitTransform=e}function sr(t,e){t.style.opacity=e.toString()}const _u=(t,e)=>{const n=e.getBoundingClientRect(),r=bu(t)?t.touches[t.touches.length-1]:t,i=r.clientX-n.left,s=r.clientY-n.top;let a=0,o=.3;const l=e.dataset.center;e.dataset.circle?(o=.15,a=e.clientWidth/2,a=l?a:a+Math.sqrt((i-a)**2+(s-a)**2)/4):a=Math.sqrt(e.clientWidth**2+e.clientHeight**2)/2;const f=`${(e.clientWidth-a*2)/2}px`,u=`${(e.clientHeight-a*2)/2}px`,d=l?f:`${i-a}px`,h=l?u:`${s-a}px`;return{radius:a,scale:o,x:d,y:h,centerX:f,centerY:u}},$s=function(t,e){const n=["touchcancel","mouseleave","dragstart"];let r=e.currentTarget||e.target;if(r&&!r.classList.contains("ripple")&&(r=r.querySelector(".ripple")),!r)return;const i=r.dataset.event;if(i&&i!==t)return;r.dataset.event=t;const s=document.createElement("span"),{radius:a,scale:o,x:l,y:c,centerX:f,centerY:u}=_u(e,r),d=r.dataset.color,h=`${a*2}px`;s.className="animation",s.style.width=h,s.style.height=h,s.style.background=d,s.classList.add("animation-enter"),s.classList.add("animation--visible"),wi(s,`translate(${l}, ${c}) scale3d(${o},${o},${o})`),sr(s,0),s.dataset.activated=String(performance.now()),r.appendChild(s),setTimeout(()=>{s.classList.remove("animation-enter"),s.classList.add("animation-in"),wi(s,`translate(${f}, ${u}) scale3d(1,1,1)`),sr(s,.25)},0);const g=t==="mousedown"?"mouseup":"touchend",p=function(){document.removeEventListener(g,p),n.forEach(v=>{document.removeEventListener(v,p)});const b=performance.now()-Number(s.dataset.activated),_=Math.max(250-b,0);setTimeout(()=>{s.classList.remove("animation-in"),s.classList.add("animation-out"),sr(s,0),setTimeout(()=>{s&&r.removeChild(s),r.children.length===0&&delete r.dataset.event},300)},_)};document.addEventListener(g,p),n.forEach(b=>{document.addEventListener(b,p,{passive:!0})})},Ri=function(t){t.button===0&&$s(t.type,t)},Ci=function(t){if(t.changedTouches)for(let e=0;e<t.changedTouches.length;++e)$s(t.type,t.changedTouches[e])};function yu(t,e,n){let{center:r=!1}=e,{circle:i=!1}=e,{color:s="currentColor"}=e,a,o;Ar(async()=>{await Hs();try{r&&n(0,a.dataset.center="true",a),i&&n(0,a.dataset.circle="true",a),n(0,a.dataset.color=s,a),o=a.parentElement}catch{}if(!o){console.error("Ripple: Trigger element not found.");return}let c=window.getComputedStyle(o);(c.position.length===0||c.position==="static")&&(o.style.position="relative"),o.addEventListener("touchstart",Ci,{passive:!0}),o.addEventListener("mousedown",Ri,{passive:!0})}),Aa(()=>{o&&(o.removeEventListener("mousedown",Ri),o.removeEventListener("touchstart",Ci))});function l(c){$[c?"unshift":"push"](()=>{a=c,n(0,a)})}return t.$$set=c=>{"center"in c&&n(1,r=c.center),"circle"in c&&n(2,i=c.circle),"color"in c&&n(3,s=c.color)},[a,r,i,s,l]}class ku extends x{constructor(e){super(),Q(this,e,yu,pu,Z,{center:1,circle:2,color:3})}}const eo=ku;const vu=t=>({}),Ai=t=>({}),Iu=t=>({}),Oi=t=>({}),Su=t=>({}),Pi=t=>({}),Eu=t=>({}),Ni=t=>({});function Tu(t){let e,n,r,i,s,a,o,l,c,f,u,d,h;const g=[Cu,Ru],p=[];function b(R,S){return R[11]&&R[5]==="left"?0:R[20].leftIcon?1:-1}~(n=b(t))&&(r=p[n]=g[n](t));const _=t[27].default,v=re(_,t,t[26],null),w=v||Ou();let I=t[13]&&Di();const T=[Nu,Pu],O=[];function E(R,S){return R[11]&&R[5]==="right"?0:R[20].rightIcon?1:-1}~(o=E(t))&&(l=O[o]=T[o](t));let V=[{class:c=t[16](t[3],t[17]({css:t[1],variation:t[4]}),{disabled:t[9],loading:t[11]})},{disabled:t[9]},t[19],{tabindex:"0"}],q={};for(let R=0;R<V.length;R+=1)q=M(q,V[R]);return{c(){e=te("button"),r&&r.c(),i=he(),w&&w.c(),s=he(),I&&I.c(),a=he(),l&&l.c(),De(e,q),me(e,"compact",t[10]),me(e,"uppercase",t[12]),me(e,"svelte-1n9fp7y",!0)},m(R,S){A(R,e,S),~n&&p[n].m(e,null),J(e,i),w&&w.m(e,null),J(e,s),I&&I.m(e,null),J(e,a),~o&&O[o].m(e,null),e.autofocus&&e.focus(),t[29](e),u=!0,d||(h=[ge(f=fe.call(null,e,t[2])),ge(t[18].call(null,e))],d=!0)},p(R,S){let G=n;n=b(R),n===G?~n&&p[n].p(R,S):(r&&(ce(),k(p[G],1,1,()=>{p[G]=null}),ue()),~n?(r=p[n],r?r.p(R,S):(r=p[n]=g[n](R),r.c()),y(r,1),r.m(e,i)):r=null),v&&v.p&&(!u||S&67108864)&&se(v,_,R,R[26],u?ie(_,R[26],S,null):oe(R[26]),null),R[13]?I?S&8192&&y(I,1):(I=Di(),I.c(),y(I,1),I.m(e,a)):I&&(ce(),k(I,1,1,()=>{I=null}),ue());let z=o;o=E(R),o===z?~o&&O[o].p(R,S):(l&&(ce(),k(O[z],1,1,()=>{O[z]=null}),ue()),~o?(l=O[o],l?l.p(R,S):(l=O[o]=T[o](R),l.c()),y(l,1),l.m(e,null)):l=null),De(e,q=ae(V,[(!u||S&199194&&c!==(c=R[16](R[3],R[17]({css:R[1],variation:R[4]}),{disabled:R[9],loading:R[11]})))&&{class:c},(!u||S&512)&&{disabled:R[9]},S&524288&&R[19],{tabindex:"0"}])),f&&Ie(f.update)&&S&4&&f.update.call(null,R[2]),me(e,"compact",R[10]),me(e,"uppercase",R[12]),me(e,"svelte-1n9fp7y",!0)},i(R){u||(y(r),y(w,R),y(I),y(l),u=!0)},o(R){k(r),k(w,R),k(I),k(l),u=!1},d(R){R&&C(e),~n&&p[n].d(),w&&w.d(R),I&&I.d(),~o&&O[o].d(),t[29](null),d=!1,Ae(h)}}}function wu(t){let e,n,r,i,s,a,o,l,c,f,u,d,h,g;const p=[Mu,Lu],b=[];function _(S,G){return S[11]&&S[5]==="left"?0:S[20].leftIcon?1:-1}~(n=_(t))&&(r=b[n]=p[n](t));const v=t[27].default,w=re(v,t,t[26],null),I=w||Bu();let T=t[13]&&Li();const O=[Wu,Uu],E=[];function V(S,G){return S[11]&&S[5]==="right"?0:S[20].rightIcon?1:-1}~(o=V(t))&&(l=E[o]=O[o](t));let q=[{href:t[7]},{class:c=t[16](t[3],t[17]({css:t[1],variation:t[4]}),{disabled:t[9],loading:t[11]})},{role:"button"},{rel:"noreferrer noopener"},{target:f=t[8]?"_blank":"_self"},t[19],{tabindex:"0"}],R={};for(let S=0;S<q.length;S+=1)R=M(R,q[S]);return{c(){e=te("a"),r&&r.c(),i=he(),I&&I.c(),s=he(),T&&T.c(),a=he(),l&&l.c(),De(e,R),me(e,"compact",t[10]),me(e,"uppercase",t[12]),me(e,"svelte-1n9fp7y",!0)},m(S,G){A(S,e,G),~n&&b[n].m(e,null),J(e,i),I&&I.m(e,null),J(e,s),T&&T.m(e,null),J(e,a),~o&&E[o].m(e,null),t[28](e),d=!0,h||(g=[ge(u=fe.call(null,e,t[2])),ge(t[18].call(null,e))],h=!0)},p(S,G){let z=n;n=_(S),n===z?~n&&b[n].p(S,G):(r&&(ce(),k(b[z],1,1,()=>{b[z]=null}),ue()),~n?(r=b[n],r?r.p(S,G):(r=b[n]=p[n](S),r.c()),y(r,1),r.m(e,i)):r=null),w&&w.p&&(!d||G&67108864)&&se(w,v,S,S[26],d?ie(v,S[26],G,null):oe(S[26]),null),S[13]?T?G&8192&&y(T,1):(T=Li(),T.c(),y(T,1),T.m(e,a)):T&&(ce(),k(T,1,1,()=>{T=null}),ue());let j=o;o=V(S),o===j?~o&&E[o].p(S,G):(l&&(ce(),k(E[j],1,1,()=>{E[j]=null}),ue()),~o?(l=E[o],l?l.p(S,G):(l=E[o]=O[o](S),l.c()),y(l,1),l.m(e,null)):l=null),De(e,R=ae(q,[(!d||G&128)&&{href:S[7]},(!d||G&199194&&c!==(c=S[16](S[3],S[17]({css:S[1],variation:S[4]}),{disabled:S[9],loading:S[11]})))&&{class:c},{role:"button"},{rel:"noreferrer noopener"},(!d||G&256&&f!==(f=S[8]?"_blank":"_self"))&&{target:f},G&524288&&S[19],{tabindex:"0"}])),u&&Ie(u.update)&&G&4&&u.update.call(null,S[2]),me(e,"compact",S[10]),me(e,"uppercase",S[12]),me(e,"svelte-1n9fp7y",!0)},i(S){d||(y(r),y(I,S),y(T),y(l),d=!0)},o(S){k(r),k(I,S),k(T),k(l),d=!1},d(S){S&&C(e),~n&&b[n].d(),I&&I.d(S),T&&T.d(),~o&&E[o].d(),t[28](null),h=!1,Ae(g)}}}function Ru(t){let e,n;const r=t[27].leftIcon,i=re(r,t,t[26],Oi),s=i||Au();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-left svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&se(i,r,a,a[26],n?ie(r,a[26],o,Iu):oe(a[26]),Oi)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&C(e),s&&s.d(a)}}}function Cu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),D(n.$$.fragment),m(e,"class","loader-left svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&C(e),N(n)}}}function Au(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Ou(t){let e;return{c(){e=we("Button")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Di(t){let e,n;return e=new eo({props:{center:!1,circle:!1}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Pu(t){let e,n;const r=t[27].rightIcon,i=re(r,t,t[26],Ai),s=i||Du();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-right svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&se(i,r,a,a[26],n?ie(r,a[26],o,vu):oe(a[26]),Ai)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&C(e),s&&s.d(a)}}}function Nu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),D(n.$$.fragment),m(e,"class","loader-right svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&C(e),N(n)}}}function Du(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Lu(t){let e,n;const r=t[27].leftIcon,i=re(r,t,t[26],Ni),s=i||zu();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-left svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&se(i,r,a,a[26],n?ie(r,a[26],o,Eu):oe(a[26]),Ni)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&C(e),s&&s.d(a)}}}function Mu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),D(n.$$.fragment),m(e,"class","loader-left svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&C(e),N(n)}}}function zu(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Bu(t){let e;return{c(){e=we("Button")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Li(t){let e,n;return e=new eo({props:{center:!1,circle:!1}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Uu(t){let e,n;const r=t[27].rightIcon,i=re(r,t,t[26],Pi),s=i||ju();return{c(){e=te("span"),s&&s.c(),m(e,"class","loader-right svelte-1n9fp7y")},m(a,o){A(a,e,o),s&&s.m(e,null),n=!0},p(a,o){i&&i.p&&(!n||o&67108864)&&se(i,r,a,a[26],n?ie(r,a[26],o,Su):oe(a[26]),Pi)},i(a){n||(y(s,a),n=!0)},o(a){k(s,a),n=!1},d(a){a&&C(e),s&&s.d(a)}}}function Wu(t){let e,n,r;return n=new sn({props:{variant:t[6].variant,size:t[6].size,color:t[6].color}}),{c(){e=te("span"),D(n.$$.fragment),m(e,"class","loader-right svelte-1n9fp7y")},m(i,s){A(i,e,s),P(n,e,null),r=!0},p(i,s){const a={};s&64&&(a.variant=i[6].variant),s&64&&(a.size=i[6].size),s&64&&(a.color=i[6].color),n.$set(a)},i(i){r||(y(n.$$.fragment,i),r=!0)},o(i){k(n.$$.fragment,i),r=!1},d(i){i&&C(e),N(n)}}}function ju(t){let e;return{c(){e=we("X")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Fu(t){let e,n,r,i,s,a;e=new Or({props:{observable:t[14],component:"Button",code:t[15]}});const o=[wu,Tu],l=[];function c(f,u){return f[7]&&!f[9]?0:1}return r=c(t),i=l[r]=o[r](t),{c(){D(e.$$.fragment),n=he(),i.c(),s=ve()},m(f,u){P(e,f,u),A(f,n,u),l[r].m(f,u),A(f,s,u),a=!0},p(f,[u]){const d={};u&16384&&(d.observable=f[14]),u&32768&&(d.code=f[15]),e.$set(d);let h=r;r=c(f),r===h?l[r].p(f,u):(ce(),k(l[h],1,1,()=>{l[h]=null}),ue(),i=l[r],i?i.p(f,u):(i=l[r]=o[r](f),i.c()),y(i,1),i.m(s.parentNode,s))},i(f){a||(y(e.$$.fragment,f),y(i),a=!0)},o(f){k(e.$$.fragment,f),k(i),a=!1},d(f){N(e,f),f&&C(n),l[r].d(f),f&&C(s)}}}function Hu(t,e,n){let r,i;const s=["use","element","class","override","variant","color","size","radius","gradient","loaderPosition","loaderProps","href","external","disabled","compact","loading","uppercase","fullSize","ripple"];let a=X(e,s),{$$slots:o={},$$scope:l}=e;const c=Ls(o);let{use:f=[],element:u=void 0,class:d="",override:h={},variant:g="filled",color:p="blue",size:b="sm",radius:_="sm",gradient:v={from:"indigo",to:"cyan",deg:45},loaderPosition:w="left",loaderProps:I={size:"xs",color:"white",variant:"circle"},href:T=null,external:O=!1,disabled:E=!1,compact:V=!1,loading:q=!1,uppercase:R=!1,fullSize:S=!1,ripple:G=!1}=e;const z=He(Re());let j=!1,F;E&&q&&(j=!0,F=Ti[0]),(O&&typeof T!="string"||(T==null?void 0:T.length)<1)&&(j=!0,F=Ti[1]);function Me(U){$[U?"unshift":"push"](()=>{u=U,n(0,u)})}function Ee(U){$[U?"unshift":"push"](()=>{u=U,n(0,u)})}return t.$$set=U=>{e=M(M({},e),ye(U)),n(19,a=X(e,s)),"use"in U&&n(2,f=U.use),"element"in U&&n(0,u=U.element),"class"in U&&n(3,d=U.class),"override"in U&&n(1,h=U.override),"variant"in U&&n(4,g=U.variant),"color"in U&&n(21,p=U.color),"size"in U&&n(22,b=U.size),"radius"in U&&n(23,_=U.radius),"gradient"in U&&n(24,v=U.gradient),"loaderPosition"in U&&n(5,w=U.loaderPosition),"loaderProps"in U&&n(6,I=U.loaderProps),"href"in U&&n(7,T=U.href),"external"in U&&n(8,O=U.external),"disabled"in U&&n(9,E=U.disabled),"compact"in U&&n(10,V=U.compact),"loading"in U&&n(11,q=U.loading),"uppercase"in U&&n(12,R=U.uppercase),"fullSize"in U&&n(25,S=U.fullSize),"ripple"in U&&n(13,G=U.ripple),"$$scope"in U&&n(26,l=U.$$scope)},t.$$.update=()=>{t.$$.dirty&16384&&j&&n(1,h={display:"none"}),t.$$.dirty&65012752&&n(17,{getStyles:r,cx:i}=gu({color:p,compact:V,fullSize:S,gradient:v,radius:_,size:b,variant:g},{name:"Button"}),r,(n(16,i),n(21,p),n(10,V),n(25,S),n(24,v),n(23,_),n(22,b),n(4,g)))},[u,h,f,d,g,w,I,T,O,E,V,q,R,G,j,F,i,r,z,a,c,p,b,_,v,S,l,o,Me,Ee]}class Vu extends x{constructor(e){super(),Q(this,e,Hu,Fu,Z,{use:2,element:0,class:3,override:1,variant:4,color:21,size:22,radius:23,gradient:24,loaderPosition:5,loaderProps:6,href:7,external:8,disabled:9,compact:10,loading:11,uppercase:12,fullSize:25,ripple:13})}}const jn=Vu,qu=Le((t,{radius:e,shadow:n,withBorder:r,padding:i})=>({root:{[`${t.dark} &`]:{bc:t.colors.dark700.value,color:t.colors.dark50.value,border:r?`1px solid ${t.colors.dark600.value}`:void 0},padding:t.fn.size({size:i,sizes:t.space}),outline:0,display:"block",textDecoration:"none",color:"black",backgroundColor:"white",boxSizing:"border-box",borderRadius:`$${e}`,WebkitTapHighlightColor:"transparent",boxShadow:t.shadows[n].value||n||"none",border:r?`1px solid ${t.colors.gray200.value}`:void 0}}));function Gu(t){let e;const n=t[11].default,r=re(n,t,t[13],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&8192)&&se(r,n,i,i[13],e?ie(n,i[13],s,null):oe(i[13]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Ku(t){let e,n,r;const i=[{class:t[5](t[2],t[4]({css:t[3]}))},{use:t[1]},t[6]];function s(o){t[12](o)}let a={$$slots:{default:[Gu]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&2&&{use:o[1]},l&64&&ke(o[6])]):{};l&8192&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Ju(t,e,n){let r,i;const s=["use","element","class","override","shadow","radius","withBorder","padding"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},shadow:h="xs",radius:g="sm",withBorder:p=!1,padding:b="md"}=e;function _(v){f=v,n(0,f)}return t.$$set=v=>{e=M(M({},e),ye(v)),n(6,a=X(e,s)),"use"in v&&n(1,c=v.use),"element"in v&&n(0,f=v.element),"class"in v&&n(2,u=v.class),"override"in v&&n(3,d=v.override),"shadow"in v&&n(7,h=v.shadow),"radius"in v&&n(8,g=v.radius),"withBorder"in v&&n(9,p=v.withBorder),"padding"in v&&n(10,b=v.padding),"$$scope"in v&&n(13,l=v.$$scope)},t.$$.update=()=>{t.$$.dirty&1920&&n(5,{cx:r,getStyles:i}=qu({radius:g,shadow:h,withBorder:p,padding:b},{name:"Paper"}),r,(n(4,i),n(8,g),n(7,h),n(9,p),n(10,b)))},[f,c,u,d,i,r,a,h,g,p,b,o,_,l]}class Xu extends x{constructor(e){super(),Q(this,e,Ju,Ku,Z,{use:1,element:0,class:2,override:3,shadow:7,radius:8,withBorder:9,padding:10})}}const Yu=Xu,Zu=Le((t,{inline:e})=>({root:{display:e?"inline-flex":"flex",alignItems:"center",justifyContent:"center"}}));function Qu(t){let e;const n=t[8].default,r=re(n,t,t[10],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&1024)&&se(r,n,i,i[10],e?ie(n,i[10],s,null):oe(i[10]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function xu(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[9](o)}let a={$$slots:{default:[Qu]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&1024&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function $u(t,e,n){let r,i;const s=["use","element","class","override","inline"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},inline:h=!1}=e;function g(p){f=p,n(0,f)}return t.$$set=p=>{e=M(M({},e),ye(p)),n(6,a=X(e,s)),"use"in p&&n(1,c=p.use),"element"in p&&n(0,f=p.element),"class"in p&&n(2,u=p.class),"override"in p&&n(3,d=p.override),"inline"in p&&n(7,h=p.inline),"$$scope"in p&&n(10,l=p.$$scope)},t.$$.update=()=>{t.$$.dirty&128&&n(5,{cx:r,getStyles:i}=Zu({inline:h},{name:"Center"}),r,(n(4,i),n(7,h)))},[f,c,u,d,i,r,a,h,o,g,l]}class ef extends x{constructor(e){super(),Q(this,e,$u,xu,Z,{use:1,element:0,class:2,override:3,inline:7})}}const to=ef,Mi={left:"flex-start",center:"center",right:"flex-end",apart:"space-between"},tf=Le((t,{align:e,direction:n,grow:r,noWrap:i,position:s,spacing:a,children:o})=>({root:{boxSizing:"border-box",display:"flex",flexDirection:n,alignItems:e||(n==="row"?"center":r?"stretch":s==="apart"?"flex-start":Mi[s]),flexWrap:i?"nowrap":"wrap",justifyContent:n==="row"?Mi[s]:void 0,gap:t.fn.size({size:a,sizes:t.space}),"& > *":{boxSizing:"border-box",maxWidth:r&&n==="row"?`calc(${100/o}% - ${t.fn.size({size:a,sizes:t.space})-t.fn.size({size:a,sizes:t.space})/o}px)`:void 0,flexGrow:r?1:0}}}));function nf(t){let e;const n=t[14].default,r=re(n,t,t[16],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&65536)&&se(r,n,i,i[16],e?ie(n,i[16],s,null):oe(i[16]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function rf(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[15](o)}let a={$$slots:{default:[nf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&65536&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function sf(t,e,n){let r,i;const s=["use","element","class","override","position","noWrap","grow","spacing","direction","align"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},position:h="left",noWrap:g=!1,grow:p=!1,spacing:b="md",direction:_="row",align:v="center"}=e,w;function I(T){f=T,n(0,f)}return t.$$set=T=>{e=M(M({},e),ye(T)),n(6,a=X(e,s)),"use"in T&&n(1,c=T.use),"element"in T&&n(0,f=T.element),"class"in T&&n(2,u=T.class),"override"in T&&n(3,d=T.override),"position"in T&&n(7,h=T.position),"noWrap"in T&&n(8,g=T.noWrap),"grow"in T&&n(9,p=T.grow),"spacing"in T&&n(10,b=T.spacing),"direction"in T&&n(11,_=T.direction),"align"in T&&n(12,v=T.align),"$$scope"in T&&n(16,l=T.$$scope)},t.$$.update=()=>{t.$$.dirty&1&&Ar(()=>{n(13,w=f.childElementCount)}),t.$$.dirty&16256&&n(5,{cx:r,getStyles:i}=tf({align:v,children:w,direction:_,grow:p,noWrap:g,position:h,spacing:b},{name:"Group"}),r,(n(4,i),n(12,v),n(13,w),n(11,_),n(9,p),n(8,g),n(7,h),n(10,b),n(0,f)))},[f,c,u,d,i,r,a,h,g,p,b,_,v,w,o,I,l]}class of extends x{constructor(e){super(),Q(this,e,sf,rf,Z,{use:1,element:0,class:2,override:3,position:7,noWrap:8,grow:9,spacing:10,direction:11,align:12})}}const on=of,af=Le((t,{fluid:e,size:n,sizes:r})=>({root:{paddingLeft:t.fn.size({size:n,sizes:t.space}),paddingRight:t.fn.size({size:n,sizes:t.space}),maxWidth:e?"100%":typeof n=="number"?`${n}px`:r[n]??r.md,marginLeft:"auto",marginRight:"auto"}}));function lf(t){let e;const n=t[10].default,r=re(n,t,t[12],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&4096)&&se(r,n,i,i[12],e?ie(n,i[12],s,null):oe(i[12]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function cf(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[11](o)}let a={$$slots:{default:[lf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&4096&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function uf(t,e,n){let r,i;const s=["use","element","class","override","size","fluid","sizes"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},size:h="md",fluid:g=!1,sizes:p={xs:540,sm:720,md:960,lg:1140,xl:1320}}=e;function b(_){f=_,n(0,f)}return t.$$set=_=>{e=M(M({},e),ye(_)),n(6,a=X(e,s)),"use"in _&&n(1,c=_.use),"element"in _&&n(0,f=_.element),"class"in _&&n(2,u=_.class),"override"in _&&n(3,d=_.override),"size"in _&&n(7,h=_.size),"fluid"in _&&n(8,g=_.fluid),"sizes"in _&&n(9,p=_.sizes),"$$scope"in _&&n(12,l=_.$$scope)},t.$$.update=()=>{t.$$.dirty&896&&n(5,{cx:r,getStyles:i}=af({fluid:g,size:h,sizes:p},{name:"Container"}),r,(n(4,i),n(8,g),n(7,h),n(9,p)))},[f,c,u,d,i,r,a,h,g,p,o,b,l]}class ff extends x{constructor(e){super(),Q(this,e,uf,cf,Z,{use:1,element:0,class:2,override:3,size:7,fluid:8,sizes:9})}}const no=ff,df=jl({"from, to":{opacity:.4},"50%":{opacity:1}}),hf=Le((t,{animate:e,circle:n,height:r,radius:i,width:s})=>({root:{[`${t.dark} &`]:{"&.visible":{"&::before":{background:t.fn.themeColor("dark",7)},"&::after":{background:t.fn.themeColor("dark",4)}}},height:r,width:n?r:`${s}%`,borderRadius:n?r:`$${i}`,position:"relative",overflow:"hidden","&.visible":{"&::before":{content:'""',position:"absolute",background:"white",top:0,bottom:0,left:0,right:0,zIndex:10},"&::after":{content:'""',position:"absolute",background:t.fn.themeColor("gray",3),top:0,bottom:0,left:0,right:0,animation:e?`${df} 1500ms linear infinite`:"none",zIndex:11}}}}));function mf(t){let e;const n=t[13].default,r=re(n,t,t[15],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&32768)&&se(r,n,i,i[15],e?ie(n,i[15],s,null):oe(i[15]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function gf(t){let e,n,r;const i=[{class:t[6](t[2],{visible:t[4]},t[5]({css:t[3]}))},{use:t[1]},t[7]];function s(o){t[14](o)}let a={$$slots:{default:[mf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&254?ae(i,[l&124&&{class:o[6](o[2],{visible:o[4]},o[5]({css:o[3]}))},l&2&&{use:o[1]},l&128&&ke(o[7])]):{};l&32768&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function pf(t,e,n){let r,i;const s=["use","element","class","override","visible","height","width","circle","radius","animate"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},visible:h=!0,height:g="auto",width:p=100,circle:b=null,radius:_=null,animate:v=!0}=e;function w(I){f=I,n(0,f)}return t.$$set=I=>{e=M(M({},e),ye(I)),n(7,a=X(e,s)),"use"in I&&n(1,c=I.use),"element"in I&&n(0,f=I.element),"class"in I&&n(2,u=I.class),"override"in I&&n(3,d=I.override),"visible"in I&&n(4,h=I.visible),"height"in I&&n(8,g=I.height),"width"in I&&n(9,p=I.width),"circle"in I&&n(10,b=I.circle),"radius"in I&&n(11,_=I.radius),"animate"in I&&n(12,v=I.animate),"$$scope"in I&&n(15,l=I.$$scope)},t.$$.update=()=>{t.$$.dirty&7936&&n(6,{cx:r,getStyles:i}=hf({animate:v,circle:b,height:g,radius:_,width:p},{name:"Skeleton"}),r,(n(5,i),n(12,v),n(10,b),n(8,g),n(11,_),n(9,p)))},[f,c,u,d,h,i,r,a,g,p,b,_,v,o,w,l]}class bf extends x{constructor(e){super(),Q(this,e,pf,gf,Z,{use:1,element:0,class:2,override:3,visible:4,height:8,width:9,circle:10,radius:11,animate:12})}}const _f=bf,yf=Le((t,{radius:e,height:n,width:r,fit:i})=>({root:{},imageWrapper:{position:"relative"},figure:{margin:0},image:{width:r,height:n,fontFamily:"$standard",display:"block",border:0,borderRadius:t.fn.radius(e),objectFit:i},caption:{[`${t.dark} &`]:{color:t.fn.themeColor("dark",2)},color:t.fn.themeColor("gray",7),marginTop:t.space.xsPX.value},placeholder:{[`${t.dark} &`]:{color:t.fn.themeColor("dark",2),backgroundColor:t.fn.themeColor("dark",8)},width:r,height:n,position:"absolute",top:0,right:0,left:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:t.fn.themeColor("gray",6),backgroundColor:t.fn.themeColor("gray",0),borderRadius:t.fn.radius(e)}}));function kf(t){let e,n;return{c(){e=Y("svg"),n=Y("path"),m(n,"d","M2.5 1H12.5C13.3284 1 14 1.67157 14 2.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V2.5C1 1.67157 1.67157 1 2.5 1ZM2.5 2C2.22386 2 2 2.22386 2 2.5V8.3636L3.6818 6.6818C3.76809 6.59551 3.88572 6.54797 4.00774 6.55007C4.12975 6.55216 4.24568 6.60372 4.32895 6.69293L7.87355 10.4901L10.6818 7.6818C10.8575 7.50607 11.1425 7.50607 11.3182 7.6818L13 9.3636V2.5C13 2.22386 12.7761 2 12.5 2H2.5ZM2 12.5V9.6364L3.98887 7.64753L7.5311 11.4421L8.94113 13H2.5C2.22386 13 2 12.7761 2 12.5ZM12.5 13H10.155L8.48336 11.153L11 8.6364L13 10.6364V12.5C13 12.7761 12.7761 13 12.5 13ZM6.64922 5.5C6.64922 5.03013 7.03013 4.64922 7.5 4.64922C7.96987 4.64922 8.35078 5.03013 8.35078 5.5C8.35078 5.96987 7.96987 6.35078 7.5 6.35078C7.03013 6.35078 6.64922 5.96987 6.64922 5.5ZM7.5 3.74922C6.53307 3.74922 5.74922 4.53307 5.74922 5.5C5.74922 6.46693 6.53307 7.25078 7.5 7.25078C8.46693 7.25078 9.25078 6.46693 9.25078 5.5C9.25078 4.53307 8.46693 3.74922 7.5 3.74922Z"),m(n,"fill","currentColor"),m(n,"fill-rule","evenodd"),m(n,"clip-rule","evenodd"),m(e,"width","15"),m(e,"height","15"),m(e,"viewBox","0 0 15 15"),m(e,"fill","none"),m(e,"xmlns","http://www.w3.org/2000/svg"),Ke(e,"width",t[0].width),Ke(e,"height",t[0].height)},m(r,i){A(r,e,i),J(e,n)},p(r,[i]){i&1&&Ke(e,"width",r[0].width),i&1&&Ke(e,"height",r[0].height)},i:ne,o:ne,d(r){r&&C(e)}}}function vf(t,e,n){let{style:r={}}=e;return t.$$set=i=>{"style"in i&&n(0,r=i.style)},[r]}class If extends x{constructor(e){super(),Q(this,e,vf,kf,Z,{style:0})}}const Sf=If,Ef=t=>({}),zi=t=>({});function Tf(t){let e,n,r,i,s,a,o=[{class:n=t[11].image},{src:r=t[4]},{alt:t[5]},t[16]],l={};for(let c=0;c<o.length;c+=1)l=M(l,o[c]);return{c(){e=te("img"),De(e,l)},m(c,f){A(c,e,f),t[24](e),s||(a=[ge(i=fe.call(null,e,t[1])),ge(t[13].call(null,e)),ct(e,"load",t[14]),ct(e,"error",t[15])],s=!0)},p(c,f){De(e,l=ae(o,[f&2048&&n!==(n=c[11].image)&&{class:n},f&16&&!ua(e.src,r=c[4])&&{src:r},f&32&&{alt:c[5]},f&65536&&c[16]])),i&&Ie(i.update)&&f&2&&i.update.call(null,c[1])},d(c){c&&C(e),t[24](null),s=!1,Ae(a)}}}function Bi(t){let e,n,r;const i=t[23].placeholder,s=re(i,t,t[25],zi),a=s||wf();return{c(){e=te("div"),a&&a.c(),m(e,"class",n=t[11].placeholder),m(e,"title",t[5])},m(o,l){A(o,e,l),a&&a.m(e,null),r=!0},p(o,l){s&&s.p&&(!r||l&33554432)&&se(s,i,o,o[25],r?ie(i,o[25],l,Ef):oe(o[25]),zi),(!r||l&2048&&n!==(n=o[11].placeholder))&&m(e,"class",n),(!r||l&32)&&m(e,"title",o[5])},i(o){r||(y(a,o),r=!0)},o(o){k(a,o),r=!1},d(o){o&&C(e),a&&a.d(o)}}}function wf(t){let e,n;return e=new Sf({props:{style:{width:40,height:40}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p:ne,i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Ui(t){let e,n;return e=new Lr({props:{class:t[11].caption,root:"figcaption",size:"sm",align:"center",$$slots:{default:[Rf]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&2048&&(s.class=r[11].caption),i&33554496&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Rf(t){let e;return{c(){e=we(t[6])},m(n,r){A(n,e,r)},p(n,r){r&64&&Us(e,n[6])},d(n){n&&C(e)}}}function Cf(t){let e,n,r,i,s,a,o,l;r=new _f({props:{visible:t[7]?t[8]:!1,$$slots:{default:[Tf]},$$scope:{ctx:t}}});let c=t[9]&&Bi(t),f=t[6]&&Ui(t);return{c(){e=te("figure"),n=te("div"),D(r.$$.fragment),i=he(),c&&c.c(),a=he(),f&&f.c(),m(n,"class",s=t[11].imageWrapper),m(e,"class",o=t[11].figure)},m(u,d){A(u,e,d),J(e,n),P(r,n,null),J(n,i),c&&c.m(n,null),J(e,a),f&&f.m(e,null),l=!0},p(u,d){const h={};d&384&&(h.visible=u[7]?u[8]:!1),d&33622067&&(h.$$scope={dirty:d,ctx:u}),r.$set(h),u[9]?c?(c.p(u,d),d&512&&y(c,1)):(c=Bi(u),c.c(),y(c,1),c.m(n,null)):c&&(ce(),k(c,1,1,()=>{c=null}),ue()),(!l||d&2048&&s!==(s=u[11].imageWrapper))&&m(n,"class",s),u[6]?f?(f.p(u,d),d&64&&y(f,1)):(f=Ui(u),f.c(),y(f,1),f.m(e,null)):f&&(ce(),k(f,1,1,()=>{f=null}),ue()),(!l||d&2048&&o!==(o=u[11].figure))&&m(e,"class",o)},i(u){l||(y(r.$$.fragment,u),y(c),y(f),l=!0)},o(u){k(r.$$.fragment,u),k(c),k(f),l=!1},d(u){u&&C(e),N(r),c&&c.d(),f&&f.d()}}}function Af(t){let e,n;return e=new ze({props:{class:t[12](t[3],t[10]({css:t[2]})),$$slots:{default:[Cf]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&5132&&(s.class=r[12](r[3],r[10]({css:r[2]}))),i&33623027&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Of(t,e,n){let r,i,s;const a=["use","element","override","radius","class","src","alt","fit","width","height","caption","usePlaceholder","loader"];let o=X(e,a),{$$slots:l={},$$scope:c}=e,{use:f=[],element:u=void 0,override:d={},radius:h=0,class:g="",src:p=void 0,alt:b="",fit:_="cover",width:v="100%",height:w="auto",caption:I=void 0,usePlaceholder:T=!1,loader:O=!1}=e;const E=He(Re());let V=!1,q=!1,R=!1;const S=()=>n(8,V=!0),G=()=>n(22,q=!0);function z(j){$[j?"unshift":"push"](()=>{u=j,n(0,u)})}return t.$$set=j=>{e=M(M({},e),ye(j)),n(16,o=X(e,a)),"use"in j&&n(1,f=j.use),"element"in j&&n(0,u=j.element),"override"in j&&n(2,d=j.override),"radius"in j&&n(17,h=j.radius),"class"in j&&n(3,g=j.class),"src"in j&&n(4,p=j.src),"alt"in j&&n(5,b=j.alt),"fit"in j&&n(18,_=j.fit),"width"in j&&n(19,v=j.width),"height"in j&&n(20,w=j.height),"caption"in j&&n(6,I=j.caption),"usePlaceholder"in j&&n(21,T=j.usePlaceholder),"loader"in j&&n(7,O=j.loader),"$$scope"in j&&n(25,c=j.$$scope)},t.$$.update=()=>{t.$$.dirty&6291712&&n(9,R=T&&(!V||q)),t.$$.dirty&1966080&&n(12,{cx:r,classes:i,getStyles:s}=yf({radius:h,fit:_,height:w,width:v},{name:"Image"}),r,(n(11,i),n(17,h),n(18,_),n(20,w),n(19,v)),(n(10,s),n(17,h),n(18,_),n(20,w),n(19,v)))},[u,f,d,g,p,b,I,O,V,R,s,i,r,E,S,G,o,h,_,v,w,T,q,l,z,c]}class Pf extends x{constructor(e){super(),Q(this,e,Of,Af,Z,{use:1,element:0,override:2,radius:17,class:3,src:4,alt:5,fit:18,width:19,height:20,caption:6,usePlaceholder:21,loader:7})}}const Mr=Pf,We={xs:30,sm:36,md:42,lg:50,xl:60},Nf=Le((t,{icon:e,iconWidth:n,invalid:r,multiline:i,radius:s,rightSectionWidth:a,size:o,variant:l,showRightSection:c})=>({root:{darkMode:{"& .input":l==="headless"?{}:{color:"$dark50"},"&:disabled":{backgroundColor:"$dark600"},"&::placeholder":{color:"$dark300"}},position:"relative"},input:l==="headless"?{}:{height:i?l==="unstyled"?void 0:"auto":typeof o=="number"?`${o}px`:We[o]??We.md,WebkitTapHighlightColor:"transparent",lineHeight:i?"$md":`${We[o]-2}px`,appearance:"none",resize:"none",boxSizing:"border-box",fontSize:typeof o=="number"?`${o}px`:`${o}`,width:"100%",color:"Black",display:"block",textAlign:"left",minHeight:l==="default"||l==="filled"?We[o]??We.md:null,paddingLeft:l==="default"&&e||l==="filled"&&e?We[o]??We.md/3:12,paddingRight:(l==="default"||l==="filled")&&c?a:null,borderRadius:l==="default"||l==="filled"?`$${s}`:null,"&:disabled":{backgroundColor:"$gray100",color:"$dark200",opacity:.6,cursor:"not-allowed","&::placeholder":{color:"$dark200"}},"&::placeholder":{opacity:1,userSelect:"none",color:"$gray500"},"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button, &::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":{appearance:"none"},"&[type=number]":{MozAppearance:"textfield"},"&.defaultVariant":{[`${t.dark} &`]:{border:"1px solid $dark500",backgroundColor:"$dark800","&:focus, &:focus-within":{borderColor:"$blue800"}},border:"1px solid $gray400",backgroundColor:"White",transition:"border-color 100ms ease","&:focus, &:focus-within":{outline:"none",borderColor:"$blue500"}},"&.filledVariant":{[`${t.dark} &`]:{backgroundColor:"$dark500","&:focus, &:focus-within":{borderColor:"$blue800 !important"}},border:"1px solid transparent",backgroundColor:"$gray100","&:focus, &:focus-within":{outline:"none",borderColor:"$blue500 !important"}},"&.unstyledVariant":{[`${t.dark} &`]:{color:"$dark50"},borderWidth:0,color:"Black",backgroundColor:"transparent",minHeight:28,outline:0,"&:focus, &:focus-within":{outline:"none",borderColor:"transparent"},"&:disabled":{backgroundColor:"transparent","&:focus, &:focus-within":{outline:"none",borderColor:"transparent"}}}},withIcon:{paddingLeft:typeof n=="number"?n:We[o]??We.md},disabled:{darkMode:{backgroundColor:"$dark600 !important"},backgroundColor:"$gray100 !important",color:"$dark200 !important",opacity:.6,cursor:"not-allowed","&::placeholder":{color:"$dark200 !important"}},invalid:{darkMode:{color:"$red600 !important",borderColor:"$red600 !important","&::placeholder":{color:"$red600 !important"}},color:"$red700 !important",borderColor:"$red700 !important","&::placeholder":{opacity:1,color:"$red700 !important"}},icon:{darkMode:{color:r?"red600":"$dark200"},pointerEvents:"none",position:"absolute",zIndex:1,left:0,top:8,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",width:We[o]??We.md,color:r?"$red700":"$gray500"},rightSection:{position:"absolute",top:0,bottom:0,right:0,display:"flex",alignItems:"center",justifyContent:"center",width:a}})),Df=t=>({}),Wi=t=>({});function ji(t){let e,n;const r=[{icon:t[6]},{className:t[22].icon},t[7],{iconSize:16}];let i={};for(let s=0;s<r.length;s+=1)i=M(i,r[s]);return e=new lu({props:i}),{c(){D(e.$$.fragment)},m(s,a){P(e,s,a),n=!0},p(s,a){const o=a[0]&4194496?ae(r,[a[0]&64&&{icon:s[6]},a[0]&4194304&&{className:s[22].icon},a[0]&128&&ke(s[7]),r[3]]):{};e.$set(o)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){N(e,s)}}}function Lf(t){let e,n,r,i,s;const a=[{use:[t[24],[fe,t[2]]]},{"aria-invalid":t[15]},{class:t[23](t[3],{[t[22].disabled]:t[14],[t[22].invalid]:t[15],[t[22].withIcon]:t[6]},`${t[13]}Variant`)},{disabled:t[14]},{required:t[12]},{id:t[11]},{type:t[17]},t[28]];function o(u){t[37](u)}function l(u){t[38](u)}var c=t[5];function f(u){let d={$$slots:{default:[Bf]},$$scope:{ctx:u}};for(let h=0;h<a.length;h+=1)d=M(d,a[h]);return u[0]!==void 0&&(d.element=u[0]),u[1]!==void 0&&(d.value=u[1]),{props:d}}return c&&(e=ut(c,f(t)),$.push(()=>_e(e,"element",o)),$.push(()=>_e(e,"value",l))),{c(){e&&D(e.$$.fragment),i=ve()},m(u,d){e&&P(e,u,d),A(u,i,d),s=!0},p(u,d){const h=d[0]&297990220?ae(a,[d[0]&16777220&&{use:[u[24],[fe,u[2]]]},d[0]&32768&&{"aria-invalid":u[15]},d[0]&12640328&&{class:u[23](u[3],{[u[22].disabled]:u[14],[u[22].invalid]:u[15],[u[22].withIcon]:u[6]},`${u[13]}Variant`)},d[0]&16384&&{disabled:u[14]},d[0]&4096&&{required:u[12]},d[0]&2048&&{id:u[11]},d[0]&131072&&{type:u[17]},d[0]&268435456&&ke(u[28])]):{};if(d[1]&256&&(h.$$scope={dirty:d,ctx:u}),!n&&d[0]&1&&(n=!0,h.element=u[0],Se(()=>n=!1)),!r&&d[0]&2&&(r=!0,h.value=u[1],Se(()=>r=!1)),d[0]&32&&c!==(c=u[5])){if(e){ce();const g=e;k(g.$$.fragment,1,0,()=>{N(g,1)}),ue()}c?(e=ut(c,f(u)),$.push(()=>_e(e,"element",o)),$.push(()=>_e(e,"value",l)),D(e.$$.fragment),y(e.$$.fragment,1),P(e,i.parentNode,i)):e=null}else c&&e.$set(h)},i(u){s||(e&&y(e.$$.fragment,u),s=!0)},o(u){e&&k(e.$$.fragment,u),s=!1},d(u){u&&C(i),e&&N(e,u)}}}function Mf(t){let e,n=t[25]()&&Uf(t);return{c(){n&&n.c()},m(r,i){n&&n.m(r,i),e=!0},p(r,i){r[25]()&&n.p(r,i)},i(r){e||(y(n),e=!0)},o(r){k(n),e=!1},d(r){n&&n.d(r)}}}function zf(t){let e,n,r,i,s,a=[{value:t[1]},{type:t[17]},{required:t[12]},{disabled:t[14]},{id:t[11]},{placeholder:t[18]},{autocomplete:t[16]},{"aria-invalid":t[15]},{class:n=t[23](t[3],t[22].input,{[t[22].disabled]:t[14],[t[22].invalid]:t[15]},`${t[13]}Variant`)},t[28]],o={};for(let l=0;l<a.length;l+=1)o=M(o,a[l]);return{c(){e=te("input"),De(e,o),me(e,"disabled",t[14]),me(e,"invalid",t[15]),me(e,"withIcon",t[6])},m(l,c){A(l,e,c),"value"in o&&(e.value=o.value),e.autofocus&&e.focus(),t[35](e),i||(s=[ge(r=fe.call(null,e,t[2])),ge(t[24].call(null,e)),ct(e,"input",t[27])],i=!0)},p(l,c){De(e,o=ae(a,[c[0]&2&&e.value!==l[1]&&{value:l[1]},c[0]&131072&&{type:l[17]},c[0]&4096&&{required:l[12]},c[0]&16384&&{disabled:l[14]},c[0]&2048&&{id:l[11]},c[0]&262144&&{placeholder:l[18]},c[0]&65536&&{autocomplete:l[16]},c[0]&32768&&{"aria-invalid":l[15]},c[0]&12640264&&n!==(n=l[23](l[3],l[22].input,{[l[22].disabled]:l[14],[l[22].invalid]:l[15]},`${l[13]}Variant`))&&{class:n},c[0]&268435456&&l[28]])),"value"in o&&(e.value=o.value),r&&Ie(r.update)&&c[0]&4&&r.update.call(null,l[2]),me(e,"disabled",l[14]),me(e,"invalid",l[15]),me(e,"withIcon",l[6])},i:ne,o:ne,d(l){l&&C(e),t[35](null),i=!1,Ae(s)}}}function Bf(t){let e;const n=t[34].default,r=re(n,t,t[39],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s[1]&256)&&se(r,n,i,i[39],e?ie(n,i[39],s,null):oe(i[39]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Uf(t){let e,n,r,i,s,a;const o=t[34].default,l=re(o,t,t[39],null);let c=[{value:t[1]},{required:t[12]},{disabled:t[14]},{id:t[11]},{autocomplete:t[16]},{type:t[17]},{"aria-invalid":t[15]},{class:n=t[23](t[3],t[22].input,`${t[13]}Variant`)},t[28]],f={};for(let u=0;u<c.length;u+=1)f=M(f,c[u]);return{c(){e=te(t[25]()),l&&l.c(),Cn(t[25]())(e,f),me(e,"disabled",t[14]),me(e,"invalid",t[15]),me(e,"withIcon",t[6])},m(u,d){A(u,e,d),l&&l.m(e,null),t[36](e),i=!0,s||(a=[ct(e,"change",t[26]),ge(r=fe.call(null,e,t[2])),ge(t[24].call(null,e))],s=!0)},p(u,d){l&&l.p&&(!i||d[1]&256)&&se(l,o,u,u[39],i?ie(o,u[39],d,null):oe(u[39]),null),Cn(u[25]())(e,f=ae(c,[(!i||d[0]&2)&&{value:u[1]},(!i||d[0]&4096)&&{required:u[12]},(!i||d[0]&16384)&&{disabled:u[14]},(!i||d[0]&2048)&&{id:u[11]},(!i||d[0]&65536)&&{autocomplete:u[16]},(!i||d[0]&131072)&&{type:u[17]},(!i||d[0]&32768)&&{"aria-invalid":u[15]},(!i||d[0]&12591112&&n!==(n=u[23](u[3],u[22].input,`${u[13]}Variant`)))&&{class:n},d[0]&268435456&&u[28]])),r&&Ie(r.update)&&d[0]&4&&r.update.call(null,u[2]),me(e,"disabled",u[14]),me(e,"invalid",u[15]),me(e,"withIcon",u[6])},i(u){i||(y(l,u),i=!0)},o(u){k(l,u),i=!1},d(u){u&&C(e),l&&l.d(u),t[36](null),s=!1,Ae(a)}}}function Fi(t){let e,n,r;const i=t[34].rightSection,s=re(i,t,t[39],Wi);let a=[t[9],{class:n=t[22].rightSection}],o={};for(let l=0;l<a.length;l+=1)o=M(o,a[l]);return{c(){e=te("div"),s&&s.c(),De(e,o)},m(l,c){A(l,e,c),s&&s.m(e,null),r=!0},p(l,c){s&&s.p&&(!r||c[1]&256)&&se(s,i,l,l[39],r?ie(i,l[39],c,Df):oe(l[39]),Wi),De(e,o=ae(a,[c[0]&512&&l[9],(!r||c[0]&4194304&&n!==(n=l[22].rightSection))&&{class:n}]))},i(l){r||(y(s,l),r=!0)},o(l){k(s,l),r=!1},d(l){l&&C(e),s&&s.d(l)}}}function Wf(t){let e,n,r,i,s,a,o,l=t[6]&&ji(t);const c=[zf,Mf,Lf],f=[];function u(h,g){return g[0]&524320&&(n=null),h[19]&&h[5]==="input"?0:(n==null&&(n=!!(h[19]&&Ff(String(h[5])))),n?1:h[20]&&typeof h[5]!="string"?2:-1)}~(r=u(t,[-1,-1]))&&(i=f[r]=c[r](t));let d=t[8]&&Fi(t);return{c(){l&&l.c(),e=he(),i&&i.c(),s=he(),d&&d.c(),a=ve()},m(h,g){l&&l.m(h,g),A(h,e,g),~r&&f[r].m(h,g),A(h,s,g),d&&d.m(h,g),A(h,a,g),o=!0},p(h,g){h[6]?l?(l.p(h,g),g[0]&64&&y(l,1)):(l=ji(h),l.c(),y(l,1),l.m(e.parentNode,e)):l&&(ce(),k(l,1,1,()=>{l=null}),ue());let p=r;r=u(h,g),r===p?~r&&f[r].p(h,g):(i&&(ce(),k(f[p],1,1,()=>{f[p]=null}),ue()),~r?(i=f[r],i?i.p(h,g):(i=f[r]=c[r](h),i.c()),y(i,1),i.m(s.parentNode,s)):i=null),h[8]?d?(d.p(h,g),g[0]&256&&y(d,1)):(d=Fi(h),d.c(),y(d,1),d.m(a.parentNode,a)):d&&(ce(),k(d,1,1,()=>{d=null}),ue())},i(h){o||(y(l),y(i),y(d),o=!0)},o(h){k(l),k(i),k(d),o=!1},d(h){l&&l.d(h),h&&C(e),~r&&f[r].d(h),h&&C(s),d&&d.d(h),h&&C(a)}}}function jf(t){let e,n;const r=[t[10],{class:t[21]({css:t[4]})},t[28]];let i={$$slots:{default:[Wf]},$$scope:{ctx:t}};for(let s=0;s<r.length;s+=1)i=M(i,r[s]);return e=new ze({props:i}),{c(){D(e.$$.fragment)},m(s,a){P(e,s,a),n=!0},p(s,a){const o=a[0]&270533648?ae(r,[a[0]&1024&&ke(s[10]),a[0]&2097168&&{class:s[21]({css:s[4]})},a[0]&268435456&&ke(s[28])]):{};a[0]&283114479|a[1]&256&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){n||(y(e.$$.fragment,s),n=!0)},o(s){k(e.$$.fragment,s),n=!1},d(s){N(e,s)}}}function Ff(t){return["input","select","textarea","datalist"].includes(t)}function Hf(t,e,n){let r,i,s;const a=["use","element","class","override","root","icon","iconWidth","iconProps","showRightSection","rightSectionWidth","rightSectionProps","wrapperProps","id","required","radius","variant","disabled","size","value","invalid","multiline","autocomplete","type","placeholder"];let o=X(e,a),{$$slots:l={},$$scope:c}=e;const f=Ls(l);let{use:u=[],element:d=void 0,class:h="",override:g={},root:p="input",icon:b=null,iconWidth:_=36,iconProps:v={size:20,color:"currentColor"},showRightSection:w=f.rightSection,rightSectionWidth:I=36,rightSectionProps:T={},wrapperProps:O={},id:E="input-id",required:V=!1,radius:q="sm",variant:R="default",disabled:S=!1,size:G="sm",value:z="",invalid:j=!1,multiline:F=!1,autocomplete:Me="on",type:Ee="text",placeholder:U=void 0}=e;const It=He(Re());function Ft(){return p}let $e=!0,H=!1;function Zn(){n(1,z=this.value)}function Qn(L){L.target.type==="checkbox"?n(1,z=L.target.checked):L.target.type==="number"||L.target.type==="range"?n(1,z=+L.target.value):n(1,z=L.target.value)}function xn(L){$[L?"unshift":"push"](()=>{d=L,n(0,d)})}function $n(L){$[L?"unshift":"push"](()=>{d=L,n(0,d)})}function St(L){d=L,n(0,d)}function er(L){z=L,n(1,z)}return t.$$set=L=>{e=M(M({},e),ye(L)),n(28,o=X(e,a)),"use"in L&&n(2,u=L.use),"element"in L&&n(0,d=L.element),"class"in L&&n(3,h=L.class),"override"in L&&n(4,g=L.override),"root"in L&&n(5,p=L.root),"icon"in L&&n(6,b=L.icon),"iconWidth"in L&&n(29,_=L.iconWidth),"iconProps"in L&&n(7,v=L.iconProps),"showRightSection"in L&&n(8,w=L.showRightSection),"rightSectionWidth"in L&&n(30,I=L.rightSectionWidth),"rightSectionProps"in L&&n(9,T=L.rightSectionProps),"wrapperProps"in L&&n(10,O=L.wrapperProps),"id"in L&&n(11,E=L.id),"required"in L&&n(12,V=L.required),"radius"in L&&n(31,q=L.radius),"variant"in L&&n(13,R=L.variant),"disabled"in L&&n(14,S=L.disabled),"size"in L&&n(32,G=L.size),"value"in L&&n(1,z=L.value),"invalid"in L&&n(15,j=L.invalid),"multiline"in L&&n(33,F=L.multiline),"autocomplete"in L&&n(16,Me=L.autocomplete),"type"in L&&n(17,Ee=L.type),"placeholder"in L&&n(18,U=L.placeholder),"$$scope"in L&&n(39,c=L.$$scope)},t.$$.update=()=>{t.$$.dirty[0]&32&&(n(19,$e=p&&typeof p=="string"),n(20,H=p&&typeof p=="function")),t.$$.dirty[0]&1610654016|t.$$.dirty[1]&7&&n(23,{cx:r,classes:i,getStyles:s}=Nf({icon:b,iconWidth:_,invalid:j,multiline:F,radius:q,rightSectionWidth:I,showRightSection:w,size:G,variant:R},{name:"Input"}),r,(n(22,i),n(6,b),n(29,_),n(15,j),n(33,F),n(31,q),n(30,I),n(8,w),n(32,G),n(13,R)),(n(21,s),n(6,b),n(29,_),n(15,j),n(33,F),n(31,q),n(30,I),n(8,w),n(32,G),n(13,R)))},[d,z,u,h,g,p,b,v,w,T,O,E,V,R,S,j,Me,Ee,U,$e,H,s,i,r,It,Ft,Zn,Qn,o,_,I,q,G,F,l,xn,$n,St,er,c]}class Vf extends x{constructor(e){super(),Q(this,e,Hf,jf,Z,{use:2,element:0,class:3,override:4,root:5,icon:6,iconWidth:29,iconProps:7,showRightSection:8,rightSectionWidth:30,rightSectionProps:9,wrapperProps:10,id:11,required:12,radius:31,variant:13,disabled:14,size:32,value:1,invalid:15,multiline:33,autocomplete:16,type:17,placeholder:18},null,[-1,-1])}}const Hi=Vf,qf={app:100,modal:200,popover:300,overlay:400};function Gf(t){return qf[t]}function Kf(t){let e,n,r;const i=[{use:[t[10],[fe,t[1]]]},{id:"innerOverlay"},{css:{...t[9],...t[8],opacity:t[4],borderRadius:`${t[6]}`,...t[3]}},t[11],{class:t[2]}];function s(o){t[17](o)}let a={$$slots:{default:[Qf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l&3934?ae(i,[l&1026&&{use:[o[10],[fe,o[1]]]},i[1],l&856&&{css:{...o[9],...o[8],opacity:o[4],borderRadius:`${o[6]}`,...o[3]}},l&2048&&ke(o[11]),l&4&&{class:o[2]}]):{};l&262272&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Jf(t){let e,n,r;const i=[{use:[t[10],[fe,t[1]]]},{id:"outterOverlay"},{css:{...t[8],backdropFilter:`blur(${t[5]}px)`}},{class:t[2]},t[11]];function s(o){t[16](o)}let a={$$slots:{default:[xf]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l&3366?ae(i,[l&1026&&{use:[o[10],[fe,o[1]]]},i[1],l&288&&{css:{...o[8],backdropFilter:`blur(${o[5]}px)`}},l&4&&{class:o[2]},l&2048&&ke(o[11])]):{};l&263e3&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function Xf(t){let e;const n=t[15].default,r=re(n,t,t[18],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262144)&&se(r,n,i,i[18],e?ie(n,i[18],s,null):oe(i[18]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Yf(t){let e,n;return e=new to({props:{$$slots:{default:[Zf]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&262144&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Zf(t){let e;const n=t[15].default,r=re(n,t,t[18],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262144)&&se(r,n,i,i[18],e?ie(n,i[18],s,null):oe(i[18]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function Qf(t){let e,n,r,i;const s=[Yf,Xf],a=[];function o(l,c){return l[7]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function xf(t){let e,n;return e=new ze({props:{id:"innerOverlay",css:{...t[9],...t[8],opacity:t[4],borderRadius:`${t[6]}`,...t[3]}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&856&&(s.css={...r[9],...r[8],opacity:r[4],borderRadius:`${r[6]}`,...r[3]}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function $f(t){let e,n,r,i;const s=[Jf,Kf],a=[];function o(l,c){return l[5]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function ed(t,e,n){let r,i;const s=["use","element","class","override","opacity","color","blur","gradient","zIndex","radius","center"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},opacity:h=.6,color:g="#fff",blur:p=0,gradient:b="",zIndex:_=Gf("modal"),radius:v=0,center:w=!1}=e;const I=He(Re());function T(E){f=E,n(0,f)}function O(E){f=E,n(0,f)}return t.$$set=E=>{e=M(M({},e),ye(E)),n(11,a=X(e,s)),"use"in E&&n(1,c=E.use),"element"in E&&n(0,f=E.element),"class"in E&&n(2,u=E.class),"override"in E&&n(3,d=E.override),"opacity"in E&&n(4,h=E.opacity),"color"in E&&n(12,g=E.color),"blur"in E&&n(5,p=E.blur),"gradient"in E&&n(13,b=E.gradient),"zIndex"in E&&n(14,_=E.zIndex),"radius"in E&&n(6,v=E.radius),"center"in E&&n(7,w=E.center),"$$scope"in E&&n(18,l=E.$$scope)},t.$$.update=()=>{t.$$.dirty&12288&&n(9,r=b?{backgroundImage:b}:{backgroundColor:g}),t.$$.dirty&16384&&n(8,i={position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:_})},[f,c,u,d,h,p,v,w,i,r,I,a,g,b,_,o,T,O,l]}class td extends x{constructor(e){super(),Q(this,e,ed,$f,Z,{use:1,element:0,class:2,override:3,opacity:4,color:12,blur:5,gradient:13,zIndex:14,radius:6,center:7})}}const nd=td,Vi={xs:320,sm:380,md:440,lg:620,xl:780,full:"100%"},rd=Le((t,{centered:e,overflow:n,size:r,zIndex:i})=>{const s=!(r in Vi);return{close:{},overlay:{},root:{position:"fixed",zIndex:i,top:0,left:0,right:0,bottom:0},inner:{position:"absolute",top:0,left:0,right:0,bottom:0,overflowY:"auto",padding:`${+t.space.xl.value*2}px ${+t.space.md.value}px`,display:"flex",justifyContent:"center",alignItems:e?"center":"flex-start"},title:{marginRight:+t.space.md.value,textOverflow:"ellipsis",display:"block",wordBreak:"break-word"},modal:{[`${t.dark} &`]:{backgroundColor:t.fn.themeColor("dark",7)},position:"relative",width:typeof r=="string"&&s?r:t.fn.size({sizes:Vi,size:r}),outline:0,backgroundColor:"white",marginTop:e?"auto":void 0,marginBottom:e?"auto":void 0,zIndex:1,marginLeft:"calc(var(--removed-scroll-width, 0px) * -1)"},header:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:parseInt(t.space.md.value),marginRight:-9},body:{maxHeight:n==="inside"?"calc(100vh - 185px)":null,overflowY:n==="inside"?"auto":null,wordBreak:"break-word"}}});function qi(t){let e,n;return e=new tu({props:{class:t[27](),withinPortal:t[16],target:t[15],$$slots:{default:[ld]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i[0]&65536&&(s.withinPortal=r[16]),i[0]&32768&&(s.target=r[15]),i[0]&270434287|i[1]&512&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function Gi(t){let e,n,r,i,s;n=new Lr({props:{id:t[23],class:t[18].title,$$slots:{default:[id]},$$scope:{ctx:t}}});let a=t[6]&&Ki(t);return{c(){e=te("div"),D(n.$$.fragment),r=he(),a&&a.c(),m(e,"class",i=t[18].header)},m(o,l){A(o,e,l),P(n,e,null),J(e,r),a&&a.m(e,null),s=!0},p(o,l){const c={};l[0]&262144&&(c.class=o[18].title),l[0]&32|l[1]&512&&(c.$$scope={dirty:l,ctx:o}),n.$set(c),o[6]?a?(a.p(o,l),l[0]&64&&y(a,1)):(a=Ki(o),a.c(),y(a,1),a.m(e,null)):a&&(ce(),k(a,1,1,()=>{a=null}),ue()),(!s||l[0]&262144&&i!==(i=o[18].header))&&m(e,"class",i)},i(o){s||(y(n.$$.fragment,o),y(a),s=!0)},o(o){k(n.$$.fragment,o),k(a),s=!1},d(o){o&&C(e),N(n),a&&a.d()}}}function id(t){let e;return{c(){e=we(t[5])},m(n,r){A(n,e,r)},p(n,r){r[0]&32&&Us(e,n[5])},d(n){n&&C(e)}}}function Ki(t){let e,n;return e=new Lc({props:{iconSize:16,"aria-label":t[10],class:t[18].close}}),e.$on("click",t[26]),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i[0]&1024&&(s["aria-label"]=r[10]),i[0]&262144&&(s.class=r[18].close),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function sd(t){let e;return{c(){e=we("Place some content")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function od(t){let e,n,r,i,s=(t[5]||t[6])&&Gi(t);const a=t[36].default,o=re(a,t,t[40],null),l=o||sd();return{c(){s&&s.c(),e=he(),n=te("div"),l&&l.c(),m(n,"id",t[24]),m(n,"class",r=t[18].body)},m(c,f){s&&s.m(c,f),A(c,e,f),A(c,n,f),l&&l.m(n,null),i=!0},p(c,f){c[5]||c[6]?s?(s.p(c,f),f[0]&96&&y(s,1)):(s=Gi(c),s.c(),y(s,1),s.m(e.parentNode,e)):s&&(ce(),k(s,1,1,()=>{s=null}),ue()),o&&o.p&&(!i||f[1]&512)&&se(o,a,c,c[40],i?ie(a,c[40],f,null):oe(c[40]),null),(!i||f[0]&262144&&r!==(r=c[18].body))&&m(n,"class",r)},i(c){i||(y(s),y(l,c),i=!0)},o(c){k(s),k(l,c),i=!1},d(c){s&&s.d(c),c&&C(e),c&&C(n),l&&l.d(c)}}}function ad(t){let e,n,r,i,s,a,o,l,c,f,u,d,h;return r=new Yu({props:{class:t[18].modal,shadow:t[11],padding:t[12],radius:t[9],role:"dialog","aria-labelledby":t[23],"aria-describedby":t[24],"aria-modal":!0,tabindex:-1,use:[zc],$$slots:{default:[od]},$$scope:{ctx:t}}}),o=new nd({props:{class:t[18].overlay,override:{position:"fixed"},zIndex:0,blur:t[8],color:t[7]||"black",opacity:t[25]}}),o.$on("mousedown",t[37]),{c(){e=te("div"),n=te("div"),D(r.$$.fragment),s=he(),a=te("div"),D(o.$$.fragment),m(e,"role","presentation"),m(e,"class",c=t[18].inner)},m(g,p){A(g,e,p),J(e,n),P(r,n,null),J(e,s),J(e,a),P(o,a,null),u=!0,d||(h=[ge(f=Vc.call(null,e,t[20])),ct(e,"keydown",t[38],!0)],d=!0)},p(g,p){t=g;const b={};p[0]&262144&&(b.class=t[18].modal),p[0]&2048&&(b.shadow=t[11]),p[0]&4096&&(b.padding=t[12]),p[0]&512&&(b.radius=t[9]),p[0]&263264|p[1]&512&&(b.$$scope={dirty:p,ctx:t}),r.$set(b);const _={};p[0]&262144&&(_.class=t[18].overlay),p[0]&256&&(_.blur=t[8]),p[0]&128&&(_.color=t[7]||"black"),o.$set(_),(!u||p[0]&262144&&c!==(c=t[18].inner))&&m(e,"class",c),f&&Ie(f.update)&&p[0]&1048576&&f.update.call(null,t[20])},i(g){u||(y(r.$$.fragment,g),zt(()=>{i||(i=gn(n,fi,{duration:100,easing:pn},!0)),i.run(1)}),y(o.$$.fragment,g),zt(()=>{l||(l=gn(a,ui,{duration:200,easing:pn},!0)),l.run(1)}),u=!0)},o(g){k(r.$$.fragment,g),i||(i=gn(n,fi,{duration:100,easing:pn},!1)),i.run(0),k(o.$$.fragment,g),l||(l=gn(a,ui,{duration:200,easing:pn},!1)),l.run(0),u=!1},d(g){g&&C(e),N(r),g&&i&&i.end(),N(o),g&&l&&l.end(),d=!1,Ae(h)}}}function ld(t){let e,n,r;const i=[{id:t[22]},{use:t[1]},t[28],{class:t[19](t[2],t[17]({css:t[3]}))}];function s(o){t[39](o)}let a={$$slots:{default:[ad]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,l){const c=l[0]&273285134?ae(i,[l[0]&4194304&&{id:o[22]},l[0]&2&&{use:o[1]},l[0]&268435456&&ke(o[28]),l[0]&655372&&{class:o[19](o[2],o[17]({css:o[3]}))}]):{};l[0]&1343456|l[1]&512&&(c.$$scope={dirty:l,ctx:o}),!n&&l[0]&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function cd(t){let e,n,r=t[4]&&qi(t);return{c(){r&&r.c(),e=ve()},m(i,s){r&&r.m(i,s),A(i,e,s),n=!0},p(i,s){i[4]?r?(r.p(i,s),s[0]&16&&y(r,1)):(r=qi(i),r.c(),y(r,1),r.m(e.parentNode,e)):r&&(ce(),k(r,1,1,()=>{r=null}),ue())},i(i){n||(y(r),n=!0)},o(i){k(r),n=!1},d(i){r&&r.d(i),i&&C(e)}}}function ud(t,e,n){let r,i,s,a;const o=["use","element","class","override","opened","title","zIndex","overflow","withCloseButton","overlayOpacity","overlayColor","overlayBlur","radius","size","closeButtonLabel","id","shadow","padding","closeOnClickOutside","closeOnEscape","trapFocus","centered","target","withinPortal"];let l=X(e,o),c;Wn(t,Dt,W=>n(41,c=W));let{$$slots:f={},$$scope:u}=e,{use:d=[],element:h=void 0,class:g="",override:p={},opened:b=!1,title:_="",zIndex:v=200,overflow:w="outside",withCloseButton:I=!0,overlayOpacity:T=null,overlayColor:O=null,overlayBlur:E=0,radius:V="sm",size:q="md",closeButtonLabel:R="svelteui-close-button",id:S="svelteui",shadow:G="lg",padding:z="lg",closeOnClickOutside:j=!0,closeOnEscape:F=!0,trapFocus:Me=!1,centered:Ee=null,target:U="#SVELTEUI_PROVIDER",withinPortal:It=!0}=e;const Ft=Oa(),$e=W=>W,H=rl(S),Zn=`${H}-title`,Qn=`${H}-body`,xn=typeof T=="number"?T:c==="dark"?.85:.75,$n=W=>{!Me&&W.code==="Escape"&&F&&St()};function St(){Ft("close")}const er=xt({zIndex:v}),L=()=>j&&St(),la=W=>{var ri;((ri=$e(W.target))==null?void 0:ri.getAttribute("data-svelteui-stop-propagation"))!=="true"&&W.code==="Escape"&&F&&St()};function ca(W){h=W,n(0,h)}return t.$$set=W=>{e=M(M({},e),ye(W)),n(28,l=X(e,o)),"use"in W&&n(1,d=W.use),"element"in W&&n(0,h=W.element),"class"in W&&n(2,g=W.class),"override"in W&&n(3,p=W.override),"opened"in W&&n(4,b=W.opened),"title"in W&&n(5,_=W.title),"zIndex"in W&&n(29,v=W.zIndex),"overflow"in W&&n(30,w=W.overflow),"withCloseButton"in W&&n(6,I=W.withCloseButton),"overlayOpacity"in W&&n(31,T=W.overlayOpacity),"overlayColor"in W&&n(7,O=W.overlayColor),"overlayBlur"in W&&n(8,E=W.overlayBlur),"radius"in W&&n(9,V=W.radius),"size"in W&&n(32,q=W.size),"closeButtonLabel"in W&&n(10,R=W.closeButtonLabel),"id"in W&&n(33,S=W.id),"shadow"in W&&n(11,G=W.shadow),"padding"in W&&n(12,z=W.padding),"closeOnClickOutside"in W&&n(13,j=W.closeOnClickOutside),"closeOnEscape"in W&&n(14,F=W.closeOnEscape),"trapFocus"in W&&n(34,Me=W.trapFocus),"centered"in W&&n(35,Ee=W.centered),"target"in W&&n(15,U=W.target),"withinPortal"in W&&n(16,It=W.withinPortal),"$$scope"in W&&n(40,u=W.$$scope)},t.$$.update=()=>{if(t.$$.dirty[1]&8&&Ar(()=>{Me||typeof window<"u"&&window.addEventListener("keydown",$n)}),t.$$.dirty[0]&32784&&b&&(typeof U=="string"&&!document.querySelector(U)||!U))throw new Error(`Wrap your app in the SvelteUIProvider, or provide a sufficent target throught the "target={''}" prop `);t.$$.dirty[0]&16&&n(20,r=b),t.$$.dirty[0]&1610612736|t.$$.dirty[1]&18&&n(19,{cx:i,classes:s,getStyles:a}=rd({centered:Ee,overflow:w,size:q,zIndex:v},{name:"Modal"}),i,(n(18,s),n(35,Ee),n(30,w),n(32,q),n(29,v)),(n(17,a),n(35,Ee),n(30,w),n(32,q),n(29,v)))},[h,d,g,p,b,_,I,O,E,V,R,G,z,j,F,U,It,a,s,i,r,$e,H,Zn,Qn,xn,St,er,l,v,w,T,q,S,Me,Ee,f,L,la,ca,u]}class fd extends x{constructor(e){super(),Q(this,e,ud,cd,Z,{use:1,element:0,class:2,override:3,opened:4,title:5,zIndex:29,overflow:30,withCloseButton:6,overlayOpacity:31,overlayColor:7,overlayBlur:8,radius:9,size:32,closeButtonLabel:10,id:33,shadow:11,padding:12,closeOnClickOutside:13,closeOnEscape:14,trapFocus:34,centered:35,target:15,withinPortal:16},null,[-1,-1])}}const dd=fd,hd=Le((t,{h:e,w:n})=>({root:{width:t.fn.size({size:n,sizes:t.space}),minWidth:t.fn.size({size:n,sizes:t.space}),height:t.fn.size({size:e,sizes:t.space}),minHeight:t.fn.size({size:e,sizes:t.space})}}));function md(t){let e;const n=t[9].default,r=re(n,t,t[11],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&2048)&&se(r,n,i,i[11],e?ie(n,i[11],s,null):oe(i[11]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function gd(t){let e,n,r;const i=[{use:t[1]},{class:t[5](t[2],t[4]({css:t[3]}))},t[6]];function s(o){t[10](o)}let a={$$slots:{default:[md]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new ze({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&2&&{use:o[1]},l&60&&{class:o[5](o[2],o[4]({css:o[3]}))},l&64&&ke(o[6])]):{};l&2048&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}function pd(t,e,n){let r,i;const s=["use","element","class","override","w","h"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{use:c=[],element:f=void 0,class:u="",override:d={},w:h=0,h:g=0}=e;function p(b){f=b,n(0,f)}return t.$$set=b=>{e=M(M({},e),ye(b)),n(6,a=X(e,s)),"use"in b&&n(1,c=b.use),"element"in b&&n(0,f=b.element),"class"in b&&n(2,u=b.class),"override"in b&&n(3,d=b.override),"w"in b&&n(7,h=b.w),"h"in b&&n(8,g=b.h),"$$scope"in b&&n(11,l=b.$$scope)},t.$$.update=()=>{t.$$.dirty&384&&n(5,{cx:r,getStyles:i}=hd({h:g,w:h},{name:"Space"}),r,(n(4,i),n(8,g),n(7,h)))},[f,c,u,d,i,r,a,h,g,o,p,l]}class bd extends x{constructor(e){super(),Q(this,e,pd,gd,Z,{use:1,element:0,class:2,override:3,w:7,h:8})}}const _d=bd,Ji={1:{fontSize:34,lineHeight:1.3},2:{fontSize:26,lineHeight:1.35},3:{fontSize:22,lineHeight:1.4},4:{fontSize:18,lineHeight:1.45},5:{fontSize:16,lineHeight:1.5},6:{fontSize:14,lineHeight:1.5}},yd=Le(()=>({root:{margin:0}}));function kd(t){let e;const n=t[8].default,r=re(n,t,t[10],null);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&1024)&&se(r,n,i,i[10],e?ie(n,i[10],s,null):oe(i[10]),null)},i(i){e||(y(r,i),e=!0)},o(i){k(r,i),e=!1},d(i){r&&r.d(i)}}}function vd(t){let e,n,r;const i=[{class:t[5](t[1],Xi,t[4].root)},{root:t[3]},{size:Ji[t[2]].fontSize},t[6]];function s(o){t[9](o)}let a={$$slots:{default:[kd]},$$scope:{ctx:t}};for(let o=0;o<i.length;o+=1)a=M(a,i[o]);return t[0]!==void 0&&(a.element=t[0]),e=new Lr({props:a}),$.push(()=>_e(e,"element",s)),{c(){D(e.$$.fragment)},m(o,l){P(e,o,l),r=!0},p(o,[l]){const c=l&126?ae(i,[l&50&&{class:o[5](o[1],Xi,o[4].root)},l&8&&{root:o[3]},l&4&&{size:Ji[o[2]].fontSize},l&64&&ke(o[6])]):{};l&1024&&(c.$$scope={dirty:l,ctx:o}),!n&&l&1&&(n=!0,c.element=o[0],Se(()=>n=!1)),e.$set(c)},i(o){r||(y(e.$$.fragment,o),r=!0)},o(o){k(e.$$.fragment,o),r=!1},d(o){N(e,o)}}}const Xi="title";function Id(t,e,n){let r,i;const s=["element","class","override","order"];let a=X(e,s),{$$slots:o={},$$scope:l}=e,{element:c=void 0,class:f="",override:u={},order:d=1}=e,h;function g(p){c=p,n(0,c)}return t.$$set=p=>{e=M(M({},e),ye(p)),n(6,a=X(e,s)),"element"in p&&n(0,c=p.element),"class"in p&&n(1,f=p.class),"override"in p&&n(7,u=p.override),"order"in p&&n(2,d=p.order),"$$scope"in p&&n(10,l=p.$$scope)},t.$$.update=()=>{t.$$.dirty&4&&n(3,h=`h${d}`),t.$$.dirty&128&&n(5,{cx:r,classes:i}=yd(null,{override:u,name:"Title"}),r,(n(4,i),n(7,u)))},[c,f,d,h,i,r,a,u,o,g,l]}class Sd extends x{constructor(e){super(),Q(this,e,Id,vd,Z,{element:0,class:1,override:7,order:2})}}const Ed=Sd;/**
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
 */const ro=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Td=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],o=t[n++],l=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},io={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,o=a?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,f=s>>2,u=(s&3)<<4|o>>4;let d=(o&15)<<2|c>>6,h=c&63;l||(h=64,a||(d=64)),r.push(n[f],n[u],n[d],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ro(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Td(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||o==null||c==null||u==null)throw new wd;const d=s<<2|o>>4;if(r.push(d),c!==64){const h=o<<4&240|c>>2;if(r.push(h),u!==64){const g=c<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rd=function(t){const e=ro(t);return io.encodeByteArray(e,!0)},Pn=function(t){return Rd(t).replace(/\./g,"")},so=function(t){try{return io.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ad=()=>Cd().__FIREBASE_DEFAULTS__,Od=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Pd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&so(t[1]);return e&&JSON.parse(e)},Fn=()=>{try{return Ad()||Od()||Pd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oo=t=>{var e,n;return(n=(e=Fn())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Nd=t=>{const e=oo(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Dd=()=>{var t;return(t=Fn())===null||t===void 0?void 0:t.config},ao=t=>{var e;return(e=Fn())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ld{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Md(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),o="";return[Pn(JSON.stringify(n)),Pn(JSON.stringify(a)),o].join(".")}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function Bd(){var t;const e=(t=Fn())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ud(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Wd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jd(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fd(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const Vd="FirebaseError";class xe extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Vd,Object.setPrototypeOf(this,xe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,an.prototype.create)}}class an{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?qd(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new xe(i,o,r)}}function qd(t,e){return t.replace(Gd,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gd=/\{\$([^}]+)}/g;function Kd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Nn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(Yi(s)&&Yi(a)){if(!Nn(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yi(t){return t!==null&&typeof t=="object"}/**
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
 */function ln(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Jt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jd(t,e){const n=new Xd(t,e);return n.subscribe.bind(n)}class Xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Yd(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=or),i.error===void 0&&(i.error=or),i.complete===void 0&&(i.complete=or);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
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
 */class Zd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ld;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xd(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qd(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qd(t){return t===ht?void 0:t}function xd(t){return t.instantiationMode==="EAGER"}/**
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
 */class $d{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Zd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const eh={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},th=de.INFO,nh={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},rh=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=nh[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lo{constructor(e){this.name=e,this._logLevel=th,this._logHandler=rh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const ih=(t,e)=>e.some(n=>t instanceof n);let Zi,Qi;function sh(){return Zi||(Zi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oh(){return Qi||(Qi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const co=new WeakMap,yr=new WeakMap,uo=new WeakMap,ar=new WeakMap,zr=new WeakMap;function ah(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(ot(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&co.set(n,t)}).catch(()=>{}),zr.set(e,t),e}function lh(t){if(yr.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});yr.set(t,e)}let kr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ot(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ch(t){kr=t(kr)}function uh(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lr(this),e,...n);return uo.set(r,e.sort?e.sort():[e]),ot(r)}:oh().includes(t)?function(...e){return t.apply(lr(this),e),ot(co.get(this))}:function(...e){return ot(t.apply(lr(this),e))}}function fh(t){return typeof t=="function"?uh(t):(t instanceof IDBTransaction&&lh(t),ih(t,sh())?new Proxy(t,kr):t)}function ot(t){if(t instanceof IDBRequest)return ah(t);if(ar.has(t))return ar.get(t);const e=fh(t);return e!==t&&(ar.set(t,e),zr.set(e,t)),e}const lr=t=>zr.get(t);function dh(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),o=ot(a);return r&&a.addEventListener("upgradeneeded",l=>{r(ot(a.result),l.oldVersion,l.newVersion,ot(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const hh=["get","getKey","getAll","getAllKeys","count"],mh=["put","add","delete","clear"],cr=new Map;function xi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mh.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||hh.includes(n)))return;const s=async function(a,...o){const l=this.transaction(a,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),i&&l.done]))[0]};return cr.set(e,s),s}ch(t=>({...t,get:(e,n,r)=>xi(e,n)||t.get(e,n,r),has:(e,n)=>!!xi(e,n)||t.has(e,n)}));/**
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
 */class gh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ph(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ph(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vr="@firebase/app",$i="0.9.4";/**
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
 */const yt=new lo("@firebase/app"),bh="@firebase/app-compat",_h="@firebase/analytics-compat",yh="@firebase/analytics",kh="@firebase/app-check-compat",vh="@firebase/app-check",Ih="@firebase/auth",Sh="@firebase/auth-compat",Eh="@firebase/database",Th="@firebase/database-compat",wh="@firebase/functions",Rh="@firebase/functions-compat",Ch="@firebase/installations",Ah="@firebase/installations-compat",Oh="@firebase/messaging",Ph="@firebase/messaging-compat",Nh="@firebase/performance",Dh="@firebase/performance-compat",Lh="@firebase/remote-config",Mh="@firebase/remote-config-compat",zh="@firebase/storage",Bh="@firebase/storage-compat",Uh="@firebase/firestore",Wh="@firebase/firestore-compat",jh="firebase",Fh="9.17.2";/**
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
 */const Ir="[DEFAULT]",Hh={[vr]:"fire-core",[bh]:"fire-core-compat",[yh]:"fire-analytics",[_h]:"fire-analytics-compat",[vh]:"fire-app-check",[kh]:"fire-app-check-compat",[Ih]:"fire-auth",[Sh]:"fire-auth-compat",[Eh]:"fire-rtdb",[Th]:"fire-rtdb-compat",[wh]:"fire-fn",[Rh]:"fire-fn-compat",[Ch]:"fire-iid",[Ah]:"fire-iid-compat",[Oh]:"fire-fcm",[Ph]:"fire-fcm-compat",[Nh]:"fire-perf",[Dh]:"fire-perf-compat",[Lh]:"fire-rc",[Mh]:"fire-rc-compat",[zh]:"fire-gcs",[Bh]:"fire-gcs-compat",[Uh]:"fire-fst",[Wh]:"fire-fst-compat","fire-js":"fire-js",[jh]:"fire-js-all"};/**
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
 */const Dn=new Map,Sr=new Map;function Vh(t,e){try{t.container.addComponent(e)}catch(n){yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bt(t){const e=t.name;if(Sr.has(e))return yt.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,t);for(const n of Dn.values())Vh(n,t);return!0}function Br(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const qh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},at=new an("app","Firebase",qh);/**
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
 */class Gh{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}/**
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
 */const cn=Fh;function fo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ir,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw at.create("bad-app-name",{appName:String(i)});if(n||(n=Dd()),!n)throw at.create("no-options");const s=Dn.get(i);if(s){if(Nn(n,s.options)&&Nn(r,s.config))return s;throw at.create("duplicate-app",{appName:i})}const a=new $d(i);for(const l of Sr.values())a.addComponent(l);const o=new Gh(n,r,a);return Dn.set(i,o),o}function ho(t=Ir){const e=Dn.get(t);if(!e&&t===Ir)return fo();if(!e)throw at.create("no-app",{appName:t});return e}function lt(t,e,n){var r;let i=(r=Hh[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${e}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yt.warn(o.join(" "));return}Bt(new _t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Kh="firebase-heartbeat-database",Jh=1,$t="firebase-heartbeat-store";let ur=null;function mo(){return ur||(ur=dh(Kh,Jh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($t)}}}).catch(t=>{throw at.create("idb-open",{originalErrorMessage:t.message})})),ur}async function Xh(t){try{return(await mo()).transaction($t).objectStore($t).get(go(t))}catch(e){if(e instanceof xe)yt.warn(e.message);else{const n=at.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yt.warn(n.message)}}}async function es(t,e){try{const r=(await mo()).transaction($t,"readwrite");return await r.objectStore($t).put(e,go(t)),r.done}catch(n){if(n instanceof xe)yt.warn(n.message);else{const r=at.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yt.warn(r.message)}}}function go(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Yh=1024,Zh=30*24*60*60*1e3;class Qh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $h(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ts();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Zh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ts(),{heartbeatsToSend:n,unsentEntries:r}=xh(this._heartbeatsCache.heartbeats),i=Pn(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ts(){return new Date().toISOString().substring(0,10)}function xh(t,e=Yh){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ns(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ns(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $h{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fd()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return es(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return es(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ns(t){return Pn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function em(t){Bt(new _t("platform-logger",e=>new gh(e),"PRIVATE")),Bt(new _t("heartbeat",e=>new Qh(e),"PRIVATE")),lt(vr,$i,t),lt(vr,$i,"esm2017"),lt("fire-js","")}em("");function Ur(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function po(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tm=po,bo=new an("auth","Firebase",po());/**
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
 */const rs=new lo("@firebase/auth");function En(t,...e){rs.logLevel<=de.ERROR&&rs.error(`Auth (${cn}): ${t}`,...e)}/**
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
 */function Fe(t,...e){throw Wr(t,...e)}function Ve(t,...e){return Wr(t,...e)}function nm(t,e,n){const r=Object.assign(Object.assign({},tm()),{[e]:n});return new an("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bo.create(t,...e)}function K(t,e,...n){if(!t)throw Wr(e,...n)}function Xe(t){const e="INTERNAL ASSERTION FAILED: "+t;throw En(e),new Error(e)}function Qe(t,e){t||Xe(e)}/**
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
 */const is=new Map;function Ye(t){Qe(t instanceof Function,"Expected a class definition");let e=is.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,is.set(t,e),e)}/**
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
 */function rm(t,e){const n=Br(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Nn(s,e??{}))return i;Fe(i,"already-initialized")}return n.initialize({options:e})}function im(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ye);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Er(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sm(){return ss()==="http:"||ss()==="https:"}function ss(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function om(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sm()||Ud()||"connection"in navigator)?navigator.onLine:!0}function am(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class un{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=zd()||Wd()}get(){return om()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jr(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _o{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Xe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Xe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Xe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const lm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const cm=new un(3e4,6e4);function Hn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function fn(t,e,n,r,i={}){return yo(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const o=ln(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),_o.fetch()(ko(t,t.config.apiHost,n,o),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function yo(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lm),e);try{const i=new um(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _n(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[l,c]=o.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _n(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw _n(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw _n(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw nm(t,f,c);Fe(t,f)}}catch(i){if(i instanceof xe)throw i;Fe(t,"internal-error",{message:String(i)})}}async function Vn(t,e,n,r,i={}){const s=await fn(t,e,n,r,i);return"mfaPendingCredential"in s&&Fe(t,"multi-factor-auth-required",{_serverResponse:s}),s}function ko(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?jr(t.config,i):`${t.config.apiScheme}://${i}`}class um{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ve(this.auth,"network-request-failed")),cm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _n(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ve(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function fm(t,e){return fn(t,"POST","/v1/accounts:delete",e)}async function dm(t,e){return fn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hm(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),i=Fr(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Yt(fr(i.auth_time)),issuedAtTime:Yt(fr(i.iat)),expirationTime:Yt(fr(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fr(t){return Number(t)*1e3}function Fr(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return En("JWT malformed, contained fewer than 3 sections"),null;try{const i=so(n);return i?JSON.parse(i):(En("Failed to decode base64 JWT payload"),null)}catch(i){return En("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mm(t){const e=Fr(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function en(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xe&&gm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function gm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yt(this.lastLoginAt),this.creationTime=Yt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ln(t){var e;const n=t.auth,r=await t.getIdToken(),i=await en(t,dm(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ym(s.providerUserInfo):[],o=_m(t.providerData,a),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),f=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new vo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function bm(t){const e=Ue(t);await Ln(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _m(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ym(t){return t.map(e=>{var{providerId:n}=e,r=Ur(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function km(t,e){const n=await yo(t,{},async()=>{const r=ln({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=ko(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_o.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await km(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new tn;return r&&(K(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new tn,this.toJSON())}_performRefresh(){return Xe("not implemented")}}/**
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
 */function et(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ur(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new vo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await en(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hm(this,e)}reload(){return bm(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ln(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await en(this,fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,o,l,c,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(a=n.photoURL)!==null&&a!==void 0?a:void 0,p=(o=n.tenantId)!==null&&o!==void 0?o:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:w,emailVerified:I,isAnonymous:T,providerData:O,stsTokenManager:E}=n;K(w&&E,e,"internal-error");const V=tn.fromJSON(this.name,E);K(typeof w=="string",e,"internal-error"),et(u,e.name),et(d,e.name),K(typeof I=="boolean",e,"internal-error"),K(typeof T=="boolean",e,"internal-error"),et(h,e.name),et(g,e.name),et(p,e.name),et(b,e.name),et(_,e.name),et(v,e.name);const q=new gt({uid:w,auth:e,email:d,emailVerified:I,displayName:u,isAnonymous:T,photoURL:g,phoneNumber:h,tenantId:p,stsTokenManager:V,createdAt:_,lastLoginAt:v});return O&&Array.isArray(O)&&(q.providerData=O.map(R=>Object.assign({},R))),b&&(q._redirectEventId=b),q}static async _fromIdTokenResponse(e,n,r=!1){const i=new tn;i.updateFromServerResponse(n);const s=new gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ln(s),s}}/**
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
 */class Io{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Io.type="NONE";const os=Io;/**
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
 */function Tn(t,e,n){return`firebase:${t}:${e}:${n}`}class Lt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Tn(this.userKey,i.apiKey,s),this.fullPersistenceKey=Tn("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lt(Ye(os),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Ye(os);const a=Tn(r,e.config.apiKey,e.name);let o=null;for(const c of n)try{const f=await c._get(a);if(f){const u=gt._fromJSON(e,f);c!==s&&(o=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lt(s,e,r):(s=l[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Lt(s,e,r))}}/**
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
 */function as(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(To(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(So(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ro(e))return"Blackberry";if(Co(e))return"Webos";if(Hr(e))return"Safari";if((e.includes("chrome/")||Eo(e))&&!e.includes("edge/"))return"Chrome";if(wo(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function So(t=Ce()){return/firefox\//i.test(t)}function Hr(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Eo(t=Ce()){return/crios\//i.test(t)}function To(t=Ce()){return/iemobile/i.test(t)}function wo(t=Ce()){return/android/i.test(t)}function Ro(t=Ce()){return/blackberry/i.test(t)}function Co(t=Ce()){return/webos/i.test(t)}function qn(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vm(t=Ce()){var e;return qn(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Im(){return jd()&&document.documentMode===10}function Ao(t=Ce()){return qn(t)||wo(t)||Co(t)||Ro(t)||/windows phone/i.test(t)||To(t)}function Sm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Oo(t,e=[]){let n;switch(t){case"Browser":n=as(Ce());break;case"Worker":n=`${as(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${cn}/${r}`}/**
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
 */class Em{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,o)=>{try{const l=e(s);a(l)}catch(l){o(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Tm{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ls(this),this.idTokenSubscription=new ls(this),this.beforeStateQueue=new Em(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bo,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ye(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===o)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ln(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=am()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ue(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ye(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new an("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ye(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Lt.create(this,[Ye(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return K(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gn(t){return Ue(t)}class ls{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jd(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function wm(t,e,n){const r=Gn(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Po(e),{host:a,port:o}=Rm(e),l=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Cm()}function Po(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Rm(t){const e=Po(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:cs(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:cs(a)}}}function cs(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Cm(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xe("not implemented")}_getIdTokenResponse(e){return Xe("not implemented")}_linkToIdToken(e,n){return Xe("not implemented")}_getReauthenticationResolver(e){return Xe("not implemented")}}async function Am(t,e){return fn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Om(t,e){return Vn(t,"POST","/v1/accounts:signInWithPassword",Hn(t,e))}/**
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
 */async function Pm(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}async function Nm(t,e){return Vn(t,"POST","/v1/accounts:signInWithEmailLink",Hn(t,e))}/**
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
 */class nn extends Vr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new nn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new nn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Om(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Pm(e,{email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return Am(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Nm(e,{idToken:n,email:this._email,oobCode:this._password});default:Fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */const Dm="http://localhost";class kt extends Vr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ur(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new kt(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Mt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mt(e,n)}buildRequest(){const e={requestUri:Dm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ln(n)}return e}}/**
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
 */function Lm(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Mm(t){const e=Kt(Jt(t)).link,n=e?Kt(Jt(e)).deep_link_id:null,r=Kt(Jt(t)).deep_link_id;return(r?Kt(Jt(r)).link:null)||r||n||e||t}class qr{constructor(e){var n,r,i,s,a,o;const l=Kt(Jt(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,u=Lm((i=l.mode)!==null&&i!==void 0?i:null);K(c&&f&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=f,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=l.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=Mm(e);try{return new qr(n)}catch{return null}}}/**
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
 */class jt{constructor(){this.providerId=jt.PROVIDER_ID}static credential(e,n){return nn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=qr.parseLink(n);return K(r,"argument-error"),nn._fromEmailAndCode(e,r.code,r.tenantId)}}jt.PROVIDER_ID="password";jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class No{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dn extends No{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class tt extends dn{constructor(){super("facebook.com")}static credential(e){return kt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
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
 */class nt extends dn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
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
 */class rt extends dn{constructor(){super("github.com")}static credential(e){return kt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
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
 */class it extends dn{constructor(){super("twitter.com")}static credential(e,n){return kt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
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
 */class Ut{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),a=us(r);return new Ut({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=us(r);return new Ut({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function us(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mn extends xe{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mn.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mn(e,n,r,i)}}function Do(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mn._fromErrorAndOperation(t,s,e,r):s})}async function zm(t,e,n=!1){const r=await en(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ut._forOperation(t,"link",r)}/**
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
 */async function Bm(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await en(t,Do(r,i,e,t),n);K(s.idToken,r,"internal-error");const a=Fr(s.idToken);K(a,r,"internal-error");const{sub:o}=a;return K(t.uid===o,r,"user-mismatch"),Ut._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Fe(r,"user-mismatch"),s}}/**
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
 */async function Lo(t,e,n=!1){const r="signIn",i=await Do(t,r,e),s=await Ut._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Um(t,e){return Lo(Gn(t),e)}function Wm(t,e,n){return Um(Ue(t),jt.credential(e,n))}function jm(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function Fm(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}const zn="__sak";/**
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
 */class Mo{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zn,"1"),this.storage.removeItem(zn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Hm(){const t=Ce();return Hr(t)||qn(t)}const Vm=1e3,qm=10;class zo extends Mo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hm()&&Sm(),this.fallbackToPolling=Ao(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,l)=>{this.notifyListeners(a,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Im()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qm):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zo.type="LOCAL";const Gm=zo;/**
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
 */class Bo extends Mo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bo.type="SESSION";const Uo=Bo;/**
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
 */function Km(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kn(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async c=>c(n.origin,s)),l=await Km(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kn.receivers=[];/**
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
 */function Gr(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Jm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,l)=>{const c=Gr("",20);i.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(f),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function qe(){return window}function Xm(t){qe().location.href=t}/**
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
 */function Wo(){return typeof qe().WorkerGlobalScope<"u"&&typeof qe().importScripts=="function"}async function Ym(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zm(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Qm(){return Wo()?self:null}/**
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
 */const jo="firebaseLocalStorageDb",xm=1,Bn="firebaseLocalStorage",Fo="fbase_key";class hn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jn(t,e){return t.transaction([Bn],e?"readwrite":"readonly").objectStore(Bn)}function $m(){const t=indexedDB.deleteDatabase(jo);return new hn(t).toPromise()}function Tr(){const t=indexedDB.open(jo,xm);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bn,{keyPath:Fo})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bn)?e(r):(r.close(),await $m(),e(await Tr()))})})}async function fs(t,e,n){const r=Jn(t,!0).put({[Fo]:e,value:n});return new hn(r).toPromise()}async function eg(t,e){const n=Jn(t,!1).get(e),r=await new hn(n).toPromise();return r===void 0?null:r.value}function ds(t,e){const n=Jn(t,!0).delete(e);return new hn(n).toPromise()}const tg=800,ng=3;class Ho{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ng)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Wo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kn._getInstance(Qm()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ym(),!this.activeServiceWorker)return;this.sender=new Jm(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Zm()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tr();return await fs(e,zn,"1"),await ds(e,zn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ds(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Jn(i,!1).getAll();return new hn(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ho.type="LOCAL";const rg=Ho;/**
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
 */function ig(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function sg(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ve("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ig().appendChild(r)})}function og(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new un(3e4,6e4);/**
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
 */function ag(t,e){return e?Ye(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kr extends Vr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lg(t){return Lo(t.auth,new Kr(t),t.bypassAuthState)}function cg(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),Bm(n,new Kr(t),t.bypassAuthState)}async function ug(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),zm(n,new Kr(t),t.bypassAuthState)}/**
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
 */class Vo{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lg;case"linkViaPopup":case"linkViaRedirect":return ug;case"reauthViaPopup":case"reauthViaRedirect":return cg;default:Fe(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fg=new un(2e3,1e4);class Ot extends Vo{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ot.currentPopupAction&&Ot.currentPopupAction.cancel(),Ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Gr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ve(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fg.get())};e()}}Ot.currentPopupAction=null;/**
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
 */const dg="pendingRedirect",wn=new Map;class hg extends Vo{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wn.get(this.auth._key());if(!e){try{const r=await mg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wn.set(this.auth._key(),e)}return this.bypassAuthState||wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mg(t,e){const n=bg(e),r=pg(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function gg(t,e){wn.set(t._key(),e)}function pg(t){return Ye(t._redirectPersistence)}function bg(t){return Tn(dg,t.config.apiKey,t.name)}async function _g(t,e,n=!1){const r=Gn(t),i=ag(r,e),a=await new hg(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const yg=10*60*1e3;class kg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qo(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ve(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yg&&this.cachedEventUids.clear(),this.cachedEventUids.has(hs(e))}saveEventToCache(e){this.cachedEventUids.add(hs(e)),this.lastProcessedEventTime=Date.now()}}function hs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qo({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qo(t);default:return!1}}/**
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
 */async function Ig(t,e={}){return fn(t,"GET","/v1/projects",e)}/**
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
 */const Sg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Eg=/^https?/;async function Tg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ig(t);for(const n of e)try{if(wg(n))return}catch{}Fe(t,"unauthorized-domain")}function wg(t){const e=Er(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Eg.test(n))return!1;if(Sg.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Rg=new un(3e4,6e4);function ms(){const t=qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Cg(t){return new Promise((e,n)=>{var r,i,s;function a(){ms(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ms(),n(Ve(t,"network-request-failed"))},timeout:Rg.get()})}if(!((i=(r=qe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=qe().gapi)===null||s===void 0)&&s.load)a();else{const o=og("iframefcb");return qe()[o]=()=>{gapi.load?a():n(Ve(t,"network-request-failed"))},sg(`https://apis.google.com/js/api.js?onload=${o}`).catch(l=>n(l))}}).catch(e=>{throw Rn=null,e})}let Rn=null;function Ag(t){return Rn=Rn||Cg(t),Rn}/**
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
 */const Og=new un(5e3,15e3),Pg="__/auth/iframe",Ng="emulator/auth/iframe",Dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mg(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jr(e,Ng):`https://${t.config.authDomain}/${Pg}`,r={apiKey:e.apiKey,appName:t.name,v:cn},i=Lg.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ln(r).slice(1)}`}async function zg(t){const e=await Ag(t),n=qe().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:Mg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ve(t,"network-request-failed"),o=qe().setTimeout(()=>{s(a)},Og.get());function l(){qe().clearTimeout(o),i(r)}r.ping(l).then(l,()=>{s(a)})}))}/**
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
 */const Bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ug=500,Wg=600,jg="_blank",Fg="http://localhost";class gs{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hg(t,e,n,r=Ug,i=Wg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Bg),{width:r.toString(),height:i.toString(),top:s,left:a}),c=Ce().toLowerCase();n&&(o=Eo(c)?jg:n),So(c)&&(e=e||Fg,l.scrollbars="yes");const f=Object.entries(l).reduce((d,[h,g])=>`${d}${h}=${g},`,"");if(vm(c)&&o!=="_self")return Vg(e||"",o),new gs(null);const u=window.open(e||"",o,f);K(u,t,"popup-blocked");try{u.focus()}catch{}return new gs(u)}function Vg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qg="__/auth/handler",Gg="emulator/auth/handler";function ps(t,e,n,r,i,s){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:cn,eventId:i};if(e instanceof No){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Kd(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(s||{}))a[l]=c}if(e instanceof dn){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(a.scopes=l.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const l of Object.keys(o))o[l]===void 0&&delete o[l];return`${Kg(t)}?${ln(o).slice(1)}`}function Kg({config:t}){return t.emulator?jr(t,Gg):`https://${t.authDomain}/${qg}`}/**
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
 */const dr="webStorageSupport";class Jg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Uo,this._completeRedirectFn=_g,this._overrideRedirectResult=gg}async _openPopup(e,n,r,i){var s;Qe((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=ps(e,n,r,Er(),i);return Hg(e,a,Gr())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Xm(ps(e,n,r,Er(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qe(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zg(e),r=new kg(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dr,{type:dr},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[dr];a!==void 0&&n(!!a),Fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Tg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ao()||Hr()||qn()}}const Xg=Jg;var bs="@firebase/auth",_s="0.21.4";/**
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
 */class Yg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Zg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Qg(t){Bt(new _t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:a}=r.options;return((o,l)=>{K(s&&!s.includes(":"),"invalid-api-key",{appName:o.name}),K(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const c={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oo(t)},f=new Tm(o,l,c);return im(f,n),f})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bt(new _t("auth-internal",e=>{const n=Gn(e.getProvider("auth").getImmediate());return(r=>new Yg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),lt(bs,_s,Zg(t)),lt(bs,_s,"esm2017")}/**
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
 */const xg=5*60,$g=ao("authIdTokenMaxAge")||xg;let ys=null;const ep=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$g)return;const i=n==null?void 0:n.token;ys!==i&&(ys=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tp(t=ho()){const e=Br(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rm(t,{popupRedirectResolver:Xg,persistence:[rg,Gm,Uo]}),r=ao("authTokenSyncURL");if(r){const s=ep(r);Fm(n,s,()=>s(n.currentUser)),jm(n,a=>s(a))}const i=oo("auth");return i&&wm(n,`http://${i}`),n}Qg("Browser");var np="firebase",rp="9.17.2";/**
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
 */lt(np,rp,"app");/**
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
 */const Go="firebasestorage.googleapis.com",Ko="storageBucket",ip=2*60*1e3,sp=10*60*1e3;/**
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
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function hr(t){return"storage/"+t}function Jr(){const t="An unknown error occurred, please check the error payload for server response.";return new be(pe.UNKNOWN,t)}function op(t){return new be(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function ap(t){return new be(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function lp(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be(pe.UNAUTHENTICATED,t)}function cp(){return new be(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function up(t){return new be(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function fp(){return new be(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function dp(){return new be(pe.CANCELED,"User canceled the upload/download.")}function hp(t){return new be(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function mp(t){return new be(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gp(){return new be(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ko+"' property when initializing the app?")}function pp(){return new be(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function bp(){return new be(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function _p(t){return new be(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function wr(t){return new be(pe.INVALID_ARGUMENT,t)}function Jo(){return new be(pe.APP_DELETED,"The Firebase app was deleted.")}function yp(t){return new be(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Zt(t,e){return new be(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qt(t){throw new be(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Ne{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ne.makeFromUrl(e,n)}catch{return new Ne(e,"")}if(r.path==="")return r;throw mp(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(I){I.path.charAt(I.path.length-1)==="/"&&(I.path_=I.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),l={bucket:1,path:3};function c(I){I.path_=decodeURIComponent(I.path)}const f="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",h=new RegExp(`^https?://${u}/${f}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},p=n===Go?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",_=new RegExp(`^https?://${p}/${i}/${b}`,"i"),w=[{regex:o,indices:l,postModify:s},{regex:h,indices:g,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let I=0;I<w.length;I++){const T=w[I],O=T.regex.exec(e);if(O){const E=O[T.indices.bucket];let V=O[T.indices.path];V||(V=""),r=new Ne(E,V),T.postModify(r);break}}if(r==null)throw hp(e);return r}}class kp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function vp(t,e,n){let r=1,i=null,s=null,a=!1,o=0;function l(){return o===2}let c=!1;function f(...b){c||(c=!0,e.apply(null,b))}function u(b){i=setTimeout(()=>{i=null,t(h,l())},b)}function d(){s&&clearTimeout(s)}function h(b,..._){if(c){d();return}if(b){d(),f.call(null,b,..._);return}if(l()||a){d(),f.call(null,b,..._);return}r<64&&(r*=2);let w;o===1?(o=2,w=0):w=(r+Math.random())*1e3,u(w)}let g=!1;function p(b){g||(g=!0,d(),!c&&(i!==null?(b||(o=2),clearTimeout(i),u(0)):b||(o=1)))}return u(0),s=setTimeout(()=>{a=!0,p(!0)},n),p}function Ip(t){t(!1)}/**
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
 */function Sp(t){return t!==void 0}function Ep(t){return typeof t=="object"&&!Array.isArray(t)}function Xr(t){return typeof t=="string"||t instanceof String}function ks(t){return Yr()&&t instanceof Blob}function Yr(){return typeof Blob<"u"&&!Bd()}function Rr(t,e,n,r){if(r<e)throw wr(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw wr(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Xn(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Xo(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function Tp(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class wp{constructor(e,n,r,i,s,a,o,l,c,f,u,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=f,this.connectionFactory_=u,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((h,g)=>{this.resolve_=h,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yn(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=o=>{const l=o.loaded,c=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const o=s.getErrorCode()===pt.NO_ERROR,l=s.getStatus();if(!o||Tp(l,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===pt.ABORT;r(!1,new yn(!1,null,f));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yn(c,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(o,o.getResponse());Sp(l)?s(l):s()}catch(l){a(l)}else if(o!==null){const l=Jr();l.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,l)):a(l)}else if(i.canceled){const l=this.appDelete_?Jo():dp();a(l)}else{const l=fp();a(l)}};this.canceled_?n(!1,new yn(!1,null,!0)):this.backoffId_=vp(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ip(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yn{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Rp(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Cp(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Ap(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Op(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Pp(t,e,n,r,i,s,a=!0){const o=Xo(t.urlParams),l=t.url+o,c=Object.assign({},t.headers);return Ap(c,e),Rp(c,n),Cp(c,s),Op(c,r),new wp(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function Np(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Dp(...t){const e=Np();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Yr())return new Blob(t);throw new be(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Lp(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function Mp(t){if(typeof atob>"u")throw _p("base-64");return atob(t)}/**
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
 */const je={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class mr{constructor(e,n){this.data=e,this.contentType=n||null}}function Yo(t,e){switch(t){case je.RAW:return new mr(Zo(e));case je.BASE64:case je.BASE64URL:return new mr(Qo(t,e));case je.DATA_URL:return new mr(Bp(e),Up(e))}throw Jr()}function Zo(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zp(t){let e;try{e=decodeURIComponent(t)}catch{throw Zt(je.DATA_URL,"Malformed data URL.")}return Zo(e)}function Qo(t,e){switch(t){case je.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Zt(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case je.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Zt(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Mp(e)}catch(i){throw i.message.includes("polyfill")?i:Zt(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class xo{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Zt(je.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Wp(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Bp(t){const e=new xo(t);return e.base64?Qo(je.BASE64,e.rest):zp(e.rest)}function Up(t){return new xo(t).contentType}function Wp(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class st{constructor(e,n){let r=0,i="";ks(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ks(this.data_)){const r=this.data_,i=Lp(r,e,n);return i===null?null:new st(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new st(r,!0)}}static getBlob(...e){if(Yr()){const n=e.map(r=>r instanceof st?r.data_:r);return new st(Dp.apply(null,n))}else{const n=e.map(a=>Xr(a)?Yo(je.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let o=0;o<a.length;o++)i[s++]=a[o]}),new st(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Zr(t){let e;try{e=JSON.parse(t)}catch{return null}return Ep(e)?e:null}/**
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
 */function jp(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Fp(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function $o(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function Hp(t,e){return e}class Pe{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Hp}}let kn=null;function Vp(t){return!Xr(t)||t.length<2?t:$o(t)}function ea(){if(kn)return kn;const t=[];t.push(new Pe("bucket")),t.push(new Pe("generation")),t.push(new Pe("metageneration")),t.push(new Pe("name","fullPath",!0));function e(s,a){return Vp(a)}const n=new Pe("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new Pe("size");return i.xform=r,t.push(i),t.push(new Pe("timeCreated")),t.push(new Pe("updated")),t.push(new Pe("md5Hash",null,!0)),t.push(new Pe("cacheControl",null,!0)),t.push(new Pe("contentDisposition",null,!0)),t.push(new Pe("contentEncoding",null,!0)),t.push(new Pe("contentLanguage",null,!0)),t.push(new Pe("contentType",null,!0)),t.push(new Pe("metadata","customMetadata",!0)),kn=t,kn}function qp(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ne(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function Gp(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return qp(r,t),r}function ta(t,e,n){const r=Zr(e);return r===null?null:Gp(t,r,n)}function Kp(t,e,n,r){const i=Zr(e);if(i===null||!Xr(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(c=>{const f=t.bucket,u=t.fullPath,d="/b/"+a(f)+"/o/"+a(u),h=Xn(d,n,r),g=Xo({alt:"media",token:c});return h+g})[0]}function Jp(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const vs="prefixes",Is="items";function Xp(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[vs])for(const i of n[vs]){const s=i.replace(/\/$/,""),a=t._makeStorageReference(new Ne(e,s));r.prefixes.push(a)}if(n[Is])for(const i of n[Is]){const s=t._makeStorageReference(new Ne(e,i.name));r.items.push(s)}return r}function Yp(t,e,n){const r=Zr(n);return r===null?null:Xp(t,e,r)}class Qr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function xr(t){if(!t)throw Jr()}function Zp(t,e){function n(r,i){const s=ta(t,i,e);return xr(s!==null),s}return n}function Qp(t,e){function n(r,i){const s=Yp(t,e,i);return xr(s!==null),s}return n}function xp(t,e){function n(r,i){const s=ta(t,i,e);return xr(s!==null),Kp(s,i,t.host,t._protocol)}return n}function $r(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=cp():i=lp():n.getStatus()===402?i=ap(t.bucket):n.getStatus()===403?i=up(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $p(t){const e=$r(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=op(t.path)),s.serverResponse=i.serverResponse,s}return n}function e0(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const a=e.bucketOnlyServerUrl(),o=Xn(a,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,f=new Qr(o,l,Qp(t,e.bucket),c);return f.urlParams=s,f.errorHandler=$r(e),f}function t0(t,e,n){const r=e.fullServerUrl(),i=Xn(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,o=new Qr(i,s,xp(t,n),a);return o.errorHandler=$p(e),o}function n0(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function r0(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=n0(null,e)),r}function i0(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let w="";for(let I=0;I<2;I++)w=w+Math.random().toString().slice(2);return w}const l=o();a["Content-Type"]="multipart/related; boundary="+l;const c=r0(e,r,i),f=Jp(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",h=st.getBlob(u,r,d);if(h===null)throw pp();const g={name:c.fullPath},p=Xn(s,t.host,t._protocol),b="POST",_=t.maxUploadRetryTime,v=new Qr(p,b,Zp(t,n),_);return v.urlParams=g,v.headers=a,v.body=h.uploadData(),v.errorHandler=$r(e),v}class s0{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=pt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=pt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=pt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw qt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class o0 extends s0{initXhr(){this.xhr_.responseType="text"}}function ei(){return new o0}/**
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
 */class vt{constructor(e,n){this._service=e,n instanceof Ne?this._location=n:this._location=Ne.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vt(e,n)}get root(){const e=new Ne(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return $o(this._location.path)}get storage(){return this._service}get parent(){const e=jp(this._location.path);if(e===null)return null;const n=new Ne(this._location.bucket,e);return new vt(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw yp(e)}}function a0(t,e,n){t._throwIfRoot("uploadBytes");const r=i0(t.storage,t._location,ea(),new st(e,!0),n);return t.storage.makeRequestWithTokens(r,ei).then(i=>({metadata:i,ref:t}))}function l0(t,e,n=je.RAW,r){t._throwIfRoot("uploadString");const i=Yo(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),a0(t,i.data,s)}function c0(t,e){e!=null&&typeof e.maxResults=="number"&&Rr("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=e0(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,ei)}function u0(t){t._throwIfRoot("getDownloadURL");const e=t0(t.storage,t._location,ea());return t.storage.makeRequestWithTokens(e,ei).then(n=>{if(n===null)throw bp();return n})}function f0(t,e){const n=Fp(t._location.path,e),r=new Ne(t._location.bucket,n);return new vt(t.storage,r)}/**
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
 */function d0(t){return/^[A-Za-z]+:\/\//.test(t)}function h0(t,e){return new vt(t,e)}function na(t,e){if(t instanceof ti){const n=t;if(n._bucket==null)throw gp();const r=new vt(n,n._bucket);return e!=null?na(r,e):r}else return e!==void 0?f0(t,e):t}function m0(t,e){if(e&&d0(e)){if(t instanceof ti)return h0(t,e);throw wr("To use ref(service, url), the first argument must be a Storage instance.")}else return na(t,e)}function Ss(t,e){const n=e==null?void 0:e[Ko];return n==null?null:Ne.makeFromBucketSpec(n,t)}function g0(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Md(i,t.app.options.projectId))}class ti{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Go,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=ip,this._maxUploadRetryTime=sp,this._requests=new Set,i!=null?this._bucket=Ne.makeFromBucketSpec(i,this._host):this._bucket=Ss(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ne.makeFromBucketSpec(this._url,e):this._bucket=Ss(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Rr("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Rr("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vt(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new kp(Jo());{const a=Pp(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Es="@firebase/storage",Ts="0.11.2";/**
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
 */const ra="storage";function p0(t,e,n,r){return t=Ue(t),l0(t,e,n,r)}function b0(t,e){return t=Ue(t),c0(t,e)}function _0(t){return t=Ue(t),u0(t)}function ia(t,e){return t=Ue(t),m0(t,e)}function y0(t=ho(),e){t=Ue(t);const r=Br(t,ra).getImmediate({identifier:e}),i=Nd("storage");return i&&k0(r,...i),r}function k0(t,e,n,r={}){g0(t,e,n,r)}function v0(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ti(n,r,i,e,cn)}function I0(){Bt(new _t(ra,v0,"PUBLIC").setMultipleInstances(!0)),lt(Es,Ts,""),lt(Es,Ts,"esm2017")}I0();const S0={apiKey:"AIzaSyDfn7JlTVzJ2-jxhhgwrdf6tbmYLinZRtI",authDomain:"peperepo-96e21.firebaseapp.com",projectId:"peperepo-96e21",storageBucket:"peperepo-96e21.appspot.com",messagingSenderId:"848166096970",appId:"1:848166096970:web:f2618030d2d45ebb1bd6b3"},sa=fo(S0),Yn=tp(sa),oa=y0(sa),E0=ia(oa),ni=Nr(!1);function T0(t,e){Wm(Yn,t,e).then(n=>{ni.set(n.user!==void 0)}).catch(n=>{console.error(n)})}Yn.onAuthStateChanged(t=>{ni.set(t!==null)});function w0(t){let e;return{c(){e=we("Login")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function R0(t){let e,n,r,i,s,a,o,l;function c(h){t[3](h)}let f={style:"color:white",size:"xs",type:"email",placeholder:"John@Doe.com"};t[0]!==void 0&&(f.value=t[0]),e=new Hi({props:f}),$.push(()=>_e(e,"value",c));function u(h){t[4](h)}let d={style:"color:white",size:"xs",type:"password",placeholder:"password101"};return t[1]!==void 0&&(d.value=t[1]),i=new Hi({props:d}),$.push(()=>_e(i,"value",u)),o=new jn({props:{size:"xs",variant:"subtle",$$slots:{default:[w0]},$$scope:{ctx:t}}}),o.$on("click",t[2]),{c(){D(e.$$.fragment),r=he(),D(i.$$.fragment),a=he(),D(o.$$.fragment)},m(h,g){P(e,h,g),A(h,r,g),P(i,h,g),A(h,a,g),P(o,h,g),l=!0},p(h,g){const p={};!n&&g&1&&(n=!0,p.value=h[0],Se(()=>n=!1)),e.$set(p);const b={};!s&&g&2&&(s=!0,b.value=h[1],Se(()=>s=!1)),i.$set(b);const _={};g&32&&(_.$$scope={dirty:g,ctx:h}),o.$set(_)},i(h){l||(y(e.$$.fragment,h),y(i.$$.fragment,h),y(o.$$.fragment,h),l=!0)},o(h){k(e.$$.fragment,h),k(i.$$.fragment,h),k(o.$$.fragment,h),l=!1},d(h){N(e,h),h&&C(r),N(i,h),h&&C(a),N(o,h)}}}function C0(t){let e,n;return e=new on({props:{spacing:"xs",$$slots:{default:[R0]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&35&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function A0(t,e,n){let r,i;const s=()=>{T0(r,i)};function a(l){r=l,n(0,r)}function o(l){i=l,n(1,i)}return[r,i,s,a,o]}class O0 extends x{constructor(e){super(),Q(this,e,A0,C0,Z,{})}}function P0(t){let e;return{c(){e=we("Log out")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function N0(t){let e,n,r,i;return r=new jn({props:{variant:"subtle",size:"xs",$$slots:{default:[P0]},$$scope:{ctx:t}}}),r.$on("click",t[0]),{c(){e=te("span"),e.textContent=`${Yn.currentUser.email}`,n=he(),D(r.$$.fragment)},m(s,a){A(s,e,a),A(s,n,a),P(r,s,a),i=!0},p(s,a){const o={};a&2&&(o.$$scope={dirty:a,ctx:s}),r.$set(o)},i(s){i||(y(r.$$.fragment,s),i=!0)},o(s){k(r.$$.fragment,s),i=!1},d(s){s&&C(e),s&&C(n),N(r,s)}}}function D0(t){let e,n;return e=new on({props:{spacing:"xs",$$slots:{default:[N0]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&2&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function L0(t){return[()=>{Yn.signOut()}]}class M0 extends x{constructor(e){super(),Q(this,e,L0,D0,Z,{})}}let vn;const z0=new Uint8Array(16);function B0(){if(!vn&&(vn=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!vn))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return vn(z0)}const Te=[];for(let t=0;t<256;++t)Te.push((t+256).toString(16).slice(1));function U0(t,e=0){return(Te[t[e+0]]+Te[t[e+1]]+Te[t[e+2]]+Te[t[e+3]]+"-"+Te[t[e+4]]+Te[t[e+5]]+"-"+Te[t[e+6]]+Te[t[e+7]]+"-"+Te[t[e+8]]+Te[t[e+9]]+"-"+Te[t[e+10]]+Te[t[e+11]]+Te[t[e+12]]+Te[t[e+13]]+Te[t[e+14]]+Te[t[e+15]]).toLowerCase()}const W0=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ws={randomUUID:W0};function j0(t,e,n){if(ws.randomUUID&&!e&&!t)return ws.randomUUID();t=t||{};const r=t.random||(t.rng||B0)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return U0(r)}const Un=Nr([]),F0=t=>{const e=ia(oa,j0()+".jpg");p0(e,t,"data_url").then(n=>{H0()})},aa=()=>{b0(E0).then(t=>{t.items.forEach(e=>{_0(e).then(r=>{Un.set([...da(Un),r])})})})},H0=()=>{Un.set([]),aa()},V0="/peperepo/assets/add_white-3f691d6f.png";function q0(t){let e;return{c(){e=we("Upload new Pepe")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function G0(t){let e,n;return e=new Mr({props:{width:"150px",src:V0}}),e.$on("click",t[7]),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p:ne,i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function K0(t){let e,n;return e=new Mr({props:{src:t[1]}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&2&&(s.src=r[1]),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function J0(t){let e,n,r,i;const s=[K0,G0],a=[];function o(l,c){return l[1]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,c){let f=e;e=o(l),e===f?a[e].p(l,c):(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n?n.p(l,c):(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function X0(t){let e;return{c(){e=we("Upload")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function Y0(t){let e,n,r,i,s,a,o,l,c,f;return e=new to({props:{$$slots:{default:[J0]},$$scope:{ctx:t}}}),s=new _d({props:{h:"lg"}}),o=new jn({props:{fullSize:!0,$$slots:{default:[X0]},$$scope:{ctx:t}}}),o.$on("click",t[5]),{c(){D(e.$$.fragment),n=he(),r=te("input"),i=he(),D(s.$$.fragment),a=he(),D(o.$$.fragment),Ke(r,"display","none"),m(r,"type","file"),m(r,"accept",".jpg, .jpeg, .png"),m(r,"alt","image input")},m(u,d){P(e,u,d),A(u,n,d),A(u,r,d),t[9](r),A(u,i,d),P(s,u,d),A(u,a,d),P(o,u,d),l=!0,c||(f=ct(r,"change",t[8]),c=!0)},p(u,d){const h={};d&1030&&(h.$$scope={dirty:d,ctx:u}),e.$set(h);const g={};d&1024&&(g.$$scope={dirty:d,ctx:u}),o.$set(g)},i(u){l||(y(e.$$.fragment,u),y(s.$$.fragment,u),y(o.$$.fragment,u),l=!0)},o(u){k(e.$$.fragment,u),k(s.$$.fragment,u),k(o.$$.fragment,u),l=!1},d(u){N(e,u),u&&C(n),u&&C(r),t[9](null),u&&C(i),N(s,u),u&&C(a),N(o,u),c=!1,f()}}}function Z0(t){let e,n,r,i;return e=new jn({props:{size:"xs",variant:"outline",$$slots:{default:[q0]},$$scope:{ctx:t}}}),e.$on("click",t[6]),r=new dd({props:{centered:!0,opened:t[0],title:"Upload rare pepe",size:"xs",$$slots:{default:[Y0]},$$scope:{ctx:t}}}),r.$on("close",t[4]),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},p(s,[a]){const o={};a&1024&&(o.$$scope={dirty:a,ctx:s}),e.$set(o);const l={};a&1&&(l.opened=s[0]),a&1030&&(l.$$scope={dirty:a,ctx:s}),r.$set(l)},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&C(n),N(r,s)}}}function Q0(t,e,n){let r=!1,i,s;const a=h=>{let g=h.target.files[0],p=new FileReader;p.readAsDataURL(g),p.onload=b=>{n(1,i=b.target.result.toString())}},o=()=>{n(0,r=!1),n(1,i=void 0)},l=()=>{i!==void 0&&(F0(i),o())},c=()=>n(0,r=!0),f=()=>{s.click()},u=h=>a(h);function d(h){$[h?"unshift":"push"](()=>{s=h,n(2,s)})}return[r,i,s,a,o,l,c,f,u,d]}class x0 extends x{constructor(e){super(),Q(this,e,Q0,Z0,Z,{})}}function $0(t){let e,n;return e=new O0({}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function e1(t){let e,n;return e=new on({props:{$$slots:{default:[t1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function t1(t){let e,n,r,i;return e=new x0({}),r=new M0({}),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&C(n),N(r,s)}}}function n1(t){let e,n,r,i;const s=[e1,$0],a=[];function o(l,c){return l[0]?0:1}return e=o(t),n=a[e]=s[e](t),{c(){n.c(),r=ve()},m(l,c){a[e].m(l,c),A(l,r,c),i=!0},p(l,[c]){let f=e;e=o(l),e!==f&&(ce(),k(a[f],1,1,()=>{a[f]=null}),ue(),n=a[e],n||(n=a[e]=s[e](l),n.c()),y(n,1),n.m(r.parentNode,r))},i(l){i||(y(n),i=!0)},o(l){k(n),i=!1},d(l){a[e].d(l),l&&C(r)}}}function r1(t,e,n){let r;return Wn(t,ni,i=>n(0,r=i)),[r]}class i1 extends x{constructor(e){super(),Q(this,e,r1,n1,Z,{})}}function s1(t){let e;return{c(){e=we("pepe repo")},m(n,r){A(n,e,r)},d(n){n&&C(e)}}}function o1(t){let e,n,r,i;return e=new Ed({props:{$$slots:{default:[s1]},$$scope:{ctx:t}}}),r=new i1({}),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},p(s,a){const o={};a&1&&(o.$$scope={dirty:a,ctx:s}),e.$set(o)},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&C(n),N(r,s)}}}function a1(t){let e,n;return e=new on({props:{position:"apart",my:"lg",$$slots:{default:[o1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function l1(t){let e,n;return e=new no({props:{$$slots:{default:[a1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class c1 extends x{constructor(e){super(),Q(this,e,null,l1,Z,{})}}function Rs(t,e,n){const r=t.slice();return r[2]=e[n],r}function Cs(t){let e,n;return e=new Mr({props:{radius:"md",width:As,height:As,src:t[2],alt:""}}),e.$on("click",t[1]),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,i){const s={};i&1&&(s.src=r[2]),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function u1(t){let e,n,r=t[0],i=[];for(let a=0;a<r.length;a+=1)i[a]=Cs(Rs(t,r,a));const s=a=>k(i[a],1,1,()=>{i[a]=null});return{c(){for(let a=0;a<i.length;a+=1)i[a].c();e=ve()},m(a,o){for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,o);A(a,e,o),n=!0},p(a,o){if(o&1){r=a[0];let l;for(l=0;l<r.length;l+=1){const c=Rs(a,r,l);i[l]?(i[l].p(c,o),y(i[l],1)):(i[l]=Cs(c),i[l].c(),y(i[l],1),i[l].m(e.parentNode,e))}for(ce(),l=r.length;l<i.length;l+=1)s(l);ue()}},i(a){if(!n){for(let o=0;o<r.length;o+=1)y(i[o]);n=!0}},o(a){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)k(i[o]);n=!1},d(a){ba(i,a),a&&C(e)}}}function f1(t){let e,n;return e=new on({props:{$$slots:{default:[u1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&33&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}const As=300;function d1(t,e,n){let r;return Wn(t,Un,s=>n(0,r=s)),aa(),[r,()=>{console.log("first")}]}class h1 extends x{constructor(e){super(),Q(this,e,d1,f1,Z,{})}}function m1(t){let e,n;return e=new h1({}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}function g1(t){let e,n;return e=new no({props:{$$slots:{default:[m1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class p1 extends x{constructor(e){super(),Q(this,e,null,g1,Z,{})}}function b1(t){let e,n,r,i;return e=new c1({}),r=new p1({}),{c(){D(e.$$.fragment),n=he(),D(r.$$.fragment)},m(s,a){P(e,s,a),A(s,n,a),P(r,s,a),i=!0},i(s){i||(y(e.$$.fragment,s),y(r.$$.fragment,s),i=!0)},o(s){k(e.$$.fragment,s),k(r.$$.fragment,s),i=!1},d(s){N(e,s),s&&C(n),N(r,s)}}}function _1(t){let e,n;return e=new Ya({props:{withGlobalStyles:!0,themeObserver:"dark",$$slots:{default:[b1]},$$scope:{ctx:t}}}),{c(){D(e.$$.fragment)},m(r,i){P(e,r,i),n=!0},p(r,[i]){const s={};i&1&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(y(e.$$.fragment,r),n=!0)},o(r){k(e.$$.fragment,r),n=!1},d(r){N(e,r)}}}class y1 extends x{constructor(e){super(),Q(this,e,null,_1,Z,{})}}new y1({target:document.getElementById("app")});
