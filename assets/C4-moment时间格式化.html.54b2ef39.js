import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="moment\u65F6\u95F4\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#moment\u65F6\u95F4\u683C\u5F0F\u5316" aria-hidden="true">#</a> moment\u65F6\u95F4\u683C\u5F0F\u5316</h1><h2 id="_1-\u5168\u5C40\u5BFC\u5165\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u5168\u5C40\u5BFC\u5165\u65B9\u6CD5" aria-hidden="true">#</a> 1. \u5168\u5C40\u5BFC\u5165\u65B9\u6CD5</h2><ol><li><p>\u5B89\u88C5moment</p><div class="language-tex ext-tex line-numbers-mode"><pre class="language-tex"><code>npm install moment --save\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>main.js \u5F15\u5165\u6CE8\u518C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5BFC\u5165\u65F6\u95F4\u63D2\u4EF6momentjs</span>\n<span class="token keyword">import</span> moment <span class="token keyword">from</span> <span class="token string">&#39;moment&#39;</span>\n\n<span class="token comment">// \u5B9A\u4E49\u65F6\u95F4\u683C\u5F0F\u5168\u5C40\u8FC7\u6EE4\u5668</span>\nVue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;dateFormat&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>daraStr<span class="token punctuation">,</span> pattern <span class="token operator">=</span> <span class="token string">&#39;YYYY-MM-DD HH:mm:ss&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token function">moment</span><span class="token punctuation">(</span>daraStr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u6A21\u677F\u4E2D\u4F7F\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token comment">&lt;!-- \u663E\u793A2019-12-05 10:10 --&gt;</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat(&#39;YYYY-MM-DD HH:mm&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n <span class="token comment">&lt;!-- \u663E\u793A10:10 --&gt;</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat(&#39;HH:mm&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n <span class="token comment">&lt;!-- \u663E\u793A2019-12-05 10:10:10 --&gt;</span>\n <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate | dateFormat}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u5355\u4E2A\u7EC4\u4EF6\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u5355\u4E2A\u7EC4\u4EF6\u5F15\u5165" aria-hidden="true">#</a> 2. \u5355\u4E2A\u7EC4\u4EF6\u5F15\u5165</h2><ol><li>\u76F4\u63A5\u5728\u6240\u9700\u8981\u7684\u7EC4\u4EF6\u4E2D\u5F15\u5165\u5C31\u53EF\u4EE5\u4E86</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>\n<span class="token keyword">let</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;moment&quot;</span><span class="token punctuation">)</span> <span class="token comment">// \u5F15\u5165</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token literal-property property">nowDate</span><span class="token operator">:</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">// \u83B7\u53D6\u65F6\u95F4\u6233</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// \u8F6C\u6362\u65F6\u95F4\u683C\u5F0F\u5E74\u6708\u65E5\u65F6\u5206\u79D2</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>nowDate <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nowDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6A21\u677F\u4E2D</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>time<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{nowDate}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528" aria-hidden="true">#</a> 3. \u4F7F\u7528</h2><h3 id="_3-1-\u57FA\u7840\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-1-\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a> 3.1 \u57FA\u7840\u4F7F\u7528</h3>', 10);
const _hoisted_11 = /* @__PURE__ */ createStaticVNode('<li><p>moment()</p><p>\u8981\u83B7\u53D6\u5F53\u524D\u7684\u65E5\u671F\u548C\u65F6\u95F4\uFF0C \u53EA\u9700\u8C03\u7528\u4E0D\u5E26\u53C2\u6570\u7684<code>moment()</code> \u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> now <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>', 1);
const _hoisted_12 = /* @__PURE__ */ createBaseVNode("p", null, "moment(dateStr)", -1);
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u5F53\u4ECE\u5B57\u7B26\u4E32\u521B\u5EFA moment \u65F6\uFF0C\u9700\u8981\u9996\u5148\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u4E0E\u5DF2\u77E5\u7684 ");
const _hoisted_14 = {
  href: "http://nodejs.cn/s/eV6MeQ",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_15 = /* @__PURE__ */ createTextVNode("ISO 8601");
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" \u683C\u5F0F\u5339\u914D");
const _hoisted_17 = /* @__PURE__ */ createTextVNode("\u5982\u679C\u672A\u627E\u5230\u5DF2\u77E5\u7684\u683C\u5F0F\uFF0C\u5219\u5728\u964D\u7EF4\u5230 ");
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("code", null, "new Date(string)", -1);
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" \u4E4B\u524D\u68C0\u67E5\u5B57\u7B26\u4E32\u662F\u5426\u4E0E ");
const _hoisted_20 = {
  href: "http://nodejs.cn/s/ETQ1d1",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode("RFC 2822 \u65E5\u671F\u65F6\u95F4");
const _hoisted_22 = /* @__PURE__ */ createTextVNode("\u683C\u5F0F\u5339\u914D\u3002");
const _hoisted_23 = /* @__PURE__ */ createStaticVNode('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> day <span class="token operator">=</span> <span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&quot;1995-12-25&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 1);
const _hoisted_24 = /* @__PURE__ */ createStaticVNode('<li><p><strong>moment(dateStr,format) \u6307\u5B9A\u683C\u5F0F</strong></p><p>\u5982\u679C\u4E0D\u6307\u5B9A\u683C\u5F0F\uFF0C\u964D\u7EF4\u5230 new Date(string)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$moment</span><span class="token punctuation">(</span><span class="token string">&quot;20210513150959&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;YYYYMMDDHHmmss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&#39;YYYY-MM-DD HH:mm&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>moment(dateStr,format[]) \u591A\u4E2A\u683C\u5F0F</p><p>\u5982\u679C\u4E0D\u77E5\u9053\u8F93\u5165\u5B57\u7B26\u4E32\u7684\u786E\u5207\u683C\u5F0F\uFF0C\u4F46\u662F\u77E5\u9053\u5B83\u53EF\u80FD\u662F\u591A\u79CD\u683C\u5F0F\u4E4B\u4E00\uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u683C\u5F0F\u6570\u7EC4\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token string">&quot;12-25-1995&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;MM-DD-YYYY&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;YYYY-MM-DD&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>', 2);
const _hoisted_26 = /* @__PURE__ */ createStaticVNode('<h3 id="_3-2-\u65E5\u671F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-2-\u65E5\u671F\u64CD\u4F5C" aria-hidden="true">#</a> 3.2 \u65E5\u671F\u64CD\u4F5C</h3><p>moment.js \u4F7F\u7528\u6D41\u5F0F\u63A5\u53E3\uFF0C\u64CD\u4F5C\u5982</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>moment().add(7, &#39;days&#39;).subtract(1, &#39;months&#39;).year(2009).hours(0).minutes(0).seconds(0);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li><p>add()</p><p>\u4E3A\u73B0\u6709\u7684 moment \u589E\u52A0\u65F6\u95F4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>moment().add(Number, String);\nmoment().add(Duration);\nmoment().add(Object);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;days&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u5BF9\u5E0C\u671B\u7B80\u77ED\uFF0C\u4E5F\u6709\u4E00\u4E9B\u5FEB\u6377\u7684\u952E\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">\u952E</th><th style="text-align:left;">\u5FEB\u6377\u952E</th></tr></thead><tbody><tr><td style="text-align:left;">years</td><td style="text-align:left;">y</td></tr><tr><td style="text-align:left;">quarters</td><td style="text-align:left;">Q</td></tr><tr><td style="text-align:left;">months</td><td style="text-align:left;">M</td></tr><tr><td style="text-align:left;">weeks</td><td style="text-align:left;">w</td></tr><tr><td style="text-align:left;">days</td><td style="text-align:left;">d</td></tr><tr><td style="text-align:left;">hours</td><td style="text-align:left;">h</td></tr><tr><td style="text-align:left;">minutes</td><td style="text-align:left;">m</td></tr><tr><td style="text-align:left;">seconds</td><td style="text-align:left;">s</td></tr><tr><td style="text-align:left;">milliseconds</td><td style="text-align:left;">ms</td></tr></tbody></table></li><li><h3 id="subtract" tabindex="-1"><a class="header-anchor" href="#subtract" aria-hidden="true">#</a> subtract()</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Number<span class="token punctuation">,</span> String<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Duration<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">moment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7\u51CF\u53BB\u65F6\u95F4\u6765\u6539\u53D8\u539F\u59CB\u7684 moment\u3002</p></li></ol>', 4);
const _hoisted_30 = /* @__PURE__ */ createTextVNode("\u200B ");
const _hoisted_31 = {
  href: "http://momentjs.cn/docs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("\u66F4\u591A\u4F7F\u7528\u53C2\u8003\u5B98\u65B9\u6587\u6863");
const _hoisted_33 = /* @__PURE__ */ createStaticVNode('<h3 id="_3-3-\u83B7\u53D6\u672C\u6708-\u5E74\u6700\u540E\u4E00\u5929" tabindex="-1"><a class="header-anchor" href="#_3-3-\u83B7\u53D6\u672C\u6708-\u5E74\u6700\u540E\u4E00\u5929" aria-hidden="true">#</a> 3.3 \u83B7\u53D6\u672C\u6708/\u5E74\u6700\u540E\u4E00\u5929</h3><p>\u83B7\u53D6\u67D0\u5E74\u67D0\u6708\u7684\u6700\u540E\u4E00\u5929</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>moment(\u65E5\u671F).endOf(&#39;month&#39;).format(&quot;YYYY-MM-DD&quot;)//\u65E5\u671F\u53EF\u4EE5\u662F \u5E74\u6708\u7684\u683C\u5F0F \u4E5F\u53EF\u4EE5\u662F\u5E74\u6708\u65E5\u7684\u683C\u5F0F\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>moment.js\u83B7\u53D6\u67D0\u5E74\u7684\u6700\u540E\u4E00\u5929</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>oment(\u65E5\u671F).endOf(&#39;year&#39;).format(&quot;YYYY-MM-DD&quot;)//\u65E5\u671F\u53EF\u4EE5\u662F\u5E74\u7684\u683C\u5F0F \u6216\u8005 \u5E74\u6708\u7684\u683C\u5F0F \u4E5F\u53EF\u4EE5\u662F\u5E74\u6708\u65E5\u7684\u683C\u5F0F\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 6);
const _hoisted_39 = {
  href: "http://momentjs.cn/docs/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("\u5B98\u65B9\u6587\u6863");
const _hoisted_41 = {
  href: "https://segmentfault.com/a/1190000021200938",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_42 = /* @__PURE__ */ createTextVNode("vue+moment.js\u4F7F\u7528");
const _hoisted_43 = {
  href: "https://blog.csdn.net/qq_37899792/article/details/89914476",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_44 = /* @__PURE__ */ createTextVNode("moment.js \u83B7\u53D6\u67D0\u5E74\u67D0\u6708\u7684\u6700\u540E\u4E00\u5929 \u4EE5\u53CA \u83B7\u53D6\u67D0\u5E74\u6700\u540E\u4E00\u5929");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("ol", null, [
      _hoisted_11,
      createBaseVNode("li", null, [
        _hoisted_12,
        createBaseVNode("ul", null, [
          createBaseVNode("li", null, [
            _hoisted_13,
            createBaseVNode("a", _hoisted_14, [
              _hoisted_15,
              createVNode(_component_ExternalLinkIcon)
            ]),
            _hoisted_16
          ]),
          createBaseVNode("li", null, [
            _hoisted_17,
            _hoisted_18,
            _hoisted_19,
            createBaseVNode("a", _hoisted_20, [
              _hoisted_21,
              createVNode(_component_ExternalLinkIcon)
            ]),
            _hoisted_22
          ])
        ]),
        _hoisted_23
      ]),
      _hoisted_24
    ]),
    _hoisted_26,
    createBaseVNode("p", null, [
      _hoisted_30,
      createBaseVNode("a", _hoisted_31, [
        _hoisted_32,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_33,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_39, [
        _hoisted_40,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_41, [
        _hoisted_42,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_43, [
        _hoisted_44,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var C4Moment______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C4-moment\u65F6\u95F4\u683C\u5F0F\u5316.html.vue"]]);
export { C4Moment______html as default };
