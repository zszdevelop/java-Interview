import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.13531e65.js";const p={},e=t(`<h1 id="css\u5C42\u53E0" tabindex="-1"><a class="header-anchor" href="#css\u5C42\u53E0" aria-hidden="true">#</a> CSS\u5C42\u53E0</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u81EA\u5DF1\u5728\u9879\u76EE\u4E2D\u5BF9z-index \u7406\u89E3\u7684\u5E76\u4E0D\u5230\u4F4D\uFF0C\u5BFC\u81F4\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0E\u9884\u671F\u6548\u679C\u4E0D\u4E00\u81F4\u3002</p><blockquote><p>\u4E00\u76F4\u8BA4\u4E3A<code>z-index</code>\u5C31\u662F\u7528\u6765\u63CF\u8FF0\u5B9A\u4E49\u4E00\u4E2A\u5143\u7D20\u5728\u5C4F\u5E55<code>Z\u8F74</code>\u4E0A\u7684\u5806\u53E0\u987A\u5E8F\u3002<code>z-index</code>\u503C\u8D8A\u5927\u5728<code>Z\u8F74</code>\u4E0A\u5C31\u8D8A\u9760\u4E0A\uFF0C\u4E5F\u5C31\u662F\u79BB\u5C4F\u5E55\u89C2\u5BDF\u8005\u8D8A\u8FD1\u3002\u6700\u540E\u624D\u53D1\u73B0\u8FD9\u4E2A\u8BA4\u8BC6\u5B58\u5728\u5F88\u5927\u7684\u95EE\u9898\uFF1A</p></blockquote><ol><li><p>\u9996\u5148\uFF0C<code>z-index</code>\u5C5E\u6027\u503C\u5E76\u4E0D\u662F\u5728\u4EFB\u4F55\u5143\u7D20\u4E0A\u90FD\u6709\u6548\u679C\u3002\u5B83<strong>\u4EC5\u5728\u5B9A\u4F4D\u5143\u7D20\uFF08\u5B9A\u4E49\u4E86<code>position</code>\u5C5E\u6027\uFF0C\u4E14\u5C5E\u6027\u503C\u4E3A\u975E<code>static</code>\u503C\u7684\u5143\u7D20\uFF09\u4E0A\u6709\u6548\u679C</strong>\u3002</p></li><li><p>\u5224\u65AD\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u7684\u5806\u53E0\u987A\u5E8F\uFF0C\u4E0D\u4EC5\u4EC5\u662F\u76F4\u63A5\u6BD4\u8F83\u4E24\u4E2A\u5143\u7D20\u7684<code>z-index</code>\u503C\u7684\u5927\u5C0F\uFF0C\u8FD9\u4E2A\u5806\u53E0\u987A\u5E8F\u5B9E\u9645\u7531\u5143\u7D20\u7684<strong>\u5C42\u53E0\u4E0A\u4E0B\u6587</strong>\u3001<strong>\u5C42\u53E0\u7B49\u7EA7</strong>\u5171\u540C\u51B3\u5B9A\u3002</p></li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220404110849700.png" alt="image-20220404110849700" loading="lazy"></p><h2 id="_2-\u4EC0\u4E48\u662F-\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662F-\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662F\u201C\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D</h2><p>\u5C42\u53E0\u4E0A\u4E0B\u6587(stacking context)\uFF0C\u662FHTML\u4E2D\u4E00\u4E2A\u4E09\u7EF4\u7684\u6982\u5FF5\u3002\u5728CSS2.1\u89C4\u8303\u4E2D\uFF0C\u6BCF\u4E2A\u76D2\u6A21\u578B\u7684\u4F4D\u7F6E\u662F\u4E09\u7EF4\u7684\uFF0C\u5206\u522B\u662F\u5E73\u9762\u753B\u5E03\u4E0A\u7684<code>X\u8F74</code>\uFF0C<code>Y\u8F74</code>\u4EE5\u53CA\u8868\u793A\u5C42\u53E0\u7684<code>Z\u8F74</code>\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5143\u7D20\u5728\u9875\u9762\u4E0A\u6CBF<code>X\u8F74Y\u8F74</code>\u5E73\u94FA\uFF0C\u6211\u4EEC\u5BDF\u89C9\u4E0D\u5230\u5B83\u4EEC\u5728<code>Z\u8F74</code>\u4E0A\u7684\u5C42\u53E0\u5173\u7CFB\u3002\u800C\u4E00\u65E6\u5143\u7D20\u53D1\u751F\u5806\u53E0\uFF0C\u8FD9\u65F6\u5C31\u80FD\u53D1\u73B0\u67D0\u4E2A\u5143\u7D20\u53EF\u80FD\u8986\u76D6\u4E86\u53E6\u4E00\u4E2A\u5143\u7D20\u6216\u8005\u88AB\u53E6\u4E00\u4E2A\u5143\u7D20\u8986\u76D6\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u542B\u6709\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C(\u4E5F\u5C31\u662F\u8BF4\u5B83\u662F\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20)\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u4E3A\u8FD9\u4E2A\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u5C31\u201C\u9AD8\u4EBA\u4E00\u7B49\u201D\uFF0C\u6700\u7EC8\u8868\u73B0\u5C31\u662F\u5B83\u79BB\u5C4F\u5E55\u89C2\u5BDF\u8005\u66F4\u8FD1\u3002</p><blockquote><p><strong>\u5177\u8C61\u7684\u6BD4\u55BB</strong>\uFF1A\u4F60\u53EF\u4EE5\u628A\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u7406\u89E3\u4E3A\u7406\u89E3\u4E3A<strong>\u8BE5\u5143\u7D20\u5F53\u4E86\u5B98</strong>\uFF0C\u800C\u5176\u4ED6\u975E\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u5219\u53EF\u4EE5\u7406\u89E3\u4E3A\u666E\u901A\u7FA4\u4F17\u3002\u51E1\u662F\u201C\u5F53\u4E86\u5B98\u7684\u5143\u7D20\u201D\u5C31\u6BD4\u666E\u901A\u5143\u7D20\u7B49\u7EA7\u8981\u9AD8\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u66F4\u9760\u4E0A\uFF0C\u66F4\u9760\u8FD1\u89C2\u5BDF\u8005\u3002</p></blockquote><h2 id="_3-\u4EC0\u4E48\u662F-\u5C42\u53E0\u7B49\u7EA7" tabindex="-1"><a class="header-anchor" href="#_3-\u4EC0\u4E48\u662F-\u5C42\u53E0\u7B49\u7EA7" aria-hidden="true">#</a> 3.\u4EC0\u4E48\u662F\u201C\u5C42\u53E0\u7B49\u7EA7\u201D</h2><p>\u90A3\u4E48\uFF0C\u5C42\u53E0\u7B49\u7EA7\u6307\u7684\u53C8\u662F\u4EC0\u4E48\uFF1F\u5C42\u53E0\u7B49\u7EA7(stacking level\uFF0C\u53EB\u201C\u5C42\u53E0\u7EA7\u522B\u201D/\u201C\u5C42\u53E0\u6C34\u5E73\u201D\u4E5F\u884C)</p><ul><li>\u5728\u540C\u4E00\u4E2A\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\uFF0C\u5B83\u63CF\u8FF0\u5B9A\u4E49\u7684\u662F\u8BE5\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u7684\u4E0A\u4E0B\u987A\u5E8F\u3002</li><li>\u5728\u5176\u4ED6\u666E\u901A\u5143\u7D20\u4E2D\uFF0C\u5B83\u63CF\u8FF0\u5B9A\u4E49\u7684\u662F\u8FD9\u4E9B\u666E\u901A\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u7684\u4E0A\u4E0B\u987A\u5E8F\u3002</li></ul><p>\u8BF4\u5230\u8FD9\uFF0C\u53EF\u80FD\u5F88\u591A\u4EBA\u7591\u95EE\u4E86\uFF0C\u4E0D\u8BBA\u5728\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u8FD8\u662F\u5728\u666E\u901A\u5143\u7D20\u4E2D\uFF0C\u5C42\u53E0\u7B49\u7EA7\u90FD\u8868\u793A\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u7684\u4E0A\u4E0B\u987A\u5E8F\uFF0C\u90A3\u5C31\u76F4\u63A5\u8BF4\u5B83\u63CF\u8FF0\u5B9A\u4E49\u4E86\u6240\u6709\u5143\u7D20\u5728<code>Z\u8F74</code>\u4E0A\u7684\u4E0A\u4E0B\u987A\u5E8F\u5C31OK\u554A\uFF01\u4E3A\u4EC0\u4E48\u8981\u5206\u5F00\u63CF\u8FF0\uFF1F</p><p>\u4E3A\u4E86\u8BF4\u660E\u539F\u56E0\uFF0C\u5148\u4E3E\u4E2A\u6817\u5B50\uFF1A</p><blockquote><p><strong>\u5177\u8C61\u7684\u6BD4\u55BB</strong>\uFF1A\u6211\u4EEC\u4E4B\u524D\u8BF4\u5230\uFF0C\u5904\u4E8E\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u7684\u5143\u7D20\uFF0C\u5C31\u50CF\u662F\u5143\u7D20\u5F53\u4E86\u5B98\uFF0C\u7B49\u7EA7\u81EA\u7136\u6BD4\u666E\u901A\u5143\u7D20\u9AD8\u3002\u518D\u60F3\u8C61\u4E00\u4E0B\uFF0C\u5047\u8BBE\u4E00\u4E2A\u5B98\u5458A\u662F\u4E2A\u7701\u7EA7\u9886\u5BFC\uFF0C\u4ED6\u4E0B\u5C5E\u6709\u4E00\u4E2A\u79D8\u4E66a-1\uFF0C\u5BB6\u91CC\u6709\u4E00\u4E2A\u4FDD\u59C6a-2\u3002\u53E6\u4E00\u4E2A\u5B98\u5458B\u662F\u4E00\u4E2A\u53BF\u7EA7\u9886\u5BFC\uFF0C\u4ED6\u4E0B\u5C5E\u6709\u4E00\u4E2A\u79D8\u4E66b-1\uFF0C\u5BB6\u91CC\u6709\u4E00\u4E2A\u4FDD\u59C6b-2\u3002a-1\u548Cb-1\u867D\u7136\u90FD\u662F\u79D8\u4E66\uFF0C\u4F46\u662F\u4F60\u60F3\u4E00\u4E2A\u7701\u7EA7\u9886\u5BFC\u7684\u79D8\u4E66\u548C\u4E00\u4E2A\u53BF\u7EA7\u9886\u5BFC\u7684\u79D8\u4E66\u4E4B\u95F4\u6709\u53EF\u6BD4\u6027\u4E48\uFF1F\u751A\u81F3\u4FDD\u59C6a-2\u90FD\u8981\u6BD4\u79D8\u4E66b-1\u7684\u7B49\u7EA7\u9AD8\u5F97\u591A\u3002\u8C01\u5927\u8C01\u5C0F\uFF0C\u8C01\u9AD8\u8C01\u4F4E\u4E00\u76EE\u4E86\u7136\uFF0C\u6240\u4EE5\u6839\u672C\u6CA1\u6709\u6BD4\u8F83\u7684\u610F\u4E49\u3002\u53EA\u6709\u5728A\u4E0B\u5C5E\u7684a-1\u3001a-2\u4EE5\u53CAB\u4E0B\u5C5E\u7684b-1\u3001b-2\u4E2D\u76F8\u4E92\u6BD4\u8F83\u5927\u5C0F\u9AD8\u4F4E\u624D\u6709\u610F\u4E49\u3002</p></blockquote><p><strong>\u518D\u7C7B\u6BD4\u56DE\u201C\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D\u548C\u201C\u5C42\u53E0\u7B49\u7EA7\u201D\uFF0C\u5C31\u5F97\u51FA\u4E00\u4E2A\u7ED3\u8BBA\uFF1A</strong></p><ol><li>\u666E\u901A\u5143\u7D20\u7684\u5C42\u53E0\u7B49\u7EA7\u4F18\u5148\u7531\u5176\u6240\u5728\u7684\u5C42\u53E0\u4E0A\u4E0B\u6587\u51B3\u5B9A\u3002</li><li>\u5C42\u53E0\u7B49\u7EA7\u7684\u6BD4\u8F83\u53EA\u6709\u5728\u5F53\u524D\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u4E2D\u624D\u6709\u610F\u4E49\u3002\u4E0D\u540C\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E2D\u6BD4\u8F83\u5C42\u53E0\u7B49\u7EA7\u662F\u6CA1\u6709\u610F\u4E49\u7684\u3002</li></ol><h2 id="_4-\u5982\u4F55\u4EA7\u751F-\u5C42\u53E0\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#_4-\u5982\u4F55\u4EA7\u751F-\u5C42\u53E0\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> 4. \u5982\u4F55\u4EA7\u751F\u201C\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D</h2><p>\u524D\u9762\u8BF4\u4E86\u90A3\u4E48\u591A\uFF0C\u77E5\u9053\u4E86\u201C\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D\u548C\u201C\u5C42\u53E0\u7B49\u7EA7\u201D\uFF0C\u5176\u4E2D\u8FD8\u6709\u4E00\u4E2A\u6700\u5173\u952E\u7684\u95EE\u9898\uFF1A\u5230\u5E95\u5982\u4F55\u4EA7\u751F\u5C42\u53E0\u4E0A\u4E0B\u6587\u5462\uFF1F\u5982\u4F55\u8BA9\u4E00\u4E2A\u5143\u7D20\u53D8\u6210\u5C42\u53E0\u4E0A\u4E0B\u6587\u5143\u7D20\u5462\uFF1F</p><p>\u5176\u5B9E\uFF0C\u5C42\u53E0\u4E0A\u4E0B\u6587\u4E5F\u57FA\u672C\u4E0A\u662F\u6709\u4E00\u4E9B\u7279\u5B9A\u7684CSS\u5C5E\u6027\u521B\u5EFA\u7684\uFF0C\u4E00\u822C\u67093\u79CD\u65B9\u6CD5\uFF1A</p><ol><li><code>HTML</code>\u4E2D\u7684\u6839\u5143\u7D20<code>&lt;html&gt;&lt;/html&gt;</code>\u672C\u8EABj\u5C31\u5177\u6709\u5C42\u53E0\u4E0A\u4E0B\u6587\uFF0C\u79F0\u4E3A\u201C\u6839\u5C42\u53E0\u4E0A\u4E0B\u6587\u201D\u3002</li><li>\u666E\u901A\u5143\u7D20\u8BBE\u7F6E<code>position</code>\u5C5E\u6027\u4E3A<strong>\u975E</strong><code>static</code>\u503C\u5E76\u8BBE\u7F6E<code>z-index</code>\u5C5E\u6027\u4E3A\u5177\u4F53\u6570\u503C\uFF0C\u4EA7\u751F\u5C42\u53E0\u4E0A\u4E0B\u6587\u3002</li><li>CSS3\u4E2D\u7684\u65B0\u5C5E\u6027\u4E5F\u53EF\u4EE5\u4EA7\u751F\u5C42\u53E0\u4E0A\u4E0B\u6587\u3002</li></ol><p>\u81F3\u6B64\uFF0C\u7EC8\u4E8E\u53EF\u4EE5\u4E0A\u4EE3\u7801\u4E86\uFF0C\u6211\u4EEC\u7528\u4EE3\u7801\u8BF4\u8BDD\uFF0C\u6765\u9A8C\u8BC1\u4E0A\u9762\u7684\u7ED3\u8BBA\uFF1A</p><p><strong>\u6817\u5B501:</strong> <strong>\u6709\u4E24\u4E2Adiv\uFF0Cp.a\u3001p.b\u88AB\u5305\u88F9\u5728\u4E00\u4E2Adiv\u91CC\uFF0Cp.c\u88AB\u5305\u88F9\u5728\u53E6\u4E00\u4E2A\u76D2\u5B50\u91CC\uFF0C\u53EA\u4E3A.a\u3001.b\u3001.c\u8BBE\u7F6E<code>position</code>\u548C<code>z-index</code>\u5C5E\u6027</strong></p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
  <span class="token selector">div</span> <span class="token punctuation">{</span>  
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>  
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token selector">p</span> <span class="token punctuation">{</span>  
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>  
    <span class="token property">font-size</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>  
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
    <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token selector">.a</span> <span class="token punctuation">{</span>  
    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token selector">.b</span> <span class="token punctuation">{</span>  
    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>  
    <span class="token property">top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>  
    <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
  <span class="token selector">.c</span> <span class="token punctuation">{</span>  
    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
    <span class="token property">z-index</span><span class="token punctuation">:</span> 3<span class="token punctuation">;</span>  
    <span class="token property">top</span><span class="token punctuation">:</span> -20px<span class="token punctuation">;</span>  
    <span class="token property">left</span><span class="token punctuation">:</span> 40px<span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>a<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>b<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>b<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span> 

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>c<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","css-lamination.html.vue"]]);export{r as default};
