import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="linux\u7F51\u7EDC\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#linux\u7F51\u7EDC\u76D1\u63A7" aria-hidden="true">#</a> Linux\u7F51\u7EDC\u76D1\u63A7</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>linux\u4E2D\u7F51\u7EDC\u76D1\u63A7\u547D\u4EE4\u4E3B\u8981\u662Fnetstat \u548Csar</p><h2 id="_2-\u76D1\u63A7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u76D1\u63A7\u547D\u4EE4" aria-hidden="true">#</a> 2. \u76D1\u63A7\u547D\u4EE4</h2><h3 id="_2-1-netstat" tabindex="-1"><a class="header-anchor" href="#_2-1-netstat" aria-hidden="true">#</a> 2.1 netstat</h3><h4 id="_2-1-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.1.1 \u7B80\u4ECB</h4><p>netstat\u547D\u4EE4\u4E00\u822C\u7528\u4E8E\u68C0\u9A8C\u672C\u673A\u5404\u7AEF\u53E3\u7684\u7F51\u7EDC\u8FDE\u63A5\u60C5\u51B5\uFF0C\u7528\u4E8E\u663E\u793A\u4E0EIP\u3001TCP\u3001UDP\u548CICMP\u534F\u8BAE\u76F8\u5173\u7684\u7EDF\u8BA1\u6570\u636E\u3002</p><h4 id="_2-1-2-\u5E38\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u5E38\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> 2.1.2 \u5E38\u7528\u5B9E\u4F8B\uFF1A</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -aup      <span class="token comment"># \u8F93\u51FA\u6240\u6709UDP\u8FDE\u63A5\u72B6\u51B5</span>\n<span class="token function">netstat</span> -atp      <span class="token comment"># \u8F93\u51FA\u6240\u6709TCP\u8FDE\u63A5\u72B6\u51B5</span>\n<span class="token function">netstat</span> -s        <span class="token comment"># \u663E\u793A\u5404\u4E2A\u534F\u8BAE\u7684\u7F51\u7EDC\u7EDF\u8BA1\u4FE1\u606F</span>\n<span class="token function">netstat</span> -i        <span class="token comment"># \u663E\u793A\u7F51\u5361\u5217\u8868</span>\n<span class="token function">netstat</span> -r        <span class="token comment"># \u663E\u793A\u8DEF\u7531\u8868\u4FE1\u606F</span>\n<span class="token function">netstat</span> -l        <span class="token comment"># \u53EA\u663E\u793A\u76D1\u542C\u7AEF\u53E3</span>\n<span class="token function">netstat</span> -lt       <span class="token comment"># \u53EA\u5217\u51FA\u6240\u6709\u76D1\u542C tcp \u7AEF\u53E3</span>\n<span class="token function">netstat</span> -lu       <span class="token comment"># \u53EA\u5217\u51FA\u6240\u6709\u76D1\u542C udp \u7AEF\u53E3</span>\n<span class="token function">netstat</span> -lx       <span class="token comment"># \u53EA\u5217\u51FA\u6240\u6709\u76D1\u542C UNIX \u7AEF\u53E3</span>\n<span class="token function">netstat</span> -p\u6216--programs <span class="token comment"># \u663E\u793A\u6B63\u5728\u4F7F\u7528Socket\u7684\u7A0B\u5E8F\u8BC6\u522B\u7801\u548C\u7A0B\u5E8F\u540D\u79F0\uFF1B</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-3-tldr-\u4E2D\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-1-3-tldr-\u4E2D\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> 2.1.3 tldr \u4E2D\u7684\u4ECB\u7ECD</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">netstat</span>\n\n  \u663E\u793A\u4E0E\u7F51\u7EDC\u76F8\u5173\u7684\u4FE1\u606F\uFF0C\u5982\u6253\u5F00\u7684\u8FDE\u63A5\u3001\u6253\u5F00\u7684\u5957\u63A5\u5B57\u7AEF\u53E3\u7B49.\n  \u66F4\u591A\u4FE1\u606F: https://www.unix.com/man-page/osx/1/netstat.\n\n  - \u5217\u51FA\u6240\u6709\u7AEF\u53E3:\n    <span class="token function">netstat</span> -a\n\n  - \u5217\u51FA\u6240\u6709\u88AB\u4FA6\u542C\u7AEF\u53E3:\n    <span class="token function">netstat</span> -l\n\n  - \u5217\u51FA\u4FA6\u542C\u7684 TCP \u7AEF\u53E3:\n    <span class="token function">netstat</span> -t\n\n  - \u663E\u793A\u76D1\u542C\u7ED9\u5B9A\u534F\u8BAE\u76D1\u542C\u7684 PID \u548C\u7A0B\u5E8F\u540D:\n    <span class="token function">netstat</span> -p \u534F\u8BAE\n\n  - \u6253\u5370\u8DEF\u7531\u8868:\n    <span class="token function">netstat</span> -nr\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-4-\u793A\u4F8B" aria-hidden="true">#</a> 2.1.4 \u793A\u4F8B</h4><h5 id="_2-1-4-1-\u5217\u51FA\u6240\u6709\u7AEF\u53E3-\u5305\u542Btcp\u548Cudp" tabindex="-1"><a class="header-anchor" href="#_2-1-4-1-\u5217\u51FA\u6240\u6709\u7AEF\u53E3-\u5305\u542Btcp\u548Cudp" aria-hidden="true">#</a> 2.1.4.1 <strong>\u5217\u51FA\u6240\u6709\u7AEF\u53E3(\u5305\u542BTCP\u548CUDP)</strong></h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>netstat -a\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145537683.png" alt="image-20220408145537683"></p><h5 id="_2-1-4-2-\u5217\u51FA\u6240\u6709tcp\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-1-4-2-\u5217\u51FA\u6240\u6709tcp\u7AEF\u53E3" aria-hidden="true">#</a> 2.1.4.2 <strong>\u5217\u51FA\u6240\u6709TCP\u7AEF\u53E3</strong></h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; netstat -at\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145637391.png" alt="image-20220408145637391"></p><h5 id="_2-1-4-3-\u5217\u51FA\u6240\u6709udp\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-1-4-3-\u5217\u51FA\u6240\u6709udp\u7AEF\u53E3" aria-hidden="true">#</a> 2.1.4.3 <strong>\u5217\u51FA\u6240\u6709UDP\u7AEF\u53E3</strong></h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -au\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408145728045.png" alt="image-20220408145728045"></p><h5 id="_2-1-4-4-\u627E\u51FA\u7A0B\u5E8F\u8FD0\u884C\u7684\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-1-4-4-\u627E\u51FA\u7A0B\u5E8F\u8FD0\u884C\u7684\u7AEF\u53E3" aria-hidden="true">#</a> 2.1.4.4 <strong>\u627E\u51FA\u7A0B\u5E8F\u8FD0\u884C\u7684\u7AEF\u53E3</strong></h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> netstat -tunlp | grep redis\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150002077.png" alt="image-20220408150002077"></p><h5 id="_2-1-4-5-\u627E\u51FA\u8FD0\u884C\u5728\u6307\u5B9A\u7AEF\u53E3\u7684\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-1-4-5-\u627E\u51FA\u8FD0\u884C\u5728\u6307\u5B9A\u7AEF\u53E3\u7684\u8FDB\u7A0B" aria-hidden="true">#</a> 2.1.4.5 <strong>\u627E\u51FA\u8FD0\u884C\u5728\u6307\u5B9A\u7AEF\u53E3\u7684\u8FDB\u7A0B</strong></h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -tunlp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150517112.png" alt="image-20220408150517112"></p><h5 id="_2-1-4-6-\u901A\u8FC7\u7AEF\u53E3\u627E\u8FDB\u7A0Bid" tabindex="-1"><a class="header-anchor" href="#_2-1-4-6-\u901A\u8FC7\u7AEF\u53E3\u627E\u8FDB\u7A0Bid" aria-hidden="true">#</a> 2.1.4.6 \u901A\u8FC7\u7AEF\u53E3\u627E\u8FDB\u7A0BID</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">netstat</span> -tunlp <span class="token operator">|</span> <span class="token function">grep</span> <span class="token number">6379</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">cut</span> -d/ -f1\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220408150717292.png" alt="image-20220408150717292"></p><h3 id="_2-2-sar" tabindex="-1"><a class="header-anchor" href="#_2-2-sar" aria-hidden="true">#</a> 2.2 sar</h3><h4 id="_2-2-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.2.1 \u7B80\u4ECB</h4><p>sar\u547D\u4EE4 \u662FLinux\u4E0B\u7CFB\u7EDF\u8FD0\u884C\u72B6\u6001\u7EDF\u8BA1\u5DE5\u5177\uFF0C\u5B83\u5C06\u6307\u5B9A\u7684\u64CD\u4F5C\u7CFB\u7EDF\u72B6\u6001\u8BA1\u6570\u5668\u663E\u793A\u5230\u6807\u51C6\u8F93\u51FA\u8BBE\u5907\u3002</p><h4 id="_2-2-2-\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> 2.2.2 \u5B57\u6BB5\u8BF4\u660E</h4><ul><li><code>IFACE</code>\uFF1A\u7F51\u7EDC\u8BBE\u5907\u7684\u540D\u79F0</li><li><code>rxpck/s</code>\uFF1A\u6BCF\u79D2\u949F\u63A5\u6536\u5230\u7684\u5305\u6570\u76EE</li><li><code>txpck/s</code>\uFF1A\u6BCF\u79D2\u949F\u53D1\u9001\u51FA\u53BB\u7684\u5305\u6570\u76EE</li><li><code>rxkB/s</code>\uFF1A\u6BCF\u79D2\u949F\u63A5\u6536\u5230\u7684\u5B57\u8282\u6570</li><li><code>txkB/s</code>\uFF1A\u6BCF\u79D2\u949F\u53D1\u9001\u51FA\u53BB\u7684\u5B57\u8282\u6570</li></ul><h4 id="_2-2-3-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u793A\u4F8B" aria-hidden="true">#</a> 2.2.3 \u793A\u4F8B</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401145225177.png" alt="image-20220401145225177"></p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 38);
const _hoisted_39 = {
  href: "https://zhuanlan.zhihu.com/p/398839850",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_40 = /* @__PURE__ */ createTextVNode("Linux\u4E4Bnetstat\u547D\u4EE4");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_39, [
        _hoisted_40,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Linux____Linux_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Linux\u7CFB\u7EDF\u76D1\u63A7-Linux\u7F51\u7EDC\u76D1\u63A7.html.vue"]]);
export { Linux____Linux_____html as default };
