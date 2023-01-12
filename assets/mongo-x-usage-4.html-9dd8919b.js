import{_ as o,W as e,X as c,Y as n,Z as s,$ as t,a0 as p,D as l}from"./framework-0cf5f349.js";const u={},i=p(`<h1 id="mongo入门-基本使用-java-api" tabindex="-1"><a class="header-anchor" href="#mongo入门-基本使用-java-api" aria-hidden="true">#</a> Mongo入门 - 基本使用：Java API</h1><blockquote><p>本文为低优先级，只是向你介绍下MongoDB提供的原生的JavaAPI；而大多数公司使用Spring框架，会使用Spring Data对MongoDB原生API的封装，比如JPA，MongoTemplate等。</p></blockquote><h2 id="_1-mongodb-driver" tabindex="-1"><a class="header-anchor" href="#_1-mongodb-driver" aria-hidden="true">#</a> 1. MongoDB Driver</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.mongodb/mongo-java-driver --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mongodb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mongo-java-driver<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.12.6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-代码测试" tabindex="-1"><a class="header-anchor" href="#_2-代码测试" aria-hidden="true">#</a> 2. 代码测试</h2>`,5),k={href:"http://mongodb.github.io/mongo-java-driver/3.12/driver/getting-started/quick-start/",target:"_blank",rel:"noopener noreferrer"},r=p(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MONGO_HOST</span> <span class="token operator">=</span> <span class="token string">&quot;xxx.xxx.xxx.xxx&quot;</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Integer</span> <span class="token constant">MONGO_PORT</span> <span class="token operator">=</span> <span class="token number">27017</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">MONGO_DB</span> <span class="token operator">=</span> <span class="token string">&quot;testdb&quot;</span><span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 连接到 mongodb 服务</span>
            <span class="token class-name">MongoClient</span> mongoClient <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MongoClient</span><span class="token punctuation">(</span><span class="token constant">MONGO_HOST</span><span class="token punctuation">,</span> <span class="token constant">MONGO_PORT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 连接到数据库</span>
            <span class="token class-name">MongoDatabase</span> mongoDatabase <span class="token operator">=</span> mongoClient<span class="token punctuation">.</span><span class="token function">getDatabase</span><span class="token punctuation">(</span><span class="token constant">MONGO_DB</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Connect to database successfully&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 创建Collection</span>
            mongoDatabase<span class="token punctuation">.</span><span class="token function">createCollection</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;create collection&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 获取collection</span>
            <span class="token class-name">MongoCollection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> collection <span class="token operator">=</span> mongoDatabase<span class="token punctuation">.</span><span class="token function">getCollection</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 插入document</span>
            <span class="token class-name">Document</span> doc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;MongoDB&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;database&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;info&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Document</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token number">203</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;y&quot;</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            collection<span class="token punctuation">.</span><span class="token function">insertOne</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 统计count</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collection<span class="token punctuation">.</span><span class="token function">countDocuments</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// query - first</span>
            <span class="token class-name">Document</span> myDoc <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myDoc<span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// query - loop all</span>
            <span class="token class-name">MongoCursor</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Document</span><span class="token punctuation">&gt;</span></span> cursor <span class="token operator">=</span> collection<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cursor<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                cursor<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>err<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;: &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,2),d={href:"https://pdai.tech/md/db/nosql-mongo/mongo-x-usage-4.html",target:"_blank",rel:"noopener noreferrer"};function m(v,g){const a=l("ExternalLinkIcon");return e(),c("div",null,[i,n("p",null,[s("例子请参考 "),n("a",k,[s("mongo-java-driver"),t(a)])]),r,n("p",null,[n("a",d,[s("Mongo入门 - 基本使用：Java API"),t(a)])])])}const f=o(u,[["render",m],["__file","mongo-x-usage-4.html.vue"]]);export{f as default};
