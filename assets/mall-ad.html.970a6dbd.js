import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,d as e}from"./app.40d67f5c.js";const t={},p=e(`<h1 id="mall\u4E2D\u5E7F\u544A-\u8F6E\u64AD\u56FE-\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#mall\u4E2D\u5E7F\u544A-\u8F6E\u64AD\u56FE-\u8BBE\u8BA1" aria-hidden="true">#</a> mall\u4E2D\u5E7F\u544A(\u8F6E\u64AD\u56FE)\u8BBE\u8BA1</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u7528\u4E8E\u7BA1\u7406\u9996\u9875\u663E\u793A\u7684\u8F6E\u64AD\u5E7F\u544A\u4FE1\u606F\u3002</p><h2 id="_2-\u6570\u636E\u5E93\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_2-\u6570\u636E\u5E93\u8BBE\u8BA1" aria-hidden="true">#</a> 2. \u6570\u636E\u5E93\u8BBE\u8BA1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>create table sms_home_advertise
(
   id                   bigint not null auto_increment,
   name                 varchar(100) comment &#39;\u540D\u79F0&#39;,
   type                 int(1) comment &#39;\u8F6E\u64AD\u4F4D\u7F6E\uFF1A0-&gt;PC\u9996\u9875\u8F6E\u64AD\uFF1B1-&gt;app\u9996\u9875\u8F6E\u64AD&#39;,
   pic                  varchar(500) comment &#39;\u56FE\u7247\u5730\u5740&#39;,
   start_time           datetime comment &#39;\u5F00\u59CB\u65F6\u95F4&#39;,
   end_time             datetime comment &#39;\u7ED3\u675F\u65F6\u95F4&#39;,
   status               int(1) comment &#39;\u4E0A\u4E0B\u7EBF\u72B6\u6001\uFF1A0-&gt;\u4E0B\u7EBF\uFF1B1-&gt;\u4E0A\u7EBF&#39;,
   click_count          int comment &#39;\u70B9\u51FB\u6570&#39;,
   order_count          int comment &#39;\u4E0B\u5355\u6570&#39;,
   url                  varchar(500) comment &#39;\u94FE\u63A5\u5730\u5740&#39;,
   note                 varchar(500) comment &#39;\u5907\u6CE8&#39;,
   sort                 int default 0 comment &#39;\u6392\u5E8F&#39;,
   primary key (id)
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4EE3\u7801\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-\u4EE3\u7801\u8BBE\u8BA1" aria-hidden="true">#</a> 3. \u4EE3\u7801\u8BBE\u8BA1</h2><h3 id="_3-1-\u5206\u9875\u67E5\u8BE2\u5E7F\u544A" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5206\u9875\u67E5\u8BE2\u5E7F\u544A" aria-hidden="true">#</a> 3.1 \u5206\u9875\u67E5\u8BE2\u5E7F\u544A</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SmsHomeAdvertise</span><span class="token punctuation">&gt;</span></span> <span class="token function">list</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Integer</span> type<span class="token punctuation">,</span> <span class="token class-name">String</span> endTime<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageNum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">PageHelper</span><span class="token punctuation">.</span><span class="token function">startPage</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SmsHomeAdvertiseExample</span> example <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SmsHomeAdvertiseExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">SmsHomeAdvertiseExample<span class="token punctuation">.</span>Criteria</span> criteria <span class="token operator">=</span> example<span class="token punctuation">.</span><span class="token function">createCriteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        criteria<span class="token punctuation">.</span><span class="token function">andNameLike</span><span class="token punctuation">(</span><span class="token string">&quot;%&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;%&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        criteria<span class="token punctuation">.</span><span class="token function">andTypeEqualTo</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>endTime<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> startStr <span class="token operator">=</span> endTime <span class="token operator">+</span> <span class="token string">&quot; 00:00:00&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> endStr <span class="token operator">=</span> endTime <span class="token operator">+</span> <span class="token string">&quot; 23:59:59&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">SimpleDateFormat</span> sdf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> start <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            start <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>startStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">Date</span> end <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            end <span class="token operator">=</span> sdf<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>endStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ParseException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> end <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            criteria<span class="token punctuation">.</span><span class="token function">andEndTimeBetween</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    example<span class="token punctuation">.</span><span class="token function">setOrderByClause</span><span class="token punctuation">(</span><span class="token string">&quot;sort desc&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> advertiseMapper<span class="token punctuation">.</span><span class="token function">selectByExample</span><span class="token punctuation">(</span>example<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u65B0\u589E\u5E7F\u544A" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65B0\u589E\u5E7F\u544A" aria-hidden="true">#</a> 3.2 \u65B0\u589E\u5E7F\u544A</h3><p>\u521D\u59CB\u5316\u70B9\u51FB\u6B21\u6570\u548C\u8BA2\u5355\u6B21\u6570\u662F\u5728\u4EE3\u7801\u5C42\u505A\u7684</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">SmsHomeAdvertise</span> advertise<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        advertise<span class="token punctuation">.</span><span class="token function">setClickCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        advertise<span class="token punctuation">.</span><span class="token function">setOrderCount</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> advertiseMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>advertise<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u754C\u9762\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_4-\u754C\u9762\u8BBE\u8BA1" aria-hidden="true">#</a> 4. \u754C\u9762\u8BBE\u8BA1</h2><h3 id="_4-1-\u7BA1\u7406\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7BA1\u7406\u7AEF" aria-hidden="true">#</a> 4.1 \u7BA1\u7406\u7AEF</h3><h4 id="_4-1-1-\u5E7F\u544A\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#_4-1-1-\u5E7F\u544A\u5217\u8868" aria-hidden="true">#</a> 4.1.1 \u5E7F\u544A\u5217\u8868</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320185355632.png" alt="image-20220320185355632" loading="lazy"></p><h4 id="_4-1-2-\u7F16\u8F91\u5E7F\u544A" tabindex="-1"><a class="header-anchor" href="#_4-1-2-\u7F16\u8F91\u5E7F\u544A" aria-hidden="true">#</a> 4.1.2 \u7F16\u8F91\u5E7F\u544A</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320185414101.png" alt="image-20220320185414101" loading="lazy"></p><h3 id="_4-2-\u79FB\u52A8\u7AEF" tabindex="-1"><a class="header-anchor" href="#_4-2-\u79FB\u52A8\u7AEF" aria-hidden="true">#</a> 4.2 \u79FB\u52A8\u7AEF</h3><h4 id="_4-2-1-\u9996\u9875\u8F6E\u64AD\u5E7F\u544A" tabindex="-1"><a class="header-anchor" href="#_4-2-1-\u9996\u9875\u8F6E\u64AD\u5E7F\u544A" aria-hidden="true">#</a> 4.2.1 \u9996\u9875\u8F6E\u64AD\u5E7F\u544A</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20220320185525867.png" alt="image-20220320185525867" loading="lazy"></p><h2 id="_5-\u4F7F\u7528\u611F\u53D7" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528\u611F\u53D7" aria-hidden="true">#</a> 5. \u4F7F\u7528\u611F\u53D7</h2><h3 id="_5-1-\u6269\u5C55\u6027\u4E0D\u5F3A" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6269\u5C55\u6027\u4E0D\u5F3A" aria-hidden="true">#</a> 5.1 \u6269\u5C55\u6027\u4E0D\u5F3A</h3><p>\u73B0\u5728\u53EA\u6709\uFF0CPC\u9996\u9875\u8F6E\u64AD\uFF0Capp\u9996\u9875\u8F6E\u64AD\u3002\u5982\u679C\u6211\u4EEC\u5176\u4ED6\u5730\u65B9\u9700\u8981\u8F6E\u64AD\uFF0C\u6211\u4EEC\u9700\u8981\u6539\u4EE3\u7801\u3002</p><p>\u5982\u679C\u914D\u4E0A\u5B57\u5178\u8868\u7684\u8BDD\uFF0C\u60C5\u51B5\u4F1A\u597D\u4E00\u70B9</p>`,24),c=[p];function o(i,l){return a(),s("div",null,c)}const d=n(t,[["render",o],["__file","mall-ad.html.vue"]]);export{d as default};
