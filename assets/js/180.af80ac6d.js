(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{560:function(s,t,a){"use strict";a.r(t);var e=a(26),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"达梦数据库-sql创建用户与授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#达梦数据库-sql创建用户与授权"}},[s._v("#")]),s._v(" 达梦数据库-SQL创建用户与授权")]),s._v(" "),a("h2",{attrs:{id:"_1-创建用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建用户"}},[s._v("#")]),s._v(" 1. 创建用户")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),s._v(" datafile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/mypath/TEST.DBF'")]),s._v(" size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("180")]),s._v(" autoextend "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" maxsize "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16777215")]),s._v(" CACHE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NORMAL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mypassword"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" failed_login_attemps "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password_lock_time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" password_grace_time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("index")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tablespace")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DBA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"RESOURCE"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"PUBLIC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SOI"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VIEW")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PROCEDURE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" SEQUENCE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" CONTEXT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INDEX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" LINK "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AUTHORIZATION")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"_2-给其他用户授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-给其他用户授权"}},[s._v("#")]),s._v(" 2. 给其他用户授权")]),s._v(" "),a("p",[s._v("将A用户的视图授权给B用户")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"B"')]),s._v(" identified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mypassword"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("V_SYS_USER "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" B "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("grant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("V_SYS_DEPT "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" B "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);