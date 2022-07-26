(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{852:function(e,s,t){"use strict";t.r(s);var r=t(26),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"渲染web视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#渲染web视图"}},[e._v("#")]),e._v(" 渲染Web视图")]),e._v(" "),t("p",[e._v("控制器方法"),t("strong",[e._v("并没有直接产生")]),e._v("浏览器中渲染"),t("strong",[e._v("所需的HTML")])]),e._v(" "),t("p",[e._v("controller 做的")]),e._v(" "),t("ol",[t("li",[e._v("将一些数据填充到模型中")]),e._v(" "),t("li",[e._v("然后将模型传递给一个用来渲染的视图")])]),e._v(" "),t("h2",{attrs:{id:"spring-是如何确定使用哪个视图实现渲染模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-是如何确定使用哪个视图实现渲染模型"}},[e._v("#")]),e._v(" Spring 是如何确定使用哪个视图实现渲染模型")]),e._v(" "),t("p",[e._v("这就是视图解析器的作用")]),e._v(" "),t("p",[e._v("例如：InternalResureViewResolver视图解析器")]),e._v(" "),t("p",[e._v('​\t使用"WEB-INF/views/"前缀和”jsp“后缀来确定渲染模型的JSP物理文件位置')]),e._v(" "),t("h2",{attrs:{id:"spring-mvc的viewresolver解析流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spring-mvc的viewresolver解析流程"}},[e._v("#")]),e._v(" Spring MVC的ViewResolver解析流程")]),e._v(" "),t("p",[e._v("Spring MVC定义了一个名为ViewResolver的接口")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface ViewResolver {\n    View resolveViewName(String var1, Locale var2) throws Exception;\n}\n")])])]),t("p",[e._v("当给resolveViewName()方法传入一个视图名和Locale对象是，他会返回一个View 实例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public interface View {\n    String getContentType();\n\n    void render(Map<String, ?> map, HttpServletRequest request, HttpServletResponse response) throws Exception;\n}\n")])])]),t("p",[e._v("View 接口的任务就是接受模型以及Servlet的request 和response对象，并将输出结果渲染到response中")]),e._v(" "),t("p",[t("strong",[e._v("如果我们要自定义ViewResolver")])]),e._v(" "),t("p",[e._v("编写ViewResolver 和view 的实现，将要渲染的结果放到response中，进而展现到用户的浏览器中")]),e._v(" "),t("p",[e._v("###Spring 自带的13个视图解析器")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190801234854268.png",alt:"image-20190801234854268"}})])])}),[],!1,null,null,null);s.default=a.exports}}]);