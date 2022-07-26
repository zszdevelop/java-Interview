(window.webpackJsonp=window.webpackJsonp||[]).push([[889],{1264:function(t,_,v){"use strict";v.r(_);var e=v(26),a=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"发布与订阅-pub-sub"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#发布与订阅-pub-sub"}},[t._v("#")]),t._v(" 发布与订阅(pub/sub)")]),t._v(" "),v("p",[t._v("发布与订阅（又称pub/sub）的特点：")]),t._v(" "),v("ul",[v("li",[t._v("订阅者（listener）负责订阅频道（channel）")]),t._v(" "),v("li",[t._v("发送者（publisher）负责向频道发送二进制字符串消息（binary string message）")]),t._v(" "),v("li",[t._v("每当有消息被发送至给定频道时，频道所有订阅者丢回收到消息")])]),t._v(" "),v("h2",{attrs:{id:"_1-操作命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作命令"}},[t._v("#")]),t._v(" 1.操作命令")]),t._v(" "),v("h3",{attrs:{id:"_1-1-基础操作命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-基础操作命令"}},[t._v("#")]),t._v(" 1.1 基础操作命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("命令")]),t._v(" "),v("th",[t._v("用例")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("SUBSCRIBE")]),t._v(" "),v("td",[t._v("SUBSCRIBE channel [channel ...]")]),t._v(" "),v("td",[t._v("订阅给定的一个或多个频道")])]),t._v(" "),v("tr",[v("td",[t._v("UNSUBSCRIBE")]),t._v(" "),v("td",[t._v("UNSUBSCRIBE [channel [channel ...]]")]),t._v(" "),v("td",[t._v("退订给定的一个或多个频道，如果执行时没有给定任何频道，那么退订所有频道")])]),t._v(" "),v("tr",[v("td",[t._v("PUBLISH")]),t._v(" "),v("td",[t._v("PUBLISH channel message")]),t._v(" "),v("td",[t._v("向给定频道发送消息")])]),t._v(" "),v("tr",[v("td",[t._v("PSUBSCRIBE")]),t._v(" "),v("td",[t._v("PSUBSCRIBE pattern [pattern ...]")]),t._v(" "),v("td",[t._v("订阅与给定模式相匹配的所有渠道")])]),t._v(" "),v("tr",[v("td",[t._v("PUNSUBSCRIBE")]),t._v(" "),v("td",[t._v("PUNSUBSCRIBE [pattern [pattern ...]]")]),t._v(" "),v("td",[t._v("退订给定的模式，如果执行时没有给定任何模式，退订所有")])])])]),t._v(" "),v("h2",{attrs:{id:"_2-发布订阅的弊端"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-发布订阅的弊端"}},[t._v("#")]),t._v(" 2 发布订阅的弊端")]),t._v(" "),v("ul",[v("li",[t._v("原因1：redis的稳定性\n"),v("ol",[v("li",[t._v("对于旧版redis，客户端订阅了某些频道")]),t._v(" "),v("li",[t._v("但是读取消息的速度却不够快的话，那么不断积压的消息就会使得redis输出缓冲区的体积变得越打越大")]),t._v(" "),v("li",[t._v("导致redis速度变慢，甚至奔溃，也可能导致redis 被系统杀死")]),t._v(" "),v("li",[t._v("新版的不会出现这种问题，会自动断开不符合client-output-buffer-limit pubsub 配置选项要求的订阅客户端")])])]),t._v(" "),v("li",[t._v("原因2：数据传输的可靠性\n"),v("ol",[v("li",[t._v("任何网络系统在执行操作时都可能会遇上短信情况")]),t._v(" "),v("li",[t._v("客户端将丢失在断线期间的所有消息")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);