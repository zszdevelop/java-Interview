(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1236:function(t,_,v){"use strict";v.r(_);var a=v(26),r=Object(a.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"只追加文件-append-only-file"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#只追加文件-append-only-file"}},[t._v("#")]),t._v(" 只追加文件(append-only file)")]),t._v(" "),v("h2",{attrs:{id:"_1-简介"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),v("p",[t._v("AOF 持久化会将被执行的"),v("strong",[t._v("写命令写到AOF文件末尾")]),t._v("，已此来记录数据发生的变化。")]),t._v(" "),v("p",[t._v("因此，redis只要从头到尾重新执行一次AOP文件包含的所有写命令，就可以恢复AOF文件所记录的数据集")]),t._v(" "),v("h2",{attrs:{id:"_2-文件同步步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-文件同步步骤"}},[t._v("#")]),t._v(" 2.文件同步步骤")]),t._v(" "),v("p",[t._v("在向硬盘写入文件时，至少发生3件事")]),t._v(" "),v("ol",[v("li",[t._v("当调用file.write()方法对文件写入时，")]),t._v(" "),v("li",[t._v("写入的内容会被存储到缓冲区")]),t._v(" "),v("li",[t._v("然后操作系统会在将来的某个时候将缓冲区存储的内容写入硬盘（数据只有被写入硬盘，才算是真正的保存到硬盘里面）")])]),t._v(" "),v("h2",{attrs:{id:"_3-同步频率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-同步频率"}},[t._v("#")]),t._v(" 3.同步频率")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("选项")]),t._v(" "),v("th",[t._v("同步频率")]),t._v(" "),v("th",[t._v("特点")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("always")]),t._v(" "),v("td",[t._v("每个redis写命令都要同步写入硬盘，这样会严重降低redis的速度")]),t._v(" "),v("td",[t._v("每个redis命令都会被写入硬盘，丢失最少，需要对用哦按大量写入。处理命令受到限制（机械硬盘200个写命令，固态几万个写命令）")])]),t._v(" "),v("tr",[v("td",[t._v("everysec")]),t._v(" "),v("td",[t._v("每秒执行一次同步，显示地将多个写命令同步到硬盘")]),t._v(" "),v("td",[t._v("性能和不使用相差无几（推荐）")])]),t._v(" "),v("tr",[v("td",[t._v("no")]),t._v(" "),v("td",[t._v("让操作系统来决定应该何时进行同步")]),t._v(" "),v("td",[t._v("由系统决定何时进行AOF同步，系统奔溃的数据丢失数量不确定（不推荐）")])])])]),t._v(" "),v("h2",{attrs:{id:"_4-aof-重写-压缩"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-aof-重写-压缩"}},[t._v("#")]),t._v(" 4. AOF 重写/压缩")]),t._v(" "),v("h3",{attrs:{id:"_3-1-aof面临的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-aof面临的问题"}},[t._v("#")]),t._v(" 3.1 AOF面临的问题")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("文件的体积大小。")]),t._v(" "),v("p",[t._v("体积不断增大的AOF文件是指可能会用完硬盘所有的可用空间")])]),t._v(" "),v("li",[v("p",[t._v("文件太大操作时间长")])])]),t._v(" "),v("h3",{attrs:{id:"_3-2-解决文件过大问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-解决文件过大问题"}},[t._v("#")]),t._v(" 3.2 解决文件过大问题")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("发送BGREWRITEAOF命令")]),t._v(" "),v("p",[t._v("这个命令会移除AOF文件中的冗余命令来重写（rewrite）AOF文件")])]),t._v(" "),v("li",[v("p",[t._v("通过设置auto-aof-rewrite-percentage选项和auto-aof-rewrite-min-size选项来自动执行BGREWRITEAOF\n###3.3 BGREWRITEAOF 命令原理\nredis 创建一个子进程，然后由子进程负责对AOF文件重写")])])]),t._v(" "),v("p",[t._v("（也可能会导致性能问题和内存占用问题）")])])}),[],!1,null,null,null);_.default=r.exports}}]);