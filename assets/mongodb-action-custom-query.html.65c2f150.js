const e=JSON.parse('{"key":"v-762571e6","path":"/db/mongodb/mongodb-action-custom-query.html","title":"spring-data-mongodb\u7684\u81EA\u5B9A\u4E49Query\u67E5\u8BE2","lang":"zh-CN","frontmatter":{"summary":"spring-data-mongodb\u7684\u81EA\u5B9A\u4E49Query\u67E5\u8BE2 1. \u80CC\u666F \u6211\u4EECspring-data-mongodb \u9ED8\u8BA4\u7684 MongoRepository\u63A5\u53E3\u53EA\u80FD\u5B9E\u73B0\u4E00\u4E9B\u7B80\u5355\u7684\u56FA\u5B9A\u67E5\u8BE2\u3002\u5982\u679C\u9047\u5230\u590D\u6742\u7684\u60C5\u51B5\u5B8C\u5168\u5E94\u4ED8\u4E0D\u8FC7\u6765\u3002 1.1 \u573A\u666F\u9700\u6C42 \u4F8B\u5982\uFF1A\u6211\u4EEC\u8981\u67E5\u8BE2\u7528\u6237\u7684\u9700\u6C42 1. \u9ED8\u8BA4\u67E5\u8BE2\u6240\u6709\u7528\u6237 2. \u53EF\u4EE5\u6839\u636E\u7528\u6237\u540D\u6A21\u7CCA\u67E5\u8BE2 3. \u6839\u636E\u90E8\u95E8\u3001\u7528\u6237\u72B6\u6001\u67E5\u8BE2 \u8FD9\u51E0\u79CD","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mongodb/mongodb-action-custom-query.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"spring-data-mongodb\u7684\u81EA\u5B9A\u4E49Query\u67E5\u8BE2"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u80CC\u666F","slug":"_1-\u80CC\u666F","link":"#_1-\u80CC\u666F","children":[{"level":3,"title":"1.1 \u573A\u666F\u9700\u6C42","slug":"_1-1-\u573A\u666F\u9700\u6C42","link":"#_1-1-\u573A\u666F\u9700\u6C42","children":[]}]},{"level":2,"title":"2. \u6570\u636E\u51C6\u5907","slug":"_2-\u6570\u636E\u51C6\u5907","link":"#_2-\u6570\u636E\u51C6\u5907","children":[{"level":3,"title":"2.1 \u6784\u5EFA\u7528\u6237domain","slug":"_2-1-\u6784\u5EFA\u7528\u6237domain","link":"#_2-1-\u6784\u5EFA\u7528\u6237domain","children":[]},{"level":3,"title":"2.2 \u5B9E\u73B0MongoRepository","slug":"_2-2-\u5B9E\u73B0mongorepository","link":"#_2-2-\u5B9E\u73B0mongorepository","children":[]},{"level":3,"title":"2.3 \u521D\u59CB\u5316\u6570\u636E\u4E0Econtroller","slug":"_2-3-\u521D\u59CB\u5316\u6570\u636E\u4E0Econtroller","link":"#_2-3-\u521D\u59CB\u5316\u6570\u636E\u4E0Econtroller","children":[]}]},{"level":2,"title":"3. \u5B9E\u73B0\u81EA\u5B9A\u4E49\u67E5\u8BE2\uFF08\u590D\u6742\u573A\u666F\uFF09","slug":"_3-\u5B9E\u73B0\u81EA\u5B9A\u4E49\u67E5\u8BE2-\u590D\u6742\u573A\u666F","link":"#_3-\u5B9E\u73B0\u81EA\u5B9A\u4E49\u67E5\u8BE2-\u590D\u6742\u573A\u666F","children":[{"level":3,"title":"3.1 \u521B\u5EFA\u63A5\u53E3","slug":"_3-1-\u521B\u5EFA\u63A5\u53E3","link":"#_3-1-\u521B\u5EFA\u63A5\u53E3","children":[]},{"level":3,"title":"3.2 \u521B\u5EFA\u5B9E\u73B0\u7C7B \uFF08\u547D\u540D\u4E0E\u63A5\u53E3\u540D\u4E00\u81F4\uFF0C\u4E14\u4EE5Impl\u7ED3\u5C3E\uFF09","slug":"_3-2-\u521B\u5EFA\u5B9E\u73B0\u7C7B-\u547D\u540D\u4E0E\u63A5\u53E3\u540D\u4E00\u81F4-\u4E14\u4EE5impl\u7ED3\u5C3E","link":"#_3-2-\u521B\u5EFA\u5B9E\u73B0\u7C7B-\u547D\u540D\u4E0E\u63A5\u53E3\u540D\u4E00\u81F4-\u4E14\u4EE5impl\u7ED3\u5C3E","children":[]}]},{"level":2,"title":"4. \u81EA\u5B9A\u4E49Query \u57FA\u672C\u7528\u6CD5","slug":"_4-\u81EA\u5B9A\u4E49query-\u57FA\u672C\u7528\u6CD5","link":"#_4-\u81EA\u5B9A\u4E49query-\u57FA\u672C\u7528\u6CD5","children":[{"level":3,"title":"4.1. \u6839\u636E\u5B57\u6BB5\u8FDB\u884C\u5168\u5339\u914D\u67E5\u8BE2","slug":"_4-1-\u6839\u636E\u5B57\u6BB5\u8FDB\u884C\u5168\u5339\u914D\u67E5\u8BE2","link":"#_4-1-\u6839\u636E\u5B57\u6BB5\u8FDB\u884C\u5168\u5339\u914D\u67E5\u8BE2","children":[]},{"level":3,"title":"4.2 and\u591A\u6761\u4EF6\u67E5\u8BE2","slug":"_4-2-and\u591A\u6761\u4EF6\u67E5\u8BE2","link":"#_4-2-and\u591A\u6761\u4EF6\u67E5\u8BE2","children":[]},{"level":3,"title":"4.3 or\u6216\u67E5\u8BE2","slug":"_4-3-or\u6216\u67E5\u8BE2","link":"#_4-3-or\u6216\u67E5\u8BE2","children":[]},{"level":3,"title":"4.4 in\u67E5\u8BE2","slug":"_4-4-in\u67E5\u8BE2","link":"#_4-4-in\u67E5\u8BE2","children":[]},{"level":3,"title":"4.5 \u6570\u503C\u6BD4\u8F83","slug":"_4-5-\u6570\u503C\u6BD4\u8F83","link":"#_4-5-\u6570\u503C\u6BD4\u8F83","children":[]},{"level":3,"title":"4.6 \u6B63\u5219\u67E5\u8BE2","slug":"_4-6-\u6B63\u5219\u67E5\u8BE2","link":"#_4-6-\u6B63\u5219\u67E5\u8BE2","children":[]},{"level":3,"title":"4.7 \u67E5\u8BE2\u603B\u6570","slug":"_4-7-\u67E5\u8BE2\u603B\u6570","link":"#_4-7-\u67E5\u8BE2\u603B\u6570","children":[]},{"level":3,"title":"4.8 \u5206\u7EC4\u67E5\u8BE2","slug":"_4-8-\u5206\u7EC4\u67E5\u8BE2","link":"#_4-8-\u5206\u7EC4\u67E5\u8BE2","children":[]},{"level":3,"title":"4.9 \u6392\u5E8F","slug":"_4-9-\u6392\u5E8F","link":"#_4-9-\u6392\u5E8F","children":[]},{"level":3,"title":"4.10 \u5206\u9875","slug":"_4-10-\u5206\u9875","link":"#_4-10-\u5206\u9875","children":[]}]},{"level":2,"title":"5. \u7EFC\u5408\u5206\u9875\u67E5\u8BE2","slug":"_5-\u7EFC\u5408\u5206\u9875\u67E5\u8BE2","link":"#_5-\u7EFC\u5408\u5206\u9875\u67E5\u8BE2","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":9.72,"words":2917},"filePathRelative":"db/mongodb/mongodb-action-custom-query.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
