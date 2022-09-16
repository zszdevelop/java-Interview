const e=JSON.parse('{"key":"v-465d2e38","path":"/db/es/elasticsearch-y-peformance.html","title":"ES\u8BE6\u89E3 - \u4F18\u5316\uFF1AElasticSearch\u6027\u80FD\u4F18\u5316\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":210,"summary":"ES\u8BE6\u89E3 - \u4F18\u5316\uFF1AElasticSearch\u6027\u80FD\u4F18\u5316\u8BE6\u89E3 \\"Elasticsearch \u4F5C\u4E3A\u4E00\u4E2A\u5F00\u7BB1\u5373\u7528\u7684\u4EA7\u54C1\uFF0C\u5728\u751F\u4EA7\u73AF\u5883\u4E0A\u7EBF\u4E4B\u540E\uFF0C\u6211\u4EEC\u5176\u5B9E\u4E0D\u4E00\u5B9A\u80FD\u786E\u4FDD\u5176\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u3002\u5982\u4F55\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u63D0\u9AD8\u670D\u52A1\u7684\u6027\u80FD\uFF0C\u5176\u5B9E\u6709\u5F88\u591A\u6280\u5DE7\u3002\u8FD9\u7AE0\u6211\u4EEC\u5206\u4EAB\u4ECE\u5B9E\u6218\u7ECF\u9A8C\u4E2D\u603B\u7ED3\u51FA\u6765\u7684 elasticsearch \u6027\u80FD\u4F18\u5316\uFF0C\u4E3B\u8981\u4ECE\u786C\u4EF6\u914D\u7F6E\u4F18\u5316\u3001\u7D22\u5F15\u4F18\u5316\u8BBE\u7F6E\u3001\u67E5\u8BE2\u65B9\u9762\u4F18\u5316\u3001\u6570\u636E\u7ED3\u6784\u4F18\u5316\u3001\u96C6\u7FA4","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-y-peformance.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u4F18\u5316\uFF1AElasticSearch\u6027\u80FD\u4F18\u5316\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-09T07:08:07.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-09T07:08:07.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u786C\u4EF6\u914D\u7F6E\u4F18\u5316","slug":"_1-\u786C\u4EF6\u914D\u7F6E\u4F18\u5316","link":"#_1-\u786C\u4EF6\u914D\u7F6E\u4F18\u5316","children":[{"level":3,"title":"1.1 CPU \u914D\u7F6E","slug":"_1-1-cpu-\u914D\u7F6E","link":"#_1-1-cpu-\u914D\u7F6E","children":[]},{"level":3,"title":"1.2 \u5185\u5B58\u914D\u7F6E","slug":"_1-2-\u5185\u5B58\u914D\u7F6E","link":"#_1-2-\u5185\u5B58\u914D\u7F6E","children":[]},{"level":3,"title":"1.3 \u78C1\u76D8","slug":"_1-3-\u78C1\u76D8","link":"#_1-3-\u78C1\u76D8","children":[]}]},{"level":2,"title":"2. \u7D22\u5F15\u4F18\u5316\u8BBE\u7F6E","slug":"_2-\u7D22\u5F15\u4F18\u5316\u8BBE\u7F6E","link":"#_2-\u7D22\u5F15\u4F18\u5316\u8BBE\u7F6E","children":[{"level":3,"title":"2.1 \u6279\u91CF\u63D0\u4EA4","slug":"_2-1-\u6279\u91CF\u63D0\u4EA4","link":"#_2-1-\u6279\u91CF\u63D0\u4EA4","children":[]},{"level":3,"title":"2.2 \u589E\u52A0 Refresh \u65F6\u95F4\u95F4\u9694","slug":"_2-2-\u589E\u52A0-refresh-\u65F6\u95F4\u95F4\u9694","link":"#_2-2-\u589E\u52A0-refresh-\u65F6\u95F4\u95F4\u9694","children":[]},{"level":3,"title":"2.3 \u4FEE\u6539 index_buffer_size \u7684\u8BBE\u7F6E","slug":"_2-3-\u4FEE\u6539-index-buffer-size-\u7684\u8BBE\u7F6E","link":"#_2-3-\u4FEE\u6539-index-buffer-size-\u7684\u8BBE\u7F6E","children":[]},{"level":3,"title":"2.4 \u4FEE\u6539 translog \u76F8\u5173\u7684\u8BBE\u7F6E","slug":"_2-4-\u4FEE\u6539-translog-\u76F8\u5173\u7684\u8BBE\u7F6E","link":"#_2-4-\u4FEE\u6539-translog-\u76F8\u5173\u7684\u8BBE\u7F6E","children":[]},{"level":3,"title":"2.5 \u6CE8\u610F _id \u5B57\u6BB5\u7684\u4F7F\u7528","slug":"_2-5-\u6CE8\u610F-id-\u5B57\u6BB5\u7684\u4F7F\u7528","link":"#_2-5-\u6CE8\u610F-id-\u5B57\u6BB5\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"2.6 \u6CE8\u610F _all \u5B57\u6BB5\u53CA _source \u5B57\u6BB5\u7684\u4F7F\u7528","slug":"_2-6-\u6CE8\u610F-all-\u5B57\u6BB5\u53CA-source-\u5B57\u6BB5\u7684\u4F7F\u7528","link":"#_2-6-\u6CE8\u610F-all-\u5B57\u6BB5\u53CA-source-\u5B57\u6BB5\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"2.7 \u5408\u7406\u7684\u914D\u7F6E\u4F7F\u7528 index \u5C5E\u6027","slug":"_2-7-\u5408\u7406\u7684\u914D\u7F6E\u4F7F\u7528-index-\u5C5E\u6027","link":"#_2-7-\u5408\u7406\u7684\u914D\u7F6E\u4F7F\u7528-index-\u5C5E\u6027","children":[]},{"level":3,"title":"2.8 \u51CF\u5C11\u526F\u672C\u6570\u91CF","slug":"_2-8-\u51CF\u5C11\u526F\u672C\u6570\u91CF","link":"#_2-8-\u51CF\u5C11\u526F\u672C\u6570\u91CF","children":[]}]},{"level":2,"title":"3. \u67E5\u8BE2\u65B9\u9762\u4F18\u5316","slug":"_3-\u67E5\u8BE2\u65B9\u9762\u4F18\u5316","link":"#_3-\u67E5\u8BE2\u65B9\u9762\u4F18\u5316","children":[{"level":3,"title":"3.1 \u8DEF\u7531\u4F18\u5316","slug":"_3-1-\u8DEF\u7531\u4F18\u5316","link":"#_3-1-\u8DEF\u7531\u4F18\u5316","children":[]},{"level":3,"title":"3.2 Filter VS Query","slug":"_3-2-filter-vs-query","link":"#_3-2-filter-vs-query","children":[]},{"level":3,"title":"3.3 \u6DF1\u5EA6\u7FFB\u9875","slug":"_3-3-\u6DF1\u5EA6\u7FFB\u9875","link":"#_3-3-\u6DF1\u5EA6\u7FFB\u9875","children":[]},{"level":3,"title":"3.4 \u811A\u672C\uFF08script\uFF09\u5408\u7406\u4F7F\u7528","slug":"_3-4-\u811A\u672C-script-\u5408\u7406\u4F7F\u7528","link":"#_3-4-\u811A\u672C-script-\u5408\u7406\u4F7F\u7528","children":[]},{"level":3,"title":"3.5 Cache\u7684\u8BBE\u7F6E\u53CA\u4F7F\u7528","slug":"_3-5-cache\u7684\u8BBE\u7F6E\u53CA\u4F7F\u7528","link":"#_3-5-cache\u7684\u8BBE\u7F6E\u53CA\u4F7F\u7528","children":[]},{"level":3,"title":"3.6 \u66F4\u591A\u67E5\u8BE2\u4F18\u5316\u7ECF\u9A8C","slug":"_3-6-\u66F4\u591A\u67E5\u8BE2\u4F18\u5316\u7ECF\u9A8C","link":"#_3-6-\u66F4\u591A\u67E5\u8BE2\u4F18\u5316\u7ECF\u9A8C","children":[]},{"level":3,"title":"3.7 \u901A\u8FC7\u5F00\u542F\u6162\u67E5\u8BE2\u914D\u7F6E\u5B9A\u4F4D\u6162\u67E5\u8BE2","slug":"_3-7-\u901A\u8FC7\u5F00\u542F\u6162\u67E5\u8BE2\u914D\u7F6E\u5B9A\u4F4D\u6162\u67E5\u8BE2","link":"#_3-7-\u901A\u8FC7\u5F00\u542F\u6162\u67E5\u8BE2\u914D\u7F6E\u5B9A\u4F4D\u6162\u67E5\u8BE2","children":[]}]},{"level":2,"title":"4. \u6570\u636E\u7ED3\u6784\u4F18\u5316","slug":"_4-\u6570\u636E\u7ED3\u6784\u4F18\u5316","link":"#_4-\u6570\u636E\u7ED3\u6784\u4F18\u5316","children":[{"level":3,"title":"4.1 \u5C3D\u91CF\u51CF\u5C11\u4E0D\u9700\u8981\u7684\u5B57\u6BB5","slug":"_4-1-\u5C3D\u91CF\u51CF\u5C11\u4E0D\u9700\u8981\u7684\u5B57\u6BB5","link":"#_4-1-\u5C3D\u91CF\u51CF\u5C11\u4E0D\u9700\u8981\u7684\u5B57\u6BB5","children":[]},{"level":3,"title":"4.2 Nested Object vs Parent/Child","slug":"_4-2-nested-object-vs-parent-child","link":"#_4-2-nested-object-vs-parent-child","children":[]},{"level":3,"title":"4.3 \u9009\u62E9\u9759\u6001\u6620\u5C04\uFF0C\u975E\u5FC5\u9700\u65F6\uFF0C\u7981\u6B62\u52A8\u6001\u6620\u5C04","slug":"_4-3-\u9009\u62E9\u9759\u6001\u6620\u5C04-\u975E\u5FC5\u9700\u65F6-\u7981\u6B62\u52A8\u6001\u6620\u5C04","link":"#_4-3-\u9009\u62E9\u9759\u6001\u6620\u5C04-\u975E\u5FC5\u9700\u65F6-\u7981\u6B62\u52A8\u6001\u6620\u5C04","children":[]},{"level":3,"title":"4.4 document \u6A21\u578B\u8BBE\u8BA1","slug":"_4-4-document-\u6A21\u578B\u8BBE\u8BA1","link":"#_4-4-document-\u6A21\u578B\u8BBE\u8BA1","children":[]}]},{"level":2,"title":"5. \u96C6\u7FA4\u67B6\u6784\u8BBE\u8BA1","slug":"_5-\u96C6\u7FA4\u67B6\u6784\u8BBE\u8BA1","link":"#_5-\u96C6\u7FA4\u67B6\u6784\u8BBE\u8BA1","children":[{"level":3,"title":"5.1 \u4E3B\u8282\u70B9\u3001\u6570\u636E\u8282\u70B9\u548C\u534F\u8C03\u8282\u70B9\u5206\u79BB","slug":"_5-1-\u4E3B\u8282\u70B9\u3001\u6570\u636E\u8282\u70B9\u548C\u534F\u8C03\u8282\u70B9\u5206\u79BB","link":"#_5-1-\u4E3B\u8282\u70B9\u3001\u6570\u636E\u8282\u70B9\u548C\u534F\u8C03\u8282\u70B9\u5206\u79BB","children":[]},{"level":3,"title":"5.2 \u5173\u95ED data \u8282\u70B9\u670D\u52A1\u5668\u4E2D\u7684 http \u529F\u80FD","slug":"_5-2-\u5173\u95ED-data-\u8282\u70B9\u670D\u52A1\u5668\u4E2D\u7684-http-\u529F\u80FD","link":"#_5-2-\u5173\u95ED-data-\u8282\u70B9\u670D\u52A1\u5668\u4E2D\u7684-http-\u529F\u80FD","children":[]},{"level":3,"title":"5.3 \u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u6700\u597D\u53EA\u90E8\u7F72\u4E00\u4E2A node","slug":"_5-3-\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u6700\u597D\u53EA\u90E8\u7F72\u4E00\u4E2A-node","link":"#_5-3-\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\u6700\u597D\u53EA\u90E8\u7F72\u4E00\u4E2A-node","children":[]},{"level":3,"title":"5.4 \u96C6\u7FA4\u5206\u7247\u8BBE\u7F6E","slug":"_5-4-\u96C6\u7FA4\u5206\u7247\u8BBE\u7F6E","link":"#_5-4-\u96C6\u7FA4\u5206\u7247\u8BBE\u7F6E","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1662707287000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":25.41,"words":7622},"filePathRelative":"db/es/elasticsearch-y-peformance.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
