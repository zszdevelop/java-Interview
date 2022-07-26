(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{495:function(a,s,t){"use strict";t.r(s);var e=t(26),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-locate查找文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-locate查找文件"}},[a._v("#")]),a._v(" Linux-locate查找文件")]),a._v(" "),t("h2",{attrs:{id:"_1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1 简介")]),a._v(" "),t("p",[a._v("locate命令其实是“find -name”的另一种写法，但是要比后者快得多，原因在于它不搜索具体目录，"),t("strong",[a._v("而是搜索一个数据库（/var/lib/locatedb），这个数据库中含有本地所有文件信息")]),a._v("。Linux系统自动创建这个数据库，并且"),t("strong",[a._v("每天自动更新一次")]),a._v("，所以使用locate命令查不到最新变动过的文件。为了避免这种情况，可以在使用locate之前，先使用updatedb命令，手动更新数据库。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令语法"}},[a._v("#")]),a._v(" 2 命令语法")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("OPTION"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("… "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("PATTERN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("…\n")])])]),t("h2",{attrs:{id:"_3-命令参数-用得不多"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令参数-用得不多"}},[a._v("#")]),a._v(" 3 命令参数（用得不多）")]),a._v(" "),t("p",[a._v("在mlocate数据库中搜索条目.")]),a._v(" "),t("ul",[t("li",[a._v("-A, --all   只显示匹配所有模式的条目")]),a._v(" "),t("li",[a._v("-b, --basename     匹配唯一的路径名称的基本文件名")]),a._v(" "),t("li",[a._v("-c, --count      只显示找到条目的号码")]),a._v(" "),t("li",[a._v("-d, --database DBPATH 用 DBPATH 替代默认的数据库(/var/lib/mlocate/mlocate.db)")]),a._v(" "),t("li",[a._v("-e, --existing     只显示当前存在的文件条目")]),a._v(" "),t("li",[a._v("-L, --follow      当文件存在时跟随蔓延的符号链接 (默认)")]),a._v(" "),t("li",[a._v("-h, --help       显示本帮助")]),a._v(" "),t("li",[a._v("-i, --ignore-case   匹配模式时忽略大小写区别")]),a._v(" "),t("li",[a._v("-l, --limit, -n LIMIT 限制为 LIMIT项目的输出 (或 计数)")]),a._v(" "),t("li",[a._v("-m, --mmap       忽略向后兼容性")]),a._v(" "),t("li",[a._v("-P, --nofollow, -H   当检查文件时不跟随蔓延的符号链接")]),a._v(" "),t("li",[a._v("-0, --null       输出时以 NUL 分隔项目")]),a._v(" "),t("li",[a._v("-S, --statistics    不搜索项目,显示有关每个已用数据库的统计信息")]),a._v(" "),t("li",[a._v("-q, --quiet      不报告关于读取数据库的错误消息")]),a._v(" "),t("li",[a._v("-r, --regexp REGEXP  搜索基本正则表达式 REGEXP 来代替模式\n--regex      模式是扩展正则表达式")]),a._v(" "),t("li",[a._v("-s, --stdio      忽略向后兼容性")]),a._v(" "),t("li",[a._v("-V, --version     显示版本信息")]),a._v(" "),t("li",[a._v("-w, --wholename    匹配完整路径名 (默认)")])]),a._v(" "),t("h2",{attrs:{id:"_4-实例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-实例"}},[a._v("#")]),a._v(" 4 实例")]),a._v(" "),t("h3",{attrs:{id:"_4-1-查找包含某个字符串的相关文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-查找包含某个字符串的相关文件"}},[a._v("#")]),a._v(" 4.1 查找包含某个字符串的相关文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" redis\n")])])]),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419113313972.png",alt:"image-20220419113313972"}})]),a._v(" "),t("h3",{attrs:{id:"_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-按文件名查找文件-不包含填充字符的模式被解释为-关键字"}},[a._v("#")]),a._v(" 4.2 按文件名查找文件（不包含填充字符的模式被解释为 "),t("em",[a._v("关键字")]),a._v("）:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 语法")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" */文件名\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 示例")]),a._v("\n "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" */redis\n")])])]),t("p",[a._v("这样过滤出的结果更加符合我们想要的")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419134741153.png",alt:"image-20220419134741153"}})]),a._v(" "),t("h3",{attrs:{id:"_4-3-重新建立文件数据索引数据库。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-重新建立文件数据索引数据库。"}},[a._v("#")]),a._v(" 4.3 重新建立文件数据索引数据库。")]),a._v(" "),t("p",[a._v("如果要查找最近添加的文件，则需要执行此操作:")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" updatedb\n")])])]),t("h3",{attrs:{id:"_4-4-搜索目录下所有以-sh开头的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-搜索目录下所有以-sh开头的文件"}},[a._v("#")]),a._v(" 4.4 搜索目录下所有以 sh开头的文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" /bin/sh\n")])])]),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419113440829.png",alt:"image-20220419113440829"}})]),a._v(" "),t("h3",{attrs:{id:"_4-5-指定显示数量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-指定显示数量"}},[a._v("#")]),a._v(" 4.5 指定显示数量")]),a._v(" "),t("p",[a._v("如果显示的内容过多，可以使用 -n 选项来限定显示数量。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v(" -n "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" redis\n")])])]),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419113647925.png",alt:"image-20220419113647925"}})]),a._v(" "),t("h2",{attrs:{id:"_5-locate-命令安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-locate-命令安装"}},[a._v("#")]),a._v(" 5 locate 命令安装")]),a._v(" "),t("p",[a._v("如果locate 搜索时提示命令不存在")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220419112033248.png",alt:"image-20220419112033248"}})]),a._v(" "),t("p",[a._v("则需要先安装一下")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mlocate\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" updatedb\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("locate")]),a._v("  *.doc\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);