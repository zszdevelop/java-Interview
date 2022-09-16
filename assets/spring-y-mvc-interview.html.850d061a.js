const e=JSON.parse('{"key":"v-1196056a","path":"/dependencies/spring/spring-y-mvc-interview.html","title":"SpringMVC\u5E38\u89C1\u77E5\u8BC6\u70B9","lang":"zh-CN","frontmatter":{"summary":"SpringMVC\u5E38\u89C1\u77E5\u8BC6\u70B9 1. Spring MVC \u7B80\u4ECB Spring MVC \u63D0\u4F9B\u201D\u6A21\u578B-\u89C6\u56FE-\u63A7\u5236\u5668\u201C\uFF08Model - View - Controller\uFF09 \u67B6\u6784\u548C\u968F\u65F6\u53EF\u7528\u7684\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5F00\u53D1\u7075\u6D3B\u4E14\u677E\u6563\u8026\u5408\u7684Web\u5E94\u7528\u7A0B\u5E8F\u3002 MVC \u6A21\u5F0F\u6709\u52A9\u4E8E\u5206\u79BB\u5E94\u7528\u7A0B\u5E8F\u7684\u4E0D\u540C\u65B9\u9762\uFF0C\u5982\u8F93\u5165\u903B\u8F91\uFF0C\u4E1A\u52A1\u903B\u8F91\u548CUI\u903B\u8F91\uFF0C\u540C\u65F6\u5728\u6240\u6709\u8FD9\u4E9B\u5143\u7D20\u4E4B\u95F4\u63D0\u4F9B\u677E\u6563\u8026\u5408 2. \u4ECB\u7ECD\u4E0B Sp","head":[["meta",{"property":"og:url","content":"https://java.isture.com/dependencies/spring/spring-y-mvc-interview.html"}],["meta",{"property":"og:site_name","content":"Java\u5B66\u4E60\u7B14\u8BB0"}],["meta",{"property":"og:title","content":"SpringMVC\u5E38\u89C1\u77E5\u8BC6\u70B9"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-14T03:01:01.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-14T03:01:01.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. Spring MVC \u7B80\u4ECB","slug":"_1-spring-mvc-\u7B80\u4ECB","link":"#_1-spring-mvc-\u7B80\u4ECB","children":[]},{"level":2,"title":"2. \u4ECB\u7ECD\u4E0B Spring MVC \u7684\u6838\u5FC3\u7EC4\u4EF6\uFF1F","slug":"_2-\u4ECB\u7ECD\u4E0B-spring-mvc-\u7684\u6838\u5FC3\u7EC4\u4EF6","link":"#_2-\u4ECB\u7ECD\u4E0B-spring-mvc-\u7684\u6838\u5FC3\u7EC4\u4EF6","children":[]},{"level":2,"title":"3. \u63CF\u8FF0\u4E00\u4E0B DispatcherServlet\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF1F","slug":"_3-\u63CF\u8FF0\u4E00\u4E0B-dispatcherservlet\u7684\u5DE5\u4F5C\u6D41\u7A0B","link":"#_3-\u63CF\u8FF0\u4E00\u4E0B-dispatcherservlet\u7684\u5DE5\u4F5C\u6D41\u7A0B","children":[{"level":3,"title":"3.1 \u524D\u540E\u7AEF\u5206\u79BB\u7684Spring MVC \u6D41\u7A0B","slug":"_3-1-\u524D\u540E\u7AEF\u5206\u79BB\u7684spring-mvc-\u6D41\u7A0B","link":"#_3-1-\u524D\u540E\u7AEF\u5206\u79BB\u7684spring-mvc-\u6D41\u7A0B","children":[]}]},{"level":2,"title":"4. @Controller \u6CE8\u89E3\u6709\u4EC0\u4E48\u7528\uFF1F","slug":"_4-controller-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528","link":"#_4-controller-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528","children":[]},{"level":2,"title":"5. RestController \u548C @Controller \u6709\u4EC0\u4E48\u533A\u522B\uFF1F","slug":"_5-restcontroller-\u548C-controller-\u6709\u4EC0\u4E48\u533A\u522B","link":"#_5-restcontroller-\u548C-controller-\u6709\u4EC0\u4E48\u533A\u522B","children":[]},{"level":2,"title":"6. @ReuqestMapping \u6CE8\u89E3\u6709\u4EC0\u4E48\u7528\uFF1F","slug":"_6-reuqestmapping-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528","link":"#_6-reuqestmapping-\u6CE8\u89E3\u6709\u4EC0\u4E48\u7528","children":[]},{"level":2,"title":"7. @RequestMapping \u548C@GetMapping \u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC","slug":"_7-requestmapping-\u548C-getmapping-\u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC","link":"#_7-requestmapping-\u548C-getmapping-\u6CE8\u89E3\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u54EA\u91CC","children":[]},{"level":2,"title":"8. \u8FD4\u56DEJSON \u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3\uFF1F","slug":"_8-\u8FD4\u56DEjson-\u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3","link":"#_8-\u8FD4\u56DEjson-\u683C\u5F0F\u4F7F\u7528\u4EC0\u4E48\u6CE8\u89E3","children":[]},{"level":2,"title":"9. \u4ECB\u7ECD\u4E00\u4E0BWebApplicationContext\uFF1F","slug":"_9-\u4ECB\u7ECD\u4E00\u4E0Bwebapplicationcontext","link":"#_9-\u4ECB\u7ECD\u4E00\u4E0Bwebapplicationcontext","children":[]},{"level":2,"title":"10.Spirng MVC \u7684\u5F02\u5E38\u5904\u7406\uFF1F","slug":"_10-spirng-mvc-\u7684\u5F02\u5E38\u5904\u7406","link":"#_10-spirng-mvc-\u7684\u5F02\u5E38\u5904\u7406","children":[]},{"level":2,"title":"11. Spring MVC \u6709\u4EC0\u4E48\u4F18\u70B9\uFF1F","slug":"_11-spring-mvc-\u6709\u4EC0\u4E48\u4F18\u70B9","link":"#_11-spring-mvc-\u6709\u4EC0\u4E48\u4F18\u70B9","children":[]},{"level":2,"title":"12. Spring MVC\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\uFF1F","slug":"_12-spring-mvc\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1","link":"#_12-spring-mvc\u600E\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1","children":[]},{"level":2,"title":"13. Spring MVC \u7684 Controller \u662F\u4E0D\u662F\u5355\u4F8B\uFF1F","slug":"_13-spring-mvc-\u7684-controller-\u662F\u4E0D\u662F\u5355\u4F8B","link":"#_13-spring-mvc-\u7684-controller-\u662F\u4E0D\u662F\u5355\u4F8B","children":[]}],"git":{"createdTime":1663124461000,"updatedTime":1663124461000,"contributors":[{"name":"zszdevelop","email":"zszdevelop@163.com","commits":1}]},"readingTime":{"minutes":5.11,"words":1532},"filePathRelative":"dependencies/spring/spring-y-mvc-interview.md","localizedDate":"2022\u5E749\u670814\u65E5"}');export{e as data};
