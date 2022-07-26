(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{679:function(t,a,s){"use strict";s.r(a);var n=s(26),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"flyway数据库版本管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flyway数据库版本管理"}},[t._v("#")]),t._v(" Flyway数据库版本管理")]),t._v(" "),s("h2",{attrs:{id:"_1-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-简介"}},[t._v("#")]),t._v(" 1. 简介")]),t._v(" "),s("p",[t._v("Flyway 是一款开源的数据库版本管理工具")]),t._v(" "),s("h2",{attrs:{id:"_2-为什么要用flyway"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要用flyway"}},[t._v("#")]),t._v(" 2. 为什么要用Flyway")]),t._v(" "),s("blockquote",[s("ol",[s("li",[s("p",[t._v("自己写的SQL忘了在所有环境执行；")])]),t._v(" "),s("li",[s("p",[t._v("别人写的SQL我们不能确定是否都在所有环境执行过了；")])]),t._v(" "),s("li",[s("p",[t._v("有人修改了已经执行过的SQL，期望再次执行；")])]),t._v(" "),s("li",[s("p",[t._v("需要新增环境做数据迁移；")])]),t._v(" "),s("li",[s("p",[t._v("每次发版需要手动控制先发DB版本，再发布应用版本；")])])])]),t._v(" "),s("p",[t._v("以上种种场景都在说明数据库版本管理的重要性。特别是我们在开发环境的修改，如果没做好管理。很可能就影响线上环境。导致项目部署异常")]),t._v(" "),s("h2",{attrs:{id:"_3-运行原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-运行原理"}},[t._v("#")]),t._v(" 3. 运行原理")]),t._v(" "),s("p",[t._v("当 Flyway 连接数据库中的 schema 后，会先检查是否已存在 "),s("strong",[t._v("flyway_schema_history")]),t._v(" （默认名，也可自定义）表，如果没有则创建。该表用于跟踪数据库的状态，如数据迁移的版本，迁移成功状态等信息。")]),t._v(" "),s("p",[t._v("当 "),s("strong",[t._v("flyway_schema_history")]),t._v(" 存在后，Flyway 会扫描文件系统或应用中的 classpath 目录的数据迁移文件，然后根据它们的版本号进行按序迁移，如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015152758896.png",alt:"image-20201015152758896"}})]),t._v(" "),s("p",[s("strong",[t._v("flyway_schema_history")]),t._v(" 表记录的内容如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("installed_rank")]),t._v(" "),s("th",[t._v("version")]),t._v(" "),s("th",[t._v("description")]),t._v(" "),s("th",[t._v("type")]),t._v(" "),s("th",[t._v("script")]),t._v(" "),s("th",[t._v("checksum")]),t._v(" "),s("th",[t._v("installed_by")]),t._v(" "),s("th",[t._v("installed_on")]),t._v(" "),s("th",[t._v("execution_time")]),t._v(" "),s("th",[t._v("success")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Initial Setup")]),t._v(" "),s("td",[t._v("SQL")]),t._v(" "),s("td",[t._v("V1__Initial_Setup.sql")]),t._v(" "),s("td",[t._v("1996767037")]),t._v(" "),s("td",[t._v("axel")]),t._v(" "),s("td",[t._v("2016-02-04 22:23:00.0")]),t._v(" "),s("td",[t._v("546")]),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("2")]),t._v(" "),s("td",[t._v("First Changes")]),t._v(" "),s("td",[t._v("SQL")]),t._v(" "),s("td",[t._v("V2__First_Changes.sql")]),t._v(" "),s("td",[t._v("1279644856")]),t._v(" "),s("td",[t._v("axel")]),t._v(" "),s("td",[t._v("2016-02-06 09:18:00.0")]),t._v(" "),s("td",[t._v("127")]),t._v(" "),s("td",[t._v("true")])])])]),t._v(" "),s("p",[s("strong",[t._v("由于 flyway_schema_history 表中记录了迁移的版本号，如果文件的版本号小于或等于标记为当前版本的版本号，则忽略它们不执行。")])]),t._v(" "),s("h2",{attrs:{id:"_4-集成使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-集成使用"}},[t._v("#")]),t._v(" 4. 集成使用")]),t._v(" "),s("h3",{attrs:{id:"_4-1-添加依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-添加依赖"}},[t._v("#")]),t._v(" 4.1 添加依赖")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.springframework.boot"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("spring-boot-starter-jdbc"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("mysql-connector-java"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.flywaydb"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flyway-core"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.2.4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("flyway-core： flyway 核心库")]),t._v(" "),s("li",[t._v("spring-boot-starter-jdbc：不能省略，否则运行无效果")]),t._v(" "),s("li",[t._v("mysql-connector-java： 根据实际数据库决定")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-添加配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-添加配置文件"}},[t._v("#")]),t._v(" 4.2 添加配置文件")]),t._v(" "),s("p",[t._v("在application.yml 添加如下配置")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//120.79.200.111"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/mytest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("?")]),t._v("useUnicode=true"),s("span",{pre:!0,attrs:{class:"token important"}},[t._v("&characterEncoding=UTF-8&allowMultiQueries=true&rewriteBatchedStatements=true&useSSL=false&serverTimezone=GMT%2B8")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zsz123456\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flyway 配置")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("flyway")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用或禁用 flyway")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# flyway 的 clean 命令会删除指定 schema 下的所有 table, 生产务必禁掉。这个默认值是 false 理论上作为默认配置是不科学的。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("clean-disabled")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# SQL 脚本的目录,多个路径使用逗号分隔 默认值 classpath:db/migration")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("db/migration\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  metadata 版本控制信息表 默认 flyway_schema_history")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flyway_schema_history\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果没有 flyway_schema_history 这个 metadata 表， 在执行 flyway migrate 命令之前, 必须先执行 flyway baseline 命令")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置为 true 后 flyway 将在需要 baseline 的时候, 自动执行一次 baseline。")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseline-on-migrate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定 baseline 的版本号,默认值为 1, 低于该版本号的 SQL 文件, migrate 时会被忽略")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("baseline-version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 字符编码 默认 UTF-8")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("encoding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UTF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否允许不按顺序迁移 开发建议 true  生产建议 false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("out-of-order")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 需要 flyway 管控的 schema list,这里我们配置为flyway  缺省的话, 使用spring.datasource.url 配置的那个 schema,")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以指定多个schema, 但仅会在第一个schema下建立 metadata 表, 也仅在第一个schema应用migration sql 脚本.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 但flyway Clean 命令会依次在这些schema下都执行一遍. 所以 确保生产 spring.flyway.clean-disabled 为 true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    schemas: flyway")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行迁移时是否自动调用验证   当你的 版本不符合逻辑 比如 你先执行了 DML 而没有 对应的DDL 会抛出异常")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("validate-on-migrate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("h3",{attrs:{id:"_4-3-配置数据库迁移文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-配置数据库迁移文件"}},[t._v("#")]),t._v(" 4.3 配置数据库迁移文件")]),t._v(" "),s("p",[t._v("在src/main/resources目录下面新建db.migration文件夹，默认情况下，该目录下的.sql文件就算是需要被flyway做版本控制的数据库SQL语句。")]),t._v(" "),s("h4",{attrs:{id:"_4-3-1-sql语句命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-sql语句命名规范"}},[t._v("#")]),t._v(" 4.3.1 SQL语句命名规范")]),t._v(" "),s("p",[t._v("SQL语句命名需要遵从一定的规范，否则运行的时候flyway会报错。命名规则主要有两种：")]),t._v(" "),s("ol",[s("li",[t._v('仅需要被执行一次的SQL命名以大写的"V"开头，后面跟上"0~9"数字的组合,数字之间可以用“.”或者下划线"_"分割开，然后再以两个下划线分割，其后跟文件名称，最后以.sql结尾。比如，'),s("code",[t._v("V2.1.5__create_user_ddl.sql")]),t._v("、"),s("code",[t._v("V4.1_2__add_user_dml.sql")]),t._v("。")]),t._v(" "),s("li",[t._v("可重复运行的SQL，则以大写的“R”开头，后面再以两个下划线分割，其后跟文件名称，最后以.sql结尾。。比如，"),s("code",[t._v("R__truncate_user_dml.sql")]),t._v("。")])]),t._v(" "),s("p",[t._v("其中，V开头的SQL执行优先级要比R开头的SQL优先级高。")]),t._v(" "),s("h4",{attrs:{id:"_4-2-2-新建脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-新建脚本"}},[t._v("#")]),t._v(" 4.2.2 新建脚本")]),t._v(" "),s("p",[t._v("demo准备了3个脚本：如下")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("V1__create_user.sql")]),t._v("，其中代码如下，目的是建立一张user表，且只执行一次。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("IF")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("EXISTS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("USER_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AUTO_INCREMENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("USER_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户姓名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("AGE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("COMMENT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'年龄'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("CREATED_TIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("CREATED_BY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNKNOWN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("UPDATED_TIME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("datetime")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("UPDATED_BY"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("NOT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'UNKNOWN'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PRIMARY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("KEY")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v("USER_ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ENGINE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("InnoDB")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DEFAULT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHARSET")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("utf8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("V2__add_user.sql")]),t._v("，其中代码如下，目的是往user表中插入一条数据，且只执行一次。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lisi'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("R__add_unknown_user.sql")]),t._v("，其中代码如下，目的是每次启动倘若有变化，则往user表中插入一条数据。")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("user_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unknown'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("33")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("与之相对应的目录截图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015154425588.png",alt:"image-20201015154425588"}})])])]),t._v(" "),s("p",[t._v("其中1.0.0、1.0.1和every的文件夹不会影响flyway对SQL的识别和运行，可以自行取名和分类。")]),t._v(" "),s("h3",{attrs:{id:"_4-4-运行项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-运行项目"}},[t._v("#")]),t._v(" 4.4 运行项目")]),t._v(" "),s("p",[t._v("我们项目运行后可以看到如下的日志")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015154844759.png",alt:"image-20201015154844759"}})]),t._v(" "),s("h3",{attrs:{id:"_4-5-查看运行效果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-查看运行效果"}},[t._v("#")]),t._v(" 4.5 查看运行效果")]),t._v(" "),s("p",[t._v("数据库中多了两张表")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155011691.png",alt:"image-20201015155011691"}})]),t._v(" "),s("p",[t._v("其中flyway_scheme_history记录了相关记录")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155042685.png",alt:"image-20201015155042685"}})]),t._v(" "),s("p",[t._v("user表也已经创建好了并插入了两条数据：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155339540.png",alt:"image-20201015155339540"}})]),t._v(" "),s("h2",{attrs:{id:"_5-maven插件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-maven插件的使用"}},[t._v("#")]),t._v(" 5. maven插件的使用")]),t._v(" "),s("p",[t._v("以上步骤中，每次想要migration都需要运行整个springboot项目，并且只能执行migrate一种命令，其实flyway还是有很多其它命令的。maven插件给了我们不需要启动项目就能执行flyway各种命令的机会。")]),t._v(" "),s("p",[t._v("在pom中引入flyway的插件，同时配置好对应的数据库连接。")]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.flywaydb"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("flyway-maven-plugin"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.2.4"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("jdbc:mysql://127.0.0.1:3306/mytest?useUnicode=true"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("characterEncoding=utf8"),s("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&"}},[t._v("&amp;")]),t._v("serverTimezone=GMT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("root"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("root"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.mysql.cj.jdbc.Driver"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("driver")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("configuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("然后更新maven插件列表，就可以看到flyway的全部命令了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201015155608449.png",alt:"image-20201015155608449"}})]),t._v(" "),s("p",[t._v("此时，我们双击执行上图中的flyway:migrate的效果和启动整个工程执行migrate的效果是一样的。")]),t._v(" "),s("p",[t._v("其它命令的作用如下列出，各位可自行实验体会：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("baseline")]),t._v(" "),s("p",[t._v("对已经存在数据库Schema结构的数据库一种解决方案。实现在非空数据库新建MetaData表，并把Migrations应用到该数据库；也可以在已有表结构的数据库中实现添加Metadata表。")])]),t._v(" "),s("li",[s("p",[t._v("clean")]),t._v(" "),s("p",[t._v("清除掉对应数据库Schema中所有的对象，包括表结构，视图，存储过程等，clean操作在dev 和 test阶段很好用，但在生产环境务必禁用。")])]),t._v(" "),s("li",[s("p",[t._v("info")]),t._v(" "),s("p",[t._v("用于打印所有的Migrations的详细和状态信息，也是通过MetaData和Migrations完成的，可以快速定位当前的数据库版本。")])]),t._v(" "),s("li",[s("p",[t._v("repair")]),t._v(" "),s("p",[t._v("repair操作能够修复metaData表，该操作在metadata出现错误时很有用。")])]),t._v(" "),s("li",[s("p",[t._v("undo")]),t._v(" "),s("p",[t._v("撤销操作，社区版不支持。")])]),t._v(" "),s("li",[s("p",[t._v("validate")]),t._v(" "),s("p",[t._v("验证已经apply的Migrations是否有变更，默认开启的，原理是对比MetaData表与本地Migrations的checkNum值，如果值相同则验证通过，否则失败。")])])]),t._v(" "),s("h2",{attrs:{id:"_5-flyway注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-flyway注意事项"}},[t._v("#")]),t._v(" 5. flyway注意事项")]),t._v(" "),s("ol",[s("li",[t._v("flyway执行migrate必须在空白的数据库上进行，否则报错；")]),t._v(" "),s("li",[t._v("对于已经有数据的数据库，必须先baseline，然后才能migrate；")]),t._v(" "),s("li",[t._v("clean操作是删除数据库的所有内容，包括baseline之前的内容；")]),t._v(" "),s("li",[t._v("尽量不要修改已经执行过的SQL，即便是R开头的可反复执行的SQL，它们会不利于数据迁移；")])]),t._v(" "),s("h2",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/567a8a161641",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flyway快速上手教程"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.im/entry/6844903802215071758",target:"_blank",rel:"noopener noreferrer"}},[t._v("Flyway 简单入门教程"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);