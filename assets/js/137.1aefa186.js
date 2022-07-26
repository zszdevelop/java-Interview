(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{512:function(s,t,a){"use strict";a.r(t);var n=a(26),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"sort排序命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sort排序命令"}},[s._v("#")]),s._v(" sort排序命令")]),s._v(" "),a("h2",{attrs:{id:"_1-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[s._v("#")]),s._v(" 1 简介")]),s._v(" "),a("p",[s._v("sort命令是帮我们依据不同的数据类型进行排序")]),s._v(" "),a("blockquote",[a("p",[s._v("sort可针对文本文件的内容，以行为单位来排序。")])]),s._v(" "),a("h2",{attrs:{id:"_2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-语法"}},[s._v("#")]),s._v(" 2 语法")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sort [-bcfMnrtk][源文件][-o 输出文件] \n")])])]),a("h2",{attrs:{id:"_3-参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参数"}},[s._v("#")]),s._v(" 3 参数")]),s._v(" "),a("ul",[a("li",[s._v("-b  忽略每行前面开始出的空格字符。")]),s._v(" "),a("li",[s._v("-c  检查文件是否已经按照顺序排序。")]),s._v(" "),a("li",[s._v("-f  排序时，忽略大小写字母。")]),s._v(" "),a("li",[s._v("-M  将前面3个字母依照月份的缩写进行排序。")]),s._v(" "),a("li",[s._v("-n  依照数值的大小排序。")]),s._v(" "),a("li",[s._v("-o<输出文件>  将排序后的结果存入指定的文件。")]),s._v(" "),a("li",[s._v("-r  以相反的顺序来排序。")]),s._v(" "),a("li",[s._v("-t<分隔字符>  指定排序时所用的栏位分隔字符。")]),s._v(" "),a("li",[s._v("-k 选择以哪个区间进行排序。")])]),s._v(" "),a("h2",{attrs:{id:"_4-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-示例"}},[s._v("#")]),s._v(" 4 示例")]),s._v(" "),a("h3",{attrs:{id:"_4-1-示例1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-示例1"}},[s._v("#")]),s._v(" 4.1 示例1")]),s._v(" "),a("p",[s._v("sort将文件的每一行作为一个单位，相互比较，比较原则是从首字符向后，依次按ASCII码值进行比较，最后将他们按升序输出。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" seq.txt\nbanana\napple\npear\norange\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" seq.txt\napple\nbanana\norange\npear\n")])])]),a("p",[s._v("用户可以保存排序后的文件内容，或把排序后的文件内容输出至打印机。下例中用户把排序后的文件内容保存到名为result的文件中。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" seq.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" result\n")])])]),a("h3",{attrs:{id:"_4-2-示例2-sort的-u选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-示例2-sort的-u选项"}},[s._v("#")]),s._v(" 4.2 示例2:sort的-u选项")]),s._v(" "),a("p",[s._v("它的作用很简单，就是在输出行中去除重复行。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" seq.txt\nbanana\napple\npear\norange\npear\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" seq.txt\napple\nbanana\norange\npear\npear\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -u seq.txt\napple\nbanana\norange\npear\n")])])]),a("p",[s._v("pear由于重复被-u选项无情的删除了。")]),s._v(" "),a("h3",{attrs:{id:"_4-3-示例3-sort的-r选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-示例3-sort的-r选项"}},[s._v("#")]),s._v(" 4.3 示例3：sort的-r选项")]),s._v(" "),a("p",[s._v("sort默认的排序方式是升序，如果想改成降序，就加个-r就搞定了。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-4-示例4-sort的-o选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-示例4-sort的-o选项"}},[s._v("#")]),s._v(" 4.4 示例4：sort的-o选项")]),s._v(" "),a("p",[s._v("由于sort默认是把结果输出到标准输出，所以需要用重定向才能将结果写入文件，形如sort filename > newfile。")]),s._v(" "),a("p",[s._v("但是，如果你想把排序结果输出到原文件中，用重定向可就不行了。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r number.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" number.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" number.txt\n$\n")])])]),a("p",[s._v("看，竟然将number清空了。就在这个时候，-o选项出现了，它成功的解决了这个问题，让你放心的将结果写入原文件。这或许也是-o比重定向的唯一优势所在。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -r number.txt -o number.txt\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-5-示例5-sort的-n选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-示例5-sort的-n选项"}},[s._v("#")]),s._v(" 4.5 示例5：sort的-n选项")]),s._v(" "),a("p",[s._v("你有没有遇到过10比2小的情况。我反正遇到过。出现这种情况是由于排序程序将这些数字按字符来排序了，排序程序会先比较1和2，显然1小，所以就将10放在2前面喽。这也是sort的一贯作风。我们如果想改变这种现状，就要使用-n选项，来告诉sort，“要以数值来排序”！")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -n number.txt\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v("\n")])])]),a("h3",{attrs:{id:"_4-6-示例6-sort的-t选项和-k选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-示例6-sort的-t选项和-k选项"}},[s._v("#")]),s._v(" 4.6 示例6： sort的-t选项和-k选项")]),s._v(" "),a("p",[s._v("如果有一个文件的内容是这样：")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ cat facebook.txt\nbanana:30:5.5\napple:10:2.5\npear:90:2.3\norange:20:3.4\n")])])]),a("p",[s._v("这个文件有三列，列与列之间用冒号隔开了，第一列表示水果类型，第二列表示水果数量，第三列表示水果价格。那么我想以水果数量来排序，也就是以第二列来排序，如何利用sort实现？幸好，sort提供了-t选项，后面可以设定间隔符。指定了间隔符之后，就可以用-k来指定列数了。")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("$ sort -n -k 2 -t ‘:’ facebook.txt\napple:10:2.5\norange:20:3.4\nbanana:30:5.5\npear:90:2.3\n")])])]),a("h2",{attrs:{id:"_5-其他的sort常用选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他的sort常用选项"}},[s._v("#")]),s._v(" 5 其他的sort常用选项")]),s._v(" "),a("ul",[a("li",[s._v("-f 会将小写字母都转换为大写字母来进行比较，亦即忽略大小写")]),s._v(" "),a("li",[s._v("-c 会检查文件是否已排好序，如果乱序，则输出第一个乱序的行的相关信息，最后返回1")]),s._v(" "),a("li",[s._v("-C 会检查文件是否已排好序，如果乱序，不输出内容，仅返回1")]),s._v(" "),a("li",[s._v("-M 会以月份来排序，比如JAN小于FEB等等")]),s._v(" "),a("li",[s._v("-b 会忽略每一行前面的所有空白部分，从第一个可见字符开始比较。")])])])}),[],!1,null,null,null);t.default=r.exports}}]);