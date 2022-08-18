import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="jvm\u9762\u8BD5\u63D0\u95EE" tabindex="-1"><a class="header-anchor" href="#jvm\u9762\u8BD5\u63D0\u95EE" aria-hidden="true">#</a> JVM\u9762\u8BD5\u63D0\u95EE</h1><h2 id="_1-\u5185\u5B58\u533A\u57DF\u7BC7" tabindex="-1"><a class="header-anchor" href="#_1-\u5185\u5B58\u533A\u57DF\u7BC7" aria-hidden="true">#</a> 1. \u5185\u5B58\u533A\u57DF\u7BC7</h2><ol><li>\u4ECB\u7ECD\u4E0BJava\u5185\u5B58\u533A\u57DF\uFF08\u8FD0\u884C\u65F6\u6570\u636E\u533A\uFF09</li><li>\u54EA\u4E9B\u662F\u7EBF\u7A0B\u79C1\u6709\u7684\uFF1F\u54EA\u4E9B\u662F\u7EBF\u7A0B\u5171\u4EAB\u7684\uFF1F</li><li>\u7A0B\u5E8F\u8BA1\u6570\u5668\u90FD\u6709\u54EA\u4E9B\u4F5C\u7528\uFF1F</li><li>java\u865A\u62DF\u673A\u6808\u6709\u54EA\u4E9B\u4F5C\u7528\uFF1F</li><li>\u672C\u5730\u65B9\u6CD5\u6808\u548C\u865A\u62DF\u673A\u6808\u7684\u533A\u522B\uFF1F</li><li>\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0Bjava \u5806\uFF1F</li><li>\u65B0\u751F\u4EE3\u5982\u4F55\u664B\u5347\u5230\u8001\u5E74\u4EE3\u7684\uFF1F</li></ol><h2 id="_2-\u5783\u573E\u56DE\u6536\u7BC7" tabindex="-1"><a class="header-anchor" href="#_2-\u5783\u573E\u56DE\u6536\u7BC7" aria-hidden="true">#</a> 2. \u5783\u573E\u56DE\u6536\u7BC7</h2><ol><li>JVM \u662F\u5982\u4F55\u8FDB\u884C\u5783\u573E\u56DE\u6536\u7684\uFF1F</li><li>\u6211\u4EEC\u5982\u4F55\u6765\u5224\u65AD\u5BF9\u8C61\u5DF2\u7ECF\u65E0\u6548\uFF1F</li><li>\u5982\u4F55\u5BF9\u4E00\u4E2A\u5BF9\u8C61\u4E0D\u53EF\u8FBE\uFF0C\u90A3\u4E48\u4ED6\u4E00\u5B9A\u975E\u6B7B\u4E0D\u53EF\u5417\uFF1F</li><li>\u4ECB\u7ECD\u4E00\u4E0Bjava \u7684\u56DB\u79CD\u5F15\u7528\uFF1F</li><li>\u5783\u573E\u6536\u96C6\u90FD\u6709\u54EA\u4E9B\u7B97\u6CD5\uFF1F\u5404\u81EA\u7684\u7279\u70B9\u662F\u4EC0\u4E48\uFF1F</li><li>\u4E3A\u4EC0\u4E48\u8981\u5206\u65B0\u751F\u4EE3\u548C\u8001\u5E74\u4EE3?</li><li>\u4ECB\u7ECD\u4E00\u4E0BCMS,G1\u6536\u96C6\u5668</li></ol><h2 id="_3-\u7C7B\u52A0\u8F7D\u7BC7" tabindex="-1"><a class="header-anchor" href="#_3-\u7C7B\u52A0\u8F7D\u7BC7" aria-hidden="true">#</a> 3. \u7C7B\u52A0\u8F7D\u7BC7</h2><ol><li><p>\u8BF4\u8BF4Java\u7C7B\u52A0\u8F7D\u8FC7\u7A0B\u7684\uFF1F</p></li><li><p>\u7C7B\u52A0\u8F7D\u4E2D\u7684\u52A0\u8F7D\u6B65\u9AA4\u662F\u505A\u4EC0\u4E48\u7684\uFF1F</p></li><li><p>\u6709\u54EA\u51E0\u79CD\u7C7B\u52A0\u8F7D\u5668\uFF0C\u4ED6\u4EEC\u7684\u804C\u8D23\u662F\u4EC0\u4E48\uFF1F</p></li><li><p>\u4ECB\u7ECD\u4E00\u4E0BJAVA \u7684\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\uFF1F</p></li><li><p>\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u6709\u4EC0\u4E48\u597D\u5904\uFF1F</p></li><li><p>\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u4F7F\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E\uFF1F</p></li><li><p>\u4E3A\u4EC0\u4E48Tomcat \u5BB9\u5668\u591A\u4E2A\u5E94\u7528\u4E4B\u95F4\uFF0C\u4E3A\u4EC0\u4E48\u80FD\u4F9D\u8D56\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u7C7B\u5E93\u7684\u4E0D\u540C\u7248\u672C\uFF1F</p></li></ol><h2 id="_4-jvm\u6545\u969C\u6392\u67E5\u4E0E\u8C03\u4F18" tabindex="-1"><a class="header-anchor" href="#_4-jvm\u6545\u969C\u6392\u67E5\u4E0E\u8C03\u4F18" aria-hidden="true">#</a> 4. JVM\u6545\u969C\u6392\u67E5\u4E0E\u8C03\u4F18</h2><ol><li><p>\u4F60\u6709\u5BF9JVM \u505A\u8FC7\u6027\u80FD\u8C03\u4F18\u5417\uFF1F\u600E\u4E48\u505A\u7684\uFF1F</p></li><li><p>\u4F60\u6709\u8FC7\u7EBF\u4E0AJVM\u6545\u969C\u6392\u67E5\u7ECF\u9A8C\u5417\uFF1F\u4F60\u90FD\u662F\u600E\u4E48\u505A\u7684\uFF1F</p></li></ol>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
var JVM_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "JVM\u9762\u8BD5\u63D0\u95EE.html.vue"]]);
export { JVM_____html as default };
