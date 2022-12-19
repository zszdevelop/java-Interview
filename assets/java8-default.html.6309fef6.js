import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as p,a as n,b as e,d as c,r as o}from"./app.6a1f7fa8.js";const l={},i=c(`<h1 id="java-8-\u9ED8\u8BA4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#java-8-\u9ED8\u8BA4\u65B9\u6CD5" aria-hidden="true">#</a> Java 8 - \u9ED8\u8BA4\u65B9\u6CD5</h1><blockquote><p>\u7406\u89E3Java 8 \u9ED8\u8BA4\u65B9\u6CD5\u9700\u7406\u89E3\u51E0\u4E2A\u95EE\u9898:</p><ul><li><p>\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\u9ED8\u8BA4\u65B9\u6CD5?</p></li><li><p>\u63A5\u53E3\u4E2D\u51FA\u73B0\u9ED8\u8BA4\u65B9\u6CD5\uFF0C\u4E14\u7C7B\u53EF\u4EE5\u5B9E\u73B0\u591A\u63A5\u53E3\u7684\uFF0C\u90A3\u548C\u62BD\u8C61\u7C7B\u6709\u5565\u533A\u522B?</p></li><li><p>\u591A\u91CD\u5B9E\u73B0\u7684\u9ED8\u8BA4\u65B9\u6CD5\u51B2\u7A81\u600E\u4E48\u529E?</p></li></ul></blockquote><h2 id="_1-\u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5-\u4E3A\u4EC0\u4E48\u8981\u6709\u9ED8\u8BA4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5-\u4E3A\u4EC0\u4E48\u8981\u6709\u9ED8\u8BA4\u65B9\u6CD5" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5\uFF0C\u4E3A\u4EC0\u4E48\u8981\u6709\u9ED8\u8BA4\u65B9\u6CD5</h2><h3 id="_1-1-\u5148\u4E0A\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5148\u4E0A\u4F8B\u5B50" aria-hidden="true">#</a> 1.1 \u5148\u4E0A\u4F8B\u5B50</h3><p>\u4E00\u4E2A\u63A5\u53E3A\uFF0CClazz\u7C7B\u5B9E\u73B0\u4E86\u63A5\u53E3A\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Calling A.foo()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Clazz</span> <span class="token keyword">implements</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>
       <span class="token class-name">Clazz</span> clazz <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Clazz</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       clazz<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8C03\u7528A.foo()</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE3\u7801\u662F\u53EF\u4EE5\u7F16\u8BD1\u7684\uFF0C\u5373\u4F7FClazz\u7C7B\u5E76\u6CA1\u6709\u5B9E\u73B0foo()\u65B9\u6CD5\u3002\u5728\u63A5\u53E3A\u4E2D\u63D0\u4F9B\u4E86foo()\u65B9\u6CD5\u7684\u9ED8\u8BA4\u5B9E\u73B0\u3002</p><h3 id="_1-2-\u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5" aria-hidden="true">#</a> 1.2 \u4EC0\u4E48\u662F\u9ED8\u8BA4\u65B9\u6CD5</h3><p>\u7B80\u5355\u8BF4\uFF0C\u5C31\u662F\u63A5\u53E3\u53EF\u4EE5\u6709\u5B9E\u73B0\u65B9\u6CD5\uFF0C\u800C\u4E14\u4E0D\u9700\u8981\u5B9E\u73B0\u7C7B\u53BB\u5B9E\u73B0\u5176\u65B9\u6CD5\u3002\u53EA\u9700\u5728\u65B9\u6CD5\u540D\u524D\u9762\u52A0\u4E2Adefault\u5173\u952E\u5B57\u5373\u53EF\u3002</p><h3 id="_1-3-\u4E3A\u4EC0\u4E48\u51FA\u73B0\u9ED8\u8BA4\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4E3A\u4EC0\u4E48\u51FA\u73B0\u9ED8\u8BA4\u65B9\u6CD5" aria-hidden="true">#</a> 1.3 \u4E3A\u4EC0\u4E48\u51FA\u73B0\u9ED8\u8BA4\u65B9\u6CD5</h3><p>\u4E3A\u4EC0\u4E48\u8981\u6709\u8FD9\u4E2A\u7279\u6027? \u9996\u5148\uFF0C\u4E4B\u524D\u7684\u63A5\u53E3\u662F\u4E2A\u53CC\u5203\u5251\uFF0C\u597D\u5904\u662F\u9762\u5411\u62BD\u8C61\u800C\u4E0D\u662F\u9762\u5411\u5177\u4F53\u7F16\u7A0B\uFF0C\u7F3A\u9677\u662F\uFF0C\u5F53\u9700\u8981\u4FEE\u6539\u63A5\u53E3\u65F6\u5019\uFF0C\u9700\u8981\u4FEE\u6539\u5168\u90E8\u5B9E\u73B0\u8BE5\u63A5\u53E3\u7684\u7C7B\uFF0C\u76EE\u524D\u7684java 8\u4E4B\u524D\u7684\u96C6\u5408\u6846\u67B6\u6CA1\u6709foreach\u65B9\u6CD5\uFF0C\u901A\u5E38\u80FD\u60F3\u5230\u7684\u89E3\u51B3\u529E\u6CD5\u662F\u5728JDK\u91CC\u7ED9\u76F8\u5173\u7684\u63A5\u53E3\u6DFB\u52A0\u65B0\u7684\u65B9\u6CD5\u53CA\u5B9E\u73B0\u3002\u7136\u800C\uFF0C\u5BF9\u4E8E\u5DF2\u7ECF\u53D1\u5E03\u7684\u7248\u672C\uFF0C\u662F\u6CA1\u6CD5\u5728\u7ED9\u63A5\u53E3\u6DFB\u52A0\u65B0\u65B9\u6CD5\u7684\u540C\u65F6\u4E0D\u5F71\u54CD\u5DF2\u6709\u7684\u5B9E\u73B0\u3002\u6240\u4EE5\u5F15\u8FDB\u7684\u9ED8\u8BA4\u65B9\u6CD5\u3002\u4ED6\u4EEC\u7684\u76EE\u7684\u662F\u4E3A\u4E86\u89E3\u51B3\u63A5\u53E3\u7684\u4FEE\u6539\u4E0E\u73B0\u6709\u7684\u5B9E\u73B0\u4E0D\u517C\u5BB9\u7684\u95EE\u9898\u3002</p><h2 id="_2-java-8\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3\u5BF9\u6BD4" tabindex="-1"><a class="header-anchor" href="#_2-java-8\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3\u5BF9\u6BD4" aria-hidden="true">#</a> 2. java 8\u62BD\u8C61\u7C7B\u4E0E\u63A5\u53E3\u5BF9\u6BD4</h2><p>\u8FD9\u4E00\u4E2A\u529F\u80FD\u7279\u6027\u51FA\u6765\u540E\uFF0C\u5F88\u591A\u540C\u5B66\u90FD\u53CD\u5E94\u4E86\uFF0Cjava 8\u7684\u63A5\u53E3\u90FD\u6709\u5B9E\u73B0\u65B9\u6CD5\u4E86\uFF0C\u8DDF\u62BD\u8C61\u7C7B\u8FD8\u6709\u4EC0\u4E48\u533A\u522B? \u5176\u5B9E\u8FD8\u662F\u6709\u7684\uFF0C\u8BF7\u770B\u4E0B\u8868\u5BF9\u6BD4\u3002\u3002</p><table><thead><tr><th>\u76F8\u540C\u70B9</th><th>\u4E0D\u540C\u70B9</th></tr></thead><tbody><tr><td>\u90FD\u662F\u62BD\u8C61\u7C7B\u578B</td><td>\u62BD\u8C61\u7C7B\u4E0D\u53EF\u4EE5\u591A\u91CD\u7EE7\u627F\uFF0C\u63A5\u53E3\u53EF\u4EE5(\u65E0\u8BBA\u662F\u591A\u91CD\u7C7B\u578B\u7EE7\u627F\u8FD8\u662F\u591A\u91CD\u884C\u4E3A\u7EE7\u627F)</td></tr><tr><td>\u90FD\u53EF\u4EE5\u6709\u5B9E\u73B0\u65B9\u6CD5(\u4EE5\u524D\u63A5\u53E3\u4E0D\u884C)</td><td>\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3\u6240\u53CD\u6620\u51FA\u7684\u8BBE\u8BA1\u7406\u5FF5\u4E0D\u540C\u3002\u5176\u5B9E\u62BD\u8C61\u7C7B\u8868\u793A\u7684\u662F\u201Dis-a\u201D\u5173\u7CFB\uFF0C\u63A5\u53E3\u8868\u793A\u7684\u662F\u201Dlike-a\u201D\u5173\u7CFB</td></tr><tr><td>\u90FD\u53EF\u4EE5\u4E0D\u9700\u8981\u5B9E\u73B0\u7C7B\u6216\u8005\u7EE7\u627F\u8005\u53BB\u5B9E\u73B0\u6240\u6709\u65B9\u6CD5\uFF0C(\u4EE5\u524D\u4E0D\u884C\uFF0C\u73B0\u5728\u63A5\u53E3\u4E2D\u9ED8\u8BA4\u65B9\u6CD5\u4E0D\u9700\u8981\u5B9E\u73B0\u8005\u5B9E\u73B0)</td><td>\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u9ED8\u8BA4\u662Fpublic static final \u578B\uFF0C\u4E14\u5FC5\u987B\u7ED9\u5176\u521D\u503C\uFF0C\u6240\u4EE5\u5B9E\u73B0\u7C7B\u4E2D\u4E0D\u80FD\u6539\u53D8\u5176\u503C\uFF1B\u62BD\u8C61\u7C7B\u4E2D\u7684\u53D8\u91CF\u9ED8\u8BA4\u662F friendly \u578B\uFF0C\u5176\u503C\u53EF\u4EE5\u5728\u5B50\u7C7B\u4E2D\u91CD\u65B0\u5B9A\u4E49\uFF0C\u4E5F\u53EF\u4EE5\u91CD\u65B0\u8D4B\u503C\u3002</td></tr></tbody></table><h2 id="_3-\u591A\u91CD\u7EE7\u627F\u7684\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#_3-\u591A\u91CD\u7EE7\u627F\u7684\u51B2\u7A81" aria-hidden="true">#</a> 3. \u591A\u91CD\u7EE7\u627F\u7684\u51B2\u7A81</h2><p>\u7531\u4E8E\u540C\u4E00\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u4ECE\u4E0D\u540C\u63A5\u53E3\u5F15\u5165\uFF0C\u81EA\u7136\u800C\u7136\u7684\u4F1A\u6709\u51B2\u7A81\u7684\u73B0\u8C61\uFF0C\u9ED8\u8BA4\u65B9\u6CD5\u5224\u65AD\u51B2\u7A81\u7684\u89C4\u5219\u5982\u4E0B:</p><p>1.\u4E00\u4E2A\u58F0\u660E\u5728\u7C7B\u91CC\u9762\u7684\u65B9\u6CD5\u4F18\u5148\u4E8E\u4EFB\u4F55\u9ED8\u8BA4\u65B9\u6CD5(classes always win)</p><p>2.\u5426\u5219\uFF0C\u5219\u4F1A\u4F18\u5148\u9009\u53D6\u8DEF\u5F84\u6700\u77ED\u7684\u3002</p><h3 id="_3-1-\u4E3E\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E3E\u4F8B\u5B50" aria-hidden="true">#</a> 3.1 \u4E3E\u4F8B\u5B50</h3><ul><li>Case 1</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62A5\u9519 Duplicate default methods named aa with the parameters () and () are inherited from the types DocApplication.B and DocApplication.A</p><p>\u5982\u679C\u4E00\u5B9A\u8981\u8FD9\u4E48\u5199\u5462\uFF0C\u540C\u65F6\u5B9E\u73B0A,B\u5E76\u4E14\u4F7F\u7528A\u4E2Daa? \u53EF\u4EE5\u8FD9\u4E48\u5199:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Case 2</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;C&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">,</span><span class="token class-name">C</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA C&#39;s aa</p><ul><li>Case 3</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;C&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">C</span><span class="token punctuation">{</span>
	
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA C&#39;s aa</p><blockquote><p>\u901A\u8FC7Case1-3\u53EF\u4EE5\u77E5\u9053\u5B83\u662F\u627E\u552F\u4E00\u7684\u6700\u77ED\u8DEF\u5F84\u7684default\uFF0C\u5982\u679C\u662F\u591A\u4E2A\u90A3\u4E48\u62A5\u9519\u3002</p></blockquote><ul><li>Case 4 \u5982\u679C\u60F3\u8C03\u7528A\u7684\u9ED8\u8BA4\u51FD\u6570\uFF0C\u5219\u7528\u5230\u65B0\u8BED\u6CD5X.super.m(\u2026),\u4E0B\u9762\u4FEE\u6539C\u7C7B\uFF0C\u5B9E\u73B0A\u63A5\u53E3\uFF0C\u91CD\u5199\u4E00\u4E2Ahello\u65B9\u6CD5\uFF0C\u5982\u4E0B\u6240\u793A:</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">X</span> <span class="token keyword">implements</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">A</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA: A&#39;s aa</p><ul><li>Case 5</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;C&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">D</span> <span class="token keyword">implements</span> <span class="token class-name">C</span><span class="token punctuation">{</span>
	<span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">C</span><span class="token punctuation">.</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA C&#39;s aa \u53EF\u89C1C.super\u8868\u793A\u7684\u662FC\u63A5\u53E3\uFF0C\u540C\u65F6D\u65E0\u6CD5\u8BBF\u95EEA,B\u7684aa</p><blockquote><p>\u901A\u8FC7Case 5\u4E5F\u53EF\u4EE5\u770B\u51FA\uFF0CC\u867D\u7136\u6709\u540C\u4E00\u4E2A\u4E24\u4E2A\u6700\u77ED\u8DEF\u5F84\u7684aa, \u4F46\u662F\u5B83\u81EA\u5DF1\u6709\u4E00\u4E2A\u66F4\u9AD8\u4F18\u5148\u7EA7\u7684aa\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u62A5\u9519; case 6 \u4F1A\u62A5\u9519</p></blockquote><ul><li>Case 6</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;A&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
	<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">aa</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B&#39;s aa&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">C</span> <span class="token keyword">extends</span> <span class="token class-name">A</span><span class="token punctuation">,</span><span class="token class-name">B</span><span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u62A5\u9519</p><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><p>\u9ED8\u8BA4\u65B9\u6CD5\u7ED9\u4E88\u6211\u4EEC\u4FEE\u6539\u63A5\u53E3\u800C\u4E0D\u7834\u574F\u539F\u6765\u7684\u5B9E\u73B0\u7C7B\u7684\u7ED3\u6784\u63D0\u4F9B\u4E86\u4FBF\u5229\uFF0C\u76EE\u524Djava 8\u7684\u96C6\u5408\u6846\u67B6\u5DF2\u7ECF\u5927\u91CF\u4F7F\u7528\u4E86\u9ED8\u8BA4\u65B9\u6CD5\u6765\u6539\u8FDB\u4E86\uFF0C\u5F53\u6211\u4EEC\u6700\u7EC8\u5F00\u59CB\u4F7F\u7528Java 8\u7684lambdas\u8868\u8FBE\u5F0F\u65F6\uFF0C\u63D0\u4F9B\u7ED9\u6211\u4EEC\u4E00\u4E2A\u5E73\u6ED1\u7684\u8FC7\u6E21\u4F53\u9A8C\u3002\u4E5F\u8BB8\u5C06\u6765\u6211\u4EEC\u4F1A\u5728API\u8BBE\u8BA1\u4E2D\u770B\u5230\u66F4\u591A\u7684\u9ED8\u8BA4\u65B9\u6CD5\u7684\u5E94\u7528\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,44),u={href:"https://pdai.tech/md/java/java8/java8-default.html",target:"_blank",rel:"noopener noreferrer"},k=n("strong",null,"Java 8 - \u9ED8\u8BA4\u65B9\u6CD5",-1);function d(r,v){const s=o("ExternalLinkIcon");return t(),p("div",null,[i,n("p",null,[n("a",u,[k,e(s)])])])}const y=a(l,[["render",d],["__file","java8-default.html.vue"]]);export{y as default};
