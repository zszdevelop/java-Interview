import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as t}from"./app.feaa9477.js";const p={},e=t(`<h1 id="rabbitmq\u8FDB\u9636-\u4F18\u5148\u7EA7\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u8FDB\u9636-\u4F18\u5148\u7EA7\u961F\u5217" aria-hidden="true">#</a> RabbitMQ\u8FDB\u9636 - \u4F18\u5148\u7EA7\u961F\u5217</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4F18\u5148\u7EA7\u9AD8\u7684\u6D88\u606F\u5177\u5907 <strong>\u4F18\u5148\u88AB\u6D88\u8D39</strong> \u7684\u7279\u6743\u3002</p><h2 id="_2-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 2. \u4EE3\u7801\u5B9E\u73B0</h2><p>\u5728\u5B9A\u4E49\u961F\u5217\u65F6\uFF0C\u53EF\u901A\u8FC7\u53C2\u6570 <code>x-max-priority</code> \u6765\u6307\u58F0\u660E\u6B64\u961F\u5217\u7684\u6700\u5927\u4F18\u5148\u7EA7\u522B\u3002\u5728\u53D1\u9001\u6D88\u606F\u65F6\uFF0C\u7ED9\u6D88\u606F\u8BBE\u7F6E\u7684\u6700\u5927\u7EA7\u522B\u4E0D\u80FD\u8D85\u8FC7\u8FD9\u4E2A\u503C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5B9A\u4E49\u961F\u5217\u652F\u6301\u7684\u6700\u5927\u7EA7\u522B</span>
<span class="token keyword">final</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> arguments <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
arguments<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;x-max-priority&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
channel<span class="token punctuation">.</span><span class="token function">queueDeclare</span><span class="token punctuation">(</span><span class="token string">&quot;queue.priority&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u53D1\u9001\u6D88\u606F\u65F6\u8BBE\u7F6E\u6D88\u606F\u7684\u4F18\u5148\u7EA7</span>
<span class="token keyword">final</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span> builder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
builder<span class="token punctuation">.</span><span class="token function">deliveryMode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6301\u4E45\u5316\u6D88\u606F</span>
builder<span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u8BBE\u7F6E\u6D88\u606F\u7684\u4F18\u5148\u7EA7\u522B</span>
channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span><span class="token constant">EXCHANGE_NAME</span><span class="token punctuation">,</span>
                     <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                     builder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                     <span class="token string">&quot;test&quot;</span><span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                    <span class="token punctuation">)</span><span class="token punctuation">;</span>

 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 web \u4E2D\u5C55\u793A\u7684\u7AD6\u7EBF\u662F <code>Pri</code></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220923204004494.png" alt="image-20220923204004494" loading="lazy"></p>`,8),c=[e];function o(i,l){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","rabbitmq-x-priority.html.vue"]]);export{k as default};
