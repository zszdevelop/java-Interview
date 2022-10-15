import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as o,d as i,e as c,r as p}from"./app.657c5dd1.js";const l={},u=i(`<h1 id="configuration\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#configuration\u6CE8\u89E3" aria-hidden="true">#</a> @Configuration\u6CE8\u89E3</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>@Con\uFB01guration\u6CE8\u91CA\u7C7B\uFF0C<strong>\u8868\u660E\u7C7B\u5176\u4E3B\u8981\u76EE\u7684\u662F\u4F5C\u4E3Abean\u5B9A\u4E49\u7684\u6E90</strong>\uFF1B</p><p>\u4E00\u4E2A\u7C7B\u58F0\u660E\u4E00\u4E2A\u6216\u591A\u4E2A @Bean\u65B9\u6CD5\uFF0C\u5E76\u4E14\u53EF\u4EE5\u7531Spring\u5BB9\u5668\u8FDB\u884C\u5904\u7406\uFF0C\u4EE5\u5728\u8FD0\u884C\u65F6\u4E3A\u8FD9\u4E9Bbean\u751F\u6210bean\u5B9A\u4E49\u548C\u670D\u52A1\u8BF7\u6C42\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MyBean</span> <span class="token function">myBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// instantiate, configure and return bean ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-configuration-\u5185\u90E8\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-configuration-\u5185\u90E8\u5B9E\u73B0" aria-hidden="true">#</a> 2. @Configuration \u5185\u90E8\u5B9E\u73B0</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">TYPE</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Configuration</span> <span class="token punctuation">{</span>
   <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230\u8FD9\u4E2A <code>@Component</code> \u6CE8\u89E3, \u610F\u5473\u4E5F\u5C06\u4F1A\u6CE8\u518C\u4E3Abean, \u5176\u5185\u90E8\u4E5F\u53EF\u4EE5\u4F9D\u8D56\u6CE8\u5165\u3002 (\u6362\u4E2A\u65B9\u5F0F\u8BF4,\u4E00\u822CBean\u80FD\u7528\u7684\u4E1C\u897F,\u5B83\u4E5F\u80FD\u7528) \u4F8B\u5982: @Autowired\u3001@Inject\u3001@Scope\u7B49</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,9),r={href:"https://www.jianshu.com/p/721c76c1529c",target:"_blank",rel:"noopener noreferrer"},d=c("Spring @Configuration \u6CE8\u89E3\u4ECB\u7ECD");function k(v,m){const a=p("ExternalLinkIcon");return e(),t("div",null,[u,n("p",null,[n("a",r,[d,o(a)])])])}const g=s(l,[["render",k],["__file","spring-y-annotation-configuration.html.vue"]]);export{g as default};
