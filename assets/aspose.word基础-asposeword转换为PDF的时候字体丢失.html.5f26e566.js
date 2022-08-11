import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.f59c6cb9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="aspose-word\u8F6C\u6362\u4E3Apdf\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931" tabindex="-1"><a class="header-anchor" href="#aspose-word\u8F6C\u6362\u4E3Apdf\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931" aria-hidden="true">#</a> Aspose.Word\u8F6C\u6362\u4E3APDF\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u6211\u4EEC\u4F7F\u7528Aspose.Word \u751F\u6210word\u7684\u65F6\u5019\u5B57\u4F53\u90FD\u662F\u6B63\u5E38\u7684\uFF0C\u4F46\u662F\u8F6C\u6210pdf \u4E4B\u540E\u5B57\u4F53\u5C31\u4E22\u5931\u4E86\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609085737039.png" alt="image-20220609085737039"></p><h2 id="_2-\u95EE\u9898\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_2-\u95EE\u9898\u539F\u56E0" aria-hidden="true">#</a> 2. \u95EE\u9898\u539F\u56E0</h2><p>Aspose.Word \u4F7F\u7528\u7684\u5B57\u4F53\u6587\u4EF6\u5E76\u6CA1\u6709\u6B63\u786E\u6307\u5411\u7CFB\u7EDF\u7684\u5B57\u4F53\uFF08\u7F51\u4E0A\u6709\u7684\u8BF4\u662F\u56E0\u4E3A\u4F7F\u7528\u4E86\u865A\u62DF\u8DEF\u5F84\uFF0C\u5E76\u4E0D\u662F\u771F\u6B63\u7684\u8DEF\u5F84\uFF09\uFF0C\u5BFC\u81F4\u6700\u7EC8\u6E32\u67D3pdf\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931</p><h2 id="_3-\u89E3\u51B3\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u65B9\u6848" aria-hidden="true">#</a> 3. \u89E3\u51B3\u65B9\u6848</h2><p>\u5C06\u7528\u6237\u76EE\u5F55\u5B57\u4F53\u6DFB\u52A0\u5230\u5B57\u4F53\u6E90\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>\n    <span class="token doc-comment comment">/**\n     * \u8BBE\u7F6E\u5B57\u4F53\u8D44\u6E90\n     * \u4E0D\u8BBE\u7F6E\u4F1A\u5BFC\u81F4word\u8F6Cpdf\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931\n     */</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">setFontsSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">String</span> fontsDir <span class="token operator">=</span> <span class="token string">&quot;/usr/share/fonts&quot;</span><span class="token punctuation">;</span>\n\n        <span class="token comment">//\u5C06\u7528\u6237\u76EE\u5F55\u5B57\u4F53\u6DFB\u52A0\u5230\u5B57\u4F53\u6E90\u4E2D</span>\n        <span class="token class-name">FontSourceBase</span><span class="token punctuation">[</span><span class="token punctuation">]</span> originalFontSources <span class="token operator">=</span> <span class="token class-name">FontSettings</span><span class="token punctuation">.</span><span class="token function">getDefaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getFontsSources</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token class-name">FolderFontSource</span> folderFontSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FolderFontSource</span><span class="token punctuation">(</span>fontsDir<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">FontSourceBase</span><span class="token punctuation">[</span><span class="token punctuation">]</span> updatedFontSources <span class="token operator">=</span> <span class="token punctuation">{</span>originalFontSources<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> folderFontSource<span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token class-name">FontSettings</span><span class="token punctuation">.</span><span class="token function">getDefaultInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setFontsSources</span><span class="token punctuation">(</span>updatedFontSources<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5168\u5C40\u8C03\u7528\u4E00\u6B21\u5373\u53EF\uFF0C\u4E0D\u7528\u6BCF\u6B21\u8F6C\u6362\u8BBE\u7F6E</p><h2 id="_4-\u8F6C\u6362\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#_4-\u8F6C\u6362\u6548\u679C" aria-hidden="true">#</a> 4. \u8F6C\u6362\u6548\u679C</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220609090124782.png" alt="image-20220609090124782"></p>', 12);
const _hoisted_13 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}
var aspose_word__Asposeword___PDF________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "aspose.word\u57FA\u7840-asposeword\u8F6C\u6362\u4E3APDF\u7684\u65F6\u5019\u5B57\u4F53\u4E22\u5931.html.vue"]]);
export { aspose_word__Asposeword___PDF________html as default };
