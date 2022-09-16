const e=JSON.parse('{"key":"v-3f518cb3","path":"/java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.html","title":"ReentrantLock\u548C\u6761\u4EF6\u9501Condition\u5B9E\u73B0\u963B\u585E\u961F\u5217ArrayBlockingQueue","lang":"zh-CN","frontmatter":{"summary":"ReentrantLock\u548C\u6761\u4EF6\u9501Condition\u5B9E\u73B0\u963B\u585E\u961F\u5217ArrayBlockingQueue 1. \u7B80\u4ECB \u6BD4\u5982\u6700\u5178\u578B\u7684\u963B\u585E\u961F\u5217 ArrayBlockingQueue\uFF0C\u5F53\u961F\u5217\u4E2D\u6CA1\u6709\u5143\u7D20\u7684\u65F6\u5019\uFF0C\u4ED6\u65E0\u6CD5take\u51FA\u4E00\u4E2A\u5143\u7D20\uFF0C\u9700\u8981\u7B49\u5F85\u5176\u4ED6\u7EBF\u7A0B\u5165\u961F\u4E00\u4E2A\u5143\u7D20\u540E\u5524\u9192\u5B83\uFF0C\u624D\u80FD\u7EE7\u7EED\u5F39\u51FA\u5143\u7D20\u3002 1.1 \u7279\u70B9 \u963B\u585E\u961F\u5217\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u5148\u8FDB\u5148\u51FA\u961F\u5217,\u5B83\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7279\u70B9 1.\u5165\u961F\u548C\u51FA","head":[["meta",{"property":"og:url","content":"https://java.isture.com/java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"ReentrantLock\u548C\u6761\u4EF6\u9501Condition\u5B9E\u73B0\u963B\u585E\u961F\u5217ArrayBlockingQueue"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T09:13:33.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T09:13:33.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB","link":"#_1-\u7B80\u4ECB","children":[{"level":3,"title":"1.1 \u7279\u70B9","slug":"_1-1-\u7279\u70B9","link":"#_1-1-\u7279\u70B9","children":[]}]},{"level":2,"title":"2. \u5B9E\u73B0","slug":"_2-\u5B9E\u73B0","link":"#_2-\u5B9E\u73B0","children":[{"level":3,"title":"2.1 \u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027","slug":"_2-1-\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027","link":"#_2-1-\u4E09\u4E2A\u91CD\u8981\u7684\u5C5E\u6027","children":[]},{"level":3,"title":"2.2 \u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316\uFF1A","slug":"_2-2-\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316","link":"#_2-2-\u5728\u6784\u9020\u65B9\u6CD5\u4E2D\u521D\u59CB\u5316","children":[]},{"level":3,"title":"2.3 take() \u65B9\u6CD5\uFF1A","slug":"_2-3-take-\u65B9\u6CD5","link":"#_2-3-take-\u65B9\u6CD5","children":[]},{"level":3,"title":"2.4 enqueue(E)\u65B9\u6CD5\uFF1A","slug":"_2-4-enqueue-e-\u65B9\u6CD5","link":"#_2-4-enqueue-e-\u65B9\u6CD5","children":[]},{"level":3,"title":"2.5 put(E)\u65B9\u6CD5\uFF1A","slug":"_2-5-put-e-\u65B9\u6CD5","link":"#_2-5-put-e-\u65B9\u6CD5","children":[]},{"level":3,"title":"2.6 \u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E\uFF0C\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B\uFF1A","slug":"_2-6-\u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E-\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B","link":"#_2-6-\u51FA\u961F\u6216remove\u7B49\u64CD\u4F5C\u4E4B\u540E-\u4F1A\u89E6\u53D1\u5524\u9192\u7B49\u5F85\u7684\u7EBF\u7A0B","children":[]}]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"git":{"createdTime":1663146813000,"updatedTime":1663146813000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":1.71,"words":514},"filePathRelative":"java/thread/java-thread-x-lock-reentrantlock-array-blocking-queue.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
