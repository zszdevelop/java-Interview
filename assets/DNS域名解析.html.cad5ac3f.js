import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.a13257a5.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="dns\u57DF\u540D\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#dns\u57DF\u540D\u89E3\u6790" aria-hidden="true">#</a> DNS\u57DF\u540D\u89E3\u6790</h1><h2 id="_1-dns\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-dns\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1. DNS\u662F\u4EC0\u4E48\uFF1F</h2><p>DNS\uFF08Domain Namo System\uFF0C\u57DF\u540D\u89E3\u6790\u7CFB\u7EDF\uFF09\u7684\u4F5C\u7528\u975E\u5E38\u7B80\u5355\uFF0C\u5C31\u662F\u6839\u636E<strong>\u57DF\u540D\u67E5\u51FAip\u5730\u5740</strong>\uFF08\u53EF\u4EE5\u60F3\u8C61\u6210\u4E00\u672C\u5DE8\u5927\u7684\u7535\u8BDD\u672C\uFF09</p><p>\u4F8B\u5982\uFF1A\u4F60\u8981\u8BBF\u95EE<code>www.baidu.com</code> \u90A3\u4E48\u9996\u5148\u8981\u901A\u8FC7DNS\u67E5\u51FA\u4ED6\u7684ip\u5730\u5740\u662F14.215.177.38</p><h2 id="_2-\u67E5\u8BE2\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u8BE2\u8FC7\u7A0B" aria-hidden="true">#</a> 2. \u67E5\u8BE2\u8FC7\u7A0B</h2><p>\u867D\u7136\u53EA\u9700\u8981\u8FD4\u56DE\u4E00\u4E2AIP\u5730\u5740\uFF0C\u4F46\u662FDNS\u7684\u67E5\u8BE2\u8FC7\u7A0B\u975E\u5E38\u590D\u6742\uFF0C\u5206\u6210\u591A\u4E2A\u6B65\u9AA4</p><p>dig\u547D\u4EE4\u53EF\u4EE5\u663E\u793A\u6574\u4E2A\u67E5\u8BE2\u8FC7\u7A0B,\u5728\u7EC8\u7AEF\u8F93\u5165</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dig www.baidu.com\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F1A\u8F93\u51FA\u4EE5\u4E0B\u5185\u5BB9</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824211111182.png" alt="image-20190824211111182"></p><ul><li>\u7B2C\u4E00\u6BB5\u662F\u67E5\u8BE2\u53C2\u6570\u548C\u7EDF\u8BA1</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824211248412.png" alt="image-20190824211248412"></p><ul><li>\u7B2C\u4E8C\u6BB5\u662F\u67E5\u8BE2\u5185\u5BB9</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824211311373.png" alt="image-20190824211311373"></p><p>\u4E0A\u9762\u7684\u7ED3\u679C\u8868\u793A\uFF0C\u67E5\u8BE2\u57DF\u540D<code>www.baidu.com</code> \u7684A\u8BB0\u5F55\uFF0CA\u662Faddress\u7684\u7F29\u5199</p><ul><li><p>\u7B2C\u4E09\u6BB5\u662FDNS\u670D\u52A1\u5668\u7684\u7B54\u590D</p><p><code>www.baidu.com</code>\u88ABcname\u5230\u4E86<code>www.a.shifen.com</code></p></li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824211459211.png" alt="image-20190824211459211"></p><p>\u4E0A\u9762\u7684\u7ED3\u679C\u663E\u793A\uFF0C<code>www.baidu.com</code> \u6709\u4E09\u4E2AA\u8BB0\u5F55\uFF0C\u65E2\u4E09\u4E2Aip\u5730\u5740\u3002600\u662FTTL\u503C\uFF08Time to live\u7684\u7F29\u5199\uFF09\uFF0C\u8868\u793A\u7F13\u5B58\u65F6\u95F4\uFF0C\u65E2600\u79D2\u4E4B\u5185\u4E0D\u7528\u91CD\u65B0\u67E5\u8BE2</p><ul><li>\u7B2C\u56DB\u6BB5\u663E\u793A<code>www.a.shifen.com</code> \u7684NS\u8BB0\u5F55\uFF08Name Service\uFF09\uFF0C\u65E2\u54EA\u4E9B\u670D\u52A1\u5668\u8D1F\u8D23\u7BA1\u8DEF<code>www.a.shifen.com</code> \u7684DNS\u8BB0\u5F55</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824211915750.png" alt="image-20190824211915750"></p><p>\u4E0A\u9762\u7684\u7ED3\u679C\u663E\u793Aa.shifen.com\u5171\u6709\u4E94\u6761NS\u8BB0\u5F55\uFF0C\u65E2\u4E94\u57DF\u540D\u670D\u52A1\u5668\uFF0C\u5411\u5176\u4E2D\u4EFB\u4E00\u53F0\u67E5\u8BE2\u90FD\u80FD\u77E5\u9053a.shifen.com \u7684ip\u5730\u5740\u662F\u4EC0\u4E48</p><ul><li>\u7B2C\u4E94\u6BB5\u662F\u4E0A\u97625\u4E2A\u57DF\u540D\u670D\u52A1\u5668\u7684ip\u5730\u5740\uFF0C\u8FD9\u662F\u968F\u7740\u524D\u4E00\u6BB5\u4E00\u8D77\u8FD4\u56DE\u7684</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824212924233.png" alt="image-20190824212924233"></p><ul><li>\u7B2C\u516D\u6BB5\u662Fdns\u670D\u52A1\u5668\u7684\u4E00\u4E9B\u4F20\u8F93\u4FE1\u606F</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824213456662.png" alt="image-20190824213456662"></p><p>\u4E0A\u9762\u7684\u7ED3\u679C\u663E\u793A\uFF0C\u672C\u673A\u7684DNS\u670D\u52A1\u5668\u662F218.168.1.253\uFF0C\u67E5\u8BE2\u7AEF\u53E3\u662F53\uFF08dns\u670D\u52A1\u5668\u7684\u9ED8\u8BA4\u7AEF\u53E3\uFF09\uFF0C\u4EE5\u53CA\u56DE\u5E94\u957F\u5EA6\u662F260\u5B57\u8282</p><h3 id="_2-1-\u7B80\u5316-short" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7B80\u5316-short" aria-hidden="true">#</a> 2.1 \u7B80\u5316+short</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824213808554.png" alt="image-20190824213808554"></p><p>\u4E0A\u9762\u547D\u4EE4\u503C\u8FD4\u56DE<code>www.baidu.com</code> \u5BF9\u5E94\u76843\u4E2Aip\u5730\u5740</p><h2 id="_3-dns-\u7684\u8BB0\u5F55\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_3-dns-\u7684\u8BB0\u5F55\u7C7B\u578B" aria-hidden="true">#</a> 3.DNS \u7684\u8BB0\u5F55\u7C7B\u578B</h2><p>\u57DF\u540D\u548CIP\u4E4B\u95F4\u7684\u5BF9\u5E94\u5173\u7CFB\uFF0C\u79F0\u4E3A\u201C\u8BB0\u5F55\u201D\uFF08record\uFF09\uFF0C\u6839\u636E\u4F7F\u7528\u573A\u666F\uFF0C\u8BB0\u5F55\u53EF\u4EE5\u5206\u6210\u4E0D\u540C\u7C7B\u578B\uFF08type\uFF09</p><p>\u5E38\u89C1\u7684DNS\u8BB0\u5F55\u7C7B\u578B\u5982\u4E0B</p><ul><li>A\uFF1A\u5730\u5740\u8BB0\u5F55\uFF08Address\uFF09\uFF0C\u8FD4\u56DE\u7684\u57DF\u540D\u6307\u5411ip\u5730\u5740</li><li>NS:\u57DF\u540D\u670D\u52A1\u5668\u8BB0\u5F55\uFF08Name Service\uFF09\uFF0C\u8FD4\u56DE\u4FDD\u5B58\u4E0B\u4E00\u7EA7\u57DF\u540D\u4FE1\u606F\u7684\u670D\u52A1\u5668\u5730\u5740\u3002\u8BE5\u8BB0\u5F55\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u57DF\u540D\uFF0C\u4E0D\u80FD\u8BBE\u7F6E\u4E3AIP\u5730\u5740</li><li>MX:\u90AE\u4EF6\u8BB0\u5F55\uFF08Mail eXchange\uFF09\uFF0C\u8FD4\u56DE\u63A5\u6536\u7535\u5B50\u90AE\u4EF6\u7684\u670D\u52A1\u5668\u5730\u5740</li><li>CNAME:\u89C4\u8303\u540D\u79F0\u8BB0\u5F55\uFF08Canonical Name\uFF09,\u8FD4\u56DE\u53E6\u4E00\u4E2A\u57DF\u540D\uFF0C\u65E2\u5F53\u524D\u67E5\u8BE2\u7684\u57DF\u540D\u662F\u53E6\u4E00\u4E2A\u57DF\u540D\u7684\u8C03\u6574\u3002\uFF08\u4F8B\u5982\u767E\u5EA6\uFF09</li><li>PTR:\u9006\u5411\u67E5\u8BE2\u8BB0\u5F55\uFF08Pointer Record\uFF09\uFF0C\u53EA\u7528\u4E8E\u4ECEIP\u5730\u5740\u67E5\u8BE2\u57DF\u540D</li></ul><h3 id="_3-1-cname" tabindex="-1"><a class="header-anchor" href="#_3-1-cname" aria-hidden="true">#</a> 3.1 CNAME</h3><p>CNAME \u8BB0\u5F55\u4E3B\u8981\u7528\u4E8E\u57DF\u540D\u7684\u5185\u90E8\u8DF3\u8F6C\uFF0C\u4E3A\u670D\u52A1\u5668\u914D\u7F6E\u63D0\u4F9B\u7075\u6D3B\u6027\uFF0C\u7528\u6237\u611F\u77E5\u4E0D\u5230\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dig www.baidu.com\n\n; &lt;&lt;&gt;&gt; DiG 9.8.3-P1 &lt;&lt;&gt;&gt; www.baidu.com\n...\n;; ANSWER SECTION:\nwww.baidu.com.		600	IN	CNAME	www.a.shifen.com.\nwww.a.shifen.com.	600	IN	A	14.215.177.39\nwww.a.shifen.com.	600	IN	A	14.215.177.38\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u7ED3\u679C\u663E\u793A\uFF0C<code>www.baidu.com</code> \u7684cname \u8BB0\u5F55\u6307\u5411\u7684\u662F<code>www.a.shifen.com</code>.\u4E5F\u5C31\u662F\u8BF4\u7528\u6237\u67E5\u8BE2<code>www.baidu.com</code> \u7684\u65F6\u5019\uFF0C\u5B9E\u9645\u4E0A\u8FD4\u56DE\u7684\u662F<code>www.a.shifen.com</code> \u7684ip\u5730\u5740\u3002</p><p><strong>\u597D\u5904</strong></p><p>\u53D8\u66F4\u670D\u52A1\u5668ip\u5730\u5740\u7684\u65F6\u5019\uFF0C\u53EA\u8981\u4FEE\u6539<code>www.a.shifen.com</code> \u8FD9\u4E2A\u57DF\u540D\u5C31\u53EF\u4EE5\u4E86\uFF0C\u7528\u6237\u7684<code>www.baidu.com</code>\u57DF\u540D\u4E0D\u7528\u4FEE\u6539</p><h2 id="_4-\u5176\u4ED6dns-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6dns-\u5DE5\u5177" aria-hidden="true">#</a> 4.\u5176\u4ED6DNS \u5DE5\u5177</h2><h3 id="_4-1-host\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-1-host\u547D\u4EE4" aria-hidden="true">#</a> 4.1 host\u547D\u4EE4</h3><p>host\u547D\u4EE4\u53EF\u4EE5\u770B\u4F5Cdig\u547D\u4EE4\u7684\u7B80\u5316\u7248\u672C\uFF0C\u8FD4\u56DE\u5F53\u524D\u8BF7\u6C42\u57DF\u540D\u7684\u5404\u79CD\u8BB0\u5F55</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824220258126.png" alt="image-20190824220258126"></p><h3 id="_4-2-nslookup\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-2-nslookup\u547D\u4EE4" aria-hidden="true">#</a> 4.2 nslookup\u547D\u4EE4</h3><p>nslookup\u547D\u4EE4\u7528\u4E8E\u4E92\u52A8\u5F0F\u7684\u67E5\u8BE2\u57DF\u540D\u8BB0\u5F55</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824220446036.png" alt="image-20190824220446036"></p><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FC7\u6EE4\u51FAcname</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824221338613.png" alt="image-20190824221338613"></p><h3 id="_4-3-whois-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_4-3-whois-\u547D\u4EE4" aria-hidden="true">#</a> 4.3 whois \u547D\u4EE4</h3><p>whois \u547D\u4EE4\u7528\u6765\u67E5\u770B\u57DF\u540D\u7684\u6CE8\u518C\u60C5\u51B5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>whois github.com\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5173\u4E8E\u4E0A\u6587\u51FA\u73B0\u7684218-85-152-99\u662F\u6211\u672C\u673A\u8BBE\u7F6E\u7684dns\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8E\u4E0A\u6587\u51FA\u73B0\u7684218-85-152-99\u662F\u6211\u672C\u673A\u8BBE\u7F6E\u7684dns\u5730\u5740" aria-hidden="true">#</a> \u5173\u4E8E\u4E0A\u6587\u51FA\u73B0\u7684218.85.152.99\u662F\u6211\u672C\u673A\u8BBE\u7F6E\u7684dns\u5730\u5740</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20190824220945022.png" alt="image-20190824220945022"></p><h2 id="\u53C2\u8003\u535A\u5BA2" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u535A\u5BA2" aria-hidden="true">#</a> \u53C2\u8003\u535A\u5BA2</h2>', 54);
const _hoisted_55 = {
  href: "http://www.ruanyifeng.com/blog/2016/06/dns.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_56 = /* @__PURE__ */ createTextVNode("DNS \u539F\u7406\u5165\u95E8");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_55, [
        _hoisted_56,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var DNS_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "DNS\u57DF\u540D\u89E3\u6790.html.vue"]]);
export { DNS_____html as default };
