var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,s=(t,a,n)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[a]=n;import{d as o,u as r,c,a as i,b as l,p as d,e as p,o as u,f as m,r as v,w as f,g as h,t as b,F as y,h as _,i as w,j as x,k as L,l as k,m as j,n as O}from"./vendor.12c2f92f.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const c=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){o(new Error(`Failed to import: ${e}`)),s(i)},onload(){a(self[t].moduleMap[r]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/"),d("data-v-36074bf0");const E={class:"header"},R=i("i",{class:"icon el-icon-s-promotion"},null,-1),g=m(" GitHub");p();var A=o({expose:[],setup(e){const t=r(),a=()=>{window.open("https://github.com/XPoet/vite-vue3-starter")};return(e,n)=>(u(),c("div",E,[i("div",{class:"title",onClick:n[1]||(n[1]=e=>l(t).push("/"))},"Vite2.x + Vue3.x + TypeScript Starter"),i("div",{class:"go-github",onClick:a},[R,g])]))}});A.__scopeId="data-v-36074bf0";var C=o({name:"Nav",setup(){const e=r(),o=v({navList:[{name:"Home",isActive:!1,path:"/"},{name:"Vuex",isActive:!1,path:"/vuex"},{name:"Axios",isActive:!1,path:"/axios"}],navClick(t){e.push(t.path)}}),c=e=>{o.navList.forEach((t=>{const a=t;return a.isActive=a.path===e,a}))};return f((()=>e.currentRoute.value),(e=>{c(e.path)})),h((()=>{e.isReady().then((()=>{c(e.currentRoute.value.path)}))})),((e,o)=>{for(var r in o||(o={}))t.call(o,r)&&s(e,r,o[r]);if(a)for(var r of a(o))n.call(o,r)&&s(e,r,o[r]);return e})({},b(o))}});const M=w();d("data-v-41dc40ad");const P={class:"nav"},U={class:"nav-list"};p();const $=M(((e,t,a,n,s,o)=>(u(),c("aside",P,[i("ul",U,[(u(!0),c(y,null,_(e.navList,((t,a)=>(u(),c("li",{class:["nav-item flex-center",{active:t.isActive}],key:a,onClick:a=>e.navClick(t)},x(t.name),11,["onClick"])))),128))])]))));C.render=$,C.__scopeId="data-v-41dc40ad";var H=o({name:"Main",components:{Header:A,Nav:C}});const I=w();d("data-v-6c3cdf52");const V={class:"main-container"},S={class:"top"},F={class:"bottom"},N={class:"left"},T={class:"right"},q={class:"content"};p();const B=I(((e,t,a,n,s,o)=>{const r=L("Header"),l=L("Nav"),d=L("router-view");return u(),c("main",V,[i("div",S,[i(r)]),i("div",F,[i("div",N,[i(l)]),i("div",T,[i("div",q,[i(d)])])])])}));H.render=B,H.__scopeId="data-v-6c3cdf52";var D=o({name:"App",components:{Main:H}});let G;D.render=function(e,t,a,n,s,o){const r=L("Main");return u(),c(r)};const W={},X={data:()=>({a:"",b:"",c:""})};X.render=function(e,t,a,n,s,o){return u(),c("div")};const z=[{path:"/",name:"Home",component:X},{path:"/vuex",name:"Vuex",component:{}},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===G){const e=document.createElement("link").relList;G=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in W)return;W[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${a}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":G,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./axios.a8661a2c.js")),["./assets/axios.a8661a2c.js","./assets/vendor.12c2f92f.js"])}],J=k({history:j(),routes:z});O(D).use(J).mount("#app");
