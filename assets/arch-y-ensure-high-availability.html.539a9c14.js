import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as s,a as e,b as i,d as h,e as r,r as o}from"./app.6a1f7fa8.js";const t={},d=h(`<h1 id="\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528-\u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027" tabindex="-1"><a class="header-anchor" href="#\u67B6\u6784\u4E4B\u9AD8\u53EF\u7528-\u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027" aria-hidden="true">#</a> \u67B6\u6784\u4E4B\u9AD8\u53EF\u7528: \u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F</h1><blockquote><p>\u9AD8\u53EF\u7528\u6027\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\u5E94\u8BE5\u5C5E\u4E8E\u7ECF\u5E38\u63D0\u5230\u7684\u540D\u8BCD\uFF0C\u672C\u6587\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\u7684\u4E00\u4E9B\u5E38\u7528\u7ECF\u9A8C\u3002\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u7B80\u5355\u6765\u5C06\u5C31\u662F\u7CFB\u7EDF\u53EF\u7528\u65F6\u95F4\u4E0E\u603B\u8FD0\u884C\u65F6\u95F4\u4E4B\u6BD4Availability=MTTF/(MTTF+MTTRMTTF)MTTF \u662F Mean Time To Failure\uFF0C\u6307\u5E73\u5747\u6545\u969C\u524D\u7684\u65F6\u95F4\uFF0C\u5373\u7CFB\u7EDF\u5E73\u5747\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\u591A\u957F\u65F6\u95F4\u624D\u53D1\u751F\u4E00\u6B21\u6545\u969C\u3002\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u8D8A\u9AD8\uFF0CMTTF \u8D8A\u957F(\u7B80...</p></blockquote><p>\u9AD8\u53EF\u7528\u6027\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\u5E94\u8BE5\u5C5E\u4E8E\u7ECF\u5E38\u63D0\u5230\u7684\u540D\u8BCD\uFF0C\u672C\u6587\u6211\u4EEC\u5C06\u4ECB\u7ECD\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\u7684\u4E00\u4E9B\u5E38\u7528\u7ECF\u9A8C\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221013102031819.png" alt="image-20221013102031819" loading="lazy"></p><h2 id="_0-\u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_0-\u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 0. \u5F71\u54CD\u53EF\u7528\u6027\u7684\u56E0\u7D20\u6709\u54EA\u4E9B</h2><ul><li>\u673A\u5668\u7684\u8D44\u6E90\u8017\u5C3D</li><li>\u5355\u70B9\u6545\u969C</li><li>\u4EBA\u4E3A\u64CD\u4F5C</li><li>\u7F51\u7EDC</li></ul><h2 id="_1-\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807" tabindex="-1"><a class="header-anchor" href="#_1-\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807" aria-hidden="true">#</a> 1. \u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807</h2><p>\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u7B80\u5355\u6765\u5C06\u5C31\u662F\u7CFB\u7EDF\u53EF\u7528\u65F6\u95F4\u4E0E\u603B\u8FD0\u884C\u65F6\u95F4\u4E4B\u6BD4</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Availability<span class="token operator">=</span><span class="token constant">MTTF</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token constant">MTTF</span><span class="token operator">+</span><span class="token constant">MTTRMTTF</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>MTTF \u662F Mean Time To Failure\uFF0C\u6307\u5E73\u5747\u6545\u969C\u524D\u7684\u65F6\u95F4\uFF0C\u5373\u7CFB\u7EDF\u5E73\u5747\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\u591A\u957F\u65F6\u95F4\u624D\u53D1\u751F\u4E00\u6B21\u6545\u969C\u3002\u7CFB\u7EDF\u7684\u53EF\u9760\u6027\u8D8A\u9AD8\uFF0CMTTF \u8D8A\u957F(\u7B80\u5355\u7406\u89E3MTTF \u5C31\u662F\u6307\u7CFB\u7EDF\u6B63\u5E38\u8FD0\u884C\u7684\u65F6\u95F4)\u3002MTTR \u662F Mean Time To Recovery\uFF0C \u5E73\u5747\u4FEE\u590D\u65F6\u95F4\uFF0C\u5373\u4ECE\u6545\u969C\u51FA\u73B0\u5230\u6545\u969C\u4FEE\u590D\u7684\u8FD9\u6BB5\u65F6\u95F4\uFF0C\u4E5F\u5C31\u662F\u7CFB\u7EDF\u4E0D\u53EF\u7528\u7684\u65F6\u95F4\uFF0C\u8FD9\u6BB5\u65F6\u95F4\u8D8A\u77ED\u8D8A\u597D\u3002\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\u53EF\u4EE5\u7528\u901A\u8FC7\u4E0B\u8868\u7684999\u6807\u51C6\u8861\u91CF\uFF0C\u73B0\u5728\u666E\u904D\u8981\u6C42\u81F3\u5C112\u4E2A9\uFF0C\u6700\u597D4\u4E2A9\u4EE5\u4E0A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012203820810.png" alt="image-20221012203820810" loading="lazy"></p><h2 id="_2-\u6545\u969C\u4E0D\u53EF\u907F\u514D" tabindex="-1"><a class="header-anchor" href="#_2-\u6545\u969C\u4E0D\u53EF\u907F\u514D" aria-hidden="true">#</a> 2. \u6545\u969C\u4E0D\u53EF\u907F\u514D</h2><p>\u9AD8\u53EF\u7528\u6027\u662F\u6307\u7CFB\u7EDF\u63D0\u4F9B\u7684\u670D\u52A1\u8981\u59CB\u7EC8\u53EF\u7528\uFF0C\u7136\u800C\u6545\u969C\u4E0D\u53EF\u907F\u514D\uFF0C\u7279\u522B\u662F\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\uFF0C\u9762\u5BF9\u4E0D\u53EF\u63A7\u7684\u7528\u6237\u6D41\u91CF\u548C\u673A\u623F\u73AF\u5883\uFF0C\u7CFB\u7EDF\u6545\u969C\u5C06\u4F1A\u663E\u5F97\u66F4\u52A0\u590D\u6742\u548C\u4E0D\u53EF\u9884\u6D4B\u3002\u5728\u5927\u89C4\u6A21\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u5404\u4E2A\u6A21\u5757\u4E4B\u95F4\u5B58\u5728\u9519\u7EFC\u590D\u6742\u7684\u4F9D\u8D56\uFF0C\u4EFB\u4E00\u4E00\u4E2A\u73AF\u8282\u51FA\u73B0\u95EE\u9898\uFF0C\u90FD\u6709\u53EF\u80FD\u5BFC\u81F4\u96EA\u5D29\u5F0F\u3001\u591A\u7C73\u8BFA\u9AA8\u724C\u5F0F\u7684\u6545\u969C\uFF0C\u751A\u8005\u53EF\u4EE5\u65AD\u8A00\u51FA\u73B0\u6545\u969C\u6210\u4E86\u5E38\u6001\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012204150756.png" alt="image-20221012204150756"><p>\u5982\u4E0A\u56FE\u7684\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u7528\u6237\u8BF7\u6C42\u7CFB\u7EDF\u4E2D\u7684\u67D0\u4E2A\u670D\u52A1\u63A5\u53E3\uFF0C\u8BF7\u6C42\u9700\u8981\u7ECF\u8FC7\u957F\u957F\u7684\u8C03\u7528\u94FE\u624D\u80FD\u5904\u7406\u8FD4\u56DE\u3002\u6211\u4EEC\u8D77\u7801\u8981\u4FDD\u8BC1\u7F51\u7EDC\u8FDE\u63A5\u6B63\u5E38\uFF0C\u670D\u52A1\u7F51\u5173\u6B63\u5E38\u3001\u524D\u7AEF\u670D\u52A1\u6B63\u5E38\u3001\u540E\u53F0\u670D\u52A1\u6B63\u5E38\u3001\u6570\u636E\u5E93\u6B63\u5E38\uFF0C\u8BF7\u6C42\u624D\u80FD\u88AB\u6B63\u5E38\u5904\u7406\uFF0C\u5982\u679C\u8C03\u7528\u94FE\u4E2D\u7684\u4EFB\u4E00\u73AF\u8282\u51FA\u73B0\u95EE\u9898\uFF0C\u90FD\u4F1A\u76F4\u63A5\u53CD\u9988\u5230\u7528\u6237\u4F53\u9A8C\u4E0A\u3002</p><p>\u7CFB\u7EDF\u51FA\u73B0\u6545\u969C\u7684\u539F\u56E0\u591A\u79CD\u591A\u6837\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u8FD9\u4E9B\uFF1A</p><ul><li>\u7F51\u7EDC\u95EE\u9898\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u6545\u969C\uFF0C\u7F51\u7EDC\u5E26\u5BBD\u51FA\u73B0\u8D85\u65F6\u62E5\u585E\u7B49\uFF1B</li><li>\u6027\u80FD\u95EE\u9898\uFF0C\u6570\u636E\u5E93\u6162\u67E5\u8BE2\u3001Java Full GC\u3001\u786C\u76D8 IO \u8FC7\u5927\u3001CPU \u8FC7\u9AD8\u3001\u5185\u5B58\u4E0D\u8DB3\u7B49</li><li>\u5B89\u5168\u95EE\u9898\uFF0C\u88AB\u7F51\u7EDC\u653B\u51FB\uFF0C\u5982 DDoS \u7B49\u3001\u5F02\u5E38\u5BA2\u6237\u7AEF\u8BF7\u6C42\uFF0C\u5982\u722C\u866B\u7B49\u3002</li><li>\u8FD0\u7EF4\u95EE\u9898\uFF0C\u9700\u6C42\u53D8\u66F4\u9891\u7E41\u4E0D\u53EF\u63A7\uFF0C\u67B6\u6784\u4E5F\u5728\u4E0D\u65AD\u5730\u88AB\u8C03\u6574\uFF0C\u76D1\u63A7\u95EE\u9898\u7B49\uFF1B</li><li>\u7BA1\u7406\u95EE\u9898\uFF0C\u6CA1\u6709\u68B3\u7406\u51FA\u5173\u952E\u670D\u52A1\u4EE5\u53CA\u670D\u52A1\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u8FD0\u884C\u4FE1\u606F\u6CA1\u6709\u548C\u63A7\u5236\u7CFB\u7EDF\u540C\u6B65\uFF1B</li><li>\u786C\u4EF6\u95EE\u9898\uFF0C\u786C\u76D8\u635F\u574F\u3001\u7F51\u5361\u51FA\u95EE\u9898\u3001\u4EA4\u6362\u673A\u51FA\u95EE\u9898\u3001\u673A\u623F\u6389\u7535\u3001\u6316\u6398\u673A\u95EE\u9898(\u524D\u4E00\u9635\u5B50\u673A\u623F\u7535\u7F06\u5C31\u7ECF\u5E38\u88AB\u6316\u65AD)\u7B49</li></ul><p>\u9762\u5BF9\u5982\u6B64\u591A\u7684\u5929\u707E\u4EBA\u7978\uFF0C\u53EF\u63A7\u548C\u4E0D\u53EF\u63A7\u7684\u6545\u969C\u56E0\u7D20\uFF0C\u4F3C\u4E4E\u7CFB\u7EDF\u7684\u9AD8\u53EF\u7528\u6027\u53D8\u6210\u4E0D\u53EF\u80FD\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u4F46\u662F\u5728\u65E5\u5E38\u5F00\u53D1\u8FD0\u7EF4\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u91C7\u7528\u4E00\u4E9B\u6709\u6548\u7684\u8BBE\u8BA1\u3001\u5B9E\u73B0\u548C\u8FD0\u7EF4\u624B\u6BB5\u6765\u63D0\u9AD8\u7CFB\u7EDF\u7684\u9AD8\u53EF\u7528\u6027\uFF0C\u5C3D\u91CF\u4EA4\u4ED8\u4E00\u4E2A\u5728\u4EFB\u4F55\u65F6\u5019\u90FD\u57FA\u672C\u53EF\u7528\u7684\u7CFB\u7EDF\u3002</p><h2 id="_3-\u6838\u5FC3\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u6838\u5FC3\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> 3. \u6838\u5FC3\u5B9E\u73B0\u65B9\u6848</h2><h3 id="_3-1-\u5197\u4F59\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5197\u4F59\u8BBE\u8BA1" aria-hidden="true">#</a> 3.1 \u5197\u4F59\u8BBE\u8BA1</h3><p>\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5355\u70B9\u6545\u969C\u4E0D\u53EF\u53D6\u7684\uFF0C\u800C\u964D\u4F4E\u5355\u70B9\u6545\u969C\u7684\u4E0D\u4E8C\u6CD5\u95E8\u5C31\u662F\u5197\u4F59\u8BBE\u8BA1\uFF0C\u901A\u8FC7\u591A\u70B9\u90E8\u7F72\u7684\u65B9\u5F0F\uFF0C\u5E76\u4E14\u6700\u597D\u662F\u90E8\u7F72\u5728\u4E0D\u540C\u7684\u7269\u7406\u4F4D\u7F6E\uFF0C\u907F\u514D\u5355\u673A\u623F\u4E2D\u591A\u70B9\u540C\u65F6\u5931\u8D25\u3002\u5197\u4F59\u8BBE\u8BA1\u4E0D\u4EC5\u53EF\u4EE5\u63D0\u9AD8\u670D\u52A1\u7684\u541E\u5410\u91CF\uFF0C\u8FD8\u53EF\u4EE5\u5728\u51FA\u73B0\u707E\u96BE\u65F6\u5FEB\u901F\u6062\u590D\u3002\u76EE\u524D\u5E38\u89C1\u7684\u5197\u4F59\u8BBE\u8BA1\u6709<strong>\u4E3B\u4ECE\u8BBE\u8BA1\u548C\u5BF9\u7B49\u6CBB\u7406\u8BBE\u8BA1</strong>\uFF0C\u4E3B\u4ECE\u8BBE\u8BA1\u53C8\u53EF\u4EE5\u7EC6\u5206\u4E3A\u4E00\u4E3B\u591A\u4ECE\u3001\u591A\u4E3B\u591A\u4ECE\u3002</p><p>\u5197\u4F59\u8BBE\u8BA1\u4E2D\u4E00\u4E2A\u4E0D\u53EF\u907F\u514D\u7684\u95EE\u9898\u662F\u8003\u8651\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u591A\u4E2A\u8282\u70B9\u4E2D\u5197\u4F59\u7684\u6570\u636E\u8FFD\u6C42\u5F3A\u4E00\u81F4\u6027\u8FD8\u662F\u6700\u7EC8\u4E00\u81F4\u6027\u3002\u5373\u4F7F\u8282\u70B9\u63D0\u4F9B\u65E0\u72B6\u6001\u670D\u52A1\uFF0C\u4E5F\u9700\u8981\u501F\u52A9\u5916\u90E8\u670D\u52A1\uFF0C\u6BD4\u5982\u6570\u636E\u5E93\u3001\u5206\u5E03\u5F0F\u7F13\u5B58\u7B49\u7EF4\u62A4\u6570\u636E\u72B6\u6001\u3002\u6839\u636E\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E0B\u8282\u70B9\u6570\u636E\u540C\u6B65\u7684\u57FA\u672C\u539F\u7406CAP(Consistency (\u4E00\u81F4\u6027)\u3001Availablity (\u53EF\u7528\u6027)\u3001Partition tolerance (\u5206\u533A\u5BB9\u5FCD\u6027)\u4E09\u4E2A\u6307\u6807\u4E0D\u53EF\u540C\u65F6\u6EE1\u8DB3)\uFF0C\u6570\u636E\u5F3A\u4E00\u81F4\u6027\u7684\u7CFB\u7EDF\u65E0\u6CD5\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF0C\u6700\u5178\u578B\u7684\u4F8B\u5B50\u5C31\u662F Zookeeper\u3002</p><h4 id="_3-1-1-\u4E3B\u4ECE\u8BBE\u8BA1-zookeeper" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u4E3B\u4ECE\u8BBE\u8BA1-zookeeper" aria-hidden="true">#</a> 3.1.1 \u4E3B\u4ECE\u8BBE\u8BA1\uFF1AZookeeper</h4><p>Zookeeper \u91C7\u7528\u4E3B\u4ECE\u8BBE\u8BA1\uFF0C\u670D\u52A1\u96C6\u7FA4\u7531 Leader\u3001Follower \u548C Observer \u4E09\u79CD\u89D2\u8272\u7EC4\u6210\uFF0C\u5B83\u4EEC\u7684\u804C\u8D23\u5982\u4E0B\uFF1A</p><ul><li>Leader: Zookeeper \u96C6\u7FA4\u4F7F\u7528 ZAB \u534F\u8BAE\u901A\u8FC7 Leader \u9009\u4E3E\u4ECE\u96C6\u7FA4\u4E2D\u9009\u5B9A\u4E00\u4E2A\u8282\u70B9\u4F5C\u4E3A Leader\u3002Leader \u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BFB\u5199\u8BF7\u6C42\uFF1B</li><li>Follower\uFF1A\u53EA\u63D0\u4F9B\u6570\u636E\u7684\u8BFB\u670D\u52A1\uFF0C\u4F1A\u5C06\u6765\u81EA\u5BA2\u6237\u7AEF\u7684\u5199\u8BF7\u6C42\u8F6C\u53D1\u5230 Leader \u4E2D\u3002\u5728 Leader \u9009\u4E3E\u7684\u8FC7\u7A0B\u4E2D\u53C2\u4E0E\u6295\u7968\uFF0C\u5E76\u4E0E Leader \u7EF4\u6301\u6570\u636E\u540C\u6B65\uFF1B</li><li>Observer\uFF1A\u4E0E Folllower \u7684\u529F\u80FD\u76F8\u540C\uFF0C\u4F46\u4E0D\u53C2\u4E0E Leader \u9009\u4E3E\u548C\u5199\u8FC7\u7A0B\u7684&quot;\u8FC7\u534A\u5199\u6210\u529F&quot;\u7B56\u7565\uFF0C\u5355\u7EAF\u4E3A\u4E86\u63D0\u9AD8\u96C6\u7FA4\u7684\u8BFB\u80FD\u529B\u3002</li></ul><p>\u5728 Zookeeper \u96C6\u7FA4\u4E2D\uFF0C\u7531\u4E8E\u53EA\u6709 Leader \u89D2\u8272\u7684\u8282\u70B9\u5177\u5907\u5199\u6570\u636E\u7684\u80FD\u529B\uFF0C\u5F53 Leader \u8282\u70B9\u5B95\u673A\u65F6\uFF0C\u5728\u65B0\u7684 Leader \u8282\u70B9\u6CA1\u6709\u88AB\u9009\u4E3E\u51FA\u6765\u4E4B\u524D\uFF0C\u96C6\u7FA4\u7684\u5199\u80FD\u529B\u90FD\u662F\u4E0D\u53EF\u7528\u7684\u3002\u867D\u7136 Zookeeper \u4FDD\u8BC1\u4E86\u96C6\u7FA4\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027\uFF0C\u4F46\u662F\u653E\u5F03\u4E86\u96C6\u7FA4\u7684\u9AD8\u53EF\u7528\u6027\u3002</p><h4 id="_3-1-2-\u5BF9\u7B49\u6CBB\u7406\u8BBE\u8BA1-eureka" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u5BF9\u7B49\u6CBB\u7406\u8BBE\u8BA1-eureka" aria-hidden="true">#</a> 3.1.2 \u5BF9\u7B49\u6CBB\u7406\u8BBE\u8BA1\uFF1AEureka</h4><p>\u5BF9\u7B49\u6CBB\u7406\u8BBE\u8BA1\u4E2D\u6BD4\u8F83\u4F18\u79C0\u7684\u4E1A\u5185\u4F53\u73B0\u4E3A Netiflx \u5F00\u6E90\u7684 Eureka \u670D\u52A1\u6CE8\u518C\u548C\u53D1\u73B0\u7EC4\u4EF6\u3002Eureka \u96C6\u7FA4\u7531 Eureka Client \u548C Eureka Server \u4E24\u79CD\u89D2\u8272\u7EC4\u6210\uFF0C\u5176\u4E2D Eureka Client \u662F\u6307\u670D\u52A1\u5B9E\u4F8B\u4F7F\u7528\u7684\u670D\u52A1\u6CE8\u518C\u548C\u53D1\u73B0\u7684\u5BA2\u6237\u7AEF\uFF0C\u7528\u4E8E\u6CE8\u518C\u548C\u67E5\u8BE2\u670D\u52A1\u5B9E\u4F8B\u4FE1\u606F\uFF1BEureka Server \u4F5C\u4E3A\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u5B58\u50A8\u6709\u5404\u670D\u52A1\u7684\u5B9E\u4F8B\u4FE1\u606F\u5217\u8868\uFF0C\u91C7\u7528\u591A\u5B9E\u4F8B\u7684\u65B9\u5F0F\u90E8\u7F72\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\u3002\u6BCF\u4E00\u4E2A Eureka Server \u90FD\u662F\u5BF9\u7B49\u7684\u6570\u636E\u8282\u70B9\uFF0CEureka Client \u53EF\u4EE5\u5411\u4EFB\u610F\u7684 Eureka Server \u53D1\u8D77\u670D\u52A1\u6CE8\u518C\u8BF7\u6C42\u548C\u670D\u52A1\u53D1\u73B0\u8BF7\u6C42\u3002Eureka Server \u4E4B\u95F4\u7684\u6570\u636E\u901A\u8FC7\u5F02\u6B65 HTTP \u7684\u65B9\u5F0F\u540C\u6B65\uFF0C\u7531\u4E8E\u7F51\u7EDC\u7684\u4E0D\u53EF\u9760\u6027\uFF0C\u4E0D\u540C Eureka Server \u4E2D\u7684\u670D\u52A1\u5B9E\u4F8B\u6570\u636E\u4E0D\u80FD\u4FDD\u8BC1\u5728\u4EFB\u610F\u65F6\u95F4\u8282\u70B9\u90FD\u76F8\u7B49\uFF0C\u53EA\u80FD\u4FDD\u8BC1\u5728 SLA \u627F\u8BFA\u65F6\u95F4\u5185\u8FBE\u5230\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002Eureka \u70B9\u5BF9\u70B9\u5BF9\u7B49\u7684\u8BBE\u8BA1\u4FDD\u8BC1\u4E86\u670D\u52A1\u6CE8\u518C\u4E0E\u53D1\u73B0\u4E2D\u5FC3\u7684\u9AD8\u53EF\u7528\u6027\uFF0C\u4F46\u662F\u727A\u7272\u4E86\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027\uFF0C\u964D\u7EA7\u4E3A\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002</p><h3 id="_3-2-\u7194\u65AD\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7194\u65AD\u8BBE\u8BA1" aria-hidden="true">#</a> 3.2 \u7194\u65AD\u8BBE\u8BA1</h3><p>\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u4E00\u6B21\u5B8C\u6574\u7684\u8BF7\u6C42\u53EF\u80FD\u9700\u8981\u7ECF\u8FC7\u591A\u4E2A\u670D\u52A1\u6A21\u5757\u7684\u901A\u529B\u5408\u4F5C\uFF0C\u8BF7\u6C42\u5728\u591A\u4E2A\u670D\u52A1\u4E2D\u4F20\u9012\uFF0C\u670D\u52A1\u5BF9\u670D\u52A1\u7684\u8C03\u7528\u4F1A\u4EA7\u751F\u65B0\u7684\u8BF7\u6C42\uFF0C\u8FD9\u4E9B\u8BF7\u6C42\u5171\u540C\u7EC4\u6210\u4E86\u8FD9\u6B21\u8BF7\u6C42\u7684\u8C03\u7528\u94FE\u3002\u5F53\u8C03\u7528\u94FE\u4E2D\u7684\u67D0\u4E2A\u73AF\u8282\uFF0C\u7279\u522B\u662F\u4E0B\u6E38\u670D\u52A1\u4E0D\u53EF\u7528\u65F6\uFF0C\u5C06\u4F1A\u5BFC\u81F4\u4E0A\u6E38\u670D\u52A1\u8C03\u7528\u65B9\u4E0D\u53EF\u7528\uFF0C\u6700\u7EC8\u5C06\u8FD9\u79CD\u4E0D\u53EF\u7528\u7684\u5F71\u54CD\u6269\u5927\u5230\u6574\u4E2A\u7CFB\u7EDF\uFF0C\u5BFC\u81F4\u6574\u4E2A\u5206\u5E03\u5F0F\u7CFB\u7EDF\u7684\u4E0D\u53EF\u7528\uFF0C\u5F15\u53D1\u670D\u52A1\u96EA\u5D29\u73B0\u8C61\u3002</p><p>\u4E3A\u4E86\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5728\u4E0B\u6E38\u670D\u52A1\u4E0D\u53EF\u7528\u65F6\uFF0C\u4FDD\u62A4\u4E0A\u6E38\u670D\u52A1\u7684\u53EF\u7528\u6027\u663E\u5F97\u6781\u5176\u91CD\u8981\u3002\u5BF9\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u53C2\u8003\u7535\u8DEF\u7CFB\u7EDF\u7684\u65AD\u8DEF\u5668\u673A\u5236\uFF0C\u5728\u5FC5\u8981\u7684\u65F6\u5019\u58EE\u58EB\u65AD\u8155\uFF0C\u5F53\u4E0B\u6E38\u670D\u52A1\u56E0\u4E3A\u8FC7\u8F7D\u6216\u8005\u6545\u969C\u4E0D\u80FD\u7528\u65F6\uFF0C\u53CA\u65F6\u201C\u7194\u65AD\u201D\u670D\u52A1\u8C03\u7528\u65B9\u548C\u670D\u52A1\u63D0\u4F9B\u65B9\u7684\u8C03\u7528\u94FE\uFF0C\u4FDD\u62A4\u670D\u52A1\u8C03\u7528\u65B9\u8D44\u6E90\uFF0C\u9632\u6B62\u670D\u52A1\u96EA\u5D29\u73B0\u8C61\u7684\u51FA\u73B0\u3002</p><p>\u65AD\u8DEF\u5668\u7684\u57FA\u672C\u8BBE\u8BA1\u56FE\u5982\u4E0B\uFF0C\u7531\u5173\u95ED\u3001\u6253\u5F00\u3001\u534A\u5F00\u4E09\u79CD\u72B6\u6001\u7EC4\u6210\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012205543264.png" alt="image-20221012205543264" loading="lazy"></p><ul><li>\u5173\u95ED(Closed)\u72B6\u6001\uFF1A\u6B64\u65F6\u670D\u52A1\u8C03\u7528\u65B9\u53EF\u4EE5\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u65B9\u3002\u65AD\u8DEF\u5668\u4E2D\u4F7F\u7528\u5931\u8D25\u8BA1\u6570\u5668\u5468\u671F\u6027\u7EDF\u8BA1\u8BF7\u6C42\u5931\u8D25\u6B21\u6570\u548C\u8BF7\u6C42\u603B\u6B21\u6570\u7684\u6BD4\u4F8B\uFF0C\u5982\u679C\u6700\u8FD1\u5931\u8D25\u9891\u7387\u8D85\u8FC7\u4E86\u5468\u671F\u65F6\u95F4\u5185\u5141\u8BB8\u5931\u8D25\u7684\u9608\u503C\uFF0C\u5219\u5207\u6362\u5230\u6253\u5F00(Open)\u72B6\u6001\u3002\u5728\u5173\u95ED\u72B6\u6001\u4E0B\uFF0C\u5931\u8D25\u8BA1\u6570\u5668\u57FA\u4E8E\u65F6\u95F4\u5468\u671F\u8FD0\u4F5C\uFF0C\u4F1A\u5728\u6BCF\u4E2A\u7EDF\u8BA1\u5468\u671F\u5F00\u59CB\u524D\u81EA\u52A8\u91CD\u7F6E\uFF0C\u9632\u6B62\u67D0\u6B21\u5076\u7136\u9519\u8BEF\u5BFC\u81F4\u65AD\u8DEF\u5668\u8FDB\u5165\u6253\u5F00\u72B6\u6001\u3002</li><li>\u6253\u5F00(Open)\u72B6\u6001\uFF1A\u5728\u8BE5\u72B6\u6001\u4E0B\uFF0C\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u8BF7\u6C42\u4F1A\u7ACB\u5373\u8FD4\u56DE\u9519\u8BEF\u54CD\u5E94\u6216\u8005\u6267\u884C\u9884\u8BBE\u7684\u5931\u8D25\u964D\u7EA7\u903B\u8F91\uFF0C\u800C\u4E0D\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u65B9\u3002\u65AD\u8DEF\u5668\u8FDB\u5165\u6253\u5F00\u72B6\u6001\u540E\u4F1A\u542F\u52A8\u8D85\u65F6\u8BA1\u65F6\u5668\uFF0C\u5728\u8BA1\u65F6\u5668\u5230\u8FBE\u540E\uFF0C\u65AD\u8DEF\u5668\u8FDB\u5165\u534A\u5F00\u72B6\u6001\u3002</li><li>\u534A\u5F00(Half-Open)\u72B6\u6001\uFF1A\u5141\u8BB8\u5E94\u7528\u7A0B\u5E8F\u4E00\u5B9A\u6570\u91CF\u7684\u8BF7\u6C42\u53BB\u8C03\u7528\u670D\u52A1\u3002\u5982\u679C\u8FD9\u4E9B\u8BF7\u6C42\u5BF9\u670D\u52A1\u7684\u8C03\u7528\u6210\u529F\uFF0C\u90A3\u4E48\u53EF\u4EE5\u8BA4\u4E3A\u4E4B\u524D\u5BFC\u81F4\u8C03\u7528\u5931\u8D25\u7684\u9519\u8BEF\u5DF2\u7ECF\u4FEE\u6B63\uFF0C\u6B64\u65F6\u65AD\u8DEF\u5668\u5207\u6362\u5230\u5173\u95ED\u72B6\u6001\uFF0C\u540C\u65F6\u5C06\u5931\u8D25\u8BA1\u6570\u5668\u91CD\u7F6E\u3002\u5982\u679C\u8FD9\u4E00\u5B9A\u6570\u91CF\u7684\u8BF7\u6C42\u5B58\u5728\u8C03\u7528\u5931\u8D25\u7684\u60C5\u51B5\uFF0C\u5219\u8BA4\u4E3A\u5BFC\u81F4\u4E4B\u524D\u8C03\u7528\u5931\u8D25\u7684\u95EE\u9898\u4ECD\u7136\u5B58\u5728\uFF0C\u65AD\u8DEF\u5668\u5207\u56DE\u5230\u6253\u5F00\u72B6\u6001\uFF0C\u5E76\u91CD\u7F6E\u8D85\u65F6\u8BA1\u65F6\u5668\u6765\u7ED9\u7CFB\u7EDF\u4E00\u5B9A\u7684\u65F6\u95F4\u6765\u4FEE\u6B63\u9519\u8BEF\u3002\u534A\u5F00\u72B6\u6001\u80FD\u591F\u6709\u6548\u9632\u6B62\u6B63\u5728\u6062\u590D\u4E2D\u7684\u670D\u52A1\u88AB\u7A81\u7136\u800C\u6765\u7684\u5927\u91CF\u8BF7\u6C42\u518D\u6B21\u6253\u57AE\u3002</li></ul><p>\u4F7F\u7528\u65AD\u8DEF\u5668\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u80FD\u591F\u6709\u6548\u5730\u4FDD\u62A4\u670D\u52A1\u8C03\u7528\u65B9\u7684\u7A33\u5B9A\u6027\uFF0C\u5B83\u80FD\u591F\u907F\u514D\u670D\u52A1\u8C03\u7528\u8005\u9891\u7E41\u8C03\u7528\u53EF\u80FD\u5931\u8D25\u7684\u670D\u52A1\u63D0\u4F9B\u8005\uFF0C\u9632\u6B62\u670D\u52A1\u8C03\u7528\u8005\u6D6A\u8D39 CPU \u5468\u671F\u3001\u7EBF\u7A0B\u548C IO \u8D44\u6E90\u7B49\uFF0C\u63D0\u9AD8\u670D\u52A1\u6574\u4F53\u7684\u53EF\u7528\u6027\u3002</p><h3 id="_3-3-\u9650\u6D41\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-3-\u9650\u6D41\u8BBE\u8BA1" aria-hidden="true">#</a> 3.3 \u9650\u6D41\u8BBE\u8BA1</h3><p>\u7194\u65AD\u8BBE\u8BA1\u4FDD\u62A4\u7684\u662F\u670D\u52A1\u8C03\u7528\u8005\uFF0C\u5373\u4E0A\u6E38\u670D\u52A1\u7684\u53EF\u7528\u6027\uFF0C\u5BF9\u4E8E\u4E0B\u6E38\u670D\u52A1\u63D0\u4F9B\u8005\uFF0C\u8003\u8651\u5230\u81EA\u8EAB\u670D\u52A1\u5B9E\u4F8B\u7684\u8D1F\u8F7D\u80FD\u529B\uFF0C\u540C\u6837\u9700\u8981\u9650\u6D41\u8BBE\u8BA1\u4FDD\u62A4\u81EA\u5DF1\u4E0D\u88AB\u8FC7\u91CF\u7684\u6D41\u91CF\u51B2\u57AE\u3002\u4E00\u822C\u6765\u8BB2\u6709\u4EE5\u4E0B\u7684\u9650\u6D41\u7B56\u7565\uFF1A</p><ul><li>\u62D2\u7EDD\u670D\u52A1\uFF0C\u628A\u591A\u51FA\u6765\u7684\u8BF7\u6C42\u62D2\u7EDD\u6389\u3002\u4E00\u822C\u6765\u8BF4\uFF0C\u597D\u7684\u9650\u6D41\u7CFB\u7EDF\u5728\u53D7\u5230\u6D41\u91CF\u66B4\u589E\u65F6\uFF0C\u4F1A\u6682\u65F6\u62D2\u7EDD\u5468\u671F\u65F6\u95F4\u5185\u8BF7\u6C42\u6570\u91CF\u6700\u5927\u7684\u5BA2\u6237\u7AEF\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u628A\u4E00\u4E9B\u4E0D\u6B63\u5E38\u7684\u6216\u8005\u662F\u5E26\u6709\u6076\u610F\u7684\u9AD8\u5E76\u53D1\u8BBF\u95EE\u6321\u5728\u95E8\u5916\u3002</li><li>\u670D\u52A1\u964D\u7EA7\uFF0C\u5173\u95ED\u6216\u662F\u628A\u540E\u7AEF\u505A\u964D\u7EA7\u5904\u7406\uFF0C\u91CA\u653E\u8D44\u6E90\u7ED9\u652F\u6491\u4E3B\u6D41\u7A0B\u670D\u52A1\u4EE5\u652F\u6301\u66F4\u591A\u7684\u8BF7\u6C42\u3002\u964D\u7EA7\u6709\u5F88\u591A\u65B9\u5F0F\uFF0C\u4E00\u79CD\u662F\u628A\u4E00\u4E9B\u4E0D\u91CD\u8981\u7684\u670D\u52A1\u7ED9\u505C\u6389\uFF0C\u628A CPU\u3001\u5185\u5B58\u6216\u662F\u6570\u636E\u7684\u8D44\u6E90\u8BA9\u7ED9\u66F4\u91CD\u8981\u7684\u529F\u80FD\uFF1B\u4E00\u79CD\u662F\u6570\u636E\u63A5\u53E3\u53EA\u8FD4\u56DE\u90E8\u5206\u5173\u952E\u6570\u636E\uFF0C\u51CF\u5C11\u6570\u636E\u67E5\u8BE2\u5904\u7406\u94FE\u8DEF\uFF1B\u8FD8\u6709\u66F4\u5FEB\u7684\u4E00\u79CD\u662F\u76F4\u63A5\u8FD4\u56DE\u9884\u8BBE\u7684\u7F13\u5B58\u6216\u8005\u9759\u6001\u6570\u636E\uFF0C\u727A\u7272\u6570\u636E\u5F3A\u4E00\u81F4\u6027\u7684\u65B9\u5F0F\u6765\u83B7\u5F97\u66F4\u5927\u7684\u6027\u80FD\u541E\u5410\u3002</li><li>\u4F18\u5148\u7EA7\u8BF7\u6C42\uFF0C\u662F\u6307\u5C06\u76EE\u524D\u7CFB\u7EDF\u7684\u8D44\u6E90\u5206\u914D\u7ED9\u4F18\u5148\u7EA7\u66F4\u9AD8\u7684\u7528\u6237\uFF0C\u4F18\u5148\u5904\u7406\u6743\u9650\u66F4\u9AD8\u7684\u7528\u6237\u7684\u8BF7\u6C42\u3002</li><li>\u5EF6\u65F6\u5904\u7406\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4E00\u822C\u6765\u8BF4\u4F1A\u4F7F\u7528\u7F13\u51B2\u961F\u5217\u6765\u7F13\u51B2\u5927\u91CF\u7684\u8BF7\u6C42\uFF0C\u7CFB\u7EDF\u6839\u636E\u81EA\u8EAB\u8D1F\u8F7D\u80FD\u529B\u6D88\u8D39\u961F\u5217\u4E2D\u7684\u8BF7\u6C42\u3002\u5982\u679C\u8BE5\u961F\u5217\u4E5F\u6EE1\u4E86\uFF0C\u90A3\u4E48\u5C31\u53EA\u80FD\u62D2\u7EDD\u7528\u6237\u8BF7\u6C42\u3002\u4F7F\u7528\u7F13\u51B2\u961F\u5217\u53EA\u662F\u4E3A\u4E86\u51CF\u7F13\u538B\u529B\uFF0C\u4E00\u822C\u7528\u4E8E\u5E94\u5BF9\u77AC\u65F6\u5927\u91CF\u7684\u6D41\u91CF\u524A\u5CF0\u3002</li><li>\u5F39\u6027\u4F38\u7F29\uFF0C\u91C7\u7528\u81EA\u52A8\u5316\u8FD0\u7EF4\u7684\u65B9\u5F0F\u5BF9\u76F8\u5E94\u7684\u670D\u52A1\u505A\u81EA\u52A8\u5316\u7684\u4F38\u7F29\u3002\u8FD9\u79CD\u65B9\u6848\u9700\u8981\u5E94\u7528\u6027\u80FD\u76D1\u63A7\u7CFB\u7EDF\uFF0C\u80FD\u591F\u611F\u77E5\u5230\u76EE\u524D\u6700\u7E41\u5FD9\u7684\u670D\u52A1\uFF0C\u5E76\u81EA\u52A8\u4F38\u7F29\u5B83\u4EEC\uFF1B\u8FD8\u9700\u8981\u4E00\u4E2A\u5FEB\u901F\u54CD\u5E94\u7684\u81EA\u52A8\u5316\u53D1\u5E03\u3001\u90E8\u7F72\u548C\u670D\u52A1\u6CE8\u518C\u7684\u8FD0\u7EF4\u7CFB\u7EDF\u3002\u5982\u679C\u7CFB\u7EDF\u7684\u5904\u7406\u538B\u529B\u96C6\u4E2D\u5728\u6570\u636E\u5E93\u8FD9\u7C7B\u4E0D\u6613\u81EA\u52A8\u6269\u5BB9\u7684\u5916\u90E8\u670D\u52A1\uFF0C\u670D\u52A1\u5F39\u6027\u4F38\u7F29\u610F\u4E49\u4E0D\u5927\u3002</li></ul><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4ECB\u7ECD\u4E24\u79CD\u5E38\u7528\u7684\u9650\u6D41\u7B97\u6CD5\uFF1A\u6F0F\u6876\u7B97\u6CD5\u548C\u4EE4\u724C\u6876\u7B97\u6CD5\u3002</p><h4 id="_3-3-1-\u6F0F\u6876\u7B97\u6CD5-leaky-bucket" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u6F0F\u6876\u7B97\u6CD5-leaky-bucket" aria-hidden="true">#</a> 3.3.1 \u6F0F\u6876\u7B97\u6CD5(Leaky Bucket)</h4><p>\u6F0F\u6876\u7B97\u6CD5(Leaky Bucket)\u662F\u7F51\u7EDC\u4E16\u754C\u4E2D\u6D41\u91CF\u6574\u5F62(Traffic Shaping)\u6216\u901F\u7387\u9650\u5236(Rate Limiting)\u65F6\u7ECF\u5E38\u4F7F\u7528\u7684\u4E00\u79CD\u7B97\u6CD5\uFF0C\u5B83\u7684\u4E3B\u8981\u76EE\u7684\u662F\u63A7\u5236\u6570\u636E\u6CE8\u5165\u5230\u7CFB\u7EDF\u7684\u901F\u7387\uFF0C\u5E73\u6ED1\u5BF9\u7CFB\u7EDF\u7684\u7A81\u53D1\u6D41\u91CF\uFF0C\u4E3A\u7CFB\u7EDF\u63D0\u4F9B\u4E00\u4E2A\u7A33\u5B9A\u7684\u8BF7\u6C42\u6D41\u91CF\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012210842217.png" alt="image-20221012210842217" loading="lazy"></p><p>\u5982\u4E0A\u56FE\u6240\u793A\uFF0C\u6C34(\u8BF7\u6C42)\u5148\u8FDB\u5165\u5230\u6F0F\u6876\uFF0C\u800C\u51FA\u53BB\u7684\u6C34\u91CF\u8868\u793A\u7CFB\u7EDF\u5904\u7406\u7684\u8BF7\u6C42\u3002\u5F53\u8BBF\u95EE\u6D41\u91CF\u8FC7\u5927\u65F6\u6F0F\u6876\u4E2D\u5C31\u4F1A\u79EF\u6C34\uFF0C\u5982\u679C\u6C34\u592A\u591A\u4E86\u5C31\u4F1A\u6EA2\u51FA\uFF0C\u6B64\u65F6\u8BF7\u6C42\u5C06\u4F1A\u88AB\u62D2\u7EDD\u3002</p><h4 id="_3-3-2-\u4EE4\u724C\u6876\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u4EE4\u724C\u6876\u7B97\u6CD5" aria-hidden="true">#</a> 3.3.2 \u4EE4\u724C\u6876\u7B97\u6CD5</h4><p>\u4EE4\u724C\u6876\u7B97\u6CD5\u5219\u662F\u4E00\u4E2A\u5B58\u653E\u56FA\u5B9A\u5BB9\u91CF\u4EE4\u724C\u7684\u6876\uFF0C\u6309\u7167\u56FA\u5B9A\u901F\u7387\u5F80\u6876\u91CC\u6DFB\u52A0\u4EE4\u724C\u3002\u6876\u4E2D\u5B58\u653E\u7684\u4EE4\u724C\u6570\u6709\u6700\u5927\u4E0A\u9650\uFF0C\u8D85\u51FA\u4E4B\u540E\u5C31\u88AB\u4E22\u5F03\u3002\u5F53\u6D41\u91CF\u6216\u8005\u7F51\u7EDC\u8BF7\u6C42\u5230\u8FBE\u65F6\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u90FD\u8981\u83B7\u53D6\u4E00\u4E2A\u4EE4\u724C\uFF0C\u5982\u679C\u80FD\u591F\u83B7\u53D6\u5230\uFF0C\u5219\u76F4\u63A5\u5904\u7406\uFF0C\u540C\u65F6\u4EE4\u724C\u6876\u4F1A\u5220\u9664\u4E00\u4E2A\u4EE4\u724C\u3002\u5982\u679C\u83B7\u53D6\u4E0D\u5230\uFF0C\u8BE5\u8BF7\u6C42\u5C31\u8981\u88AB\u9650\u6D41\uFF0C\u8981\u4E48\u76F4\u63A5\u4E22\u5F03\uFF0C\u8981\u4E48\u5728\u7F13\u51B2\u533A\u7B49\u5F85\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20221012211150889.png" alt="image-20221012211150889" loading="lazy"></p><h2 id="_4-\u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848" aria-hidden="true">#</a> 4. \u5176\u4ED6\u8BBE\u8BA1\u4E0E\u65B9\u6848</h2><h3 id="_4-1-\u964D\u7EA7\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-1-\u964D\u7EA7\u8BBE\u8BA1" aria-hidden="true">#</a> 4.1 \u964D\u7EA7\u8BBE\u8BA1</h3><p>\u5728\u5E94\u5BF9\u5927\u6D41\u91CF\u51B2\u51FB\u65F6\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u5BF9\u8BF7\u6C42\u7684\u5904\u7406\u6D41\u7A0B\u8FDB\u884C\u88C1\u526A\uFF0C\u53BB\u9664\u6216\u8005\u5F02\u6B65\u5316\u975E\u5173\u952E\u6D41\u7A0B\u7684\u6B21\u8981\u529F\u80FD\uFF0C\u4FDD\u8BC1\u4E3B\u6D41\u7A0B\u529F\u80FD\u6B63\u5E38\u8FD0\u8F6C\u3002</p><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u7684\u964D\u7EA7\u65F6\u53EF\u4EE5\u6682\u65F6\u727A\u7272\u7684\u4E1C\u897F\u6709\uFF1A</p><ul><li>\u964D\u4F4E\u4E00\u81F4\u6027\u3002\u4ECE\u6570\u636E\u5F3A\u4E00\u81F4\u6027\u53D8\u6210\u6700\u7EC8\u4E00\u81F4\u6027\u3002</li><li>\u5173\u95ED\u975E\u5173\u952E\u670D\u52A1\u3002\u5173\u95ED\u4E0D\u91CD\u8981\u529F\u80FD\u7684\u670D\u52A1\uFF0C\u4ECE\u800C\u91CA\u653E\u51FA\u66F4\u591A\u7684\u8D44\u6E90\u3002</li><li>\u7B80\u5316\u529F\u80FD\u3002\u628A\u4E00\u4E9B\u529F\u80FD\u7B80\u5316\u6389\uFF0C\u6BD4\u5982\uFF0C\u7B80\u5316\u4E1A\u52A1\u6D41\u7A0B\uFF0C\u6216\u662F\u4E0D\u518D\u8FD4\u56DE\u5168\u91CF\u6570\u636E\uFF0C\u53EA\u8FD4\u56DE\u90E8\u5206\u6570\u636E\u3002\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7F13\u5B58\u7684\u65B9\u5F0F\uFF0C\u8FD4\u56DE\u9884\u8BBE\u7684\u7F13\u5B58\u6570\u636E\u6216\u8005\u9759\u6001\u6570\u636E\uFF0C\u4E0D\u6267\u884C\u5177\u4F53\u7684\u4E1A\u52A1\u6570\u636E\u67E5\u8BE2\u5904\u7406\u3002</li></ul><h3 id="_4-2-\u65E0\u72B6\u6001\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-2-\u65E0\u72B6\u6001\u8BBE\u8BA1" aria-hidden="true">#</a> 4.2 \u65E0\u72B6\u6001\u8BBE\u8BA1</h3><p>\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u8BBE\u8BA1\u4E2D\uFF0C\u90FD\u5021\u5BFC\u4F7F\u7528\u65E0\u72B6\u6001\u5316\u7684\u65B9\u5F0F\u8BBE\u8BA1\u5F00\u53D1\u670D\u52A1\u6A21\u5757\u3002\u65E0\u72B6\u6001\u7684\u610F\u601D\u662F\u6307\u5BF9\u4E8E\u529F\u80FD\u76F8\u540C\u7684\u670D\u52A1\u6A21\u5757\uFF0C\u5728\u670D\u52A1\u5185\u90E8\u4E0D\u7EF4\u62A4\u4EFB\u4F55\u7684\u6570\u636E\u72B6\u6001\uFF0C\u53EA\u4F1A\u6839\u636E\u8BF7\u6C42\u4E2D\u643A\u5E26\u7684\u4E1A\u52A1\u6570\u636E\u4ECE\u5916\u90E8\u670D\u52A1\u6BD4\u5982\u6570\u636E\u5E93\u3001\u5206\u5E03\u5F0F\u7F13\u5B58\u4E2D\u67E5\u8BE2\u76F8\u5173\u6570\u636E\u8FDB\u884C\u5904\u7406\uFF0C\u8FD9\u6837\u80FD\u591F\u4FDD\u8BC1\u8BF7\u6C42\u5230\u4EFB\u610F\u670D\u52A1\u5B9E\u4F8B\u4E2D\u5904\u7406\u7ED3\u679C\u90FD\u662F\u4E00\u81F4\u7684\u3002</p><p>\u65E0\u72B6\u6001\u8BBE\u8BA1\u7684\u670D\u52A1\u6A21\u5757\u53EF\u4EE5\u7B80\u5355\u901A\u8FC7\u591A\u5B9E\u4F8B\u90E8\u7F72\u7684\u65B9\u5F0F\u8FDB\u884C\u6A2A\u5411\u6269\u5C55\uFF0C\u5404\u670D\u52A1\u5B9E\u4F8B\u5B8C\u5168\u5BF9\u7B49\uFF0C\u53EF\u4EE5\u6709\u6548\u63D0\u9AD8\u670D\u52A1\u96C6\u7FA4\u7684\u541E\u5410\u91CF\u548C\u53EF\u7528\u6027\u3002\u4F46\u662F\u5982\u6B64\u4E00\u6765\uFF0C\u670D\u52A1\u5904\u7406\u7684\u6027\u80FD\u74F6\u9888\u5C31\u53EF\u80FD\u51FA\u73B0\u5728\u63D0\u4F9B\u6570\u636E\u72B6\u6001\u4E00\u81F4\u6027\u7684\u5916\u90E8\u670D\u52A1\u4E2D\u3002</p><h3 id="_4-3-\u5E42\u7B49\u6027\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5E42\u7B49\u6027\u8BBE\u8BA1" aria-hidden="true">#</a> 4.3 \u5E42\u7B49\u6027\u8BBE\u8BA1</h3><p>\u5E42\u7B49\u6027\u8BBE\u8BA1\u662F\u6307\u7CFB\u7EDF\u5BF9\u4E8E\u76F8\u540C\u7684\u8BF7\u6C42\uFF0C\u4E00\u6B21\u548C\u591A\u6B21\u8BF7\u6C42\u83B7\u53D6\u5230\u7684\u7ED3\u679C\u90FD\u662F\u4E00\u6837\u7684\u3002\u5E42\u7B49\u6027\u8BBE\u8BA1\u5BF9\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u8D85\u65F6\u91CD\u8BD5\u3001\u7CFB\u7EDF\u6062\u590D\u6709\u91CD\u8981\u7684\u610F\u4E49\uFF0C\u5B83\u80FD\u591F\u4FDD\u8BC1\u91CD\u590D\u8C03\u7528\u4E0D\u4F1A\u4EA7\u751F\u9519\u8BEF\uFF0C\u4FDD\u8BC1\u7CFB\u7EDF\u7684\u53EF\u7528\u6027\u3002\u4E00\u822C\u6211\u4EEC\u8BA4\u4E3A\u58F0\u660E\u4E3A\u5E42\u7B49\u6027\u7684\u63A5\u53E3\u6216\u8005\u670D\u52A1\u51FA\u73B0\u8C03\u7528\u5931\u8D25\u662F\u5E38\u6001\uFF0C\u7531\u4E8E\u5E42\u7B49\u6027\u7684\u539F\u56E0\uFF0C\u8C03\u7528\u65B9\u53EF\u4EE5\u5728\u8C03\u7528\u5931\u8D25\u540E\u653E\u5FC3\u8FDB\u884C\u91CD\u65B0\u8BF7\u6C42\u3002\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF0C\u5728\u652F\u4ED8\u7CFB\u7EDF\u4E2D\uFF0C\u5728\u4E00\u7B14\u8BA2\u5355\u7684\u652F\u4ED8\u8BF7\u6C42\u4E2D\uFF0C\u7531\u4E8E\u7F51\u7EDC\u6296\u52A8\u6216\u8005\u5176\u4ED6\u672A\u77E5\u7684\u56E0\u7D20\u5BFC\u81F4\u8BF7\u6C42\u6CA1\u80FD\u53CA\u65F6\u8FD4\u56DE\uFF0C\u5982\u679C\u652F\u4ED8\u63A5\u53E3\u662F\u5E42\u7B49\u6027\uFF0C\u6211\u4EEC\u5E94\u8BE5\u53EF\u4EE5\u653E\u5FC3\u4F7F\u7528\u540C\u4E00\u7B14\u8BA2\u5355\u53F7\u91CD\u65B0\u8BF7\u6C42\u652F\u4ED8\uFF0C\u5982\u679C\u4E0A\u6B21\u652F\u4ED8\u8BF7\u6C42\u5DF2\u7ECF\u6210\u529F\uFF0C\u5C06\u4F1A\u8FD4\u56DE\u652F\u4ED8\u6210\u529F\uFF0C\u5982\u679C\u4E0A\u6B21\u652F\u4ED8\u8BF7\u6C42\u672A\u6210\u529F\uFF0C\u5C06\u4F1A\u91CD\u65B0\u8FDB\u884C\u91D1\u989D\u6263\u8D39\uFF0C\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u8BF7\u6C42\u7684\u6B63\u786E\u8FDB\u884C\uFF0C\u907F\u514D\u91CD\u590D\u6263\u8D39\u7684\u9519\u8BEF\u3002</p><h3 id="_4-4-\u91CD\u8BD5\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-4-\u91CD\u8BD5\u8BBE\u8BA1" aria-hidden="true">#</a> 4.4 \u91CD\u8BD5\u8BBE\u8BA1</h3><p>\u5728\u5F88\u591A\u65F6\u5019\uFF0C\u7531\u4E8E\u7F51\u7EDC\u4E0D\u53EF\u9760\u6216\u8005\u670D\u52A1\u63D0\u4F9B\u65B9\u5B95\u673A\u7684\u539F\u56E0\uFF0C\u670D\u52A1\u8C03\u7528\u8005\u7684\u8C03\u7528\u5F88\u53EF\u80FD\u4F1A\u5931\u8D25\uFF0C\u5982\u679C\u6B64\u65F6\u670D\u52A1\u8C03\u7528\u8005\u4E2D\u5B58\u5728\u4E00\u5B9A\u7684\u91CD\u8BD5\u673A\u5236\uFF0C\u5C31\u80FD\u591F\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u51CF\u5C11\u670D\u52A1\u5931\u8D25\u7684\u6982\u7387\uFF0C\u63D0\u9AD8\u670D\u52A1\u53EF\u7528\u6027\u3002\u6BD4\u5982\u4E1A\u52A1\u7CFB\u7EDF\u5728\u67D0\u6B21\u6570\u636E\u5E93\u8BF7\u6C42\u4E2D\uFF0C\u7531\u4E8E\u4E34\u65F6\u7684\u7F51\u7EDC\u539F\u56E0\uFF0C\u6570\u636E\u8BF7\u6C42\u8D85\u65F6\u4E86\uFF0C\u5982\u679C\u4E1A\u52A1\u7CFB\u7EDF\u4E2D\u5177\u5907\u4E00\u5B9A\u7684\u8D85\u65F6\u91CD\u8BD5\u673A\u5236\uFF0C\u6839\u636E\u8BF7\u6C42\u53C2\u6570\u518D\u6B21\u5411\u6570\u636E\u5E93\u8BF7\u6C42\u6570\u636E\uFF0C\u5C31\u80FD\u6B63\u5E38\u83B7\u53D6\u5230\u6570\u636E\uFF0C\u5B8C\u6210\u4E1A\u52A1\u5904\u7406\u6D41\u7A0B\uFF0C\u907F\u514D\u8BE5\u6B21\u4E1A\u52A1\u5904\u7406\u5931\u8D25\u3002</p><p>\u4F7F\u7528\u91CD\u8BD5\u8BBE\u8BA1\u7684\u65F6\u5019\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u95EE\u9898\uFF1A\u4E00\u662F\u5F85\u91CD\u8BD5\u7684\u670D\u52A1\u63A5\u53E3\u662F\u5426\u4E3A\u5E42\u7B49\u6027\uFF0C\u5BF9\u4E8E\u67D0\u4E9B\u8D85\u65F6\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u53EF\u80FD\u5728\u670D\u52A1\u63D0\u4F9B\u65B9\u4E2D\u6267\u884C\u6210\u529F\u4E86\uFF0C\u4F46\u662F\u8FD4\u56DE\u7ED3\u679C\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u4E22\u5931\u4E86\uFF0C\u6B64\u65F6\u91CD\u590D\u8C03\u7528\u975E\u5E42\u7B49\u6027\u670D\u52A1\u63A5\u53E3\u5F88\u53EF\u80FD\u4F1A\u5BFC\u81F4\u989D\u5916\u7684\u7CFB\u7EDF\u9519\u8BEF\uFF1B\u4E8C\u662F\u670D\u52A1\u63D0\u4F9B\u65B9\u662F\u5426\u53EA\u662F\u4E34\u65F6\u4E0D\u53EF\u7528\uFF0C\u5BF9\u4E8E\u65E0\u6CD5\u5FEB\u901F\u6062\u590D\u7684\u670D\u52A1\u63D0\u4F9B\u65B9\u6216\u8005\u7F51\u7EDC\u65E0\u6CD5\u7ACB\u5373\u6062\u590D\u7684\u60C5\u51B5\u4E0B\uFF0C\u76F2\u76EE\u7684\u91CD\u8BD5\u53EA\u4F1A\u4F7F\u60C5\u51B5\u66F4\u52A0\u7CDF\u7CD5\uFF0C\u65E0\u8111\u5730\u6D88\u8017\u670D\u52A1\u8C03\u7528\u65B9\u7684 CPU \u3001\u7EBF\u7A0B\u548C\u7F51\u7EDC IO \u8D44\u6E90\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\u5EFA\u8BAE\u7ED3\u5408\u7194\u65AD\u8BBE\u8BA1\u5BF9\u670D\u52A1\u8C03\u7528\u65B9\u8FDB\u884C\u4FDD\u62A4\u3002</p><p>\u4FDD\u62A4\u3002</p><h3 id="_4-5-\u63A5\u53E3\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#_4-5-\u63A5\u53E3\u7F13\u5B58" aria-hidden="true">#</a> 4.5 \u63A5\u53E3\u7F13\u5B58</h3><p>\u63A5\u53E3\u7F13\u5B58\u662F\u5E94\u5BF9\u5927\u5E76\u53D1\u91CF\u8BF7\u6C42\uFF0C\u63D0\u9AD8\u7CFB\u7EDF\u541E\u5410\u91CF\uFF0C\u4FDD\u8BC1\u7CFB\u7EDF\u53EF\u7528\u6027\u7684\u6709\u6548\u624B\u6BB5\u3002\u57FA\u672C\u539F\u7406\u662F\uFF0C\u5728\u7CFB\u7EDF\u5185\u90E8\uFF0C\u5BF9\u4E8E\u67D0\u90E8\u5206\u8BF7\u6C42\u53C2\u6570\u548C\u8BF7\u6C42\u8DEF\u5F84\u5B8C\u6210\u76F8\u540C\u7684\u8BF7\u6C42\u7684\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\uFF0C\u5728\u5468\u671F\u65F6\u95F4\u5185\uFF0C\u8FD9\u90E8\u5206\u76F8\u540C\u7684\u8BF7\u6C42\u7684\u7ED3\u679C\u5C06\u4F1A\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u8BFB\u53D6\uFF0C\u51CF\u5C11\u4E1A\u52A1\u5904\u7406\u8FC7\u7A0B\u7684\u8D1F\u8F7D\u3002\u6700\u7B80\u5355\u7684\u4F8B\u5B50\u662F\u5728\u4E00\u4E9B\u5728\u7EBF\u5927\u6570\u636E\u67E5\u8BE2\u7CFB\u7EDF\u4E2D\uFF0C\u67E5\u8BE2\u7CFB\u7EDF\u4F1A\u5C06\u5468\u671F\u65F6\u95F4\u5185\u7CFB\u7EDF\u67E5\u8BE2\u6761\u4EF6\u76F8\u540C\u7684\u67E5\u8BE2\u7ED3\u679C\u8FDB\u884C\u7F13\u5B58\uFF0C\u52A0\u5FEB\u8BBF\u95EE\u901F\u5EA6\u3002</p><p>\u63A5\u53E3\u7F13\u5B58\u540C\u6837\u6709\u7740\u5B83\u4E0D\u9002\u7528\u7684\u573A\u666F\u3002\u63A5\u53E3\u7F13\u5B58\u727A\u7272\u4E86\u6570\u636E\u7684\u5F3A\u4E00\u81F4\u6027\uFF0C\u5BF9\u4E8E\u5B9E\u65F6\u6027\u8981\u6C42\u9AD8\u7684\u7CFB\u7EDF\u5E76\u4E0D\u9002\u7528\u3002\u63A5\u53E3\u7F13\u5B58\u52A0\u5FEB\u7684\u662F\u76F8\u540C\u8BF7\u6C42\u7684\u8BF7\u6C42\u901F\u7387\uFF0C\u5BF9\u4E8E\u8BF7\u6C42\u5DEE\u5F02\u5316\u8F83\u5927\u7684\u7CFB\u7EDF\u540C\u6837\u65E0\u80FD\u4E3A\u529B\uFF0C\u8FC7\u591A\u7684\u7F13\u5B58\u53CD\u800C\u4F1A\u5927\u91CF\u6D6A\u8D39\u7CFB\u7EDF\u5185\u5B58\u7B49\u8D44\u6E90\u3002</p><h3 id="_4-6-\u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF" tabindex="-1"><a class="header-anchor" href="#_4-6-\u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF" aria-hidden="true">#</a> 4.6 \u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF</h3><p>\u7531\u4E8E\u5206\u5E03\u5F0F\u4E2D\u670D\u52A1\u8282\u70B9\u4F17\u591A\uFF0C\u95EE\u9898\u7684\u5B9A\u4F4D\u53D8\u5F97\u5F02\u5E38\u590D\u6742\uFF0C\u5BF9\u6B64\u5EFA\u8BAE\u5BF9\u6BCF\u53F0\u670D\u52A1\u5668\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\u548C\u670D\u52A1\u5B9E\u4F8B\u7684\u6027\u80FD\u6307\u6807\u8FDB\u884C\u5B9E\u65F6\u76D1\u63A7\u548C\u5EA6\u91CF\u3002\u6700\u5E38\u89C1\u7684\u65B9\u5F0F\u5065\u5EB7\u68C0\u67E5\uFF0C\u901A\u8FC7\u5B9A\u65F6\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u7ED9\u5065\u5EB7\u68C0\u67E5\u63A5\u53E3\u5224\u65AD\u670D\u52A1\u662F\u5426\u53EF\u7528\u3002\u76EE\u524D\u4E1A\u5185\u4E5F\u6709\u5F00\u6E90\u7684\u76D1\u63A7\u7CFB\u7EDF Prometheus\uFF0C\u5B83\u76D1\u63A7\u5404\u4E2A\u670D\u52A1\u5B9E\u4F8B\u7684\u8FD0\u884C\u6307\u6807\uFF0C\u5E76\u6839\u636E\u9884\u8BBE\u7684\u9600\u503C\u81EA\u52A8\u62A5\u8B66\uFF0C\u53CA\u65F6\u901A\u77E5\u76F8\u5173\u5F00\u53D1\u8FD0\u7EF4\u4EBA\u5458\u8FDB\u884C\u5904\u7406\u3002</p><h3 id="_4-7-\u5E38\u89C4\u5212\u5316\u7EF4\u62A4" tabindex="-1"><a class="header-anchor" href="#_4-7-\u5E38\u89C4\u5212\u5316\u7EF4\u62A4" aria-hidden="true">#</a> 4.7 \u5E38\u89C4\u5212\u5316\u7EF4\u62A4</h3><p>\u5B9A\u671F\u6E05\u7406\u7CFB\u7EDF\u7684\u65E0\u7528\u4EE3\u7801\uFF0C\u53CA\u65F6\u8FDB\u884C\u4EE3\u7801\u8BC4\u5BA1\uFF0C\u5904\u7406\u4EE3\u7801\u4E2D bad smell\u3002\u5BF9\u4E8E\u65E0\u72B6\u6001\u670D\u52A1\u53EF\u4EE5\u5B9A\u671F\u91CD\u542F\u670D\u52A1\u5668\u51CF\u5C11\u5185\u5B58\u788E\u7247\u548C\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F\u3002\u8FD9\u4E9B\u90FD\u662F\u975E\u5E38\u6709\u6548\u7684\u63D0\u9AD8\u7CFB\u7EDF\u53EF\u7528\u6027\u7684\u8FD0\u7EF4\u624B\u6BB5\u3002</p><h2 id="_5-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_5-\u603B\u7ED3" aria-hidden="true">#</a> 5. \u603B\u7ED3</h2><p>\u867D\u7136\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u7531\u4E8E\u7CFB\u7EDF\u7684\u590D\u6742\u6027\uFF0C\u5927\u5927\u52A0\u5927\u4E86\u670D\u52A1\u9519\u8BEF\u7684\u53EF\u80FD\u6027\uFF0C\u4F46\u662F\u4E5F\u6709\u8DB3\u591F\u7684\u65B9\u6848\u4FDD\u8BC1\u7CFB\u7EDF\u53EF\u7528\u6027\u3002\u672C\u6587\u9996\u5148\u4ECB\u7ECD\u4E86\u7CFB\u7EDF\u53EF\u7528\u6027\u6307\u6807\uFF0C\u63A5\u7740\u9610\u8FF0\u4E86\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u6545\u969C\u4E0D\u53EF\u907F\u514D\u7684\u60C5\u51B5\uFF0C\u6700\u540E\u7B3C\u7EDF\u5730\u4ECB\u7ECD\u4E86\u4E00\u4E9B\u6709\u6548\u7684\u9AD8\u53EF\u7528\u8BBE\u8BA1\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,70),p={href:"https://bbs.huaweicloud.com/blogs/236943",target:"_blank",rel:"noopener noreferrer"},c=r("\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F(\u4E0A)"),u={href:"https://bbs.huaweicloud.com/blogs/245653",target:"_blank",rel:"noopener noreferrer"},_=r("\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5982\u4F55\u4FDD\u8BC1\u9AD8\u53EF\u7528\u6027\uFF1F(\u4E0B)");function b(g,k){const a=o("ExternalLinkIcon");return l(),s("div",null,[d,e("p",null,[e("a",p,[c,i(a)])]),e("p",null,[e("a",u,[_,i(a)])])])}const T=n(t,[["render",b],["__file","arch-y-ensure-high-availability.html.vue"]]);export{T as default};
