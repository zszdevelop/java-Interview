import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as e,b as n,d as o,e as s,r as l}from"./app.52f5bdc7.js";const d={},p=o(`<h1 id="springboot\u63A5\u53E3-\u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49" tabindex="-1"><a class="header-anchor" href="#springboot\u63A5\u53E3-\u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49" aria-hidden="true">#</a> SpringBoot\u63A5\u53E3 - \u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49</h1><blockquote><p>\u5728\u4EE5SpringBoot\u5F00\u53D1Restful\u63A5\u53E3\u65F6\uFF0C\u5982\u4F55\u9632\u6B62\u63A5\u53E3\u7684\u91CD\u590D\u63D0\u4EA4\u5462\uFF1F \u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\u63A5\u53E3\u5E42\u7B49\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\uFF0C\u5E76\u5B9E\u8DF5\u5E38\u89C1\u57FA\u4E8EToken\u5B9E\u73B0\u63A5\u53E3\u5E42\u7B49</p></blockquote><h2 id="_1-\u51C6\u5907\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u51C6\u5907\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 1. \u51C6\u5907\u77E5\u8BC6\u70B9</h2><blockquote><p>\u4ECE\u5E42\u7B49\u548C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\uFF0C\u63A5\u53E3\u5E42\u7B49\u548C\u5E38\u89C1\u7684\u4FDD\u8BC1\u5E42\u7B49\u7684\u65B9\u5F0F\u7B49\u77E5\u8BC6\u70B9\u6784\u7B51\u77E5\u8BC6\u4F53\u7CFB\u3002</p></blockquote><h3 id="_1-1-\u4EC0\u4E48\u662F\u5E42\u7B49" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u662F\u5E42\u7B49" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u662F\u5E42\u7B49\uFF1F</h3><blockquote><p>\u5E42\u7B49\u539F\u5148\u662F\u6570\u5B66\u4E2D\u7684\u4E00\u4E2A\u6982\u5FF5\uFF0C\u8868\u793A\u8FDB\u884C1\u6B21\u53D8\u6362\u548C\u8FDB\u884CN\u6B21\u53D8\u6362\u4EA7\u751F\u7684\u6548\u679C\u76F8\u540C\u3002</p></blockquote><p>\u5F53\u6211\u4EEC\u8BA8\u8BBA\u63A5\u53E3\u7684\u5E42\u7B49\u6027\u65F6\u4E00\u822C\u662F\u5728\u8BF4\uFF1A\u4EE5\u76F8\u540C\u7684\u8BF7\u6C42\u8C03\u7528\u8FD9\u4E2A\u63A5\u53E3\u4E00\u6B21\u548C\u8C03\u7528\u8FD9\u4E2A\u63A5\u53E3\u591A\u6B21\uFF0C\u5BF9\u7CFB\u7EDF\u4EA7\u751F\u7684\u5F71\u54CD\u662F\u76F8\u540C\u7684\u3002\u5982\u679C\u4E00\u4E2A\u63A5\u53E3\u6EE1\u8DB3\u8FD9\u4E2A\u7279\u6027\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u8BF4\u8FD9\u4E2A \u63A5\u53E3\u662F\u4E00\u4E2A\u5E42\u7B49\u63A5\u53E3\u3002</p><h4 id="_1-1-1-\u63A5\u53E3\u5E42\u7B49\u548C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u662F\u4E00\u56DE\u4E8B\u5417" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u63A5\u53E3\u5E42\u7B49\u548C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u662F\u4E00\u56DE\u4E8B\u5417" aria-hidden="true">#</a> 1.1.1 <strong>\u63A5\u53E3\u5E42\u7B49\u548C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u662F\u4E00\u56DE\u4E8B\u5417</strong>\uFF1F</h4><p>\u4E25\u683C\u6765\u8BF4\uFF0C\u5E76\u4E0D\u662F\u3002</p><ol><li><strong>\u5E42\u7B49</strong>: \u66F4\u591A\u7684\u662F\u5728\u91CD\u590D\u8BF7\u6C42\u5DF2\u7ECF\u53D1\u751F\uFF0C\u6216\u662F\u65E0\u6CD5\u907F\u514D\u7684\u60C5\u51B5\u4E0B\uFF0C\u91C7\u53D6\u4E00\u5B9A\u7684\u6280\u672F\u624B\u6BB5\u8BA9\u8FD9\u4E9B\u91CD\u590D\u8BF7\u6C42\u4E0D\u7ED9\u7CFB\u7EDF\u5E26\u6765\u526F\u4F5C\u7528\u3002</li><li><strong>\u9632\u6B62\u91CD\u590D</strong>: \u63D0\u4EA4\u66F4\u591A\u7684\u662F\u4E0D\u8BA9\u7528\u6237\u53D1\u8D77\u591A\u6B21\u4E00\u6837\u7684\u8BF7\u6C42\u3002\u6BD4\u5982\u8BF4\u7528\u6237\u5728\u7EBF\u8D2D\u7269\u4E0B\u5355\u65F6\u70B9\u4E86\u63D0\u4EA4\u8BA2\u5355\u6309\u94AE\uFF0C\u4F46\u662F\u7531\u4E8E\u7F51\u7EDC\u539F\u56E0\u54CD\u5E94\u5F88\u6162\uFF0C\u6B64\u65F6\u7528\u6237\u6BD4\u8F83\u5FC3\u6025\u591A\u6B21\u70B9\u51FB\u4E86\u8BA2\u5355\u63D0\u4EA4\u6309\u94AE\u3002 \u8FD9\u79CD\u60C5\u51B5\u4E0B\u5C31\u53EF\u80FD\u4F1A\u9020\u6210\u591A\u6B21\u4E0B\u5355\u3002\u4E00\u822C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u7684\u65B9\u6848\u6709\uFF1A\u5C06\u8BA2\u5355\u6309\u94AE\u7F6E\u7070\uFF0C\u8DF3\u8F6C\u5230\u7ED3\u679C\u9875\u7B49\u3002\u4E3B\u8981\u8FD8\u662F\u4ECE\u5BA2\u6237\u7AEF\u7684\u89D2\u5EA6\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002</li></ol><h4 id="_1-1-2-\u54EA\u4E9B\u60C5\u51B5\u4E0B\u5BA2\u6237\u7AEF\u662F\u9632\u6B62\u4E0D\u4E86\u91CD\u590D\u63D0\u4EA4\u7684" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u54EA\u4E9B\u60C5\u51B5\u4E0B\u5BA2\u6237\u7AEF\u662F\u9632\u6B62\u4E0D\u4E86\u91CD\u590D\u63D0\u4EA4\u7684" aria-hidden="true">#</a> 1.1.2 <strong>\u54EA\u4E9B\u60C5\u51B5\u4E0B\u5BA2\u6237\u7AEF\u662F\u9632\u6B62\u4E0D\u4E86\u91CD\u590D\u63D0\u4EA4\u7684</strong>\uFF1F</h4><p>\u867D\u7136\u6211\u4EEC\u53EF\u5728\u5BA2\u6237\u7AEF\u505A\u4E00\u4E9B\u9632\u6B62\u63A5\u53E3\u91CD\u590D\u63D0\u4EA4\u7684\u4E8B\uFF08\u6BD4\u5982\u5C06\u8BA2\u5355\u6309\u94AE\u7F6E\u7070\uFF0C\u8DF3\u8F6C\u5230\u7ED3\u679C\u9875\u7B49\uFF09\uFF0C \u4F46\u662F\u5982\u4E0B\u60C5\u51B5\u4F9D\u7136\u5BA2\u6237\u7AEF\u662F\u5F88\u96BE\u63A7\u5236\u63A5\u53E3\u91CD\u590D\u63D0\u4EA4\u5230\u540E\u53F0\u7684\uFF0C\u8FD9\u4E5F\u8FDB\u4E00\u6B65\u8868\u660E\u4E86<strong>\u63A5\u53E3\u5E42\u7B49\u548C\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u4E0D\u662F\u4E00\u56DE\u4E8B</strong>\u4EE5\u53CA<strong>\u540E\u7AEF\u63A5\u53E3\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49\u7684\u5FC5\u8981\u6027</strong>\u6240\u5728\u3002</p><ol><li><strong>\u63A5\u53E3\u8D85\u65F6\u91CD\u8BD5</strong>\uFF1A\u63A5\u53E3\u53EF\u80FD\u4F1A\u56E0\u4E3A\u67D0\u4E9B\u539F\u56E0\u800C\u8C03\u7528\u5931\u8D25\uFF0C\u51FA\u4E8E\u5BB9\u9519\u6027\u8003\u8651\u4F1A\u52A0\u4E0A\u5931\u8D25\u91CD\u8BD5\u7684\u673A\u5236\u3002\u5982\u679C\u63A5\u53E3\u8C03\u7528\u4E00\u534A\uFF0C\u518D\u6B21\u8C03\u7528\u5C31\u4F1A\u56E0\u4E3A\u810F\u6570\u636E\u7684\u5B58\u5728\u800C\u51FA\u73B0\u5F02\u5E38\u3002</li><li><strong>\u6D88\u606F\u91CD\u590D\u6D88\u8D39</strong>\uFF1A\u5728\u4F7F\u7528\u6D88\u606F\u4E2D\u95F4\u4EF6\u6765\u5904\u7406\u6D88\u606F\u961F\u5217\uFF0C\u4E14\u624B\u52A8ack\u786E\u8BA4\u6D88\u606F\u88AB\u6B63\u5E38\u6D88\u8D39\u65F6\u3002\u5982\u679C\u6D88\u8D39\u8005\u7A81\u7136\u65AD\u5F00\u8FDE\u63A5\uFF0C\u90A3\u4E48\u5DF2\u7ECF\u6267\u884C\u4E86\u4E00\u534A\u7684\u6D88\u606F\u4F1A\u91CD\u65B0\u653E\u56DE\u961F\u5217\u3002\u88AB\u5176\u4ED6\u6D88\u8D39\u8005\u91CD\u65B0\u6D88\u8D39\u65F6\u5C31\u4F1A\u5BFC\u81F4\u7ED3\u679C\u5F02\u5E38\uFF0C\u5982\u6570\u636E\u5E93\u91CD\u590D\u6570\u636E\uFF0C\u6570\u636E\u5E93\u6570\u636E\u51B2\u7A81\uFF0C\u8D44\u6E90\u91CD\u590D\u7B49\u3002</li><li><strong>\u8BF7\u6C42\u91CD\u53D1</strong>\uFF1A\u7F51\u7EDC\u6296\u52A8\u5F15\u53D1\u7684nginx\u91CD\u53D1\u8BF7\u6C42\uFF0C\u9020\u6210\u91CD\u590D\u8C03\u7528\uFF1B</li></ol><h3 id="_1-2-\u4EC0\u4E48\u662F\u63A5\u53E3\u5E42\u7B49" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4EC0\u4E48\u662F\u63A5\u53E3\u5E42\u7B49" aria-hidden="true">#</a> 1.2 \u4EC0\u4E48\u662F\u63A5\u53E3\u5E42\u7B49\uFF1F</h3><p>\u5728HTTP/1.1\u4E2D\uFF0C\u5BF9\u5E42\u7B49\u6027\u8FDB\u884C\u4E86\u5B9A\u4E49\u3002\u5B83\u63CF\u8FF0\u4E86\u4E00\u6B21\u548C\u591A\u6B21\u8BF7\u6C42\u67D0\u4E00\u4E2A\u8D44\u6E90\u5BF9\u4E8E\u8D44\u6E90\u672C\u8EAB\u5E94\u8BE5\u5177\u6709\u540C\u6837\u7684\u7ED3\u679C\uFF08\u7F51\u7EDC\u8D85\u65F6\u7B49\u95EE\u9898\u9664\u5916\uFF09\uFF0C\u5373\u7B2C\u4E00\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u5BF9\u8D44\u6E90\u4EA7\u751F\u4E86\u526F\u4F5C\u7528\uFF0C\u4F46\u662F\u4EE5\u540E\u7684\u591A\u6B21\u8BF7\u6C42\u90FD\u4E0D\u4F1A\u518D\u5BF9\u8D44\u6E90\u4EA7\u751F\u526F\u4F5C\u7528\u3002</p><p>\u8FD9\u91CC\u7684\u526F\u4F5C\u7528\u662F\u4E0D\u4F1A\u5BF9\u7ED3\u679C\u4EA7\u751F\u7834\u574F\u6216\u8005\u4EA7\u751F\u4E0D\u53EF\u9884\u6599\u7684\u7ED3\u679C\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5176\u4EFB\u610F\u591A\u6B21\u6267\u884C\u5BF9\u8D44\u6E90\u672C\u8EAB\u6240\u4EA7\u751F\u7684\u5F71\u54CD\u5747\u4E0E\u4E00\u6B21\u6267\u884C\u7684\u5F71\u54CD\u76F8\u540C\u3002</p><ul><li><strong>\u5BF9\u54EA\u4E9B\u7C7B\u578B\u7684\u63A5\u53E3\u9700\u8981\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49</strong>\uFF1F</li></ul><p>\u6211\u4EEC\u770B\u4E0B\u6807\u51C6\u7684restful\u8BF7\u6C42\uFF0C\u5E42\u7B49\u60C5\u51B5\u662F\u600E\u4E48\u6837\u7684\uFF1A</p><ol><li>SELECT\u67E5\u8BE2\u64CD\u4F5C <ol><li>GET\uFF1A\u53EA\u662F\u83B7\u53D6\u8D44\u6E90\uFF0C\u5BF9\u8D44\u6E90\u672C\u8EAB\u6CA1\u6709\u4EFB\u4F55\u526F\u4F5C\u7528\uFF0C\u5929\u7136\u7684\u5E42\u7B49\u6027\u3002</li><li>HEAD\uFF1A\u672C\u8D28\u4E0A\u548CGET\u4E00\u6837\uFF0C\u83B7\u53D6\u5934\u4FE1\u606F\uFF0C\u4E3B\u8981\u662F\u63A2\u6D3B\u7684\u4F5C\u7528\uFF0C\u5177\u6709\u5E42\u7B49\u6027\u3002</li><li>OPTIONS\uFF1A\u83B7\u53D6\u5F53\u524DURL\u6240\u652F\u6301\u7684\u65B9\u6CD5\uFF0C\u56E0\u6B64\u4E5F\u662F\u5177\u6709\u5E42\u7B49\u6027\u7684\u3002</li></ol></li><li>DELETE\u5220\u9664\u64CD\u4F5C <ol><li>\u5220\u9664\u7684\u64CD\u4F5C\uFF0C\u5982\u679C\u4ECE\u5220\u9664\u7684\u4E00\u6B21\u548C\u5220\u9664\u591A\u6B21\u7684\u89D2\u5EA6\u770B\uFF0C\u6570\u636E\u5E76\u4E0D\u4F1A\u53D8\u5316\uFF0C\u8FD9\u4E2A\u89D2\u5EA6\u770B\u5B83\u662F\u5E42\u7B49\u7684</li><li>\u4F46\u662F\u5982\u679C\uFF0C\u4ECE\u53E6\u5916\u4E00\u4E2A\u89D2\u5EA6\uFF0C\u5220\u9664\u6570\u636E\u4E00\u822C\u662F\u8FD4\u56DE\u53D7\u5F71\u54CD\u7684\u884C\u6570\uFF0C\u5220\u9664\u4E00\u6B21\u548C\u591A\u6B21\u5220\u9664\u8FD4\u56DE\u7684\u53D7\u5F71\u54CD\u884C\u6570\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u6240\u4EE5\u4ECE\u8FD9\u4E2A\u89D2\u5EA6\u5B83\u9700\u8981\u4FDD\u8BC1\u5E42\u7B49\u3002\uFF08\u6298\u4E2D\u800C\u8A00DELETE\u64CD\u4F5C\u901A\u5E38\u4E5F\u4F1A\u88AB\u7EB3\u5165\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49\u7684\u8981\u6C42\uFF09</li></ol></li><li>ADD/EDIT\u64CD\u4F5C <ol><li>PUT\uFF1A\u7528\u4E8E\u66F4\u65B0\u8D44\u6E90\uFF0C\u6709\u526F\u4F5C\u7528\uFF0C\u4F46\u662F\u5B83\u5E94\u8BE5\u6EE1\u8DB3\u5E42\u7B49\u6027\uFF0C\u6BD4\u5982\u6839\u636Eid\u66F4\u65B0\u6570\u636E\uFF0C\u8C03\u7528\u591A\u6B21\u548CN\u6B21\u7684\u4F5C\u7528\u662F\u76F8\u540C\u7684\uFF08\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u800C\u53D8\uFF09\u3002</li><li>POST\uFF1A\u7528\u4E8E\u6DFB\u52A0\u8D44\u6E90\uFF0C\u591A\u6B21\u63D0\u4EA4\u5F88\u53EF\u80FD\u4EA7\u751F\u526F\u4F5C\u7528\uFF0C\u6BD4\u5982\u8BA2\u5355\u63D0\u4EA4\uFF0C\u591A\u6B21\u63D0\u4EA4\u5F88\u53EF\u80FD\u4EA7\u751F\u591A\u7B14\u8BA2\u5355\u3002</li></ol></li></ol><h2 id="_2-\u5E38\u89C1\u7684\u4FDD\u8BC1\u5E42\u7B49\u7684\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u5E38\u89C1\u7684\u4FDD\u8BC1\u5E42\u7B49\u7684\u65B9\u5F0F" aria-hidden="true">#</a> 2. \u5E38\u89C1\u7684\u4FDD\u8BC1\u5E42\u7B49\u7684\u65B9\u5F0F\uFF1F</h2><blockquote><p>\u6211\u4EEC\u6765\u770B\u4E0B\u5E38\u89C1\u7684\u4FDD\u8BC1\u5E42\u7B49\u7684\u65B9\u5F0F\u3002</p></blockquote><h3 id="_2-1-\u6570\u636E\u5E93\u5C42\u9762" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6570\u636E\u5E93\u5C42\u9762" aria-hidden="true">#</a> 2.1 \u6570\u636E\u5E93\u5C42\u9762</h3><h4 id="_2-1-1-\u60B2\u89C2\u9501" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u60B2\u89C2\u9501" aria-hidden="true">#</a> 2.1.1 \u60B2\u89C2\u9501</h4><blockquote><p>\u5178\u578B\u7684\u6570\u636E\u5E93\u60B2\u89C2\u9501\uFF1A<code>for update</code></p></blockquote><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> t_order <span class="token keyword">where</span> order_id <span class="token operator">=</span> trade_no <span class="token keyword">for</span> <span class="token keyword">update</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E3A\u4EC0\u4E48\u52A0for update\u5C31\u53EF\u4EE5?</p><ol><li>\u5F53\u7EBF\u7A0BA\u6267\u884Cfor update\uFF0C\u6570\u636E\u4F1A\u5BF9\u5F53\u524D\u8BB0\u5F55\u52A0\u9501\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u6267\u884C\u5230\u6B64\u884C\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u4F1A\u7B49\u5F85\u7EBF\u7A0BA\u91CA\u653E\u9501\u4E4B\u540E\uFF0C\u624D\u53EF\u4EE5\u83B7\u53D6\u9501\uFF0C\u7EE7\u7EED\u540E\u7EED\u64CD\u4F5C\u3002</li><li>\u4E8B\u7269\u63D0\u4EA4\u65F6\uFF0Cfor update\u83B7\u53D6\u7684\u9501\u4F1A\u81EA\u52A8\u91CA\u653E\u3002</li></ol><p>PS\uFF1A\u8FD9\u79CD\u65B9\u5F0F\u5F88\u5C11\u88AB\u4F7F\u7528\uFF0C\u56E0\u4E3A\u5982\u679C\u4E1A\u52A1\u5904\u7406\u6BD4\u8F83\u8017\u65F6\uFF0C\u5E76\u53D1\u60C5\u51B5\u4E0B\uFF0C\u540E\u9762\u7EBF\u7A0B\u4F1A\u957F\u671F\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u5360\u7528\u4E86\u5F88\u591A\u7EBF\u7A0B\uFF0C\u8BA9\u8FD9\u4E9B\u7EBF\u7A0B\u5904\u4E8E\u65E0\u6548\u7B49\u5F85\u72B6\u6001\uFF0C\u6211\u4EEC\u7684web\u670D\u52A1\u4E2D\u7684\u7EBF\u7A0B\u6570\u91CF\u4E00\u822C\u90FD\u662F\u6709\u9650\u7684\uFF0C\u5982\u679C\u5927\u91CF\u7EBF\u7A0B\u7531\u4E8E\u83B7\u53D6for update\u9501\u5904\u4E8E\u7B49\u5F85\u72B6\u6001\uFF0C\u4E0D\u5229\u4E8E\u7CFB\u7EDF\u5E76\u53D1\u64CD\u4F5C\u3002</p><h5 id="_2-1-1-1-\u60B2\u89C2\u9501\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-1-1-1-\u60B2\u89C2\u9501\u6D41\u7A0B" aria-hidden="true">#</a> 2.1.1.1 \u60B2\u89C2\u9501\u6D41\u7A0B</h5><p>\u6CA1\u6709\u60B2\u89C2\u9501\u7684\u65B9\u5F0F\u662F\u8FD9\u6837\u7684:</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716212343063.png" alt="image-20220716212343063"><p>\u6709\u4E86\u60B2\u89C2\u9501\u7684\u65F6\u5019:</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716212532251.png" alt="image-20220716212532251"><h4 id="_2-1-2-\u552F\u4E00id-\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u552F\u4E00id-\u7D22\u5F15" aria-hidden="true">#</a> 2.1.2 \u552F\u4E00ID/\u7D22\u5F15</h4><blockquote><p>\u9488\u5BF9\u7684\u662F<strong>\u63D2\u5165</strong>\u64CD\u4F5C\u3002</p></blockquote><p>\u6570\u636E\u5E93\u552F\u4E00\u4E3B\u952E\u7684\u5B9E\u73B0\u4E3B\u8981\u662F\u5229\u7528\u6570\u636E\u5E93\u4E2D\u4E3B\u952E\u552F\u4E00\u7EA6\u675F\u7684\u7279\u6027\uFF0C\u4E00\u822C\u6765\u8BF4\u552F\u4E00\u4E3B\u952E\u6BD4\u8F83\u9002\u7528\u4E8E\u201C\u63D2\u5165\u201D\u65F6\u7684\u5E42\u7B49\u6027\uFF0C\u5176\u80FD\u4FDD\u8BC1\u4E00\u5F20\u8868\u4E2D\u53EA\u80FD\u5B58\u5728\u4E00\u6761\u5E26\u8BE5\u552F\u4E00\u4E3B\u952E\u7684\u8BB0\u5F55\u3002</p><p>\u4F7F\u7528\u6570\u636E\u5E93\u552F\u4E00\u4E3B\u952E\u5B8C\u6210\u5E42\u7B49\u6027\u65F6\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u8BE5\u4E3B\u952E\u4E00\u822C\u6765\u8BF4\u5E76\u4E0D\u662F\u4F7F\u7528\u6570\u636E\u5E93\u4E2D\u81EA\u589E\u4E3B\u952E\uFF0C\u800C\u662F\u4F7F\u7528\u5206\u5E03\u5F0F ID \u5145\u5F53\u4E3B\u952E\uFF0C\u8FD9\u6837\u624D\u80FD\u80FD\u4FDD\u8BC1\u5728\u5206\u5E03\u5F0F\u73AF\u5883\u4E0B ID \u7684\u5168\u5C40\u552F\u4E00\u6027\u3002</p><ul><li><strong>\u53BB\u91CD\u8868</strong></li></ul><p>\u53BB\u91CD\u8868\u672C\u8D28\u4E0A\u4E5F\u662F\u4E00\u79CD\u552F\u4E00\u7D22\u5F15\u65B9\u6848\u3002</p><p>\u8FD9\u79CD\u65B9\u6CD5\u9002\u7528\u4E8E\u5728\u4E1A\u52A1\u4E2D\u6709\u552F\u4E00\u6807\u7684\u63D2\u5165\u573A\u666F\u4E2D\uFF0C\u6BD4\u5982\u5728\u4EE5\u4E0A\u7684\u652F\u4ED8\u573A\u666F\u4E2D\uFF0C\u5982\u679C\u4E00\u4E2A\u8BA2\u5355\u53EA\u4F1A\u652F\u4ED8\u4E00\u6B21\uFF0C\u6240\u4EE5\u8BA2\u5355ID\u53EF\u4EE5\u4F5C\u4E3A\u552F\u4E00\u6807\u8BC6\u3002\u8FD9\u65F6\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5EFA\u4E00\u5F20\u53BB\u91CD\u8868\uFF0C\u5E76\u4E14\u628A\u552F\u4E00\u6807\u8BC6\u4F5C\u4E3A\u552F\u4E00\u7D22\u5F15\uFF0C\u5728\u6211\u4EEC\u5B9E\u73B0\u65F6\uFF0C\u628A\u521B\u5EFA\u652F\u4ED8\u5355\u636E\u548C\u5199\u5165\u53BB\u53BB\u91CD\u8868\uFF0C\u653E\u5728\u4E00\u4E2A\u4E8B\u52A1\u4E2D\uFF0C\u5982\u679C\u91CD\u590D\u521B\u5EFA\uFF0C\u6570\u636E\u5E93\u4F1A\u629B\u51FA\u552F\u4E00\u7EA6\u675F\u5F02\u5E38\uFF0C\u64CD\u4F5C\u5C31\u4F1A\u56DE\u6EDA\u3002</p><h4 id="_2-1-3-\u4E50\u89C2\u9501-\u57FA\u4E8E\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u4E50\u89C2\u9501-\u57FA\u4E8E\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233" aria-hidden="true">#</a> 2.1.3 \u4E50\u89C2\u9501\uFF08\u57FA\u4E8E\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233\uFF09</h4><blockquote><p>\u9488\u5BF9<strong>\u66F4\u65B0</strong>\u64CD\u4F5C\u3002</p></blockquote><ul><li><strong>\u4F7F\u7528\u7248\u672C\u53F7\u6216\u8005\u65F6\u95F4\u6233</strong></li></ul><p>\u8FD9\u79CD\u65B9\u6CD5\u9002\u5408\u5728\u66F4\u65B0\u7684\u573A\u666F\u4E2D\uFF0C\u6BD4\u5982\u6211\u4EEC\u8981\u66F4\u65B0\u5546\u54C1\u7684\u540D\u5B57\uFF0C\u8FD9\u65F6\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u66F4\u65B0\u7684\u63A5\u53E3\u4E2D\u589E\u52A0\u4E00\u4E2A\u7248\u672C\u53F7\uFF0C\u6765\u505A\u5E42\u7B49</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> <span class="token function">updateGoodsName</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">,</span><span class="token class-name">String</span> newName<span class="token punctuation">,</span><span class="token keyword">int</span> version<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728\u5B9E\u73B0\u65F6\u53EF\u4EE5\u5982\u4E0B</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">update</span> goods <span class="token keyword">set</span> name<span class="token operator">=</span><span class="token comment">#{newName},version=#{version} where id=#{id} and version&lt;\${version}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>\u72B6\u6001\u673A</strong></li></ul><p>\u672C\u8D28\u4E0A\u4E5F\u662F\u4E50\u89C2\u9501\uFF0C\u8FD9\u79CD\u65B9\u6CD5\u9002\u5408\u5728\u6709\u72B6\u6001\u673A\u6D41\u8F6C\u7684\u60C5\u51B5\u4E0B\uFF0C\u6BD4\u5982\u5C31\u4F1A\u8BA2\u5355\u7684\u521B\u5EFA\u548C\u4ED8\u6B3E\uFF0C\u8BA2\u5355\u7684\u4ED8\u6B3E\u80AF\u5B9A\u662F\u5728\u4E4B\u524D\uFF0C\u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u5728\u8BBE\u8BA1\u72B6\u6001\u5B57\u6BB5\u65F6\uFF0C\u4F7F\u7528int\u7C7B\u578B\uFF0C\u5E76\u4E14\u901A\u8FC7\u503C\u7C7B\u578B\u7684\u5927\u5C0F\u6765\u505A\u5E42\u7B49\uFF0C\u6BD4\u5982\u8BA2\u5355\u7684\u521B\u5EFA\u4E3A0\uFF0C\u4ED8\u6B3E\u6210\u529F\u4E3A100\u3002\u4ED8\u6B3E\u5931\u8D25\u4E3A99</p><p>\u5728\u505A\u72B6\u6001\u673A\u66F4\u65B0\u65F6\uFF0C\u6211\u4EEC\u5C31\u8FD9\u53EF\u4EE5\u8FD9\u6837\u63A7\u5236</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">update</span> <span class="token identifier"><span class="token punctuation">\`</span>order<span class="token punctuation">\`</span></span> <span class="token keyword">set</span> <span class="token keyword">status</span><span class="token operator">=</span><span class="token comment">#{status} where id=#{id} and status&lt;#{status}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u5206\u5E03\u5F0F\u9501" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5206\u5E03\u5F0F\u9501" aria-hidden="true">#</a> 2.2 \u5206\u5E03\u5F0F\u9501</h3><p>\u5206\u5E03\u5F0F\u9501\u5B9E\u73B0\u5E42\u7B49\u6027\u7684\u903B\u8F91\u662F\uFF0C\u5728\u6BCF\u6B21\u6267\u884C\u65B9\u6CD5\u4E4B\u524D\u5224\u65AD\uFF0C\u662F\u5426\u53EF\u4EE5\u83B7\u53D6\u5230\u5206\u5E03\u5F0F\u9501\uFF0C\u5982\u679C\u53EF\u4EE5\uFF0C\u5219\u8868\u793A\u4E3A\u7B2C\u4E00\u6B21\u6267\u884C\u65B9\u6CD5\uFF0C\u5426\u5219\u76F4\u63A5\u820D\u5F03\u8BF7\u6C42\u5373\u53EF\u3002</p><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\u5206\u5E03\u5F0F\u9501\u7684key\u5FC5\u987B\u4E3A\u4E1A\u52A1\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u901A\u5E38\u7528redis\u5206\u5E03\u5F0F\u9501\u6216\u8005zookeeper\u6765\u5B9E\u73B0\u5206\u5E03\u5F0F\u9501\u3002</p>`,54),c=s("\u5206\u5E03\u5F0F\u9501\u7684\u5B9E\u73B0\u65B9\u6CD5\u5177\u4F53\u8BF7\u53C2\u8003\uFF1A"),h={href:"https://pdai.tech/md/arch/arch-z-lock.html",target:"_blank",rel:"noopener noreferrer"},u=s("\u5206\u5E03\u5F0F\u7CFB\u7EDF - \u5206\u5E03\u5F0F\u9501\u53CA\u5B9E\u73B0\u65B9\u6848"),g=o('<h3 id="_2-3-token\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_2-3-token\u673A\u5236" aria-hidden="true">#</a> 2.3 token\u673A\u5236</h3><p><strong>\u65B9\u6848\u63CF\u8FF0\uFF1A</strong></p><p>\u9488\u5BF9\u5BA2\u6237\u7AEF\u8FDE\u7EED\u70B9\u51FB\u6216\u8005\u8C03\u7528\u65B9\u7684\u8D85\u65F6\u91CD\u8BD5\u7B49\u60C5\u51B5\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8BA2\u5355\uFF0C\u6B64\u79CD\u64CD\u4F5C\u5C31\u53EF\u4EE5\u7528 Token \u7684\u673A\u5236\u5B9E\u73B0\u9632\u6B62\u91CD\u590D\u63D0\u4EA4\u3002</p><p>\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u8C03\u7528\u65B9\u5728<strong>\u8C03\u7528\u63A5\u53E3\u7684\u65F6\u5019\u5148\u5411\u540E\u7AEF\u8BF7\u6C42\u4E00\u4E2A\u5168\u5C40 ID\uFF08Token\uFF09\uFF0C\u8BF7\u6C42\u7684\u65F6\u5019\u643A\u5E26\u8FD9\u4E2A\u5168\u5C40 ID \u4E00\u8D77\u8BF7\u6C42</strong>\uFF08Token \u6700\u597D\u5C06\u5176\u653E\u5230 Headers \u4E2D\uFF09\uFF0C\u540E\u7AEF\u9700\u8981\u5BF9\u8FD9\u4E2A Token \u4F5C\u4E3A Key\uFF0C\u7528\u6237\u4FE1\u606F\u4F5C\u4E3A Value \u5230 Redis \u4E2D\u8FDB\u884C\u952E\u503C\u5185\u5BB9\u6821\u9A8C\uFF0C\u5982\u679C Key \u5B58\u5728\u4E14 Value \u5339\u914D\u5C31\u6267\u884C\u5220\u9664\u547D\u4EE4\uFF0C\u7136\u540E\u6B63\u5E38\u6267\u884C\u540E\u9762\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u5982\u679C\u4E0D\u5B58\u5728\u5BF9\u5E94\u7684 Key \u6216 Value \u4E0D\u5339\u914D\u5C31\u8FD4\u56DE\u91CD\u590D\u6267\u884C\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u8FD9\u6837\u6765\u4FDD\u8BC1\u5E42\u7B49\u64CD\u4F5C\u3002</p><p><strong>\u9002\u7528\u64CD\u4F5C\uFF1A</strong></p><ul><li>\u63D2\u5165\u64CD\u4F5C</li><li>\u66F4\u65B0\u64CD\u4F5C</li><li>\u5220\u9664\u64CD\u4F5C</li></ul><p><strong>\u4F7F\u7528\u9650\u5236\uFF1A</strong></p><ul><li>\u9700\u8981\u751F\u6210\u5168\u5C40\u552F\u4E00 Token \u4E32\uFF1B</li><li>\u9700\u8981\u4F7F\u7528\u7B2C\u4E09\u65B9\u7EC4\u4EF6 Redis \u8FDB\u884C\u6570\u636E\u6548\u9A8C\uFF1B</li></ul><p><strong>\u4E3B\u8981\u6D41\u7A0B\uFF1A</strong></p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220716214002016.png" alt="image-20220716214002016"><ul><li>\u2460 \u670D\u52A1\u7AEF\u63D0\u4F9B\u83B7\u53D6 Token \u7684\u63A5\u53E3\uFF0C\u8BE5 Token \u53EF\u4EE5\u662F\u4E00\u4E2A\u5E8F\u5217\u53F7\uFF0C\u4E5F\u53EF\u4EE5\u662F\u4E00\u4E2A\u5206\u5E03\u5F0F ID \u6216\u8005 UUID \u4E32\u3002</li><li>\u2461 \u5BA2\u6237\u7AEF\u8C03\u7528\u63A5\u53E3\u83B7\u53D6 Token\uFF0C\u8FD9\u65F6\u5019\u670D\u52A1\u7AEF\u4F1A\u751F\u6210\u4E00\u4E2A Token \u4E32\u3002</li><li>\u2462 \u7136\u540E\u5C06\u8BE5\u4E32\u5B58\u5165 Redis \u6570\u636E\u5E93\u4E2D\uFF0C\u4EE5\u8BE5 Token \u4F5C\u4E3A Redis \u7684\u952E\uFF08\u6CE8\u610F\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF09\u3002</li><li>\u2463 \u5C06 Token \u8FD4\u56DE\u5230\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u62FF\u5230\u540E\u5E94\u5B58\u5230\u8868\u5355\u9690\u85CF\u57DF\u4E2D\u3002</li><li>\u2464 \u5BA2\u6237\u7AEF\u5728\u6267\u884C\u63D0\u4EA4\u8868\u5355\u65F6\uFF0C\u628A Token \u5B58\u5165\u5230 Headers \u4E2D\uFF0C\u6267\u884C\u4E1A\u52A1\u8BF7\u6C42\u5E26\u4E0A\u8BE5 Headers\u3002</li><li>\u2465 \u670D\u52A1\u7AEF\u63A5\u6536\u5230\u8BF7\u6C42\u540E\u4ECE Headers \u4E2D\u62FF\u5230 Token\uFF0C\u7136\u540E\u6839\u636E Token \u5230 Redis \u4E2D\u67E5\u627E\u8BE5 key \u662F\u5426\u5B58\u5728\u3002</li><li>\u2466 \u670D\u52A1\u7AEF\u6839\u636E Redis \u4E2D\u662F\u5426\u5B58\u8BE5 key \u8FDB\u884C\u5224\u65AD\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u5C06\u8BE5 key \u5220\u9664\uFF0C\u7136\u540E\u6B63\u5E38\u6267\u884C\u4E1A\u52A1\u903B\u8F91\u3002\u5982\u679C\u4E0D\u5B58\u5728\u5C31\u629B\u5F02\u5E38\uFF0C\u8FD4\u56DE\u91CD\u590D\u63D0\u4EA4\u7684\u9519\u8BEF\u4FE1\u606F\u3002</li></ul><blockquote><p>\u6CE8\u610F\uFF0C\u5728\u5E76\u53D1\u60C5\u51B5\u4E0B\uFF0C\u6267\u884C Redis \u67E5\u627E\u6570\u636E\u4E0E\u5220\u9664\u9700\u8981\u4FDD\u8BC1\u539F\u5B50\u6027\uFF0C\u5426\u5219\u5F88\u53EF\u80FD\u5728\u5E76\u53D1\u4E0B\u65E0\u6CD5\u4FDD\u8BC1\u5E42\u7B49\u6027\u3002\u5176\u5B9E\u73B0\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528\u5206\u5E03\u5F0F\u9501\u6216\u8005\u4F7F\u7528 Lua \u8868\u8FBE\u5F0F\u6765\u6CE8\u9500\u67E5\u8BE2\u4E0E\u5220\u9664\u64CD\u4F5C\u3002</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>',13),k={href:"https://www.jianshu.com/p/c384db3692d2",target:"_blank",rel:"noopener noreferrer"},b=s("SpringBoot\u63A5\u53E3\u5E42\u7B49\u6027\u5B9E\u73B0\u76844\u79CD\u65B9\u6848\uFF01"),_={href:"https://pdai.tech/md/spring/springboot/springboot-x-interface-mideng.html",target:"_blank",rel:"noopener noreferrer"},m=e("strong",null,"SpringBoot\u63A5\u53E3 - \u5982\u4F55\u4FDD\u8BC1\u63A5\u53E3\u5E42\u7B49",-1);function f(v,x){const a=l("ExternalLinkIcon");return t(),r("div",null,[p,e("p",null,[c,e("a",h,[u,n(a)])]),g,e("p",null,[e("a",k,[b,n(a)])]),e("p",null,[e("a",_,[m,n(a)])])])}const y=i(d,[["render",f],["__file","springboot-x-interface-mideng.html.vue"]]);export{y as default};
