import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.dd6287fd.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5982\u4F55\u5408\u7406\u914D\u7F6E\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5408\u7406\u914D\u7F6E\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F" aria-hidden="true">#</a> \u5982\u4F55\u5408\u7406\u914D\u7F6E\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F</h1><h2 id="_1-\u7406\u8BBA\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u7406\u8BBA\u80CC\u666F" aria-hidden="true">#</a> 1. \u7406\u8BBA\u80CC\u666F</h2><p>\u4E00\u822C\u9700\u8981\u6839\u636E\u4EFB\u52A1\u7684\u7C7B\u578B\u6765\u914D\u7F6E\u7EBF\u7A0B\u6C60\u5927\u5C0F\uFF1A</p><ul><li><p>\u5982\u679C\u662FCPU\u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C<strong>\u5C31\u9700\u8981\u5C3D\u91CF\u538B\u69A8CPU</strong>\uFF0C\u5E94\u914D\u7F6E\u5C3D\u53EF\u80FD\u5C0F\u7684\u7EBF\u7A0B\uFF0C\u53C2\u8003\u503C\u53EF\u4EE5\u8BBE\u4E3A <em>N</em>CPU+1</p></li><li><p>\u5982\u679C\u662FIO\u5BC6\u96C6\u578B\u4EFB\u52A1\uFF0C<strong>\u56E0\u4E3AIO\u64CD\u4F5C\u4E0D\u5360\u7528CPU</strong>\uFF0C\u4E0D\u8981\u8BA9CPU\u95F2\u4E0B\u6765\uFF0C\u5E94\u52A0\u5927\u7EBF\u7A0B\u6570\u91CF,\u53C2\u8003\u503C\u53EF\u4EE5\u8BBE\u7F6E\u4E3A2NCPU+1</p></li></ul><p>\u5F53\u7136\uFF0C\u8FD9\u53EA\u662F\u4E00\u4E2A\u53C2\u8003\u503C\uFF0C\u5177\u4F53\u7684\u8BBE\u7F6E\u8FD8\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8FDB\u884C\u8C03\u6574\uFF0C\u6BD4\u5982\u53EF\u4EE5\u5148\u5C06\u7EBF\u7A0B\u6C60\u5927\u5C0F\u8BBE\u7F6E\u4E3A\u53C2\u8003\u503C\uFF0C\u518D\u89C2\u5BDF\u4EFB\u52A1\u8FD0\u884C\u60C5\u51B5\u548C\u7CFB\u7EDF\u8D1F\u8F7D\u3001\u8D44\u6E90\u5229\u7528\u7387\u6765\u8FDB\u884C\u9002\u5F53\u8C03\u6574\u3002</p><h2 id="_2-\u4EC0\u4E48\u662Fio\u79D8\u7C4D\u548Ccpu-\u79D8\u7C4D" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662Fio\u79D8\u7C4D\u548Ccpu-\u79D8\u7C4D" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662Fio\u79D8\u7C4D\u548CCPU \u79D8\u7C4D</h2><ul><li><p>io\u5BC6\u96C6\u578B\uFF08\u8981\u51CF\u5C11\u8BF7\u6C42\u6570\u91CF\u6216\u8BF7\u6C42\u5927\u5C0F\uFF09</p><ol><li>\u6570\u636E\u5E93\u64CD\u4F5C</li><li>\u7F51\u7EDC\u8BF7\u6C42\u64CD\u4F5C</li></ol></li><li><p>cpu \u5BC6\u96C6\u578B</p><ol><li>\u7A0B\u5E8F\u8BA1\u7B97</li></ol></li></ul><h2 id="_3-\u5B9E\u4F8B\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_3-\u5B9E\u4F8B\u6D4B\u8BD5" aria-hidden="true">#</a> 3. \u5B9E\u4F8B\u6D4B\u8BD5</h2><p>\u5728\u505A\u6570\u636E\u6E05\u7406\u65F6\uFF0C\u9700\u8981\u67E5\u8BE2\u6570\u636E\u5E93\uFF0C\u505A\u6570\u636E\u6E05\u6D17\u5B8C\u6210\u540E\uFF0C\u518D\u4FDD\u5B58\u5230\u6570\u636E\u5E93</p><p><strong>\u6D4B\u8BD5\u903B\u8F91\u6B65\u9AA4</strong></p><ol><li>\u67E5\u8BE2\u51FA\u603B\u8BB0\u5F55\u6570</li><li>\u6BCF100\u6761\u8BB0\u5F55\u5212\u5206\u4E00\u7EC4\u5728\u7EBF\u7A0B\u6C60\u4E2D\u64CD\u4F5C</li></ol><blockquote><p>\u6211win \u6838\u5FC3\u7EBF\u7A0B\u4E3A4</p></blockquote><blockquote><p>\u4E0D\u4F7F\u7528\u591A\u7EBF\u7A0B\u7684\u65F6\u5019\uFF0C\u6BCF\u5206\u949F\u6267\u884C500\u6761</p></blockquote><p>\u6539\u7528\u591A\u7EBF\u7A0B\u540E</p><table><thead><tr><th>\u7EBF\u7A0B\u6570</th><th>\u6BCF\u5206\u949F\u6267\u884C\u6761\u6570</th><th>5\u5206\u949F\u6267\u884C\u6761\u6570</th></tr></thead><tbody><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u65705\uFF0C\u6700\u5927\u7EBF\u7A0B\u657010</td><td>4400\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65701100\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657010\uFF0C\u6700\u5927\u7EBF\u7A0B\u657020</td><td>8400\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65702100\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657020\uFF0C\u6700\u5927\u7EBF\u7A0B\u657040</td><td>12300\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65704100\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657030\uFF0C\u6700\u5927\u7EBF\u7A0B\u657060</td><td>18300\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65706100\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657040\uFF0C\u6700\u5927\u7EBF\u7A0B\u657080</td><td>24300\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65708100\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657050\uFF0C\u6700\u5927\u7EBF\u7A0B\u6570100</td><td>26716\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65709994\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657060\uFF0C\u6700\u5927\u7EBF\u7A0B\u6570120</td><td>27300\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65709854\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657070\uFF0C\u6700\u5927\u7EBF\u7A0B\u6570140</td><td>19942\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65709747\uFF09</td><td></td></tr><tr><td>\u6838\u5FC3\u7EBF\u7A0B\u657080\uFF0C\u6700\u5927\u7EBF\u7A0B\u6570160</td><td>29770\uFF08\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u65709747\uFF09</td><td></td></tr></tbody></table><p>\u521D\u6B21\u7EBF\u7A0B\u505C\u987F\u6761\u6570\uFF1A\u6E05\u7406\u5230\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u4ECE0\u5F00\u59CB\u5230\u4E00\u4E2A\u7A33\u5B9A\u7684\u6570\uFF08\u7EBF\u7A0B\u6C60\u5DEE\u4E0D\u591A\u540C\u4E00\u65F6\u95F4\u6267\u884C\u5B8C\u6BD5\u7684\uFF0C\u8FC7\u6E21\u5230\u5176\u4ED6\u7EBF\u7A0B\uFF09</p><p>\u8BE5\u5B9E\u9A8C\u5EFA\u7ACB\u5728\u6BCF\u5206\u949F\u7684\u57FA\u7840\u4E0A\u3002\u6BCF\u4E2A\u7EBF\u7A0B\u6267\u884C\u65F6\u95F415-20s\u5DE6\u53F3\u3002\u90A31\u5206\u949F\u6267\u884C3-4\u6B21\u3002\u6240\u4EE5\u8BEF\u5DEE\u6BD4\u8F83\u660E\u663E</p><h3 id="_3-1-\u5B9E\u9A8C\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5B9E\u9A8C\u5206\u6790" aria-hidden="true">#</a> 3.1 \u5B9E\u9A8C\u5206\u6790</h3><p>\u5B9E\u73B0\u51FA\u7684\u7ED3\u679C\u663E\u793A2n+1 \u7684\u7ED3\u8BBA\u3002\u7EBF\u7A0B\u6570\u91CF\u8FD8\u8FDC\u4E0D\u80FD\u8FBE\u5230\u6700\u4F73\u7EBF\u7A0B\u3002\u7EE7\u7EED\u67E5\u9605\u8D44\u6599\u53D1\u73B0\u4E00\u4E2A\u4F30\u7B97\u516C\u5F0F</p><blockquote><p>\u6700\u4F73\u7EBF\u7A0B\u6570\u76EE = \uFF08\uFF08\u7EBF\u7A0B\u7B49\u5F85\u65F6\u95F4+\u7EBF\u7A0BCPU\u65F6\u95F4\uFF09/\u7EBF\u7A0BCPU\u65F6\u95F4 \uFF09* CPU\u6570\u76EE</p></blockquote><p>\u6BD4\u5982\u5E73\u5747\u6BCF\u4E2A\u7EBF\u7A0B CPU \u8FD0\u884C\u65F6\u95F4\u4E3A 0.5s\uFF0C\u800C\u7EBF\u7A0B\u7B49\u5F85\u65F6\u95F4\uFF08\u975E CPU \u8FD0\u884C\u65F6\u95F4\uFF0C\u6BD4\u5982 IO\uFF09\u4E3A 1.5s\uFF0CCPU \u6838\u5FC3\u6570\u4E3A 8\uFF0C\u90A3\u4E48\u6839\u636E\u4E0A\u9762\u8FD9\u4E2A\u516C\u5F0F\u4F30\u7B97\u5F97\u5230\uFF1A((0.5+1.5)/0.5)*8=32\u3002\u8FD9\u4E2A\u516C\u5F0F\u8FDB\u4E00\u6B65\u8F6C\u5316\u4E3A\uFF1A</p><blockquote><p>\u6700\u4F73\u7EBF\u7A0B\u6570\u76EE = \uFF08\u7EBF\u7A0B\u7B49\u5F85\u65F6\u95F4\u4E0E\u7EBF\u7A0BCPU\u65F6\u95F4\u4E4B\u6BD4 + 1\uFF09* CPU\u6570\u76EE</p></blockquote><p><strong>\u7EBF\u7A0B\u7B49\u5F85\u65F6\u95F4\u6240\u5360\u6BD4\u4F8B\u8D8A\u9AD8\uFF0C\u9700\u8981\u8D8A\u591A\u7EBF\u7A0B\u3002\u7EBF\u7A0B CPU \u65F6\u95F4\u6240\u5360\u6BD4\u4F8B\u8D8A\u9AD8\uFF0C\u9700\u8981\u8D8A\u5C11\u7EBF\u7A0B\u3002</strong></p><p>\u4E00\u4E2A\u7CFB\u7EDF\u6700\u5FEB\u7684\u90E8\u5206\u662F CPU\uFF0C\u6240\u4EE5\u51B3\u5B9A\u4E00\u4E2A\u7CFB\u7EDF\u541E\u5410\u91CF\u4E0A\u9650\u7684\u662F CPU\u3002\u589E\u5F3A CPU \u5904\u7406\u80FD\u529B\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u7CFB\u7EDF\u541E\u5410\u91CF\u4E0A\u9650\u3002\u4F46\u6839\u636E\u77ED\u677F\u6548\u5E94\uFF0C\u771F\u5B9E\u7684\u7CFB\u7EDF\u541E\u5410\u91CF\u5E76\u4E0D\u80FD\u5355\u7EAF\u6839\u636E CPU \u6765\u8BA1\u7B97\u3002\u90A3\u8981\u63D0\u9AD8\u7CFB\u7EDF\u541E\u5410\u91CF\uFF0C\u5C31\u9700\u8981\u4ECE \u201C\u7CFB\u7EDF\u77ED\u677F\u201D\uFF08\u6BD4\u5982\u7F51\u7EDC\u5EF6\u8FDF\u3001IO\uFF09\u7740\u624B\uFF1A</p><ul><li>\u5C3D\u91CF\u63D0\u9AD8\u77ED\u677F\u64CD\u4F5C\u7684\u5E76\u884C\u5316\u6BD4\u7387\uFF0C\u6BD4\u5982\u591A\u7EBF\u7A0B\u4E0B\u8F7D\u6280\u672F</li><li>\u589E\u5F3A\u77ED\u677F\u80FD\u529B\uFF0C\u6BD4\u5982\u7528 NIO \u66FF\u4EE3 IO</li></ul><h2 id="\u4EE3\u7801\u6D4B\u7B97" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u6D4B\u7B97" aria-hidden="true">#</a> \u4EE3\u7801\u6D4B\u7B97</h2>', 26);
const _hoisted_27 = {
  href: "https://github.com/sunshanpeng/dark_magic",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_28 = /* @__PURE__ */ createTextVNode("\u5408\u7406\u4F30\u7B97java\u7684\u7EBF\u7A0B\u6C60\u5927\u5C0F\u53CA\u961F\u5217\u6570");
const _hoisted_29 = /* @__PURE__ */ createBaseVNode("h2", {
  id: "\u53C2\u8003\u6587\u7AE0",
  tabindex: "-1"
}, [
  /* @__PURE__ */ createBaseVNode("a", {
    class: "header-anchor",
    href: "#\u53C2\u8003\u6587\u7AE0",
    "aria-hidden": "true"
  }, "#"),
  /* @__PURE__ */ createTextVNode(" \u53C2\u8003\u6587\u7AE0")
], -1);
const _hoisted_30 = {
  href: "https://blog.csdn.net/feilang00/article/details/95940059?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-2&spm=1001.2101.3001.4242",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_31 = /* @__PURE__ */ createTextVNode("\u5982\u4F55\u5408\u7406\u5730\u4F30\u7B97\u7EBF\u7A0B\u6C60\u5927\u5C0F\uFF1F");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_27, [
        _hoisted_28,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_29,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_30, [
        _hoisted_31,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var _____________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5982\u4F55\u5408\u7406\u914D\u7F6E\u7EBF\u7A0B\u6C60\u7684\u5927\u5C0F.html.vue"]]);
export { _____________html as default };
