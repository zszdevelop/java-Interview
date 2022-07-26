(window.webpackJsonp=window.webpackJsonp||[]).push([[646],{1022:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue-router动态路由匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router动态路由匹配"}},[t._v("#")]),t._v(" Vue Router动态路由匹配")]),t._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[t._v("#")]),t._v(" 1. 背景")]),t._v(" "),a("blockquote",[a("p",[t._v("我们经常需要把某种模式匹配到的所有路由，"),a("strong",[t._v("全都映射到同个组件")])])]),t._v(" "),a("p",[t._v("n 个url地址，映射到通过组件")]),t._v(" "),a("h2",{attrs:{id:"_2-动态路径参数-冒号开头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-动态路径参数-冒号开头"}},[t._v("#")]),t._v(" 2. 动态路径参数（冒号开头）")]),t._v(" "),a("p",[t._v("我们有一个 "),a("code",[t._v("User")]),t._v(" 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 "),a("code",[t._v("vue-router")]),t._v(" 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User</div>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 动态路径参数 以冒号开头")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("现在呢，像 "),a("code",[t._v("/user/foo")]),t._v(" 和 "),a("code",[t._v("/user/bar")]),t._v(" 都将映射到相同的路由。")]),t._v(" "),a("h3",{attrs:{id:"_2-1-获取路径参数-route-params"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-获取路径参数-route-params"}},[t._v("#")]),t._v(" 2.1 获取路径参数（$route.params）")]),t._v(" "),a("p",[t._v("一个“路径参数”使用冒号 "),a("code",[t._v(":")]),t._v(" 标记。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/user/:id\n")])])]),a("p",[t._v("当匹配到一个路由时，参数值会被设置到 "),a("code",[t._v("this.$route.params")]),t._v("，可以在每个组件内使用。于是，我们可以更新 "),a("code",[t._v("User")]),t._v(" 的模板，输出当前用户的 ID：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>User {{ $route.params.id }}</div>'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-获取url查询参数-route-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-获取url查询参数-route-query"}},[t._v("#")]),t._v(" 2.2 获取URL查询参数($route.query)")]),t._v(" "),a("p",[t._v("例如")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/user?id=zsz\n")])])]),a("p",[t._v("获取参数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$route.query.id\n")])])]),a("h3",{attrs:{id:"_2-3-获取hash值-route-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-获取hash值-route-hash"}},[t._v("#")]),t._v(" 2.3 获取hash值（$route.hash）")]),t._v(" "),a("p",[t._v("用得偏少")]),t._v(" "),a("h2",{attrs:{id:"_3-响应-监听-路由参数的变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-响应-监听-路由参数的变化"}},[t._v("#")]),t._v(" 3. 响应（监听）路由参数的变化")]),t._v(" "),a("p",[t._v("当使用路由参数时，例如从 "),a("code",[t._v("/user/foo")]),t._v(" 导航到 "),a("code",[t._v("/user/bar")]),t._v("，"),a("strong",[t._v("原来的组件实例会被复用")]),t._v("。因为两个路由都渲染同个组件，比起销毁再创建，复用则显得更加高效。")]),t._v(" "),a("p",[a("strong",[t._v("不过，这也意味着组件的生命周期钩子不会再被调用！！！")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-方案1-watch-监测变化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-方案1-watch-监测变化"}},[t._v("#")]),t._v(" 3.1 方案1：watch (监测变化）")]),t._v(" "),a("p",[t._v("复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) "),a("code",[t._v("$route")]),t._v(" 对象")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$route")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对路由变化作出响应...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-2-方案2-beforerouteupdate-导航守卫"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-方案2-beforerouteupdate-导航守卫"}},[t._v("#")]),t._v(" 3.2 方案2："),a("code",[t._v("beforeRouteUpdate")]),t._v(" 导航守卫")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" User "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beforeRouteUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// react to route changes...")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// don't forget to call next()")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-匹配任意路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-匹配任意路径"}},[t._v("#")]),t._v(" 4. 匹配任意路径")]),t._v(" "),a("p",[t._v("常规参数只会匹配被 "),a("code",[t._v("/")]),t._v(" 分隔的 URL 片段中的字符。如果想匹配"),a("strong",[t._v("任意路径")]),t._v("，我们可以使用通配符 ("),a("code",[t._v("*")]),t._v(")：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会匹配所有路径")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会匹配以 `/user-` 开头的任意路径")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user-*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("使用"),a("em",[t._v("通配符")]),t._v("路由时，请确保路由的顺序是正确的，也就是说含有"),a("em",[t._v("通配符")]),t._v("的路由应该放在最后。")]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E5%93%8D%E5%BA%94%E8%B7%AF%E7%94%B1%E5%8F%82%E6%95%B0%E7%9A%84%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue官方文档"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);