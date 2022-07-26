(window.webpackJsonp=window.webpackJsonp||[]).push([[564],{940:function(_,v,e){"use strict";e.r(v);var t=e(26),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"商城设计要点-九-订单分库分表-多维度查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-九-订单分库分表-多维度查询"}},[_._v("#")]),_._v(" 商城设计要点(九)-订单分库分表，多维度查询")]),_._v(" "),e("h2",{attrs:{id:"_1-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[_._v("#")]),_._v(" 1. 简介")]),_._v(" "),e("p",[_._v("如果电商网站的订单数过多，我们一般会想到 "),e("code",[_._v("分库分表")]),_._v(" 解决策略。没问题，这个方向是对的。")]),_._v(" "),e("p",[e("strong",[_._v("但是查询维度很多")])]),_._v(" "),e("p",[_._v("1、买家，查询 "),e("code",[_._v("我的订单")]),_._v(" 列表，需要根据 "),e("code",[_._v("buyer_id")]),_._v(" 来查询")]),_._v(" "),e("p",[_._v("2、查看订单详情，需要根据 "),e("code",[_._v("order_id")]),_._v(" 来查询")]),_._v(" "),e("p",[_._v("3、卖家，查询 "),e("code",[_._v("我的销售")]),_._v(" 列表，需要根据 "),e("code",[_._v("seller_id")]),_._v(" 来查询")]),_._v(" "),e("p",[_._v("而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？")]),_._v(" "),e("h2",{attrs:{id:"_2-解决方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[_._v("#")]),_._v(" 2. 解决方案")]),_._v(" "),e("p",[_._v("而订单分表只有一个分表键，如何满足多维度 SQL 操作呢？")]),_._v(" "),e("p",[_._v("我们一般是基于买家维度来设计，下图是 "),e("code",[_._v("淘宝")]),_._v(" 的订单列表")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326213429736.png",alt:"image-20220326213429736"}})]),_._v(" "),e("p",[_._v("一个订单号 19 位，我们会发现同一个用户不同订单的最后 6 位都是一样的，没错，那是用户id的后6位。")]),_._v(" "),e("p",[_._v("这样，上文中  "),e("code",[_._v("场景1")]),_._v("、"),e("code",[_._v("场景2")]),_._v(" 的查询可以共性抽取， 采用 "),e("code",[_._v("buyer_id")]),_._v(" 或 "),e("code",[_._v("order_id")]),_._v(" 的 "),e("code",[_._v("后六位")]),_._v(" 作为分表键，对 "),e("code",[_._v("1 000 000")]),_._v(" 取模，得到买家维度的订单分表的编号。")]),_._v(" "),e("p",[_._v("至于 "),e("code",[_._v("场景3")]),_._v(" 卖家维度的订单查询，我们可以采用数据异构方式，按 "),e("code",[_._v("seller_id")]),_._v(" 维度另外存储一份数据，专门供卖家使用。")]),_._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[_._v("#")]),_._v(" 参考文章")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[_._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),e("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=r.exports}}]);