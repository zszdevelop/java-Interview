const e=JSON.parse('{"key":"v-2f35393d","path":"/db/es/elasticsearch-demo.html","title":"Es-\u6D4B\u8BD5demo","lang":"zh-CN","frontmatter":{"summary":"Es-\u6D4B\u8BD5demo \u67E5\u770B\u7D22\u5F15 GET /case/_mapping \u5206\u8BCD\u5206\u6790 GET case/_analyze { \\"field\\": \\"ajmc\\" , \\"text\\": \\"\u8FBD\u5B81\u7701\u8425\u53E3\u5E02\u4E2D\u7EA7\u4EBA\u6C11\u6CD5\u9662\\" } \u67E5\u627E\u5168\u90E8 DSL boosting DSL constant_score DSL dis_max \u5C06\u4EFB\u4F55\u4E0E\u4EFB\u4E00\u67E5\u8BE2\u5339\u914D\u7684\u6587\u6863\u4F5C\u4E3A\u7ED3\u679C\u8FD4\u56DE\uFF0C\u4F46\u53EA\u5C06\u6700\u4F73\u5339\u914D\u7684\u8BC4","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-demo.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"Es-\u6D4B\u8BD5demo"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-22T12:59:37.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-22T12:59:37.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u67E5\u770B\u7D22\u5F15","slug":"\u67E5\u770B\u7D22\u5F15","link":"#\u67E5\u770B\u7D22\u5F15","children":[]},{"level":2,"title":"\u5206\u8BCD\u5206\u6790","slug":"\u5206\u8BCD\u5206\u6790","link":"#\u5206\u8BCD\u5206\u6790","children":[]},{"level":2,"title":"\u67E5\u627E\u5168\u90E8","slug":"\u67E5\u627E\u5168\u90E8","link":"#\u67E5\u627E\u5168\u90E8","children":[]},{"level":2,"title":"DSL boosting","slug":"dsl-boosting","link":"#dsl-boosting","children":[]},{"level":2,"title":"DSL constant_score","slug":"dsl-constant-score","link":"#dsl-constant-score","children":[]},{"level":2,"title":"DSL dis_max","slug":"dsl-dis-max","link":"#dsl-dis-max","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 \u591A\u8BCDMATCH\uFF0C\u9ED8\u8BA4or","slug":"dsl-\u5168\u6587\u641C\u7D22-\u591A\u8BCDmatch-\u9ED8\u8BA4or","link":"#dsl-\u5168\u6587\u641C\u7D22-\u591A\u8BCDmatch-\u9ED8\u8BA4or","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0C\u6307\u5B9A\u4E3Aand","slug":"dsl-\u5168\u6587\u641C\u7D22-match-\u6307\u5B9A\u4E3Aand","link":"#dsl-\u5168\u6587\u641C\u7D22-match-\u6307\u5B9A\u4E3Aand","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0C\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","slug":"dsl-\u5168\u6587\u641C\u7D22-match-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","link":"#dsl-\u5168\u6587\u641C\u7D22-match-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0C\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6","slug":"dsl-\u5168\u6587\u641C\u7D22-match-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6-1","link":"#dsl-\u5168\u6587\u641C\u7D22-match-\u63A7\u5236match\u7684\u5339\u914D\u7CBE\u5EA6-1","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0Cmatch_phrase \u641C\u7D22\u8BCD\u7EC4","slug":"dsl-\u5168\u6587\u641C\u7D22-match-match-phrase-\u641C\u7D22\u8BCD\u7EC4","link":"#dsl-\u5168\u6587\u641C\u7D22-match-match-phrase-\u641C\u7D22\u8BCD\u7EC4","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0Cmatch_phrase_prefix \u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","slug":"dsl-\u5168\u6587\u641C\u7D22-match-match-phrase-prefix-\u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","link":"#dsl-\u5168\u6587\u641C\u7D22-match-match-phrase-prefix-\u67E5\u6700\u540E\u4E00\u4E2A\u8BCD\u9879\u662F\u524D\u7F00","children":[]},{"level":2,"title":"DSL \u5168\u6587\u641C\u7D22 MATCH\uFF0C multi_match \u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","slug":"dsl-\u5168\u6587\u641C\u7D22-match-multi-match-\u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","link":"#dsl-\u5168\u6587\u641C\u7D22-match-multi-match-\u4E00\u6B21\u5BF9\u591A\u4E2A\u5B57\u6BB5\u67E5\u8BE2","children":[]},{"level":2,"title":"\u5206\u7EC4\u641C\u7D22\uFF0C\u5D4C\u5957\u5206\u7EC4","slug":"\u5206\u7EC4\u641C\u7D22-\u5D4C\u5957\u5206\u7EC4","link":"#\u5206\u7EC4\u641C\u7D22-\u5D4C\u5957\u5206\u7EC4","children":[]}],"git":{"createdTime":1671713977000,"updatedTime":1671713977000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"db/es/elasticsearch-demo.md","localizedDate":"2022\u5E7412\u670822\u65E5"}');export{e as data};
