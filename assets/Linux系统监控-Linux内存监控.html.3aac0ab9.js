import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="linux\u5185\u5B58\u76D1\u63A7" tabindex="-1"><a class="header-anchor" href="#linux\u5185\u5B58\u76D1\u63A7" aria-hidden="true">#</a> Linux\u5185\u5B58\u76D1\u63A7</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5185\u5B58\u76D1\u63A7\u4E3B\u8981\u6709free \u548C vmstat</p><h2 id="_2-\u76D1\u63A7\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-\u76D1\u63A7\u547D\u4EE4" aria-hidden="true">#</a> 2. \u76D1\u63A7\u547D\u4EE4</h2><h3 id="_2-1-free" tabindex="-1"><a class="header-anchor" href="#_2-1-free" aria-hidden="true">#</a> 2.1 free</h3><p>Linux free\u547D\u4EE4\u7528\u4E8E\u663E\u793A\u5185\u5B58\u72B6\u6001\u3002</p><p>free\u6307\u4EE4\u4F1A\u663E\u793A\u5185\u5B58\u7684\u4F7F\u7528\u60C5\u51B5\uFF0C\u5305\u62EC\u5B9E\u4F53\u5185\u5B58\uFF0C\u865A\u62DF\u7684\u4EA4\u6362\u6587\u4EF6\u5185\u5B58\uFF0C\u5171\u4EAB\u5185\u5B58\u533A\u6BB5\uFF0C\u4EE5\u53CA\u7CFB\u7EDF\u6838\u5FC3\u4F7F\u7528\u7684\u7F13\u51B2\u533A\u7B49\u3002</p><h4 id="_2-1-1-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u8BED\u6CD5" aria-hidden="true">#</a> 2.1.1 \u8BED\u6CD5</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">free</span> <span class="token punctuation">[</span>-bkmotV<span class="token punctuation">]</span><span class="token punctuation">[</span>-s <span class="token operator">&lt;</span>\u95F4\u9694\u79D2\u6570<span class="token operator">&gt;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5E38\u7528\u9009\u9879\uFF1A <code>-b</code>\uFF1A\u4EE5Byte\u4E3A\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF1B <code>-k</code>\uFF1A\u4EE5KB\u4E3A\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF1B <code>-m</code>\uFF1A\u4EE5MB\u4E3A\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF1B <code>-g</code>\uFF1A\u4EE5GB\u4E3A\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5;</p><p><strong><code>-h</code>: \u4EE5\u5408\u9002\u7684\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5\uFF0C\u6700\u5927\u4E3A\u4E09\u4F4D\u6570\uFF0C\u81EA\u52A8\u8BA1\u7B97\u5BF9\u5E94\u7684\u5355\u4F4D\u503C\u3002\u5355\u4F4D\u6709\uFF1A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>B = bytes\nK = kilos\nM = megas\nG = gigas\nT = teras\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>-o</code>\uFF1A\u4E0D\u663E\u793A\u7F13\u51B2\u533A\u8C03\u8282\u5217\uFF1B <code>-t</code>\uFF1A\u663E\u793A\u5185\u5B58\u603B\u548C\u5217\uFF1B <code>-V</code>\uFF1A\u663E\u793A\u7248\u672C\u4FE1\u606F\u3002****</p><p><strong><code>-s</code>: &lt;\u95F4\u9694\u79D2\u6570&gt; \u6301\u7EED\u89C2\u5BDF\u5185\u5B58\u4F7F\u7528\u72B6\u51B5\u3002</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401101834998.png" alt="image-20220401101834998"></p><h4 id="_2-1-2-\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> 2.1.2 \u5B57\u6BB5\u8BF4\u660E\uFF1A</h4><ul><li>total\uFF1A\u5185\u5B58\u603B\u6570\uFF1B</li><li>used\uFF1A\u5DF2\u7ECF\u4F7F\u7528\u7684\u5185\u5B58\u6570\uFF0C\u5305\u62EC cached \u548C\u5E94\u7528\u7A0B\u5E8F\u5B9E\u9645\u4F7F\u7528\u7684\u5185\u5B58\uFF1B</li><li>free\uFF1A\u7A7A\u95F2\u7684\u5185\u5B58\u6570\uFF1B</li><li>shared\uFF1A\u5F53\u524D\u5DF2\u7ECF\u5E9F\u5F03\u4E0D\u7528\uFF1B</li><li>buffers\uFF1A\u7F13\u5B58\u5185\u5B58\u6570\uFF1B</li><li>cached\uFF1A\u7F13\u5B58\u5185\u5B58\u6570\u3002</li></ul><p>\u5173\u7CFB\uFF1Atotal = used +available</p><h4 id="_2-1-3-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u5B9E\u4F8B" aria-hidden="true">#</a> 2.1.3 \u5B9E\u4F8B</h4><h5 id="_2-1-3-1-\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-1-3-1-\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> 2.1.3.1 \u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>free\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141256030.png" alt="image-20220401141256030"></p><h5 id="_2-1-3-2-\u4EE5\u5408\u9002\u7684\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_2-1-3-2-\u4EE5\u5408\u9002\u7684\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5" aria-hidden="true">#</a> 2.1.3.2 \u4EE5\u5408\u9002\u7684\u5355\u4F4D\u663E\u793A\u5185\u5B58\u4F7F\u7528\u60C5\u51B5</h5><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141510962.png" alt="image-20220401141510962"></p><h5 id="_2-1-3-3-\u4EE5\u603B\u548C\u7684\u5F62\u5F0F\u663E\u793A\u5185\u5B58\u7684\u4F7F\u7528\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-1-3-3-\u4EE5\u603B\u548C\u7684\u5F62\u5F0F\u663E\u793A\u5185\u5B58\u7684\u4F7F\u7528\u4FE1\u606F" aria-hidden="true">#</a> 2.1.3.3 \u4EE5\u603B\u548C\u7684\u5F62\u5F0F\u663E\u793A\u5185\u5B58\u7684\u4F7F\u7528\u4FE1\u606F</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">free</span> -t\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141403556.png" alt="image-20220401141403556"></p><h5 id="_2-1-3-4-\u5468\u671F\u6027\u7684\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-1-3-4-\u5468\u671F\u6027\u7684\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u4FE1\u606F" aria-hidden="true">#</a> 2.1.3.4 \u5468\u671F\u6027\u7684\u67E5\u8BE2\u5185\u5B58\u4F7F\u7528\u4FE1\u606F</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">free</span> -s <span class="token number">10</span> //\u6BCF10s \u6267\u884C\u4E00\u6B21\u547D\u4EE4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141645744.png" alt="image-20220401141645744"></p><h4 id="_2-1-4-tldr-\u4E2D\u7684\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_2-1-4-tldr-\u4E2D\u7684\u4ECB\u7ECD" aria-hidden="true">#</a> 2.1.4 tldr \u4E2D\u7684\u4ECB\u7ECD</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">(</span>base<span class="token punctuation">)</span> \u279C  ~ tldr <span class="token function">free</span>\n\n  <span class="token function">free</span>\n\n  Display amount of <span class="token function">free</span> and used memory <span class="token keyword">in</span> the system.\n  \u663E\u793A\u7CFB\u7EDF\u4E2D\u53EF\u7528\u548C\u5DF2\u4F7F\u7528\u7684\u5185\u5B58\u91CF\u3002\n\n  - Display system memory:\n  	\u663E\u793A\u7CFB\u7EDF\u5185\u5B58:\n    <span class="token function">free</span>\n\n  - Display memory <span class="token keyword">in</span> Bytes/KB/MB/GB:\n  	\u4EE5\u5B57\u8282/KB/MB/GB\u4E3A\u5355\u4F4D\u663E\u793A\u5185\u5B58:\n    <span class="token function">free</span> -b<span class="token operator">|</span>k<span class="token operator">|</span>m<span class="token operator">|</span>g\n\n  - Display memory <span class="token keyword">in</span> human readable units:\n  	\u4EE5\u4EBA\u7C7B\u53EF\u8BFB\u5355\u4F4D\u663E\u793A\u5185\u5B58:\n    <span class="token function">free</span> -h\n\n  - Refresh the output every <span class="token number">2</span> seconds:\n  	\u6BCF2\u79D2\u5237\u65B0\u4E00\u6B21\u8F93\u51FA:\n    <span class="token function">free</span> -s <span class="token number">2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-vmstat" tabindex="-1"><a class="header-anchor" href="#_2-2-vmstat" aria-hidden="true">#</a> 2.2 vmstat</h3><h4 id="_2-2-1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u7B80\u4ECB" aria-hidden="true">#</a> 2.2.1 \u7B80\u4ECB</h4><p>mstat\u547D\u4EE4 \u7684\u542B\u4E49\u4E3A\u663E\u793A\u865A\u62DF\u5185\u5B58\u72B6\u6001\uFF08\u201CViryual Memor Statics\u201D\uFF09\uFF0C\u4F46\u662F\u5B83\u53EF\u4EE5\u62A5\u544A\u5173\u4E8E\u8FDB\u7A0B\u3001\u5185\u5B58\u3001I/O\u7B49\u7CFB\u7EDF\u6574\u4F53\u8FD0\u884C\u72B6\u6001\u3002</p><h4 id="_2-2-2-\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u8BED\u6CD5" aria-hidden="true">#</a> 2.2.2 \u8BED\u6CD5</h4><div class="language-erlang ext-erlang line-numbers-mode"><pre class="language-erlang"><code><span class="token atom">vmstat</span> <span class="token punctuation">(</span>\u9009\u9879<span class="token punctuation">)</span> <span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9009\u9879 <code>-a</code>\uFF1A\u663E\u793A\u6D3B\u52A8\u5185\u9875\uFF1B <code>-f</code>\uFF1A\u663E\u793A\u542F\u52A8\u540E\u521B\u5EFA\u7684\u8FDB\u7A0B\u603B\u6570\uFF1B <code>-m</code>\uFF1A\u663E\u793Aslab\u4FE1\u606F\uFF1B <code>-n</code>\uFF1A\u5934\u4FE1\u606F\u4EC5\u663E\u793A\u4E00\u6B21\uFF1B <code>-s</code>\uFF1A\u4EE5\u8868\u683C\u65B9\u5F0F\u663E\u793A\u4E8B\u4EF6\u8BA1\u6570\u5668\u548C\u5185\u5B58\u72B6\u6001\uFF1B <code>-d</code>\uFF1A\u62A5\u544A\u78C1\u76D8\u72B6\u6001\uFF1B <code>-p</code>\uFF1A\u663E\u793A\u6307\u5B9A\u7684\u786C\u76D8\u5206\u533A\u72B6\u6001\uFF1B <code>-S</code>\uFF1A\u8F93\u51FA\u4FE1\u606F\u7684\u5355\u4F4D\u3002</p><p>\u53C2\u6570</p><ul><li>\u4E8B\u4EF6\u95F4\u9694\uFF1A\u72B6\u6001\u4FE1\u606F\u5237\u65B0\u7684\u65F6\u95F4\u95F4\u9694\uFF1B</li><li>\u6B21\u6570\uFF1A\u663E\u793A\u62A5\u544A\u7684\u6B21\u6570</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141913473.png" alt="image-20220401141913473"></p><h4 id="_2-2-3-\u5B57\u6BB5\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-2-3-\u5B57\u6BB5\u8BF4\u660E" aria-hidden="true">#</a> 2.2.3 \u5B57\u6BB5\u8BF4\u660E</h4><p>Procs\uFF08\u8FDB\u7A0B\uFF09</p><ul><li>r: \u8FD0\u884C\u548C\u7B49\u5F85CPU\u65F6\u95F4\u7247\u7684\u8FDB\u7A0B\u6570\uFF0C\u8FD9\u4E2A\u503C\u5982\u679C\u957F\u671F\u5927\u4E8E\u7CFB\u7EDFCPU\u4E2A\u6570\uFF0C\u5C31\u8BF4\u660ECPU\u8D44\u6E90\u4E0D\u8DB3\uFF0C\u53EF\u4EE5\u8003\u8651\u589E\u52A0CPU</li><li>b: \u7B49\u5F85\u8D44\u6E90\u7684\u8FDB\u7A0B\u6570\uFF0C\u6BD4\u5982\u6B63\u5728\u7B49\u5F85I/O\u6216\u8005\u5185\u5B58\u4EA4\u6362\u7B49</li></ul><p>Memory\uFF08\u5185\u5B58\uFF09</p><ul><li>swpd: \u4F7F\u7528\u865A\u62DF\u5185\u5B58\u5927\u5C0F\uFF0C\u5982\u679Cswpd\u7684\u503C\u4E0D\u4E3A0\uFF0C\u4F46\u662FSI\uFF0CSO\u7684\u503C\u957F\u671F\u4E3A0\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0D\u4F1A\u5F71\u54CD\u7CFB\u7EDF\u6027\u80FD\u3002</li><li>free: \u7A7A\u95F2\u7269\u7406\u5185\u5B58\u5927\u5C0F\uFF08\u4EE5KB\u4E3A\u5355\u4F4D\uFF09\u3002</li><li>buff: \u7528\u4F5C\u7F13\u51B2\u7684\u5185\u5B58\u5927\u5C0F\u3002</li><li>cache: \u7528\u4F5C\u7F13\u5B58\u7684\u5185\u5B58\u5927\u5C0F\uFF0C\u5982\u679Ccache\u7684\u503C\u5927\u7684\u65F6\u5019\uFF0C\u8BF4\u660Ecache\u5904\u7684\u6587\u4EF6\u6570\u591A\u3002\u5982\u679C\u6B64\u65F6IO\u4E2D\u7684bi\u6BD4\u8F83\u5C0F\uFF0C\u5C31\u8BF4\u660E\u6587\u4EF6\u7CFB\u7EDF\u6548\u7387\u6BD4\u8F83\u597D\u3002</li></ul><p>Swap</p><ul><li>si: \u6BCF\u79D2\u4ECE\u4EA4\u6362\u533A\u5199\u5230\u5185\u5B58\u7684\u5927\u5C0F\uFF0C\u7531\u78C1\u76D8\u8C03\u5165\u5185\u5B58\u3002</li><li>so: \u6BCF\u79D2\u5199\u5165\u4EA4\u6362\u533A\u7684\u5185\u5B58\u5927\u5C0F\uFF0C\u7531\u5185\u5B58\u8C03\u5165\u78C1\u76D8\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u5185\u5B58\u591F\u7528\u7684\u65F6\u5019\uFF0C\u8FD92\u4E2A\u503C\u90FD\u662F0\uFF0C\u5982\u679C\u8FD92\u4E2A\u503C\u957F\u671F\u5927\u4E8E0\u65F6\uFF0C\u7CFB\u7EDF\u6027\u80FD\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u78C1\u76D8IO\u548CCPU\u8D44\u6E90\u90FD\u4F1A\u88AB\u6D88\u8017\u3002\u6709\u4E9B\u670B\u53CB\u770B\u5230\u7A7A\u95F2\u5185\u5B58\uFF08free\uFF09\u5F88\u5C11\u7684\u6216\u63A5\u8FD1\u4E8E0\u65F6\uFF0C\u5C31\u8BA4\u4E3A\u5185\u5B58\u4E0D\u591F\u7528\u4E86\uFF0C\u4E0D\u80FD\u5149\u770B\u8FD9\u4E00\u70B9\uFF0C\u8FD8\u8981\u7ED3\u5408si\u548Cso\uFF0C\u5982\u679Cfree\u5F88\u5C11\uFF0C\u4F46\u662Fsi\u548Cso\u4E5F\u5F88\u5C11\uFF08\u5927\u591A\u65F6\u5019\u662F0\uFF09\uFF0C\u90A3\u4E48\u4E0D\u7528\u62C5\u5FC3\uFF0C\u7CFB\u7EDF\u6027\u80FD\u8FD9\u65F6\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u7684\u3002</p><p>IO\uFF08\u73B0\u5728\u7684Linux\u7248\u672C\u5757\u7684\u5927\u5C0F\u4E3A1kb\uFF09</p><ul><li>bi: \u6BCF\u79D2\u8BFB\u53D6\u7684\u5757\u6570</li><li>bo: \u6BCF\u79D2\u5199\u5165\u7684\u5757\u6570</li></ul><p>\u6CE8\u610F\uFF1A\u968F\u673A\u78C1\u76D8\u8BFB\u5199\u7684\u65F6\u5019\uFF0C\u8FD92\u4E2A\u503C\u8F83\u5927\uFF08\u5982\u8D85\u51FA1024k)\uFF0C\u800C\u4E14wa\u503C\u6BD4\u8F83\u5927\uFF0C\u5219\u8868\u793A\u7CFB\u7EDF\u78C1\u76D8IO\u6027\u80FD\u74F6\u9888\u3002</p><p>system\uFF08\u7CFB\u7EDF\uFF09</p><ul><li>in: \u6BCF\u79D2\u4E2D\u65AD\u6570\uFF0C\u5305\u62EC\u65F6\u949F\u4E2D\u65AD\u3002</li><li>cs: \u6BCF\u79D2\u4E0A\u4E0B\u6587\u5207\u6362\u6570\u3002</li></ul><p>\u6CE8\u610F\uFF1A\u4E0A\u97622\u4E2A\u503C\u8D8A\u5927\uFF0C\u4F1A\u770B\u5230\u7531\u5185\u6838\u6D88\u8017\u7684CPU\u65F6\u95F4\u4F1A\u8D8A\u5927\u3002</p><p>CPU\uFF08\u4EE5\u767E\u5206\u6BD4\u8868\u793A\uFF09 us: \u7528\u6237\u8FDB\u7A0B\u6267\u884C\u65F6\u95F4\u767E\u5206\u6BD4(user time) us\u7684\u503C\u6BD4\u8F83\u9AD8\u65F6\uFF0C\u8BF4\u660E\u7528\u6237\u8FDB\u7A0B\u6D88\u8017\u7684CPU\u65F6\u95F4\u591A\uFF0C\u4F46\u662F\u5982\u679C\u957F\u671F\u8D8550%\u7684\u4F7F\u7528\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u8BE5\u8003\u8651\u4F18\u5316\u7A0B\u5E8F\u7B97\u6CD5\u6216\u8005\u8FDB\u884C\u52A0\u901F\u3002</p><ul><li>sy: \u5185\u6838\u7CFB\u7EDF\u8FDB\u7A0B\u6267\u884C\u65F6\u95F4\u767E\u5206\u6BD4(system time)</li></ul><p>sy\u7684\u503C\u9AD8\u65F6\uFF0C\u8BF4\u660E\u7CFB\u7EDF\u5185\u6838\u6D88\u8017\u7684CPU\u8D44\u6E90\u591A\uFF0C\u8FD9\u5E76\u4E0D\u662F\u826F\u6027\u8868\u73B0\uFF0C\u6211\u4EEC\u5E94\u8BE5\u68C0\u67E5\u539F\u56E0\u3002</p><ul><li>id: \u7A7A\u95F2\u65F6\u95F4\u767E\u5206\u6BD4</li><li>wa: IO\u7B49\u5F85\u65F6\u95F4\u767E\u5206\u6BD4</li></ul><p>wa\u7684\u503C\u9AD8\u65F6\uFF0C\u8BF4\u660EIO\u7B49\u5F85\u6BD4\u8F83\u4E25\u91CD\uFF0C\u8FD9\u53EF\u80FD\u7531\u4E8E\u78C1\u76D8\u5927\u91CF\u4F5C\u968F\u673A\u8BBF\u95EE\u9020\u6210\uFF0C\u4E5F\u6709\u53EF\u80FD\u78C1\u76D8\u51FA\u73B0\u74F6\u9888\uFF08\u5757\u64CD\u4F5C\uFF09\u3002</p><ul><li>st\uFF1A\u4E00\u822C\u4E0D\u5173\u6CE8\uFF0C\u865A\u62DF\u673A\u5360\u7528\u7684\u65F6\u95F4\u767E\u5206\u6BD4\u3002</li></ul><h4 id="_2-2-4-\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-2-4-\u5B9E\u4F8B" aria-hidden="true">#</a> 2.2.4 \u5B9E\u4F8B</h4><p>\u6BCF2s\u663E\u793A\u4E00\u6B21</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220401141913473.png" alt="image-20220401141913473"></p>', 64);
const _hoisted_65 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_65);
}
var Linux____Linux_____html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Linux\u7CFB\u7EDF\u76D1\u63A7-Linux\u5185\u5B58\u76D1\u63A7.html.vue"]]);
export { Linux____Linux_____html as default };
