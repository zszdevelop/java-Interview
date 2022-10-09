import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.b9c1d23f.js";const p={},e=t(`<h1 id="easyexcel\u81EA\u5B9A\u4E49\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#easyexcel\u81EA\u5B9A\u4E49\u5BFC\u51FA" aria-hidden="true">#</a> EasyExcel\u81EA\u5B9A\u4E49\u5BFC\u51FA</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u5728\u4F7F\u7528EasyExcel \u65F6\uFF0C\u5927\u90E8\u5206\u662F\u9700\u8981\u63D0\u524D\u5B9A\u4E49\u597D\u5BF9\u8C61\u7684\uFF0C\u6211\u4EEC\u6839\u636E\u5BF9\u8C61\u4E2D\u7684\u5B57\u6BB5\u51B3\u5B9A\u8981\u6E32\u67D3\u7684excel\u3002\u4F46\u6211\u4EEC\u67D0\u4E9B\u4E1A\u52A1\u573A\u666F\uFF0C\u9700\u8981\u6839\u636E\u6570\u636E\u5E93\u4E2D\u67E5\u5230\u7684\u5B57\u6BB5\u52A8\u6001\u6E32\u67D3excel, \u8FD9\u65F6\u5019\u6539\u600E\u4E48\u5904\u7406\u5462\uFF1F</p><h2 id="_2-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_2-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 2. \u89E3\u51B3\u65B9\u6848</h2><p>\u73B0\u5B9E\u573A\u666F\u53EF\u4EE5\u975E\u5E38\u7075\u6D3B\uFF0C\u8FD9\u91CC\u53EA\u662F\u4E3E\u4F8B</p><h3 id="_2-1-\u6B65\u9AA41-\u52A8\u6001\u6E32\u67D3\u8BF7\u6C42\u5934" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6B65\u9AA41-\u52A8\u6001\u6E32\u67D3\u8BF7\u6C42\u5934" aria-hidden="true">#</a> 2.1 \u6B65\u9AA41\uFF1A\u52A8\u6001\u6E32\u67D3\u8BF7\u6C42\u5934</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> <span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> head0 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head0<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B57\u7B26\u4E32&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> head1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u6570\u5B57&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> head2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    head2<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E5\u671F&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head0<span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>head2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6B65\u9AA42-\u52A8\u6001\u6E32\u67D3\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6B65\u9AA42-\u52A8\u6001\u6E32\u67D3\u6570\u636E" aria-hidden="true">#</a> 2.2 \u6B65\u9AA42\uFF1A\u52A8\u6001\u6E32\u67D3\u6570\u636E</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoData</span><span class="token punctuation">&gt;</span></span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoData</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoData</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DemoData</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DemoData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B57\u7B26\u4E32&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token punctuation">.</span><span class="token function">setDoubleData</span><span class="token punctuation">(</span><span class="token number">0.56</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> list<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6E32\u67D3" aria-hidden="true">#</a> 2.3 \u6E32\u67D3</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">dynamicHeadWrite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> fileName <span class="token operator">=</span> <span class="token class-name">TestFileUtil</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;dynamicHeadWrite&quot;</span> <span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;.xlsx&quot;</span><span class="token punctuation">;</span>
    <span class="token class-name">EasyExcel</span><span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
        <span class="token comment">// \u8FD9\u91CC\u653E\u5165\u52A8\u6001\u5934</span>
        <span class="token punctuation">.</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token function">head</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sheet</span><span class="token punctuation">(</span><span class="token string">&quot;\u6A21\u677F&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u5F53\u7136\u8FD9\u91CC\u6570\u636E\u4E5F\u53EF\u4EE5\u7528 List&lt;List&lt;String&gt;&gt; \u53BB\u4F20\u5165</span>
        <span class="token punctuation">.</span><span class="token function">doWrite</span><span class="token punctuation">(</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),c=[e];function o(l,i){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","easy-excel-x-custom-export.html.vue"]]);export{r as default};
