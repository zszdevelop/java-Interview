(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{1207:function(s,e,t){"use strict";t.r(e);var a=t(26),_=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"redis面试考点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis面试考点"}},[s._v("#")]),s._v(" redis面试考点")]),s._v(" "),t("h2",{attrs:{id:"_1-redis-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis-简介"}},[s._v("#")]),s._v(" 1. redis 简介")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("redis 是一个基于内存的高性能key-value数据库")])]),s._v(" "),t("li",[t("p",[s._v("读写速度非常快，因此redis被广泛应用于缓存方向")])]),s._v(" "),t("li",[t("p",[s._v("redis提供了多种数据类型来支持不同的业务场景")])])]),s._v(" "),t("blockquote",[t("ul",[t("li",[s._v("与传统数据库不同的是redis的数据是存在内存中的，所以读写速度非常快，因此redis被广泛应用于缓存方向")]),s._v(" "),t("li",[s._v("另外，redis也经常用来做分布式锁")]),s._v(" "),t("li",[s._v("除此之外，redis 支持事务 、持久化、LUA脚本、LRU驱动事件、多种集群方案。")])])]),s._v(" "),t("h2",{attrs:{id:"_2-为什么要用redis-为什么要用缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-为什么要用redis-为什么要用缓存"}},[s._v("#")]),s._v(" 2. 为什么要用redis/为什么要用缓存")]),s._v(" "),t("p",[s._v("主要从“高性能”和“高并发”这两点来看待这个问题")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("高性能")])]),s._v(" "),t("p",[s._v("假如用户第一次访问数据库中的某些数据。这个过程会比较慢，因为是从硬盘上读取的。将该用户访问的数据存在缓存中，这样下一次再访问这些数据的时候就可以直接从缓存中获取了。操作缓存就是直接操作内存，所以速度相当快。如果数据库中的对应数据改变的之后，同步改变缓存中相应的数据即可！")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191001003544350.png",alt:"image-20191001003544350"}})])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("高并发")])])])]),s._v(" "),t("p",[s._v("直接操作缓存能够承受的请求是远远大于直接访问数据库的，所以我们可以考虑把数据库中的部分数据转移到缓存中去，这样用户的一部分请求会直接到缓存这里而不用经过数据库。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191001003719543.png",alt:"image-20191001003719543"}})]),s._v(" "),t("h2",{attrs:{id:"_3-为什么要用redis-而不用-map-guava-做缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-为什么要用redis-而不用-map-guava-做缓存"}},[s._v("#")]),s._v(" 3. 为什么要用redis 而不用 map/guava 做缓存")]),s._v(" "),t("p",[s._v("缓存分为"),t("strong",[s._v("本地缓存和分布式缓存")]),s._v("。以 Java 为例，使用自带的 map 或者 guava 实现的是本地缓存，最主要的特点是轻量以及快速，生命周期随着 jvm 的销毁而结束，并且在多实例的情况下，每个实例都需要各自保存一份缓存，缓存不具有一致性。")]),s._v(" "),t("p",[s._v("使用 redis 或 memcached 之类的称为分布式缓存，在多实例的情况下，各实例共用一份缓存数据，缓存具有一致性。缺点是需要保持 redis 或 memcached服务的高可用，整个程序架构上较为复杂。")]),s._v(" "),t("h2",{attrs:{id:"_4-redis的线程模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-redis的线程模型"}},[s._v("#")]),s._v(" 4. redis的线程模型")]),s._v(" "),t("p",[t("strong",[s._v("单线程的IO 多路复用线程模型")])]),s._v(" "),t("p",[t("strong",[s._v("为什么是单线程")]),s._v("：最终做事的是文件事件处理，他是单线程的")]),s._v(" "),t("p",[t("strong",[s._v("IO多路复用是干嘛的？")]),s._v("：监听多个Socket,并将socket产生的事件放入队列")]),s._v(" "),t("blockquote",[t("p",[s._v("redis内部使用文件事件处理器"),t("code",[s._v("file event handler")]),s._v(",这个文件事件处理器是单线程的，所以redis才叫做单线程的模型。"),t("strong",[s._v("它采用 单线程的IO 多路复用机制同时监听多个socket")]),s._v("。根据socket上的事件来选择对应的事件处理器进行处理")]),s._v(" "),t("p",[s._v("文件事件处理器的结构包含4个部分")]),s._v(" "),t("ul",[t("li",[s._v("多个Socket")]),s._v(" "),t("li",[s._v("IO 多路复用程序")]),s._v(" "),t("li",[s._v("文件事件分派器")]),s._v(" "),t("li",[s._v("事件处理器（连接应答处理器，命令请求处理器，命令回复处理器）")])])]),s._v(" "),t("h3",{attrs:{id:"_4-1-线程模型的处理流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-线程模型的处理流程"}},[s._v("#")]),s._v(" 4.1 线程模型的处理流程")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("多个 socket 可能会"),t("strong",[s._v("并发产生不同的操作")]),s._v("，每个操作对应不同的文件事件，")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("IO 多路复用程序")]),s._v("会监听多个 socket，会将 socket 产生的事件"),t("strong",[s._v("放入队列中排队")]),s._v("，")])]),s._v(" "),t("li",[t("p",[s._v("事件分派器每次从队列中取出一个事件，把该事件交给对应的"),t("strong",[s._v("事件处理器")]),s._v("进行处理。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191024173340752.png",alt:"image-20191024173340752"}})]),s._v(" "),t("h2",{attrs:{id:"_5-redis-单线程为什么效率也这么高"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-redis-单线程为什么效率也这么高"}},[s._v("#")]),s._v(" 5. redis 单线程为什么效率也这么高")]),s._v(" "),t("ul",[t("li",[s._v("纯内存操作，内存的读写速度非常快")]),s._v(" "),t("li",[s._v("核心是基于"),t("strong",[s._v("非阻塞的IO 多路复用")]),s._v("机制")]),s._v(" "),t("li",[s._v("单线程，省去了很多上下文切换的时间")])]),s._v(" "),t("h2",{attrs:{id:"_6-为什么redis-是单线程的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-为什么redis-是单线程的"}},[s._v("#")]),s._v(" 6. 为什么Redis 是单线程的")]),s._v(" "),t("h3",{attrs:{id:"_6-1-官方答案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-官方答案"}},[s._v("#")]),s._v(" 6.1 官方答案")]),s._v(" "),t("p",[s._v("因为redis 是基于内存的操作，cpu不是redis的瓶颈，redis 的瓶颈最多可能是机器内存的大小或者网络带宽。既然单线程容易实现，而且cpu不会称为性能瓶颈，那就顺理成章采用单线程方案")]),s._v(" "),t("h2",{attrs:{id:"_7-redis-和memcached的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-redis-和memcached的区别"}},[s._v("#")]),s._v(" 7. redis 和memcached的区别")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("redis支持更丰富的数据类型（支持更复杂的应用场景）")]),s._v("：Redis不仅仅支持简单的k/v类型的数据，同时还提供list，set，zset，hash等数据结构的存储。memcache支持简单的数据类型，String。")]),s._v(" "),t("li",[t("strong",[s._v("Redis支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用,而Memecache把数据全部存在内存之中。")])]),s._v(" "),t("li",[t("strong",[s._v("集群模式")]),s._v("：memcached没有原生的集群模式，需要依靠客户端来实现往集群中分片写入数据；但是 redis 目前是原生支持 cluster 模式的.")]),s._v(" "),t("li",[t("strong",[s._v("Memcached是多线程，非阻塞IO复用的网络模型；Redis使用单线程的多路 IO 复用模型。")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20191003175856781.png",alt:"image-20191003175856781"}})]),s._v(" "),t("h2",{attrs:{id:"_8-redis常见数据结构及使用场景分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-redis常见数据结构及使用场景分析"}},[s._v("#")]),s._v(" 8. redis常见数据结构及使用场景分析")]),s._v(" "),t("h4",{attrs:{id:"_8-1-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-string"}},[s._v("#")]),s._v(" 8.1 String")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("常用命令:")]),s._v(" set,get,decr,incr,mget 等。")])]),s._v(" "),t("p",[s._v("String数据结构是"),t("strong",[s._v("简单的key-value类型")]),s._v("，value其实不仅可以是String，也可以是数字。 常规key-value缓存应用； 常规计数：微博数，粉丝数等。")]),s._v(" "),t("h4",{attrs:{id:"_8-2-hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-hash"}},[s._v("#")]),s._v(" 8.2 Hash")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("常用命令：")]),s._v(" hget,hset,hgetall 等。")])]),s._v(" "),t("p",[s._v("hash 是一个 "),t("strong",[s._v("string 类型的 field 和 value 的映射表")]),s._v("，hash 特别适合用于存储对象，后续操作的时候，你可以直接仅仅修改这个对象中的某个字段的值。 比如我们可以 hash 数据结构来存储用户信息，商品信息等等。比如下面我就用 hash 类型存放了我本人的一些信息：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("key=JavaUser293847\nvalue={\n  “id”: 1,\n  “name”: “SnailClimb”,\n  “age”: 22,\n  “location”: “Wuhan, Hubei”\n}\n")])])]),t("h4",{attrs:{id:"_8-3-list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-list"}},[s._v("#")]),s._v(" 8.3 List")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("常用命令:")]),s._v(" lpush,rpush,lpop,rpop,lrange等")])]),s._v(" "),t("p",[t("strong",[s._v("list 就是链表")]),s._v("，Redis list 的应用场景非常多，也是Redis最重要的数据结构之一，比如微博的关注列表，粉丝列表，消息列表等功能都可以用Redis的 list 结构来实现。")]),s._v(" "),t("p",[s._v("Redis list 的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销。")]),s._v(" "),t("p",[s._v("另外可以通过 lrange 命令，就是从某个元素开始读取多少个元素，可以基于 list 实现分页查询，这个很棒的一个功能，基于 redis 实现简单的高性能分页，可以做类似微博那种下拉不断分页的东西（一页一页的往下走），性能高。")]),s._v(" "),t("h4",{attrs:{id:"_8-4-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-4-set"}},[s._v("#")]),s._v(" 8.4 Set")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("常用命令：")]),s._v(" sadd,spop,smembers,sunion 等")])]),s._v(" "),t("blockquote",[t("p",[s._v("set 的是通过 hash table 实现的， 所以添加，删除，查找的复杂度都是 O(1)")])]),s._v(" "),t("p",[s._v("set 对外提供的功能与list类似是一个列表的功能，特殊之处在于 set 是可以自动排重的。")]),s._v(" "),t("p",[s._v("当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了判断某个成员是否在一个set集合内的重要接口，这个也是list所不能提供的。可以基于 set 轻易实现交集、并集、差集的操作。")]),s._v(" "),t("p",[s._v("比如：在微博应用中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis可以非常方便的实现如共同关注、共同粉丝、共同喜好等功能。这个过程也就是求交集的过程，具体命令如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sinterstore key1 key2 key3     将交集存在key1内\n")])])]),t("h4",{attrs:{id:"_8-5-sorted-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-5-sorted-set"}},[s._v("#")]),s._v(" 8.5 Sorted Set")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("常用命令：")]),s._v(" zadd,zrange,zrem,zcard等")])]),s._v(" "),t("p",[s._v("和set相比，sorted set增加了一个权重参数score，使得集合中的元素能够按score进行有序排列。")]),s._v(" "),t("p",[t("strong",[s._v("举例：")]),s._v(" 在直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕消息（可以理解为按消息维度的消息排行榜）等信息，适合使用 Redis 中的 Sorted Set 结构进行存储。")]),s._v(" "),t("h2",{attrs:{id:"_9-redis-设置过期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-redis-设置过期时间"}},[s._v("#")]),s._v(" 9. redis 设置过期时间")]),s._v(" "),t("p",[s._v("Redis中有个设置时间过期的功能，即对存储在 redis 数据库中的值可以设置一个过期时间。作为一个缓存数据库，这是非常实用的。如我们一般项目中的 token 或者一些登录信息，尤其是短信验证码都是有时间限制的，按照传统的数据库处理方式，一般都是自己判断过期，这样无疑会严重影响项目性能。")]),s._v(" "),t("p",[s._v("我们 set key 的时候，都可以给一个 expire time，就是过期时间，通过过期时间我们可以指定这个 key 可以存活的时间。")]),s._v(" "),t("p",[s._v("如果假设你设置了一批 key 只能存活1个小时，那么接下来1小时后，redis是怎么对这批key进行删除的？")]),s._v(" "),t("p",[t("strong",[s._v("定期删除+惰性删除。")])]),s._v(" "),t("p",[s._v("通过名字大概就能猜出这两个删除方式的意思了。")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("定期删除")]),s._v("：redis默认是每隔 100ms 就"),t("strong",[s._v("随机抽取")]),s._v("一些设置了过期时间的key，检查其是否过期，如果过期就删除。注意这里是随机抽取的。为什么要随机呢？你想一想假如 redis 存了几十万个 key ，每隔100ms就遍历所有的设置过期时间的 key 的话，就会给 CPU 带来很大的负载！")]),s._v(" "),t("li",[t("strong",[s._v("惰性删除")]),s._v(" ：定期删除可能会导致很多过期 key 到了时间并没有被删除掉。所以就有了惰性删除。假如你的过期 key，靠定期删除没有被删除掉，还停留在内存里，除非你的系统去查一下那个 key，才会被redis给删除掉。这就是所谓的惰性删除，也是够懒的哈！")])]),s._v(" "),t("p",[s._v("但是仅仅通过设置过期时间还是有问题的。我们想一下：如果定期删除漏掉了很多过期 key，然后你也没及时去查，也就没走惰性删除，此时会怎么样？如果大量过期key堆积在内存里，导致redis内存块耗尽了。怎么解决这个问题呢？ "),t("strong",[s._v("redis 内存淘汰机制。")])]),s._v(" "),t("h2",{attrs:{id:"_10-redis-内存淘汰机制-mysql里有2000w数据-redis中只存20w的数据-如何保证redis中的数据都是热点数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-redis-内存淘汰机制-mysql里有2000w数据-redis中只存20w的数据-如何保证redis中的数据都是热点数据"}},[s._v("#")]),s._v(" 10. redis 内存淘汰机制(MySQL里有2000w数据，Redis中只存20w的数据，如何保证Redis中的数据都是热点数据?)")]),s._v(" "),t("p",[t("strong",[s._v("redis 提供 6种数据淘汰策略：")])]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("volatile-lru")]),s._v("：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰")]),s._v(" "),t("li",[t("strong",[s._v("volatile-ttl")]),s._v("：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰")]),s._v(" "),t("li",[t("strong",[s._v("volatile-random")]),s._v("：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰")]),s._v(" "),t("li",[t("strong",[s._v("allkeys-lru")]),s._v("：当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的key（这个是最常用的）")]),s._v(" "),t("li",[t("strong",[s._v("allkeys-random")]),s._v("：从数据集（server.db[i].dict）中任意选择数据淘汰")]),s._v(" "),t("li",[t("strong",[s._v("no-eviction")]),s._v("：禁止驱逐数据，也就是说当内存不足以容纳新写入数据时，新写入操作会报错。这个应该没人使用吧！")])]),s._v(" "),t("p",[s._v("4.0版本后增加以下两种：")]),s._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("strong",[s._v("volatile-lfu")]),s._v("：从已设置过期时间的数据集(server.db[i].expires)中挑选最不经常使用的数据淘汰")]),s._v(" "),t("li",[t("strong",[s._v("allkeys-lfu")]),s._v("：当内存不足以容纳新写入数据时，在键空间中，移除最不经常使用的key")])]),s._v(" "),t("h2",{attrs:{id:"_11-redis-持久化机制-怎么保证-redis-挂掉之后再重启数据可以进行恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-redis-持久化机制-怎么保证-redis-挂掉之后再重启数据可以进行恢复"}},[s._v("#")]),s._v(" 11. redis 持久化机制（怎么保证 redis 挂掉之后再重启数据可以进行恢复）")]),s._v(" "),t("p",[s._v("很多时候我们需要持久化数据也就是将内存中的数据写入到硬盘里面，大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了防止系统故障而将数据备份到一个远程位置。")]),s._v(" "),t("p",[s._v("Redis不同于Memcached的很重一点就是，Redis支持持久化，而且支持两种不同的持久化操作。"),t("strong",[s._v("Redis的一种持久化方式叫快照（snapshotting，RDB），另一种方式是只追加文件（append-only file,AOF）")]),s._v("。这两种方法各有千秋，下面我会详细这两种持久化方法是什么，怎么用，如何选择适合自己的持久化方法。")]),s._v(" "),t("h3",{attrs:{id:"_11-1-快照-snapshotting-持久化-rdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-1-快照-snapshotting-持久化-rdb"}},[s._v("#")]),s._v(" "),t("strong",[s._v("11.1 快照（snapshotting）持久化（RDB）")])]),s._v(" "),t("p",[s._v("Redis可以通过创建快照来获得存储在内存里面的数据在某个时间点上的副本。Redis创建快照之后，可以对快照进行备份，可以将快照复制到其他服务器从而创建具有相同数据的服务器副本（Redis主从结构，主要用来提高Redis性能），还可以将快照留在原地以便重启服务器的时候使用。")]),s._v(" "),t("p",[s._v("快照持久化是Redis默认采用的持久化方式，在redis.conf配置文件中默认有此下配置：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\nsave 900 1           #在900秒(15分钟)之后，如果至少有1个key发生变化，Redis就会自动触发BGSAVE命令创建快照。\n\nsave 300 10          #在300秒(5分钟)之后，如果至少有10个key发生变化，Redis就会自动触发BGSAVE命令创建快照。\n\nsave 60 10000        #在60秒(1分钟)之后，如果至少有10000个key发生变化，Redis就会自动触发BGSAVE命令创建快照。\n\n")])])]),t("h3",{attrs:{id:"_11-2-aof-append-only-file-持久化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-2-aof-append-only-file-持久化"}},[s._v("#")]),s._v(" 11.2 "),t("strong",[s._v("AOF（append-only file）持久化")])]),s._v(" "),t("p",[s._v("与快照持久化相比，AOF持久化 的实时性更好，因此已成为主流的持久化方案。默认情况下Redis没有开启AOF（append only file）方式的持久化，可以通过appendonly参数开启：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("appendonly yes\n")])])]),t("p",[s._v("开启AOF持久化后每执行一条会更改Redis中的数据的命令，Redis就会将该命令写入硬盘中的AOF文件。AOF文件的保存位置和RDB文件的位置相同，都是通过dir参数设置的，默认的文件名是appendonly.aof。")]),s._v(" "),t("p",[s._v("在Redis的配置文件中存在三种不同的 AOF 持久化方式，它们分别是：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("appendfsync always    #每次有数据修改发生时都会写入AOF文件,这样会严重降低Redis的速度\nappendfsync everysec  #每秒钟同步一次，显示地将多个写命令同步到硬盘\nappendfsync no        #让操作系统决定何时进行同步\n")])])]),t("p",[s._v("为了兼顾数据和写入性能，用户可以考虑 appendfsync everysec选项 ，让Redis每秒同步一次AOF文件，Redis性能几乎没受到任何影响。而且这样即使出现系统崩溃，用户最多只会丢失一秒之内产生的数据。当硬盘忙于执行写入操作的时候，Redis还会优雅的放慢自己的速度以便适应硬盘的最大写入速度。")]),s._v(" "),t("h3",{attrs:{id:"_11-3-redis-4-0-对于持久化机制的优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-3-redis-4-0-对于持久化机制的优化"}},[s._v("#")]),s._v(" "),t("strong",[s._v("11.3 Redis 4.0 对于持久化机制的优化")])]),s._v(" "),t("p",[s._v("Redis 4.0 开始支持 RDB 和 AOF 的混合持久化（默认关闭，可以通过配置项 "),t("code",[s._v("aof-use-rdb-preamble")]),s._v(" 开启）。")]),s._v(" "),t("p",[s._v("如果把混合持久化打开，AOF 重写的时候就直接把 RDB 的内容写到 AOF 文件开头。这样做的好处是可以结合 RDB 和 AOF 的优点, 快速加载同时避免丢失过多的数据。当然缺点也是有的， AOF 里面的 RDB 部分是压缩格式不再是 AOF 格式，可读性较差。")]),s._v(" "),t("h2",{attrs:{id:"_11-4-补充内容-aof重写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-4-补充内容-aof重写"}},[s._v("#")]),s._v(" 11.4 补充内容：AOF重写")]),s._v(" "),t("p",[s._v("AOF重写可以产生一个新的AOF文件，这个新的AOF文件和原有的AOF文件所保存的数据库状态一样，但体积更小。")]),s._v(" "),t("p",[s._v("AOF重写是一个有歧义的名字，该功能是通过读取数据库中的键值对来实现的，程序无须对现有AOF文件进行任何读入、分析或者写入操作。")]),s._v(" "),t("p",[s._v("在执行 BGREWRITEAOF 命令时，Redis 服务器会维护一个 AOF 重写缓冲区，该缓冲区会在子进程创建新AOF文件期间，记录服务器执行的所有写命令。当子进程完成创建新AOF文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新AOF文件的末尾，使得新旧两个AOF文件所保存的数据库状态一致。最后，服务器用新的AOF文件替换旧的AOF文件，以此来完成AOF文件重写操作")])])}),[],!1,null,null,null);e.default=_.exports}}]);