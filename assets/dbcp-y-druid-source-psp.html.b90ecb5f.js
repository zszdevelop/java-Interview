import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as t,a as n,b as p,d as o,e as c,r as l}from"./app.feaa9477.js";const i={},r=o(`<h1 id="druid\u6E90\u7801\u5B66\u4E60-\u516D-preparedstatementpool\u6E90\u7801\u53CA\u4F7F\u7528\u573A\u666F\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#druid\u6E90\u7801\u5B66\u4E60-\u516D-preparedstatementpool\u6E90\u7801\u53CA\u4F7F\u7528\u573A\u666F\u5206\u6790" aria-hidden="true">#</a> Druid\u6E90\u7801\u5B66\u4E60\uFF08\u516D\uFF09-PreparedStatementPool\u6E90\u7801\u53CA\u4F7F\u7528\u573A\u666F\u5206\u6790</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u5728\u9605\u8BFBDruidDataSource\u6E90\u7801\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53D1\u73B0DruidConnectionHolder\u6709\u4E2A\u7279\u522B\u7684\u5C5E\u6027</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PreparedStatementPool statementPool\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6839\u636E\u7ECF\u9A8C\u53EF\u77E5\uFF0C\u8FD9\u662FDruidPreparedStatement\u8FDB\u884C\u7F13\u5B58\u7684cache\u3002\u6211\u4EEC\u5728\u4F7F\u7528PreparedStatement\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u7531\u4E8EPreparedStatement\u5BF9sql\u8BED\u53E5\u7684\u89E3\u6790\u548C\u53C2\u6570\u7684\u6CE8\u5165\u662F\u5206\u5F00\u7684\uFF0C \u56E0\u6B64\uFF0C\u52A0\u5165cache\u4E4B\u540E\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u4E2A\u8FDE\u63A5\u4E0A\uFF0C\u5BF9\u76F8\u540Csql,\u4E0D\u540C\u53C2\u6570\u7684\u8BF7\u6C42\u8FDB\u884C\u590D\u7528\u3002</p><h2 id="_2-\u5F00\u542F\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_2-\u5F00\u542F\u53C2\u6570" aria-hidden="true">#</a> 2. \u5F00\u542F\u53C2\u6570</h2><p>\u5982\u679C\u8981\u4F7F\u7528psCache\uFF0C\u90A3\u4E48\u9700\u8981\u914D\u7F6Edruid.maxPoolPreparedStatementPerConnectionSize\u5927\u4E8E0\u3002 \u5728DruidDataSource\u6E90\u7801\u7684configFromPropety\u65B9\u6CD5\u4E2D\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> property <span class="token operator">=</span> properties<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token string">&quot;druid.maxPoolPreparedStatementPerConnectionSize&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>property <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> property<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//set \u914D\u7F6E\u7684\u53C2\u6570</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setMaxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">NumberFormatException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token constant">LOG</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;illegal property &#39;druid.maxPoolPreparedStatementPerConnectionSize&#39;&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u901A\u8FC7setMaxPoolPreparedStatementPerConnectionSize\u65B9\u6CD5\uFF0C\u5F53\u914D\u7F6E\u7684\u53C2\u6570\u5927\u4E8E0\u7684\u65F6\u5019\uFF0C\u4FEE\u6539poolPreparedStatements\u4E3Atrue\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setMaxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxPoolPreparedStatementPerConnectionSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//maxPoolPreparedStatementPerConnectionSize \u5927\u4E8E0\uFF0C\u5219\u8BBE\u7F6EpoolPreparedStatements\u4E3Atrue</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>maxPoolPreparedStatementPerConnectionSize <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>poolPreparedStatements <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>poolPreparedStatements <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>maxPoolPreparedStatementPerConnectionSize <span class="token operator">=</span> maxPoolPreparedStatementPerConnectionSize<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u901A\u8FC7\u5224\u65AD\u8FD9\u4E2A\u53D8\u91CF\u7684\u72B6\u6001\u6765\u786E\u5B9A\u662F\u5426\u521B\u5EFA\u7F13\u5B58\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isPoolPreparedStatements</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> poolPreparedStatements<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-cache\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#_3-cache\u521B\u5EFA" aria-hidden="true">#</a> 3. cache\u521B\u5EFA</h2><p>\u5728\u5F00\u542F\u53C2\u6570\u6253\u5F00\u4E4B\u540E\uFF0C\u4F7F\u7528prepareStatement\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u521B\u5EFAcache\u3002 \u5728DruidPooledConnection\u7684prepareStatement\u65B9\u6CD5\u4E2D\u6709\u5982\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">boolean</span> poolPreparedStatements <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">isPoolPreparedStatements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//\u5982\u679C\u5F00\u542F\u4E86psCache</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>poolPreparedStatements<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    stmtHolder <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getStatementPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u800CgetStatementPool\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">PreparedStatementPool</span> <span class="token function">getStatementPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>statementPool <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        statementPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PreparedStatementPool</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> statementPool<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8C03\u7528getStatementPool\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5982\u679C\u5F00\u542F\u4E86statementPool\uFF0C\u6B64\u65F6\u5C31\u4F1A\u5BF9\u8FD9\u4E2Acache\u8FDB\u884C\u521D\u59CB\u5316\u3002 \u521D\u59CB\u5316\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token class-name">PreparedStatementPool</span><span class="token punctuation">(</span><span class="token class-name">DruidConnectionHolder</span> holder<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dataSource <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> initCapacity <span class="token operator">=</span> holder<span class="token punctuation">.</span><span class="token function">getDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getMaxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initCapacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            initCapacity <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span>initCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u53EF\u4EE5\u53D1\u73B0\uFF0CmaxPoolPreparedStatementPerConnectionSize\u7684\u914D\u7F6E\u5C31\u662FLRUCache\u521D\u59CB\u7684initCapacity\u3002 \u5982\u679C\u8BE5\u53C2\u6570\u4E0D\u914D\u7F6E\uFF0C\u9ED8\u8BA4\u7684\u503C\u4E3A10:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected volatile int  maxPoolPreparedStatementPerConnectionSize = 10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5982\u679C\u4E0D\u914D\u7F6Edruid.maxPoolPreparedStatementPerConnectionSize\uFF0C\u90A3\u4E48\u7CFB\u7EDF\u5C06\u9ED8\u8BA4\u5F00\u542FpsCache\u3002\u9ED8\u8BA4\u7684\u957F\u5EA6\u4E3A10\u3002</p><h2 id="_4-pscache\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_4-pscache\u7ED3\u6784" aria-hidden="true">#</a> 4. psCache\u7ED3\u6784</h2><p>psCache\u7684\u6784\u6210\u975E\u5E38\u7B80\u5355\uFF0C\u5176\u5185\u90E8\u5C31\u4E00\u4E2ALRUCache\u7684map\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PreparedStatementPool</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">Log</span> <span class="token constant">LOG</span> <span class="token operator">=</span> <span class="token class-name">LogFactory</span><span class="token punctuation">.</span><span class="token function">getLog</span><span class="token punctuation">(</span><span class="token class-name">PreparedStatementPool</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//cache\u7ED3\u6784</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">LRUCache</span> map<span class="token punctuation">;</span>
	<span class="token comment">//\u6307\u5411dataSource\u7684\u6307\u9488</span>
	<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DruidAbstractDataSource</span> dataSource<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LRUCache\u7684\u7ED3\u6784\uFF1A LRUCache\u672C\u8D28\u4E0A\u662F\u4E00\u4E2ALinkedHashMap\uFF0C\u5B66\u4E60\u8FC7LinkedHashMap\u6E90\u7801\u5C31\u4F1A\u77E5\u9053\uFF0C\u5B9E\u9645\u4E0A\u8FD9\u662F\u4E00\u4E2A\u975E\u5E38\u9002\u5408LRU\u7F13\u5B58\u7684\u6570\u636E\u7ED3\u6784\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LRUCache</span> <span class="token keyword">extends</span> <span class="token class-name">LinkedHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PreparedStatementKey</span><span class="token punctuation">,</span> <span class="token class-name">PreparedStatementHolder</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">LRUCache</span><span class="token punctuation">(</span><span class="token keyword">int</span> maxSize<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>maxSize<span class="token punctuation">,</span> <span class="token number">0.75f</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u91CD\u5199\u4E86removeEldestEntry\u65B9\u6CD5</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">removeEldestEntry</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">PreparedStatementKey</span><span class="token punctuation">,</span> <span class="token class-name">PreparedStatementHolder</span><span class="token punctuation">&gt;</span></span> eldest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u786E\u8BA4remove\u72B6\u6001</span>
        <span class="token keyword">boolean</span> remove <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> dataSource<span class="token punctuation">.</span><span class="token function">getMaxPoolPreparedStatementPerConnectionSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5173\u95EDstatement</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>remove<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">closeRemovedStatement</span><span class="token punctuation">(</span>eldest<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> remove<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u5199removeEldestEntry\u65B9\u6CD5\u7684\u76EE\u7684\u662F\u5728LinkedHashMap\u4E2D\u8C03\u7528remove\u79FB\u9664Entry\u7684\u65F6\u5019\uFF0C\u5BF9\u7F13\u5B58\u7684statement\u8FDB\u884C\u5173\u95ED\u3002\u8FD9\u6837\u5C31\u80FD\u5B8C\u6210\u5BF9statement\u7684\u56DE\u6536\u3002 \u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5728\u4F7F\u7528LRUCache\u7684\u65F6\u5019\uFF0C\u5E76\u6CA1\u6709\u52A0\u9501\uFF0C\u4E5F\u5C31\u610F\u5473\u7740LRUCache\u662F\u975E\u7EBF\u7A0B\u5B89\u5168\u7684\u3002\u5B9E\u9645\u4E0A\u7531\u4E8Ecache\u5BF9\u8FDE\u63A5\u751F\u6548\uFF0C\u4E00\u4E2Aconnection\u5C31\u4F1A\u521B\u5EFA\u4E00\u4E2ALRUCache\u3002 \u800C\u8FDE\u63A5\u53C8\u662F\u5355\u7EBF\u7A0B\u64CD\u4F5C\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u3002 \u5F53\u7136\uFF0C\u5BF9\u4E8ECRUCache\u4E2DPreparedStatement\u7684\u56DE\u6536\u8FD8\u5B58\u5728\u4E8E\u591A\u4E2A\u573A\u666F\u4E2D\u3002</p><h2 id="_5-entry\u4E2D\u7684preparedstatementkey" tabindex="-1"><a class="header-anchor" href="#_5-entry\u4E2D\u7684preparedstatementkey" aria-hidden="true">#</a> 5. Entry\u4E2D\u7684PreparedStatementKey</h2><p>\u5728Entry\u4E2D\uFF0Ckey\u7684\u7C7B\u578BPreparedStatementKey,value\u7684\u7C7B\u578B\u4E3APreparedStatementHolder\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PreparedStatementKey</span> <span class="token punctuation">{</span>
   <span class="token comment">//sql\u8BED\u53E5</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">String</span>     sql<span class="token punctuation">;</span>
    <span class="token comment">//catlog name</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">String</span>     catalog<span class="token punctuation">;</span>
    <span class="token comment">//method  \u53C2\u89C1MethodType\u679A\u4E3E\u7C7B</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">MethodType</span> methodType<span class="token punctuation">;</span>
    <span class="token comment">//\u8FD4\u56DE\u503C\u7C7B\u578B</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span>           resultSetType<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span>           resultSetConcurrency<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span>           resultSetHoldability<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span>           autoGeneratedKeys<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span>        columnIndexes<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span>     columnNames<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CPreparedStatementKey\u4E3B\u8981\u662F\u6765\u6807\u8BC6\u4E24\u4E2A\u8981\u6267\u884C\u7684sql\u8BED\u53E5\u662F\u5426\u4E3A\u540C\u4E00\u4E2APreparedStatement\u3002 \u8FD9\u4E2A\u751F\u6210hashcode\u7684\u65B9\u6CD5\u4E5F\u975E\u5E38\u7279\u522B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">int</span> prime <span class="token operator">=</span> <span class="token number">31</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>sql <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> sql<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>catalog <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> catalog<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>methodType <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> methodType<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> resultSetConcurrency<span class="token punctuation">;</span>
    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> resultSetHoldability<span class="token punctuation">;</span>
    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> resultSetType<span class="token punctuation">;</span>

    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> autoGeneratedKeys<span class="token punctuation">;</span>

    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span>columnIndexes<span class="token punctuation">)</span><span class="token punctuation">;</span>
    result <span class="token operator">=</span> prime <span class="token operator">*</span> result <span class="token operator">+</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span>columnNames<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8981\u786E\u8BA4\u4E24\u4E2A\u8BED\u53E5\u662F\u5426\u53EF\u4EE5\u4E3A\u540C\u4E00\u4E2Astatement,\u90A3\u4E48\u9700\u8981PreparedStatementKey\u4E2D\u7684\u5168\u90E8\u5B57\u6BB5\u90FD\u76F8\u540C\u3002</p><h2 id="_6-entry\u4E2D\u7684preparedstatementholder" tabindex="-1"><a class="header-anchor" href="#_6-entry\u4E2D\u7684preparedstatementholder" aria-hidden="true">#</a> 6.Entry\u4E2D\u7684PreparedStatementHolder</h2><p>PreparedStatementHolder\u662F\u4E00\u4E2A\u5BF9PreparedStatement\u7684\u6269\u5C55\u7C7B\u3002 \u5176\u5C5E\u6027\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public final PreparedStatementKey key;
public final PreparedStatement    statement;
private int                       hitCount                 = 0;

//fetch\u5CF0\u503C
private int                       fetchRowPeak             = -1;

private int                       defaultRowPrefetch       = -1;
private int                       rowPrefetch              = -1;

private boolean                   enterOracleImplicitCache = false;

private int                       inUseCount               = 0;
private boolean                   pooling                  = false;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u7C7B\u4E3B\u8981\u6269\u5C55\u4E86\u90E8\u5206\u7EDF\u8BA1\u53C2\u6570\u3002\u5F53\u8C03\u7528PreparedStatement\u7684\u65F6\u5019\uFF0C\u4F1A\u8C03\u7528\u8FD9\u4E9B\u53C2\u6570\u5BF9\u5E94\u7684\u7EDF\u8BA1\u65B9\u6CD5\u3002 \u901A\u8FC7\u6E90\u7801\u53EF\u4EE5\u53D1\u73B0\uFF0C\u4F5C\u8005\u7279\u522B\u559C\u6B22\u901A\u8FC7Holder\u6765\u5BF9java sql\u5305\u63D0\u4F9B\u7684\u5BF9\u8C61\u8FDB\u884C\u6269\u5C55\u3002\u5F53\u7136\u8FD9\u4E5F\u4E0Edruid\u8FDE\u63A5\u6C60\u7684\u5B9A\u4F4D\u662F\u5206\u4E0D\u5F00\u7684\uFF0Cdruid\u6700\u5927\u7684\u6709\u70B9\u5C31\u662F\u5176\u76D1\u63A7\u529F\u80FD\u975E\u5E38\u5B8C\u5584\u3002\u8FD9\u4E9B\u76D1\u63A7\u4E2D\u7EDF\u8BA1\u7684\u6570\u636E\u5C31\u662F\u901A\u8FC7\u8FD9\u4E9BHolder\u6765\u5B9E\u73B0\u7684\u3002 \u5982\u679C\u6211\u4EEC\u5728\u4E1A\u52A1\u7CFB\u7EDF\u7684\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u9700\u8981\u589E\u52A0\u4E00\u4E9B\u76D1\u63A7\u7684\u53C2\u6570\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u8003Druid\u7684\u5B9E\u73B0\u3002</p><h2 id="_7-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_7-\u603B\u7ED3" aria-hidden="true">#</a> 7. \u603B\u7ED3</h2><p>\u5173\u4E8EPreparedStatementCache\u7684\u4F7F\u7528\uFF0C\u5728Druid\u4E2D\u5B9E\u9645\u4E0Acache\u662FConnection\u7EA7\u7684\u3002\u6BCF\u4E2A\u8FDE\u63A5\u4E00\u4E2ACache\u3002 \u4E00\u822C\u5728mysql\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E2ACache\u3002mysql\u4E0D\u652F\u6301\u6E38\u6807\u3002 \u5728\u5206\u5E93\u5206\u8868\u7684\u573A\u666F\u4E0B\uFF0C\u4F1A\u5BFC\u81F4\u5927\u91CF\u7684\u5185\u5B58\u5360\u7528\uFF0C\u4E5F\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,41),u={href:"https://blog.csdn.net/dhaibo1986/article/details/121342475?spm=1001.2014.3001.5502",target:"_blank",rel:"noopener noreferrer"},d=c("Druid\u6E90\u7801\u9605\u8BFB6-PreparedStatementPool\u6E90\u7801\u53CA\u4F7F\u7528\u573A\u666F\u5206\u6790");function k(m,v){const a=l("ExternalLinkIcon");return e(),t("div",null,[r,n("p",null,[n("a",u,[d,p(a)])])])}const y=s(i,[["render",k],["__file","dbcp-y-druid-source-psp.html.vue"]]);export{y as default};
