import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mockito\u5355\u6D4Bservice" tabindex="-1"><a class="header-anchor" href="#mockito\u5355\u6D4Bservice" aria-hidden="true">#</a> Mockito\u5355\u6D4Bservice</h1><ul><li><p>Mock\u58F0\u660E\u7684\u5BF9\u8C61\uFF0C\u5BF9\u51FD\u6570\u7684\u8C03\u7528\u5747\u6267\u884Cmock\uFF08\u5373\u865A\u5047\u51FD\u6570\uFF09\uFF0C\u4E0D\u6267\u884C\u771F\u6B63\u90E8\u5206\u3002</p></li><li><p>Spy\u58F0\u660E\u7684\u5BF9\u8C61\uFF0C\u5BF9\u51FD\u6570\u7684\u8C03\u7528\u5747\u6267\u884C\u771F\u6B63\u90E8\u5206\u3002</p></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PushControllerTest</span> <span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Spy</span>\n    <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>\n    \n    <span class="token annotation punctuation">@InjectMocks</span>\n    <span class="token keyword">private</span> <span class="token class-name">PushServiceImpl</span> pushService<span class="token punctuation">;</span>\n\n\n    <span class="token annotation punctuation">@Before</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">MockitoAnnotations</span><span class="token punctuation">.</span><span class="token function">initMocks</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token annotation punctuation">@Test</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>\n        pushService<span class="token punctuation">.</span><span class="token function">sendVersionUpdatePush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 3);
const _hoisted_4 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_4);
}
var Mockito__service_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mockito\u5355\u6D4Bservice.html.vue"]]);
export { Mockito__service_html as default };
