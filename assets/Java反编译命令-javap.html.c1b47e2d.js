import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.dd6287fd.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u53CD\u7F16\u8BD1\u547D\u4EE4-javap" tabindex="-1"><a class="header-anchor" href="#java\u53CD\u7F16\u8BD1\u547D\u4EE4-javap" aria-hidden="true">#</a> Java\u53CD\u7F16\u8BD1\u547D\u4EE4-javap</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>javap\u662Fjdk\u81EA\u5E26\u7684\u4E00\u4E2A\u5DE5\u5177\uFF0C\u53EF\u4EE5\u5BF9\u4EE3\u7801 \u53CD\u7F16\u8BD1 \uFF0C\u4E5F\u53EF\u4EE5\u67E5\u770Bjava\u7F16\u8BD1\u5668\u751F\u6210\u7684\u5B57\u8282\u7801\u3002</p><p><strong>javap\u547D\u4EE4\u5206\u89E3\u4E00\u4E2Aclass\u6587\u4EF6</strong>\uFF0C\u5B83\u6839\u636Eoptions\u6765\u51B3\u5B9A\u5230\u5E95\u8F93\u51FA\u4EC0\u4E48\u3002\u5982\u679C\u6CA1\u6709\u4F7F\u7528options,\u90A3\u4E48javap\u5C06\u4F1A\u8F93\u51FA\u5305\uFF0C\u7C7B\u91CC\u7684protected\u548Cpublic\u57DF\u4EE5\u53CA\u7C7B\u91CC\u7684\u6240\u6709\u65B9\u6CD5\u3002<code>javap</code>\u5C06\u4F1A\u628A\u5B83\u4EEC\u8F93\u51FA\u5728\u6807\u51C6\u8F93\u51FA\u4E0A\u3002</p><blockquote><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u5F88\u5C11\u6709\u4EBA\u4F7F\u7528javap\u5BF9class\u6587\u4EF6\u8FDB\u884C\u53CD\u7F16\u8BD1\uFF0C\u56E0\u4E3A\u6709\u5F88\u591A\u6210\u719F\u7684\u53CD\u7F16\u8BD1\u5DE5\u5177\u53EF\u4EE5\u4F7F\u7528\uFF0C\u6BD4\u5982jad\u3002\u4F46\u662F\uFF0Cjavap\u8FD8\u53EF\u4EE5\u67E5\u770Bjava\u7F16\u8BD1\u5668\u4E3A\u6211\u4EEC\u751F\u6210\u7684\u5B57\u8282\u7801\u3002\u901A\u8FC7\u5B83\uFF0C\u53EF\u4EE5\u5BF9\u7167\u6E90\u4EE3\u7801\u548C\u5B57\u8282\u7801\uFF0C\u4ECE\u800C\u4E86\u89E3\u5F88\u591A\u7F16\u8BD1\u5668\u5185\u90E8\u7684\u5DE5\u4F5C\u3002</p></blockquote><h2 id="_2-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u4F8B" aria-hidden="true">#</a> 2. \u5B9E\u4F8B</h2><p>\u6765\u770B\u8FD9\u4E2A\u4F8B\u5B50\uFF0C\u5148\u7F16\u8BD1(<code>javac</code>)\u4E0B\u9762\u8FD9\u4E2A\u7C7B\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedTest</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">SynchronizedTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-1-\u7F16\u8BD1-javac" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7F16\u8BD1-javac" aria-hidden="true">#</a> 2.1 \u7F16\u8BD1 javac</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javac SynchronizedTest.java\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u7F16\u8BD1\u51FA\u6765\u7684class \u4EE3\u7801\u6211\u4EEC\u662F\u65E0\u6CD5\u76F4\u63A5\u9605\u8BFB\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220519170413379.png" alt="image-20220519170413379"></p><h3 id="_2-2-\u53CD\u7F16\u8BD1javap" tabindex="-1"><a class="header-anchor" href="#_2-2-\u53CD\u7F16\u8BD1javap" aria-hidden="true">#</a> 2.2 \u53CD\u7F16\u8BD1javap</h3><p>\u6211\u4EEC\u5148\u6765\u4F7F\u7528 Javap \u6765\u53CD\u7F16\u8BD1\u4EE5\u4E0A\u4EE3\u7801</p><h4 id="_2-2-1-\u4E0D\u52A0\u53C2\u6570\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u4E0D\u52A0\u53C2\u6570\u60C5\u51B5" aria-hidden="true">#</a> 2.2.1 \u4E0D\u52A0\u53C2\u6570\u60C5\u51B5</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javap SynchronizedTest\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Compiled from &quot;SynchronizedTest.java&quot;\npublic class SynchronizedTest {\n  public SynchronizedTest();\n  public synchronized void doSth();\n  public void doSth1();\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-2-c-\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-2-2-c-\u53C2\u6570" aria-hidden="true">#</a> 2.2.2 -c \u53C2\u6570</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>javap -c SynchronizedTest\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7F16\u8BD1\u51FA\u7684\u7ED3\u679C</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Compiled</span> from <span class="token string">&quot;SynchronizedTest.java&quot;</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedTest</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> <span class="token class-name">SynchronizedTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Code</span><span class="token operator">:</span>\n       <span class="token number">0</span><span class="token operator">:</span> aload_0\n       <span class="token number">1</span><span class="token operator">:</span> invokespecial #<span class="token number">1</span>                  <span class="token comment">// Method java/lang/Object.&quot;&lt;init&gt;&quot;:()V</span>\n       <span class="token number">4</span><span class="token operator">:</span> <span class="token keyword">return</span>\n\n  <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">doSth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Code</span><span class="token operator">:</span>\n       <span class="token number">0</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>\n       <span class="token number">3</span><span class="token operator">:</span> ldc           #<span class="token number">3</span>                  <span class="token comment">// String Hello World</span>\n       <span class="token number">5</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>\n       <span class="token number">8</span><span class="token operator">:</span> <span class="token keyword">return</span>\n\n  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doSth1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token class-name">Code</span><span class="token operator">:</span>\n       <span class="token number">0</span><span class="token operator">:</span> ldc           #<span class="token number">5</span>                  <span class="token comment">// class SynchronizedTest</span>\n       <span class="token number">2</span><span class="token operator">:</span> dup\n       <span class="token number">3</span><span class="token operator">:</span> astore_1\n       <span class="token number">4</span><span class="token operator">:</span> monitorenter\n       <span class="token number">5</span><span class="token operator">:</span> getstatic     #<span class="token number">2</span>                  <span class="token comment">// Field java/lang/System.out:Ljava/io/PrintStream;</span>\n       <span class="token number">8</span><span class="token operator">:</span> ldc           #<span class="token number">3</span>                  <span class="token comment">// String Hello World</span>\n      <span class="token number">10</span><span class="token operator">:</span> invokevirtual #<span class="token number">4</span>                  <span class="token comment">// Method java/io/PrintStream.println:(Ljava/lang/String;)V</span>\n      <span class="token number">13</span><span class="token operator">:</span> aload_1\n      <span class="token number">14</span><span class="token operator">:</span> monitorexit\n      <span class="token number">15</span><span class="token operator">:</span> <span class="token keyword">goto</span>          <span class="token number">23</span>\n      <span class="token number">18</span><span class="token operator">:</span> astore_2\n      <span class="token number">19</span><span class="token operator">:</span> aload_1\n      <span class="token number">20</span><span class="token operator">:</span> monitorexit\n      <span class="token number">21</span><span class="token operator">:</span> aload_2\n      <span class="token number">22</span><span class="token operator">:</span> athrow\n      <span class="token number">23</span><span class="token operator">:</span> <span class="token keyword">return</span>\n    <span class="token class-name">Exception</span> table<span class="token operator">:</span>\n       from    <span class="token keyword">to</span>  <span class="token namespace">target</span> type\n           <span class="token number">5</span>    <span class="token number">15</span>    <span class="token number">18</span>   any\n          <span class="token number">18</span>    <span class="token number">21</span>    <span class="token number">18</span>   any\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7528\u6CD5\u6458\u8981" tabindex="-1"><a class="header-anchor" href="#_3-\u7528\u6CD5\u6458\u8981" aria-hidden="true">#</a> 3. \u7528\u6CD5\u6458\u8981</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-help \u5E2E\u52A9\n-l \u8F93\u51FA\u884C\u548C\u53D8\u91CF\u7684\u8868\n-public \u53EA\u8F93\u51FApublic\u65B9\u6CD5\u548C\u57DF\n-protected \u53EA\u8F93\u51FApublic\u548Cprotected\u7C7B\u548C\u6210\u5458\n-package \u53EA\u8F93\u51FA\u5305\uFF0Cpublic\u548Cprotected\u7C7B\u548C\u6210\u5458\uFF0C\u8FD9\u662F\u9ED8\u8BA4\u7684\n-p -private \u8F93\u51FA\u6240\u6709\u7C7B\u548C\u6210\u5458\n-s \u8F93\u51FA\u5185\u90E8\u7C7B\u578B\u7B7E\u540D\n-c \u8F93\u51FA\u5206\u89E3\u540E\u7684\u4EE3\u7801\uFF0C\u4F8B\u5982\uFF0C\u7C7B\u4E2D\u6BCF\u4E00\u4E2A\u65B9\u6CD5\u5185\uFF0C\u5305\u542Bjava\u5B57\u8282\u7801\u7684\u6307\u4EE4\uFF0C\n-verbose \u8F93\u51FA\u6808\u5927\u5C0F\uFF0C\u65B9\u6CD5\u53C2\u6570\u7684\u4E2A\u6570\n-constants \u8F93\u51FA\u9759\u6001final\u5E38\u91CF\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_4-\u603B\u7ED3" aria-hidden="true">#</a> 4. \u603B\u7ED3</h2><p>javap\u53EF\u4EE5\u7528\u4E8E\u53CD\u7F16\u8BD1\u548C\u67E5\u770B\u7F16\u8BD1\u5668\u7F16\u8BD1\u540E\u7684\u5B57\u8282\u7801\u3002\u5E73\u65F6\u4E00\u822C\u7528<code>javap -c</code>\u6BD4\u8F83\u591A\uFF0C\u8BE5\u547D\u4EE4\u7528\u4E8E\u5217\u51FA\u6BCF\u4E2A\u65B9\u6CD5\u6240\u6267\u884C\u7684JVM\u6307\u4EE4\uFF0C\u5E76\u663E\u793A\u6BCF\u4E2A\u65B9\u6CD5\u7684\u5B57\u8282\u7801\u7684\u5B9E\u9645\u4F5C\u7528\u3002\u53EF\u4EE5\u901A\u8FC7\u5B57\u8282\u7801\u548C\u6E90\u4EE3\u7801\u7684\u5BF9\u6BD4\uFF0C\u6DF1\u5165\u5206\u6790java\u7684\u7F16\u8BD1\u539F\u7406\uFF0C\u4E86\u89E3\u548C\u89E3\u51B3\u5404\u79CDJava\u539F\u7406\u7EA7\u522B\u7684\u95EE\u9898\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 27);
const _hoisted_28 = {
  href: "https://www.hollischuang.com/archives/1107",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_29 = /* @__PURE__ */ createTextVNode("Java\u547D\u4EE4\u5B66\u4E60\u7CFB\u5217\uFF08\u4E03\uFF09\u2014\u2014javap");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_28, [
        _hoisted_29,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Java_____Javap_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u53CD\u7F16\u8BD1\u547D\u4EE4-javap.html.vue"]]);
export { Java_____Javap_html as default };
