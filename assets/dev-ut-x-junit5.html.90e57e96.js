const e=JSON.parse('{"key":"v-0e0b12b9","path":"/develop/test/dev-ut-x-junit5.html","title":"\u5355\u5143\u6D4B\u8BD5 - Junit5 \u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":40,"category":["Test"],"summary":"\u5355\u5143\u6D4B\u8BD5 - Junit5 \u8BE6\u89E3 \\" JUnit 5\u662FJUnit\u7684\u4E0B\u4E00\u4EE3\u3002\u76EE\u6807\u662F\u4E3AJVM\u4E0A\u7684\u5F00\u53D1\u4EBA\u5458\u7AEF\u6D4B\u8BD5\u521B\u5EFA\u4E00\u4E2A\u6700\u65B0\u7684\u57FA\u7840\u3002\u8FD9\u5305\u62EC\u4E13\u6CE8\u4E8EJava 8\u53CA\u66F4\u9AD8\u7248\u672C\uFF0C\u4EE5\u53CA\u542F\u7528\u8BB8\u591A\u4E0D\u540C\u98CE\u683C\u7684\u6D4B\u8BD5\u3002\\" 1. \u5B98\u65B9\u8D44\u6599 \\" \u6700\u597D\u7684\u8D44\u6599\u4F9D\u7136\u5728Junit\u5B98\u65B9\u7F51\u7AD9\uFF0C\u4EE5\u4E0B\u6211\u5E2E\u4F60\u603B\u7ED3\u4E0BJunit\u76F8\u5173\u7684\u5B98\u65B9\u7F51\u5740\u3002\\" \u5B98\u7F51\u5730\u5740; https://junit.org/junit5/ ","head":[["meta",{"property":"og:url","content":"https://java.isture.com/develop/test/dev-ut-x-junit5.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u5355\u5143\u6D4B\u8BD5 - Junit5 \u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5B98\u65B9\u8D44\u6599","slug":"_1-\u5B98\u65B9\u8D44\u6599","link":"#_1-\u5B98\u65B9\u8D44\u6599","children":[]},{"level":2,"title":"2. Junit5\u7684\u67B6\u6784","slug":"_2-junit5\u7684\u67B6\u6784","link":"#_2-junit5\u7684\u67B6\u6784","children":[]},{"level":2,"title":"3. JUnit Jupiter API \u7684\u4F7F\u7528","slug":"_3-junit-jupiter-api-\u7684\u4F7F\u7528","link":"#_3-junit-jupiter-api-\u7684\u4F7F\u7528","children":[{"level":3,"title":"3.1 \u5E38\u7528\u6CE8\u89E3","slug":"_3-1-\u5E38\u7528\u6CE8\u89E3","link":"#_3-1-\u5E38\u7528\u6CE8\u89E3","children":[]}]},{"level":2,"title":"4. \u7F16\u5199\u5355\u5143\u6D4B\u8BD5","slug":"_4-\u7F16\u5199\u5355\u5143\u6D4B\u8BD5","link":"#_4-\u7F16\u5199\u5355\u5143\u6D4B\u8BD5","children":[{"level":3,"title":"4.1 Maven\u5305\u5F15\u5165","slug":"_4-1-maven\u5305\u5F15\u5165","link":"#_4-1-maven\u5305\u5F15\u5165","children":[]},{"level":3,"title":"4.2 \u6D4B\u8BD5:Hello World","slug":"_4-2-\u6D4B\u8BD5-hello-world","link":"#_4-2-\u6D4B\u8BD5-hello-world","children":[]},{"level":3,"title":"5.3 \u6D4B\u8BD5:\u751F\u547D\u5468\u671F","slug":"_5-3-\u6D4B\u8BD5-\u751F\u547D\u5468\u671F","link":"#_5-3-\u6D4B\u8BD5-\u751F\u547D\u5468\u671F","children":[]},{"level":3,"title":"5.4 \u6D4B\u8BD5:\u7981\u7528\u6D4B\u8BD5","slug":"_5-4-\u6D4B\u8BD5-\u7981\u7528\u6D4B\u8BD5","link":"#_5-4-\u6D4B\u8BD5-\u7981\u7528\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.5 \u6D4B\u8BD5:\u65AD\u8A00\u6D4B\u8BD5","slug":"_5-5-\u6D4B\u8BD5-\u65AD\u8A00\u6D4B\u8BD5","link":"#_5-5-\u6D4B\u8BD5-\u65AD\u8A00\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.6 \u6D4B\u8BD5:\u5F02\u5E38\u6D4B\u8BD5","slug":"_5-6-\u6D4B\u8BD5-\u5F02\u5E38\u6D4B\u8BD5","link":"#_5-6-\u6D4B\u8BD5-\u5F02\u5E38\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.7 \u6D4B\u8BD5:\u5D4C\u5957\u6D4B\u8BD5","slug":"_5-7-\u6D4B\u8BD5-\u5D4C\u5957\u6D4B\u8BD5","link":"#_5-7-\u6D4B\u8BD5-\u5D4C\u5957\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.8 \u6D4B\u8BD5:\u91CD\u590D\u6D4B\u8BD5","slug":"_5-8-\u6D4B\u8BD5-\u91CD\u590D\u6D4B\u8BD5","link":"#_5-8-\u6D4B\u8BD5-\u91CD\u590D\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.9 \u6D4B\u8BD5:\u53C2\u6570\u5316\u6D4B\u8BD5","slug":"_5-9-\u6D4B\u8BD5-\u53C2\u6570\u5316\u6D4B\u8BD5","link":"#_5-9-\u6D4B\u8BD5-\u53C2\u6570\u5316\u6D4B\u8BD5","children":[]},{"level":3,"title":"5.10 \u6D4B\u8BD5:\u52A8\u6001\u6D4B\u8BD5","slug":"_5-10-\u6D4B\u8BD5-\u52A8\u6001\u6D4B\u8BD5","link":"#_5-10-\u6D4B\u8BD5-\u52A8\u6001\u6D4B\u8BD5","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.98,"words":4794},"filePathRelative":"develop/test/dev-ut-x-junit5.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
