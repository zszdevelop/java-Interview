const e=JSON.parse('{"key":"v-7e46eefa","path":"/db/es/elasticsearch-x-introduce-2.html","title":"ES\u8BE6\u89E3 - \u8BA4\u77E5\uFF1AElastic Stack\u751F\u6001\u548C\u573A\u666F\u65B9\u6848","lang":"zh-CN","frontmatter":{"order":20,"category":["ElasticSearch"],"summary":"ES\u8BE6\u89E3 - \u8BA4\u77E5\uFF1AElastic Stack\u751F\u6001\u548C\u573A\u666F\u65B9\u6848 \\" \u5728\u4E86\u89E3ElaticSearch\u4E4B\u540E\uFF0C\u6211\u4EEC\u8FD8\u8981\u4E86\u89E3Elastic\u80CC\u540E\u7684\u751F\u6001\u5373\u6211\u4EEC\u5E38\u8BF4\u7684ELK\uFF1B\u4E0E\u6B64\u540C\u65F6\uFF0C\u8FD8\u4F1A\u7ED9\u4F60\u5C55\u793AElasticSearch\u7684\u6848\u4F8B\u573A\u666F\uFF0C\u8BA9\u4F60\u5728\u5B66\u4E60ES\u524D\u5BF9\u5B83\u6709\u4E2A\u5168\u5C40\u7684\u5370\u8C61\u3002\\" 1. Elastic Stack\u751F\u6001 \\" Beats + Logstash + ElasticSear","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-x-introduce-2.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u8BA4\u77E5\uFF1AElastic Stack\u751F\u6001\u548C\u573A\u666F\u65B9\u6848"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-11T15:58:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-11T15:58:10.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Elastic Stack\u751F\u6001","slug":"_1-elastic-stack\u751F\u6001","link":"#_1-elastic-stack\u751F\u6001","children":[{"level":3,"title":"1.1 Beats","slug":"_1-1-beats","link":"#_1-1-beats","children":[]},{"level":3,"title":"1.2 Logstash","slug":"_1-2-logstash","link":"#_1-2-logstash","children":[]},{"level":3,"title":"1.3 ElasticSearch","slug":"_1-3-elasticsearch","link":"#_1-3-elasticsearch","children":[]},{"level":3,"title":"1.4 Kibana","slug":"_1-4-kibana","link":"#_1-4-kibana","children":[]}]},{"level":2,"title":"2. \u4ECE\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u770BES Stack\u7684\u53D1\u5C55","slug":"_2-\u4ECE\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u770Bes-stack\u7684\u53D1\u5C55","link":"#_2-\u4ECE\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF\u770Bes-stack\u7684\u53D1\u5C55","children":[{"level":3,"title":"2.1 beats+elasticsearch+kibana","slug":"_2-1-beats-elasticsearch-kibana","link":"#_2-1-beats-elasticsearch-kibana","children":[]},{"level":3,"title":"2.2 beats+logstath+elasticsearch+kibana","slug":"_2-2-beats-logstath-elasticsearch-kibana","link":"#_2-2-beats-logstath-elasticsearch-kibana","children":[]},{"level":3,"title":"2.3 beats+MQ+logstash+elasticsearch+kibana","slug":"_2-3-beats-mq-logstash-elasticsearch-kibana","link":"#_2-3-beats-mq-logstash-elasticsearch-kibana","children":[]}]},{"level":2,"title":"3. Elastic Stack\u6700\u4F73\u5B9E\u8DF5","slug":"_3-elastic-stack\u6700\u4F73\u5B9E\u8DF5","link":"#_3-elastic-stack\u6700\u4F73\u5B9E\u8DF5","children":[{"level":3,"title":"3.1 \u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF","slug":"_3-1-\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF","link":"#_3-1-\u65E5\u5FD7\u6536\u96C6\u7CFB\u7EDF","children":[]},{"level":3,"title":"3.2 Metric\u6536\u96C6\u548CAPM\u6027\u80FD\u76D1\u63A7","slug":"_3-2-metric\u6536\u96C6\u548Capm\u6027\u80FD\u76D1\u63A7","link":"#_3-2-metric\u6536\u96C6\u548Capm\u6027\u80FD\u76D1\u63A7","children":[]},{"level":3,"title":"3.3 \u591A\u6570\u636E\u4E2D\u5FC3\u65B9\u6848","slug":"_3-3-\u591A\u6570\u636E\u4E2D\u5FC3\u65B9\u6848","link":"#_3-3-\u591A\u6570\u636E\u4E2D\u5FC3\u65B9\u6848","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1665503890000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":5.69,"words":1706},"filePathRelative":"db/es/elasticsearch-x-introduce-2.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
