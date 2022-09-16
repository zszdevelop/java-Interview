const e=JSON.parse('{"key":"v-525c0ef0","path":"/dependencies/mybatis/mybatis-y-dynamic-sql.html","title":"MyBatis\u8BE6\u89E3-\u52A8\u6001SQL\u4F7F\u7528\u4E0E\u539F\u7406","lang":"zh-CN","frontmatter":{"summary":"MyBatis\u8BE6\u89E3-\u52A8\u6001SQL\u4F7F\u7528\u4E0E\u539F\u7406 \\"\u52A8\u6001 SQL \u662F MyBatis \u7684\u5F3A\u5927\u7279\u6027\u4E4B\u4E00\u3002\u5982\u679C\u4F60\u4F7F\u7528\u8FC7 JDBC \u6216\u5176\u5B83\u7C7B\u4F3C\u7684\u6846\u67B6\uFF0C\u4F60\u5E94\u8BE5\u80FD\u7406\u89E3\u6839\u636E\u4E0D\u540C\u6761\u4EF6\u62FC\u63A5 SQL \u8BED\u53E5\u6709\u591A\u75DB\u82E6\uFF0C\u4F8B\u5982\u62FC\u63A5\u65F6\u8981\u786E\u4FDD\u4E0D\u80FD\u5FD8\u8BB0\u6DFB\u52A0\u5FC5\u8981\u7684\u7A7A\u683C\uFF0C\u8FD8\u8981\u6CE8\u610F\u53BB\u6389\u5217\u8868\u6700\u540E\u4E00\u4E2A\u5217\u540D\u7684\u9017\u53F7\u3002\u5229\u7528\u52A8\u6001 SQL\uFF0C\u53EF\u4EE5\u5F7B\u5E95\u6446\u8131\u8FD9\u79CD\u75DB\u82E6\u3002\\" 1. \u52A8\u6001SQL\u5B98\u65B9\u4F7F\u7528\u53C2\u8003 \u52A8\u6001 SQL \u662F My","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/mybatis/mybatis-y-dynamic-sql.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MyBatis\u8BE6\u89E3-\u52A8\u6001SQL\u4F7F\u7528\u4E0E\u539F\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T03:01:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T03:01:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u52A8\u6001SQL\u5B98\u65B9\u4F7F\u7528\u53C2\u8003","slug":"_1-\u52A8\u6001sql\u5B98\u65B9\u4F7F\u7528\u53C2\u8003","link":"#_1-\u52A8\u6001sql\u5B98\u65B9\u4F7F\u7528\u53C2\u8003","children":[{"level":3,"title":"1.1 if","slug":"_1-1-if","link":"#_1-1-if","children":[]},{"level":3,"title":"1.2  choose\u3001when\u3001otherwise","slug":"_1-2-choose\u3001when\u3001otherwise","link":"#_1-2-choose\u3001when\u3001otherwise","children":[]},{"level":3,"title":"1.3 trim\u3001where\u3001set","slug":"_1-3-trim\u3001where\u3001set","link":"#_1-3-trim\u3001where\u3001set","children":[]},{"level":3,"title":"1.4 foreach","slug":"_1-4-foreach","link":"#_1-4-foreach","children":[]},{"level":3,"title":"1.5 script","slug":"_1-5-script","link":"#_1-5-script","children":[]},{"level":3,"title":"1.6 bind","slug":"_1-6-bind","link":"#_1-6-bind","children":[]},{"level":3,"title":"1.7 \u591A\u6570\u636E\u5E93\u652F\u6301","slug":"_1-7-\u591A\u6570\u636E\u5E93\u652F\u6301","link":"#_1-7-\u591A\u6570\u636E\u5E93\u652F\u6301","children":[]},{"level":3,"title":"1.8 \u52A8\u6001 SQL \u4E2D\u7684\u63D2\u5165\u811A\u672C\u8BED\u8A00","slug":"_1-8-\u52A8\u6001-sql-\u4E2D\u7684\u63D2\u5165\u811A\u672C\u8BED\u8A00","link":"#_1-8-\u52A8\u6001-sql-\u4E2D\u7684\u63D2\u5165\u811A\u672C\u8BED\u8A00","children":[]}]},{"level":2,"title":"2. \u52A8\u6001SQL\u89E3\u6790\u539F\u7406","slug":"_2-\u52A8\u6001sql\u89E3\u6790\u539F\u7406","link":"#_2-\u52A8\u6001sql\u89E3\u6790\u539F\u7406","children":[{"level":3,"title":"2.1 \u5173\u4E8E\u52A8\u6001SQL\u7684\u63A5\u53E3\u548C\u7C7B","slug":"_2-1-\u5173\u4E8E\u52A8\u6001sql\u7684\u63A5\u53E3\u548C\u7C7B","link":"#_2-1-\u5173\u4E8E\u52A8\u6001sql\u7684\u63A5\u53E3\u548C\u7C7B","children":[]},{"level":3,"title":"2.2 \u6E90\u7801\u5206\u6790\u8D70\u8D77","slug":"_2-2-\u6E90\u7801\u5206\u6790\u8D70\u8D77","link":"#_2-2-\u6E90\u7801\u5206\u6790\u8D70\u8D77","children":[]},{"level":3,"title":"2.3 \u5B9E\u4F8B\u5206\u6790","slug":"_2-3-\u5B9E\u4F8B\u5206\u6790","link":"#_2-3-\u5B9E\u4F8B\u5206\u6790","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663124461000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":13.43,"words":4028},"filePathRelative":"dependencies/mybatis/mybatis-y-dynamic-sql.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
