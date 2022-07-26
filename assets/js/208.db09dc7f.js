(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{584:function(e,t,_){"use strict";_.r(t);var r=_(26),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"sql到mongodb的映射图表"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#sql到mongodb的映射图表"}},[e._v("#")]),e._v(" SQL到MongoDB的映射图表")]),e._v(" "),_("h2",{attrs:{id:"_1-术语和概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-术语和概念"}},[e._v("#")]),e._v(" 1. 术语和概念")]),e._v(" "),_("p",[e._v("下表介绍了各种SQL术语和概念以及相应的MongoDB术语和概念。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("SQL术语/概念")]),e._v(" "),_("th",[e._v("MongoDB术语/概念")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("database")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-database",target:"_blank",rel:"noopener noreferrer"}},[e._v("database"),_("OutboundLink")],1)])]),e._v(" "),_("tr",[_("td",[e._v("table")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-collection",target:"_blank",rel:"noopener noreferrer"}},[e._v("collection"),_("OutboundLink")],1)])]),e._v(" "),_("tr",[_("td",[e._v("row")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-document",target:"_blank",rel:"noopener noreferrer"}},[e._v("document"),_("OutboundLink")],1),e._v(" or "),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-bson",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSON"),_("OutboundLink")],1),e._v(" document")])]),e._v(" "),_("tr",[_("td",[e._v("column")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-field",target:"_blank",rel:"noopener noreferrer"}},[e._v("field"),_("OutboundLink")],1)])]),e._v(" "),_("tr",[_("td",[e._v("index")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-index",target:"_blank",rel:"noopener noreferrer"}},[e._v("index"),_("OutboundLink")],1)])]),e._v(" "),_("tr",[_("td",[e._v("table joins")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/lookup/#pipe._S_lookup",target:"_blank",rel:"noopener noreferrer"}},[e._v("$lookup"),_("OutboundLink")],1),e._v(", 嵌入文档")])]),e._v(" "),_("tr",[_("td",[e._v("primary key （指定任何唯一的列或列组合作为主键。）")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/glossary/#term-primary-key",target:"_blank",rel:"noopener noreferrer"}},[e._v("primary key"),_("OutboundLink")],1),e._v(" （在MongoDB中，主键自动设置为_id字段。）")])]),e._v(" "),_("tr",[_("td",[e._v("aggregation (e.g. group by)")]),e._v(" "),_("td",[e._v("aggregation pipeline See the "),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL to Aggregation Mapping Chart"),_("OutboundLink")],1),e._v(".")])]),e._v(" "),_("tr",[_("td",[e._v("SELECT INTO NEW_TABLE")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/out/#pipe._S_out",target:"_blank",rel:"noopener noreferrer"}},[e._v("$out"),_("OutboundLink")],1),e._v(" See the "),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL to Aggregation Mapping Chart"),_("OutboundLink")],1),e._v(".")])]),e._v(" "),_("tr",[_("td",[e._v("MERGE INTO TABLE")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/aggregation/merge/#pipe._S_merge",target:"_blank",rel:"noopener noreferrer"}},[e._v("$merge"),_("OutboundLink")],1),e._v(" (Available starting in MongoDB 4.2) See the "),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/sql-aggregation-comparison/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL to Aggregation Mapping Chart"),_("OutboundLink")],1),e._v(".")])]),e._v(" "),_("tr",[_("td",[e._v("Transactions")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/core/transactions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("transactions"),_("OutboundLink")],1),e._v(" 在许多情况下，非规范化数据模型（嵌入式文档和数组） 将继续是您数据和用例的最佳选择，而不是多文档事务。 也就是说，在许多情况下，对数据进行适当的建模将最 大程度地减少对多文档交易的需求。")])])])]),e._v(" "),_("h2",{attrs:{id:"_2-可执行文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-可执行文件"}},[e._v("#")]),e._v(" 2. 可执行文件")]),e._v(" "),_("p",[e._v("下表展示了一些数据库可执行文件和相应的MongoDB可执行文件。这个表格并不是详尽无遗的。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th"),e._v(" "),_("th",[e._v("MongoDB")]),e._v(" "),_("th",[e._v("MySQL")]),e._v(" "),_("th",[e._v("Oracle")]),e._v(" "),_("th",[e._v("Informix")]),e._v(" "),_("th",[e._v("DB2")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[e._v("Database Server")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongod/#bin.mongod",target:"_blank",rel:"noopener noreferrer"}},[e._v("mongod"),_("OutboundLink")],1)]),e._v(" "),_("td",[e._v("mysqld")]),e._v(" "),_("td",[e._v("oracle")]),e._v(" "),_("td",[e._v("IDS")]),e._v(" "),_("td",[e._v("DB2 Server")])]),e._v(" "),_("tr",[_("td",[e._v("Database Client")]),e._v(" "),_("td",[_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/program/mongo/#bin.mongo",target:"_blank",rel:"noopener noreferrer"}},[e._v("mongo"),_("OutboundLink")],1)]),e._v(" "),_("td",[e._v("mysql")]),e._v(" "),_("td",[e._v("sqlplus")]),e._v(" "),_("td",[e._v("DB-Access")]),e._v(" "),_("td",[e._v("DB2 Client")])])])]),e._v(" "),_("h2",{attrs:{id:"_3-例子"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-例子"}},[e._v("#")]),e._v(" 3. 例子")]),e._v(" "),_("p",[e._v("下表展示了各种SQL语句和相应的MongoDB语句。表中的例子假设以下条件:")]),e._v(" "),_("ul",[_("li",[e._v("SQL示例假设有一个名为"),_("strong",[e._v("people")]),e._v("的表。")]),e._v(" "),_("li",[e._v("MongoDB示例假设一个名为"),_("strong",[e._v("people")]),e._v("的集合，它包含以下原型的文档:")])]),e._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[e._v(' { \n       _id: ObjectId("509a8fb2f3f4948bd2f983a0"),\n       user_id: "abc123",\n       age: 55,\n       status: \'A\'\n }\n')])])]),_("h3",{attrs:{id:"_3-1-创建和修改"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-创建和修改"}},[e._v("#")]),e._v(" 3.1 创建和修改")]),e._v(" "),_("p",[e._v("下表展示了与表级操作相关的各种SQL语句以及相应的MongoDB语句。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("SQL Schema语句")]),e._v(" "),_("th",[e._v("MongoDB Schema语句")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[e._v("CREATE")]),e._v(" "),_("strong",[e._v("TABLE")]),e._v(" people (    id MEDIUMINT "),_("strong",[e._v("NOT")]),e._v(" "),_("strong",[e._v("NULL")]),e._v("        AUTO_INCREMENT,    user_id Varchar(30),    age Number,    status char(1),    "),_("strong",[e._v("PRIMARY")]),e._v(" "),_("strong",[e._v("KEY")]),e._v(" (id) )")]),e._v(" "),_("td",[e._v("隐式创建的第一个"),_("a",{attrs:{href:"https://docs.mongodb.com/master/reference/method/db.collection.insertOne/#db.collection.insertOne",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("insertOne()")]),_("OutboundLink")],1),e._v("或"),_("a",{attrs:{href:"https://docs.mongodb.com/master/reference/method/db.collection.insertMany/#db.collection.insertMany",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("insertMany()")]),_("OutboundLink")],1),e._v('操作。如果没有指定**_id**字段，则会自动添加主键_id。 db.people.insertOne( {    user_id: "abc123",    age: 55,    status: "A" } ) 但是，您也可以显式地创建一个集合: db.createCollection("people")')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("ALTER")]),e._v(" "),_("strong",[e._v("TABLE")]),e._v(" people "),_("strong",[e._v("ADD")]),e._v(" join_date DATETIME")]),e._v(" "),_("td",[e._v("集合不描述或不强制其文件结构； 即在集合级别没有结构上的更改。 但是，在文档级别，"),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"}},[e._v("updateMany()"),_("OutboundLink")],1),e._v("操作可以使用"),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/update/set/#up._S_set",target:"_blank",rel:"noopener noreferrer"}},[e._v("$set"),_("OutboundLink")],1),e._v("运算符将字段添加到现有文档中。 db.people.updateMany(    { },    { $set: { join_date: "),_("strong",[e._v("new")]),e._v(" Date() } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("ALTER")]),e._v(" "),_("strong",[e._v("TABLE")]),e._v(" people "),_("strong",[e._v("DROP")]),e._v(" "),_("strong",[e._v("COLUMN")]),e._v(" join_date")]),e._v(" "),_("td",[e._v("集合不描述或不强制其文件结构； 即在集合级别没有结构上的更改。 但是，在文档级别，"),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany",target:"_blank",rel:"noopener noreferrer"}},[e._v("updateMany()"),_("OutboundLink")],1),e._v("操作可以使用"),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/operator/update/unset/#up._S_unset",target:"_blank",rel:"noopener noreferrer"}},[e._v("$unset"),_("OutboundLink")],1),e._v('运算符将字段添加到现有文档中。 db.people.updateMany(    { },    { $unset: { "join_date": "" } } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("CREATE")]),e._v(" "),_("strong",[e._v("INDEX")]),e._v(" idx_user_id_asc "),_("strong",[e._v("ON")]),e._v(" people(user_id)")]),e._v(" "),_("td",[e._v("db.people.createIndex( { user_id: 1 } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("CREATE")]),e._v(" "),_("strong",[e._v("INDEX")]),e._v("       idx_user_id_asc_age_desc "),_("strong",[e._v("ON")]),e._v(" people(user_id, age "),_("strong",[e._v("DESC")]),e._v(")")]),e._v(" "),_("td",[e._v("db.people.createIndex( { user_id: 1, age: -1 } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("DROP")]),e._v(" "),_("strong",[e._v("TABLE")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.drop()")])])])]),e._v(" "),_("p",[e._v("下表显示了与将记录插入表和相应的MongoDB语句有关的各种SQL语句。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("SQL INSERT语句")]),e._v(" "),_("th",[_("strong",[e._v("MongoDB insertOne() Statements")])])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[e._v("INSERT")]),e._v(" "),_("strong",[e._v("INTO")]),e._v(" people(user_id,                  age,                  status) "),_("strong",[e._v("VALUES")]),e._v(' ("bcd001",        45,        "A")')]),e._v(" "),_("td",[e._v('db.people.insertOne(   { user_id: "bcd001", age: 45, status: "A" } )')])])])]),e._v(" "),_("h3",{attrs:{id:"_3-3-选择"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-选择"}},[e._v("#")]),e._v(" 3.3 选择")]),e._v(" "),_("p",[e._v("下表展示了与从表中读取记录相关的各种SQL语句以及相应的MongoDB语句。")]),e._v(" "),_("blockquote",[_("p",[_("strong",[e._v("注意")])]),e._v(" "),_("p",[e._v("除非通过投影明确排除，否则["),_("a",{attrs:{href:"https://docs.mongodb.com/master/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("find()")]),_("OutboundLink")],1),e._v("方法始终在返回的文档中包含**_id"),_("strong",[e._v("字段。 下面的某些SQL查询可能包含一个")]),e._v("_id**字段来反映这一点，即使该字段未包含在相应的"),_("a",{attrs:{href:"https://docs.mongodb.com/master/reference/method/db.collection.find/#db.collection.find",target:"_blank",rel:"noopener noreferrer"}},[_("code",[e._v("find()")]),_("OutboundLink")],1),e._v("查询中也是如此。")])]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[e._v("SQL SELECT 语句")]),e._v(" "),_("th",[e._v("MongoDB find() 语句")])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("em",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.find()")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" id,       user_id,       status "),_("strong",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.find(     { },     { user_id: 1, status: 1 } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" user_id, status "),_("strong",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.find(     { },     { user_id: 1, status: 1, _id: 0 } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(' status = "A"')]),e._v(" "),_("td",[e._v('db.people.find(     { status: "A" } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" user_id, status "),_("strong",[e._v("FROM")]),e._v(" people "),_("strong",[e._v("WHERE")]),e._v(' status = "A"')]),e._v(" "),_("td",[e._v('db.people.find(     { status: "A" },     { user_id: 1, status: 1, _id: 0 } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(' status != "A"')]),e._v(" "),_("td",[e._v('db.people.find(     { status: { $ne: "A" } } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v('status = "A"')]),e._v(" *"),_("em",[e._v("AND")]),e._v(" age = 50")]),e._v(" "),_("td",[e._v('db.people.find(     { status: "A",       age: 50 } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v('status = "A"')]),e._v(" *"),_("em",[e._v("OR")]),e._v(" age = 50")]),e._v(" "),_("td",[e._v('db.people.find(     { $or: [ { status: "A" } , { age: 50 } ] } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(" age > 25")]),e._v(" "),_("td",[e._v("db.people.find(     { age: { $gt: 25 } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(" age < 25")]),e._v(" "),_("td",[e._v("db.people.find(    { age: { $lt: 25 } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v("age > 25")]),e._v(" *"),_("em",[e._v("AND")]),e._v("   age <= 50")]),e._v(" "),_("td",[e._v("db.people.find(    { age: { $gt: 25, $lte: 50 } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v("user_id *like")]),e._v(' "%bc%"')]),e._v(" "),_("td",[e._v("db.people.find( { user"),_("em",[e._v("id: /bc/ } )")]),e._v(" "),_("em",[e._v("_or")]),e._v(" db.people.find( { user_id: { $regex: /bc/ } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v("user_id *like")]),e._v(' "bc%"')]),e._v(" "),_("td",[e._v("db.people.find( { user"),_("em",[e._v("id: /^bc/ } )")]),e._v(" "),_("em",[e._v("_or")]),e._v(" db.people.find( { user_id: { $regex: /^bc/ } } )")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v('status = "A"')]),e._v(" *"),_("strong",[e._v("ORDER*")]),e._v(" *"),_("strong",[e._v("BY*")]),e._v(" "),_("em",[e._v("user_id *ASC")])]),e._v(" "),_("td",[e._v('db.people.find( { status: "A" } ).sort( { user_id: 1 } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("strong",[e._v("WHERE*")]),e._v(" "),_("em",[e._v('status = "A"')]),e._v(" *"),_("strong",[e._v("ORDER*")]),e._v(" *"),_("strong",[e._v("BY*")]),e._v(" "),_("em",[e._v("user_id *DESC")])]),e._v(" "),_("td",[e._v('db.people.find( { status: "A" } ).sort( { user_id: -1 } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" "),_("strong",[e._v("COUNT")]),e._v("("),_("em",[e._v(")")]),e._v(" *"),_("em",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.count() "),_("em",[e._v("or")]),e._v(" db.people.find().count()")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" "),_("strong",[e._v("COUNT")]),e._v("(user_id) "),_("strong",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.count( { user"),_("em",[e._v("id: { $exists:")]),e._v(" *"),_("strong",[e._v("true*")]),e._v(" "),_("em",[e._v("} } )")]),e._v(" "),_("em",[e._v("_or")]),e._v(" db.people.find( { user_id: { $exists: "),_("strong",[e._v("true")]),e._v(" } } ).count()")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" "),_("strong",[e._v("COUNT")]),e._v("("),_("em",[e._v(")")]),e._v(" *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(" age > 30")]),e._v(" "),_("td",[e._v("db.people.count( { age: { $gt: 30 } } ) "),_("em",[e._v("or")]),e._v(" db.people.find( { age: { $gt: 30 } } ).count()")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v(" "),_("strong",[e._v("DISTINCT")]),e._v("(status) "),_("strong",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v('db.people.aggregate( [ { $group : { _id : "$status" } } ] ) or, for distinct value sets that do not exceed the '),_("a",{attrs:{href:"https://docs.mongodb.com/manual/reference/limits/#limit-bson-document-size",target:"_blank",rel:"noopener noreferrer"}},[e._v("BSON size limit"),_("OutboundLink")],1),e._v(' db.people.distinct( "status" )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("LIMIT")]),e._v(" 1")]),e._v(" "),_("td",[e._v("db.people.findOne() "),_("em",[e._v("or")]),e._v(" db.people.find().limit(1)")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("LIMIT")]),e._v(" 5 SKIP 10")]),e._v(" "),_("td",[e._v("db.people.find().limit(5).skip(10)")])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("EXPLAIN")]),e._v(" "),_("strong",[e._v("SELECT")]),e._v("  *"),_("strong",[e._v("FROM*")]),e._v(" "),_("em",[e._v("people")]),e._v(" *"),_("em",[e._v("WHERE")]),e._v(' status = "A"')]),e._v(" "),_("td",[e._v('db.people.find( { status: "A" } ).explain()')])])])]),e._v(" "),_("h3",{attrs:{id:"_3-4-更新记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-更新记录"}},[e._v("#")]),e._v(" 3.4 更新记录")]),e._v(" "),_("p",[e._v("下表显示了与更新表中的现有记录和相应的MongoDB语句有关的各种SQL语句。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[e._v("SQL Update Statements")])]),e._v(" "),_("th",[_("strong",[e._v("MongoDB updateMany() Statements")])])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[e._v("UPDATE")]),e._v(" people "),_("strong",[e._v("SET")]),e._v(' status = "C" '),_("strong",[e._v("WHERE")]),e._v(" age > 25")]),e._v(" "),_("td",[e._v('db.people.updateMany(   { age: { $gt: 25 } },   { $set: { status: "C" } } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("UPDATE")]),e._v(" people "),_("strong",[e._v("SET")]),e._v(" age = age + 3 "),_("strong",[e._v("WHERE")]),e._v(' status = "A"')]),e._v(" "),_("td",[e._v('db.people.updateMany(       { status: "A" } ,       { $inc: { age: 3 } } )')])])])]),e._v(" "),_("p",[e._v("有关示例中使用的方法和运算符的更多信息，请参见：")]),e._v(" "),_("h3",{attrs:{id:"_3-5-删除记录"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-删除记录"}},[e._v("#")]),e._v(" 3.5 删除记录")]),e._v(" "),_("p",[e._v("下表显示了与从表中删除记录和相应的MongoDB语句有关的各种SQL语句。")]),e._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[e._v("SQL Delete Statements")])]),e._v(" "),_("th",[_("strong",[e._v("MongoDB deleteMany() Statements")])])])]),e._v(" "),_("tbody",[_("tr",[_("td",[_("strong",[e._v("DELETE")]),e._v(" "),_("strong",[e._v("FROM")]),e._v(" people "),_("strong",[e._v("WHERE")]),e._v(' status = "D"')]),e._v(" "),_("td",[e._v('db.people.deleteMany( { status: "D" } )')])]),e._v(" "),_("tr",[_("td",[_("strong",[e._v("DELETE")]),e._v(" "),_("strong",[e._v("FROM")]),e._v(" people")]),e._v(" "),_("td",[e._v("db.people.deleteMany({})")])])])]),e._v(" "),_("h2",{attrs:{id:"参考文章"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://docs.mongoing.com/mongodb-crud-operations/sql-to-mongodb-mapping-chart",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL到MongoDB的映射图表"),_("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=o.exports}}]);