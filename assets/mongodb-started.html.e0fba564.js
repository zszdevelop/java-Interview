const e=JSON.parse('{"key":"v-498d91c8","path":"/db/mongodb/mongodb-started.html","title":"MongoDB\u5165\u95E8","lang":"zh-CN","frontmatter":{"summary":"MongoDB\u5165\u95E8 1. \u8FDE\u63A5mongodb \u82E5\u5728\u5B89\u88C5mongo\u7684\u670D\u52A1\u5668\u4E0A\u8BBF\u95EE\u672C\u5730mongo,\u53EF\u76F4\u63A5\u6267\u884C mongo 2. \u6570\u636E\u5E93\u64CD\u4F5C \u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u4F7F\u7528use\u547D\u4EE4\u53BB\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u5F53\u63D2\u5165\u7B2C\u4E00\u6761\u6570\u636E\u65F6\u4F1A\u521B\u5EFA\u6570\u636E\u5E93\uFF0C\u4F8B\u5982\u521B\u5EFA\u4E00\u4E2Atest\u6570\u636E\u5E93\uFF1B; \u5220\u9664\u6570\u636E\u5E93\uFF0C\u4F7F\u7528db\u5BF9\u8C61\u4E2D\u7684dropDatabase()\u65B9\u6CD5\u6765\u5220\u9664\uFF1B\uFF08\u53EA\u5220\u9664use \u9009\u62E9\u7684\uFF0C\u800C\u975E\u6240\u6709\uFF09; 3. \u96C6\u5408\u64CD\u4F5C","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mongodb/mongodb-started.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MongoDB\u5165\u95E8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u8FDE\u63A5mongodb","slug":"_1-\u8FDE\u63A5mongodb","link":"#_1-\u8FDE\u63A5mongodb","children":[]},{"level":2,"title":"2. \u6570\u636E\u5E93\u64CD\u4F5C","slug":"_2-\u6570\u636E\u5E93\u64CD\u4F5C","link":"#_2-\u6570\u636E\u5E93\u64CD\u4F5C","children":[]},{"level":2,"title":"3. \u96C6\u5408\u64CD\u4F5C","slug":"_3-\u96C6\u5408\u64CD\u4F5C","link":"#_3-\u96C6\u5408\u64CD\u4F5C","children":[]},{"level":2,"title":"4. \u6587\u6863\u64CD\u4F5C","slug":"_4-\u6587\u6863\u64CD\u4F5C","link":"#_4-\u6587\u6863\u64CD\u4F5C","children":[{"level":3,"title":"4.1 \u63D2\u5165\u6587\u6863","slug":"_4-1-\u63D2\u5165\u6587\u6863","link":"#_4-1-\u63D2\u5165\u6587\u6863","children":[]},{"level":3,"title":"4.2 \u66F4\u65B0\u6587\u6863","slug":"_4-2-\u66F4\u65B0\u6587\u6863","link":"#_4-2-\u66F4\u65B0\u6587\u6863","children":[]},{"level":3,"title":"4.3 \u5220\u9664\u6587\u6863","slug":"_4-3-\u5220\u9664\u6587\u6863","link":"#_4-3-\u5220\u9664\u6587\u6863","children":[]},{"level":3,"title":"4.4 \u67E5\u8BE2\u6587\u6863","slug":"_4-4-\u67E5\u8BE2\u6587\u6863","link":"#_4-4-\u67E5\u8BE2\u6587\u6863","children":[]}]},{"level":2,"title":"5.\u5176\u4ED6\u64CD\u4F5C","slug":"_5-\u5176\u4ED6\u64CD\u4F5C","link":"#_5-\u5176\u4ED6\u64CD\u4F5C","children":[{"level":3,"title":"5.1 Limit\u4E0ESkip\u64CD\u4F5C","slug":"_5-1-limit\u4E0Eskip\u64CD\u4F5C","link":"#_5-1-limit\u4E0Eskip\u64CD\u4F5C","children":[]},{"level":3,"title":"5.2 \u6392\u5E8F","slug":"_5-2-\u6392\u5E8F","link":"#_5-2-\u6392\u5E8F","children":[]},{"level":3,"title":"5.3 \u7D22\u5F15","slug":"_5-3-\u7D22\u5F15","link":"#_5-3-\u7D22\u5F15","children":[]},{"level":3,"title":"5.4 \u805A\u5408","slug":"_5-4-\u805A\u5408","link":"#_5-4-\u805A\u5408","children":[]},{"level":3,"title":"5.5 \u6B63\u5219\u8868\u8FBE\u5F0F","slug":"_5-5-\u6B63\u5219\u8868\u8FBE\u5F0F","link":"#_5-5-\u6B63\u5219\u8868\u8FBE\u5F0F","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.83,"words":1750},"filePathRelative":"db/mongodb/mongodb-started.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
