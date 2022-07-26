(window.webpackJsonp=window.webpackJsonp||[]).push([[880],{1256:function(_,v,e){"use strict";e.r(v);var t=e(26),l=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"redis缓存问题-一致性-穿击-穿透-雪崩-污染等"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存问题-一致性-穿击-穿透-雪崩-污染等"}},[_._v("#")]),_._v(" Redis缓存问题：一致性, 穿击, 穿透, 雪崩, 污染等")]),_._v(" "),e("blockquote",[e("p",[_._v("Redis最常用的一个场景就是作为缓存，本文主要探讨Redis作为缓存，在实践中可能会有哪些问题？比如一致性, 穿击, 穿透, 雪崩, 污染等。")])]),_._v(" "),e("h2",{attrs:{id:"_1-为什么要理解redis缓存问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么要理解redis缓存问题"}},[_._v("#")]),_._v(" 1. 为什么要理解Redis缓存问题")]),_._v(" "),e("p",[_._v("在高并发的业务场景下，数据库大多数情况都是用户并发访问最薄弱的环节。所以，就需要使用redis做一个缓冲操作，让请求先访问到redis，而不是直接访问Mysql等数据库。这样可以大大缓解数据库的压力。")]),_._v(" "),e("p",[_._v("当缓存库出现时，必须要考虑如下问题：")]),_._v(" "),e("ul",[e("li",[_._v("缓存穿透")]),_._v(" "),e("li",[_._v("缓存穿击")]),_._v(" "),e("li",[_._v("缓存雪崩")]),_._v(" "),e("li",[_._v("缓存污染（或者满了）")]),_._v(" "),e("li",[_._v("缓存和数据库一致性")])]),_._v(" "),e("h2",{attrs:{id:"_2-缓存穿透"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存穿透"}},[_._v("#")]),_._v(" 2. 缓存穿透")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("问题来源")])])]),_._v(" "),e("p",[_._v("缓存穿透是指"),e("strong",[_._v("缓存和数据库中都没有的数据")]),_._v("，而用户不断发起请求。由于缓存是不命中时被动写的，并且出于容错考虑，如果从存储层查不到数据则不写入缓存，这将导致这个不存在的数据每次请求都要到存储层去查询，失去了缓存的意义。")]),_._v(" "),e("p",[_._v("在流量大时，可能DB就挂掉了，要是有人利用不存在的key频繁攻击我们的应用，这就是漏洞。")]),_._v(" "),e("p",[_._v("如发起为id为“-1”的数据或id为特别大不存在的数据。这时的用户很可能是攻击者，攻击会导致数据库压力过大。")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("解决方案")])])]),_._v(" "),e("ol",[e("li",[_._v("接口层增加校验，如用户鉴权校验，id做基础校验，id<=0的直接拦截；")]),_._v(" "),e("li",[_._v("从缓存取不到的数据，在数据库中也没有取到，这时也可以将key-value对写为key-null，缓存有效时间可以设置短点，如30秒（设置太长会导致正常情况也没法使用）。这样可以防止攻击用户反复用同一个id暴力攻击")]),_._v(" "),e("li",[_._v("布隆过滤器。bloomfilter就类似于一个hash set，用于快速判某个元素是否存在于集合中，其典型的应用场景就是快速判断一个key是否存在于某容器，不存在就直接返回。布隆过滤器的关键就在于hash算法和容器大小，")])]),_._v(" "),e("h2",{attrs:{id:"_3-缓存击穿"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-缓存击穿"}},[_._v("#")]),_._v(" 3. 缓存击穿")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("问题来源")])])]),_._v(" "),e("p",[_._v("缓存击穿是指"),e("strong",[_._v("缓存中没有但数据库中有的数据")]),_._v("（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力。")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("解决方案")])])]),_._v(" "),e("p",[_._v("1、设置热点数据永远不过期。")]),_._v(" "),e("p",[_._v("2、接口限流与熔断，降级。重要的接口一定要做好限流策略，防止用户恶意刷接口，同时要降级准备，当接口中的某些 服务  不可用时候，进行熔断，失败快速返回机制。")]),_._v(" "),e("p",[_._v("3、加互斥锁")]),_._v(" "),e("h2",{attrs:{id:"_4-缓存雪崩"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-缓存雪崩"}},[_._v("#")]),_._v(" 4. 缓存雪崩")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("问题来源")])])]),_._v(" "),e("p",[_._v("缓存雪崩是指缓存中"),e("strong",[_._v("数据大批量到过期时间，而查询数据量巨大，引起数据库压力过大甚至down机")]),_._v("。和缓存击穿不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("解决方案")])])]),_._v(" "),e("ol",[e("li",[_._v("缓存数据的过期时间设置随机，防止同一时间大量数据过期现象发生。")]),_._v(" "),e("li",[_._v("如果缓存数据库是分布式部署，将热点数据均匀分布在不同的缓存数据库中。")]),_._v(" "),e("li",[_._v("设置热点数据永远不过期。")])]),_._v(" "),e("h2",{attrs:{id:"_5-缓存污染-或满了"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-缓存污染-或满了"}},[_._v("#")]),_._v(" 5. 缓存污染（或满了）")]),_._v(" "),e("p",[_._v("缓存污染问题说的是缓存中一些只会被访问一次或者几次的的数据，被访问完后，再也不会被访问到，但这部分数据依然留存在缓存中，消耗缓存空间。")]),_._v(" "),e("p",[_._v("缓存污染会随着数据的持续增加而逐渐显露，随着服务的不断运行，缓存中会存在大量的永远不会再次被访问的数据。缓存空间是有限的，如果缓存空间满了，再往缓存里写数据时就会有额外开销，影响Redis性能。这部分额外开销主要是指写的时候判断淘汰策略，根据淘汰策略去选择要淘汰的数据，然后进行删除操作。")]),_._v(" "),e("h3",{attrs:{id:"_5-1-最大缓存设置多大"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-最大缓存设置多大"}},[_._v("#")]),_._v(" 5.1 最大缓存设置多大")]),_._v(" "),e("p",[_._v("系统的设计选择是一个权衡的过程：大容量缓存是能带来性能加速的收益，但是成本也会更高，而小容量缓存不一定就起不到加速访问的效果。一般来说，"),e("strong",[_._v("我会建议把缓存容量设置为总数据量的 15% 到 30%，兼顾访问性能和内存空间开销")]),_._v("。")]),_._v(" "),e("p",[_._v("对于 Redis 来说，一旦确定了缓存最大容量，比如 4GB，你就可以使用下面这个命令来设定缓存的大小了：")]),_._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[_._v("CONFIG SET maxmemory 4gb\n")])])]),e("p",[_._v("不过，缓存被写满是不可避免的, 所以需要数据淘汰策略")]),_._v(" "),e("h3",{attrs:{id:"_5-2-缓存淘汰策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-缓存淘汰策略"}},[_._v("#")]),_._v(" 5.2 缓存淘汰策略")]),_._v(" "),e("p",[_._v("Redis共支持八种淘汰策略，分别是noeviction、volatile-random、volatile-ttl、volatile-lru、volatile-lfu、allkeys-lru、allkeys-random 和 allkeys-lfu 策略。")]),_._v(" "),e("p",[e("strong",[_._v("怎么理解呢")]),_._v("？主要看分三类看：")]),_._v(" "),e("ul",[e("li",[_._v("不淘汰\n"),e("ul",[e("li",[_._v("noeviction （v4.0后默认的）")])])]),_._v(" "),e("li",[_._v("对设置了过期时间的数据中进行淘汰\n"),e("ul",[e("li",[_._v("随机：volatile-random")]),_._v(" "),e("li",[_._v("ttl：volatile-ttl")]),_._v(" "),e("li",[_._v("lru：volatile-lru")]),_._v(" "),e("li",[_._v("lfu：volatile-lfu")])])]),_._v(" "),e("li",[_._v("全部数据进行淘汰\n"),e("ul",[e("li",[_._v("随机：allkeys-random")]),_._v(" "),e("li",[_._v("lru：allkeys-lru")]),_._v(" "),e("li",[_._v("lfu：allkeys-lfu")])])])]),_._v(" "),e("blockquote",[e("p",[_._v("具体对照下：")])]),_._v(" "),e("ol",[e("li",[e("p",[e("strong",[_._v("noeviction")])]),_._v(" "),e("p",[_._v("该策略是Redis的默认策略。在这种策略下，一旦缓存被写满了，再有写请求来时，Redis 不再提供服务，而是直接返回错误。这种策略不会淘汰数据，所以无法解决缓存污染问题。一般生产环境不建议使用。")]),_._v(" "),e("p",[_._v("其他七种规则都会根据自己相应的规则来选择数据进行删除操作。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("volatile-random")])]),_._v(" "),e("p",[_._v("这个算法比较简单，在设置了过期时间的键值对中，进行随机删除。因为是随机删除，无法把不再访问的数据筛选出来，所以可能依然会存在缓存污染现象，无法解决缓存污染问题。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("volatile-ttl")])]),_._v(" "),e("p",[_._v("这种算法判断淘汰数据时参考的指标比随机删除时多进行一步过期时间的排序。Redis在筛选需删除的数据时，越早过期的数据越优先被选择。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("volatile-lru")])]),_._v(" "),e("p",[_._v("LRU算法：LRU 算法的全称是 Least Recently Used，按照最近最少使用的原则来筛选数据。这种模式下会使用 LRU 算法筛选设置了过期时间的键值对。")]),_._v(" "),e("p",[_._v("Redis优化的"),e("strong",[_._v("LRU算法实现")]),_._v("：")]),_._v(" "),e("p",[_._v("Redis会记录每个数据的最近一次被访问的时间戳。在Redis在决定淘汰的数据时，第一次会随机选出 N 个数据，把它们作为一个候选集合。接下来，Redis 会比较这 N 个数据的 lru 字段，把 lru 字段值最小的数据从缓存中淘汰出去。通过随机读取待删除集合，可以让Redis不用维护一个巨大的链表，也不用操作链表，进而提升性能。")]),_._v(" "),e("p",[_._v("Redis 选出的数据个数 N，通过 配置参数 maxmemory-samples 进行配置。个数N越大，则候选集合越大，选择到的最久未被使用的就更准确，N越小，选择到最久未被使用的数据的概率也会随之减小。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("volatile-lfu")])]),_._v(" "),e("p",[_._v("会使用 LFU 算法选择设置了过期时间的键值对。")]),_._v(" "),e("p",[e("strong",[_._v("LFU 算法")]),_._v("：LFU 缓存策略是在 LRU 策略基础上，为每个数据增加了一个计数器，来统计这个数据的访问次数。当使用 LFU 策略筛选淘汰数据时，首先会根据数据的访问次数进行筛选，把访问次数最低的数据淘汰出缓存。如果两个数据的访问次数相同，LFU 策略再比较这两个数据的访问时效性，把距离上一次访问时间更久的数据淘汰出缓存。 Redis的LFU算法实现:")]),_._v(" "),e("p",[_._v("当 LFU 策略筛选数据时，Redis 会在候选集合中，根据数据 lru 字段的后 8bit 选择访问次数最少的数据进行淘汰。当访问次数相同时，再根据 lru 字段的前 16bit 值大小，选择访问时间最久远的数据进行淘汰。")]),_._v(" "),e("p",[_._v("Redis 只使用了 8bit 记录数据的访问次数，而 8bit 记录的最大值是 255，这样在访问快速的情况下，如果每次被访问就将访问次数加一，很快某条数据就达到最大值255，可能很多数据都是255，那么退化成LRU算法了。所以Redis为了解决这个问题，实现了一个更优的计数规则，并可以通过配置项，来控制计数器增加的速度。")]),_._v(" "),e("p",[e("strong",[_._v("参数")]),_._v(" ：")]),_._v(" "),e("ul",[e("li",[e("p",[e("code",[_._v("lfu-log-factor")]),_._v(" ，用计数器当前的值乘以配置项 lfu_log_factor 再加 1，再取其倒数，得到一个 p 值；然后，把这个 p 值和一个取值范围在（0，1）间的随机数 r 值比大小，只有 p 值大于 r 值时，计数器才加 1。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("lfu-decay-time")]),_._v("， 控制访问次数衰减。LFU 策略会计算当前时间和数据最近一次访问时间的差值，并把这个差值换算成以分钟为单位。然后，LFU 策略再把这个差值除以 lfu_decay_time 值，所得的结果就是数据 counter 要衰减的值。")])]),_._v(" "),e("li",[e("p",[e("code",[_._v("lfu-log-factor")]),_._v("设置越大，递增概率越低，lfu-decay-time设置越大，衰减速度会越慢。")]),_._v(" "),e("p",[_._v("我们在应用 LFU 策略时，一般可以将 lfu_log_factor 取值为 10。 如果业务应用中有短时高频访问的数据的话，建议把 lfu_decay_time 值设置为 1。可以快速衰减访问次数。")])])]),_._v(" "),e("blockquote",[e("p",[_._v("volatile-lfu 策略是 Redis 4.0 后新增。")])])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("allkeys-lru")])]),_._v(" "),e("p",[_._v("使用 LRU 算法在所有数据中进行筛选。具体LFU算法跟上述 volatile-lru 中介绍的一致，只是筛选的数据范围是全部缓存，这里就不在重复。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("allkeys-random")])]),_._v(" "),e("p",[_._v("从所有键值对中随机选择并删除数据。volatile-random 跟 allkeys-random算法一样，随机删除就无法解决缓存污染问题。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("allkeys-lfu")])]),_._v(" "),e("p",[_._v("使用 LFU 算法在所有数据中进行筛选。具体LFU算法跟上述 volatile-lfu 中介绍的一致，只是筛选的数据范围是全部缓存，这里就不在重复。")]),_._v(" "),e("p",[_._v("allkeys-lfu 策略是 Redis 4.0 后新增。")])])]),_._v(" "),e("h2",{attrs:{id:"_6-数据库和缓存一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-数据库和缓存一致性"}},[_._v("#")]),_._v(" 6. 数据库和缓存一致性")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("问题来源")])])]),_._v(" "),e("p",[_._v("使用redis做一个缓冲操作，让请求先访问到redis，而不是直接访问MySQL等数据库：")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627204654535.png",alt:"image-20220627204654535"}})]),_._v(" "),e("p",[_._v("读取缓存步骤一般没有什么问题，但是一旦涉及到数据更新：数据库和缓存更新，就容易出现缓存(Redis)和数据库（MySQL）间的数据一致性问题。")]),_._v(" "),e("p",[e("strong",[_._v("不管是先写MySQL数据库，再删除Redis缓存；还是先删除缓存，再写库，都有可能出现数据不一致的情况")]),_._v("。举一个例子：")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("如果删除了缓存Redis，还没有来得及写库MySQL，另一个线程就来读取，发现缓存为空，则去数据库中读取数据写入缓存，此时缓存中为脏数据。")])]),_._v(" "),e("li",[e("p",[_._v("如果先写了库，在删除缓存前，写库的线程宕机了，没有删除掉缓存，则也会出现数据不一致情况。")])])]),_._v(" "),e("p",[_._v("因为写和读是并发的，没法保证顺序,就会出现缓存和数据库的数据不一致的问题。")]),_._v(" "),e("h3",{attrs:{id:"_6-1-四种相关模式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-四种相关模式"}},[_._v("#")]),_._v(" 6.1 四种相关模式")]),_._v(" "),e("blockquote",[e("p",[_._v("更新缓存的的Design Pattern有四种：Cache aside, Read through, Write through, Write behind caching; 我强烈建议你看看这篇，左耳朵耗子的文章："),e("a",{attrs:{href:"https://coolshell.cn/articles/17416.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("缓存更新的套路"),e("OutboundLink")],1)])]),_._v(" "),e("p",[e("strong",[_._v("节选最最常用的Cache Aside Pattern, 总结来说就是")])]),_._v(" "),e("ul",[e("li",[e("p",[e("strong",[_._v("读的时候")]),_._v("，先读缓存，缓存没有的话，就读数据库，然后取出数据后放入缓存，同时返回响应。")])]),_._v(" "),e("li",[e("p",[e("strong",[_._v("更新的时候")]),_._v("，先更新数据库，"),e("strong",[_._v("然后再删除缓存")]),_._v("。")]),_._v(" "),e("blockquote",[e("p",[_._v("注意！！！这里"),e("strong",[_._v("是删除缓存！是删除缓存！是删除缓存！")]),_._v("，我们项目中大部分是更新立马写入数据")])])])]),_._v(" "),e("p",[_._v("其具体逻辑如下：")]),_._v(" "),e("ul",[e("li",[e("strong",[_._v("失效")]),_._v("：应用程序先从cache取数据，没有得到，则从数据库中取数据，成功后，放到缓存中。")]),_._v(" "),e("li",[e("strong",[_._v("命中")]),_._v("：应用程序从cache中取数据，取到后返回。")]),_._v(" "),e("li",[e("strong",[_._v("更新")]),_._v("：先把数据存到数据库中，成功后，再让缓存失效。")])]),_._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627205349486.png",alt:"image-20220627205349486"}})]),_._v(" "),e("p",[_._v("注意，我们的更新是先更新数据库，成功后，让缓存失效。那么，这种方式是否可以没有文章前面提到过的那个问题呢？我们可以脑补一下。")]),_._v(" "),e("p",[_._v("一个是查询操作，一个是更新操作的并发，首先，没有了删除cache数据的操作了，而是先更新了数据库中的数据，此时，缓存依然有效，所以，并发的查询操作拿的是没有更新的数据，但是，更新操作马上让缓存的失效了，后续的查询操作再把数据从数据库中拉出来。而"),e("strong",[_._v("不会像文章开头的那个逻辑产生的问题，后续的查询操作一直都在取老的数据")]),_._v("。")]),_._v(" "),e("p",[_._v("这是标准的design pattern，包括Facebook的论文《"),e("a",{attrs:{href:"https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf",target:"_blank",rel:"noopener noreferrer"}},[_._v("Scaling Memcache at Facebook  (opens new window)"),e("OutboundLink")],1),_._v("》也使用了这个策略。为什么不是写完数据库后更新缓存？你可以看一下Quora上的这个问答《"),e("a",{attrs:{href:"https://www.quora.com/Why-does-Facebook-use-delete-to-remove-the-key-value-pair-in-Memcached-instead-of-updating-the-Memcached-during-write-request-to-the-backend",target:"_blank",rel:"noopener noreferrer"}},[_._v("Why does Facebook use delete to remove the key-value pair in Memcached instead of updating the Memcached during write request to the backend?  (opens new window)"),e("OutboundLink")],1),_._v("》，主要是怕两个并发的写操作导致脏数据。")]),_._v(" "),e("p",[_._v("那么，是不是Cache Aside这个就不会有并发问题了？不是的，比如，一个是读操作，但是没有命中缓存，然后就到数据库中取数据，此时来了一个写操作，写完数据库后，让缓存失效，然后，之前的那个读操作再把老的数据放进去，所以，会造成脏数据。")]),_._v(" "),e("p",[_._v("但，这个case理论上会出现，不过，实际上出现的概率可能非常低，因为这个条件需要发生在读缓存时缓存失效，而且并发着有一个写操作。而实际上数据库的写操作会比读操作慢得多，而且还要锁表，而读操作必需在写操作前进入数据库操作，而又要晚于写操作更新缓存，所有的这些条件都具备的概率基本并不大。")]),_._v(" "),e("p",[_._v("所以，这也就是Quora上的那个答案里说的，要么通过2PC或是Paxos协议保证一致性，要么就是拼命的降低并发时脏数据的概率，"),e("strong",[_._v("而Facebook使用了这个降低概率的玩法，因为2PC太慢，而Paxos太复杂")]),_._v("。当然，最好还是为缓存设置上过期时间。")]),_._v(" "),e("h3",{attrs:{id:"_6-2-方案-队列-重试机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-方案-队列-重试机制"}},[_._v("#")]),_._v(" 6.2 方案：队列 + 重试机制")]),_._v(" "),e("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627210026227.png",alt:"image-20220627210026227"}}),_._v(" "),e("p",[_._v("流程如下所示")]),_._v(" "),e("ul",[e("li",[_._v("更新数据库数据；")]),_._v(" "),e("li",[_._v("缓存因为种种问题删除失败")]),_._v(" "),e("li",[_._v("将需要删除的key发送至消息队列")]),_._v(" "),e("li",[_._v("自己消费消息，获得需要删除的key")]),_._v(" "),e("li",[_._v("继续重试删除操作，直到成功")])]),_._v(" "),e("p",[_._v("然而，该方案有一个缺点，对业务线代码造成大量的侵入。于是有了方案二，在方案二中，启动一个订阅程序去订阅数据库的binlog，获得需要操作的数据。在应用程序中，另起一段程序，获得这个订阅程序传来的信息，进行删除缓存操作。")]),_._v(" "),e("h3",{attrs:{id:"_6-3-方案-异步更新缓存-基于订阅binlog的同步机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-方案-异步更新缓存-基于订阅binlog的同步机制"}},[_._v("#")]),_._v(" 6.3 方案：异步更新缓存(基于订阅binlog的同步机制)")]),_._v(" "),e("p",[e("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627210130898.png",alt:"image-20220627210130898"}})]),_._v(" "),e("ol",[e("li",[e("strong",[_._v("技术整体思路")]),_._v("：")])]),_._v(" "),e("p",[_._v("MySQL binlog增量订阅消费+消息队列+增量数据更新到redis")]),_._v(" "),e("p",[_._v("1）读Redis：热数据基本都在Redis")]),_._v(" "),e("p",[_._v("2）写MySQL: 增删改都是操作MySQL")]),_._v(" "),e("p",[_._v("3）更新Redis数据：MySQ的数据操作binlog，来更新到Redis")]),_._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[_._v("Redis更新")])])]),_._v(" "),e("p",[_._v("1）"),e("strong",[_._v("数据操作")]),_._v("主要分为两大块：")]),_._v(" "),e("ul",[e("li",[_._v("一个是全量(将全部数据一次写入到redis)")]),_._v(" "),e("li",[_._v("一个是增量（实时更新）")])]),_._v(" "),e("p",[_._v("这里说的是增量,指的是mysql的update、insert、delate变更数据。")]),_._v(" "),e("p",[_._v("2）"),e("strong",[_._v("读取binlog后分析 ，利用消息队列,推送更新各台的redis缓存数据")]),_._v("。")]),_._v(" "),e("p",[_._v("这样一旦MySQL中产生了新的写入、更新、删除等操作，就可以把binlog相关的消息推送至Redis，Redis再根据binlog中的记录，对Redis进行更新。")]),_._v(" "),e("p",[_._v("其实这种机制，很类似MySQL的主从备份机制，因为MySQL的主备也是通过binlog来实现的数据一致性。")]),_._v(" "),e("p",[_._v("这里可以结合使用canal(阿里的一款开源框架)，通过该框架可以对MySQL的binlog进行订阅，而canal正是模仿了mysql的slave数据库的备份请求，使得Redis的数据更新达到了相同的效果。")]),_._v(" "),e("p",[_._v("当然，这里的消息推送工具你也可以采用别的第三方：kafka、rabbitMQ等来实现推送更新Redis。")]),_._v(" "),e("h2",{attrs:{id:"参考文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[_._v("#")]),_._v(" 参考文章")]),_._v(" "),e("p",[e("a",{attrs:{href:"https://pdai.tech/md/db/nosql-redis/db-redis-x-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[_._v("Redis进阶 - 缓存问题：一致性, 穿击, 穿透, 雪崩, 污染等")]),e("OutboundLink")],1)])])}),[],!1,null,null,null);v.default=l.exports}}]);