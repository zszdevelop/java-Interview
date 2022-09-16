import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.13531e65.js";const e={},p=t(`<h1 id="swagger\u5206\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#swagger\u5206\u6A21\u5757" aria-hidden="true">#</a> Swagger\u5206\u6A21\u5757</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u6211\u4EEC\u5728\u4F7F\u7528swagger\u7684\u65F6\u5019\uFF0C\u5982\u679C\u63A5\u53E3\u975E\u5E38\u591A\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u7684\u63A5\u53E3\u5217\u8868\u662F\u975E\u5E38\u5E9E\u5927\u7684\u3002\u8981\u67E5\u627E\u4E00\u4E2A\u63A5\u53E3\u5E76\u4E0D\u5BB9\u6613\u3002\u6211\u4EEC\u5E0C\u671B\u80FD\u6309\u6A21\u5757\u5212\u5206</p><h3 id="_1-1-\u521D\u59CB\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521D\u59CB\u60C5\u51B5" aria-hidden="true">#</a> 1.1 \u521D\u59CB\u60C5\u51B5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026093522355.png" alt="image-20211026093522355" loading="lazy"></p><p>\u9ED8\u8BA4\u60C5\u51B5\u6A21\u5757\u53EA\u6709\u4E00\u4E2Adefault</p><h2 id="_2-\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u6B65\u9AA4</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SwaggerConfig</span>
<span class="token punctuation">{</span>
   
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
   
    <span class="token doc-comment comment">/**
     * \u521B\u5EFAAPI
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">OAS_30</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">&quot;XXAPI\u63A5\u53E3&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// \u662F\u5426\u542F\u7528Swagger</span>
                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>enabled<span class="token punctuation">)</span>
                <span class="token comment">// \u7528\u6765\u521B\u5EFA\u8BE5API\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u5C55\u793A\u5728\u6587\u6863\u7684\u9875\u9762\u4E2D\uFF08\u81EA\u5B9A\u4E49\u5C55\u793A\u7684\u4FE1\u606F\uFF09</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// \u8BBE\u7F6E\u54EA\u4E9B\u63A5\u53E3\u66B4\u9732\u7ED9Swagger\u5C55\u793A</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// \u626B\u63CF\u6240\u6709\u6709\u6CE8\u89E3\u7684api\uFF0C\u7528\u8FD9\u79CD\u65B9\u5F0F\u66F4\u7075\u6D3B</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">withMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// \u626B\u63CF\u6307\u5B9A\u5305\u4E2D\u7684swagger\u6CE8\u89E3</span>
                <span class="token comment">// .apis(RequestHandlerSelectors.basePackage(&quot;com.ygn.project.tool.swagger&quot;))</span>
                <span class="token comment">// \u626B\u63CF\u6240\u6709 .apis(RequestHandlerSelectors.any())</span>
<span class="token comment">//                .paths(PathSelectors.any())</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">&quot;/xx/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">/* \u8BBE\u7F6E\u5B89\u5168\u6A21\u5F0F\uFF0Cswagger\u53EF\u4EE5\u8BBE\u7F6E\u8BBF\u95EEtoken */</span>
                <span class="token punctuation">.</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">pathMapping</span><span class="token punctuation">(</span>pathMapping<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFAAPI
     */</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;system&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Docket</span> <span class="token function">createSystemRestApi</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Docket</span><span class="token punctuation">(</span><span class="token class-name">DocumentationType</span><span class="token punctuation">.</span><span class="token constant">SWAGGER_2</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">groupName</span><span class="token punctuation">(</span><span class="token string">&quot;\u7CFB\u7EDFAPI\u63A5\u53E3&quot;</span><span class="token punctuation">)</span>
                <span class="token comment">// \u662F\u5426\u542F\u7528Swagger</span>
                <span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span>enabled<span class="token punctuation">)</span>
                <span class="token comment">// \u7528\u6765\u521B\u5EFA\u8BE5API\u7684\u57FA\u672C\u4FE1\u606F\uFF0C\u5C55\u793A\u5728\u6587\u6863\u7684\u9875\u9762\u4E2D\uFF08\u81EA\u5B9A\u4E49\u5C55\u793A\u7684\u4FE1\u606F\uFF09</span>
                <span class="token punctuation">.</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token function">apiInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// \u8BBE\u7F6E\u54EA\u4E9B\u63A5\u53E3\u66B4\u9732\u7ED9Swagger\u5C55\u793A</span>
                <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">// \u626B\u63CF\u6240\u6709\u6709\u6CE8\u89E3\u7684api\uFF0C\u7528\u8FD9\u79CD\u65B9\u5F0F\u66F4\u7075\u6D3B</span>
                <span class="token punctuation">.</span><span class="token function">apis</span><span class="token punctuation">(</span><span class="token class-name">RequestHandlerSelectors</span><span class="token punctuation">.</span><span class="token function">withMethodAnnotation</span><span class="token punctuation">(</span><span class="token class-name">ApiOperation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token comment">// \u626B\u63CF\u6307\u5B9A\u5305\u4E2D\u7684swagger\u6CE8\u89E3</span>
<span class="token comment">//                .apis(RequestHandlerSelectors.basePackage(&quot;com.fardu.jd&quot;))</span>
                <span class="token comment">// \u626B\u63CF\u6240\u6709</span>
                <span class="token comment">// .apis(RequestHandlerSelectors.any())</span>
<span class="token comment">//                .paths(PathSelectors.any())</span>
                <span class="token punctuation">.</span><span class="token function">paths</span><span class="token punctuation">(</span><span class="token class-name">PathSelectors</span><span class="token punctuation">.</span><span class="token function">ant</span><span class="token punctuation">(</span><span class="token string">&quot;/system/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token comment">/* \u8BBE\u7F6E\u5B89\u5168\u6A21\u5F0F\uFF0Cswagger\u53EF\u4EE5\u8BBE\u7F6E\u8BBF\u95EEtoken */</span>
                <span class="token punctuation">.</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token function">securitySchemes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token function">securityContexts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">pathMapping</span><span class="token punctuation">(</span>pathMapping<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>@Bean(&quot;system&quot;) : \u5B9E\u4F8B\u5316\u591A\u4E2A<code>docket</code></li><li>groupName: \u6307\u5B9A\u8BE5\u6A21\u5757\u540D\u79F0</li><li>paths\uFF1A\u6307\u5B9A\u8BE5\u6A21\u5757\u8981\u626B\u7801\u7684\u8DEF\u5F84</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026094024020.png" alt="image-20211026094024020" loading="lazy"></p><h2 id="_3-docket\u6A21\u5757\u652F\u6301\u591A\u4E2A\u5305" tabindex="-1"><a class="header-anchor" href="#_3-docket\u6A21\u5757\u652F\u6301\u591A\u4E2A\u5305" aria-hidden="true">#</a> 3. Docket\u6A21\u5757\u652F\u6301\u591A\u4E2A\u5305</h2><h3 id="_3-1-\u4F7F\u7528pathselectors-regex" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4F7F\u7528pathselectors-regex" aria-hidden="true">#</a> 3.1 \u4F7F\u7528PathSelectors.regex</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>.paths(PathSelectors.regex(&quot;/api/.*|/test/.*&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),c=[p];function o(i,l){return s(),a("div",null,c)}const d=n(e,[["render",o],["__file","swagger-x-module.html.vue"]]);export{d as default};
