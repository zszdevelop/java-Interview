import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as e,d as o,e as c,r as i}from"./app.224ba93c.js";const l={},u=o(`<h1 id="redis\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#redis\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> Redis\u5E03\u9686\u8FC7\u6EE4\u5668</h1><h2 id="_1-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 1. \u4F7F\u7528\u573A\u666F</h2><p>\u6BD4\u5982\u6709\u5982\u4E0B\u51E0\u4E2A\u9700\u6C42\uFF1A</p><ol><li><p>\u539F\u672C\u670910\u4EBF\u4E2A\u53F7\u7801\uFF0C\u73B0\u5728\u53C8\u6765\u4E8610\u4E07\u4E2A\u53F7\u7801\uFF0C\u8981\u5FEB\u901F\u51C6\u786E\u5224\u65AD\u8FD910\u4E07\u4E2A\u53F7\u7801\u662F\u5426\u572810\u4EBF\u4E2A\u53F7\u7801\u5E93\u4E2D\uFF1F</p><ul><li>\u89E3\u51B3\u529E\u6CD5\u4E00\uFF1A\u5C0610\u4EBF\u4E2A\u53F7\u7801\u5B58\u5165\u6570\u636E\u5E93\u4E2D\uFF0C\u8FDB\u884C\u6570\u636E\u5E93\u67E5\u8BE2\uFF0C\u51C6\u786E\u6027\u6709\u4E86\uFF0C\u4F46\u662F\u901F\u5EA6\u4F1A\u6BD4\u8F83\u6162\u3002</li><li>\u89E3\u51B3\u529E\u6CD5\u4E8C\uFF1A\u5C0610\u4EBF\u53F7\u7801\u653E\u5165\u5185\u5B58\u4E2D\uFF0C\u6BD4\u5982Redis\u7F13\u5B58\u4E2D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u7B97\u4E00\u4E0B\u5360\u7528\u5185\u5B58\u5927\u5C0F\uFF1A10\u4EBF*8\u5B57\u8282=8GB\uFF0C\u901A\u8FC7\u5185\u5B58\u67E5\u8BE2\uFF0C\u51C6\u786E\u6027\u548C\u901F\u5EA6\u90FD\u6709\u4E86\uFF0C\u4F46\u662F\u5927\u7EA68gb\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u633A\u6D6A\u8D39\u5185\u5B58\u7A7A\u95F4\u7684\u3002</li></ul></li><li><p>\u63A5\u89E6\u8FC7\u722C\u866B\u7684\uFF0C\u5E94\u8BE5\u6709\u8FD9\u4E48\u4E00\u4E2A\u9700\u6C42\uFF0C\u9700\u8981\u722C\u866B\u7684\u7F51\u7AD9\u5343\u5343\u4E07\u4E07\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u65B0\u7684\u7F51\u7AD9url\uFF0C\u6211\u4EEC\u5982\u4F55\u5224\u65AD\u8FD9\u4E2Aurl\u6211\u4EEC\u662F\u5426\u5DF2\u7ECF\u722C\u8FC7\u4E86\uFF1F</p><p>\u89E3\u51B3\u529E\u6CD5\u8FD8\u662F\u4E0A\u9762\u7684\u4E24\u79CD\uFF0C\u5F88\u663E\u7136\uFF0C\u90FD\u4E0D\u592A\u597D\u3002</p></li><li><p>\u540C\u7406\u8FD8\u6709\u5783\u573E\u90AE\u7BB1\u7684\u8FC7\u6EE4\u3002</p></li></ol><p>\u90A3\u4E48\u5BF9\u4E8E\u7C7B\u4F3C\u8FD9\u79CD\uFF0C\u5927\u6570\u636E\u91CF\u96C6\u5408\uFF0C\u5982\u4F55\u51C6\u786E\u5FEB\u901F\u7684\u5224\u65AD\u67D0\u4E2A\u6570\u636E\u662F\u5426\u5728\u5927\u6570\u636E\u91CF\u96C6\u5408\u4E2D\uFF0C\u5E76\u4E14\u4E0D\u5360\u7528\u5185\u5B58\uFF0C<strong>\u5E03\u9686\u8FC7\u6EE4\u5668</strong>\u5E94\u8FD0\u800C\u751F\u4E86\u3002</p><h2 id="_2-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-\u7B80\u4ECB" aria-hidden="true">#</a> 2. \u7B80\u4ECB</h2><p>\u5E26\u7740\u4E0A\u9762\u7684\u51E0\u4E2A\u7591\u95EE\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u5230\u5E95\u4EC0\u4E48\u662F\u5E03\u9686\u8FC7\u6EE4\u5668\u3002</p><p><strong>\u5E03\u9686\u8FC7\u6EE4\u5668\uFF1A\u4E00\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u662F\u7531\u4E00\u4E32\u5F88\u957F\u7684\u4E8C\u8FDB\u5236\u5411\u91CF\u7EC4\u6210\uFF0C\u53EF\u4EE5\u5C06\u5176\u770B\u6210\u4E00\u4E2A\u4E8C\u8FDB\u5236\u6570\u7EC4\u3002\u65E2\u7136\u662F\u4E8C\u8FDB\u5236\uFF0C\u90A3\u4E48\u91CC\u9762\u5B58\u653E\u7684\u4E0D\u662F0\uFF0C\u5C31\u662F1\uFF0C\u4F46\u662F\u521D\u59CB\u9ED8\u8BA4\u503C\u90FD\u662F0\u3002</strong></p><p>\u5982\u4E0B\u6240\u793A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211038045.png" alt="image-20220628211038045" loading="lazy"></p><h3 id="_2-1-\u6DFB\u52A0\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6DFB\u52A0\u6570\u636E" aria-hidden="true">#</a> 2.1 \u6DFB\u52A0\u6570\u636E</h3><p>\u4ECB\u7ECD\u6982\u5FF5\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u8BF4\u53EF\u4EE5\u5C06\u5E03\u9686\u8FC7\u6EE4\u5668\u770B\u6210\u4E00\u4E2A\u5BB9\u5668\uFF0C\u90A3\u4E48\u5982\u4F55\u5411\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\u5462\uFF1F</p><p>\u5982\u4E0B\u56FE\u6240\u793A\uFF1A\u5F53\u8981\u5411\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5143\u7D20key\u65F6\uFF0C<strong>\u6211\u4EEC\u901A\u8FC7\u591A\u4E2Ahash\u51FD\u6570</strong>\uFF0C\u7B97\u51FA\u4E00\u4E2A\u503C\uFF0C\u7136\u540E\u5C06\u8FD9\u4E2A\u503C\u6240\u5728\u7684\u65B9\u683C\u7F6E\u4E3A1\u3002</p><p>\u6BD4\u5982\uFF0C\u4E0B\u56FEhash1(key)=1\uFF0C\u90A3\u4E48\u5728\u7B2C2\u4E2A\u683C\u5B50\u5C060\u53D8\u4E3A1\uFF08\u6570\u7EC4\u662F\u4ECE0\u5F00\u59CB\u8BA1\u6570\u7684\uFF09\uFF0Chash2(key)=7\uFF0C\u90A3\u4E48\u5C06\u7B2C8\u4E2A\u683C\u5B50\u7F6E\u4F4D1\uFF0C\u4F9D\u6B21\u7C7B\u63A8\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211153829.png" alt="image-20220628211153829" loading="lazy"></p><h3 id="_2-2-\u5224\u65AD\u6570\u636E\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5224\u65AD\u6570\u636E\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> <strong>2.2 \u5224\u65AD\u6570\u636E\u662F\u5426\u5B58\u5728\uFF1F</strong></h3><p>\u77E5\u9053\u4E86\u5982\u4F55\u5411\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u6570\u636E\uFF0C\u90A3\u4E48\u65B0\u6765\u4E00\u4E2A\u6570\u636E\uFF0C\u6211\u4EEC\u5982\u4F55\u5224\u65AD\u5176\u662F\u5426\u5B58\u5728\u4E8E\u8FD9\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u5462\uFF1F</p><p>\u5F88\u7B80\u5355\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u65B0\u7684\u6570\u636E\u901A\u8FC7\u4E0A\u9762\u81EA\u5B9A\u4E49\u7684\u51E0\u4E2A\u54C8\u5E0C\u51FD\u6570\uFF0C\u5206\u522B\u7B97\u51FA\u5404\u4E2A\u503C\uFF0C\u7136\u540E\u770B\u5176\u5BF9\u5E94\u7684\u5730\u65B9\u662F\u5426\u90FD\u662F1\uFF0C\u5982\u679C\u5B58\u5728\u4E00\u4E2A\u4E0D\u662F1\u7684\u60C5\u51B5\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EF\u4EE5\u8BF4\uFF0C\u8BE5\u65B0\u6570\u636E\u4E00\u5B9A\u4E0D\u5B58\u5728\u4E8E\u8FD9\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u3002</p><p>\u53CD\u8FC7\u6765\u8BF4\uFF0C\u5982\u679C\u901A\u8FC7\u54C8\u5E0C\u51FD\u6570\u7B97\u51FA\u6765\u7684\u503C\uFF0C\u5BF9\u5E94\u7684\u5730\u65B9\u90FD\u662F1\uFF0C\u90A3\u4E48\u6211\u4EEC\u80FD\u591F\u80AF\u5B9A\u7684\u5F97\u51FA\uFF1A\u8FD9\u4E2A\u6570\u636E\u4E00\u5B9A\u5B58\u5728\u4E8E\u8FD9\u4E2A\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D\u5417\uFF1F</p><p>\u7B54\u6848\u662F\u5426\u5B9A\u7684\uFF0C\u56E0\u4E3A\u591A\u4E2A\u4E0D\u540C\u7684\u6570\u636E\u901A\u8FC7hash\u51FD\u6570\u7B97\u51FA\u6765\u7684\u7ED3\u679C\u662F\u4F1A\u6709\u91CD\u590D\u7684\uFF0C\u6240\u4EE5\u4F1A\u5B58\u5728\u67D0\u4E2A\u4F4D\u7F6E\u662F\u522B\u7684\u6570\u636E\u901A\u8FC7hash\u51FD\u6570\u7F6E\u4E3A\u76841\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u7ED3\u8BBA\uFF1A<strong>\u5E03\u9686\u8FC7\u6EE4\u5668\u53EF\u4EE5\u5224\u65AD\u67D0\u4E2A\u6570\u636E\u4E00\u5B9A\u4E0D\u5B58\u5728\uFF0C\u4F46\u662F\u65E0\u6CD5\u5224\u65AD\u4E00\u5B9A\u5B58\u5728</strong>\u3002</p><blockquote><p><strong>\u5E03\u9686\u8FC7\u6EE4\u5668\u53EF\u4EE5\u5224\u65AD\u67D0\u4E2A\u6570\u636E\u4E00\u5B9A\u4E0D\u5B58\u5728\uFF0C\u4F46\u662F\u65E0\u6CD5\u5224\u65AD\u4E00\u5B9A\u5B58\u5728</strong>\u3002</p></blockquote><h3 id="_2-3-\u5E03\u9686\u8FC7\u6EE4\u5668\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5E03\u9686\u8FC7\u6EE4\u5668\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2.3 \u5E03\u9686\u8FC7\u6EE4\u5668\u4F18\u7F3A\u70B9</h3><ul><li><p>\u4F18\u70B9\uFF1A</p><p>\u4F18\u70B9\u5F88\u660E\u663E\uFF0C\u4E8C\u8FDB\u5236\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5360\u7528\u5185\u5B58\u6781\u5C11\uFF0C\u5E76\u4E14\u63D2\u5165\u548C\u67E5\u8BE2\u901F\u5EA6\u90FD\u8DB3\u591F\u5FEB\u3002</p></li><li><p>\u7F3A\u70B9\uFF1A</p><p>\u968F\u7740\u6570\u636E\u7684\u589E\u52A0\uFF0C\u8BEF\u5224\u7387\u4F1A\u589E\u52A0\uFF1B\u8FD8\u6709\u65E0\u6CD5\u5224\u65AD\u6570\u636E\u4E00\u5B9A\u5B58\u5728\uFF1B</p><p>\u53E6\u5916\u8FD8\u6709\u4E00\u4E2A\u91CD\u8981\u7F3A\u70B9\uFF0C\u65E0\u6CD5\u5220\u9664\u6570\u636E\u3002</p></li></ul><h2 id="_3-redis\u5B9E\u73B0\u5E03\u9686\u8FC7\u6EE4\u5668" tabindex="-1"><a class="header-anchor" href="#_3-redis\u5B9E\u73B0\u5E03\u9686\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> 3. Redis\u5B9E\u73B0\u5E03\u9686\u8FC7\u6EE4\u5668</h2><h3 id="_3-1-bitmaps" tabindex="-1"><a class="header-anchor" href="#_3-1-bitmaps" aria-hidden="true">#</a> 3.1 bitmaps</h3><p>\u6211\u4EEC\u77E5\u9053\u8BA1\u7B97\u673A\u662F\u4EE5\u4E8C\u8FDB\u5236\u4F4D\u4F5C\u4E3A\u5E95\u5C42\u5B58\u50A8\u7684\u57FA\u7840\u5355\u4F4D\uFF0C\u4E00\u4E2A\u5B57\u8282\u7B49\u4E8E8\u4F4D\u3002</p><p>\u6BD4\u5982\u201Cbig\u201D\u5B57\u7B26\u4E32\u662F\u7531\u4E09\u4E2A\u5B57\u7B26\u7EC4\u6210\u7684\uFF0C\u8FD9\u4E09\u4E2A\u5B57\u7B26\u5BF9\u5E94\u7684ASCII\u7801\u5206\u4E3A\u662F98\u3001105\u3001103\uFF0C\u5BF9\u5E94\u7684\u4E8C\u8FDB\u5236\u5B58\u50A8\u5982\u4E0B\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211504219.png" alt="image-20220628211504219" loading="lazy"></p><p>\u5728Redis\u4E2D\uFF0CBitmaps \u63D0\u4F9B\u4E86\u4E00\u5957\u547D\u4EE4\u7528\u6765\u64CD\u4F5C\u7C7B\u4F3C\u4E0A\u9762\u5B57\u7B26\u4E32\u4E2D\u7684\u6BCF\u4E00\u4E2A\u4F4D\u3002</p><p><strong>\u4E00\u3001\u8BBE\u7F6E\u503C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setbit key offset value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211525940.png" alt="image-20220628211525940" loading="lazy"></p><p>\u6211\u4EEC\u77E5\u9053&quot;b&quot;\u7684\u4E8C\u8FDB\u5236\u8868\u793A\u4E3A0110 0010\uFF0C\u6211\u4EEC\u5C06\u7B2C7\u4F4D\uFF08\u4ECE0\u5F00\u59CB\uFF09\u8BBE\u7F6E\u4E3A1\uFF0C\u90A30110 0011 \u8868\u793A\u7684\u5C31\u662F\u5B57\u7B26\u201Cc\u201D\uFF0C\u6240\u4EE5\u6700\u540E\u7684\u5B57\u7B26 \u201Cbig\u201D\u53D8\u6210\u4E86\u201Ccig\u201D\u3002</p><p><strong>\u4E8C\u3001\u83B7\u53D6\u503C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gitbit key offset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211547391.png" alt="image-20220628211547391" loading="lazy"></p><p><strong>\u4E09\u3001\u83B7\u53D6\u4F4D\u56FE\u6307\u5B9A\u8303\u56F4\u503C\u4E3A1\u7684\u4E2A\u6570</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>bitcount key [start end]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u90A3\u5C31\u662F\u83B7\u53D6\u5168\u90E8\u503C\u4E3A1\u7684\u4E2A\u6570\u3002</p><p>\u6CE8\u610F\uFF1Astart\u548Cend\u6307\u5B9A\u7684\u662F<strong>\u5B57\u8282\u7684\u4E2A\u6570</strong>\uFF0C\u800C\u4E0D\u662F\u4F4D\u6570\u7EC4\u4E0B\u6807\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628211604556.png" alt="image-20220628211604556" loading="lazy"></p><h3 id="_3-2-redisson" tabindex="-1"><a class="header-anchor" href="#_3-2-redisson" aria-hidden="true">#</a> 3.2 Redisson</h3><p>Redis \u5B9E\u73B0\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5E95\u5C42\u5C31\u662F\u901A\u8FC7 bitmap \u8FD9\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u81F3\u4E8E\u5982\u4F55\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u91CD\u590D\u9020\u8F6E\u5B50\u4E86\uFF0C\u4ECB\u7ECD\u4E1A\u754C\u6BD4\u8F83\u597D\u7528\u7684\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5DE5\u5177\u2014\u2014Redisson\u3002</p><p>Redisson \u662F\u7528\u4E8E\u5728 Java \u7A0B\u5E8F\u4E2D\u64CD\u4F5C Redis \u7684\u5E93\uFF0C\u5229\u7528Redisson \u6211\u4EEC\u53EF\u4EE5\u5728\u7A0B\u5E8F\u4E2D\u8F7B\u677E\u5730\u4F7F\u7528 Redis\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u5C31\u901A\u8FC7 Redisson \u6765\u6784\u9020\u5E03\u9686\u8FC7\u6EE4\u5668\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ys<span class="token punctuation">.</span>rediscluster<span class="token punctuation">.</span>bloomfilter<span class="token punctuation">.</span>redisson</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span></span><span class="token class-name">Redisson</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">RBloomFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">RedissonClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>redisson<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">Config</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedissonBloomFilter</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Config</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">useSingleServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span><span class="token string">&quot;redis://192.168.14.104:6379&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        config<span class="token punctuation">.</span><span class="token function">useSingleServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6784\u9020Redisson</span>
        <span class="token class-name">RedissonClient</span> redisson <span class="token operator">=</span> <span class="token class-name">Redisson</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">RBloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> bloomFilter <span class="token operator">=</span> redisson<span class="token punctuation">.</span><span class="token function">getBloomFilter</span><span class="token punctuation">(</span><span class="token string">&quot;phoneList&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u521D\u59CB\u5316\u5E03\u9686\u8FC7\u6EE4\u5668\uFF1A\u9884\u8BA1\u5143\u7D20\u4E3A100000000L,\u8BEF\u5DEE\u7387\u4E3A3%</span>
        bloomFilter<span class="token punctuation">.</span><span class="token function">tryInit</span><span class="token punctuation">(</span><span class="token number">100000000L</span><span class="token punctuation">,</span><span class="token number">0.03</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5C06\u53F7\u780110086\u63D2\u5165\u5230\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D</span>
        bloomFilter<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;10086&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5224\u65AD\u4E0B\u9762\u53F7\u7801\u662F\u5426\u5728\u5E03\u9686\u8FC7\u6EE4\u5668\u4E2D</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;10086&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u5355\u8282\u70B9\u7684Redis\u5B9E\u73B0\u65B9\u5F0F\uFF0C\u5982\u679C\u6570\u636E\u91CF\u6BD4\u8F83\u5927\uFF0C\u671F\u671B\u7684\u8BEF\u5DEE\u7387\u53C8\u5F88\u4F4E\uFF0C\u90A3\u5355\u8282\u70B9\u6240\u63D0\u4F9B\u7684\u5185\u5B58\u662F\u65E0\u6CD5\u6EE1\u8DB3\u7684\uFF0C\u8FD9\u65F6\u5019\u53EF\u4EE5\u4F7F\u7528\u5206\u5E03\u5F0F\u5E03\u9686\u8FC7\u6EE4\u5668\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u7528 Redisson \u6765\u5B9E\u73B0\uFF0C\u8FD9\u91CC\u6211\u5C31\u4E0D\u505A\u4EE3\u7801\u6F14\u793A\u4E86\uFF0C\u5927\u5BB6\u6709\u5174\u8DA3\u53EF\u4EE5\u8BD5\u8BD5\u3002</p><h2 id="_4-guava-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-guava-\u5DE5\u5177" aria-hidden="true">#</a> 4. guava \u5DE5\u5177</h2><p>\u6700\u540E\u63D0\u4E00\u4E0B\u4E0D\u7528Redis\u5982\u4F55\u6765\u5B9E\u73B0\u5E03\u9686\u8FC7\u6EE4\u5668\u3002</p><p>guava \u5DE5\u5177\u5305\uFF0C\u8FD9\u662F\u8C37\u6B4C\u516C\u53F8\u63D0\u4F9B\u7684\uFF0C\u91CC\u9762\u4E5F\u63D0\u4F9B\u4E86\u5E03\u9686\u8FC7\u6EE4\u5668\u7684\u5B9E\u73B0\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>ys<span class="token punctuation">.</span>rediscluster<span class="token punctuation">.</span>bloomfilter</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>base<span class="token punctuation">.</span></span><span class="token class-name">Charsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>hash<span class="token punctuation">.</span></span><span class="token class-name">BloomFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>hash<span class="token punctuation">.</span></span><span class="token class-name">Funnel</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>hash<span class="token punctuation">.</span></span><span class="token class-name">Funnels</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GuavaBloomFilter</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BloomFilter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> bloomFilter <span class="token operator">=</span> <span class="token class-name">BloomFilter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Funnels</span><span class="token punctuation">.</span><span class="token function">stringFunnel</span><span class="token punctuation">(</span><span class="token class-name">Charsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">100000</span><span class="token punctuation">,</span><span class="token number">0.01</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        bloomFilter<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;10086&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>bloomFilter<span class="token punctuation">.</span><span class="token function">mightContain</span><span class="token punctuation">(</span><span class="token string">&quot;10086&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,53),r={href:"https://www.cnblogs.com/ysocean/p/12594982.html",target:"_blank",rel:"noopener noreferrer"},k=c("Redis\u8BE6\u89E3\uFF08\u5341\u4E09\uFF09------ Redis\u5E03\u9686\u8FC7\u6EE4\u5668 ");function d(m,g){const s=i("ExternalLinkIcon");return t(),p("div",null,[u,n("p",null,[n("a",r,[k,e(s)])])])}const h=a(l,[["render",d],["__file","redis-y-action-bloom.html.vue"]]);export{h as default};
