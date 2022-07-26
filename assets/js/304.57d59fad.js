(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{681:function(e,a,t){"use strict";t.r(a);var n=t(26),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"flyway配置属性详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flyway配置属性详解"}},[e._v("#")]),e._v(" Flyway配置属性详解")]),e._v(" "),t("h2",{attrs:{id:"_1-配置详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置详解"}},[e._v("#")]),e._v(" 1. 配置详解")]),e._v(" "),t("h3",{attrs:{id:"_1-1-数据库-核心-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-数据库-核心-配置"}},[e._v("#")]),e._v(" 1.1 数据库（核心）配置")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("url ：连接数据库的jdbc的url，必须配置")])]),e._v(" "),t("li",[t("p",[e._v("driver：连接数据库的jdbc驱动的class全名,默认为空，flyway会根据url自动查找匹配的驱动")])]),e._v(" "),t("li",[t("p",[e._v("user：连接数据库的用户名（如果有就设置）")])]),e._v(" "),t("li",[t("p",[e._v("password：连接数据库的用户名对应的密码（如果有就设置）")])]),e._v(" "),t("li",[t("p",[e._v("connectRetries：连接数据库的最大的重试次数，每次尝试失败后，flyway会等待一秒然后继续重试到最大次数为止（不设置，就不重试，快速的失败）")])])]),e._v(" "),t("h3",{attrs:{id:"_1-2-数据库-非核心-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-数据库-非核心-配置"}},[e._v("#")]),e._v(" 1.2 数据库（非核心）配置")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("initSql:连接上数据库之后的初始化sql")])]),e._v(" "),t("li",[t("p",[e._v("defaultSchema:默认的schema，大小写敏感，是flyway在执行过程中默认的schema，flyway_schema_history包含在这个schema里面，flyway的6.1版本之后，如果没有指定schema，那么默认使用schemas属性配置的第一个schema")])]),e._v(" "),t("li",[t("p",[e._v("schemas：使用逗号分隔，大小写敏感，除非配置的第一个schema已经存在，不然会创建所有的schema，所有的schema会按照顺序做clean操作")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("table：默认名flyway_schema_history")]),e._v("，如果在schemas配置了多个schema，那么flyway_schema_history表在第一个schema里面")])]),e._v(" "),t("li",[t("p",[e._v("tablespace：创建flyway_schema_history的表空间，此设置仅与支持表空间概念的数据库相关。对其它数据库不起作用")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("locations使用逗号分隔，会对其指定的location进行递归查找")]),e._v("，location的类型依配置的location的前缀而定，没有前缀的location或是以classpath：标记的location会在classpath上扫描sql或是jave文件，以filesysytem标记的location会在文件系统上递归的查找非隐藏的migration文件，而且可以使用通配符")]),e._v(" "),t("blockquote",[t("p",[e._v("可以指定flyway 脚本的位置")])])])]),e._v(" "),t("h3",{attrs:{id:"_1-3-flyway自身配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-flyway自身配置"}},[e._v("#")]),e._v(" 1.3 flyway自身配置")]),e._v(" "),t("ul",[t("li",[e._v("sqlMigrationPrefix：migration文件的前缀，默认为V")]),e._v(" "),t("li",[e._v("undoSqlMigrationPrefix:undo文件前缀，默认是U")]),e._v(" "),t("li",[e._v("repeatableSqlMigrationPrefix:repeat文件前缀，默认是P")]),e._v(" "),t("li",[e._v("sqlMigrationSeparator：migration文件分隔符，默认是__")]),e._v(" "),t("li",[e._v("sqlMigrationSuffixes:migration文件后缀，默认是.sql")]),e._v(" "),t("li",[e._v("validateMigrationNaming：是否验证migration文件，默认是false，如果migration文件名格式不满足要求，skip，如果为true，快速失败")])]),e._v(" "),t("h3",{attrs:{id:"_1-4-优化配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-优化配置"}},[e._v("#")]),e._v(" 1.4 优化配置")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("stream：是否对migration文件流化处理，而不是全部的加载到内存之后再处理")]),e._v("(如果migration文件很大，如1GB，一般也不会遇到这样的情况)")]),e._v(" "),t("li",[e._v("batch：是否对migration文件进行批处理，可以节约带宽，当然对于处理大的migration文件而言")])]),e._v(" "),t("h3",{attrs:{id:"其他配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他配置"}},[e._v("#")]),e._v(" 其他配置")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("color: 仅仅应用于命令行使用，是否可以对于输出添加颜色，默认是auto，可以有always和never其它的两个选项")])]),e._v(" "),t("li",[t("p",[e._v("jarDirs:逗号分隔，驱动文件和基于Java的migration文件所在目录")])]),e._v(" "),t("li",[t("p",[e._v("encoding：migration文件编码,默认UTF-8")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("placeholderReplacement：是否进行占位符替换")]),e._v("，默认为true")]),e._v(" "),t("blockquote",[t("p",[e._v("脚本中可能出现动态替换的情况，如时间等。这时候此配置要设置为false")])])]),e._v(" "),t("li",[t("p",[e._v("placeholderPrefix：占位符前缀，默认为${")])]),e._v(" "),t("li",[t("p",[e._v("placeholderSuffix:占位符后缀，默认为}")])]),e._v(" "),t("li",[t("p",[e._v("resolvers：migration文件解析器，逗号分隔的全class文件名，相当于可以扩展内置的resolvers解析器")])]),e._v(" "),t("li",[t("p",[e._v("skipDefaultResolvers：是否skip内置的解析器只使用定制化的解析器，默认是false")])]),e._v(" "),t("li",[t("p",[e._v("callbacks：逗号分隔的class文件名，在flyway生命周期内被回调引用")])]),e._v(" "),t("li",[t("p",[e._v("skipDefaultCallbacks：是否skip内置的callbacks，默认false")])]),e._v(" "),t("li",[t("p",[e._v("target：migration时数据库的版本，最好使用默认值")])]),e._v(" "),t("li",[t("p",[e._v("outOfOrder：是否可以无序执行，维持默认即可")])]),e._v(" "),t("li",[t("p",[e._v("ignoreMissingMigrations：忽略丢失的migration文件，默认是false，针对老的系统可以进行设置")])])]),e._v(" "),t("h2",{attrs:{id:"_2-配置文件模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置文件模板"}},[e._v("#")]),e._v(" 2. 配置文件模板")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#\n# Copyright 2010-2020 Boxfuse GmbH\n#\n# Licensed under the Apache License, Version 2.0 (the \"License\");\n# you may not use this file except in compliance with the License.\n# You may obtain a copy of the License at\n#\n#         http://www.apache.org/licenses/LICENSE-2.0\n#\n# Unless required by applicable law or agreed to in writing, software\n# distributed under the License is distributed on an \"AS IS\" BASIS,\n# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n# See the License for the specific language governing permissions and\n# limitations under the License.\n#\n\n# JDBC url to use to connect to the database\n# Examples\n# --------\n# Most drivers are included out of the box.\n# * = JDBC driver must be downloaded and installed in /drivers manually\n# ** = TNS_ADMIN environment variable must point to the directory of where tnsnames.ora resides\n# Aurora MySQL      : jdbc:mysql://<instance>.<region>.rds.amazonaws.com:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# Aurora PostgreSQL : jdbc:postgresql://<instance>.<region>.rds.amazonaws.com:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# CockroachDB       : jdbc:postgresql://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# DB2*              : jdbc:db2://<host>:<port>/<database>\n# Derby             : jdbc:derby:<subsubprotocol>:<database><;attribute=value>\n# Firebird          : jdbc:firebirdsql://<host>[:<port>]/<database>?<key1>=<value1>&<key2>=<value2>...\n# H2                : jdbc:h2:<file>\n# HSQLDB            : jdbc:hsqldb:file:<file>\n# Informix*         : jdbc:informix-sqli://<host>:<port>/<database>:informixserver=dev\n# MariaDB           : jdbc:mariadb://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# MySQL             : jdbc:mysql://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# Oracle            : jdbc:oracle:thin:@//<host>:<port>/<service>\n# Oracle (TNS)**    : jdbc:oracle:thin:@<tns_entry>\n# PostgreSQL        : jdbc:postgresql://<host>:<port>/<database>?<key1>=<value1>&<key2>=<value2>...\n# SAP HANA*         : jdbc:sap://<host>:<port>/?databaseName=<database>\n# Snowflake*        : jdbc:snowflake://<account>.snowflakecomputing.com/?db=<database>&warehouse=<warehouse>&role=<role>...\n# SQL Server        : jdbc:sqlserver://<host>:<port>;databaseName=<database>\n# SQLite            : jdbc:sqlite:<database>\n# Sybase ASE        : jdbc:jtds:sybase://<host>:<port>/<database>\n# Redshift*         : jdbc:redshift://<host>:<port>/<database>\n# 连接数据库的jdbc的url，必须配置\n# flyway.url=\n\n# Fully qualified classname of the JDBC driver (autodetected by default based on flyway.url)\n# 连接数据库的jdbc驱动的class全名,默认为空，flyway会根据url自动查找匹配的驱动\n# flyway.driver=\n\n# User to use to connect to the database. Flyway will prompt you to enter it if not specified, and if the JDBC\n# connection is not using a password-less method of authentication.\n# 连接数据库的用户名（如果有就设置）\n# flyway.user=\n\n# Password to use to connect to the database. Flyway will prompt you to enter it if not specified, and if the JDBC\n# connection is not using a password-less method of authentication.\n# 连接数据库的用户名对应的密码（如果有就设置）\n# flyway.password=\n\n# The maximum number of retries when attempting to connect to the database. After each failed attempt,\n# Flyway will wait 1 second before attempting to connect again, up to the maximum number of times specified\n# by connectRetries. (default: 0)\n# 连接数据库的最大的重试次数，每次尝试失败后，flyway会等待一秒然后继续重试到最大次数为止（不设置，就不重试，快速的失败）\n# flyway.connectRetries=\n\n# The SQL statements to run to initialize a new database connection immediately after opening it. (default: none)\n# 连接上数据库之后的初始化sql\n# flyway.initSql=\n\n# The default schema managed by Flyway. This schema name is case-sensitive. If not specified, but <i>flyway.schemas</i> is, Flyway uses the first schema\n# in that list. If that is also not specified, Flyway uses the default schema for the database connection.\n# Consequences:\n# - This schema will be the one containing the schema history table.\n# - This schema will be the default for the database connection (provided the database supports this concept).\n# 默认的schema，大小写敏感，是flyway在执行过程中默认的schema，flyway_schema_history包含在这个schema里面，flyway的6.1版本之后，如果没有指定schema，那么默认使用schemas属性配置的第一个schema\n# flyway.defaultSchema=\n\n# Comma-separated list of schemas managed by Flyway. These schema names are case-sensitive. If not specified, Flyway uses\n# the default schema for the database connection. If <i>flyway.defaultSchema</i> is not specified, then the first of\n# this list also acts as default schema.\n# Consequences:\n# - Flyway will automatically attempt to create all these schemas, unless they already exist.\n# - The schemas will be cleaned in the order of this list.\n# - If Flyway created them, the schemas themselves will be dropped when cleaning.\n# 使用逗号分隔，大小写敏感，除非配置的第一个schema已经存在，不然会创建所有的schema，所有的schema会按照顺序做clean操作\n# flyway.schemas=\n\n# Name of Flyway's schema history table (default: flyway_schema_history)\n# By default (single-schema mode) the schema history table is placed in the default schema for the connection\n# provided by the datasource.\n# When the flyway.schemas property is set (multi-schema mode), the schema history table is placed in the first\n# schema of the list.\n# 默认名flyway_schema_history，如果在schemas配置了多个schema，那么flyway_schema_history表在第一个schema里面\n# flyway.table=\n\n# The tablespace where to create the schema history table that will be used by Flyway. If not specified, Flyway uses\n# the default tablespace for the database connection.\n# This setting is only relevant for databases that do support the notion of tablespaces. Its value is simply\n# ignored for all others.\n# 创建flyway_schema_history的表空间，此设置仅与支持表空间概念的数据库相关。对其它数据库不起作用\n# flyway.tablespace=\n\n# Comma-separated list of locations to scan recursively for migrations. (default: filesystem:<<INSTALL-DIR>>/sql)\n# The location type is determined by its prefix.\n# Unprefixed locations or locations starting with classpath: point to a package on the classpath and may contain\n# both SQL and Java-based migrations.\n# Locations starting with filesystem: point to a directory on the filesystem, may only\n# contain SQL migrations and are only scanned recursively down non-hidden directories.\n# locations使用逗号分隔，会对其指定的location进行递归查找，location的类型依配置的location的前缀而定，没有前缀的location或是以classpath：标记的location会在classpath上扫描sql或是jave文件，以filesysytem标记的location会在文件系统上递归的查找非隐藏的migration文件，而且可以使用通配符\n# flyway.locations=\n\n# Comma-separated list of fully qualified class names of custom MigrationResolver to use for resolving migrations.\n# migration文件解析器，逗号分隔的全class文件名，相当于可以扩展内置的resolvers解析器\n# flyway.resolvers=\n\n# If set to true, default built-in resolvers (jdbc, spring-jdbc and sql) are skipped and only custom resolvers as\n# defined by 'flyway.resolvers' are used. (default: false)\n# 是否skip内置的解析器只使用定制化的解析器，默认是false\n# flyway.skipDefaultResolvers=\n\n# Comma-separated list of directories containing JDBC drivers and Java-based migrations.\n# (default: <INSTALL-DIR>/jars)\n# 逗号分隔，驱动文件和基于Java的migration文件所在目录\n# flyway.jarDirs=\n\n# File name prefix for versioned SQL migrations (default: V)\n# Versioned SQL migrations have the following file name structure: prefixVERSIONseparatorDESCRIPTIONsuffix ,\n# which using the defaults translates to V1_1__My_description.sql\n# migration文件的前缀，默认为V\n# flyway.sqlMigrationPrefix=\n\n# The file name prefix for undo SQL migrations. (default: U)\n# Undo SQL migrations are responsible for undoing the effects of the versioned migration with the same version.\n# They have the following file name structure: prefixVERSIONseparatorDESCRIPTIONsuffix ,\n# which using the defaults translates to U1.1__My_description.sql\n# Flyway Pro and Flyway Enterprise only\n# undo文件前缀，默认是U\n# flyway.undoSqlMigrationPrefix=\n\n# File name prefix for repeatable SQL migrations (default: R)\n# Repeatable SQL migrations have the following file name structure: prefixSeparatorDESCRIPTIONsuffix ,\n# which using the defaults translates to R__My_description.sql\n# repeat文件前缀，默认是P\n# flyway.repeatableSqlMigrationPrefix=\n\n# File name separator for Sql migrations (default: __)\n# Sql migrations have the following file name structure: prefixVERSIONseparatorDESCRIPTIONsuffix ,\n# which using the defaults translates to V1_1__My_description.sql\n#migration文件分隔符，默认是__\n# flyway.sqlMigrationSeparator=\n\n# Comma-separated list of file name suffixes for SQL migrations. (default: .sql)\n# SQL migrations have the following file name structure: prefixVERSIONseparatorDESCRIPTIONsuffix ,\n# which using the defaults translates to V1_1__My_description.sql\n# Multiple suffixes (like .sql,.pkg,.pkb) can be specified for easier compatibility with other tools such as\n# editors with specific file associations.\n#  migration文件后缀，默认是.sql\n# flyway.sqlMigrationSuffixes=\n\n# Whether to stream SQL migrations when executing them. (default: false)\n# Streaming doesn't load the entire migration in memory at once. Instead each statement is loaded individually.\n# This is particularly useful for very large SQL migrations composed of multiple MB or even GB of reference data,\n# as this dramatically reduces Flyway's memory consumption.\n# Flyway Pro and Flyway Enterprise only\n# 是否对migration文件流化处理，而不是全部的加载到内存之后再处理(如果migration文件很大，如1GB，一般也不会遇到这样的情况)\n# flyway.stream=\n\n# Whether to batch SQL statements when executing them. (default: false)\n# Batching can save up to 99 percent of network roundtrips by sending up to 100 statements at once over the\n# network to the database, instead of sending each statement individually. This is particularly useful for very\n# large SQL migrations composed of multiple MB or even GB of reference data, as this can dramatically reduce\n# the network overhead. This is supported for INSERT, UPDATE, DELETE, MERGE and UPSERT statements.\n# All other statements are automatically executed without batching.\n# Flyway Pro and Flyway Enterprise only\n# 是否对migration文件进行批处理，可以节约带宽，当然对于处理大的migration文件而言\n# flyway.batch=\n\n# Encoding of SQL migrations (default: UTF-8). Caution: changing the encoding after migrations have been run\n# will invalidate the calculated checksums and require a `flyway repair`.\n# migration文件编码,默认UTF-8\n# flyway.encoding=\n\n# Whether placeholders should be replaced. (default: true)\n# 是否进行占位符替换，默认为true\n# flyway.placeholderReplacement=\n\n# Placeholders to replace in Sql migrations\n# flyway.placeholders.user=\n# flyway.placeholders.my_other_placeholder=\n\n# Prefix of every placeholder (default: ${ )\n# 占位符前缀，默认为${\n# flyway.placeholderPrefix=\n\n# Suffix of every placeholder (default: } )\n# 占位符后缀，默认为}\n# flyway.placeholderSuffix=\n\n# Target version up to which Flyway should consider migrations.\n# Defaults to 'latest'\n# Special values:\n# - 'current': designates the current version of the schema\n# - 'latest': the latest version of the schema, as defined by the migration with the highest version\n# migration时数据库的版本，最好使用默认值\n# flyway.target=\n\n# Whether to automatically call validate or not when running migrate. (default: true)\n# flyway.validateOnMigrate=\n\n# Whether to automatically call clean or not when a validation error occurs. (default: false)\n# This is exclusively intended as a convenience for development. even though we\n# strongly recommend not to change migration scripts once they have been checked into SCM and run, this provides a\n# way of dealing with this case in a smooth manner. The database will be wiped clean automatically, ensuring that\n# the next migration will bring you back to the state checked into SCM.\n# Warning ! Do not enable in production !\n# flyway.cleanOnValidationError=\n\n# Whether to disable clean. (default: false)\n# This is especially useful for production environments where running clean can be quite a career limiting move.\n# flyway.cleanDisabled=\n\n# The version to tag an existing schema with when executing baseline. (default: 1)\n# flyway.baselineVersion=\n\n# The description to tag an existing schema with when executing baseline. (default: << Flyway Baseline >>)\n# flyway.baselineDescription=\n\n# Whether to automatically call baseline when migrate is executed against a non-empty schema with no schema history\n# table. This schema will then be initialized with the baselineVersion before executing the migrations.\n# Only migrations above baselineVersion will then be applied.\n# This is useful for initial Flyway production deployments on projects with an existing DB.\n# Be careful when enabling this as it removes the safety net that ensures\n# Flyway does not migrate the wrong database in case of a configuration mistake! (default: false)\n# flyway.baselineOnMigrate=\n\n# Allows migrations to be run \"out of order\" (default: false).\n# If you already have versions 1 and 3 applied, and now a version 2 is found,\n# it will be applied too instead of being ignored.\n# 是否可以无序执行，维持默认即可\n# flyway.outOfOrder=\n\n# Whether Flyway should output a table with the results of queries when executing migrations (default: true).\n# Flyway Pro and Flyway Enterprise only\n# flyway.outputQueryResults=\n\n# This allows you to tie in custom code and logic to the Flyway lifecycle notifications (default: empty).\n# Set this to a comma-separated list of fully qualified class names of org.flywaydb.core.api.callback.Callback\n# implementations.\n# 逗号分隔的class文件名，在flyway生命周期内被回调引用\n# flyway.callbacks=\n\n# If set to true, default built-in callbacks (sql) are skipped and only custom callback as\n# defined by 'flyway.callbacks' are used. (default: false)\n# skipDefaultCallbacks：是否skip内置的callbacks，默认false\n# flyway.skipDefaultCallbacks=\n\n# Ignore missing migrations when reading the schema history table. These are migrations that were performed by an\n# older deployment of the application that are no longer available in this version. For example: we have migrations\n# available on the classpath with versions 1.0 and 3.0. The schema history table indicates that a migration with\n# version 2.0 (unknown to us) has also been applied. Instead of bombing out (fail fast) with an exception, a\n# warning is logged and Flyway continues normally. This is useful for situations where one must be able to deploy\n# a newer version of the application even though it doesn't contain migrations included with an older one anymore.\n# Note that if the most recently applied migration is removed, Flyway has no way to know it is missing and will\n# mark it as future instead.\n# true to continue normally and log a warning, false to fail fast with an exception. (default: false)\n# 忽略丢失的migration文件，默认是false，针对老的系统可以进行设置\n# flyway.ignoreMissingMigrations=\n\n# Ignore ignored migrations when reading the schema history table. These are migrations that were added in between\n# already migrated migrations in this version. For example: we have migrations available on the classpath with\n# versions from 1.0 to 3.0. The schema history table indicates that version 1 was finished on 1.0.15, and the next\n# one was 2.0.0. But with the next release a new migration was added to version 1: 1.0.16. Such scenario is ignored\n# by migrate command, but by default is rejected by validate. When ignoreIgnoredMigrations is enabled, such case\n# will not be reported by validate command. This is useful for situations where one must be able to deliver\n# complete set of migrations in a delivery package for multiple versions of the product, and allows for further\n# development of older versions.\n# true to continue normally, false to fail fast with an exception. (default: false)\n# flyway.ignoreIgnoredMigrations=\n\n# Ignore pending migrations when reading the schema history table. These are migrations that are available\n# but have not yet been applied. This can be useful for verifying that in-development migration changes\n# don't contain any validation-breaking changes of migrations that have already been applied to a production\n# environment, e.g. as part of a CI/CD process, without failing because of the existence of new migration versions.\n# (default: false)\n# flyway.ignorePendingMigrations=\n\n# Ignore future migrations when reading the schema history table. These are migrations that were performed by a\n# newer deployment of the application that are not yet available in this version. For example: we have migrations\n# available on the classpath up to version 3.0. The schema history table indicates that a migration to version 4.0\n# (unknown to us) has already been applied. Instead of bombing out (fail fast) with an exception, a\n# warning is logged and Flyway continues normally. This is useful for situations where one must be able to redeploy\n# an older version of the application after the database has been migrated by a newer one.\n# true to continue normally and log a warning, false to fail fast with an exception. (default: true)\n# flyway.ignoreFutureMigrations=\n\n# Whether to validate migrations and callbacks whose scripts do not obey the correct naming convention. A failure can be\n# useful to check that errors such as case sensitivity in migration prefixes have been corrected.\n# false to continue normally, true to fail fast with an exception (default: false)\n# 是否验证migration文件，默认是false，如果migration文件名格式不满足要求，skip，如果为true，快速失败\n# flyway.validateMigrationNaming=\n\n# Whether to allow mixing transactional and non-transactional statements within the same migration. Enabling this\n# automatically causes the entire affected migration to be run without a transaction.\n# Note that this is only applicable for PostgreSQL, Aurora PostgreSQL, SQL Server and SQLite which all have\n# statements that do not run at all within a transaction.\n# This is not to be confused with implicit transaction, as they occur in MySQL or Oracle, where even though a\n# DDL statement was run within within a transaction, the database will issue an implicit commit before and after\n# its execution.\n# true if mixed migrations should be allowed. false if an error should be thrown instead. (default: false)\n# flyway.mixed=\n\n# Whether to group all pending migrations together in the same transaction when applying them\n# (only recommended for databases with support for DDL transactions).\n# true if migrations should be grouped. false if they should be applied individually instead. (default: false)\n# flyway.group=\n\n# The username that will be recorded in the schema history table as having applied the migration.\n# <<blank>> for the current database user of the connection. (default: <<blank>>).\n# flyway.installedBy=\n\n# Rules for the built-in error handler that let you override specific SQL states and errors codes in order to\n# force specific errors or warnings to be treated as debug messages, info messages, warnings or errors.\n# Each error override has the following format: STATE:12345:W.\n# It is a 5 character SQL state (or * to match all SQL states), a colon,\n# the SQL error code (or * to match all SQL error codes), a colon and finally\n# the desired behavior that should override the initial one.\n# The following behaviors are accepted:\n# - D to force a debug message\n# - D- to force a debug message, but do not show the original sql state and error code\n# - I to force an info message\n# - I- to force an info message, but do not show the original sql state and error code\n# - W to force a warning\n# - W- to force a warning, but do not show the original sql state and error code\n# - E to force an error\n# - E- to force an error, but do not show the original sql state and error code\n# Example 1: to force Oracle stored procedure compilation issues to produce\n# errors instead of warnings, the following errorOverride can be used: 99999:17110:E\n# Example 2: to force SQL Server PRINT messages to be displayed as info messages (without SQL state and error\n# code details) instead of warnings, the following errorOverride can be used: S0001:0:I-\n# Example 3: to force all errors with SQL error code 123 to be treated as warnings instead,\n# the following errorOverride can be used: *:123:W\n# Flyway Pro and Flyway Enterprise only\n# flyway.errorOverrides=\n\n# The file where to output the SQL statements of a migration dry run. If the file specified is in a non-existent\n# directory, Flyway will create all directories and parent directories as needed.\n# <<blank>> to execute the SQL statements directly against the database. (default: <<blank>>)\n# Flyway Pro and Flyway Enterprise only\n# flyway.dryRunOutput=\n\n# Whether to Flyway's support for Oracle SQL*Plus commands should be activated. (default: false)\n# Flyway Pro and Flyway Enterprise only\n# flyway.oracle.sqlplus=\n\n# Whether Flyway should issue a warning instead of an error whenever it encounters an Oracle SQL*Plus\n# statement it doesn't yet support. (default: false)\n# Flyway Pro and Flyway Enterprise only\n# flyway.oracle.sqlplusWarn=\n\n# Your Flyway license key (FL01...). Not yet a Flyway Pro or Enterprise Edition customer?\n# Request your Flyway trial license key st https://flywaydb.org/download/\n# to try out Flyway Pro and Enterprise Edition features free for 30 days.\n# Flyway Pro and Flyway Enterprise only\n# flyway.licenseKey=\n")])])]),t("h2",{attrs:{id:"参考文章"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[e._v("#")]),e._v(" 参考文章")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/2c5679f268f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("flyway从入门到精通（四）：flyway配置属性详解"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=i.exports}}]);