import{o as Fe,t as we}from"../chunks/index.6cb358ec.js";import{S as Ke,a as Be,I as q,g as Me,f as He,b as ye,c as le,s as H,i as _e,d as Q,e as G,P as Ve,h as et}from"../chunks/singletons.c658b073.js";function tt(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function nt(t){return t.split("%25").map(decodeURI).join("%25")}function at(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const rt=["href","pathname","search","searchParams","toString","toJSON"];function ot(t,o){const i=new URL(t);for(const s of rt)Object.defineProperty(i,s,{get(){return o(),t[s]},enumerable:!0,configurable:!0});return it(i),i}function it(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const st="/__data.json";function ct(t){return t.replace(/\/$/,"")+st}function Ye(t){try{return JSON.parse(sessionStorage[t])}catch{}}function ze(t,o){const i=JSON.stringify(o);try{sessionStorage[t]=i}catch{}}function lt(...t){let o=5381;for(const i of t)if(typeof i=="string"){let s=i.length;for(;s;)o=o*33^i.charCodeAt(--s)}else if(ArrayBuffer.isView(i)){const s=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=s.length;for(;d;)o=o*33^s[--d]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}let Se=0;const fe=window.fetch;function ft(){Se+=1}function ut(){Se-=1}{let t=!1;(async()=>{t=new Error().stack.includes("check_stack_trace")})(),window.fetch=(i,s)=>{const d=i instanceof Request?i.url:i.toString(),u=new Error().stack.split(`
`),E=u.findIndex(p=>p.includes("load@")||p.includes("at load")),f=u.slice(0,E+2).join(`
`);return(t?f.includes("src/runtime/client/client.js"):Se)&&console.warn(`Loading ${d} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://kit.svelte.dev/docs/load#making-fetch-requests`),(i instanceof Request?i.method:(s==null?void 0:s.method)||"GET")!=="GET"&&te.delete(Re(i)),fe(i,s)}}const te=new Map;function dt(t,o){const i=Re(t,o),s=document.querySelector(i);if(s!=null&&s.textContent){const{body:d,...u}=JSON.parse(s.textContent),E=s.getAttribute("data-ttl");return E&&te.set(i,{body:d,init:u,ttl:1e3*Number(E)}),Promise.resolve(new Response(d,u))}return fe(t,o)}function pt(t,o,i){if(te.size>0){const s=Re(t,i),d=te.get(s);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);te.delete(s)}}return fe(o,i)}function Re(t,o){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const d=[];o.headers&&d.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&d.push(o.body),s+=`[data-hash="${lt(...d)}"]`}return s}const ht=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function gt(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${wt(t).map(s=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(d)return o.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return o.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const E=s.split(/\[(.+?)\](?!\])/);return"/"+E.map((v,w)=>{if(w%2){if(v.startsWith("x+"))return ve(String.fromCharCode(parseInt(v.slice(2),16)));if(v.startsWith("u+"))return ve(String.fromCharCode(...v.slice(2).split("-").map(P=>parseInt(P,16))));const p=ht.exec(v);if(!p)throw new Error(`Invalid param: ${v}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,C,x,S,j]=p;return o.push({name:S,matcher:j,optional:!!C,rest:!!x,chained:x?w===1&&E[0]==="":!1}),x?"(.*?)":C?"([^/]*)?":"([^/]+?)"}return ve(v)}).join("")}).join("")}/?$`),params:o}}function mt(t){return!/^\([^)]+\)$/.test(t)}function wt(t){return t.slice(1).split("/").filter(mt)}function yt(t,o,i){const s={},d=t.slice(1);let u=0;for(let E=0;E<o.length;E+=1){const f=o[E],v=d[E-u];if(f.chained&&f.rest&&u){s[f.name]=d.slice(E-u,E+1).filter(w=>w).join("/"),u=0;continue}if(v===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||i[f.matcher](v)){s[f.name]=v;const w=o[E+1],p=d[E+1];w&&!w.rest&&w.optional&&p&&(u=0);continue}if(f.optional&&f.chained){u++;continue}return}if(!u)return s}function ve(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function _t({nodes:t,server_loads:o,dictionary:i,matchers:s}){const d=new Set(o);return Object.entries(i).map(([f,[v,w,p]])=>{const{pattern:C,params:x}=gt(f),S={id:f,exec:j=>{const P=C.exec(j);if(P)return yt(P,x,s)},errors:[1,...p||[]].map(j=>t[j]),layouts:[0,...w||[]].map(E),leaf:u(v)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function u(f){const v=f<0;return v&&(f=~f),[v,t[f]]}function E(f){return f===void 0?f:[d.has(f),t[f]]}}let ee=class{constructor(o,i){this.status=o,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Ge=class{constructor(o,i){this.status=o,this.location=i}};async function vt(t){var o;for(const i in t)if(typeof((o=t[i])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([s,d])=>[s,await d])));return t}const bt=-1,Et=-2,kt=-3,St=-4,Rt=-5,$t=-6;function At(t,o){if(typeof t=="number")return d(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const i=t,s=Array(i.length);function d(u,E=!1){if(u===bt)return;if(u===kt)return NaN;if(u===St)return 1/0;if(u===Rt)return-1/0;if(u===$t)return-0;if(E)throw new Error("Invalid input");if(u in s)return s[u];const f=i[u];if(!f||typeof f!="object")s[u]=f;else if(Array.isArray(f))if(typeof f[0]=="string"){const v=f[0],w=o==null?void 0:o[v];if(w)return s[u]=w(d(f[1]));switch(v){case"Date":s[u]=new Date(f[1]);break;case"Set":const p=new Set;s[u]=p;for(let S=1;S<f.length;S+=1)p.add(d(f[S]));break;case"Map":const C=new Map;s[u]=C;for(let S=1;S<f.length;S+=2)C.set(d(f[S]),d(f[S+1]));break;case"RegExp":s[u]=new RegExp(f[1],f[2]);break;case"Object":s[u]=Object(f[1]);break;case"BigInt":s[u]=BigInt(f[1]);break;case"null":const x=Object.create(null);s[u]=x;for(let S=1;S<f.length;S+=2)x[f[S]]=d(f[S+1]);break;default:throw new Error(`Unknown type ${v}`)}}else{const v=new Array(f.length);s[u]=v;for(let w=0;w<f.length;w+=1){const p=f[w];p!==Et&&(v[w]=d(p))}}else{const v={};s[u]=v;for(const w in f){const p=f[w];v[w]=d(p)}}return s[u]}return d(0)}function It(t){function o(i,s){if(i)for(const d in i){if(d[0]==="_"||t.has(d))continue;const u=[...t.values()],E=Lt(d,s==null?void 0:s.slice(s.lastIndexOf(".")))??`valid exports are ${u.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${d}'${s?` in ${s}`:""} (${E})`)}}return o}function Lt(t,o=".js"){let i=[];if($e.has(t)&&i.push(`+layout${o}`),We.has(t)&&i.push(`+page${o}`),Xe.has(t)&&i.push(`+layout.server${o}`),Ot.has(t)&&i.push(`+page.server${o}`),Pt.has(t)&&i.push(`+server${o}`),i.length>0)return`'${t}' is a valid export in ${i.slice(0,-1).join(", ")}${i.length>1?" or ":""}${i.at(-1)}`}const $e=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),We=new Set([...$e,"entries"]),Xe=new Set([...$e,"actions"]),Ot=new Set([...Xe,"entries"]),Pt=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","prerender","trailingSlash","config","entries"]),xt=It(We);function jt(t){return t.filter(o=>o!=null)}function Tt(t,o){const i=/^(moz-icon|view-source|jar):/.exec(o);i&&console.warn(`${t}: Calling \`depends('${o}')\` will throw an error in Firefox because \`${i[1]}\` is a special URI scheme`)}const be="x-sveltekit-invalidated",J=Ye(Ke)??{},Z=Ye(Be)??{};function Ee(t){J[t]=Q()}function Ut(t,o){var Ce;const i=_t(t),s=t.nodes[0],d=t.nodes[1];s(),d();const u=document.documentElement,E=[],f=[];let v=null;const w={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},C=!1,x=!1,S=!0,j=!1,P=!1,K=!1,V=!1,F,U=(Ce=history.state)==null?void 0:Ce[q];U||(U=Date.now(),history.replaceState({...history.state,[q]:U},"",location.href));const ue=J[U];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let M,ne,ae;async function Ae(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);v=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);a.props.page!==void 0&&(M=a.props.page),F.$set(a.props)}}function Ie(e){f.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=f.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var c,l;(l=(c=f[a])==null?void 0:c.snapshot)==null||l.restore(r)})}function Oe(){Ee(U),ze(Ke,J),Ie(U),ze(Be,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:c={},invalidateAll:l=!1},h,y){return typeof e=="string"&&(e=new URL(e,Me(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:c,replaceState:r},nav_token:y,accepted:()=>{l&&(V=!0)},blocked:()=>{},type:"goto"})}async function Pe(e){return v={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(v=null),n))},v.promise}async function oe(...e){const r=i.filter(a=>e.some(c=>a.exec(c))).map(a=>Promise.all([...a.layouts,a.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(r)}function xe(e){var a;if(document.querySelector("vite-error-overlay"))return;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),M=e.props.page,F=new t.root({target:o,props:{...e.props,stores:H,components:f},hydrate:!0}),Le(U);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(c=>c(r)),x=!0}async function Y({url:e,params:n,branch:r,status:a,error:c,route:l,form:h}){let y="never";for(const g of r)(g==null?void 0:g.slash)!==void 0&&(y=g.slash);e.pathname=tt(e.pathname,y),e.search=e.search;const b={type:"loaded",state:{url:e,params:n,branch:r,error:c,route:l},props:{constructors:jt(r).map(g=>g.node.component)}};h!==void 0&&(b.props.form=h);let _={},R=!M,A=0;for(let g=0;g<Math.max(r.length,p.branch.length);g+=1){const m=r[g],O=p.branch[g];(m==null?void 0:m.data)!==(O==null?void 0:O.data)&&(R=!0),m&&(_={..._,...m.data},R&&(b.props[`data_${A}`]=_),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==c||h!==void 0&&h!==M.form||R)&&(b.props.page={error:c,params:n,route:{id:(l==null?void 0:l.id)??null},status:a,url:new URL(e),form:h??null,data:R?_:M.data}),b}async function de({loader:e,parent:n,url:r,params:a,route:c,server_data_node:l}){var _,R,A;let h=null;const y={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await e();if(xt(b.universal),(_=b.universal)!=null&&_.load){let I=function(...m){for(const O of m){Tt(c.id,O);const{href:T}=new URL(O,r);y.dependencies.add(T)}};const g={route:{get id(){return y.route=!0,c.id}},params:new Proxy(a,{get:(m,O)=>(y.params.add(O),m[O])}),data:(l==null?void 0:l.data)??null,url:ot(r,()=>{y.url=!0}),async fetch(m,O){let T;m instanceof Request?(T=m.url,O={body:m.method==="GET"||m.method==="HEAD"?void 0:await m.blob(),cache:m.cache,credentials:m.credentials,headers:m.headers,integrity:m.integrity,keepalive:m.keepalive,method:m.method,mode:m.mode,redirect:m.redirect,referrer:m.referrer,referrerPolicy:m.referrerPolicy,signal:m.signal,...O}):T=m;const D=new URL(T,r);return I(D.href),D.origin===r.origin&&(T=D.href.slice(r.origin.length)),x?pt(T,D.href,O):dt(T,O)},setHeaders:()=>{},depends:I,parent(){return y.parent=!0,n()}};try{if(ft(),h=await b.universal.load.call(null,g)??null,h!=null&&Object.getPrototypeOf(h)!==Object.prototype)throw new Error(`a load function related to route '${c.id}' returned ${typeof h!="object"?`a ${typeof h}`:h instanceof Response?"a Response object":Array.isArray(h)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{ut()}h=h?await vt(h):null}return{node:b,loader:e,server:l,universal:(R=b.universal)!=null&&R.load?{type:"data",data:h,uses:y}:null,data:h??(l==null?void 0:l.data)??null,slash:((A=b.universal)==null?void 0:A.trailingSlash)??(l==null?void 0:l.slash)}}function je(e,n,r,a,c){if(V)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const l of a.params)if(c[l]!==p.params[l])return!0;for(const l of a.dependencies)if(E.some(h=>h(new URL(l))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:c}){if((v==null?void 0:v.id)===e)return v.promise;const{errors:l,layouts:h,leaf:y}=c,b=[...h,y];l.forEach(k=>k==null?void 0:k().catch(()=>{})),b.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let _=null;const R=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?c.id!==p.route.id:!1;let I=!1;const g=b.map((k,L)=>{var z;const $=p.branch[L],N=!!(k!=null&&k[0])&&(($==null?void 0:$.loader)!==k[1]||je(I,A,R,(z=$.server)==null?void 0:z.uses,a));return N&&(I=!0),N});if(g.some(Boolean)){try{_=await Je(r,g)}catch(k){return ie({status:k instanceof ee?k.status:500,error:await X(k,{url:r,params:a,route:{id:c.id}}),url:r,route:c})}if(_.type==="redirect")return _}const m=_==null?void 0:_.nodes;let O=!1;const T=b.map(async(k,L)=>{var ge;if(!k)return;const $=p.branch[L],N=m==null?void 0:m[L];if((!N||N.type==="skip")&&k[1]===($==null?void 0:$.loader)&&!je(O,A,R,(ge=$.universal)==null?void 0:ge.uses,a))return $;if(O=!0,(N==null?void 0:N.type)==="error")throw N;return de({loader:k[1],url:r,params:a,route:c,parent:async()=>{var qe;const De={};for(let me=0;me<L;me+=1)Object.assign(De,(qe=await T[me])==null?void 0:qe.data);return De},server_data_node:pe(N===void 0&&k[0]?{type:"skip"}:N??null,k[0]?$==null?void 0:$.server:void 0)})});for(const k of T)k.catch(()=>{});const D=[];for(let k=0;k<b.length;k+=1)if(b[k])try{D.push(await T[k])}catch(L){if(L instanceof Ge)return{type:"redirect",location:L.location};let $=500,N;if(m!=null&&m.includes(L))$=L.status??$,N=L.error;else if(L instanceof ee)$=L.status,N=L.body;else{if(await H.updated.check())return await B(r);N=await X(L,{params:a,url:r,route:{id:c.id}})}const z=await Te(k,D,l);return z?await Y({url:r,params:a,branch:D.slice(0,z.idx).concat(z.node),status:$,error:N,route:c}):await Ne(r,{id:c.id},N,$)}else D.push(void 0);return await Y({url:r,params:a,branch:D,status:200,error:null,route:c,form:n?void 0:null})}async function Te(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const c={};let l=null;if(t.server_loads[0]===0)try{const _=await Je(r,[!0]);if(_.type!=="data"||_.nodes[0]&&_.nodes[0].type!=="data")throw 0;l=_.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||C)&&await B(r)}const y=await de({loader:s,url:r,params:c,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(l)}),b={node:await d(),loader:d,universal:null,server:null,data:null};return await Y({url:r,params:c,branch:[y,b],status:e,error:n,route:null})}function W(e,n){if(_e(e,G))return;const r=se(e);for(const a of i){const c=a.exec(r);if(c)return{id:e.pathname+e.search,invalidating:n,route:a,params:at(c),url:e}}}function se(e){return nt(e.pathname.slice(G.length)||"/")}function Ue({url:e,type:n,intent:r,delta:a}){var y,b;let c=!1;const l={from:{params:p.params,route:{id:((y=p.route)==null?void 0:y.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((b=r==null?void 0:r.route)==null?void 0:b.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(l.delta=a);const h={...l,cancel:()=>{c=!0}};return P||w.before_navigate.forEach(_=>_(h)),c?null:l}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:c,type:l,delta:h,nav_token:y={},accepted:b,blocked:_}){var T,D,k;const R=W(e,!1),A=Ue({url:e,type:l,delta:h,intent:R});if(!A){_();return}const I=U;b(),P=!0,x&&H.navigating.set(A),ne=y;let g=R&&await he(R);if(!g){if(_e(e,G))return await B(e);g=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(R==null?void 0:R.url)||e,ne!==y)return!1;if(g.type==="redirect")if(a.length>10||a.includes(e.pathname))g=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(g.location,e).href,{},[...a,e.pathname],y),!1;else((T=g.props.page)==null?void 0:T.status)>=400&&await H.updated.check()&&await B(e);if(E.length=0,V=!1,j=!0,Ee(I),Ie(I),(D=g.props.page)!=null&&D.url&&g.props.page.url.pathname!==e.pathname&&(e.pathname=(k=g.props.page)==null?void 0:k.url.pathname),c){const L=c.replaceState?0:1;if(c.state[q]=U+=L,history[c.replaceState?"replaceState":"pushState"](c.state,"",e),!c.replaceState){let $=U+1;for(;Z[$]||J[$];)delete Z[$],delete J[$],$+=1}}v=null,x?(p=g.state,g.props.page&&(g.props.page.url=e),F.$set(g.props)):xe(g);const{activeElement:m}=document;if(await we(),S){const L=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):L?L.scrollIntoView():scrollTo(0,0)}const O=document.activeElement!==m&&document.activeElement!==document.body;!r&&!O&&ke(),S=!0,g.props.page&&(M=g.props.page),P=!1,l==="popstate"&&Le(U),w.after_navigate.forEach(L=>L(A)),H.navigating.set(null),j=!1}async function Ne(e,n,r,a){if(e.origin===location.origin&&e.pathname===location.pathname&&!C)return await ie({status:a,error:r,url:e,route:n});if(a!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await B(e)}function B(e){return location.href=e.href,new Promise(()=>{})}function Qe(){let e;u.addEventListener("mousemove",l=>{const h=l.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(l){a(l.composedPath()[0],1)}u.addEventListener("mousedown",n),u.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(l=>{for(const h of l)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(l,h){const y=He(l,u);if(!y)return;const{url:b,external:_,download:R}=ye(y,G);if(_||R)return;const A=le(y);if(!A.reload)if(h<=A.preload_data){const I=W(b,!1);I&&Pe(I).then(g=>{g.type==="loaded"&&g.state.error&&console.warn(`Preloading data for ${I.url.pathname} failed with the following error: ${g.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://kit.svelte.dev/docs/link-options for more info`)})}else h<=A.preload_code&&oe(se(b))}function c(){r.disconnect();for(const l of u.querySelectorAll("a")){const{url:h,external:y,download:b}=ye(l,G);if(y||b)continue;const _=le(l);_.reload||(_.preload_code===Ve.viewport&&r.observe(l),_.preload_code===Ve.eager&&oe(se(h)))}}w.after_navigate.push(c),c()}function X(e,n){return e instanceof ee?e.body:(console.warn("The next HMR update will cause the page to reload"),t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"})}return{after_navigate:e=>{Fe(()=>(w.after_navigate.push(e),()=>{const n=w.after_navigate.indexOf(e);w.after_navigate.splice(n,1)}))},before_navigate:e=>{Fe(()=>(w.before_navigate.push(e),()=>{const n=w.before_navigate.indexOf(e);w.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{if(x&&!j)throw new Error("Can only disable scroll handling during navigation");(j||!x)&&(S=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")E.push(e);else{const{href:n}=new URL(e,location.href);E.push(r=>r.href===n)}return Ae()},invalidate_all:()=>(V=!0,Ae()),preload_data:async e=>{const n=new URL(e,Me(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Pe(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const c=await Te(p.branch.length,r,a.errors);if(c){const l=await Y({url:n,params:p.params,branch:r.slice(0,c.idx).concat(c.node),status:e.status??500,error:e.error,route:a});p=l.state,F.$set(l.props),we().then(ke)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...M,form:e.data,status:e.status}}),await we(),F.$set({form:e.data}),e.type==="success"&&ke())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Oe(),!P){const c={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};w.before_navigate.forEach(l=>l(c))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Oe()}),(e=navigator.connection)!=null&&e.saveData||Qe(),u.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=He(n.composedPath()[0],u);if(!r)return;const{url:a,external:c,target:l,download:h}=ye(r,G);if(!a)return;if(l==="_parent"||l==="_top"){if(window.parent!==window)return}else if(l&&l!=="_self")return;const y=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(c||y.reload){Ue({url:a,type:"link"})?P=!0:n.preventDefault();return}const[_,R]=a.href.split("#");if(R!==void 0&&_===location.href.split("#")[0]){if(K=!0,Ee(U),p.url=a,H.page.set({...M,url:a}),H.page.notify(),!y.replace_state)return;K=!1,n.preventDefault()}ce({url:a,scroll:y.noscroll?Q():null,keepfocus:y.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:y.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),u.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const l=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(l,G))return;const h=n.target,{keep_focus:y,noscroll:b,reload:_,replace_state:R}=le(h);if(_)return;n.preventDefault(),n.stopPropagation();const A=new FormData(h),I=a==null?void 0:a.getAttribute("name");I&&A.append(I,(a==null?void 0:a.getAttribute("value"))??""),l.search=new URLSearchParams(A).toString(),ce({url:l,scroll:b?Q():null,keepfocus:y??!1,redirect_chain:[],details:{state:{},replaceState:R??l.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===U)return;const a=J[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){J[U]=Q(),U=n.state[q],scrollTo(a.x,a.y);return}const c=n.state[q]-U;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=n.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{K&&(K=!1,history.replaceState({...history.state,[q]:++U},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&H.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:c,data:l,form:h})=>{C=!0;const y=new URL(location.href);({params:a={},route:c={id:null}}=W(y,!1)||{});let b;try{const _=r.map(async(I,g)=>{const m=l[g];return m!=null&&m.uses&&(m.uses=Ze(m.uses)),de({loader:t.nodes[I],url:y,params:a,route:c,parent:async()=>{const O={};for(let T=0;T<g;T+=1)Object.assign(O,(await _[T]).data);return O},server_data_node:pe(m)})}),R=await Promise.all(_),A=i.find(({id:I})=>I===c.id);if(A){const I=A.layouts;for(let g=0;g<I.length;g++)I[g]||R.splice(g,0,void 0)}b=await Y({url:y,params:a,branch:R,status:e,error:n,form:h,route:A??null})}catch(_){if(_ instanceof Ge){await B(new URL(_.location,location.href));return}b=await ie({status:_ instanceof ee?_.status:500,error:await X(_,{url:y,params:a,route:c}),url:y,route:c})}xe(b)}}}async function Je(t,o){const i=new URL(t);if(i.pathname=ct(t.pathname),t.searchParams.has(be))throw new Error(`Cannot used reserved query parameter "${be}"`);i.searchParams.append(be,o.map(d=>d?"1":"0").join(""));const s=await fe(i.href);if(!s.ok)throw new ee(s.status,await s.json());return new Promise(async d=>{var p;const u=new Map,E=s.body.getReader(),f=new TextDecoder;function v(C){return At(C,{Promise:x=>new Promise((S,j)=>{u.set(x,{fulfil:S,reject:j})})})}let w="";for(;;){const{done:C,value:x}=await E.read();if(C&&!w)break;for(w+=!x&&w?`
`:f.decode(x);;){const S=w.indexOf(`
`);if(S===-1)break;const j=JSON.parse(w.slice(0,S));if(w=w.slice(S+1),j.type==="redirect")return d(j);if(j.type==="data")(p=j.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Ze(P.uses),P.data=v(P.data))}),d(j);else if(j.type==="chunk"){const{id:P,data:K,error:V}=j,F=u.get(P);u.delete(P),V?F.reject(v(V)):F.fulfil(v(K))}}}})}function Ze(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function ke(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,i=o.getAttribute("tabindex");o.tabIndex=-1,o.focus({preventScroll:!0,focusVisible:!1}),i!==null?o.setAttribute("tabindex",i):o.removeAttribute("tabindex");const s=getSelection();if(s&&s.type!=="None"){const d=[];for(let u=0;u<s.rangeCount;u+=1)d.push(s.getRangeAt(u));setTimeout(()=>{if(s.rangeCount===d.length){for(let u=0;u<s.rangeCount;u+=1){const E=d[u],f=s.getRangeAt(u);if(E.commonAncestorContainer!==f.commonAncestorContainer||E.startContainer!==f.startContainer||E.endContainer!==f.endContainer||E.startOffset!==f.startOffset||E.endOffset!==f.endOffset)return}s.removeAllRanges()}})}}}{const t=console.warn;console.warn=function(...i){i.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(i[0])||t(...i)}}async function Ft(t,o,i){o===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`);const s=Ut(t,o);et({client:s}),i?await s._hydrate(i):s.goto(location.href,{replaceState:!0}),s._start_router()}export{Ft as start};
