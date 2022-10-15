const e=JSON.parse('{"key":"v-1520859c","path":"/db/mysql/mysql-x-sharding-interview.html","title":"MySQL - \u5206\u8868\u5206\u5E93\uFF08\u9762\u8BD5\u573A\u666F\u5207\u5165\uFF09","lang":"zh-CN","frontmatter":{"order":312,"category":["Mysql","\u6570\u636E\u5E93"],"summary":"MySQL - \u5206\u8868\u5206\u5E93\uFF08\u9762\u8BD5\u573A\u666F\u5207\u5165\uFF09 1. \u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF1F \u9762\u8BD5\u5B98\uFF1A\u5C0F\u4F19\u5B50\uFF0C\u770B\u5230\u4F60\u7684\u7B80\u5386\u4E0A\u9762\u5199\u4E86\u9879\u76EE\u4E2D\u6709\u5BF9MySQL\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF0C\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF1F \u6211\uFF1A\u5F53MySQL\u5355\u8868\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u6BD4\u5982\u8D85\u8FC75\u5343\u4E07\u6761\u7684\u65F6\u5019\uFF0C\u8BFB\u5199\u6027\u80FD\u53D8\u5F97\u5F88\u5DEE\u3002\u800C\u4E14\u5E38\u89C4\u7684\u4F18\u5316\u624B\u6BB5\u5DF2\u7ECF\u4E0D\u8D77\u4F5C\u7528\u4E86\uFF0C\u6BD4\u5982\uFF1ASQL\u8C03\u4F18\u3001\u6DFB\u52A0\u7D22\u5F15\u3001\u4E3B\u4ECE\u590D\u5236\u3001\u8BFB\u5199\u5206\u79BB\u3002\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u5230MySQL\u7EC8\u6781\u4F18\u5316\u65B9\u6848","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/mysql/mysql-x-sharding-interview.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"MySQL - \u5206\u8868\u5206\u5E93\uFF08\u9762\u8BD5\u573A\u666F\u5207\u5165\uFF09"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T14:22:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-15T14:22:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868\uFF1F","slug":"_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868","link":"#_1-\u4E3A\u4EC0\u4E48\u8981\u8FDB\u884C\u5206\u5E93\u5206\u8868","children":[]},{"level":2,"title":"2. \u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868\uFF1F","slug":"_2-\u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868","link":"#_2-\u600E\u4E48\u5224\u65AD\u9879\u76EE\u662F\u9700\u8981\u5206\u5E93\u8FD8\u662F\u8981\u5206\u8868","children":[]},{"level":2,"title":"3. \u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848\uFF1F","slug":"_3-\u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848","link":"#_3-\u5206\u5E93\u5206\u8868\u6709\u54EA\u4E9B\u62C6\u5206\u65B9\u6848","children":[]},{"level":2,"title":"4. \u5206\u5E93\u5206\u8868\u7F3A\u70B9\uFF1F","slug":"_4-\u5206\u5E93\u5206\u8868\u7F3A\u70B9","link":"#_4-\u5206\u5E93\u5206\u8868\u7F3A\u70B9","children":[]},{"level":2,"title":"5. \u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3\uFF1F","slug":"_5-\u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3","link":"#_5-\u5206\u5E93\u5206\u8868\u95EE\u9898\u5982\u4F55\u89E3\u51B3","children":[{"level":3,"title":"5.1 \u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898\uFF1A","slug":"_5-1-\u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898","link":"#_5-1-\u8DE8\u5E93\u67E5\u8BE2\u95EE\u9898","children":[]},{"level":3,"title":"5.2 \u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898\uFF1A","slug":"_5-2-\u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898","link":"#_5-2-\u591A\u8868\u5206\u9875\u67E5\u8BE2\u95EE\u9898","children":[]},{"level":3,"title":"5.3 \u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898\uFF1A","slug":"_5-3-\u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898","link":"#_5-3-\u8DE8\u5E93\u4E8B\u52A1\u95EE\u9898","children":[]}]},{"level":2,"title":"6. \u603B\u7ED3","slug":"_6-\u603B\u7ED3","link":"#_6-\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1665843748000,"updatedTime":1665843748000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.57,"words":1371},"filePathRelative":"db/mysql/mysql-x-sharding-interview.md","localizedDate":"2022\u5E7410\u670815\u65E5"}');export{e as data};
