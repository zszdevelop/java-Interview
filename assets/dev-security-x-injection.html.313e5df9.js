import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as p,a as n,b as t,d as c,e as a,r as l}from"./app.6a1f7fa8.js";const i={},u=c(`<h1 id="\u5F00\u53D1\u5B89\u5168-\u6CE8\u5165\u653B\u51FB\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u5B89\u5168-\u6CE8\u5165\u653B\u51FB\u8BE6\u89E3" aria-hidden="true">#</a> \u5F00\u53D1\u5B89\u5168 - \u6CE8\u5165\u653B\u51FB\u8BE6\u89E3</h1><blockquote><p>\u6CE8\u5165\u653B\u51FB\u6700\u4E3A\u5E38\u89C1\u7684\u653B\u51FB\u65B9\u5F0F\uFF0C\u4F5C\u4E3A\u5F00\u53D1\u800C\u8A00\u5FC5\u987B\u5B8C\u5168\u907F\u514D; \u672C\u6587\u4F1A\u4ECB\u7ECD\u5E38\u89C1\u7684\u51E0\u79CD\u6CE8\u5165\u65B9\u5F0F\uFF0C\u6BD4\u5982\uFF1A<code>SQL \u6CE8\u5165</code>, <code>xPath \u6CE8\u5165</code>, <code>\u547D\u4EE4\u6CE8\u5165</code>, <code>LDAP\u6CE8\u5165</code>, <code>CLRF\u6CE8\u5165</code>, <code>Host\u5934\u6CE8\u5165</code>, <code>Email\u5934\u6CE8\u5165</code>\u7B49\u7B49\uFF0C\u603B\u7ED3\u6765\u770B\u5176\u672C\u8D28\u5176\u5B9E\u662F\u4E00\u6837\u7684\uFF0C\u4E14\u9632\u5FA1\u63AA\u65BD\u4E5F\u5927\u540C\u5C0F\u5F02\uFF0C\u5177\u4F53\u770B\u4E0B\u9762\u7684\u5185\u5BB9\u3002</p></blockquote><blockquote><p>\u653B\u51FB\u8005\u4F7F\u7528\u6076\u610F\u4EE3\u7801\u6CE8\u5165\u7CFB\u7EDF\uFF0C\u6B3A\u9A97\u670D\u52A1\u5668\u6267\u884C\u6076\u610F\u547D\u4EE4</p></blockquote><h2 id="_1-sql-\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_1-sql-\u6CE8\u5165" aria-hidden="true">#</a> 1. SQL \u6CE8\u5165</h2><blockquote><p>\u6240\u8C13 SQL \u6CE8\u5165\uFF0C\u5C31\u662F\u901A\u8FC7\u5C06 SQL \u547D\u4EE4\u63D2\u5165\u5E94\u7528\u7A0B\u5E8F\u7684 http \u8BF7\u6C42\u4E2D\uFF0C\u5E76\u5728\u670D\u52A1\u5668\u7AEF\u88AB\u63A5\u6536\u540E\u7528\u4E8E\u53C2\u4E0E\u6570\u636E\u5E93\u64CD\u4F5C\uFF0C\u6700\u7EC8\u8FBE\u5230\u6B3A\u9A97\u670D\u52A1\u5668\u6267\u884C\u6076\u610F\u7684 SQL \u547D\u4EE4\u7684\u6548\u679C\u3002\u7406\u8BBA\u4E0A\u6765\u8BB2\uFF0C\u5E94\u7528\u7A0B\u5E8F\u4E2D\u53EA\u8981\u662F\u4E0E\u6570\u636E\u5E93\u6709\u6570\u636E\u4EA4\u4E92\u7684\u5730\u65B9\uFF0C\u65E0\u8BBA\u662F\u589E\u5220\u6539\u67E5\uFF0C\u5982\u679C\u6570\u636E\u5B8C\u5168\u53D7\u7528\u6237\u63A7\u5236\uFF0C\u800C\u5E94\u7528\u7A0B\u5E8F\u53C8\u5904\u7406\u4E0D\u5F53\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u5730\u65B9\u90FD\u662F\u53EF\u80FD\u5B58\u5728 SQL \u6CE8\u5165\u7684\u3002</p></blockquote><h3 id="_1-1-\u4EC0\u4E48\u6837\u7684sql\u4F1A\u9020\u6210\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4EC0\u4E48\u6837\u7684sql\u4F1A\u9020\u6210\u653B\u51FB" aria-hidden="true">#</a> 1.1 \u4EC0\u4E48\u6837\u7684SQL\u4F1A\u9020\u6210\u653B\u51FB?</h3><p>\u76F4\u63A5\u770B\u4E0B\u9762\u767B\u5F55\u7684SQL\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">auth</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">,</span><span class="token class-name">String</span> password<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">{</span>
    <span class="token class-name">Connection</span> conn <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        conn <span class="token operator">=</span> <span class="token class-name">DBUtil</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Statement</span> state <span class="token operator">=</span> conn<span class="token punctuation">.</span><span class="token function">createStatement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u91CD\u70B9\u770B\u8FD9\u6761SQL\uFF0C\u5BC6\u7801\u8F93\u5165: &#39; OR &#39;1&#39;=&#39;1\u65F6\uFF0C\u7B49\u540C\u4E8E\u4E0D\u9700\u8981\u5BC6\u7801</span>
        <span class="token class-name">String</span> sql <span class="token operator">=</span> <span class="token string">&quot;SELECT * FROM t_user WHERE username=&#39;&quot;</span><span class="token operator">+</span>userName<span class="token operator">+</span><span class="token string">&quot;&#39; AND pwd=&#39;&quot;</span><span class="token operator">+</span>password<span class="token operator">+</span><span class="token string">&quot;&#39;&quot;</span><span class="token punctuation">;</span>       
        <span class="token class-name">ResultSet</span> rs <span class="token operator">=</span> state<span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span>sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>rs<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>conn <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">DBUtil</span><span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span>conn<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-\u5982\u4F55\u9632\u5FA1" tabindex="-1"><a class="header-anchor" href="#_1-2-\u5982\u4F55\u9632\u5FA1" aria-hidden="true">#</a> 1.2 \u5982\u4F55\u9632\u5FA1?</h3><p>\u5E38\u89C1\u7684\u4FEE\u590D\u65B9\u6CD5\uFF1A</p><ul><li><strong>\u4F7F\u7528\u9884\u7F16\u8BD1\u5904\u7406\u8F93\u5165\u53C2\u6570</strong>\uFF1A\u8981\u9632\u5FA1 SQL \u6CE8\u5165\uFF0C\u7528\u6237\u7684\u8F93\u5165\u5C31\u4E0D\u80FD\u76F4\u63A5\u5D4C\u5957\u5728 SQL \u8BED\u53E5\u5F53\u4E2D\u3002\u4F7F\u7528\u53C2\u6570\u5316\u7684\u8BED\u53E5\uFF0C\u7528\u6237\u7684\u8F93\u5165\u5C31\u88AB\u9650\u5236\u4E8E\u4E00\u4E2A\u53C2\u6570\u5F53\u4E2D\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u5199\u4E2A\u5927\u6982\uFF0C\u5E2E\u52A9\u4F60\u7406\u89E3</span>
sqlStatement <span class="token operator">=</span> dbConnection<span class="token punctuation">.</span><span class="token function">prepareStatement</span><span class="token punctuation">(</span><span class="token string">&quot;select * from users where username= ? and password = ?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
sqlStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
sqlStatement<span class="token punctuation">.</span><span class="token function">setString</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u52A0\u5BC6</span>

<span class="token comment">// \u53EA\u662F\u770B\u4E2A\u601D\u8DEF\uFF0C\u90FD2020\u5E74\u4E86\uFF0C\u8C01\u8FD8\u81EA\u5DF1\u5199JDBC\u767B\u5F55...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u8F93\u5165\u9A8C\u8BC1</strong>\uFF1A\u68C0\u67E5\u7528\u6237\u8F93\u5165\u7684\u5408\u6CD5\u6027\uFF0C\u4EE5\u786E\u4FDD\u8F93\u5165\u7684\u5185\u5BB9\u4E3A\u6B63\u5E38\u7684\u6570\u636E\u3002\u6570\u636E\u68C0\u67E5\u5E94\u5F53\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u7AEF\u90FD\u6267\u884C\uFF0C\u4E4B\u6240\u4EE5\u8981\u6267\u884C\u670D\u52A1\u5668\u7AEF\u9A8C\u8BC1\uFF0C\u662F\u56E0\u4E3A\u5BA2\u6237\u7AEF\u7684\u6821\u9A8C\u5F80\u5F80\u53EA\u662F\u51CF\u8F7B\u670D\u52A1\u5668\u7684\u538B\u529B\u548C\u63D0\u9AD8\u5BF9\u7528\u6237\u7684\u53CB\u597D\u5EA6\uFF0C\u653B\u51FB\u8005\u5B8C\u5168\u6709\u53EF\u80FD\u901A\u8FC7\u6293\u5305\u4FEE\u6539\u53C2\u6570\u6216\u8005\u662F\u83B7\u5F97\u7F51\u9875\u7684\u6E90\u4EE3\u7801\u540E\uFF0C\u4FEE\u6539\u9A8C\u8BC1\u5408\u6CD5\u6027\u7684\u811A\u672C\uFF08\u6216\u8005\u76F4\u63A5\u5220\u9664\u811A\u672C\uFF09\uFF0C\u7136\u540E\u5C06\u975E\u6CD5\u5185\u5BB9\u901A\u8FC7\u4FEE\u6539\u540E\u7684\u8868\u5355\u63D0\u4EA4\u7ED9\u670D\u52A1\u5668\u7B49\u7B49\u624B\u6BB5\u7ED5\u8FC7\u5BA2\u6237\u7AEF\u7684\u6821\u9A8C\u3002\u56E0\u6B64\uFF0C\u8981\u4FDD\u8BC1\u9A8C\u8BC1\u64CD\u4F5C\u786E\u5B9E\u5DF2\u7ECF\u6267\u884C\uFF0C\u552F\u4E00\u7684\u529E\u6CD5\u5C31\u662F\u5728\u670D\u52A1\u5668\u7AEF\u4E5F\u6267\u884C\u9A8C\u8BC1\u3002\u4F46\u662F\u8FD9\u4E9B\u65B9\u6CD5\u5F88\u5BB9\u6613\u51FA\u73B0\u7531\u4E8E\u8FC7\u6EE4\u4E0D\u4E25\u5BFC\u81F4\u6076\u610F\u653B\u51FB\u8005\u53EF\u80FD\u7ED5\u8FC7\u8FD9\u4E9B\u8FC7\u6EE4\u7684\u73B0\u8C61\uFF0C\u9700\u8981\u614E\u91CD\u4F7F\u7528\u3002</li><li><strong>\u9519\u8BEF\u6D88\u606F\u5904\u7406</strong>\uFF1A\u9632\u8303 SQL \u6CE8\u5165\uFF0C\u8FD8\u8981\u907F\u514D\u51FA\u73B0\u4E00\u4E9B\u8BE6\u7EC6\u7684\u9519\u8BEF\u6D88\u606F\uFF0C\u6076\u610F\u653B\u51FB\u8005\u5F80\u5F80\u4F1A\u5229\u7528\u8FD9\u4E9B\u62A5\u9519\u4FE1\u606F\u6765\u5224\u65AD\u540E\u53F0 SQL \u7684\u62FC\u63A5\u5F62\u5F0F\uFF0C\u751A\u81F3\u662F\u76F4\u63A5\u5229\u7528\u8FD9\u4E9B\u62A5\u9519\u6CE8\u5165\u5C06\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\u901A\u8FC7\u62A5\u9519\u4FE1\u606F\u663E\u793A\u51FA\u6765\u3002</li><li><strong>\u52A0\u5BC6\u5904\u7406</strong>\uFF1A\u5C06\u7528\u6237\u767B\u5F55\u540D\u79F0\u3001\u5BC6\u7801\u7B49\u6570\u636E\u52A0\u5BC6\u4FDD\u5B58\u3002\u52A0\u5BC6\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\uFF0C\u7136\u540E\u518D\u5C06\u5B83\u4E0E\u6570\u636E\u5E93\u4E2D\u4FDD\u5B58\u7684\u6570\u636E\u6BD4\u8F83\uFF0C\u8FD9\u76F8\u5F53\u4E8E\u5BF9\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u8FDB\u884C\u4E86\u201C\u6D88\u6BD2\u201D\u5904\u7406\uFF0C\u7528\u6237\u8F93\u5165\u7684\u6570\u636E\u4E0D\u518D\u5BF9\u6570\u636E\u5E93\u6709\u4EFB\u4F55\u7279\u6B8A\u7684\u610F\u4E49\uFF0C\u4ECE\u800C\u4E5F\u5C31\u9632\u6B62\u4E86\u653B\u51FB\u8005\u6CE8\u5165 SQL \u547D\u4EE4\u3002</li></ul><h2 id="_2-xpath-\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_2-xpath-\u6CE8\u5165" aria-hidden="true">#</a> 2. xPath \u6CE8\u5165</h2><blockquote><p>XPath \u662F\u4E00\u79CD\u7528\u6765\u5728\u5185\u5B58\u4E2D\u5BFC\u822A\u6574\u4E2AXML\u6811\u7684\u8BED\u8A00\uFF0C\u5B83\u4F7F\u7528\u8DEF\u5F84\u8868\u8FBE\u5F0F\u6765\u9009\u53D6XML\u6587\u6863\u4E2D\u7684\u8282\u70B9\u6216\u8005\u8282\u70B9\u96C6\u3002XPath \u7684\u8BBE\u8BA1\u521D\u8877\u662F\u4F5C\u4E3A\u4E00\u79CD\u9762\u5411 XSLT \u548C XPointer \u7684\u8BED\u8A00,\u540E\u6765\u72EC\u7ACB\u6210\u4E86\u4E00\u79CDW3C\u6807\u51C6\u3002\u800C XPath \u6CE8\u5165\u662F\u6307\u5229\u7528 XPath \u89E3\u6790\u5668\u7684\u677E\u6563\u8F93\u5165\u548C\u5BB9\u9519\u7279\u6027\uFF0C\u80FD\u591F\u5728 URL\u3001\u8868\u5355\u6216\u5176\u5B83\u4FE1\u606F\u4E0A\u9644\u5E26\u6076\u610F\u7684 XPath \u67E5\u8BE2\u4EE3\u7801\uFF0C\u4EE5\u83B7\u5F97\u6743\u9650\u4FE1\u606F\u7684\u8BBF\u95EE\u6743\u5E76\u66F4\u6539\u8FD9\u4E9B\u4FE1\u606F\u3002XPath \u6CE8\u5165\u4E0E SQL \u6CE8\u5165\u7C7B\u4F3C\uFF0C\u5747\u662F\u901A\u8FC7\u6784\u9020\u6076\u610F\u7684\u67E5\u8BE2\u8BED\u53E5\uFF0C\u5BF9\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u653B\u51FB\u3002</p></blockquote><h3 id="_2-1-xpath\u662F\u600E\u4E48\u5DE5\u4F5C\u7684" tabindex="-1"><a class="header-anchor" href="#_2-1-xpath\u662F\u600E\u4E48\u5DE5\u4F5C\u7684" aria-hidden="true">#</a> 2.1 xPath\u662F\u600E\u4E48\u5DE5\u4F5C\u7684?</h3><p>\u5B9E\u5728\u4E0D\u559C\u6B22\u7F51\u4E0A\u4E71\u4E03\u516B\u7CDF\u7684\uFF0C\u5176\u5B9E\u4E00\u5F20\u56FE\u5C31\u53EF\u4EE5\u89E3\u91CA\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220705220710709.png" alt="image-20220705220710709" loading="lazy"></p><h3 id="_2-2-\u5982\u4F55\u653B\u51FB\u7684" tabindex="-1"><a class="header-anchor" href="#_2-2-\u5982\u4F55\u653B\u51FB\u7684" aria-hidden="true">#</a> 2.2 \u5982\u4F55\u653B\u51FB\u7684?</h3><p>\u5982\u679C\u7528\u6237\u4F20\u5165\u7C7B\u4F3C \u2019 or 1=1 or \u201D=\u2019 \u7684\u503C\uFF0C\u90A3\u4E48\u8BE5\u67E5\u8BE2\u8BED\u53E5\u4E5F\u4F1A\u5F97\u5230 true \u8FD4\u56DE\u503C\uFF0C\u5C06\u8FD4\u56DE\u6240\u6709\u7528\u6237\u7684\u5217\u8868\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220705221024658.png" alt="image-20220705221024658" loading="lazy"></p><h3 id="_2-3-\u5982\u4F55\u9632\u5FA1" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5982\u4F55\u9632\u5FA1" aria-hidden="true">#</a> 2.3 \u5982\u4F55\u9632\u5FA1?</h3><p>\u8981\u907F\u514DXPath\u6CE8\u5165\uFF0C\u9700\u8981\u6CE8\u610F\u4EE5\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>\u5BF9\u7528\u6237\u7684\u8F93\u5165\u8FDB\u884C\u5408\u7406\u9A8C\u8BC1\uFF0C\u5BF9\u7279\u6B8A\u5B57\u7B26\uFF08\u5982&lt;\u3001&gt;\u3001\u2019\u3001\u201D\u7B49\uFF09\u7B49\u8FDB\u884C\u8F6C\u4E49\u3002\u8FC7\u6EE4\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E24\u8FB9\u5B9E\u73B0\uFF0C\u5982\u679C\u53EF\u80FD\u7684\u8BDD\uFF0C\u5EFA\u8BAE\u4E24\u8005\u540C\u65F6\u8FDB\u884C\u8FC7\u6EE4\u3002</li><li>\u521B\u5EFA\u4E00\u4EFD\u5B89\u5168\u5B57\u7B26\u767D\u540D\u5355\uFF0C\u786E\u4FDD XPath \u67E5\u8BE2\u4E2D\u7531\u7528\u6237\u63A7\u5236\u7684\u6570\u503C\u5B8C\u5168\u6765\u81EA\u4E8E\u9884\u5B9A\u7684\u5B57\u7B26\u96C6\u5408\uFF0C\u4E0D\u5305\u542B\u4EFB\u4F55 XPath \u5143\u5B57\u7B26\u3002</li><li>\u5BF9\u4E8E\u7CFB\u7EDF\u51FA\u73B0\u7684\u9519\u8BEF\u4FE1\u606F\uFF0C\u4EE5IE\u9519\u8BEF\u7F16\u7801\u4FE1\u606F\u66FF\u6362\uFF0C\u5C4F\u853D\u7CFB\u7EDF\u672C\u8EAB\u7684\u51FA\u9519\u4FE1\u606F\u3002</li><li>\u53C2\u6570\u5316XPath\u67E5\u8BE2\uFF0C\u5C06\u9700\u8981\u6784\u5EFA\u7684XPath\u67E5\u8BE2\u8868\u8FBE\u5F0F\uFF0C\u4EE5\u53D8\u91CF\u7684\u5F62\u5F0F\u8868\u793A\uFF0C\u53D8\u91CF\u4E0D\u662F\u53EF\u4EE5\u6267\u884C\u7684\u811A\u672C\u3002</li><li>\u901A\u8FC7MD5\u3001SSL\u7B49\u52A0\u5BC6\u7B97\u6CD5\uFF0C\u5BF9\u4E8E\u6570\u636E\u654F\u611F\u4FE1\u606F\u548C\u5728\u6570\u636E\u4F20\u8F93\u8FC7\u7A0B\u4E2D\u52A0\u5BC6\uFF0C\u5373\u4F7F\u67D0\u4E9B\u975E\u6CD5\u7528\u6237\u901A\u8FC7\u975E\u6CD5\u624B\u6CD5\u83B7\u53D6\u6570\u636E\u5305\uFF0C\u770B\u5230\u7684\u4E5F\u662F\u52A0\u5BC6\u540E\u7684\u4FE1\u606F\u3002</li><li>\u4F7F\u7528\u6E90\u4EE3\u7801\u9759\u6001\u5206\u6790\u5DE5\u5177\uFF0C\u8FDB\u884C\u81EA\u52A8\u5316\u7684\u68C0\u6D4B\uFF0C\u53EF\u4EE5\u6709\u6548\u7684\u53D1\u73B0\u6E90\u4EE3\u7801\u4E2D\u7684 XPath \u6CE8\u5165\u95EE\u9898\u3002</li></ul><h2 id="_3-\u547D\u4EE4\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_3-\u547D\u4EE4\u6CE8\u5165" aria-hidden="true">#</a> 3. \u547D\u4EE4\u6CE8\u5165</h2><h3 id="_3-1-\u4EC0\u4E48\u662F\u547D\u4EE4\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4EC0\u4E48\u662F\u547D\u4EE4\u6CE8\u5165" aria-hidden="true">#</a> 3.1 \u4EC0\u4E48\u662F\u547D\u4EE4\u6CE8\u5165</h3><p>\u547D\u4EE4\u662F\u6307\u901A\u8FC7\u63D0\u4EA4\u6076\u610F\u6784\u9020\u7684\u53C2\u6570\u7834\u574F\u547D\u4EE4\u8BED\u53E5\u7ED3\u6784\uFF0C\u4ECE\u800C\u8FBE\u5230\u6267\u884C\u6076\u610F\u547D\u4EE4\u7684\u76EE\u7684\u3002</p><h3 id="_3-2-\u547D\u4EE4\u6CE8\u5165\u7684\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-2-\u547D\u4EE4\u6CE8\u5165\u7684\u573A\u666F" aria-hidden="true">#</a> 3.2 \u547D\u4EE4\u6CE8\u5165\u7684\u573A\u666F</h3><p>Java\u4E2D<code>System.Runtime.getRuntime().exec(cmd);</code>\u53EF\u4EE5\u5728\u76EE\u6807\u673A\u5668\u4E0A\u6267\u884C\u547D\u4EE4\uFF0C\u800C\u6784\u5EFA\u53C2\u6570\u7684\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u5F15\u53D1\u6CE8\u5165\u653B\u51FB\u3002</p><p>\u6BD4\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// \u6BD4\u5982\u4F60\u6784\u5EFA\u4E86\u5982\u4E0B\u7684command\u8BED\u53E5\uFF0C\u4F20\u53C2\u6570request.getParameter(&quot;test&quot;)\uFF0C\u5C06\u53EF\u80FD\u5305\u542B\xB7\u547D\u4EE4\u5206\u9694\u7B26\xB7\u4ECE\u800C\u5F15\u5165\u6CE8\u5165\u98CE\u9669\xB7   </span>
<span class="token class-name">String</span> cmd <span class="token operator">=</span> <span class="token string">&quot;xxxx xxx &quot;</span> <span class="token operator">+</span> request<span class="token punctuation">.</span><span class="token function">getParameter</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token operator">+</span> <span class="token string">&quot; xxx&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// \u6CE8\u610F: \u8BD5\u56FE\u5C06\u5982\u4E0B\u65B9\u6CD5\u62BD\u8C61\u4E3A\u4E00\u4E2A\u9759\u6001\u65B9\u6CD5\u65F6\uFF0C\u5B83\u6F5C\u85CF\u7740\u6CE8\u5165\u98CE\u9669\uFF1B\u5982\u679C\u4F60\u7528\u8FC7SonarCube\u626B\u63CF\u5DE5\u5177\uFF0C\u5982\u4E0B\u4EE3\u7801\u4F1A\u6709\u6CE8\u5165\u653B\u51FB\u7684\u63D0\u793A\u3002</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">runCmd</span><span class="token punctuation">(</span><span class="token class-name">String</span> command<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">Runtime</span> run <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span><span class="token punctuation">{</span>
        <span class="token class-name">Process</span> process <span class="token operator">=</span> run<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u5728\u5F53\u524D\u670D\u52A1\u5668\u4E0A\u6267\u884Ccommand\u811A\u672C</span>
        <span class="token class-name">InputStream</span> in <span class="token operator">=</span> process<span class="token punctuation">.</span><span class="token function">getInputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">While</span> <span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        process<span class="token punctuation">.</span><span class="token function">waitFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// ...\u5FFD\u7565close\u64CD\u4F5C\uFF0C\u53EA\u662F\u7ED9\u4F60\u4E2A\u4F8B\u5B50</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-\u5E38\u89C1\u6CE8\u5165\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5E38\u89C1\u6CE8\u5165\u65B9\u5F0F" aria-hidden="true">#</a> 3.3 \u5E38\u89C1\u6CE8\u5165\u65B9\u5F0F</h3><blockquote><p>\u4E0A\u8FF0command\u4E2D\u4F1A\u6709\u54EA\u4E9B\u5E38\u89C1\u7684\u6CE8\u5165\u65B9\u5F0F\u5462\uFF1F</p></blockquote><ul><li>\u201C\uFF1B\u201D\u5206\u5272</li><li>\u201C&amp;\u201D\uFF0C\u201C&amp;&amp;\u201D\uFF0C\u201C||\u201D \u5206\u5272</li><li>\u201C|\u201D \u7BA1\u9053\u7B26</li><li><code>\\r\\n %d0%a0</code> \u6362\u884C</li><li>\u53CD\u5F15\u53F7\u89E3\u6790</li><li><code>$()</code> \u66FF\u6362</li></ul><h3 id="_3-4-\u4E00\u822C\u5982\u4F55\u9632\u5FA1\u5462" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4E00\u822C\u5982\u4F55\u9632\u5FA1\u5462" aria-hidden="true">#</a> 3.4 \u4E00\u822C\u5982\u4F55\u9632\u5FA1\u5462</h3><blockquote><p>\u548C\u5176\u5B83\u6CE8\u5165\u9632\u5FA1\u672C\u8D28\u5927\u540C\u5C0F\u5F02</p></blockquote><ul><li>\u4E0D\u4F7F\u7528\u65F6\u7981\u7528\u76F8\u5E94\u51FD\u6570</li><li>\u5C3D\u91CF\u4E0D\u8981\u6267\u884C\u5916\u90E8\u7684\u5E94\u7528\u7A0B\u5E8F\u6216\u547D\u4EE4</li><li>\u505A\u8F93\u5165\u7684\u683C\u5F0F\u68C0\u67E5</li><li>\u8F6C\u4E49\u547D\u4EE4\u4E2D\u7684\u6240\u6709shell\u5143\u5B57\u7B26: shell\u5143\u5B57\u7B26\u5305\u62EC #&amp;;\`,|*?~&lt;&gt;^()[]{}$\\</li></ul><h2 id="_4-ldap\u6CE8\u5165" tabindex="-1"><a class="header-anchor" href="#_4-ldap\u6CE8\u5165" aria-hidden="true">#</a> 4. LDAP\u6CE8\u5165</h2><h3 id="_4-1-ldap\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_4-1-ldap\u7B80\u4ECB" aria-hidden="true">#</a> 4.1 LDAP\u7B80\u4ECB</h3><p>LDAP(Lightweight Directory Access Protocol):\u8F7B\u91CF\u7EA7\u76EE\u5F55\u8BBF\u95EE\u534F\u8BAE\uFF0C\u662F\u4E00\u79CD\u5728\u7EBF\u76EE\u5F55\u8BBF\u95EE\u534F\u8BAE\u3002LDAP\u4E3B\u8981\u7528\u4E8E\u76EE\u5F55\u4E2D\u8D44\u6E90\u7684\u641C\u7D22\u548C\u67E5\u8BE2\uFF0C\u662FX.500\u7684\u4E00\u79CD\u7B80\u4FBF\u7684\u5B9E\u73B0\u3002LDAP\u4E0D\u5B9A\u4E49\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF0C\u4F46\u4F1A\u5B9A\u4E49\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u53E6\u5916\uFF0CLDAP\u8FD8\u4F1A\u5B9A\u4E49LDAP\u6570\u636E\u5E93\u7684\u8BBF\u95EE\u6743\u9650\u53CA\u670D\u52A1\u7AEF\u6570\u636E\u7684\u683C\u5F0F\u548C\u5C5E\u6027\u3002LDAP\u6709\u4E09\u79CD\u57FA\u672C\u7684\u901A\u4FE1\u673A\u5236\uFF1A\u6CA1\u6709\u5904\u7406\u7684\u533F\u540D\u8BBF\u95EE\uFF1B\u57FA\u672C\u7684\u7528\u6237\u540D\u3001\u5BC6\u7801\u5F62\u5F0F\u7684\u8BA4\u8BC1\uFF1B\u4F7F\u7528SASL\u3001SSL\u7684\u5B89\u5168\u8BA4\u8BC1\u65B9\u5F0F\u3002LDAP\u548C\u5176\u4ED6\u4E00\u4E9B\u534F\u8BAE\u8D70\u7684\u662F\u540C\u4E00\u4E2A\u5957\u8DEF\uFF0C\u57FA\u4E8Etcp/ip\u534F\u8BAE\u901A\u4FE1\uFF0C\u6CE8\u91CD\u670D\u52A1\u7684\u53EF\u7528\u6027\u3001\u4FE1\u606F\u7684\u4FDD\u5BC6\u6027\u7B49\u7B49\uFF0C\u9664\u6B64\u4E4B\u5916\u8FD8\u8981\u56DE\u5230\u90A3\u4E2A\u6700\u539F\u59CB\u7684\u95EE\u9898\uFF1A\u4FE1\u4EFB\uFF0C\u5F53\u7136\u4FE1\u606F\u5B89\u5168\u7684\u672C\u8D28\u95EE\u9898\u5C31\u662F\u4FE1\u4EFB\u7684\u95EE\u9898\u3002\u90E8\u7F72\u4E86LDAP\u7684\u5E94\u7528\u4E0D\u4F1A\u76F4\u63A5\u8BBF\u95EE\uFF0C\u76EE\u5F55\u4E2D\u7684\u5185\u5BB9\uFF0C\u4E00\u822C\u901A\u8FC7\u51FD\u6570\u8C03\u7528\u6216\u8005API\uFF0C\u5E94\u7528\u53EF\u4EE5\u901A\u8FC7\u5B9A\u4E49\u7684C\u3001Java\u7684API\u8FDB\u884C\u8BBF\u95EE\uFF0CJava\u5E94\u7528\u7684\u8BBF\u95EE\u65B9\u5F0F\u4E3AJNDI(Java Naming and Directory Interface)\u3002</p><p>LDAP\u4EE5\u76EE\u5F55\u4FE1\u606F\u6811\u5F62\u5F0F\u5B58\u50A8\u4FE1\u606F\uFF0C\u5305\u542B\u5165\u53E3\u3001\u5BF9\u8C61\u3001\u5C5E\u6027\uFF0C\u5173\u7CFB\u56FE\u5982\u4E0B\uFF1A</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220705221531404.png" alt="image-20220705221531404"><p>\u5165\u53E3\u70B9\u548C\u5C5E\u6027\u4E4B\u95F4\u7684\u5173\u7CFB\u4E3A\uFF1A</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220705221548155.png" alt="image-20220705221548155" loading="lazy"></p><p>\u65E2\u7136LDAP\u7528\u4E8E\u641C\u7D22\u67E5\u8BE2\u670D\u52A1\uFF0C\u90A3\u5B83\u662F\u600E\u4E48\u641C\u7D22\u7684\u5462\uFF1F</p><ul><li><strong>search\u8BED\u6CD5</strong>\uFF1Aattribute operator value</li><li><strong>search filter options</strong>: ( &quot;&amp;&quot; or &quot;|&quot; (filter1) (filter2) (filter3) ...) (&quot;!&quot; (filter))</li></ul><p>\u4E3B\u8981\u6839\u636E\u5C5E\u6027\u548C\u503C\u8FDB\u884C\u641C\u7D22\uFF0C\u5C31\u5982\u6D4F\u89C8\u7F51\u9875\u65F6\u6211\u4EEC\u901A\u5E38\u5E76\u4E0D\u4F1A\u6D4F\u89C8\u67D0\u4E2A\u76EE\u5F55\uFF0C\u800C\u662F\u5176\u4E0B\u5B58\u5728\u7684\u67D0\u4E2A\u6587\u4EF6\u3002</p><ul><li><strong>LDAP\u7684URL\u5F62\u5F0F</strong>\u4E3A\uFF1A<code>ldap://&lt;host&gt;:&lt;port&gt;/&lt;path&gt;</code>\uFF0C<code>&lt;path&gt;:&lt;dn&gt;[?&lt;artribute&gt;[?&lt;scope&gt;?&lt;filter&gt;]]</code></li><li>\u4F8B\u5982\uFF1Aldap://austin.ibm.com/ou=Austin,o=IBM ldap:///ou=Austin,o=IBM??sub?(cn=Joe Q. Public)</li></ul><p>\u770B\u5F97\u51FA\u6765\u5728URL\u4E2D\u8FD9\u91CC\u4F7F\u7528\u9017\u53F7\u5206\u9694\u67E5\u8BE2\uFF0C\u800C\u6570\u636E\u5E93\u67E5\u8BE2\u5219\u4F7F\u7528&#39;&amp;&#39;\u53F7\uFF0C\u8FD9\u662FLDAP\u7279\u6709\u7684\uFF0C\u53E6\u5916\u8FD9\u91CCo\u8868\u793A\u7EC4\u7EC7(organization)\uFF0Cu\u8868\u793A\u5355\u5143(unit)\uFF0Ccn\u8868\u793Acountry name\u3002</p><h3 id="_4-2-ldap\u6CE8\u5165\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_4-2-ldap\u6CE8\u5165\u573A\u666F" aria-hidden="true">#</a> 4.2 LDAP\u6CE8\u5165\u573A\u666F</h3><p>LDAP\u6CE8\u5165\u653B\u51FB\u548CSQL\u6CE8\u5165\u653B\u51FB\u76F8\u4F3C\uFF0C\u56E0\u6B64\u63A5\u4E0B\u6765\u7684\u60F3\u6CD5\u662F\u5229\u7528\u7528\u6237\u5F15\u5165\u7684\u53C2\u6570\u751F\u6210LDAP\u67E5\u8BE2\u3002\u4E00\u4E2A\u5B89\u5168\u7684Web\u5E94\u7528\u5728\u6784\u9020\u548C\u5C06\u67E5\u8BE2\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u524D\u5E94\u8BE5\u51C0\u5316\u7528\u6237\u4F20\u5165\u7684\u53C2\u6570\u3002\u5728\u6709\u6F0F\u6D1E\u7684\u73AF\u5883\u4E2D\uFF0C\u8FD9\u4E9B\u53C2\u6570\u6CA1\u6709\u5F97\u5230\u5408\u9002\u7684\u8FC7\u6EE4\uFF0C\u56E0\u800C\u653B\u51FB\u8005\u53EF\u4EE5\u6CE8\u5165\u4EFB\u610F\u6076\u610F\u4EE3\u7801\u3002</p><ul><li><code>(attribute=value)</code>:\u5982\u679C\u8FC7\u6EE4\u5668\u7528\u4E8E\u6784\u9020\u67E5\u8BE2\u5355\u7F3A\u5C11\u903B\u8F91\u64CD\u4F5C\u7B26\uFF0C\u5982<code>value)(injected_filter</code>\u7684\u6CE8\u5165\u4F1A\u5BFC\u81F4\u4E24\u4E2A\u8FC7\u6EE4\u5668<code>(attribute=value)(injected_filter)</code>\u3002\u5728OpenLDAP\u5B9E\u65BD\u4E2D\uFF0C\u7B2C\u4E8C\u4E2A\u8FC7\u6EE4\u5668\u4F1A\u88AB\u5FFD\u7565\uFF0C\u53EA\u6709\u7B2C\u4E00\u4E2A\u4F1A\u88AB\u6267\u884C\u3002\u800C\u5728ADAM\u4E2D\uFF0C\u6709\u4E24\u4E2A\u8FC7\u6EE4\u5668\u7684\u67E5\u8BE2\u662F\u4E0D\u88AB\u5141\u8BB8\u7684\uFF0C\u56E0\u800C\u8FD9\u4E2A\u6CE8\u5165\u6BEB\u65E0\u7528\u5904\u3002</li><li><code>(|(attribute=value)(second_filter)) or (&amp;(attribute=value)(second_filter))</code>:\u5982\u679C\u7B2C\u4E00\u4E2A\u7528\u4E8E\u6784\u9020\u67E5\u8BE2\u7684\u8FC7\u6EE4\u5668\u6709\u903B\u8F91\u64CD\u4F5C\u7B26\uFF0C\u5F62\u5982<code>value)(injected_filter)</code>\u7684\u6CE8\u5165\u4F1A\u53D8\u6210\u5982\u4E0B\u8FC7\u6EE4\u5668\uFF1A<code>(&amp;(attribute=value)(injected_filter)) (second_filter)</code>\u3002\u867D\u7136\u8FC7\u6EE4\u5668\u8BED\u6CD5\u4E0A\u5E76\u4E0D\u6B63\u786E\uFF0COpenLDAP\u8FD8\u662F\u4F1A\u4ECE\u5DE6\u5230\u53F3\u8FDB\u884C\u5904\u7406\uFF0C\u5FFD\u7565\u7B2C\u4E00\u4E2A\u8FC7\u6EE4\u5668\u95ED\u5408\u540E\u7684\u4EFB\u4F55\u5B57\u7B26\u3002\u4E00\u4E9BLDAP\u5BA2\u6237\u7AEFWeb\u7EC4\u6210\u4F1A\u5FFD\u7565\u7B2C\u4E8C\u4E2A\u8FC7\u6EE4\u5668\uFF0C\u5C06ADAM\u548COpenLDAP\u53D1\u9001\u7ED9\u7B2C\u4E00\u4E2A\u5B8C\u6210\u7684\u8FC7\u6EE4\u5668\uFF0C\u56E0\u800C\u5B58\u5728\u6CE8\u5165\u3002</li></ul><p>\u4E00\u4E9B\u5E94\u7528\u6846\u67B6\u5728\u5C06\u8BF7\u6C42\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u4E4B\u524D\u4F1A\u68C0\u67E5\u8FC7\u6EE4\u5668\u662F\u5426\u6B63\u786E\uFF0C\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8FC7\u6EE4\u5668\u8BED\u4E49\u4E0A\u5FC5\u987B\u662F\u6B63\u786E\u7684\uFF0C\u5176\u6CE8\u5165\u5982\uFF1A<code>value)(injected_filter))(&amp;(1=0</code>\u3002\u8FD9\u4F1A\u5BFC\u81F4\u51FA\u73B0\u4E24\u4E2A\u4E0D\u540C\u7684\u8FC7\u6EE4\u5668\uFF0C\u7B2C\u4E8C\u4E2A\u4F1A\u88AB\u5FFD\u7565\uFF1A<code>(&amp;(attribute=value)(injected_filter))(&amp;(1=0)(second_filter))</code>\u3002</p><p>\u65E2\u7136\u7B2C\u4E8C\u4E2A\u8FC7\u6EE4\u5668\u4F1A\u88ABLDAP\u670D\u52A1\u5668\u5FFD\u7565\uFF0C\u6709\u4E9B\u90E8\u5206\u4FBF\u4E0D\u5141\u8BB8\u6709\u4E24\u4E2A\u8FC7\u6EE4\u5668\u7684\u67E5\u8BE2\u3002\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u6784\u5EFA\u4E00\u4E2A\u7279\u6B8A\u7684\u6CE8\u5165\u4EE5\u83B7\u5F97\u5355\u4E2A\u8FC7\u6EE4\u5668\u7684LDAP\u67E5\u8BE2\u3002<code>value)(injected_filter</code>\u8FD9\u6837\u7684\u6CE8\u5165\u4EA7\u751F\u7684\u7ED3\u679C\u662F\uFF1A<code>(&amp;(attribute=value)(injected_filter)(second_filter))</code>\u3002</p><p>\u6D4B\u8BD5\u4E00\u4E2A\u5E94\u7528\u662F\u5426\u5B58\u5728\u4EE3\u7801\u6CE8\u5165\u6F0F\u6D1E\u5178\u578B\u7684\u65B9\u6CD5\u662F\u5411\u670D\u52A1\u5668\u53D1\u9001\u4F1A\u751F\u6210\u4E00\u4E2A\u65E0\u6548\u8F93\u5165\u7684\u8BF7\u6C42\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u670D\u52A1\u5668\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u6D88\u606F\uFF0C\u653B\u51FB\u8005\u5C31\u80FD\u77E5\u9053\u670D\u52A1\u5668\u6267\u884C\u4E86\u4ED6\u7684\u67E5\u8BE2\uFF0C\u4ED6\u53EF\u4EE5\u5229\u7528\u4EE3\u7801\u6CE8\u5165\u6280\u672F\u3002\u56DE\u60F3\u4E00\u4E0B\u4E4B\u524D\u8BA8\u8BBA\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u6CE8\u5165\u73AF\u5883\u5206\u4E3A\u4E24\u79CD\uFF1AAND\u6CE8\u5165\u73AF\u5883\u548COR\u6CE8\u5165\u73AF\u5883\u3002</p><h3 id="_4-3-\u5B66\u4E60\u66F4\u591Aldap\u653B\u9632" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5B66\u4E60\u66F4\u591Aldap\u653B\u9632" aria-hidden="true">#</a> 4.3 \u5B66\u4E60\u66F4\u591ALDAP\u653B\u9632</h3>`,56),r=a("\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u4ECB\u7ECD\uFF0C\u5982\u9700\u66F4\u8BE6\u7EC6\u4E86\u89E3\uFF0C\u63A8\u8350\u4F60\u770B\u4E0B\u8FD9\u7BC7\u6587\u7AE0\uFF1A"),d={href:"https://www.cnblogs.com/r00tgrok/p/LDAP_INJECTION_AND_PREVENTION.html",target:"_blank",rel:"noopener noreferrer"},k=a("LDAP\u6CE8\u5165\u4E0E\u9632\u5FA1\u89E3\u6790 "),h=n("h2",{id:"_5-clrf\u6CE8\u5165",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_5-clrf\u6CE8\u5165","aria-hidden":"true"},"#"),a(" 5. CLRF\u6CE8\u5165")],-1),m={href:"https://blog.csdn.net/han_code/article/details/90235983",target:"_blank",rel:"noopener noreferrer"},b=a("https://blog.csdn.net/han_code/article/details/90235983"),v=n("h2",{id:"_6-host\u5934\u6CE8\u5165",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-host\u5934\u6CE8\u5165","aria-hidden":"true"},"#"),a(" 6. Host\u5934\u6CE8\u5165")],-1),_={href:"https://www.freebuf.com/articles/web/164817.html",target:"_blank",rel:"noopener noreferrer"},g=a("https://www.freebuf.com/articles/web/164817.html"),f={href:"https://www.cnblogs.com/z45-1/p/10746316.html",target:"_blank",rel:"noopener noreferrer"},x=a("https://www.cnblogs.com/z45-1/p/10746316.html"),L=n("h2",{id:"_7-email\u5934\u6CE8\u5165",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-email\u5934\u6CE8\u5165","aria-hidden":"true"},"#"),a(" 7. Email\u5934\u6CE8\u5165")],-1),P={href:"https://www.cnblogs.com/endust/p/11819476.html",target:"_blank",rel:"noopener noreferrer"},w=a("https://www.cnblogs.com/endust/p/11819476.html"),S=n("h2",{id:"_8-xxe",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_8-xxe","aria-hidden":"true"},"#"),a(" 8. XXE")],-1),q={href:"https://blog.spoock.com/2018/10/23/java-xxe/",target:"_blank",rel:"noopener noreferrer"},A=a("https://blog.spoock.com/2018/10/23/java-xxe/"),D=n("h2",{id:"\u53C2\u8003\u6587\u7AE0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u53C2\u8003\u6587\u7AE0","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u6587\u7AE0")],-1),y={href:"https://pdai.tech/md/develop/security/dev-security-x-injection.html",target:"_blank",rel:"noopener noreferrer"},j=n("strong",null,"\u5F00\u53D1\u5B89\u5168 - \u6CE8\u5165\u653B\u51FB\u8BE6\u89E3",-1);function z(X,Q){const s=l("ExternalLinkIcon");return o(),p("div",null,[u,n("p",null,[r,n("a",d,[k,t(s)])]),h,n("ul",null,[n("li",null,[n("a",m,[b,t(s)])])]),v,n("ul",null,[n("li",null,[n("a",_,[g,t(s)])]),n("li",null,[n("a",f,[x,t(s)])])]),L,n("ul",null,[n("li",null,[n("a",P,[w,t(s)])])]),S,n("p",null,[n("a",q,[A,t(s)])]),D,n("p",null,[n("a",y,[j,t(s)])])])}const R=e(i,[["render",z],["__file","dev-security-x-injection.html.vue"]]);export{R as default};
