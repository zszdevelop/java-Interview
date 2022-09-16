import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as e,b as o,e as s,d as l,r as n}from"./app.13531e65.js";const d={},p=s(`<h1 id="redis\u7F13\u5B58\u95EE\u9898-\u4E00\u81F4\u6027-\u7A7F\u51FB-\u7A7F\u900F-\u96EA\u5D29-\u6C61\u67D3\u7B49" tabindex="-1"><a class="header-anchor" href="#redis\u7F13\u5B58\u95EE\u9898-\u4E00\u81F4\u6027-\u7A7F\u51FB-\u7A7F\u900F-\u96EA\u5D29-\u6C61\u67D3\u7B49" aria-hidden="true">#</a> Redis\u7F13\u5B58\u95EE\u9898\uFF1A\u4E00\u81F4\u6027, \u7A7F\u51FB, \u7A7F\u900F, \u96EA\u5D29, \u6C61\u67D3\u7B49</h1><blockquote><p>Redis\u6700\u5E38\u7528\u7684\u4E00\u4E2A\u573A\u666F\u5C31\u662F\u4F5C\u4E3A\u7F13\u5B58\uFF0C\u672C\u6587\u4E3B\u8981\u63A2\u8BA8Redis\u4F5C\u4E3A\u7F13\u5B58\uFF0C\u5728\u5B9E\u8DF5\u4E2D\u53EF\u80FD\u4F1A\u6709\u54EA\u4E9B\u95EE\u9898\uFF1F\u6BD4\u5982\u4E00\u81F4\u6027, \u7A7F\u51FB, \u7A7F\u900F, \u96EA\u5D29, \u6C61\u67D3\u7B49\u3002</p></blockquote><h2 id="_1-\u4E3A\u4EC0\u4E48\u8981\u7406\u89E3redis\u7F13\u5B58\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_1-\u4E3A\u4EC0\u4E48\u8981\u7406\u89E3redis\u7F13\u5B58\u95EE\u9898" aria-hidden="true">#</a> 1. \u4E3A\u4EC0\u4E48\u8981\u7406\u89E3Redis\u7F13\u5B58\u95EE\u9898</h2><p>\u5728\u9AD8\u5E76\u53D1\u7684\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u6570\u636E\u5E93\u5927\u591A\u6570\u60C5\u51B5\u90FD\u662F\u7528\u6237\u5E76\u53D1\u8BBF\u95EE\u6700\u8584\u5F31\u7684\u73AF\u8282\u3002\u6240\u4EE5\uFF0C\u5C31\u9700\u8981\u4F7F\u7528redis\u505A\u4E00\u4E2A\u7F13\u51B2\u64CD\u4F5C\uFF0C\u8BA9\u8BF7\u6C42\u5148\u8BBF\u95EE\u5230redis\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u8BBF\u95EEMysql\u7B49\u6570\u636E\u5E93\u3002\u8FD9\u6837\u53EF\u4EE5\u5927\u5927\u7F13\u89E3\u6570\u636E\u5E93\u7684\u538B\u529B\u3002</p><p>\u5F53\u7F13\u5B58\u5E93\u51FA\u73B0\u65F6\uFF0C\u5FC5\u987B\u8981\u8003\u8651\u5982\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u7F13\u5B58\u7A7F\u900F</li><li>\u7F13\u5B58\u7A7F\u51FB</li><li>\u7F13\u5B58\u96EA\u5D29</li><li>\u7F13\u5B58\u6C61\u67D3\uFF08\u6216\u8005\u6EE1\u4E86\uFF09</li><li>\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E00\u81F4\u6027</li></ul><h2 id="_2-\u7F13\u5B58\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#_2-\u7F13\u5B58\u7A7F\u900F" aria-hidden="true">#</a> 2. \u7F13\u5B58\u7A7F\u900F</h2><ul><li><strong>\u95EE\u9898\u6765\u6E90</strong></li></ul><p>\u7F13\u5B58\u7A7F\u900F\u662F\u6307<strong>\u7F13\u5B58\u548C\u6570\u636E\u5E93\u4E2D\u90FD\u6CA1\u6709\u7684\u6570\u636E</strong>\uFF0C\u800C\u7528\u6237\u4E0D\u65AD\u53D1\u8D77\u8BF7\u6C42\u3002\u7531\u4E8E\u7F13\u5B58\u662F\u4E0D\u547D\u4E2D\u65F6\u88AB\u52A8\u5199\u7684\uFF0C\u5E76\u4E14\u51FA\u4E8E\u5BB9\u9519\u8003\u8651\uFF0C\u5982\u679C\u4ECE\u5B58\u50A8\u5C42\u67E5\u4E0D\u5230\u6570\u636E\u5219\u4E0D\u5199\u5165\u7F13\u5B58\uFF0C\u8FD9\u5C06\u5BFC\u81F4\u8FD9\u4E2A\u4E0D\u5B58\u5728\u7684\u6570\u636E\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8981\u5230\u5B58\u50A8\u5C42\u53BB\u67E5\u8BE2\uFF0C\u5931\u53BB\u4E86\u7F13\u5B58\u7684\u610F\u4E49\u3002</p><p>\u5728\u6D41\u91CF\u5927\u65F6\uFF0C\u53EF\u80FDDB\u5C31\u6302\u6389\u4E86\uFF0C\u8981\u662F\u6709\u4EBA\u5229\u7528\u4E0D\u5B58\u5728\u7684key\u9891\u7E41\u653B\u51FB\u6211\u4EEC\u7684\u5E94\u7528\uFF0C\u8FD9\u5C31\u662F\u6F0F\u6D1E\u3002</p><p>\u5982\u53D1\u8D77\u4E3Aid\u4E3A\u201C-1\u201D\u7684\u6570\u636E\u6216id\u4E3A\u7279\u522B\u5927\u4E0D\u5B58\u5728\u7684\u6570\u636E\u3002\u8FD9\u65F6\u7684\u7528\u6237\u5F88\u53EF\u80FD\u662F\u653B\u51FB\u8005\uFF0C\u653B\u51FB\u4F1A\u5BFC\u81F4\u6570\u636E\u5E93\u538B\u529B\u8FC7\u5927\u3002</p><ul><li><strong>\u89E3\u51B3\u65B9\u6848</strong></li></ul><ol><li>\u63A5\u53E3\u5C42\u589E\u52A0\u6821\u9A8C\uFF0C\u5982\u7528\u6237\u9274\u6743\u6821\u9A8C\uFF0Cid\u505A\u57FA\u7840\u6821\u9A8C\uFF0Cid&lt;=0\u7684\u76F4\u63A5\u62E6\u622A\uFF1B</li><li>\u4ECE\u7F13\u5B58\u53D6\u4E0D\u5230\u7684\u6570\u636E\uFF0C\u5728\u6570\u636E\u5E93\u4E2D\u4E5F\u6CA1\u6709\u53D6\u5230\uFF0C\u8FD9\u65F6\u4E5F\u53EF\u4EE5\u5C06key-value\u5BF9\u5199\u4E3Akey-null\uFF0C\u7F13\u5B58\u6709\u6548\u65F6\u95F4\u53EF\u4EE5\u8BBE\u7F6E\u77ED\u70B9\uFF0C\u598230\u79D2\uFF08\u8BBE\u7F6E\u592A\u957F\u4F1A\u5BFC\u81F4\u6B63\u5E38\u60C5\u51B5\u4E5F\u6CA1\u6CD5\u4F7F\u7528\uFF09\u3002\u8FD9\u6837\u53EF\u4EE5\u9632\u6B62\u653B\u51FB\u7528\u6237\u53CD\u590D\u7528\u540C\u4E00\u4E2Aid\u66B4\u529B\u653B\u51FB</li><li>\u5E03\u9686\u8FC7\u6EE4\u5668\u3002bloomfilter\u5C31\u7C7B\u4F3C\u4E8E\u4E00\u4E2Ahash set\uFF0C\u7528\u4E8E\u5FEB\u901F\u5224\u67D0\u4E2A\u5143\u7D20\u662F\u5426\u5B58\u5728\u4E8E\u96C6\u5408\u4E2D\uFF0C\u5176\u5178\u578B\u7684\u5E94\u7528\u573A\u666F\u5C31\u662F\u5FEB\u901F\u5224\u65AD\u4E00\u4E2Akey\u662F\u5426\u5B58\u5728\u4E8E\u67D0\u5BB9\u5668\uFF0C\u4E0D\u5B58\u5728\u5C31\u76F4\u63A5\u8FD4\u56DE\u3002\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5173\u952E\u5C31\u5728\u4E8Ehash\u7B97\u6CD5\u548C\u5BB9\u5668\u5927\u5C0F\uFF0C</li></ol><h2 id="_3-\u7F13\u5B58\u51FB\u7A7F" tabindex="-1"><a class="header-anchor" href="#_3-\u7F13\u5B58\u51FB\u7A7F" aria-hidden="true">#</a> 3. \u7F13\u5B58\u51FB\u7A7F</h2><ul><li><strong>\u95EE\u9898\u6765\u6E90</strong></li></ul><p>\u7F13\u5B58\u51FB\u7A7F\u662F\u6307<strong>\u7F13\u5B58\u4E2D\u6CA1\u6709\u4F46\u6570\u636E\u5E93\u4E2D\u6709\u7684\u6570\u636E</strong>\uFF08\u4E00\u822C\u662F\u7F13\u5B58\u65F6\u95F4\u5230\u671F\uFF09\uFF0C\u8FD9\u65F6\u7531\u4E8E\u5E76\u53D1\u7528\u6237\u7279\u522B\u591A\uFF0C\u540C\u65F6\u8BFB\u7F13\u5B58\u6CA1\u8BFB\u5230\u6570\u636E\uFF0C\u53C8\u540C\u65F6\u53BB\u6570\u636E\u5E93\u53BB\u53D6\u6570\u636E\uFF0C\u5F15\u8D77\u6570\u636E\u5E93\u538B\u529B\u77AC\u95F4\u589E\u5927\uFF0C\u9020\u6210\u8FC7\u5927\u538B\u529B\u3002</p><ul><li><strong>\u89E3\u51B3\u65B9\u6848</strong></li></ul><p>1\u3001\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u8FDC\u4E0D\u8FC7\u671F\u3002</p><p>2\u3001\u63A5\u53E3\u9650\u6D41\u4E0E\u7194\u65AD\uFF0C\u964D\u7EA7\u3002\u91CD\u8981\u7684\u63A5\u53E3\u4E00\u5B9A\u8981\u505A\u597D\u9650\u6D41\u7B56\u7565\uFF0C\u9632\u6B62\u7528\u6237\u6076\u610F\u5237\u63A5\u53E3\uFF0C\u540C\u65F6\u8981\u964D\u7EA7\u51C6\u5907\uFF0C\u5F53\u63A5\u53E3\u4E2D\u7684\u67D0\u4E9B \u670D\u52A1 \u4E0D\u53EF\u7528\u65F6\u5019\uFF0C\u8FDB\u884C\u7194\u65AD\uFF0C\u5931\u8D25\u5FEB\u901F\u8FD4\u56DE\u673A\u5236\u3002</p><p>3\u3001\u52A0\u4E92\u65A5\u9501</p><h2 id="_4-\u7F13\u5B58\u96EA\u5D29" tabindex="-1"><a class="header-anchor" href="#_4-\u7F13\u5B58\u96EA\u5D29" aria-hidden="true">#</a> 4. \u7F13\u5B58\u96EA\u5D29</h2><ul><li><strong>\u95EE\u9898\u6765\u6E90</strong></li></ul><p>\u7F13\u5B58\u96EA\u5D29\u662F\u6307\u7F13\u5B58\u4E2D<strong>\u6570\u636E\u5927\u6279\u91CF\u5230\u8FC7\u671F\u65F6\u95F4\uFF0C\u800C\u67E5\u8BE2\u6570\u636E\u91CF\u5DE8\u5927\uFF0C\u5F15\u8D77\u6570\u636E\u5E93\u538B\u529B\u8FC7\u5927\u751A\u81F3down\u673A</strong>\u3002\u548C\u7F13\u5B58\u51FB\u7A7F\u4E0D\u540C\u7684\u662F\uFF0C\u7F13\u5B58\u51FB\u7A7F\u6307\u5E76\u53D1\u67E5\u540C\u4E00\u6761\u6570\u636E\uFF0C\u7F13\u5B58\u96EA\u5D29\u662F\u4E0D\u540C\u6570\u636E\u90FD\u8FC7\u671F\u4E86\uFF0C\u5F88\u591A\u6570\u636E\u90FD\u67E5\u4E0D\u5230\u4ECE\u800C\u67E5\u6570\u636E\u5E93\u3002</p><ul><li><strong>\u89E3\u51B3\u65B9\u6848</strong></li></ul><ol><li>\u7F13\u5B58\u6570\u636E\u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u968F\u673A\uFF0C\u9632\u6B62\u540C\u4E00\u65F6\u95F4\u5927\u91CF\u6570\u636E\u8FC7\u671F\u73B0\u8C61\u53D1\u751F\u3002</li><li>\u5982\u679C\u7F13\u5B58\u6570\u636E\u5E93\u662F\u5206\u5E03\u5F0F\u90E8\u7F72\uFF0C\u5C06\u70ED\u70B9\u6570\u636E\u5747\u5300\u5206\u5E03\u5728\u4E0D\u540C\u7684\u7F13\u5B58\u6570\u636E\u5E93\u4E2D\u3002</li><li>\u8BBE\u7F6E\u70ED\u70B9\u6570\u636E\u6C38\u8FDC\u4E0D\u8FC7\u671F\u3002</li></ol><h2 id="_5-\u7F13\u5B58\u6C61\u67D3-\u6216\u6EE1\u4E86" tabindex="-1"><a class="header-anchor" href="#_5-\u7F13\u5B58\u6C61\u67D3-\u6216\u6EE1\u4E86" aria-hidden="true">#</a> 5. \u7F13\u5B58\u6C61\u67D3\uFF08\u6216\u6EE1\u4E86\uFF09</h2><p>\u7F13\u5B58\u6C61\u67D3\u95EE\u9898\u8BF4\u7684\u662F\u7F13\u5B58\u4E2D\u4E00\u4E9B\u53EA\u4F1A\u88AB\u8BBF\u95EE\u4E00\u6B21\u6216\u8005\u51E0\u6B21\u7684\u7684\u6570\u636E\uFF0C\u88AB\u8BBF\u95EE\u5B8C\u540E\uFF0C\u518D\u4E5F\u4E0D\u4F1A\u88AB\u8BBF\u95EE\u5230\uFF0C\u4F46\u8FD9\u90E8\u5206\u6570\u636E\u4F9D\u7136\u7559\u5B58\u5728\u7F13\u5B58\u4E2D\uFF0C\u6D88\u8017\u7F13\u5B58\u7A7A\u95F4\u3002</p><p>\u7F13\u5B58\u6C61\u67D3\u4F1A\u968F\u7740\u6570\u636E\u7684\u6301\u7EED\u589E\u52A0\u800C\u9010\u6E10\u663E\u9732\uFF0C\u968F\u7740\u670D\u52A1\u7684\u4E0D\u65AD\u8FD0\u884C\uFF0C\u7F13\u5B58\u4E2D\u4F1A\u5B58\u5728\u5927\u91CF\u7684\u6C38\u8FDC\u4E0D\u4F1A\u518D\u6B21\u88AB\u8BBF\u95EE\u7684\u6570\u636E\u3002\u7F13\u5B58\u7A7A\u95F4\u662F\u6709\u9650\u7684\uFF0C\u5982\u679C\u7F13\u5B58\u7A7A\u95F4\u6EE1\u4E86\uFF0C\u518D\u5F80\u7F13\u5B58\u91CC\u5199\u6570\u636E\u65F6\u5C31\u4F1A\u6709\u989D\u5916\u5F00\u9500\uFF0C\u5F71\u54CDRedis\u6027\u80FD\u3002\u8FD9\u90E8\u5206\u989D\u5916\u5F00\u9500\u4E3B\u8981\u662F\u6307\u5199\u7684\u65F6\u5019\u5224\u65AD\u6DD8\u6C70\u7B56\u7565\uFF0C\u6839\u636E\u6DD8\u6C70\u7B56\u7565\u53BB\u9009\u62E9\u8981\u6DD8\u6C70\u7684\u6570\u636E\uFF0C\u7136\u540E\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\u3002</p><h3 id="_5-1-\u6700\u5927\u7F13\u5B58\u8BBE\u7F6E\u591A\u5927" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6700\u5927\u7F13\u5B58\u8BBE\u7F6E\u591A\u5927" aria-hidden="true">#</a> 5.1 \u6700\u5927\u7F13\u5B58\u8BBE\u7F6E\u591A\u5927</h3><p>\u7CFB\u7EDF\u7684\u8BBE\u8BA1\u9009\u62E9\u662F\u4E00\u4E2A\u6743\u8861\u7684\u8FC7\u7A0B\uFF1A\u5927\u5BB9\u91CF\u7F13\u5B58\u662F\u80FD\u5E26\u6765\u6027\u80FD\u52A0\u901F\u7684\u6536\u76CA\uFF0C\u4F46\u662F\u6210\u672C\u4E5F\u4F1A\u66F4\u9AD8\uFF0C\u800C\u5C0F\u5BB9\u91CF\u7F13\u5B58\u4E0D\u4E00\u5B9A\u5C31\u8D77\u4E0D\u5230\u52A0\u901F\u8BBF\u95EE\u7684\u6548\u679C\u3002\u4E00\u822C\u6765\u8BF4\uFF0C<strong>\u6211\u4F1A\u5EFA\u8BAE\u628A\u7F13\u5B58\u5BB9\u91CF\u8BBE\u7F6E\u4E3A\u603B\u6570\u636E\u91CF\u7684 15% \u5230 30%\uFF0C\u517C\u987E\u8BBF\u95EE\u6027\u80FD\u548C\u5185\u5B58\u7A7A\u95F4\u5F00\u9500</strong>\u3002</p><p>\u5BF9\u4E8E Redis \u6765\u8BF4\uFF0C\u4E00\u65E6\u786E\u5B9A\u4E86\u7F13\u5B58\u6700\u5927\u5BB9\u91CF\uFF0C\u6BD4\u5982 4GB\uFF0C\u4F60\u5C31\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u8FD9\u4E2A\u547D\u4EE4\u6765\u8BBE\u5B9A\u7F13\u5B58\u7684\u5927\u5C0F\u4E86\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>CONFIG SET maxmemory 4gb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E0D\u8FC7\uFF0C\u7F13\u5B58\u88AB\u5199\u6EE1\u662F\u4E0D\u53EF\u907F\u514D\u7684, \u6240\u4EE5\u9700\u8981\u6570\u636E\u6DD8\u6C70\u7B56\u7565</p><h3 id="_5-2-\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565" aria-hidden="true">#</a> 5.2 \u7F13\u5B58\u6DD8\u6C70\u7B56\u7565</h3><p>Redis\u5171\u652F\u6301\u516B\u79CD\u6DD8\u6C70\u7B56\u7565\uFF0C\u5206\u522B\u662Fnoeviction\u3001volatile-random\u3001volatile-ttl\u3001volatile-lru\u3001volatile-lfu\u3001allkeys-lru\u3001allkeys-random \u548C allkeys-lfu \u7B56\u7565\u3002</p><p><strong>\u600E\u4E48\u7406\u89E3\u5462</strong>\uFF1F\u4E3B\u8981\u770B\u5206\u4E09\u7C7B\u770B\uFF1A</p><ul><li>\u4E0D\u6DD8\u6C70 <ul><li>noeviction \uFF08v4.0\u540E\u9ED8\u8BA4\u7684\uFF09</li></ul></li><li>\u5BF9\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u6570\u636E\u4E2D\u8FDB\u884C\u6DD8\u6C70 <ul><li>\u968F\u673A\uFF1Avolatile-random</li><li>ttl\uFF1Avolatile-ttl</li><li>lru\uFF1Avolatile-lru</li><li>lfu\uFF1Avolatile-lfu</li></ul></li><li>\u5168\u90E8\u6570\u636E\u8FDB\u884C\u6DD8\u6C70 <ul><li>\u968F\u673A\uFF1Aallkeys-random</li><li>lru\uFF1Aallkeys-lru</li><li>lfu\uFF1Aallkeys-lfu</li></ul></li></ul><blockquote><p>\u5177\u4F53\u5BF9\u7167\u4E0B\uFF1A</p></blockquote><ol><li><p><strong>noeviction</strong></p><p>\u8BE5\u7B56\u7565\u662FRedis\u7684\u9ED8\u8BA4\u7B56\u7565\u3002\u5728\u8FD9\u79CD\u7B56\u7565\u4E0B\uFF0C\u4E00\u65E6\u7F13\u5B58\u88AB\u5199\u6EE1\u4E86\uFF0C\u518D\u6709\u5199\u8BF7\u6C42\u6765\u65F6\uFF0CRedis \u4E0D\u518D\u63D0\u4F9B\u670D\u52A1\uFF0C\u800C\u662F\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u3002\u8FD9\u79CD\u7B56\u7565\u4E0D\u4F1A\u6DD8\u6C70\u6570\u636E\uFF0C\u6240\u4EE5\u65E0\u6CD5\u89E3\u51B3\u7F13\u5B58\u6C61\u67D3\u95EE\u9898\u3002\u4E00\u822C\u751F\u4EA7\u73AF\u5883\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><p>\u5176\u4ED6\u4E03\u79CD\u89C4\u5219\u90FD\u4F1A\u6839\u636E\u81EA\u5DF1\u76F8\u5E94\u7684\u89C4\u5219\u6765\u9009\u62E9\u6570\u636E\u8FDB\u884C\u5220\u9664\u64CD\u4F5C\u3002</p></li><li><p><strong>volatile-random</strong></p><p>\u8FD9\u4E2A\u7B97\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u5728\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u503C\u5BF9\u4E2D\uFF0C\u8FDB\u884C\u968F\u673A\u5220\u9664\u3002\u56E0\u4E3A\u662F\u968F\u673A\u5220\u9664\uFF0C\u65E0\u6CD5\u628A\u4E0D\u518D\u8BBF\u95EE\u7684\u6570\u636E\u7B5B\u9009\u51FA\u6765\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F9D\u7136\u4F1A\u5B58\u5728\u7F13\u5B58\u6C61\u67D3\u73B0\u8C61\uFF0C\u65E0\u6CD5\u89E3\u51B3\u7F13\u5B58\u6C61\u67D3\u95EE\u9898\u3002</p></li><li><p><strong>volatile-ttl</strong></p><p>\u8FD9\u79CD\u7B97\u6CD5\u5224\u65AD\u6DD8\u6C70\u6570\u636E\u65F6\u53C2\u8003\u7684\u6307\u6807\u6BD4\u968F\u673A\u5220\u9664\u65F6\u591A\u8FDB\u884C\u4E00\u6B65\u8FC7\u671F\u65F6\u95F4\u7684\u6392\u5E8F\u3002Redis\u5728\u7B5B\u9009\u9700\u5220\u9664\u7684\u6570\u636E\u65F6\uFF0C\u8D8A\u65E9\u8FC7\u671F\u7684\u6570\u636E\u8D8A\u4F18\u5148\u88AB\u9009\u62E9\u3002</p></li><li><p><strong>volatile-lru</strong></p><p>LRU\u7B97\u6CD5\uFF1ALRU \u7B97\u6CD5\u7684\u5168\u79F0\u662F Least Recently Used\uFF0C\u6309\u7167\u6700\u8FD1\u6700\u5C11\u4F7F\u7528\u7684\u539F\u5219\u6765\u7B5B\u9009\u6570\u636E\u3002\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u4F1A\u4F7F\u7528 LRU \u7B97\u6CD5\u7B5B\u9009\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u503C\u5BF9\u3002</p><p>Redis\u4F18\u5316\u7684<strong>LRU\u7B97\u6CD5\u5B9E\u73B0</strong>\uFF1A</p><p>Redis\u4F1A\u8BB0\u5F55\u6BCF\u4E2A\u6570\u636E\u7684\u6700\u8FD1\u4E00\u6B21\u88AB\u8BBF\u95EE\u7684\u65F6\u95F4\u6233\u3002\u5728Redis\u5728\u51B3\u5B9A\u6DD8\u6C70\u7684\u6570\u636E\u65F6\uFF0C\u7B2C\u4E00\u6B21\u4F1A\u968F\u673A\u9009\u51FA N \u4E2A\u6570\u636E\uFF0C\u628A\u5B83\u4EEC\u4F5C\u4E3A\u4E00\u4E2A\u5019\u9009\u96C6\u5408\u3002\u63A5\u4E0B\u6765\uFF0CRedis \u4F1A\u6BD4\u8F83\u8FD9 N \u4E2A\u6570\u636E\u7684 lru \u5B57\u6BB5\uFF0C\u628A lru \u5B57\u6BB5\u503C\u6700\u5C0F\u7684\u6570\u636E\u4ECE\u7F13\u5B58\u4E2D\u6DD8\u6C70\u51FA\u53BB\u3002\u901A\u8FC7\u968F\u673A\u8BFB\u53D6\u5F85\u5220\u9664\u96C6\u5408\uFF0C\u53EF\u4EE5\u8BA9Redis\u4E0D\u7528\u7EF4\u62A4\u4E00\u4E2A\u5DE8\u5927\u7684\u94FE\u8868\uFF0C\u4E5F\u4E0D\u7528\u64CD\u4F5C\u94FE\u8868\uFF0C\u8FDB\u800C\u63D0\u5347\u6027\u80FD\u3002</p><p>Redis \u9009\u51FA\u7684\u6570\u636E\u4E2A\u6570 N\uFF0C\u901A\u8FC7 \u914D\u7F6E\u53C2\u6570 maxmemory-samples \u8FDB\u884C\u914D\u7F6E\u3002\u4E2A\u6570N\u8D8A\u5927\uFF0C\u5219\u5019\u9009\u96C6\u5408\u8D8A\u5927\uFF0C\u9009\u62E9\u5230\u7684\u6700\u4E45\u672A\u88AB\u4F7F\u7528\u7684\u5C31\u66F4\u51C6\u786E\uFF0CN\u8D8A\u5C0F\uFF0C\u9009\u62E9\u5230\u6700\u4E45\u672A\u88AB\u4F7F\u7528\u7684\u6570\u636E\u7684\u6982\u7387\u4E5F\u4F1A\u968F\u4E4B\u51CF\u5C0F\u3002</p></li><li><p><strong>volatile-lfu</strong></p><p>\u4F1A\u4F7F\u7528 LFU \u7B97\u6CD5\u9009\u62E9\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\u7684\u952E\u503C\u5BF9\u3002</p><p><strong>LFU \u7B97\u6CD5</strong>\uFF1ALFU \u7F13\u5B58\u7B56\u7565\u662F\u5728 LRU \u7B56\u7565\u57FA\u7840\u4E0A\uFF0C\u4E3A\u6BCF\u4E2A\u6570\u636E\u589E\u52A0\u4E86\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u6765\u7EDF\u8BA1\u8FD9\u4E2A\u6570\u636E\u7684\u8BBF\u95EE\u6B21\u6570\u3002\u5F53\u4F7F\u7528 LFU \u7B56\u7565\u7B5B\u9009\u6DD8\u6C70\u6570\u636E\u65F6\uFF0C\u9996\u5148\u4F1A\u6839\u636E\u6570\u636E\u7684\u8BBF\u95EE\u6B21\u6570\u8FDB\u884C\u7B5B\u9009\uFF0C\u628A\u8BBF\u95EE\u6B21\u6570\u6700\u4F4E\u7684\u6570\u636E\u6DD8\u6C70\u51FA\u7F13\u5B58\u3002\u5982\u679C\u4E24\u4E2A\u6570\u636E\u7684\u8BBF\u95EE\u6B21\u6570\u76F8\u540C\uFF0CLFU \u7B56\u7565\u518D\u6BD4\u8F83\u8FD9\u4E24\u4E2A\u6570\u636E\u7684\u8BBF\u95EE\u65F6\u6548\u6027\uFF0C\u628A\u8DDD\u79BB\u4E0A\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\u66F4\u4E45\u7684\u6570\u636E\u6DD8\u6C70\u51FA\u7F13\u5B58\u3002 Redis\u7684LFU\u7B97\u6CD5\u5B9E\u73B0:</p><p>\u5F53 LFU \u7B56\u7565\u7B5B\u9009\u6570\u636E\u65F6\uFF0CRedis \u4F1A\u5728\u5019\u9009\u96C6\u5408\u4E2D\uFF0C\u6839\u636E\u6570\u636E lru \u5B57\u6BB5\u7684\u540E 8bit \u9009\u62E9\u8BBF\u95EE\u6B21\u6570\u6700\u5C11\u7684\u6570\u636E\u8FDB\u884C\u6DD8\u6C70\u3002\u5F53\u8BBF\u95EE\u6B21\u6570\u76F8\u540C\u65F6\uFF0C\u518D\u6839\u636E lru \u5B57\u6BB5\u7684\u524D 16bit \u503C\u5927\u5C0F\uFF0C\u9009\u62E9\u8BBF\u95EE\u65F6\u95F4\u6700\u4E45\u8FDC\u7684\u6570\u636E\u8FDB\u884C\u6DD8\u6C70\u3002</p><p>Redis \u53EA\u4F7F\u7528\u4E86 8bit \u8BB0\u5F55\u6570\u636E\u7684\u8BBF\u95EE\u6B21\u6570\uFF0C\u800C 8bit \u8BB0\u5F55\u7684\u6700\u5927\u503C\u662F 255\uFF0C\u8FD9\u6837\u5728\u8BBF\u95EE\u5FEB\u901F\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u6BCF\u6B21\u88AB\u8BBF\u95EE\u5C31\u5C06\u8BBF\u95EE\u6B21\u6570\u52A0\u4E00\uFF0C\u5F88\u5FEB\u67D0\u6761\u6570\u636E\u5C31\u8FBE\u5230\u6700\u5927\u503C255\uFF0C\u53EF\u80FD\u5F88\u591A\u6570\u636E\u90FD\u662F255\uFF0C\u90A3\u4E48\u9000\u5316\u6210LRU\u7B97\u6CD5\u4E86\u3002\u6240\u4EE5Redis\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5B9E\u73B0\u4E86\u4E00\u4E2A\u66F4\u4F18\u7684\u8BA1\u6570\u89C4\u5219\uFF0C\u5E76\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E\u9879\uFF0C\u6765\u63A7\u5236\u8BA1\u6570\u5668\u589E\u52A0\u7684\u901F\u5EA6\u3002</p><p><strong>\u53C2\u6570</strong> \uFF1A</p><ul><li><p><code>lfu-log-factor</code> \uFF0C\u7528\u8BA1\u6570\u5668\u5F53\u524D\u7684\u503C\u4E58\u4EE5\u914D\u7F6E\u9879 lfu_log_factor \u518D\u52A0 1\uFF0C\u518D\u53D6\u5176\u5012\u6570\uFF0C\u5F97\u5230\u4E00\u4E2A p \u503C\uFF1B\u7136\u540E\uFF0C\u628A\u8FD9\u4E2A p \u503C\u548C\u4E00\u4E2A\u53D6\u503C\u8303\u56F4\u5728\uFF080\uFF0C1\uFF09\u95F4\u7684\u968F\u673A\u6570 r \u503C\u6BD4\u5927\u5C0F\uFF0C\u53EA\u6709 p \u503C\u5927\u4E8E r \u503C\u65F6\uFF0C\u8BA1\u6570\u5668\u624D\u52A0 1\u3002</p></li><li><p><code>lfu-decay-time</code>\uFF0C \u63A7\u5236\u8BBF\u95EE\u6B21\u6570\u8870\u51CF\u3002LFU \u7B56\u7565\u4F1A\u8BA1\u7B97\u5F53\u524D\u65F6\u95F4\u548C\u6570\u636E\u6700\u8FD1\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\u7684\u5DEE\u503C\uFF0C\u5E76\u628A\u8FD9\u4E2A\u5DEE\u503C\u6362\u7B97\u6210\u4EE5\u5206\u949F\u4E3A\u5355\u4F4D\u3002\u7136\u540E\uFF0CLFU \u7B56\u7565\u518D\u628A\u8FD9\u4E2A\u5DEE\u503C\u9664\u4EE5 lfu_decay_time \u503C\uFF0C\u6240\u5F97\u7684\u7ED3\u679C\u5C31\u662F\u6570\u636E counter \u8981\u8870\u51CF\u7684\u503C\u3002</p></li><li><p><code>lfu-log-factor</code>\u8BBE\u7F6E\u8D8A\u5927\uFF0C\u9012\u589E\u6982\u7387\u8D8A\u4F4E\uFF0Clfu-decay-time\u8BBE\u7F6E\u8D8A\u5927\uFF0C\u8870\u51CF\u901F\u5EA6\u4F1A\u8D8A\u6162\u3002</p><p>\u6211\u4EEC\u5728\u5E94\u7528 LFU \u7B56\u7565\u65F6\uFF0C\u4E00\u822C\u53EF\u4EE5\u5C06 lfu_log_factor \u53D6\u503C\u4E3A 10\u3002 \u5982\u679C\u4E1A\u52A1\u5E94\u7528\u4E2D\u6709\u77ED\u65F6\u9AD8\u9891\u8BBF\u95EE\u7684\u6570\u636E\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u628A lfu_decay_time \u503C\u8BBE\u7F6E\u4E3A 1\u3002\u53EF\u4EE5\u5FEB\u901F\u8870\u51CF\u8BBF\u95EE\u6B21\u6570\u3002</p></li></ul><blockquote><p>volatile-lfu \u7B56\u7565\u662F Redis 4.0 \u540E\u65B0\u589E\u3002</p></blockquote></li><li><p><strong>allkeys-lru</strong></p><p>\u4F7F\u7528 LRU \u7B97\u6CD5\u5728\u6240\u6709\u6570\u636E\u4E2D\u8FDB\u884C\u7B5B\u9009\u3002\u5177\u4F53LFU\u7B97\u6CD5\u8DDF\u4E0A\u8FF0 volatile-lru \u4E2D\u4ECB\u7ECD\u7684\u4E00\u81F4\uFF0C\u53EA\u662F\u7B5B\u9009\u7684\u6570\u636E\u8303\u56F4\u662F\u5168\u90E8\u7F13\u5B58\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5728\u91CD\u590D\u3002</p></li><li><p><strong>allkeys-random</strong></p><p>\u4ECE\u6240\u6709\u952E\u503C\u5BF9\u4E2D\u968F\u673A\u9009\u62E9\u5E76\u5220\u9664\u6570\u636E\u3002volatile-random \u8DDF allkeys-random\u7B97\u6CD5\u4E00\u6837\uFF0C\u968F\u673A\u5220\u9664\u5C31\u65E0\u6CD5\u89E3\u51B3\u7F13\u5B58\u6C61\u67D3\u95EE\u9898\u3002</p></li><li><p><strong>allkeys-lfu</strong></p><p>\u4F7F\u7528 LFU \u7B97\u6CD5\u5728\u6240\u6709\u6570\u636E\u4E2D\u8FDB\u884C\u7B5B\u9009\u3002\u5177\u4F53LFU\u7B97\u6CD5\u8DDF\u4E0A\u8FF0 volatile-lfu \u4E2D\u4ECB\u7ECD\u7684\u4E00\u81F4\uFF0C\u53EA\u662F\u7B5B\u9009\u7684\u6570\u636E\u8303\u56F4\u662F\u5168\u90E8\u7F13\u5B58\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u5728\u91CD\u590D\u3002</p><p>allkeys-lfu \u7B56\u7565\u662F Redis 4.0 \u540E\u65B0\u589E\u3002</p></li></ol><h2 id="_6-\u6570\u636E\u5E93\u548C\u7F13\u5B58\u4E00\u81F4\u6027" tabindex="-1"><a class="header-anchor" href="#_6-\u6570\u636E\u5E93\u548C\u7F13\u5B58\u4E00\u81F4\u6027" aria-hidden="true">#</a> 6. \u6570\u636E\u5E93\u548C\u7F13\u5B58\u4E00\u81F4\u6027</h2><ul><li><strong>\u95EE\u9898\u6765\u6E90</strong></li></ul><p>\u4F7F\u7528redis\u505A\u4E00\u4E2A\u7F13\u51B2\u64CD\u4F5C\uFF0C\u8BA9\u8BF7\u6C42\u5148\u8BBF\u95EE\u5230redis\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u8BBF\u95EEMySQL\u7B49\u6570\u636E\u5E93\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627204654535.png" alt="image-20220627204654535" loading="lazy"></p><p>\u8BFB\u53D6\u7F13\u5B58\u6B65\u9AA4\u4E00\u822C\u6CA1\u6709\u4EC0\u4E48\u95EE\u9898\uFF0C\u4F46\u662F\u4E00\u65E6\u6D89\u53CA\u5230\u6570\u636E\u66F4\u65B0\uFF1A\u6570\u636E\u5E93\u548C\u7F13\u5B58\u66F4\u65B0\uFF0C\u5C31\u5BB9\u6613\u51FA\u73B0\u7F13\u5B58(Redis)\u548C\u6570\u636E\u5E93\uFF08MySQL\uFF09\u95F4\u7684\u6570\u636E\u4E00\u81F4\u6027\u95EE\u9898\u3002</p><p><strong>\u4E0D\u7BA1\u662F\u5148\u5199MySQL\u6570\u636E\u5E93\uFF0C\u518D\u5220\u9664Redis\u7F13\u5B58\uFF1B\u8FD8\u662F\u5148\u5220\u9664\u7F13\u5B58\uFF0C\u518D\u5199\u5E93\uFF0C\u90FD\u6709\u53EF\u80FD\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5</strong>\u3002\u4E3E\u4E00\u4E2A\u4F8B\u5B50\uFF1A</p><ol><li><p>\u5982\u679C\u5220\u9664\u4E86\u7F13\u5B58Redis\uFF0C\u8FD8\u6CA1\u6709\u6765\u5F97\u53CA\u5199\u5E93MySQL\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u5C31\u6765\u8BFB\u53D6\uFF0C\u53D1\u73B0\u7F13\u5B58\u4E3A\u7A7A\uFF0C\u5219\u53BB\u6570\u636E\u5E93\u4E2D\u8BFB\u53D6\u6570\u636E\u5199\u5165\u7F13\u5B58\uFF0C\u6B64\u65F6\u7F13\u5B58\u4E2D\u4E3A\u810F\u6570\u636E\u3002</p></li><li><p>\u5982\u679C\u5148\u5199\u4E86\u5E93\uFF0C\u5728\u5220\u9664\u7F13\u5B58\u524D\uFF0C\u5199\u5E93\u7684\u7EBF\u7A0B\u5B95\u673A\u4E86\uFF0C\u6CA1\u6709\u5220\u9664\u6389\u7F13\u5B58\uFF0C\u5219\u4E5F\u4F1A\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u60C5\u51B5\u3002</p></li></ol><p>\u56E0\u4E3A\u5199\u548C\u8BFB\u662F\u5E76\u53D1\u7684\uFF0C\u6CA1\u6CD5\u4FDD\u8BC1\u987A\u5E8F,\u5C31\u4F1A\u51FA\u73B0\u7F13\u5B58\u548C\u6570\u636E\u5E93\u7684\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u95EE\u9898\u3002</p><h3 id="_6-1-\u56DB\u79CD\u76F8\u5173\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_6-1-\u56DB\u79CD\u76F8\u5173\u6A21\u5F0F" aria-hidden="true">#</a> 6.1 \u56DB\u79CD\u76F8\u5173\u6A21\u5F0F</h3>`,48),c=l("\u66F4\u65B0\u7F13\u5B58\u7684\u7684Design Pattern\u6709\u56DB\u79CD\uFF1ACache aside, Read through, Write through, Write behind caching; \u6211\u5F3A\u70C8\u5EFA\u8BAE\u4F60\u770B\u770B\u8FD9\u7BC7\uFF0C\u5DE6\u8033\u6735\u8017\u5B50\u7684\u6587\u7AE0\uFF1A"),h={href:"https://coolshell.cn/articles/17416.html",target:"_blank",rel:"noopener noreferrer"},g=l("\u7F13\u5B58\u66F4\u65B0\u7684\u5957\u8DEF"),u=s('<p><strong>\u8282\u9009\u6700\u6700\u5E38\u7528\u7684Cache Aside Pattern, \u603B\u7ED3\u6765\u8BF4\u5C31\u662F</strong></p><ul><li><p><strong>\u8BFB\u7684\u65F6\u5019</strong>\uFF0C\u5148\u8BFB\u7F13\u5B58\uFF0C\u7F13\u5B58\u6CA1\u6709\u7684\u8BDD\uFF0C\u5C31\u8BFB\u6570\u636E\u5E93\uFF0C\u7136\u540E\u53D6\u51FA\u6570\u636E\u540E\u653E\u5165\u7F13\u5B58\uFF0C\u540C\u65F6\u8FD4\u56DE\u54CD\u5E94\u3002</p></li><li><p><strong>\u66F4\u65B0\u7684\u65F6\u5019</strong>\uFF0C\u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C<strong>\u7136\u540E\u518D\u5220\u9664\u7F13\u5B58</strong>\u3002</p><blockquote><p>\u6CE8\u610F\uFF01\uFF01\uFF01\u8FD9\u91CC<strong>\u662F\u5220\u9664\u7F13\u5B58\uFF01\u662F\u5220\u9664\u7F13\u5B58\uFF01\u662F\u5220\u9664\u7F13\u5B58\uFF01</strong>\uFF0C\u6211\u4EEC\u9879\u76EE\u4E2D\u5927\u90E8\u5206\u662F\u66F4\u65B0\u7ACB\u9A6C\u5199\u5165\u6570\u636E</p></blockquote></li></ul><p>\u5176\u5177\u4F53\u903B\u8F91\u5982\u4E0B\uFF1A</p><ul><li><strong>\u5931\u6548</strong>\uFF1A\u5E94\u7528\u7A0B\u5E8F\u5148\u4ECEcache\u53D6\u6570\u636E\uFF0C\u6CA1\u6709\u5F97\u5230\uFF0C\u5219\u4ECE\u6570\u636E\u5E93\u4E2D\u53D6\u6570\u636E\uFF0C\u6210\u529F\u540E\uFF0C\u653E\u5230\u7F13\u5B58\u4E2D\u3002</li><li><strong>\u547D\u4E2D</strong>\uFF1A\u5E94\u7528\u7A0B\u5E8F\u4ECEcache\u4E2D\u53D6\u6570\u636E\uFF0C\u53D6\u5230\u540E\u8FD4\u56DE\u3002</li><li><strong>\u66F4\u65B0</strong>\uFF1A\u5148\u628A\u6570\u636E\u5B58\u5230\u6570\u636E\u5E93\u4E2D\uFF0C\u6210\u529F\u540E\uFF0C\u518D\u8BA9\u7F13\u5B58\u5931\u6548\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627205349486.png" alt="image-20220627205349486" loading="lazy"></p><p>\u6CE8\u610F\uFF0C\u6211\u4EEC\u7684\u66F4\u65B0\u662F\u5148\u66F4\u65B0\u6570\u636E\u5E93\uFF0C\u6210\u529F\u540E\uFF0C\u8BA9\u7F13\u5B58\u5931\u6548\u3002\u90A3\u4E48\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u662F\u5426\u53EF\u4EE5\u6CA1\u6709\u6587\u7AE0\u524D\u9762\u63D0\u5230\u8FC7\u7684\u90A3\u4E2A\u95EE\u9898\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u8111\u8865\u4E00\u4E0B\u3002</p><p>\u4E00\u4E2A\u662F\u67E5\u8BE2\u64CD\u4F5C\uFF0C\u4E00\u4E2A\u662F\u66F4\u65B0\u64CD\u4F5C\u7684\u5E76\u53D1\uFF0C\u9996\u5148\uFF0C\u6CA1\u6709\u4E86\u5220\u9664cache\u6570\u636E\u7684\u64CD\u4F5C\u4E86\uFF0C\u800C\u662F\u5148\u66F4\u65B0\u4E86\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\uFF0C\u6B64\u65F6\uFF0C\u7F13\u5B58\u4F9D\u7136\u6709\u6548\uFF0C\u6240\u4EE5\uFF0C\u5E76\u53D1\u7684\u67E5\u8BE2\u64CD\u4F5C\u62FF\u7684\u662F\u6CA1\u6709\u66F4\u65B0\u7684\u6570\u636E\uFF0C\u4F46\u662F\uFF0C\u66F4\u65B0\u64CD\u4F5C\u9A6C\u4E0A\u8BA9\u7F13\u5B58\u7684\u5931\u6548\u4E86\uFF0C\u540E\u7EED\u7684\u67E5\u8BE2\u64CD\u4F5C\u518D\u628A\u6570\u636E\u4ECE\u6570\u636E\u5E93\u4E2D\u62C9\u51FA\u6765\u3002\u800C<strong>\u4E0D\u4F1A\u50CF\u6587\u7AE0\u5F00\u5934\u7684\u90A3\u4E2A\u903B\u8F91\u4EA7\u751F\u7684\u95EE\u9898\uFF0C\u540E\u7EED\u7684\u67E5\u8BE2\u64CD\u4F5C\u4E00\u76F4\u90FD\u5728\u53D6\u8001\u7684\u6570\u636E</strong>\u3002</p>',7),_=l("\u8FD9\u662F\u6807\u51C6\u7684design pattern\uFF0C\u5305\u62ECFacebook\u7684\u8BBA\u6587\u300A"),b={href:"https://www.usenix.org/system/files/conference/nsdi13/nsdi13-final170_update.pdf",target:"_blank",rel:"noopener noreferrer"},m=l("Scaling Memcache at Facebook (opens new window)"),f=l("\u300B\u4E5F\u4F7F\u7528\u4E86\u8FD9\u4E2A\u7B56\u7565\u3002\u4E3A\u4EC0\u4E48\u4E0D\u662F\u5199\u5B8C\u6570\u636E\u5E93\u540E\u66F4\u65B0\u7F13\u5B58\uFF1F\u4F60\u53EF\u4EE5\u770B\u4E00\u4E0BQuora\u4E0A\u7684\u8FD9\u4E2A\u95EE\u7B54\u300A"),y={href:"https://www.quora.com/Why-does-Facebook-use-delete-to-remove-the-key-value-pair-in-Memcached-instead-of-updating-the-Memcached-during-write-request-to-the-backend",target:"_blank",rel:"noopener noreferrer"},R=l("Why does Facebook use delete to remove the key-value pair in Memcached instead of updating the Memcached during write request to the backend? (opens new window)"),k=l("\u300B\uFF0C\u4E3B\u8981\u662F\u6015\u4E24\u4E2A\u5E76\u53D1\u7684\u5199\u64CD\u4F5C\u5BFC\u81F4\u810F\u6570\u636E\u3002"),v=s('<p>\u90A3\u4E48\uFF0C\u662F\u4E0D\u662FCache Aside\u8FD9\u4E2A\u5C31\u4E0D\u4F1A\u6709\u5E76\u53D1\u95EE\u9898\u4E86\uFF1F\u4E0D\u662F\u7684\uFF0C\u6BD4\u5982\uFF0C\u4E00\u4E2A\u662F\u8BFB\u64CD\u4F5C\uFF0C\u4F46\u662F\u6CA1\u6709\u547D\u4E2D\u7F13\u5B58\uFF0C\u7136\u540E\u5C31\u5230\u6570\u636E\u5E93\u4E2D\u53D6\u6570\u636E\uFF0C\u6B64\u65F6\u6765\u4E86\u4E00\u4E2A\u5199\u64CD\u4F5C\uFF0C\u5199\u5B8C\u6570\u636E\u5E93\u540E\uFF0C\u8BA9\u7F13\u5B58\u5931\u6548\uFF0C\u7136\u540E\uFF0C\u4E4B\u524D\u7684\u90A3\u4E2A\u8BFB\u64CD\u4F5C\u518D\u628A\u8001\u7684\u6570\u636E\u653E\u8FDB\u53BB\uFF0C\u6240\u4EE5\uFF0C\u4F1A\u9020\u6210\u810F\u6570\u636E\u3002</p><p>\u4F46\uFF0C\u8FD9\u4E2Acase\u7406\u8BBA\u4E0A\u4F1A\u51FA\u73B0\uFF0C\u4E0D\u8FC7\uFF0C\u5B9E\u9645\u4E0A\u51FA\u73B0\u7684\u6982\u7387\u53EF\u80FD\u975E\u5E38\u4F4E\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u6761\u4EF6\u9700\u8981\u53D1\u751F\u5728\u8BFB\u7F13\u5B58\u65F6\u7F13\u5B58\u5931\u6548\uFF0C\u800C\u4E14\u5E76\u53D1\u7740\u6709\u4E00\u4E2A\u5199\u64CD\u4F5C\u3002\u800C\u5B9E\u9645\u4E0A\u6570\u636E\u5E93\u7684\u5199\u64CD\u4F5C\u4F1A\u6BD4\u8BFB\u64CD\u4F5C\u6162\u5F97\u591A\uFF0C\u800C\u4E14\u8FD8\u8981\u9501\u8868\uFF0C\u800C\u8BFB\u64CD\u4F5C\u5FC5\u9700\u5728\u5199\u64CD\u4F5C\u524D\u8FDB\u5165\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u800C\u53C8\u8981\u665A\u4E8E\u5199\u64CD\u4F5C\u66F4\u65B0\u7F13\u5B58\uFF0C\u6240\u6709\u7684\u8FD9\u4E9B\u6761\u4EF6\u90FD\u5177\u5907\u7684\u6982\u7387\u57FA\u672C\u5E76\u4E0D\u5927\u3002</p><p>\u6240\u4EE5\uFF0C\u8FD9\u4E5F\u5C31\u662FQuora\u4E0A\u7684\u90A3\u4E2A\u7B54\u6848\u91CC\u8BF4\u7684\uFF0C\u8981\u4E48\u901A\u8FC72PC\u6216\u662FPaxos\u534F\u8BAE\u4FDD\u8BC1\u4E00\u81F4\u6027\uFF0C\u8981\u4E48\u5C31\u662F\u62FC\u547D\u7684\u964D\u4F4E\u5E76\u53D1\u65F6\u810F\u6570\u636E\u7684\u6982\u7387\uFF0C<strong>\u800CFacebook\u4F7F\u7528\u4E86\u8FD9\u4E2A\u964D\u4F4E\u6982\u7387\u7684\u73A9\u6CD5\uFF0C\u56E0\u4E3A2PC\u592A\u6162\uFF0C\u800CPaxos\u592A\u590D\u6742</strong>\u3002\u5F53\u7136\uFF0C\u6700\u597D\u8FD8\u662F\u4E3A\u7F13\u5B58\u8BBE\u7F6E\u4E0A\u8FC7\u671F\u65F6\u95F4\u3002</p><h3 id="_6-2-\u65B9\u6848-\u961F\u5217-\u91CD\u8BD5\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_6-2-\u65B9\u6848-\u961F\u5217-\u91CD\u8BD5\u673A\u5236" aria-hidden="true">#</a> 6.2 \u65B9\u6848\uFF1A\u961F\u5217 + \u91CD\u8BD5\u673A\u5236</h3><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627210026227.png" alt="image-20220627210026227" style="zoom:50%;"><p>\u6D41\u7A0B\u5982\u4E0B\u6240\u793A</p><ul><li>\u66F4\u65B0\u6570\u636E\u5E93\u6570\u636E\uFF1B</li><li>\u7F13\u5B58\u56E0\u4E3A\u79CD\u79CD\u95EE\u9898\u5220\u9664\u5931\u8D25</li><li>\u5C06\u9700\u8981\u5220\u9664\u7684key\u53D1\u9001\u81F3\u6D88\u606F\u961F\u5217</li><li>\u81EA\u5DF1\u6D88\u8D39\u6D88\u606F\uFF0C\u83B7\u5F97\u9700\u8981\u5220\u9664\u7684key</li><li>\u7EE7\u7EED\u91CD\u8BD5\u5220\u9664\u64CD\u4F5C\uFF0C\u76F4\u5230\u6210\u529F</li></ul><p>\u7136\u800C\uFF0C\u8BE5\u65B9\u6848\u6709\u4E00\u4E2A\u7F3A\u70B9\uFF0C\u5BF9\u4E1A\u52A1\u7EBF\u4EE3\u7801\u9020\u6210\u5927\u91CF\u7684\u4FB5\u5165\u3002\u4E8E\u662F\u6709\u4E86\u65B9\u6848\u4E8C\uFF0C\u5728\u65B9\u6848\u4E8C\u4E2D\uFF0C\u542F\u52A8\u4E00\u4E2A\u8BA2\u9605\u7A0B\u5E8F\u53BB\u8BA2\u9605\u6570\u636E\u5E93\u7684binlog\uFF0C\u83B7\u5F97\u9700\u8981\u64CD\u4F5C\u7684\u6570\u636E\u3002\u5728\u5E94\u7528\u7A0B\u5E8F\u4E2D\uFF0C\u53E6\u8D77\u4E00\u6BB5\u7A0B\u5E8F\uFF0C\u83B7\u5F97\u8FD9\u4E2A\u8BA2\u9605\u7A0B\u5E8F\u4F20\u6765\u7684\u4FE1\u606F\uFF0C\u8FDB\u884C\u5220\u9664\u7F13\u5B58\u64CD\u4F5C\u3002</p><h3 id="_6-3-\u65B9\u6848-\u5F02\u6B65\u66F4\u65B0\u7F13\u5B58-\u57FA\u4E8E\u8BA2\u9605binlog\u7684\u540C\u6B65\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_6-3-\u65B9\u6848-\u5F02\u6B65\u66F4\u65B0\u7F13\u5B58-\u57FA\u4E8E\u8BA2\u9605binlog\u7684\u540C\u6B65\u673A\u5236" aria-hidden="true">#</a> 6.3 \u65B9\u6848\uFF1A\u5F02\u6B65\u66F4\u65B0\u7F13\u5B58(\u57FA\u4E8E\u8BA2\u9605binlog\u7684\u540C\u6B65\u673A\u5236)</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220627210130898.png" alt="image-20220627210130898" loading="lazy"></p><ol><li><strong>\u6280\u672F\u6574\u4F53\u601D\u8DEF</strong>\uFF1A</li></ol><p>MySQL binlog\u589E\u91CF\u8BA2\u9605\u6D88\u8D39+\u6D88\u606F\u961F\u5217+\u589E\u91CF\u6570\u636E\u66F4\u65B0\u5230redis</p><p>1\uFF09\u8BFBRedis\uFF1A\u70ED\u6570\u636E\u57FA\u672C\u90FD\u5728Redis</p><p>2\uFF09\u5199MySQL: \u589E\u5220\u6539\u90FD\u662F\u64CD\u4F5CMySQL</p><p>3\uFF09\u66F4\u65B0Redis\u6570\u636E\uFF1AMySQ\u7684\u6570\u636E\u64CD\u4F5Cbinlog\uFF0C\u6765\u66F4\u65B0\u5230Redis</p><ol start="2"><li><strong>Redis\u66F4\u65B0</strong></li></ol><p>1\uFF09<strong>\u6570\u636E\u64CD\u4F5C</strong>\u4E3B\u8981\u5206\u4E3A\u4E24\u5927\u5757\uFF1A</p><ul><li>\u4E00\u4E2A\u662F\u5168\u91CF(\u5C06\u5168\u90E8\u6570\u636E\u4E00\u6B21\u5199\u5165\u5230redis)</li><li>\u4E00\u4E2A\u662F\u589E\u91CF\uFF08\u5B9E\u65F6\u66F4\u65B0\uFF09</li></ul><p>\u8FD9\u91CC\u8BF4\u7684\u662F\u589E\u91CF,\u6307\u7684\u662Fmysql\u7684update\u3001insert\u3001delate\u53D8\u66F4\u6570\u636E\u3002</p><p>2\uFF09<strong>\u8BFB\u53D6binlog\u540E\u5206\u6790 \uFF0C\u5229\u7528\u6D88\u606F\u961F\u5217,\u63A8\u9001\u66F4\u65B0\u5404\u53F0\u7684redis\u7F13\u5B58\u6570\u636E</strong>\u3002</p><p>\u8FD9\u6837\u4E00\u65E6MySQL\u4E2D\u4EA7\u751F\u4E86\u65B0\u7684\u5199\u5165\u3001\u66F4\u65B0\u3001\u5220\u9664\u7B49\u64CD\u4F5C\uFF0C\u5C31\u53EF\u4EE5\u628Abinlog\u76F8\u5173\u7684\u6D88\u606F\u63A8\u9001\u81F3Redis\uFF0CRedis\u518D\u6839\u636Ebinlog\u4E2D\u7684\u8BB0\u5F55\uFF0C\u5BF9Redis\u8FDB\u884C\u66F4\u65B0\u3002</p><p>\u5176\u5B9E\u8FD9\u79CD\u673A\u5236\uFF0C\u5F88\u7C7B\u4F3CMySQL\u7684\u4E3B\u4ECE\u5907\u4EFD\u673A\u5236\uFF0C\u56E0\u4E3AMySQL\u7684\u4E3B\u5907\u4E5F\u662F\u901A\u8FC7binlog\u6765\u5B9E\u73B0\u7684\u6570\u636E\u4E00\u81F4\u6027\u3002</p><p>\u8FD9\u91CC\u53EF\u4EE5\u7ED3\u5408\u4F7F\u7528canal(\u963F\u91CC\u7684\u4E00\u6B3E\u5F00\u6E90\u6846\u67B6)\uFF0C\u901A\u8FC7\u8BE5\u6846\u67B6\u53EF\u4EE5\u5BF9MySQL\u7684binlog\u8FDB\u884C\u8BA2\u9605\uFF0C\u800Ccanal\u6B63\u662F\u6A21\u4EFF\u4E86mysql\u7684slave\u6570\u636E\u5E93\u7684\u5907\u4EFD\u8BF7\u6C42\uFF0C\u4F7F\u5F97Redis\u7684\u6570\u636E\u66F4\u65B0\u8FBE\u5230\u4E86\u76F8\u540C\u7684\u6548\u679C\u3002</p><p>\u5F53\u7136\uFF0C\u8FD9\u91CC\u7684\u6D88\u606F\u63A8\u9001\u5DE5\u5177\u4F60\u4E5F\u53EF\u4EE5\u91C7\u7528\u522B\u7684\u7B2C\u4E09\u65B9\uFF1Akafka\u3001rabbitMQ\u7B49\u6765\u5B9E\u73B0\u63A8\u9001\u66F4\u65B0Redis\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',25),L={href:"https://pdai.tech/md/db/nosql-redis/db-redis-x-cache.html",target:"_blank",rel:"noopener noreferrer"},x=e("strong",null,"Redis\u8FDB\u9636 - \u7F13\u5B58\u95EE\u9898\uFF1A\u4E00\u81F4\u6027, \u7A7F\u51FB, \u7A7F\u900F, \u96EA\u5D29, \u6C61\u67D3\u7B49",-1);function U(z,F){const i=n("ExternalLinkIcon");return a(),r("div",null,[p,e("blockquote",null,[e("p",null,[c,e("a",h,[g,o(i)])])]),u,e("p",null,[_,e("a",b,[m,o(i)]),f,e("a",y,[R,o(i)]),k]),v,e("p",null,[e("a",L,[x,o(i)])])])}const w=t(d,[["render",U],["__file","db-redis-x-cache.html.vue"]]);export{w as default};
