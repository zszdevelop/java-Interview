import{f as c,g as r,s as p,h as d,i as v,_ as m,j as e,T as w}from"./app.657c5dd1.js";var g=c({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(t){const o=r(!0),s=p(null),l=r(null),i=d(()=>{return a=t.settings,w({},{autoResize:!0,showCode:!1,showCompileOutput:!1,showImportMap:!0,clearConsole:!1,layout:"vertical",ssr:!1},JSON.parse(decodeURIComponent(a)));var a}),n=r(i.value.showCode||!1);return v(async()=>{await(async()=>{const{ReplStore:a,Repl:u}=await m(()=>import("./vue-repl.def28dc9.js"),["assets/vue-repl.def28dc9.js","assets/app.657c5dd1.js"]);s.value=u,l.value=new a({serializedState:decodeURIComponent(t.files),showOutput:!0}),i.value.vueVersion&&await l.value.setVueVersion(i.value.vueVersion)})(),o.value=!1}),()=>[e("div",{class:"vue-playground-wrapper"},[e("div",{class:"title-wrapper"},[t.title?e("div",{class:"title"},decodeURIComponent(t.title)):null,e("div",{class:"actions"},[e("action",{class:"button",innerHTML:'<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M240.496 272c-13.504 0-25.664 5.632-34.384 14.608l-.048-.048-189.216 189.2A47.664 47.664 0 0 0 0 512c0 13.504 5.616 25.664 14.592 34.368l-.032.064 192 192 .048-.064A47.68 47.68 0 0 0 240 752a48 48 0 0 0 48-48c0-12.992-5.216-24.752-13.616-33.392l.048-.048-158.304-158.32 157.808-157.808-.048-.048A47.808 47.808 0 0 0 288.496 320a48 48 0 0 0-48-48zm784 240c0-14.56-6.608-27.44-16.848-36.24l-189.216-189.2-.032.048A47.872 47.872 0 0 0 784 272a48 48 0 0 0-48 48c0 13.504 5.632 25.664 14.608 34.384l-.048.048L908.368 512.24l-158.32 158.32.048.048A47.808 47.808 0 0 0 736.48 704a48 48 0 0 0 48 48c12.992 0 24.752-5.216 33.408-13.632l.048.064 192-192-.048-.064A47.68 47.68 0 0 0 1024.496 512zM640 128c-20.8 0-38.496 13.232-45.168 31.712L339.2 830.784a48 48 0 0 0 89.968 33.504L684.8 193.216A48 48 0 0 0 640 128z"/></svg>',onClick:()=>{n.value=!n.value}})])]),e("div",{class:["repl-container",n.value?"show-code":"hide-code"]},[o.value?e("div",{class:["preview-loading-wrapper"],innerHTML:'<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>'}):null,s.value?e(s.value,{store:l.value,...i.value}):null])])]}});export{g as default};
