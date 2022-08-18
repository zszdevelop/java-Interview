import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93" aria-hidden="true">#</a> Flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93</h1><h2 id="_1-\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u80CC\u666F" aria-hidden="true">#</a> 1. \u80CC\u666F</h2><p>\u516C\u53F8\u9879\u76EE\u9700\u8981\u517C\u5BB9\u56FD\u4EA7\u6570\u636E\u5E93\u8FBE\u68A6\uFF0C\u8FBE\u68A6\u548Coracle \u76F8\u4F3C\u5EA6\u8FD8\u662F\u975E\u5E38\u9AD8\u7684\u3002\u7EDD\u5927\u90E8\u5206\u7684sql\u8BED\u53E5\u90FD\u80FD\u5171\u7528\u3002\u4F46\u662Fflyway \u672C\u8EAB\u662F\u4E0D\u652F\u6301\u8FBE\u68A6\u7684\uFF0C\u4F46\u662F\u4E0D\u7740\u6025\uFF0Cflyway \u672C\u8EAB\u662F\u5F00\u6E90\u7684\uFF0C\u90A3\u4E48\u6211\u4EEC\u662F\u5426\u80FD\u5C06\u8FBE\u68A6\u9002\u914D\u5230 oracle\u7684flyway\u5462</p><h2 id="_2-\u6E90\u7801\u4E0B\u8F7D\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_2-\u6E90\u7801\u4E0B\u8F7D\u5BFC\u5165" aria-hidden="true">#</a> 2. \u6E90\u7801\u4E0B\u8F7D\u5BFC\u5165</h2><h2 id="_2-1-flyway-\u6E90\u7801" tabindex="-1"><a class="header-anchor" href="#_2-1-flyway-\u6E90\u7801" aria-hidden="true">#</a> 2.1 flyway \u6E90\u7801</h2>', 5);
const _hoisted_6 = {
  href: "https://github.com/flyway/flyway",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createTextVNode("flyway\u6E90\u7801\u5730\u5740");
const _hoisted_8 = /* @__PURE__ */ createStaticVNode('<p>\u56E0\u516C\u53F8\u9879\u76EE\u4E4B\u524D\u662F\u75286.3.3 \u7248\u672C\uFF0C\u73B0\u5728\u7248\u672C\u5DF2\u7ECF\u53D8\u5316\u633A\u5927\u4E86\uFF0C\u6240\u4EE5\u8FD8\u662F\u4F7F\u7528tag \u4E3A6.3.3 \u7684</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925101634465.png" alt="image-20210925101634465"></p><h2 id="_2-2-flyway-\u6253\u5305\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_2-2-flyway-\u6253\u5305\u6D4B\u8BD5" aria-hidden="true">#</a> 2.2 flyway \u6253\u5305\u6D4B\u8BD5</h2><p>\u6211\u4EEC\u76F4\u63A5\u6253\u5305\u662F\u4E0D\u80FD\u76F4\u63A5\u6253\u5305\u6210\u529F\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.8.1:compile (default-compile) on project flyway-core: Fatal error compiling\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102032444.png" alt="image-20210925102032444"></p><p>\u7F51\u4E0A\u7684\u89E3\u91CA\u662F\uFF0C\u7248\u672C\u4E0D\u4E00\u81F4\uFF0C\u4F46\u6309\u7167\u4ED6\u4EEC\u7684\u65B9\u6CD5\u4E00\u4E2A\u4E2A\u8BBE\u7F6E\uFF0C\u600E\u4E48\u90FD\u6CA1\u7528\u3002</p><p>\u540E\u9762\u6000\u7591\u662Fidea \u7684\u95EE\u9898\uFF0C\u7528mvn clean package \u6253\u5305\u505A\u6D4B\u8BD5</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102307886.png" alt="image-20210925102307886"></p><p>\u7ED3\u679C\u53D1\u73B0mvn \u7684\u63D0\u793A\u6E05\u6670\u591A\u4E86</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u65E0\u6548\u7684\u6807\u8BB0: --release \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-1-\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-2-1-\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> 2.2.1 \u89E3\u51B3\u529E\u6CD5</h3><ul><li><p>\u7B2C\u4E00\u79CD\uFF1A jdk \u5347\u7EA7\u5230 JDK9</p><p>\u4E0D\u63A8\u8350\uFF0C\u5F88\u591A\u516C\u53F8\u8FD8\u662F\u7528jdk8</p></li><li><p>pom.xml \u6CE8\u91CA\u6389 <code>&lt;release&gt;8&lt;/release&gt;</code></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925102554160.png" alt="image-20210925102554160"></p></li></ul><p>\u8FD9\u6837\u6253\u5305\u5C31\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u4E86</p><h2 id="_4-\u9002\u914D\u8FBE\u68A6" tabindex="-1"><a class="header-anchor" href="#_4-\u9002\u914D\u8FBE\u68A6" aria-hidden="true">#</a> 4. \u9002\u914D\u8FBE\u68A6</h2><h3 id="_4-1-\u4FEE\u6539databasetype" tabindex="-1"><a class="header-anchor" href="#_4-1-\u4FEE\u6539databasetype" aria-hidden="true">#</a> 4.1 \u4FEE\u6539DatabaseType</h3><p>org.flywaydb.core.internal.jdbc.DatabaseType\u7C7B\u4E2D</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> ORACLE<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u589E\u52A0||databaseProductName.startsWith(&quot;DM&quot;)</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">if</span> <span class="token punctuation">(</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;Oracle&quot;</span><span class="token punctuation">)</span><span class="token operator">||</span>databaseProductName<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;DM&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> ORACLE<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-drivertype\u4E2D\u6DFB\u52A0dmdrivertype" tabindex="-1"><a class="header-anchor" href="#_4-2-drivertype\u4E2D\u6DFB\u52A0dmdrivertype" aria-hidden="true">#</a> 4.2 DriverType\u4E2D\u6DFB\u52A0dmDriverType</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DriverDataSource</span> <span class="token keyword">implements</span> <span class="token class-name">DataSource</span> <span class="token punctuation">{</span>\n <span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DriverType</span> <span class="token punctuation">{</span>\n	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> \n  <span class="token function">ORACLE</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:oracle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;oracle.jdbc.OracleDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n	<span class="token function">DM</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dm.jdbc.driver.DmDriver&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-\u4E0D\u6821\u9A8C\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_4-3-\u4E0D\u6821\u9A8C\u7248\u672C" aria-hidden="true">#</a> 4.3 \u4E0D\u6821\u9A8C\u7248\u672C</h3><p>\u6211\u4EEC\u8981\u517C\u5BB9\u8FBE\u68A6\uFF0C\u8FBE\u68A6\u7684\u7248\u672C\u662F8.X \u800C Oracle \u662F\u9700\u898110.x \u4EE5\u4E0A\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u6821\u9A8C\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Exception in thread &quot;main&quot; org.flywaydb.core.internal.exception.FlywayDbUpgradeRequiredException: Oracle upgrade required: Oracle 8.1 is outdated and no longer supported by Flyway. Flyway currently supports Oracle 10 and newer.\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173026851.png" alt="image-20210921173026851"></p><p>\u56E0\u4E3A\u6211\u4EEC\u8FBE\u68A6\u76F4\u63A5\u4F7F\u7528oracle \u7684\u8BED\u6CD5\uFF0C\u4F46\u662F\u7248\u672C\u8FD8\u662F\u8FBE\u68A6\u7684\u3002\u6240\u4EE5\u6211\u4EEC\u76F4\u63A5\u6CE8\u91CA\u6389\u3002\u6709\u4E24\u5904</p><ul><li>\u7B2C\u4E00\u5904\u4E3A\uFF1A</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseIsRecentEnough</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersion<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersion)) {</span>\n<span class="token comment">//            throw new FlywayDbUpgradeRequiredException(databaseType, computeVersionDisplayName(getVersion()),</span>\n<span class="token comment">//                    computeVersionDisplayName(MigrationVersion.fromVersion(oldestSupportedVersion)));</span>\n<span class="token comment">//        }</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u5904\u4E3A\uFF1A</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**\n     * Ensures this database it at least at recent as this version otherwise suggest upgrade to this higher edition of\n     * Flyway.\n     *\n     * <span class="token keyword">@param</span> <span class="token parameter">oldestSupportedVersionInThisEdition</span> The oldest supported version of the database by this edition of Flyway.\n     * <span class="token keyword">@param</span> <span class="token parameter">editionWhereStillSupported</span>          The edition of Flyway that still supports this version of the database,\n     *                                            in case it&#39;s too old.\n     */</span>\n    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">ensureDatabaseNotOlderThanOtherwiseRecommendUpgradeToFlywayEdition</span><span class="token punctuation">(</span><span class="token class-name">String</span> oldestSupportedVersionInThisEdition<span class="token punctuation">,</span>\n                                                                                            <span class="token class-name">Edition</span> editionWhereStillSupported<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n<span class="token comment">//        if (!getVersion().isAtLeast(oldestSupportedVersionInThisEdition)) {</span>\n<span class="token comment">//            throw new FlywayEditionUpgradeRequiredException(</span>\n<span class="token comment">//                    editionWhereStillSupported,</span>\n<span class="token comment">//                    databaseType,</span>\n<span class="token comment">//                    computeVersionDisplayName(getVersion()));</span>\n<span class="token comment">//        }</span>\n    <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u8FBE\u68A6\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-\u8FBE\u68A6\u6D4B\u8BD5" aria-hidden="true">#</a> 5. \u8FBE\u68A6\u6D4B\u8BD5</h2><h3 id="_5-1-\u6DFB\u52A0dm\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_5-1-\u6DFB\u52A0dm\u4F9D\u8D56" aria-hidden="true">#</a> 5.1 \u6DFB\u52A0dm\u4F9D\u8D56</h3><div class="language-pom ext-pom line-numbers-mode"><pre class="language-pom"><code>&lt;dependency&gt;\n    &lt;groupId&gt;com.dm&lt;/groupId&gt;\n    &lt;artifactId&gt;DmJdbcDriver&lt;/artifactId&gt;\n    &lt;version&gt;1.8.0&lt;/version&gt;\n&lt;/dependency&gt;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-\u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B" tabindex="-1"><a class="header-anchor" href="#_5-2-\u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B" aria-hidden="true">#</a> 5.2 \u6DFB\u52A0\u8FBE\u68A6\u6D4B\u8BD5\u7C7B</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MainTest</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Flyway</span> flyway <span class="token operator">=</span> <span class="token class-name">Flyway</span><span class="token punctuation">.</span><span class="token function">configure</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dataSource</span><span class="token punctuation">(</span><span class="token string">&quot;jdbc:dm://192.168.0.1:5236&quot;</span><span class="token punctuation">,</span>\n                <span class="token string">&quot;root&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;123456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//        \u7B2C\u4E00\u6B65\u5148\u6267\u884Cbaseline,\u4E4B\u540E\u624D\u80FD\u6267\u884Cmigrate</span>\n        flyway<span class="token punctuation">.</span><span class="token function">baseline</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//        flyway.migrate();</span>\n        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C\u5B8C\u4E86&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-\u8FD0\u884C\u6D4B\u8BD5" tabindex="-1"><a class="header-anchor" href="#_5-3-\u8FD0\u884C\u6D4B\u8BD5" aria-hidden="true">#</a> 5.3 \u8FD0\u884C\u6D4B\u8BD5</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210921173515577.png" alt="image-20210921173515577"></p><p>\u4E5F\u6B63\u5E38\u751F\u6210 <code>flyway_schema_history</code></p><h2 id="_6-\u96C6\u6210\u5230\u81EA\u5DF1\u9879\u76EE\u4E2D" tabindex="-1"><a class="header-anchor" href="#_6-\u96C6\u6210\u5230\u81EA\u5DF1\u9879\u76EE\u4E2D" aria-hidden="true">#</a> 6. \u96C6\u6210\u5230\u81EA\u5DF1\u9879\u76EE\u4E2D</h2><h3 id="_6-1-\u4E0B\u8F7Dflyway-dm-6-3-3" tabindex="-1"><a class="header-anchor" href="#_6-1-\u4E0B\u8F7Dflyway-dm-6-3-3" aria-hidden="true">#</a> 6.1 \u4E0B\u8F7Dflyway-dm-6.3.3</h3>', 41);
const _hoisted_49 = {
  href: "https://github.com/zszdevelop/flyway-dm/releases/tag/flyway-6.3.3",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_50 = /* @__PURE__ */ createTextVNode("flyway-dm-6.3.3\u4E0B\u8F7D");
const _hoisted_51 = /* @__PURE__ */ createStaticVNode('<h3 id="_6-2-\u5C06\u6587\u4EF6\u653E\u5165lib\u4E2D" tabindex="-1"><a class="header-anchor" href="#_6-2-\u5C06\u6587\u4EF6\u653E\u5165lib\u4E2D" aria-hidden="true">#</a> 6.2 \u5C06\u6587\u4EF6\u653E\u5165lib\u4E2D</h3><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20210925103927972.png" alt="image-20210925103927972"></p><h3 id="_6-2-pom\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_6-2-pom\u4F9D\u8D56" aria-hidden="true">#</a> 6.2 pom\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>        <span class="token comment">&lt;!-- flyway--&gt;</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.flywaydb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>flyway-core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>system<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>systemPath</span><span class="token punctuation">&gt;</span></span>${project.basedir}/lib/flyway-core-0-SNAPSHOT.jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>systemPath</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u5728flyway-commandline\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_7-\u5728flyway-commandline\u4F7F\u7528" aria-hidden="true">#</a> 7. \u5728flyway-commandline\u4F7F\u7528</h2><p>\u6211\u4EEC\u4F7F\u7528\u65B9\u5F0F\u53EF\u4EE5\u662F\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528flyway-commandline \u7684\u65B9\u5F0F\u3002\u6B64\u65B9\u5F0F\u66F4\u52A0\u65B9\u4FBF</p><h3 id="_7-1-\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684flyway-commandline" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684flyway-commandline" aria-hidden="true">#</a> 7.1 \u4E0B\u8F7D\u5BF9\u5E94\u7248\u672C\u7684flyway-commandline</h3><p>\u6211\u4EEC\u6539\u7684\u6E90\u7801\u662F6.3.3 \u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0B\u8F7D6.3.3 \u7684flyway-commandline</p>', 8);
const _hoisted_59 = {
  href: "https://repo1.maven.org/maven2/org/flywaydb/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_60 = /* @__PURE__ */ createTextVNode("flywaydb\u4E0B\u8F7D");
const _hoisted_61 = /* @__PURE__ */ createStaticVNode('<h3 id="_7-2-\u6DFB\u52A0\u8FBE\u68A6\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#_7-2-\u6DFB\u52A0\u8FBE\u68A6\u9A71\u52A8" aria-hidden="true">#</a> 7.2 \u6DFB\u52A0\u8FBE\u68A6\u9A71\u52A8</h3><p>\u5C06\u8FBE\u68A6\u9A71\u52A8\u653E\u5230 flyway-6.3.3-&gt;drivers-&gt;DmJdbcDriver18.jar</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222426034.png" alt="image-20211011222426034"></p><h3 id="_7-3-\u66F4\u6539\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_7-3-\u66F4\u6539\u914D\u7F6E" aria-hidden="true">#</a> 7.3 \u66F4\u6539\u914D\u7F6E</h3><p>\u4FEE\u6539flyway-6.3.3-\u300Bconf-&gt;flyway.conf</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u8FBE\u68A6\u6570\u636E\u5E93url</span>\nflyway.url<span class="token operator">=</span>jdbc:dm://192.168.0.1:5236\n<span class="token comment"># \u6570\u636E\u5E93\u9A71\u52A8</span>\nflyway.driver<span class="token operator">=</span>dm.jdbc.driver.DmDriver\n<span class="token comment"># \u6570\u636E\u5E93\u7528\u6237\u540D</span>\nflyway.user<span class="token operator">=</span>youuser\n<span class="token comment"># \u6570\u636E\u5E93\u5BC6\u7801</span>\nflyway.password<span class="token operator">=</span>youpassword\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_7-4-\u66FF\u6362flyway-core\u5305" tabindex="-1"><a class="header-anchor" href="#_7-4-\u66FF\u6362flyway-core\u5305" aria-hidden="true">#</a> 7.4 \u66FF\u6362flyway-core\u5305</h4><p>\u4FEE\u6539flyway-6.3.3-\u300Blib-&gt;community-&gt;flyway-core-6.3.3.jar</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011222641335.png" alt="image-20211011222641335"></p><h3 id="_7-5-\u547D\u4EE4\u884C\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#_7-5-\u547D\u4EE4\u884C\u8FD0\u884C" aria-hidden="true">#</a> 7.5 \u547D\u4EE4\u884C\u8FD0\u884C</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./flyway migrate -baselineOnMigrate=true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 12);
const _hoisted_73 = {
  href: "https://blog.csdn.net/qq_32811865/article/details/105594256",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_74 = /* @__PURE__ */ createTextVNode("flyway \u6E90\u7801\u89E3\u6790");
const _hoisted_75 = {
  href: "https://blog.csdn.net/babyzhongheng/article/details/115176744",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_76 = /* @__PURE__ */ createTextVNode("flyway-4.2\u9002\u914DDM8\u6570\u636E\u5E93");
const _hoisted_77 = {
  href: "https://blog.csdn.net/u013084266/article/details/106542814",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_78 = /* @__PURE__ */ createTextVNode("\u95EE\u9898\u89E3\u51B3\uFF1Aflyway\u6E90\u7801\u7F16\u8BD1\uFF0C\u62A5\uFF1Aflyway-core: Fatal error compiling: \u65E0\u6548\u7684\u6807\u8BB0: --release");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_6, [
        _hoisted_7,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_8,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_49, [
        _hoisted_50,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_51,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_59, [
        _hoisted_60,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_61,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_73, [
        _hoisted_74,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_75, [
        _hoisted_76,
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_77, [
        _hoisted_78,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var Flyway________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Flyway\u517C\u5BB9\u8FBE\u68A6\u6570\u636E\u5E93.html.vue"]]);
export { Flyway________html as default };
