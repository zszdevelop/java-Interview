(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{868:function(e,t,r){"use strict";r.r(t);var a=r(26),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"kubernetes架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes架构"}},[e._v("#")]),e._v(" Kubernetes架构")]),e._v(" "),r("h2",{attrs:{id:"_1-运行原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-运行原理"}},[e._v("#")]),e._v(" 1. 运行原理")]),e._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200205235252447.png",alt:"image-20200205235252447"}})]),e._v(" "),r("p",[e._v("Kubernetes 是一套分布式系统，由多个节点组成，"),r("strong",[e._v("节点分为两类：一类是属于管理平面的主节点/控制节点（Master Node）；一类是属于运行平面的工作节点（Worker Node）")])]),e._v(" "),r("p",[e._v("复杂的工作由主节点负责，工作节点负责提供提供稳定的操作接口和能力抽象")]),e._v(" "),r("p",[e._v("注：从这张图上，我们没有能发现 Kubernetes 中对于控制平面的分布式实现，但是由于数据后端自身就是一套分布式的数据库 Etcd，因此可以很容易扩展到分布式实现。")]),e._v(" "),r("h2",{attrs:{id:"_2-控制平面"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-控制平面"}},[e._v("#")]),e._v(" 2. 控制平面")]),e._v(" "),r("h3",{attrs:{id:"_2-1-主节点服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-主节点服务"}},[e._v("#")]),e._v(" 2.1 主节点服务")]),e._v(" "),r("p",[e._v("主节点提供的管理服务：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("apiserver")]),e._v(" 是整个系统的对外接口，提供一套 RESTful 的 "),r("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/tree/master/docs/api-reference",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes API"),r("OutboundLink")],1),e._v("，供客户端和其它组件调用；")]),e._v(" "),r("li",[r("code",[e._v("scheduler")]),e._v(" 负责对资源进行调度，分配某个pod 到某个节点是上。是pluggable 的，意味着很容易选择其他实现方式")]),e._v(" "),r("li",[r("code",[e._v("controller-manager")]),e._v(" 负责管理控制器，包括endpoint-controller (刷新服务和pod的关联信息) 和 replication-controller（维护某个pod 的复制为配置的数值）")])]),e._v(" "),r("h3",{attrs:{id:"_2-2-etcd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-etcd"}},[e._v("#")]),e._v(" 2.2 Etcd")]),e._v(" "),r("p",[e._v("Etcd既作为数据后端，又作为消息中间件")]),e._v(" "),r("p",[e._v("通过Etcd 来存储所有的主节点上的状态信息，很容易实现主节点的分布式扩展")]),e._v(" "),r("p",[e._v("组件可以自动的去侦测 Etcd 中的数值变化来获得通知，并且获得更新后的数据来执行相应的操作")]),e._v(" "),r("h3",{attrs:{id:"_2-3-工作节点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-工作节点"}},[e._v("#")]),e._v(" 2.3 工作节点")]),e._v(" "),r("ul",[r("li",[e._v("Kubelet 是工作节点执行操作的agent，负责具体的容器生命周期管理，根据从数据库中获取的信息来管理容器，并上报pod运行状态等")]),e._v(" "),r("li",[e._v("Kube-proxy 是一个简单的网络访问代理，同时也是一个 Load Balancer。它负责将访问到某个服务的请求具体分配给工作节点上的Pod（同一类标签）")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200206000707335.png",alt:"image-20200206000707335"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);