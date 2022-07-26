(window.webpackJsonp=window.webpackJsonp||[]).push([[602],{978:function(a,t,n){"use strict";n.r(t);var s=n(26),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"css水平居中的7种实现方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css水平居中的7种实现方式"}},[a._v("#")]),a._v(" CSS水平居中的7种实现方式")]),a._v(" "),n("h2",{attrs:{id:"_1-实现方式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-实现方式"}},[a._v("#")]),a._v(" 1. 实现方式")]),a._v(" "),n("h3",{attrs:{id:"_1-1-方式一-text-align-center实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-方式一-text-align-center实现"}},[a._v("#")]),a._v(" 1.1 方式一："),n("code",[a._v("text-align: center")]),a._v("实现")]),a._v(" "),n("p",[a._v("如果父元素是块级元素且里面包含行内元素，则直接给父元素设置 "),n("code",[a._v("text-align: center")]),a._v(", 如果父元素是行内元素的话父元素无法设置宽高，则需要将其设为块级元素"),n("code",[a._v("display: block")]),a._v("。也对inline、inline-block、inline-table和inline-flex元素水平居中都有效。")]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('// 父元素是块级元素\n<div id="parent">\n    <span id="child">我是行内元素</span>\n</div>\n\n// 父元素是行内元素\n<span id="parent">\n    <span id="child">我是行内元素</span>\n</span>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v("// 父元素是块级元素\n.parent {\n  height: 300px;\n  width: 300px;\n  text-align: center;\n  background: skyblue;\n}\n\n// 父元素是行内元素\n.parent {\n  height: 300px;\n  width: 300px;\n  display: block;\n  text-align: center;\n  background: skyblue;\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/1460000021249926.png",alt:"img"}})]),a._v(" "),n("h3",{attrs:{id:"_1-2-方式二-margin-0-aoto实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-方式二-margin-0-aoto实现"}},[a._v("#")]),a._v(" 1.2 方式二："),n("code",[a._v("margin: 0 aoto")]),a._v("实现")]),a._v(" "),n("p",[a._v("在宽度已知的情况下可以使用"),n("code",[a._v("margin：0 auto")]),a._v("，让元素水平居中。")]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div id="parent">\n    <div id="child">我是行内元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  background:  #fcc;\n}\n.child {\n  height: 100px;\n  width: 100px; //确保该块级元素定宽\n  background: #f66;\n  margin: 0 auto;\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201555384.png",alt:"image-20210709201555384"}})]),a._v(" "),n("h3",{attrs:{id:"_1-3-方式三-table-margin实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-方式三-table-margin实现"}},[a._v("#")]),a._v(" 1.3 方式三：table+margin实现")]),a._v(" "),n("p",[a._v("先将子元素设置为块级表格来显示（类似），再将其设置水平居中"),n("code",[a._v("display:table")]),a._v("在表现上类似"),n("code",[a._v("block")]),a._v("元素，但是宽度为内容宽。")]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n  <div class="child">我是块级元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  background:  #fcc;\n}\n.child {\n  display: table;\n  background: #f66;\n  margin: 0 auto;\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201645304.png",alt:"image-20210709201645304"}})]),a._v(" "),n("h3",{attrs:{id:"_1-4-方式四-absolute-transform实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-方式四-absolute-transform实现"}},[a._v("#")]),a._v(" 1.4 方式四：absolute+transform实现")]),a._v(" "),n("p",[a._v("首先设置父元素为相对定位，再设置子元素为绝对定位，首先设置子元素的"),n("code",[a._v("left:50%")]),a._v("，然后通过向左移动子元素的一半宽度以达到水平居中。")]),a._v(" "),n("ul",[n("li",[a._v("定宽度，设置绝对子元素的"),n("code",[a._v("margin-left:-元素宽度的一半px")]),a._v("或者设置"),n("code",[a._v("transform: translateX(-50%)")])]),a._v(" "),n("li",[a._v("不定宽，只能使用"),n("code",[a._v("transform: translateX(-50%)")])])]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n    <div class="child">我是块级元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  position: relative;\n  background:  #fcc;\n}\n.child {\n  position: absolute;\n  background: #f66;\n  left: 50%;\n  transform: translateX(-50%); // 通用\n  /** 定宽度可使用margin-left **/\n  width：100px;\n  margin-left：-50px;\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201723869.png",alt:"image-20210709201723869"}})]),a._v(" "),n("h3",{attrs:{id:"_1-5-方式五-absolute-margin实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-方式五-absolute-margin实现"}},[a._v("#")]),a._v(" 1.5 方式五：absolute+margin实现")]),a._v(" "),n("p",[a._v("通过子元素绝对定位，外加"),n("code",[a._v("margin: 0 auto")]),a._v("来实现。")]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n    <div class="child">我是块级元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  position: relative;\n  background:  #fcc;\n}\n.child {\n  position: absolute;\n  background: #f66;\n  width: 200px;\n  height: 100px;\n  margin: 0 auto; /*水平居中*/\n  left: 0; /*此处不能省略，且为0*/\n  right: 0;/*此处不能省略，且为0*/\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201823067.png",alt:"image-20210709201823067"}})]),a._v(" "),n("h3",{attrs:{id:"_1-6-方式六-flexbox实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-方式六-flexbox实现"}},[a._v("#")]),a._v(" 1.6 方式六：flexbox实现")]),a._v(" "),n("p",[a._v("使用flexbox布局，只需要给待处理的块状元素的父元素添加属性 "),n("code",[a._v("display: flex")]),a._v("、 "),n("code",[a._v("justify-content: center")])]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n    <div class="child">我是块级元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  display: flex;\n  justify-content: center;\n  background:  #fcc;\n}\n.child {\n  height: 100px;\n  width: 100px;\n  background: #f66;\n}\n")])])]),n("p",[a._v("效果：")]),a._v(" "),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201903304.png",alt:"image-20210709201903304"}})]),a._v(" "),n("h3",{attrs:{id:"_1-7-方式七-flex-margin实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-方式七-flex-margin实现"}},[a._v("#")]),a._v(" 1.7 方式七：flex+margin实现")]),a._v(" "),n("p",[a._v("通过"),n("code",[a._v("flex")]),a._v("将父容器设置为为"),n("code",[a._v("flex")]),a._v("布局，再设置子元素居中。")]),a._v(" "),n("p",[a._v("HTML")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v('<div class="parent">\n    <div class="child">我是块级元素</div>\n</div>\n')])])]),n("p",[a._v("CSS")]),a._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[a._v(".parent {\n  height: 300px;\n  width: 400px;\n  display: flex;\n  background: #fcc;\n}\n.child {\n  height: 100px;\n  width: 100px;\n  margin: 0 auto;\n  background: #f66;\n}\n")])])]),n("p",[n("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210709201948982.png",alt:"image-20210709201948982"}})]),a._v(" "),n("h2",{attrs:{id:"参考文章"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),n("p",[n("a",{attrs:{href:"https://segmentfault.com/a/1190000021249922",target:"_blank",rel:"noopener noreferrer"}},[a._v("CSS水平居中的7种实现方式"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);