import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as i,a as e,b as r,d,e as l,r as t}from"./app.40d67f5c.js";const c={},o=d(`<h1 id="npm\u6E90\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#npm\u6E90\u7BA1\u7406" aria-hidden="true">#</a> npm\u6E90\u7BA1\u7406</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><h2 id="_2-\u8BBE\u7F6E\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u6E90" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u6E90</h2><h3 id="_2-1-\u67E5\u770B\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-1-\u67E5\u770B\u6E90" aria-hidden="true">#</a> 2.1 \u67E5\u770B\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u67E5\u770B\u6E90\uFF0C\u53EF\u4EE5\u770B\u5230\u8BBE\u7F6E\u8FC7\u7684\u6240\u6709\u7684\u6E90
<span class="token function">npm</span> config get registry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u6C38\u4E45\u8BBE\u7F6E\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-2-\u6C38\u4E45\u8BBE\u7F6E\u6E90" aria-hidden="true">#</a> 2.2 \u6C38\u4E45\u8BBE\u7F6E\u6E90</h3><p>\u6E90\u53EF\u4EE5\u662F\u591A\u4E2A\uFF0C<strong>\u4F46\u53EA\u6709\u4E00\u4E2A\u662F\u751F\u6548\u7684</strong>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u8BBE\u7F6E\u6DD8\u5B9D\u6E90
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org

//\u8BBE\u7F6E\u516C\u53F8\u7684\u6E90
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry http://127.0.0.1:4873

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u4E34\u65F6\u6539\u53D8\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-3-\u4E34\u65F6\u6539\u53D8\u6E90" aria-hidden="true">#</a> 2.3 \u4E34\u65F6\u6539\u53D8\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>//\u672C\u6B21\u4ECE\u6DD8\u5B9D\u4ED3\u5E93\u6E90\u4E0B\u8F7D
<span class="token function">npm</span> <span class="token parameter variable">--registry</span><span class="token operator">=</span>https://registry.npm.taobao.org <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4F7F\u7528nrm\u7BA1\u7406\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528nrm\u7BA1\u7406\u6E90" aria-hidden="true">#</a> 3. \u4F7F\u7528nrm\u7BA1\u7406\u6E90</h2><p><code>nrm </code>\u662F\u4E00\u4E2A NPM \u6E90\u7BA1\u7406\u5668\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>nrm</code> \u5728\u4E0D\u540C\u7684\u6E90\u5207\u6362\u3002</p><h3 id="_3-1-\u5B89\u88C5nrm" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5B89\u88C5nrm" aria-hidden="true">#</a> 3.1 \u5B89\u88C5nrm</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> nrm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-\u5217\u51FA\u53EF\u9009\u7684\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-2-\u5217\u51FA\u53EF\u9009\u7684\u6E90" aria-hidden="true">#</a> 3.2 \u5217\u51FA\u53EF\u9009\u7684\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nrm <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm ls            

  npm ---------- https://registry.npmjs.org/
  yarn --------- https://registry.yarnpkg.com/
  tencent ------ https://mirrors.cloud.tencent.com/npm/
  cnpm --------- https://r.cnpmjs.org/
  taobao ------- https://registry.npmmirror.com/
  npmMirror ---- https://skimdb.npmjs.com/registry/
* ali ---------- https://registry.npm.taobao.org/

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u524D\u7684\u6E90\uFF0C\u524D\u9762\u4F1A\u6709\u4E00\u4E2A*</p><h3 id="_3-3-\u67E5\u770B\u5F53\u524D\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-3-\u67E5\u770B\u5F53\u524D\u6E90" aria-hidden="true">#</a> 3.3 \u67E5\u770B\u5F53\u524D\u6E90</h3><p>\u663E\u793A\u5F53\u524D\u4F7F\u7528\u7684\u955C\u50CF\u6E90\u540D\u79F0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>nrm current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-\u5207\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5207\u6362\u6E90" aria-hidden="true">#</a> 3.4 \u5207\u6362\u6E90</h3><p>\u5207\u6362\u5230taobao\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nrm use taobao
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-4-\u589E\u52A0\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-4-\u589E\u52A0\u6E90" aria-hidden="true">#</a> 3.4 \u589E\u52A0\u6E90</h3><p>\u53EF\u4EE5\u589E\u52A0\u5B9A\u5236\u7684\u6E90\uFF0C\u7279\u522B\u9002\u7528\u4E8E\u6DFB\u52A0\u4F01\u4E1A\u5185\u90E8\u7684\u79C1\u6709\u6E90\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nrm <span class="token function">add</span>  <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>url<span class="token operator">&gt;</span> <span class="token punctuation">[</span>home<span class="token punctuation">]</span>
<span class="token comment"># \u4F8B\u5982</span>
nrm <span class="token function">add</span> company http://npm.company.com/   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-\u5220\u9664\u6E90" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5220\u9664\u6E90" aria-hidden="true">#</a> 3.5 \u5220\u9664\u6E90</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nrm del <span class="token operator">&lt;</span>registry<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-6-\u6D4B\u8BD5\u901F\u5EA6" tabindex="-1"><a class="header-anchor" href="#_3-6-\u6D4B\u8BD5\u901F\u5EA6" aria-hidden="true">#</a> 3.6 \u6D4B\u8BD5\u901F\u5EA6</h3><p>\u8FD8\u53EF\u4EE5\u901A\u8FC7 <code>nrm test </code>\u6D4B\u8BD5\u76F8\u5E94\u6E90\u7684\u54CD\u5E94\u65F6\u95F4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nrm <span class="token builtin class-name">test</span> <span class="token function">npm</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7ED3\u679C\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> ---- 1328ms
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,36),p={href:"https://segmentfault.com/a/1190000038997036",target:"_blank",rel:"noopener noreferrer"},h=l("npm\u6E90\u7BA1\u7406");function m(u,v){const a=t("ExternalLinkIcon");return s(),i("div",null,[o,e("p",null,[e("a",p,[h,r(a)])])])}const _=n(c,[["render",m],["__file","npm-manage.html.vue"]]);export{_ as default};
