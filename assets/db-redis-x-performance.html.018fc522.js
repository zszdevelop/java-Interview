const e=JSON.parse('{"key":"v-1aba85f3","path":"/db/redis/db-redis-x-performance.html","title":"Redis\u6027\u80FD\u8C03\u4F18\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"summary":"Redis\u6027\u80FD\u8C03\u4F18\u8BE6\u89E3 \\"Redis \u7684\u6027\u80FD\u95EE\u9898\uFF0C\u6D89\u53CA\u5230\u7684\u77E5\u8BC6\u70B9\u975E\u5E38\u5E7F\uFF0C\u51E0\u4E4E\u6DB5\u76D6\u4E86 CPU\u3001\u5185\u5B58\u3001\u7F51\u7EDC\u3001\u751A\u81F3\u78C1\u76D8\u7684\u65B9\u65B9\u9762\u9762\uFF1B\u540C\u65F6\u8FD8\u9700\u8981\u5BF9\u4E0A\u6587\u4E2D\u4E00\u4E9B\u57FA\u7840\u6216\u5E95\u5C42\u6709\u8BE6\u7EC6\u7684\u4E86\u89E3\u3002\\" 1. \u524D\u8A00 \\" Redis \u4F5C\u4E3A\u4F18\u79C0\u7684\u5185\u5B58\u6570\u636E\u5E93\uFF0C\u5176\u62E5\u6709\u975E\u5E38\u9AD8\u7684\u6027\u80FD\uFF0C\u5355\u4E2A\u5B9E\u4F8B\u7684 OPS \u80FD\u591F\u8FBE\u5230 10W \u5DE6\u53F3\u3002\u4F46\u4E5F\u6B63\u56E0\u6B64\u5982\u6B64\uFF0C\u5F53\u6211\u4EEC\u5728\u4F7F\u7528 Redis \u65F6\uFF0C\u5982\u679C\u53D1\u73B0\u64CD\u4F5C\u5EF6\u8FDF\u53D8\u5927\u7684\u60C5\u51B5","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/redis/db-redis-x-performance.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Redis\u6027\u80FD\u8C03\u4F18\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u524D\u8A00","slug":"_1-\u524D\u8A00","link":"#_1-\u524D\u8A00","children":[]},{"level":2,"title":"2. Redis\u771F\u7684\u53D8\u6162\u4E86\u5417\uFF1F","slug":"_2-redis\u771F\u7684\u53D8\u6162\u4E86\u5417","link":"#_2-redis\u771F\u7684\u53D8\u6162\u4E86\u5417","children":[{"level":3,"title":"2.1 \u4EC0\u4E48\u662F\u57FA\u51C6\u6027\u80FD\uFF1F","slug":"_2-1-\u4EC0\u4E48\u662F\u57FA\u51C6\u6027\u80FD","link":"#_2-1-\u4EC0\u4E48\u662F\u57FA\u51C6\u6027\u80FD","children":[]},{"level":3,"title":"2.2 \u5177\u4F53\u5982\u4F55\u505A\uFF1F","slug":"_2-2-\u5177\u4F53\u5982\u4F55\u505A","link":"#_2-2-\u5177\u4F53\u5982\u4F55\u505A","children":[]}]},{"level":2,"title":"3. \u4F7F\u7528\u590D\u6742\u5EA6\u8FC7\u9AD8\u7684\u547D\u4EE4","slug":"_3-\u4F7F\u7528\u590D\u6742\u5EA6\u8FC7\u9AD8\u7684\u547D\u4EE4","link":"#_3-\u4F7F\u7528\u590D\u6742\u5EA6\u8FC7\u9AD8\u7684\u547D\u4EE4","children":[]},{"level":2,"title":"4. \u64CD\u4F5Cbigkey","slug":"_4-\u64CD\u4F5Cbigkey","link":"#_4-\u64CD\u4F5Cbigkey","children":[{"level":3,"title":"4.1 \u67E5\u770Bbigkey \u7684\u5206\u5E03\u60C5\u51B5","slug":"_4-1-\u67E5\u770Bbigkey-\u7684\u5206\u5E03\u60C5\u51B5","link":"#_4-1-\u67E5\u770Bbigkey-\u7684\u5206\u5E03\u60C5\u51B5","children":[]},{"level":3,"title":"4.2 \u89E3\u51B3\u65B9\u6848","slug":"_4-2-\u89E3\u51B3\u65B9\u6848","link":"#_4-2-\u89E3\u51B3\u65B9\u6848","children":[]}]},{"level":2,"title":"5. \u96C6\u4E2D\u8FC7\u671F","slug":"_5-\u96C6\u4E2D\u8FC7\u671F","link":"#_5-\u96C6\u4E2D\u8FC7\u671F","children":[{"level":3,"title":"5.1 \u4E3A\u4EC0\u4E48\u96C6\u4E2D\u8FC7\u671F\u4F1A\u5BFC\u81F4 Redis \u5EF6\u8FDF\u53D8\u5927\uFF1F","slug":"_5-1-\u4E3A\u4EC0\u4E48\u96C6\u4E2D\u8FC7\u671F\u4F1A\u5BFC\u81F4-redis-\u5EF6\u8FDF\u53D8\u5927","link":"#_5-1-\u4E3A\u4EC0\u4E48\u96C6\u4E2D\u8FC7\u671F\u4F1A\u5BFC\u81F4-redis-\u5EF6\u8FDF\u53D8\u5927","children":[]},{"level":3,"title":"5.2 \u90A3\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5982\u4F55\u5206\u6790\u548C\u6392\u67E5\uFF1F","slug":"_5-2-\u90A3\u9047\u5230\u8FD9\u79CD\u60C5\u51B5-\u5982\u4F55\u5206\u6790\u548C\u6392\u67E5","link":"#_5-2-\u90A3\u9047\u5230\u8FD9\u79CD\u60C5\u51B5-\u5982\u4F55\u5206\u6790\u548C\u6392\u67E5","children":[]},{"level":3,"title":"5.3 \u89C4\u907F\u95EE\u9898","slug":"_5-3-\u89C4\u907F\u95EE\u9898","link":"#_5-3-\u89C4\u907F\u95EE\u9898","children":[]}]},{"level":2,"title":"6. \u5B9E\u4F8B\u5185\u5B58\u8FBE\u5230\u4E0A\u9650","slug":"_6-\u5B9E\u4F8B\u5185\u5B58\u8FBE\u5230\u4E0A\u9650","link":"#_6-\u5B9E\u4F8B\u5185\u5B58\u8FBE\u5230\u4E0A\u9650","children":[{"level":3,"title":"6.1 \u95EE\u9898\u539F\u56E0","slug":"_6-1-\u95EE\u9898\u539F\u56E0","link":"#_6-1-\u95EE\u9898\u539F\u56E0","children":[]},{"level":3,"title":"6.2 \u89E3\u51B3","slug":"_6-2-\u89E3\u51B3","link":"#_6-2-\u89E3\u51B3","children":[]}]},{"level":2,"title":"7. fork\u8017\u65F6\u4E25\u91CD","slug":"_7-fork\u8017\u65F6\u4E25\u91CD","link":"#_7-fork\u8017\u65F6\u4E25\u91CD","children":[{"level":3,"title":"7.1 \u4F18\u5316\u65B9\u6848","slug":"_7-1-\u4F18\u5316\u65B9\u6848","link":"#_7-1-\u4F18\u5316\u65B9\u6848","children":[]}]},{"level":2,"title":"8. \u5F00\u542F\u5185\u5B58\u5927\u9875","slug":"_8-\u5F00\u542F\u5185\u5B58\u5927\u9875","link":"#_8-\u5F00\u542F\u5185\u5B58\u5927\u9875","children":[{"level":3,"title":"8.1 \u4EC0\u4E48\u662F\u5185\u5B58\u5927\u9875\uFF1F","slug":"_8-1-\u4EC0\u4E48\u662F\u5185\u5B58\u5927\u9875","link":"#_8-1-\u4EC0\u4E48\u662F\u5185\u5B58\u5927\u9875","children":[]},{"level":3,"title":"8.2 \u8FD9\u5BF9 Redis \u4F1A\u6709\u4EC0\u4E48\u5F71\u54CD\u5462\uFF1F","slug":"_8-2-\u8FD9\u5BF9-redis-\u4F1A\u6709\u4EC0\u4E48\u5F71\u54CD\u5462","link":"#_8-2-\u8FD9\u5BF9-redis-\u4F1A\u6709\u4EC0\u4E48\u5F71\u54CD\u5462","children":[]},{"level":3,"title":"8.3 \u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1F","slug":"_8-3-\u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898","link":"#_8-3-\u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898","children":[]}]},{"level":2,"title":"9. \u5F00\u542FAOF","slug":"_9-\u5F00\u542Faof","link":"#_9-\u5F00\u542Faof","children":[]},{"level":2,"title":"10. \u7ED1\u5B9ACPU","slug":"_10-\u7ED1\u5B9Acpu","link":"#_10-\u7ED1\u5B9Acpu","children":[{"level":3,"title":"10.1 \u4E3A\u4EC0\u4E48\uFF1F","slug":"_10-1-\u4E3A\u4EC0\u4E48","link":"#_10-1-\u4E3A\u4EC0\u4E48","children":[]},{"level":3,"title":"10.2 \u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F","slug":"_10-2-\u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462","link":"#_10-2-\u90A3\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462","children":[]},{"level":3,"title":"10.3 \u5982\u4F55\u518D\u8FDB\u4E00\u6B65\u4F18\u5316\uFF1F","slug":"_10-3-\u5982\u4F55\u518D\u8FDB\u4E00\u6B65\u4F18\u5316","link":"#_10-3-\u5982\u4F55\u518D\u8FDB\u4E00\u6B65\u4F18\u5316","children":[]}]},{"level":2,"title":"11. \u4F7F\u7528Swap","slug":"_11-\u4F7F\u7528swap","link":"#_11-\u4F7F\u7528swap","children":[]},{"level":2,"title":"12. \u788E\u7247\u6574\u7406","slug":"_12-\u788E\u7247\u6574\u7406","link":"#_12-\u788E\u7247\u6574\u7406","children":[]},{"level":2,"title":"13. \u7F51\u7EDC\u5E26\u5BBD\u8FC7\u8F7D","slug":"_13-\u7F51\u7EDC\u5E26\u5BBD\u8FC7\u8F7D","link":"#_13-\u7F51\u7EDC\u5E26\u5BBD\u8FC7\u8F7D","children":[]},{"level":2,"title":"14. \u5176\u4ED6\u539F\u56E0","slug":"_14-\u5176\u4ED6\u539F\u56E0","link":"#_14-\u5176\u4ED6\u539F\u56E0","children":[]},{"level":2,"title":"15. \u603B\u7ED3","slug":"_15-\u603B\u7ED3","link":"#_15-\u603B\u7ED3","children":[]},{"level":2,"title":"16. \u540E\u8BB0","slug":"_16-\u540E\u8BB0","link":"#_16-\u540E\u8BB0","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":40.74,"words":12221},"filePathRelative":"db/redis/db-redis-x-performance.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
