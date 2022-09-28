import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as t,e as c,d as o,r as l}from"./app.2d9a29d9.js";const i={},u=c(`<h1 id="java\u81EA\u65CB\u9501" tabindex="-1"><a class="header-anchor" href="#java\u81EA\u65CB\u9501" aria-hidden="true">#</a> java\u81EA\u65CB\u9501</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>\u81EA\u65CB\u9501\uFF08spinlock\uFF09\uFF1A\u662F\u6307\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u5728<strong>\u83B7\u53D6\u9501\u7684\u65F6\u5019</strong>\uFF0C\u5982\u679C\u9501\u5DF2\u7ECF\u88AB\u5176\u5B83\u7EBF\u7A0B\u83B7\u53D6\uFF0C\u90A3\u4E48\u8BE5\u7EBF\u7A0B\u5C06\u5FAA\u73AF\u7B49\u5F85\uFF0C\u7136\u540E<strong>\u4E0D\u65AD\u7684\u5224\u65AD\u9501\u662F\u5426\u80FD\u591F\u88AB\u6210\u529F\u83B7\u53D6\uFF0C\u76F4\u5230\u83B7\u53D6\u5230\u9501\u624D\u4F1A\u9000\u51FA\u5FAA\u73AF</strong>\u3002 <strong>\u83B7\u53D6\u9501\u7684\u7EBF\u7A0B\u4E00\u76F4\u5904\u4E8E\u6D3B\u8DC3\u72B6\u6001</strong>\uFF0C\u4F46\u662F\u5E76\u6CA1\u6709\u6267\u884C\u4EFB\u4F55\u6709\u6548\u7684\u4EFB\u52A1\uFF0C\u4F7F\u7528\u8FD9\u79CD\u9501\u4F1A\u9020\u6210 busy-waiting\u3002</p><h2 id="_2-java-\u5982\u4F55\u5B9E\u73B0\u81EA\u65CB\u9501" tabindex="-1"><a class="header-anchor" href="#_2-java-\u5982\u4F55\u5B9E\u73B0\u81EA\u65CB\u9501" aria-hidden="true">#</a> 2. Java \u5982\u4F55\u5B9E\u73B0\u81EA\u65CB\u9501</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpinLock</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span> cas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5229\u7528CAS</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>cas<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// DO nothing</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        cas<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>current<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>lock\uFF08)\u65B9\u6CD5\u5229\u7528\u7684CAS\uFF0C</p><ol><li>\u5F53\u7B2C\u4E00\u4E2A\u7EBF\u7A0BA\u83B7\u53D6\u9501\u7684\u65F6\u5019\uFF0C\u80FD\u591F\u6210\u529F\u83B7\u53D6\u5230\uFF0C\u4E0D\u4F1A\u8FDB\u5165while\u5FAA\u73AF\uFF0C</li><li>\u5982\u679C\u6B64\u65F6\u7EBF\u7A0BA\u6CA1\u6709\u91CA\u653E\u9501\uFF0C\u53E6\u4E00\u4E2A\u7EBF\u7A0BB\u53C8\u6765\u83B7\u53D6\u9501\uFF0C\u6B64\u65F6\u7531\u4E8E\u4E0D\u6EE1\u8DB3CAS\uFF0C\u6240\u4EE5\u5C31\u4F1A\u8FDB\u5165while\u5FAA\u73AF\uFF0C</li><li>\u4E0D\u65AD\u5224\u65AD\u662F\u5426\u6EE1\u8DB3CAS\uFF0C\u76F4\u5230A\u7EBF\u7A0B\u8C03\u7528unlock\u65B9\u6CD5\u91CA\u653E\u4E86\u8BE5\u9501\u3002</li></ol><h2 id="_3-\u81EA\u65CB\u9501\u7684\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u65CB\u9501\u7684\u7F3A\u70B9" aria-hidden="true">#</a> 3. \u81EA\u65CB\u9501\u7684\u7F3A\u70B9</h2><ol><li><p>\u5982\u679C\u67D0\u4E2A\u7EBF\u7A0B\u6301\u6709\u9501\u7684\u65F6\u95F4\u8FC7\u957F\uFF0C\u5C31\u4F1A\u5BFC\u81F4\u5176\u5B83\u7B49\u5F85\u83B7\u53D6\u9501\u7684\u7EBF\u7A0B\u8FDB\u5165\u5FAA\u73AF\u7B49\u5F85\uFF0C\u6D88\u8017CPU\u3002\u4F7F\u7528\u4E0D\u5F53\u4F1A\u9020\u6210CPU\u4F7F\u7528\u7387\u6781\u9AD8\u3002</p></li><li><p>\u4E0A\u9762Java\u5B9E\u73B0\u7684\u81EA\u65CB\u9501\u4E0D\u662F\u516C\u5E73\u7684\uFF0C\u5373\u65E0\u6CD5\u6EE1\u8DB3\u7B49\u5F85\u65F6\u95F4\u6700\u957F\u7684\u7EBF\u7A0B\u4F18\u5148\u83B7\u53D6\u9501\u3002\u4E0D\u516C\u5E73\u7684\u9501\u5C31\u4F1A\u5B58\u5728\u201C\u7EBF\u7A0B\u9965\u997F\u201D\u95EE\u9898\u3002</p></li></ol><h2 id="_4-\u81EA\u65CB\u9501\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u81EA\u65CB\u9501\u7684\u4F18\u70B9" aria-hidden="true">#</a> 4. \u81EA\u65CB\u9501\u7684\u4F18\u70B9</h2><ol><li>\u81EA\u65CB\u9501\u4E0D\u4F1A\u4F7F\u7EBF\u7A0B\u72B6\u6001\u53D1\u751F\u5207\u6362\uFF0C\u4E00\u76F4\u5904\u4E8E\u7528\u6237\u6001\uFF0C\u5373\u7EBF\u7A0B\u4E00\u76F4\u90FD\u662Factive\u7684\uFF1B\u4E0D\u4F1A\u4F7F\u7EBF\u7A0B\u8FDB\u5165\u963B\u585E\u72B6\u6001\uFF0C\u51CF\u5C11\u4E86\u4E0D\u5FC5\u8981\u7684\u4E0A\u4E0B\u6587\u5207\u6362\uFF0C\u6267\u884C\u901F\u5EA6\u5FEB</li><li>\u975E\u81EA\u65CB\u9501\u5728\u83B7\u53D6\u4E0D\u5230\u9501\u7684\u65F6\u5019\u4F1A\u8FDB\u5165\u963B\u585E\u72B6\u6001\uFF0C\u4ECE\u800C\u8FDB\u5165\u5185\u6838\u6001\uFF0C\u5F53\u83B7\u53D6\u5230\u9501\u7684\u65F6\u5019\u9700\u8981\u4ECE\u5185\u6838\u6001\u6062\u590D\uFF0C\u9700\u8981\u7EBF\u7A0B\u4E0A\u4E0B\u6587\u5207\u6362\u3002 \uFF08\u7EBF\u7A0B\u88AB\u963B\u585E\u540E\u4FBF\u8FDB\u5165\u5185\u6838\uFF08Linux\uFF09\u8C03\u5EA6\u72B6\u6001\uFF0C\u8FD9\u4E2A\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u5728\u7528\u6237\u6001\u4E0E\u5185\u6838\u6001\u4E4B\u95F4\u6765\u56DE\u5207\u6362\uFF0C\u4E25\u91CD\u5F71\u54CD\u9501\u7684\u6027\u80FD\uFF09</li></ol><h2 id="_5-\u652F\u6301\u53EF\u91CD\u5165\u81EA\u65CB\u9501" tabindex="-1"><a class="header-anchor" href="#_5-\u652F\u6301\u53EF\u91CD\u5165\u81EA\u65CB\u9501" aria-hidden="true">#</a> 5. \u652F\u6301\u53EF\u91CD\u5165\u81EA\u65CB\u9501</h2><p>\u6587\u7AE0\u5F00\u59CB\u7684\u65F6\u5019\u7684\u90A3\u6BB5\u4EE3\u7801\uFF0C\u4ED4\u7EC6\u5206\u6790\u4E00\u4E0B\u5C31\u53EF\u4EE5\u770B\u51FA\uFF0C\u5B83\u662F\u4E0D\u652F\u6301\u91CD\u5165\u7684\uFF0C\u5373\u5F53\u4E00\u4E2A\u7EBF\u7A0B\u7B2C\u4E00\u6B21\u5DF2\u7ECF\u83B7\u53D6\u5230\u4E86\u8BE5\u9501\uFF0C\u5728\u9501\u91CA\u653E\u4E4B\u524D\u53C8\u4E00\u6B21\u91CD\u65B0\u83B7\u53D6\u8BE5\u9501\uFF0C\u7B2C\u4E8C\u6B21\u5C31\u4E0D\u80FD\u6210\u529F\u83B7\u53D6\u5230\u3002\u7531\u4E8E\u4E0D\u6EE1\u8DB3CAS\uFF0C\u6240\u4EE5\u7B2C\u4E8C\u6B21\u83B7\u53D6\u4F1A\u8FDB\u5165while\u5FAA\u73AF\u7B49\u5F85\uFF0C\u800C\u5982\u679C\u662F\u53EF\u91CD\u5165\u9501\uFF0C\u7B2C\u4E8C\u6B21\u4E5F\u662F\u5E94\u8BE5\u80FD\u591F\u6210\u529F\u83B7\u53D6\u5230\u7684\u3002</p><p>\u800C\u4E14\uFF0C\u5373\u4F7F\u7B2C\u4E8C\u6B21\u80FD\u591F\u6210\u529F\u83B7\u53D6\uFF0C\u90A3\u4E48\u5F53\u7B2C\u4E00\u6B21\u91CA\u653E\u9501\u7684\u65F6\u5019\uFF0C\u7B2C\u4E8C\u6B21\u83B7\u53D6\u5230\u7684\u9501\u4E5F\u4F1A\u88AB\u91CA\u653E\uFF0C\u800C\u8FD9\u662F\u4E0D\u5408\u7406\u7684\u3002</p><p>\u4E3A\u4E86\u5B9E\u73B0\u53EF\u91CD\u5165\u9501\uFF0C\u6211\u4EEC\u9700\u8981\u5F15\u5165\u4E00\u4E2A\u8BA1\u6570\u5668\uFF0C\u7528\u6765\u8BB0\u5F55\u83B7\u53D6\u9501\u7684\u7EBF\u7A0B\u6570\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ReentrantSpinLock</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span> cas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Thread</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> cas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u5982\u679C\u5F53\u524D\u7EBF\u7A0B\u5DF2\u7ECF\u83B7\u53D6\u5230\u4E86\u9501\uFF0C\u7EBF\u7A0B\u6570\u589E\u52A0\u4E00\uFF0C\u7136\u540E\u8FD4\u56DE</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5982\u679C\u6CA1\u83B7\u53D6\u5230\u9501\uFF0C\u5219\u901A\u8FC7CAS\u81EA\u65CB</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>cas<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> current<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// DO nothing</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span> cur <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> cas<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// \u5982\u679C\u5927\u4E8E0\uFF0C\u8868\u793A\u5F53\u524D\u7EBF\u7A0B\u591A\u6B21\u83B7\u53D6\u4E86\u8BE5\u9501\uFF0C\u91CA\u653E\u9501\u901A\u8FC7count\u51CF\u4E00\u6765\u6A21\u62DF</span>
                count<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// \u5982\u679Ccount==0\uFF0C\u53EF\u4EE5\u5C06\u9501\u91CA\u653E\uFF0C\u8FD9\u6837\u5C31\u80FD\u4FDD\u8BC1\u83B7\u53D6\u9501\u7684\u6B21\u6570\u4E0E\u91CA\u653E\u9501\u7684\u6B21\u6570\u662F\u4E00\u81F4\u7684\u4E86\u3002</span>
                cas<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,17),r={href:"https://blog.csdn.net/fuyuwei2015/article/details/83387536",target:"_blank",rel:"noopener noreferrer"},k=o("Java\u4E2D\u7684\u81EA\u65CB\u9501-(\u5305\u62EC\u4E86\u5176\u4ED6\u81EA\u65CB\u9501\u53D8\u79CD)");function d(v,m){const s=l("ExternalLinkIcon");return e(),p("div",null,[u,n("p",null,[n("a",r,[k,t(s)])])])}const f=a(i,[["render",d],["__file","java-thread-y-spinlock.html.vue"]]);export{f as default};
