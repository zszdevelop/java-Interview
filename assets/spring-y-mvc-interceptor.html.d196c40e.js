import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as l,e as o,r as c}from"./app.657c5dd1.js";const i={},r=l(`<h1 id="springmvc\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#springmvc\u62E6\u622A\u5668" aria-hidden="true">#</a> SpringMVC\u62E6\u622A\u5668</h1><h2 id="_1-\u8BE6\u7EC6\u4ECB\u7ECD\u4E0B-spring-mvc-\u62E6\u622A\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u8BE6\u7EC6\u4ECB\u7ECD\u4E0B-spring-mvc-\u62E6\u622A\u5668" aria-hidden="true">#</a> 1. \u8BE6\u7EC6\u4ECB\u7ECD\u4E0B Spring MVC \u62E6\u622A\u5668\uFF1F</h2><p><code>org.springframework.web.servlet.HandlerInterceptor</code> \uFF0C\u62E6\u622A\u5668\u63A5\u53E3\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// HandlerInterceptor.java</span>

<span class="token doc-comment comment">/**
 * \u62E6\u622A\u5904\u7406\u5668\uFF0C\u5728 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u6267\u884C\u4E4B\u524D
 */</span>
<span class="token keyword">default</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">)</span>
		<span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u62E6\u622A\u5904\u7406\u5668\uFF0C\u5728 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u6267\u884C\u6210\u529F\u4E4B\u540E
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u62E6\u622A\u5904\u7406\u5668\uFF0C\u5728 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">HandlerAdapter</span><span class="token punctuation">#</span><span class="token function">handle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u65E0\u8BBA\u6210\u529F\u8FD8\u662F\u5931\u8D25
 *
 * \u5E76\u4E14\uFF0C\u53EA\u6709\u8BE5\u5904\u7406\u5668 <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token punctuation">#</span><span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">)</span></span><span class="token punctuation">}</span> \u6267\u884C\u6210\u529F\u4E4B\u540E\uFF0C\u624D\u4F1A\u88AB\u6267\u884C
 */</span>
<span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">Object</span> handler<span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Nullable</span> <span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u4E00\u5171\u6709\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5206\u522B\u4E3A\uFF1A</p><ul><li>preHandle\uFF08...\uFF09\u65B9\u6CD5\uFF0C\u8C03\u7528Controller\u65B9\u6CD5\u4E4B<strong>\u524D</strong>\u6267\u884C</li><li>postHandle\uFF08...\uFF09\u65B9\u6CD5\uFF0C\u8C03\u7528Controller\u65B9\u6CD5\u4E4B<strong>\u540E</strong>\u6267\u884C</li><li>afterCompletion(...)\u65B9\u6CD5\uFF0C\u5904\u7406\u5B8CController \u65B9\u6CD5\u8FD4\u56DE\u7ED3\u679C\u4E4B\u540E\u6267\u884C <ul><li>\u4F8B\u5982\uFF1A\u9875\u9762\u6E32\u67D3\u540E</li><li>\u6CE8\u610F\uFF1A<strong>\u65E0\u8BBA\u8C03\u7528Controller\u65B9\u6CD5\u662F\u5426\u6210\u529F\uFF0C\u90FD\u4F1A\u6267\u884C</strong></li></ul></li></ul></li><li><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF1A</p><ul><li>\u5F53\u4E24\u4E2A\u62E6\u622A\u5668\u90FD\u5B9E\u73B0\u653E\u884C\u64CD\u4F5C\u662F\uFF0C\u6267\u884C\u987A\u5E8F<code>preHandle[1] =&gt; preHandle[2] =&gt; postHandle[2] =&gt; postHandle[1] =&gt; afterCompletion[2] =&gt; afterCompletion[1]</code> \u3002</li><li>\u5F53\u7B2C\u4E00\u4E2A\u62E6\u622A\u5668preHandle(...)\u8FD4\u56DEfalse \u7684\u65F6\u5019\uFF0C\u4E5F\u5C31\u662F\u5BF9\u5176\u8FDB\u884C\u62E6\u622A\u65F6\uFF0C\u7B2C\u4E8C\u4E2A\u62E6\u622A\u5668\u662F\u5B8C\u5168\u4E0D\u6267\u884C\u7684\uFF0C\u7B2C\u4E00\u4E2A\u62E6\u622A\u5668\u53EA\u6267\u884C <code>#preHandle(...)</code> \u90E8\u5206\u3002</li><li>\u5F53\u7B2C\u4E00\u4E2A\u62E6\u622A\u5668 <code>#preHandle(...)</code> \u65B9\u6CD5\u8FD4\u56DE <code>true</code> \uFF0C\u7B2C\u4E8C\u4E2A\u62E6\u622A\u5668 <code>#preHandle(...)</code> \u8FD4\u56DE <code>false</code> \uFF0C\u6267\u884C\u987A\u5E8F\u4E3A <code>preHandle[1] =&gt; preHandle[2] =&gt; afterCompletion[1]</code> \u3002</li></ul></li><li><p>\u603B\u7ED3\uFF1A</p><ul><li>preHandle(...)\u65B9\u6CD5\uFF0C\u6309\u62E6\u622A\u5668\u5B9A\u4E49<strong>\u987A\u5E8F</strong>\u8C03\u7528\uFF0C\u82E5\u4EFB\u4E00\u62E6\u622A\u5668\u8FD4\u56DEfalse\uFF0C\u5219Controller\u65B9\u6CD5\u4E0D\u518D\u8C03\u7528</li><li><code>#postHandle(...)</code> \u548C <code>#afterCompletion(...)</code> \u65B9\u6CD5\uFF0C\u6309\u62E6\u622A\u5668\u5B9A\u4E49<strong>\u9006\u5E8F</strong>\u8C03\u7528\u3002</li><li><code>#postHandler(...)</code> \u65B9\u6CD5\uFF0C\u5728\u8C03\u7528 Controller \u65B9\u6CD5\u4E4B<strong>\u540E</strong>\u6267\u884C\u3002</li><li><code>#afterCompletion(...)</code> \u65B9\u6CD5\uFF0C\u53EA\u6709\u8BE5\u62E6\u622A\u5668\u5728 <code>#preHandle(...)</code> \u65B9\u6CD5\u8FD4\u56DE <code>true</code> \u65F6\uFF0C\u624D\u80FD\u591F\u88AB\u8C03\u7528\uFF0C\u4E14\u4E00\u5B9A\u4F1A\u88AB\u8C03\u7528\u3002\u4E3A\u4EC0\u4E48\u201C\u4E14\u4E00\u5B9A\u4F1A\u88AB\u8C03\u7528\u201D\u5462\uFF1F\u5373\u4F7F <code>#afterCompletion(...)</code> \u65B9\u6CD5\uFF0C\u6309\u62E6\u622A\u5668\u5B9A\u4E49<strong>\u9006\u5E8F</strong>\u8C03\u7528\u65F6\uFF0C\u524D\u9762\u7684\u62E6\u622A\u5668\u53D1\u751F\u5F02\u5E38\uFF0C\u540E\u9762\u7684\u62E6\u622A\u5668\u8FD8\u80FD\u591F\u8C03\u7528\uFF0C<strong>\u5373\u65E0\u89C6\u5F02\u5E38</strong>\u3002</li></ul></li></ul><h2 id="_2-spring-mvc-\u7684\u62E6\u622A\u5668\u53EF\u4EE5\u505A\u54EA\u4E9B\u4E8B\u60C5" tabindex="-1"><a class="header-anchor" href="#_2-spring-mvc-\u7684\u62E6\u622A\u5668\u53EF\u4EE5\u505A\u54EA\u4E9B\u4E8B\u60C5" aria-hidden="true">#</a> 2. Spring MVC \u7684\u62E6\u622A\u5668\u53EF\u4EE5\u505A\u54EA\u4E9B\u4E8B\u60C5\uFF1F</h2><p>\u62E6\u622A\u5668\u80FD\u505A\u7684\u4E8B\u60C5\u975E\u5E38\u975E\u5E38\u591A\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>\u8BB0\u5F55\u8BBF\u95EE\u65E5\u5FD7</li><li>\u8BB0\u5F55\u5F02\u5E38\u65E5\u5FD7</li><li>\u9700\u8981\u767B\u5F55\u7684\u8BF7\u6C42\u64CD\u4F5C\uFF0C\u62E6\u622A\u672A\u767B\u5F55\u7684\u7528\u6237</li><li>...</li></ul><h2 id="_3-spring-mvc-\u7684\u62E6\u622A\u5668\u548Cfilter-\u8FC7\u6EE4\u5668\u6709\u4EC0\u4E48\u5DEE\u522B" tabindex="-1"><a class="header-anchor" href="#_3-spring-mvc-\u7684\u62E6\u622A\u5668\u548Cfilter-\u8FC7\u6EE4\u5668\u6709\u4EC0\u4E48\u5DEE\u522B" aria-hidden="true">#</a> 3. Spring MVC \u7684\u62E6\u622A\u5668\u548CFilter \u8FC7\u6EE4\u5668\u6709\u4EC0\u4E48\u5DEE\u522B</h2><ul><li><strong>\u529F\u80FD\u76F8\u540C</strong>\uFF1A\u62E6\u622A\u5668\u548CFilter \u90FD\u80FD\u5B9E\u73B0\u76F8\u5E94\u7684\u529F\u80FD\uFF0C\u8C01\u90FD\u4E0D\u6BD4\u8C01\u5F3A</li><li><strong>\u5BB9\u5668\u4E0D\u540C</strong>\uFF1A\u62E6\u622A\u5668\u6784\u5EFA\u5728Spring MVC \u4F53\u7CFB\u4E2D\uFF0CFilter \u6784\u5EFA\u5728 Servlet \u5BB9\u5668\u4E4B\u4E0A</li><li><strong>\u4F7F\u7528\u4FBF\u5229\u6027\u4E0D\u540C</strong>\uFF1A\u62E6\u622A\u5668\u63D0\u4F9B\u4E86\u4E09\u4E2A\u65B9\u6CD5\uFF0C\u5206\u522B\u5728\u4E0D\u540C\u7684\u65F6\u673A\u6267\u884C\uFF1B\u8FC7\u6EE4\u5668\u4EC5\u63D0\u4F9B\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u5F53\u7136\u4E5F\u80FD\u73B0\u5B9E\u62E6\u622A\u5668\u7684\u6267\u884C\u65F6\u673A\u7684\u6548\u679C\uFF0C\u5C31\u662F\u9EBB\u70E6\u4E00\u4E9B</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,11),d={href:"http://svip.iocoder.cn/Spring-MVC/Interview/",target:"_blank",rel:"noopener noreferrer"},u=o("\u8FC7\u6EE4\u5668(Filter)\u548C\u62E6\u622A\u5668(Interceptor)\u7684\u533A\u522B");function k(m,v){const s=c("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",d,[u,p(s)])])])}const b=a(i,[["render",k],["__file","spring-y-mvc-interceptor.html.vue"]]);export{b as default};
