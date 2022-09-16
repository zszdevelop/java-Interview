const e=JSON.parse('{"key":"v-1fae7632","path":"/dependencies/timer/springboot-x-task-executor-timer.html","title":"SpringBoot\u5B9A\u65F6\u4EFB\u52A1-ScheduleExecutorService\u5B9E\u73B0\u65B9\u5F0F","lang":"zh-CN","frontmatter":{"order":20,"summary":"SpringBoot\u5B9A\u65F6\u4EFB\u52A1-ScheduleExecutorService\u5B9E\u73B0\u65B9\u5F0F \\"\u4E0A\u6587\u4ECB\u7ECD\u7684Timer\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u5F88\u5C11\u88AB\u4F7F\u7528\uFF0C \u56E0\u4E3ATimer\u5E95\u5C42\u662F\u4F7F\u7528\u4E00\u4E2A\u5355\u7EBF\u7A0B\u6765\u5B9E\u73B0\u591A\u4E2ATimer\u4EFB\u52A1\u5904\u7406\u7684\uFF0C\u6240\u6709\u4EFB\u52A1\u90FD\u662F\u7531\u540C\u4E00\u4E2A\u7EBF\u7A0B\u6765\u8C03\u5EA6\uFF0C\u6240\u6709\u4EFB\u52A1\u90FD\u662F\u4E32\u884C\u6267\u884C\u3002\u800CScheduledExecutorService\u662F\u57FA\u4E8E\u7EBF\u7A0B\u6C60\u7684\uFF0C\u53EF\u4EE5\u5F00\u542F\u591A\u4E2A\u7EBF\u7A0B\u8FDB\u884C\u6267\u884C\u591A\u4E2A\u4EFB\u52A1\uFF0C\u6BCF\u4E2A\u4EFB","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/timer/springboot-x-task-executor-timer.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"SpringBoot\u5B9A\u65F6\u4EFB\u52A1-ScheduleExecutorService\u5B9E\u73B0\u65B9\u5F0F"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T03:01:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T03:01:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u77E5\u8BC6\u51C6\u5907","slug":"_1-\u77E5\u8BC6\u51C6\u5907","link":"#_1-\u77E5\u8BC6\u51C6\u5907","children":[{"level":3,"title":"1.1 \u4E3A\u4EC0\u4E48\u7528ScheduledExecutorService \u4EE3\u66FF Timer\uFF1F","slug":"_1-1-\u4E3A\u4EC0\u4E48\u7528scheduledexecutorservice-\u4EE3\u66FF-timer","link":"#_1-1-\u4E3A\u4EC0\u4E48\u7528scheduledexecutorservice-\u4EE3\u66FF-timer","children":[]},{"level":3,"title":"1.2 ScheduledExecutorService\u6240\u5728\u7684\u7EBF\u7A0B\u6C60\u7684\u77E5\u8BC6\u4F53\u7CFB\uFF1F","slug":"_1-2-scheduledexecutorservice\u6240\u5728\u7684\u7EBF\u7A0B\u6C60\u7684\u77E5\u8BC6\u4F53\u7CFB","link":"#_1-2-scheduledexecutorservice\u6240\u5728\u7684\u7EBF\u7A0B\u6C60\u7684\u77E5\u8BC6\u4F53\u7CFB","children":[]}]},{"level":2,"title":"2. ScheduledExecutorService\u5B9E\u73B0\u6848\u4F8B","slug":"_2-scheduledexecutorservice\u5B9E\u73B0\u6848\u4F8B","link":"#_2-scheduledexecutorservice\u5B9E\u73B0\u6848\u4F8B","children":[{"level":3,"title":"2.1 schedule","slug":"_2-1-schedule","link":"#_2-1-schedule","children":[]},{"level":3,"title":"2.2 scheduleAtFixedRate","slug":"_2-2-scheduleatfixedrate","link":"#_2-2-scheduleatfixedrate","children":[]},{"level":3,"title":"2.3 scheduleWithFixedDelay","slug":"_2-3-schedulewithfixeddelay","link":"#_2-3-schedulewithfixeddelay","children":[]}]},{"level":2,"title":"3. \u8FDB\u4E00\u6B65\u7406\u89E3","slug":"_3-\u8FDB\u4E00\u6B65\u7406\u89E3","link":"#_3-\u8FDB\u4E00\u6B65\u7406\u89E3","children":[{"level":3,"title":"3.1 schedule \u548C scheduleAtFixedRate\u548C scheduleWithFixedDelay\u6709\u4F55\u533A\u522B\uFF1F","slug":"_3-1-schedule-\u548C-scheduleatfixedrate\u548C-schedulewithfixeddelay\u6709\u4F55\u533A\u522B","link":"#_3-1-schedule-\u548C-scheduleatfixedrate\u548C-schedulewithfixeddelay\u6709\u4F55\u533A\u522B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663124461000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":4.39,"words":1316},"filePathRelative":"dependencies/timer/springboot-x-task-executor-timer.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
