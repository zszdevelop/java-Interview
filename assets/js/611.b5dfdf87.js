(window.webpackJsonp=window.webpackJsonp||[]).push([[611],{990:function(t,s,a){"use strict";a.r(s);var n=a(26),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css文本超出就隐藏并且显示省略号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css文本超出就隐藏并且显示省略号"}},[t._v("#")]),t._v(" css文本超出就隐藏并且显示省略号")]),t._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),a("p",[t._v("css文本超出就隐藏并且显示省略号，非常常见的需求。但也有一些坑。特此记录一下")]),t._v(" "),a("h2",{attrs:{id:"_2-实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现"}},[t._v("#")]),t._v(" 2. 实现")]),t._v(" "),a("h3",{attrs:{id:"_2-1-单行实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-单行实现"}},[t._v("#")]),t._v(" 2.1 单行实现")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //超出的文本隐藏\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //溢出用省略号显示\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //溢出不换行\n")])])]),a("h3",{attrs:{id:"_2-2-两行的内容时候"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-两行的内容时候"}},[t._v("#")]),t._v(" 2.2 "),a("strong",[t._v("两行的内容时候")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("-webkit-box"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //作为弹性伸缩盒子模型显示。\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-orient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("vertical"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //设置伸缩盒子的子元素排列方式--从上到下垂直排列\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-line-clamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" //显示的行\n")])])]),a("h2",{attrs:{id:"_3-遇到的坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-遇到的坑"}},[t._v("#")]),t._v(" 3. 遇到的坑")]),t._v(" "),a("h3",{attrs:{id:"_3-1-flex布局与white-space-nowrap-冲突问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-flex布局与white-space-nowrap-冲突问题"}},[t._v("#")]),t._v(" 3.1 flex布局与white-space: nowrap 冲突问题")]),t._v(" "),a("p",[t._v("如果我们flex布局的"),a("strong",[t._v("孙子容器")]),t._v("中包含了white-space: nowrap。那么他可能会失效。")]),t._v(" "),a("p",[t._v("如")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("我是测试文本我有这么这么长，我是测试文本我有这么这么长，我是测试文本我有这么这么长，我是测试文本我有这么这么长"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("描述文字"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("查看详情"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\n")])])]),a("p",[t._v("css属性")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\t\t.left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(";\n\t\t\t.text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100rpx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #ff0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-1-1-解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-解决办法"}},[t._v("#")]),t._v(" 3.1.1 解决办法")]),t._v(" "),a("p",[t._v("在子容器中新增 min-width: 0;")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"_3-2-在uniapp-的text标签中省略号不生效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-在uniapp-的text标签中省略号不生效"}},[t._v("#")]),t._v(" 3.2 在uniapp 的text标签中省略号不生效")]),t._v(" "),a("p",[t._v("如果是"),a("text",[t._v(" 标签")])]),t._v(" "),a("blockquote",[a("p",[t._v("Ps:text 标签设置宽度都不管用")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401214519580.png",alt:"image-20220401214519580"}})]),t._v(" "),a("h4",{attrs:{id:"_3-2-1-解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-解决办法"}},[t._v("#")]),t._v(" 3.2.1 解决办法")]),t._v(" "),a("p",[t._v("换成"),a("view",[t._v("标签就可以")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401214627701.png",alt:"image-20220401214627701"}})]),t._v(" "),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u013868665/article/details/78893158",target:"_blank",rel:"noopener noreferrer"}},[t._v("css 文本超出就隐藏并且显示省略号"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);