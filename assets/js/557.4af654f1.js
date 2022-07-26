(window.webpackJsonp=window.webpackJsonp||[]).push([[557],{932:function(t,_,v){"use strict";v.r(_);var e=v(26),s=Object(e.a)({},(function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"minio对象存储oss概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#minio对象存储oss概述"}},[t._v("#")]),t._v(" Minio对象存储OSS概述")]),t._v(" "),v("blockquote",[v("p",[t._v("文档来源于"),v("a",{attrs:{href:"https://help.aliyun.com/product/31815.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云对象存储 OSS"),v("OutboundLink")],1),t._v("，"),v("a",{attrs:{href:"https://so.csdn.net/so/search?q=Minio&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minio"),v("OutboundLink")],1),t._v("也是对象存储 OSS，很多概念都是相通的，所以了解下。实际企业应用使用阿里OSS是一个很不错的选择。")])]),t._v(" "),v("h2",{attrs:{id:"_1-对象存储oss"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-对象存储oss"}},[t._v("#")]),t._v(" 1. 对象存储OSS")]),t._v(" "),v("p",[t._v("对象存储服务（Object Storage Service，OSS）是一种海量、安全、低成本、高可靠的云存储服务，适合存放任意类型的文件。容量和处理能力弹性扩展，多种存储类型供选择，全面优化存储成本。")]),t._v(" "),v("p",[t._v("阿里云对象存储OSS（Object Storage Service）是阿里云提供的海量、安全、低成本、高持久的云存储服务。其数据设计持久性不低于99.9999999999%（12个9），服务可用性（或业务连续性）不低于99.995%。")]),t._v(" "),v("h2",{attrs:{id:"_2-基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-基本概念"}},[t._v("#")]),t._v(" 2. 基本概念")]),t._v(" "),v("h3",{attrs:{id:"_2-1-存储空间-bucket"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-存储空间-bucket"}},[t._v("#")]),t._v(" 2.1 存储空间（Bucket）")]),t._v(" "),v("p",[t._v("存储空间是用户用于存储对象（Object）的容器，所有的对象都必须隶属于某个存储空间。存储空间具有各种配置属性，包括地域、访问权限、存储类型等。用户可以根据实际需求，创建不同类型的存储空间来存储不同的数据。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("同一个存储空间的内部是扁平的，没有文件系统的目录等概念，所有的对象都直接隶属于其对应的存储空间")]),t._v("。")]),t._v(" "),v("li",[t._v("每个用户可以拥有多个存储空间。")]),t._v(" "),v("li",[t._v("存储空间的名称在OSS范围内必须是全局唯一的，一旦创建之后无法修改名称。")]),t._v(" "),v("li",[t._v("存储空间内部的对象数目没有限制。")])]),t._v(" "),v("p",[t._v("存储空间的命名规范如下：")]),t._v(" "),v("ul",[v("li",[t._v("只能包括小写字母、数字和短划线（-）。")]),t._v(" "),v("li",[t._v("必须以小写字母或者数字开头和结尾。")]),t._v(" "),v("li",[t._v("长度必须在3~63字符之间。")])]),t._v(" "),v("h3",{attrs:{id:"_2-2-对象-object"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-对象-object"}},[t._v("#")]),t._v(" 2.2 对象（Object）")]),t._v(" "),v("p",[t._v("对象是OSS存储数据的基本单元，也被称为OSS的文件。"),v("strong",[t._v("和传统的文件系统不同，对象没有文件目录层级结构的关系")]),t._v("。"),v("strong",[t._v("对象由元信息（Object Meta），用户数据（Data）和文件名（Key）组成")]),t._v("，并且由存储空间内部唯一的Key来标识。对象元信息是一组键值对，表示了对象的一些属性，比如最后修改时间、大小等信息，同时用户也可以在元信息中存储一些自定义的信息。")]),t._v(" "),v("p",[t._v("对象的生命周期是从上传成功到被删除为止。在整个生命周期内，除通过追加方式上传的Object可以通过继续追加上传写入数据外，其他方式上传的Object内容无法编辑，您可以通过重复上传同名的对象来覆盖之前的对象。")]),t._v(" "),v("p",[t._v("对象的命名规范如下：")]),t._v(" "),v("ul",[v("li",[t._v("使用UTF-8编码。")]),t._v(" "),v("li",[t._v("长度必须在1~1023字符之间。")]),t._v(" "),v("li",[t._v("不能以正斜线（/）或者反斜线（\\）开头。")]),t._v(" "),v("li",[t._v("对象名称需要区分大小写。如无特殊说明，本文档中的对象、文件称谓等同于Object。")])]),t._v(" "),v("h3",{attrs:{id:"_2-3-objectkey"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-objectkey"}},[t._v("#")]),t._v(" 2.3 ObjectKey")]),t._v(" "),v("p",[t._v("在各语言SDK中，ObjectKey、Key以及ObjectName是同一概念，均表示对Object执行相关操作时需要填写的Object名称。例如向某一存储空间上传Object时，ObjectKey表示上传的Object所在存储空间的完整名称，即包含文件后缀在内的完整路径，如填写为abc/efg/123.jpg。")]),t._v(" "),v("h3",{attrs:{id:"_2-4-region-地域"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-region-地域"}},[t._v("#")]),t._v(" 2.4 Region（地域）")]),t._v(" "),v("p",[t._v("Region表示OSS的数据中心所在物理位置。用户可以根据费用、请求来源等选择合适的地域创建Bucket。一般来说，距离用户更近的Region访问速度更快。详情请参见OSS已经开通的Region。")]),t._v(" "),v("p",[t._v("Region是在创建Bucket的时候指定的，一旦指定之后就不允许更改。该Bucket下所有的Object都存储在对应的数据中心，目前不支持Object级别的Region设置。")]),t._v(" "),v("h3",{attrs:{id:"_2-5-endpoint-访问域名"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-endpoint-访问域名"}},[t._v("#")]),t._v(" 2.5 Endpoint（访问域名）")]),t._v(" "),v("p",[t._v("Endpoint表示OSS对外服务的访问域名。OSS以HTTP RESTful API的形式对外提供服务，当访问不同的Region的时候，需要不同的域名。通过内网和外网访问同一个Region所需要的Endpoint也是不同的。例如杭州Region的外网Endpoint是oss-cn-hangzhou.aliyuncs.com，内网Endpoint是oss-cn-hangzhou-internal.aliyuncs.com。具体的内容请参见各个Region对应的Endpoint。")]),t._v(" "),v("h3",{attrs:{id:"_2-6-accesskey-访问密钥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-accesskey-访问密钥"}},[t._v("#")]),t._v(" 2.6 AccessKey（访问密钥）")]),t._v(" "),v("p",[t._v("AccessKey简称AK，指的是访问身份验证中用到的AccessKeyId和AccessKeySecret。OSS通过使用AccessKeyId和AccessKeySecret对称加密的方法来验证某个请求的发送者身份。AccessKeyId用于标识用户；AccessKeySecret是用户用于加密签名字符串和OSS用来验证签名字符串的密钥，必须保密。对于OSS来说，AccessKey的来源有：")]),t._v(" "),v("ul",[v("li",[t._v("Bucket的拥有者申请的AccessKey。")]),t._v(" "),v("li",[t._v("被Bucket的拥有者通过RAM授权给第三方请求者的AccessKey。")]),t._v(" "),v("li",[t._v("被Bucket的拥有者通过STS授权给第三方请求者的AccessKey。")])]),t._v(" "),v("h3",{attrs:{id:"_2-7-强一致性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-强一致性"}},[t._v("#")]),t._v(" 2.7 强一致性")]),t._v(" "),v("p",[t._v("Object操作在OSS上具有原子性，操作要么成功要么失败，不会存在有中间状态的Object。OSS保证用户一旦上传完成之后读到的Object是完整的，OSS不会返回给用户一个部分上传成功的Object。")]),t._v(" "),v("p",[t._v("Object操作在OSS同样具有强一致性，用户一旦收到了一个上传（PUT）成功的响应，该上传的Object就已经立即可读，并且Object的冗余数据已经写成功。不存在一种上传的中间状态，即read-after-write却无法读取到数据。对于删除操作也是一样的，用户删除指定的Object成功之后，该Object立即变为不存在。")]),t._v(" "),v("h3",{attrs:{id:"_2-8-数据冗余机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-数据冗余机制"}},[t._v("#")]),t._v(" 2.8 数据冗余机制")]),t._v(" "),v("p",[t._v("OSS使用基于纠删码、多副本的数据冗余存储机制，将每个对象的不同冗余存储在同一个区域内多个设施的多个设备上，确保硬件失效时的数据持久性和可用性。")]),t._v(" "),v("p",[t._v("OSS Object操作具有强一致性，用户一旦收到了上传或复制成功的响应，则该上传的Object就已经立即可读，且数据已经冗余写入到多个设备中。")]),t._v(" "),v("p",[t._v("OSS会通过计算网络流量包的校验和，验证数据包在客户端和服务端之间传输中是否出错，保证数据完整传输。")]),t._v(" "),v("p",[t._v("OSS的冗余存储机制，可支持两个存储设施并发损坏时，仍维持数据不丢失。")]),t._v(" "),v("p",[t._v("当数据存入OSS后，OSS会检测和修复丢失的冗余，确保数据持久性和可用性。")]),t._v(" "),v("p",[t._v("OSS会周期性地通过校验等方式验证数据的完整性，及时发现因硬件失效等原因造成的数据损坏。当检测到数据有部分损坏或丢失时，OSS会利用冗余的数据，进行重建并修复损坏数据。")]),t._v(" "),v("h2",{attrs:{id:"_3-oss与文件系统的对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-oss与文件系统的对比"}},[t._v("#")]),t._v(" 3. OSS与文件系统的对比")]),t._v(" "),v("h3",{attrs:{id:"_3-1-oss与文件系统的对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-oss与文件系统的对比"}},[t._v("#")]),t._v(" 3.1 OSS与文件系统的对比")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("对比项")]),t._v(" "),v("th",[t._v("OSS")]),t._v(" "),v("th",[t._v("文件系统")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("数据模型")]),t._v(" "),v("td",[t._v("OSS是一个分布式的对象存储服务，提供的是一个Key-Value对形式的对象存储服务。")]),t._v(" "),v("td",[t._v("文件系统是一种典型的树状索引结构。")])]),t._v(" "),v("tr",[v("td",[t._v("数据获取")]),t._v(" "),v("td",[t._v("根据Object的名称（Key）唯一的获取该Object的内容。虽然用户可以使用类似test1/test.jpg的名字，但是这并不表示用户的Object是保存在test1目录下面的。对于OSS来说，test1/test.jpg仅仅只是一个字符串，与example.jpg并没有本质的区别。因此不同名称的Object之间的访问消耗的资源是类似的。")]),t._v(" "),v("td",[t._v("一个名为test1/test.jpg的文件，访问过程需要先访问到test1这个目录，然后再在该目录下查找名为test.jpg的文件。")])]),t._v(" "),v("tr",[v("td",[t._v("优势")]),t._v(" "),v("td",[t._v("支持海量的用户并发访问。")]),t._v(" "),v("td",[t._v("支持文件的修改，比如修改指定偏移位置的内容、截断文件尾部等。也支持文件夹的操作，比如重命名目录、删除目录、移动目录等非常容易。")])]),t._v(" "),v("tr",[v("td",[t._v("劣势")]),t._v(" "),v("td",[t._v("OSS保存的Object不支持修改（追加写Object需要调用特定的接口，生成的Object也和正常上传的Object类型上有差别）。用户哪怕是仅仅需要修改一个字节也需要重新上传整个Object。OSS可以通过一些操作来模拟类似文件夹的功能，但是代价非常昂贵。比如重命名目录，希望将test1目录重命名成test2，那么OSS的实际操作是将所有以test1/开头的Object都重新复制成以test2/开头的Object，这是一个非常消耗资源的操作。因此在使用OSS的时候要尽量避免类似的操作。")]),t._v(" "),v("td",[t._v("受限于单个设备的性能。访问越深的目录消耗的资源也越大，操作拥有很多文件的目录也会非常慢。")])])])]),t._v(" "),v("p",[t._v("因此，将OSS映射为文件系统是非常低效的，也是不建议的做法。如果一定要挂载成文件系统的话，建议尽量只做写新文件、删除文件、读取文件这几种操作。使用OSS应该充分发挥其优点，即海量数据处理能力，优先用来存储海量的非结构化数据，比如图片、视频、文档等。")]),t._v(" "),v("h3",{attrs:{id:"_3-2-oss与文件系统的概念对比"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-oss与文件系统的概念对比"}},[t._v("#")]),t._v(" 3.2 OSS与文件系统的概念对比：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("对象存储 OSS")]),t._v(" "),v("th",[t._v("文件系统")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("文件")])]),t._v(" "),v("tr",[v("td",[t._v("Bucket")]),t._v(" "),v("td",[t._v("主目录")])]),t._v(" "),v("tr",[v("td",[t._v("Region")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("Endpoint")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("AccessKey")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("无")]),t._v(" "),v("td",[t._v("多级目录")])]),t._v(" "),v("tr",[v("td",[t._v("GetService")]),t._v(" "),v("td",[t._v("获取主目录列表")])]),t._v(" "),v("tr",[v("td",[t._v("GetBucket")]),t._v(" "),v("td",[t._v("获取文件列表")])]),t._v(" "),v("tr",[v("td",[t._v("PutObject")]),t._v(" "),v("td",[t._v("写文件")])]),t._v(" "),v("tr",[v("td",[t._v("AppendObject")]),t._v(" "),v("td",[t._v("追加写文件")])]),t._v(" "),v("tr",[v("td",[t._v("GetObject")]),t._v(" "),v("td",[t._v("读文件")])]),t._v(" "),v("tr",[v("td",[t._v("DeleteObject")]),t._v(" "),v("td",[t._v("删除文件")])]),t._v(" "),v("tr",[v("td",[t._v("无")]),t._v(" "),v("td",[t._v("修改文件内容")])]),t._v(" "),v("tr",[v("td",[t._v("CopyObject")]),t._v(" "),v("td",[t._v("（目标文件和源文件相同） 修改文件属性")])]),t._v(" "),v("tr",[v("td",[t._v("CopyObject")]),t._v(" "),v("td",[t._v("（目标文件和源文件不同） 复制文件")])]),t._v(" "),v("tr",[v("td",[t._v("无")]),t._v(" "),v("td",[t._v("重命名文件")])])])]),t._v(" "),v("h3",{attrs:{id:"_3-3-oss术语表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-oss术语表"}},[t._v("#")]),t._v(" 3.3 OSS术语表")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("英文")]),t._v(" "),v("th",[t._v("中文")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Bucket")]),t._v(" "),v("td",[t._v("存储空间")])]),t._v(" "),v("tr",[v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("对象或者文件")])]),t._v(" "),v("tr",[v("td",[t._v("Endpoint")]),t._v(" "),v("td",[t._v("OSS 访问域名")])]),t._v(" "),v("tr",[v("td",[t._v("Region")]),t._v(" "),v("td",[t._v("地域或者数据中心")])]),t._v(" "),v("tr",[v("td",[t._v("AccessKey")]),t._v(" "),v("td",[t._v("AccessKeyId和AccessKeySecret的统称，访问密钥")])]),t._v(" "),v("tr",[v("td",[t._v("Put Object")]),t._v(" "),v("td",[t._v("简单上传")])]),t._v(" "),v("tr",[v("td",[t._v("Post Object")]),t._v(" "),v("td",[t._v("表单上传")])]),t._v(" "),v("tr",[v("td",[t._v("Multipart Upload")]),t._v(" "),v("td",[t._v("分片上传")])]),t._v(" "),v("tr",[v("td",[t._v("Append Object")]),t._v(" "),v("td",[t._v("追加上传")])]),t._v(" "),v("tr",[v("td",[t._v("Get Object")]),t._v(" "),v("td",[t._v("简单下载")])]),t._v(" "),v("tr",[v("td",[t._v("Callback")]),t._v(" "),v("td",[t._v("回调")])]),t._v(" "),v("tr",[v("td",[t._v("Object Meta")]),t._v(" "),v("td",[t._v("文件元信息。用来描述文件信息，例如长度，类型等")])]),t._v(" "),v("tr",[v("td",[t._v("Data")]),t._v(" "),v("td",[t._v("文件数据")])]),t._v(" "),v("tr",[v("td",[t._v("Key")]),t._v(" "),v("td",[t._v("文件名")])]),t._v(" "),v("tr",[v("td",[t._v("ACL")]),t._v(" "),v("td",[t._v("(Access Control List) 存储空间或者文件的权限")])])])]),t._v(" "),v("h2",{attrs:{id:"_4-应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-应用场景"}},[t._v("#")]),t._v(" 4. 应用场景")]),t._v(" "),v("h3",{attrs:{id:"_4-1-图片和音视频等应用的海量存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-图片和音视频等应用的海量存储"}},[t._v("#")]),t._v(" 4.1 图片和音视频等应用的海量存储")]),t._v(" "),v("p",[t._v("OSS可用于图片、音视频、日志等海量文件的存储。各种终端设备、Web网站程序、移动应用可以直接向OSS写入或读取数据。OSS支持流式写入和文件写入两种方式。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722223504937.png",alt:"image-20220722223504937"}})]),t._v(" "),v("h3",{attrs:{id:"_4-2-网页或者移动应用的静态和动态资源分离"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-网页或者移动应用的静态和动态资源分离"}},[t._v("#")]),t._v(" 4.2 网页或者移动应用的静态和动态资源分离")]),t._v(" "),v("p",[t._v("利用海量互联网带宽，OSS可以实现海量数据的互联网并发下载。OSS提供原生的传输加速功能，支持上传加速、下载加速，提升跨国、跨洋数据上传、下载的体验。同时，OSS也可以结合CDN产品，提供静态内容存储、分发到边缘节点的解决方案，利用CDN边缘节点缓存的数据，提升同一个文件被同一地区客户大量重复并发下载的体验。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722223627660.png",alt:"image-20220722223627660"}})]),t._v(" "),v("h3",{attrs:{id:"_4-3-云端数据处理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-云端数据处理"}},[t._v("#")]),t._v(" 4.3 云端数据处理")]),t._v(" "),v("p",[t._v("上传文件到OSS后，可以配合媒体处理服务和图片处理服务进行云端的数据处理。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220722223702103.png",alt:"image-20220722223702103"}})]),t._v(" "),v("h2",{attrs:{id:"参考文章"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[t._v("#")]),t._v(" 参考文章")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://yunyanchengyu.blog.csdn.net/article/details/120835522?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minio入门系列【7】对象存储 OSS概述"),v("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=s.exports}}]);