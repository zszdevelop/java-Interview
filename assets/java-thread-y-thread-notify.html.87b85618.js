import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as t}from"./app.2d9a29d9.js";const e={},p=t(`<h1 id="\u7EBF\u7A0B\u901A\u4FE1-\u7B49\u5F85\u901A\u77E5wait-notify\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u7EBF\u7A0B\u901A\u4FE1-\u7B49\u5F85\u901A\u77E5wait-notify\u673A\u5236" aria-hidden="true">#</a> \u7EBF\u7A0B\u901A\u4FE1(\u7B49\u5F85\u901A\u77E5wait/notify\u673A\u5236)</h1><h2 id="_1-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_1-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u4ECB\u7ECD" aria-hidden="true">#</a> 1. \u7B49\u5F85/\u901A\u77E5\u673A\u5236\u4ECB\u7ECD</h2><h3 id="_1-1-\u4E0D\u4F7F\u7528\u7B49\u5F85-\u901A\u77E5\u673A\u5236-\u8F6E\u8BE2" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E0D\u4F7F\u7528\u7B49\u5F85-\u901A\u77E5\u673A\u5236-\u8F6E\u8BE2" aria-hidden="true">#</a> 1.1 \u4E0D\u4F7F\u7528\u7B49\u5F85/\u901A\u77E5\u673A\u5236\uFF08\u8F6E\u8BE2\uFF09</h3><p>\u5F53\u4E24\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u5B58\u5728<strong>\u751F\u4EA7\u8005\u548C\u6D88\u8D39\u8005\u5173\u7CFB</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4<strong>\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\uFF08\u751F\u4EA7\u8005\uFF09\u505A\u76F8\u5E94\u7684\u64CD\u4F5C\u7136\u540E\u7B2C\u4E8C\u4E2A\u7EBF\u7A0B\uFF08\u6D88\u8D39\u8005\uFF09\u611F\u77E5\u5230\u4E86\u53D8\u5316\u53C8\u8FDB\u884C\u76F8\u5E94\u7684\u64CD\u4F5C</strong></p><h4 id="_1-1-1-\u8F6E\u8BE2\u65B9\u5F0F\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_1-1-1-\u8F6E\u8BE2\u65B9\u5F0F\u6848\u4F8B" aria-hidden="true">#</a> 1.1.1 \u8F6E\u8BE2\u65B9\u5F0F\u6848\u4F8B</h4><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">while</span><span class="token punctuation">(</span>value<span class="token operator">=</span>desire<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5047\u8BBE\u8FD9\u4E2Avalue\u503C\u5C31\u662F\u7B2C\u4E00\u4E2A\u7EBF\u7A0B\u64CD\u4F5C\u7684\u7ED3\u679C\uFF0CdoSomething()\u662F\u7B2C\u4E8C\u4E2A\u7EBF\u7A0B\u8981\u505A\u7684\u4E8B\uFF0C\u5F53\u6EE1\u8DB3\u6761\u4EF6value=desire\u540E\u624D\u6267\u884CdoSomething()\u3002</p><h4 id="_1-1-2-\u8F6E\u8BE2\u65B9\u5F0F\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-1-2-\u8F6E\u8BE2\u65B9\u5F0F\u7F3A\u70B9" aria-hidden="true">#</a> 1.1.2 \u8F6E\u8BE2\u65B9\u5F0F\u7F3A\u70B9</h4><p>\u7B2C\u4E8C\u4E2A\u8BED\u53E5\u4E0D\u505C\u8FC7\u901A\u8FC7\u8F6E\u8BE2\u673A\u5236\u6765\u68C0\u6D4B\u5224\u65AD\u6761\u4EF6\u662F\u5426\u6210\u7ACB\u3002\u5982\u679C<strong>\u8F6E\u8BE2\u65F6\u95F4\u7684\u95F4\u9694\u592A\u5C0F\u4F1A\u6D6A\u8D39CPU\u8D44\u6E90\uFF0C\u8F6E\u8BE2\u65F6\u95F4\u7684\u95F4\u9694\u592A\u5927\uFF0C\u5C31\u53EF\u80FD\u53D6\u4E0D\u5230\u81EA\u5DF1\u60F3\u8981\u7684\u6570\u636E</strong>\u3002</p><p>\u6240\u4EE5\u8FD9\u91CC\u5C31\u9700\u8981\u6211\u4EEC\u4ECA\u5929\u8BB2\u5230\u7684\u7B49\u5F85/\u901A\u77E5\uFF08wait/notify\uFF09\u673A\u5236\u6765\u89E3\u51B3\u8FD9\u4E24\u4E2A\u77DB\u76FE\u3002</p><h3 id="_1-2-\u4EC0\u4E48\u662F\u7B49\u5F85-\u901A\u77E5\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#_1-2-\u4EC0\u4E48\u662F\u7B49\u5F85-\u901A\u77E5\u673A\u5236" aria-hidden="true">#</a> 1.2 \u4EC0\u4E48\u662F\u7B49\u5F85/\u901A\u77E5\u673A\u5236</h3><h3 id="_1-2-1-\u7B49\u5F85-\u901A\u77E5\u751F\u6D3B\u4E2D\u7684\u6848\u4F8B\u539F\u578B" tabindex="-1"><a class="header-anchor" href="#_1-2-1-\u7B49\u5F85-\u901A\u77E5\u751F\u6D3B\u4E2D\u7684\u6848\u4F8B\u539F\u578B" aria-hidden="true">#</a> 1.2.1 \u7B49\u5F85/\u901A\u77E5\u751F\u6D3B\u4E2D\u7684\u6848\u4F8B\u539F\u578B</h3><p>\u7B49\u5F85/\u901A\u77E5\u673A\u5236\u5728\u6211\u4EEC\u751F\u6D3B\u4E2D\u6BD4\u6BD4\u7686\u662F\uFF0C\u4E00\u4E2A\u5F62\u8C61\u7684\u4F8B\u5B50\u5C31\u662F\u53A8\u5E08\u548C\u670D\u52A1\u5458\u4E4B\u95F4\u5C31\u5B58\u5728\u7B49\u5F85/\u901A\u77E5\u673A\u5236\u3002</p><ol><li>\u53A8\u5E08\u505A\u5B8C\u4E00\u9053\u83DC\u7684\u65F6\u95F4\u662F\u4E0D\u786E\u5B9A\u7684\uFF0C\u6240\u4EE5\u83DC\u5230\u670D\u52A1\u5458\u624B\u4E2D\u7684\u65F6\u95F4\u662F\u4E0D\u786E\u5B9A\u7684\uFF1B</li><li>\u670D\u52A1\u5458\u5C31\u9700\u8981\u53BB\u201C\u7B49\u5F85\uFF08wait\uFF09\u201D\uFF1B</li><li>\u53A8\u5E08\u628A\u83DC\u505A\u5B8C\u4E4B\u540E\uFF0C\u6309\u4E00\u4E0B\u94C3\uFF0C\u8FD9\u91CC\u7684\u6309\u94C3\u5C31\u662F\u201C\u901A\u77E5\uFF08nofity\uFF09\u201D\uFF1B</li><li>\u670D\u52A1\u5458\u542C\u5230\u94C3\u58F0\u4E4B\u540E\u5C31\u77E5\u9053\u83DC\u505A\u597D\u4E86\uFF0C\u4ED6\u53EF\u4EE5\u53BB\u7AEF\u83DC\u4E86\u3002</li></ol><h3 id="_1-2-2-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-2-2-\u7B80\u4ECB" aria-hidden="true">#</a> 1.2.2 \u7B80\u4ECB</h3><p>\u7B49\u5F85/\u901A\u77E5\u673A\u5236\uFF0C\u662F\u6307\u4E00\u4E2A\u7EBF\u7A0BA\u8C03\u7528\u4E86\u5BF9\u8C61O\u7684wait()\u65B9\u6CD5\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\uFF0C\u800C\u53E6\u4E00\u4E2A\u7EBF\u7A0BB\u8C03\u7528\u4E86\u5BF9\u8C61O\u7684notify()/notifyAll()\u65B9\u6CD5\uFF0C\u7EBF\u7A0BA\u6536\u5230\u901A\u77E5\u540E\u9000\u51FA\u7B49\u5F85\u961F\u5217\uFF0C\u8FDB\u5165\u53EF\u8FD0\u884C\u72B6\u6001\uFF0C\u8FDB\u800C\u6267\u884C\u540E\u7EED\u64CD\u4F5C\u3002\u4E0A\u8BC9\u4E24\u4E2A\u7EBF\u7A0B\u901A\u8FC7\u5BF9\u8C61O\u6765\u5B8C\u6210\u4EA4\u4E92\uFF0C\u800C\u5BF9\u8C61\u4E0A\u7684<strong>wait()\u65B9\u6CD5</strong>\u548C<strong>notify()/notifyAll()\u65B9\u6CD5</strong>\u7684\u5173\u7CFB\u5C31\u5982\u540C\u5F00\u5173\u4FE1\u53F7\u4E00\u6837\uFF0C\u7528\u6765\u5B8C\u6210\u7B49\u5F85\u65B9\u548C\u901A\u77E5\u65B9\u4E4B\u95F4\u7684\u4EA4\u4E92\u5DE5\u4F5C\u3002</p><h3 id="_1-3-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u7684\u76F8\u5173\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-3-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u7684\u76F8\u5173\u65B9\u6CD5" aria-hidden="true">#</a> 1.3 \u7B49\u5F85/\u901A\u77E5\u673A\u5236\u7684\u76F8\u5173\u65B9\u6CD5</h3><table><thead><tr><th>\u65B9\u6CD5\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>notify()</td><td>\u968F\u673A\u5524\u9192\u7B49\u5F85\u961F\u5217\u4E2D\u7B49\u5F85<strong>\u540C\u4E00\u5171\u4EAB\u8D44\u6E90\u7684\u201C\u4E00\u4E2A\u7EBF\u7A0B\u201D</strong>\uFF0C\u5E76\u4F7F\u8BE5\u7EBF\u7A0B\u9000\u51FA\u7B49\u5F85\u961F\u5217\uFF0C\u8FDB\u5165\u53EF\u8FD0\u884C\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F<strong>notify()\u65B9\u6CD5\u4EC5\u901A\u77E5\u201C\u4E00\u4E2A\u7EBF\u7A0B\u201D</strong></td></tr><tr><td>notifyAll()</td><td>\u4F7F\u6240\u6709\u6B63\u5728\u7B49\u5F85\u961F\u5217\u4E2D\u7B49\u5F85\u540C\u4E00\u5171\u4EAB\u8D44\u6E90\u7684 <strong>\u201C\u5168\u90E8\u7EBF\u7A0B\u201D</strong> \u9000\u51FA\u7B49\u5F85\u961F\u5217\uFF0C\u8FDB\u5165\u53EF\u8FD0\u884C\u72B6\u6001\u3002\u6B64\u65F6\uFF0C\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u90A3\u4E2A\u7EBF\u7A0B\u6700\u5148\u6267\u884C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u662F\u968F\u673A\u6267\u884C\uFF0C\u8FD9\u53D6\u51B3\u4E8EJVM\u865A\u62DF\u673A\u7684\u5B9E\u73B0</td></tr><tr><td>wait()</td><td>\u4F7F\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u7EBF\u7A0B\u91CA\u653E\u5171\u4EAB\u8D44\u6E90\u9501\uFF0C\u7136\u540E\u4ECE\u8FD0\u884C\u72B6\u6001\u9000\u51FA\uFF0C\u8FDB\u5165\u7B49\u5F85\u961F\u5217\uFF0C\u76F4\u5230\u88AB\u518D\u6B21\u5524\u9192</td></tr><tr><td>wait(long)</td><td>\u8D85\u65F6\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\uFF0C\u8FD9\u91CC\u7684\u53C2\u6570\u65F6\u95F4\u662F\u6BEB\u79D2\uFF0C\u4E5F\u5C31\u662F\u7B49\u5F85\u957F\u8FBEn\u6BEB\u79D2\uFF0C\u5982\u679C\u6CA1\u6709\u901A\u77E5\u5C31\u8D85\u65F6\u8FD4\u56DE</td></tr><tr><td>wait(long\uFF0Cint)</td><td>\u5BF9\u4E8E\u8D85\u65F6\u65F6\u95F4\u66F4\u7EC6\u529B\u5EA6\u7684\u63A7\u5236\uFF0C\u53EF\u4EE5\u8FBE\u5230\u7EB3\u79D2</td></tr></tbody></table><h2 id="_2-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u7B49\u5F85-\u901A\u77E5\u673A\u5236\u7684\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u7B49\u5F85/\u901A\u77E5\u673A\u5236\u7684\u5B9E\u73B0</h2><h3 id="_2-1-\u5B9E\u73B0\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B9E\u73B0\u6848\u4F8B" aria-hidden="true">#</a> 2.1 \u5B9E\u73B0\u6848\u4F8B</h3><p>MyList.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyList</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;anyString&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadA.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadA</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

	<span class="token keyword">private</span> <span class="token class-name">Object</span> lock<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">ThreadA</span><span class="token punctuation">(</span><span class="token class-name">Object</span> lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>lock <span class="token operator">=</span> lock<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">MyList</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;wait begin &quot;</span>
							<span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					lock<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;wait end  &quot;</span>
							<span class="token operator">+</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ThreadB.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadB</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">Object</span> lock<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span><span class="token class-name">Object</span> lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>lock <span class="token operator">=</span> lock<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>lock<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token class-name">MyList</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">MyList</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						lock<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
						<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u5DF2\u53D1\u51FA\u901A\u77E5\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token punctuation">}</span>
					<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6DFB\u52A0\u4E86&quot;</span> <span class="token operator">+</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;\u4E2A\u5143\u7D20!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
					<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Run.java</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Run</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token class-name">Object</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token class-name">ThreadA</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadA</span><span class="token punctuation">(</span>lock<span class="token punctuation">)</span><span class="token punctuation">;</span>
			a<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token class-name">ThreadB</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadB</span><span class="token punctuation">(</span>lock<span class="token punctuation">)</span><span class="token punctuation">;</span>
			b<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u7684\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>2019-09-21 00:48:52 JRebel:  
wait begin 1568998132460
\u6DFB\u52A0\u4E861\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E862\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E863\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E864\u4E2A\u5143\u7D20!
\u5DF2\u53D1\u51FA\u901A\u77E5\uFF01
\u6DFB\u52A0\u4E865\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E866\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E867\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E868\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E869\u4E2A\u5143\u7D20!
\u6DFB\u52A0\u4E8610\u4E2A\u5143\u7D20!
wait end  1568998142540
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-synchronized\u5173\u952E\u5B57\u5728\u7EBF\u7A0B\u901A\u4FE1\u4E2D\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-2-synchronized\u5173\u952E\u5B57\u5728\u7EBF\u7A0B\u901A\u4FE1\u4E2D\u7684\u4F5C\u7528" aria-hidden="true">#</a> 2.2 synchronized\u5173\u952E\u5B57\u5728\u7EBF\u7A0B\u901A\u4FE1\u4E2D\u7684\u4F5C\u7528</h3><p><strong>synchronized\u5173\u952E\u5B57</strong>\u53EF\u4EE5\u5C06\u4EFB\u4F55\u4E00\u4E2A<strong>Object\u5BF9\u8C61\u4F5C\u4E3A\u540C\u6B65\u5BF9\u8C61</strong>\u770B\u5F85\uFF0C\u800C<strong>java\u4E3A\u6BCF\u4E2AObject \u90FD\u5B9E\u73B0\u4E86\u7B49\u5F85/\u901A\u77E5\uFF08wait/notify\uFF09\u673A\u5236\u7684\u76F8\u5173\u65B9\u6CD5</strong>\uFF0C\u4ED6\u4EEC\u5FC5\u987B\u7528synchronized\u5173\u952E\u5B57\u540C\u6B65\u7684Object\u7684\u4E34\u754C\u533A\u5185\u3002</p><ul><li>\u901A\u8FC7\u8C03\u7528wait()\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u5904\u4E8E\u4E34\u754C\u533A\u5185\u7684\u7EBF\u7A0B\u8FDB\u5165\u7B49\u5F85\u72B6\u6001\uFF0C\u540C\u65F6\u91CA\u653E\u88AB\u540C\u6B65\u5BF9\u8C61\u7684\u9501</li><li>\u800Cnotify()\u65B9\u6CD5\u53EF\u4EE5\u5524\u9192\u4E00\u4E2A\u56E0\u8C03\u7528wait\u64CD\u4F5C\u800C\u5904\u4E8E\u963B\u585E\u72B6\u6001\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u4F7F\u5176\u8FDB\u5165\u5C31\u7EEA\u72B6\u6001\u3002</li><li>\u88AB\u91CD\u65B0\u5524\u9192\u7684\u7EBF\u7A0B\u4F1A\u89C6\u56FE\u91CD\u65B0\u83B7\u5F97\u4E34\u754C\u533A\u7684\u63A7\u5236\u6743\u4E5F\u5C31\u662F\u9501\uFF0C\u5E76\u7EE7\u7EED\u6267\u884Cwait\u65B9\u6CD5\u4E4B\u540E\u7684\u4EE3\u7801\u3002\u5982\u679C\u53D1\u51FAnotify\u64CD\u4F5C\u65F6\u6CA1\u6709\u5904\u4E8E\u963B\u585E\u72B6\u6001\u4E2D\u7684\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u8BE5\u547D\u4EE4\u4F1A\u88AB\u5FFD\u7565\u3002</li></ul><h2 id="_3-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 3.\u76F8\u5173\u77E5\u8BC6\u70B9</h2><h3 id="_3-1-notify-\u9501\u4E0D\u91CA\u653E" tabindex="-1"><a class="header-anchor" href="#_3-1-notify-\u9501\u4E0D\u91CA\u653E" aria-hidden="true">#</a> 3.1 notify()\u9501\u4E0D\u91CA\u653E</h3><p>\u5F53\u65B9\u6CD5wait()\u88AB\u6267\u884C\u540E\uFF0C\u9501\u81EA\u52A8\u88AB\u91CA\u653E\uFF0C\u4F46\u6267\u884C\u73A9notify()\u65B9\u6CD5\u540E\uFF0C\u9501\u4E0D\u4F1A\u81EA\u52A8\u91CA\u653E\u3002<strong>\u5FC5\u987B\u6267\u884C\u5B8Cnotify()\u65B9\u6CD5\u6240\u5728\u7684synchronized\u4EE3\u7801\u5757</strong>\u540E\u624D\u91CA\u653E\u3002</p><h3 id="_3-2-thread-join" tabindex="-1"><a class="header-anchor" href="#_3-2-thread-join" aria-hidden="true">#</a> 3.2 Thread.join()</h3><h4 id="_3-2-1-thread-join-\u4F7F\u7528\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-1-thread-join-\u4F7F\u7528\u80CC\u666F" aria-hidden="true">#</a> 3.2.1 Thread.join()\u4F7F\u7528\u80CC\u666F</h4><p>\u5728\u5F88\u591A\u60C5\u51B5\u4E0B\uFF0C\u4E3B\u7EBF\u7A0B\u751F\u6210\u5E76\u8D77\u52A8\u4E86\u5B50\u7EBF\u7A0B\uFF0C\u5982\u679C\u5B50\u7EBF\u7A0B\u91CC\u8981\u8FDB\u884C\u5927\u91CF\u7684\u8017\u65F6\u7684\u8FD0\u7B97\uFF0C\u4E3B\u7EBF\u7A0B\u5F80\u5F80\u5C06\u4E8E\u5B50\u7EBF\u7A0B\u4E4B\u524D\u7ED3\u675F\uFF0C\u4F46\u662F\u5982\u679C\u4E3B\u7EBF\u7A0B\u5904\u7406\u5B8C\u5176\u4ED6\u7684\u4E8B\u52A1\u540E\uFF0C\u9700\u8981\u7528\u5230\u5B50\u7EBF\u7A0B\u7684\u5904\u7406\u7ED3\u679C\uFF0C\u4E5F\u5C31\u662F<strong>\u4E3B\u7EBF\u7A0B\u9700\u8981\u7B49\u5F85\u5B50\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\u4E4B\u540E\u518D\u7ED3\u675F\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u8981\u7528\u5230join()\u65B9\u6CD5\u4E86\u3002\u53E6\u5916\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u9700\u8981\u7B49\u5F85\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u4E5F\u9700\u8981\u7528\u5230join()\u65B9\u6CD5\u3002</strong></p><p>Thread\u7C7B\u9664\u4E86\u63D0\u4F9Bjoin()\u65B9\u6CD5\u4E4B\u5916\uFF0C\u8FD8\u63D0\u4F9B\u4E86join(long millis)\u3001join(long millis, int nanos)\u4E24\u4E2A\u5177\u6709\u8D85\u65F6\u7279\u6027\u7684\u65B9\u6CD5\u3002\u8FD9\u4E24\u4E2A\u8D85\u65F6\u65B9\u6CD5\u8868\u793A\uFF0C\u5982\u679C\u7EBF\u7A0Bthread\u5728\u6307\u5B9A\u7684\u8D85\u65F6\u65F6\u95F4\u6CA1\u6709\u7EC8\u6B62\uFF0C\u90A3\u4E48\u5C06\u4F1A\u4ECE\u8BE5\u8D85\u65F6\u65B9\u6CD5\u4E2D\u8FD4\u56DE\u3002</p><h4 id="_3-2-2-\u5B50\u7EBF\u7A0B\u6267\u884C\u5B8C\u4E3B\u7EBF\u7A0B\u624D\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u5B50\u7EBF\u7A0B\u6267\u884C\u5B8C\u4E3B\u7EBF\u7A0B\u624D\u9000\u51FA" aria-hidden="true">#</a> 3.2.2 \u5B50\u7EBF\u7A0B\u6267\u884C\u5B8C\u4E3B\u7EBF\u7A0B\u624D\u9000\u51FA</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Test {

	public static void main(String[] args) throws InterruptedException {

		MyThread threadTest = new MyThread();
		threadTest.start();

		//Thread.sleep(?);//\u56E0\u4E3A\u4E0D\u77E5\u9053\u5B50\u7EBF\u7A0B\u8981\u82B1\u7684\u65F6\u95F4\u8FD9\u91CC\u4E0D\u77E5\u9053\u586B\u591A\u5C11\u65F6\u95F4
		threadTest.join();
		System.out.println(&quot;\u6211\u60F3\u5F53threadTest\u5BF9\u8C61\u6267\u884C\u5B8C\u6BD5\u540E\u6211\u518D\u6267\u884C&quot;);
	}
	static public class MyThread extends Thread {

		@Override
		public void run() {
			System.out.println(&quot;\u6211\u60F3\u5148\u6267\u884C&quot;);
		}

	}
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4EC5\u4EC5\u52A0\u4E0A\u4E86\u4E00\u53E5\uFF1AthreadTest.join();\u3002\u5728\u8FD9\u91CCjoin\u65B9\u6CD5\u7684\u4F5C\u7528\u5C31\u662F<strong>\u4E3B\u7EBF\u7A0B\u9700\u8981\u7B49\u5F85\u5B50\u7EBF\u7A0B\u6267\u884C\u5B8C\u6210\u4E4B\u540E\u518D\u7ED3\u675F</strong>\u3002</p>`,43),i=[p];function c(o,l){return s(),a("div",null,i)}const r=n(e,[["render",c],["__file","java-thread-y-thread-notify.html.vue"]]);export{r as default};
