var Xa=Object.defineProperty;var oa=t=>{throw TypeError(t)};var qa=(t,e,a)=>e in t?Xa(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var ra=(t,e,a)=>qa(t,typeof e!="symbol"?e+"":e,a),Tt=(t,e,a)=>e.has(t)||oa("Cannot "+a);var Pe=(t,e,a)=>(Tt(t,e,"read from private field"),a?a.call(t):e.get(t)),Ve=(t,e,a)=>e.has(t)?oa("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),rt=(t,e,a,s)=>(Tt(t,e,"write to private field"),s?s.call(t,a):e.set(t,a),a),la=(t,e,a)=>(Tt(t,e,"access private method"),a);import{b as ca,d as Ka,f as Y,a as U,c as et,t as lt}from"../chunks/B5atftRx.js";import{G as kt,i as ge,z as dt,y as $a,D as Gt,e as es,q as r,X as ts,H as as,J as ss,K as da,L as Ct,j as Ke,ae as Ga,ah as ns,M as Ea,g as Da,N as is,aq as Ra,ak as ja,ab as os,a0 as ee,ar as Xt,as as Ut,Q as Pa,B as ut,at as ta,au as rs,av as aa,aw as ha,ax as ls,a6 as cs,ay as ds,h as hs,az as As,af as Ba,t as ce,aA as us,ai as ps,ag as ms,aB as fs,aC as gs,aD as vs,aE as bs,aF as ys,E as ws,aG as Is,aH as xs,O as Za,d as vt,aI as ks,aJ as Ms,aK as Gs,aL as Es,n as ct,a7 as Aa,a8 as ua,a9 as Ds,aM as Rs,P as sa,$ as M,aN as js,ao as Ps,_ as We,p as Ie,c as m,s as g,r as p,a as xe,f as Ze,an as oe,aO as De,ap as Be,u as Ta,aP as Et,aQ as Ca,aR as ot}from"../chunks/BgNQ8ix_.js";import{p as Se,i as he,b as Fe,c as Bs}from"../chunks/CEn1oFAA.js";import{a as Zs,b as Ts,w as Cs,l as Ua,o as Us,d as Oe,s as me,e as Re,r as Ns}from"../chunks/DyynD9g9.js";import{i as jt,p as Ss}from"../chunks/BClsmQ6G.js";import{o as at}from"../chunks/cgLqrkRh.js";import{b as st}from"../chunks/B41w5qEw.js";function pt(t,e){return e}function _s(t,e,a,s){for(var n=[],i=e.length,l=0;l<i;l++)ls(e[l].e,n,!0);var o=i>0&&n.length===0&&a!==null;if(o){var c=a.parentNode;cs(c),c.append(a),s.clear(),Ye(t,e[0].prev,e[i-1].next)}ds(n,()=>{for(var d=0;d<i;d++){var h=e[d];o||(s.delete(h.k),Ye(t,h.prev,h.next)),hs(h.e,!o)}})}function $e(t,e,a,s,n,i=null){var l=t,o={flags:e,items:new Map,first:null},c=(e&Ra)!==0;if(c){var d=t;l=ge?kt(dt(d)):d.appendChild($a())}ge&&Gt();var h=null,f=!1,A=ts(()=>{var u=a();return os(u)?u:u==null?[]:ja(u)});es(()=>{var u=r(A),v=u.length;if(f&&v===0)return;f=v===0;let k=!1;if(ge){var y=as(l)===ss;y!==(v===0)&&(l=da(),kt(l),Ct(!1),k=!0)}if(ge){for(var I=null,x,w=0;w<v;w++){if(Ke.nodeType===Ga&&Ke.data===ns){l=Ke,k=!0,Ct(!1);break}var b=u[w],G=s(b,w);x=Na(Ke,o,I,null,b,G,w,n,e,a),o.items.set(G,x),I=x}v>0&&kt(da())}ge||Ws(u,o,l,n,e,s,a),i!==null&&(v===0?h?Ea(h):h=Da(()=>i(l)):h!==null&&is(h,()=>{h=null})),k&&Ct(!0),r(A)}),ge&&(l=Ke)}function Ws(t,e,a,s,n,i,l){var V,T,J,S;var o=(n&rs)!==0,c=(n&(aa|ta))!==0,d=t.length,h=e.items,f=e.first,A=f,u,v=null,k,y=[],I=[],x,w,b,G;if(o)for(G=0;G<d;G+=1)x=t[G],w=i(x,G),b=h.get(w),b!==void 0&&((V=b.a)==null||V.measure(),(k??(k=new Set)).add(b));for(G=0;G<d;G+=1){if(x=t[G],w=i(x,G),b=h.get(w),b===void 0){var R=A?A.e.nodes_start:a;v=Na(R,e,v,v===null?e.first:v.next,x,w,G,s,n,l),h.set(w,v),y=[],I=[],A=v.next;continue}if(c&&Os(b,x,G,n),(b.e.f&Ut)!==0&&(Ea(b.e),o&&((T=b.a)==null||T.unfix(),(k??(k=new Set)).delete(b))),b!==A){if(u!==void 0&&u.has(b)){if(y.length<I.length){var F=I[0],_;v=F.prev;var E=y[0],C=y[y.length-1];for(_=0;_<y.length;_+=1)pa(y[_],F,a);for(_=0;_<I.length;_+=1)u.delete(I[_]);Ye(e,E.prev,C.next),Ye(e,v,E),Ye(e,C,F),A=F,v=C,G-=1,y=[],I=[]}else u.delete(b),pa(b,A,a),Ye(e,b.prev,b.next),Ye(e,b,v===null?e.first:v.next),Ye(e,v,b),v=b;continue}for(y=[],I=[];A!==null&&A.k!==w;)(A.e.f&Ut)===0&&(u??(u=new Set)).add(A),I.push(A),A=A.next;if(A===null)continue;b=A}y.push(b),v=b,A=b.next}if(A!==null||u!==void 0){for(var j=u===void 0?[]:ja(u);A!==null;)(A.e.f&Ut)===0&&j.push(A),A=A.next;var W=j.length;if(W>0){var N=(n&Ra)!==0&&d===0?a:null;if(o){for(G=0;G<W;G+=1)(J=j[G].a)==null||J.measure();for(G=0;G<W;G+=1)(S=j[G].a)==null||S.fix()}_s(e,j,N,h)}}o&&Pa(()=>{var Z;if(k!==void 0)for(b of k)(Z=b.a)==null||Z.apply()}),ut.first=e.first&&e.first.e,ut.last=v&&v.e}function Os(t,e,a,s){(s&aa)!==0&&ha(t.v,e),(s&ta)!==0?ha(t.i,a):t.i=a}function Na(t,e,a,s,n,i,l,o,c,d){var h=(c&aa)!==0,f=(c&As)===0,A=h?f?ee(n,!1,!1):Xt(n):n,u=(c&ta)===0?l:Xt(l),v={i:u,v:A,k:i,a:null,e:null,prev:a,next:s};try{return v.e=Da(()=>o(t,A,u,d),ge),v.e.prev=a&&a.e,v.e.next=s&&s.e,a===null?e.first=v:(a.next=v,a.e.next=v.e),s!==null&&(s.prev=v,s.e.prev=v.e),v}finally{}}function pa(t,e,a){for(var s=t.next?t.next.e.nodes_start:a,n=e?e.e.nodes_start:a,i=t.e.nodes_start;i!==s;){var l=Ba(i);n.before(i),i=l}}function Ye(t,e,a){e===null?t.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function ke(t,e,a=!1,s=!1,n=!1){var i=t,l="";ce(()=>{var o=ut;if(l===(l=e()??"")){ge&&Gt();return}if(o.nodes_start!==null&&(us(o.nodes_start,o.nodes_end),o.nodes_start=o.nodes_end=null),l!==""){if(ge){Ke.data;for(var c=Gt(),d=c;c!==null&&(c.nodeType!==Ga||c.data!=="");)d=c,c=Ba(c);if(c===null)throw ps(),ms;ca(Ke,d),i=kt(c);return}var h=l+"";a?h=`<svg>${h}</svg>`:s&&(h=`<math>${h}</math>`);var f=Ka(h);if((a||s)&&(f=dt(f)),ca(dt(f),f.lastChild),a||s)for(;dt(f);)i.before(dt(f));else i.before(f)}})}function Sa(t,e,a,s,n){var o;ge&&Gt();var i=(o=e.$$slots)==null?void 0:o[a],l=!1;i===!0&&(i=e.children,l=!0),i===void 0||i(t,l?()=>s:s)}const ma=[...` 	
\r\f \v\uFEFF`];function Ls(t,e,a){var s=t==null?"":""+t;if(e&&(s=s?s+" "+e:e),a){for(var n in a)if(a[n])s=s?s+" "+n:n;else if(s.length)for(var i=n.length,l=0;(l=s.indexOf(n,l))>=0;){var o=l+i;(l===0||ma.includes(s[l-1]))&&(o===s.length||ma.includes(s[o]))?s=(l===0?"":s.substring(0,l))+s.substring(o+1):l=o}}return s===""?null:s}function Ys(t,e){return t==null?null:String(t)}function Te(t,e,a,s,n,i){var l=t.__className;if(ge||l!==a||l===void 0){var o=Ls(a,s,i);(!ge||o!==t.getAttribute("class"))&&(o==null?t.removeAttribute("class"):t.className=o),t.__className=a}else if(i&&n!==i)for(var c in i){var d=!!i[c];(n==null||d!==!!n[c])&&t.classList.toggle(c,d)}return i}function be(t,e,a,s){var n=t.__style;if(ge||n!==e){var i=Ys(e);(!ge||i!==t.getAttribute("style"))&&(i==null?t.removeAttribute("style"):t.style.cssText=i),t.__style=e}return s}const zs=Symbol("is custom element"),Qs=Symbol("is html");function Me(t){if(ge){var e=!1,a=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var s=t.value;z(t,"value",null),t.value=s}if(t.hasAttribute("checked")){var n=t.checked;z(t,"checked",null),t.checked=n}}};t.__on_r=a,gs(a),Zs()}}function z(t,e,a,s){var n=Fs(t);ge&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=a)&&(e==="loading"&&(t[fs]=a),a==null?t.removeAttribute(e):typeof a!="string"&&Vs(t).includes(e)?t[e]=a:t.setAttribute(e,a))}function Fs(t){return t.__attributes??(t.__attributes={[zs]:t.nodeName.includes("-"),[Qs]:t.namespaceURI===vs})}var fa=new Map;function Vs(t){var e=fa.get(t.nodeName);if(e)return e;fa.set(t.nodeName,e=[]);for(var a,s=t,n=Element.prototype;n!==s;){a=ys(s);for(var i in a)a[i].set&&e.push(i);s=bs(s)}return e}const Hs=()=>performance.now(),_e={tick:t=>requestAnimationFrame(t),now:()=>Hs(),tasks:new Set};function _a(){const t=_e.now();_e.tasks.forEach(e=>{e.c(t)||(_e.tasks.delete(e),e.f())}),_e.tasks.size!==0&&_e.tick(_a)}function Js(t){let e;return _e.tasks.size===0&&_e.tick(_a),{promise:new Promise(a=>{_e.tasks.add(e={c:t,f:a})}),abort(){_e.tasks.delete(e)}}}function bt(t,e){Cs(()=>{t.dispatchEvent(new CustomEvent(e))})}function Xs(t){if(t==="float")return"cssFloat";if(t==="offset")return"cssOffset";if(t.startsWith("--"))return t;const e=t.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function ga(t){const e={},a=t.split(";");for(const s of a){const[n,i]=s.split(":");if(!n||i===void 0)break;const l=Xs(n.trim());e[l]=i.trim()}return e}const qs=t=>t;function Nt(t,e,a,s){var n=(t&Ms)!==0,i=(t&Gs)!==0,l=n&&i,o=(t&ks)!==0,c=l?"both":n?"in":"out",d,h=e.inert,f=e.style.overflow,A,u;function v(){var w=Ds,b=ut;Aa(null),ua(null);try{return d??(d=a()(e,(s==null?void 0:s())??{},{direction:c}))}finally{Aa(w),ua(b)}}var k={is_global:o,in(){var w;if(e.inert=h,!n){u==null||u.abort(),(w=u==null?void 0:u.reset)==null||w.call(u);return}i||A==null||A.abort(),bt(e,"introstart"),A=qt(e,v(),u,1,()=>{bt(e,"introend"),A==null||A.abort(),A=d=void 0,e.style.overflow=f})},out(w){if(!i){w==null||w(),d=void 0;return}e.inert=!0,bt(e,"outrostart"),u=qt(e,v(),A,0,()=>{bt(e,"outroend"),w==null||w()})},stop:()=>{A==null||A.abort(),u==null||u.abort()}},y=ut;if((y.transitions??(y.transitions=[])).push(k),n&&Ts){var I=o;if(!I){for(var x=y.parent;x&&(x.f&ws)!==0;)for(;(x=x.parent)&&(x.f&Is)===0;);I=!x||(x.f&xs)!==0}I&&Za(()=>{vt(()=>k.in())})}}function qt(t,e,a,s,n){var i=s===1;if(Es(e)){var l,o=!1;return Pa(()=>{if(!o){var y=e({direction:i?"in":"out"});l=qt(t,y,a,s,n)}}),{abort:()=>{o=!0,l==null||l.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return n(),{abort:ct,deactivate:ct,reset:ct,t:()=>s};const{delay:c=0,css:d,tick:h,easing:f=qs}=e;var A=[];if(i&&a===void 0&&(h&&h(0,1),d)){var u=ga(d(0,1));A.push(u,u)}var v=()=>1-s,k=t.animate(A,{duration:c,fill:"forwards"});return k.onfinish=()=>{k.cancel();var y=(a==null?void 0:a.t())??1-s;a==null||a.abort();var I=s-y,x=e.duration*Math.abs(I),w=[];if(x>0){var b=!1;if(d)for(var G=Math.ceil(x/16.666666666666668),R=0;R<=G;R+=1){var F=y+I*f(R/G),_=ga(d(F,1-F));w.push(_),b||(b=_.overflow==="hidden")}b&&(t.style.overflow="hidden"),v=()=>{var E=k.currentTime;return y+I*f(E/x)},h&&Js(()=>{if(k.playState!=="running")return!1;var E=v();return h(E,1-E),!0})}k=t.animate(w,{duration:x,fill:"forwards"}),k.onfinish=()=>{v=()=>s,h==null||h(s,1-s),n()}},{abort:()=>{k&&(k.cancel(),k.effect=null,k.onfinish=ct)},deactivate:()=>{n=ct},reset:()=>{s===0&&(h==null||h(1,0))},t:()=>v()}}function we(t,e,a=e){var s=Rs();Ua(t,"input",n=>{var i=n?t.defaultValue:t.value;if(i=St(t)?_t(i):i,a(i),s&&i!==(i=e())){var l=t.selectionStart,o=t.selectionEnd;t.value=i??"",o!==null&&(t.selectionStart=l,t.selectionEnd=Math.min(o,t.value.length))}}),(ge&&t.defaultValue!==t.value||vt(e)==null&&t.value)&&a(St(t)?_t(t.value):t.value),sa(()=>{var n=e();St(t)&&n===_t(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function Wa(t,e,a=e){Ua(t,"change",s=>{var n=s?t.defaultChecked:t.checked;a(n)}),(ge&&t.defaultChecked!==t.checked||vt(e)==null)&&a(t.checked),sa(()=>{var s=e();t.checked=!!s})}function St(t){var e=t.type;return e==="number"||e==="range"}function _t(t){return t===""?null:+t}var ze,it,mt,Dt,Oa;const Rt=class Rt{constructor(e){Ve(this,Dt);Ve(this,ze,new WeakMap);Ve(this,it);Ve(this,mt);rt(this,mt,e)}observe(e,a){var s=Pe(this,ze).get(e)||new Set;return s.add(a),Pe(this,ze).set(e,s),la(this,Dt,Oa).call(this).observe(e,Pe(this,mt)),()=>{var n=Pe(this,ze).get(e);n.delete(a),n.size===0&&(Pe(this,ze).delete(e),Pe(this,it).unobserve(e))}}};ze=new WeakMap,it=new WeakMap,mt=new WeakMap,Dt=new WeakSet,Oa=function(){return Pe(this,it)??rt(this,it,new ResizeObserver(e=>{for(var a of e){Rt.entries.set(a.target,a);for(var s of Pe(this,ze).get(a.target)||[])s(a)}}))},ra(Rt,"entries",new WeakMap);let Kt=Rt;var Ks=new Kt({box:"border-box"});function $s(t,e,a){var s=Ks.observe(t,()=>a(t[e]));Za(()=>(vt(()=>a(t[e])),s))}function en(t){M(t,t.v+1)}function tn(t){let e=0,a=Xt(0),s;return()=>{js()&&(r(a),sa(()=>(e===0&&(s=vt(()=>t(()=>en(a)))),e+=1,()=>{Ps().then(()=>{e-=1,e===0&&(s==null||s(),s=void 0)})})))}}var ft,gt;class an{constructor(e,a){Ve(this,ft);Ve(this,gt);rt(this,ft,e),rt(this,gt,tn(a))}get current(){return Pe(this,gt).call(this),Pe(this,ft).call(this)}}ft=new WeakMap,gt=new WeakMap;const sn=/\(.+\)/,nn=new Set(["all","print","screen","and","or","not","only"]);class on extends an{constructor(e,a){let s=sn.test(e)||e.split(/[\s,]+/).some(i=>nn.has(i.trim()))?e:`(${e})`;const n=window.matchMedia(s);super(()=>n.matches,i=>Us(n,"change",i))}}const pe=We({fontPixelated:!0,isMobile:!1});function Wt(t,e){return{delay:e.delay||0,duration:e.duration||400,css:(a,s)=>`opacity: ${Math.round(a*5)/5}; z-index: 999999;`}}function va(t,e,a){return Math.min(e,Math.max(t,a))}function rn(t,e){const a=t.indexOf(e);return a!==-1?t.slice(0,a):t}var ln=(t,e,a,s)=>{t.stopPropagation(),console.log(e.text),a()(s())},cn=Y('<div class="arrow-right absolute right-3 svelte-swxnbc"></div>'),dn=Y("<div></div>"),hn=Y('<div id="item" class="relative"><button><img class="[image-rendering:pixelated] select-none"/> <p class="grow text-lg mx-3"> </p> <!>  <!></button></div>');function Le(t,e){Ie(e,!0);let a=Se(e,"currentPath",15),s=Se(e,"clicked",3,()=>{});Se(e,"highlighted",3,!1);let n=Se(e,"isFolder",3,!1),i=Se(e,"height",3,60),l=Se(e,"data",3,null);var o=hn(),c=m(o);let d;c.__click=[ln,e,s,l];var h=m(c),f=g(h,2),A=m(f,!0);p(f);var u=g(f,2);{var v=x=>{var w=cn();U(x,w)};he(u,x=>{n()&&x(v)})}var k=g(u,2);{var y=x=>{var w=et(),b=Ze(w);Sa(b,e,"default",{}),U(x,w)},I=x=>{var w=dn();U(x,w)};he(k,x=>{a().find(w=>w==e.id)?x(y):x(I,!1)})}p(c),p(o),ce(x=>{d=Te(c,1,"startmenuitem w-full bg-red-50 flex flex-row items-center px-2 text-left h-full svelte-swxnbc",null,d,x),be(c,`height: ${i()??""}px;`),z(h,"src",e.image),be(h,`height: ${i()*.7}px;`),me(A,e.text)},[()=>({"startmenuitem-highlighted":a().find(x=>x==e.id)})]),Re("mouseenter",o,()=>{a().push(e.id)}),Re("mouseleave",o,()=>{a(rn(a(),e.id))}),U(t,o),xe()}Oe(["click"]);var An=(t,e)=>e.deactivate(),un=Y('<div class="fullscreen svelte-ja5grf"></div>');function pn(t,e){Ie(e,!0);var a=un();a.__click=[An,e],U(t,a),xe()}Oe(["click"]);var mn=Y('<div class="absolute bottom-13 text-black bg-wininfo-500 border rounded-md"><div></div> <!> <div></div></div>');function fn(t,e){Ie(e,!0);let a=Se(e,"time",3,0),s=Se(e,"close",3,()=>{});at(()=>{const c=setInterval(()=>{s()()},a());return()=>clearInterval(c)});var n=mn(),i=m(n),l=g(i,2);Sa(l,e,"default",{});var o=g(l,2);p(n),ce(()=>{be(n,`right: ${e.right_offset??""}${e.right_offset_unit??""};`),be(i,`
    content: '';
    position: absolute;
    right: ${-e.right_offset+5}${e.right_offset_unit??""};
    bottom: -14px;
    border-width: 13px 13px 0;
    border-style: solid;
    border-color: black transparent;
    display: block;`),be(o,`
    content: '';
    position: absolute;
    right: ${-e.right_offset+5}${e.right_offset_unit??""}; 
    bottom: -13px;
    border-width: 13px 13px 0;
    border-style: solid;
    border-color: var(--color-wininfo-500) transparent;
    display: block;`)}),U(t,n),xe()}var Ue=(t=>(t[t.Executable=0]="Executable",t[t.Document=1]="Document",t))(Ue||{});const gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFEmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMDhUMTM6MjY6MTQrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMDhUMTM6MjY6MTQrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjVjY2FlNTk3LWZjMTUtZTc0Ni04NDI2LThlY2E4ZWNlYTNhZSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjVjY2FlNTk3LWZjMTUtZTc0Ni04NDI2LThlY2E4ZWNlYTNhZSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTA4VDEzOjEyOjUwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Po23hmoAAACYSURBVDjLzZNBFsQgCEOTm3kzw830ZHYz+GgVu+hmWKL5BBSOMfAl+ExISomSmAJcWGvNq5GLji5+ChlqxS577yilTG0KMDNIdQG4E0mQRO7EbxFd8K36zoEDJCF1cGrhzwCzzXCLXAfnx1EsiVvAafoAtgAAGADQWksBv6eb4tuXdAckT7uAUgojjGuvA2aWQSjpnvi6zheNIIsH/POpjAAAAABJRU5ErkJggg==",vn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMDhUMTQ6MzA6MDkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMDhUMTQ6MzA6MDkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OGM4ODUyYTktMjVhMy01OTQ1LWFjZGItZjVlZDg4NDc3ZDYwIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YzlhNjQ0NzQtMTExNC1jYzRmLWIxNjAtM2ExM2YxYjMwNTFkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU1Y2Q5ZWJiLTY5YmYtNTM0Mi1hMTI2LTIxYTBkMjhjMTczNDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjY2FlNTk3LWZjMTUtZTc0Ni04NDI2LThlY2E4ZWNlYTNhZSIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjM1YjExYzYtMjU3MC0zZTRkLTkwNDgtNmY3NjBkNmM2ZDE2IiBzdEV2dDp3aGVuPSIyMDI1LTA5LTA4VDE0OjMwOjA5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Yzg4NTJhOS0yNWEzLTU5NDUtYWNkYi1mNWVkODg0NzdkNjAiIHN0RXZ0OndoZW49IjIwMjUtMDktMDhUMTQ6MzA6MDkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FOl0eAAAAPlJREFUOMtj+P//PwM2/DlZD0wDwX8cGAKI1Zh2NByM0Q1hhCpGAYyMjDADwAaCQHGSJoqaWdYrwTQLUDFIISPMNbgATAPQFaiWQW1CpxmQbeedewlFPcwQkKFMMNthQcKAGzBiE2QB2gK2GWgLugJshmGIsSA5F8ULSM4GewXI/48cBvBAxOcFL5WFcPav42ZQ1jqIAVAeE1DRfyQ/ImOsgM3yNxjD9LAg2fR/2514RoSBhnBNhysNGdhwBCqKF5Bcw0BsbDABTSfKC8BEhiEOS3gwA/7btp/HyANAsf/ogYucd4hNRAy4kjvO0AabDskncLUYmoGZDgAue6AOxJQ39AAAAABJRU5ErkJggg==",bn="data:image/x-icon;base64,AAABAAIAICAQAAEABADoAgAAJgAAABAQEAABAAQAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAABEREREAAAAAZkQAAAAAARERERERERAABnZEAAAACIgTExMREREBEGdkRAAAAIiIgTExMTEQiAZeREAAAAioiIgDExMTEKol5EQAAACeioqIiDExMTEh/kRAAAAJ6KioqIgTEwACH94ECAAACoqKioqIMQAZmAHiAIAAAJ6oqKioiIoZ+fmYIAiIAACr6qqKioihv5+fmYCIgIAAvqqoqKiIo/v5+fmCiIgAC/6qqqqIih+/n5+fmCiIgAvr6qqIizI7+/n5+dgIiAgJ/r6qibMyH7/fn5+YKIiAIJ/r6oibGyP7+fn5woqIiCOJ//yJsbGh/7+fnYCoiIAj+InLGxsbGh/7+dgeioiII9uYs7GxsbGiH54AqeioiCH9ubsbGxsbGCIjEQqeiogiP5ubiLGxsYqBCTEJ6eiAAj/5uIiLGxsYsKiTEJ6cgAIf/5ioizGxsbGKiTEIqIAAI/iKiIizGxsbGKiREQgAACHJ6KiIizGxsbGJMREQAAACP96KiIizGxsbExMRAAAAACP96KiIizCJsbExEAAAAAACP96cqIiIiJMbEwAAAAAAACP/3p6KiIiJMTEAAAAAAAACI/3p6eioiJEQAAAAAAAAAAIiP96eioiIAAAAAAAAAAAAAiIiIiIAAAAAAAA//AP8f+AAeD+AABA/AAAAPgAAAHwAAAD4AAAB8AAAAPAAAADgAAAAYAAAAGAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAYAAAAHAAAADwAAAA+AAAAfwAAAP+AAAH/wAAD/+AAB//4AB///gD/8oAAAAEAAAACAAAAABAAQAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAAAAAAAAAAABERERAAdAAAiIMREQdkQAnoiCACPkQACcqKH5wiAAC96KP5+cCIAL3LI/+fgIgCCJsj+/nAiAIzMzI/vByIAjMIsyIDCcgAIKizMTEwgAAgnoiwixMAAAI96IiIsQAAACI/6IiIAAAAACIiIAAAA///MzPg5wiLgAWAHwAEAAIADzMyAAyIoAAHmYAABAAAAAWzMAAEihgABfmaAA0AAgANszMAHIo/gD+fm+D9AAA==",yn=""+new URL("../assets/programs.B3BneLkB.ico",import.meta.url).href,wn=""+new URL("../assets/suspend.D1ME8oM1.ico",import.meta.url).href,In=""+new URL("../assets/documents.UuLUbe6Q.ico",import.meta.url).href,xn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAYAAABS3GwHAAAAAXNSR0IArs4c6QAABHJJREFUeJzt3Ftym0AABECU8v2v7Hy44myIkQCx7GO6D+Agi6kZr1AeC2d9tr6AlUfrCxjRr9YXAC0JANHU5l+9TZravPeLBiCcABAtpQbT5s1Vpr8/NADRBIBos1WcqXOPae4bDUA0ASDaqFVm6vRpuPtJAxBNAIg2UmWZPWMZ4t7SAEQTAKL1XlNmzxy6vc80ANEEgGi9VJOpk6n5/acBiCYARGtZQWYPpSb3ogYgmgAQ7e7aMXvY47b7UgMQTQCIdkfVmD28o+o9qgGIJgBEq1UvZg81XH6/agCiCQDRPlpfwBmfn68X1uPR/Enbqcz6O9cARBMAol3ZWVVPfvZU8FEjVnYNg/5uL/kHNADRBIBo754CDf2BV1n9CXOoxtRpqHwxp988DUA0ASDamQk0VY/+Mescmmz2bDk9hzQA0QSAaEM+C1Tb6HMoZPZcQgMQTQCItncCxXbq0TnU6rkas+fboRMhDUA0ASCaU6ADWs0M86YeDUA0ASDas7+Su+1dk6BPnX9o+OPFaQCiCQDRBIBoAkA0ASDakKdAJSdCbXV+8lNyCgRrAkC09bNA9gSz+vExaQ1ANAEg2vov4yEmkJOfPo14IqQBiCYARBMAogkA0QSAaAJANAEgmgAQ7bH48IsKRvlQTAMQTQCIJgBEEwCiCQDRBIBoAkA0ASCaABBNAIgmAEQTAKIJANEEgGgCQDQBIJoAEE0AiCYARBMAog3zpfiSL8j3aZQvwpc0ANEEgGgCQDQBIJoAEG3IU6CSE6G2Rjz5KWkAogkA0QSAaAJANAEg2vCnQCUnQvcY/eSnpAGIJgBEW3fZNBvCHLrWTLNnKe57DUA0ASCaABBNAIgmAESb9hSo5ETonMlOfkpOgWBZBIBw1SfQ1vzooV5Noy89vBc3M4FgWQSAcM+67/Q+eGdatKrjhDkUOHVKP754DUA0ASBalQm0+QOLmVHWsZOia/Xwe+uQCQRrAkC0jzv/sT2zp7Q1meAqGoBoAkC0vbuiyTNCrU6HRjz52RI+HV++eA1ANAEgWrMJ9M8P7+DZoZlmz5bAOWQCwTMCQLS9H4SVVdJkK2ydDr1zUpQwewId2nkagGgCQLQzxwLdngjxXMgpkAkEewkA0c48Dt38RKh09BFrpnR622kAogkA0a48FrjtkemjzKT/TXAidMkL0ABEEwCi1erBbucQXwadQJdftAYgmgAQ7db/F+gdTnKoQQMQTQCIdsdRwG17xTTab6BToKoXqgGIJgBEu7sHu90oafOp8wl028VpAKIJANHu/iCsq2+T0ZUmm0wDEE0AiNbyWSBziOZHURqAaAJAtF4eh96qQtNoDs2nzhYNQDQBIFovE2iLk6JxdTt7ShqAaAJAtN4nUMkc6t8Qs6ekAYgmAEQbrrJeODSN0r4FtuXEt8OmuW80ANEEgGjTVNnaat7YOud83x+df4n+NA1ANAEg2kgfhL1jT3+nzaQ5N81BGoBoAkC06Bp884Ow3ibT6fdy1hOePTQA0QSAaL8BAXbQa87aFsoAAAAASUVORK5CYII=",kn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMDhUMTY6MzQ6MjArMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMDhUMTY6MzQ6MjArMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZGQ3NWE3ZTktZDMzMy0yMDQ4LWI2ZGEtYzY5ZjY2MWQ5ODc1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjMyY2JjNGYtYjg2Ny1mYTQwLTg1OTItNGJhNTRhZTdhYzc5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU1Y2Q5ZWJiLTY5YmYtNTM0Mi1hMTI2LTIxYTBkMjhjMTczNDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjY2FlNTk3LWZjMTUtZTc0Ni04NDI2LThlY2E4ZWNlYTNhZSIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGU2ZGVmNzMtZjY2NC03NzRiLWI5MzEtMWFkODNhMDY0NGU0IiBzdEV2dDp3aGVuPSIyMDI1LTA5LTA4VDE2OjM0OjIwKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDc1YTdlOS1kMzMzLTIwNDgtYjZkYS1jNjlmNjYxZDk4NzUiIHN0RXZ0OndoZW49IjIwMjUtMDktMDhUMTY6MzQ6MjArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EYFa/wAAAF9JREFUOMtj/P//PwMIcKcfhjCIBF9n2jKCaEaQAaRqRjaEkSvtEFmaYQDFAKCJMO8MkAFU9wIyH8ZGdyFRBmADMDVEG4DNVSR5AZea4WYAWemAkswE0s9IbnYGaQYRAC1FdLv3qrgLAAAAAElFTkSuQmCC",Mn="data:image/x-icon;base64,AAABAAIAICAQAAEAAADoAgAAJgAAABAQEAABAAAAKAEAAA4DAAAoAAAAIAAAAEAAAAABAAQAAAAAAAACAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAEREREAAAAAAAAAAAAAABERERERERAAAAAAAAAAABERERERERERAAAAAAAAAAEREREREREREREAAAAAAAAREREREREREREREAAAAAABEREREAAAABEREREAAAAAEREREAAAAAABEREREAAAAREREREAAAAAAAEREREAAAEREREREAAAAAAAERERAAAREREREREAAAAAAAERERAAEREQEREREAAAAAAAEREQABEREAEREREAAAAAABEREAEREQAAEREREAAAAAABEREBEREAAAEREREAAAAAARERARERAAAAEREREAAAAAEREQEREQAAAAEREREAAAABEREBEREAAAAAEREREAAAARERARERAAAAAAEREREAAAEREQEREQAAAAAAEREREAABEREAEREQAAAAAAEREREAEREQABEREAAAAAAAEREREBEREAAREREAAAAAAAERERERERAAAREREAAAAAAAEREREREAAAEREREAAAAAAAERERERAAAAEREREAAAAAAAEREREAAAAAEREREQAAAAEREREQAAAAAAERERERERERERERAAAAAAAAEREREREREREREAAAAAAAAAEREREREREREQAAAAAAAAAAAREREREREQAAAAAAAAAAAAAAEREREAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//gP///AAf//AAD//gAAP/wAAB/4B/AP8B/4B+AP/gPgB/8DwAP/gcEB/8HBgP/Bg8B/4IPgP+CD8B/gg/gP4IP8B+CD/gPgg/8B4MH/gMHB/8BBwP/gAeB/8APgP/gD8B/8B/gH8A/8AAAf/gAAP/8AAH//wAH///gP//////8oAAAAEAAAACAAAAABAAQAAAAAAIAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAgAAAgAAAAICAAIAAAACAAIAAgIAAAMDAwACAgIAAAAD/AAD/AAAA//8A/wAAAP8A/wD//wAA////AAAAAAAAAAAAAAARERERAAAAAREREREQAAAREAAAAREAARERAAAAERABEBEQAAABEAEQAREAAAEQARAAERAAARABEAABEQABEAEQAAAREAEQARAAAAERARABEQAAABEREAAREAAAAREAAAEREREREAAAABEREREAAAAAAAAAAAAA//////AP///gB///x+P//4Px//+R+f//mPn//5x5//+eOf//nxn//5+J//+Pwf//x+P//+AH///wD////////w==",Gn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAGtmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMDhUMTM6MzY6NTErMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMDhUMTM6MzY6NTErMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZDA2MGM0OGYtZDljZi1lZDQwLTliZDgtMGI5MGJkZTNiN2MyIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZmNjMzM0ZmEtOGQzMC1mYjRiLTk5MDAtODI4MTg5NTZiOWIwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1Y2NhZTU5Ny1mYzE1LWU3NDYtODQyNi04ZWNhOGVjZWEzYWUiIHN0RXZ0OndoZW49IjIwMjUtMDktMDhUMTM6MTI6NTArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY4ZjNkNzQ1LTc1OWQtMzI0Mi1hZmRjLWI3NDMxZWViN2I4MiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0wOFQxMzozNjo1MSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZDA2MGM0OGYtZDljZi1lZDQwLTliZDgtMGI5MGJkZTNiN2MyIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTA4VDEzOjM2OjUxKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pms4ZeIAAABsSURBVDjLzVNBDoAwCAOyf8Nejk6jIQso4mU9baRtVgaoqoCIChNG3WLngMM5qhqJIlgz+iqeuXjeNXzmk8HgExTQe7/PLdM4EQnNWjY7M7tRShEsFjDIfl00UIv0oBLj0tDLtrlDZLn4d503Yhs3HEM5DioAAAAASUVORK5CYII=",En="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMDhUMTY6MDM6MjIrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMDhUMTY6MDM6MjIrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ZmVmYzJkOTUtZjRjYS1kYjRkLWEyMDktMDdhN2MxYzkyZjI5IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTYyNDhhOGQtNDlmMS1lNTRhLTk0N2YtODY2OWIwYmVkOTAzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NWNjYWU1OTctZmMxNS1lNzQ2LTg0MjYtOGVjYThlY2VhM2FlIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU1Y2Q5ZWJiLTY5YmYtNTM0Mi1hMTI2LTIxYTBkMjhjMTczNDwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjY2FlNTk3LWZjMTUtZTc0Ni04NDI2LThlY2E4ZWNlYTNhZSIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0wOFQxMzoxMjo1MCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODA2NmZiMTQtNjQwOC1hMzRhLTk5NDUtNTZkYzg2MDZkNTVkIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTA4VDE2OjAzOjIyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZWZjMmQ5NS1mNGNhLWRiNGQtYTIwOS0wN2E3YzFjOTJmMjkiIHN0RXZ0OndoZW49IjIwMjUtMDktMDhUMTY6MDM6MjIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mH66zwAAAHlJREFUOMu9k8EOwCAIQ9svN355d9hmFAVlh3EhQftSRCgJJAUT0lgiicUdEoA8kRc9rAFOxRbCW6tWfFoKcw8ZAFnIEmBtSkKtFaWUKZMEtWne2p7OI4B1kAb84yB6xJ2D9BTSgGMH3leOHAxfOVqmSPxO4fM6A+AFoWGZ9On0NRQAAAAASUVORK5CYII=";var Dn=(t,e,a)=>{t.stopPropagation(),r(e)?(M(e,!1),document.removeEventListener("click",a)):(M(e,!0),document.addEventListener("click",a))},Rn=t=>{t.stopPropagation()},jn=Y('<div class="absolute" style="right: 0px; top: 0px;"><div class="absolute flex element3d flex-col min-w-50"></div></div>'),Pn=Y('<div class="absolute" style="right: 0px; top: 0px; "><div class="absolute flex element3d flex-col min-w-50"></div></div>'),Bn=Y('<div class="absolute" style="right: 0px; top: 0px; "><div class="absolute flex element3d flex-col min-w-50"><!> <!></div></div>'),Zn=Y('<div class="absolute bottom-11 text-black border speech-bubble left-1 w-60 element3d flex flex-row bg-wingray-500"><div class="[writing-mode:vertical-rl] flex w-10 bg-winblue-500 justify-end items-end text-white"><p class="text-rotated text-3xl px-5 svelte-hov141">PortfoliOS</p></div> <div class="grow"><!> <!> <!> <hr id="startmenuHR" class="svelte-hov141"/> <!></div></div>'),Tn=(t,e,a)=>{e.dataManipulator.setfocus(r(a).id)},Cn=Y('<button><img class="p-1 h-full [image-rendering:pixelated]"/> <p class="flex items-center text-black h-full truncate text-[15pt] text-center leading-0 pb-[2px]"> </p></button>'),Un=(t,e)=>{M(e,!0)},Nn=Y(`<br/> <b class="text-winred-500">This website is optimized for desktop use. It is,
                          however, partially usable on a smartphone.</b>`,1),Sn=(t,e)=>{t.stopPropagation(),e()},_n=Y(`<div class="max-h-[50vh] max-w-[80vw]"><p class="text-left mx-1 p-2 max-w-fit whitespace-nowrap"><b>Hello!</b> <br/> This is my hobby project/portfolio where I show things I wanted
                      to explore or read about.<br/>Feel free to look around. <b>Double click</b> any Desktop Icon to see some
                      Interesting things! <br/> <br/> <b>Tipp</b>: If it's too hard to read the pixelated text
                      inside a window, click the [T] icon in the tray. <br/> <!></p> <hr class="mx-[10%] mt-2 border-wininfo-200"/> <button class="w-20 border-1 border-wininfo-200 rounded-md m-2 hover:border-2 box-border px-[1px] py-[1px] hover:p-0 negative-push svelte-hov141">Ok</button></div>`),Wn=Y("<div><!></div>"),On=Y("<div><!></div>"),Ln=Y('<div class="text-text-500 mt-auto flex w-full p-[2px] box-border bg-winlightgray-500 space-x-2 z-9000 border-t-white border-3 h-12"><div class="w-25 text-black flex justify-center"><button><div class="flex w-full h-full mx-1"><img alt="svelte windows logo" class="[image-rendering:pixelated] m-[2px] aspect-square"/> <p class="flex h-full items-center text-center font-bold text-2xl">Start</p></div></button> <!></div> <div class="vline h-full"></div> <div class="flex h-full space-x-1 overflow-hidden flex-1"></div> <div class="vline h-full"></div> <div class="px-4 h-full text-black flex content-center items-center justify-center space-x-3 element3d-inv" style="border-top-color:  var(--color-gray-500); border-left-color: var(--color-gray-500);"><div class="flex h-full justify-center space-x-1 my-1"><button class="relative"><img alt="svelte windows logo" class="[image-rendering:pixelated] size-6"/></button> <div class="flex justify-center"><button class="relative"><img alt="svelte windows logo" class="[image-rendering:pixelated] size-8 mt-[1px]"/> <!></button></div></div> <p class="text-[16pt] leading-0"> </p></div></div> <!>',1);function Yn(t,e){Ie(e,!0);let a=oe(!1),s=1,n=oe(We([])),i=oe(!1),l=oe(We(new Date)),o=oe(!0);function c(){M(o,!1)}at(()=>{const S=setInterval(()=>{M(l,new Date,!0)},6e4);return()=>{clearInterval(S)}});function d(){M(a,!1)}var h=Ln(),f=Ze(h),A=m(f),u=m(A);let v;u.__click=[Dn,a,d];var k=m(u),y=m(k);De(2),p(k),p(u);var I=g(u,2);{var x=S=>{var Z=Zn();Z.__click=[Rn];var H=g(m(Z),2),K=m(H);const se=Be(()=>s++);Le(K,{get id(){return r(se)},text:"Programs",get image(){return yn},isFolder:!0,height:55,get currentPath(){return r(n)},set currentPath(te){M(n,te,!0)},children:(te,B)=>{var D=jn(),O=m(D);$e(O,21,()=>e.availablePrograms,pt,(Q,X)=>{var le=et(),P=Ze(le);{var L=ne=>{const Ae=Be(()=>s++);Le(ne,{get id(){return r(Ae)},get text(){return r(X).title},get image(){return r(X).image},height:30,get data(){return r(X).id},clicked:()=>{e.openProgram(r(X)),M(a,!1)},highlighted:!0,get currentPath(){return r(n)},set currentPath(Ge){M(n,Ge,!0)}})};he(P,ne=>{r(X).type==Ue.Executable&&ne(L)})}U(Q,le)}),p(O),p(D),U(te,D)},$$slots:{default:!0}});var q=g(K,2);const ae=Be(()=>s++);Le(q,{get id(){return r(ae)},text:"Documents",get image(){return In},isFolder:!0,height:60,get currentPath(){return r(n)},set currentPath(te){M(n,te,!0)},children:(te,B)=>{var D=Pn(),O=m(D);$e(O,21,()=>e.availablePrograms,pt,(Q,X)=>{var le=et(),P=Ze(le);{var L=ne=>{const Ae=Be(()=>s++);Le(ne,{get id(){return r(Ae)},get text(){return r(X).title},get image(){return r(X).image},height:30,get data(){return r(X).id},clicked:()=>{e.openProgram(r(X)),M(a,!1)},highlighted:!0,get currentPath(){return r(n)},set currentPath(Ge){M(n,Ge,!0)}})};he(P,ne=>{r(X).type==Ue.Document&&ne(L)})}U(Q,le)}),p(O),p(D),U(te,D)},$$slots:{default:!0}});var fe=g(q,2);const ye=Be(()=>s++);Le(fe,{get id(){return r(ye)},text:"Links",get image(){return bn},isFolder:!0,height:60,get currentPath(){return r(n)},set currentPath(te){M(n,te,!0)},children:(te,B)=>{var D=Bn(),O=m(D),Q=m(O);const X=Be(()=>s++);Le(Q,{get id(){return r(X)},text:"GitHub",get image(){return xn},height:30,data:"https://github.com/lorenz-lb",clicked:()=>{var L;(L=window==null?void 0:window.open("https://github.com/lorenz-lb","_blank"))==null||L.focus(),M(a,!1)},highlighted:!0,get currentPath(){return r(n)},set currentPath(L){M(n,L,!0)}});var le=g(Q,2);const P=Be(()=>s++);Le(le,{get id(){return r(P)},text:"Linkedin",get image(){return kn},height:30,data:"https://www.linkedin.com/in/lorenz-braun-023284160/",clicked:()=>{var L;(L=window==null?void 0:window.open("https://www.linkedin.com/in/lorenz-braun-023284160/","_blank"))==null||L.focus(),M(a,!1)},highlighted:!0,get currentPath(){return r(n)},set currentPath(L){M(n,L,!0)}}),p(O),p(D),U(te,D)},$$slots:{default:!0}});var ve=g(fe,4);const re=Be(()=>s++);Le(ve,{get id(){return r(re)},text:"Suspend",get image(){return wn},clicked:()=>{M(i,!0)},height:60,get currentPath(){return r(n)},set currentPath(te){M(n,te,!0)}}),p(H),p(Z),U(S,Z)};he(I,S=>{r(a)&&S(x)})}p(A);var w=g(A,4);$e(w,21,()=>e.openPrograms,S=>S.id,(S,Z)=>{var H=Cn();H.__click=[Tn,e,Z];var K=m(H),se=g(K,2),q=m(se,!0);p(se),p(H),ce(()=>{var ae;Te(H,1,`flex h-full flex-1 max-w-60 flex-row ${(ae=r(Z).windowData)!=null&&ae.hasfocus?"element3d-inv taskbarbutton-focused":"element3d taskbarbutton"}`),z(K,"src",r(Z).image),z(K,"alt",r(Z).title),me(q,r(Z).title)}),U(S,H)}),p(w);var b=g(w,4),G=m(b),R=m(G);R.__click=()=>{pe.fontPixelated=!pe.fontPixelated};var F=m(R);p(R);var _=g(R,2),E=m(_);E.__click=[Un,o];var C=m(E),j=g(C,2);{var W=S=>{var Z=Wn(),H=m(Z);fn(H,{right_offset:-40,right_offset_unit:"px",time:4e4,close:c,children:(K,se)=>{var q=_n(),ae=m(q),fe=g(m(ae),16);{var ye=re=>{var te=Nn();De(2),U(re,te)};he(fe,re=>{pe.isMobile&&re(ye)})}p(ae);var ve=g(ae,4);ve.__click=[Sn,c],p(q),ce(()=>{be(q,pe.isMobile?"width: 80vw;":""),be(ae,pe.isMobile?"white-space: wrap;":"")}),U(K,q)},$$slots:{default:!0}}),p(Z),Nt(2,Z,()=>Wt),U(S,Z)};he(j,S=>{r(o)&&S(W)})}p(E),p(_),p(G);var N=g(G,2),V=m(N,!0);p(N),p(b),p(f);var T=g(f,2);{var J=S=>{var Z=On(),H=m(Z);pn(H,{deactivate:()=>{M(i,!1)}}),p(Z),Nt(1,Z,()=>Wt),Nt(2,Z,()=>Wt,()=>({delay:200})),U(S,Z)};he(T,S=>{r(i)&&S(J)})}ce((S,Z)=>{v=Te(u,1,"w-25 text-black flex space-x-2 text-xl font-bold justify-center",null,v,S),z(y,"src",vn),z(F,"src",pe.fontPixelated?Gn:En),z(C,"src",gn),me(V,Z)},[()=>({"button3d-inv":r(a),button3d:!r(a)}),()=>r(l).toLocaleTimeString("de-DE",{hour:"2-digit",minute:"2-digit",hour12:!1})]),U(t,h),xe()}Oe(["click"]);var zn=t=>{},Qn=Y('<div class="w-25 h-25"><button id="outer"><img class="w-14 h-14 [image-rendering:pixelated] select-none"/> <p class="leading-none text-winwhite-500"> </p></button></div>');function Fn(t,e){Ie(e,!0);let a=Se(e,"element",15);var s=Qn();s.__mousedown=[zn];var n=m(s);let i;n.__dblclick=function(...d){var h;(h=e.dblclick)==null||h.apply(this,d)};var l=m(n),o=g(l,2),c=m(o,!0);p(o),p(n),Fe(n,d=>a(d),()=>a()),p(s),ce(d=>{i=Te(n,1,"w-full h-full flex flex-col items-center justify-center svelte-1caq03r",null,i,d),z(l,"src",e.image),z(l,"alt",e.name),me(c,e.name)},[()=>({"active-selection":e.isSelected})]),Re("dragstart",l,d=>d.preventDefault()),U(t,s),xe()}Oe(["mousedown","dblclick"]);function Vn(t,e,a,s,n,i,l,o,c){t.button===0&&(M(e,!0),M(a,t.clientX,!0),M(s,t.clientY,!0),M(n,r(a),!0),M(i,r(s),!0),M(l,new Set,!0),document.addEventListener("mousemove",o),document.addEventListener("mouseup",c))}var Hn=Y('<div class="select-box svelte-1qoxrsy"></div>'),Jn=Y('<div class="w-full h-full flex bg-winteal-500 relative flex" role="main"><div class="p-10 z-0 flex flex-col flex-wrap justify-start"></div> <!></div>');function Xn(t,e){Ie(e,!0);let a=oe(!1),s=oe(0),n=oe(0),i=oe(0),l=oe(0),o=We([]),c=oe(We(new Set));function d(y){r(a)&&(M(i,y.clientX,!0),M(l,y.clientY,!0),f())}function h(){M(a,!1),document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",h)}function f(){const y=new Set,I={left:Math.min(r(s),r(i)),top:Math.min(r(n),r(l)),right:Math.max(r(s),r(i)),bottom:Math.max(r(n),r(l))};o.forEach((x,w)=>{if(!x)return;const b=x.getBoundingClientRect();!(I.right<b.left||I.left>b.right||I.bottom<b.top||I.top>b.bottom)&&y.add(e.availablePrograms[w].id)}),M(c,y,!0)}var A=Jn();A.__mousedown=[Vn,a,s,n,i,l,c,d,h];var u=m(A);$e(u,21,()=>e.availablePrograms,pt,(y,I,x)=>{const w=Be(()=>r(c).has(r(I).id));Fn(y,{get name(){return r(I).title},get image(){return r(I).image},dblclick:()=>e.openProgram(r(I)),get isSelected(){return r(w)},get element(){return o[x]},set element(b){o[x]=b}})}),p(u);var v=g(u,2);{var k=y=>{var I=Hn();ce((x,w,b,G)=>be(I,`
        top: ${x??""}px;
        left: ${w??""}px;
        width: ${b??""}px;
        height: ${G??""}px;
      `),[()=>Math.min(r(n),r(l)),()=>Math.min(r(s),r(i)),()=>Math.abs(r(i)-r(s)),()=>Math.abs(r(l)-r(n))]),U(y,I)};he(v,y=>{r(a)&&y(k)})}p(A),U(t,A),xe()}Oe(["mousedown"]);function qn(t,e,a){e()||a.dataManipulator.setfocus(a.program.id)}var Kn=(t,e)=>e.windowEvents.onMinimize(e.program.id),$n=(t,e)=>e.windowEvents.onMaximize(e.program.id),ei=Y(`<div class="flex w-full h-full justify-end items-center mx-1"><button class="h-full aspect-square
              grid place-items-center
              text-black text-lg font-bold leading-0
              button3d
              headbutton svelte-1257vag"><div class="w-[90%] h-[100%] flex items-end" style="border:solid transparent 3px;"><hr class="w-[80%]" style="border: solid black 2px;"/></div></button> <button class="h-full aspect-square
              grid place-items-center
              text-black text-lg font-bold
              button3d
              headbutton svelte-1257vag"><div class="w-[70%] h-[70%]" style="border:solid black 2px;border-top-width: 4px;"></div></button></div>`),ti=(t,e)=>e.windowEvents.onClose(e.program.id),ai=Y('<div id="openWindow" role="region"><div role="region" id="windowHead" class=" h-8 w-full flex flex-row justify-end items-center svelte-1257vag"><p class="h-full w-full text-white flex justify-left items-center m-1 mx-2 overflow-hidden whitespace-nowrap break-keep font-bold"> </p> <div class="flex-1 flex w-full h-[70%] items-center px-1"><!> <button>X</button></div></div> <div class="flex-1 w-full flex flex-row overflow-hidden"><div class="flex-1 overflow-auto"><!></div></div></div>');function si(t,e){Ie(e,!0);let a=oe(!1),s=0,n=0,i=oe(0);M(i,e.windowData.width,!0);let l=oe(0);M(l,e.windowData.height,!0);let o=oe(We(e.windowData.pos_x)),c=oe(We(e.windowData.pos_y)),d,h;function f(N){y()||(console.log("MouseDownCalled"),M(a,!0),s=N.clientX-r(o),n=N.clientY-r(c),document.addEventListener("mousemove",A),document.addEventListener("mouseup",u))}function A(N){if(!y()&&r(a)){let V=va(0,e.availableArea.offsetWidth,N.clientX),T=va(n,e.availableArea.clientHeight-(h.offsetHeight-n),N.clientY);M(o,V-s),M(c,T-n)}}function u(){y()||(M(a,!1),e.windowEvents.onChangePosition(e.program.id,r(o),r(c)),e.windowEvents.onChangeSize(e.program.id,r(i),r(l)),document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",u))}function v(){console.log("PROPAGATEUPDATES:"),console.log("CURRENT w : 	",r(i)),e.windowEvents.onChangePosition(e.program.id,r(o),r(c)),e.windowEvents.onChangeSize(e.program.id,r(i),r(l)),console.log("WINDOW w : 	",e.windowData.width)}function k(){y()||(e.windowData.maximized||(M(l,d.offsetHeight,!0),M(i,d.offsetWidth,!0)),v())}function y(){return document.pointerLockElement!==null}var I=ai();I.__mouseup=k,I.__mousedown=[qn,y,e];var x=m(I);x.__mousedown=f,x.__mousemove=A,x.__mouseup=u;var w=m(x),b=m(w,!0);p(w);var G=g(w,2),R=m(G);{var F=N=>{var V=ei(),T=m(V);T.__click=[Kn,e];var J=g(T,2);J.__click=[$n,e],p(V),U(N,V)};he(R,N=>{e.windowData.disableWindowControl||N(F)})}var _=g(R,2);let E;_.__click=[ti,e],p(G),p(x),Fe(x,N=>h=N,()=>h);var C=g(x,2),j=m(C),W=m(j);Bs(W,()=>e.program.component,(N,V)=>{V(N,{get windowEvents(){return e.windowEvents},get programID(){return e.program.id}})}),p(j),p(C),p(I),Fe(I,N=>d=N,()=>d),ce(N=>{Te(I,1,`${e.windowData.resizable?"resize":""} overflow-hidden absolute min-h-10 min-w-30 flex flex-col`,"svelte-1257vag"),be(I,`
        width: ${e.windowData.maximized?"w-full":e.windowData.width+"px"};
        height: ${e.windowData.maximized?"h-full":e.windowData.height+"px"};
        top: ${e.windowData.maximized?"0px":r(c)+"px"};
        left: ${e.windowData.maximized?"0px":r(o)+"px"};
        ${e.windowData.maximized?"right: 0px;":""}
        ${e.windowData.maximized?"bottom: 0px;":""}
        z-index: ${e.windowData.zindex??""};`),me(b,e.program.title),E=Te(_,1,"headbutton svelte-1257vag",null,E,N),_.disabled=e.windowData.disableWindowControl,be(j,`font-family: ${pe.fontPixelated?"Windows95, sans-serif":"sans-serif"};
        ${pe.isMobile?"":"font-size: 14pt;"}
        `)},[()=>({button3d:!e.windowData.disableWindowControl,"element3d-disabled":e.windowData.disableWindowControl})]),U(t,I),xe()}Oe(["mouseup","mousedown","mousemove","click"]);function ni(t,e){Ie(e,!0),Ta(()=>{e.openPrograms.forEach(n=>{var i,l,o,c,d,h,f;if(n.windowData)console.log("WINDOWDATA FOUND"+n.id);else{let A={pos_x:((i=n.windowHints)==null?void 0:i.posX)??e.availableArea.offsetWidth*.1,pos_y:((l=n.windowHints)==null?void 0:l.posY)??e.availableArea.offsetHeight*.1,width:((o=n.windowHints)==null?void 0:o.width)??e.availableArea.offsetWidth*.8,height:((c=n.windowHints)==null?void 0:c.height)??e.availableArea.offsetHeight*.8,maximized:((d=n.windowHints)==null?void 0:d.maximized)??!1,minimized:!1,hasfocus:!1,zindex:0,resizable:((h=n.windowHints)==null?void 0:h.resizable)??!0,disableWindowControl:((f=n.windowHints)==null?void 0:f.disableWindowControl)??!1};pe.isMobile&&(n.windowHints&&!n.windowHints.resizable?A.maximized=!1:A.maximized=!0),console.log("WINDOWDATA CREATED: "+n.id),e.dataManipulator.setWindowData(n.id,A),e.dataManipulator.setfocus(n.id)}})});var a=et(),s=Ze(a);$e(s,17,()=>e.openPrograms,n=>n.id,(n,i)=>{var l=et(),o=Ze(l);{var c=d=>{si(d,{get windowData(){return r(i).windowData},get availableArea(){return e.availableArea},get windowEvents(){return e.windowEvents},get dataManipulator(){return e.dataManipulator},get program(){return r(i)}})};he(o,d=>{r(i).windowData&&!r(i).windowData.minimized&&d(c)})}U(n,l)}),U(t,a),xe()}const ii=""+new URL("../assets/dottify.D_eThu90.png",import.meta.url).href;let $;function ht(t){const e=$.__externref_table_alloc();return $.__wbindgen_export_2.set(e,t),e}function Ot(t,e){try{return t.apply(this,e)}catch(a){const s=ht(a);$.__wbindgen_exn_store(s)}}const La=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&La.decode();let At=null;function nt(){return(At===null||At.byteLength===0)&&(At=new Uint8Array($.memory.buffer)),At}function yt(t,e){return t=t>>>0,La.decode(nt().subarray(t,t+e))}function Ya(t,e){return t=t>>>0,nt().subarray(t/1,t/1+e)}let tt=0;const Mt=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},oi=typeof Mt.encodeInto=="function"?function(t,e){return Mt.encodeInto(t,e)}:function(t,e){const a=Mt.encode(t);return e.set(a),{read:t.length,written:a.length}};function $t(t,e,a){if(a===void 0){const o=Mt.encode(t),c=e(o.length,1)>>>0;return nt().subarray(c,c+o.length).set(o),tt=o.length,c}let s=t.length,n=e(s,1)>>>0;const i=nt();let l=0;for(;l<s;l++){const o=t.charCodeAt(l);if(o>127)break;i[n+l]=o}if(l!==s){l!==0&&(t=t.slice(l)),n=a(n,s,s=l+t.length*3,1)>>>0;const o=nt().subarray(n+l,n+s),c=oi(t,o);l+=c.written,n=a(n,s,l,1)>>>0}return tt=l,n}let qe=null;function wt(){return(qe===null||qe.buffer.detached===!0||qe.buffer.detached===void 0&&qe.buffer!==$.memory.buffer)&&(qe=new DataView($.memory.buffer)),qe}function It(t){return t==null}function ea(t){const e=typeof t;if(e=="number"||e=="boolean"||t==null)return`${t}`;if(e=="string")return`"${t}"`;if(e=="symbol"){const n=t.description;return n==null?"Symbol":`Symbol(${n})`}if(e=="function"){const n=t.name;return typeof n=="string"&&n.length>0?`Function(${n})`:"Function"}if(Array.isArray(t)){const n=t.length;let i="[";n>0&&(i+=ea(t[0]));for(let l=1;l<n;l++)i+=", "+ea(t[l]);return i+="]",i}const a=/\[object ([^\]]+)\]/.exec(toString.call(t));let s;if(a&&a.length>1)s=a[1];else return toString.call(t);if(s=="Object")try{return"Object("+JSON.stringify(t)+")"}catch{return"Object"}return t instanceof Error?`${t.name}: ${t.message}
${t.stack}`:s}function ri(){$.init_logging()}function li(t,e){const a=e(t.length*1,1)>>>0;return nt().set(t,a/1),tt=t.length,a}function ci(t){const e=$.__wbindgen_export_2.get(t);return $.__externref_table_dealloc(t),e}function di(t,e,a,s){const n=li(t,$.__wbindgen_malloc),i=tt,l=$t(e,$.__wbindgen_malloc,$.__wbindgen_realloc),o=tt,c=$.dottify(n,i,l,o,a,s);if(c[3])throw ci(c[2]);var d=Ya(c[0],c[1]).slice();return $.__wbindgen_free(c[0],c[1]*1,1),d}function hi(t,e,a,s,n,i){$.init_simulation(t,e,a,s,n,i)}function Ai(t,e,a){return $.update_simulation(t,e,a)}function ui(t,e,a,s,n,i){$.rw_init_simulation(t,e,a,s,n,i)}function pi(t,e,a,s,n){return $.rw_update_simulation(t,e,a,s,n)}typeof FinalizationRegistry>"u"||new FinalizationRegistry(t=>$.__wbg_agent_free(t>>>0,1));typeof FinalizationRegistry>"u"||new FinalizationRegistry(t=>$.__wbg_rwagent_free(t>>>0,1));async function mi(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(s){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const a=await t.arrayBuffer();return await WebAssembly.instantiate(a,e)}else{const a=await WebAssembly.instantiate(t,e);return a instanceof WebAssembly.Instance?{instance:a,module:t}:a}}function fi(){const t={};return t.wbg={},t.wbg.__wbg_call_672a4d21634d4a24=function(){return Ot(function(e,a){return e.call(a)},arguments)},t.wbg.__wbg_crypto_12576cd66246998b=function(){return Ot(function(e){return e.crypto},arguments)},t.wbg.__wbg_debug_e17b51583ca6a632=function(e,a,s,n){console.debug(e,a,s,n)},t.wbg.__wbg_error_524f506f44df1645=function(e){console.error(e)},t.wbg.__wbg_error_7534b8e9a36f1ab4=function(e,a){let s,n;try{s=e,n=a,console.error(yt(e,a))}finally{$.__wbindgen_free(s,n,1)}},t.wbg.__wbg_error_80de38b3f7cc3c3c=function(e,a,s,n){console.error(e,a,s,n)},t.wbg.__wbg_getRandomValues_5754b82ca6952f9b=function(){return Ot(function(e,a,s){return e.getRandomValues(Ya(a,s))},arguments)},t.wbg.__wbg_info_033d8b8a0838f1d3=function(e,a,s,n){console.info(e,a,s,n)},t.wbg.__wbg_instanceof_Window_def73ea0955fc569=function(e){let a;try{a=e instanceof Window}catch{a=!1}return a},t.wbg.__wbg_log_c222819a41e063d3=function(e){console.log(e)},t.wbg.__wbg_log_cad59bb680daec67=function(e,a,s,n){console.log(e,a,s,n)},t.wbg.__wbg_new_405e22f390576ce2=function(){return new Object},t.wbg.__wbg_new_78feb108b6472713=function(){return new Array},t.wbg.__wbg_new_8a6f238a6ece86ea=function(){return new Error},t.wbg.__wbg_newnoargs_105ed471475aaf50=function(e,a){return new Function(yt(e,a))},t.wbg.__wbg_set_37837023f3d740e8=function(e,a,s){e[a>>>0]=s},t.wbg.__wbg_set_3f1d0b984ed272ed=function(e,a,s){e[a]=s},t.wbg.__wbg_stack_0ed75d68575b0f3c=function(e,a){const s=a.stack,n=$t(s,$.__wbindgen_malloc,$.__wbindgen_realloc),i=tt;wt().setInt32(e+4*1,i,!0),wt().setInt32(e+4*0,n,!0)},t.wbg.__wbg_static_accessor_GLOBAL_88a902d13a557d07=function(){const e=typeof global>"u"?null:global;return It(e)?0:ht(e)},t.wbg.__wbg_static_accessor_GLOBAL_THIS_56578be7e9f832b0=function(){const e=typeof globalThis>"u"?null:globalThis;return It(e)?0:ht(e)},t.wbg.__wbg_static_accessor_SELF_37c5d418e4bf5819=function(){const e=typeof self>"u"?null:self;return It(e)?0:ht(e)},t.wbg.__wbg_static_accessor_WINDOW_5de37043a91a9c40=function(){const e=typeof window>"u"?null:window;return It(e)?0:ht(e)},t.wbg.__wbg_warn_aaf1f4664a035bd6=function(e,a,s,n){console.warn(e,a,s,n)},t.wbg.__wbindgen_debug_string=function(e,a){const s=ea(a),n=$t(s,$.__wbindgen_malloc,$.__wbindgen_realloc),i=tt;wt().setInt32(e+4*1,i,!0),wt().setInt32(e+4*0,n,!0)},t.wbg.__wbindgen_init_externref_table=function(){const e=$.__wbindgen_export_2,a=e.grow(4);e.set(0,void 0),e.set(a+0,void 0),e.set(a+1,null),e.set(a+2,!0),e.set(a+3,!1)},t.wbg.__wbindgen_is_undefined=function(e){return e===void 0},t.wbg.__wbindgen_number_new=function(e){return e},t.wbg.__wbindgen_string_new=function(e,a){return yt(e,a)},t.wbg.__wbindgen_throw=function(e,a){throw new Error(yt(e,a))},t}function gi(t,e){return $=t.exports,Pt.__wbindgen_wasm_module=e,qe=null,At=null,$.__wbindgen_start(),$}async function Pt(t){if($!==void 0)return $;typeof t<"u"&&(Object.getPrototypeOf(t)===Object.prototype?{module_or_path:t}=t:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),typeof t>"u"&&(t=new URL(""+new URL("../assets/rust_wasm_bg.Qi9XQVhf.wasm",import.meta.url).href,import.meta.url));const e=fi();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:a,module:s}=await mi(await t,e);return gi(a,s)}const vi=""+new URL("../assets/cenna_banner.D5Gq7KwN.png",import.meta.url).href;function bi(t,e,a,s){const n=t.target;n.files&&n.files.length>0&&(M(e,n.files[0],!0),M(a,null),M(s,null))}async function yi(t,e,a,s,n,i,l,o){if(!r(e)){M(a,"Choose Image first!");return}if(!r(s)){M(a,"WASM-Modul not loaded yet");return}M(n,!0),M(a,null),M(i,null);try{const c=await r(e).arrayBuffer(),d=new Uint8Array(c);let h="png";r(e).type==="image/jpeg"?h="jpeg":r(e).type==="image/gif"&&(h="gif"),console.time("dottify");const f=di(d,h,r(l),r(o));console.timeEnd("dottify");const A=new Blob([f],{type:`image/${h}`});M(i,URL.createObjectURL(A),!0)}catch(c){M(a,`Error while working with the Image: ${c.message||c}`)}finally{M(n,!1)}}var wi=()=>{document.getElementById("dottificator").scrollIntoView()},Ii=Y('<div class="w-15 h-15 bg-blue-300 text-center p-4 text-black font-bold text-lg rounded-md transition-colors duration-200 hover:bg-yellow-300"> </div>'),xi=Y("<div> <!></div>"),ki=Y('<p class="text-red-700 bg-red-100 border border-red-400 rounded-md p-3 text-center mb-4"> </p>'),Mi=Y('<h2 class="text-2xl font-semibold text-center mb-4 svelte-kuu0w4">Your Image:</h2> <div class="flex justify-center"><img alt="Dottified Image" class="max-w-full h-auto border border-gray-300 rounded-lg shadow-lg"/></div>',1),Gi=Y(`<main class="flex mx-[1px]"><div class="min-h-screen p-8 space-y-10 overflow-hidden"><div class="space-y-10"><img class="mx-auto block"/> <h1 class="text-3xl font-bold text-center mb-8">Image dottification</h1> <section><p>The other day I saw a <a class="link" href="https://www.youtube.com/watch?v=YOwOAG3OQk8">Youtube video</a> in which the creator explained how to "Turn a Photo into a Color Dot Pattern
          in Photoshop".
          The visuals caught my eye, but eight and a half minutes for
          each image?
          (I am clearly ignoring the possibility to create a Photoshop
          template in which you only have to swap images and have <b>many</b> more possibilities for image compositing right at your fingertips). <br/> So what's hindering me from creating a much worse and less feature-rich
          pice of software in ten times the time I would need to buy, install
          and use Photoshop?
          Thats right, nothing! So let's get started and learn something.</p> <p>I wanted to learn something new and heard of this magical
          &#10024;WASM&#10024; which I wanted to try out. <a class="link text-xl" href="#fn01" role="">*</a> <br/> The only thing I knew was that WASM is compiled code running in the browser
          and that Rust can compile to WASM.
          I won't go into detail on how to set up WASM and how to use it because there
          are way better tutorials from people who know Rust and/or WebAssembly.
          I will only talk shortly about the idea that I had regarding the
          the structure of the (in the end quite small) Rust implementation.
          After that I will bore you with some highly superficial things about image processing.</p></section> <div><ol><li id="fn01" role="doc-footnote"><a class="text-xl" role="doc-backlink" href="#fnref01">*</a> WASM is not *actually* magical. Nothing is. Except perhaps Unicorns,
            love and CPU branch prediction.</li></ol></div> <section><h2 class="text-xl svelte-kuu0w4">The Idea</h2> <p>We want to "lower" the image resolution by creating virtual round pixels (which actually consist of many normal pixels).
          The color of those virtual round pixels corresponds to the average color of a corresponding region in
          the original image.
          Theoretically the shape is not restricted to circles.
          In fact, there are <a class="link" href="https://www.imgonline.com.ua/eng/dot-pattern-effect.php">online tools</a> to create this effect with different shapes, for example, hearts.
          With that, the program structure should be as follows:</p> <br/> <ol><li>1. Create a grid corresponding to the virtual pixels to save the
            color</li> <li>2. Sample the original image evenly at each location in a way that
            the final image looks good</li> <li>3. Create a new image with the correct dimensions</li> <li>4. Draw the desired shape (here only circles) side by side into the
            new image</li></ol> <br/> <p>That's all! With that, you can reproduce the desired dotting effect.
          The following is some very short surface-level theory on data
          representation and image operations which I encountered while reading
          about image manipulation. If you are not interested in this, jump
          straight to the dottificator!</p> <br/> <button class="h-20 w-60 element3d button3d">Go to dottificator!</button></section> <section><h2 class="text-xl svelte-kuu0w4">Some theory - Data Representation</h2> <p>An image consists of an 2D-Array of pixels.
          Often when working with images you are using an abstraction that encapsulates an image into
          an object or a struct with different methods or functions to act on
          the image data.
          Because of this the underlying representation of the data doesn't matter (most of the time).
          If you are building a high performance, perhaps real-time, image processing application or library
          like <a class="link" href="https://opencv.org/">opencv</a> those things
          do matter, but just doing some transformations on an image to make it &#10024;pretty&#10024;
          and beat a time of eight and a half minutes you surely should not care
          about underlying implementations.<br/> But, ignoring my own advice:<br/> Storing and accessing data has a major impact on performance.
          Popular data-driven libraries such as <a class="link" href="https://numpy.org/doc/stable/reference/arrays.ndarray.html#internal-memory-layout-of-an-ndarray">numpy</a> often store data in a single contiguous block of memory, an array.
          Additonaly information about how to access the data is saved.
          In the case of numpy it's saved as so called strides.
          
          Let's say we have an 3x3 image saved in a numpy array of shape (3, 3).
          The actual data is still stored in a single contiguous block.
          The following demonstration shows exactly that.</p> <br/> <div class="w-full flex items-center content-center"><div class="w-full flex flex-col md:flex-row items-center justify-center p-8 md:p-12"><div class="w-full max-w-5xl flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-12"><div class="grow bg-blue-500 p-6 md:p-8 rounded-lg shadow-lg"><h4 class="text-white text-xl md:text-2xl font-bold mb-4">Abstraction</h4> <p class="text-white text-sm mb-4">The logical view of the data (as a grid).</p> <div class="grid grid-cols-3 gap-1 w-fit mx-auto"></div></div> <div class="grow bg-red-500 p-6 md:p-8 rounded-lg shadow-lg"><h4 class="text-white text-xl md:text-2xl font-bold mb-4">Memory</h4> <p class="text-white text-sm mb-4">The physical view of the data (as a linear array).</p> <div class="flex flex-wrap items-center justify-center p-4 bg-red-300 rounded-md"></div> <div class="items-center justify-center flex flex-col text-xl"><div class="grid grid-cols-2 w-full"><div class="p-2 text-right">Stride :</div> <div class="p-2">[3, 1]</div> <div class="p-2 text-right">Index :</div> <div class="p-2"> </div> <div class="p-2 text-right">Offset :</div> <div class="p-2"> </div></div></div></div></div></div></div></section> <section><h2 class="text-xl svelte-kuu0w4">Some theory - Image Operations</h2> <p>In computervision there are many different operations to apply to an
          image. Those operations can be categorized in three different
          categories which each have different effects on performance:</p> <br/> <ul class="space-y-3"><li><b>Point operations:</b> Those operations act on only a single pixel,
            for example inverting an image is considered an point operation because
            each Pixel is mapped to its inverse value.</li> <li><b>Local operations:</b> Those act on a very local subset of pixels.
            For example convolution in a CNN is local because each pixel is mapped
            to a weighted average of pixels around itself.</li> <li><b>Global operations:</b> Image wide transformations like scaling, rotation
            or translation are called global because each operation acts on all pixels
            of the image.</li></ul> <br/> <p>Thus the operations necessar for the dottification are local
          operations. For every virtual pixel a corresponding pixel neighborhood
          in the original image is checked.</p></section></div> <hr/> <div class="flex flex-col md:flex-col justify-center items-center gap-4 mb-8 p-6 rounded-lg shadow-md"><h1 id="dottificator" class="text-3xl font-bold text-center mb-8">The Dottificator</h1> <div class="flex flex-col md:flex-row justify-center items-center gap-4 mb-8 p-6 rounded-lg shadow-md"><h3 class="text-xl">Image:</h3> <input type="file" accept="image/png, image/jpeg, image/gif" class="py-2 px-4 border border-gray-300 rounded-md bg-gray-50 text-gray-700"/> <h3 class="text-xl">DotSize:</h3> <input type="range" id="numberInput" min="2" max="100" step="2"/> <h3 class="text-xl">Dot Padding:</h3> <input type="range" id="numberInput" min="0" max="10" step="1"/></div> <button><!></button></div> <!> <!></div></main>`);function Ei(t,e){Ie(e,!0);let a=oe(!1),s=oe(null),n=oe(null),i=oe(null),l=oe(!1),o=oe(6),c=oe(1),d=oe(null);const h=[1,2,3,4,5,6,7,8,9],f=Be(()=>r(d)!==null?Math.floor((r(d)-1)/3):null),A=Be(()=>r(d)!==null?(r(d)-1)%3:null);at(async()=>{try{await Pt(),M(a,!0),console.log("WASM module loaded successfully!"),ri()}catch(D){console.error("Failed to load WASM module:",D),M(i,"Error while loading Wasm.")}});var u=Gi(),v=m(u),k=m(v),y=m(k),I=g(y,8),x=g(m(I),14);x.__click=[wi],p(I);var w=g(I,2),b=g(m(w),6),G=m(b),R=m(G),F=m(R),_=g(m(F),4);$e(_,21,()=>h,pt,(D,O)=>{var Q=Ii(),X=m(Q,!0);p(Q),ce(()=>me(X,r(O))),Re("mouseenter",Q,()=>M(d,r(O),!0)),Re("mouseleave",Q,()=>M(d,null)),U(D,Q)}),p(_),p(F);var E=g(F,2),C=g(m(E),4);$e(C,21,()=>h,pt,(D,O)=>{var Q=xi();let X;var le=m(Q,!0),P=g(le);{var L=ne=>{var Ae=lt(", ");U(ne,Ae)};he(P,ne=>{r(O)<9&&ne(L)})}p(Q),ce(ne=>{X=Te(Q,1,"w-15 h-15 text-center p-4 text-black font-bold text-lg rounded-md transition-colors duration-200 hover:bg-yellow-300",null,X,ne),me(le,r(O))},[()=>({"bg-yellow-300":r(O)===r(d),"rounded-md":r(O)===r(d)})]),U(D,Q)}),p(C);var j=g(C,2),W=m(j),N=g(m(W),6),V=m(N,!0);p(N);var T=g(N,4),J=m(T,!0);p(T),p(W),p(j),p(E),p(R),p(G),p(b),p(w),De(2),p(k);var S=g(k,4),Z=g(m(S),2),H=g(m(Z),2);H.__change=[bi,s,n,i];var K=g(H,4);K.defaultValue="20";var se=g(K,4);se.defaultValue="1",p(Z);var q=g(Z,2);q.__click=[yi,s,i,a,l,n,o,c];var ae=m(q);{var fe=D=>{var O=lt("Editing Image...");U(D,O)},ye=(D,O)=>{{var Q=le=>{var P=lt("Load WASM...");U(le,P)},X=(le,P)=>{{var L=Ae=>{var Ge=lt("Coose Image first!");U(Ae,Ge)},ne=Ae=>{var Ge=lt("Dottify Image!");U(Ae,Ge)};he(le,Ae=>{r(s)?Ae(ne,!1):Ae(L)},P)}};he(D,le=>{r(a)?le(X,!1):le(Q)},O)}};he(ae,D=>{r(l)?D(fe):D(ye,!1)})}p(q),p(S);var ve=g(S,2);{var re=D=>{var O=ki(),Q=m(O,!0);p(O),ce(()=>me(Q,r(i))),U(D,O)};he(ve,D=>{r(i)&&D(re)})}var te=g(ve,2);{var B=D=>{var O=Mi(),Q=g(Ze(O),2),X=m(Q);p(Q),ce(()=>z(X,"src",r(n))),U(D,O)};he(te,D=>{r(n)&&D(B)})}p(v),p(u),ce(()=>{z(y,"src",vi),me(V,r(d)?`[${r(f)}, ${r(A)}]`:""),me(J,r(d)?`${r(A)+3*r(f)} = (3 x ${r(f)}) + (1 x ${r(A)})`:""),q.disabled=!r(s)||!r(a)||r(l),Te(q,1,`py-2 px-4 rounded-md text-white font-semibold
             transition-colors duration-200 ease-in-out
             ${!r(s)||!r(a)||r(l)?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`)}),we(K,()=>r(o),D=>M(o,D)),we(se,()=>r(c),D=>M(c,D)),U(t,u),xe()}Oe(["click","change"]);let ba="dottify";const Di={id:"DOTTIFY",image:ii,title:ba,subtitle:"Transform an image into an dottified version with WASM",tags:["rust","wasm","Generative Art"].toSorted(),link:`${st}/experiments/${ba}`,component:Ei,type:Ue.Executable},Ri="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKZ2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0xNVQwMDo0NTo1MCswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wOS0xN1QxMjo1MjoyOSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTdUMTI6NTI6MjkrMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmQ2NzRiODZkLTgxMTUtM2U0Ni1hZDkwLTI4ZDllYWYzZmU5MCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjcyY2Y2ZDM0LTFkZjctNWQ0ZC1iOWY3LWJiMTljMTc1OTgxNCIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYzIzNWNkLWY1ODMtM2E0NS1iZjJmLTY4MTFmMzJiODRlOSIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIzMiIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMmMyMzVjZC1mNTgzLTNhNDUtYmYyZi02ODExZjMyYjg0ZTkiIHN0RXZ0OndoZW49IjIwMjUtMDktMTVUMDA6NDU6NTArMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiOTA1MTViLWFjMjYtZTU0ZC05MTA1LTVmZTU4M2EwYzcwMiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xNVQwMDo1OToxMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MzE3ZmQ5NTQtM2RmMC1kMDQwLTgwMDktYzMxNDVmMGEwNzFhIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTE3VDEyOjUyOjI5KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpkNjc0Yjg2ZC04MTE1LTNlNDYtYWQ5MC0yOGQ5ZWFmM2ZlOTAiIHN0RXZ0OndoZW49IjIwMjUtMDktMTdUMTI6NTI6MjkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMxN2ZkOTU0LTNkZjAtZDA0MC04MDA5LWMzMTQ1ZjBhMDcxYSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJjNmQwYzhkLTlmMzAtMDM0NC04ZTI1LTk0NGFkYWQ3ZTU0MiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjIyYzIzNWNkLWY1ODMtM2E0NS1iZjJmLTY4MTFmMzJiODRlOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr07l5wAAADBSURBVEjH7ZYLCoAgDIbzZHp0PZkNhJC1ZzkCSUjw0f/ZHq50BLcET+89Sh3adoC1yCcA1wkIQGsN+pxzIADUR8+9Jq/qTlYZsQC7ugLgtNAkDEspnFfcgHlpzMBQcLsCIM976VqMpgNmI9RavV75CMBZ5kHUWgGyyryEBBd8AYoIFLIOAJd6V1zdo8sKuKcFKUrifYCxGcWSnPY6QHCg5eKSSqbl3lYjWAHIlcdY/ugdpLnXA96X/i3/i34ACQhtJygHOzDy4S04AAAAAElFTkSuQmCC";var ji=Y('<div class="flex flex-col lg:flex-col flex-grow gap-6 w-full"><div class="flex flex-col lg:flex-row flex-grow gap-6"><div class="lg:w-1/3 p-6 rounded-lg shadow-md flex flex-col space-y-4"><div class="flex flex-col space-y-2"><div class="flex flex-row justify-between space-y-2"><label for="rd_num_agents" class="text-subtext0 font-medium">Num Agents</label> <p> </p></div> <input type="range" id="rd_num_agents" min="2" max="100" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_min_speed" class="text-subtext0 font-medium">Min Speed</label> <input type="range" id="rd_min_speed" min="1" max="25" step="0.1" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_max_speed" class="text-subtext0 font-medium">Max Speed</label> <input type="range" id="rd_max_speed" min="1" max="25" step="0.1" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><div class="flex flex-row justify-between space-y-2"><label for="rd_max_speed" class="text-subtext0 font-medium">Pause time</label> <p> </p></div> <input type="range" id="rd_max_speed" min="0" max="100" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_speed" class="text-subtext0 font-medium">Range</label> <input type="range" id="rd_radius" min="0" max="1000" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_speed" class="text-subtext0 font-medium">Trace</label> <input type="checkbox" id="rd_trace" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <button> </button></div> <div class="lg:w-2/3 p-6 rounded-lg shadow-md flex flex-col"><canvas id="myCanvas" class="w-full h-[500px] border border-overlay1 rounded-md"></canvas></div></div> <br/></div>');function Pi(t,e){Ie(e,!1);let a=ee(null),s=ee(20),n=ee(5),i=ee(8),l=ee(50),o=ee(50),c=null,d=ee(!1),h=ee(!1),f=ee(!1),A=[],u=ee(y);function v(){if(r(a)){const B=r(a).getBoundingClientRect();ot(a,r(a).width=B.width),ot(a,r(a).height=B.height)}}function k(B){if(!r(a))return;const D=r(a).getContext("2d");if(D){D.strokeStyle="#14b8a6",D.lineWidth=2,console.log(B.length),console.log(A.length);for(let O=0;O<B.length;O++){const Q=A[O],X=B[O];!Q||!X||(D.beginPath(),D.moveTo(Q.x,Q.y),D.lineTo(X.x,X.y),D.stroke())}A=B}}function y(B){if(!r(a))return;const D=r(a).getContext("2d");D&&(D.clearRect(0,0,r(a).width,r(a).height),x(D,B[0],B),I(D,B))}function I(B,D,O=8){B.fillStyle="#000000";for(const Q of D)B.beginPath(),B.arc(Q.x,Q.y,O,0,Math.PI*2),B.fill()}function x(B,D,O){B.fillStyle="#0000000F",B.strokeStyle="#FFFFFF00",B.beginPath(),B.arc(D.x,D.y,r(o),0,Math.PI*2),B.fill(),B.stroke(),B.strokeStyle="#FFFFFFFF";for(const Q of O){let X=D.x-Q.x,le=D.y-Q.y,P=Math.sqrt(X*X+le*le);P<r(o)&&P!=0&&(B.moveTo(D.x,D.y),B.lineTo(Q.x,Q.y))}B.stroke()}async function w(){if(!r(h)){if(!r(a))return;v(),hi(r(s),r(a).width,r(a).height,r(n),r(i),r(l)),M(h,!0)}if(M(d,!r(d)),r(d)){let B=function(){const D=Ai(r(n),r(i),r(l));r(u)(D),c=requestAnimationFrame(B)};c&&cancelAnimationFrame(c),B()}else c&&cancelAnimationFrame(c)}at(async()=>{await Pt(),v(),window.addEventListener("resize",v)}),Et(()=>(r(n),r(i)),()=>{r(n)>r(i)&&M(i,r(n))}),Et(()=>(r(a),r(f)),()=>{if(r(a)){const B=r(a).getContext("2d");B&&B.clearRect(0,0,r(a).width,r(a).height)}r(f)?M(u,k):M(u,y)}),Ca(),jt();var b=ji(),G=m(b),R=m(G),F=m(R),_=m(F),E=g(m(_),2),C=m(E,!0);p(E),p(_);var j=g(_,2);Me(j),p(F);var W=g(F,2),N=g(m(W),2);Me(N),p(W);var V=g(W,2),T=g(m(V),2);Me(T),p(V);var J=g(V,2),S=m(J),Z=g(m(S),2),H=m(Z);p(Z),p(S);var K=g(S,2);Me(K),p(J);var se=g(J,2),q=g(m(se),2);Me(q),p(se);var ae=g(se,2),fe=g(m(ae),2);Me(fe),p(ae);var ye=g(ae,2),ve=m(ye,!0);p(ye),p(R);var re=g(R,2),te=m(re);Fe(te,B=>M(a,B),()=>r(a)),p(re),p(G),De(2),p(b),ce(()=>{me(C,r(s)),j.disabled=r(d),me(H,`${r(l)??""} t`),Te(ye,1,`mt-4 ${r(d)?"bg-red-500":"bg-blue-500"} text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105`),me(ve,r(h)?r(d)?"Stop":"Continue":"Start")}),we(j,()=>r(s),B=>M(s,B)),Re("change",j,()=>{M(h,!1)}),we(N,()=>r(n),B=>M(n,B)),we(T,()=>r(i),B=>M(i,B)),we(K,()=>r(l),B=>M(l,B)),we(q,()=>r(o),B=>M(o,B)),Wa(fe,()=>r(f),B=>M(f,B)),Re("click",ye,w),U(t,b),xe()}var Bi=Y('<div class="flex flex-col lg:flex-col flex-grow gap-6 w-full"><div class="flex flex-col lg:flex-row flex-grow gap-6"><div class="lg:w-1/3 p-6 rounded-lg shadow-md flex flex-col space-y-4"><div class="flex flex-col space-y-2"><div class="flex flex-row justify-between"><label for="rd_speed" class="text-subtext0 font-medium">Number of Agents</label> <label for="rd_speed" class="text-subtext0 font-medium"> </label></div> <input type="range" id="rd_num_agents" min="2" max="100" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><div class="flex flex-row justify-between"><label for="rd_speed" class="text-subtext0 font-medium">Minimum Speed</label> <label for="rd_speed" class="text-subtext0 font-medium"> </label></div> <input type="range" id="rd_speed" min="1" max="10" step="0.1" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><div class="flex flex-row justify-between"><label for="rd_speed" class="text-subtext0 font-medium">Maximum Speed</label> <label for="rd_speed" class="text-subtext0 font-medium"> </label></div> <input type="range" id="rd_speed" min="1" max="10" step="0.1" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><div class="flex flex-row justify-between"><label for="rd_speed" class="text-subtext0 font-medium">Movement Time</label> <label for="rd_speed" class="text-subtext0 font-medium"> </label></div> <input type="range" id="rd_speed" min="1" max="100" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_speed" class="text-subtext0 font-medium">Range</label> <input type="range" id="rd_radius" min="1" max="1000" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <div class="flex flex-col space-y-2"><label for="rd_speed" class="text-subtext0 font-medium">Trace</label> <input type="checkbox" id="rd_trace" class="p-3 border border-overlay1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue"/></div> <button> </button></div> <div class="lg:w-2/3 p-6 rounded-lg shadow-md flex flex-col"><canvas id="myCanvas" class="w-full h-[500px] border border-overlay1 rounded-md"></canvas></div></div> <br/></div>');function Zi(t,e){Ie(e,!1);let a=ee(null),s=null,n=ee(!1),i=ee(!1),l=ee(!1),o=[],c=ee(y),d=ee(20),h=ee(5),f=ee(8),A=ee(50),u=ee(50);function v(){if(r(a)){const P=r(a).getBoundingClientRect();ot(a,r(a).width=P.width),ot(a,r(a).height=P.height)}}function k(P){if(!r(a))return;const L=r(a).getContext("2d");if(L){L.strokeStyle="#14b8a6",L.lineWidth=2,console.log(P.length),console.log(o.length);for(let ne=0;ne<P.length;ne++){const Ae=o[ne],Ge=P[ne];!Ae||!Ge||(L.beginPath(),L.moveTo(Ae.x,Ae.y),L.lineTo(Ge.x,Ge.y),L.stroke())}o=P}}function y(P){if(!r(a))return;const L=r(a).getContext("2d");L&&(L.clearRect(0,0,r(a).width,r(a).height),x(L,P[0],P),I(L,P))}function I(P,L){P.fillStyle="#000000";for(const ne of L)P.beginPath(),P.arc(ne.x,ne.y,8,0,Math.PI*2),P.fill()}function x(P,L,ne){P.fillStyle="#0000000F",P.strokeStyle="#FFFFFF00",P.beginPath(),P.arc(L.x,L.y,r(A),0,Math.PI*2),P.fill(),P.stroke(),P.strokeStyle="#FFFFFFFF";for(const Ae of ne){let Ge=L.x-Ae.x,na=L.y-Ae.y,ia=Math.sqrt(Ge*Ge+na*na);ia<r(A)&&ia!=0&&(P.moveTo(L.x,L.y),P.lineTo(Ae.x,Ae.y))}P.stroke()}async function w(){if(!r(i)){if(!r(a))return;ui(r(d),r(a).width,r(a).height,r(h),r(f),r(u)),M(i,!0)}if(M(n,!r(n)),r(n)){let P=function(){const L=pi(r(a).width,r(a).height,r(h),r(f),r(u));r(c)(L),s=requestAnimationFrame(P)};s&&cancelAnimationFrame(s),P()}else s&&cancelAnimationFrame(s)}at(async()=>{await Pt(),v(),window.addEventListener("resize",v)}),Et(()=>(r(h),r(f)),()=>{r(h)>r(f)&&M(f,r(h))}),Et(()=>(r(a),r(l)),()=>{if(r(a)){const P=r(a).getContext("2d");P&&P.clearRect(0,0,r(a).width,r(a).height)}r(l)?M(c,k):M(c,y)}),Ca(),jt();var b=Bi(),G=m(b),R=m(G),F=m(R),_=m(F),E=g(m(_),2),C=m(E,!0);p(E),p(_);var j=g(_,2);Me(j),p(F);var W=g(F,2),N=m(W),V=g(m(N),2),T=m(V,!0);p(V),p(N);var J=g(N,2);Me(J),p(W);var S=g(W,2),Z=m(S),H=g(m(Z),2),K=m(H,!0);p(H),p(Z);var se=g(Z,2);Me(se),p(S);var q=g(S,2),ae=m(q),fe=g(m(ae),2),ye=m(fe,!0);p(fe),p(ae);var ve=g(ae,2);Me(ve),p(q);var re=g(q,2),te=g(m(re),2);Me(te),p(re);var B=g(re,2),D=g(m(B),2);Me(D),p(B);var O=g(B,2),Q=m(O,!0);p(O),p(R);var X=g(R,2),le=m(X);Fe(le,P=>M(a,P),()=>r(a)),p(X),p(G),De(2),p(b),ce(()=>{me(C,r(d)),j.disabled=r(n),me(T,r(h)),me(K,r(f)),me(ye,r(u)),Te(O,1,`mt-4 ${r(n)?"bg-red-500":"bg-blue-500"} text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105`),me(Q,r(i)?r(n)?"Stop":"Continue":"Start")}),we(j,()=>r(d),P=>M(d,P)),Re("change",j,()=>{M(i,!1)}),we(J,()=>r(h),P=>M(h,P)),we(se,()=>r(f),P=>M(f,P)),we(ve,()=>r(u),P=>M(u,P)),we(te,()=>r(A),P=>M(A,P)),Wa(D,()=>r(l),P=>M(l,P)),Re("click",O,w),U(t,b),xe()}var Ti=Y(`<main class="flex mx-[1px]"><div class="min-h-screen p-8 space-y-10 overflow-hidden"><h1 class="text-4xl font-bold text-center text-text mb-8 rounded-lg p-4 shadow-md w-full">MobilityModels</h1> <p>Mobility models are used in different scenarios. I learned about them in a
      course on mobile communication. They were used to model the behavior of
      mobile clients. With concrete movement, it's possible to simulate things
      like delay-tolerant routing protocols or handover management. <br/> This page shows two different, very simple mobility models to play with. <br/> For more information look at the original <a class="color-pink-500 dark:text-gray-400" href="https://www.researchgate.net/publication/2563707_A_Survey_of_Mobility_Models_for_Ad_Hoc_Network_Research">Paper</a>.</p> <br/> <h2 class="text-3xl font-semibold text-subtext1 mb-4">Random Walk</h2> <p>The random walk is one of the simpler models to simulate mobility. Its
      goal is to simulate random movement of the simulated nodes. <br/> The idea is that each node chooses a random direction from <b>[0, 360]</b> degrees and a random speed from <b>[speed_min, speed_max]</b>. Then each
      node moves for a fixed distance or, in this case, time. If the node hits a
      wall, it simply reflects."</p> <br/> <!> <h2 class="text-3xl font-semibold text-subtext1 mb-4">Random Direction</h2> <p>The random direction model is also a fairly simple mobility model. <br/> The first step is to choose a direction to head in. Then the node will move
      until it hits a wall. After a small pause at the wall, a new direction is chosen.
      A node can choose any direction as long as it's away from the wall."</p> <!></div></main>`);function Ci(t){var e=Ti(),a=m(e),s=g(m(a),12);Zi(s,{});var n=g(s,6);Pi(n,{}),p(a),p(e),U(t,e)}let Ui="Mobility Models";const Ni={id:"MOBILITYMODELS",image:Ri,title:Ui,subtitle:"Some interactive mobility Models",tags:["sim","rust","wasm"].toSorted(),link:`${st}/experiments/mobility_models`,component:Ci,type:Ue.Executable},Si="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJSmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDktMTZUMTE6MzQ6NTYrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTZUMTE6NDU6MzgrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTE2VDExOjQ1OjM4KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MzUwODgxYi1kYWZkLTcyNDktOTljMi1lMWVkNGQ2NDVjY2YiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDphOThhNmI4ZS05NDQ3LTU0NGYtYWM4MC03MTk4ZjY0Yjk5MjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3MTAzNjk4OC03MDVkLTc3NGItOWMxZS0yMWJmOWQ0MDM5YzMiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjcxMDM2OTg4LTcwNWQtNzc0Yi05YzFlLTIxYmY5ZDQwMzljMyIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xNlQxMTozNDo1NiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDY1N2VjMjctZTM5NC05MTQxLTk2YTUtYmM1NTBhYjNmNTBiIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTE2VDExOjM4OjQyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTI3N2NkZS01YzdhLTc4NGUtYmQ3NC05NjI0ZjdmZGNlZjAiIHN0RXZ0OndoZW49IjIwMjUtMDktMTZUMTE6NDU6MzgrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjkzNTA4ODFiLWRhZmQtNzI0OS05OWMyLWUxZWQ0ZDY0NWNjZiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xNlQxMTo0NTozOCswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDEyNzdjZGUtNWM3YS03ODRlLWJkNzQtOTYyNGY3ZmRjZWYwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjcxMDM2OTg4LTcwNWQtNzc0Yi05YzFlLTIxYmY5ZDQwMzljMyIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjcxMDM2OTg4LTcwNWQtNzc0Yi05YzFlLTIxYmY5ZDQwMzljMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pn2m0+QAAAHSSURBVFjD7Zc7UsMwEIYlKiiZoeAIFAy0VLFJRUvFcAIquEH8PEI6DsAZaADLvgEdJ2CoKKFBZtdYWHJk2VKcUJCd8cSzslff/ivJG1qWJflLo22ANI5LrjwBl4FxCy6u8YdhSJ0AYgCAl91TApo4jUkURQRiU3cAcLOcKWNZlonAxqAQo/odAqEBSAAgqO4ZY+Rt/0QZvzjYrgAYy399njdpxUiJ709kYOpUAgQIX4+VcXa5O0gBjIGQWfZkhOgFuHrYU8Zf0sMFBdpKCAARg4ESYQeEdhfMpJfPb9U1/n431SpQ1humDVDFKRjJHrEcCbz7Ra0AzmbPyvhncWNUAKMlCeyCMNLoXcPyRgkjAGaC9VvI1vHwwoR831dKYQSgVL94+9bAaABjmzWAOFDGsJ9tuVFgo8B/UaCrn1i7AjuTOfnIr+0A8GsYAAB1UEDOHCdHu0+P4IT0bACahmSZzHFi/JA5ADT9wFAF2pmLSeV7AXAKAHxVa0DILttKFdBlLttSJeB1z29TczFRl5+xompWR1FAPCPLLm85nd+6BDYnXNOUeJ3+YQAJAATjHsWinIMVmMJD2EFyYtf70friGr+I1AsAfeB4f5c7/tgaAdZt32IzK9/9nWIzAAAAAElFTkSuQmCC";var _i=Y('<main class="flex mx-[1px] items-center justify-center"><div class="min-h-screen overflow-auto bg-winwhite-500"><div><div class="flex justify-end items-center"><div class="w-[80%] bg-[#44546a] text-winwhite-500 text-center h-30 flex justify-center items-end"><p class="my-5 text-2xl px-4">CV</p></div></div> <div class="bg-transparent"></div> <div class="flex justify-end items-center"><hr class="w-[80%] svelte-16h380v"/></div> <div class="second-col svelte-16h380v"><h2 class="svelte-16h380v">Contact Information</h2></div> <div class="first-col svelte-16h380v">Name</div> <div class="second-col main svelte-16h380v">Lorenz Braun</div> <div class="first-col svelte-16h380v">LinkedIn</div> <div class="second-col main svelte-16h380v"><a href="https://www.linkedin.com/in/lorenz-braun/">https://www.linkedin.com/in/<wbr/>lorenz-braun/</a></div> <div class="first-col svelte-16h380v">Website</div> <div class="second-col main svelte-16h380v"><a href="https://lorenz-lb.github.io/">https://lorenz-lb.github.io/</a></div> <div class="col-span-2 items-center text-center">For more personal information please consider contacting me on <a href="https://www.linkedin.com/in/lorenz-braun/">LinkedIn</a></div> <div class="flex justify-end items-center"><hr class="w-[80%] svelte-16h380v"/></div> <div class="second-col svelte-16h380v"><h2 class="svelte-16h380v">Professional Experience</h2></div> <div class="first-col svelte-16h380v"><span>03/2023</span> <span class="align-fix svelte-16h380v">-</span> <span>08/2023</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">Internship in DeepLearning & Machine Vision</p> <p class="sub svelte-16h380v">Fraunhofer IOSB Department Human-AI Interaction</p></div> <div class="first-col svelte-16h380v"><span>03/2022</span> <span class="align-fix svelte-16h380v">-</span> <span>03/2023</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">Student Assistant <br/> Java Application Development Tutor</p> <p class="sub svelte-16h380v">Karlsruhe University of Applied Sciences</p></div> <div class="flex justify-end items-center"><hr class="w-[80%] svelte-16h380v"/></div> <div class="second-col svelte-16h380v"><h2 class="svelte-16h380v">Education</h2></div> <div class="first-col svelte-16h380v"><span>09/2024</span> <span class="align-fix svelte-16h380v">-</span> <span>today</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">Master of Science in Computer Science</p> <p class="sub svelte-16h380v">Karlsruhe University of Applied Sciences</p></div> <div class="first-col svelte-16h380v"><span>03/2021</span> <span class="align-fix svelte-16h380v">-</span> <span>08/2024</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">Bachelor of Science in Computer Science</p> <p class="sub svelte-16h380v">Karlsruhe University of Applied Sciences</p></div> <div class="first-col svelte-16h380v"><span>08/2018</span> <span class="align-fix svelte-16h380v">-</span> <span>01/2021</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">IT specialist for <br/> Application Development</p> <p class="sub svelte-16h380v">Syntactix GmbH, Friedrichsdorf</p></div> <div class="first-col svelte-16h380v"><span>08/2016</span> <span class="align-fix svelte-16h380v">-</span> <span>06/2018</span></div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">University of Applied Sciences Entrance Qualification</p> <p class="sub svelte-16h380v">Hochtaunusschule, Oberursel</p></div> <div class="flex justify-end items-center"><hr class="w-[80%] svelte-16h380v"/></div> <div class="second-col svelte-16h380v"><h2 class="svelte-16h380v">Skills</h2></div> <div class="first-col svelte-16h380v">Programming and <br/>Query Languages</div> <div class="second-col main svelte-16h380v"><div>Python, C, <span class="whitespace-nowrap">C<span class="relative -top-1">++</span></span>, C#, Java, JavaScript, TypeScript,<br/>SQL</div></div> <div class="first-col svelte-16h380v">Frameworks & Tools</div> <div class="main svelte-16h380v">Scrum, Docker, PyTorch, OpenCV, Node.js, Svelte,<br/> Blender, MS Office</div> <div class="first-col svelte-16h380v">Languages</div> <div class="second-col svelte-16h380v"><p class="main svelte-16h380v">German - Native</p> <p class="main svelte-16h380v">English - Fluent</p></div></div></div></main>');function Wi(t,e){Ie(e,!1);let a=ee();jt();var s=_i(),n=m(s),i=m(n);p(n),p(s),ce(()=>Te(i,1,`cv ${pe.isMobile||r(a)<450?"mx-1":"mx-15"} mb-20`,"svelte-16h380v")),$s(s,"offsetWidth",l=>M(a,l)),U(t,s),xe()}const Oi={id:"CV",image:Si,title:"CV.txt",subtitle:"",tags:[].toSorted(),link:`${st}/experiments/cv`,component:Wi,type:Ue.Document},Li="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNS0wOS0xNlQxNDo0Mzo0MyswMjowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNS0wOS0xN1QxMjozOTowMSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjUtMDktMTdUMTI6Mzk6MDErMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU5ZWY2ODkxLTZiMTUtNzE0MS1hYzAxLWFkODk2YmJkOGY5MSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjM1YmM2ZGI4LTI1MGUtOTM0Ni05Y2EzLWI5MWEzMGE5OGJjOSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjg2NzU4OTVkLWY5NWItMWM0Mi04Y2UyLTQ5MGE5M2E5ZWVlOCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgdGlmZjpPcmllbnRhdGlvbj0iMSIgdGlmZjpYUmVzb2x1dGlvbj0iNzIwMDAwLzEwMDAwIiB0aWZmOllSZXNvbHV0aW9uPSI3MjAwMDAvMTAwMDAiIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiIGV4aWY6Q29sb3JTcGFjZT0iNjU1MzUiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIzMiIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjMyIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Njc1ODk1ZC1mOTViLTFjNDItOGNlMi00OTBhOTNhOWVlZTgiIHN0RXZ0OndoZW49IjIwMjUtMDktMTZUMTQ6NDM6NDMrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjJmNjU2MmRiLThhMWUtY2Y0ZS1hZDA5LTMwOWZiM2EwMjU1ZiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xNlQxNDo0ODo0MyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2ExYTdhMzAtOGYwNC05ODRiLThlMDAtYmU3MDgwNTg0Y2RiIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTE3VDEyOjM5OjAxKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplOWVmNjg5MS02YjE1LTcxNDEtYWMwMS1hZDg5NmJiZDhmOTEiIHN0RXZ0OndoZW49IjIwMjUtMDktMTdUMTI6Mzk6MDErMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdhMWE3YTMwLThmMDQtOTg0Yi04ZTAwLWJlNzA4MDU4NGNkYiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Njc1ODk1ZC1mOTViLTFjNDItOGNlMi00OTBhOTNhOWVlZTgiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4Njc1ODk1ZC1mOTViLTFjNDItOGNlMi00OTBhOTNhOWVlZTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5j63aWAAABL0lEQVRYw+2WsQ6CMBCGvdEn0clXYHQT4nO4OhpCfAUfBNwceQUneAd3x3qN1BwnlEJLDeolDVro/V+u17uCEGL2SYM/AAU4Jok3mkMcQyPAfnsbXXy+Os1QdyIA8mNbu193wwCUuE2iAsAbhBGAC/E2CGMA+k454WYKKNdbAbiIwrQB2rZAZ3z9b0WAw39/BLpgvUQgY5ChzySU4psgqM2d8/wFMQiAhpZvAV1HxQFFa2A4ItaUnDcjBcDFSxxFBdC7GfVpxykOHcB6aDs2tQs6DNlcWT29AFCIksw1iWsBMNGsKk/K/kf6ugHOr+WYjELlQvasA531G1zeeDACIqwfP+g6RaMAkOPnB4BuwbISV/55SR4dQP1GECg6xEcDkOIL08uqawCZ+bI0h4Z+H755utBLXIurAAAAAElFTkSuQmCC",Yi=""+new URL("../assets/ScrumCert.DhuNSB3B.png",import.meta.url).href;var zi=Y('<main class="flex items-center justify-center h-full"><img class="object-scale-down" alt="Scrum certificate object-contain"/></main>');function Qi(t){var e=zi(),a=m(e);p(e),ce(()=>z(a,"src",Yi)),U(t,e)}const Fi={id:"SCRUMCERT",image:Li,title:"Scrum Certificate.pdf",subtitle:"",tags:[].toSorted(),link:`${st}/experiments/scrum`,component:Qi,type:Ue.Document},Vi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJzWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDktMTFUMjI6MjQ6NDkrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMTFUMjI6NDc6NTkrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTExVDIyOjQ3OjU5KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZjM0ODZiYi1mNTU0LWMxNGItODg5YS0yYzEzYTM2NjZmM2YiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplZmQxZGY0OS0yMTM4LTQzNDUtODhlMS05ZjJiNjgzYTdkNTgiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NWQ1Njg0Yy01OTZhLTY1NDgtOGZkNS05ZjdmMzJlYmRjZWYiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ1ZDU2ODRjLTU5NmEtNjU0OC04ZmQ1LTlmN2YzMmViZGNlZiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xMVQyMjoyNDo0OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTRmYmFjOWMtNzA5MS1lMjRhLWIzYjItNzQ1YmFlZTFkODgwIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTExVDIyOjI2OjUzKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMjc1ZWMxNS0xNGMwLWZkNGQtYjg4OS1lNmM0OThlNWM1ZjYiIHN0RXZ0OndoZW49IjIwMjUtMDktMTFUMjI6NDc6NTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRmMzQ4NmJiLWY1NTQtYzE0Yi04ODlhLTJjMTNhMzY2NmYzZiIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0xMVQyMjo0Nzo1OSswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjI3NWVjMTUtMTRjMC1mZDRkLWI4ODktZTZjNDk4ZTVjNWY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ1ZDU2ODRjLTU5NmEtNjU0OC04ZmQ1LTlmN2YzMmViZGNlZiIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjQ1ZDU2ODRjLTU5NmEtNjU0OC04ZmQ1LTlmN2YzMmViZGNlZiIvPiA8cGhvdG9zaG9wOlRleHRMYXllcnM+IDxyZGY6QmFnPiA8cmRmOmxpIHBob3Rvc2hvcDpMYXllck5hbWU9IkViZW5lIDEiIHBob3Rvc2hvcDpMYXllclRleHQ9IiIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+z573IQAAAllJREFUWMPNl71OwzAQgO0wInYQj8HAr9rAyDPQnZmZJk2y8wDMzMxMELdICAQvwNIJCTGwMBNzZ8XFcS6JEwrlpPDj2nef768XLqVkixReB5BEkcwKu+Gp4fXgyYj1MAx5J4AIAOBw9+sBTZREbDQaMbDDuwPI/PYdBHSo31UQCoBzLm33wgGOH4dh8L2ZlynwfJIb0TI0vBZFCfP9HkvTlISYAWhPqMvCD+5xdUCHAI1v3BYNPe2FLIY9QytMCKTX0AOoQ4gxQNyUIGYhQIjVo022fnyo/n/cDZTRHFAZf768Up8tv2Xs9eJe/Y0309Lv90sQGgBFCMEE7A8NiEIOVEFQxjWYCWBCUAAKYiJYeo3hiEHHJy8ArA22UDkJsXKyXTCuw2IDaAgEOAXDcQxVEI6I9K+oAhJiJ1A5oZPOTEoKAGUM68OaEsZw+L5Pl6GqChAKwt5PQaDipg5bCYDGdcw/zu4KEA8QjiWrFHUu2GtNQgKYxrXYEO/TFzYdnKs1zAcswyppFQLKOCYdChqiIKrib1dCIwAaxwZR/WXjQdkEJESd1IWiBODa2xHCFPSO7YmmCmisAu0+vIStiHOv5KZfAdDzQJMiBO2BooUAUMbNTti5Ef0bABxIAlBCzSJ1bdgFwhEgLgwkbQCacsHZA1Uz4TwA9rvkgO77dS3YpS138oB9a3MCahI7H1oBZPnM7+J213AIMVHDqrMHcJc3V4COSUiN5i5i23EDiAEg+MGbEf2ypMLp7IED1ek4HGz3EsvzJyPWpTG61QK0+Zp2IpIt3w3/Qr4Ahu83D3k4dVUAAAAASUVORK5CYII=",Hi=""+new URL("../assets/banner.CBJADQtF.png",import.meta.url).href,Ji=""+new URL("../assets/chess_vibe.Br696Y_8.jpg",import.meta.url).href,Xi=""+new URL("../assets/data.BdL0MNvk.png",import.meta.url).href,qi="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWQAAAFQCAMAAAC/LvSpAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAINUExURQoKCpmZmSYmJiYmUXe+///////fnFEmJpy+///fvncmJiZRnN//////vpzf///f39++nHdRJiYmd/++d77//yZ3vt+cUf//35xRJr53Jr6+3yZRUb6cnCZRd9/fvpx3UVF3vpx3nL6cd5y+39++d5x3JlGcvv++nN+cd1FRd9/f/2lpcGxsc+Dg4MnJyZBRAABRkAAAAC1xra1xLQAAUZDJycnJrXEtAFGQycmQUQAtca3JkFEAAC0tLa3JycmtcS0ALXGtyS1xkMnJkHFxLS0AAMbgtMbgm28yAAAASI3gtCx+m8afSFCftCx+ZVAAAI1aAABagMbBZSwAAAAyZargtMbggFAyZSwAKG/BtKp+KAAAKFAAKFBaKFAASKrBZSwASCFzRqysrD8/P2RkZPLy8qass/7///7+/v39/vz8/daeYT9hntby8vv7/fLy1p5hP/r7/PLWnmE/YZ66nmE/P/j6+4KFiH+BhHp8f3N2eG1vcff5+3+ChWZoavb3+nJ0dmVnaV9gY/X2+lhZW/P1+fL1+D+AuvH0+PDz9+/y952dnZSUlJGWnNnZ2YiOk+v0/v/bjzkAZrb//9uPOTmP2///2485AAA5OY85Zv//tmYAZv+2ZgBmtrZmAGa2/zk5j9v//485OY/b/zkAAAA5jwAAOWZmOWYAAAAAZo+2/2YAOTlmtra2ZgBmZnEwQXYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAwfSURBVHhe7d2LexRXGcfxuDBEuVUBm6JWq/WuXTpcW0RorS6Qi6QUogRvKyHeb2jBtmq9X6s2QINNYwqlVGrVv9HnzJxz3p2TfQvZ/b2bDfl9n6ck2d2cnX56mJ2emWwGBgbeUmO2DRDZPiL3ICL3ICL3ICL3ICL3oIi8Zm2WrRus1da8Ncuyt60vbtuwMdu0vlZbszkruuvt73C3btmcZVsHy29fm2Wb1of7y9wgrJIgby59tmxzUluL297pCAvr0N0OeZtIFsjlt4Tcd7BKCvLQPe62xcjZ9jbInMm3qB3y0LvKKduKvLVWe7fbkawbXIxc+X62uHbI2XvKfXGCXNw1dA+Rl1xb5O1ry6mcIDtSIndQe2R/WJEgu4cQuYPaIzu8uxchu7s2rSfyklOQy6lcRb7XHURsbXN0Ufl+tjgF2eltb3MI5w7tiLzUNOQNG7N1g4uQi8NnIi81DbmYygnye99XIBJ5qanIbirflxzClblHtsgS+ZapyLW12dD7yyO5BNlN3/Ihbqcd7iGyno68YWN2V3tkRzv0gcHamvvcfqTkJvKbpCMXE7YtsntoLNxBZL03QS5e79oh19bcH40/GFyJrCfIftF+y+Zs6EPlfR/emGUfGazV7t2WZR+tftvH7v+4rOIXEVkvIjO7iNyDiNyDiNyDiNyDiNyDiNyDiNyDBj7xSSJb52Zyy0pEJz2Q3gDJZlRX70cmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00YmMjBtZCID00Z25/geYLZxJgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRiYyMG1kIgPTRgac46uzUErjA8zk9JlWcSmNj8jIUhofkZGlND4iI0tpfERGltL4iIwspfGBkHc8WK/vyHfW6/VdxWd5vntPfe++h+r1+sP7P3Ugd+3ek27THVdK40Mif9oxFsg76/Vdu/cE5IP1+qFHHk036E4spfEhkT+z70FBfuzAQ0T2IZF3OsqAfOiRR4nsgyLXd+w/GJB37D9IZB8W+bEDO8ML3/6D8YWPyFDk+sO7P+s/q9fre/cVhxtEBiPv3ZcLsjvCcC+AdSJDkeuHPteCXN+V58XBM5ERyKwopfERGVlK4yMyspTGR2RkKY0PcI6vwUIpjQ8wk9NnWsWlND4iI0tpfERGltL4iIwspfERGVlK4yMyspTGh0E+fCTP86PD5cd8pDGa5/mY/+rzx4ozfEeH0y26deP++8YfjyM3jj+R5ydOxi87akI2aTwfa9n+cvjONz2l8aGQRzyF2+TG8SfGGhNfOOm/ajSOf/FUsjW31/hIozF5dLhl5Mbo6VONxuRIHLrT/CZNfOnLj7dsf2PUmU98ZbjDTU9pfEDkUTfBSuRyy5ItHT9xsrpJt8whTxwba0F2X7lQyKMnvvq1Ydn+MHy66bdbSuPDIR8+EikOH3HzLd3SzpDd97b8HXEkQOTxkcI3bP9o2DP0J3K5h4z7tvH89Cn5amlbKjlk958m7JOPDgcF2Yl2WLlJ7s/JEyfj9rvhJ93AHW56SuNDIY8UG9gywSZPn+pwOkjuhc9Nf5nJggyZyQ7YfRa2vxx+1CF3tOkpjQ+HXP4T/90PHxnrcEslN5OLj0b75PIYIg/bPuKH72Pklm2bdF8tmsmd7ZOLj3J0MYk8uigOVdzxS9j+xqQ7uuhn5IljY/7w1X0I++Ti2BaB7MeaLHYh3R0nBzx30Oa32x/HlMfJblpXNv12S2l8GGRWltL4iIwspfERGVlK4+tX5KZl6ZPBSml8A19vNtNTUkvsjEWpC7T0yWClNL6BqWYzhV9iZ84a1PVW6TWb6ZOhOpM+la+PkdObQGXN6bT0IZ1G5FDWnP5GNSLDy5rT36xGZHhZc/pb1YgML2tOf7vaKkT+zpnvfs8Y+fvVVh3yD354xh75R9VWHfK5H//kSXPk8+fPn79w4cJPn3r6GffpqkM+e/acPfLPXD9/6ulnflF8RmR4WXP62aJf/urX5SdEhpc1p39T9lv/kcjwsub076oRGV7WnP59tVWHfO5Jt2T4B1vkP1ZbdcghU+Q/VSMyOLfB03+uRmRwWbPJ9eRQ11ulVZx/Sp8NlIq8ys7xlcjps6FKaXyAs9Xae612VXPKMKu/JZpEvyJnU395zqi/Ejk09dzfjPr7VPpcqDQJIgPTJIgMTJMgMjBNgsjANAkiA9MkiAxMkyAyME2CyMA0CSID0ySIDEyTIDIwTYLIwDQJIgPTJIgMTJPoX2TD9eT0uVBpEv2LnN4A63mzoTUJwHt12mQmkT0/lT6XdZzJwDQJIgPTJIgMTJPof+SZi5eyy+4tPl6oPqDjiBzzErNX/nHxUvHJi8UHQESORYm5lwrdedREJrKUIOMmMpGlBHn+n9W7u4jIsQR54eXq3V1E5FgV2e+YIRE5VkWeuXqtencXETlmJkFkyUyCyJKZBJElMwkiS2YSRJbMJIgsmUkQWTKTWA5knuOzr/9nslu0d6v2sBWiZZjJfY5cLtrPvXRp9pXr6UM6jMixKOHWLoisDd1dFeRs5tUcttZJ5FgFeebqtdkrKGUixyrIl18AnhshcqyCPH/j2uwV1JlUIseq+2QewqU3QDKTILJkJkFkyUyCyJKZBJElMwkiS2YSRJbMJIgsmUkQWTKTILIUJcKiPer/qokseYly0d6tXazk9eS+P8cXVuHcP5B4ji9WQeYqnDZ0d1WQs4X8tX8RGV4VGXmtPZFjKfL8DdRl4ESOVZDnbuavw36egcgxMwkiS2YSRJbMJIgsmUkQWTKTILJkJkFkyUyCyJKZBJElMwkiS0FioViun+dlWhZ5iZl/Z3NvXJ974zovnTVIJGZfue4umwUu2qe3oNIkVgDy/I1rvD5ZG7q7ooRb41zpyP1+ju+yswXvLtLnsq7fZ/LMf4o/L/KnnyzyEv69Ded53YVFZhJElswkiCyZSRBZMpMgsmQmQWTJTILIkpkEkSUzCSJLZhJEloJEuWhfXm+PicgxL1Eu2sd3tkdE5JhIFEtDwDdQJnJMJIqLZolsUZQoL0wmskVBoli0J7I2dHeFF75i0Z7I2tDd5SXCLyRa2cj9fo4PH8/xxSyR01tQaRJEBqZJEBmYJkFkYJoEkYFpEkQGpkkQGZgmQWRgmkTfI5eL9n7pHhKRY16iXLQv/0wf0mFEjolEeT0nr+o0SCTKBWW+34VBUQJtTGQpSJSL9n7pHhKRY+GFr7zS3i/dQyJyzEuUi/Zh6R4SkWNmEkSWzCSILJlJLAcyz/HZx5kMTJMgMjBNgsjANAkiA9MkiAxMk+h75GK5fu4m7n/4iCx5ibhcj/t5BiLHRKJcrp+5ilrrJHJMJIq3bsm5nmxQlPDL9dxdGBQk4nI939MeX3jhC8v1nMkGeYlyuX4+z/nLwQ0ykyCyZCZBZMlMgsiSmQSRJTMJIktmEsuBzHN89nEmA9MkiAxMk+h75HCN/QLskkMix7xEWLSfeZXI+ETCLdrPvvhfIuMTCbegvPAy7N3WiSxFCf+e9kQ2KEi4RXt3shr321yIHAsvfGHRnjPZIC8Rr7EnskFmEkSWzCSILJlJEFkykyCyZCZBZMlMgsiSmQSRJTMJIktmEsuB3O/n+MpF+9kr+Wu4NxVJn8u6fp/JftF+AfbDDMsyk/scuVy0x11mT+TWRGL+xrX5/93EXWpP5FiUcIv2869fwu0xiBwLEvEX0cLWOokcCy98xaI99LWPyDEvIb+IFjWRiSyZSRBZMpMgsmQmQWTJTILIkpkEkSUzCSJLZhJElswkiCyZSRBZ8hLhjXFwP79OZEkkZi5e4i+i1YburhZkt2LP38dnUZDwb4wDRU6fy7qVMJPdngKKnN6CSpNYAcjFG+MQ2SLO5Era0N3lJcIb4xDZIjMJIktmEkSWzCSILJlJEFmaMix9LlSaRN8i24zq6v3IRAamjUxkYNrIRAamjUxkYNrIRAamjUxkYNrIRAamjUxkYNrIRAamjdy35/jupDiTgWkjExmYNvL/AcFKYattv29RAAAAAElFTkSuQmCC",Ki=""+new URL("../assets/selectable_matrix.DLQwx_Tg.png",import.meta.url).href,$i=""+new URL("../assets/all selectable._mQ7fuEk.png",import.meta.url).href,eo=""+new URL("../assets/data_selectable_row.BsMtqFeY.png",import.meta.url).href,to=""+new URL("../assets/mask_mat.Cc9Nzhni.png",import.meta.url).href,ao=""+new URL("../assets/helper_mat.z-tzW48l.png",import.meta.url).href,so=""+new URL("../assets/id_mat.N_3dDUzA.png",import.meta.url).href,no=""+new URL("../assets/group_mat.7Zfq4F3f.png",import.meta.url).href,io=""+new URL("../assets/sum_matrix.2d4wbPm-.png",import.meta.url).href,oo=""+new URL("../assets/rook_situation.CBN6OlvR.png",import.meta.url).href,ro=""+new URL("../assets/masking.DZ9IoLmT.gif",import.meta.url).href,lo=""+new URL("../assets/queen_formula_mat.BOQZ686-.png",import.meta.url).href,co=""+new URL("../assets/game.B6Xd-6XC.png",import.meta.url).href;var ho=Y(`<main class="flex mx-[1px]"><div class="min-h-screen p-5 space-y-10 overflow-hidden"><div class="space-y-10"><img/> <h1 class="text-3xl font-bold text-center mb-8 svelte-179falk">Chexcel <br/> Chess in Excel</h1> <section><p class="svelte-179falk">Yes you read that right. Chexcel. Chess in Excel.<br/> But why? <br/> Once a famous man (who definitely lived a long and happy life and is not just a video game character) said: <br/> <br/></p> <blockquote class="quote">“Science isn’t about why – it’s about why not.” ~ Cave Johnson</blockquote> <p class="svelte-179falk"><br/> But let's start in the beginning. One day a fellow student accused me of
          being a "vibe coder" and sent the following meme with the words <br/>"Oh look, Lorenz has vibe-coded a chess game".</p> <figure class="fig-center svelte-179falk"><img alt="vibe" class="w-full max-w-100 svelte-179falk"/> <figcaption class="mt-2">*For the record, I think this is actually quite funny</figcaption></figure> <p class="svelte-179falk">That evening, I started developing my webpage (the one you're reading
          right now) and realized that I not only needed the webpage itself but
          also some content to fill it. Then it hit me: Chess in Excel –
          Chexcel! It would be a completely useless spreadsheet, probably with
          fewer features than the real thing, consuming my time and resulting in
          something nobody needs (or wants). Perfect!</p> <p class="svelte-179falk">As a first step, I rewatched a brilliant video called <a class="link" href="https://www.youtube.com/watch?v=5rg7xvTJ8SU">"I Built My Own 16-Bit CPU in Excel"</a> by <a class="link" href="https://www.youtube.com/@InkboxSoftware">Inkbox</a> to get some inspiration on how to approach this challenge. <br/> I encourage you to check out the video and leave a like, it’s very entertaining.<br/> And because the concept of chess in Excel wasn’t ridiculous enough, I decided
          to use Excel exactly as God intended: no macros, no VBA, nothing. Just
          formulas and frustration! <br/> <br/> So that’s the "why" now let’s focus on the "how".</p></section> <section><h2 class="svelte-179falk">Concepts</h2> <p class="svelte-179falk">Before we can understand the entire spreadsheet, we need to look at some key concepts that make the whole thing possible.</p> <h3 class="svelte-179falk">Updating</h3> <p class="svelte-179falk">Because we need to save data and manipulate it over time, we must
          control when and how each cell is updated. The first important insight
          I took from the Inkbox video is that, in Excel, you can set formula
          calculations to iterative and define a maximum number of iterations.
          By setting the maximum iterations to one, you can effectively control
          exactly when Excel updates each cell’s value.</p> <p class="svelte-179falk">The second piece of information I yanked from Inkbox is that Excel updates its
          cells from the top left to the bottom right. A direct result of that
          is that if you have a formula that references cells that are
          updated later, the calculation may end up using outdated values. So,
          not only do the formulas themselves need to be correct, but the
          relative position of the cells also matters.</p> <h3 class="svelte-179falk">Assigning Data</h3> <p class="svelte-179falk">Another very important concept in Excel makes this entire project much
          more complicated and convoluted: each cell can only modify its own
          value. What sounds obvious at first is actually the key difference
          between “normal” programming and programming in Excel (if you can even
          call it that). In most programming languages, you can easily create
          and modify state. In Excel, however, you must define a formula that
          accounts for everything and sets the cell’s content/state to the
          correct value.</p> <p class="svelte-179falk">Consider the following move function as an example. It can move a
          piece to a new position while also capturing anything already
          occupying that space. The code might not represent "great chess
          architecture", but it demonstrates how a function can modify the state
          of its input.</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
    move(piece, position) &lbrace; 
      // kill if applicable
      allPieces.forEach(x => if(x.position == position) x.alive = false );

      // actual movement
      piece.position = position;
    &rbrace; 
 </pre></figure> <p class="svelte-179falk">Meanwhile, if you wanted to update a piece’s “aliveness” in Excel, you
          could do something like this:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
    // [self] as name for the actual cell position
    =IF(TURN_POSITION = OWN_POSITION, FALSE, [self])
  </pre></figure> <p class="svelte-179falk">Here you can notice two things. First, there is only a single formula
          that determines the “aliveness” of one chess piece. Second, this
          introduces the next concept.</p> <h3 class="svelte-179falk">Self-referencing</h3> <p class="svelte-179falk">What would normally result in a circular reference problem is actually
          what makes this entire project possible: self-referencing. A cell only
          changes its value if certain criteria are met, otherwise it keeps its
          current state. <br/> I can already hear you asking, "BUT WHAT IS THE STATE IT’S KEEPING?" <br/> For that we have to extend the formula:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
    // [self] as name for the actual cell position
  =IF(RESET, TRUE, IF(TURN_POSITION = OWN_POSITION, FALSE, [self]))
  </pre></figure> <p class="svelte-179falk">With this approach, you can reset the game, set each piece’s
          “aliveness” back to its initial state (<code>TRUE</code>), and update
          a cell’s value only when a specific condition is met.</p> <p class="svelte-179falk">Now that these concepts are clear, let’s take a look at how the board
          is structured, what data each piece stores, and how the input is
          handled.</p></section> <section><h2 class="svelte-179falk">The Data</h2> <p class="svelte-179falk">Each piece has different properties, some of which depend on one
          another. For example, the <code>FirstMove</code> property is calculated
          as follows:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
=(Pos = PosInit)
  </pre></figure> <p class="svelte-179falk">Note that this calculation of <code>FirstMove</code> applies only to
          pawns. This is because every other piece can return to its initial
          position, but pawns cannot. Fortunately, pawns are the only pieces
          that use <code>FirstMove</code>, since each pawn has the option to
          move two spaces on its first move. To track the location of each
          piece, I index each square from the top left to the bottom right,
          starting at 0.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure></section> <section><h2 class="svelte-179falk">The Input</h2> <p class="svelte-179falk">The input consists of only three cells. The first cell is for
          resetting the game, the second for selecting a piece, and the third
          for selecting a target. The game loop then works as follows: choose a
          piece, choose a target, switch players, and repeat, just like in real
          chess.</p> <p class="svelte-179falk">The validation that ensures a player can only select their own colored
          pieces and make legal chess moves is handled via Excel’s Data
          Validation feature. This allows you to define a range of possible
          values for a cell. How these values are determined will be explained
          later.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure></section> <section><h2 class="svelte-179falk">The Statemanagement</h2> <p class="svelte-179falk">To actually play chess, you need to manage at least some state. For
          example, you must remember whose turn it is to ensure that white can
          only select white pieces and black only black pieces.<br/> Chexcel has four states:</p> <br/> <ul><li><b>0 - Select</b>: to select a piece</li> <li><b>1 - DataPropagation1</b>: to update the selection so that only
            valid targets can be chosen</li> <li><b>2 - Update</b>: to select a target and update the piece's data</li> <li><b>3 - DataPropagation2</b>: to clear the selections</li></ul> <br/> <p class="svelte-179falk">Each state also has a condition that must be met; otherwise, a
          transition is not possible. For example, before transitioning to state
          1 (DataPropagation1), you must select a piece and ensure the target is
          unselected.</p></section> <section><h2 class="svelte-179falk">Moving</h2> <p class="svelte-179falk">Now comes the most important part: moving a piece. Here is the
          definition of a piece’s position:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
=IF(RST, PosInit, IF(STATE_UPDATE, IF(Alive=0,BLANK, IF(PLAYER&lt;&gt;Id, Pos, TARGET)),Pos))
  </pre></figure> <p class="svelte-179falk">The idea is to set the initial state to <code>PosInit</code> if <code>RST</code> is <code>TRUE</code>. If no reset occurs, the position is updated only
          when we are in the correct state, the Update state. Next, a check is
          performed to see if the piece is even alive. After that comes the
          actual calculation to determine whether the position should change. An
          update is required if the piece to move (called <code>PLAYER</code>)
          matches its own <code>ID</code>. If that’s the case, the input <code>TARGET</code> is used as the new position. Combined with the Alive property introduced
          earlier, this is all you need to move pieces around the board and play
          chess, if everyone is honest and only enters correct information. <br/> Beautiful, isn’t it?</p></section> <section><h2 class="svelte-179falk">What is selectable?</h2> <p class="svelte-179falk">Now comes the hard part: which piece is actually selectable, and what
          moves are allowed for that piece? First, let’s think about it. If we
          can determine all valid moves for each piece, we can figure out
          whether a piece is selectable simply by checking if it has at least
          one valid move. So, let’s do this!</p> <h3 class="svelte-179falk">Selectable Pieces</h3> <p class="svelte-179falk">For that, we simply assume that we have a matrix for each piece
          containing all its possible moves. This could look something like
          this:</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">for each piece:</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">With this setup, we can simply check whether the sum of a piece’s
          corresponding matrix is greater than 0. If it is, the piece can move.
          Then, if the piece is alive and matches the color of the current
          player, it can be selected. The formula for that looks like this:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
=IF(AND(Alive,Color=CURRENT_COLOR),
IF(
SUM(
OFFSET(INDIRECT(ADDRESS(
XLOOKUP(Id, MOVTBL_ID,MOVTBL_ROW),
XLOOKUP(Id ,MOVTBL_ID,MOVTBL_COL)
)),0,0,8,8))>0,Id ,BLANK),
BLANK)

  </pre></figure> <p class="svelte-179falk">The part inside the <code>SUM</code> function simply returns a range
          over which the sum is calculated. Since each piece, identified by its <code>ID</code>, has its own matrix of allowed moves located in
          slightly different positions within the spreadsheet, a table of these
          locations is used to create an indirection, making it easy to copy the
          formulas. Here’s how it works:</p> <br/> <ul><li><b>XLOOKUP</b>: finds the row and column of the required matrix</li> <li><b>ADDRESS</b>: converts these coordinates into a string
            representing the cell address</li> <li><b>INDIRECT</b>: turns that string into an actual cell reference
            that can be used in other functions</li> <li><b>OFFSET</b>: then returns the corresponding 8×8 range</li></ul> <br/> <p class="svelte-179falk">If each piece calculates its selectability in this way, we can simply
          set the Data Validation range to the <code>Selectable</code> property in
          the data table.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure></section> <section><h2 class="svelte-179falk">Selectable Moves</h2> <p class="svelte-179falk">Now comes the really hard but also interesting part: How on earth can
          we program chess movement rules in Excel? It's challenging for several
          reasons:</p> <br/> <ol type="A"><li>1. Each piece has a different position.</li> <li>2. Different types of pieces have different movement patterns.</li> <li>3. Pieces cannot “jump over” others to get behind them - except for
            the knight.</li></ol> <br/> <p class="svelte-179falk">Before we dive into these problems, let me introduce you to my new
          favorite Excel functions.</p> <h3 class="svelte-179falk">LET(name, name_value, scope)</h3> <p class="svelte-179falk"><code>LET</code> allows you to define a variable that takes a
          specified value and is available within a certain scope. With <code>LET</code>, you can prevent Excel from recalculating the same
          values repeatedly, making it more efficient. But for our purposes, the
          main benefit is that it lets us write less repetitive formulas and
          makes them easier to read. For example, if we have the position of a
          piece on the chessboard, the <code>X</code> and <code>Y</code> coordinates
          can be easily calculated and used like this, for Pos = 8 this would result
          in a cell value of “1/0”.</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
=LET(X, MOD(Pos,8),
LET(Y,FLOOR(Pos/8,1),
CONCAT(X,”/”,Y)
)) 

          </pre></figure> <h3 class="svelte-179falk">MAP(array[s], lambda)</h3> <p class="svelte-179falk">Every programmer knows <code>MAP</code>: it takes an array and
          transforms each value by applying a <code>LAMBDA</code> function,
          which is essentially a wrapper to define variables and perform a
          calculation. <code>MAP</code> can also accept multiple arrays. If you
          provide multiple arrays, you must define multiple variables in the <code>LAMBDA</code>. The following example demonstrates the vector
          addition of two arrays:</p> <figure class="svelte-179falk"><pre class="svelte-179falk">
A = [1,2,3,4]; B = [1,1,1,1]
=MAP(A,B,LAMBDA(a,b,a+b))
          </pre></figure></section> <section><h2 class="svelte-179falk">Matrices!</h2> <p class="svelte-179falk">The idea is to create a matrix containing all possible moves by
          consecutively applying rules to narrow down each piece’s options until
          only legal moves remain. This rule application is done by creating
          intersections of matrices. For that we need different matrices. First
          of all, an <code>ID_MATRIX</code> is created, which is just a table
          containing all IDs at the correct positions for each piece, respecting
          if a piece is alive or not. Initial the <code>ID_MATRIX</code> looks something
          like this:</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">There are also "helper" matrices, which are used in some <code>MAP</code> functions to give access to the position or the <code>x</code> and <code>y</code> coordinates while processing a matrix.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">Next comes the key part: a <b>mask matrix</b> is created for each type
          of piece. The masks are 15×15 in size because, if a piece is placed in
          a corner, the mask still needs to cover the entire chessboard.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">Now only one type of matrix is missing.</p></section> <section><h2 class="svelte-179falk">Crossing other pieces</h2> <p class="svelte-179falk">The last thing to do is to ensure that a piece can’t walk through
          other pieces. Consider the following situation, with <code>W</code> for a white rook and <code>B</code> for any black piece. Gray indicates
          all possible positions the rook can occupy in its next move.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">The white rook can capture the black piece but should not be able to
          move further. To ensure that we simply create a new matrix called the <code>SUM_MATRIX</code>. It sums up the occurrences of pieces between
          a position and the piece.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">If a square we've calculated as walkable also has a sum of 0 in the <code>SUM_MATRIX</code>, we know for a fact that no pieces were
          skipped. This method works for the rook and king. The queen and
          bishop, however, can move diagonally and thus require special
          handling. This is where the <code>GroupMask</code> comes in. It lets the formula
          differentiate between diagonal and horizontal movements.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">I won't bother you with how exactly the masks are overlaid.
          Essentially, it's some index calculation, offsets, etc.. The pawn gets
          multiple masks because its movement is not identical between black and
          white. Also, the first move and the capture process of the pawn are
          special cases. But with the LET function introduced before, a simple
          conditional assignment is possible to always use the correct mask.</p> <p class="svelte-179falk">The following GIF demonstrates the steps taken to get the final set of
          positions each piece can move to. The board layout is that the white
          pawn at the bottom right already went two steps and the matrix
          calculated is for the white rook at the bottom right.</p> <p class="svelte-179falk">First it’s assumed that all board spaces are walkable. The second step
          is to remove all spaces already occupied by the same color. Then the
          corresponding mask, here the rook mask is applied. In the end, the <code>SUM_MATRIX</code> is used. Note that the <code>SUM_MATRIX</code> is not a simple <code>AND</code> operation but more like a <code>where SUM_MATRIX == 0</code>.</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">With all of that I want to present the calculation of what positions
          are valid next moves for the queen:</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">Finally while playing, the game looks something like this:</p> <figure class="fig-center svelte-179falk"><img alt="-" class="svelte-179falk"/></figure> <p class="svelte-179falk">I just couldn't be bothered to implement pawn promotion or the en
          passant rule. I know they're both very important, but I decided to
          call it a day. It's not chess, it's Chexcel!</p></section> <section><h2 class="svelte-179falk">Learnings</h2> <p class="svelte-179falk">I learned a lot about Excel, especially by extensively studying its
          various functions. But that wasn't really the point. I wanted to prove
          a point… . I can do it if I'm dedicated enough. Modern systems and
          tools are often so complex that I find myself thinking "I'd never be
          able to do that, I'm not skilled enough". The reality, however, is
          that with time and dedication, you can accomplish many, many things.</p> <p class="svelte-179falk">Another great realization I had was that when designing a system,
          choosing the correct level of abstraction is difficult. Do I really
          need a function that's so abstract it can be applied to integers,
          floats, strings, and even an unsigned Toyota Yaris 2023? Probably not.
          Do all my chess pieces need the same function to calculate their
          possible moves? No. Does it make sense to share the calculation logic
          between a rook, a bishop, and a queen? Yes. During this development, I
          often found myself wanting either too much or too little common
          behavior. This experience showed me the importance of frequently
          questioning whether the work done so far is really correct and the
          right way to go.</p> <br/><br/><br/> <p class="svelte-179falk">If you want to play chess in Excel, visit my <a class="link" href="https://github.com/lorenz-lb/chexcel">GitHub</a> (Start &gt; Links &gt; Github)! If you find a bug in the Excel sheet
          or something that doesn't work as expected, let me know (I probably won't
          fix it). The best part is that you don't need to enable macros in the spreadsheet
          because there are none!</p> <br/> <p class="svelte-179falk">Shoutout to the NamingManager in Excel, love that thing.</p> <br/> <p class="svelte-179falk">Anit Shoutout to Excel not being able to open two different
          spreadsheets with the same name.</p> <br/> <p class="svelte-179falk">A special thanks to Stephi for getting me to waste multiple days of my
          life, but the meme was funny.</p></section></div></div></main>`);function Ao(t){var e=ho(),a=m(e),s=m(a),n=m(s);z(n,"alt","banner");var i=g(n,4),l=g(m(i),6),o=m(l);De(2),p(l),De(4),p(i);var c=g(i,4),d=g(m(c),8),h=m(d);p(d),p(c);var f=g(c,2),A=g(m(f),6),u=m(A);p(A),p(f);var v=g(f,6),k=g(m(v),8),y=m(k);p(k);var I=g(k,4),x=m(I);p(I);var w=g(I,16),b=m(w);p(w),p(v);var G=g(v,4),R=g(m(G),4),F=m(R);p(R);var _=g(R,4),E=m(_);p(_);var C=g(_,4),j=m(C);p(C),De(2),p(G);var W=g(G,2),N=g(m(W),4),V=m(N);p(N);var T=g(N,4),J=m(T);p(T);var S=g(T,4),Z=m(S);p(S);var H=g(S,8),K=m(H);p(H);var se=g(H,4),q=m(se);p(se);var ae=g(se,4),fe=m(ae);p(ae),De(2),p(W),De(2),p(s),p(a),p(e),ce(()=>{z(n,"src",Hi),z(o,"src",Ji),z(h,"src",Xi),z(u,"src",qi),z(y,"src",Ki),z(x,"src",$i),z(b,"src",eo),z(F,"src",so),z(E,"src",ao),z(j,"src",to),z(V,"src",oo),z(J,"src",io),z(Z,"src",no),z(K,"src",ro),z(q,"src",lo),z(fe,"src",co)}),U(t,e)}const uo={id:"CHEXCEL",image:Vi,title:"Chexcel.txt",subtitle:"The route to (almost) chess in Excel",tags:["Excel"].toSorted(),link:`${st}/experiments/chexcel`,component:Ao,type:Ue.Executable},po="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAJSmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMDktMjNUMDE6MDQ6MDMrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMDktMjNUMDE6MDc6NDIrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTA5LTIzVDAxOjA3OjQyKzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiY2JlNmQ2MS0yOTZkLWZjNGEtYWNjMi1iMjRlMDg1YjY5OGQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NmUzMjI0NS1iYTg2LWZlNDktOWEzMy1hNzViY2JhYmEzNTUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NWQ3Y2JjMi0xNzRiLWVlNDYtYjJkMi0wMmFmZDQ3N2VlM2UiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjY1ZDdjYmMyLTE3NGItZWU0Ni1iMmQyLTAyYWZkNDc3ZWUzZSIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0yM1QwMTowNDowMyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZWI1YjM3ODAtODU5MS1iNjQyLTlhYTEtYjNlMjAwYmE4MWQwIiBzdEV2dDp3aGVuPSIyMDI1LTA5LTIzVDAxOjA3OjMyKzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4MWFlZmFmYy02NDBiLThiNGMtOWYxYS1hMzI5M2E0YjVkOGUiIHN0RXZ0OndoZW49IjIwMjUtMDktMjNUMDE6MDc6NDIrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJjYmU2ZDYxLTI5NmQtZmM0YS1hY2MyLWIyNGUwODViNjk4ZCIgc3RFdnQ6d2hlbj0iMjAyNS0wOS0yM1QwMTowNzo0MiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODFhZWZhZmMtNjQwYi04YjRjLTlmMWEtYTMyOTNhNGI1ZDhlIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjY1ZDdjYmMyLTE3NGItZWU0Ni1iMmQyLTAyYWZkNDc3ZWUzZSIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjY1ZDdjYmMyLTE3NGItZWU0Ni1iMmQyLTAyYWZkNDc3ZWUzZSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq3mCSoAAAPwSURBVFjD3ZdrSFRBFMfPVemxyrY9DLFSCpMeS1rtYvnMLEMzya+BZVYkPVhSEGXDD5FkgoUEIWX2EIIgM4wUegmlJWgvKYOCKIswhFyXXU2Rvd0zuzPdx7jefHzpfJmZc2bv/zdnZs69K4iiCOOZ1bpJHRQ6OztgOk0YDwDFs7IyIDYmhoznGgxgt5dNO4RfgJP2ErnwlHTGgxb0bEHzegcZu50OsH2PgNo1Tsh/Fwx1Zjcc7DGSMbbVS3sh2Ggi87BFy3xt8gtBAOR7LU0S6PhJUSLxDTjd3m3oalUI8tphSyrMNwbD1qo29nvs02fLF4ZjBmC1bpAcrxgZ/bHacq90Qf0BC4M6eqsHbh6yauZ1f+2HdZGhMJLmXVtGZjuLlTXugojF0XAg/iwIFkscETebzbAkPBxOl1dAS3MCmWgyzeFCDDeMMBBsb/vm86zlp4Hr1wDsSE9nBw4JebZ59q9xoRyO3/BiZAE3dirnnmJc214EC4OWQ07cMT5ApN17cPZZkrgPkAPKY+i/3vVMA/C13IExQfabv2eAtwUUQP6AlJRESJcgLw2d0x2jcXrg1RlQ3AL1IaQ2mG6EddYA+YO4gPJYd6eH9Oc9cFKfgHPoNZT06K3QXkOp+Aj1UEMfLFKIyRgCUHEqqKsQUUKfiZMtfxK4QLPgtxKqBDWpmmwGaBb8vTv8lmJONv7ZJnpxTQgw0/b/AXA+YhQvohkFIOKJFeB50wgBsTnEx/ptJVwIBQA+QP46nooFBAay/u9Vh2HW+4v+AVD0Rk0q7C1ohcy6h4pJzfnbIbWyHlqLc+FCdjHx2e5XQfXOIjZHPlbHjjdVKsQ13wPJqdvEYZcLEACNB0FBKEDfpzE487GaCKFgabSNjeUQNFb+QfaekLZpdKCXZEVI2pImNsUHEH/2cw+Ul5qh0O69u7xMIACKD7mGiK/6x2UigGPaD1sZxAAoKPVjNjwhcexcEICrGwH2v/SKUIDovFomHJUcyQDsqwsV4rbwQ6Qlq5b61GgMzRBiYBAkE1IGiPkASL2XIASEkLZCpBOioxYpMvDx2kE4saxAI6Aeq/tyuPPfajQZAMwAmhpAbghDAfSK88YIoDgDvkNIgk9bH9Haz4VA4hXGBPji7gBzyG7ieue6SwQeO/vZNPRhnLZoacZQIi4tQJBacgtG1x4RNIWIAKB4W8mEtUAN4xL7WEzt/+z0fhUjwJ47eTq+B3gZQNFu7zdgiBAG3YMNuguWtFqScvUfFH9/zUBPBtCk1YmeBB/w20aAmBxti9WxvUQ/gM7ar/hywlUGmSI088Yc3gOHe+4rydP7MkIQzIC0QtHPFggIh1mQA/wBYV5+umW3HpgAAAAASUVORK5CYII=";var Lt=1e-6,je=typeof Float32Array<"u"?Float32Array:Array;function Qe(){var t=new je(16);return je!=Float32Array&&(t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0),t[0]=1,t[5]=1,t[10]=1,t[15]=1,t}function za(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t}function mo(t,e,a){var s=e[0],n=e[1],i=e[2],l=e[3],o=e[4],c=e[5],d=e[6],h=e[7],f=e[8],A=e[9],u=e[10],v=e[11],k=e[12],y=e[13],I=e[14],x=e[15],w=a[0],b=a[1],G=a[2],R=a[3];return t[0]=w*s+b*o+G*f+R*k,t[1]=w*n+b*c+G*A+R*y,t[2]=w*i+b*d+G*u+R*I,t[3]=w*l+b*h+G*v+R*x,w=a[4],b=a[5],G=a[6],R=a[7],t[4]=w*s+b*o+G*f+R*k,t[5]=w*n+b*c+G*A+R*y,t[6]=w*i+b*d+G*u+R*I,t[7]=w*l+b*h+G*v+R*x,w=a[8],b=a[9],G=a[10],R=a[11],t[8]=w*s+b*o+G*f+R*k,t[9]=w*n+b*c+G*A+R*y,t[10]=w*i+b*d+G*u+R*I,t[11]=w*l+b*h+G*v+R*x,w=a[12],b=a[13],G=a[14],R=a[15],t[12]=w*s+b*o+G*f+R*k,t[13]=w*n+b*c+G*A+R*y,t[14]=w*i+b*d+G*u+R*I,t[15]=w*l+b*h+G*v+R*x,t}function Qa(t,e,a){var s=a[0],n=a[1],i=a[2],l,o,c,d,h,f,A,u,v,k,y,I;return e===t?(t[12]=e[0]*s+e[4]*n+e[8]*i+e[12],t[13]=e[1]*s+e[5]*n+e[9]*i+e[13],t[14]=e[2]*s+e[6]*n+e[10]*i+e[14],t[15]=e[3]*s+e[7]*n+e[11]*i+e[15]):(l=e[0],o=e[1],c=e[2],d=e[3],h=e[4],f=e[5],A=e[6],u=e[7],v=e[8],k=e[9],y=e[10],I=e[11],t[0]=l,t[1]=o,t[2]=c,t[3]=d,t[4]=h,t[5]=f,t[6]=A,t[7]=u,t[8]=v,t[9]=k,t[10]=y,t[11]=I,t[12]=l*s+h*n+v*i+e[12],t[13]=o*s+f*n+k*i+e[13],t[14]=c*s+A*n+y*i+e[14],t[15]=d*s+u*n+I*i+e[15]),t}function Fa(t,e,a){var s=a[0],n=a[1],i=a[2];return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*n,t[5]=e[5]*n,t[6]=e[6]*n,t[7]=e[7]*n,t[8]=e[8]*i,t[9]=e[9]*i,t[10]=e[10]*i,t[11]=e[11]*i,t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t}function Bt(t,e,a){var s=Math.sin(a),n=Math.cos(a),i=e[4],l=e[5],o=e[6],c=e[7],d=e[8],h=e[9],f=e[10],A=e[11];return e!==t&&(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[4]=i*n+d*s,t[5]=l*n+h*s,t[6]=o*n+f*s,t[7]=c*n+A*s,t[8]=d*n-i*s,t[9]=h*n-l*s,t[10]=f*n-o*s,t[11]=A*n-c*s,t}function Zt(t,e,a){var s=Math.sin(a),n=Math.cos(a),i=e[0],l=e[1],o=e[2],c=e[3],d=e[8],h=e[9],f=e[10],A=e[11];return e!==t&&(t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=i*n-d*s,t[1]=l*n-h*s,t[2]=o*n-f*s,t[3]=c*n-A*s,t[8]=i*s+d*n,t[9]=l*s+h*n,t[10]=o*s+f*n,t[11]=c*s+A*n,t}function Va(t,e,a){var s=Math.sin(a),n=Math.cos(a),i=e[0],l=e[1],o=e[2],c=e[3],d=e[4],h=e[5],f=e[6],A=e[7];return e!==t&&(t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15]),t[0]=i*n+d*s,t[1]=l*n+h*s,t[2]=o*n+f*s,t[3]=c*n+A*s,t[4]=d*n-i*s,t[5]=h*n-l*s,t[6]=f*n-o*s,t[7]=A*n-c*s,t}function fo(t,e,a,s,n){var i=1/Math.tan(e/2);if(t[0]=i/a,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=i,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[11]=-1,t[12]=0,t[13]=0,t[15]=0,n!=null&&n!==1/0){var l=1/(s-n);t[10]=(n+s)*l,t[14]=2*n*s*l}else t[10]=-1,t[14]=-2*s;return t}var go=fo;function vo(t,e,a,s,n,i,l){var o=1/(e-a),c=1/(s-n),d=1/(i-l);return t[0]=-2*o,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=-2*c,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=2*d,t[11]=0,t[12]=(e+a)*o,t[13]=(n+s)*c,t[14]=(l+i)*d,t[15]=1,t}var bo=vo;function yo(t,e,a,s){var n,i,l,o,c,d,h,f,A,u,v=e[0],k=e[1],y=e[2],I=s[0],x=s[1],w=s[2],b=a[0],G=a[1],R=a[2];return Math.abs(v-b)<Lt&&Math.abs(k-G)<Lt&&Math.abs(y-R)<Lt?za(t):(h=v-b,f=k-G,A=y-R,u=1/Math.sqrt(h*h+f*f+A*A),h*=u,f*=u,A*=u,n=x*A-w*f,i=w*h-I*A,l=I*f-x*h,u=Math.sqrt(n*n+i*i+l*l),u?(u=1/u,n*=u,i*=u,l*=u):(n=0,i=0,l=0),o=f*l-A*i,c=A*n-h*l,d=h*i-f*n,u=Math.sqrt(o*o+c*c+d*d),u?(u=1/u,o*=u,c*=u,d*=u):(o=0,c=0,d=0),t[0]=n,t[1]=o,t[2]=h,t[3]=0,t[4]=i,t[5]=c,t[6]=f,t[7]=0,t[8]=l,t[9]=d,t[10]=A,t[11]=0,t[12]=-(n*v+i*k+l*y),t[13]=-(o*v+c*k+d*y),t[14]=-(h*v+f*k+A*y),t[15]=1,t)}function ue(){var t=new je(3);return je!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0),t}function wo(t){var e=new je(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function ie(t,e,a){var s=new je(3);return s[0]=t,s[1]=e,s[2]=a,s}function Ce(t,e,a,s){return t[0]=e,t[1]=a,t[2]=s,t}function Io(t,e,a){return t[0]=e[0]+a[0],t[1]=e[1]+a[1],t[2]=e[2]+a[2],t}function xo(t,e,a){return t[0]=e[0]-a[0],t[1]=e[1]-a[1],t[2]=e[2]-a[2],t}function ko(t,e,a){return t[0]=e[0]*a,t[1]=e[1]*a,t[2]=e[2]*a,t}function Yt(t,e,a,s){return t[0]=e[0]+a[0]*s,t[1]=e[1]+a[1]*s,t[2]=e[2]+a[2]*s,t}function Ha(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t}function Mo(t,e){var a=e[0],s=e[1],n=e[2],i=a*a+s*s+n*n;return i>0&&(i=1/Math.sqrt(i)),t[0]=e[0]*i,t[1]=e[1]*i,t[2]=e[2]*i,t}function xt(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ya(t,e,a){var s=e[0],n=e[1],i=e[2],l=a[0],o=a[1],c=a[2];return t[0]=n*c-i*o,t[1]=i*l-s*c,t[2]=s*o-n*l,t}var zt=xo;(function(){var t=ue();return function(e,a,s,n,i,l){var o,c;for(a||(a=3),s||(s=0),n?c=Math.min(n*a+s,e.length):c=e.length,o=s;o<c;o+=a)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],i(t,t,l),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2];return e}})();function Ja(){var t=new je(4);return je!=Float32Array&&(t[0]=0,t[1]=0,t[2]=0,t[3]=0),t}function Go(t,e,a,s){var n=new je(4);return n[0]=t,n[1]=e,n[2]=a,n[3]=s,n}function Qt(t,e,a,s,n){return t[0]=e,t[1]=a,t[2]=s,t[3]=n,t}function Ft(t,e,a){var s=e[0],n=e[1],i=e[2],l=e[3];return t[0]=a[0]*s+a[4]*n+a[8]*i+a[12]*l,t[1]=a[1]*s+a[5]*n+a[9]*i+a[13]*l,t[2]=a[2]*s+a[6]*n+a[10]*i+a[14]*l,t[3]=a[3]*s+a[7]*n+a[11]*i+a[15]*l,t}(function(){var t=Ja();return function(e,a,s,n,i,l){var o,c;for(a||(a=4),s||(s=0),n?c=Math.min(n*a+s,e.length):c=e.length,o=s;o<c;o+=a)t[0]=e[o],t[1]=e[o+1],t[2]=e[o+2],t[3]=e[o+3],i(t,t,l),e[o]=t[0],e[o+1]=t[1],e[o+2]=t[2],e[o+3]=t[3];return e}})();function Eo(){var t=new je(2);return je!=Float32Array&&(t[0]=0,t[1]=0),t}function Ee(t,e){var a=new je(2);return a[0]=t,a[1]=e,a}(function(){var t=Eo();return function(e,a,s,n,i,l){var o,c;for(a||(a=2),s||(s=0),n?c=Math.min(n*a+s,e.length):c=e.length,o=s;o<c;o+=a)t[0]=e[o],t[1]=e[o+1],i(t,t,l),e[o]=t[0],e[o+1]=t[1];return e}})();class Do{constructor(){this.nextEntity=0,this.componentStore=new Map}createEntity(){return this.nextEntity++}addComponent(e,a){const s=a.constructor.name;this.componentStore.has(s)||this.componentStore.set(s,new Map),this.componentStore.get(s).set(e,a)}getComponents(e){const a=e.name;return this.componentStore.get(a)||new Map}}class Ro{constructor(){this.isFreeCamActive=!1,this.activeCameraEntityID=-1,this.isDebug=!0,this.selectedEntityID=-1}}class jo{constructor(){this.hasTexture=!1}async init(e,a,s,n,i=null){this.device=e,this.name=a.name,this.map_kd=a.map_kd??null,this.kd=a.kd,this.ks=a.ks??ue(),this.ka=a.ka??ue(),this.ns=a.ns??0,this.d=a.d??0,this.illum=a.illum??0,this.scrollSpeed=a.scrollSpeed??0,this.parallaxFactor=a.parallaxFactor??1,this.spriteSheetDimension=a.spriteSheetDimension??Ee(1,1),this.pipeline=s,this.createConstantGroup(e,n),this.map_kd&&i&&(await this.createTextureGroup(e,i),this.hasTexture=!0)}setAnimationData(e){const s=new Float32Array([e[0],e[1],0,0]);this.device.queue.writeBuffer(this.constantsBuffer,80,s)}createConstantGroup(e,a){const s=new Float32Array([this.kd[0],this.kd[1],this.kd[2],1,this.ks[0],this.ks[1],this.ks[2],1,this.ka[0],this.ka[1],this.ka[2],1,this.ns,this.d,this.illum,this.scrollSpeed,this.parallaxFactor,this.spriteSheetDimension[0],this.spriteSheetDimension[1],0,0,0,0,0]);this.constantsBuffer=e.createBuffer({size:s.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,label:`Material ${this.name} ConstBuffer`}),e.queue.writeBuffer(this.constantsBuffer,0,s),this.constantsBindGroup=e.createBindGroup({layout:a,entries:[{binding:0,resource:{buffer:this.constantsBuffer}}],label:`${this.name}_constants`})}async createTextureGroup(e,a){let s;if(!this.map_kd)return;const i=await(await fetch(this.map_kd)).blob(),l=await createImageBitmap(i);await this.loadImageBitmap(e,l),s=this.texture;const o={format:"rgba8unorm",dimension:"2d",aspect:"all",baseMipLevel:0,mipLevelCount:1,baseArrayLayer:0,arrayLayerCount:1},c={addressModeU:"repeat",addressModeV:"repeat",minFilter:"nearest",magFilter:"nearest",mipmapFilter:"linear",maxAnisotropy:1};this.view=s.createView(o),this.sampler=e.createSampler(c),this.textureBindGroup=e.createBindGroup({layout:a,entries:[{binding:0,resource:this.view},{binding:1,resource:this.sampler}],label:`${this.name}_textures`})}async loadImageBitmap(e,a){const s={size:{width:a.width,height:a.height},format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT};this.texture=e.createTexture(s),e.queue.copyExternalImageToTexture({source:a},{texture:this.texture},s.size)}}class Po{constructor(e,a){this.materialStore=new Map,this.pipelineCache=new Map,this.device=e,this.frameGroupLayout=a,this.textureLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,texture:{}},{binding:1,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,sampler:{}}],label:"MaterialTextureLayout"}),this.constantLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}],label:"MaterialConstantLayout"}),this.texturedPipelineLayout=e.createPipelineLayout({bindGroupLayouts:[this.frameGroupLayout,this.constantLayout,this.textureLayout],label:"TexturedMaterialGlobalPipelineLayout"}),this.untexturedPipelineLayout=e.createPipelineLayout({bindGroupLayouts:[this.frameGroupLayout,this.constantLayout],label:"simpleMaterialGlobalPipelineLayout"}),this.vertexLayout={arrayStride:32,attributes:[{shaderLocation:0,format:"float32x3",offset:0},{shaderLocation:1,format:"float32x3",offset:12},{shaderLocation:2,format:"float32x2",offset:24}]},this.instanceLayout={arrayStride:16*4,stepMode:"instance",attributes:[{shaderLocation:4,offset:0,format:"float32x4"},{shaderLocation:5,offset:16,format:"float32x4"},{shaderLocation:6,offset:32,format:"float32x4"},{shaderLocation:7,offset:48,format:"float32x4"}]}}async createMaterial(e,a=null,s="solid"){if(!this.materialStore.has(e)){a||(a={name:e,kd:ie(1,1,1)});const n=this.getPipeline(s);let i=new jo;a.map_kd?await i.init(this.device,a,n,this.constantLayout,this.textureLayout):await i.init(this.device,a,n,this.constantLayout),this.materialStore.set(e,i)}console.log(`Material Created: ${e}`)}getMaterial(e){let a=null;return this.materialStore.has(e)&&(a=this.materialStore.get(e)),a}getPipeline(e){if(this.pipelineCache.has(e))return this.pipelineCache.get(e)}async createPipeline(e){const a=e.doAlpha??!1,s=e.useTexture??!1,n=e.topology??"triangle-list";let i,l="";s?i=this.texturedPipelineLayout:i=this.untexturedPipelineLayout;const o=[{format:navigator.gpu.getPreferredCanvasFormat(),blend:void 0}],c={format:"depth24plus-stencil8",depthCompare:"less-equal",depthWriteEnabled:!0};a&&(o[0].blend={color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}},c.depthWriteEnabled=!1,c.depthCompare="less-equal",l="ALPHA");const d=await this.device.createRenderPipelineAsync({layout:i,vertex:{module:this.device.createShaderModule({code:e.shaderCode,label:`ShaderVariant:${e.shaderID}`}),entryPoint:"vs_main",buffers:[this.vertexLayout,this.instanceLayout]},fragment:{module:this.device.createShaderModule({code:e.shaderCode}),entryPoint:"fs_main",targets:o},primitive:{topology:n,cullMode:"none"},depthStencil:c,label:`${e.shaderID} Pipeline${" "+l}`});this.pipelineCache.set(e.shaderID,d)}}var de=(t=>(t.None="NONE",t.Down="DOWN",t.Held="HELD",t.Up="UP",t))(de||{});class Bo{constructor(e){this.w="NONE",this.a="NONE",this.s="NONE",this.d="NONE",this.q="NONE",this.e="NONE",this.f="NONE",this.c="NONE",this.shift="NONE",this.primary="NONE",this.secondary="NONE",this.movementX=0,this.movementY=0,this.canvas=e,this.initialize()}initialize(){this.canvas.addEventListener("keydown",this.keyDown.bind(this)),this.canvas.addEventListener("keyup",this.keyUp.bind(this)),this.canvas.addEventListener("mousedown",this.mouseDown.bind(this)),this.canvas.addEventListener("mouseup",this.mouseUp.bind(this)),this.canvas.addEventListener("mousemove",this.mouseMove.bind(this))}keyDown(e){const a=e.key.toLowerCase();this[a]!==void 0&&this[a]!="HELD"&&(this[a]="DOWN"),e.shiftKey&&this.shift!="HELD"&&(this.shift="DOWN")}keyUp(e){const a=e.key.toLowerCase();this[a]!==void 0&&(this[a]="UP"),e.shiftKey&&(this.shift="UP")}mouseDown(e){(e.buttons&1)>0&&(this.primary="DOWN"),(e.buttons&2)>0&&(this.secondary="DOWN")}mouseUp(e){(e.buttons&1)>0&&(this.primary="UP"),(e.buttons&2)>0&&(this.secondary="UP")}mouseMove(e){this.movementX+=e.movementX,this.movementY+=e.movementY}advanceKeyPress(e){return e=="DOWN"?"HELD":e=="UP"?"NONE":e}updateInputs(){this.w=this.advanceKeyPress(this.w),this.a=this.advanceKeyPress(this.a),this.s=this.advanceKeyPress(this.s),this.d=this.advanceKeyPress(this.d),this.q=this.advanceKeyPress(this.q),this.e=this.advanceKeyPress(this.e),this.f=this.advanceKeyPress(this.f),this.c=this.advanceKeyPress(this.c),this.shift=this.advanceKeyPress(this.shift),this.primary=this.advanceKeyPress(this.primary),this.secondary=this.advanceKeyPress(this.secondary),this.consumeMouse()}consumeMouse(){const e={x:this.movementX,y:this.movementY};return this.movementX=0,this.movementY=0,e}}const Zo=`// use vec4f for alignment 
struct QuadData {
    p0_1: vec4f,
    p0_2: vec4f,
    p1_1: vec4f,
    p1_2: vec4f,
    p2_1: vec4f,
    p2_2: vec4f,
    p3_1: vec4f,
    p3_2: vec4f,
};

struct Uniforms {
    gridDim: vec4u
}

struct Point {
    // FORMAT 
    // pos pos pos norm norm norm uv uv 
    data1: vec4f,
    data2: vec4f,
}

@group(0) @binding(0) var<uniform> quad_data: QuadData;
@group(0) @binding(1) var<uniform> uniforms: Uniforms;
@group(0) @binding(2) var<storage, read_write> output_points: array<Point>;
@group(0) @binding(3) var<storage, read_write> output_index: array<u32>;

override blockSize = 8;


fn generatePoints(x: u32, y: u32) {
    var index: u32 = ((y * uniforms.gridDim.x) + x);

    let maxX = uniforms.gridDim.x-1;
    let maxY = uniforms.gridDim.y-1;

    var x_part = 0f;
    var y_part = 0f;

    if x != 0 {
        x_part = f32(x) / f32(maxX);
    }
    if y != 0 {
        y_part = f32(y) / f32(maxY);
    }

    var p_x_top = mix(quad_data.p0_1.xyz, quad_data.p3_1.xyz, x_part);
    var p_x_bottom = mix(quad_data.p1_1.xyz, quad_data.p2_1.xyz, x_part);
    var p1 = mix(p_x_bottom, p_x_top, y_part);

    var p1_data1 = vec4f(p1.xyz, 1.0);
    var p1_data2 = vec4f(1, 1, 0, 1.0);

    output_points[index].data1 = p1_data1;
    output_points[index].data2 = p1_data2;
}

fn createIndex(x: u32, y: u32) {

    var index = 3 * (u32(max((i32(x) * 2 -1), 0)) + (y * (2 * (uniforms.gridDim.x-1)))) ;
    var offset = 0u;

    let xBoundMax = uniforms.gridDim.x -1;

    // left triangle
    if x > 0 {
        output_index[index + 0] = (y * uniforms.gridDim.x + x);
        output_index[index + 1] = ((y) * uniforms.gridDim.x + (x - 1));
        output_index[index + 2] = ((y + 1) * uniforms.gridDim.x + x);

        offset = 3u;

        if false {
            output_index[index + 0] = 111;
            output_index[index + 1] = x;
            output_index[index + 2] = y;
        }
    }

    // right triangle
    if x < xBoundMax {
        output_index[index + offset] = (y * uniforms.gridDim.x + x);
        output_index[index + offset + 1] = ((y + 1) * uniforms.gridDim.x + x);
        output_index[index + offset + 2] = ((y + 1) * uniforms.gridDim.x + (x + 1));

        if false {
            output_index[index + offset] = 222;
            output_index[index + offset + 1] = x;
            output_index[index + offset + 2] = y;
        }
    }
}

@compute @workgroup_size(blockSize, blockSize)
fn main(
    @builtin(global_invocation_id) global_id: vec3<u32 >
) {
    let total_points: u32 = uniforms.gridDim.x * uniforms.gridDim.y;

    var x = (global_id.x * global_id.y + global_id.x) % uniforms.gridDim.x ;
    var y = (global_id.x * global_id.y + global_id.x) / uniforms.gridDim.x ;

    x = global_id.x;
    y = global_id.y;

    if x * y + x > total_points {
        return;
    }

    generatePoints(x, y);
    createIndex(x, y);
}

`;class To{constructor(e){this.GRID_SIZE_X=Math.pow(2,6),this.GRID_SIZE_Y=Math.pow(2,6),this.TOTAL_POINTS=this.GRID_SIZE_X*this.GRID_SIZE_Y,this.NUM_INDEX_BUFFER_ELEMENTS=4*3*((this.GRID_SIZE_X-1)*2*(this.GRID_SIZE_Y-1)),this.POINT_SIZE=8*4,this.device=e,this.initComputePipeline()}initComputePipeline(){const e=this.device.createShaderModule({label:"Quad Subdivision Compute Shader Module",code:Zo}),a=new Uint32Array([this.GRID_SIZE_X,this.GRID_SIZE_Y,0,0]);this.uniformBuffer=this.device.createBuffer({label:"Uniform Grid Size Buffer",size:a.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,mappedAtCreation:!0}),new Uint32Array(this.uniformBuffer.getMappedRange()).set(a),this.uniformBuffer.unmap(),this.outputPointsBuffer=this.device.createBuffer({label:"outputPointsBuffer",size:this.TOTAL_POINTS*this.POINT_SIZE,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_SRC}),this.outputIndexBuffer=this.device.createBuffer({label:"outputIndexBuffer",size:this.NUM_INDEX_BUFFER_ELEMENTS,usage:GPUBufferUsage.STORAGE|GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_SRC|GPUBufferUsage.INDEX}),this.bindGroupLayout=this.device.createBindGroupLayout({label:"Compute Bind Group Layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:3,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]});const s=this.device.createPipelineLayout({bindGroupLayouts:[this.bindGroupLayout]});this.computePipeline=this.device.createComputePipeline({label:"Quad Subdivision Compute Pipeline",layout:s,compute:{module:e,entryPoint:"main"}}),this.readbackPointsBuffer=this.device.createBuffer({label:"point readback",size:this.TOTAL_POINTS*this.POINT_SIZE,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.readbackIndexBuffer=this.device.createBuffer({label:"index readback",size:this.NUM_INDEX_BUFFER_ELEMENTS,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST})}async subdivide(e){this.inputQuadBuffer||(this.inputQuadBuffer=this.device.createBuffer({label:"Input Quad Corner Buffer",size:e.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST})),this.device.queue.writeBuffer(this.inputQuadBuffer,0,e);const a=this.device.createBindGroup({layout:this.bindGroupLayout,entries:[{binding:0,resource:{buffer:this.inputQuadBuffer}},{binding:1,resource:{buffer:this.uniformBuffer}},{binding:2,resource:{buffer:this.outputPointsBuffer}},{binding:3,resource:{buffer:this.outputIndexBuffer}}]});let s=this.device.createCommandEncoder();const n=s.beginComputePass({label:"Quad Subdivision Compute Pass"});n.setPipeline(this.computePipeline),n.setBindGroup(0,a);const i=8,l=Math.ceil(this.GRID_SIZE_X/i),o=Math.ceil(this.GRID_SIZE_Y/i);n.dispatchWorkgroups(l,o),n.end(),s.copyBufferToBuffer(this.outputPointsBuffer,0,this.readbackPointsBuffer,0,this.readbackPointsBuffer.size),s.copyBufferToBuffer(this.outputIndexBuffer,0,this.readbackIndexBuffer,0,this.readbackIndexBuffer.size),this.device.queue.submit([s.finish()]),await this.readbackPointsBuffer.mapAsync(GPUMapMode.READ),await this.readbackIndexBuffer.mapAsync(GPUMapMode.READ);const c=this.readbackPointsBuffer.getMappedRange(),d=this.readbackIndexBuffer.getMappedRange(),h=new Float32Array(c).slice(),f=new Uint32Array(d).slice();return this.readbackPointsBuffer.unmap(),this.readbackIndexBuffer.unmap(),[h,f]}}class Co{constructor(e){this.inputManager=e}update(e,a,s,n,i){if(!n.isFreeCamActive)return;const l=ie(0,1,0),o=n.activeCameraEntityID,c=e.get(o),d=a.get(o),h=s.get(o);if(!c||!d||!h)return;const f=this.inputManager.consumeMouse();let A=0,u=0,v=0;h.eulers[0]-=f.y*c.mouseSpeed*i,h.eulers[1]-=f.x*c.mouseSpeed*i;const k=89*(Math.PI/180);h.eulers[0]=Math.max(-k,Math.min(k,h.eulers[0]));const y=Qe();Zt(y,y,h.eulers[1]),Bt(y,y,h.eulers[0]),Ce(d.right,y[0],y[1],y[2]),Ce(d.forwards,y[8],y[9],y[10]),Ha(d.forwards,d.forwards);const I=c.speed*i,x=this.inputManager.w===de.Held||this.inputManager.w===de.Down,w=this.inputManager.a===de.Held||this.inputManager.a===de.Down,b=this.inputManager.s===de.Held||this.inputManager.s===de.Down,G=this.inputManager.d===de.Held||this.inputManager.d===de.Down,R=this.inputManager.q===de.Held||this.inputManager.q===de.Down,F=this.inputManager.e===de.Held||this.inputManager.e===de.Down;x&&(A+=I),b&&(A-=I),w&&(u-=I),G&&(u+=I),R&&(v-=I),F&&(v+=I);const _=wo(d.forwards);_[1]=0,Mo(_,_),Yt(h.position,h.position,_,A),Yt(h.position,h.position,d.right,u),Yt(h.position,h.position,l,v)}}function Vt(t){return t*Math.PI/180}class Uo{constructor(e){this.MAX_ENTITIES=1e3,this.device=e,this.instanceBuffer=this.device.createBuffer({size:16*4*this.MAX_ENTITIES,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!1,label:"Instance Matrix Buffer"}),this.instanceMatrixArray=new Float32Array(16*this.MAX_ENTITIES)}update(e,a,s){const n=[];for(const[h,f]of a.entries()){const A=e.get(h);if(!A)continue;let u=f.material.hasTexture?f.material.textureBindGroup.label:"NOTEXTURE";const v=`${f.material.pipeline.label}_${f.meshVAO.label}_${u}`,k=f.material.pipeline.label.includes("ALPHA");let y=0;if(k){const I=A.position[0]-s[0],x=A.position[1]-s[1],w=A.position[2]-s[2];y=I*I+x*x+w*w}n.push({id:h,key:v,transform:A,render:f,isTransparent:k,cameraDistance:y})}n.sort((h,f)=>h.isTransparent!==f.isTransparent?h.isTransparent?1:-1:h.isTransparent?f.cameraDistance-h.cameraDistance:h.key.localeCompare(f.key));const i=[],l=[];let o=0,c=null,d=null;for(const h of n){h.key!==c&&(d={pipeline:h.render.material.pipeline,constantsBindGroup:h.render.material.constantsBindGroup,meshBuffer:h.render.meshVAO,vertexCount:h.render.vertexCount,instanceCount:0,instanceOffset:o,isTransparent:h.isTransparent,indexed:h.render.indexed,indexBuffer:h.render.indexBuffer,indexCount:h.render.indexCount},h.render.material.hasTexture&&(d.textureBindGroup=h.render.material.textureBindGroup),d.isTransparent?l.push(d):i.push(d),c=h.key);const f=Qe();Qa(f,f,h.transform.position),Bt(f,f,Vt(h.transform.eulers[0])),Zt(f,f,Vt(h.transform.eulers[1])),Va(f,f,Vt(h.transform.eulers[2])),Fa(f,f,h.transform.scale),this.instanceMatrixArray.set(f,o*16),d.instanceCount++,o++}return o>0&&this.device.queue.writeBuffer(this.instanceBuffer,0,this.instanceMatrixArray,0,o*16),{buffer:this.instanceBuffer,opaqueBatches:i,transparentBatches:l}}}class No{constructor(e){this.globalBindGroup=e}update(e,a,s,n,i){const l={colorAttachments:[{view:n,loadOp:"load",storeOp:"store"}],depthStencilAttachment:{view:i.view,depthLoadOp:"load",depthStoreOp:"store",stencilLoadOp:"load",stencilStoreOp:"store"}},o=e.beginRenderPass(l);o.setBindGroup(0,this.globalBindGroup);for(const c of s)o.setPipeline(c.pipeline),o.setBindGroup(1,c.constantsBindGroup),c.textureBindGroup&&o.setBindGroup(2,c.textureBindGroup),o.setVertexBuffer(0,c.meshBuffer),o.setVertexBuffer(1,a),o.draw(c.vertexCount,c.instanceCount,0,c.instanceOffset);o.end()}}const So={Uint32:"uint32"};class _o{constructor(e,a){this.device=e,this.globalBindGroup=a}update(e,a,s,n,i){const l={colorAttachments:[{view:n,loadOp:"clear",storeOp:"store",clearValue:{r:.1,g:.2,b:.3,a:1}}],depthStencilAttachment:{view:i.view,stencilLoadOp:"clear",stencilStoreOp:"store",depthLoadOp:"clear",depthStoreOp:"store",depthClearValue:1}},o=e.beginRenderPass(l);o.setBindGroup(0,this.globalBindGroup);for(const c of s)c.indexed&&c.indexBuffer?(o.setPipeline(c.pipeline),o.setBindGroup(1,c.constantsBindGroup),c.textureBindGroup&&o.setBindGroup(2,c.textureBindGroup),o.setVertexBuffer(0,c.meshBuffer),o.setVertexBuffer(1,a),o.setIndexBuffer(c.indexBuffer,So.Uint32),o.drawIndexed(c.indexCount,c.instanceCount,0,c.instanceOffset)):(o.setPipeline(c.pipeline),o.setBindGroup(1,c.constantsBindGroup),c.textureBindGroup&&o.setBindGroup(2,c.textureBindGroup),o.setVertexBuffer(0,c.meshBuffer),o.setVertexBuffer(1,a),o.draw(c.vertexCount,c.instanceCount,0,c.instanceOffset));o.end()}}const Wo=`@group(0) @binding(0) var<uniform> projectionMatrix: mat4x4<f32>;

@group(1) @binding(0) var atlasSampler: sampler;    
@group(1) @binding(1) var atlasTexture: texture_2d<f32>; 
@group(2) @binding(0) var<uniform> textColor: vec4<f32>;

struct VertexInput {
    @location(0) position: vec2<f32>,
    @location(1) uv: vec2<f32>,
};

struct FragmentOutput {
    @builtin(position) clip_position: vec4<f32>,
    @location(0) @interpolate(perspective, center) frag_uv: vec2<f32>,
};


@vertex
fn vs_main(input: VertexInput) -> FragmentOutput {
    var output: FragmentOutput;
    output.clip_position = projectionMatrix * vec4<f32>(input.position.x, input.position.y, 0.0, 1.0);
    output.frag_uv = input.uv;
    return output;
}


@fragment
fn fs_main(input: FragmentOutput) -> @location(0) vec4<f32> {
    let texel = textureSample(atlasTexture, atlasSampler, input.frag_uv);

    if texel.a < 0.01 {
        discard;
    }


    //return vec4<f32>(textColor.rgb, textColor.a * texel.a);
    return vec4<f32>(1, 1, 1, 1);
}
`,Oo=""+new URL("../assets/fontAtlas.CMkZOBPd.png",import.meta.url).href;async function Lo(t){const a=await(await fetch(Oo)).blob(),s=await createImageBitmap(a),n=t.createTexture({size:[s.width,s.height,1],format:"rgba8unorm",usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST});t.queue.copyExternalImageToTexture({source:s},{texture:n},[s.width,s.height]);const i=n.createView(),l=t.createSampler({magFilter:"linear",minFilter:"linear"}),o=t.createBindGroupLayout({label:"Font Atlas Bind Group Layout (Group 1)",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),c=t.createBindGroup({label:"Font Atlas Bind Group",layout:o,entries:[{binding:0,resource:l},{binding:1,resource:i}]});return{atlasBindGroupLayout:o,atlasBindGroup:c}}const Yo=[{char:"a",uv:[0,0,.1111111111111111,.1111111111111111],width:32,height:32,advance:32},{char:"b",uv:[.1111111111111111,0,.2222222222222222,.1111111111111111],width:32,height:32,advance:32},{char:"c",uv:[.2222222222222222,0,.3333333333333333,.1111111111111111],width:32,height:32,advance:32},{char:"d",uv:[.3333333333333333,0,.4444444444444444,.1111111111111111],width:32,height:32,advance:32},{char:"e",uv:[.4444444444444444,0,.5555555555555556,.1111111111111111],width:32,height:32,advance:32},{char:"f",uv:[.5555555555555556,0,.6666666666666666,.1111111111111111],width:32,height:32,advance:32},{char:"g",uv:[.6666666666666666,0,.7777777777777778,.1111111111111111],width:32,height:32,advance:32},{char:"h",uv:[.7777777777777778,0,.8888888888888888,.1111111111111111],width:32,height:32,advance:32},{char:"i",uv:[.8888888888888888,0,1,.1111111111111111],width:32,height:32,advance:32},{char:"j",uv:[0,.1111111111111111,.1111111111111111,.2222222222222222],width:32,height:32,advance:32},{char:"k",uv:[.1111111111111111,.1111111111111111,.2222222222222222,.2222222222222222],width:32,height:32,advance:32},{char:"l",uv:[.2222222222222222,.1111111111111111,.3333333333333333,.2222222222222222],width:32,height:32,advance:32},{char:"m",uv:[.3333333333333333,.1111111111111111,.4444444444444444,.2222222222222222],width:32,height:32,advance:32},{char:"n",uv:[.4444444444444444,.1111111111111111,.5555555555555556,.2222222222222222],width:32,height:32,advance:32},{char:"o",uv:[.5555555555555556,.1111111111111111,.6666666666666666,.2222222222222222],width:32,height:32,advance:32},{char:"p",uv:[.6666666666666666,.1111111111111111,.7777777777777778,.2222222222222222],width:32,height:32,advance:32},{char:"q",uv:[.7777777777777778,.1111111111111111,.8888888888888888,.2222222222222222],width:32,height:32,advance:32},{char:"r",uv:[.8888888888888888,.1111111111111111,1,.2222222222222222],width:32,height:32,advance:32},{char:"s",uv:[0,.2222222222222222,.1111111111111111,.3333333333333333],width:32,height:32,advance:32},{char:"t",uv:[.1111111111111111,.2222222222222222,.2222222222222222,.3333333333333333],width:32,height:32,advance:32},{char:"u",uv:[.2222222222222222,.2222222222222222,.3333333333333333,.3333333333333333],width:32,height:32,advance:32},{char:"v",uv:[.3333333333333333,.2222222222222222,.4444444444444444,.3333333333333333],width:32,height:32,advance:32},{char:"w",uv:[.4444444444444444,.2222222222222222,.5555555555555556,.3333333333333333],width:32,height:32,advance:32},{char:"x",uv:[.5555555555555556,.2222222222222222,.6666666666666666,.3333333333333333],width:32,height:32,advance:32},{char:"y",uv:[.6666666666666666,.2222222222222222,.7777777777777778,.3333333333333333],width:32,height:32,advance:32},{char:"z",uv:[.7777777777777778,.2222222222222222,.8888888888888888,.3333333333333333],width:32,height:32,advance:32},{char:"A",uv:[.8888888888888888,.2222222222222222,1,.3333333333333333],width:32,height:32,advance:32},{char:"B",uv:[0,.3333333333333333,.1111111111111111,.4444444444444444],width:32,height:32,advance:32},{char:"C",uv:[.1111111111111111,.3333333333333333,.2222222222222222,.4444444444444444],width:32,height:32,advance:32},{char:"D",uv:[.2222222222222222,.3333333333333333,.3333333333333333,.4444444444444444],width:32,height:32,advance:32},{char:"E",uv:[.3333333333333333,.3333333333333333,.4444444444444444,.4444444444444444],width:32,height:32,advance:32},{char:"F",uv:[.4444444444444444,.3333333333333333,.5555555555555556,.4444444444444444],width:32,height:32,advance:32},{char:"G",uv:[.5555555555555556,.3333333333333333,.6666666666666666,.4444444444444444],width:32,height:32,advance:32},{char:"H",uv:[.6666666666666666,.3333333333333333,.7777777777777778,.4444444444444444],width:32,height:32,advance:32},{char:"I",uv:[.7777777777777778,.3333333333333333,.8888888888888888,.4444444444444444],width:32,height:32,advance:32},{char:"J",uv:[.8888888888888888,.3333333333333333,1,.4444444444444444],width:32,height:32,advance:32},{char:"K",uv:[0,.4444444444444444,.1111111111111111,.5555555555555556],width:32,height:32,advance:32},{char:"L",uv:[.1111111111111111,.4444444444444444,.2222222222222222,.5555555555555556],width:32,height:32,advance:32},{char:"M",uv:[.2222222222222222,.4444444444444444,.3333333333333333,.5555555555555556],width:32,height:32,advance:32},{char:"N",uv:[.3333333333333333,.4444444444444444,.4444444444444444,.5555555555555556],width:32,height:32,advance:32},{char:"O",uv:[.4444444444444444,.4444444444444444,.5555555555555556,.5555555555555556],width:32,height:32,advance:32},{char:"P",uv:[.5555555555555556,.4444444444444444,.6666666666666666,.5555555555555556],width:32,height:32,advance:32},{char:"Q",uv:[.6666666666666666,.4444444444444444,.7777777777777778,.5555555555555556],width:32,height:32,advance:32},{char:"R",uv:[.7777777777777778,.4444444444444444,.8888888888888888,.5555555555555556],width:32,height:32,advance:32},{char:"S",uv:[.8888888888888888,.4444444444444444,1,.5555555555555556],width:32,height:32,advance:32},{char:"T",uv:[0,.5555555555555556,.1111111111111111,.6666666666666666],width:32,height:32,advance:32},{char:"U",uv:[.1111111111111111,.5555555555555556,.2222222222222222,.6666666666666666],width:32,height:32,advance:32},{char:"V",uv:[.2222222222222222,.5555555555555556,.3333333333333333,.6666666666666666],width:32,height:32,advance:32},{char:"W",uv:[.3333333333333333,.5555555555555556,.4444444444444444,.6666666666666666],width:32,height:32,advance:32},{char:"X",uv:[.4444444444444444,.5555555555555556,.5555555555555556,.6666666666666666],width:32,height:32,advance:32},{char:"Y",uv:[.5555555555555556,.5555555555555556,.6666666666666666,.6666666666666666],width:32,height:32,advance:32},{char:"Z",uv:[.6666666666666666,.5555555555555556,.7777777777777778,.6666666666666666],width:32,height:32,advance:32},{char:"1",uv:[.7777777777777778,.5555555555555556,.8888888888888888,.6666666666666666],width:32,height:32,advance:32},{char:"2",uv:[.8888888888888888,.5555555555555556,1,.6666666666666666],width:32,height:32,advance:32},{char:"3",uv:[0,.6666666666666666,.1111111111111111,.7777777777777778],width:32,height:32,advance:32},{char:"4",uv:[.1111111111111111,.6666666666666666,.2222222222222222,.7777777777777778],width:32,height:32,advance:32},{char:"5",uv:[.2222222222222222,.6666666666666666,.3333333333333333,.7777777777777778],width:32,height:32,advance:32},{char:"6",uv:[.3333333333333333,.6666666666666666,.4444444444444444,.7777777777777778],width:32,height:32,advance:32},{char:"7",uv:[.4444444444444444,.6666666666666666,.5555555555555556,.7777777777777778],width:32,height:32,advance:32},{char:"8",uv:[.5555555555555556,.6666666666666666,.6666666666666666,.7777777777777778],width:32,height:32,advance:32},{char:"9",uv:[.6666666666666666,.6666666666666666,.7777777777777778,.7777777777777778],width:32,height:32,advance:32},{char:"0",uv:[.7777777777777778,.6666666666666666,.8888888888888888,.7777777777777778],width:32,height:32,advance:32},{char:" ",uv:[.8888888888888888,.6666666666666666,1,.7777777777777778],width:32,height:32,advance:32},{char:"!",uv:[0,.7777777777777778,.1111111111111111,.8888888888888888],width:32,height:32,advance:32},{char:".",uv:[.1111111111111111,.7777777777777778,.2222222222222222,.8888888888888888],width:32,height:32,advance:32},{char:",",uv:[.2222222222222222,.7777777777777778,.3333333333333333,.8888888888888888],width:32,height:32,advance:32},{char:":",uv:[.3333333333333333,.7777777777777778,.4444444444444444,.8888888888888888],width:32,height:32,advance:32},{char:";",uv:[.4444444444444444,.7777777777777778,.5555555555555556,.8888888888888888],width:32,height:32,advance:32},{char:"-",uv:[.5555555555555556,.7777777777777778,.6666666666666666,.8888888888888888],width:32,height:32,advance:32},{char:"+",uv:[.6666666666666666,.7777777777777778,.7777777777777778,.8888888888888888],width:32,height:32,advance:32},{char:"=",uv:[.7777777777777778,.7777777777777778,.8888888888888888,.8888888888888888],width:32,height:32,advance:32},{char:"/",uv:[.8888888888888888,.7777777777777778,1,.8888888888888888],width:32,height:32,advance:32},{char:"\\",uv:[0,.8888888888888888,.1111111111111111,1],width:32,height:32,advance:32},{char:"?",uv:[.1111111111111111,.8888888888888888,.2222222222222222,1],width:32,height:32,advance:32}];class zo{constructor(e,a,s){this.device=e,this.canvasWidth=a,this.canvasHeight=s}async init(){let e=await Lo(this.device);this.atlasBindGroup=e.atlasBindGroup,this.shaderModule=this.device.createShaderModule({code:Wo});const a=this.device.createBindGroupLayout({label:"Ortho (Group 0) Layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}}]}),s=e.atlasBindGroupLayout,n=this.device.createBindGroupLayout({label:"Color (Group 2) Layout",entries:[{binding:0,visibility:GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}]});this.orthoBuffer=this.device.createBuffer({size:16*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,label:"HUD Ortho Matrix Buffer"}),this.orthoBindGroup=this.device.createBindGroup({layout:a,entries:[{binding:0,resource:{buffer:this.orthoBuffer}}]}),this.colorUniformBuffer=this.device.createBuffer({size:4*4,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,label:"HUD Color Uniform Buffer"}),this.colorBindGroup=this.device.createBindGroup({layout:n,entries:[{binding:0,resource:{buffer:this.colorUniformBuffer}}]}),this.vertexBufferLayout={arrayStride:4*4,stepMode:"vertex",attributes:[{shaderLocation:0,offset:0,format:"float32x2"},{shaderLocation:1,offset:8,format:"float32x2"}]},this.textPipeline=this.device.createRenderPipeline({layout:this.device.createPipelineLayout({bindGroupLayouts:[a,s,n]}),vertex:{module:this.shaderModule,entryPoint:"vs_main",buffers:[this.vertexBufferLayout]},primitive:{topology:"triangle-list"},depthStencil:{depthWriteEnabled:!1,depthCompare:"always",format:"depth24plus-stencil8"},fragment:{module:this.shaderModule,entryPoint:"fs_main",targets:[{format:navigator.gpu.getPreferredCanvasFormat(),blend:{color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]}})}updateOrthoMatrix(){const e=Qe();bo(e,0,this.canvasWidth,this.canvasHeight,0,-1,1),this.device.queue.writeBuffer(this.orthoBuffer,0,e)}update(e,a,s,n){if(a.size==0)return;this.updateOrthoMatrix();const i={label:"HUD Render Pass",colorAttachments:[{view:s,loadOp:"load",storeOp:"store",clearValue:{r:0,g:0,b:0,a:0}}],depthStencilAttachment:{view:n.view,depthLoadOp:"load",depthStoreOp:"store",stencilLoadOp:"load",stencilStoreOp:"store"}},l=e.beginRenderPass(i);l.setPipeline(this.textPipeline),l.setBindGroup(0,this.orthoBindGroup),l.setBindGroup(1,this.atlasBindGroup),l.setBindGroup(2,this.colorBindGroup);for(let[o,c]of a.entries())c.vertexBuffer&&(this.device.queue.writeBuffer(this.colorUniformBuffer,0,c.color),l.setVertexBuffer(0,c.vertexBuffer),l.draw(c.vertexCount));l.end()}}class Qo{constructor(e,a,s){this.device=e,this.globalBindGroup=a,this.context=s,this.opaqueRenderSystem=new _o(this.device,this.globalBindGroup),this.alphaRenderSystem=new No(this.globalBindGroup),this.hudRenderSystem=new zo(this.device,this.context.canvas.width,this.context.canvas.height);const n=this.device.createTexture({size:[s.canvas.width,s.canvas.height],format:"depth24plus-stencil8",usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});this.depthTextureView=n.createView()}async init(){await this.hudRenderSystem.init()}update(e,a,s,n){const i=this.context.getCurrentTexture().createView(),l={view:this.depthTextureView},o=this.device.createCommandEncoder();this.opaqueRenderSystem.update(o,e,a,i,l),this.alphaRenderSystem.update(o,e,s,i,l),this.hudRenderSystem.update(o,n,i,l),this.device.queue.submit([o.finish()])}}class Fo{update(e,a){for(let[s,n]of e.entries()){let i=a.get(s);const l=e.get(s),o=a.get(s);if(!l||!o||!i)continue;const c=89*(Math.PI/180);o.eulers[0]=Math.max(-c,Math.min(c,o.eulers[0]));const d=Qe();Zt(d,d,o.eulers[1]),Bt(d,d,o.eulers[0]),Ce(l.right,d[0],d[1],d[2]),Ce(l.forwards,d[8],d[9],d[10]),Ha(l.forwards,l.forwards)}}}const Vo=32,Ho=4;class Jo{constructor(e){this.device=e,this.fontAtlasMap=new Map,Yo.forEach(a=>this.fontAtlasMap.set(a.char,a))}update(e){for(let[a,s]of e.entries()){if(!s.changed)continue;let n=s.position[0],i=s.position[1];const l=s.fontSize/Vo;let o=[];for(const h of s.text){const f=this.fontAtlasMap.get(h);if(!f)continue;const[A,u,v,k]=f.uv,y=f.width*l,I=f.height*l,x=n,w=i,b=n+y,G=i+I;o.push(x,w,A,u),o.push(x,G,A,k),o.push(b,w,v,u),o.push(x,G,A,k),o.push(b,G,v,k),o.push(b,w,v,u),n+=f.advance*l}const c=new Float32Array(o),d=c.byteLength;(!s.vertexBuffer||d>s.bufferByteSize)&&(s.vertexBuffer&&s.vertexBuffer.destroy(),s.vertexBuffer=this.device.createBuffer({size:d,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,label:`Text Buffer Entity ${a}`}),s.bufferByteSize=d),this.device.queue.writeBuffer(s.vertexBuffer,0,c),s.vertexCount=o.length/Ho,s.changed=!1}}}class Xo{constructor(e){this.inputManager=e}update(e,a,s){this.inputManager.c==de.Up&&(console.log("F PRESSED UP "),s.isFreeCamActive=!s.isFreeCamActive,s.isFreeCamActive?s.activeCameraEntityID=e:s.activeCameraEntityID=a)}}function Ht(t){return t*Math.PI/180}class qo{cast(e,a,s,n,i){let l=-1,o=1/0;for(const[c,d]of n.entries()){const h=s.get(c),f=i.getLocalVertices(d.meshID);if(!h||!f)continue;console.log("Check Mesh:	",d.meshID);const A=this.findClosestHitOnMesh(e,a,f,h);A&&A.distance<o&&(o=A.distance,l=c)}return{entityID:l,distance:o}}findClosestHitOnMesh(e,a,s,n){let i=null,l=1/0;const o=Qe();za(o),Qa(o,o,n.position),Bt(o,o,Ht(n.eulers[0])),Zt(o,o,Ht(n.eulers[1])),Va(o,o,Ht(n.eulers[2])),Fa(o,o,n.scale);const c=8,d=ue(),h=ue(),f=ue(),A=ue(),u=Ja();for(let v=0;v<s.length;v+=c*3){Ce(d,s[v+0],s[v+1],s[v+2]),Qt(u,d[0],d[1],d[2],1),Ft(u,u,o),Ce(h,u[0],u[1],u[2]),Ce(d,s[v+c+0],s[v+c+1],s[v+c+2]),Qt(u,d[0],d[1],d[2],1),Ft(u,u,o),Ce(f,u[0],u[1],u[2]),Ce(d,s[v+c*2+0],s[v+c*2+1],s[v+c*2+2]),Qt(u,d[0],d[1],d[2],1),Ft(u,u,o),Ce(A,u[0],u[1],u[2]);const k=this.mollerTrumbore(e,a,h,f,A);k!==null&&k>0&&k<l&&(l=k,i={distance:l})}return i}mollerTrumbore(e,a,s,n,i){const o=ue(),c=ue();zt(o,n,s),zt(c,i,s);const d=ue();ya(d,a,c);const h=xt(o,d);if(h<1e-7)return null;const f=ue();zt(f,e,s);const A=xt(f,d);if(A<0||A>h)return null;const u=ue();ya(u,f,o);const v=xt(a,u);if(v<0||A+v>h)return null;const k=xt(c,u),y=1/h,I=k*y;return I<0?null:I}}class Ko{constructor(e,a){this.inputManager=e,this.meshManager=a,this.raycaster=new qo}update(e,a,s,n){if(!e.isFreeCamActive){e.selectedEntityID=-1;return}if(this.inputManager.primary===de.Down){console.log("doRaycast");const i=e.activeCameraEntityID,l=a.get(i),o=s.get(i);if(!l||!o)return;const c=l.position,d=o.forwards;let h=this.raycaster.cast(c,d,a,n,this.meshManager);if(e.selectedEntityID=h.entityID,console.log("RESULT",e.selectedEntityID),e.selectedEntityID==-1)return}if(this.inputManager.shift===de.Held||this.inputManager.shift===de.Down){const i=a.get(e.selectedEntityID),l=s.get(e.activeCameraEntityID);if(!i||!l)return;const o=this.inputManager.consumeMouse(),c=.005,d=l.forwards,h=Math.abs(d[0]),f=Math.abs(d[1]),A=Math.abs(d[2]);let u=0,v=0,k=0,y=o.x*c,I=-o.y*c;if(A>=h&&A>=f){const w=d[2]>0?-1:1;u=y*w,v=I}else if(h>=f&&h>A){const w=d[0]>0?1:-1;k=y*w,v=I}else{const w=d[1]>0?1:-1;u=y,k=I*w}i.position[0]+=u,i.position[1]+=v,i.position[2]+=k;const x=i.position;console.log(`Pos: X=${x[0].toFixed(3)}, Y=${x[1].toFixed(3)}, Z=${x[2].toFixed(3)}`)}}}class $o{constructor(e){this.inputManager=e}update(e,a,s,n,i){if(!n.isFreeCamActive)for(let[l,o]of e.entries()){let c=a.get(l);if(!c)continue;o.fishing||((this.inputManager.a==de.Down||this.inputManager.a==de.Held)&&(c.position[0]-=o.playerSpeed*i),(this.inputManager.d==de.Down||this.inputManager.d==de.Held)&&(c.position[0]+=o.playerSpeed*i)),this.inputManager.f==de.Down&&(o.fishing=!o.fishing);const d=s.get(l);d&&(o.fishing?d.currentAnimation="fishing":d.currentAnimation="idle")}}}class er{update(e,a,s){for(let[n,i]of e){const l=a.get(n);if(!l)continue;i.timeSinceUpdate+=s;const o=i.animations.get(i.currentAnimation);i.timeSinceUpdate>o[i.currentStep].time&&(i.currentStep=(i.currentStep+1)%o.length,i.timeSinceUpdate=0),l.material.setAnimationData(o[i.currentStep].uv)}}}class Ne{constructor(e=ue(),a=ue(),s=ie(1,1,1)){this.position=e,this.eulers=a,this.scale=s}}class He{constructor(e,a,s,n=!1,i=null,l=0){this.material=e,this.meshVAO=a,this.vertexCount=s,this.indexed=n,this.indexBuffer=i,this.indexCount=l}}class Jt{constructor(e={}){this.right=e.right??ie(1,0,0),this.up=e.up??ie(0,1,0),this.forwards=e.forwards??ie(0,0,-1),this.fov=e.fov??Math.PI/4,this.near=e.near??.1,this.far=e.far??100,this.aspect=e.aspect??16/9}}class wa{constructor(e=10,a=.2){this.speed=e,this.mouseSpeed=a}}class Ia{constructor(e,a,s,n=Go(1,0,0,1),i=20,l=!0){this.vertexCount=0,this.bufferByteSize=0,this.text=e,this.position=a,this.fontAtlasID=s,this.color=n,this.fontSize=i,this.changed=l}}class tr{constructor(e){this.meshStore=new Map,this.device=e}getMesh(e){return this.meshStore.get(e)}createQuad(e="quad"){const a=new Float32Array([-.5,0,-.5,0,1,0,0,1,-.5,0,.5,0,1,0,0,0,.5,0,-.5,0,1,0,1,1,-.5,0,.5,0,1,0,0,0,.5,0,.5,0,1,0,1,0,.5,0,-.5,0,1,0,1,1]),s=a.length/8,n=this.device.createBuffer({size:a.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0,label:e});new Float32Array(n.getMappedRange()).set(a),n.unmap();const i=[{materialName:"PLACEHOLDER",startIndex:0,count:s}];this.meshStore.set(e,{id:e,vertexBuffer:n,vertexCount:s,drawGroups:i,localVertices:a})}createCustom(e,a,s=null){const n=a.length/8,i=this.device.createBuffer({size:a.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.COPY_DST,mappedAtCreation:!0,label:e});new Float32Array(i.getMappedRange()).set(a),i.unmap();let o={id:e,vertexBuffer:i,vertexCount:n,drawGroups:[{materialName:"PLACEHOLDER",startIndex:0,count:n}],localVertices:a};if(s){const c=this.device.createBuffer({size:s.byteLength,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.INDEX|GPUBufferUsage.COPY_SRC,mappedAtCreation:!0,label:`${e} index`});new Uint32Array(c.getMappedRange()).set(s),c.unmap(),o.indexed=!0,o.indexCount=s.length,o.indexBuffer=c}this.meshStore.set(e,o)}getLocalVertices(e){var a;return(a=this.meshStore.get(e))==null?void 0:a.localVertices}}class Je{constructor(e){this.meshID=e}}class Xe{constructor(e=1,a=!1){this.playerSpeed=e,this.fishing=a}}function ar(){let t=new Map,e=Ee(46,17),a=[];a.push({id:0,time:500,uv:Ee(0,0)}),a.push({id:1,time:500,uv:Ee(1/3,0)}),a.push({id:2,time:500,uv:Ee(2/3,0)}),a.push({id:3,time:500,uv:Ee(1/3,0)});let s=[];return s.push({id:0,time:500,uv:Ee(0,.5)}),s.push({id:1,time:500,uv:Ee(1/3,.5)}),s.push({id:2,time:500,uv:Ee(2/3,.5)}),s.push({id:3,time:500,uv:Ee(1/3,.5)}),t.set("idle",a),t.set("fishing",s),[e,t]}class xa{constructor(e,a,s=0){this.animations=e,this.currentStep=s,this.currentAnimation=a,this.timeSinceUpdate=0}}const sr=""+new URL("../assets/playermap.tU0FAbbg.png",import.meta.url).href,nr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAFECAYAAADP44G9AAAAAXNSR0IArs4c6QAAB1xJREFUeJzt3bFuFFcYgNHZ5WKQqNJRRJFS8B55npTJ66TMW1FEQhR0qVDA4J1UkRCKjQ3emWu+czpLa++/M5rV5zuzs4dffv1zXQAAQo57DwAAsDUBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5Yz2ue88AALCpcTgd9p4BAGBTVoAAgBzXAAEAOQIIAMgRQABAjgACAHIEEACQMx4dfAweAGgZV6uPwQMALVaAAIAc1wABADkCCADIGQenwACAmHE8nfaeAQBgU06BAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOSMx+6DCADEjMuTb4MHAFrGxdESEADQ4hogACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA54/HRd4EBAC3jw8l3gQEALVaAAIAc1wABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5IyLVQMBAC3j8nDaewYAgE1ZAQIActQPAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOePx8WrvGQAANjU+nB7tPQMAwKasAAEAOa4BAgByBBAAkCOAAIAcAQQA5IyxrHvPAACwKStAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAznhyPO09AwDApsb7k0UgAKDFChAAkGP5BwDIEUAAQI4AAgByBBAAkCOAAIAcAQQA5Ix1Oew9Q5j+nIfbQczBMTEPx8QcHBPnMmxcWBbHAXzOMcH3bRzXq71nAADYlMQHAHLGctRAAECL+gEAcsZycqU/ANBiBQgAyBFAAEDOuDi6ESIA0DIuT+veMwAAbMoKEACQ4xogACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgZT9arvWcAANjUeH94tPcMAACbsgIEAORYAQIAclwEDQDkOAUGAOQ4BQYA5FgBAgByXAMEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEEAOQIIAAgRwABADkCCADIEUAAQI4AAgByBBAAkCOAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADkCCAAIEcAAQA5AggAyBFAAECOAAIAcgQQAJAjgACAHAEE9+ivN2+WZVmWl69fLS9fv9p5GgCuI4Dgnv0XQcsihABmNfYeAGb2acz8/Pz5F38G4GE4/P7bH+veQ8CMPo2bL/n48fJWj3vx409fOw4A98gpMLjGXVZ0xrj44mPED8A8BBDc4L4iSPwAzGXcZZkfuNl1EeQ4A5iLFSAAIGccnv1wp19YL9/d6nGHi6df9Xv34fPnvsm3znWX59rblvtgWebcNltvgy3MuJ2/1kPfPw9pX9y0rf/vdcy6bx7SNv8Ws27/u5ppf4317d9n+cPrh3/O8ndne+49X+fsbJtt2M7z+F72xUN6HQ9pVubaX3deAQJudu7/1Gb6DwpmM+tKieN2Pq4Bgnt2zjc6b6JwsxmPkRlnwp2g4Sy84cF+HH/chhUgACBnrO/e7j0DAMCmxuHps71nAADYlFNgAECOAAIAcgQQAJAjgACAHAEEAOSMWW8bDgBwLsMdMwGAGqfAAIAcAQQA5AggACBHAAEAOQIIAMgRQABAjgACAHIEEACQI4AAgBwBBADk/Au06aWpRi/gEAAAAABJRU5ErkJggg==",ir="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkAAAAFECAYAAADP44G9AAAAAXNSR0IArs4c6QAAA+dJREFUeJzt3dFtgzAUBVBGySCIKbJEd+gkHaML3v5VaaVWhBiewecMgG4IxvjZhmkCAAAAAAAAAAAAAAAAABheklt1BhiBtgYnpxEDwKCSvFdnAAAAGklyr87AeqqyAAAA9CfJUp0BgGtSEW0gybzDMW+tjwkAPdHX0ZyLCgAAAAAA2MYsA7xIIwIAyiX5qM4AAAAAAAAAANCJK6/tvPJvA+BkdEq05Hq6MH8uAAAAAAAAAAAAAAAwPBssAAA2SvJWnWGaPNABAAAA1FKdAQDYIMlcnQGAAxg1AwAAAJxRkqU6AwAAAAAAAOUsBgYAAAA4wqtVGFUceuKdMsAQdL61nH9gLfcL4BKMtAE4Ow/mPKWXr0QDABwiyWd1BgAAAAAAAADYgQWkAAAAAADflEwBxqYfeI7zBQAAAAAAAMBRzFEDAAAAALDOiB9cTnKvzgAAAHWSLNUZAAAAgF/22AhicwkAAAAAAAAAAADAiVkMCgAA8MAgCQAAAPhJtQAAAAAAAAAAAAAAAAAA6JitkAAAwBAMfuB6tGsAgD8kmaszAAAAAAAAAAAAAAAAAMCDJEt1BgAAAICxeYsjAAAAMARFEAAAAAAA4B+mEgCgEZ0qQEfclAEAAAAAAADokOlsAAAAAAAAAAAAAAAAAAAAAABoy7t9AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDtvgARc8fTmAIPUwAAAABJRU5ErkJggg==",or=""+new URL("../assets/3.CntZNeDc.png",import.meta.url).href,rr=""+new URL("../assets/4.T3tb0TQK.png",import.meta.url).href,ka=`
// WGSL Shader Code
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    numSpritesX: f32,
    numSpritesY: f32,
    PADDING1: f32,
    uvOffset: vec2f,
    PADDING2: f32,
    PADDING3: f32,
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING: f32,
    PADDING1: f32,
    PADDING2: f32,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;


struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) lighting_intensity: f32,
};

@vertex
fn vs_main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;
    // inverse v 
    output.uv = vec2f(input.uv.x / materialUniforms.numSpritesX, ((1 - input.uv.y) / materialUniforms.numSpritesY));

    return output;
}

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, materialUniforms.uvOffset + input.uv);
    return texcolor;
}
`,lr=`
// WGSL Shader Code
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    numSpritesX: f32,
    numSpritesY: f32,
    PADDING1: f32,
    uvOffset: vec2f,
    PADDING2: f32,
    PADDING3: f32,
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    boatX: f32,
    boatY: f32,
    boatZ: f32,
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;



struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) lighting_intensity: f32,
};


@vertex
fn vs_main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    // ####### waves #########
    var px = uniforms.boatX;
    var pz = uniforms.boatZ;
    let worldPos = (modelMatrix * input.position).xyz;
    let baseNormal = input.normal.xyz;

    let boatWorld = (modelMatrix * vec4(uniforms.boatX, uniforms.boatY, uniforms.boatZ, 1.0)).xyz;

    // px = boatWorld.x;
    // pz = boatWorld.z;

    // ####### wave 1 #########
    let amplitude1 = 0.3f;
    let f1 = 0.5f;
    let speed1 = -1.0f ;

    let time_term1 = f1 * (px - speed1 * uniforms.time);
    var offset_y1 = amplitude1 * sin(time_term1);

    // ####### wave 2 #########
    let amplitude2 = 0.1f;
    let f2 = 1f;
    let speed2 = 0.3f ;

    let time_term2 = (f2 * (pz - speed2 * uniforms.time));
    let offset_y2 = amplitude2 * (sin(time_term2));

    // ####### wave 3 #########
    let amplitude3 = 0.1f;
    let f3 = 2f;
    let speed3 = -0.5f ;

    let time_term3 = f3 * (pz + px - speed3 * uniforms.time);
    let offset_y3 = amplitude3 * (sin(time_term3));

    // ### combine waves ###
    var total_offset_y = offset_y1 + offset_y2 + offset_y3;
    //total_offset_y = offset_y3;


    let slopeX = (amplitude1 * f1 * cos(time_term1));

    // ######### pitch ###########


    var rotation = atan(slopeX * -0.5);

    let rotationY = mat4x4<f32>(
        vec4f(cos(rotation), 0.0, sin(rotation), 0.0),
        vec4f(0.0, 1.0, 0.0, 0.0),
        vec4f(-sin(rotation), 0.0, cos(rotation), 0.0),
        vec4f(0.0, 0.0, 0.0, 1.0)
    );


    var rotatedLocalPos = (rotationY * input.position).xyz;
    let finalWorldPos = (modelMatrix * vec4f(rotatedLocalPos, 1.0)).xyz;
    let animatedWorldPos = finalWorldPos + vec3f(0.0, total_offset_y, 0.0);


    // ### combine waves ###
    output.position = uniforms.viewProjectionMatrix * vec4(animatedWorldPos, 1.0);
    output.uv = vec2f(input.uv.x / materialUniforms.numSpritesX, ((1 - input.uv.y) / materialUniforms.numSpritesY));

    return output;
} 




     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, materialUniforms.uvOffset + input.uv);
    return texcolor;
}
`,cr=`
// WGSL Shader Code
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;

struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) lighting_intensity: f32,
};

@vertex
fn vs_main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;

    let scroll = (uniforms.time / 30) * materialUniforms.parallaxFactor + (uniforms.cameraPosition.x / 10 * materialUniforms.parallaxFactor);
    output.uv = vec2f(input.uv.x + scroll, 1 - input.uv.y);

    return output;
}

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {
    var texcolor = textureSample(textureData, textureSampler, input.uv);
    return texcolor;
}
`,dr=`
// WGSL Shader Code
struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;
        
struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(1) lighting_intensity: f32,
};

@vertex
fn vs_main(input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    let lightDirection: vec3f = normalize(vec3f(0.5, -0.5, -1.0));
    output.position = uniforms.viewProjectionMatrix * modelMatrix * input.position;
    // inverse v 
    output.uv = vec2f(input.uv.x, 1 - input.uv.y);
    let worldNormal = normalize((modelMatrix * input.normal).xyz);
    let L: vec3f = -lightDirection;
    let diffuseIntensity = max(dot(worldNormal, L), 0.5);

    output.lighting_intensity = diffuseIntensity;

    return output;
} 

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {

    // return vec4f(materialUniforms.kdColor, 1.0);
    let mat = materialUniforms.kdColor;

    return vec4f(mat.xyz, 1.0);
}
`,hr=`// WGSL Shader Code

struct MaterialConstants {
    kdColor: vec4f,
    ksColor: vec4f,
    kaColor: vec4f,
    nsValue: f32,
    dValue: f32,
    illumModel: f32,
    scrollSpeed: f32,
    parallaxFactor: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

struct Uniforms {
    viewProjectionMatrix: mat4x4<f32>,
    cameraPosition: vec4f,
    time: f32,
    PADDING1: f32,
    PADDING2: f32,
    PADDING3: f32
};

@group(0) @binding(0) var<uniform> uniforms : Uniforms;
@group(1) @binding(0) var<uniform> materialUniforms : MaterialConstants; 
@group(2) @binding(0) var textureData: texture_2d<f32>; 
@group(2) @binding(1) var textureSampler: sampler;
        
struct VertexInput {
    @location(0) position: vec4f,
    @location(1) normal: vec4f,
    @location(2) uv: vec2f,
    @location(4) modelMatrix_0: vec4f,
    @location(5) modelMatrix_1: vec4f,
    @location(6) modelMatrix_2: vec4f,
    @location(7) modelMatrix_3: vec4f,
};

struct VertexOutput {
    @builtin(position) position: vec4f,
    @location(0) uv: vec2f,
    @location(2) worldPos: vec3f,
    @location(3) @interpolate(flat) worldNormal: vec3f,
    @location(4) @interpolate(flat) yposFlat: f32,
    @location(5)  ypos: f32,
};

@vertex
fn vs_main(@builtin(vertex_index) vertex_idx: u32, input: VertexInput) -> VertexOutput {
    var output: VertexOutput;
    let modelMatrix = mat4x4<f32>(
        input.modelMatrix_0,
        input.modelMatrix_1,
        input.modelMatrix_2,
        input.modelMatrix_3
    );

    // ####### waves #########
    var px = input.position.x;
    var pz = input.position.z;
    let worldPos = (modelMatrix * input.position).xyz;
    let baseNormal = input.normal.xyz;

    //
    px = worldPos.x;
    pz = worldPos.z;

    // ####### wave 1 #########
    let amplitude1 = 0.3f;
    let f1 = 0.5f;
    let speed1 = -1.0f ;

    let time_term1 = f1 * (px - speed1 * uniforms.time);
    var offset_y1 = amplitude1 * sin(time_term1);

    // ####### wave 2 #########
    let amplitude2 = 0.1f;
    let f2 = 1f;
    let speed2 = 0.3f ;

    let time_term2 = (f2 * (pz - speed2 * uniforms.time));
    let offset_y2 = amplitude2 * (sin(time_term2));

    // ####### wave 3 #########
    let amplitude3 = 0.1f;
    let f3 = 2f;
    let speed3 = -0.5f ;

    let time_term3 = f3 * (pz + px - speed3 * uniforms.time);
    let offset_y3 = amplitude3 * (sin(time_term3));

    // ### combine waves ###
    var total_offset_y = offset_y1 + offset_y2 + offset_y3;
    //total_offset_y = offset_y3;

    let animatedWorldPos = worldPos + vec3f(0, total_offset_y, 0);


    let worldNormal = normalize((modelMatrix * vec4f(1, 0, 1, 0)).xyz);

    output.position = uniforms.viewProjectionMatrix * vec4(animatedWorldPos, 1.0);
    output.worldPos = animatedWorldPos;
    output.worldNormal = worldNormal;
    output.uv = vec2f(input.uv.x, 1.0 - input.uv.y);
    output.ypos = total_offset_y;
    output.yposFlat = total_offset_y;

    return output;
} 

     @fragment
fn fs_main(input: VertexOutput) -> @location(0) vec4f {

    let N: vec3f = normalize(input.worldNormal);
    let L: vec3f = normalize(-vec3f(0.5, input.yposFlat, 0.5));
    var diffuseIntensity = max(dot(N, L), 0.0) ;
    var ambient: f32 = 0.8;

    var totalIntensity = ambient + diffuseIntensity * 0.2;
    totalIntensity = ambient;

    if (input.yposFlat) < 0 {
        totalIntensity = ambient;
        totalIntensity = (totalIntensity) + (totalIntensity * input.yposFlat * 0.5);
    }

    if (input.yposFlat) > 0 {
        totalIntensity = ambient;
        totalIntensity = (totalIntensity) + (totalIntensity * input.yposFlat);
    }

    if (input.yposFlat) > 0.25 {
        totalIntensity = ambient * 1.2;
        totalIntensity = (totalIntensity) + (totalIntensity * input.ypos);
    }


    var finalColor = materialUniforms.kdColor * totalIntensity ;
    //finalColor = vec4(input.worldNormal.xyz, 1.0);

    return vec4f(finalColor.xyz, 1.0);
}
`;class Ar{constructor(e){this.GLOBAL_UNIFORM_ARRAY_SIZE=24,this.GLOBAL_UNIFORM_BUFFER_SIZE=16*4+3*4+1*4+4*4,this.waterColor=ie(.325,.396,.584),this.lastTime=0,this.run=a=>{let s=a/1e3;const n=s-this.lastTime;this.lastTime=s;const i=this.entityManager.getComponents(Ne),l=this.entityManager.getComponents(He),o=this.entityManager.getComponents(Jt),c=this.entityManager.getComponents(wa),d=this.entityManager.getComponents(Ia),h=this.entityManager.getComponents(Je),f=this.entityManager.getComponents(Xe),A=this.entityManager.getComponents(xa),u=i.get(this.camera),v=i.get(this.player);this.positionManipulationSystem.update(this.gameState,i,o,h),this.toggleFreeCamSystem.update(this.debugCam,this.camera,this.gameState),this.freeCamSystem.update(c,o,i,this.gameState,n),this.cameraSystem.update(o,i),this.playerSystem.update(f,i,A,this.gameState,n),this.spriteSystem.update(A,l,n*1e3);const k=o.get(this.gameState.activeCameraEntityID),y=i.get(this.gameState.activeCameraEntityID),I=d.get(this.textTL);I.text="x/z/y="+Math.round(y.position[0]*10)/10+" "+Math.round(y.position[1]*10)/10+" "+Math.round(y.position[2]*10)/10,I.changed=!0,this.textMeshGeneratorSystem.update(d),this.projectionMatrix=Qe(),go(this.projectionMatrix,k.fov,k.aspect,k.near,k.far);const x=ue();Io(x,y.position,k.forwards),this.viewMatrix=Qe(),yo(this.viewMatrix,y.position,x,ie(0,1,0));const w=Qe();mo(w,this.projectionMatrix,this.viewMatrix);const b=new Float32Array(this.GLOBAL_UNIFORM_ARRAY_SIZE);b.set(w,0),b[16]=u.position[0],b[17]=u.position[1],b[18]=u.position[2],b[19]=0,b[20]=s,b[21]=v.position[0],b[22]=v.position[1],b[23]=v.position[2],console.log(`Player: ${v.position[0]} ${v.position[1]} ${v.position[2]} `),this.device.queue.writeBuffer(this.globalUniformBuffer,0,b);const{buffer:G,opaqueBatches:R,transparentBatches:F}=this.matrixUpdateSystem.update(i,l,y.position);this.renderSystem.update(G,R,F,d),this.inputManager.updateInputs(),requestAnimationFrame(this.run)},this.canvas=e,this.entityManager=new Do,this.inputManager=new Bo(this.canvas),this.gameState=new Ro,this.canvas.onclick=()=>{this.canvas.requestPointerLock()}}async startApp(){await this.initialize()&&requestAnimationFrame(this.run)}async initialize(){return await this.setupDevice(),await this.makeBindGroupLayouts(),await this.createAssets(),await this.makeBindGroups(),await this.initECS(),!0}async setupDevice(){if(!navigator.gpu){console.error("WebGPU ist not Supported!");return}const e=await navigator.gpu.requestAdapter();this.device=await(e==null?void 0:e.requestDevice()),this.context=this.canvas.getContext("webgpu"),this.format=navigator.gpu.getPreferredCanvasFormat(),this.context.configure({device:this.device,format:this.format,alphaMode:"opaque"})}async makeBindGroupLayouts(){this.frameGroupLayout=this.device.createBindGroupLayout({entries:[{binding:0,visibility:GPUShaderStage.VERTEX|GPUShaderStage.FRAGMENT,buffer:{type:"uniform"}}],label:"FrameGroupLayout"})}async createAssets(){this.meshManager=new tr(this.device),this.meshManager.createQuad(),this.subdivider=new To(this.device);let e=new Float32Array([-.5,0,-.5,0,1,0,0,1,-.5,0,.5,0,1,0,0,0,.5,0,.5,0,1,0,1,0,.5,0,-.5,0,1,0,1,1]),[a,s]=await this.subdivider.subdivide(e);this.meshManager.createCustom("quadtes",a,s),this.materialManager=new Po(this.device,this.frameGroupLayout),await this.materialManager.createPipeline({shaderID:"textured",shaderCode:ka,useTexture:!0}),await this.materialManager.createPipeline({shaderID:"texturedAlpha",shaderCode:ka,doAlpha:!0,useTexture:!0}),await this.materialManager.createPipeline({shaderID:"player",shaderCode:lr,doAlpha:!0,useTexture:!0}),await this.materialManager.createPipeline({shaderID:"untextured",shaderCode:dr}),await this.materialManager.createPipeline({shaderID:"scrollingTexture",shaderCode:cr,doAlpha:!0,useTexture:!0}),await this.materialManager.createPipeline({shaderID:"waterSurface",shaderCode:hr,topology:"triangle-list"}),await this.materialManager.createMaterial("uiText",{name:"uiText",kd:ie(1,1,1)},"untextured"),await this.materialManager.createMaterial("solid_red",{name:"solid_red",kd:ie(1,0,0)},"untextured"),await this.materialManager.createMaterial("floor",{name:"floor",kd:this.waterColor},"waterSurface"),await this.materialManager.createMaterial("player",{name:"player",kd:ue(),map_kd:sr,spriteSheetDimension:Ee(3,2)},"player"),await this.materialManager.createMaterial("bg_water",{name:"bg_water",kd:ue(),map_kd:nr,scrollSpeed:10,parallaxFactor:.1},"scrollingTexture"),await this.materialManager.createMaterial("bg_stars",{name:"bg_stars",kd:ue(),map_kd:ir,scrollSpeed:10,parallaxFactor:.01},"scrollingTexture"),await this.materialManager.createMaterial("bg_clouds_1",{name:"bg_clouds_1",kd:ue(),map_kd:or,scrollSpeed:10,parallaxFactor:.1},"scrollingTexture"),await this.materialManager.createMaterial("bg_clouds_2",{name:"bg_clouds_2",kd:ue(),map_kd:rr,scrollSpeed:10,parallaxFactor:.15},"scrollingTexture"),this.globalUniformBuffer=this.device.createBuffer({size:this.GLOBAL_UNIFORM_BUFFER_SIZE,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST,label:"Global Uniform Buffer"})}async makeBindGroups(){this.globalBindGroup=this.device.createBindGroup({layout:this.frameGroupLayout,entries:[{binding:0,resource:{buffer:this.globalUniformBuffer}}],label:"GlobalUniforms"})}async initECS(){this.matrixUpdateSystem=new Uo(this.device),this.renderSystem=new Qo(this.device,this.globalBindGroup,this.context),await this.renderSystem.init(),this.freeCamSystem=new Co(this.inputManager),this.toggleFreeCamSystem=new Xo(this.inputManager),this.positionManipulationSystem=new Ko(this.inputManager,this.meshManager),this.cameraSystem=new Fo,this.playerSystem=new $o(this.inputManager),this.spriteSystem=new er,this.textMeshGeneratorSystem=new Jo(this.device),await this.createEntities()}async createEntities(){const e=this.canvas.width/this.canvas.height;this.camera=this.entityManager.createEntity(),this.entityManager.addComponent(this.camera,new Jt({aspect:e})),this.entityManager.addComponent(this.camera,new Ne(ie(0,1,0))),this.entityManager.addComponent(this.camera,new Xe(5)),this.gameState.activeCameraEntityID=this.camera,this.debugCam=this.entityManager.createEntity(),this.entityManager.addComponent(this.debugCam,new Jt({aspect:e})),this.entityManager.addComponent(this.debugCam,new Ne(ie(0,1,0))),this.entityManager.addComponent(this.debugCam,new wa(5));const a=-3;let s=this.entityManager.createEntity(),n=this.meshManager.getMesh("quadtes");this.entityManager.addComponent(s,new Ne(ie(0,a,-8),ie(0,0,0),ie(50,1,50))),this.entityManager.addComponent(s,new Je(n.id)),this.entityManager.addComponent(s,new He(this.materialManager.getMaterial("floor"),n.vertexBuffer,n.vertexCount,!0,n.indexBuffer,n.indexCount)),this.player=this.entityManager.createEntity();let i=this.meshManager.getMesh("quad"),l=this.materialManager.getMaterial("player"),o=ar();this.entityManager.addComponent(this.player,new Xe(5)),this.entityManager.addComponent(this.player,new Ne(ie(0,a+.5,-15),ie(90,0,0),ie(o[0][0]/o[0][1],1,1))),this.entityManager.addComponent(this.player,new Je(i.id)),this.entityManager.addComponent(this.player,new He(l,i.vertexBuffer,i.vertexCount)),this.entityManager.addComponent(this.player,new xa(o[1],"idle"));let c=this.materialManager.getMaterial("bg_water"),d=this.materialManager.getMaterial("bg_clouds_1"),h=this.materialManager.getMaterial("bg_clouds_2"),f=this.materialManager.getMaterial("bg_stars"),A=ie(c.texture.width/c.texture.height,1,1);ko(A,A,18);const u=[0,5];let v=this.meshManager.getMesh("quad"),k=this.entityManager.createEntity(),y=this.entityManager.createEntity(),I=this.entityManager.createEntity(),x=this.entityManager.createEntity();this.entityManager.addComponent(k,new Ne(ie(...u,-20),ie(90,0,0),A)),this.entityManager.addComponent(k,new Je(v.id)),this.entityManager.addComponent(k,new He(c,v.vertexBuffer,v.vertexCount)),this.entityManager.addComponent(x,new Ne(ie(...u,-19.9),ie(90,0,0),A)),this.entityManager.addComponent(x,new Je(v.id)),this.entityManager.addComponent(x,new He(f,v.vertexBuffer,v.vertexCount)),this.entityManager.addComponent(y,new Ne(ie(...u,-19.8),ie(90,0,0),A)),this.entityManager.addComponent(y,new Je(v.id)),this.entityManager.addComponent(y,new He(d,v.vertexBuffer,v.vertexCount)),this.entityManager.addComponent(I,new Ne(ie(...u,-19.7),ie(90,0,0),A)),this.entityManager.addComponent(I,new Je(v.id)),this.entityManager.addComponent(I,new He(h,v.vertexBuffer,v.vertexCount)),this.entityManager.addComponent(k,new Xe(5)),this.entityManager.addComponent(x,new Xe(5)),this.entityManager.addComponent(y,new Xe(5)),this.entityManager.addComponent(I,new Xe(5)),this.textTL=this.entityManager.createEntity(),this.entityManager.addComponent(this.textTL,new Ia("Hello World",Ee(0,0),"myatas"))}}const ur=""+new URL("../assets/banner.m8n6tcpk.png",import.meta.url).href,pr=""+new URL("../assets/example.DMeuDq7C.gif",import.meta.url).href,mr=""+new URL("../assets/extreme_detail_water.sa962jil.png",import.meta.url).href,fr=""+new URL("../assets/high_detail_water.KLaHM8Mb.png",import.meta.url).href,gr=""+new URL("../assets/low_detail_water.DqIP8cW3.png",import.meta.url).href,vr=""+new URL("../assets/gpu-workgroup-dispatch (Custom).BUjvwpbK.png",import.meta.url).href,br=""+new URL("../assets/gpu-workgroup.2PNHuzOp.png",import.meta.url).href,yr=""+new URL("../assets/renderpipeline.2WC3h3Wn.png",import.meta.url).href;var wr=()=>{var t;(t=document.getElementById("playableDemo"))==null||t.scrollIntoView()},Ir=Y('<h2 class="text-center svelte-1gvkhyt">WebGPU is not available or enabled in your browser, no demo today :(</h2>'),xr=Y(`<h2 class="svelte-1gvkhyt">Playable Demo</h2> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><b>Note:</b> The water plane is just placed in the world and not
          moved, thats why its possible to swim off the edge. This problem could
          be fixed by just moving the water with the boat and using an x-offset
          while calculating the waves y-offset in the fragment shader. <br/> This would result in the water being "stuck" to the boat, always being
          in the viewing frustum thus apearing to be endless.</p></blockquote> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><b>Also Note:</b> You have to click into the canvas to control the boat.
          The canvas will request a pointerlock to ensure you can move normally in
          freecam. To get you cursor back just press escape.</p></blockquote> <canvas id="gfx-main" tabindex="0" width="1920" height="1080" style="aspect-ratio: 16/9; width: 100%;"></canvas>`,1),kr=Y(`<main class="flex justify-center w-full"><div class="p-8 space-y-10 w-full"><div class="space-y-10"><img/> <h1 class="text-4xl font-bold text-center mb-8 svelte-1gvkhyt">WebGPU</h1> <div style="text-align: center; display: block; margin-left: auto; margin-right: auto; width: 100%;"><p class="svelte-1gvkhyt">If you are only here for the playable demo, jump right to it by
          clicking this button:</p> <button class="h-20 w-60 element3d button3d">Jump to Demo!</button></div> <p class="svelte-1gvkhyt">In this project I take a look at WebGPU, a modern GPU API for the
        browser. The first chapters introduce you to the world of GPUs and GPU
        computing, which can be quite complex and confusing when first learning
        about this topic. After that, I take a look at the WebGPU architecture,
        the API structure and compare WebGPU briefly to its predecessor, WebGL.
        With a short introduction to WGLS, WebGPU&#39;s custom shading language,
        the code-heavy parts begin. First I show the classic beginner program
        every graphics programmer starts with, Hello Triangle. Then, because
        simple tutorials like <em>Hello Triangle</em> do not convey how a technology
        is actually used or how real problems are solved with a technology, I also
        describe the small* demo I&#39;ve created. In the demo you are a boat, and
        you can swim to the left and right and also throw out your fishing rod.</p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">* As you will see, small is a relative term. The feature set of the
          demo is small but its codebase is not.</p></blockquote> <p class="svelte-1gvkhyt"><img class="img-in-text svelte-1gvkhyt" alt="demo"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Footage of the demo project created in order to take a look at WebGPU</p></blockquote> <h2 id="content" class="svelte-1gvkhyt">Content</h2> <ul class="svelte-1gvkhyt"><li class="svelte-1gvkhyt"><a href="#how-does-a-gpu-work" class="svelte-1gvkhyt">How does a GPU work</a></li> <li class="svelte-1gvkhyt"><a href="#pipelines" class="svelte-1gvkhyt">Pipelines</a> <ul class="pb-1 svelte-1gvkhyt"><li class="svelte-1gvkhyt"><a href="#graphics-pipeline" class="svelte-1gvkhyt">Graphics Pipeline</a></li> <li class="svelte-1gvkhyt"><a href="#compute-pipeline" class="svelte-1gvkhyt">Compute Pipeline</a></li> <li class="svelte-1gvkhyt"><a href="#workgroups" class="svelte-1gvkhyt">Workgroups</a></li></ul></li> <li class="svelte-1gvkhyt"><a href="#webgpu-architecture" class="svelte-1gvkhyt">WebGPU Architecture</a> <ul class="pb-1 svelte-1gvkhyt"><li class="svelte-1gvkhyt"><a href="#example-rendering" class="svelte-1gvkhyt">Example Rendering</a></li></ul></li> <li class="svelte-1gvkhyt"><a href="#webgpu-as-successor-to-webgl" class="svelte-1gvkhyt">WebGPU as successor to WebGL</a></li> <li class="svelte-1gvkhyt"><a href="#webgpu-shading-language" class="svelte-1gvkhyt">WebGPU Shading Language</a></li> <li class="svelte-1gvkhyt"><a href="#hello-triangle" class="svelte-1gvkhyt">Hello Triangle</a></li> <li class="svelte-1gvkhyt"><a href="#webgpu-for-developing-games" class="svelte-1gvkhyt">WebGPU for developing games</a> <ul class="pb-1 svelte-1gvkhyt"><li class="svelte-1gvkhyt"><a href="#ecs---entity-component-system" class="svelte-1gvkhyt">ECS - Entity Component System</a></li> <li class="svelte-1gvkhyt"><a href="#subdivision-with-compute-shaders" class="svelte-1gvkhyt">Subdivision with Compute Shaders</a></li></ul></li> <li class="svelte-1gvkhyt"><a href="#where-to-use-webgpu" class="svelte-1gvkhyt">Where to use WebGPU</a></li> <li class="svelte-1gvkhyt"><a href="#final-words" class="svelte-1gvkhyt">Final words</a></li> <li class="svelte-1gvkhyt"><a href="#playableDemo" class="svelte-1gvkhyt">Demo</a></li></ul> <h2 id="how-does-a-gpu-work" class="svelte-1gvkhyt">How does a GPU work</h2> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note:</strong> In this document the terms &#39;GPU&#39; and &#39;Graphics
          card&#39; are used interchangeably, even if the GPU technically only describes
          the chip soldered to the Graphics card, which also contains Memory, a Heat
          sink, fans etc.</p></blockquote> <p class="svelte-1gvkhyt">To understand WebGPU, its goals, and its design decisions, we first need
        to understand the difference between a CPU and a GPU. The CPU (or
        Central Processing Unit) is often compared to the brain of a human. The
        CPU can calculate a variety of different things and can handle data in
        many different forms. It can run arbitrary code with incredible speeds.
        Modern CPUs like the AMD Ryzen 9 7900X have clock speeds of more than 5
        GHz on 12 CPU cores. As a stark contrast, a modern top-of-the-line GPU
        (or Graphics Processing Unit) like the Nvidia RTX 5090 has a clock speed
        of around 2 GHz but contains around 21.760 cores to process data. But
        there is a catch. While the CPU cores are very versatile and can work
        independently, the GPU cores can (most of the time) only do special
        calculations and need to run in groups with the same code. But because
        GPUs are originally designed to do graphics programming tasks, this is
        not a drawback. In graphics programming you often need to do simple
        operations very often. Consider coloring in a Full-HD image. For that
        you need to determine the color of each pixel and write it into a
        buffer, which is then displayed. With that, you would already have about
        2 million operations just to write the correct color into the color
        buffer. Doing this sequentially can take a long time (in compute terms).
        Doing this parallel with multiple threads / cores can lead to problems
        because threads need to acquire locks to safely interact with each
        other.</p> <p class="svelte-1gvkhyt">To tackle this issue, every GPU uses a simple trick: Just don&#39;t use
        locks but use context and trust the developer to write code that does
        not interfere across threads / cores.</p> <p class="svelte-1gvkhyt">All those 2 million operations to calculate a color and write to the
        same buffer are independent from each other, even if they are using the
        same resources. We know that the color buffer has a place for each
        pixel, so we can just trust the program executed on the GPU that it will
        only write its pixel information to its designated location in the
        buffer and execute the calculations of each pixel in parallel.</p> <p class="svelte-1gvkhyt">The key takeaways are that the GPU has way more, but much simpler, cores
        than a CPU. The GPU can also do many things in parallel without thinking
        about locks or semaphores because the GPU&#39;s architecture allows its
        different cores to access the same resources in parallel. But how
        exactly are GPU calculations being performed? How can a programmer
        define what a GPU should do and on what data? For that, we have to take
        a look at the architecture of GPU APIs, which communicate with the
        hardware to allow calculations to be run on the GPU.</p> <h2 id="pipelines" class="svelte-1gvkhyt">Pipelines</h2> <p class="svelte-1gvkhyt">To do calculations on a CPU, you just &quot;throw&quot; operations and
        data at the CPU, and it does its magic and returns you the result. The
        GPU, on the other hand, first needs to be configured so it knows exactly
        what kind of data comes in and what to do with this data. But once the
        GPU is configured, it can handle massive amounts of data. This
        data-driven compute model is called a pipeline. If you have defined a
        pipeline, you can just push data in on one end and get the expected
        result on the other end at an incredible rate. To illustrate the
        data-driven / throughput-driven architecture of a GPU, consider the
        following:</p> <p class="svelte-1gvkhyt">A modern CPU has memory access speeds in the tenths of gigabytes per
        second. Using DDR5-5600 RAM you can, for example, expect transfer rates
        of about 70 GB/s. A modern GPU, on the other hand, has transfer speeds
        measured in terabytes per second. The NVIDIA RTX 5090 can read up to 1.8
        TB/s from its internal GDDR7 VRAM.</p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note</strong>: This example compares system memory with
          graphics memory and does not consider caches in any way or form. This
          is because caches do not effect the maximum transfer rates of memory.</p></blockquote> <p class="svelte-1gvkhyt">There are two types of pipelines within WebGPU which will be looked at.</p> <h3 id="graphics-pipeline" class="svelte-1gvkhyt">Graphics Pipeline</h3> <p class="svelte-1gvkhyt">The main task of a GPU is the transformation of a 3D scene into a 2D
        image to be shown on a screen. We will take a look at the traditional
        rasterization pipeline, which is still used in most of the 3D
        applications running in real-time today. We will not look into
        Ray-/Pathtracing. To convert a 3D scene into a 2D image, data needs to
        be transformed in many different ways. For that there is the graphics
        pipeline, which describes exactly what and when which calculations are
        performed on the data. In the case of the graphics pipeline, you enter
        data like 3D models, textures, materials, lighting information, viewport
        size, etc., and the result is a 2D image.</p> <p class="svelte-1gvkhyt">The graphics pipeline consists of different stages but can be
        categorized into three different parts. The following image shows the
        different grouped stages of the render pipeline.</p> <p class="svelte-1gvkhyt"><img class="block w-[100%] object-contain" alt="renderpipeline"/></p> <h4 id="application-" class="svelte-1gvkhyt">Application:</h4> <p class="svelte-1gvkhyt">This stage prepares data to be send to the GPU. In games this step
        includes tasks like collision detection, physics simulation etc.
        It&#39;s executed fully on the CPU, which is why it will not be examined
        here and is marked with dashed lines in the image above.</p> <h4 id="geometry-" class="svelte-1gvkhyt">Geometry:</h4> <p class="svelte-1gvkhyt">The geometry step is responsible for calculations regarding polygons and
        vertices. The first sub-step is the <strong>Vertex Shader</strong>, a
        GPU program defined by the developer to do various different tasks. It
        takes vertices as input, often consisting of 3D position, normal data,
        and texture coordinates. The vertex shader transforms the vertex data to
        move objects from model space to world space. It’s essentially the act
        of “placing” a 3D object into a scene with multiple objects relative to
        a world origin. After that, each vertex in the “world” is transformed
        based on the camera. That means that if you are looking around in a
        video game, it’s not you that is rotating and moving, but rather the
        whole universe around you (the camera), and you are perfectly still.</p> <p class="svelte-1gvkhyt">The output of the vertex shader are still only vertices. The next
        substage, the <strong>Primitive Assembly</strong>, then creates
        primitives such as triangles and lines.</p> <p class="svelte-1gvkhyt">Those are fed into <strong>Geometry / Tesselation</strong> Shaders. These
        special shaders can create new geometry by, for example, subdividing big
        triangles into smaller triangles. Because the Geometry / Tessellation shader
        comes after the vertex shader, creating new vertices in those steps doesn’t
        come with a hefty performance penalty. WebGPU does not support Geometry nor
        Tessellation shaders. That’s why I won’t dive any deeper, even if they are
        very interesting.</p> <p class="svelte-1gvkhyt">A very nice example of what tessellation can look like and how powerful
        it can be can be found <a href="https://www.youtube.com/watch?v=p_VpAMaxwpY" class="svelte-1gvkhyt">here</a>. While <strong>Geometry</strong> / <strong>Tesselation</strong> steps are
        optional, the last two steps of the Geometry Stage are not.</p> <p class="svelte-1gvkhyt">The <strong>Clipping</strong> stage removes all primitives outside the
        camera frustum, so “you don’t get what you don’t see.” And the last
        geometry stage, the <strong>Viewport Transformation</strong>, prepares
        the geometry data for the Rasterization by projecting the vertices onto
        the viewport plane.</p> <h4 id="rasterization-" class="svelte-1gvkhyt">Rasterization:</h4> <p class="svelte-1gvkhyt">The rasterization stage uses the data from the Geometry stage to compute
        the color values of each pixel in the final image. The first substage,
        the <strong>Rasterizer</strong>, takes the projected vertex data and
        generates fragments (often equal to pixels). Each fragment is assigned
        different interpolated values, calculated from the three vertices from
        the original corresponding triangle. Those interpolated values represent
        the input to the next substage, the Fragment Shader.</p> <p class="svelte-1gvkhyt">The <strong>Fragment Shader</strong> determines the color of the fragments,
        which again are typically 1:1 mappings to pixels. Within the Fragment Shader
        the developer can, for example, read from texture data or calculate lighting
        information to determine what color a pixel should be.</p> <p class="svelte-1gvkhyt">That’s it! As you can see, a lot of heavy lifting has to happen to be
        able to render a 3D scene into a 2D image.</p> <h3 id="compute-pipeline" class="svelte-1gvkhyt">Compute Pipeline</h3> <p class="svelte-1gvkhyt">Besides rendering images, modern GPUs are often used for AI related
        tasks. The reason is that rendering and AI tasks share fundamentals:
        float matrix calculations. While rendering needs those to, for example,
        transform and translate the position of objects in 3D space or do
        projections to reduce the dimension of data, in AI tasks, matrix
        operations are used for linear transformations used in nearly every
        modern AI model today. For calculations not related to graphics
        programming, a whole different, much simpler pipeline is used, the
        Compute Pipeline.</p> <p class="svelte-1gvkhyt">The Compute Pipeline is so simple that it only consists of one part, a
        GPU program called Compute Shader. A Compute Shader takes an arbitrary
        input and returns an arbitrary output. For example, it&#39;s easily
        possible to create a Compute Shader that takes an array of floats and
        returns an array where each float is doubled. More on compute shaders
        later.</p> <p class="svelte-1gvkhyt">Those differences between the CPU and GPU and how the different
        pipelines are structured are fundamental to understanding WebGPU. In
        later sections we will take a look at how WebGPU makes use of those
        pipelines and what to expect when trying to develop software using
        WebGPU.</p> <h3 id="workgroups" class="svelte-1gvkhyt">Workgroups</h3> <p class="svelte-1gvkhyt">Because of the special GPU architecture, thread execution on the GPU is
        a little different from thread execution on the CPU. While CPU threads
        can be dispatched in any quantity, GPU threads work within so called
        workgroups.</p> <p class="svelte-1gvkhyt">A workgroup is a 3D collection of threads that are run together and
        often share memory. The defined workgroup size within a Compute Shader
        is static and can&#39;t be changed on the fly, only when creating a new
        Compute Pipeline. A workgroup defined with size <code>(3, 4, 2)</code> can
        be imagined as a cuboid with sides as long as the dimensions:</p> <p class="svelte-1gvkhyt"><img alt="workgroup"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Image from <a href="https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html" class="svelte-1gvkhyt">https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html</a></p></blockquote> <p class="svelte-1gvkhyt">The perfect size for a workgroup depends on the underlying GPU. As an
        abstraction layer, WebGPU cannot infer the perfect workgroup size. But
        modern GPUs are often constructed in a way that 64 threads are running
        in lockstep, which means that 64 threads are running exactly the same
        code at exactly the same time but only on different data. This can
        vaguely be compared with SIMD instructions. As with many things in
        graphics programming, the workgroup size can&#39;t just be set but has
        to be tested and chosen individually for each hardware configuration.
        The size of 64 is a good starting point and should yield the best
        results in most of the cases.</p> <p class="svelte-1gvkhyt">But the workgroup size is not the only variable to tweak to be able to
        dispatch a massive amount of parallel running threads. In fact, the
        workgroup size defines the lower bound on how many threads have to at
        least run to fulfill a task. When dispatching a Compute Shader to the
        GPU, you also have to specify an amount of workgroups to dispatch. You
        could, for example, call <code>dispatchWorkgroups(4,3,2)</code> to dispatch
        4*3*2 = 24 workgroups, also defining a cuboid shape, which would result in
        24 * 24 = 576 threads.</p> <p class="svelte-1gvkhyt"><img alt="dispatch"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Image from <a href="https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html" class="svelte-1gvkhyt">https://webgpufundamentals.org/webgpu/lessons/webgpu-compute-shaders.html</a></p></blockquote> <p class="svelte-1gvkhyt">Perhaps you are asking yourself: <em>Why make it so difficult and convoluted to run things in parallel?</em></p> <p class="svelte-1gvkhyt">We already concluded that the workgroup size is dependent on the GPU
        architecture. It&#39;s mainly bound to the memory layout and what data
        is processed in memory. If we have, for example, just a 1D array of
        floats to process, a workgroup size of <code>(64, 1, 1)</code> could be
        valid. On the other hand, if we have a 2D image to process, the size of <code>(8, 8, 1)</code> would be more fitting and much more performant. This
        is because of the internal GPU memory layout, memory access patterns and
        address calculation. This topic is extremely complex, but what to do can
        be reduced to one sentence:</p> <p class="svelte-1gvkhyt"><em>Always fit the dimensions of the workgroup to the dimensions of the
          data/algorithm.</em></p> <p class="svelte-1gvkhyt">Okay, but why do we need to also define a 3D size when dispatching
        workgroups? Why can&#39;t we just set the workgroup size to, for
        example, <code>(1024, 1024, 1)</code>? This is because the workgroup
        size is limited to 256 threads, again because this number fits the GPU
        hardware pretty well. But there are often tasks that could benefit from
        running on more than 256 threads. For that, multiple workgroups need to
        be dispatched. To still fit the dimensionality of the data/algorithm,
        the dispatching also happens to accept three dimensions.</p> <p class="svelte-1gvkhyt">The last thing I want to mention when talking about workgroups is
        overdispatching. Because a workgroup has a fixed size, it&#39;s often
        not possible to only dispatch as many threads as actually needed.
        Dispatching fewer threads is not possible because this means that data
        that needs to be processed is not processed. Thus, the most common case
        is that more threads are dispatched as needed. To ensure that those
        threads do not mess with memory or waste GPU resources, overdispatching
        protection needs to happen.</p> <p class="svelte-1gvkhyt">Even if we did not take a look at the WebGPU shading language yet, here
        is some code to point out overdispatching protection. In almost every
        compute shader program you can spot something along these lines:</p> <!> <p class="svelte-1gvkhyt">The thread ID describes the position of the thread inside the cuboid of
        all dispatched threads and identifies a thread uniquely. As you can see,
        overdispatching protection is just checking the thread ID to ensure that
        the current thread has work and is not out of the data bounds.</p> <h2 id="webgpu-architecture" class="svelte-1gvkhyt">WebGPU Architecture</h2> <p class="svelte-1gvkhyt">The workflow of WebGPU (and almost any other modern graphics API) is as
        follows:</p> <p class="svelte-1gvkhyt">First, you are specifying the pipeline to exactly instruct the GPU what
        data to expect in what stage and how exactly to process the data. After
        that, you prepare the data to be uploaded on the GPU by bringing it into
        the correct format, which are often just byte arrays. In the last step,
        you need to tell the GPU to execute a command, like drawing a triangle
        with a specified GPU pipeline. Currently there are two different
        paradigms to handle GPU tasks.</p> <p class="svelte-1gvkhyt">The first is to have a global state machine like OpenGL and WebGL do.
        This state machine is very easily configurable because each resource and
        API call is easily available everywhere.</p> <p class="svelte-1gvkhyt">On the other hand, there is the explicit definition of state which, for
        example, Vulcan and WebGPU use. Having to define state via objects and
        structs enables the developer to have a more detailed control over what
        is actually happening inside the GPU. But it comes at the cost of having
        to write more code and having to think more about the overall
        architecture the software has to have. WebGPU tries to enable the
        developers to have a firm control over everything happening regarding
        the GPU while also keeping it simple. For that, WebGPU also uses the
        object and structs approach and lets the developer handle state
        explicitly. To accomplish tasks like rendering and computing, WebGPU
        offers many different interfaces in its API. The general starting point
        of each WebGPU application is the <code>GPUDevice</code> which is
        responsible for interacting with the GPU. The <code>GPUDevice</code> is
        an abstraction of all the tasks the GPU can perform. It uses an <code>GPUAdapter</code> which is an abstraction of the actual hardware, and a <code>GPUCanvasContext</code> to render the output to. The following tables
        show the different interfaces, used most commonly when working with WebGPU,
        categorized by their usage.</p> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Ressources</th><th style="text-align:left"></th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUBuffer</code></td><td style="text-align:left" class="svelte-1gvkhyt">A block of memory to store data on the GPU</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUSampler</code></td><td style="text-align:left" class="svelte-1gvkhyt">Description of how a shader has to transform / filter texture
              resources</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUTexture</code></td><td style="text-align:left" class="svelte-1gvkhyt">A special block of memory containing Textures to Sample from</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUTextureView</code></td><td style="text-align:left" class="svelte-1gvkhyt">A handle to a GPUTexture further specifying how to interpret and
              access the data</td></tr></tbody></table> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Resources represent physical memory</p></blockquote> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Encoders</th><th style="text-align:left"></th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUCommandEncoder</code></td><td style="text-align:left" class="svelte-1gvkhyt">Collects a sequence of GPU commands to be issued to the GPU</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPURenderPassEncoder</code></td><td style="text-align:left" class="svelte-1gvkhyt">Groups commands related to Vertex/Fragment shader stages</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUComputePassEncoder</code></td><td style="text-align:left" class="svelte-1gvkhyt">Groups commands related to the Compute shader stage</td></tr></tbody></table> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Encoders collect GPU commands</p></blockquote> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Pipelines</th><th style="text-align:left"></th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUComputePipeline</code></td><td style="text-align:left" class="svelte-1gvkhyt">Controls the Compute shader stage</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUPipelineLayout</code></td><td style="text-align:left" class="svelte-1gvkhyt">Defines the layout of a Pipeline by for example specifying what
              resources are used</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPURenderPipeline</code></td><td style="text-align:left" class="svelte-1gvkhyt">Controls the Vertex/Fragment Shader stages</td></tr></tbody></table> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Pipelines describe the specific state of Compute and Render Pipelines</p></blockquote> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">BindGroups</th><th style="text-align:left"></th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUBindGroup</code></td><td style="text-align:left" class="svelte-1gvkhyt">Defines a bundled group of Ressources to be used in a shader</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>GPUBindgrouplayout</code></td><td style="text-align:left" class="svelte-1gvkhyt">Defines the layout of a GPUBindGroup</td></tr></tbody></table> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">BindGroups map between Resource-Slots, defined in Shaders, and actual
          resources like GPUBuffer and Texture</p></blockquote> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">ShaderModule</th><th style="text-align:left"></th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>ShaderModule</code></td><td style="text-align:left" class="svelte-1gvkhyt">Describes what to do in an shader Vertex/Fragment/Compute Shader
              stage</td></tr></tbody></table> <br/> <p class="svelte-1gvkhyt">Many of those objects are created by calling the corresponding function
        on the <code>GPUDevice</code>. Consider the following code:</p> <!> <p class="svelte-1gvkhyt">You can see a clear pattern. To create anything related to the GPU, you
        have to use the correct function on the <code>GPUDevice</code>. Each of
        those functions takes a configuration object as input, which describes
        how exactly your requested object should be configured. In the case of
        the <code>createBuffer</code> function, the configuration could look like
        this:</p> <!> <p class="svelte-1gvkhyt">This creates a GPUBuffer with a size of 64 bytes and a specific usage
        mode. The usage <code>UNIFORM</code> is used to be able to bind this
        buffer in a bind group.<br/>Each and every function expects an object
        with many different, partially optional, settings to create the correct
        GPU related object.</p> <p class="svelte-1gvkhyt">This makes the usage of the architecture very simple and uniform.</p> <ol><li class="svelte-1gvkhyt">Create a configuration of how your requested object should look like</li> <li class="svelte-1gvkhyt">Request that object by calling the corresponding function from the <code>GPUDevice</code></li> <li class="svelte-1gvkhyt">use the created object</li></ol> <h3 id="example-rendering" class="svelte-1gvkhyt">Example Rendering</h3> <p class="svelte-1gvkhyt">Let&#39;s take a look at the concept of how rendering is done on the
        GPU.</p> <p class="svelte-1gvkhyt">The most important concept is that in WebGPU you are not dispatching
        commands directly to the GPU but rather collecting a series of commands
        and then dispatching a list of things to do to the GPU.</p> <p class="svelte-1gvkhyt">The <code>CommandEncoder</code> encodes commands to be dispatched to the
        GPU. Those commands are grouped into Passes, for example, a RenderPasses
        for opaque objects, a RenderPass for transparent objects, or
        ComputePasses. Each pass is recording corresponding GPU commands like
        setting correct resources and configurations, binding data, and doing <code>draw</code> calls. The <code>draw</code> call instructs the GPU to actually do the
        calculations to draw the specified amount of triangles to the screen by
        pushing the corresponding data through the pipeline. By calling the <code>finish()</code> function on the <code>CommandEncoder</code> a buffer containing all
        those instructions for the GPU is created. To actually instruct the GPU
        to do the defined calculations, the <code>CommandBuffer</code> has to be
        written to the <code>GPUCommandQueue</code>. In code this can look
        something like this, often being spread amongst multiple files
        responsible for different RenderPasses.</p> <!> <h2 id="webgpu-as-successor-to-webgl" class="svelte-1gvkhyt">WebGPU as successor to WebGL</h2> <p class="svelte-1gvkhyt">Before we take a look at WebGPUs custom Shader language, let&#39;s
        compare WebGPU to its predecessor, WebGL. As previously mentioned, the
        biggest difference is the API&#39;s architecture and the functionality.
        Consider the following code to set up WebGPU and clear the canvas:</p> <!> <p class="svelte-1gvkhyt">As seen in a previous code snippet, WebGPU collects all GPU commands
        with the <code>GPUCommandEncoder</code>and dispatches all commands to
        the GPU simultaneously. This is done because WebGPU is designed to be
        async. As previously mentioned, WebGPU does not have a global state
        machine, it instead lets you define structures and objects that describe
        exactly what the GPU has to do. Instead of directly executing tasks,
        WebGPU forces the user to &#39;record&#39; all actions in the correct
        order with all corresponding properties. Those recorded actions are then
        dispatched together to the GPU queue, which works asynchronously. This
        allows the application to record different commands in parallel,
        boosting the CPU performance. But more importantly, it eliminates the
        waiting of the CPU for the GPU to render. After the submission of the
        list of commands to the GPU queue, the CPU can directly start to crunch
        data for the next frame.</p> <p class="svelte-1gvkhyt">On the other hand, consider the same task in WebGL, initiating the
        renderer and clearing the canvas.</p> <!> <p class="svelte-1gvkhyt">As you can see, WebGL is very simple. After the <code>gl</code> context
        is received, you can just call the necessary functions on this context
        and the action is performed immediately on the GPU. The <code>gl.clear(...)</code> function, for example, clears the canvas with the specified color, previously
        set with <code>gl.clearColor(...)</code>. The main problem with WebGL is
        that when calling a function like <code>clear</code> or <code>clearColor</code> the CPU has to read and write the global state and
        then communicate with the GPU driver to execute the command. This can hurt
        performance, especially when there are many commands. If a 3D scene has hundreds
        or even thousands of different draw calls because it has many different textures
        and materials, this can lead to overhead and long idle times for the CPU,
        where compute resources are wasted. WebGL needs to be used synchronously
        because it has a global context consisting of one big state machine, which
        needs to be configured correctly before doing a draw call. If multiple threads
        were to access this state machine in parallel, WebGL could not guarantee
        that when a draw call is dispatched, that all configurations are still correct.</p> <p class="svelte-1gvkhyt">This makes WebGPU way more feasible for applications where the CPU usage
        is critical. While WebGPU&#39;s async style is way more efficient, it
        clearly has the disadvantage of having to write more boilerplate code
        and manage state by yourself. This aligns with other modern graphics
        APIs, which influenced WebGPU and where no state machine is used.
        Vulcan, for example, is famous for its 1000 lines of boilerplate code to
        render a single triangle, but it is also famous for being extremely
        performant.</p> <p class="svelte-1gvkhyt">The following code is a direct example of the different approaches
        between WebGL and WebGPU. While WebGL uses just functions to configure
        the WebGL state machine and to do tasks, WebGPU configures objects with
        explicit context and works asynchronously with a task queue on the GPU:</p> <!> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note:</strong> While WebGL has an explicit <code>gl.clear()</code> call, WebGPU calls the <code>clear</code> function to he start of every
          frame / renderpass automatically</p></blockquote> <p class="svelte-1gvkhyt">Besides the architecture being focused on being async, WebGPU also has
        more/different features than WebGL. The biggest feature is the support
        of general purpose computing on the GPU, also called Compute Shaders.
        More on them later. First, let&#39;s look at the new programming
        language WebGPU introduces to write GPU programs, because it does not
        use the older GLSL (OpenGL Shading Language), which WebGL and OpenGL
        use.</p> <h2 id="webgpu-shading-language" class="svelte-1gvkhyt">WebGPU Shading Language</h2> <p class="svelte-1gvkhyt">WebGPU uses WGSL (WebGPU Shading Language, pronounced
        &#39;wig-sull&#39;), which is an abstraction language to be able to be
        compiled to other intermediate languages for Graphics APIs like SPIR-V
        (Standard Portable Intermediate Language), DXIL (DirectX Intermediate
        Language) and MSL (Metal Shading Language). WGSLs syntax is influenced
        by Rust and Metal Shading Language, Apple&#39;s own shading language for
        Apple&#39;s GPU framework called Metal. WGSL is, like other shading
        languages, strictly typed to provide the most information to the
        compiler possible. Those types include <code>bool</code>, <code>i32</code>, <code>u32</code> and <code>f32</code> but also two,
        three, and four dimensional vectors <code>vecN&lt;T&gt;</code> and
        matrices <code>matNxM&lt;f32&gt;</code> where <code>N</code> and <code>M</code> must be from &#123;2, 3, 4&#125;. With <code>let</code> and <code>var</code> there are immutable and mutable modifiers for variable declaration. Keywords
        to change the control flow include <code>if</code>, <code>switch</code>, <code>for</code>, <code>while</code> and <code>loop</code>, but also <code>break</code> <code>continue</code> and <code>return</code>. WGSL allows for function definition and function
        calling. Like other shading languages, there are many functions already
        implemented. For example, functions like <code>sin</code>, <code>max</code>, <code>ceil</code> or <code>normalize</code> which are functions
        essential for writing shaders.</p> <p class="svelte-1gvkhyt">A simple WGSL function to be used in a game of life simulation could
        look something like this:</p> <!> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note</strong>: <code>getCell</code> is also a custom function
          returning the aliveness value of an cell at <code>x</code>,<code>y</code></p></blockquote> <p class="svelte-1gvkhyt">In the example above, you can easily see the influence of Rust on the
        syntax. Defining functions with the <code>fn</code> keyword and adding
        type information with <code>: T</code> is typical to Rust.</p> <p class="svelte-1gvkhyt">To further define context for the compiler, there are also many
        different annotations, marked with an <code>@</code> symbol, like <code>@vertex</code> for marking a function as the entrypoint for a vertex shader and <code>@fragment</code> or <code>@compute</code> to mark a function as a entrypoint for a fragmant
        or compute shader.</p> <p class="svelte-1gvkhyt">The following table shows annotations with explanations and examples
        that I used in this project.</p> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Annotation</th><th style="text-align:left">Description</th><th style="text-align:left">Example</th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@group</code></td><td style="text-align:left" class="svelte-1gvkhyt">defines the bindgroup of a resource</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@group(0) @binding(0) var&lt;storage, read&gt; in_data : f32;</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@binding</code></td><td style="text-align:left" class="svelte-1gvkhyt">defines the position inside a bindgroup</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@group(0) @binding(0) var&lt;storage, read&gt; in_data : f32;</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@location</code></td><td style="text-align:left" class="svelte-1gvkhyt">defines the position of in-/output of a shader</td><td style="text-align:left" class="svelte-1gvkhyt"><code>struct Data location(0) position : vec4f}</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@builtin</code></td><td style="text-align:left" class="svelte-1gvkhyt">specifics that a variable comes from a built-in feature of WebGPU</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@vertex fn vs1(@builtin(vertex_index) id: u32)</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@vertex</code></td><td style="text-align:left" class="svelte-1gvkhyt">Entrypoint for Vertex Shaders</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@vertex fn vs1()</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@fragment</code></td><td style="text-align:left" class="svelte-1gvkhyt">Entrypoint for Fragment Shaders</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@fragment fn fs1()</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@compute</code></td><td style="text-align:left" class="svelte-1gvkhyt">Entrypoint for Compute Shaders</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@compute @workgroup_size(8,8)</code></td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>@workgroup_size</code></td><td style="text-align:left" class="svelte-1gvkhyt">Sets the size how many threads are in a workgroup in a compute
              shader</td><td style="text-align:left" class="svelte-1gvkhyt"><code>@compute @workgroup_size(8,8)</code></td></tr></tbody></table> <p class="svelte-1gvkhyt">As you can see, some attributes are often combined with other
        attributes, like <code>@compute</code> defining a compute shader and <code>@workgroup_size</code> specifying the number of threads for this compute
        shader.</p> <p class="svelte-1gvkhyt">Two other attributes used together are the <code>@group</code> and <code>@binding</code> attributes. If you, for example, have a shader that expects one bind group
        with two properties, <code>in_data</code> and <code>out_data</code> then your shader code has to contain something along
        these lines:</p> <!> <p class="svelte-1gvkhyt">In this example there are two variables defined, two arrays containing
        only <code>f32</code> numbers. Both arrays are bound in the same
        bindgroup (<code>@group(0)</code>), and inside the pointed brackets is
        also defined how the data is accessed. While <code>in_data</code> can
        only be read, <code>out_data</code> can also be written to. Generally
        speaking, WGSL is not reinventing the wheel. It’s just a shading
        language, used to define programs that will run on a GPU. The only real
        architectural difference between other shading languages and WGSL is
        that WGSL focuses on safety via strict typing in combination with
        explicit declaration of access patterns (like defining if only read or
        also write access is needed) and a very strict resource binding syntax
        via <code>@group</code> and <code>@binding</code> annotations. Because WGSL
        was designed to be run on the web, and thus it is to be expected that it
        has to run on a very heterogeneous set of compute devices, WGSL tries to
        minimize the interpretation space by being very explicit.</p> <p class="svelte-1gvkhyt">To learn more about WGSL visit <a href="https://www.w3.org/TR/WGSL/" class="svelte-1gvkhyt">the WGSL documentation</a> which is about 350 pages of features and definitions of what WGSL offers.
        This document is also great to always have open on the side while programming
        WebGPU shaders.</p> <h2 id="hello-triangle" class="svelte-1gvkhyt">Hello Triangle</h2> <p class="svelte-1gvkhyt">This chapter shows the most basic WebGPU application there is, the
        beginner&#39;s project for every graphics programmer, Hello Triangle! In
        this example you can see the setup needed to create a WebGPU application
        and what is needed to render a red triangle on screen.</p> <p class="svelte-1gvkhyt">The following steps are also marked in the code:</p> <ol><li class="svelte-1gvkhyt">Create the <code>GPUDevice</code> by using a Canvas and a <code>GPUAdapter</code></li> <li class="svelte-1gvkhyt">Define the data to be rendered, in our case one triangle</li> <li class="svelte-1gvkhyt">Create a <code>GPURenderPipeline</code> describing what the code is in
          each stage (vertex/fragment) and how vertex data should be read (triangle-list).
          Also define how a shader should read data and where to expect it (shaderLocation:0)</li> <li class="svelte-1gvkhyt">Do the actual render loop each frame <ol><li class="svelte-1gvkhyt">Record all GPU commands with a command encoder</li> <li class="svelte-1gvkhyt">Set the pipeline and data to process</li> <li class="svelte-1gvkhyt">Draw the triangle by doing a draw call</li></ol></li></ol> <!> <p class="svelte-1gvkhyt">And here is the Vertex and Fragment Code:</p> <!> <p class="svelte-1gvkhyt">In this example you can see that you need a lot of code to just render a
        single triangle on screen. The code is also not very flexible and does
        not include any steps like converting vertex positions from local- to
        world- to camera space. But it outlines the general workflow flow of
        WebGPU. You need to first prepare data and define all processing steps.
        Then you need to start recording the GPU commands. While recording, for
        each object to render (here only a single triangle) you need to set the
        correct RenderPipeline configuration, the correct data and dispatch a
        draw call. Only after submitting the command queue, the GPU starts to
        execute all commands given to it.</p> <p class="svelte-1gvkhyt">This process feels tedious, but it&#39;s designed to be! By not
        abstracting away many things and having &quot;direct&quot; contact with
        the GPU you have a very strong control on what exactly the GPU has to
        do. In the world of graphics programming and real time rendering, this
        can make the difference between running with 30 or 144 frames per
        second.</p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note:</strong> 144 frames per second is a common refresh rate for
          gaming monitors, while 30 frame a second is commonly agreed to be &#39;barely
          enough&#39; to play a video game smoothly</p></blockquote> <h2 id="webgpu-for-developing-games" class="svelte-1gvkhyt">WebGPU for developing games</h2> <p class="svelte-1gvkhyt">To really get a feeling for WebGPU, I decided to create a very, very
        small tech demo with no actual gameplay. The idea was to have a boat
        floating on water with a pretty background and to be able to cast a
        fishing rod and move left and right. I choose those use cases because
        they can demonstrate what actual problems in game development can look
        like and how to solve them with a graphics API like WebGPU. But first,
        allow me a brief detour.</p> <h3 id="ecs-entity-component-system" class="svelte-1gvkhyt">ECS - Entity Component System</h3> <p class="svelte-1gvkhyt">Perhaps you, dear reader, know about the Model View Controller paradigm
        used everywhere in software development. MVC is mostly about decoupling
        and centered around presentation and controlling. The biggest flaw (in
        terms of high performance computing for games) of MVC is the memory
        layout. A typical model class, like a player, contains many different
        data points, which are often stored side by side. Acting on those models
        requires the loading of their data into the CPU. Because of the CPU and
        memory architecture, there will be data fetched and cached that is not
        needed. The problem gets even worse if you consider CPU branch
        prediction and ahead of time caching. MVC systems can be very
        unpredictable when it comes to the memory usage patterns, especially
        when many indirections are used.</p> <p class="svelte-1gvkhyt">To tackle this problem, modern game titles are using an Entity Component
        System, or ECS. It consists of three parts:</p> <p class="svelte-1gvkhyt"><strong>Entities</strong> are just identifiers, which are represented as
        strings or, most of the time, just numbers.</p> <p class="svelte-1gvkhyt"><strong>Components</strong> describe properties of entities like a position
        in 3D space, mesh data, animation data, etc. . They are stored in minimal
        structures / classes with no functions. Being minimal means that only data
        which is usually accessed together is actual stored together. So, for example,
        the 3D position, the mesh data and the animation data, would all be stored
        in individual structs/classes. Every kind of component is then stored in
        its own map.</p> <p class="svelte-1gvkhyt"><strong>Systems</strong> take components as input and modify them.</p> <p class="svelte-1gvkhyt">To better understand this, consider the following example:</p> <p class="svelte-1gvkhyt">There is a <code>PhysicsBodyComponent</code> and a <code>TransformComponent</code>. The <code>PhysicsBody</code> has a <code>Velocity</code> while the <code>Transform</code> has a 3D <code>Position</code>. We
        could create a <code>PhysicsCalculationSystem</code> which takes a <code>Map&lt;number, PhysicsBodyComponent&gt;</code> and a <code>Map&lt;number,TransformComponent&gt;</code>. Then the system
        iterates over all <code>PhysicsBodyComponents</code>, also queries the
        corresponding <code>TransformComponent</code> and calculates a new <code>position</code> and updates the <code>TransformComponent</code>. In code this could look
        something like this:</p> <!> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt"><strong>Note</strong>: the actual calculation for applying a velocity
          may differ</p></blockquote> <p class="svelte-1gvkhyt">This code has a huge advantage: the memory layout is data oriented,
        allowing much higher CPU throughput rates and bypassing CPU bandwidth
        bottlenecks because only data that is actually used is loaded. Another
        neat feature of this memory layout is that systems act on a whole array,
        making CPU caching and branch prediction much simpler and more
        efficient. With such a predictable layout, SIMD operations, for example,
        can be more easily used by the optimizer. For those reasons, Entity
        Component Systems are the de facto standard for modern data intensive
        applications in Realtime Graphics / Gaming. But because this document is
        about WebGPU and not game engines, I won&#39;t bother explaining exactly
        how non WebGPU related code works in detail. One thing you should have
        in mind is the idea of composition over inheritance. Adding properties
        and data by just creating components and linking them to entities works
        great with the more resource oriented WebGPU API than with other
        statemachine oriented APIs like WebGL. Furthermore, this allows for the
        aforementioned advantages.</p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">The data oriented approach is actually the same idea which drives
          Column oriented Database management systems, allowing them to
          outperform Row oriented DBMSs in terms of complex read intensive
          queries</p></blockquote> <p class="svelte-1gvkhyt">End of detour.</p> <p class="svelte-1gvkhyt">With that out of the way, we can also understand what role WebGPU takes
        when developing a game. There should be a <code>RenderSystem</code> having all data related to rendering as input. Then this system should configure
        the <code>GPURenderPipeline</code> as needed and dispatch data and commands
        to the GPU. Data used for rendering can be stored in a component. The component
        I developed for this example is defined as follows:</p> <!> <p class="svelte-1gvkhyt">The component contains mesh data, dispatchable to the GPU. It also
        contains a material, which defines GPU resources, for example, the color
        and shader module to use to render the material.</p> <p class="svelte-1gvkhyt">The actual update function of the <code>RenderSystem</code> looks like this:</p> <!> <p class="svelte-1gvkhyt">Because of batching, instancing, and indexed rendering, the code is a
        little convoluted. A batch is a group of renderable data that shares the
        same PipelineConfiguration. Rendering in batches increases the
        performance of the GPU drastically because switching pipeline
        configurations costs a lot of time. The code does the following things
        in order:</p> <ol><li class="svelte-1gvkhyt">Create a CommandEncoder and begin a new Renderpass</li> <li class="svelte-1gvkhyt">Bind all data that does not change between different batches within
          the time of the current frame (e.g. the current time or CameraPosition
          )</li> <li class="svelte-1gvkhyt">For each batch, configure the pipeline as needed. This includes
          setting shaders, textures, and mesh layouts</li> <li class="svelte-1gvkhyt">Upload geometry data by setting the vertex buffer (and index buffer)</li> <li class="svelte-1gvkhyt">Dispatch an (indexed) draw call</li></ol> <p class="svelte-1gvkhyt">This general purpose render pass can render all renderable and opaque
        entities in this demo.</p> <h3 id="subdivision-with-compute-shaders" class="svelte-1gvkhyt">Subdivision with Compute Shaders</h3> <p class="svelte-1gvkhyt">Because one of the most valuable new features of WebGPU is the compute
        shader, I decided to also introduce a compute shader into the project.
        For that, I decided to create a subdivision compute shader, which takes
        a single quad, consisting of four positions, and subdivides it into many
        smaller triangles to create more detail on the water surface. Normally
        you would use a tessellation shader to dynamically add mesh details.
        Unfortunately, WebGPU does not have a tessellation stage, thus, a
        compute shader has to be used. Even if you are technically able to do
        anything you want in a compute shader, like tessellation, it has one
        drawback. While tessellation is done after the vertex shader, the
        compute shader has to run before the vertex shader. This has the
        consequence that if mesh data is enriched in detail and new vertices are
        created, the vertex shader has a lot more work to do. But in the case of
        this small demo, this is not a problem.</p> <p class="svelte-1gvkhyt">The following code is a sample from the <a href="" class="svelte-1gvkhyt">subdivider.ts</a> file, which contains the logic to dispatch the compute shader from <a href="" class="svelte-1gvkhyt">subdivision.wgsl</a>.</p> <p class="svelte-1gvkhyt">The example has two phases:</p> <ol><li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">The GPU is instructed to do the computations with the specified
            compute pipeline and bind group.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">The augmented data inside the GPU memory has to be written back into
            main memory to be able to be handled by the CPU</p></li></ol> <!> <p class="svelte-1gvkhyt">The effect of this subdivision is clearly visible when experimenting
        with different subdivision sizes, as seen in the following images:</p> <p class="svelte-1gvkhyt"><img alt="low resolution water"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Water with a 16x16 Subdivision (450 Tris)</p></blockquote> <p class="svelte-1gvkhyt"><img alt="high resolution water"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Water with a 64x64 Subdivision (7.938 Tris)</p></blockquote> <p class="svelte-1gvkhyt"><img alt="extreme resolution water"/></p> <blockquote class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Water with a 512x512 Subdivision (522.242 Tris)</p></blockquote> <p class="svelte-1gvkhyt">Even with over half a million triangles, the demo still runs with the
        target framerate of 100 Frames a second.</p> <h2 id="where-to-use-webgpu" class="svelte-1gvkhyt">Where to use WebGPU</h2> <p class="svelte-1gvkhyt">As seen, WebGPU is a high performance API, desigend to be a modern
        abstraction of a GPU, like Vulkan, but for the web. WebGPU offers the
        bare minimum to do tasks like rendering and computing on the GPU. This
        creates a problem when viewing WebGPU from the angle of fast-paced web
        development and prototyping. Of course it&#39;s possible to create a
        really nice (and resource-efficient) webpage using WebGPU to do a
        &quot;3D scroll effect&quot; like on <a href="https://silencio.es/" class="svelte-1gvkhyt">this page</a>. Or even to program games directly for the web, but that&#39;s not
        what WebGPU is targeting.</p> <p class="svelte-1gvkhyt">WebGPU is a modern foundation for other libraries like Three.js or
        Babylon.js. Those libraries simplify many difficult concepts by hiding
        them behind simple to use abstractions. One such case is material
        management. Materials describe properties of 3D objects and how exactly
        those objects should be rendered. Because WebGPU does not have the
        concept of materials built in, the developer needs to do its own
        implementation of materials, its caching, and so on. Libraries like
        Three.js already implement those difficult tasks so that a developer
        only needs to specify the properties of a material and Three.js
        automatically configures the render pipeline to correctly render the 3D
        scene with all different materials. Also, tasks like the transformation
        from local to world to camera-space and the management and execution of
        different render passes with the correct render order are way simpler in
        Three.js.</p> <p class="svelte-1gvkhyt">When looking at games in the browser, a similar picture arises. It&#39;s
        way more important to have good tools to create and iterate fast than to
        have the fullest of control. While you can create a game with WebGPU
        directly, game engines like Unity can compile to WebGPU. Only in the
        rarest cases is it useful to use WebGPU directly. The game demo I
        created in this project has about 3200 lines of TypeScript code. A major
        part of this is controlling and managing resources. A very similar game
        could be created in a few hundred lines of code by just using Unity and
        then compiling to WebGPU.</p> <h2 id="final-words" class="svelte-1gvkhyt">Final words</h2> <p class="svelte-1gvkhyt">WebGPU is a modernization of WebGL, the foundation for every 3D
        application running in the browser. WebGPU is a boring technology!
        It&#39;s boring because it can afford to be boring. WebGPU does not need
        to have a user friendly, easy to use, and flashy list of functionalities
        like other web libraries and frameworks (e.g., React or Tree.js). WebGPU
        is simply a very powerful and modern abstraction of the GPU, and most
        developers, especially &quot;normal&quot; web developers, will never
        even use it directly. It is simple and powerful, but code gets very
        complex when trying to do the right abstractions yourself.</p> <p class="svelte-1gvkhyt">Perhaps you are asking youself: <strong>Should I use WebGPU for X</strong>? I can very confidently say that you probably shouldn&#39;t. The
        following use cases are the only ones I can think of where asking this
        question is valid:</p> <ol><li class="svelte-1gvkhyt">You are creating a 3D render library like Three.js</li> <li class="svelte-1gvkhyt">You don&#39;t want to have any dependencies</li> <li class="svelte-1gvkhyt">You need absolute control over everything happening on the GPU</li> <li class="svelte-1gvkhyt">You want to learn about rendering and the GPU in general</li></ol> <p class="svelte-1gvkhyt">Even if you are creating a 3D library or a high performance 3D
        application like a web based MRI viewer, you should at least consider
        using an abstraction to WebGPU like Three.js. Libraries like Three.js
        are maintained by many very skilled people who know exactly what they
        are doing. I would say the probability of creating an application
        directly with WebGPU having a better performance than a similar
        application created by using an abstraction layer like three.js is very
        small. This is because every minuscule design decision can impact the
        performance of the final application in a major way.</p> <p class="svelte-1gvkhyt">Does this mean WebGPU is not usefull? NO! Quite the opposite. WebGPU is
        useful and long overdue. It brings modern GPU programming to the web,
        but nothing more. It will be forever a technology hidden behind
        brilliant abstractions, powering parts of the web without most people
        even noticing it.</p> <p class="svelte-1gvkhyt">Now I present you the demo in all its glory:</p> <section id="playableDemo"><h1 class="svelte-1gvkhyt">Demo</h1> <h2 class="text-xl svelte-1gvkhyt">Some things to notice</h2> <p class="svelte-1gvkhyt">To create this demo, I have coded many things that won&#39;t be
          noticed until you look at the code or have experience in the field of
          graphics programming. Here&#39;s a quick list of features. What I have
          created includes but is not limited to:</p> <ul class="svelte-1gvkhyt"><li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">The concept of materials and the management of those A material
              contains everything needed to give a mesh its look. This includes
              textures, material properties, shaders, and so on.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Different render passes to render different parts of the scene,
              like opaque objects, transparent objects, and HUD elements, which
              are using an orthogonal projection</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">A system to render text Text is inherently hard to draw because
              there is no concept of text when rendering. You need to create a
              dynamic mesh on the fly, which then gets a texture of the text.
              For that you also need to have a font atlas, which is just all the
              letters and icons you want to have in your font in a texture.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">A parallax effect in the background The parallax effect is done by
              splitting a background image in multiple layers and scrolling them
              at different speeds to create the illusion of movement and depth</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">An animation system Animating the fishing line of the boat while
              swimming and fishing is done with a texture atlas. Having a big
              texture that contains all animations of the boat and just choosing
              which part to render in which state allows for lower GPU usage
              because textures do not need to be replaced and reuploaded to the
              GPU&#39;s memory.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Making procedural waves To create waves on the ocean, a vertex
              shader is used. It calculates a y-offset based on the xz-position
              of the vertex. Normally you would use noise (e.g., Perlin noise),
              but here I am just using several overlaid sin functions.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Moving the boat with the waves To move the boat with the waves,
              the calculations from the vertex shader of the waves are also
              applied to the vertices of the boat. To rotate the boat so that it
              swims up and down the waves, an approximation of the slope of the
              current wave position is used to create a rotation matrix. All
              done in the vertex shader of the boat.</p></li> <li class="svelte-1gvkhyt"><p class="svelte-1gvkhyt">Coloring of the Water To color the water, the water&#39;s fragment
              shader uses the y-offset of the vertices. There are two
              interpolations used. The flat interpolation ensures that the low
              parts of the water are dark and the high parts are bright while
              creating a stylized low-poly look. To highlight the tops of the
              waves often having bright white foam in real life, a smooth
              interpolation is used. You can see the difference when observing
              the borders of the triangles. While you can see the borders within
              the low part of a wave, you can&#39;t see borders in the foam
              part. The foam appears uniform and smooth.</p></li></ul> <p class="svelte-1gvkhyt">I highly recommend you also look at the code to see how much work is
          needed to do the most basic things most of us just take for granted
          when thinking of video games.</p> <h2 class="text-xl svelte-1gvkhyt">Controls</h2> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Input</th><th style="text-align:left">Action</th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>A & D</code></td><td style="text-align:left" class="svelte-1gvkhyt">Move left and right</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>F</code></td><td style="text-align:left" class="svelte-1gvkhyt">Cast / Reel in the line</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>C</code></td><td style="text-align:left" class="svelte-1gvkhyt">Toggle freecam</td></tr></tbody></table> <p class="svelte-1gvkhyt">Besides the default controls there is a freecam used while debugging
          which is controlled as follows:</p> <table class="svelte-1gvkhyt"><thead class="svelte-1gvkhyt"><tr><th style="text-align:left">Input</th><th style="text-align:left">Action</th></tr></thead><tbody><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>W, A, S, D</code></td><td style="text-align:left" class="svelte-1gvkhyt">Fly in any direction</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>Q & E</code></td><td style="text-align:left" class="svelte-1gvkhyt">Fly down and up</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>Mouse</code></td><td style="text-align:left" class="svelte-1gvkhyt">Look around</td></tr><tr><td style="text-align:left" class="svelte-1gvkhyt"><code>C</code></td><td style="text-align:left" class="svelte-1gvkhyt">Toggle freecam</td></tr></tbody></table> <p class="svelte-1gvkhyt">There is also a <b>highly experimental</b> feature:<br/> While in <b>freecam</b> you can aim at an object and press the <b>left mousebutton</b> to select an object. Then you can <b>hold shift</b> and <b>move the mouse</b> to move the object in the 3d
          scene. This does NOT work on the water plane because it's subdivided at
          runtime.</p></section></div> <hr/> <!></div></main>`);function Mr(t,e){Ie(e,!1);let a=ee(!1);navigator.gpu&&M(a,!0);let s=ee(),n;at(async()=>{n=new Ar(r(s)),n.startApp()}),jt();var i=kr(),l=m(i),o=m(l),c=m(o);z(c,"alt","banner");var d=g(c,4),h=g(m(d),2);h.__click=[wr],p(d);var f=g(d,6),A=m(f);p(f);var u=g(f,36),v=m(u);p(u);var k=g(u,40),y=m(k);p(k);var I=g(k,8),x=m(I);p(I);var w=g(I,16);ke(w,()=>`
      <pre><code class="lang-wgsl">
      <span class="hljs-meta">@compute</span> <span class="hljs-meta">@workgroup_size(64, 1, 1)</span>
      fn main(
          <span class="hljs-meta">@builtin(global_invocation_id)</span> global_id: vec3&lt;u32 &gt;
      ) {
              let total_points: u32 = uniforms.totalPoints;

          <span class="hljs-comment">// overdispatching protection</span>
          <span class="hljs-keyword">if</span> global_id.x &gt; total_points {
              <span class="hljs-keyword">return</span>;
          }

          <span class="hljs-comment">// do the calculations</span>
          ...

      }
</code></pre>`);var b=g(w,36);ke(b,()=>`
      <pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> device  = navigator.gpu.requestAdapter()?.requestDevice()!;
      ...
      <span class="hljs-keyword">const</span> layout  = device.createBindGroupLayout(<span class="hljs-meta">{...}</span>);
      <span class="hljs-keyword">const</span> buffer  = device.createBuffer(<span class="hljs-meta">{...}</span>);
      <span class="hljs-keyword">const</span> texture = device.createTexture(<span class="hljs-meta">{...}</span>)
</code></pre>
`);var G=g(b,4);ke(G,()=>`
<pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> <span class="hljs-built_in">buffer</span> = device.createBuffer({
          <span class="hljs-built_in">size</span>: <span class="hljs-number">64</span>,
          usage: GPUBufferUsage.UNIFORM,
          label: <span class="hljs-string">'Global Uniform Buffer'</span>
      });
</code></pre>
`);var R=g(G,16);ke(R,()=>`
<pre><code class="lang-ts">
      <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();

      // renderpass <span class="hljs-keyword">with</span> all its configurations <span class="hljs-keyword">and</span> the draw call
      <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass(<span class="hljs-meta">{...}</span>);
      passEncoder.setPipeline(<span class="hljs-meta">{...}</span>);
      passEncoder.setBindGroup(<span class="hljs-meta">{...}</span>);
      passEncoder.setVertexBuffer(<span class="hljs-meta">{...}</span>);
      passEncoder.draw(<span class="hljs-meta">{...}</span>);
      passEncoder.<span class="hljs-keyword">end</span>();

      <span class="hljs-keyword">const</span> commandBuffer = commandEncoder.finish();
      device.queue.submit([commandBuffer]);
</code></pre>
`);var F=g(R,6);ke(F,()=>`
    <pre><code class="lang-ts">
    <span class="hljs-keyword">async</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">setupWebGPU</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">if</span> (!navigator.gpu) {
            <span class="hljs-keyword">return</span>;
        }

        <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">'canvas'</span>);
        <span class="hljs-keyword">const</span> context = canvas.getContext(<span class="hljs-string">'webgpu'</span>);

        <span class="hljs-keyword">const</span> adapter = <span class="hljs-keyword">await</span> navigator.gpu.requestAdapter();
        <span class="hljs-keyword">const</span> device = <span class="hljs-keyword">await</span> adapter.requestDevice();

        <span class="hljs-keyword">const</span> presentationFormat = navigator.gpu.getPreferredCanvasFormat();

        context.configure({
            device,
            <span class="hljs-attr">format</span>: presentationFormat,
        });

        <span class="hljs-comment">// record commands with commandEncoder</span>
        <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();
        <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass({
            <span class="hljs-attr">colorAttachments</span>: [{
                <span class="hljs-attr">view</span>: context.getCurrentTexture().createView(),
                <span class="hljs-attr">loadOp</span>: <span class="hljs-string">'clear'</span>, 
                <span class="hljs-attr">clearValue</span>: { <span class="hljs-attr">r</span>: <span class="hljs-number">0.1</span>, <span class="hljs-attr">g</span>: <span class="hljs-number">0.2</span>, <span class="hljs-attr">b</span>: <span class="hljs-number">0.8</span>, <span class="hljs-attr">a</span>: <span class="hljs-number">1.0</span> }, 
                <span class="hljs-attr">storeOp</span>: <span class="hljs-string">'store'</span>,
            }],
        });
        passEncoder.end();

        <span class="hljs-comment">// dispatch all recorded commands async to the GPU</span>
        <span class="hljs-keyword">const</span> commandBuffer = commandEncoder.finish();
        device.queue.submit([commandBuffer]);
    }
    </code></pre>
  `);var _=g(F,6);ke(_,()=>`
      <pre><code class="lang-ts">
      function setupWebGL() {
          <span class="hljs-keyword">const</span> canvas = document.createElement('canvas');
          <span class="hljs-keyword">const</span> <span class="hljs-keyword">gl</span> = canvas.getContext('webgl2');

          <span class="hljs-keyword">if</span> (!<span class="hljs-keyword">gl</span>) {
              <span class="hljs-keyword">return</span>;
          }

          <span class="hljs-keyword">gl</span>.viewport(0, 0, canvas.width, canvas.height);
          <span class="hljs-keyword">gl</span>.clearColor(0.1, 0.2, 0.8, 1.0); 
          <span class="hljs-keyword">gl</span>.<span class="hljs-keyword">clear</span>(<span class="hljs-keyword">gl</span>.COLOR_BUFFER_BIT);
      }
</code></pre>
`);var E=g(_,8);ke(E,()=>`
<pre><code class="lang-ts">
      <span class="hljs-comment">// WebGL</span>
      <span class="hljs-keyword">gl</span>.clearColor(0.1, 0.2, 0.8, 1.0); 
      <span class="hljs-keyword">gl</span>.<span class="hljs-keyword">clear</span>(<span class="hljs-keyword">gl</span>.COLOR_BUFFER_BIT);

      <span class="hljs-comment">// WebGPU</span>
      <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass({
          colorAttachments: [{
              <span class="hljs-keyword">view</span>: context.getCurrentTexture().createView(),
              loadOp: '<span class="hljs-keyword">clear</span>', 
              clearValue: { r: 0.1, <span class="hljs-keyword">g</span>: 0.2, b: 0.8, a: 1.0 }, 
              storeOp: 'store',
          }],
      });
      passEncoder.end();
      device.queue.submit([commandEncoder.finish()]);
</code></pre>
`);var C=g(E,12);ke(C,()=>`
<pre><code class="lang-wgsl">
      <span class="hljs-selector-tag">fn</span> <span class="hljs-selector-tag">countNeighbors</span>(<span class="hljs-attribute">x</span>: u32, <span class="hljs-attribute">y</span>: u32) <span class="hljs-selector-tag">-</span>&gt; <span class="hljs-selector-tag">u32</span> {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y - <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x, y - <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y - <span class="hljs-number">1</span>) + 
               <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y) +                         <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y) + 
               <span class="hljs-selector-tag">getCell</span>(x - <span class="hljs-number">1</span>, y + <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x, y + <span class="hljs-number">1</span>) + <span class="hljs-selector-tag">getCell</span>(x + <span class="hljs-number">1</span>, y + <span class="hljs-number">1</span>);
      }
</code></pre>
`);var j=g(C,16);ke(j,()=>`
<pre><code class="lang-wgsl">
      <span class="hljs-variable">@group</span>(<span class="hljs-number">0</span>) <span class="hljs-variable">@binding</span>(<span class="hljs-number">0</span>) var&lt;storage, read&gt;       <span class="hljs-attribute">in_data  </span>: array&lt;f32&gt;;
      <span class="hljs-variable">@group</span>(<span class="hljs-number">0</span>) <span class="hljs-variable">@binding</span>(<span class="hljs-number">1</span>) var&lt;storage, read_write&gt; <span class="hljs-attribute">out_data </span>: array&lt;f32&gt;;
</code></pre>
`);var W=g(j,14);ke(W,()=>`
      <pre><code class="lang-ts">
      <span class="hljs-keyword">import</span> triangleVertWGSL <span class="hljs-keyword">from</span> <span class="hljs-string">'./shaders/triangle.vert.wgsl'</span>;
      <span class="hljs-keyword">import</span> redFragWGSL <span class="hljs-keyword">from</span> <span class="hljs-string">'./shaders/red.frag.wgsl'</span>;

      <span class="hljs-comment">// --- 1. initialize the GPUDevice with a canvas context and a GPUAdapter ----</span>
      <span class="hljs-keyword">const</span> canvas = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">'canvas'</span>) <span class="hljs-keyword">as</span> HTMLCanvasElement;
      <span class="hljs-keyword">const</span> adapter = <span class="hljs-keyword">await</span> navigator.gpu?.requestAdapter();
      <span class="hljs-keyword">const</span> device = <span class="hljs-keyword">await</span> adapter?.requestDevice();
      <span class="hljs-keyword">const</span> context = canvas.getContext(<span class="hljs-string">'webgpu'</span>);

      <span class="hljs-keyword">const</span> devicePixelRatio = <span class="hljs-built_in">window</span>.devicePixelRatio;
      canvas.width = canvas.clientWidth * devicePixelRatio;
      canvas.height = canvas.clientHeight * devicePixelRatio;
      <span class="hljs-keyword">const</span> presentationFormat = navigator.gpu.getPreferredCanvasFormat();

      context.configure({
        device,
        <span class="hljs-attr">format</span>: presentationFormat,
      });

      <span class="hljs-comment">// ---- 2. Define data ----</span>
      <span class="hljs-comment">// data definition and GPUBuffer creation</span>
      <span class="hljs-keyword">let</span> triangle = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>([
           <span class="hljs-number">0.0</span>,  <span class="hljs-number">0.5</span>, 
          <span class="hljs-number">-0.5</span>, <span class="hljs-number">-0.5</span>, 
           <span class="hljs-number">0.5</span>, <span class="hljs-number">-0.5</span>, 
        ]);
      <span class="hljs-keyword">const</span> vertexBuffer = device.createBuffer({
          <span class="hljs-attr">size</span>:triangle.byteLength,
          <span class="hljs-attr">usage</span>: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST
      });

      <span class="hljs-comment">// write actual data into the buffer</span>
      <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>(vertexBuffer.getMappedRange()).set(triangle);
      vertexBuffer.unmap();


      <span class="hljs-comment">// ---- 3. Renderpipeline Creation ----</span>
      <span class="hljs-comment">// create a renderpipeline with automatic layout detection</span>
      <span class="hljs-comment">// explicitly define the input of the vertex stage as a buffer of 2D float vectors</span>
      <span class="hljs-keyword">const</span> pipeline = device.createRenderPipeline({
        <span class="hljs-attr">layout</span>: <span class="hljs-string">'auto'</span>,
        <span class="hljs-attr">vertex</span>: {
          <span class="hljs-attr">module</span>: device.createShaderModule({
            <span class="hljs-attr">code</span>: triangleVertWGSL,
          }),
          <span class="hljs-attr">buffers</span>: [
              {
                  <span class="hljs-attr">arrayStride</span>: <span class="hljs-number">2</span>*<span class="hljs-number">4</span>,
                  <span class="hljs-attr">attributes</span>:[
                  {
                      <span class="hljs-attr">shaderLocation</span>:<span class="hljs-number">0</span>,
                      <span class="hljs-attr">offset</span>:<span class="hljs-number">0</span>,
                      <span class="hljs-attr">format</span>: <span class="hljs-string">'float32x2'</span>
                  }]
              }]
        },
        <span class="hljs-attr">fragment</span>: {
          <span class="hljs-attr">module</span>: device.createShaderModule({
            <span class="hljs-attr">code</span>: redFragWGSL,
          }),
          <span class="hljs-attr">targets</span>: [
            {
              <span class="hljs-attr">format</span>: presentationFormat,
            },
          ],
        },
        <span class="hljs-attr">primitive</span>: {
          <span class="hljs-attr">topology</span>: <span class="hljs-string">'triangle-list'</span>,
        },
      });

      <span class="hljs-comment">// ---- 4. Renderloop ----</span>

      <span class="hljs-comment">/**
       * This function is called each frame
       */</span>
      <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">frame</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-comment">// create a commandEncoder to collect all GPU commands for the current frame </span>
        <span class="hljs-keyword">const</span> commandEncoder = device.createCommandEncoder();
        <span class="hljs-keyword">const</span> textureView = context.getCurrentTexture().createView();

        <span class="hljs-comment">// create a descriptor to define how data is treated in the renderpass</span>
        <span class="hljs-keyword">const</span> renderPassDescriptor: GPURenderPassDescriptor = {
          <span class="hljs-attr">colorAttachments</span>: [
            {
              <span class="hljs-attr">view</span>: textureView,
              <span class="hljs-attr">clearValue</span>: [<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>], <span class="hljs-comment">// Clear to transparent</span>
              loadOp: <span class="hljs-string">'clear'</span>,
              <span class="hljs-attr">storeOp</span>: <span class="hljs-string">'store'</span>,
            },
          ],
        };

        <span class="hljs-comment">// start to record GPU commands</span>
        <span class="hljs-keyword">const</span> passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
        <span class="hljs-comment">// set the pipeline which includes for example what shader the triangle should use</span>
        passEncoder.setPipeline(pipeline);
        <span class="hljs-comment">// draw one triangle from 3 vertecies </span>
        passEncoder.setVertexBuffer(<span class="hljs-number">0</span>, vertexBuffer);
        passEncoder.draw(<span class="hljs-number">3</span>);
        passEncoder.end();

        device.queue.submit([commandEncoder.finish()]);
        requestAnimationFrame(frame);
      }

      requestAnimationFrame(frame);
      </code></pre>
`);var N=g(W,4);ke(N,()=>`
<pre><code class="lang-wgsl">
      <span class="hljs-comment">// the vertex function is executed for each vertex, in our case three times.</span>
      <span class="hljs-comment">// it takes a 2D vector and returns a 4D vector, normally there would be a converting step from world to camera space</span>
      <span class="hljs-variable">@vertex</span>
      fn main(
        <span class="hljs-variable">@location</span>(<span class="hljs-number">0</span>) <span class="hljs-attribute">position</span>: vec2f 
      ) -&gt; <span class="hljs-variable">@builtin</span>(position) vec4f {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">vec4f</span>(position, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>);
      }

      <span class="hljs-comment">// the fragment function is executed for each pixel to be colored</span>
      <span class="hljs-comment">// here the color is RED (RGBA)</span>
      @<span class="hljs-selector-tag">fragment</span>
      <span class="hljs-selector-tag">fn</span> <span class="hljs-selector-tag">main</span>() <span class="hljs-selector-tag">-</span>&gt; @<span class="hljs-selector-tag">location</span>(<span class="hljs-number">0</span>) <span class="hljs-selector-tag">vec4f</span> {
        <span class="hljs-selector-tag">return</span> <span class="hljs-selector-tag">vec4f</span>(<span class="hljs-number">1.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>);
      }
</code></pre>
`);var V=g(N,28);ke(V,()=>`
<pre><code class="lang-ts">
      class PhysicsCalculationSystem {
        update(
          translates : Map&lt;number, TransformComponent&gt;,
          physicsBodies : Map&lt;number, PhysicsBodyComponent&gt;
        ){
          <span class="hljs-keyword">for</span>(<span class="hljs-built_in">var</span> [id, physicsBody] of physicsBodies) {
            <span class="hljs-built_in">let</span> <span class="hljs-built_in">translate</span> = translates.<span class="hljs-built_in">get</span>(id);

            <span class="hljs-keyword">if</span>(!<span class="hljs-built_in">translate</span>){
              continue;
            }

            <span class="hljs-built_in">translate</span>.<span class="hljs-built_in">position</span> = <span class="hljs-built_in">translate</span>.<span class="hljs-built_in">position</span> + physicsBody.velocity;
          }
        }
      }
</code></pre>
`);var T=g(V,12);ke(T,()=>`
<pre><code class="lang-ts">
      <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">MeshRenderComponent</span> </span>{
          material: Material;

          <span class="hljs-comment">// mesh data</span>
          meshVAO: GPUBuffer;
          vertexCount: number;

          <span class="hljs-comment">// indexed rendering </span>
          indexed: boolean
          indexBuffer: GPUBuffer | <span class="hljs-literal">null</span>;
          indexCount: number;

          <span class="hljs-keyword">constructor</span>(material: Material,
              meshVAO: GPUBuffer,
              vertexCount: number,
              indexed: boolean = <span class="hljs-literal">false</span>,
              indexBuffer: GPUBuffer | <span class="hljs-literal">null</span> = <span class="hljs-literal">null</span>,
              indexCount: number = <span class="hljs-number">0</span>) {

              <span class="hljs-keyword">this</span>.material = material;
              <span class="hljs-keyword">this</span>.meshVAO = meshVAO;
              <span class="hljs-keyword">this</span>.vertexCount = vertexCount;

              <span class="hljs-comment">// optional indexed rendering</span>
              <span class="hljs-keyword">this</span>.indexed = indexed;
              <span class="hljs-keyword">this</span>.indexBuffer = indexBuffer;
              <span class="hljs-keyword">this</span>.indexCount = indexCount;
          }
      }
      </code></pre>
`);var J=g(T,6);ke(J,()=>`
<pre><code class="lang-ts">
      <span class="hljs-attribute">update(commandEncoder</span>: GPUCommandEncoder,
          <span class="hljs-attribute">instanceBuffer</span>: GPUBuffer,
          <span class="hljs-attribute">opaqueBatches</span>: RenderBatch[],
          <span class="hljs-attribute">currentTextureView</span>: GPUTextureView,
          <span class="hljs-attribute">dsAttachment</span>: GPURenderPassDepthStencilAttachment): void {

      <span class="pf">    const renderPassDescriptor: GPURenderPassDescriptor = {
              colorAttachments: [{
                  view: currentTextureView,
                  <span class="hljs-built_in">load</span>Op: 'clear',
                  storeOp: 'store',
                  clearValue: { r: <span class="hljs-number">0.1</span>, g: <span class="hljs-number">0.2</span>, b: <span class="hljs-number">0.3</span>, a: <span class="hljs-number">1.0</span> },
              }],

              depthStencilAttachment: {
                  view: dsAttachment.view,
                  stencilLoadOp: 'clear',
                  stencilStoreOp: 'store',
                  depthLoadOp: 'clear',
                  depthStoreOp: 'store',
                  depthClearValue: <span class="hljs-number">1.0</span>,
              },
          };

          const <span class="hljs-built_in">pass</span>Encoder = commandEncoder.beginRenderPass(renderPassDescriptor);

          <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">0</span>, this.<span class="hljs-keyword">global</span>BindGroup);

          // <span class="hljs-literal">all</span> batches
          <span class="hljs-keyword">for</span> (const batch of opaqueBatches) {

              if (batch.indexed &amp;&amp; batch.indexBuffer) {
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>Pipeline(batch.pipeline);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">1</span>, batch.constantsBindGroup);

                  if (batch.textureBindGroup) {
                      <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">2</span>, batch.textureBindGroup);
                  }

                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">0</span>, batch.meshBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">1</span>, instanceBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>IndexBuffer(batch.indexBuffer, GPUIndexFormat.Uint32);

                  <span class="hljs-built_in">pass</span>Encoder.drawIndexed(batch.indexCount, batch.instanceCount, <span class="hljs-number">0</span>, batch.instanceOffset);
              }
              else {
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>Pipeline(batch.pipeline);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">1</span>, batch.constantsBindGroup);

                  if (batch.textureBindGroup) {
                      <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>BindGroup(<span class="hljs-number">2</span>, batch.textureBindGroup);
                  }

                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">0</span>, batch.meshBuffer);
                  <span class="hljs-built_in">pass</span>Encoder.<span class="hljs-built_in">set</span>VertexBuffer(<span class="hljs-number">1</span>, instanceBuffer);

                  <span class="hljs-built_in">pass</span>Encoder.draw(batch.vertexCount, batch.instanceCount, <span class="hljs-number">0</span>, batch.instanceOffset);
              }
          }

          <span class="hljs-built_in">pass</span>Encoder.end();
      }</span>
</code></pre>
`);var S=g(J,18);ke(S,()=>`
<pre><code class="lang-ts"><span class="hljs-comment">
      // ##### COMPUTE PASS #####</span>
      <span class="hljs-keyword">let</span> commandEncoder = <span class="hljs-keyword">this</span>.device.createCommandEncoder();
      <span class="hljs-keyword">const</span> computePass = commandEncoder.beginComputePass({
          <span class="hljs-attr">label</span>: <span class="hljs-string">'Quad Subdivision Compute Pass'</span>,
      });

      computePass.setPipeline(<span class="hljs-keyword">this</span>.computePipeline);
      computePass.setBindGroup(<span class="hljs-number">0</span>, bindGroup);

      <span class="hljs-comment">// dispatch enough threads to handle all points on the grid</span>
      <span class="hljs-keyword">const</span> workgroupSize = <span class="hljs-number">8</span>;
      <span class="hljs-keyword">const</span> dispatchX = <span class="hljs-built_in">Math</span>.ceil(<span class="hljs-keyword">this</span>.GRID_SIZE_X / workgroupSize);
      <span class="hljs-keyword">const</span> dispatchY = <span class="hljs-built_in">Math</span>.ceil(<span class="hljs-keyword">this</span>.GRID_SIZE_Y / workgroupSize);
      computePass.dispatchWorkgroups(dispatchX, dispatchY);
      computePass.end();
      <span class="hljs-comment">// ##### END COMPUTE PASS #####</span>

      commandEncoder.copyBufferToBuffer(
          <span class="hljs-keyword">this</span>.outputPointsBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackPointsBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackPointsBuffer.size
      );

      commandEncoder.copyBufferToBuffer(
          <span class="hljs-keyword">this</span>.outputIndexBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackIndexBuffer,
          <span class="hljs-number">0</span>,
          <span class="hljs-keyword">this</span>.readbackIndexBuffer.size
      );

      <span class="hljs-keyword">this</span>.device.queue.submit([commandEncoder.finish()]);

      <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.readbackPointsBuffer.mapAsync(GPUMapMode.READ);
      <span class="hljs-keyword">await</span> <span class="hljs-keyword">this</span>.readbackIndexBuffer.mapAsync(GPUMapMode.READ);

      <span class="hljs-keyword">const</span> arrayBuffer = <span class="hljs-keyword">this</span>.readbackPointsBuffer.getMappedRange();
      <span class="hljs-keyword">const</span> arrayBufferIndex = <span class="hljs-keyword">this</span>.readbackIndexBuffer.getMappedRange();

      <span class="hljs-keyword">const</span> resultPoints = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Float32Array</span>(arrayBuffer).slice();
      <span class="hljs-keyword">const</span> resultIndex = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Uint32Array</span>(arrayBufferIndex).slice();

      <span class="hljs-keyword">this</span>.readbackPointsBuffer.unmap();
      <span class="hljs-keyword">this</span>.readbackIndexBuffer.unmap();
</code></pre>
`);var Z=g(S,4),H=m(Z);p(Z);var K=g(Z,4),se=m(K);p(K);var q=g(K,4),ae=m(q);p(q),De(28),p(o);var fe=g(o,4);{var ye=re=>{var te=Ir();U(re,te)},ve=re=>{var te=xr(),B=g(Ze(te),6);Fe(B,D=>M(s,D),()=>r(s)),U(re,te)};he(fe,re=>{r(a)?re(ve,!1):re(ye)})}p(l),p(i),ce(()=>{z(c,"src",ur),be(A,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"100%":"80%"};`),z(A,"src",pr),be(v,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"100%":"80%"};`),z(v,"src",yr),be(y,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"70%":"30%"};`),z(y,"src",br),be(x,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"70%":"30%"};`),z(x,"src",vr),be(H,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"100%":"80%"};`),z(H,"src",gr),be(se,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"100%":"80%"};`),z(se,"src",fr),be(ae,`display: block; margin-left: auto; margin-right: auto; width: ${pe.isMobile?"100%":"80%"};`),z(ae,"src",mr)}),U(t,i),xe()}Oe(["click"]);const Gr={id:"THEPOND",image:po,title:"The Pond",subtitle:"Just some fishing",tags:["webgpu","game"].toSorted(),link:`${st}/experiments/thepond`,component:Mr,type:Ue.Executable},Er="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAIf2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjUtMTAtMTBUMTE6NTA6NDMrMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjUtMTAtMTBUMTE6NTE6MDUrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI1LTEwLTEwVDExOjUxOjA1KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpiN2FlMWI5Ny1lM2UzLWMwNGItOTQ3MS0zZTY5NmU0NDJiOGIiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MmQ4NjFkMi1jNDQ2LWE0NDItOTQxMi1hOTM2Y2Q4YjYwYTQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3N2ViMmUwZS0xODA3LTIxNGUtOGZmNy1mOTVlM2ZjNzdjZWIiIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3ZWIyZTBlLTE4MDctMjE0ZS04ZmY3LWY5NWUzZmM3N2NlYiIgc3RFdnQ6d2hlbj0iMjAyNS0xMC0xMFQxMTo1MDo0MyswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MmNlMzBhMjItYjk2Ni1iMTQ4LTk1NWYtZTBjMDdkYzZhMDUzIiBzdEV2dDp3aGVuPSIyMDI1LTEwLTEwVDExOjUxOjA1KzAyOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImRlcml2ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImNvbnZlcnRlZCBmcm9tIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3AgdG8gaW1hZ2UvcG5nIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiN2FlMWI5Ny1lM2UzLWMwNGItOTQ3MS0zZTY5NmU0NDJiOGIiIHN0RXZ0OndoZW49IjIwMjUtMTAtMTBUMTE6NTE6MDUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJjZTMwYTIyLWI5NjYtYjE0OC05NTVmLWUwYzA3ZGM2YTA1MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3N2ViMmUwZS0xODA3LTIxNGUtOGZmNy1mOTVlM2ZjNzdjZWIiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3N2ViMmUwZS0xODA3LTIxNGUtOGZmNy1mOTVlM2ZjNzdjZWIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6+TyVhAAAFmklEQVRYw61Xe2xTdRT+7m072o2HEBS2aRgkoBECjBmJFoi8ggmioPGtiYuAkgUIDJlhQuQxCGh4JAhDYAE0Ev/QLApGE0QT7R+EjcHYUIg6g7KO12SDbW1v2+s553dvV6Bd2+lNTu7t/T3Od77znXN/1UzTRG+uMaO98Qu1hkZfr/bRMgEQ73TBIR8cGm1Atvs1b2wOAdH+dwC241f2+9DHAWSROXXEAPAWEbJwFNjzujcjIEkBVDWQE9piywte8+lKH9zk1O1EDEDBADXvSqcCwM4NslAECJIdKk4PiDPZQDAMbH3Va87a6QMFC11TxlHn9wO+OXEfQgYwd9IVtHapNVFTjfO8l/b5EAgr9noCkZQBXjhluw/ZLsDjVNEzCw/0B05fGIoIcc5RRyjaWY9cljV/31QMsOOAde8iq3o2F62tfi1tBuLFxvhiBuUg260jQuGGIxAgP54ZImBmFCogjdduX5eXOyIzDTCAog98ErnHZoCiH5JDqblVQM6iGDr4Ihy60klDU24MDNsT4y7jpF+xwAx0Uap+XuZNqAc9kfNRFT7JpxjTHFUqZ3F5srKQTcbPbQGglezhAj8KR/qFmWyPLkzxfF7H66Nmwt6RPAWG5TBsW1Qpf5RnBkU0mCILoI0AcNRchpc71PyHhjVLedb41Roxaw++ataU3CXKhAA4z/YGDIaVzVWR5y5AINqBzkgHBkZm4I/gMXHYHlRRXmhVa3g9m2Gt53eKby09EQYtBXOOHfScQ7NK87chhOEI6J1kHehy3cKgrJcFzK/mVwLkr/Y4ANbdsIBomq7o6gkA02OWqvp16arbsUhYTH1wL5mBHASw6dIiGS/OLRcwg1zzhZmoeRjnr3c3JBvE2TLVlAREKgY4ele4u9XmUBVsvP9TyrcDTocTq5qKpbR0Gt/XXCFA3hpaIcycsOpfqI90d0W+Tm1+B6ZhpAYg1FvdjAnrTxtcunYDOe4+cGe5ZENWt27pgq9d/nIB8mdbt2gZBI932j4lBakZ0O7Z6TXbF/skXXl9gTn/lOK3gAf9PB4c0MtF7TZAW1PsmEV4auUUDBk1By3nqzFivU96gH+tF3XbV0v0ReVbxUdKEfLCkQPpg1M3G+c82ehvWTBfjdn60CyWuMoa3/Xi259+QJjCN8IlmDdT5f307g1Eh6FylqoV86GChCh5ZBovNF9CX7cHfSn6648fR+tN5ZzNYQnU/hx/ffx7PDl5quxTsmonlq2rwkSjnsY1mGSFpRvvij5hJ+QmMexjL2qprQdmnkbT1Rb83tIsOeV6Z2sju0Ed8Eaw2+ZMm47a9UtRs24JirPOIxgMYv6HlZL38YvfT+i8588xsVDTAhTNa5Jcn73aTb3DPozEMUCNEkWrd0i++cWuZYtQv38Lxr658jbndx7dEiaGWXiwyisgThCIk2QdlMZbbCHgJlk7mWOrF+cerccvE+sxfMRwVK5YiOUHv4RjgDqtmOHInfumzwCD4MbU+IYPEU1pQtSvK/Vzmho+3x2bv33vXhKgibenPYdDdS0KQCTco/OkDNhdsXZjKUYf8EqJsQbsQwY7/2xDWWyuSaeSZ6bTh4oGDZoYCoWwedJjhDrc+zMhVwPvXbftPWhOpwiJ2WBA8ZGzc1CkF784htnVR+Td0blPIX9aEcYvWRvLfzIGUgEQH2e4lp0ujFtQdrdzipLvQnfYuvNvel+4vCIlAL0HDdimjVlYJiyc/WSHkryV37qD1XIfW1wacz6+ZE3azjP6YyIHicMfiQrHvLhIaLYvm3qbfuu3lkqAPVZBsqqwgXcahvn80e9iTvOmTlDUcwqqj6TlvDd/zeJ/mjYLMedE/YSVm9OiPmMGkl3svHDpOnmu3bQC6UbeKwbu1IRQP3msVIEVeUbR/1cAsL7EtznOlIF/AbXNKYj4+fo6AAAAAElFTkSuQmCC";var Dr=Y('<button class=" button3d p-3 mt-2"><div>Download Atlas (PNG)</div></button> <button class="button3d p-3 mt-2"><div>Copy Text to Clipboard</div></button>',1),Rr=Y('<div class="flex w-full"><div><h3 class="font-medium mt-4">Preview:</h3> <img alt="Generated Font Atlas" class="ui95-inset-panel p-2 image-rendering-pixelated svelte-8yf5dw" style="border: 2px solid #ccc; max-width: 100%; height: auto;"/></div> <div class="w-full m-10"><textarea class="ui95-textinput w-full h-full"></textarea></div></div>'),jr=Y('<p>Click "Generate Font Atlas" to generate your atlas</p>'),Pr=Y(`<main class="flex mx-[1px]"><div class="min-h-screen p-8 space-y-10 overflow-hidden w-full"><div class="space-y-10"><h1 class="text-3xl font-bold text-center mb-8">Font Atlas Creator</h1> <section><p>With this tool you can very easily create your own font atlas used for
          creating text in games!</p></section> <section><h2 class="text-xl svelte-8yf5dw">Settings</h2> <div class="space-y-4"><div><label for="width-slider" class="block font-medium"> </label> <input id="width-slider" type="range" min="10" max="100" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"/></div> <div><label for="font-family" class="block font-medium mb-1">Font Family</label> <input id="font-family" type="text" placeholder="Arial, sans-serif" class="ui95-textinput px-1 w-full"/></div> <div><label for="characters" class="block font-medium mb-1">Characters</label> <input id="characters" type="text" placeholder="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890" class="ui95-textinput px-1 w-full"/></div></div></section> <section class="space-y-4 flex-col w-full"><h2 class="text-xl svelte-8yf5dw">Generate & Preview</h2> <div><button class="button3d p-3"><div>Generate Font Atlas</div></button> <!></div> <canvas class="hidden"></canvas> <!></section></div></div></main>`);function Br(t){let e=ee(32),a=ee("Arial, sans-serif"),s=ee("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"),n=ee(),i=ee(""),l=ee("");function o(){if(!r(n))return;const T=r(n).getContext("2d");if(!T)return;const J=Math.ceil(Math.sqrt(r(s).length)),S=Math.ceil(r(s).length/J),Z=r(e),H=J*Z,K=S*Z;let se=[];ot(n,r(n).width=H),ot(n,r(n).height=K),T.clearRect(0,0,H,K),T.font=`${r(e)}px ${r(a)}`,T.textAlign="center",T.textBaseline="middle",T.fillStyle="white";for(let q=0;q<r(s).length;q++){const ae=r(s)[q],fe=q%J,ye=Math.floor(q/J),ve=fe*Z,re=ye*Z,te=ve+Z/2,B=re+Z/2;T.fillText(ae,te,B);const D=ve/H,O=re/K,Q=(ve+Z)/H,X=(re+Z)/K;let ne={char:ae,uv:[D,O,Q,X],width:Z,height:Z,advance:Z};se.push(ne)}M(i,r(n).toDataURL("image/png")),M(l,JSON.stringify(se))}function c(){if(!r(i)){alert("First, generate the Atlas.");return}const T=document.createElement("a");T.download="font_atlas.png",T.href=r(i),document.body.appendChild(T),T.click(),document.body.removeChild(T)}var d=Pr(),h=m(d),f=m(h),A=g(m(f),4),u=g(m(A),2),v=m(u),k=m(v),y=m(k);p(k);var I=g(k,2);Me(I),p(v);var x=g(v,2),w=g(m(x),2);Me(w),p(x);var b=g(x,2),G=g(m(b),2);Me(G),p(b),p(u),p(A);var R=g(A,2),F=g(m(R),2),_=m(F),E=g(_,2);{var C=T=>{var J=Dr(),S=Ze(J),Z=g(S,2);Re("click",S,c),Re("click",Z,()=>navigator.clipboard.writeText(r(l))),U(T,J)};he(E,T=>{r(i)&&T(C)})}p(F);var j=g(F,2);Fe(j,T=>M(n,T),()=>r(n));var W=g(j,2);{var N=T=>{var J=Rr(),S=m(J),Z=g(m(S),2);p(S);var H=g(S,2),K=m(H);Ns(K),p(H),p(J),ce(()=>z(Z,"src",r(i))),we(K,()=>r(l),se=>M(l,se)),U(T,J)},V=T=>{var J=jr();U(T,J)};he(W,T=>{r(i)?T(N):T(V,!1)})}p(R),p(f),p(h),p(d),ce(()=>me(y,`Cell width: ${r(e)??""}px`)),we(I,()=>r(e),T=>M(e,T)),we(w,()=>r(a),T=>M(a,T)),we(G,()=>r(s),T=>M(s,T)),Re("click",_,o),U(t,d)}const Zr={id:"FONTATLAS",image:Er,title:"Font Atlas Generator",subtitle:"Create a font atlas for your game",tags:["game"].toSorted(),link:`${st}/experiments/fontAtlas`,component:Br,type:Ue.Executable},Tr="data:image/x-icon;base64,AAABAAMAICAQAAEABADoAgAANgAAACAgAgABAAEAMAEAAB4DAAAQEBAAAQAEACgBAABOBAAAKAAAACAAAABAAAAAAQAEAAAAAACAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAIAAAACAgACAAAAAgACAAICAAADAwMAAgICAAAAA/wAA/wAAAP//AP8AAAD/AP8A//8AAP///wAAAAiIiIiIiIiIiIiIiIgAAACIiIiIiIiIiIiIiIiIgAAwAAAAAAAAAAAAAAAIiIgDu7u7u7u7u7u7u7u7cIiIO7u7u7u7u7u7u7u7u7cIiDu7u7u7u7u7u7u7u7u7CIg7u7u7u7u3AHu7u7u7uwiAO7u7u7u7sAALu7u7u7cIgAO7u7u7u7AAC7u7u7uwiAADu7u7u7u3AHu7u7u7cIgAADu7u7u7u7u7u7u7uwiAAAA7u7u7u7sLu7u7u7cIgAAAA7u7u7u3B7u7u7uwiAAAAAO7u7u7swO7u7u7cIgAAAAAO7u7u7AAu7u7uwiAAAAAADu7u7twAHu7u7cIgAAAAAADu7u7MAALu7uwiAAAAAAAA7u7uwAAC7u7cIgAAAAAAAA7u7sAAAu7uwiAAAAAAAAAO7u7AAALu7cIgAAAAAAAAAO7uwAAC7uwiAAAAAAAAAADu7sAAAu7cIgAAAAAAAAAADu7cAB7uwiAAAAAAAAAAAA7u7u7u7cIgAAAAAAAAAAAA7u7u7uwiAAAAAAAAAAAAAO7u7u7cIgAAAAAAAAAAAAAO7u7uwiAAAAAAAAAAAAAADu7u7cIgAAAAAAAAAAAAAADu7uwiAAAAAAAAAAAAAAAA7u7cIAAAAAAAAAAAAAAAAA7twAAAAAAAAAAAAAAAAAAAzMAAAAAAAAAAPgAAAPwAAABwAAAAIAAAAAAAAAAAAAAAAAAAAEAAAABgAAAA4AAAAPAAAAHwAAAB+AAAA/gAAAP8AAAH/AAAB/4AAA/+AAAP/wAAH/8AAB//gAA//4AAP//AAH//wAB//+AA///gAP//8AH///AB///4A///+Af///wf///+P//KAAAACAAAABAAAAAAQABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAP///wH///+B////wf/z/8H/4f+A/+H/gP/z/wB///8Af/f+AD/3/gA/9/wAH+P8AB/j+AAP4/gAD8HwAAfB8AAHweAAA8HgAAPBwAAB48AAAf+AAAD/gAAA/wAAAH8AAAB+AAAAPgAAADwAAAAYAAAAAAAD//////////8AAAB+AAAAPAAAABwAAAAcAAAAHAAAAB4AAAA+AAAAPwAAAH8AAAB/gAAA/4AAAP/AAAH/wAAB/+AAA//gAAP/8AAH//AAB//4AA//+AAP//wAH//8AB///gA///4AP///AH///wB///+A////gP///8H////j//ygAAAAQAAAAIAAAAAEABAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACAAAAAgIAAgAAAAIAAgACAgAAAwMDAAICAgAAAAP8AAP8AAAD//wD/AAAA/wD/AP//AAD///8AAIiIiIiIiIADAAAAAAAAiDu7u7u7u7sIO7u7gIu7uwg7u7uAi7u7AAO7u7u7u7CAA7u7sLu7sAAAO7swO7sIAAA7uwALuwAAAAO7AAuwgAAAA7sAC7AAAAAAO7C7CAAAAAA7u7sAAAAAAAO7sIAAAAAAA7uwAAAAAAAAMzAAAADAAQAAgAAAAAAAAAAAAAAAAAEAAIABAACAAwAAwAMAAMAHAADgBwAA4A8AAPAPAADwHwAA+B8AAPg/AAD8fwAA";var Cr=(t,e)=>{e.windowEvents.onClose(e.programID)},Ur=Y('<div class="flex flex-col w-full h-full space-y-3 items-center"><div class="flex space-x-6 m-3 justify-center items-center"><img class="w-10 h-10" alt="error icon"/> <p>The program was not found.<br/>Only open programs from the desktop.</p></div> <div class="flex justify-center h-8 w-30"><button class="flex items-center justify-center h-full w-full button3d leading-5"><div class="h-full">Ok</div></button></div></div>');function Nr(t,e){Ie(e,!0);var a=Ur(),s=m(a),n=m(s);De(2),p(s);var i=g(s,2),l=m(i);l.__click=[Cr,e],p(i),p(a),ce(()=>z(n,"src",Tr)),U(t,a),xe()}Oe(["click"]);const Ma={image:Mn,tags:[].toSorted(),component:Nr};var Sr=Y('<div class="h-full w-full flex flex-col overflow-hidden absolute"><div id="availableArea" class="relative flex overflow-hidden w-full flex-1"><!> <!></div> <div class="bg-red-500 z-[99999999]"><!></div></div>');function _r(t,e){Ie(e,!0);const a=new Map([["dot","dottify"],["mob","mobilitymodels"],["chx","chexcel"],["pond","thepond"]]),s=new Map;let n=[Oi,Fi,uo,Di,Ni,Zr,Gr];n.forEach(E=>a.set(E.id.toLowerCase(),E.id));let i,l=[],o=oe(We([])),c={onClose:A,onMaximize:u,onMinimize:v,onChangeSize:k,onChangePosition:y},d={setWindowData:I,setfocus:x};l=n.map((E,C)=>(s.set(E.id.toLowerCase(),C),{id:C,image:E.image,title:E.title,component:E.component,windowData:null,windowHints:null,type:E.type}));function h(E){var C;if(console.log("try to open "+E),a.has(E)){let j=(C=a.get(E))==null?void 0:C.toLowerCase();if(j&&s.has(j)){let W=s.get(j),N=l.find(V=>V.id==W);if(N){let V=null;N.windowHints=V,f(N)}}}else{console.log("could not find  "+E);let j={width:400,height:160};j.resizable=!1,j.disableWindowControl=!0,pe.isMobile&&(j.posX=i.offsetWidth*.05,j.posY=i.offsetHeight*.3,j.width=i.offsetWidth*.9);let W={id:1+Math.max(...l.map(N=>N.id)),image:Ma.image,title:`Could not find Program "${E}"`,windowData:null,component:Ma.component,windowHints:j};f(W)}}function f(E){console.log("openProgram called (id: "+E.id+")"),r(o).find(j=>j.id===E.id)?x(E.id):M(o,[...r(o),E],!0)}function A(E){M(o,r(o).filter(C=>C.id!=E),!0)}function u(E){console.log("maximize called!"),M(o,r(o).map(C=>C.id==E?{...C,windowData:{...C.windowData,maximized:!C.windowData.maximized}}:C),!0)}function v(E){console.log("minimized called!"),M(o,r(o).map(C=>C.id==E?{...C,windowData:{...C.windowData,minimized:!0,hasfocus:!1}}:C),!0)}function k(E,C,j){var N;let W=r(o).find(V=>V.id==E);console.log("SizeChanged: "+(W==null?void 0:W.title)),W&&(console.log("	from: ",(N=W.windowData)==null?void 0:N.width),console.log("	to  : ",C)),M(o,r(o).map(V=>V.id==E?{...V,windowData:{...V.windowData,width:C,height:j}}:V),!0)}function y(E,C,j){console.log("PositionChanged: "+E),M(o,r(o).map(W=>W.id===E?{...W,windowData:{...W.windowData,pos_x:C,pos_y:j}}:{...W}),!0)}function I(E,C){console.log("setWindowData called"),M(o,r(o).map(j=>j.id===E?{...j,windowData:C}:j),!0)}function x(E){console.log("focused called, new focus: "+E);let C=Math.max(0,...r(o).filter(j=>{var W;return(W=j.windowData)==null?void 0:W.zindex}).map(j=>j.windowData.zindex));M(o,r(o).map(j=>j.id===E?{...j,windowData:{...j.windowData,hasfocus:!0,minimized:!1,zindex:++C}}:{...j,windowData:{...j.windowData,hasfocus:!1}}),!0)}at(()=>{console.log("the component has mounted"),setTimeout(()=>{var E;(E=e.toOpen)==null||E.forEach(C=>{h(C.toLowerCase())})},1)});var w=Sr(),b=m(w),G=m(b);Xn(G,{get availablePrograms(){return l},openProgram:f});var R=g(G,2);ni(R,{get openPrograms(){return r(o)},get windowEvents(){return c},get availableArea(){return i},get dataManipulator(){return d}}),p(b),Fe(b,E=>i=E,()=>i);var F=g(b,2),_=m(F);Yn(_,{get openPrograms(){return r(o)},get dataManipulator(){return d},get availablePrograms(){return l},openProgram:f}),p(F),p(w),U(t,w),xe()}var Wr=Y('<div class="w-screen h-[100dvh] overflow-hidden fixed  svelte-f6m40n"><!></div>'),Or=Y(`<p class="svelte-f6m40n">Sorry, this page is only available on desktop because you need a
            mouse!</p>`);function Xr(t,e){Ie(e,!0);let a=oe(We([])),s=oe(!1);const n=new on("min-width: 800px");Ta(()=>{M(a,[...Ss.url.searchParams.keys()],!0),M(s,!0),pe.isMobile=!n.current});var i=et(),l=Ze(i);{var o=c=>{var d=et(),h=Ze(d);{var f=u=>{var v=Wr(),k=m(v);_r(k,{get toOpen(){return r(a)}}),p(v),U(u,v)},A=u=>{var v=Or();U(u,v)};he(h,u=>{n?u(f):u(A,!1)})}U(c,d)};he(l,c=>{r(s)&&c(o)})}U(t,i),xe()}export{Xr as component};
