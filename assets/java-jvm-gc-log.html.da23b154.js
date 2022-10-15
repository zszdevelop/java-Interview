const e=JSON.parse('{"key":"v-cd57169e","path":"/java/jvm/java-jvm-gc-log.html","title":"gc\u65E5\u5FD7\u5206\u6790","lang":"zh-CN","frontmatter":{"category":["Java","JVM"],"summary":"gc\u65E5\u5FD7\u5206\u6790 1. \u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u5783\u573E\u6536\u96C6 \u9996\u5148\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u95EE\u9898\uFF0C\u90A3\u5C31\u662F\u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u5783\u573E\u56DE\u6536\uFF1F \u5728Java\u4E2D\uFF0CGC\u662F\u7531JVM\u81EA\u52A8\u5B8C\u6210\u7684\uFF0C\u6839\u636EJVM\u7CFB\u7EDF\u73AF\u5883\u800C\u5B9A\uFF0C\u6240\u4EE5\u65F6\u673A\u662F\u4E0D\u786E\u5B9A\u7684\u3002 \u5F53\u7136\uFF0C\u6211\u4EEC\u53EF\u4EE5\u624B\u52A8\u8FDB\u884C\u5783\u573E\u56DE\u6536\uFF0C \u6BD4\u5982\u8C03\u7528System.gc()\u65B9\u6CD5\u901A\u77E5JVM\u8FDB\u884C\u4E00\u6B21\u5783\u573E\u56DE\u6536\uFF0C\u4F46\u662F\u5177\u4F53\u4EC0\u4E48\u65F6\u523B\u8FD0\u884C\u4E5F\u65E0\u6CD5\u63A7\u5236\u3002\u4E5F\u5C31\u662F\u8BF4System.gc()\u53EA\u662F\u901A\u77E5\u8981\u56DE\u6536\uFF0C\u4EC0","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/jvm/java-jvm-gc-log.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"gc\u65E5\u5FD7\u5206\u6790"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T14:22:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-15T14:22:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u5783\u573E\u6536\u96C6","slug":"_1-\u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u5783\u573E\u6536\u96C6","link":"#_1-\u4EC0\u4E48\u65F6\u5019\u4F1A\u53D1\u751F\u5783\u573E\u6536\u96C6","children":[]},{"level":2,"title":"2. \u600E\u4E48\u62FF\u5230GC\u65E5\u5FD7","slug":"_2-\u600E\u4E48\u62FF\u5230gc\u65E5\u5FD7","link":"#_2-\u600E\u4E48\u62FF\u5230gc\u65E5\u5FD7","children":[]},{"level":2,"title":"3. gc\u65E5\u5FD7\u5206\u6790","slug":"_3-gc\u65E5\u5FD7\u5206\u6790","link":"#_3-gc\u65E5\u5FD7\u5206\u6790","children":[{"level":3,"title":"3.1 \u73AF\u5883\u4FE1\u606F","slug":"_3-1-\u73AF\u5883\u4FE1\u606F","link":"#_3-1-\u73AF\u5883\u4FE1\u606F","children":[]},{"level":3,"title":"3.2 \u914D\u7F6E\u7684\u53C2\u6570\u4FE1\u606F","slug":"_3-2-\u914D\u7F6E\u7684\u53C2\u6570\u4FE1\u606F","link":"#_3-2-\u914D\u7F6E\u7684\u53C2\u6570\u4FE1\u606F","children":[]},{"level":3,"title":"3.3 \u771F\u6B63\u7684GC\u65E5\u5FD7","slug":"_3-3-\u771F\u6B63\u7684gc\u65E5\u5FD7","link":"#_3-3-\u771F\u6B63\u7684gc\u65E5\u5FD7","children":[]}]},{"level":2,"title":"4. \u5899\u949F\u65F6\u95F4\u548Ccpu\u65F6\u95F4","slug":"_4-\u5899\u949F\u65F6\u95F4\u548Ccpu\u65F6\u95F4","link":"#_4-\u5899\u949F\u65F6\u95F4\u548Ccpu\u65F6\u95F4","children":[]},{"level":2,"title":"5. CMS\u65E5\u5FD7\u5206\u6790","slug":"_5-cms\u65E5\u5FD7\u5206\u6790","link":"#_5-cms\u65E5\u5FD7\u5206\u6790","children":[]},{"level":2,"title":"6. G1\u65E5\u5FD7\u5206\u6790","slug":"_6-g1\u65E5\u5FD7\u5206\u6790","link":"#_6-g1\u65E5\u5FD7\u5206\u6790","children":[]},{"level":2,"title":"7. \u5229\u7528\u5DE5\u5177\u5206\u6790GC\u65E5\u5FD7","slug":"_7-\u5229\u7528\u5DE5\u5177\u5206\u6790gc\u65E5\u5FD7","link":"#_7-\u5229\u7528\u5DE5\u5177\u5206\u6790gc\u65E5\u5FD7","children":[{"level":3,"title":"7.1 gceasy","slug":"_7-1-gceasy","link":"#_7-1-gceasy","children":[]},{"level":3,"title":"7.2 GCViewer","slug":"_7-2-gcviewer","link":"#_7-2-gcviewer","children":[]}]},{"level":2,"title":"8. \u5404GC\u6536\u96C6\u5668\u5BF9\u6BD4\u62A5\u544A","slug":"_8-\u5404gc\u6536\u96C6\u5668\u5BF9\u6BD4\u62A5\u544A","link":"#_8-\u5404gc\u6536\u96C6\u5668\u5BF9\u6BD4\u62A5\u544A","children":[{"level":3,"title":"8.1 \u65B0\u751F\u4EE3Parallel Scavenge+\u8001\u5E74\u4EE3Parallel Old","slug":"_8-1-\u65B0\u751F\u4EE3parallel-scavenge-\u8001\u5E74\u4EE3parallel-old","link":"#_8-1-\u65B0\u751F\u4EE3parallel-scavenge-\u8001\u5E74\u4EE3parallel-old","children":[]},{"level":3,"title":"8.2 \u65B0\u751F\u4EE3ParNew \u8001\u5E74\u4EE3 CMS","slug":"_8-2-\u65B0\u751F\u4EE3parnew-\u8001\u5E74\u4EE3-cms","link":"#_8-2-\u65B0\u751F\u4EE3parnew-\u8001\u5E74\u4EE3-cms","children":[]},{"level":3,"title":"8.3 G1\u6536\u96C6\u5668\uFF08\u72EC\u7ACB\u5B8C\u6210\uFF09","slug":"_8-3-g1\u6536\u96C6\u5668-\u72EC\u7ACB\u5B8C\u6210","link":"#_8-3-g1\u6536\u96C6\u5668-\u72EC\u7ACB\u5B8C\u6210","children":[]}]},{"level":2,"title":"9. GC\u539F\u56E0","slug":"_9-gc\u539F\u56E0","link":"#_9-gc\u539F\u56E0","children":[]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663230492000,"updatedTime":1665843748000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":3}]},"readingTime":{"minutes":13.25,"words":3974},"filePathRelative":"java/jvm/java-jvm-gc-log.md","localizedDate":"2022\u5E749\u670815\u65E5"}');export{e as data};
