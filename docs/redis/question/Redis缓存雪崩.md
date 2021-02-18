# Redis缓存雪崩

## 1. 简介

缓存同一时间大面积的失效，所以，后面的请求都会落到数据库上，造成**数据库短时间内承受大量请求而崩掉**

## 2. 解决办法

- 事前：尽量保证整个 redis 集群的高可用性，发现机器宕机尽快补上。选择合适的内存淘汰策略
- 事中：本地chcache缓存 + hystrix限流&降级，避免Mysql崩掉
- 事后：利用 redis 持久化机制保存的数据尽快恢复缓存

![image-20191008225446152](https://gitee.com/zszdevelop/blogimage/raw/master/img/image-20191008225446152.png)