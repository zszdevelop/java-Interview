import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as r,a,b as n,e,d as o,r as t}from"./app.224ba93c.js";const c={},d=a("h1",{id:"flyway-commandline\u4F7F\u7528",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#flyway-commandline\u4F7F\u7528","aria-hidden":"true"},"#"),e(" Flyway-commandline\u4F7F\u7528")],-1),p=a("h2",{id:"_1-flyway\u4E0B\u8F7D",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_1-flyway\u4E0B\u8F7D","aria-hidden":"true"},"#"),e(" 1. flyway\u4E0B\u8F7D")],-1),g={href:"https://repo1.maven.org/maven2/org/flywaydb/",target:"_blank",rel:"noopener noreferrer"},m=e("https://repo1.maven.org/maven2/org/flywaydb/"),h=o(`<p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011213319190.png" alt="image-20211011213319190" loading="lazy"></p><ul><li>conf \uFF1A\u5B58\u653Eflyway.conf\u914D\u7F6E\u6587\u4EF6\uFF0C\u901A\u8FC7jdbc\u65B9\u5F0F\u914D\u7F6E\u6570\u636E\u5E93\u8FDE\u63A5</li><li>drivers\uFF1A\u5B58\u653E\u6570\u636E\u5E93jdbc\u9A71\u52A8</li><li>sql\uFF1A\u5B58\u653E\u6570\u636E\u5E93\u5143\u6570\u636Esql\u811A\u672C</li></ul><h2 id="_2-\u914D\u7F6Econf" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6Econf" aria-hidden="true">#</a> 2. \u914D\u7F6Econf</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u6570\u636E\u5E93url\u5730\u5740</span>
<span class="token assign-left variable">flyway.url</span><span class="token operator">=</span>jdbc:mysql://192.168.0.1:3306/flywaytest?useUnicode<span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">characterEncoding</span><span class="token operator">=</span>utf8<span class="token operator">&amp;</span><span class="token assign-left variable">zeroDateTimeBehavior</span><span class="token operator">=</span>convertToNull<span class="token operator">&amp;</span><span class="token assign-left variable">useSSL</span><span class="token operator">=</span>true<span class="token operator">&amp;</span><span class="token assign-left variable">serverTimezone</span><span class="token operator">=</span>GMT%2B8
<span class="token comment"># \u6570\u636E\u5E93\u9A71\u52A8</span>
<span class="token assign-left variable">flyway.driver</span><span class="token operator">=</span>com.mysql.jdbc.Driver
<span class="token comment">#\u6570\u636E\u5E93\u7528\u6237\u540D</span>
<span class="token assign-left variable">flyway.user</span><span class="token operator">=</span>root
<span class="token comment">#\u6570\u636E\u5E93\u5BC6\u7801</span>
<span class="token assign-left variable">flyway.password</span><span class="token operator">=</span>youpassword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u65B0\u5EFA\u521D\u59CB\u5316sql" tabindex="-1"><a class="header-anchor" href="#_3-\u65B0\u5EFA\u521D\u59CB\u5316sql" aria-hidden="true">#</a> 3. \u65B0\u5EFA\u521D\u59CB\u5316sql</h2><p>V1001__Create_person_table.sql</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> PERSON <span class="token punctuation">(</span>
    ID <span class="token keyword">int</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>
    NAME <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">null</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u521D\u59CB\u5316\u7248\u672C\u63A7\u5236\u8868" tabindex="-1"><a class="header-anchor" href="#_4-\u521D\u59CB\u5316\u7248\u672C\u63A7\u5236\u8868" aria-hidden="true">#</a> 4. \u521D\u59CB\u5316\u7248\u672C\u63A7\u5236\u8868</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./flyway migrate <span class="token parameter variable">-baselineOnMigrate</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211011214740961.png" alt="image-20211011214740961" loading="lazy"></p><h2 id="_5-flyway-\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-flyway-\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 5. Flyway \u5E38\u7528\u547D\u4EE4</h2><h3 id="_5-1-migrate\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-1-migrate\u547D\u4EE4" aria-hidden="true">#</a> 5.1 Migrate\u547D\u4EE4</h3><p>\u6267\u884Csql\u6587\u4EF6\u5939\u4E2D\u672A\u6267\u884C\u7684sql\uFF0C\u5C06sql\u7248\u672C\u66F4\u5230\u6700\u65B0\u3002\u5982\u679CFlyway\u4E0D\u5B58\u5728\uFF0C\u5B83\u5C06\u81EA\u52A8\u521B\u5EFA\u67B6\u6784\u5386\u53F2\u8BB0\u5F55\u8868\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026152909198.png" alt="image-20211026152909198" loading="lazy"></p><h4 id="_5-1-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-1-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.1.1 \u4F7F\u7528</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flyway  migrate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026154955580.png" alt="image-20211026154955580" loading="lazy"></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026154919444.png" alt="image-20211026154919444" loading="lazy"></p><h3 id="_5-2-clean-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-2-clean-\u547D\u4EE4" aria-hidden="true">#</a> 5.2 clean \u547D\u4EE4</h3><p>\u5220\u9664\u5DF2\u914D\u7F6E\u6A21\u5F0F\u4E2D\u7684\u6240\u6709\u5BF9\u8C61\uFF08\u8868\uFF0C\u89C6\u56FE\uFF0C\u8FC7\u7A0B\uFF0C\u89E6\u53D1\u5668\u7B49\uFF09\u3002 \u67B6\u6784\u5C06\u6309\u7167<code>schemas</code>\u5C5E\u6027\u6307\u5B9A\u7684\u987A\u5E8F\u8FDB\u884C\u6E05\u7406\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026153049436.png" alt="image-20211026153049436" loading="lazy"></p><h4 id="_5-2-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-2-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.2.1 \u4F7F\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flyway  clean
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026155035705.png" alt="image-20211026155035705" loading="lazy"></p><p>\u8868\u5DF2\u7ECF\u88AB\u6E05\u7A7A\u4E86</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026155129127.png" alt="image-20211026155129127" loading="lazy"></p><h3 id="_5-3-info\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-3-info\u547D\u4EE4" aria-hidden="true">#</a> 5.3 info\u547D\u4EE4</h3><p>\u6253\u5370\u6709\u5173\u6240\u6709\u8FC1\u79FB\u7684\u8BE6\u7EC6\u4FE1\u606F\u548C\u72B6\u6001\u4FE1\u606F\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026153221574.png" alt="image-20211026153221574" loading="lazy"></p><h4 id="_5-3-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-3-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.3.1 \u4F7F\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flyway  info
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026155748244.png" alt="image-20211026155748244" loading="lazy"></p><p>\u76F8\u6BD4\u6570\u636E\u5E93\u8FD9\u5F20\u8868</p><ul><li>\u6570\u636E\u5217\u4F1A\u66F4\u5C11\u4E00\u4E9B\u3002\u6BD4\u5982\u6267\u884C\u8005\u3001\u6267\u884C\u65F6\u95F4</li><li>\u4F46\u662F\u8FD9\u91CC\u4F1A\u51FA\u73B0\u5F85\u6267\u884C\u7684</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026155329057.png" alt="image-20211026155329057" loading="lazy"></p><h3 id="_5-4-validate-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-4-validate-\u547D\u4EE4" aria-hidden="true">#</a> 5.4 validate \u547D\u4EE4</h3><p>\u9488\u5BF9\u5DF2\u89E3\u51B3\u7684\u8FC1\u79FB\uFF08\u5728\u6587\u4EF6\u7CFB\u7EDF\u6216\u7C7B\u8DEF\u5F84\u4E0A\uFF09\u9A8C\u8BC1\u5DF2\u5E94\u7528\u7684\u8FC1\u79FB\uFF0C\u4EE5\u68C0\u6D4B\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u51C6\u786E\u521B\u5EFA\u6A21\u5F0F\u7684\u610F\u5916\u66F4\u6539\u3002</p><p>\u5982\u679C\u9A8C\u8BC1\u5931\u8D25</p><ul><li>\u53D1\u73B0\u8FC1\u79FB\u540D\u79F0\uFF0C\u7C7B\u578B\u6216\u6821\u9A8C\u548C\u65B9\u9762\u7684\u5DEE\u5F02</li><li>\u5DF2\u5E94\u7528\u4E0D\u518D\u5728\u672C\u5730\u89E3\u6790\u7684\u7248\u672C</li><li>\u5DF2\u89E3\u51B3\u5C1A\u672A\u5E94\u7528\u7684\u7248\u672C</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026153524052.png" alt="image-20211026153524052" loading="lazy"></p><h4 id="_5-4-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-4-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.4.1 \u4F7F\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flyway  validate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026160024340.png" alt="image-20211026160024340" loading="lazy"></p><p>\u539F\u6709\u7684\u811A\u672C\u5982\u679C\u53D8\u5316\u4E86\uFF0C\u7528\u8FD9\u4E2A\u5C31\u53EF\u4EE5\u6821\u9A8C\u662F\u54EA\u4E2A\u811A\u672C</p><p>\u6539\u56DE\u539F\u6765\u7684\u5C31\u6CA1\u6709\u95EE\u9898\u4E86</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026160110913.png" alt="image-20211026160110913" loading="lazy"></p><h3 id="_5-5-baseline-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-5-baseline-\u547D\u4EE4" aria-hidden="true">#</a> 5.5 baseline \u547D\u4EE4</h3><p>\u4E3A\u73B0\u6709\u6570\u636E\u5E93\u63D0\u4F9B\u57FA\u51C6\uFF0C\u4E0D\u5305\u62EC\u76F4\u5230\u5305\u62EC\u7684\u6240\u6709\u8FC1\u79FB<code>baselineVersion</code>\u3002</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026153926959.png" alt="image-20211026153926959" loading="lazy"></p><h4 id="_5-5-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-5-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.5.1 \u4F7F\u7528</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>flyway  baseline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026160250111.png" alt="image-20211026160250111" loading="lazy"></p><p>\u5982\u679C\u6570\u636E\u5E93\u4E2D\u6709\u6570\u636E\u4F1A\u62A5\u9519\uFF0C\u9700\u8981clean\u6E05\u7A7A\u6570\u636E\u540E\uFF0C\u5728\u6267\u884C</p><h3 id="_5-6-repair-\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_5-6-repair-\u547D\u4EE4" aria-hidden="true">#</a> 5.6 repair \u547D\u4EE4</h3><p>\u4FEE\u590DFlyway\u6A21\u5F0F\u5386\u53F2\u8BB0\u5F55\u8868\u3002\u8FD9\u5C06\u6267\u884C\u4EE5\u4E0B\u64CD\u4F5C\uFF1A</p><ul><li>\u5728\u6CA1\u6709DDL\u4E8B\u52A1\u7684\u6570\u636E\u5E93\u4E0A\u5220\u9664\u6240\u6709\u5931\u8D25\u7684\u8FC1\u79FB \uFF08\u4ECD\u7136\u5FC5\u987B\u624B\u52A8\u6E05\u7406\u7559\u4E0B\u7684\u7528\u6237\u5BF9\u8C61\uFF09</li><li>\u5C06\u53EF\u7528\u8FC1\u79FB\u7684\u6821\u9A8C\u548C\uFF0C\u63CF\u8FF0\u548C\u7C7B\u578B\u4E0E\u53EF\u7528\u8FC1\u79FB\u91CD\u65B0\u5BF9\u9F50</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026154058239.png" alt="image-20211026154058239" loading="lazy"></p><h4 id="_5-6-1-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_5-6-1-\u4F7F\u7528" aria-hidden="true">#</a> 5.6.1 \u4F7F\u7528</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>flyway repair
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/image-20211026160918822.png" alt="image-20211026160918822" loading="lazy"></p><p>\u5BF9\u6709\u62A5\u9519\u7684\u8BED\u53E5\u6267\u884C\u540E\u4F1A\u56DE\u6EDA\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,62),b={href:"https://blog.csdn.net/u012045045/article/details/106312789",target:"_blank",rel:"noopener noreferrer"},u=e("Flyway\u81EA\u5B66\u4E4B\u8DEF-03\uFF08\u51E0\u4E2A\u53EF\u7528\u547D\u4EE4\u884C\u64CD\u4F5CFlyway\uFF09");function y(v,z){const s=t("ExternalLinkIcon");return l(),r("div",null,[d,p,a("p",null,[a("a",g,[m,n(s)])]),h,a("p",null,[a("a",b,[u,n(s)])])])}const k=i(c,[["render",y],["__file","flyway-x-commandline.html.vue"]]);export{k as default};
