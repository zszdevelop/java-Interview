import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,e as i,d as l,r as o}from"./app.b9c1d23f.js";const c={},r=i(`<h1 id="oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" aria-hidden="true">#</a> oracle\u5206\u533A\u8868-\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A</h1><h2 id="_1-\u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868" tabindex="-1"><a class="header-anchor" href="#_1-\u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868" aria-hidden="true">#</a> 1. \u521B\u5EFA\u6309\u6708\u5206\u533A\u7684\u5206\u533A\u8868</h2><h3 id="_1-1-\u521B\u5EFA\u5206\u533A\u8868" tabindex="-1"><a class="header-anchor" href="#_1-1-\u521B\u5EFA\u5206\u533A\u8868" aria-hidden="true">#</a> 1.1 \u521B\u5EFA\u5206\u533A\u8868</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> intervalpart <span class="token punctuation">(</span>c1 NUMBER<span class="token punctuation">,</span> c3 <span class="token keyword">DATE</span><span class="token punctuation">)</span>

<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE <span class="token punctuation">(</span>c3<span class="token punctuation">)</span>

   <span class="token keyword">INTERVAL</span> <span class="token punctuation">(</span> NUMTOYMINTERVAL <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;MONTH&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>

   <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> part1

       <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>TO_DATE <span class="token punctuation">(</span><span class="token string">&#39;01/12/2010&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/YYYY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token keyword">PARTITION</span> part2

       <span class="token keyword">VALUES</span> LESS THAN <span class="token punctuation">(</span>TO_DATE <span class="token punctuation">(</span><span class="token string">&#39;02/12/2010&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;MM/DD/YYYY&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

  <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F\uFF1A<strong>\u5982\u679C\u5728\u5EFAInterval\u5206\u533A\u8868\u662F\u6CA1\u6709\u628A\u6240\u6709\u7684\u5206\u533A\u5199\u5B8C\u6210\uFF0C\u5728\u63D2\u5165\u76F8\u5173\u6570\u636E\u540E</strong>\u4F1A\u81EA\u52A8\u751F\u6210\u5206\u533A</strong></p><h3 id="_1-2-\u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_1-2-\u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A" aria-hidden="true">#</a> 1.2 \u67E5\u770B\u73B0\u5728\u8868\u7684\u5206\u533A:</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> table_name<span class="token punctuation">,</span>partition_name <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;INTERVALPART&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201103234450655.png" alt="image-20201103234450655" loading="lazy"></p><h3 id="_1-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_1-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E" aria-hidden="true">#</a> 1.3 \u63D2\u5165\u6D4B\u8BD5\u6570\u636E\uFF1A</h3><p>\u5411intervalpart \u8868\u63D2\u51652020.1.1\u53F7\u540E\u768419\u4E2A\u6708\u6570\u636E</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">begin</span>
<span class="token keyword">for</span> i <span class="token operator">in</span> <span class="token number">0</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">11</span> <span class="token keyword">loop</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> intervalpart <span class="token keyword">values</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>add_months<span class="token punctuation">(</span>to_date<span class="token punctuation">(</span><span class="token string">&#39;2020-1-1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span> <span class="token keyword">loop</span> <span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>
 <span class="token keyword">end</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**\u8865\u5145\uFF1A**add_months()\u51FD\u6570\u83B7\u53D6\u524D\u4E00\u4E2A\u6708\u6216\u8005\u4E0B\u4E00\u4E2A\u6708\u7684\u6708\u4EFD\uFF0C \u53C2\u6570\u4E2D \u8D1F\u6570 \u4EE3\u8868 \u5F80\u524D\uFF0C \u6B63\u6570 \u4EE3\u8868 \u5F80\u540E\u3002</p><ul><li><p>\u4E0A\u4E00\u4E2A\u6708</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>add_months<span class="token punctuation">(</span>trunc<span class="token punctuation">(</span>sysdate<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;yyyymm&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u4E0B\u4E00\u4E2A\u6708</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> to_char<span class="token punctuation">(</span>add_months<span class="token punctuation">(</span>trunc<span class="token punctuation">(</span>sysdate<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&#39;yyyymm&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> dual<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201103234904783.png" alt="image-20201103234904783" loading="lazy"></p></li></ul><h3 id="_1-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_1-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" aria-hidden="true">#</a> 1.4 \u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A\uFF1A</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> table_name<span class="token punctuation">,</span>partition_name <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;INTERVALPART&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201103235039044.png" alt="image-20201103235039044" loading="lazy"></p><h3 id="_1-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_1-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9" aria-hidden="true">#</a> 1.5 \u67E5\u770B\u5206\u533A\u5185\u5BB9\uFF1A</h3><ul><li><p>\u67E5\u8BE2\u6240\u6709</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from INTERVALPART;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201103235352870.png" alt="image-20201103235352870" loading="lazy"></p></li><li><p>\u67E5\u8BE2\u6307\u5B9A\u5206\u533A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>select * from INTERVALPART partition(part2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201103235835676.png" alt="image-20201103235835676" loading="lazy"></p></li></ul><h2 id="_2-\u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868" aria-hidden="true">#</a> 2. \u521B\u5EFA\u4E00\u4E2A\u4EE5\u5929\u4E3A\u95F4\u9694\u7684\u5206\u533A\u8868\uFF1A</h2><h3 id="_2-1-\u521B\u5EFA\u5206\u533A\u8868" tabindex="-1"><a class="header-anchor" href="#_2-1-\u521B\u5EFA\u5206\u533A\u8868" aria-hidden="true">#</a> 2.1 \u521B\u5EFA\u5206\u533A\u8868\uFF1A</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> dave
<span class="token punctuation">(</span>
		id    number<span class="token punctuation">,</span>
		dt    <span class="token keyword">date</span>
<span class="token punctuation">)</span>
<span class="token keyword">partition</span> <span class="token keyword">by</span> range <span class="token punctuation">(</span>dt<span class="token punctuation">)</span>
	<span class="token keyword">INTERVAL</span> <span class="token punctuation">(</span>NUMTODSINTERVAL<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;day&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">(</span>
 		<span class="token keyword">partition</span> p100101 <span class="token keyword">values</span> less than <span class="token punctuation">(</span>to_date<span class="token punctuation">(</span><span class="token string">&#39;2020-01-01&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u67E5\u770B\u8868\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_2-2-\u67E5\u770B\u8868\u5206\u533A" aria-hidden="true">#</a> 2.2 \u67E5\u770B\u8868\u5206\u533A</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> table_name<span class="token punctuation">,</span>partition_name <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;DAVE&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201104000207367.png" alt="image-20201104000207367" loading="lazy"></p><h3 id="_2-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#_2-3-\u63D2\u5165\u6D4B\u8BD5\u6570\u636E" aria-hidden="true">#</a> 2.3 \u63D2\u5165\u6D4B\u8BD5\u6570\u636E</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">begin</span>
<span class="token keyword">for</span> i <span class="token operator">in</span> <span class="token number">1</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">12</span> <span class="token keyword">loop</span>
<span class="token keyword">insert</span> <span class="token keyword">into</span> dave <span class="token keyword">values</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>trunc<span class="token punctuation">(</span>to_date<span class="token punctuation">(</span><span class="token string">&#39;2020-1-1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;yyyy-mm-dd&#39;</span><span class="token punctuation">)</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">end</span> <span class="token keyword">loop</span><span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>
<span class="token keyword">end</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" tabindex="-1"><a class="header-anchor" href="#_2-4-\u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A" aria-hidden="true">#</a> 2.4 \u89C2\u5BDF\u81EA\u52A8\u521B\u5EFA\u7684\u5206\u533A\uFF1A</h3><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code> <span class="token keyword">select</span> table_name<span class="token punctuation">,</span>partition_name <span class="token keyword">from</span> user_tab_partitions <span class="token keyword">where</span> table_name<span class="token operator">=</span><span class="token string">&#39;DAVE&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201104000413036.png" alt="image-20201104000413036" loading="lazy"></p><h3 id="_2-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_2-5-\u67E5\u770B\u5206\u533A\u5185\u5BB9" aria-hidden="true">#</a> 2.5 \u67E5\u770B\u5206\u533A\u5185\u5BB9\uFF1A</h3><ul><li><p>\u67E5\u770B\u6240\u6709</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201104000802542.png" alt="image-20201104000802542" loading="lazy"></p></li><li><p>\u67E5\u770B\u6307\u5B9A\u5206\u533A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> dave <span class="token keyword">partition</span><span class="token punctuation">(</span>SYS_P54<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20201104000653069.png" alt="image-20201104000653069" loading="lazy"></p></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,32),d={href:"https://blog.csdn.net/tianlesoftware/article/details/5662337",target:"_blank",rel:"noopener noreferrer"},u=l("\u5206\u533A\u8868 \u4E4B Interval\u5206\u533A \u548C \u865A\u62DF\u5217 \u6309\u661F\u671F\u5206\u533A\u8868");function k(m,g){const s=o("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",d,[u,p(s)])])])}const h=a(c,[["render",k],["__file","oracle-y-partition-create.html.vue"]]);export{h as default};
