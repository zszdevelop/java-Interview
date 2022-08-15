import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u8FBE\u68A6\u6570\u636E\u5E93-dmrman-\u5907\u4EFD-\u6062\u590D" tabindex="-1"><a class="header-anchor" href="#\u8FBE\u68A6\u6570\u636E\u5E93-dmrman-\u5907\u4EFD-\u6062\u590D" aria-hidden="true">#</a> \u8FBE\u68A6\u6570\u636E\u5E93-DMRMAN\uFF08\u5907\u4EFD\uFF0C\u6062\u590D\uFF09</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u518DWindows\u4E2D,\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u56FE\u5F62\u5316\u5BA2\u6237\u7AEF\u5DE5\u5177\u8FDB\u884C\u5907\u4EFD\u8FD8\u539F\uFF0C\u4F46\u662F\u5728Linux \u4E2D\u5C31\u4E0D\u592A\u597D\u4F7F\u4E86\u3002\u9700\u8981\u4F7F\u7528DMRMAN</p><h2 id="_2-\u4F7F\u7528\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528\u6B65\u9AA4" aria-hidden="true">#</a> 2. \u4F7F\u7528\u6B65\u9AA4</h2><p>\u524D\u7F6E\u6B65\u9AA4</p><ol><li><p>\u505C\u6B62\u670D\u52A1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl stop DmServiceDAMENG.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u5230 dmaba\u7528\u6237</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">su</span> - dmdba\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5728bin\u76EE\u5F55\u4E0B\u542F\u52A8DMRMAN</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./dmrman\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_2-1-\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5907\u4EFD" aria-hidden="true">#</a> 2.1 \u5907\u4EFD</h3><ol><li><p>\u5168\u91CF\u5907\u4EFD</p><div class="language-SH ext-SH line-numbers-mode"><pre class="language-SH"><code>BACKUP DATABASE &#39;/soft/dm8/data/DAMENG/dm.ini&#39; FULL BACKUPSET &#39;/soft/dm8/back/dmmback&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="_2-2-\u8FD8\u539F" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8FD8\u539F" aria-hidden="true">#</a> 2.2 \u8FD8\u539F</h3><ol><li><p>\u8FD8\u539F\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RESTORE DATABASE <span class="token string">&#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span> from backupset <span class="token string">&#39;/soft/dm8/back/dmmback&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6062\u590D\u6570\u636E\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RECOVER DATABASE <span class="token string">&#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span> from backupset <span class="token string">&#39;/soft/dm8/back/dmmback&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u66F4\u65B0dm_nagic</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>RECOVER DATABASE <span class="token string">&#39;/soft/dm8/data/DAMENG/dm.ini&#39;</span> update db_magic\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start DmServiceDAMENG.service\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
var _____DMRMAN_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u8FBE\u68A6\u6570\u636E\u5E93-DMRMAN.html.vue"]]);
export { _____DMRMAN_html as default };
