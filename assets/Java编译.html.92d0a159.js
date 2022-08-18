import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#java\u7F16\u8BD1" aria-hidden="true">#</a> Java\u7F16\u8BD1</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>IDE\u6216maven\u7B49\u5DE5\u5177\u5DF2\u5C06Java\u7A0B\u5E8F\u7684\u7F16\u8BD1\u4EE3\u52B3\u3002\u4F46\u5DE5\u5177\u8D8A\u9AD8\u7EA7\uFF0C\u9690\u85CF\u7684\u7EC6\u8282\u5C31\u8D8A\u591A\uFF0C\u4E00\u65E6\u51FA\u73B0\u95EE\u9898\u5C31\u61F5\u903C\uFF0C\u5F52\u6839\u5230\u5E95\u8FD8\u662F\u57FA\u7840\u6982\u5FF5\u4E0D\u7262\u9760\u3002\u8FD4\u749E\u5F52\u771F\uFF0C\u56DE\u5230\u6700\u539F\u59CB\u7684\u5730\u65B9<code>javac</code>\uFF0C\u4F1A\u8BA9\u95EE\u9898\u8C41\u7136\u5F00\u6717\u3002\u4E0B\u9762\u5C31\u4E00\u6B65\u4E00\u6B65\u6F14\u793A\u7528<code>javac</code>\u548C<code>java</code>\u5F92\u624B\u7F16\u8BD1\u8FD0\u884C\u4E00\u4E2A\u5E38\u89C4\u5DE5\u7A0B\u3002</p><h2 id="_2-hello-world\u7EC3\u4E2A\u624B" tabindex="-1"><a class="header-anchor" href="#_2-hello-world\u7EC3\u4E2A\u624B" aria-hidden="true">#</a> 2. Hello World\u7EC3\u4E2A\u624B</h2><p>\u6765\u4E2A\u7B80\u5355\u7684\u5148\uFF0C\u6211\u4EEC\u796D\u51FA\u7956\u4F20\u7684HelloWorld\u7A0B\u5E8F\u3002\uFF08\u611F\u5174\u8DA3\u7684\u8BDD\uFF0C\u53EF\u4EE5\u8BD5\u4E00\u8BD5\u5F92\u624B\u662F\u5426\u5199\u7684\u51FA\u6765~\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5199\u5B8C\u540E\uFF0C\u4FDD\u5B58\u4E3A\uFF1A<code>HelloWorld.java</code>\uFF0C\u7136\u540E\u5728\u5F53\u524D\u76EE\u5F55\u6267\u884C<code>javac</code>\u7F16\u8BD1\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javac HelloWorld.java\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u770B<strong>\u5F53\u524D\u76EE\u5F55</strong>\uFF08\u66F4\u51C6\u786E\u7684\u8BF4\u662Fjava\u6587\u4EF6\u540C\u7EA7\u76EE\u5F55\uFF09\uFF0C\u679C\u7136\u751F\u6210\u4E86<code>HelloWorld.class</code>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span>\nHelloWorld.class HelloWorld.java\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7EE7\u7EED\u5728<strong>\u5F53\u524D\u76EE\u5F55\u8FD0\u884C</strong><code>java</code>\u547D\u4EE4\uFF0C\u6B63\u786E\u6253\u5370\u51FAHello, World!</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>maoshuai@ms:~/javaLinux/w1$ java HelloWorld \nHello, World!\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8001\u53F8\u673A\uFF0C\u7A33\uFF01\u770B\u8D77\u6765\u5F88\u7B80\u5355\u561B\uFF1A\u5148<code>javac</code>\u518D<code>java</code>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428163059164.png" alt="image-20220428163059164"></p><h3 id="_2-1-\u5BB9\u6613\u72AF\u7684\u9519" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5BB9\u6613\u72AF\u7684\u9519" aria-hidden="true">#</a> 2.1 \u5BB9\u6613\u72AF\u7684\u9519</h3><ul><li>\u6267\u884Cclass \u6216.java \u6587\u4EF6</li></ul><p>\u867D\u7136\u7B80\u5355\uFF0C\u4F46\u65B0\u624B\u901A\u5E38\u4F1A\u72AF\u7684\u4E00\u4E2A\u9519\uFF1A\u60F3\u8C61\u6210\u53BB<strong>\u6267\u884C</strong><code>.class</code>\u6587\u4EF6\uFF0C\u6BD4\u5982\u5199\u6210\u8FD9\u6837\uFF0C\u81EA\u7136\u4F1A\u62A5\u9519\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428163045920.png" alt="image-20220428163045920"></p><h2 id="_3-\u5E26\u5305\u540D" tabindex="-1"><a class="header-anchor" href="#_3-\u5E26\u5305\u540D" aria-hidden="true">#</a> 3. \u5E26\u5305\u540D</h2><p>\u4E00\u5207\u90FD\u5F88\u987A\u5229\uFF0C\u4F46\u6CA1\u6709\u5305\u540D\u662F\u4E0D\u4E13\u4E1A\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u52A0\u4E00\u4E2A\u725B\u903C\u7684\u5305<code>package com.zszdevelop;</code>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zszdevelop</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD8\u662F\u4E00\u6837\u7528<code>javac</code>\u7F16\u8BD1\uFF0C\u67E5\u770B<strong>\u5F53\u524D\u76EE\u5F55</strong>\u4E0B<code>HelloWorld.class</code>\u751F\u6210\u4E86\uFF0C\u5F88\u987A\u5229\u3002</p><p>\u8FD8\u662F\u4E00\u6837\u7528<code>java</code>\u547D\u4EE4\uFF0C\u77AC\u95F4\u88AB\u6253\u8138\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428163506356.png" alt="image-20220428163506356"></p><p>\u60F3\u4E86\u60F3\uFF0C<strong>HelloWorld\u5DF2\u7ECF\u6709\u81EA\u5DF1\u7684\u5305\u540D\u4E86\uFF0C\u6240\u4EE5\u5B83\u7684\u540D\u5B57\u4E0D\u5728\u662F\u6CA1\u6709\u59D3\u6C0F</strong>\u7684<code>HelloWorld</code>\uFF0C\u65B0\u540D\u5B57\u53EB<code>com.zszdevelop.HelloWorld</code>\uFF0C\u90A3\u4E48\u4F20\u7ED9<code>java</code>\u81EA\u7136\u8981\u7528\u65B0\u540D\u5B57\uFF0C\u518D\u8BD5\u4E00\u8BD5\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428163605539.png" alt="image-20220428163605539"></p><p>\u8FD8\u662F\u88AB\u6253\u8138\uFF0C\u8FD9\u65F6\u5019\u8001\u53F8\u673A\u544A\u8BC9\u4F60\uFF0C\u521B\u5EFA\u4E00\u4E2A<code>com.zszdevelop</code>\u76EE\u5F55\uFF0C\u7136\u540E\u628A<code>HelloWorld.class</code>\u653E\u8FDB\u6765\uFF0C\u6267\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mkdir</span> -p com/zszdevelop\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mv</span> HelloWorld.class com/zszdevelop\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span>\nHelloWorld.java com\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java com.zszdevelop.HelloWorld\nHello, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428163804684.png" alt="image-20220428163804684"></p><p>\u679C\u7136\uFF0C\u6B63\u5E38\u6253\u5370\u51FA\u4E86Hello, World!</p><p><strong>\u4E0A\u9762\u7684\u6B65\u9AA4\uFF0C\u8BF4\u660E\u4E86\u4E24\u70B9\uFF1A</strong></p><ol><li>\u589E\u52A0\u4E86package\u540D\uFF0C\u6240\u4EE5class\u540D\u4E5F\u53D8\u4E86\uFF0C\u884C\u4E0D\u6539\u540D\u5750\u4E0D\u6539\u59D3\uFF0C\u81EA\u7136\u8981\u5E26\u4E0A\u59D3\uFF08\u5373\u6240\u8C13\u5168\u9650\u5B9A\u540D\uFF09\u3002</li><li>Java <strong>\u4F1A\u6839\u636E\u5305\u540D\u5BF9\u5E94\u51FA\u76EE\u5F55\u7ED3\u6784\uFF0C\u5E76\u4ECEclass path\u641C\u7D22\u8BE5\u76EE\u5F55\u53BB\u627Eclass\u6587\u4EF6</strong>\u3002\u7531\u4E8E\u9ED8\u8BA4\u7684class path\u662F\u5F53\u524D\u76EE\u5F55\uFF0C\u6240\u4EE5<code>com.zszdevelop.HelloWorld</code>\u5FC5\u987B\u5B58\u50A8\u5728<code>./com/zszdevelop/HelloWorld.class</code></li></ol><p>\u5F53\u7136\u6BCF\u6B21\u81EA\u5DF1\u521B\u5EFA\u5305\u8DEF\u5F84\u7684\u76EE\u5F55\u592A\u9EBB\u70E6\u3002<strong><code>-d</code>\u53C2\u6570\u53EF\u4EE5\u4EE3\u52B3\u4E0A\u9762\u7684\u5DE5\u4F5C</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> javac -d <span class="token builtin class-name">.</span> HelloWorld.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span>\nHelloWorld.java com\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java com.zszdevelop.HelloWorld\nHello, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-d</code>\u6307\u5B9A\u4E86\u751F\u6210class\u6587\u4EF6\u7684\u6839\u76EE\u5F55\uFF08\u8FD9\u91CC\u7528\u7684\u662F\u5F53\u524D\u76EE\u5F55\uFF09\uFF0C\u5E76\u4E14\u4F1A\u6839\u636Eclass\u7684\u5305\u8DEF\u5F84\u521B\u5EFA\u5B50\u76EE\u5F55\u3002</p><h2 id="_4-\u7F16\u8BD1\u4E24\u4E2A\u6709\u4F9D\u8D56\u5173\u7CFB\u7684class" tabindex="-1"><a class="header-anchor" href="#_4-\u7F16\u8BD1\u4E24\u4E2A\u6709\u4F9D\u8D56\u5173\u7CFB\u7684class" aria-hidden="true">#</a> 4. \u7F16\u8BD1\u4E24\u4E2A\u6709\u4F9D\u8D56\u5173\u7CFB\u7684class</h2><p>\u5305\u540D\u89E3\u51B3\u4E86\uFF0C\u6211\u4EEC\u518D\u590D\u6742\u4E9B\uFF0C\u641E\u4E2A\u4F9D\u8D56\u8C03\u7528\u3002\u9996\u5148\uFF0C\u6211\u4EEC\u62BD\u53D6\u4E00\u4E2A<code>HelloService</code>\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zszdevelop</span><span class="token punctuation">;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloService</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;HelloService, &quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u4FEE\u6539<code>HelloWorld.java</code>\uFF0C\u8C03\u7528<code>HelloService</code>\u5B8C\u6210say hello\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>zszdevelop</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloWorld</span><span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">HelloService</span> service <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HelloService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        service<span class="token punctuation">.</span><span class="token function">printHello</span><span class="token punctuation">(</span><span class="token string">&quot;World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u7740\u6211\u4EEC\u4F9D\u6B21\u7F16\u8BD1\uFF1A<code>HelloService.java</code>\u548C<code>HelloWorld.java</code>\uFF0C\u6700\u540E\u8FD0\u884C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> javac -d <span class="token builtin class-name">.</span> HelloService.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> javac -d <span class="token builtin class-name">.</span> HelloWorld.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span>\nHelloService.java HelloWorld.java   com\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java com.zszdevelop.HelloWorld\nHelloService, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428164924047.png" alt="image-20220428164924047"></p><p>\u76F4\u89C9\u4E0A\uFF0C\u8981\u5148\u7F16\u8BD1<code>HelloService.java</code>\uFF0C\u8FD9\u662F\u5BF9\u7684\u3002\u90A3\u5982\u679C\u5148\u7F16\u8BD1<code>HelloWorld.java</code>\u5462\uFF1F\u5F53\u7136\u662F\u6253\u8138\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428164950212.png" alt="image-20220428164950212"></p><p>\u5982\u679C\u7F16\u8BD1\u7684\u65F6\u5019\uFF0C\u8FD8\u8981\u6839\u636E\u4F9D\u8D56\u5173\u7CFB\u786E\u5B9A\u987A\u5E8F\uFF0C\u592Alow\u4E86\u5427\u3002\u6211\u89C9\u5F97<code>java</code>\u547D\u4EE4\u5E94\u8BE5\u80FD\u81EA\u52A8\u89E3\u51B3\u5B83\uFF0C\u4E00\u6B21\u6027\u5C06\u4E24\u4E2Ajava\u6587\u4EF6\u4F20\u7ED9\u5B83\u8BD5\u4E00\u8BD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> javac -d <span class="token builtin class-name">.</span> HelloWorld.java HelloService.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> LS\nHelloService.java	HelloWorld.java		com\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java com.zszdevelop.HelloWorld\nHelloService, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428165035879.png" alt="image-20220428165035879"></p><p>\u725B\u903C\uFF0C\u5B83\u81EA\u52A8\u89E3\u51B3\u4E86\u987A\u5E8F\u95EE\u9898\uFF0C\u8D5E\u4E00\u4E2A\uFF08\u867D\u7136\u6211\u4E0D\u6000\u597D\u610F\u7684\u5C06<code>HelloWorld.java</code>\u653E\u5230\u4E86\u524D\u9762\uFF09\uFF01</p><h2 id="_5-\u4F7F\u7528src\u548Ctarget\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528src\u548Ctarget\u76EE\u5F55" aria-hidden="true">#</a> 5. \u4F7F\u7528src\u548Ctarget\u76EE\u5F55</h2><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\uFF0C\u867D\u7136class\u6587\u4EF6\u5FC5\u987B\u653E\u5728\u5305\u540D\u4E00\u81F4\u7684\u76EE\u5F55\u91CC\uFF0C<strong>\u4F46java\u6E90\u6587\u4EF6\u5E76\u6CA1\u6709\u8FD9\u4E2A\u8981\u6C42</strong>\u3002\u4E0D\u8FC7\uFF0C\u4E3A\u4E86\u7BA1\u7406\u65B9\u4FBF\uFF0C\u6211\u4EEC\u5C06java\u6E90\u6587\u4EF6\u4E5F\u653E\u5728\u5305\u7ED3\u6784\u76EE\u5F55\u91CC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span>  <span class="token function">mkdir</span> -p com/zszdevelop\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mv</span> *.java com/zszdevelop/\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span>  <span class="token function">ls</span> com/zszdevelop/\nHelloService.java HelloWorld.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span>  javac -d <span class="token builtin class-name">.</span> com/zszdevelop/*.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span> com/zszdevelop/\nHelloService.class HelloService.java  HelloWorld.class   HelloWorld.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java com.zszdevelop.HelloWorld\nHelloService, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428165610980.png" alt="image-20220428165610980"></p><p>\u7F16\u8BD1\u65F6<code>javac</code>\u8981\u4F20\u5165\u65B0\u7684java\u6587\u4EF6\u8DEF\u5F84\uFF08\u8FD9\u91CC\u7528\u4E86\u901A\u914D\u7B26\uFF09\uFF0C\u5176\u4ED6\u4E5F\u6CA1\u6709\u4EC0\u4E48\u4E0D\u540C\u3002\u53EF\u4EE5\u770B\u5230<strong>class\u6587\u4EF6\u751F\u6210\u5230\u4E86\u4E0Ejava\u6587\u4EF6\u76F8\u540C\u7684\u76EE\u5F55\u91CC</strong>\u3002class\u6587\u4EF6\u548Cjava\u6E90\u6587\u4EF6\u653E\u5728\u4E00\u8D77\uFF0C\u5F88\u4E0D\u6E05\u723D\uFF0C\u80FD\u5426\u50CFIDE\u91CC\u90A3\u6837\uFF1Ajava\u6587\u4EF6\u653E\u5230src\u76EE\u5F55\uFF0Cclass\u6587\u4EF6\u653E\u5230target\u76EE\u5F55\uFF1F\u4E0B\u9762\u6211\u8BD5\u4E00\u8BD5\u3002</p><p>\u5148\u521B\u5EFAsrc\u548Ctarget\u76EE\u5F55\uFF0C\u5E76\u5C06\u539F\u6765\u7684java\u6587\u4EF6\u90FD\u79FB\u52A8\u5230src\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mkdir</span> src\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mkdir</span> target\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">mv</span> com src\n\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span>\nsrc    target\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428165943655.png" alt="image-20220428165943655"></p><p>\u7136\u540E\u7F16\u8BD1\uFF0C<code>-d</code>\u53C2\u6570\u6307\u5B9A\u5230target\u76EE\u5F55\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> javac -d target src/com/zszdevelop/*.java\n<span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> <span class="token function">ls</span> target/com/zszdevelop/\nHelloService.class HelloWorld.class\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428170120215.png" alt="image-20220428170120215"></p><p>\u600E\u4E48\u8FD0\u884C\u5462\uFF1F\u76F4\u63A5\u5728\u5F53\u524D\u76EE\u5F55\u8FD0\u884C\u662F\u4E0D\u884C\u4E86\uFF0C\u6BD5\u7ADF\u591A\u4E86\u4E00\u5C42target\u76EE\u5F55\uFF0C\u8FDB\u5165target\u76EE\u5F55\u8FD0\u884C\uFF0C\u59A5\u59A5\u7684\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>(base) \u279C  test cd target\n(base) \u279C  target java com.zszdevelop.HelloWorld\nHelloService, World!\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428170206636.png" alt="image-20220428170206636"></p><p>\u9664\u4E86\u8FDB\u5165<code>target</code>\u76EE\u5F55\u4EE5\u5916\uFF0C\u66F4\u5E38\u7528\u7684\u65B9\u6CD5\u662F\u901A\u8FC7<code>-classpath</code>\uFF08\u6216\u7B80\u5199\u4E3A<code>-cp</code>\uFF09\u9009\u9879\u8BBE\u7F6E<strong>\u7C7B\u8DEF\u5F84</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  <span class="token builtin class-name">test</span> java -cp target com.zszdevelop.HelloWorld\nHelloService, World<span class="token operator">!</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220428170320183.png" alt="image-20220428170320183"></p><h2 id="_6-\u7C7B\u8DEF\u5F84classpath" tabindex="-1"><a class="header-anchor" href="#_6-\u7C7B\u8DEF\u5F84classpath" aria-hidden="true">#</a> 6. \u7C7B\u8DEF\u5F84CLASSPATH</h2><p>\u4E0A\u9762\u6F14\u793A\u4E86\u901A\u8FC7<code>-cp</code>\u8BBE\u7F6E\u7C7B\u8DEF\u5F84\u3002\u4E0B\u9762\u518D\u8FDB\u4E00\u6B65\u7814\u7A76\u4E00\u4E0B\u7C7B\u8DEF\u5F84\u3002</p><p>\u7C7B\u8DEF\u5F84\uFF0C\u662FJRE\u641C\u7D22\u7528\u6237\u7EA7class\u6587\u4EF6\u6216\u5176\u4ED6\u8D44\u6E90\u7684\u8DEF\u5F84\uFF0C<code>javac</code>\u6216<code>java</code>\u7B49\u5DE5\u5177\u90FD\u53EF\u4EE5\u6307\u5B9A\u7C7B\u8DEF\u5F84\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u9ED8\u8BA4\u7684\u7C7B\u8DEF\u5F84\u5C31\u662F\u5F53\u524D\u76EE\u5F55\u3002<strong>\u4F46\u5982\u679C\u8BBE\u7F6E\u4E86\u7C7B\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u503C\u5C31\u88AB\u8986\u76D6\u4E86\uFF0C\u6240\u4EE5\u5982\u679C\u60F3\u4FDD\u7559\u5F53\u524D\u76EE\u5F55\u4E3A\u7C7B\u8DEF\u5F84\uFF0C\u9700\u8981\u540C\u65F6\u5C06<code>.</code>\u52A0\u5165</strong>\uFF0C\u6709\u70B9\u50CF\u9ED8\u8BA4\u6784\u9020\u51FD\u6570\u7684\u611F\u89C9\u3002</p><p>\u7C7B\u8DEF\u5F84\uFF0C\u53EF\u4EE5\u901A\u8FC7\u73AF\u5883\u53D8\u91CF<code>CLASSPATH</code>\u6216<code>-cp</code>\u53C2\u6570\u8BBE\u7F6E\uFF0C\u540E\u8005\u4F1A\u8986\u76D6\u524D\u8005\u3002\u63A8\u8350\u901A\u8FC7<code>-cp</code>\u8BBE\u7F6E\uFF0C\u5B83\u53EA\u4F1A\u5F71\u54CD\u5F53\u524D\u8FDB\u7A0B\u3002</p><p>\u7C7B\u8DEF\u5F84\u7C7B\u4F3C\u64CD\u4F5C\u7CFB\u7EDF\u91CC\u7684<code>path</code>\u6982\u5FF5\uFF0C\u4E0D\u8FC7\u5B83\u662Fjava\u5DE5\u5177\u641C\u7D22class\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u540C\u6837\u7684\uFF0C\u7C7B\u8DEF\u5F84\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u5E76\u901A\u8FC7\u5206\u53F7\u5206\u9694\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>export CLASSPATH=path1:path2:...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6216\u8005\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sdkTool -classpath path1:path2:...\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>sdkTool\u53EF\u4EE5\u662F java, javac, javadoc\u7B49\u3002</p><p>\u7C7B\u8DEF\u5F84\u4E0D\u4EC5\u53EF\u4EE5\u662F\u76EE\u5F55\uFF0C\u8FD8\u4E5F\u53EF\u4EE5\u662Fjar\u5305\u6216zip\u5305\u3002</p><p>\u7C7B\u8DEF\u5F84\u7684\u8BBE\u7F6E\u662F\u6709\u987A\u5E8F\u7684\uFF0Cjava\u4F1A\u4F18\u5148\u5728\u9760\u524D\u7684\u7C7B\u8DEF\u5F84\u91CC\u641C\u7D22\u3002\u8FD9\u4E00\u70B9\u548C\u64CD\u4F5C\u7CFB\u7EDF\u7684<code>path</code>\u7C7B\u4F3C\u3002</p><p>\u7C7B\u8DEF\u5F84\u53EF\u4EE5\u7528\u901A\u914D\u7B26<code>*</code>\u5339\u914Djar\u6216zip\uFF0C\u4F46\uFF1A</p><ol><li>\u901A\u914D\u7B26\u53EA\u5339\u914Djar\u6216zip\uFF0C\u6BD4\u5982path/*\u53EA\u662F\u5C06\u4E0B\u9762\u7684jar\u6216zip\u52A0\u5165\u7C7B\u8DEF\u5F84\uFF0C\u4F46path\u672C\u8EAB\u4E0D\u52A0\u5165\u7C7B\u8DEF\u5F84\u3002</li><li>\u901A\u914D\u7B26\u4E0D\u9012\u5F52\u641C\u7D22\uFF0C\u5373\u6307\u5339\u914D\u7B2C\u4E00\u5C42\u76EE\u5F55\u4E0B\u7684jar\u6216zip\u3002</li><li>\u901A\u914D\u7B26\u5339\u914D\u5230\u7684jar\u6216zip\uFF0C\u52A0\u5165\u5230classpath\u7684\u987A\u5E8F\u662F\u4E0D\u786E\u5B9A\u7684\u3002\u56E0\u6B64\uFF0C\u66F4\u7A33\u59A5\u7684\u505A\u6CD5\u662F\u663E\u793A\u7684\u679A\u4E3E\u6240\u6709jar\u6216zip\u3002</li><li>\u901A\u914D\u7B26\u9002\u7528\u4E8E<code>CLASSPATH</code>\u53D8\u91CF\u6216<code>-cp</code>\u53C2\u6570\uFF0C\u4F46\u4E0D\u9002\u7528\u4E8Ejar\u5305\u7684manifest\u6587\u4EF6\u3002</li></ol><h2 id="_7-javac" tabindex="-1"><a class="header-anchor" href="#_7-javac" aria-hidden="true">#</a> 7. Javac</h2><p>javac\u7684\u8BED\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javac [ options ] [ sourcefiles ] [ classes] [ @argfiles ]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>options\uFF1A\u662F\u4E00\u4E9B\u53C2\u6570\uFF0C\u6BD4\u5982-cp\uFF0C-d</li><li>sourcefiles\uFF1A\u5C31\u662F\u7F16\u8BD1\u7684java\u6587\u4EF6\uFF0C\u5982<code>HelloWorld.java</code>\uFF0C\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C\u5E76\u7528\u7A7A\u683C\u9694\u5F00</li><li>classes\uFF1A\u7528\u6765\u5904\u7406\u5904\u7406\u6CE8\u89E3\u3002\u6682\u65F6\u6CA1\u641E\u61C2\u600E\u4E48\u7528</li><li>@argfiles\uFF0C\u5C31\u662F\u5305\u542Boption\u6216java\u6587\u4EF6\u5217\u8868\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u7528@\u7B26\u53F7\u5F00\u5934\uFF0C\u5C31\u50CF\u4E0A\u9762\u7684@javaOptions.txt\u548C@javaFiles.txt</li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 84);
const _hoisted_85 = {
  href: "https://zhuanlan.zhihu.com/p/74229762",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_86 = /* @__PURE__ */ createTextVNode("\u7B2C1\u671F\uFF1A\u629B\u5F00IDE\uFF0C\u4E86\u89E3\u4E00\u4E0Bjavac\u5982\u4F55\u7F16\u8BD1");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_85, [
        _hoisted_86,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Java___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u7F16\u8BD1.html.vue"]]);
export { Java___html as default };
