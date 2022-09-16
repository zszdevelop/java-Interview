const e=JSON.parse('{"key":"v-70584e94","path":"/db/es/elasticsearch-x-index-mapping.html","title":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u7BA1\u7406\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":60,"summary":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u7BA1\u7406\u8BE6\u89E3 \\"\u4E86\u89E3\u57FA\u672C\u4F7F\u7528\u540E\uFF0C\u6211\u4EEC\u4ECE\u7D22\u5F15\u64CD\u4F5C\u7684\u89D2\u5EA6\u770B\u770B\u5982\u4F55\u5BF9\u7D22\u5F15\u8FDB\u884C\u7BA1\u7406\u3002\\" 1. \u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165 \u6211\u4EEC\u5728\u524D\u6587\u4E2D\u589E\u52A0\u6587\u6863\u65F6\uFF0C\u5982\u4E0B\u7684\u8BED\u53E5\u4F1A\u52A8\u6001\u521B\u5EFA\u4E00\u4E2Acustomer\u7684index\uFF1A \u800C\u8FD9\u4E2Aindex\u5B9E\u9645\u4E0A\u5DF2\u7ECF\u81EA\u52A8\u521B\u5EFA\u4E86\u5B83\u91CC\u9762\u7684\u5B57\u6BB5\uFF08name\uFF09\u7684\u7C7B\u578B\u3002\u6211\u4EEC\u4E0D\u59A8\u770B\u4E0B\u5B83\u81EA\u52A8\u521B\u5EFA\u7684mapping\uFF1A \u90A3\u4E48\u5982\u679C\u6211\u4EEC\u9700\u8981\u5BF9\u8FD9\u4E2A\u5EFA\u7ACB\u7D22\u5F15\u7684\u8FC7\u7A0B\u505A\u66F4\u591A\u7684\u63A7\u5236","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-x-index-mapping.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u7D22\u5F15\uFF1A\u7D22\u5F15\u7BA1\u7406\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165","slug":"_1-\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165","link":"#_1-\u7D22\u5F15\u7BA1\u7406\u7684\u5F15\u5165","children":[]},{"level":2,"title":"2. \u7D22\u5F15\u7684\u683C\u5F0F","slug":"_2-\u7D22\u5F15\u7684\u683C\u5F0F","link":"#_2-\u7D22\u5F15\u7684\u683C\u5F0F","children":[]},{"level":2,"title":"3. \u7D22\u5F15\u7BA1\u7406\u64CD\u4F5C","slug":"_3-\u7D22\u5F15\u7BA1\u7406\u64CD\u4F5C","link":"#_3-\u7D22\u5F15\u7BA1\u7406\u64CD\u4F5C","children":[{"level":3,"title":"3.1 \u521B\u5EFA\u7D22\u5F15","slug":"_3-1-\u521B\u5EFA\u7D22\u5F15","link":"#_3-1-\u521B\u5EFA\u7D22\u5F15","children":[]},{"level":3,"title":"3.2 \u4FEE\u6539\u7D22\u5F15","slug":"_3-2-\u4FEE\u6539\u7D22\u5F15","link":"#_3-2-\u4FEE\u6539\u7D22\u5F15","children":[]},{"level":3,"title":"3.3 \u6253\u5F00/\u5173\u95ED\u7D22\u5F15","slug":"_3-3-\u6253\u5F00-\u5173\u95ED\u7D22\u5F15","link":"#_3-3-\u6253\u5F00-\u5173\u95ED\u7D22\u5F15","children":[]},{"level":3,"title":"3.4 \u5220\u9664\u7D22\u5F15","slug":"_3-4-\u5220\u9664\u7D22\u5F15","link":"#_3-4-\u5220\u9664\u7D22\u5F15","children":[]},{"level":3,"title":"3.5 \u5220\u9664\u7D22\u5F15","slug":"_3-5-\u5220\u9664\u7D22\u5F15","link":"#_3-5-\u5220\u9664\u7D22\u5F15","children":[]},{"level":3,"title":"3.6 \u67E5\u770B\u7D22\u5F15","slug":"_3-6-\u67E5\u770B\u7D22\u5F15","link":"#_3-6-\u67E5\u770B\u7D22\u5F15","children":[]}]},{"level":2,"title":"4. Kibana\u7BA1\u7406\u7D22\u5F15","slug":"_4-kibana\u7BA1\u7406\u7D22\u5F15","link":"#_4-kibana\u7BA1\u7406\u7D22\u5F15","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1006},"filePathRelative":"db/es/elasticsearch-x-index-mapping.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
