const e=JSON.parse('{"key":"v-339d73d2","path":"/java/jvm/java-jvm-optimization.html","title":"\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212 JVM \u6027\u80FD\u8C03\u4F18","lang":"zh-CN","frontmatter":{"summary":"\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212 JVM \u6027\u80FD\u8C03\u4F18 JVM\u6027\u80FD\u8C03\u4F18\u6D89\u53CA\u5230\u65B9\u65B9\u9762\u9762\u7684\u53D6\u820D\uFF0C\u5F80\u5F80\u662F\u7275\u4E00\u53D1\u800C\u52A8\u5168\u8EAB\uFF0C\u9700\u8981\u5168\u76D8\u8003\u8651\u5404\u65B9\u9762\u7684\u5F71\u54CD\u3002\u4F46\u4E5F\u6709\u4E00\u4E9B\u57FA\u7840\u7684\u7406\u8BBA\u548C\u539F\u5219\uFF0C\u7406\u89E3\u8FD9\u4E9B\u7406\u8BBA\u5E76\u9075\u5FAA\u8FD9\u4E9B\u539F\u5219\u4F1A\u8BA9\u4F60\u7684\u6027\u80FD\u8C03\u4F18\u4EFB\u52A1\u5C06\u4F1A\u66F4\u52A0\u8F7B\u677E\u3002\u4E3A\u4E86\u66F4\u597D\u7684\u7406\u89E3\u672C\u7BC7\u6240\u4ECB\u7ECD\u7684\u5185\u5BB9\u3002\u4F60\u9700\u8981\u5DF2\u7ECF\u4E86\u89E3\u548C\u9075\u5FAA\u4EE5\u4E0B\u5185\u5BB9: \\" 1\u3001\u5DF2\u4E86\u89E3jvm \u5783\u573E\u6536\u96C6\u5668\\" \\" 2\u3001\u5DF2\u4E86\u89E3jvm \u6027\u80FD\u76D1\u63A7\u5E38\u7528\u5DE5\u5177\\" \\" 3\u3001\u80FD\u591F","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/java-jvm-optimization.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u5982\u4F55\u5408\u7406\u7684\u89C4\u5212 JVM \u6027\u80FD\u8C03\u4F18"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-15T08:28:12.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-15T08:28:12.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21","slug":"_1-\u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21","link":"#_1-\u6027\u80FD\u8C03\u4F18\u7684\u5C42\u6B21","children":[{"level":3,"title":"1.1 \u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684","slug":"_1-1-\u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684","link":"#_1-1-\u786E\u4FDD\u9879\u76EE\u67B6\u6784\u8C03\u4F18\u4E0E\u4EE3\u7801\u8C03\u4F18\u662F\u6700\u4F18\u7684","children":[]},{"level":3,"title":"1.2 \u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807\uFF0C\u627E\u5230\u6027\u80FD\u74F6\u9888","slug":"_1-2-\u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807-\u627E\u5230\u6027\u80FD\u74F6\u9888","link":"#_1-2-\u660E\u786E\u6027\u80FD\u4F18\u5316\u76EE\u6807-\u627E\u5230\u6027\u80FD\u74F6\u9888","children":[]}]},{"level":2,"title":"2. jvm\u8C03\u4F18\u6D41\u7A0B","slug":"_2-jvm\u8C03\u4F18\u6D41\u7A0B","link":"#_2-jvm\u8C03\u4F18\u6D41\u7A0B","children":[{"level":3,"title":"2.1 \u6027\u80FD\u5B9A\u4E49","slug":"_2-1-\u6027\u80FD\u5B9A\u4E49","link":"#_2-1-\u6027\u80FD\u5B9A\u4E49","children":[]},{"level":3,"title":"2.2 JVM\u8C03\u4F18\u539F\u5219","slug":"_2-2-jvm\u8C03\u4F18\u539F\u5219","link":"#_2-2-jvm\u8C03\u4F18\u539F\u5219","children":[]},{"level":3,"title":"2.3 \u6027\u80FD\u8C03\u4F18\u6B65\u9AA4","slug":"_2-3-\u6027\u80FD\u8C03\u4F18\u6B65\u9AA4","link":"#_2-3-\u6027\u80FD\u8C03\u4F18\u6B65\u9AA4","children":[]}]},{"level":2,"title":"3. \u786E\u5B9A\u5185\u5B58\u5360\u7528","slug":"_3-\u786E\u5B9A\u5185\u5B58\u5360\u7528","link":"#_3-\u786E\u5B9A\u5185\u5B58\u5360\u7528","children":[{"level":3,"title":"3.1 \u8FD0\u884C\u9636\u6BB5","slug":"_3-1-\u8FD0\u884C\u9636\u6BB5","link":"#_3-1-\u8FD0\u884C\u9636\u6BB5","children":[]},{"level":3,"title":"3.2 jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570","slug":"_3-2-jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570","link":"#_3-2-jvm\u5185\u5B58\u5206\u914D\u548C\u53C2\u6570","children":[]},{"level":3,"title":"2.3 \u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F","slug":"_2-3-\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F","link":"#_2-3-\u8BA1\u7B97\u6D3B\u8DC3\u6570\u636E\u5927\u5C0F","children":[]}]},{"level":2,"title":"4.\u5EF6\u8FDF\u8C03\u4F18","slug":"_4-\u5EF6\u8FDF\u8C03\u4F18","link":"#_4-\u5EF6\u8FDF\u8C03\u4F18","children":[{"level":3,"title":"4.1 \u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42","slug":"_4-1-\u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42","link":"#_4-1-\u7CFB\u7EDF\u5EF6\u8FDF\u9700\u6C42","children":[]},{"level":3,"title":"4.2 \u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F","slug":"_4-2-\u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F","link":"#_4-2-\u4F18\u5316\u65B0\u751F\u4EE3\u5927\u5C0F","children":[]},{"level":3,"title":"4.3 \u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F","slug":"_4-3-\u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F","link":"#_4-3-\u4F18\u5316\u8001\u5E74\u4EE3\u5927\u5C0F","children":[]}]},{"level":2,"title":"\u5BF9\u8C61\u63D0\u5347\u7387","slug":"\u5BF9\u8C61\u63D0\u5347\u7387","link":"#\u5BF9\u8C61\u63D0\u5347\u7387","children":[]},{"level":2,"title":"5. \u541E\u5410\u91CF\u8C03\u4F18","slug":"_5-\u541E\u5410\u91CF\u8C03\u4F18","link":"#_5-\u541E\u5410\u91CF\u8C03\u4F18","children":[]},{"level":2,"title":"6. \u6700\u540E","slug":"_6-\u6700\u540E","link":"#_6-\u6700\u540E","children":[{"level":3,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}]}],"git":{"createdTime":1663230492000,"updatedTime":1663230492000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":15.94,"words":4783},"filePathRelative":"java/jvm/java-jvm-optimization.md","localizedDate":"2022\u5E749\u670815\u65E5"}');export{e as data};
