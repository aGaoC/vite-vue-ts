import{d as e,r as t,c as o,a,t as r,F as n,w as s,p as d,b as l,e as c,f as u,o as i,g as p,h as m,i as v,j as h}from"./vendor.b8ec1473.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(o){const a=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((o,n)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return o(self[t].moduleMap[s]);const d=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){n(new Error(`Failed to import: ${e}`)),r(l)},onload(){o(self[t].moduleMap[s]),r(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("assets/");var f=e({name:"HelloWorld",props:{msg:{type:String,required:!0}},setup:()=>({count:t(0)})});const g=s();d("data-v-48294d8a");const _=l('<p data-v-48294d8a> Recommended IDE setup: <a href="https://code.visualstudio.com/" target="_blank" data-v-48294d8a>VSCode</a> + <a href="https://marketplace.visualstudio.com/items?itemName=octref.vetur" target="_blank" data-v-48294d8a> Vetur </a> or <a href="https://github.com/johnsoncodehk/volar" target="_blank" data-v-48294d8a>Volar</a> (if using <code data-v-48294d8a>&lt;script setup&gt;</code>) </p><p data-v-48294d8a>See <code data-v-48294d8a>README.md</code> for more information.</p><p data-v-48294d8a><a href="https://vitejs.dev/guide/features.html" target="_blank" data-v-48294d8a> Vite Docs </a> | <a href="https://v3.vuejs.org/" target="_blank" data-v-48294d8a>Vue 3 Docs</a></p>',3),b=a("p",null,[c(" Edit "),a("code",null,"components/HelloWorld.vue"),c(" to test hot module replacement. ")],-1);u();const k=g(((e,t,s,d,l,c)=>(i(),o(n,null,[a("h1",null,r(e.msg),1),_,a("button",{onClick:t[1]||(t[1]=t=>e.count++)},"count is: "+r(e.count),1),b],64))));f.render=k,f.__scopeId="data-v-48294d8a";var E=e({name:"App",components:{HelloWorld:f}});const j=a("img",{alt:"Vue logo",src:"./assets/logo.03d6d6da.png"},null,-1);let L;E.render=function(e,t,r,s,d,l){const c=p("HelloWorld");return i(),o(n,null,[j,a(c,{msg:"Hello Vue 3 + TypeScript + Vite"})],64)};const V={},y={data:()=>({a:"",b:"",c:""})};y.render=function(e,t,a,r,n,s){return i(),o("div")};const R=[{path:"/",name:"Home",component:y},{path:"/vuex",name:"Vuex",component:{}},{path:"/axios",name:"Axios",component:()=>function(e,t){if(!t)return e();if(void 0===L){const e=document.createElement("link").relList;L=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in V)return;V[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":L,t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((e,t)=>{a.addEventListener("load",e),a.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>__import__("./axios.68a8bf04.js")),["./assets/axios.68a8bf04.js","./assets/vendor.b8ec1473.js"])}],w=m({history:v(),routes:R});h(E).use(w).mount("#app");
