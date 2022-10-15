const e=JSON.parse('{"key":"v-4e8fe46f","path":"/db/es/elasticsearch-x-agg-metric.html","title":"ES\u8BE6\u89E3 - \u805A\u5408\uFF1A\u805A\u5408\u67E5\u8BE2\u4E4BMetric\u805A\u5408\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"order":130,"category":["ElasticSearch"],"summary":"ES\u8BE6\u89E3 - \u805A\u5408\uFF1A\u805A\u5408\u67E5\u8BE2\u4E4BMetric\u805A\u5408\u8BE6\u89E3 \\" \u524D\u6587\u4E3B\u8981\u8BB2\u4E86 ElasticSearch\u63D0\u4F9B\u7684\u4E09\u79CD\u805A\u5408\u65B9\u5F0F\u4E4B\u6876\u805A\u5408\uFF08Bucket Aggregation)\uFF0C\u672C\u6587\u4E3B\u8981\u8BB2\u8BB2\u6307\u6807\u805A\u5408\uFF08Metric Aggregation)\u3002\\" 1. \u5982\u4F55\u7406\u89E3metric\u805A\u5408 \\" \u5728bucket\u805A\u5408\u4E2D\uFF0C\u6211\u753B\u4E86\u4E00\u5F20\u56FE\u8F85\u52A9\u4F60\u6784\u7B51\u4F53\u7CFB\uFF0C\u90A3\u4E48metric\u805A\u5408\u53C8\u5982\u4F55\u7406\u89E3\u5462\uFF1F\\" \u5982\u679C\u4F60","head":[["meta",{"property":"og:url","content":"https://java.isture.com/db/es/elasticsearch-x-agg-metric.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ES\u8BE6\u89E3 - \u805A\u5408\uFF1A\u805A\u5408\u67E5\u8BE2\u4E4BMetric\u805A\u5408\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-15T14:22:28.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-10-15T14:22:28.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u5982\u4F55\u7406\u89E3metric\u805A\u5408","slug":"_1-\u5982\u4F55\u7406\u89E3metric\u805A\u5408","link":"#_1-\u5982\u4F55\u7406\u89E3metric\u805A\u5408","children":[]},{"level":2,"title":"2. \u5355\u503C\u5206\u6790: \u6807\u51C6stat\u7C7B\u578B","slug":"_2-\u5355\u503C\u5206\u6790-\u6807\u51C6stat\u7C7B\u578B","link":"#_2-\u5355\u503C\u5206\u6790-\u6807\u51C6stat\u7C7B\u578B","children":[{"level":3,"title":"2.1 avg \u5E73\u5747\u503C","slug":"_2-1-avg-\u5E73\u5747\u503C","link":"#_2-1-avg-\u5E73\u5747\u503C","children":[]},{"level":3,"title":"2.2 max \u6700\u5927\u503C","slug":"_2-2-max-\u6700\u5927\u503C","link":"#_2-2-max-\u6700\u5927\u503C","children":[]},{"level":3,"title":"2.3 min \u6700\u5C0F\u503C","slug":"_2-3-min-\u6700\u5C0F\u503C","link":"#_2-3-min-\u6700\u5C0F\u503C","children":[]},{"level":3,"title":"2.4 sum \u548C","slug":"_2-4-sum-\u548C","link":"#_2-4-sum-\u548C","children":[]},{"level":3,"title":"2.5 value_count \u6570\u91CF","slug":"_2-5-value-count-\u6570\u91CF","link":"#_2-5-value-count-\u6570\u91CF","children":[]}]},{"level":2,"title":"3. \u5355\u503C\u5206\u6790: \u5176\u5B83\u7C7B\u578B","slug":"_3-\u5355\u503C\u5206\u6790-\u5176\u5B83\u7C7B\u578B","link":"#_3-\u5355\u503C\u5206\u6790-\u5176\u5B83\u7C7B\u578B","children":[{"level":3,"title":"3.1 weighted_avg \u5E26\u6743\u91CD\u7684avg","slug":"_3-1-weighted-avg-\u5E26\u6743\u91CD\u7684avg","link":"#_3-1-weighted-avg-\u5E26\u6743\u91CD\u7684avg","children":[]},{"level":3,"title":"3.2 cardinality \u57FA\u6570\uFF08distinct\u53BB\u91CD\uFF09","slug":"_3-2-cardinality-\u57FA\u6570-distinct\u53BB\u91CD","link":"#_3-2-cardinality-\u57FA\u6570-distinct\u53BB\u91CD","children":[]},{"level":3,"title":"3.3 median_absolute_deviation \u4E2D\u4F4D\u503C","slug":"_3-3-median-absolute-deviation-\u4E2D\u4F4D\u503C","link":"#_3-3-median-absolute-deviation-\u4E2D\u4F4D\u503C","children":[]}]},{"level":2,"title":"4. \u975E\u5355\u503C\u5206\u6790\uFF1Astats\u578B","slug":"_4-\u975E\u5355\u503C\u5206\u6790-stats\u578B","link":"#_4-\u975E\u5355\u503C\u5206\u6790-stats\u578B","children":[{"level":3,"title":"4.1  stats \u5305\u542Bavg,max,min,sum\u548Ccount","slug":"_4-1-stats-\u5305\u542Bavg-max-min-sum\u548Ccount","link":"#_4-1-stats-\u5305\u542Bavg-max-min-sum\u548Ccount","children":[]},{"level":3,"title":"4.2 matrix_stats \u9488\u5BF9\u77E9\u9635\u6A21\u578B","slug":"_4-2-matrix-stats-\u9488\u5BF9\u77E9\u9635\u6A21\u578B","link":"#_4-2-matrix-stats-\u9488\u5BF9\u77E9\u9635\u6A21\u578B","children":[]},{"level":3,"title":"4.3 extended_stats","slug":"_4-3-extended-stats","link":"#_4-3-extended-stats","children":[]},{"level":3,"title":"4.4 string_stats \u9488\u5BF9\u5B57\u7B26\u4E32","slug":"_4-4-string-stats-\u9488\u5BF9\u5B57\u7B26\u4E32","link":"#_4-4-string-stats-\u9488\u5BF9\u5B57\u7B26\u4E32","children":[]}]},{"level":2,"title":"5. \u975E\u5355\u503C\u5206\u6790\uFF1A\u767E\u5206\u6570\u578B","slug":"_5-\u975E\u5355\u503C\u5206\u6790-\u767E\u5206\u6570\u578B","link":"#_5-\u975E\u5355\u503C\u5206\u6790-\u767E\u5206\u6570\u578B","children":[{"level":3,"title":"5.1  percentiles \u767E\u5206\u6570\u8303\u56F4","slug":"_5-1-percentiles-\u767E\u5206\u6570\u8303\u56F4","link":"#_5-1-percentiles-\u767E\u5206\u6570\u8303\u56F4","children":[]},{"level":3,"title":"5.2 percentile_ranks \u767E\u5206\u6570\u6392\u884C","slug":"_5-2-percentile-ranks-\u767E\u5206\u6570\u6392\u884C","link":"#_5-2-percentile-ranks-\u767E\u5206\u6570\u6392\u884C","children":[]}]},{"level":2,"title":"6. \u975E\u5355\u503C\u5206\u6790\uFF1A\u5730\u7406\u4F4D\u7F6E\u578B","slug":"_6-\u975E\u5355\u503C\u5206\u6790-\u5730\u7406\u4F4D\u7F6E\u578B","link":"#_6-\u975E\u5355\u503C\u5206\u6790-\u5730\u7406\u4F4D\u7F6E\u578B","children":[{"level":3,"title":"6.1  geo_bounds Geo bounds","slug":"_6-1-geo-bounds-geo-bounds","link":"#_6-1-geo-bounds-geo-bounds","children":[]},{"level":3,"title":"6.2 geo_centroid Geo-centroid","slug":"_6-2-geo-centroid-geo-centroid","link":"#_6-2-geo-centroid-geo-centroid","children":[]},{"level":3,"title":"6.3 geo_line Geo-Line","slug":"_6-3-geo-line-geo-line","link":"#_6-3-geo-line-geo-line","children":[]}]},{"level":2,"title":"7. \u975E\u5355\u503C\u5206\u6790\uFF1ATop\u578B","slug":"_7-\u975E\u5355\u503C\u5206\u6790-top\u578B","link":"#_7-\u975E\u5355\u503C\u5206\u6790-top\u578B","children":[{"level":3,"title":"7.1 top_hits \u5206\u6876\u540E\u7684top hits","slug":"_7-1-top-hits-\u5206\u6876\u540E\u7684top-hits","link":"#_7-1-top-hits-\u5206\u6876\u540E\u7684top-hits","children":[]},{"level":3,"title":"7.2 top_metrics","slug":"_7-2-top-metrics","link":"#_7-2-top-metrics","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1662707287000,"updatedTime":1665843748000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":2}]},"readingTime":{"minutes":6.38,"words":1914},"filePathRelative":"db/es/elasticsearch-x-agg-metric.md","localizedDate":"2022\u5E749\u67089\u65E5"}');export{e as data};
