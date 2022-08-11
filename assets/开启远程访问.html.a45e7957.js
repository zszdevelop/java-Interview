import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.f59c6cb9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE" aria-hidden="true">#</a> \u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE</h1><h3 id="_1-1-\u6CE8\u91CA-bind-127-0-0-1" tabindex="-1"><a class="header-anchor" href="#_1-1-\u6CE8\u91CA-bind-127-0-0-1" aria-hidden="true">#</a> 1.1 \u6CE8\u91CA bind 127.0.0.1</h3><p><strong>\u6CE8\u91CA\u6389bind 127.0.0.1\u53EF\u4EE5\u4F7F\u6240\u6709\u7684ip\u8BBF\u95EEredis</strong></p><p>\u82E5\u662F\u60F3\u6307\u5B9A\u591A\u4E2Aip\u8BBF\u95EE\uFF0C\u4F46\u5E76\u4E0D\u662F\u5168\u90E8\u7684ip\u8BBF\u95EE\uFF0C\u53EF\u4EE5bind</p><p>vim /usr/local/redis/bin/redis.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#bind 127.0.0.1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-2-protected-mode-\u6539\u4E3Ano" tabindex="-1"><a class="header-anchor" href="#_1-2-protected-mode-\u6539\u4E3Ano" aria-hidden="true">#</a> 1.2 protected-mode \u6539\u4E3Ano</h3><p>\u5728redis3.2\u4E4B\u540E\uFF0Credis\u589E\u52A0\u4E86protected-mode\uFF0C\u5728\u8FD9\u4E2A\u6A21\u5F0F\u4E0B\uFF0C\u5373\u4F7F\u6CE8\u91CA\u6389\u4E86bind 127.0.0.1\uFF0C\u518D\u8BBF\u95EEredisd\u65F6\u5019\u8FD8\u662F\u62A5\u9519\uFF0C</p><p>\u5C06protected-mode \u6539\u6210no</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected-mode no\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_1-3-\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5\u5BC6\u7801" aria-hidden="true">#</a> 1.3 \u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5\u5BC6\u7801</h3><p>\u5982\u679C\u4E0D\u8BBE\u7F6E\u8FDC\u7A0B\u8FDE\u63A5\u5BC6\u7801\uFF0C\u90A3\u4E48\u4E0D\u7528\u5BC6\u7801\u5C31\u80FD\u767B\u5F55\uFF0C\u975E\u5E38\u5371\u9669\uFF0C\u5F88\u53EF\u80FD\u4F1A\u88AB\u6316\u77FF\u7B49\u7A0B\u5E8F\u5165\u4FB5</p><p>\u627E\u5230requirepass \u53BB\u6389\u6CE8\u91CA\uFF0C\u6539\u6210\u4F60\u8981\u7684\u5BC6\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># requirepass foobared\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-4-\u91CD\u542Fredis" tabindex="-1"><a class="header-anchor" href="#_1-4-\u91CD\u542Fredis" aria-hidden="true">#</a> 1.4 \u91CD\u542Fredis</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./redis-server redis.conf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
var _______html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5F00\u542F\u8FDC\u7A0B\u8BBF\u95EE.html.vue"]]);
export { _______html as default };
