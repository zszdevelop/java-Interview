import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.dd6287fd.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="rabbitmq\u6D88\u8D39\u7AEF\u7684ack\u548C\u91CD\u56DE\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#rabbitmq\u6D88\u8D39\u7AEF\u7684ack\u548C\u91CD\u56DE\u961F\u5217" aria-hidden="true">#</a> RabbitMQ\u6D88\u8D39\u7AEF\u7684ack\u548C\u91CD\u56DE\u961F\u5217</h1><h2 id="_1-\u6D88\u8D39\u7AEF\u7684\u7B7E\u6536\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_1-\u6D88\u8D39\u7AEF\u7684\u7B7E\u6536\u65B9\u5F0F" aria-hidden="true">#</a> 1. \u6D88\u8D39\u7AEF\u7684\u7B7E\u6536\u65B9\u5F0F\uFF1A</h2><p>\u5206\u4E3A\u81EA\u52A8\u7B7E\u6536\u548C\u624B\u52A8\u7B7E\u6536\u3002</p><ul><li><p>\u81EA\u52A8\u7B7E\u6536\uFF1Achannel.basicConsume\u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570(autoAck)\u8BBE\u7F6E\u4E3Atrue\u5373\u53EF;</p></li><li><p>\u624B\u52A8\u7B7E\u6536\uFF1A\u5C06\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8BBE\u7F6E\u4E3Afalse\u5373\u53EF\u3002</p></li></ul><p>\u624B\u52A8\u7B7E\u6536\u53C8\u5206\u4E3A\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li><p>\u624B\u52A8Ack</p><p>Ack\u8868\u793A\u624B\u5DE5\u7B7E\u6536\u540E\u6D88\u606F\u5904\u7406\u6210\u529F\uFF1B</p></li><li><p>Nack</p><p>Nack\u8868\u793A\u624B\u52A8\u7B7E\u5408\u540E\u6D88\u606F\u5904\u7406\u5931\u8D25\u3002\u8FD9\u4E2A\u65F6\u5019broker\u4F1A\u81EA\u52A8\u91CD\u65B0\u53D1\u9001\u6D88\u606F</p></li></ul><h2 id="_2-\u4F7F\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u573A\u666F" aria-hidden="true">#</a> 2. \u4F7F\u7528\u573A\u666F</h2><ol><li>\u6D88\u8D39\u7AEF\u8FDB\u884C\u6D88\u8D39\u7684\u65F6\u5019\uFF0C\u7531\u4E8E\u4E1A\u52A1\u5F02\u5E38\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FDB\u884C\u65E5\u5FD7\u8BB0\u5F55\uFF0C\u540E\u7EED\u505A\u8865\u507F\u64CD\u4F5C\u3002</li><li>\u6D88\u8D39\u7AEF\u7531\u4E8E\u670D\u52A1\u5668\u5B95\u673A\u7B49\u4E25\u91CD\u95EE\u9898\uFF0C\u6BD4\u5982\u6D88\u606F\u6D88\u8D39\u4E00\u534A\u65F6\u5B95\u673A\uFF0C<code>RabbitMQ</code>\u65E2\u6536\u4E0D\u5230<code>ack</code>\u4E5F\u6536\u4E0D\u5230<code>nack</code>\uFF0C\u6B64\u65F6\u6D88\u8D39\u7AEF\u91C7\u7528\u624B\u5DE5<code>ack</code>\uFF0C\u7B49\u6D88\u8D39\u7AEF\u670D\u52A1\u91CD\u542F\u597D\u540E\uFF0C<code>RabbitMQ</code>\u56DE\u91CD\u53D1\u6B64\u672A\u80FD\u6D88\u8D39\u6210\u529F\u7684\u6D88\u606F\uFF0C\u4FDD\u969C\u6D88\u606F\u6D88\u8D39\u6210\u529F</li></ol><h2 id="_3-\u6D88\u8D39\u7AEF\u7684\u91CD\u56DE\u961F\u5217" tabindex="-1"><a class="header-anchor" href="#_3-\u6D88\u8D39\u7AEF\u7684\u91CD\u56DE\u961F\u5217" aria-hidden="true">#</a> 3. \u6D88\u8D39\u7AEF\u7684\u91CD\u56DE\u961F\u5217</h2><p>\u6D88\u8D39\u7AEF\u91CD\u56DE\u961F\u5217\u662F\u4E3A\u4E86\u5BF9\u6CA1\u6709\u5904\u7406\u6210\u529F\u7684\u6D88\u606F\uFF0C\u628A\u6D88\u606F\u91CD\u65B0\u9012\u7ED9Broker</p><p>\u4E00\u822C\u6211\u4EEC\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\uFF0C\u90FD\u4F1A\u5173\u95ED\u91CD\u56DE\u961F\u5217</p><h2 id="_4-\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_4-\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> 4. \u4EE3\u7801\u5B9E\u73B0</h2><h3 id="_4-1-producer" tabindex="-1"><a class="header-anchor" href="#_4-1-producer" aria-hidden="true">#</a> 4.1 Producer</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyg<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>javaclient<span class="token punctuation">.</span>consumer_ack</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">HashMap</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Map</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">AMQP</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Channel</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">Connection</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ConnectionFactory</span></span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n * \u6D88\u8D39\u8005\u624B\u5DE5ack\u548Cnack\n * \n * <span class="token keyword">@author</span> wyg0405@gmail.com\n * <span class="token keyword">@date</span> 2019-11-22 13:25\n * <span class="token keyword">@since</span> JDK1.8\n * <span class="token keyword">@version</span> V1.0\n */</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> HOST <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> PORT <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> USERNAME <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> PASSWORD <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        factory<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span>HOST<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        factory<span class="token punctuation">.</span><span class="token function">setVirtualHost</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        factory<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span>PORT<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        factory<span class="token punctuation">.</span><span class="token function">setUsername</span><span class="token punctuation">(</span>USERNAME<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        factory<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span>PASSWORD<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">newConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Channel</span> channel <span class="token operator">=</span> connection<span class="token punctuation">.</span><span class="token function">createChannel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> exchangeName <span class="token operator">=</span> <span class="token string">&quot;test_ack_exchange&quot;</span><span class="token punctuation">;</span>\n        <span class="token class-name">String</span> routingKey <span class="token operator">=</span> <span class="token string">&quot;ack.abc&quot;</span><span class="token punctuation">;</span>\n        <span class="token comment">// \u7533\u660Eexchange</span>\n        channel<span class="token punctuation">.</span><span class="token function">exchangeDeclare</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> <span class="token string">&quot;topic&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;num&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties</span> props <span class="token operator">=</span>\n                <span class="token keyword">new</span> <span class="token class-name">AMQP<span class="token punctuation">.</span>BasicProperties<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">deliveryMode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contentEncoding</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">headers</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token class-name">String</span> msg <span class="token operator">=</span> <span class="token string">&quot;\u8FD9\u662F\u7B2C&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;\u6761ack\u6D88\u606F&quot;</span><span class="token punctuation">;</span>\n            channel<span class="token punctuation">.</span><span class="token function">basicPublish</span><span class="token punctuation">(</span>exchangeName<span class="token punctuation">,</span> routingKey<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> props<span class="token punctuation">,</span> msg<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token string">&quot;UTF-8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        channel<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        connection<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-consumer" tabindex="-1"><a class="header-anchor" href="#_4-2-consumer" aria-hidden="true">#</a> 4.2 Consumer</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>wyg<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>javaclient<span class="token punctuation">.</span>consumer_ack</span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeoutException</span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>rabbitmq<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n * \u6D88\u8D39\u8005\u624B\u5DE5ack\u548Cnack\n * \n * <span class="token keyword">@author</span> wyg0405@gmail.com\n * <span class="token keyword">@date</span> 2019-11-22 14:07\n * <span class="token keyword">@since</span> JDK1.8\n * <span class="token keyword">@version</span> V1.0\n */</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> HOST <span class="token operator">=</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> PORT <span class="token operator">=</span> <span class="token number">5672</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> USERNAME <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> PASSWORD <span class="token operator">=</span> <span class="token string">&quot;guset&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>\n        <span class="token class-name">ConnectionFactory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConnectionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u8FD0\u884C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_5-\u8FD0\u884C\u7ED3\u679C" aria-hidden="true">#</a> 5. \u8FD0\u884C\u7ED3\u679C</h2><p>\u53D1\u73B0\u524D3\u6761\u6D88\u606F\u6210\u529F\u6D88\u8D39\uFF0C\u624B\u5DE5\u53D1<code>ack</code>\u7ED9Broker</p><p>\u6700\u540E3\u6761\u6D88\u606F\uFF0C\u53D1<code>nack</code>\u7ED9<code>Broker</code>\uFF0C\u5E76\u4E0D\u65AD\u91CD\u56DE\u961F\u5217\u5C3E\u7AEF\uFF0Cbroker\u518D\u5C06\u5176\u63A8\u7ED9\u6D88\u8D39\u7AEF\uFF0C\u4E00\u76F4\u5FAA\u73AF\u6D88\u8D39\u5931\u8D25</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210519170938194.png" alt="image-20210519170938194"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 21);
const _hoisted_22 = {
  href: "https://cloud.tencent.com/developer/article/1478662",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_23 = /* @__PURE__ */ createTextVNode("RabbitMQ \u9AD8\u7EA7\u7BC7\u516B \u6D88\u8D39\u7AEFACK\u4E0E\u91CD\u56DE\u961F\u5217");
const _hoisted_24 = {
  href: "https://segmentfault.com/a/1190000021092149",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_25 = /* @__PURE__ */ createTextVNode("RabbitMQ\u9AD8\u7EA7\u7279\u6027-\u6D88\u8D39\u7AEF\u7684ack\u548C\u91CD\u56DE\u961F\u5217");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_22, [
        _hoisted_23,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_24, [
        _hoisted_25,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var RabbitMQ____ack______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "RabbitMQ\u6D88\u8D39\u7AEF\u7684ack\u548C\u91CD\u56DE\u961F\u5217.html.vue"]]);
export { RabbitMQ____ack______html as default };
