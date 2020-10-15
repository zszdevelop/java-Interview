(window.webpackJsonp=window.webpackJsonp||[]).push([[260],{1377:function(t,a,r){"use strict";r.r(a);var e=r(42),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"rabbitmq通过ttl和死信队列实现延时消息队列"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq通过ttl和死信队列实现延时消息队列"}},[t._v("#")]),t._v(" RabbitMQ通过TTL和死信队列实现延时消息队列")]),t._v(" "),r("h2",{attrs:{id:"_1-延时消息使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-延时消息使用场景"}},[t._v("#")]),t._v(" 1. 延时消息使用场景")]),t._v(" "),r("ol",[r("li",[t._v("未付款的订单，15分钟后关闭")]),t._v(" "),r("li",[t._v("家里有一台智能热水器，需要在30分钟后启动")]),t._v(" "),r("li",[t._v("新用户注册之后一个月没有下单，发个短信勾引一波")]),t._v(" "),r("li",[t._v("涉及到T+d（工作日延迟）或者D+d（自然日延迟）等延迟交付的场景")])]),t._v(" "),r("h3",{attrs:{id:"_1-1-为什么不使用定时任务轮询"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-为什么不使用定时任务轮询"}},[t._v("#")]),t._v(" 1.1 为什么不使用定时任务轮询")]),t._v(" "),r("p",[t._v("虽然能同样能完成任务，但是业务数据量大的情况，对"),r("strong",[t._v("服务器的压力大")]),t._v("，并且"),r("strong",[t._v("误差大")])]),t._v(" "),r("h2",{attrs:{id:"_2-实现背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-实现背景"}},[t._v("#")]),t._v(" 2. 实现背景")]),t._v(" "),r("p",[r("strong",[t._v("rabbitmq本身是不直接支持延时队列的")]),t._v("，RabbitMQ的延迟队列基于消息的存活时间TTL（Time To Live）和死信交换机DLE（Dead Letter Exchanges）实现：")]),t._v(" "),r("ol",[r("li",[t._v("TTL：RabbitMQ可以对队列和消息各自设置存活时间，规则是两者中较小的值，即队列无消费者连接的消息过期时间，或者消息在队列中一直未被消费的过期时间")]),t._v(" "),r("li",[t._v("DLE：过期的消息通过绑定的死信交换机，路由到指定的死信队列，消费者实际上消费的是死信队列上的消息")])]),t._v(" "),r("h2",{attrs:{id:"_3-代码实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-代码实现"}},[t._v("#")]),t._v(" 3. 代码实现")]),t._v(" "),r("p",[r("RouterLink",{attrs:{to:"/dependencies/mq/RabbitMQ/scene/RabbitMQ场景-商城下单，超时取消订单.html"}},[t._v("RabbitMQ场景-商城下单，超时取消订单")])],1),t._v(" "),r("h2",{attrs:{id:"参考文章"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/6844904163168485383",target:"_blank",rel:"noopener noreferrer"}},[t._v("RabbitMQ延迟队列"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);