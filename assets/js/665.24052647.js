(window.webpackJsonp=window.webpackJsonp||[]).push([[665],{1044:function(s,a,e){"use strict";e.r(a);var n=e(26),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"chinahrss使用docker-compose部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chinahrss使用docker-compose部署"}},[s._v("#")]),s._v(" chinahrss使用Docker Compose部署")]),s._v(" "),e("p",[s._v("我们使用Docker Compose 一键部署我们的微服务。主要分为三部分:")]),s._v(" "),e("ul",[e("li",[s._v("部署ELK")]),s._v(" "),e("li",[s._v("部署第三方服务（MySQL、Redis和RabbitMQ）")]),s._v(" "),e("li",[s._v("部署自己编写的微服务")])]),s._v(" "),e("h2",{attrs:{id:"_2-部署第三方服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-部署第三方服务"}},[s._v("#")]),s._v(" 2. 部署第三方服务")]),s._v(" "),e("h3",{attrs:{id:"_2-1-创建存储第三方服务docker-compose文件目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建存储第三方服务docker-compose文件目录"}},[s._v("#")]),s._v(" 2.1 创建存储第三方服务Docker Compose文件目录：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /chinahrss/third-part\n")])])]),e("h3",{attrs:{id:"_2-2-新建docker-compose-yml文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-新建docker-compose-yml文件"}},[s._v("#")]),s._v(" 2.2 新建docker-compose.yml文件")]),s._v(" "),e("p",[s._v("在该目录下新建一个docker-compose.yml文件：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /chinahrss/third-part/docker-compose.yml\n")])])]),e("p",[s._v("内容如下")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("version: '3'\n\nservices:\n  mysql:\n    image: mysql:5.7.24\n    container_name: mysql\n    environment:\n      MYSQL_ROOT_PASSWORD: 123456\n    ports:\n      - 13306:3306\n    volumes:\n      - /chinahrss/mysql/data:/var/lib/mysql #挂载 MySQL数据\n  redis:\n    image: redis:4.0.14\n    container_name: redis\n    command: redis-server /usr/local/etc/redis/redis.conf --appendonly yes\n    volumes:\n      - /chinahrss/redis/data:/data #挂载 Redis数据\n      - /chinahrss/redis/conf/redis.conf:/usr/local/etc/redis/redis.conf #挂载 Redis配置\n    ports:\n      - 16379:6379\n  rabbitmq:\n    image: rabbitmq:3.7.15-management\n    container_name: rabbitmq\n    volumes:\n      - /chinahrss/rabbitmq/data:/var/lib/rabbitmq #挂载 RabbitMQ数据\n      - /chinahrss/rabbitmq/log:/var/log/rabbitmq #挂载 RabbitMQ日志\n    ports:\n      - 5673:5672\n      - 15673:15672\n")])])]),e("p",[s._v("因为原有的端口都被占用了，我改了端口。")]),s._v(" "),e("ul",[e("li",[s._v("mysql：13306")]),s._v(" "),e("li",[s._v("Redis：16379")]),s._v(" "),e("li",[s._v("rabbitmq：5673 和 15673")])]),s._v(" "),e("h3",{attrs:{id:"_2-3-创建挂载目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-创建挂载目录"}},[s._v("#")]),s._v(" 2.3 创建挂载目录")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /chinahrss/mysql/data /chinahrss/redis/data /chinahrss/redis/conf \\\n /chinahrss/rabbitmq/data /chinahrss/rabbitmq/log\n")])])]),e("h3",{attrs:{id:"_2-4-创建redis配置文件redis-conf"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-创建redis配置文件redis-conf"}},[s._v("#")]),s._v(" 2.4 创建Redis配置文件"),e("code",[s._v("redis.conf")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("touch /chinahrss/redis/conf/redis.conf\n")])])]),e("p",[s._v("因为我使用的是Redis默认配置，所以并没有在该配置文件里编写任何内容。")]),s._v(" "),e("h3",{attrs:{id:"_2-5-运行docker-compose"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-运行docker-compose"}},[s._v("#")]),s._v(" 2.5 运行docker-compose")]),s._v(" "),e("p",[s._v("准备完毕后，将目录切换到/chinahrss/third-part，然后运行"),e("code",[s._v("docker-compose up -d")]),s._v("启动：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129210656858.png",alt:"image-20200129210656858"}})]),s._v(" "),e("h3",{attrs:{id:"_2-6-连接测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-连接测试"}},[s._v("#")]),s._v(" 2.6 连接测试")]),s._v(" "),e("h3",{attrs:{id:"_2-6-1-mysql连接测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-1-mysql连接测试"}},[s._v("#")]),s._v(" 2.6.1 Mysql连接测试")]),s._v(" "),e("p",[s._v("使用Navicat连接MySQL")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129212504561.png",alt:"image-20200129212504561"}})]),s._v(" "),e("p",[s._v("连接成功")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129212520066.png",alt:"image-20200129212520066"}})]),s._v(" "),e("p",[s._v("创建数据库")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129212808981.png",alt:"image-20200129212808981"}})]),s._v(" "),e("p",[s._v("最后导入chinahrss_cloud_base SQL和zipkin相关SQL，导入后库表如下所示：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129212958440.png",alt:"image-20200129212958440"}})]),s._v(" "),e("h3",{attrs:{id:"_2-6-2-连接redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-2-连接redis"}},[s._v("#")]),s._v(" 2.6.2 连接Redis")]),s._v(" "),e("p",[s._v("使用Redis Desktop Manager看看能否成功连接Redis：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129213232963.png",alt:"image-20200129213232963"}})]),s._v(" "),e("h3",{attrs:{id:"_2-6-3-连接rabbitmq测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-3-连接rabbitmq测试"}},[s._v("#")]),s._v(" 2.6.3 连接RabbitMQ测试")]),s._v(" "),e("p",[s._v("浏览器访问 http://120.79.200.111:15673/")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129213558080.png",alt:"image-20200129213558080"}})]),s._v(" "),e("p",[s._v("默认用户名和密码都为guest。在Admin标签页里新建一个用户，用户名为chinahrss，密码为123456，角色为管理员：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129213748137.png",alt:"image-20200129213748137"}})]),s._v(" "),e("p",[s._v("然后对chinahrss用户授权，点击chinahrss用户：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129213840855.png",alt:"image-20200129213840855"}})]),s._v(" "),e("p",[s._v("点击Set Permission按钮：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200129213921866.png",alt:"image-20200129213921866"}})]),s._v(" "),e("p",[s._v("至此第三方服务都准备完毕，接下来开始部署我们自己的微服务。")]),s._v(" "),e("h2",{attrs:{id:"_3-部署-nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署-nacos"}},[s._v("#")]),s._v(" 3. 部署 nacos")]),s._v(" "),e("h3",{attrs:{id:"_3-1-新建docker-compose-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-新建docker-compose-yml"}},[s._v("#")]),s._v(" 3.1 新建docker-compose.yml")]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("/chinahrss/nacos")]),s._v(" 目录下新建docker-compose.yml文件")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("vim /chinahrss/nacos/docker-compose.yml\n")])])]),e("p",[s._v("内容如下")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('version: \'3\'\n\nservices:\n  nacos:\n    image: nacos/nacos-server:latest\n    container_name: nacos-standalone-mysql\n    environment:\n      - "PREFER_HOST_MODE=hostname"\n      - "MODE=standalone"\n      - "SPRING_DATASOURCE_PLATFORM=mysql"\n      - "MYSQL_MASTER_SERVICE_HOST=120.79.200.111"\n      - "MYSQL_MASTER_SERVICE_DB_NAME=chinahrss_nacos"\n      - "MYSQL_MASTER_SERVICE_PORT=13306"\n      - "MYSQL_MASTER_SERVICE_USER=root"\n      - "MYSQL_MASTER_SERVICE_PASSWORD=123456"\n      - "MYSQL_SLAVE_SERVICE_HOST=120.79.200.111"\n      - "MYSQL_SLAVE_SERVICE_PORT=13306"\n    volumes:\n      - /chinahrss/nacos/standalone-logs/:/home/nacos/logs\n    ports:\n      - 8001:8848\n    restart: on-failure\n')])])]),e("p",[s._v("注意事项")]),s._v(" "),e("ul",[e("li",[s._v("mysql 的数据库必须要两个主从，两个一样也可以")]),s._v(" "),e("li",[s._v("端口我改成了8001")])]),s._v(" "),e("h3",{attrs:{id:"_3-2-新建对应的数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-新建对应的数据库"}},[s._v("#")]),s._v(" 3.2 新建对应的数据库")]),s._v(" "),e("h3",{attrs:{id:"_3-3-启动nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-启动nacos"}},[s._v("#")]),s._v(" 3.3 启动nacos")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker-compose up -d\n")])])]),e("h3",{attrs:{id:"_3-3-浏览nacos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-浏览nacos"}},[s._v("#")]),s._v(" 3.3 浏览nacos")]),s._v(" "),e("p",[s._v("http://120.79.200.111:8001/nacos/")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200130115355107.png",alt:"image-20200130115355107"}})]),s._v(" "),e("h2",{attrs:{id:"_3-部署微服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-部署微服务"}},[s._v("#")]),s._v(" 3. 部署微服务")]),s._v(" "),e("h3",{attrs:{id:"_3-1-新建docker-compose文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-新建docker-compose文件"}},[s._v("#")]),s._v(" 3.1 新建Docker Compose文件")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir -p /chinahrss/chinahrss-cloud\nvim /chinahrss/chinahrss-cloud/docker-compose.yml\n")])])]),e("p",[s._v("其内容如下所示：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('version: \'3\'\n\nservices:\n  febs-register:\n    image: febs-register:latest # 指定基础镜像，就是上一节中我们自己构建的镜像\n    container_name: febs-register # 容器名称\n    volumes:\n      - "/febs/log:/log" #日志挂载\n    command:\n      - "--febs-register=192.168.33.10" # 通过command指定地址变量值\n      - "--febs-monitor-admin=192.168.33.10"\n    ports:\n      - 8001:8001 # 端口映射\n  febs-monitor-admin:\n    image: febs-monitor-admin:latest\n    container_name: febs-monitor-admin\n    volumes:\n      - "/febs/log:/log"\n    ports:\n      - 8401:8401\n  febs-gateway:\n    image: febs-gateway:latest\n    container_name: febs-gateway\n    depends_on:\n      - febs-register\n    volumes:\n      - "/febs/log:/log"\n    command:\n      - "--febs-register=192.168.33.10"\n      - "--febs-monitor-admin=192.168.33.10"\n    ports:\n      - 8301:8301\n  febs-auth:\n    image: febs-auth:latest\n    container_name: febs-auth\n    depends_on:\n      - febs-register\n    volumes:\n      - "/febs/log:/log"\n    command:\n      - "--mysql.url=192.168.33.10"\n      - "--redis.url=192.168.33.10"\n      - "--febs-register=192.168.33.10"\n      - "--febs-monitor-admin=192.168.33.10"\n  febs-server-system:\n    image: febs-server-system:latest\n    container_name: febs-server-system\n    depends_on:\n      - febs-register\n    volumes:\n      - "/febs/log:/log"\n    command:\n      - "--mysql.url=192.168.33.10"\n      - "--rabbitmq.url=192.168.33.10"\n      - "--febs-register=192.168.33.10"\n      - "--febs-monitor-admin=192.168.33.10"\n      - "--febs-gateway=192.168.33.10"\n  febs-server-test:\n    image: febs-server-test:latest\n    container_name: febs-server-test\n    depends_on:\n      - febs-register\n    volumes:\n      - "/febs/log:/log"\n    command:\n      - "--rabbitmq.url=192.168.33.10"\n      - "--febs-register=192.168.33.10"\n      - "--febs-monitor-admin=192.168.33.10"\n      - "--febs-gateway=192.168.33.10"\n  zipkin-server:\n    image: zipkin-server\n    container_name: zipkin-server\n    command:\n      - "--server.port=8402"\n      - "--zipkin.storage.type=mysql"\n      - "--zipkin.storage.mysql.db=febs_cloud_base"\n      - "--zipkin.storage.mysql.username=root"\n      - "--zipkin.storage.mysql.password=123456"\n      - "--zipkin.storage.mysql.host=192.168.33.10"\n      - "--zipkin.storage.mysql.port=3306"\n      - "--zipkin.collector.rabbitmq.addresses=192.168.33.10:5672"\n      - "--zipkin.collector.rabbitmq.username=febs"\n      - "--zipkin.collector.rabbitmq.password=123456"\n    ports:\n      - 8402:8402\n')])])])])}),[],!1,null,null,null);a.default=t.exports}}]);