const e=JSON.parse('{"key":"v-96a8e766","path":"/dependencies/timer/quartz-x-principle.html","title":"\u5B9A\u65F6\u4EFB\u52A1 - Quartz\u539F\u7406\u5206\u6790","lang":"zh-CN","frontmatter":{"order":53,"category":["\u5B9A\u65F6\u4EFB\u52A1"],"summary":"\u5B9A\u65F6\u4EFB\u52A1 - Quartz\u539F\u7406\u5206\u6790 1. Quartz\u6982\u5FF5 Quartz\u662F\u4E00\u4E2A\u4F18\u79C0\u7684\u4EFB\u52A1\u8C03\u5EA6\u6846\u67B6\uFF0C \u5177\u6709\u4EE5\u4E0B\u7279\u70B9\uFF1A \u5F3A\u5927\u7684\u8C03\u5EA6\u529F\u80FD\uFF0C\u4F8B\u5982\u652F\u6301\u4E30\u5BCC\u591A\u6837\u7684\u8C03\u5EA6\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6EE1\u8DB3\u5404\u79CD\u5E38\u89C4\u53CA\u7279\u6B8A\u9700\u6C42\uFF1B; \u8D1F\u8F7D\u5747\u8861; \u9AD8\u53EF\u7528; 1.1 \u8C03\u5EA6\u5668\uFF1Ascheduler \u4EFB\u52A1\u8C03\u5EA6\u7684\u63A7\u5236\u5668\uFF0C\u8D1F\u8D23\u5B9A\u65F6\u4EFB\u52A1\u7684\u8C03\u5EA6\uFF0C\u5E76\u4E14\u63D0\u4F9B\u4EFB\u52A1\u548C\u89E6\u53D1\u5668\u7684\u589E\u5220\u6539\u67E5\u7B49api\u65B9\u6CD5\u3002 1.2 \u4EFB\u52A1\uFF1Ajob jo","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/timer/quartz-x-principle.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u5B9A\u65F6\u4EFB\u52A1 - Quartz\u539F\u7406\u5206\u6790"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-09T02:51:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-09T02:51:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Quartz\u6982\u5FF5","slug":"_1-quartz\u6982\u5FF5","link":"#_1-quartz\u6982\u5FF5","children":[{"level":3,"title":"1.1 \u8C03\u5EA6\u5668\uFF1Ascheduler","slug":"_1-1-\u8C03\u5EA6\u5668-scheduler","link":"#_1-1-\u8C03\u5EA6\u5668-scheduler","children":[]},{"level":3,"title":"1.2 \u4EFB\u52A1\uFF1Ajob","slug":"_1-2-\u4EFB\u52A1-job","link":"#_1-2-\u4EFB\u52A1-job","children":[]},{"level":3,"title":"1.3 \u89E6\u53D1\u5668\uFF1Atrigger","slug":"_1-3-\u89E6\u53D1\u5668-trigger","link":"#_1-3-\u89E6\u53D1\u5668-trigger","children":[]},{"level":3,"title":"1.4 \u6838\u5FC3\u5143\u7D20\u5173\u7CFB","slug":"_1-4-\u6838\u5FC3\u5143\u7D20\u5173\u7CFB","link":"#_1-4-\u6838\u5FC3\u5143\u7D20\u5173\u7CFB","children":[]}]},{"level":2,"title":"2. Scheduler \u8C03\u5EA6\u7EBF\u7A0B","slug":"_2-scheduler-\u8C03\u5EA6\u7EBF\u7A0B","link":"#_2-scheduler-\u8C03\u5EA6\u7EBF\u7A0B","children":[{"level":3,"title":"2.1 Quartz \u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE","slug":"_2-1-quartz-\u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE","link":"#_2-1-quartz-\u8C03\u5EA6\u7EBF\u7A0B\u6D41\u7A0B\u56FE","children":[]}]},{"level":2,"title":"3. \u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1\uFF1Amisfire job","slug":"_3-\u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1-misfire-job","link":"#_3-\u672A\u6B63\u5E38\u89E6\u53D1\u7684\u4EFB\u52A1-misfire-job","children":[]},{"level":2,"title":"4. Quzrtz\u5355\u673A\u6A21\u5F0F \u539F\u7406\u5206\u6790","slug":"_4-quzrtz\u5355\u673A\u6A21\u5F0F-\u539F\u7406\u5206\u6790","link":"#_4-quzrtz\u5355\u673A\u6A21\u5F0F-\u539F\u7406\u5206\u6790","children":[]},{"level":2,"title":"5. \u96C6\u7FA4\u6A21\u5F0F","slug":"_5-\u96C6\u7FA4\u6A21\u5F0F","link":"#_5-\u96C6\u7FA4\u6A21\u5F0F","children":[{"level":3,"title":"5.1 Quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE","slug":"_5-1-quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE","link":"#_5-1-quartz\u96C6\u7FA4\u6A21\u5F0F\u90E8\u7F72\u56FE","children":[]},{"level":3,"title":"5.2 \u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790","slug":"_5-2-\u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790","link":"#_5-2-\u96C6\u7FA4\u6A21\u5F0F\u539F\u7406\u5206\u6790","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1665283870000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":5.22,"words":1567},"filePathRelative":"dependencies/timer/quartz-x-principle.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
