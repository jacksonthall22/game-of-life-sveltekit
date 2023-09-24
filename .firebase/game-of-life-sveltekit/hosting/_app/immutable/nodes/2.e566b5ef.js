import{n as V,s as ie,v as ve,h as be,d as p,r as we,i as ye,j as Ee}from"../chunks/scheduler.65fd200e.js";import{S as le,i as fe,d as F,v as ue,j as w,B as Y,s as U,o as z,k as y,l as E,C as x,g as m,c as I,p as G,m as r,n as te,a as W,A as c,D as se,q as ne,u as Ce,E as Te,z as ke,w as Se,x as je,f as Le,t as Oe,y as Re}from"../chunks/index.fbfcf942.js";import{w as Xe}from"../chunks/index.0ba870ba.js";const de=typeof window<"u";let oe=de?()=>window.performance.now():()=>Date.now(),me=de?t=>requestAnimationFrame(t):V;const A=new Set;function pe(t){A.forEach(e=>{e.c(t)||(A.delete(e),e.f())}),A.size!==0&&me(pe)}function He(t){let e;return A.size===0&&me(pe),{promise:new Promise(s=>{A.add(e={c:t,f:s})}),abort(){A.delete(e)}}}const Pe=!0,Ue=Object.freeze(Object.defineProperty({__proto__:null,prerender:Pe},Symbol.toStringTag,{value:"Module"}));function ae(t){return Object.prototype.toString.call(t)==="[object Date]"}function J(t,e,s,n){if(typeof s=="number"||ae(s)){const a=n-s,i=(s-e)/(t.dt||1/60),l=t.opts.stiffness*a,o=t.opts.damping*i,u=(l-o)*t.inv_mass,g=(i+u)*t.dt;return Math.abs(g)<t.opts.precision&&Math.abs(a)<t.opts.precision?n:(t.settled=!1,ae(s)?new Date(s.getTime()+g):s+g)}else{if(Array.isArray(s))return s.map((a,i)=>J(t,e[i],s[i],n[i]));if(typeof s=="object"){const a={};for(const i in s)a[i]=J(t,e[i],s[i],n[i]);return a}else throw new Error(`Cannot spring ${typeof s} values`)}}function re(t,e={}){const s=Xe(t),{stiffness:n=.15,damping:a=.8,precision:i=.01}=e;let l,o,u,g=t,_=t,k=1,f=0,C=!1;function R(d,h={}){_=d;const b=u={};return t==null||h.hard||S.stiffness>=1&&S.damping>=1?(C=!0,l=oe(),g=d,s.set(t=_),Promise.resolve()):(h.soft&&(f=1/((h.soft===!0?.5:+h.soft)*60),k=0),o||(l=oe(),C=!1,o=He(j=>{if(C)return C=!1,o=null,!1;k=Math.min(k+f,1);const H={inv_mass:k,opts:S,settled:!0,dt:(j-l)*60/1e3},L=J(H,g,t,_);return l=j,g=t,s.set(t=L),H.settled&&(o=null),!H.settled})),new Promise(j=>{o.promise.then(()=>{b===u&&j()})}))}const S={set:R,update:(d,h)=>R(d(_,t),h),subscribe:s.subscribe,stiffness:n,damping:a,precision:i};return S}const X="C:/Users/jacks/OneDrive/Documents/Code/svelt-testing/src/routes/Counter.svelte";function Q(t){let e,s,n,a,i,l,o,u,g=Math.floor(t[1]+1)+"",_,k,f,C=Math.floor(t[1])+"",R,S,d,h,b,j,H;const L={c:function(){e=w("div"),s=w("button"),n=Y("svg"),a=Y("path"),i=U(),l=w("div"),o=w("div"),u=w("strong"),_=z(g),k=U(),f=w("strong"),R=z(C),S=U(),d=w("button"),h=Y("svg"),b=Y("path"),this.h()},l:function(O){e=y(O,"DIV",{class:!0});var v=E(e);s=y(v,"BUTTON",{"aria-label":!0,class:!0});var T=E(s);n=x(T,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=E(n);a=x(B,"path",{d:!0,class:!0}),E(a).forEach(m),B.forEach(m),T.forEach(m),i=I(v),l=y(v,"DIV",{class:!0});var M=E(l);o=y(M,"DIV",{class:!0,style:!0});var D=E(o);u=y(D,"STRONG",{class:!0,"aria-hidden":!0});var q=E(u);_=G(q,g),q.forEach(m),k=I(D),f=y(D,"STRONG",{class:!0});var N=E(f);R=G(N,C),N.forEach(m),D.forEach(m),M.forEach(m),S=I(v),d=y(v,"BUTTON",{"aria-label":!0,class:!0});var $=E(d);h=x($,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var ee=E(h);b=x(ee,"path",{d:!0,class:!0}),E(b).forEach(m),ee.forEach(m),$.forEach(m),v.forEach(m),this.h()},h:function(){r(a,"d","M0,0.5 L1,0.5"),r(a,"class","s-HTE2L0KcXC-T"),p(a,X,18,3,397),r(n,"aria-hidden","true"),r(n,"viewBox","0 0 1 1"),r(n,"class","s-HTE2L0KcXC-T"),p(n,X,17,2,351),r(s,"aria-label","Decrease the counter by one"),r(s,"class","s-HTE2L0KcXC-T"),p(s,X,16,1,269),r(u,"class","hidden s-HTE2L0KcXC-T"),r(u,"aria-hidden","true"),p(u,X,24,3,560),r(f,"class","s-HTE2L0KcXC-T"),p(f,X,25,3,649),r(o,"class","counter-digits s-HTE2L0KcXC-T"),te(o,"transform","translate(0, "+100*t[2]+"%)"),p(o,X,23,2,479),r(l,"class","counter-viewport s-HTE2L0KcXC-T"),p(l,X,22,1,446),r(b,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),r(b,"class","s-HTE2L0KcXC-T"),p(b,X,31,3,844),r(h,"aria-hidden","true"),r(h,"viewBox","0 0 1 1"),r(h,"class","s-HTE2L0KcXC-T"),p(h,X,30,2,798),r(d,"aria-label","Increase the counter by one"),r(d,"class","s-HTE2L0KcXC-T"),p(d,X,29,1,716),r(e,"class","counter s-HTE2L0KcXC-T"),p(e,X,15,0,246)},m:function(O,v){W(O,e,v),c(e,s),c(s,n),c(n,a),c(e,i),c(e,l),c(l,o),c(o,u),c(u,_),c(o,k),c(o,f),c(f,R),c(e,S),c(e,d),c(d,h),c(h,b),j||(H=[se(s,"click",t[4],!1,!1,!1,!1),se(d,"click",t[5],!1,!1,!1,!1)],j=!0)},p:function(O,[v]){v&2&&g!==(g=Math.floor(O[1]+1)+"")&&ne(_,g),v&2&&C!==(C=Math.floor(O[1])+"")&&ne(R,C),v&4&&te(o,"transform","translate(0, "+100*O[2]+"%)")},i:V,o:V,d:function(O){O&&m(e),j=!1,we(H)}};return F("SvelteRegisterBlock",{block:L,id:Q.name,type:"component",source:"",ctx:t}),L}function ce(t,e){return(t%e+e)%e}function De(t,e,s){let n,a,{$$slots:i={},$$scope:l}=e;ue("Counter",i,[]);let o=0;const u=re();ve(u,"displayed_count"),be(t,u,f=>s(1,a=f));const g=[];Object.keys(e).forEach(f=>{!~g.indexOf(f)&&f.slice(0,2)!=="$$"&&f!=="slot"&&console.warn(`<Counter> was created with unknown prop '${f}'`)});const _=()=>s(0,o-=1),k=()=>s(0,o+=1);return t.$capture_state=()=>({spring:re,count:o,displayed_count:u,modulo:ce,offset:n,$displayed_count:a}),t.$inject_state=f=>{"count"in f&&s(0,o=f.count),"offset"in f&&s(2,n=f.offset)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&1&&u.set(o),t.$$.dirty&2&&s(2,n=ce(a,1))},[o,a,n,u,_,k]}class _e extends le{constructor(e){super(e),fe(this,e,De,Q,ie,{}),F("SvelteRegisterComponent",{component:this,tagName:"Counter",options:e,id:Q.name})}}const he=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,ge=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;const K="C:/Users/jacks/OneDrive/Documents/Code/svelt-testing/src/routes/+page.svelte";function Z(t){let e,s,n,a,i,l,o,u,g,_,k,f,C,R,S,d,h,b,j="src/routes/+page.svelte",H,L,P;L=new _e({$$inline:!0});const O={c:function(){e=w("meta"),s=U(),n=w("section"),a=w("h1"),i=w("span"),l=w("picture"),o=w("source"),g=U(),_=w("img"),f=z(`

		to your new`),C=w("br"),R=z("SvelteKit app"),S=U(),d=w("h2"),h=z("try editing "),b=w("strong"),b.textContent=j,H=U(),Ce(L.$$.fragment),this.h()},l:function(T){const B=Te("svelte-t32ptj",document.head);e=y(B,"META",{name:!0,content:!0}),B.forEach(m),s=I(T),n=y(T,"SECTION",{class:!0});var M=E(n);a=y(M,"H1",{class:!0});var D=E(a);i=y(D,"SPAN",{class:!0});var q=E(i);l=y(q,"PICTURE",{});var N=E(l);o=y(N,"SOURCE",{srcset:!0,type:!0}),g=I(N),_=y(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(m),q.forEach(m),f=G(D,`

		to your new`),C=y(D,"BR",{}),R=G(D,"SvelteKit app"),D.forEach(m),S=I(M),d=y(M,"H2",{});var $=E(d);h=G($,"try editing "),b=y($,"STRONG",{"data-svelte-h":!0}),ke(b)!=="svelte-24whsx"&&(b.textContent=j),$.forEach(m),H=I(M),Se(L.$$.fragment,M),M.forEach(m),this.h()},h:function(){document.title="Home",r(e,"name","description"),r(e,"content","Svelte demo app"),p(e,K,8,1,217),ye(o,u=he)||r(o,"srcset",u),r(o,"type","image/webp"),p(o,K,15,4,345),Ee(_.src,k=ge)||r(_,"src",k),r(_,"alt","Welcome"),r(_,"class","s-y_bCXRrkrYfP"),p(_,K,16,4,395),p(l,K,14,3,331),r(i,"class","welcome s-y_bCXRrkrYfP"),p(i,K,13,2,305),p(C,K,20,13,478),r(a,"class","s-y_bCXRrkrYfP"),p(a,K,12,1,298),p(b,K,24,14,526),p(d,K,23,1,507),r(n,"class","s-y_bCXRrkrYfP"),p(n,K,11,0,287)},m:function(T,B){c(document.head,e),W(T,s,B),W(T,n,B),c(n,a),c(a,i),c(i,l),c(l,o),c(l,g),c(l,_),c(a,f),c(a,C),c(a,R),c(n,S),c(n,d),c(d,h),c(d,b),c(n,H),je(L,n,null),P=!0},p:V,i:function(T){P||(Le(L.$$.fragment,T),P=!0)},o:function(T){Oe(L.$$.fragment,T),P=!1},d:function(T){T&&(m(s),m(n)),m(e),Re(L)}};return F("SvelteRegisterBlock",{block:O,id:Z.name,type:"component",source:"",ctx:t}),O}function Ke(t,e,s){let{$$slots:n={},$$scope:a}=e;ue("Page",n,[]);const i=[];return Object.keys(e).forEach(l=>{!~i.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&console.warn(`<Page> was created with unknown prop '${l}'`)}),t.$capture_state=()=>({Counter:_e,welcome:he,welcome_fallback:ge}),[]}class Ie extends le{constructor(e){super(e),fe(this,e,Ke,Z,ie,{}),F("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:Z.name})}}export{Ie as component,Ue as universal};