(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{604:function(t,a,r){"use strict";r.r(a);var e=r(26),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"索引常见的数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#索引常见的数据结构"}},[t._v("#")]),t._v(" 索引常见的数据结构")]),t._v(" "),r("h2",{attrs:{id:"_1-顺序查找"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-顺序查找"}},[t._v("#")]),t._v(" 1. 顺序查找")]),t._v(" "),r("p",[r("strong",[t._v("算法复杂度：O(n)")])]),t._v(" "),r("p",[t._v("最基本的查询算法，复杂度O(n),大数据量时此算法效率非常糟糕")]),t._v(" "),r("h2",{attrs:{id:"_2-二叉树查找-binary-tree-search"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-二叉树查找-binary-tree-search"}},[t._v("#")]),t._v(" 2. 二叉树查找(binary tree search)")]),t._v(" "),r("p",[r("strong",[t._v("算法复杂度：O(log2n)")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904230943376.png",alt:"image-20190904230943376"}})]),t._v(" "),r("p",[t._v("左边是数据表，一共有两列七条记录，最左边的是数据记录的物理地址。（逻辑相邻的记录在磁盘上也并不一定是物理相邻）。")]),t._v(" "),r("p",[t._v("为了加快col2 的查找，可以维护一个右边所示的二叉查找树，"),r("strong",[t._v("每个节点分别包含索引键值和一个指向对应数据记录物理地址的指针")]),t._v("，这样就可以运用二叉查找在O(log2n)的复杂度内获取响应的数据")]),t._v(" "),r("h2",{attrs:{id:"_3-hash索引"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-hash索引"}},[t._v("#")]),t._v(" 3. hash索引")]),t._v(" "),r("ul",[r("li",[t._v("优点：\n"),r("ul",[r("li",[t._v("查询效率高")])])]),t._v(" "),r("li",[t._v("缺点\n"),r("ul",[r("li",[t._v("无法满足范围查找\n"),r("ul",[r("li",[t._v("仅仅能满足“=”，“in” ,不能使用范围查询")]),t._v(" "),r("li",[t._v("无法被用来避免数据的排序操作")]),t._v(" "),r("li",[t._v("不能利用部分索引键查询")]),t._v(" "),r("li",[t._v("不能避免表扫描")]),t._v(" "),r("li",[t._v("遇到大量Hash值相等的情况后，性能不一定就会比B-Tree索引高")])])])])])]),t._v(" "),r("h2",{attrs:{id:"_4-二叉树、红黑树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-二叉树、红黑树"}},[t._v("#")]),t._v(" 4. 二叉树、红黑树")]),t._v(" "),r("p",[r("strong",[t._v("算法复杂度：O(h)")])]),t._v(" "),r("p",[t._v("这将导致树的高度非常高。（平衡二叉树一个节点只能有左子树和右子树），"),r("strong",[t._v("逻辑上很近的节点（父子）物理上可能很远，无法利用局部性，IO次数多查找慢，效率低")]),t._v("（逻辑上相邻节点没法直接通过顺序指针关联，可能需要迭代回上层节点重复向下遍历查找对应的节点，效率低）")]),t._v(" "),r("h2",{attrs:{id:"_5-b-tree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-b-tree"}},[t._v("#")]),t._v(" 5. B-Tree")]),t._v(" "),r("p",[t._v("结构："),r("strong",[t._v("B-Tree 每个节点都是一个二元数组")]),t._v("，所有的节点都可以存储数据，key为索引key，data为除key 指代的数据。结构如下")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904234252606.png",alt:"image-20190904234252606"}})]),t._v(" "),r("h3",{attrs:{id:"_5-1-检索原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-检索原理"}},[t._v("#")]),t._v(" 5.1 检索原理：")]),t._v(" "),r("p",[t._v("首先从"),r("strong",[t._v("根节点进行二分查找")]),t._v("，如果找到则返回对应节点的data，否则"),r("strong",[t._v("对相应区间的指针指向的节点递归")]),t._v("进行查找，直到找到节点或未找到节点返回null指针。")]),t._v(" "),r("h3",{attrs:{id:"_5-2-b-tree缺点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-b-tree缺点"}},[t._v("#")]),t._v(" 5.2 B-Tree缺点")]),t._v(" "),r("ul",[r("li",[t._v("插入删除新的数据记录会破坏B-Tree的性质，因此在插入删除时，需要对树进行一个分裂、合并、转移等操作以保持B-Tree性质。造成IO操作频繁")]),t._v(" "),r("li",[t._v("区间查找可能需要返回上层节点重复遍历，IO操作繁琐。")])]),t._v(" "),r("h2",{attrs:{id:"_6-b-tree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-b-tree"}},[t._v("#")]),t._v(" 6. B+Tree")]),t._v(" "),r("p",[t._v("B+Tree 是B-Tree的变种")]),t._v(" "),r("h3",{attrs:{id:"_6-1-与b-tree的不同点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-与b-tree的不同点"}},[t._v("#")]),t._v(" 6.1 与B-Tree的不同点")]),t._v(" "),r("ul",[r("li",[t._v("非叶子节点不存储data，只存储索引key；")]),t._v(" "),r("li",[t._v("只有叶子节点才存储data")])]),t._v(" "),r("h3",{attrs:{id:"_6-2-b-tree数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-b-tree数据结构"}},[t._v("#")]),t._v(" 6.2 B+Tree数据结构")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190904235621742.png",alt:"image-20190904235621742"}})]),t._v(" "),r("h3",{attrs:{id:"_6-3-mysql-中的b-tree"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-mysql-中的b-tree"}},[t._v("#")]),t._v(" 6.3 MySQL 中的B+Tree")]),t._v(" "),r("h4",{attrs:{id:"_6-3-1-概述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-1-概述"}},[t._v("#")]),t._v(" 6.3.1 概述")]),t._v(" "),r("p",[t._v("在经典B+Tree的基础上进行了优化，增加了"),r("strong",[t._v("顺序访问指针")]),t._v("。")]),t._v(" "),r("h4",{attrs:{id:"_6-3-2-详细"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-2-详细"}},[t._v("#")]),t._v(" 6.3.2 详细")]),t._v(" "),r("p",[t._v("在B+Tree的每个叶子节点增加一个指向相邻叶子节点的指针，就形成了"),r("strong",[t._v("带有顺序访问指针的B+Tree")]),t._v("。这样就"),r("strong",[t._v("提高了区间访问性能")]),t._v("：")]),t._v(" "),r("h4",{attrs:{id:"_6-3-3-案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-3-案例"}},[t._v("#")]),t._v(" 6.3.3 案例：")]),t._v(" "),r("p",[t._v("如果要查询key为从18到49的所有数据记录，当找到18后，只需顺着节点和指针顺序遍历就可以一次性访问到所有数据节点，极大提到了区间查询效率("),r("strong",[t._v("无需返回上层父节点重复遍历查找减少IO操作")]),t._v(")。")]),t._v(" "),r("h4",{attrs:{id:"_6-3-4-数据结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-4-数据结构"}},[t._v("#")]),t._v(" 6.3.4 数据结构")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190905000332979.png",alt:"image-20190905000332979"}})]),t._v(" "),r("h3",{attrs:{id:"参考文档"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/486a514b0ded",target:"_blank",rel:"noopener noreferrer"}},[t._v("MYSQL-B+TREE索引原理"),r("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);