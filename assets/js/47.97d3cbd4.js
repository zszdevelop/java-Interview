(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{422:function(e,n,r){"use strict";r.r(n);var t=r(26),l=Object(t.a)({},(function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"filereader"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filereader"}},[e._v("#")]),e._v(" FileReader")]),e._v(" "),r("p",[e._v("使用FileReader,FileWriter 可以实现文本的复制等")]),e._v(" "),r("p",[e._v("但是对于非文本（视频文件，音频文件，图片）只能使用字节流")]),e._v(" "),r("h3",{attrs:{id:"filereader-的基本使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#filereader-的基本使用"}},[e._v("#")]),e._v(" FileReader 的基本使用")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('  File file = new File("hello.txt");\n        FileReader fr = new FileReader(file);\n        char[] c = new char[24];\n        int len;\n        while ((len = fr.read(c)) != -1){\n            String str = new String(c,0,len);\n            System.out.print(str);\n        }\n        fr.close();\n')])])]),r("h3",{attrs:{id:"复制文本文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#复制文本文件"}},[e._v("#")]),e._v(" 复制文本文件")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('// 1.输入流对应的文件src 一定要存在，否则抛异常\n        // 输出流对应的文件dest 可以不存在，执行过程由程序创建\n        FileReader fr = null;\n        FileWriter fw = null;\n        try {\n            File src = new File("hello.txt");\n            File dest = new File("cphello.txt");\n\n            fr = new FileReader(src);\n            fw = new FileWriter(dest);\n\n            char[] c = new char[24];\n            int len;\n            while ((len = fr.read(c))!= -1){\n                fw.write(c,0,len);\n            }\n        }catch (Exception e){\n            e.printStackTrace();\n        }finally {\n            if (fw !=null){\n                fw.close();\n            }if (fr != null){\n                fr.close();\n            }\n        }\n')])])])])}),[],!1,null,null,null);n.default=l.exports}}]);