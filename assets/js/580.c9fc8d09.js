(window.webpackJsonp=window.webpackJsonp||[]).push([[580],{959:function(s,t,a){"use strict";a.r(t);var n=a(26),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"消息中心数据库设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#消息中心数据库设计"}},[s._v("#")]),s._v(" 消息中心数据库设计")]),s._v(" "),a("h2",{attrs:{id:"_1-背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-背景"}},[s._v("#")]),s._v(" 1. 背景")]),s._v(" "),a("p",[s._v("消息中心是大部分系统都有的功能，如何设计一个合理的消息系统呢？")]),s._v(" "),a("p",[s._v("需求：")]),s._v(" "),a("ul",[a("li",[s._v("每个用户收到消息都应该知道，该消息的已读未读状态")])]),s._v(" "),a("h2",{attrs:{id:"_2-数据库设计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-数据库设计"}},[s._v("#")]),s._v(" 2. 数据库设计")]),s._v(" "),a("h3",{attrs:{id:"_2-1-消息表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-消息表"}},[s._v("#")]),s._v(" 2.1 消息表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" T_SYS_NOTIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主键'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TYPE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'操作类型，1 系统通知，2，用户消息'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    TITLE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'标题'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    CONTENT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'通知内容'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    CREATE_BY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建人'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    CREATE_TIME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATETIME")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    REMARK "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'备注'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'系统消息表 '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("p",[s._v("基础的消息表如上")]),s._v(" "),a("h4",{attrs:{id:"_2-1-1-消息表补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-消息表补充"}},[s._v("#")]),s._v(" 2.1.1  消息表补充")]),s._v(" "),a("p",[s._v("如果需要记录")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("该条提醒"),a("strong",[s._v("所关联的对象")])])]),s._v(" "),a("li",[a("p",[s._v("该条提醒"),a("strong",[s._v("所关联的动作")])])])]),s._v(" "),a("p",[s._v("例如")]),s._v(" "),a("ul",[a("li",[s._v("小明喜欢了文章，\n"),a("ul",[a("li",[s._v("喜欢是：action")]),s._v(" "),a("li",[s._v("那篇文章：target，targetType")])])])]),s._v(" "),a("p",[s._v("则需要新增"),a("code",[s._v("target")]),s._v("、"),a("code",[s._v("targetType")]),s._v("、"),a("code",[s._v("action")]),s._v("字段。")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" T_SYS_NOTIFY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" target "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'目标的ID'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" CONTENT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" T_SYS_NOTIFY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" targetType "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'目标的类型'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" T_SYS_NOTIFY "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ADD")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COLUMN")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("action")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'提醒信息的动作类型'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" targetType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-2-用户消息表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-用户消息表"}},[s._v("#")]),s._v(" 2.2 用户消息表")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v(" T_SYS_USER_NOTIFY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n    ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("NOT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTO_INCREMENT")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'主键'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    NOTIFY_ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'通知id'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    USER_ID "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BIGINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户id'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    IS_READ "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'是否已读'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    CREATE_TIME "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATETIME")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'创建时间'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIMARY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KEY")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COMMENT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户消息表 '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"参考文章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[s._v("#")]),s._v(" 参考文章")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/6bf8166b291c",target:"_blank",rel:"noopener noreferrer"}},[s._v("消息系统设计与实现「下篇」"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);