(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{479:function(t,a,s){"use strict";s.r(a);var e=s(26),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"清除挖矿程序-sysupdate-networkservice进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#清除挖矿程序-sysupdate-networkservice进程"}},[t._v("#")]),t._v(" 清除挖矿程序（sysupdate, networkservice进程）")]),t._v(" "),s("h2",{attrs:{id:"_1-top查看cpu使用状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-top查看cpu使用状态"}},[t._v("#")]),t._v(" 1. top查看cpu使用状态")]),t._v(" "),s("p",[t._v("我们发现有两个进程cpu占用都超过100%了，而且我们也并不知道他是干嘛的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191016094413288.png",alt:"image-20191016094413288"}})]),t._v(" "),s("h2",{attrs:{id:"_2-通过进程号查询位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过进程号查询位置"}},[t._v("#")]),t._v(" 2.通过进程号查询位置")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ls -l proc/{进程号}/exe\n")])])]),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191016094622180.png",alt:"image-20191016094622180"}})]),t._v(" "),s("h2",{attrs:{id:"_2-干掉挖矿进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-干掉挖矿进程"}},[t._v("#")]),t._v(" 2.干掉挖矿进程")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("kill -9 6249\nkill -9 6292\n")])])]),s("h3",{attrs:{id:"_3-删除挖矿程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除挖矿程序"}},[t._v("#")]),t._v(" 3. 删除挖矿程序")]),t._v(" "),s("ul",[s("li",[t._v("主要包括networkservice、sysguard、update.sh、config.json,sysupdate")]),t._v(" "),s("li",[t._v("直接删除可能无法删除，需要先执行 chattr -i")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("chattr -i networkservice\nrm -f networkservice\nchattr -i sysguard\nrm -f sysguard\nchattr -i sysguard\nrm -f sysguard\nchattr -i config.json\nrm -f config.json\nchattr -i sysupdate\nrm -f sysupdate\n\n")])])]),s("h2",{attrs:{id:"_4-删除定时任务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除定时任务"}},[t._v("#")]),t._v(" 4. 删除定时任务")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("cd /var/spool/cron/\n# 看是否有定时任务，有则删除\nrm -rf nobody\n")])])]),s("h3",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/daiyuhe/article/details/95683393",target:"_blank",rel:"noopener noreferrer"}},[t._v("记录一次清除Linux挖矿病毒的经历(sysupdate, networkservice进程)"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);