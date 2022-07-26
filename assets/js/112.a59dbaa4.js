(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{489:function(t,a,s){"use strict";s.r(a);var r=s(26),n=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"linux文件解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux文件解压"}},[t._v("#")]),t._v(" Linux文件解压")]),t._v(" "),s("h2",{attrs:{id:"_1-tar命令详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-tar命令详解"}},[t._v("#")]),t._v(" 1.  tar命令详解")]),t._v(" "),s("h3",{attrs:{id:"_1-1-五个独立命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-五个独立命令"}},[t._v("#")]),t._v(" 1.1 五个独立命令")]),t._v(" "),s("p",[t._v("这五个是独立的命令，压缩解压都要"),s("strong",[t._v("用到其中一个")]),t._v("，"),s("strong",[t._v("可以和别的命令连用但只能用其中一个")]),t._v("。")]),t._v(" "),s("p",[t._v("-c: 建立压缩档案")]),t._v(" "),s("p",[t._v("-x：解压")]),t._v(" "),s("p",[t._v("-t：查看内容")]),t._v(" "),s("p",[t._v("-r：向压缩归档文件末尾追加文件")]),t._v(" "),s("p",[t._v("-u：更新原压缩包中的文件")]),t._v(" "),s("h3",{attrs:{id:"_1-2-可选命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-可选命令"}},[t._v("#")]),t._v(" 1.2 可选命令")]),t._v(" "),s("p",[t._v("下面的参数是根据需要在压缩或解压档案时可选的。")]),t._v(" "),s("p",[t._v("-z：有gzip属性的")]),t._v(" "),s("p",[t._v("-j：有bz2属性的")]),t._v(" "),s("p",[t._v("-Z：有compress属性的")]),t._v(" "),s("p",[t._v("-v：显示所有过程")]),t._v(" "),s("p",[t._v("-O：将文件解开到标准输出")]),t._v(" "),s("h3",{attrs:{id:"_1-3-最后一个必须参数-f"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-最后一个必须参数-f"}},[t._v("#")]),t._v(" 1.3 最后一个必须参数-f")]),t._v(" "),s("p",[t._v("-f: 使用档案名字，切记，这个参数是最后一个参数，后面只能接档案名。")]),t._v(" "),s("h2",{attrs:{id:"_2-常用解压"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用解压"}},[t._v("#")]),t._v(" 2. 常用解压")]),t._v(" "),s("p",[s("strong",[t._v("压缩")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –cvf jpg.tar *.jpg       // 将目录里所有jpg文件打包成 tar.jpg \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –czf jpg.tar.gz *.jpg    // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" 压缩，生成一个 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v(" 压缩过的包，命名为 jpg.tar.gz \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –cjf jpg.tar.bz2 *.jpg   // 将目录里所有jpg文件打包成 jpg.tar 后，并且将其用 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" 压缩，生成一个 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bzip2")]),t._v(" 压缩过的包，命名为jpg.tar.bz2 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –cZf jpg.tar.Z *.jpg     // 将目录里所有 jpg 文件打包成 jpg.tar 后，并且将其用 compress 压缩，生成一个 umcompress 压缩过的包，命名为jpg.tar.Z \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rar")]),t._v(" a jpg.rar *.jpg          // rar格式的压缩，需要先下载 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rar")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" linux \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" jpg.zip *.jpg            // zip格式的压缩，需要先下载 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" linux\n")])])]),s("p",[s("strong",[t._v("解压")])]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –xvf file.tar         // 解压 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" 包 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xzvf file.tar.gz     // 解压 tar.gz \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -xjvf file.tar.bz2    // 解压 tar.bz2 \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" –xZvf file.tar.Z      // 解压 tar.Z \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unrar")]),t._v(" e file.rar          // 解压 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rar")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unzip")]),t._v(" file.zip            // 解压 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("zip")]),t._v(" \n")])])]),s("h2",{attrs:{id:"_2-7z-操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-7z-操作"}},[t._v("#")]),t._v(" 2. 7z 操作")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("安装")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("yum install p7zip\n")])])])]),t._v(" "),s("li",[s("p",[t._v("压缩")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("7za a 压缩包.7z 被压缩文件或目录\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[t._v("解压")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("#将压缩包解压到指定目录，注意：指定目录参数-o后面不要有空格\n7za x 压缩包.7z -o解压目录\n#将压缩包解压到当前目录\n7za x 压缩包.7z\n")])])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);