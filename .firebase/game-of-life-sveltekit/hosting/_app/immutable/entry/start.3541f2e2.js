import{o as we,t as _e}from"../chunks/scheduler.65fd200e.js";import{S as Be,a as We,I as q,g as Me,f as Fe,b as ye,c as le,s as ee,i as ve,d as F,e as K,P as Ve,h as tt}from"../chunks/singletons.f51d56e5.js";import{u as nt}from"../chunks/parse.bee59afc.js";function at(t,r){return t==="/"||r==="ignore"?t:r==="never"?t.endsWith("/")?t.slice(0,-1):t:r==="always"&&!t.endsWith("/")?t+"/":t}function rt(t){return t.split("%25").map(decodeURI).join("%25")}function ot(t){for(const r in t)t[r]=decodeURIComponent(t[r]);return t}const it=["href","pathname","search","searchParams","toString","toJSON"];function st(t,r){const o=new URL(t);for(const c of it)Object.defineProperty(o,c,{get(){return r(),t[c]},enumerable:!0,configurable:!0});return ct(o),o}function ct(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const lt="/__data.json";function ft(t){return t.replace(/\/$/,"")+lt}function ut(...t){let r=5381;for(const o of t)if(typeof o=="string"){let c=o.length;for(;c;)r=r*33^o.charCodeAt(--c)}else if(ArrayBuffer.isView(o)){const c=new Uint8Array(o.buffer,o.byteOffset,o.byteLength);let u=c.length;for(;u;)r=r*33^c[--u]}else throw new TypeError("value must be a string or TypedArray");return(r>>>0).toString(36)}let xe=0;const fe=window.fetch;function dt(){xe+=1}function pt(){xe-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(o,c)=>{const u=o instanceof Request?o.url:o.toString(),p=new Error().stack.split(`
`),b=p.findIndex(m=>m.includes("load@")||m.includes("at load")),w=p.slice(0,b+2).join(`
`);return(t?w.includes("src/runtime/client/client.js"):xe)&&console.warn(`Loading ${u} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(o instanceof Request?o.method:(c==null?void 0:c.method)||"GET")!=="GET"&&ne.delete(Re(o)),fe(o,c)}}const ne=new Map;function ht(t,r){const o=Re(t,r),c=document.querySelector(o);if(c!=null&&c.textContent){const{body:u,...p}=JSON.parse(c.textContent),b=c.getAttribute("data-ttl");return b&&ne.set(o,{body:u,init:p,ttl:1e3*Number(b)}),Promise.resolve(new Response(u,p))}return fe(t,r)}function gt(t,r,o){if(ne.size>0){const c=Re(t,o),u=ne.get(c);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(o==null?void 0:o.cache))return new Response(u.body,u.init);ne.delete(c)}}return fe(r,o)}function Re(t,r){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(r!=null&&r.headers||r!=null&&r.body){const u=[];r.headers&&u.push([...new Headers(r.headers)].join(",")),r.body&&(typeof r.body=="string"||ArrayBuffer.isView(r.body))&&u.push(r.body),c+=`[data-hash="${ut(...u)}"]`}return c}const mt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function wt(t){const r=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${yt(t).map(c=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(u)return r.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const p=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(p)return r.push({name:p[1],matcher:p[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const b=c.split(/\[(.+?)\](?!\])/);return"/"+b.map((k,g)=>{if(g%2){if(k.startsWith("x+"))return be(String.fromCharCode(parseInt(k.slice(2),16)));if(k.startsWith("u+"))return be(String.fromCharCode(...k.slice(2).split("-").map(A=>parseInt(A,16))));const m=mt.exec(k);if(!m)throw new Error(`Invalid param: ${k}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,T,C,O]=m;return r.push({name:C,matcher:O,optional:!!D,rest:!!T,chained:T?g===1&&b[0]==="":!1}),T?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return be(k)}).join("")}).join("")}/?$`),params:r}}function _t(t){return!/^\([^)]+\)$/.test(t)}function yt(t){return t.slice(1).split("/").filter(_t)}function vt(t,r,o){const c={},u=t.slice(1);let p=0;for(let b=0;b<r.length;b+=1){const w=r[b];let k=u[b-p];if(w.chained&&w.rest&&p&&(k=u.slice(b-p,b+1).filter(g=>g).join("/"),p=0),k===void 0){w.rest&&(c[w.name]="");continue}if(!w.matcher||o[w.matcher](k)){c[w.name]=k;const g=r[b+1],m=u[b+1];g&&!g.rest&&g.optional&&m&&w.chained&&(p=0);continue}if(w.optional&&w.chained){p++;continue}return}if(!p)return c}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function bt({nodes:t,server_loads:r,dictionary:o,matchers:c}){const u=new Set(r);return Object.entries(o).map(([w,[k,g,m]])=>{const{pattern:D,params:T}=wt(w),C={id:w,exec:O=>{const A=D.exec(O);if(A)return vt(A,T,c)},errors:[1,...m||[]].map(O=>t[O]),layouts:[0,...g||[]].map(b),leaf:p(k)};return C.errors.length=C.layouts.length=Math.max(C.errors.length,C.layouts.length),C});function p(w){const k=w<0;return k&&(w=~w),[k,t[w]]}function b(w){return w===void 0?w:[u.has(w),t[w]]}}function Ye(t){try{return JSON.parse(sessionStorage[t])}catch{}}function ze(t,r){const o=JSON.stringify(r);try{sessionStorage[t]=o}catch{}}function kt(t){return t.filter(r=>r!=null)}function Et(t){function r(o,c){if(o)for(const u in o){if(u[0]==="_"||t.has(u))continue;const p=[...t.values()],b=St(u,c==null?void 0:c.slice(c.lastIndexOf(".")))??`valid exports are ${p.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${u}'${c?` in ${c}`:""} (${b})`)}}return r}function St(t,r=".js"){const o=[];if($e.has(t)&&o.push(`+layout${r}`),Xe.has(t)&&o.push(`+page${r}`),Qe.has(t)&&o.push(`+layout.server${r}`),xt.has(t)&&o.push(`+page.server${r}`),Rt.has(t)&&o.push(`+server${r}`),o.length>0)return`'${t}' is a valid export in ${o.slice(0,-1).join(", ")}${o.length>1?" or ":""}${o.at(-1)}`}const $e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Xe=new Set([...$e,"entries"]),Qe=new Set([...$e]),xt=new Set([...Qe,"actions","entries"]),Rt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),$t=Et(Xe);async function Pt(t){var r;for(const o in t)if(typeof((r=t[o])==null?void 0:r.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,u])=>[c,await u])));return t}class te{constructor(r,o){this.status=r,typeof o=="string"?this.body={message:o}:o?this.body=o:this.body={message:`Error: ${r}`}}toString(){return JSON.stringify(this.body)}}class Je{constructor(r,o){this.status=r,this.location=o}}function Lt(t,r){const o=/^(moz-icon|view-source|jar):/.exec(r);o&&console.warn(`${t}: Calling \`depends('${r}')\` will throw an error in Firefox because \`${o[1]}\` is a special URI scheme`)}const ke="x-sveltekit-invalidated",At="x-sveltekit-trailing-slash",G=Ye(Be)??{},Z=Ye(We)??{};function Ee(t){G[t]=ee()}function Ot(t,r){var Ne;const o=bt(t),c=t.nodes[0],u=t.nodes[1];c(),u();const p=document.documentElement,b=[],w=[];let k=null;const g={before_navigate:[],on_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},D=!1,T=!1,C=!0,O=!1,A=!1,V=!1,z=!1,H,I=(Ne=history.state)==null?void 0:Ne[q];I||(I=Date.now(),history.replaceState({...history.state,[q]:I},"",location.href));const ue=G[I];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ae,W;async function Pe(){if(W=W||Promise.resolve(),await W,!W)return;W=null;const e=new URL(location.href),s=X(e,!0);k=null;const n=ae={},i=s&&await he(s);if(n===ae&&i){if(i.type==="redirect")return re(new URL(i.location,e).href,{},[e.pathname],n);i.props.page!==void 0&&(M=i.props.page),H.$set(i.props)}}function Le(e){w.some(s=>s==null?void 0:s.snapshot)&&(Z[e]=w.map(s=>{var n;return(n=s==null?void 0:s.snapshot)==null?void 0:n.capture()}))}function Ae(e){var s;(s=Z[e])==null||s.forEach((n,i)=>{var a,l;(l=(a=w[i])==null?void 0:a.snapshot)==null||l.restore(n)})}function Oe(){Ee(I),ze(Be,G),Le(I),ze(We,Z)}async function re(e,{noScroll:s=!1,replaceState:n=!1,keepFocus:i=!1,state:a={},invalidateAll:l=!1},f,y){return typeof e=="string"&&(e=new URL(e,Me(document))),ce({url:e,scroll:s?ee():null,keepfocus:i,redirect_chain:f,details:{state:a,replaceState:n},nav_token:y,accepted:()=>{l&&(z=!0)},blocked:()=>{},type:"goto"})}async function je(e){return k={id:e.id,promise:he(e).then(s=>(s.type==="loaded"&&s.state.error&&(k=null),s))},k.promise}async function oe(...e){const n=o.filter(i=>e.some(a=>i.exec(a))).map(i=>Promise.all([...i.layouts,i.leaf].map(a=>a==null?void 0:a[1]())));await Promise.all(n)}function Ue(e){var i;if(e.state.error&&document.querySelector("vite-error-overlay"))return;m=e.state;const s=document.querySelector("style[data-sveltekit]");s&&s.remove(),M=e.props.page,H=new t.root({target:r,props:{...e.props,stores:F,components:w},hydrate:!0}),Ae(I);const n={from:null,to:{params:m.params,route:{id:((i=m.route)==null?void 0:i.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};g.after_navigate.forEach(a=>a(n)),T=!0}async function Y({url:e,params:s,branch:n,status:i,error:a,route:l,form:f}){let y="never";for(const d of n)(d==null?void 0:d.slash)!==void 0&&(y=d.slash);e.pathname=at(e.pathname,y),e.search=e.search;const v={type:"loaded",state:{url:e,params:s,branch:n,error:a,route:l},props:{constructors:kt(n).map(d=>d.node.component)}};f!==void 0&&(v.props.form=f);let _={},$=!M,x=0;for(let d=0;d<Math.max(n.length,m.branch.length);d+=1){const h=n[d],L=m.branch[d];(h==null?void 0:h.data)!==(L==null?void 0:L.data)&&($=!0),h&&(_={..._,...h.data},$&&(v.props[`data_${x}`]=_),x+=1)}return(!m.url||e.href!==m.url.href||m.error!==a||f!==void 0&&f!==M.form||$)&&(v.props.page={error:a,params:s,route:{id:(l==null?void 0:l.id)??null},status:i,url:new URL(e),form:f??null,data:$?_:M.data}),v}async function de({loader:e,parent:s,url:n,params:i,route:a,server_data_node:l}){var _,$,x;let f=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if($t(v.universal),(_=v.universal)!=null&&_.load){let P=function(...h){for(const L of h){Lt(a.id,L);const{href:j}=new URL(L,n);y.dependencies.add(j)}};const d={route:new Proxy(a,{get:(h,L)=>(y.route=!0,h[L])}),params:new Proxy(i,{get:(h,L)=>(y.params.add(L),h[L])}),data:(l==null?void 0:l.data)??null,url:st(n,()=>{y.url=!0}),async fetch(h,L){let j;h instanceof Request?(j=h.url,L={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:h.headers,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...L}):j=h;const N=new URL(j,n);return P(N.href),N.origin===n.origin&&(j=N.href.slice(n.origin.length)),T?gt(j,N.href,L):ht(j,L)},setHeaders:()=>{},depends:P,parent(){return y.parent=!0,s()}};try{if(dt(),f=await v.universal.load.call(null,d)??null,f!=null&&Object.getPrototypeOf(f)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof f!="object"?`a ${typeof f}`:f instanceof Response?"a Response object":Array.isArray(f)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{pt()}f=f?await Pt(f):null}return{node:v,loader:e,server:l,universal:($=v.universal)!=null&&$.load?{type:"data",data:f,uses:y}:null,data:f??(l==null?void 0:l.data)??null,slash:((x=v.universal)==null?void 0:x.trailingSlash)??(l==null?void 0:l.slash)}}function Ie(e,s,n,i,a){if(z)return!0;if(!i)return!1;if(i.parent&&e||i.route&&s||i.url&&n)return!0;for(const l of i.params)if(a[l]!==m.params[l])return!0;for(const l of i.dependencies)if(b.some(f=>f(new URL(l))))return!0;return!1}function pe(e,s){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?s??null:null}async function he({id:e,invalidating:s,url:n,params:i,route:a}){if((k==null?void 0:k.id)===e)return k.promise;const{errors:l,layouts:f,leaf:y}=a,v=[...f,y];l.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let _=null;const $=m.url?e!==m.url.pathname+m.url.search:!1,x=m.route?a.id!==m.route.id:!1;let P=!1;const d=v.map((E,R)=>{var J;const S=m.branch[R],U=!!(E!=null&&E[0])&&((S==null?void 0:S.loader)!==E[1]||Ie(P,x,$,(J=S.server)==null?void 0:J.uses,i));return U&&(P=!0),U});if(d.some(Boolean)){try{_=await Ke(n,d)}catch(E){return ie({status:E instanceof te?E.status:500,error:await Q(E,{url:n,params:i,route:{id:a.id}}),url:n,route:a})}if(_.type==="redirect")return _}const h=_==null?void 0:_.nodes;let L=!1;const j=v.map(async(E,R)=>{var ge;if(!E)return;const S=m.branch[R],U=h==null?void 0:h[R];if((!U||U.type==="skip")&&E[1]===(S==null?void 0:S.loader)&&!Ie(L,x,$,(ge=S.universal)==null?void 0:ge.uses,i))return S;if(L=!0,(U==null?void 0:U.type)==="error")throw U;return de({loader:E[1],url:n,params:i,route:a,parent:async()=>{var He;const qe={};for(let me=0;me<R;me+=1)Object.assign(qe,(He=await j[me])==null?void 0:He.data);return qe},server_data_node:pe(U===void 0&&E[0]?{type:"skip"}:U??null,E[0]?S==null?void 0:S.server:void 0)})});for(const E of j)E.catch(()=>{});const N=[];for(let E=0;E<v.length;E+=1)if(v[E])try{N.push(await j[E])}catch(R){if(R instanceof Je)return{type:"redirect",location:R.location};let S=500,U;if(h!=null&&h.includes(R))S=R.status??S,U=R.error;else if(R instanceof te)S=R.status,U=R.body;else{if(await F.updated.check())return await B(n);U=await Q(R,{params:i,url:n,route:{id:a.id}})}const J=await Te(E,N,l);return J?await Y({url:n,params:i,branch:N.slice(0,J.idx).concat(J.node),status:S,error:U,route:a}):await De(n,{id:a.id},U,S)}else N.push(void 0);return await Y({url:n,params:i,branch:N,status:200,error:null,route:a,form:s?void 0:null})}async function Te(e,s,n){for(;e--;)if(n[e]){let i=e;for(;!s[i];)i-=1;try{return{idx:i+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:s,url:n,route:i}){const a={};let l=null;if(t.server_loads[0]===0)try{const _=await Ke(n,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;l=_.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||D)&&await B(n)}const y=await de({loader:c,url:n,params:a,route:i,parent:()=>Promise.resolve({}),server_data_node:pe(l)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:n,params:a,branch:[y,v],status:e,error:s,route:null})}function X(e,s){if(ve(e,K))return;const n=se(e);for(const i of o){const a=i.exec(n);if(a)return{id:e.pathname+e.search,invalidating:s,route:i,params:ot(a),url:e}}}function se(e){return rt(e.pathname.slice(K.length)||"/")}function Ce({url:e,type:s,intent:n,delta:i}){let a=!1;const l=Ge(m,n,e,s);i!==void 0&&(l.navigation.delta=i);const f={...l.navigation,cancel:()=>{a=!0,l.reject(new Error("navigation was cancelled"))}};return A||g.before_navigate.forEach(y=>y(f)),a?null:l}async function ce({url:e,scroll:s,keepfocus:n,redirect_chain:i,details:a,type:l,delta:f,nav_token:y={},accepted:v,blocked:_}){var j,N,E;const $=X(e,!1),x=Ce({url:e,type:l,delta:f,intent:$});if(!x){_();return}const P=I;v(),A=!0,T&&F.navigating.set(x.navigation),ae=y;let d=$&&await he($);if(!d){if(ve(e,K))return await B(e);d=await De(e,{id:null},await Q(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=($==null?void 0:$.url)||e,ae!==y)return x.reject(new Error("navigation was aborted")),!1;if(d.type==="redirect")if(i.length>10||i.includes(e.pathname))d=await ie({status:500,error:await Q(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(d.location,e).href,{},[...i,e.pathname],y),!1;else((j=d.props.page)==null?void 0:j.status)>=400&&await F.updated.check()&&await B(e);if(b.length=0,z=!1,O=!0,Ee(P),Le(P),(N=d.props.page)!=null&&N.url&&d.props.page.url.pathname!==e.pathname&&(e.pathname=(E=d.props.page)==null?void 0:E.url.pathname),a){const R=a.replaceState?0:1;if(a.state[q]=I+=R,history[a.replaceState?"replaceState":"pushState"](a.state,"",e),!a.replaceState){let S=I+1;for(;Z[S]||G[S];)delete Z[S],delete G[S],S+=1}}if(k=null,T){m=d.state,d.props.page&&(d.props.page.url=e);const R=(await Promise.all(g.on_navigate.map(S=>S(x.navigation)))).filter(S=>typeof S=="function");if(R.length>0){let S=function(){g.after_navigate=g.after_navigate.filter(U=>!R.includes(U))};R.push(S),g.after_navigate.push(...R)}H.$set(d.props)}else Ue(d);const{activeElement:h}=document;if(await _e(),C){const R=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));s?scrollTo(s.x,s.y):R?R.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==h&&document.activeElement!==document.body;!n&&!L&&Se(),C=!0,d.props.page&&(M=d.props.page),A=!1,l==="popstate"&&Ae(I),x.fulfil(void 0),g.after_navigate.forEach(R=>R(x.navigation)),F.navigating.set(null),O=!1}async function De(e,s,n,i){if(e.origin===location.origin&&e.pathname===location.pathname&&!D)return await ie({status:i,error:n,url:e,route:s});if(i!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await B(e)}function B(e){return location.href=e.href,new Promise(()=>{})}function et(){let e;p.addEventListener("mousemove",l=>{const f=l.target;clearTimeout(e),e=setTimeout(()=>{i(f,2)},20)});function s(l){i(l.composedPath()[0],1)}p.addEventListener("mousedown",s),p.addEventListener("touchstart",s,{passive:!0});const n=new IntersectionObserver(l=>{for(const f of l)f.isIntersecting&&(oe(se(new URL(f.target.href))),n.unobserve(f.target))},{threshold:0});function i(l,f){const y=Fe(l,p);if(!y)return;const{url:v,external:_,download:$}=ye(y,K);if(_||$)return;const x=le(y);if(!x.reload)if(f<=x.preload_data){const P=X(v,!1);P&&je(P).then(d=>{d.type==="loaded"&&d.state.error&&console.warn(`Preloading data for ${P.url.pathname} failed with the following error: ${d.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else f<=x.preload_code&&oe(se(v))}function a(){n.disconnect();for(const l of p.querySelectorAll("a")){const{url:f,external:y,download:v}=ye(l,K);if(y||v)continue;const _=le(l);_.reload||(_.preload_code===Ve.viewport&&n.observe(l),_.preload_code===Ve.eager&&oe(se(f)))}}g.after_navigate.push(a),a()}function Q(e,s){return e instanceof te?e.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:e,event:s})??{message:s.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{we(()=>(g.after_navigate.push(e),()=>{const s=g.after_navigate.indexOf(e);g.after_navigate.splice(s,1)}))},before_navigate:e=>{we(()=>(g.before_navigate.push(e),()=>{const s=g.before_navigate.indexOf(e);g.before_navigate.splice(s,1)}))},on_navigate:e=>{we(()=>(g.on_navigate.push(e),()=>{const s=g.on_navigate.indexOf(e);g.on_navigate.splice(s,1)}))},disable_scroll_handling:()=>{if(T&&!O)throw new Error("Can only disable scroll handling during navigation");(O||!T)&&(C=!1)},goto:(e,s={})=>re(e,s,[]),invalidate:e=>{if(typeof e=="function")b.push(e);else{const{href:s}=new URL(e,location.href);b.push(n=>n.href===s)}return Pe()},invalidate_all:()=>(z=!0,Pe()),preload_data:async e=>{const s=new URL(e,Me(document)),n=X(s,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${s}`);await je(n)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const s=new URL(location.href),{branch:n,route:i}=m;if(!i)return;const a=await Te(m.branch.length,n,i.errors);if(a){const l=await Y({url:s,params:m.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:i});m=l.state,H.$set(l.props),_e().then(Se)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(H.$set({form:null,page:{...M,form:e.data,status:e.status}}),await _e(),H.$set({form:e.data}),e.type==="success"&&Se())},_start_router:()=>{var s;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let i=!1;if(Oe(),!A){const a=Ge(m,void 0,null,"leave"),l={...a.navigation,cancel:()=>{i=!0,a.reject(new Error("navigation was cancelled"))}};g.before_navigate.forEach(f=>f(l))}i?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(s=navigator.connection)!=null&&s.saveData||et(),p.addEventListener("click",n=>{var P;if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const i=Fe(n.composedPath()[0],p);if(!i)return;const{url:a,external:l,target:f,download:y}=ye(i,K);if(!a)return;if(f==="_parent"||f==="_top"){if(window.parent!==window)return}else if(f&&f!=="_self")return;const v=le(i);if(!(i instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||y)return;if(l||v.reload){Ce({url:a,type:"link"})?A=!0:n.preventDefault();return}const[$,x]=a.href.split("#");if(x!==void 0&&$===location.href.split("#")[0]){if(m.url.hash===a.hash){n.preventDefault(),(P=i.ownerDocument.getElementById(x))==null||P.scrollIntoView();return}if(V=!0,Ee(I),e(a),!v.replace_state)return;V=!1,n.preventDefault()}ce({url:a,scroll:v.noscroll?ee():null,keepfocus:v.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:v.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),p.addEventListener("submit",n=>{if(n.defaultPrevented)return;const i=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||i.method)!=="get")return;const f=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||i.action);if(ve(f,K))return;const y=n.target,{keep_focus:v,noscroll:_,reload:$,replace_state:x}=le(y);if($)return;n.preventDefault(),n.stopPropagation();const P=new FormData(y),d=a==null?void 0:a.getAttribute("name");d&&P.append(d,(a==null?void 0:a.getAttribute("value"))??""),f.search=new URLSearchParams(P).toString(),ce({url:f,scroll:_?ee():null,keepfocus:v??!1,redirect_chain:[],details:{state:{},replaceState:x??f.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var i;if((i=n.state)!=null&&i[q]){if(n.state[q]===I)return;const a=G[n.state[q]];if(m.url.href.split("#")[0]===location.href.split("#")[0]){G[I]=ee(),I=n.state[q],scrollTo(a.x,a.y);return}const l=n.state[q]-I;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=n.state[q]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}else if(!V){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[q]:++I},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&F.navigating.set(null)});function e(n){m.url=n,F.page.set({...M,url:n}),F.page.notify()}},_hydrate:async({status:e=200,error:s,node_ids:n,params:i,route:a,data:l,form:f})=>{D=!0;const y=new URL(location.href);({params:i={},route:a={id:null}}=X(y,!1)||{});let v;try{const _=n.map(async(P,d)=>{const h=l[d];return h!=null&&h.uses&&(h.uses=Ze(h.uses)),de({loader:t.nodes[P],url:y,params:i,route:a,parent:async()=>{const L={};for(let j=0;j<d;j+=1)Object.assign(L,(await _[j]).data);return L},server_data_node:pe(h)})}),$=await Promise.all(_),x=o.find(({id:P})=>P===a.id);if(x){const P=x.layouts;for(let d=0;d<P.length;d++)P[d]||$.splice(d,0,void 0)}v=await Y({url:y,params:i,branch:$,status:e,error:s,form:f,route:x??null})}catch(_){if(_ instanceof Je){await B(new URL(_.location,location.href));return}v=await ie({status:_ instanceof te?_.status:500,error:await Q(_,{url:y,params:i,route:a}),url:y,route:a})}Ue(v)}}}async function Ke(t,r){const o=new URL(t);if(o.pathname=ft(t.pathname),t.pathname.endsWith("/")&&o.searchParams.append(At,"1"),t.searchParams.has(ke))throw new Error(`Cannot used reserved query parameter "${ke}"`);o.searchParams.append(ke,r.map(u=>u?"1":"0").join(""));const c=await fe(o.href);if(!c.ok)throw new te(c.status,await c.json());return new Promise(async u=>{var m;const p=new Map,b=c.body.getReader(),w=new TextDecoder;function k(D){return nt(D,{Promise:T=>new Promise((C,O)=>{p.set(T,{fulfil:C,reject:O})})})}let g="";for(;;){const{done:D,value:T}=await b.read();if(D&&!g)break;for(g+=!T&&g?`
`:w.decode(T);;){const C=g.indexOf(`
`);if(C===-1)break;const O=JSON.parse(g.slice(0,C));if(g=g.slice(C+1),O.type==="redirect")return u(O);if(O.type==="data")(m=O.nodes)==null||m.forEach(A=>{(A==null?void 0:A.type)==="data"&&(A.uses=Ze(A.uses),A.data=k(A.data))}),u(O);else if(O.type==="chunk"){const{id:A,data:V,error:z}=O,H=p.get(A);p.delete(A),z?H.reject(k(z)):H.fulfil(k(V))}}}})}function Ze(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Se(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const r=document.body,o=r.getAttribute("tabindex");r.tabIndex=-1,r.focus({preventScroll:!0,focusVisible:!1}),o!==null?r.setAttribute("tabindex",o):r.removeAttribute("tabindex");const c=getSelection();if(c&&c.type!=="None"){const u=[];for(let p=0;p<c.rangeCount;p+=1)u.push(c.getRangeAt(p));setTimeout(()=>{if(c.rangeCount===u.length){for(let p=0;p<c.rangeCount;p+=1){const b=u[p],w=c.getRangeAt(p);if(b.commonAncestorContainer!==w.commonAncestorContainer||b.startContainer!==w.startContainer||b.endContainer!==w.endContainer||b.startOffset!==w.startOffset||b.endOffset!==w.endOffset)return}c.removeAllRanges()}})}}}function Ge(t,r,o,c){var k,g;let u,p;const b=new Promise((m,D)=>{u=m,p=D});return b.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((k=t.route)==null?void 0:k.id)??null},url:t.url},to:o&&{params:(r==null?void 0:r.params)??null,route:{id:((g=r==null?void 0:r.route)==null?void 0:g.id)??null},url:o},willUnload:!r,type:c,complete:b},fulfil:u,reject:p}}{const t=console.warn;console.warn=function(...o){o.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(o[0])||t(...o)}}async function Tt(t,r,o){r===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const c=Ot(t,r);tt({client:c}),o?await c._hydrate(o):c.goto(location.href,{replaceState:!0}),c._start_router()}export{Tt as start};
