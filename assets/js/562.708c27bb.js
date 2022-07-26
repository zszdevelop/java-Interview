(window.webpackJsonp=window.webpackJsonp||[]).push([[562],{941:function(t,e,_){"use strict";_.r(e);var v=_(26),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"商城设计要点-五-商家发货-物流单更新-aba-问题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#商城设计要点-五-商家发货-物流单更新-aba-问题"}},[t._v("#")]),t._v(" 商城设计要点(五)-商家发货，物流单更新 ABA 问题")]),t._v(" "),_("h2",{attrs:{id:"_1-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),_("p",[t._v("举个例子：")]),t._v(" "),_("p",[t._v("商家发货，填写运单号，开始填了 123，后来发现填错了，然后又修改为 456。")]),t._v(" "),_("p",[t._v("此时，如果就为某种特殊场景埋下错误伏笔，具体我们来看下")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220326210650470.png",alt:"image-20220326210650470"}})]),t._v(" "),_("p",[t._v("过程：")]),t._v(" "),_("ul",[_("li",[t._v("开始「请求A」发货，调订单服务接口，更新运单号 "),_("code",[t._v("123")])]),t._v(" "),_("li",[t._v("但是响应有点慢，超时了")]),t._v(" "),_("li",[t._v("此时，商家发现运单号填错了，发起了「请求B」，更新运单号为 "),_("code",[t._v("456")]),t._v(" ，订单服务也响应成功了")]),t._v(" "),_("li",[t._v("这时，「请求A」触发了重试，再次调用订单服务，更新运单号 "),_("code",[t._v("123")]),t._v("，订单服务也响应成功了")]),t._v(" "),_("li",[t._v("订单服务最后保存的 运单号 是 "),_("code",[t._v("123")])])]),t._v(" "),_("p",[t._v("是不是犯错了！！！！")]),t._v(" "),_("p",[t._v("那么有什么好的解决方案吗？")]),t._v(" "),_("p",[t._v("很多人可能会说，不重试不就可以了，要知道"),_("code",[t._v("重试机制")]),t._v(" 是高可用服务的重要保障手段，很多重试是框架自动发起的。")]),t._v(" "),_("h2",{attrs:{id:"_2-解决方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[t._v("#")]),t._v(" 2. 解决方案")]),t._v(" "),_("p",[t._v("数据库表引入一个额外字段  "),_("code",[t._v("version")]),t._v("，每次更新时，判断表中的版本号与请求参数携带的版本号是否一致")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("update order\nset logistics_num = #{logistics_num} , version = #{version} + 1\nwhere order_id= 1111 and version = #{version}\n")])])]),_("ul",[_("li",[t._v("一致：才触发更新")]),t._v(" "),_("li",[t._v("不一致：说明这期间执行过数据更新，可能会引发错误，拒绝执行。")])]),t._v(" "),_("h2",{attrs:{id:"参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/BgVr0jEBJwQI5UW_ele08A",target:"_blank",rel:"noopener noreferrer"}},[t._v("聊聊电商系统中常见的9大坑！库存超卖、重复下单、物流单ABA"),_("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=a.exports}}]);