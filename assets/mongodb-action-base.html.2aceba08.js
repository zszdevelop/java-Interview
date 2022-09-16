const e=JSON.parse('{"key":"v-2dac2abe","path":"/db/mongodb/mongodb-action-base.html","title":"spring-data-mongodb\u6587\u6863\u57FA\u7840\u64CD\u4F5C","lang":"zh-CN","frontmatter":{"summary":"spring-data-mongodb\u6587\u6863\u57FA\u7840\u64CD\u4F5C 1. Spring Data Mongodb 1.1 \u7B80\u4ECB Spring Data Mongodb\u662FSpring\u63D0\u4F9B\u7684\u4E00\u79CD\u4EE5Spring Data\u98CE\u683C\u6765\u64CD\u4F5C\u6570\u636E\u5B58\u50A8\u7684\u65B9\u5F0F\uFF0C\u5B83\u53EF\u4EE5\u907F\u514D\u7F16\u5199\u5927\u91CF\u7684\u6837\u677F\u4EE3\u7801\u3002 1.2 \u5E38\u7528\u6CE8\u89E3 @Document:\u6807\u793A\u6620\u5C04\u5230Mongodb\u6587\u6863\u4E0A\u7684\u9886\u57DF\u5BF9\u8C61; @Id:\u6807\u793A\u67D0\u4E2A\u57DF\u4E3AI","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mongodb/mongodb-action-base.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"spring-data-mongodb\u6587\u6863\u57FA\u7840\u64CD\u4F5C"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Spring Data Mongodb","slug":"_1-spring-data-mongodb","link":"#_1-spring-data-mongodb","children":[{"level":3,"title":"1.1 \u7B80\u4ECB","slug":"_1-1-\u7B80\u4ECB","link":"#_1-1-\u7B80\u4ECB","children":[]},{"level":3,"title":"1.2 \u5E38\u7528\u6CE8\u89E3","slug":"_1-2-\u5E38\u7528\u6CE8\u89E3","link":"#_1-2-\u5E38\u7528\u6CE8\u89E3","children":[]},{"level":3,"title":"1.3 Spring Data \u65B9\u5F0F\u7684\u6570\u636E\u64CD\u4F5C","slug":"_1-3-spring-data-\u65B9\u5F0F\u7684\u6570\u636E\u64CD\u4F5C","link":"#_1-3-spring-data-\u65B9\u5F0F\u7684\u6570\u636E\u64CD\u4F5C","children":[]}]},{"level":2,"title":"2. \u6574\u5408Mongodb\u5B9E\u73B0\u6587\u6863\u64CD\u4F5C","slug":"_2-\u6574\u5408mongodb\u5B9E\u73B0\u6587\u6863\u64CD\u4F5C","link":"#_2-\u6574\u5408mongodb\u5B9E\u73B0\u6587\u6863\u64CD\u4F5C","children":[{"level":3,"title":"2.1 \u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","slug":"_2-1-\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","link":"#_2-1-\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56","children":[]},{"level":3,"title":"2.2 \u4FEE\u6539SpringBoot\u914D\u7F6E\u6587\u4EF6","slug":"_2-2-\u4FEE\u6539springboot\u914D\u7F6E\u6587\u4EF6","link":"#_2-2-\u4FEE\u6539springboot\u914D\u7F6E\u6587\u4EF6","children":[]},{"level":3,"title":"2.3 \u6DFB\u52A0\u4F1A\u5458\u6D4F\u89C8\u8BB0\u5F55\u6587\u6863\u5BF9\u8C61MemberReadHistory","slug":"_2-3-\u6DFB\u52A0\u4F1A\u5458\u6D4F\u89C8\u8BB0\u5F55\u6587\u6863\u5BF9\u8C61memberreadhistory","link":"#_2-3-\u6DFB\u52A0\u4F1A\u5458\u6D4F\u89C8\u8BB0\u5F55\u6587\u6863\u5BF9\u8C61memberreadhistory","children":[]},{"level":3,"title":"2.4 \u6DFB\u52A0MemberReadHistoryRepository\u63A5\u53E3\u7528\u4E8E\u64CD\u4F5CMongodb","slug":"_2-4-\u6DFB\u52A0memberreadhistoryrepository\u63A5\u53E3\u7528\u4E8E\u64CD\u4F5Cmongodb","link":"#_2-4-\u6DFB\u52A0memberreadhistoryrepository\u63A5\u53E3\u7528\u4E8E\u64CD\u4F5Cmongodb","children":[]},{"level":3,"title":"2.5 \u6DFB\u52A0MemberReadHistoryService\u63A5\u53E3","slug":"_2-5-\u6DFB\u52A0memberreadhistoryservice\u63A5\u53E3","link":"#_2-5-\u6DFB\u52A0memberreadhistoryservice\u63A5\u53E3","children":[]},{"level":3,"title":"2.6 \u6DFB\u52A0MemberReadHistoryService\u63A5\u53E3\u5B9E\u73B0\u7C7BMemberReadHistoryServiceImpl","slug":"_2-6-\u6DFB\u52A0memberreadhistoryservice\u63A5\u53E3\u5B9E\u73B0\u7C7Bmemberreadhistoryserviceimpl","link":"#_2-6-\u6DFB\u52A0memberreadhistoryservice\u63A5\u53E3\u5B9E\u73B0\u7C7Bmemberreadhistoryserviceimpl","children":[]},{"level":3,"title":"2.7 \u6DFB\u52A0MemberReadHistoryController\u5B9A\u4E49\u63A5\u53E3","slug":"_2-7-\u6DFB\u52A0memberreadhistorycontroller\u5B9A\u4E49\u63A5\u53E3","link":"#_2-7-\u6DFB\u52A0memberreadhistorycontroller\u5B9A\u4E49\u63A5\u53E3","children":[]}]},{"level":2,"title":"3 \u63A5\u53E3\u6D4B\u8BD5","slug":"_3-\u63A5\u53E3\u6D4B\u8BD5","link":"#_3-\u63A5\u53E3\u6D4B\u8BD5","children":[{"level":3,"title":"3.1 \u6DFB\u52A0\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55\u5230mongodb","slug":"_3-1-\u6DFB\u52A0\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55\u5230mongodb","link":"#_3-1-\u6DFB\u52A0\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55\u5230mongodb","children":[]},{"level":3,"title":"3.2 \u67E5\u8BE2Mongodb\u4E2D\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","slug":"_3-2-\u67E5\u8BE2mongodb\u4E2D\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","link":"#_3-2-\u67E5\u8BE2mongodb\u4E2D\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","children":[]},{"level":3,"title":"3.3 \u5220\u9664\u6307\u5B9Aid\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","slug":"_3-3-\u5220\u9664\u6307\u5B9Aid\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","link":"#_3-3-\u5220\u9664\u6307\u5B9Aid\u7684\u5546\u54C1\u6D4F\u89C8\u8BB0\u5F55","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.48,"words":1045},"filePathRelative":"db/mongodb/mongodb-action-base.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
