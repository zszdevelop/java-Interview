const e=JSON.parse('{"key":"v-04a639a0","path":"/arch/distributed/arch-z-lock.html","title":"\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u9501","lang":"zh-CN","frontmatter":{"order":30,"category":["\u67B6\u6784"],"summary":"\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u9501 1. \u4EC0\u4E48\u662F\u5206\u5E03\u5F0F\u9501 \\"\u8981\u4ECB\u7ECD\u5206\u5E03\u5F0F\u9501\uFF0C\u9996\u5148\u8981\u63D0\u5230\u4E0E\u5206\u5E03\u5F0F\u9501\u76F8\u5BF9\u5E94\u7684\u662F\u7EBF\u7A0B\u9501\u3001\u8FDB\u7A0B\u9501\u3002\\" \u7EBF\u7A0B\u9501\uFF1A\u4E3B\u8981\u7528\u6765\u7ED9\u65B9\u6CD5\u3001\u4EE3\u7801\u5757\u52A0\u9501\u3002\u5F53\u67D0\u4E2A\u65B9\u6CD5\u6216\u4EE3\u7801\u4F7F\u7528\u9501\uFF0C\u5728\u540C\u4E00\u65F6\u523B\u4EC5\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u8BE5\u65B9\u6CD5\u6216\u8BE5\u4EE3\u7801\u6BB5\u3002\u7EBF\u7A0B\u9501\u53EA\u5728\u540C\u4E00JVM\u4E2D\u6709\u6548\u679C\uFF0C\u56E0\u4E3A\u7EBF\u7A0B\u9501\u7684\u5B9E\u73B0\u5728\u6839\u672C\u4E0A\u662F\u4F9D\u9760\u7EBF\u7A0B\u4E4B\u95F4\u5171\u4EAB\u5185\u5B58\u5B9E\u73B0\u7684\uFF0C\u6BD4\u5982synchronized\u662F\u5171\u4EAB\u5BF9\u8C61\u5934\uFF0C\u663E\u793A\u9501Lock\u662F\u5171","head":[["meta",{"property":"og:url","content":"https://java.isture.com/arch/distributed/arch-z-lock.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u9501"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-03T15:00:39.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-03T15:00:39.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4EC0\u4E48\u662F\u5206\u5E03\u5F0F\u9501","slug":"_1-\u4EC0\u4E48\u662F\u5206\u5E03\u5F0F\u9501","link":"#_1-\u4EC0\u4E48\u662F\u5206\u5E03\u5F0F\u9501","children":[]},{"level":2,"title":"2. \u5206\u5E03\u5F0F\u9501\u7684\u8BBE\u8BA1\u539F\u5219","slug":"_2-\u5206\u5E03\u5F0F\u9501\u7684\u8BBE\u8BA1\u539F\u5219","link":"#_2-\u5206\u5E03\u5F0F\u9501\u7684\u8BBE\u8BA1\u539F\u5219","children":[]},{"level":2,"title":"3. \u57FA\u4E8E\u6570\u636E\u5E93\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\uFF1F\u6709\u4EC0\u4E48\u7F3A\u9677\uFF1F","slug":"_3-\u57FA\u4E8E\u6570\u636E\u5E93\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501-\u6709\u4EC0\u4E48\u7F3A\u9677","link":"#_3-\u57FA\u4E8E\u6570\u636E\u5E93\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501-\u6709\u4EC0\u4E48\u7F3A\u9677","children":[{"level":3,"title":"3.1 \u57FA\u4E8E\u6570\u636E\u5E93\u8868\uFF08\u9501\u8868\uFF0C\u5F88\u5C11\u4F7F\u7528\uFF09","slug":"_3-1-\u57FA\u4E8E\u6570\u636E\u5E93\u8868-\u9501\u8868-\u5F88\u5C11\u4F7F\u7528","link":"#_3-1-\u57FA\u4E8E\u6570\u636E\u5E93\u8868-\u9501\u8868-\u5F88\u5C11\u4F7F\u7528","children":[]},{"level":3,"title":"3.2 \u57FA\u4E8E\u60B2\u89C2\u9501","slug":"_3-2-\u57FA\u4E8E\u60B2\u89C2\u9501","link":"#_3-2-\u57FA\u4E8E\u60B2\u89C2\u9501","children":[]},{"level":3,"title":"3.3 \u57FA\u4E8E\u4E50\u89C2\u9501","slug":"_3-3-\u57FA\u4E8E\u4E50\u89C2\u9501","link":"#_3-3-\u57FA\u4E8E\u4E50\u89C2\u9501","children":[]},{"level":3,"title":"3.4 \u7F3A\u9677","slug":"_3-4-\u7F3A\u9677","link":"#_3-4-\u7F3A\u9677","children":[]}]},{"level":2,"title":"4. \u57FA\u4E8Eredis\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\uFF1F\u6709\u4EC0\u4E48\u7F3A\u9677\uFF1F","slug":"_4-\u57FA\u4E8Eredis\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501-\u6709\u4EC0\u4E48\u7F3A\u9677","link":"#_4-\u57FA\u4E8Eredis\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501-\u6709\u4EC0\u4E48\u7F3A\u9677","children":[{"level":3,"title":"4.1 set NX PX + Lua","slug":"_4-1-set-nx-px-lua","link":"#_4-1-set-nx-px-lua","children":[]},{"level":3,"title":"4.2 \u57FA\u4E8ERedLock\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501","slug":"_4-2-\u57FA\u4E8Eredlock\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501","link":"#_4-2-\u57FA\u4E8Eredlock\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501","children":[]},{"level":3,"title":"4.3 \u57FA\u4E8ERedis\u7684\u5BA2\u6237\u7AEF","slug":"_4-3-\u57FA\u4E8Eredis\u7684\u5BA2\u6237\u7AEF","link":"#_4-3-\u57FA\u4E8Eredis\u7684\u5BA2\u6237\u7AEF","children":[]},{"level":3,"title":"4.4 \u8FDB\u4E00\u6B65\u7406\u89E3","slug":"_4-4-\u8FDB\u4E00\u6B65\u7406\u89E3","link":"#_4-4-\u8FDB\u4E00\u6B65\u7406\u89E3","children":[]}]},{"level":2,"title":"5. \u57FA\u4E8Ezookeeper\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\uFF1F","slug":"_5-\u57FA\u4E8Ezookeeper\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501","link":"#_5-\u57FA\u4E8Ezookeeper\u5982\u4F55\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662217239000,"updatedTime":1662217239000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":11,"words":3301},"filePathRelative":"arch/distributed/arch-z-lock.md","localizedDate":"2022\u5E749\u67083\u65E5"}');export{e as data};
