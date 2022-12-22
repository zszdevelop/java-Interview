import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as p,d as c,e as i,r as o}from"./app.633bb4c8.js";const l={},u=c(`<h1 id="css\u6587\u672C\u8D85\u51FA\u5C31\u9690\u85CF\u5E76\u4E14\u663E\u793A\u7701\u7565\u53F7" tabindex="-1"><a class="header-anchor" href="#css\u6587\u672C\u8D85\u51FA\u5C31\u9690\u85CF\u5E76\u4E14\u663E\u793A\u7701\u7565\u53F7" aria-hidden="true">#</a> css\u6587\u672C\u8D85\u51FA\u5C31\u9690\u85CF\u5E76\u4E14\u663E\u793A\u7701\u7565\u53F7</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>css\u6587\u672C\u8D85\u51FA\u5C31\u9690\u85CF\u5E76\u4E14\u663E\u793A\u7701\u7565\u53F7\uFF0C\u975E\u5E38\u5E38\u89C1\u7684\u9700\u6C42\u3002\u4F46\u4E5F\u6709\u4E00\u4E9B\u5751\u3002\u7279\u6B64\u8BB0\u5F55\u4E00\u4E0B</p><h2 id="_2-\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u5B9E\u73B0</h2><h3 id="_2-1-\u5355\u884C\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5355\u884C\u5B9E\u73B0" aria-hidden="true">#</a> 2.1 \u5355\u884C\u5B9E\u73B0</h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span> //\u8D85\u51FA\u7684\u6587\u672C\u9690\u85CF
<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span> //\u6EA2\u51FA\u7528\u7701\u7565\u53F7\u663E\u793A
<span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span> //\u6EA2\u51FA\u4E0D\u6362\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u4E24\u884C\u7684\u5185\u5BB9\u65F6\u5019" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4E24\u884C\u7684\u5185\u5BB9\u65F6\u5019" aria-hidden="true">#</a> 2.2 <strong>\u4E24\u884C\u7684\u5185\u5BB9\u65F6\u5019</strong></h3><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span> //\u4F5C\u4E3A\u5F39\u6027\u4F38\u7F29\u76D2\u5B50\u6A21\u578B\u663E\u793A\u3002
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span> //\u8BBE\u7F6E\u4F38\u7F29\u76D2\u5B50\u7684\u5B50\u5143\u7D20\u6392\u5217\u65B9\u5F0F--\u4ECE\u4E0A\u5230\u4E0B\u5782\u76F4\u6392\u5217
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span> //\u663E\u793A\u7684\u884C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u9047\u5230\u7684\u5751" tabindex="-1"><a class="header-anchor" href="#_3-\u9047\u5230\u7684\u5751" aria-hidden="true">#</a> 3. \u9047\u5230\u7684\u5751</h2><h3 id="_3-1-flex\u5E03\u5C40\u4E0Ewhite-space-nowrap-\u51B2\u7A81\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-1-flex\u5E03\u5C40\u4E0Ewhite-space-nowrap-\u51B2\u7A81\u95EE\u9898" aria-hidden="true">#</a> 3.1 flex\u5E03\u5C40\u4E0Ewhite-space: nowrap \u51B2\u7A81\u95EE\u9898</h3><p>\u5982\u679C\u6211\u4EECflex\u5E03\u5C40\u7684<strong>\u5B59\u5B50\u5BB9\u5668</strong>\u4E2D\u5305\u542B\u4E86white-space: nowrap\u3002\u90A3\u4E48\u4ED6\u53EF\u80FD\u4F1A\u5931\u6548\u3002</p><p>\u5982</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>left<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6211\u662F\u6D4B\u8BD5\u6587\u672C\u6211\u6709\u8FD9\u4E48\u8FD9\u4E48\u957F\uFF0C\u6211\u662F\u6D4B\u8BD5\u6587\u672C\u6211\u6709\u8FD9\u4E48\u8FD9\u4E48\u957F\uFF0C\u6211\u662F\u6D4B\u8BD5\u6587\u672C\u6211\u6709\u8FD9\u4E48\u8FD9\u4E48\u957F\uFF0C\u6211\u662F\u6D4B\u8BD5\u6587\u672C\u6211\u6709\u8FD9\u4E48\u8FD9\u4E48\u957F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span><span class="token punctuation">&gt;</span></span>\u63CF\u8FF0\u6587\u5B57<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>right<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u67E5\u770B\u8BE6\u60C5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">&gt;</span></span>
		
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>css\u5C5E\u6027</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.content</span><span class="token punctuation">{</span>
		<span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
		<span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
		<span class="token selector">.left</span><span class="token punctuation">{</span>
			<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
			<span class="token selector">.text</span> <span class="token punctuation">{</span>
				<span class="token property">font-size</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span>
				<span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
				<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
				<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		
		<span class="token selector">.right</span><span class="token punctuation">{</span>
			<span class="token property">width</span><span class="token punctuation">:</span> 100rpx<span class="token punctuation">;</span>
			<span class="token property">background-color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-1-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 3.1.1 \u89E3\u51B3\u529E\u6CD5</h4><p>\u5728\u5B50\u5BB9\u5668\u4E2D\u65B0\u589E min-width: 0;</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
			<span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
			<span class="token property">min-width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u5728uniapp-\u7684text\u6807\u7B7E\u4E2D\u7701\u7565\u53F7\u4E0D\u751F\u6548" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5728uniapp-\u7684text\u6807\u7B7E\u4E2D\u7701\u7565\u53F7\u4E0D\u751F\u6548" aria-hidden="true">#</a> 3.2 \u5728uniapp \u7684text\u6807\u7B7E\u4E2D\u7701\u7565\u53F7\u4E0D\u751F\u6548</h3><p>\u5982\u679C\u662F<code>&lt;text&gt;</code> \u6807\u7B7E</p><blockquote><p>Ps:text \u6807\u7B7E\u8BBE\u7F6E\u5BBD\u5EA6\u90FD\u4E0D\u7BA1\u7528</p></blockquote><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401214519580.png" alt="image-20220401214519580" loading="lazy"></p><h4 id="_3-2-1-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 3.2.1 \u89E3\u51B3\u529E\u6CD5</h4><p>\u6362\u6210<code>&lt;view&gt;</code>\u6807\u7B7E\u5C31\u53EF\u4EE5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401214627701.png" alt="image-20220401214627701" loading="lazy"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,26),r={href:"https://blog.csdn.net/u013868665/article/details/78893158",target:"_blank",rel:"noopener noreferrer"},d=i("css \u6587\u672C\u8D85\u51FA\u5C31\u9690\u85CF\u5E76\u4E14\u663E\u793A\u7701\u7565\u53F7");function k(v,h){const s=o("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",r,[d,p(s)])])])}const b=a(l,[["render",k],["__file","css-ellipsis.html.vue"]]);export{b as default};
