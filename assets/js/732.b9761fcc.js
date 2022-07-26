(window.webpackJsonp=window.webpackJsonp||[]).push([[732],{1108:function(a,t,s){"use strict";s.r(t);var e=s(26),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"skywalking-agent配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skywalking-agent配置"}},[a._v("#")]),a._v(" Skywalking Agent配置")]),a._v(" "),s("h2",{attrs:{id:"_1-java-agent配置方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-java-agent配置方式"}},[a._v("#")]),a._v(" 1. Java Agent配置方式")]),a._v(" "),s("p",[a._v("agent配置有多种姿势，上面修改 "),s("code",[a._v("agent.config")]),a._v(" 文件中的值，只是其中一种。下面专门探讨agent支持的配置方式。")]),a._v(" "),s("h3",{attrs:{id:"_1-1-系统属性-d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-系统属性-d"}},[a._v("#")]),a._v(" 1.1 系统属性(-D)")]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("-Dskywalking.")]),a._v(" + "),s("code",[a._v("agent.config配置文件中的key")]),a._v(" 即可。例如：")]),a._v(" "),s("p",[s("code",[a._v("agent.config")]),a._v(" 文件中有一个属性名为 "),s("code",[a._v("agent.service_name")]),a._v(" ，那么如果使用系统属性的方式，则可以写成")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("java -javaagent:/opt/agent/skywalking-agent.jar -Dskywalking.agent.service_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("你想设置的值 -jar my-spring-boot.jar\n")])])]),s("h3",{attrs:{id:"_1-2-代理选项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-代理选项"}},[a._v("#")]),a._v(" 1.2 代理选项")]),a._v(" "),s("p",[a._v("在JVM参数中的代理路径之后添加属性即可。格式：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("-javaagent:/path/to/skywalking-agent.jar"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(","),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("option2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("value2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("例如：")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("java -javaagent:/opt/agent/skywalking-agent.jar"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("agent.service_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("你想设置的值 -jar my-spring-boot.jar\n")])])]),s("h3",{attrs:{id:"_1-3-系统环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-系统环境变量"}},[a._v("#")]),a._v(" 1.3 系统环境变量")]),a._v(" "),s("p",[s("code",[a._v("agent.config")]),a._v(" 文件中默认的大写值，都可以作为环境变量引用。例如，"),s("code",[a._v("agent.config")]),a._v(" 中有如下内容")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("agent.service_name=${SW_AGENT_NAME:Your_ApplicationName}\n")])])]),s("p",[a._v("这说明Skywalking会读取名为 "),s("code",[a._v("SW_AGENT_NAME")]),a._v(" 的环境变量。")]),a._v(" "),s("h2",{attrs:{id:"_2-优先级"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-优先级"}},[a._v("#")]),a._v(" 2. 优先级")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("代理选项` > `系统属性（-D）` > `系统环境变量` > `配置文件\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);