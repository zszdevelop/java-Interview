import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, w as withCtx, e as createStaticVNode, d as createTextVNode } from "./app.f59c6cb9.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="java\u53CD\u5C04-reflection" tabindex="-1"><a class="header-anchor" href="#java\u53CD\u5C04-reflection" aria-hidden="true">#</a> Java\u53CD\u5C04(Reflection)</h1><h2 id="_1-\u4EC0\u4E48\u662F\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_1-\u4EC0\u4E48\u662F\u53CD\u5C04" aria-hidden="true">#</a> 1. \u4EC0\u4E48\u662F\u53CD\u5C04\uFF1F</h2><p>\u53EF\u4EE5\u5728<strong>\u8FD0\u884C\u65F6\u83B7\u5F97</strong>\u7A0B\u5E8F\u6216\u7A0B\u5E8F\u96C6\u4E2D<strong>\u6BCF\u4E00\u4E2A\u7C7B\u578B\u7684\u6210\u5458\u548C\u6210\u5458\u7684\u4FE1\u606F</strong>\u3002</p><p>\u7A0B\u5E8F\u4E2D\u4E00\u822C\u7684\u5BF9\u8C61\u7684\u7C7B\u578B\u90FD\u662F\u5728\u7F16\u8BD1\u671F\u786E\u5B9A\u4E0B\u6765\u7684\uFF0C\u800C<strong>java\u53CD\u5C04\u673A\u5236\u53EF\u4EE5\u52A8\u6001\u5730\u521B\u5EFA\u5BF9\u8C61\u5E76\u8C03\u7528\u5176\u5C5E\u6027</strong>\uFF0C\u8FD9\u6837\u7684\u5BF9\u8C61\u5728\u7F16\u8BD1\u671F\u662F\u672A\u77E5\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u53CD\u5C04\u96C6\u4E2D\u5236\u76F4\u63A5\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5373\u4F7F\u8FD9\u4E2A\u5BF9\u8C61\u7684\u7C7B\u578B\u5728\u7F16\u8BD1\u5668\u662F\u672A\u77E5\u7684\u3002</p><h2 id="_2-\u53CD\u5C04\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u53CD\u5C04\u7684\u7F3A\u70B9" aria-hidden="true">#</a> 2. \u53CD\u5C04\u7684\u7F3A\u70B9\uFF1F</h2><ul><li>\u4F1A\u989D\u5916\u6D88\u8017\u4E00\u5B9A\u7684\u7CFB\u7EDF\u8D44\u6E90</li><li>\u4F1A\u7834\u574F\u5C01\u88C5\u6027\u4ECE\u800C\u5BFC\u81F4\u5B89\u5168\u95EE\u9898</li></ul><h2 id="_3-\u4F60\u662F\u600E\u4E48\u7406\u89E3\u53CD\u5C04\u7684-\u4E3A\u4EC0\u4E48\u6846\u67B6\u9700\u8981\u53CD\u5C04" tabindex="-1"><a class="header-anchor" href="#_3-\u4F60\u662F\u600E\u4E48\u7406\u89E3\u53CD\u5C04\u7684-\u4E3A\u4EC0\u4E48\u6846\u67B6\u9700\u8981\u53CD\u5C04" aria-hidden="true">#</a> 3. \u4F60\u662F\u600E\u4E48\u7406\u89E3\u53CD\u5C04\u7684\uFF08\u4E3A\u4EC0\u4E48\u6846\u67B6\u9700\u8981\u53CD\u5C04\uFF09</h2><p><strong>java\u53CD\u5C04\u673A\u5236\u53EF\u4EE5\u52A8\u6001\u5730\u521B\u5EFA\u5BF9\u8C61\u5E76\u8C03\u7528\u5176\u5C5E\u6027</strong>\u3002</p><p>\u5F88\u591A\u6846\u67B6\uFF08\u6BD4\u5982Spring\uFF09\u90FD\u662F\u914D\u7F6E\u5316\u7684\uFF08\u6BD4\u5982\u901A\u8FC7XML\u6587\u4EF6\u914D\u7F6EBean\uFF09\uFF0C<strong>\u4E3A\u4E86\u4FDD\u8BC1\u6846\u67B6\u7684\u901A\u7528\u6027</strong>\uFF0C\u5B83\u4EEC\u53EF\u80FD\u9700\u8981<strong>\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u52A0\u8F7D\u4E0D\u540C\u7684\u5BF9\u8C61\u6216\u7C7B\uFF0C\u8C03\u7528\u4E0D\u540C\u7684\u65B9\u6CD5</strong>\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u5FC5\u987B\u7528\u5230\u53CD\u5C04\uFF0C\u8FD0\u884C\u65F6\u52A8\u6001\u52A0\u8F7D\u9700\u8981\u52A0\u8F7D\u7684\u5BF9\u8C61</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 10);
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u6DF1\u5165\u89E3\u6790Java\u53CD\u5C04\uFF081\uFF09 - \u57FA\u7840");
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createVNode(_component_RouterLink, { to: "/java/base/%5Bhttps:/www.sczyh30.com/posts/Java/java-reflection-1/#%E4%B8%80%E3%80%81%E5%9B%9E%E9%A1%BE%EF%BC%9A%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%B0%84%EF%BC%9F%5D(https:/www.sczyh30.com/posts/Java/java-reflection-1/#%E4%B8%80%E3%80%81%E5%9B%9E%E9%A1%BE%EF%BC%9A%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%B0%84%EF%BC%9F)" }, {
        default: withCtx(() => [
          _hoisted_11
        ]),
        _: 1
      })
    ])
  ]);
}
var Java___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Java\u53CD\u5C04.html.vue"]]);
export { Java___html as default };
