import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a13257a5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="lxml\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#lxml\u5165\u95E8" aria-hidden="true">#</a> lxml\u5165\u95E8</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>lxml \u662F\u4E00\u4E2A\u6D41\u884C\u7684\u89E3\u6790\u5E93\uFF0C\u4F7F\u7528Xpath\u8BED\u6CD5</p><h2 id="_2-xpath\u5E38\u7528\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-xpath\u5E38\u7528\u8BED\u6CD5" aria-hidden="true">#</a> 2. Xpath\u5E38\u7528\u8BED\u6CD5</h2><p>XPath \u4F7F\u7528\u8DEF\u5F84\u8868\u8FBE\u5F0F\u5728 XML \u6587\u6863\u4E2D\u9009\u53D6\u8282\u70B9\u3002\u8282\u70B9\u662F\u901A\u8FC7\u6CBF\u7740\u8DEF\u5F84\u6216\u8005 step \u6765\u9009\u53D6\u7684\u3002</p><h3 id="_2-1-\u9009\u53D6\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-\u9009\u53D6\u8282\u70B9" aria-hidden="true">#</a> 2.1 \u9009\u53D6\u8282\u70B9</h3><p>\u4E0B\u9762\u5217\u51FA\u4E86\u6700\u6709\u7528\u7684\u8DEF\u5F84\u8868\u8FBE\u5F0F\uFF1A</p><table><thead><tr><th>\u8868\u8FBE\u5F0F</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>nodename</td><td>\u9009\u53D6\u6B64\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</td></tr><tr><td>/</td><td>\u4ECE\u6839\u8282\u70B9\u9009\u53D6\u3002</td></tr><tr><td>//</td><td>\u4ECE\u5339\u914D\u9009\u62E9\u7684\u5F53\u524D\u8282\u70B9\u9009\u62E9\u6587\u6863\u4E2D\u7684\u8282\u70B9\uFF0C\u800C\u4E0D\u8003\u8651\u5B83\u4EEC\u7684\u4F4D\u7F6E\u3002</td></tr><tr><td>.</td><td>\u9009\u53D6\u5F53\u524D\u8282\u70B9\u3002</td></tr><tr><td>..</td><td>\u9009\u53D6\u5F53\u524D\u8282\u70B9\u7684\u7236\u8282\u70B9\u3002</td></tr><tr><td>@</td><td>\u9009\u53D6\u5C5E\u6027\u3002</td></tr></tbody></table><p>XPath \u901A\u914D\u7B26\u53EF\u7528\u6765\u9009\u53D6\u672A\u77E5\u7684 XML \u5143\u7D20\u3002</p><table><thead><tr><th>\u901A\u914D\u7B26</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>*</td><td>\u5339\u914D\u4EFB\u4F55\u5143\u7D20\u8282\u70B9\u3002</td></tr><tr><td>@*</td><td>\u5339\u914D\u4EFB\u4F55\u5C5E\u6027\u8282\u70B9\u3002</td></tr><tr><td>node()</td><td>\u5339\u914D\u4EFB\u4F55\u7C7B\u578B\u7684\u8282\u70B9\u3002</td></tr></tbody></table><p>\u901A\u8FC7\u5728\u8DEF\u5F84\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u201C|\u201D\u8FD0\u7B97\u7B26\uFF0C\u53EF\u4EE5\u9009\u53D6\u82E5\u5E72\u4E2A\u8DEF\u5F84\uFF0C\u201C|\u201D\u4E24\u8FB9\u7684\u8868\u8FBE\u5F0F\u662F\u4E92\u76F8\u72EC\u7ACB\u7684\uFF0C\u5E76\u975E\u662F\u4E00\u4E2A\u8868\u8FBE\u5F0F\u4E0B\u3002</p><h4 id="_2-2-\u8C13\u8BED" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8C13\u8BED" aria-hidden="true">#</a> 2.2 <strong>\u8C13\u8BED</strong></h4><p>\u901A\u8FC7\u4EE5\u4E0A\u4ECB\u7ECD\u6211\u4EEC\u57FA\u672C\u53EF\u4EE5\u8FDB\u884C\u9009\u53D6\u8282\u70B9\u4E86\uFF0C\u4F46\u662F\u6709\u53EF\u80FD\u9009\u7684\u8282\u70B9\u6709\u70B9\u591A\uFF0C\u90A3\u4E48\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u7528\u8C13\u8BED\u4E86\u3002\u8C13\u8BED\u5C31\u662F\u7528\u6765\u505A\u8FC7\u6EE4\u7684\uFF0C\u8FC7\u6EE4\u6761\u4EF6\u5747\u5199\u5728<code>[]</code>\u4E2D\u3002</p><table><thead><tr><th>\u8DEF\u5F84\u8868\u8FBE\u5F0F</th><th>\u7ED3\u679C</th></tr></thead><tbody><tr><td>/bookstore/book[1]</td><td>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A book \u5143\u7D20\u3002</td></tr><tr><td>/bookstore/book[last()]</td><td>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A book \u5143\u7D20\u3002</td></tr><tr><td>/bookstore/book[last()-1]</td><td>\u9009\u53D6\u5C5E\u4E8E bookstore \u5B50\u5143\u7D20\u7684\u5012\u6570\u7B2C\u4E8C\u4E2A book \u5143\u7D20\u3002</td></tr><tr><td>/bookstore/book[position()\u2764\uFE0F]</td><td>\u9009\u53D6\u6700\u524D\u9762\u7684\u4E24\u4E2A\u5C5E\u4E8E bookstore \u5143\u7D20\u7684\u5B50\u5143\u7D20\u7684 book \u5143\u7D20\u3002</td></tr><tr><td>//title[@lang]</td><td>\u9009\u53D6\u6240\u6709\u62E5\u6709\u540D\u4E3A lang \u7684\u5C5E\u6027\u7684 title \u5143\u7D20\u3002</td></tr><tr><td>//title[@lang=&#39;eng&#39;]</td><td>\u9009\u53D6\u6240\u6709 title \u5143\u7D20\uFF0C\u4E14\u8FD9\u4E9B\u5143\u7D20\u62E5\u6709\u503C\u4E3A eng \u7684 lang \u5C5E\u6027\u3002</td></tr><tr><td>/bookstore/book[price&gt;35.00]</td><td>\u9009\u53D6 bookstore \u5143\u7D20\u7684\u6240\u6709 book \u5143\u7D20\uFF0C\u4E14\u5176\u4E2D\u7684 price \u5143\u7D20\u7684\u503C\u987B\u5927\u4E8E 35.00\u3002</td></tr><tr><td>/bookstore/book[price&gt;35.00]/title</td><td>\u9009\u53D6 bookstore \u5143\u7D20\u4E2D\u7684 book \u5143\u7D20\u7684\u6240\u6709 title \u5143\u7D20\uFF0C\u4E14\u5176\u4E2D\u7684 price \u5143\u7D20\u7684\u503C\u987B\u5927\u4E8E 35.00\u3002</td></tr></tbody></table><h2 id="_3-lxml\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_3-lxml\u7528\u6CD5" aria-hidden="true">#</a> 3. lxml\u7528\u6CD5</h2><h3 id="_3-1-\u521D\u6B65\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-1-\u521D\u6B65\u4F7F\u7528" aria-hidden="true">#</a> 3.1 \u521D\u6B65\u4F7F\u7528</h3><p>\u5229\u7528\u4ED6\u89E3\u6790Html\u4EE3\u7801</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> etree\ntext <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;\n&lt;div&gt;\n    &lt;ul&gt;\n         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;link1.html&quot;&gt;first item&lt;/a&gt;&lt;/li&gt;\n         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;link2.html&quot;&gt;second item&lt;/a&gt;&lt;/li&gt;\n         &lt;li class=&quot;item-inactive&quot;&gt;&lt;a href=&quot;link3.html&quot;&gt;third item&lt;/a&gt;&lt;/li&gt;\n         &lt;li class=&quot;item-1&quot;&gt;&lt;a href=&quot;link4.html&quot;&gt;fourth item&lt;/a&gt;&lt;/li&gt;\n         &lt;li class=&quot;item-0&quot;&gt;&lt;a href=&quot;link5.html&quot;&gt;fifth item&lt;/a&gt;\n     &lt;/ul&gt;\n &lt;/div&gt;\n&#39;&#39;&#39;</span>\nhtml <span class="token operator">=</span> etree<span class="token punctuation">.</span>HTML<span class="token punctuation">(</span>text<span class="token punctuation">)</span>\nresult <span class="token operator">=</span> etree<span class="token punctuation">.</span>tostring<span class="token punctuation">(</span>html<span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528 lxml \u7684 etree \u5E93</li><li>\u5229\u7528 etree.HTML \u521D\u59CB\u5316</li><li>\u6700\u540E\u5C06\u5176\u6253\u5370\u51FA\u6765</li></ul><p>\u91CC\u4F53\u73B0\u4E86 lxml \u7684\u4E00\u4E2A\u975E\u5E38\u5B9E\u7528\u7684\u529F\u80FD\u5C31\u662F\u81EA\u52A8\u4FEE\u6B63 html \u4EE3\u7801\uFF0C\u5927\u5BB6\u5E94\u8BE5\u6CE8\u610F\u5230\u4E86\uFF0C\u6700\u540E\u4E00\u4E2A li \u6807\u7B7E\uFF0C\u5176\u5B9E\u6211\u628A\u5C3E\u6807\u7B7E\u5220\u6389\u4E86\uFF0C\u662F\u4E0D\u95ED\u5408\u7684\u3002\u4E0D\u8FC7\uFF0Clxml \u56E0\u4E3A\u7EE7\u627F\u4E86 libxml2 \u7684\u7279\u6027\uFF0C\u5177\u6709\u81EA\u52A8\u4FEE\u6B63 HTML \u4EE3\u7801\u7684\u529F\u80FD\u3002 \u6240\u4EE5\u8F93\u51FA\u7ED3\u679C\u662F\u8FD9\u6837\u7684</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&lt;</span>html<span class="token operator">&gt;</span><span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-0&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link1.html&quot;</span><span class="token operator">&gt;</span>first item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link2.html&quot;</span><span class="token operator">&gt;</span>second item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-inactive&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link3.html&quot;</span><span class="token operator">&gt;</span>third item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link4.html&quot;</span><span class="token operator">&gt;</span>fourth item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-0&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link5.html&quot;</span><span class="token operator">&gt;</span>fifth item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n\n<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0D\u4EC5\u8865\u5168\u4E86 li \u6807\u7B7E\uFF0C\u8FD8\u6DFB\u52A0\u4E86 body\uFF0Chtml \u6807\u7B7E\u3002</p><h3 id="_3-2-\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> 3.2 \u6587\u4EF6\u8BFB\u53D6</h3><p>\u9664\u4E86\u76F4\u63A5\u8BFB\u53D6\u5B57\u7B26\u4E32\uFF0C\u8FD8\u652F\u6301\u4ECE\u6587\u4EF6\u8BFB\u53D6\u5185\u5BB9\u3002\u6BD4\u5982\u6211\u4EEC\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6\u53EB\u505A hello.html\uFF0C\u5185\u5BB9\u4E3A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>\n    <span class="token operator">&lt;</span>ul<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-0&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link1.html&quot;</span><span class="token operator">&gt;</span>first item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link2.html&quot;</span><span class="token operator">&gt;</span>second item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-inactive&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link3.html&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>span <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;bold&quot;</span><span class="token operator">&gt;</span>third item<span class="token operator">&lt;</span><span class="token operator">/</span>span<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-1&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link4.html&quot;</span><span class="token operator">&gt;</span>fourth item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n         <span class="token operator">&lt;</span>li <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;item-0&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">&quot;link5.html&quot;</span><span class="token operator">&gt;</span>fifth item<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>\n     <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>\n <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5229\u7528 parse \u65B9\u6CD5\u6765\u8BFB\u53D6\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from lxml import etree\nhtml = etree.parse(&#39;hello.html&#39;)\nresult = etree.tostring(html, pretty_print=True)\nprint(result)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u53EF\u4EE5\u5F97\u5230\u76F8\u540C\u7684\u7ED3\u679C\u3002</p><h3 id="_3-3-xpath-\u5B9E\u4F8B\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-3-xpath-\u5B9E\u4F8B\u6D4B\u8BD5" aria-hidden="true">#</a> 3.3 XPath \u5B9E\u4F8B\u6D4B\u8BD5</h3><p>\u4F9D\u7136\u4EE5\u4E0A\u4E00\u6BB5\u7A0B\u5E8F\u4E3A\u4F8B \uFF081\uFF09</p><h4 id="_3-3-1-\u83B7\u53D6\u6240\u6709\u7684\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u83B7\u53D6\u6240\u6709\u7684\u6807\u7B7E" aria-hidden="true">#</a> 3.3.1 \u83B7\u53D6\u6240\u6709\u7684\u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from lxml import etree\nhtml = etree.parse(&#39;hello.html&#39;)\nprint (&quot;type(html):     &quot;+str(type(html)))\nresult = html.xpath(&#39;//li&#39;)\nprint (&quot;result:     &quot;+str(result))\nprint (&quot;len(result):    &quot;+str(len(result)))\nprint (&quot;type(result):   &quot;+str(type(result)))\nprint (&quot;type(result[0]):    &quot;+str(type(result[0])))\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\n<span class="token builtin">type</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">:</span>     <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;lxml.etree._ElementTree&#39;</span><span class="token operator">&gt;</span>\nresult<span class="token punctuation">:</span>     <span class="token punctuation">[</span><span class="token operator">&lt;</span>Element li at <span class="token number">0x56b8e80</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Element li at <span class="token number">0x562d6c0</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Element li at <span class="token number">0x56dab80</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Element li at <span class="token number">0x56dabc0</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token operator">&lt;</span>Element li at <span class="token number">0x56dac00</span><span class="token operator">&gt;</span><span class="token punctuation">]</span>\n<span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">:</span>    <span class="token number">5</span>\n<span class="token builtin">type</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">:</span>   <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;list&#39;</span><span class="token operator">&gt;</span>\n<span class="token builtin">type</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">:</span>    <span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;lxml.etree._Element&#39;</span><span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u89C1\uFF0Cetree.parse \u7684\u7C7B\u578B\u662F ElementTree\uFF0C\u901A\u8FC7\u8C03\u7528 xpath \u4EE5\u540E\uFF0C\u5F97\u5230\u4E86\u4E00\u4E2A\u5217\u8868\uFF0C\u5305\u542B\u4E86 5 \u4E2A\u5143\u7D20\uFF0C\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F Element \u7C7B\u578B</p><h4 id="_3-3-2-\u83B7\u53D6\u6807\u7B7E\u6240\u6709\u7684class" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u83B7\u53D6\u6807\u7B7E\u6240\u6709\u7684class" aria-hidden="true">#</a> 3.3.2 \u83B7\u53D6\u6807\u7B7E\u6240\u6709\u7684class</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li/@class&#39;)\nprint(result )\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;item-0&#39;, &#39;item-1&#39;, &#39;item-inactive&#39;, &#39;item-1&#39;, &#39;item-0&#39;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-3-\u83B7\u53D6\u6807\u7B7E\u4E0Bhref-\u4E3Alink1-html-\u7684-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_3-3-3-\u83B7\u53D6\u6807\u7B7E\u4E0Bhref-\u4E3Alink1-html-\u7684-\u6807\u7B7E" aria-hidden="true">#</a> 3.3.3 \u83B7\u53D6\u6807\u7B7E\u4E0Bhref \u4E3Alink1.html \u7684 \u6807\u7B7E</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li/a[@href=&quot;link1.html&quot;]&#39;)\nprint(result )\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&lt;Element a at 0x5587b00&gt;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-4-\u83B7\u53D6\u6807\u7B7E\u4E0B\u7684\u6240\u6709-\u6807\u7B7E" tabindex="-1"><a class="header-anchor" href="#_3-3-4-\u83B7\u53D6\u6807\u7B7E\u4E0B\u7684\u6240\u6709-\u6807\u7B7E" aria-hidden="true">#</a> 3.3.4 \u83B7\u53D6\u6807\u7B7E\u4E0B\u7684\u6240\u6709 \u6807\u7B7E</h4><p><strong>\u9519\u8BEF\u5199\u6CD5</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li/span&#39;)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A / \u662F\u7528\u6765\u83B7\u53D6\u5B50\u5143\u7D20\u7684\uFF0C\u8FD9\u6837\u83B7\u53D6\u5F97\u4E3A\u7A7A\u6570\u7EC4\u3002\u6240\u4EE5\u8981\u7528\u53CC\u659C\u6760</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li//span&#39;)\nprint(result )\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&lt;Element span at 0x5636d80&gt;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-5-\u83B7\u53D6\u6700\u540E\u4E00\u4E2Ahref" tabindex="-1"><a class="header-anchor" href="#_3-3-5-\u83B7\u53D6\u6700\u540E\u4E00\u4E2Ahref" aria-hidden="true">#</a> 3.3.5 \u83B7\u53D6\u6700\u540E\u4E00\u4E2Ahref</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li[last()]/a/@href&#39;)print result\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[&#39;link5.html&#39;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-6-\u83B7\u53D6\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#_3-3-6-\u83B7\u53D6\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u5185\u5BB9" aria-hidden="true">#</a> 3.3.6 \u83B7\u53D6\u5012\u6570\u7B2C\u4E8C\u4E2A\u5143\u7D20\u7684\u5185\u5BB9</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//li[last()-1]/a&#39;)\nprint result[0].text\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>fourth item\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-7-\u83B7\u53D6-class-\u4E3A-bold-\u7684\u6807\u7B7E\u540D" tabindex="-1"><a class="header-anchor" href="#_3-3-7-\u83B7\u53D6-class-\u4E3A-bold-\u7684\u6807\u7B7E\u540D" aria-hidden="true">#</a> 3.3.7 \u83B7\u53D6 class \u4E3A bold \u7684\u6807\u7B7E\u540D</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = html.xpath(&#39;//*[@class=&quot;bold&quot;]&#39;)\nprint result[0].tag\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>span\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 63);
const _hoisted_64 = {
  href: "https://cuiqingcai.com/2621.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_65 = /* @__PURE__ */ createTextVNode("Python \u722C\u866B\u5229\u5668\u4E09\u4E4B Xpath \u8BED\u6CD5\u4E0E lxml \u5E93\u7684\u7528\u6CD5");
const _hoisted_66 = {
  href: "https://www.jianshu.com/p/e084c2b2b66d",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_67 = /* @__PURE__ */ createTextVNode("lxml \u5B66\u4E60\u7B14\u8BB0");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_64, [
        _hoisted_65,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_66, [
        _hoisted_67,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C2Lxml___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C2-lxml\u5165\u95E8.html.vue"]]);
export { C2Lxml___html as default };
