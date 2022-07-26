(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{747:function(e,a,t){"use strict";t.r(a);var r=t(26),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jpa方言设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jpa方言设置"}},[e._v("#")]),e._v(" JPA方言设置")]),e._v(" "),t("p",[e._v("例如数据库的sql的分页每个版本可能不一样。")]),e._v(" "),t("p",[e._v("例如在oracle11g 上的分页为：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Hibernate: \n    select\n        * \n    from\n        ( select\n            row_.*,\n            rownum rownum_ \n        from\n            ( select\n               *\n            from\n                MY_TABLE  ) row_ \n        where\n            rownum <= ?\n        ) \n    where\n        rownum_ > ?\n")])])]),t("p",[e._v("而在oracle 12G 上是:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" select\n        *\n    from\n       MY_TABLE\n  offset 0 rows fetch next 10 rows only\n")])])]),t("h2",{attrs:{id:"_2-方言设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-方言设置"}},[e._v("#")]),e._v(" 2. 方言设置")]),e._v(" "),t("p",[e._v("设置oracle11G的方言")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(" spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect\n")])])]),t("p",[e._v("oracle12G 的方言")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.Oracle10gDialect\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);