import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as e,a as n,b as o,d as c,e as i,r as p}from"./app.52f5bdc7.js";const l={},d=c(`<h1 id="druid\u6E90\u7801\u5B66\u4E60-\u4E00-druiddatasource\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#druid\u6E90\u7801\u5B66\u4E60-\u4E00-druiddatasource\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> Druid\u6E90\u7801\u5B66\u4E60\uFF08\u4E00\uFF09-DruidDataSource\u6570\u636E\u7ED3\u6784</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>DruidDataSource\u662FDruidCP\u6700\u5173\u952E\u7684\u7C7B\u4E4B\u4E00\uFF0C\u627F\u8F7D\u4E86\u8FDE\u63A5\u6C60\u7684\u542F\u52A8\u3001\u5173\u95ED\u3001\u4EE5\u53CA\u8FDE\u63A5\u7684\u83B7\u53D6\u548C\u7BA1\u7406\u7B49\u529F\u80FD\u3002</p><h2 id="_2-druiddatasource\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_2-druiddatasource\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 2. DruidDataSource\u7684\u6570\u636E\u7ED3\u6784</h2><p>DruidDataSource \u5176\u5185\u90E8\u5173\u952E\u7684\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\u8868:</p><table><thead><tr><th>name</th><th>type</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>connections</td><td>volatile DruidConnectionHolder[]</td><td>pool\u7684\u5173\u952E\u6570\u7EC4\uFF0C\u5B58\u653E\u8FDE\u63A5\uFF0C\u5B9E\u9645\u4E0A\u662FDruidConnectionHolder\u7684\u6570\u7EC4\u3002Connection\u7531DruidConnectionHolder\u6301\u6709</td></tr><tr><td>evictConnections</td><td>DruidConnectionHolder[]</td><td>\u88AB\u9A71\u9010\u7684Connection\u7684pool,\u8C03\u7528\u6536\u7F29\u65B9\u6CD5shrink\u4E4B\u540E\uFF0C\u88AB\u6536\u7F29\u7684\u8FDE\u63A5\u90FD\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u6570\u7EC4\u3002</td></tr><tr><td>keepAliveConnections</td><td>DruidConnectionHolder[]</td><td>\u6536\u7F29\u65B9\u6CD5shrink\u4E2D\uFF0C\u6EE1\u8DB3keepalive\u72B6\u6001\u7684\u8FDE\u63A5\u90FD\u8FDB\u5165\u8FD9\u4E2A\u6570\u7EC4\u3002</td></tr><tr><td>autoFilters</td><td>static List</td><td>\u8FD9\u4E2Alist\u5B58\u5168\u90E8\u7684filter</td></tr><tr><td>enable</td><td>volatile boolean</td><td>\u9ED8\u8BA4\u503C\u4E3Atrue,\u6807\u8BC6\u8FDE\u63A5\u6C60\u662F\u5426\u53EF\u7528\uFF0C\u8C03\u7528close\u65B9\u6CD5\u8BBE\u7F6E\u8BE5\u503C\u4E3Afalse,\u5F53\u4E3Afalse\u7684\u65F6\u5019\uFF0C\u8FDE\u63A5\u7684error\u6B21\u6570\u589E\u52A01,get\u8FDE\u63A5\u6216\u8005\u5176\u4ED6\u64CD\u4F5C\u4F1A\u5931\u8D25\u3002</td></tr><tr><td>inited</td><td>volatile boolean</td><td>\u9ED8\u8BA4\u503C\u4E3Afalse,\u521D\u59CB\u5316\u5B8C\u6210\u7684\u6807\u8BC6\u3002</td></tr><tr><td>closing</td><td>volatile boolean</td><td>\u5173\u95ED\u8FC7\u7A0B\u4E2D\u7684\u72B6\u6001\u3002\u6B63\u5728close</td></tr></tbody></table><p><strong>\u8FDE\u63A5\u6C60\u6700\u5173\u952E\u7684\u6570\u636E\u7ED3\u6784\u662F\u5185\u90E8\u6301\u6709DruidConnectionHolder\u7684\u6570\u7EC4\uFF0Cconnections\u3002</strong></p><h2 id="_3-druidconnectionholder\u7684\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-druidconnectionholder\u7684\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 3. DruidConnectionHolder\u7684\u6570\u636E\u7ED3\u6784</h2><table><thead><tr><th>name</th><th>type</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>dataSource</td><td>final DruidAbstractDataSource</td><td>\u6307\u5411DataSource\u7684\u6307\u9488\u3002</td></tr><tr><td>conn</td><td>final Connection</td><td>\u6307\u5411\u771F\u6B63\u7684\u6570\u636E\u5E93\u8FDE\u63A5\uFF0C\u7531\u6570\u636E\u5E93\u9A71\u52A8\u5B9E\u73B0\u3002</td></tr><tr><td>connectionId</td><td>final long</td><td>\u8FDE\u63A5\u7F16\u53F7\u3002</td></tr><tr><td>connectionEventListeners</td><td>final List</td><td>\u8FDE\u63A5\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</td></tr><tr><td>statementEventListeners</td><td>final List</td><td>statement\u4E8B\u4EF6\u76D1\u542C\u5668\u3002</td></tr><tr><td>statementPool</td><td>PreparedStatementPool</td><td>\u5176\u5185\u90E8\u662F\u4E00\u4E2ALRUCache\uFF0C\u5BF9Statement\u505A\u7F13\u5B58\u3002</td></tr><tr><td>statementTrace</td><td>final List</td><td>\u4E00\u4E2A\u5BF9Statement\u8FDB\u884C\u8FFD\u8E2A\u7684list,\u8FD9\u4E2AstatementTrace\u7684\u4F5C\u7528\u540E\u9762\u9700\u8981\u8BE6\u7EC6\u770B\u770B\u3002</td></tr></tbody></table><p>DruidConnectionHolder\u662F\u8FDE\u63A5\u6C60\u4E2D\u7269\u7406\u8FDE\u63A5\u7684\u8F7D\u4F53\uFF0C\u5728DruidDataSource\u4E2D\uFF0C\u83B7\u53D6\u8FDE\u63A5\u7684getConnection\u65B9\u6CD5\uFF0C\u62FF\u5230\u7684\u662FDruidPooledConnection\u3002</p><h2 id="_4-\u83B7\u53D6\u8FDE\u63A5-getconnection" tabindex="-1"><a class="header-anchor" href="#_4-\u83B7\u53D6\u8FDE\u63A5-getconnection" aria-hidden="true">#</a> 4. \u83B7\u53D6\u8FDE\u63A5 getConnection</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">getConnection</span><span class="token punctuation">(</span>maxWait<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span> <span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token keyword">long</span> maxWaitMillis<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6267\u884C\u521D\u59CB\u5316</span>
        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5982\u679Cfilter\u5B58\u5728 \u5219\u6267\u884Cfilter,\u901A\u8FC7filter\u7684\u4EE3\u7406\u7C7B\u6765\u5F97\u5230\u8FDE\u63A5\u3002</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>filters<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//filter\u7684chain</span>
            <span class="token class-name">FilterChainImpl</span> filterChain <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterChainImpl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> filterChain<span class="token punctuation">.</span><span class="token function">dataSource_connect</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//\u5982\u679Cfilter\u4E0D\u5B58\u5728\uFF0C\u5219\u76F4\u63A5\u83B7\u53D6\u8FDE\u63A5\u3002</span>
            <span class="token keyword">return</span> <span class="token function">getConnectionDirect</span><span class="token punctuation">(</span>maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6700\u7EC8\u5F97\u5230connection\u7684\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>poolableConnection <span class="token operator">=</span> <span class="token function">getConnectionInternal</span><span class="token punctuation">(</span>maxWaitMillis<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\uFF0C\u4E5F\u662F\u6839\u636EDruidConnectionHolder\u4EA7\u751F\u8FDE\u63A5\u6C60\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token class-name">DruidPooledConnection</span> poolalbeConnection <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DruidPooledConnection</span><span class="token punctuation">(</span>holder<span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token keyword">return</span> poolalbeConnection<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B\u8FD9\u4E2A\u6784\u9020\u51FD\u6570\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token class-name">DruidPooledConnection</span><span class="token punctuation">(</span><span class="token class-name">DruidConnectionHolder</span> holder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>holder<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>conn <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>holder <span class="token operator">=</span> holder<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>lock <span class="token operator">=</span> holder<span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
        dupCloseLogEnable <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isDupCloseLogEnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ownerThread <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        connectedTimeMillis <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u9645\u4E0ADruidPooledConnection\u5185\u90E8\u6301\u6709\u4E86\u4E00\u4E2ADruidConnectionHolder\u3002 DruidPooledConnection\u7684\u6570\u636E\u7ED3\u6784\u5982\u4E0B\u8868\uFF1A</p><table><thead><tr><th>name</th><th>type</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>conn</td><td>Connection</td><td>\u6307\u5411\u771F\u5B9E\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u3002</td></tr><tr><td>holder</td><td>volatile DruidConnectionHolder</td><td>\u6307\u5411DruidConnectionHolder\u3002</td></tr><tr><td>transactionInfo</td><td>TransactionInfo</td><td>\u4E8B\u52A1\u76F8\u5173\u7684\u4FE1\u606F</td></tr></tbody></table><h2 id="_5-\u7C7B\u5173\u7CFB\u56FE" tabindex="-1"><a class="header-anchor" href="#_5-\u7C7B\u5173\u7CFB\u56FE" aria-hidden="true">#</a> 5. \u7C7B\u5173\u7CFB\u56FE</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220517224826098.png" alt="image-20220517224826098" loading="lazy"></p><p>DruidConnectionHolder\u4E0EDruidPooledConnection\uFF0C\u5B9E\u9645\u4E0A\u662F\u5BF9\u8FDE\u63A5\u8FDB\u884C\u4E86\u5206\u5C42\u3002\u5C06\u9891\u7E41\u53D8\u66F4\u7684\u5185\u5BB9\u62BD\u8C61\u5230\u4E86DruidConnectionHolder\u7C7B\u3002 \u800CDruidPooledConnection\u5219\u5B58\u653E\u4E86Statement\u7684\u7684\u7F13\u5B58pool\u3002</p><h2 id="_6-\u76F8\u5173\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-\u76F8\u5173\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> 6. \u76F8\u5173\u77E5\u8BC6\u70B9</h2><h3 id="_6-1-volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-volatile" aria-hidden="true">#</a> 6.1 volatile</h3><p><code>volatile</code> \u5728druid \u4E2D\u4E5F\u975E\u5E38\u5E38\u7528</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token comment">// store</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token class-name">DruidConnectionHolder</span><span class="token punctuation">[</span><span class="token punctuation">]</span> connections<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span>                 closing                   <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">boolean</span>                 closed                    <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-1-1-volatile-\u7B80\u4ECB\u4E0E\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_6-1-1-volatile-\u7B80\u4ECB\u4E0E\u4F5C\u7528" aria-hidden="true">#</a> 6.1.1 <code>volatile</code> \u7B80\u4ECB\u4E0E\u4F5C\u7528</h4><p><code>volatile</code>\u901A\u5E38\u88AB\u6BD4\u55BB\u6210&quot;\u8F7B\u91CF\u7EA7\u7684<code>synchronized</code>\uFF0C<code>synchronized</code>\u53EF\u4EE5\u4FDD\u8BC1\u539F\u5B50\u6027\u3001\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027\u3002\u800C<code>volatile</code>\u5374\u53EA\u80FD\u4FDD\u8BC1\u6709\u5E8F\u6027\u548C\u53EF\u89C1\u6027\uFF08\u4E0D\u4FDD\u8BC1\u539F\u5B50\u6027\uFF09\u3002</p><ul><li><p>\u4FDD\u8BC1\u4E86\u4E0D\u540C\u7EBF\u7A0B\u5BF9\u8FD9\u4E2A\u53D8\u91CF\u8FDB\u884C\u64CD\u4F5C\u65F6\u7684\u53EF\u89C1\u6027\uFF0C\u5373\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\u4E86\u67D0\u4E2A\u53D8\u91CF\u7684\u503C\uFF0C\u8FD9\u65B0\u503C\u5BF9\u5176\u4ED6\u7EBF\u7A0B\u6765\u8BF4\u662F\u7ACB\u5373\u53EF\u89C1\u7684\u3002</p></li><li><p>\u7981\u6B62\u8FDB\u884C\u6307\u4EE4\u91CD\u6392\u5E8F\u3002</p></li></ul><h4 id="_6-1-2-\u4EC0\u4E48\u573A\u666F\u4E0B\u4F7F\u7528volatile" tabindex="-1"><a class="header-anchor" href="#_6-1-2-\u4EC0\u4E48\u573A\u666F\u4E0B\u4F7F\u7528volatile" aria-hidden="true">#</a> 6.1.2 \u4EC0\u4E48\u573A\u666F\u4E0B\u4F7F\u7528<code>volatile</code></h4><p>\u5728\u4EE5\u4E0B\u4E24\u4E2A\u573A\u666F\u4E2D\u53EF\u4EE5\u4F7F\u7528<code>volatile</code>\u6765\u4EE3\u66FF<code>synchronized</code>\uFF1A</p><blockquote><p>1\u3001\u8FD0\u7B97\u7ED3\u679C\u5E76\u4E0D\u4F9D\u8D56\u53D8\u91CF\u7684\u5F53\u524D\u503C\uFF0C\u6216\u8005\u80FD\u591F\u786E\u4FDD\u53EA\u6709\u5355\u4E00\u7684\u7EBF\u7A0B\u4F1A\u4FEE\u6539\u53D8\u91CF\u7684\u503C\u3002</p><p>2\u3001\u53D8\u91CF\u4E0D\u9700\u8981\u4E0E\u5176\u4ED6\u72B6\u6001\u53D8\u91CF\u5171\u540C\u53C2\u4E0E\u4E0D\u53D8\u7EA6\u675F\u3002</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,34),r={href:"https://blog.csdn.net/dhaibo1986/article/details/121215459?spm=1001.2014.3001.5501",target:"_blank",rel:"noopener noreferrer"},u=i("Druid\u6E90\u7801\u9605\u8BFB1-DruidDataSource\u6570\u636E\u7ED3\u6784");function k(v,h){const a=p("ExternalLinkIcon");return t(),e("div",null,[d,n("p",null,[n("a",r,[u,o(a)])])])}const f=s(l,[["render",k],["__file","dbcp-y-druid-source-data-structure.html.vue"]]);export{f as default};
