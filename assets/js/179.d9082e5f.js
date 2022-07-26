(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{556:function(a,s,t){"use strict";t.r(s);var e=t(26),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"达梦数据库-dmrman-备份-恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#达梦数据库-dmrman-备份-恢复"}},[a._v("#")]),a._v(" 达梦数据库-DMRMAN（备份，恢复）")]),a._v(" "),t("h2",{attrs:{id:"_1-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[a._v("#")]),a._v(" 1. 简介")]),a._v(" "),t("p",[a._v("我们再Windows中,我们可以使用图形化客户端工具进行备份还原，但是在Linux 中就不太好使了。需要使用DMRMAN")]),a._v(" "),t("h2",{attrs:{id:"_2-使用步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-使用步骤"}},[a._v("#")]),a._v(" 2. 使用步骤")]),a._v(" "),t("p",[a._v("前置步骤")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("停止服务")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("systemctl stop DmServiceDAMENG.service\n")])])])]),a._v(" "),t("li",[t("p",[a._v("切换到 dmaba用户")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("su")]),a._v(" - dmdba\n")])])])]),a._v(" "),t("li",[t("p",[a._v("在bin目录下启动DMRMAN")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("./dmrman\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_2-1-备份"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-备份"}},[a._v("#")]),a._v(" 2.1 备份")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("全量备份")]),a._v(" "),t("div",{staticClass:"language-SH extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("BACKUP DATABASE "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/data/DAMENG/dm.ini'")]),a._v(" FULL BACKUPSET "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/back/dmmback'")]),a._v("\n")])])])])]),a._v(" "),t("h3",{attrs:{id:"_2-2-还原"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-还原"}},[a._v("#")]),a._v(" 2.2 还原")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("还原数据库")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("RESTORE DATABASE "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/data/DAMENG/dm.ini'")]),a._v(" from backupset "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/back/dmmback'")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("恢复数据库")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("RECOVER DATABASE "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/data/DAMENG/dm.ini'")]),a._v(" from backupset "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/back/dmmback'")]),a._v("\n")])])])]),a._v(" "),t("li",[t("p",[a._v("更新dm_nagic")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("RECOVER DATABASE "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/soft/dm8/data/DAMENG/dm.ini'")]),a._v(" update db_magic\n")])])])]),a._v(" "),t("li",[t("p",[a._v("启动")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl start DmServiceDAMENG.service\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);