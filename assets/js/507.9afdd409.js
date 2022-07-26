(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{884:function(a,s,t){"use strict";t.r(s);var e=t(26),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"安装rancher-server"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装rancher-server"}},[a._v("#")]),a._v(" 安装Rancher Server")]),a._v(" "),t("h2",{attrs:{id:"_1-启动-rancher-server-单容器部署-non-ha"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动-rancher-server-单容器部署-non-ha"}},[a._v("#")]),a._v(" 1. 启动 RANCHER SERVER - 单容器部署 (NON-HA)")]),a._v(" "),t("p",[a._v("在安装了Docker的Linux服务器上，使用一个简单的命令就可以启动一个单实例的Rancher。")]),a._v(" "),t("ul",[t("li",[t("em",[t("em",[a._v("安装 2.")]),a._v(" 的版本")]),a._v("*")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo docker run -d --restart=unless-stopped -p 8080:80 -p 443:443 rancher/rancher\n")])])]),t("p",[a._v("本机8080端口映射到rancher 的80端口")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128211959622.png",alt:"image-20200128211959622"}})]),a._v(" "),t("h2",{attrs:{id:"_2-rancher-ui"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-rancher-ui"}},[a._v("#")]),a._v(" 2. Rancher UI")]),a._v(" "),t("p",[a._v("访问443 端口"),t("a",{attrs:{href:"https://120.79.200.111/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://120.79.200.111/"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128213135024.png",alt:"image-20200128213135024"}})]),a._v(" "),t("p",[a._v("默认账号是admin，第一次需要设置密码")]),a._v(" "),t("h2",{attrs:{id:"_3-添加集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加集群"}},[a._v("#")]),a._v(" 3. 添加集群")]),a._v(" "),t("p",[a._v("添加自定义集群")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128213633495.png",alt:"image-20200128213633495"}})]),a._v(" "),t("p",[a._v("集群设置")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128213920540.png",alt:"image-20200128213920540"}})]),a._v(" "),t("p",[a._v("集群设置二")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128230521563.png",alt:"image-20200128230521563"}})]),a._v(" "),t("ul",[t("li",[a._v("由于只有一个节点，所有3个角色都要勾选")]),a._v(" "),t("li",[a._v("输入主机的外网和内网地址")]),a._v(" "),t("li",[a._v("ssh终端输入复制的命令")])]),a._v(" "),t("h2",{attrs:{id:"_4-集群安装成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-集群安装成功"}},[a._v("#")]),a._v(" 4. 集群安装成功")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128230738951.png",alt:"image-20200128230738951"}})]),a._v(" "),t("p",[a._v("点击集群也能够看到集群的仪表盘信息了：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128231312455.png",alt:"image-20200128231312455"}})]),a._v(" "),t("h2",{attrs:{id:"_5-切换default项目视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-切换default项目视图"}},[a._v("#")]),a._v(" 5. 切换Default项目视图")]),a._v(" "),t("p",[a._v("集群创建完成后，默认会生成Default项目，点击Default可以切换到项目视图：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128231346959.png",alt:"image-20200128231346959"}})]),a._v(" "),t("h2",{attrs:{id:"_6-部署工作负载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-部署工作负载"}},[a._v("#")]),a._v(" 6. 部署工作负载")]),a._v(" "),t("p",[a._v("在rancher里工作负载是一个对象，包括pod以及部署应用程序所需的其他文件和信息。我们这里以nginx作为demo示例，在Default视图下，点击工作负载—部署服务")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128231456464.png",alt:"image-20200128231456464"}})]),a._v(" "),t("p",[a._v("在部署工作负载页面，设置工作负载名称、副本数量、镜像名称、命名空间、端口映射，其他参数保持默认，不设置端口映射的话，默认是随机映射端口，我这里选择随机，最后点击启动：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200128231727212.png",alt:"image-20200128231727212"}})]),a._v(" "),t("h2",{attrs:{id:"_7-部署完成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-部署完成"}},[a._v("#")]),a._v(" 7. 部署完成")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210218093859020.png",alt:"image-20210218093859020"}})]),a._v(" "),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[a._v("#")]),a._v(" 参考文章")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.51cto.com/zero01/2168999",target:"_blank",rel:"noopener noreferrer"}},[a._v("安装 Rancher2.x 并部署工作负载"),t("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);