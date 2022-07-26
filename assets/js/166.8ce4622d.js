(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{544:function(s,t,a){"use strict";a.r(t);var n=a(26),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"oracle-自定义函数语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle-自定义函数语法"}},[s._v("#")]),s._v(" Oracle 自定义函数语法")]),s._v(" "),a("h2",{attrs:{id:"_1-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-语法"}},[s._v("#")]),s._v(" 1. 语法")]),s._v(" "),a("p",[a("strong",[s._v("Oracle自定义函数的语法如下：")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" 函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 模式 参数类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" 返回值类型\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v("\n变量"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 变量类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n变量"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" 变量类型"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n    函数体"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" 函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("参数的模式有3种:(如果没有注明, 参数默认的类型为 in.)")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("in: 为只读模式, 在函数中, 参数的值只能被引用, 不能被改变;")])]),s._v(" "),a("li",[a("p",[s._v("out: 为只写模式, 只能被赋值, 不能被引用;")])]),s._v(" "),a("li",[a("p",[s._v("in out:  可读可写.")])])]),s._v(" "),a("p",[s._v("提醒:")]),s._v(" "),a("ol",[a("li",[s._v("在Oracle自定义函数中, else if 的正确写法是 elsif 而不是 else if")]),s._v(" "),a("li",[s._v('使用 if 需要加 then  "if 条件 then 操作"')])]),s._v(" "),a("h2",{attrs:{id:"_2-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-示例"}},[s._v("#")]),s._v(" 2. 示例")]),s._v(" "),a("h3",{attrs:{id:"_2-1-代替mysql的find-in-set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-代替mysql的find-in-set"}},[s._v("#")]),s._v(" 2.1 代替MYSQL的FIND_IN_SET")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ----------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 函数 ，代替MYSQL的FIND_IN_SET")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 例如： SELECT * FROM SYS_DEPT WHERE FIND_IN_SET (101,ANCESTORS) <> 0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- MYSQL可接受0或其它NUMBER做为WHERE 条件，ORACLE只接受表达式做为WHERE 条件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- ----------------------------")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("OR")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("REPLACE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" FIND_IN_SET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ARG1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" VARCHAR2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ARG2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURN")]),s._v(" NUMBER "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" RESULT NUMBER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BEGIN")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" INSTR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("ARG2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v("ARG1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v(" RESULT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" DUAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RETURN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RESULT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("END")]),s._v(" FIND_IN_SET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-2-读入两个值-返回比较大的值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-读入两个值-返回比较大的值"}},[s._v("#")]),s._v(" 2.2 读入两个值, 返回比较大的值")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" function1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("para1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" para2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" number \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" para1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" para2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" para1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" para2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" function1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("p",[s._v("使用")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" function1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("666")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("333")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" dual"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/libertine1993/article/details/47264211",target:"_blank",rel:"noopener noreferrer"}},[s._v("Oracle 自定义函数语法与实例"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);