(window.webpackJsonp=window.webpackJsonp||[]).push([[565],{944:function(t,s,a){"use strict";a.r(s);var n=a(26),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"商城设计要点-二-订单快照-减少存储成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-二-订单快照-减少存储成本"}},[t._v("#")]),t._v(" 商城设计要点(二)-订单快照，减少存储成本")]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("h3",{attrs:{id:"_1-1-什么是订单快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是订单快照"}},[t._v("#")]),t._v(" 1.1 什么是订单快照")]),t._v(" "),a("p",[t._v("商品信息是可以修改的，当用户下单后，"),a("strong",[t._v("为了更好解决后面可能存在的买卖纠纷")]),t._v("，创建订单时会同步保存一份商品详情信息，称之为"),a("strong",[t._v("订单快照")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_1-2-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-背景"}},[t._v("#")]),t._v(" 1.2 背景")]),t._v(" "),a("p",[t._v("同一件商品，会有很多用户会购买，如果热销商品，短时间就会有上万的订单。如果每个订单都创建一份快照，"),a("strong",[t._v("存储成本太高")]),t._v("。另外商品信息虽然支持修改，但毕竟是一个"),a("strong",[t._v("低频动作")]),t._v("。我们可以理解成，大部分订单的商品快照信息都是一样的，除非下单时用户修改过。")]),t._v(" "),a("h2",{attrs:{id:"_2-解决方案-摘要比对的方法‍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案-摘要比对的方法‍"}},[t._v("#")]),t._v(" 2. 解决方案：摘要比对的方法‍")]),t._v(" "),a("p",[a("strong",[t._v("如何实时识别修改动作是解决快照成本的关键所在")]),t._v("。我们采用"),a("strong",[t._v("摘要比对的方法‍")]),t._v("。")]),t._v(" "),a("ol",[a("li",[t._v("创建订单时，先检查商品信息摘要是否已经存在，")]),t._v(" "),a("li",[t._v("如果不存在，会创建快照记录。")]),t._v(" "),a("li",[t._v("订单"),a("strong",[t._v("明细会关联商品的快照主键")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DigestTest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" encodeS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DigestUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5Hex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("encodeS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单快照信息......"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("encodeStr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("由于订单快照属于非核心操作，即使失败也不应该影响用户正常购买流程，所以通常采用异步流程执行。")]),t._v(" "),a("blockquote",[a("ol",[a("li",[t._v("mall 商城项目未采用该方案")]),t._v(" "),a("li",[t._v("mall 商城下单时直接存了商品名，下单时价格等基本信息，并没有存快照信息")])])]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);