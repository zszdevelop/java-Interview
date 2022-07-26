(window.webpackJsonp=window.webpackJsonp||[]).push([[910],{1287:function(a,n,t){"use strict";t.r(n);var s=t(26),e=Object(s.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"jenkins设置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jenkins设置环境变量"}},[a._v("#")]),a._v(" Jenkins设置环境变量")]),a._v(" "),t("h2",{attrs:{id:"_1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1. 简介")]),a._v(" "),t("h2",{attrs:{id:"_2-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置环境变量"}},[a._v("#")]),a._v(" 2. 配置环境变量")]),a._v(" "),t("h3",{attrs:{id:"_2-1-配置-jdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-配置-jdk"}},[a._v("#")]),a._v(" 2.1 配置 JDK")]),a._v(" "),t("p",[a._v("在“全局工具配置中（Global Tool Configuration）”找到")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001125528711.png",alt:"image-20211001125528711"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001125611235.png",alt:"image-20211001125611235"}})]),a._v(" "),t("p",[a._v("选择要安装的JDK版本")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001125716055.png",alt:"image-20211001125716055"}})]),a._v(" "),t("p",[a._v("需要输入oracle 的账户密码")]),a._v(" "),t("h3",{attrs:{id:"_2-2-配置maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置maven"}},[a._v("#")]),a._v(" 2.2 配置Maven")]),a._v(" "),t("p",[a._v("在“全局工具配置中（Global Tool Configuration）”找到maven设置")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211001130133461.png",alt:"image-20211001130133461"}})]),a._v(" "),t("h2",{attrs:{id:"_3-建立jenkinsfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立jenkinsfile"}},[a._v("#")]),a._v(" 3. 建立Jenkinsfile")]),a._v(" "),t("p",[a._v("在Jenkinsfile中作如下设置。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pipeline{\n\n    agent any\n\n    tools{\n\n        maven 'mvn-3.6.3'\n\n    }\n\n    stages{\n\n        stage('Build'){\n\n            steps {\n\n                bat \"mvn -v\"\n\n                echo \"Finsh installMaven\"\n\n            }\n\n         }\n\n    }\n\n}\n")])])]),t("p",[a._v("注意，这里maven 'mvn3.6.3'中的mvn-3.6.3必须与图3中设置得一致。")]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1586700",target:"_blank",rel:"noopener noreferrer"}},[a._v("利用Jenkins pipeline配置测试工具"),t("OutboundLink")],1)])])}),[],!1,null,null,null);n.default=e.exports}}]);