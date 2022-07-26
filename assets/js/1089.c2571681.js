(window.webpackJsonp=window.webpackJsonp||[]).push([[1089],{1466:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"gitignore文件屏蔽规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gitignore文件屏蔽规则"}},[t._v("#")]),t._v(" gitignore文件屏蔽规则")]),t._v(" "),a("p",[t._v("在使用git仓库时，我们并不希望将所有的文件都提交到仓库中，需要对一些文件进行屏蔽，有些则要保留")]),t._v(" "),a("p",[t._v("此时我们就需要使用到"),a("code",[t._v(".gitignore")]),t._v("文件")]),t._v(" "),a("h2",{attrs:{id:"_2-gitignore-文件格式规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-gitignore-文件格式规范"}},[t._v("#")]),t._v(" 2. gitignore 文件格式规范")]),t._v(" "),a("ul",[a("li",[t._v("所有空行或#开通的行都会被忽略")]),t._v(" "),a("li",[t._v("可以使用标准的"),a("strong",[t._v("glob 模式匹配")])]),t._v(" "),a("li",[t._v("文件或目录前加"),a("code",[t._v("/")]),t._v("表示仓库根目录的对应文件")]),t._v(" "),a("li",[t._v("匹配模式最后跟反斜杠"),a("code",[t._v("/")]),t._v("说明要忽略目录")]),t._v(" "),a("li",[t._v("要特殊不许了某个文件或目录，可以在模式钱加上取反"),a("code",[t._v("!")])])]),t._v(" "),a("h3",{attrs:{id:"_2-1-glob-模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-glob-模式"}},[t._v("#")]),t._v(" 2.1 glob 模式")]),t._v(" "),a("p",[t._v("其中glob模式是指shell 所使用的简化了的正则表达式")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("星号"),a("code",[t._v("*")]),t._v("匹配零个或多个任意字符")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("[abc]")]),t._v("匹配任何一个列在方括号中的字符（这个例子要么匹配一个a，要么匹配一个b，要么匹配一个c），")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("？")]),t._v("匹配一个任意字符")])])]),t._v(" "),a("li",[a("p",[t._v("如果在方括号中使用短划线分割两个字符，表示所有在这两个字符范围内的都可以匹配")]),t._v(" "),a("p",[t._v("例如：[0-9] 表示匹配所有0-9的数字")])])]),t._v(" "),a("h2",{attrs:{id:"_3-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-案例"}},[t._v("#")]),t._v(" 3. 案例")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("*.a                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 所有以 '.a' 为后缀的文件都屏蔽掉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Office 缓存文件")]),t._v("\n~"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("*.docx\n~"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("*.ppt\n~"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("*.pptx \n~"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$'")]),t._v("*.xls\n\ntags                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仓库中所有名为 tags 的文件都屏蔽")]),t._v("\ncore.*                 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 仓库中所有以 'core.' 开头的文件都屏蔽")]),t._v("\n\ntools/                "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 屏蔽目录 tools")]),t._v("\nlog/*                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 屏蔽目录 log 下的所有文件，但不屏蔽 log 目录本身")]),t._v("\n\n/log.log               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 只屏蔽仓库根目录下的 log.log 文件，其他目录中的不屏蔽")]),t._v("\nreadme.md       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 屏蔽仓库中所有名为 readme.md 的文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("/readme.md     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在上一条屏蔽规则的条件下，不屏蔽仓库根目录下的 readme.md 文")]),t._v("\n")])])]),a("p",[t._v("注意：\n例子中的最后两条的顺序很重要，必须要先屏蔽所有的，然后才建立特殊不屏蔽的规则！")])])}),[],!1,null,null,null);s.default=n.exports}}]);