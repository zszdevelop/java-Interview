import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,a,b as p,e as i,d as r,r as c}from"./app.b9c1d23f.js";const o={},d=i(`<h2 id="dynamicinsert\u548C-dynamicupdate\u751F\u6210\u52A8\u6001sql\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#dynamicinsert\u548C-dynamicupdate\u751F\u6210\u52A8\u6001sql\u8BED\u53E5" aria-hidden="true">#</a> @DynamicInsert\u548C@DynamicUpdate\u751F\u6210\u52A8\u6001SQL\u8BED\u53E5</h2><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>@DynamicUpdate@DynamicInsert \u662Fhibernate\u91CC\u9762\u7684\u6CE8\u89E3</p><ul><li><p><strong>@DynamicInsert\u5C5E\u6027:</strong></p><p>\u8BBE\u7F6E\u4E3Atrue,\u8BBE\u7F6E\u4E3Atrue,\u8868\u793Ainsert\u5BF9\u8C61\u7684\u65F6\u5019,\u751F\u6210\u52A8\u6001\u7684insert\u8BED\u53E5,\u5982\u679C\u8FD9\u4E2A\u5B57\u6BB5\u7684\u503C\u662Fnull\u5C31\u4E0D\u4F1A\u52A0\u5165\u5230insert\u8BED\u53E5\u5F53\u4E2D.\u9ED8\u8BA4false\u3002</p><blockquote><p>\u6BD4\u5982\u5E0C\u671B\u6570\u636E\u5E93\u63D2\u5165\u65E5\u671F\u6216\u65F6\u95F4\u6233\u5B57\u6BB5\u65F6\uFF0C\u5728\u5BF9\u8C61\u5B57\u6BB5\u4E3A\u7A7A\u7684\u60C5\u51B5\u4E0B\uFF0C\u8868\u5B57\u6BB5\u80FD\u81EA\u52A8\u586B\u5199\u5F53\u524D\u7684sysdate\u3002</p></blockquote></li><li><p><strong>@DynamicUpdate\u5C5E\u6027</strong>:</p><p>\u8BBE\u7F6E\u4E3Atrue,\u8BBE\u7F6E\u4E3Atrue,\u8868\u793Aupdate\u5BF9\u8C61\u7684\u65F6\u5019,\u751F\u6210\u52A8\u6001\u7684update\u8BED\u53E5,\u5982\u679C\u8FD9\u4E2A\u5B57\u6BB5\u7684\u503C\u662Fnull\u5C31\u4E0D\u4F1A\u88AB\u52A0\u5165\u5230update\u8BED\u53E5\u4E2D,\u9ED8\u8BA4false\u3002</p><blockquote><p>\u6BD4\u5982\u53EA\u60F3\u66F4\u65B0\u67D0\u4E2A\u5C5E\u6027\uFF0C\u4F46\u662F\u5374\u628A\u6574\u4E2A\u5BF9\u8C61\u7684\u5C5E\u6027\u90FD\u66F4\u65B0\u4E86\uFF0C\u8FD9\u5E76\u4E0D\u662F\u6211\u4EEC\u5E0C\u671B\u7684\u7ED3\u679C\uFF0C\u6211\u4EEC\u5E0C\u671B\u7684\u7ED3\u679C\u662F\uFF1A\u6211\u66F4\u6539\u4E86\u54EA\u4E9B\u5B57\u6BB5\uFF0C\u53EA\u8981\u66F4\u65B0\u6211\u4FEE\u6539\u7684\u5B57\u6BB5\u5C31\u591F\u4E86\u3002</p></blockquote></li></ul><h2 id="_2-\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u4E3E\u4F8B" aria-hidden="true">#</a> 2. \u4E3E\u4F8B</h2><h3 id="_2-1-\u52A8\u6001\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#_2-1-\u52A8\u6001\u63D2\u5165" aria-hidden="true">#</a> 2.1 \u52A8\u6001\u63D2\u5165</h3><p><strong>@DynamicInsert\u6CE8\u89E3\u4E0BHibernate\u65E5\u5FD7\u6253\u5370SQL\uFF1A</strong></p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> Cat <span class="token punctuation">(</span>cat_name<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span> ?<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53CD\u4E4B</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">insert</span> <span class="token keyword">into</span> Cat <span class="token punctuation">(</span>create_time<span class="token punctuation">,</span> update_time<span class="token punctuation">,</span> cat_name<span class="token punctuation">,</span> id<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span>?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span> ?<span class="token punctuation">,</span> ?<span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-\u52A8\u6001\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#_2-2-\u52A8\u6001\u66F4\u65B0" aria-hidden="true">#</a> 2.2 \u52A8\u6001\u66F4\u65B0</h3><p>@DynamicUpdate\u6CE8\u89E3\u4E0BHibernate\u65E5\u5FD7\u6253\u5370SQL\uFF1A</p><p>\u8BF4\u660E\uFF1A\u5982\u679C\u5B57\u6BB5\u6709\u66F4\u65B0\uFF0CHibernate\u624D\u4F1A\u5BF9\u8BE5\u5B57\u6BB5\u8FDB\u884C\u66F4\u65B0</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">update</span> Cat <span class="token keyword">set</span> update_time<span class="token operator">=</span>? <span class="token keyword">where</span> id<span class="token operator">=</span>?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53CD\u4E4BCat\u5B9E\u4F53\u7C7B\u53BB\u6389@DynamicUpdate</p><p>\u8BF4\u660E\uFF1A\u4E0D\u7BA1\u5B57\u6BB5\u6709\u6CA1\u6709\u66F4\u65B0\uFF0CHibernate\u90FD\u4F1A\u5BF9\u8BE5\u5B57\u6BB5\u8FDB\u884C\u66F4\u65B0</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">update</span> Cat <span class="token keyword">set</span> update_time<span class="token operator">=</span>?<span class="token punctuation">,</span> cat_name<span class="token operator">=</span>? <span class="token keyword">where</span> id<span class="token operator">=</span>?  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3:</h2><p>\u5982\u679C\u4E0D\u9700\u8981\u5168\u8868\u66F4\u65B0\u5C31\u52A0\u4E0A@DynamicInsert\u548C@DynamicUpdate</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,20),l={href:"https://blog.csdn.net/itguangit/article/details/78696767",target:"_blank",rel:"noopener noreferrer"},u=r("Spring Data JPA\u6CE8\u89E3@DynamicInsert\u548C@DynamicUpdate");function h(k,m){const n=c("ExternalLinkIcon");return s(),t("div",null,[d,a("p",null,[a("a",l,[u,p(n)])])])}const b=e(o,[["render",h],["__file","jpa-i-dynamic.html.vue"]]);export{b as default};
