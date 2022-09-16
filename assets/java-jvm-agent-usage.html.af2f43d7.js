const e=JSON.parse('{"key":"v-2c8cebb5","path":"/java/jvm/java-jvm-agent-usage.html","title":"\u8C03\u8BD5\u6392\u9519 - Java\u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406","lang":"zh-CN","frontmatter":{"order":300,"category":["Java","JVM"],"summary":"\u8C03\u8BD5\u6392\u9519 - Java\u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406 \\" \u672C\u6587\u8F6C\u8F7D\u81EA \u7F8E\u56E2\u6280\u672F\u56E2\u961F\u80E1\u5065\u7684Java \u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406\u53CA\u5B9E\u8DF5, \u901A\u8FC7\u5B66\u4E60java agent\u65B9\u5F0F\u8FDB\u884C\u52A8\u6001\u8C03\u8BD5\u4E86\u89E3\u76EE\u524D\u5F88\u591A\u5927\u5382\u5F00\u6E90\u7684\u4E00\u4E9B\u57FA\u4E8E\u6B64\u7684\u8C03\u8BD5\u5DE5\u5177\u3002\\" 1. \u7B80\u4ECB \u65AD\u70B9\u8C03\u8BD5\u662F\u6211\u4EEC\u6700\u5E38\u4F7F\u7528\u7684\u8C03\u8BD5\u624B\u6BB5\uFF0C\u5B83\u53EF\u4EE5\u83B7\u53D6\u5230\u65B9\u6CD5\u6267\u884C\u8FC7\u7A0B\u4E2D\u7684\u53D8\u91CF\u4FE1\u606F\uFF0C\u5E76\u53EF\u4EE5\u89C2\u5BDF\u5230\u65B9\u6CD5\u7684\u6267\u884C\u8DEF\u5F84\u3002\u4F46\u65AD\u70B9\u8C03\u8BD5\u4F1A\u5728\u65AD\u70B9\u4F4D\u7F6E\u505C\u987F\uFF0C\u4F7F\u5F97\u6574\u4E2A\u5E94\u7528\u505C\u6B62\u54CD","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/java-jvm-agent-usage.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u8C03\u8BD5\u6392\u9519 - Java\u52A8\u6001\u8C03\u8BD5\u6280\u672F\u539F\u7406"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. Agent\u7684\u5B9E\u73B0\u6A21\u5F0F","slug":"_2-agent\u7684\u5B9E\u73B0\u6A21\u5F0F","link":"#_2-agent\u7684\u5B9E\u73B0\u6A21\u5F0F","children":[{"level":3,"title":"2.1 \u901A\u8FC7Java Instrumentation API","slug":"_2-1-\u901A\u8FC7java-instrumentation-api","link":"#_2-1-\u901A\u8FC7java-instrumentation-api","children":[]}]},{"level":2,"title":"3. \u542F\u52A8\u65F6\u52A0\u8F7DAgent","slug":"_3-\u542F\u52A8\u65F6\u52A0\u8F7Dagent","link":"#_3-\u542F\u52A8\u65F6\u52A0\u8F7Dagent","children":[{"level":3,"title":"3.1 \u53C2\u6570\u89E3\u6790","slug":"_3-1-\u53C2\u6570\u89E3\u6790","link":"#_3-1-\u53C2\u6570\u89E3\u6790","children":[]},{"level":3,"title":"3.2 \u6267\u884C\u52A0\u8F7D\u64CD\u4F5C","slug":"_3-2-\u6267\u884C\u52A0\u8F7D\u64CD\u4F5C","link":"#_3-2-\u6267\u884C\u52A0\u8F7D\u64CD\u4F5C","children":[]},{"level":3,"title":"3.3  instrument\u52A8\u6001\u94FE\u63A5\u5E93","slug":"_3-3-instrument\u52A8\u6001\u94FE\u63A5\u5E93","link":"#_3-3-instrument\u52A8\u6001\u94FE\u63A5\u5E93","children":[]}]},{"level":2,"title":"4. \u8FD0\u884C\u65F6\u52A0\u8F7DAgent","slug":"_4-\u8FD0\u884C\u65F6\u52A0\u8F7Dagent","link":"#_4-\u8FD0\u884C\u65F6\u52A0\u8F7Dagent","children":[{"level":3,"title":"4.1 AttachListener","slug":"_4-1-attachlistener","link":"#_4-1-attachlistener","children":[]},{"level":3,"title":"4.2 \u8FD0\u884C\u65F6\u52A0\u8F7DAgent\u7684\u5B9E\u73B0","slug":"_4-2-\u8FD0\u884C\u65F6\u52A0\u8F7Dagent\u7684\u5B9E\u73B0","link":"#_4-2-\u8FD0\u884C\u65F6\u52A0\u8F7Dagent\u7684\u5B9E\u73B0","children":[]},{"level":3,"title":"4.3 load\u547D\u4EE4\u7684\u5B9E\u73B0","slug":"_4-3-load\u547D\u4EE4\u7684\u5B9E\u73B0","link":"#_4-3-load\u547D\u4EE4\u7684\u5B9E\u73B0","children":[]}]},{"level":2,"title":"5. \u52A8\u6001\u5B57\u8282\u7801\u4FEE\u6539\u7684\u9650\u5236","slug":"_5-\u52A8\u6001\u5B57\u8282\u7801\u4FEE\u6539\u7684\u9650\u5236","link":"#_5-\u52A8\u6001\u5B57\u8282\u7801\u4FEE\u6539\u7684\u9650\u5236","children":[]},{"level":2,"title":"6. \u91CD\u5B9A\u4E49\u7C7B\u5B57\u8282\u7801\u7684\u5B9E\u73B0\u7EC6\u8282","slug":"_6-\u91CD\u5B9A\u4E49\u7C7B\u5B57\u8282\u7801\u7684\u5B9E\u73B0\u7EC6\u8282","link":"#_6-\u91CD\u5B9A\u4E49\u7C7B\u5B57\u8282\u7801\u7684\u5B9E\u73B0\u7EC6\u8282","children":[]},{"level":2,"title":"7. Java-debug-tool","slug":"_7-java-debug-tool","link":"#_7-java-debug-tool","children":[{"level":3,"title":"7.1  Java-debug-tool\u6574\u4F53\u67B6\u6784","slug":"_7-1-java-debug-tool\u6574\u4F53\u67B6\u6784","link":"#_7-1-java-debug-tool\u6574\u4F53\u67B6\u6784","children":[]},{"level":3,"title":"7.2 Java-debug-tool\u7684\u5B57\u8282\u7801\u589E\u5F3A\u65B9\u6848","slug":"_7-2-java-debug-tool\u7684\u5B57\u8282\u7801\u589E\u5F3A\u65B9\u6848","link":"#_7-2-java-debug-tool\u7684\u5B57\u8282\u7801\u589E\u5F3A\u65B9\u6848","children":[]},{"level":3,"title":"7.3 Java-debug-tool\u7684\u547D\u4EE4\u8BBE\u8BA1\u4E0E\u5B9E\u73B0","slug":"_7-3-java-debug-tool\u7684\u547D\u4EE4\u8BBE\u8BA1\u4E0E\u5B9E\u73B0","link":"#_7-3-java-debug-tool\u7684\u547D\u4EE4\u8BBE\u8BA1\u4E0E\u5B9E\u73B0","children":[]},{"level":3,"title":"7.4 Java-debug-tool\u4E0E\u540C\u7C7B\u4EA7\u54C1\u5BF9\u6BD4\u5206\u6790","slug":"_7-4-java-debug-tool\u4E0E\u540C\u7C7B\u4EA7\u54C1\u5BF9\u6BD4\u5206\u6790","link":"#_7-4-java-debug-tool\u4E0E\u540C\u7C7B\u4EA7\u54C1\u5BF9\u6BD4\u5206\u6790","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":30.44,"words":9133},"filePathRelative":"java/jvm/java-jvm-agent-usage.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
