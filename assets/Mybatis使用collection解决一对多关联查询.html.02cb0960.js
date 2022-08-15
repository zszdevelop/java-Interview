import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="mybatis\u4F7F\u7528collection\u89E3\u51B3\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#mybatis\u4F7F\u7528collection\u89E3\u51B3\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2" aria-hidden="true">#</a> Mybatis\u4F7F\u7528collection\u89E3\u51B3\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u4E00\u5BF9\u591A\u4F7F\u7528\u573A\u666F\u6709\u5F88\u591A\uFF0C\u4F8B\u5982</p><ul><li>\u4E00\u4E2A\u90E8\u95E8\u4E0B\u6709\u591A\u4E2A\u7528\u6237\uFF0C\u4E00\u4E2A\u7528\u6237\u53EA\u5C5E\u4E8E\u4E00\u4E2A\u90E8\u95E8</li></ul><h2 id="_2-\u5B9E\u73B0\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u73B0\u65B9\u5F0F" aria-hidden="true">#</a> 2. \u5B9E\u73B0\u65B9\u5F0F</h2><h3 id="_2-1-collection\u5173\u8054\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-1-collection\u5173\u8054\u67E5\u8BE2" aria-hidden="true">#</a> 2.1 collection\u5173\u8054\u67E5\u8BE2</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptUserDetail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptResultByLeftJoin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userList<span class="token punctuation">&quot;</span></span>  <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysUserResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span>     <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span>       <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_id<span class="token punctuation">&quot;</span></span>      <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickName<span class="token punctuation">&quot;</span></span>     <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nick_name<span class="token punctuation">&quot;</span></span>    <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectDeptUserListByLeftJoin<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDept<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptResultByLeftJoin<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        select d.dept_id,d.dept_name,\n               u.user_id,u.user_name,u.nick_name\n        from sys_dept d\n        left join sys_user u on u.dept_id = d.dept_id\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName != null and deptName != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            AND dept_name like concat(&#39;%&#39;, #{deptName}, &#39;%&#39;)\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-1-\u67E5\u8BE2\u7684sql\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u67E5\u8BE2\u7684sql\u65E5\u5FD7" aria-hidden="true">#</a> 2.1.1 \u67E5\u8BE2\u7684sql\u65E5\u5FD7</h4><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code> <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">&gt;</span>  Preparing: <span class="token keyword">select</span> d<span class="token punctuation">.</span>dept_id<span class="token punctuation">,</span>d<span class="token punctuation">.</span>dept_name<span class="token punctuation">,</span> u<span class="token punctuation">.</span>user_id<span class="token punctuation">,</span>u<span class="token punctuation">.</span>user_name<span class="token punctuation">,</span>u<span class="token punctuation">.</span>nick_name <span class="token keyword">from</span> sys_dept d <span class="token keyword">left</span> <span class="token keyword">join</span> sys_user u <span class="token keyword">on</span> u<span class="token punctuation">.</span>dept_id <span class="token operator">=</span> d<span class="token punctuation">.</span>dept_id\n <span class="token operator">=</span><span class="token operator">=</span><span class="token operator">&gt;</span>  Parameters: \n <span class="token operator">&lt;=</span><span class="token operator">=</span>      Total: <span class="token number">10</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211005154305109.png" alt="image-20211005154305109"></p><h4 id="_2-1-2-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2.1.2 \u4F18\u7F3A\u70B9</h4><ul><li>\u4F18\u70B9\uFF1A <ul><li>\u53EA\u7528\u4E00\u6761sql\u8BED\u53E5\u5C31\u5B9E\u73B0\u4E86\u67E5\u8BE2</li></ul></li><li>\u7F3A\u70B9 <ul><li>\u4F46\u662F\u4E00\u5BF9\u591A\u7684\u5206\u9875\u4F1A\u51FA\u73B0\u6570\u91CF\u4E0D\u5BF9\u7684\u95EE\u9898</li></ul></li></ul><h3 id="_2-2-collection\u5D4C\u5957\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-2-collection\u5D4C\u5957\u67E5\u8BE2" aria-hidden="true">#</a> 2.2 collection\u5D4C\u5957\u67E5\u8BE2</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptUserDetail<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_name<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span>\n                    <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ygn.system.mapper.SysUserDao.selectByDeptId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>\n\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectDeptUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDept<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>SysDeptResult<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        select d.dept_id,d.dept_name\n        from sys_dept d\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deptName != null and deptName != <span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n            AND dept_name like concat(&#39;%&#39;, #{deptName}, &#39;%&#39;)\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SysUserDao</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ygn.system.mapper.SysUserDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectByDeptId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ygn.common.core.domain.entity.SysUser<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n		select * from sys_user where dept_id=#{dept_id}\n	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7279\u522B\u6CE8\u610F\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>collection</span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dept_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">select</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.ygn.system.mapper.SysUserDao.selectByDeptId<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>collection</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>select : \u5D4C\u5957\u67E5\u8BE2\u7684sql\u8BED\u53E5</li><li>column\uFF1A \u4F20\u9012\u5230\u5D4C\u5957\u67E5\u8BE2\u7684\u53C2\u6570</li></ul><h4 id="_2-2-1-\u67E5\u8BE2\u7684sql\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u67E5\u8BE2\u7684sql\u65E5\u5FD7" aria-hidden="true">#</a> 2.2.1 \u67E5\u8BE2\u7684sql\u65E5\u5FD7</h4><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211005154247410.png" alt="image-20211005154247410"></p><h4 id="_2-2-2-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-2-2-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 2.2.2 \u4F18\u7F3A\u70B9</h4><ul><li><p>\u4F18\u70B9\uFF1A</p><ul><li>\u80FD\u89E3\u51B3\u4E00\u5BF9\u591A\u60C5\u51B5\uFF0C\u5206\u9875\u5BFC\u81F4\u7684\u5206\u9875\u4E0D\u51C6\u95EE\u9898</li></ul></li><li><p>\u7F3A\u70B9</p><ul><li>\u4EA7\u751FN+1\u95EE\u9898: sql \u5B9E\u9645\u4E0A\u5D4C\u5957\u4E86n\u6761 \u5173\u8054sql</li></ul></li></ul><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 24);
const _hoisted_25 = {
  href: "https://blog.csdn.net/zjy15203167987/article/details/79463887",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_26 = /* @__PURE__ */ createTextVNode("collection\u89E3\u51B3\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_25, [
        _hoisted_26,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Mybatis__collection__________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Mybatis\u4F7F\u7528collection\u89E3\u51B3\u4E00\u5BF9\u591A\u5173\u8054\u67E5\u8BE2.html.vue"]]);
export { Mybatis__collection__________html as default };
