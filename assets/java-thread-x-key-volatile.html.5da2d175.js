import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,d as p,e as c,r as l}from"./app.6a1f7fa8.js";const i={},d=p(`<h1 id="\u5173\u952E\u5B57-volatile" tabindex="-1"><a class="header-anchor" href="#\u5173\u952E\u5B57-volatile" aria-hidden="true">#</a> \u5173\u952E\u5B57: volatile</h1><blockquote><p>Java\u8BED\u8A00\u4E3A\u4E86\u89E3\u51B3\u5E76\u53D1\u7F16\u7A0B\u4E2D\u5B58\u5728\u7684\u539F\u5B50\u6027\u3001\u53EF\u89C1\u6027\u548C\u6709\u5E8F\u6027\u95EE\u9898\uFF0C\u63D0\u4F9B\u4E86\u4E00\u7CFB\u5217\u548C\u5E76\u53D1\u5904\u7406\u76F8\u5173\u7684\u5173\u952E\u5B57\uFF0C\u6BD4\u5982<code>synchronized</code>\u3001<code>volatile</code>\u3001<code>final</code>\u3001<code>concurren\u5305</code>\u7B49</p></blockquote><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><code>volatile</code>\u901A\u5E38\u88AB\u6BD4\u55BB\u6210&quot;\u8F7B\u91CF\u7EA7\u7684<code>synchronized</code>&quot;\uFF0C\u4E5F\u662FJava\u5E76\u53D1\u7F16\u7A0B\u4E2D\u6BD4\u8F83\u91CD\u8981\u7684\u4E00\u4E2A\u5173\u952E\u5B57\u3002\u548C<code>synchronized</code>\u4E0D\u540C\uFF0C<code>volatile</code>\u662F\u4E00\u4E2A\u53D8\u91CF\u4FEE\u9970\u7B26\uFF0C\u53EA\u80FD\u7528\u6765\u4FEE\u9970\u53D8\u91CF\u3002\u65E0\u6CD5\u4FEE\u9970\u65B9\u6CD5\u53CA\u4EE3\u7801\u5757\u7B49\u3002</p><blockquote><p><code>synchronized</code>\u53EF\u4EE5\u4FDD\u8BC1\u539F\u5B50\u6027\u3001\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027\u3002\u800C<code>volatile</code>\u5374\u53EA\u80FD\u4FDD\u8BC1\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027</p></blockquote><h3 id="_1-1-\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4F5C\u7528" aria-hidden="true">#</a> 1.1 \u4F5C\u7528</h3><ol><li><p>\u4FDD\u8BC1\u4E86\u4E0D\u540C\u7EBF\u7A0B\u5BF9\u8FD9\u4E2A\u53D8\u91CF\u8FDB\u884C\u64CD\u4F5C\u65F6\u7684\u53EF\u89C1\u6027\uFF0C\u5373\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u67D0\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u8FD9\u65B0\u503C\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u6765\u8BF4\u662F\u7ACB\u5373\u53EF\u89C1\u7684\u3002\uFF08<strong>\u4FDD\u8BC1\u53EF\u89C1\u6027</strong>\uFF09</p></li><li><p>\u7981\u6B62\u8FDB\u884C\u6307\u4EE4\u91CD\u6392\u5E8F\u3002\uFF08<strong>\u4FDD\u8BC1\u6709\u5E8F\u6027</strong>\uFF09</p></li></ol><h2 id="_2-\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7528\u6CD5" aria-hidden="true">#</a> 2. \u7528\u6CD5</h2><p><code>volatile</code>\u7684\u7528\u6CD5\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9700\u8981\u5728\u58F0\u660E\u4E00\u4E2A<strong>\u53EF\u80FD\u88AB\u591A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\u7684\u53D8\u91CF\u65F6\uFF0C\u4F7F\u7528<code>volatile</code>\u4FEE\u9970</strong>\u5C31\u53EF\u4EE5\u4E86\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>  
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>  
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token punctuation">}</span>  
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
    <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5355\u4F8B\u6A21\u5F0F\u7684\u5B9E\u4F8B\uFF0C\u53EF\u80FD\u5728\u591A\u7EBF\u7A0B\u4E2D\u88AB\u5B50\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE</p></blockquote><p>\u5982\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u662F\u4E00\u4E2A\u6BD4\u8F83\u5178\u578B\u7684\u4F7F\u7528\u53CC\u91CD\u9501\u6821\u9A8C\u7684\u5F62\u5F0F\u5B9E\u73B0\u5355\u4F8B\u7684\uFF0C<strong>\u5176\u4E2D\u4F7F\u7528<code>volatile</code>\u5173\u952E\u5B57\u4FEE\u9970\u53EF\u80FD\u88AB\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u8BBF\u95EE\u5230\u7684singleton</strong>\u3002</p><h2 id="_3-volatile\u7684\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#_3-volatile\u7684\u539F\u7406" aria-hidden="true">#</a> 3. volatile\u7684\u539F\u7406</h2><p>\u4E3A\u4E86\u63D0\u9AD8\u5904\u7406\u5668\u7684\u6267\u884C\u901F\u5EA6\uFF0C<strong>\u5728\u5904\u7406\u5668\u548C\u5185\u5B58\u4E4B\u95F4\u589E\u52A0\u4E86\u591A\u7EA7\u7F13\u5B58\u6765\u63D0\u5347</strong>\u3002\u4F46\u662F\u7531\u4E8E\u5F15\u5165\u4E86\u591A\u7EA7\u7F13\u5B58\uFF0C\u5C31<strong>\u5B58\u5728\u7F13\u5B58\u6570\u636E\u4E0D\u4E00\u81F4\u95EE\u9898</strong>\u3002</p><p>\u4F46\u662F\uFF0C\u5BF9\u4E8E<code>volatile</code>\u53D8\u91CF\uFF0C<strong>\u5F53\u5BF9<code>volatile</code>\u53D8\u91CF\u8FDB\u884C\u5199\u64CD\u4F5C\u7684\u65F6\u5019</strong>\uFF0C<strong>JVM\u4F1A\u5411\u5904\u7406\u5668\u53D1\u9001\u4E00\u6761lock\u524D\u7F00\u7684\u6307\u4EE4\uFF0C\u5C06\u8FD9\u4E2A\u7F13\u5B58\u4E2D\u7684\u53D8\u91CF\u56DE\u5199\u5230\u7CFB\u7EDF\u4E3B\u5B58\u4E2D\u3002</strong></p><p>\u4F46\u662F\u5C31\u7B97\u5199\u56DE\u5230\u5185\u5B58\uFF0C\u5982\u679C\u5176\u4ED6\u5904\u7406\u5668\u7F13\u5B58\u7684\u503C\u8FD8\u662F\u65E7\u7684\uFF0C\u518D\u6267\u884C\u8BA1\u7B97\u64CD\u4F5C\u5C31\u4F1A\u6709\u95EE\u9898\uFF0C\u6240\u4EE5\u5728\u591A\u5904\u7406\u5668\u4E0B\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u5404\u4E2A\u5904\u7406\u5668\u7684\u7F13\u5B58\u662F\u4E00\u81F4\u7684\uFF0C\u5C31\u4F1A\u5B9E\u73B0<strong>\u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE</strong></p><h3 id="_3-1-\u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE" aria-hidden="true">#</a> 3.1 \u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE</h3><p><strong>\u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE</strong>\uFF1A\u6BCF\u4E2A\u5904\u7406\u5668\u901A\u8FC7\u55C5\u63A2\u5728\u603B\u7EBF\u4E0A\u4F20\u64AD\u7684\u6570\u636E\u6765\u68C0\u67E5\u81EA\u5DF1\u7F13\u5B58\u7684\u503C\u662F\u4E0D\u662F\u8FC7\u671F\u4E86\uFF0C\u5F53\u5904\u7406\u5668\u53D1\u73B0\u81EA\u5DF1\u7F13\u5B58\u884C\u5BF9\u5E94\u7684\u5185\u5B58\u5730\u5740\u88AB\u4FEE\u6539\uFF0C\u5C31\u4F1A\u5C06\u5F53\u524D\u5904\u7406\u5668\u7684\u7F13\u5B58\u884C\u8BBE\u7F6E\u6210\u65E0\u6548\u72B6\u6001\uFF0C\u5F53\u5904\u7406\u5668\u8981\u5BF9\u8FD9\u4E2A\u6570\u636E\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\u7684\u65F6\u5019\uFF0C\u4F1A\u5F3A\u5236\u91CD\u65B0\u4ECE\u7CFB\u7EDF\u5185\u5B58\u91CC\u628A\u6570\u636E\u8BFB\u5230\u5904\u7406\u5668\u7F13\u5B58\u91CC\u3002</p><h3 id="_3-2-\u539F\u7406\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_3-2-\u539F\u7406\u603B\u7ED3" aria-hidden="true">#</a> 3.2 \u539F\u7406\u603B\u7ED3</h3><p>\u5982\u679C<strong>\u4E00\u4E2A\u53D8\u91CF\u88AB<code>volatile</code>\u6240\u4FEE\u9970\u7684\u8BDD\uFF0C\u5728\u6BCF\u6B21\u6570\u636E\u53D8\u5316\u4E4B\u540E\uFF0C\u5176\u503C\u90FD\u4F1A\u88AB\u5F3A\u5236\u5237\u5165\u4E3B\u5B58\u3002\u800C\u5176\u4ED6\u5904\u7406\u5668\u7684\u7F13\u5B58\u7531\u4E8E\u9075\u5B88\u4E86\u7F13\u5B58\u4E00\u81F4\u6027\u534F\u8BAE\uFF0C\u4E5F\u4F1A\u628A\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\u4ECE\u4E3B\u5B58\u52A0\u8F7D\u5230\u81EA\u5DF1\u7684\u7F13\u5B58\u4E2D\u3002\u8FD9\u5C31\u4FDD\u8BC1\u4E86\u4E00\u4E2A<code>volatile</code>\u5728\u5E76\u53D1\u7F16\u7A0B\u4E2D\uFF0C\u5176\u503C\u5728\u591A\u4E2A\u7F13\u5B58\u4E2D\u662F\u53EF\u89C1\u7684</strong>\u3002</p><h2 id="_4-volatile-\u4E0E\u5E76\u53D1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_4-volatile-\u4E0E\u5E76\u53D1\u95EE\u9898" aria-hidden="true">#</a> 4. volatile \u4E0E\u5E76\u53D1\u95EE\u9898</h2><h3 id="_4-1-volatile\u4E0E\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-volatile\u4E0E\u53EF\u89C1\u6027" aria-hidden="true">#</a> 4.1 volatile\u4E0E\u53EF\u89C1\u6027</h3><h4 id="_4-1-1-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u5B9A\u4E49" aria-hidden="true">#</a> 4.1.1 \u5B9A\u4E49</h4><p>\u53EF\u89C1\u6027\u662F\u6307\u5F53\u591A\u4E2A\u7EBF\u7A0B\u8BBF\u95EE\u540C\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u8FD9\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u5176\u4ED6\u7EBF\u7A0B\u80FD\u591F\u7ACB\u5373\u770B\u5F97\u5230\u4FEE\u6539\u7684\u503C\u3002</p><h4 id="_4-1-2-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u80CC\u666F" aria-hidden="true">#</a> 4.1.2 \u80CC\u666F</h4><p>Java\u5185\u5B58\u6A21\u578B\u89C4\u5B9A\u4E86<strong>\u6240\u6709\u7684\u53D8\u91CF\u90FD\u5B58\u50A8\u5728\u4E3B\u5185\u5B58</strong>\u4E2D\uFF0C<strong>\u6BCF\u6761\u7EBF\u7A0B\u8FD8\u6709\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58</strong>\uFF0C\u7EBF\u7A0B\u7684<strong>\u5DE5\u4F5C\u5185\u5B58\u4E2D\u4FDD\u5B58\u4E86\u8BE5\u7EBF\u7A0B\u4E2D\u662F\u7528\u5230\u7684\u53D8\u91CF\u7684\u4E3B\u5185\u5B58\u526F\u672C\u62F7\u8D1D</strong>\uFF0C\u7EBF\u7A0B\u5BF9\u53D8\u91CF\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u5FC5\u987B\u5728\u5DE5\u4F5C\u5185\u5B58\u4E2D\u8FDB\u884C\uFF0C\u800C\u4E0D\u80FD\u76F4\u63A5\u8BFB\u5199\u4E3B\u5185\u5B58\u3002\u4E0D\u540C\u7684\u7EBF\u7A0B\u4E4B\u95F4\u4E5F\u65E0\u6CD5\u76F4\u63A5\u8BBF\u95EE\u5BF9\u65B9\u5DE5\u4F5C\u5185\u5B58\u4E2D\u7684\u53D8\u91CF\uFF0C<strong>\u7EBF\u7A0B\u95F4\u53D8\u91CF\u7684\u4F20\u9012\u5747\u9700\u8981\u81EA\u5DF1\u7684\u5DE5\u4F5C\u5185\u5B58\u548C\u4E3B\u5B58\u4E4B\u95F4\u8FDB\u884C\u6570\u636E\u540C\u6B65\u8FDB\u884C</strong>\u3002\u6240\u4EE5\uFF0C\u5C31<strong>\u53EF\u80FD\u51FA\u73B0\u7EBF\u7A0B1\u6539\u4E86\u67D0\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u4F46\u662F\u7EBF\u7A0B2\u4E0D\u53EF\u89C1\u7684\u60C5\u51B5</strong>\u3002</p><h4 id="_4-1-3-\u7ED3\u8BBA-\u4FDD\u8BC1\u53EF\u89C1\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u7ED3\u8BBA-\u4FDD\u8BC1\u53EF\u89C1\u6027" aria-hidden="true">#</a> 4.1.3 \u7ED3\u8BBA\uFF08\u4FDD\u8BC1\u53EF\u89C1\u6027\uFF09</h4><p>\u524D\u9762\u7684\u5173\u4E8E<code>volatile</code>\u7684\u539F\u7406\u4E2D\u4ECB\u7ECD\u8FC7\u4E86\uFF0CJava\u4E2D\u7684<code>volatile</code>\u5173\u952E\u5B57\u63D0\u4F9B\u4E86\u4E00\u4E2A\u529F\u80FD\uFF0C\u90A3\u5C31\u662F<strong>\u88AB\u5176\u4FEE\u9970\u7684\u53D8\u91CF\u5728\u88AB\u4FEE\u6539\u540E\u53EF\u4EE5\u7ACB\u5373\u540C\u6B65\u5230\u4E3B\u5185\u5B58</strong>\uFF0C\u88AB\u5176\u4FEE\u9970\u7684\u53D8\u91CF\u5728\u6BCF\u6B21\u662F\u7528\u4E4B\u524D\u90FD\u4ECE\u4E3B\u5185\u5B58\u5237\u65B0\u3002\u56E0\u6B64\uFF0C\u53EF\u4EE5\u4F7F\u7528**<code>volatile</code>\u6765\u4FDD\u8BC1\u591A\u7EBF\u7A0B\u64CD\u4F5C\u65F6\u53D8\u91CF\u7684\u53EF\u89C1\u6027**\u3002</p><h3 id="_4-2-volatile\u4E0E\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_4-2-volatile\u4E0E\u6709\u5E8F\u6027" aria-hidden="true">#</a> 4.2 volatile\u4E0E\u6709\u5E8F\u6027</h3><h4 id="_4-2-1-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u5B9A\u4E49" aria-hidden="true">#</a> 4.2.1 \u5B9A\u4E49</h4><p>\u6709\u5E8F\u6027\u5373\u7A0B\u5E8F\u6267\u884C\u7684\u987A\u5E8F\u6309\u7167\u4EE3\u7801\u7684\u5148\u540E\u987A\u5E8F\u6267\u884C\u3002</p><h4 id="_4-2-2-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_4-2-2-\u80CC\u666F" aria-hidden="true">#</a> 4.2.2 \u80CC\u666F</h4><p>\u9664\u4E86\u5F15\u5165\u4E86\u65F6\u95F4\u7247\u4EE5\u5916\uFF0C\u7531\u4E8E\u5904\u7406\u5668\u4F18\u5316\u548C\u6307\u4EE4\u91CD\u6392\u7B49\uFF0CCPU\u8FD8\u53EF\u80FD\u5BF9\u8F93\u5165\u4EE3\u7801\u8FDB\u884C\u4E71\u5E8F\u6267\u884C\uFF0C\u6BD4\u5982<code>load-&gt;add-&gt;save</code> \u6709\u53EF\u80FD\u88AB\u4F18\u5316\u6210<code>load-&gt;save-&gt;add</code> \u3002\u8FD9\u5C31\u662F\u53EF\u80FD\u5B58\u5728\u6709\u5E8F\u6027\u95EE\u9898\u3002</p><h4 id="_4-2-3-\u7ED3\u8BBA-\u4FDD\u8BC1\u6709\u5E8F\u6027" tabindex="-1"><a class="header-anchor" href="#_4-2-3-\u7ED3\u8BBA-\u4FDD\u8BC1\u6709\u5E8F\u6027" aria-hidden="true">#</a> 4.2.3 \u7ED3\u8BBA\uFF08\u4FDD\u8BC1\u6709\u5E8F\u6027\uFF09</h4><p>\u800C<code>volatile</code>\u9664\u4E86\u53EF\u4EE5\u4FDD\u8BC1\u6570\u636E\u7684\u53EF\u89C1\u6027\u4E4B\u5916\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u90A3\u5C31\u662F\u4ED6\u53EF\u4EE5<strong>\u7981\u6B62\u6307\u4EE4\u91CD\u6392\u4F18\u5316</strong>\u7B49\u3002</p><p>\u666E\u901A\u7684\u53D8\u91CF\u4EC5\u4EC5\u4F1A\u4FDD\u8BC1\u5728\u8BE5\u65B9\u6CD5\u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\u6240\u4F9D\u8D56\u7684\u8D4B\u503C\u7ED3\u679C\u7684\u5730\u65B9\u90FD\u80FD\u83B7\u5F97\u6B63\u786E\u7684\u7ED3\u679C\uFF0C\u800C\u4E0D\u80FD\u4FDD\u8BC1\u53D8\u91CF\u7684\u8D4B\u503C\u64CD\u4F5C\u7684\u987A\u5E8F\u4E0E\u7A0B\u5E8F\u4EE3\u7801\u4E2D\u7684\u6267\u884C\u987A\u5E8F\u4E00\u81F4\u3002</p><p>volatile\u53EF\u4EE5\u7981\u6B62\u6307\u4EE4\u91CD\u6392\uFF0C\u8FD9\u5C31\u4FDD\u8BC1\u4E86\u4EE3\u7801\u7684\u7A0B\u5E8F\u4F1A\u4E25\u683C\u6309\u7167\u4EE3\u7801\u7684\u5148\u540E\u987A\u5E8F\u6267\u884C\u3002\u8FD9\u5C31\u4FDD\u8BC1\u4E86\u6709\u5E8F\u6027\u3002<strong>\u88AB<code>volatile</code>\u4FEE\u9970\u7684\u53D8\u91CF\u7684\u64CD\u4F5C\uFF0C\u4F1A\u4E25\u683C\u6309\u7167\u4EE3\u7801\u987A\u5E8F\u6267\u884C\uFF0C<code>load-&gt;add-&gt;save</code> \u7684\u6267\u884C\u987A\u5E8F\u5C31\u662F\uFF1Aload\u3001add\u3001save\u3002</strong></p><h3 id="_4-3-volatile\u4E0E\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-volatile\u4E0E\u539F\u5B50\u6027" aria-hidden="true">#</a> 4.3 volatile\u4E0E\u539F\u5B50\u6027</h3><h4 id="_4-3-1-\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u5B9A\u4E49" aria-hidden="true">#</a> 4.3.1 \u5B9A\u4E49</h4><p>\u539F\u5B50\u6027\u662F\u6307\u4E00\u4E2A\u64CD\u4F5C\u662F\u4E0D\u53EF\u4E2D\u65AD\u7684\uFF0C\u8981\u5168\u90E8\u6267\u884C\u5B8C\u6210\uFF0C\u8981\u4E0D\u5C31\u90FD\u4E0D\u6267\u884C\u3002</p><h4 id="_4-3-2-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u80CC\u666F" aria-hidden="true">#</a> 4.3.2 \u80CC\u666F</h4><p>\u7EBF\u7A0B\u662FCPU\u8C03\u5EA6\u7684\u57FA\u672C\u5355\u4F4D\u3002CPU\u6709\u65F6\u95F4\u7247\u7684\u6982\u5FF5\uFF0C\u4F1A\u6839\u636E\u4E0D\u540C\u7684\u8C03\u5EA6\u7B97\u6CD5\u8FDB\u884C\u7EBF\u7A0B\u8C03\u5EA6\u3002\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u83B7\u5F97\u65F6\u95F4\u7247\u4E4B\u540E\u5F00\u59CB\u6267\u884C\uFF0C\u5728\u65F6\u95F4\u7247\u8017\u5C3D\u4E4B\u540E\uFF0C\u5C31\u4F1A\u5931\u53BBCPU\u4F7F\u7528\u6743\u3002\u6240\u4EE5\u5728\u591A\u7EBF\u7A0B\u573A\u666F\u4E0B\uFF0C\u7531\u4E8E\u65F6\u95F4\u7247\u5728\u7EBF\u7A0B\u95F4\u8F6E\u6362\uFF0C\u5C31\u4F1A\u53D1\u751F\u539F\u5B50\u6027\u95EE\u9898\u3002</p><h4 id="_4-3-3-\u7ED3\u8BBA-\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027" tabindex="-1"><a class="header-anchor" href="#_4-3-3-\u7ED3\u8BBA-\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027" aria-hidden="true">#</a> 4.3.3 \u7ED3\u8BBA\uFF08\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027\uFF09</h4><p>\u6211\u4EEC\u4ECB\u7ECD<code>synchronized</code>\u7684\u65F6\u5019\uFF0C\u63D0\u5230\u8FC7\uFF0C\u4E3A\u4E86\u4FDD\u8BC1\u539F\u5B50\u6027\uFF0C\u9700\u8981\u901A\u8FC7\u5B57\u8282\u7801\u6307\u4EE4<code>monitorenter</code>\u548C<code>monitorexit</code>\uFF0C\u4F46\u662F<code>volatile</code>\u548C\u8FD9\u4E24\u4E2A\u6307\u4EE4\u4E4B\u95F4\u662F\u6CA1\u6709\u4EFB\u4F55\u5173\u7CFB\u7684\u3002</p><p><strong>\u6240\u4EE5\uFF0C<code>volatile</code>\u662F\u4E0D\u80FD\u4FDD\u8BC1\u539F\u5B50\u6027\u7684\u3002</strong></p><h2 id="_5-volatile\u7684\u539F\u7406\u548C\u5B9E\u73B0\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_5-volatile\u7684\u539F\u7406\u548C\u5B9E\u73B0\u673A\u5236" aria-hidden="true">#</a> 5. volatile\u7684\u539F\u7406\u548C\u5B9E\u73B0\u673A\u5236</h2><p>\u4E0B\u9762\u8FD9\u6BB5\u8BDD\u6458\u81EA\u300A\u6DF1\u5165\u7406\u89E3Java\u865A\u62DF\u673A\u300B\uFF1A</p><p>\u201C\u89C2\u5BDF\u52A0\u5165volatile\u5173\u952E\u5B57\u548C\u6CA1\u6709\u52A0\u5165volatile\u5173\u952E\u5B57\u65F6\u6240\u751F\u6210\u7684\u6C47\u7F16\u4EE3\u7801\u53D1\u73B0\uFF0C\u52A0\u5165volatile\u5173\u952E\u5B57\u65F6\uFF0C\u4F1A\u591A\u51FA\u4E00\u4E2Alock\u524D\u7F00\u6307\u4EE4\u201D</p><p>lock\u524D\u7F00\u6307\u4EE4\u5B9E\u9645\u4E0A\u76F8\u5F53\u4E8E\u4E00\u4E2A\u5185\u5B58\u5C4F\u969C\uFF08\u4E5F\u6210\u5185\u5B58\u6805\u680F\uFF09\uFF0C\u5185\u5B58\u5C4F\u969C\u4F1A\u63D0\u4F9B3\u4E2A\u529F\u80FD\uFF1A</p><ol><li><p>\u5B83\u786E\u4FDD\u6307\u4EE4\u91CD\u6392\u5E8F\u65F6\u4E0D\u4F1A\u628A\u5176\u540E\u9762\u7684\u6307\u4EE4\u6392\u5230\u5185\u5B58\u5C4F\u969C\u4E4B\u524D\u7684\u4F4D\u7F6E\uFF0C\u4E5F\u4E0D\u4F1A\u628A\u524D\u9762\u7684\u6307\u4EE4\u6392\u5230\u5185\u5B58\u5C4F\u969C\u7684\u540E\u9762\uFF1B\u5373\u5728\u6267\u884C\u5230\u5185\u5B58\u5C4F\u969C\u8FD9\u53E5\u6307\u4EE4\u65F6\uFF0C\u5728\u5B83\u524D\u9762\u7684\u64CD\u4F5C\u5DF2\u7ECF\u5168\u90E8\u5B8C\u6210\uFF1B</p></li><li><p>\u5B83\u4F1A\u5F3A\u5236\u5C06\u5BF9\u7F13\u5B58\u7684\u4FEE\u6539\u64CD\u4F5C\u7ACB\u5373\u5199\u5165\u4E3B\u5B58\uFF1B</p></li><li><p>\u5982\u679C\u662F\u5199\u64CD\u4F5C\uFF0C\u5B83\u4F1A\u5BFC\u81F4\u5176\u4ED6CPU\u4E2D\u5BF9\u5E94\u7684\u7F13\u5B58\u884C\u65E0\u6548\u3002</p></li></ol><h2 id="_6-volatile-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_6-volatile-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 6. volatile \u4F7F\u7528\u573A\u666F</h2><p>\u5728\u4EE5\u4E0B\u4E24\u4E2A\u573A\u666F\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>volatile</code>\u6765\u4EE3\u66FF<code>synchronized</code>\uFF1A</p><ol><li><p><strong>\u5BF9\u53D8\u91CF\u7684\u5199\u64CD\u4F5C\u4E0D\u4F9D\u8D56\u4E8E\u5F53\u524D\u503C</strong></p></li><li><p>\u53D8\u91CF\u4E0D\u9700\u8981\u4E0E\u5176\u4ED6\u72B6\u6001\u53D8\u91CF\u5171\u540C\u53C2\u4E0E\u4E0D\u53D8\u7EA6\u675F\u3002</p></li></ol><p>\u9664\u4EE5\u4E0A\u573A\u666F\u5916\uFF0C\u90FD\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u65B9\u5F0F\u6765\u4FDD\u8BC1\u539F\u5B50\u6027\uFF0C\u5982<code>synchronized</code>\u6216\u8005<code>concurrent\u5305</code>\u3002</p><h3 id="_6-1-\u573A\u666F\u5B9E\u4F8B1-\u72B6\u6001\u6807\u8BB0" tabindex="-1"><a class="header-anchor" href="#_6-1-\u573A\u666F\u5B9E\u4F8B1-\u72B6\u6001\u6807\u8BB0" aria-hidden="true">#</a> 6.1 \u573A\u666F\u5B9E\u4F8B1\uFF1A\u72B6\u6001\u6807\u8BB0</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">volatile</span> <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setFlag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">volatile</span> <span class="token keyword">boolean</span> inited <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token comment">//\u7EBF\u7A0B1:</span>
context <span class="token operator">=</span> <span class="token function">loadContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
inited <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>            
 
<span class="token comment">//\u7EBF\u7A0B2:</span>
<span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>inited <span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">doSomethingwithconfig</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-\u5355\u4F8B\u6A21\u5F0F\u53CC\u5C42\u6821\u9A8C\u9501" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5355\u4F8B\u6A21\u5F0F\u53CC\u5C42\u6821\u9A8C\u9501" aria-hidden="true">#</a> 6.2 \u5355\u4F8B\u6A21\u5F0F\u53CC\u5C42\u6821\u9A8C\u9501</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
     
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         
    <span class="token punctuation">}</span>
     
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>instance<span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span>
                    instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-volatile\u548C\u539F\u5B50\u6027\u7684\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_7-volatile\u548C\u539F\u5B50\u6027\u7684\u4F8B\u5B50" aria-hidden="true">#</a> 7. volatile\u548C\u539F\u5B50\u6027\u7684\u4F8B\u5B50</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> inc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        inc<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">1000</span><span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span>
                        test<span class="token punctuation">.</span><span class="token function">increase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">activeCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&gt;</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">//\u4FDD\u8BC1\u524D\u9762\u7684\u7EBF\u7A0B\u90FD\u6267\u884C\u5B8C</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token keyword">yield</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>test<span class="token punctuation">.</span>inc<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u6BD4\u8F83\u7B80\u5355\uFF0C\u5C31\u662F\u521B\u5EFA10\u4E2A\u7EBF\u7A0B\uFF0C\u7136\u540E\u5206\u522B\u6267\u884C1000\u6B21<code>i++</code>\u64CD\u4F5C\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B\uFF0C\u7A0B\u5E8F\u7684\u8F93\u51FA\u7ED3\u679C\u5E94\u8BE5\u662F10000\uFF0C\u4F46\u662F\uFF0C\u591A\u6B21\u6267\u884C\u7684\u7ED3\u679C\u90FD\u5C0F\u4E8E10000\u3002\u8FD9\u5176\u5B9E\u5C31\u662F<code>volatile</code>\u65E0\u6CD5\u6EE1\u8DB3\u539F\u5B50\u6027\u7684\u539F\u56E0\u3002</p><p>\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u8FD9\u79CD\u60C5\u51B5\u5462\uFF0C\u90A3\u5C31\u662F<strong>\u56E0\u4E3A\u867D\u7136volatile\u53EF\u4EE5\u4FDD\u8BC1<code>inc</code>\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u7684\u53EF\u89C1\u6027\u3002\u4F46\u662F\u65E0\u6CD5<code>inc++</code>\u7684\u539F\u5B50\u6027</strong>\u3002</p><h2 id="_8-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_8-\u603B\u7ED3" aria-hidden="true">#</a> 8. \u603B\u7ED3</h2><p><code>synchronized</code>\u53EF\u4EE5\u4FDD\u8BC1\u539F\u5B50\u6027\u3001\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027\u3002\u800C<code>volatile</code>\u5374\u53EA\u80FD\u4FDD\u8BC1\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,66),r={href:"https://juejin.cn/post/6844903656274264078",target:"_blank",rel:"noopener noreferrer"},u=c("\u6DF1\u5165\u7406\u89E3Java\u4E2D\u7684volatile\u5173\u952E\u5B57");function k(v,h){const a=l("ExternalLinkIcon");return e(),t("div",null,[d,n("p",null,[n("a",r,[u,o(a)])])])}const g=s(i,[["render",k],["__file","java-thread-x-key-volatile.html.vue"]]);export{g as default};
