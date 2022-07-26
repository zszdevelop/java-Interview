(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1192:function(s,t,e){"use strict";e.r(t);var a=e(26),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"批量生成redis测试数据方法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量生成redis测试数据方法"}},[s._v("#")]),s._v(" 批量生成redis测试数据方法")]),s._v(" "),e("h2",{attrs:{id:"_1-linux-bash下面执行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-bash下面执行"}},[s._v("#")]),s._v(" 1. Linux Bash下面执行")]),s._v(" "),e("div",{staticClass:"language-ssh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('for((i=1;i<=20000000;i++)); do echo "set k$i v$i" >> /tmp/redisTest.txt ;done;\n')])])]),e("p",[s._v("生成2千万条redis批量设置kv的语句(key=kn,value=vn)写入到/tmp目录下的redisTest.txt文件中")]),s._v(" "),e("h2",{attrs:{id:"_2-用vim去掉行尾的-m符号-使用方式如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-用vim去掉行尾的-m符号-使用方式如下"}},[s._v("#")]),s._v(" 2.用vim去掉行尾的^M符号，使用方式如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /tmp/redisTest.txt\n:set fileformat=dos #设置文件的格式，通过这句话去掉每行结尾的^M符号\n:wq #保存退出\n")])])]),e("h2",{attrs:{id:"_3-通过redis提供的管道-pipe形式-去跑redis-传入文件的指令批量灌数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-通过redis提供的管道-pipe形式-去跑redis-传入文件的指令批量灌数据"}},[s._v("#")]),s._v(" 3.通过redis提供的管道–pipe形式，去跑redis，传入文件的指令批量灌数据")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cat /tmp/redisTest.txt | 路径/redis-5.0.0/src/redis-cli -h 主机ip -p 端口号 --pipe\n")])])]),e("p",[s._v("我本机的地址")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cat /tmp/redisTest.txt | /usr/local/redis/bin/redis-cli -h localhost -p 6379  --pipe\n")])])]),e("p",[s._v("大概需要花10分钟左右")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210410103828296.png",alt:"image-20210410103828296"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);