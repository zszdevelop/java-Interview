import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,d as i,e as p,r as c}from"./app.224ba93c.js";const l={},u=i(`<h1 id="conditional\u6CE8\u89E3\u6839\u636E\u6761\u4EF6\u6CE8\u5165bean\u5230\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#conditional\u6CE8\u89E3\u6839\u636E\u6761\u4EF6\u6CE8\u5165bean\u5230\u5BB9\u5668" aria-hidden="true">#</a> @Conditional\u6CE8\u89E3\u6839\u636E\u6761\u4EF6\u6CE8\u5165Bean\u5230\u5BB9\u5668</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p><code>@Conditional</code>\u662FSpring4\u65B0\u63D0\u4F9B\u7684\u6CE8\u89E3\uFF0C\u5B83\u7684\u4F5C\u7528\u662F\u6309\u7167\u4E00\u5B9A\u6761\u4EF6\u8FDB\u884C\u5224\u65AD\uFF0C\u6EE1\u8DB3\u6761\u4EF6\u5C31\u5C06bean\u6CE8\u518C\u5230\u5BB9\u5668\u3002</p><h3 id="_1-1-conditional\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_1-1-conditional\u6E90\u7801" aria-hidden="true">#</a> 1.1 @Conditional\u6E90\u7801</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Conditional</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * All <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Condition</span></span> Conditions<span class="token punctuation">}</span> that must <span class="token punctuation">{</span><span class="token keyword">@linkplain</span> <span class="token reference"><span class="token class-name">Condition</span><span class="token punctuation">#</span><span class="token field">matches</span></span> match<span class="token punctuation">}</span>
	 * in order for the component to be registered.
	 */</span>
	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Condition</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4EE3\u7801\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C\u9700\u8981\u4F20\u5165\u4E00\u4E2Aclass\u6570\u7EC4\uFF0C\u5E76\u4E14\u7EE7\u627F<code>Condition</code>\u63A5\u53E3\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>

	<span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code>Condition</code>\u662F\u4E2A\u63A5\u53E3\uFF0C\u9700\u8981\u5B9E\u73B0matches\u65B9\u6CD5\uFF0C\u8FD4\u56DEtrue\u5219\u6CE8\u5165bean\uFF0Cfalse\u5219\u4E0D\u6CE8\u5165\u3002</strong></p><h2 id="_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528-condition" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3A\u4EC0\u4E48\u4F7F\u7528-condition" aria-hidden="true">#</a> 2. \u4E3A\u4EC0\u4E48\u4F7F\u7528@Condition</h2><p>\u6211\u4EEC\u60F3\u5B9E\u73B0\uFF0C\u6839\u636E\u4E0D\u540C\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u52A0\u8F7D\u4E0D\u540C\u7684\u5B9E\u4F8B</p><h3 id="_2-1-\u4E0D\u4F7F\u7528-conditional\u6CE8\u89E3\u7684\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-1-\u4E0D\u4F7F\u7528-conditional\u6CE8\u89E3\u7684\u60C5\u51B5" aria-hidden="true">#</a> 2.1 \u4E0D\u4F7F\u7528<code>@Conditional</code>\u6CE8\u89E3\u7684\u60C5\u51B5</h3><h4 id="_2-1-1-system" tabindex="-1"><a class="header-anchor" href="#_2-1-1-system" aria-hidden="true">#</a> 2.1.1 <code>System</code></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">System</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;System{&quot;</span> <span class="token operator">+</span>
                <span class="token string">&quot;name=&#39;&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token char">&#39;\\&#39;&#39;</span> <span class="token operator">+</span>
                <span class="token char">&#39;}&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-beanconfig" tabindex="-1"><a class="header-anchor" href="#_2-1-2-beanconfig" aria-hidden="true">#</a> 2.1.2 <code>BeanConfig</code></h4><p>\u521B\u5EFA<code>BeanConfig</code>\u7C7B\uFF0C\u7528\u4E8E\u914D\u7F6E2\u4E2ASystem\u5B9E\u4F8B\uFF0C\u5E76\u6CE8\u5165Windows\u3001Linux\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-conditionaltest" tabindex="-1"><a class="header-anchor" href="#_2-1-3-conditionaltest" aria-hidden="true">#</a> 2.1.3 <code>ConditionalTest</code></h4><p>\u63A5\u7740\u5199\u4E00\u4E2A\u6D4B\u8BD5\u7C7B\uFF0C\u9A8C\u8BC1\u4E24\u4E2ABean\u662F\u5426\u6CE8\u5165\u6210\u529F\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConditionalTest</span> <span class="token punctuation">{</span>
    <span class="token class-name">AnnotationConfigApplicationContext</span> applicationContext <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnnotationConfigApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">BeanConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">&gt;</span></span> beans <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeansOfType</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>beans<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\uFF0C\u8F93\u51FA\u7ED3\u679C\uFF1A\u4E24\u4E2ABean\u5B9E\u4F8B\u90FD\u88AB\u6CE8\u5165\u8FDB\u5BB9\u5668\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220510105819119.png" alt="image-20220510105819119" loading="lazy"></p><p>\u73B0\u5728\u95EE\u9898\u6765\u4E86\uFF0C\u5982\u679C\u6211\u60F3\u6839\u636E\u5F53\u524D\u64CD\u4F5C\u7CFB\u7EDF\u6765\u6CE8\u5165<code>System</code>\u5B9E\u4F8B\uFF0Cwindow\u4E0B\u6CE8\u5165Windows\u5B9E\u4F8B\uFF0CLinux\u4E0B\u6CE8\u5165Linux\u5B9E\u4F8B\uFF0C\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F</p><p>\u8FD9\u5C31\u9700\u8981\u7528\u5230<code>@Conditional</code>\u6CE8\u89E3\u4E86\uFF0C\u524D\u8A00\u4E2D\u63D0\u5230\uFF0C\u9700\u8981\u5B9E\u73B0<code>Condition</code>\u63A5\u53E3\uFF0C\u5E76\u91CD\u5199\u65B9\u6CD5\u6765\u81EA\u5B9A\u4E49match\u89C4\u5219</p><h3 id="_2-2-conditional\u4F5C\u7528\u5728\u65B9\u6CD5\u4E0A" tabindex="-1"><a class="header-anchor" href="#_2-2-conditional\u4F5C\u7528\u5728\u65B9\u6CD5\u4E0A" aria-hidden="true">#</a> 2.2 <code>@Conditional</code>\u4F5C\u7528\u5728\u65B9\u6CD5\u4E0A</h3><h4 id="_2-2-1-windowscondition" tabindex="-1"><a class="header-anchor" href="#_2-2-1-windowscondition" aria-hidden="true">#</a> 2.2.1 <code>WindowsCondition</code></h4><p>\u9996\u5148\uFF0C\u521B\u5EFA\u4E00\u4E2A<code>WindowsCondition</code>\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">WindowsCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> conditionContext<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> annotatedTypeMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u83B7\u5F97\u5F53\u524D\u7CFB\u7EDF\u540D</span>
        <span class="token class-name">String</span> property <span class="token operator">=</span> conditionContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5305\u542BWindows\u5219\u8BF4\u660E\u662Fwindows\u7CFB\u7EDF\uFF0C\u8FD4\u56DEtrue</span>
        <span class="token keyword">return</span> property <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-linuxcondition" tabindex="-1"><a class="header-anchor" href="#_2-2-2-linuxcondition" aria-hidden="true">#</a> 2.2.2 <code>LinuxCondition</code></h4><p>\u63A5\u7740\uFF0C\u521B\u5EFA<code>LinuxCondition</code>\u7C7B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinuxCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> conditionContext<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> annotatedTypeMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> property <span class="token operator">=</span> conditionContext<span class="token punctuation">.</span><span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;os.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> property <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;Linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-3-\u4FEE\u6539beanconfig" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u4FEE\u6539beanconfig" aria-hidden="true">#</a> 2.2.3 \u4FEE\u6539<code>BeanConfig</code></h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">WindowsCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token class-name">LinuxCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-4-conditionaltest" tabindex="-1"><a class="header-anchor" href="#_2-2-4-conditionaltest" aria-hidden="true">#</a> 2.2.4 <code>ConditionalTest</code></h4><p>\u4FEE\u6539\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u4F7F\u5176\u53EF\u4EE5\u6253\u5370\u5F53\u524D\u7CFB\u7EDF\u540D\uFF1A</p><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>public class ConditionalTest {
    AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(BeanConfig.class);

    @Test
    public void test1() {
        String osName = applicationContext.getEnvironment().getProperty(&quot;os.name&quot;);
        java.lang.System.out.println(osName);
        Map&lt;String, System&gt; beans = applicationContext.getBeansOfType(System.class);
        java.lang.System.out.println(beans);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220510110444045.png" alt="image-20220510110444045" loading="lazy"></p><p><strong>\u4E00\u4E2A\u65B9\u6CD5\u53EA\u80FD\u6CE8\u5165\u4E00\u4E2Abean\u5B9E\u4F8B\uFF0C\u6240\u4EE5@Conditional\u6807\u6CE8\u5728\u65B9\u6CD5\u4E0A\u53EA\u80FD\u63A7\u5236\u4E00\u4E2Abean\u5B9E\u4F8B\u662F\u5426\u6CE8\u5165\u3002</strong></p><h3 id="_2-3-conditional\u4F5C\u7528\u5728\u7C7B\u4E0A" tabindex="-1"><a class="header-anchor" href="#_2-3-conditional\u4F5C\u7528\u5728\u7C7B\u4E0A" aria-hidden="true">#</a> 2.3 <code>@Conditional</code>\u4F5C\u7528\u5728\u7C7B\u4E0A</h3><p><strong>\u4E00\u4E2A\u7C7B\u4E2D\u53EF\u4EE5\u6CE8\u5165\u5F88\u591A\u5B9E\u4F8B\uFF0C@Conditional\u6807\u6CE8\u5728\u7C7B\u4E0A\u5C31\u51B3\u5B9A\u4E86\u4E00\u6279bean\u662F\u5426\u6CE8\u5165\u3002</strong></p><h4 id="_2-3-1-\u4FEE\u6539beanconfig\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u4FEE\u6539beanconfig\u7C7B" aria-hidden="true">#</a> 2.3.1 \u4FEE\u6539BeanConfig\u7C7B\uFF1A</h4><div class="language-JAVA ext-JAVA line-numbers-mode"><pre class="language-JAVA"><code>@Configuration
@Conditional(WindowsCondition.class)
public class BeanConfig {

    @Bean(name = &quot;windows&quot;)
    public System system1() {
        return new System(&quot;Windows&quot;);
    }

    @Bean(name = &quot;linux&quot;)
    public System system2() {
        return new System(&quot;Linux&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u7ED3\u679C\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220510110852635.png" alt="image-20220510110852635" loading="lazy"></p><p>\u7ED3\u679C\u8868\u660E\uFF0C\u5F53condition\u6761\u4EF6\u6210\u7ACB\uFF0C<code>BeanConfig</code>\u7C7B\u4E2D\u5B58\u5728<code>@Bean</code>\u6CE8\u89E3\u7684\u5B9E\u4F8B\u90FD\u6CE8\u5165\u5230\u5BB9\u5668\u3002</p><h3 id="_2-4-\u591A\u4E2A\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-4-\u591A\u4E2A\u6761\u4EF6" aria-hidden="true">#</a> 2.4 \u591A\u4E2A\u6761\u4EF6</h3><p>\u524D\u8A00\u4E2D\u8BF4\uFF0C@Conditional\u6CE8\u89E3\u4F20\u5165\u7684\u662F\u4E00\u4E2AClass\u6570\u7EC4\uFF0C\u5B58\u5728\u591A\u79CD\u6761\u4EF6\u7C7B\u7684\u60C5\u51B5\u3002</p><h4 id="_2-4-1testcondition" tabindex="-1"><a class="header-anchor" href="#_2-4-1testcondition" aria-hidden="true">#</a> 2.4.1<code>TestCondition</code></h4><p>\u65B0\u589E\u65B0\u7684\u6D4B\u8BD5\u6761\u4EF6\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestCondition</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">matches</span><span class="token punctuation">(</span><span class="token class-name">ConditionContext</span> context<span class="token punctuation">,</span> <span class="token class-name">AnnotatedTypeMetadata</span> metadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-beanconfig\u4FEE\u6539\u4E00\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-4-2-beanconfig\u4FEE\u6539\u4E00\u4E0B" aria-hidden="true">#</a> 2.4.2 <code>BeanConfig</code>\u4FEE\u6539\u4E00\u4E0B\uFF1A</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">WindowsCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">TestCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BeanConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Conditional</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">WindowsCondition</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Windows&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;linux&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">System</span> <span class="token function">system2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">System</span><span class="token punctuation">(</span><span class="token string">&quot;Linux&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-3-\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_2-4-3-\u7ED3\u679C" aria-hidden="true">#</a> 2.4.3 \u7ED3\u679C\uFF1A</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220510111135640.png" alt="image-20220510111135640" loading="lazy"></p><p>\u7ED3\u8BBA\uFF1A</p><p>\u5F53\u5B58\u5728\u591A\u4E2A\u6761\u4EF6\u65F6\uFF0C\u6240\u6709<code>Condition</code>\u5B9E\u73B0\u7C7B<code>match</code>\u65B9\u6CD5\u5747\u8FD4\u56DEtrue\uFF0C\u624D\u4F1A\u5C06<code>Bean</code>\u6CE8\u5165\u5230\u5BB9\u5668\u3002</p><h2 id="_3-springboot\u5BF9-conditional\u7684\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#_3-springboot\u5BF9-conditional\u7684\u6269\u5C55" aria-hidden="true">#</a> 3. springboot\u5BF9<code>@Conditional</code>\u7684\u6269\u5C55</h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h3><ul><li>@Conditional\u662Fspringboot\u5B9E\u73B0\u81EA\u52A8\u914D\u7F6E\u7684\u5173\u952E\u57FA\u7840\u80FD\u529B\u3002\u5728\u6B64\u57FA\u7840\u4E0A\uFF0Cspringboot\u53C8\u521B\u5EFA\u4E86\u591A\u4E2A\u9002\u7528\u4E8E\u4E0D\u540C\u573A\u666F\u7684\u7EC4\u5408\u6761\u4EF6\u6CE8\u89E3\u3002</li><li>@ConditionalOnBean\uFF1A\u5F53\u4E0A\u4E0B\u6587\u4E2D\u6709\u6307\u5B9ABean\u7684\u6761\u4EF6\u4E0B\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnMissingBean\uFF1A\u5F53\u4E0A\u4E0B\u6587\u6CA1\u6709\u6307\u5B9ABean\u7684\u6761\u4EF6\u4E0B\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnClass\uFF1A\u5F53classpath\u7C7B\u8DEF\u5F84\u4E0B\u6709\u6307\u5B9A\u7C7B\u7684\u6761\u4EF6\u4E0B\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnMissingClass\uFF1A\u5F53\u7C7B\u8DEF\u5F84\u4E0B\u6CA1\u6709\u6307\u5B9A\u7C7B\u7684\u6761\u4EF6\u4E0B\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnWebApplication\uFF1A\u5F53\u9879\u76EE\u672C\u8EAB\u662F\u4E00\u4E2AWeb\u9879\u76EE\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnNotWebApplication\uFF1A\u5F53\u9879\u76EE\u672C\u8EAB\u4E0D\u662F\u4E00\u4E2AWeb\u9879\u76EE\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnProperty\uFF1A\u5F53\u6307\u5B9A\u7684\u5C5E\u6027\u6709\u6307\u5B9A\u7684\u503C\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnExpression\uFF1A\u57FA\u4E8ESpEL\u8868\u8FBE\u5F0F\u7684\u6761\u4EF6\u5224\u65AD\u3002</li><li>@ConditionalOnJava\uFF1A\u5F53JVM\u7248\u672C\u4E3A\u6307\u5B9A\u7684\u7248\u672C\u8303\u56F4\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnResource\uFF1A\u5F53\u7C7B\u8DEF\u5F84\u4E0B\u6709\u6307\u5B9A\u7684\u8D44\u6E90\u65F6\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnJndi\uFF1A\u5728JNDI\u5B58\u5728\u65F6\u89E6\u53D1\u5B9E\u4F8B\u5316\u3002</li><li>@ConditionalOnSingleCandidate\uFF1A\u5F53\u6307\u5B9A\u7684Bean\u5728\u5BB9\u5668\u4E2D\u53EA\u6709\u4E00\u4E2A\uFF0C\u6216\u8005\u6709\u591A\u4E2A\u4F46\u662F\u6307\u5B9A\u4E86\u9996\u9009\u7684Bean\u65F6\u89E6\u53D1\u5B9E\u4F8B\u5316\u3002</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,59),d={href:"https://juejin.cn/post/6844904200401321997",target:"_blank",rel:"noopener noreferrer"},r=p("\u8BE6\u89E3Spring @Conditional \u6CE8\u89E3");function k(v,m){const s=c("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",d,[r,o(s)])])])}const h=a(l,[["render",k],["__file","springboot-y-annotation-conditional.html.vue"]]);export{h as default};
