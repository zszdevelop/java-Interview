import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as p,a as n,b as t,d as o,e as i,r as l}from"./app.657c5dd1.js";const c={},r=o(`<h1 id="vue\u79FB\u52A8\u7AEF\u548Cpc\u7AEF\u9002\u914D\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#vue\u79FB\u52A8\u7AEF\u548Cpc\u7AEF\u9002\u914D\u65B9\u6848" aria-hidden="true">#</a> Vue\u79FB\u52A8\u7AEF\u548Cpc\u7AEF\u9002\u914D\u65B9\u6848</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>vue\u9879\u76EE\u79FB\u52A8\u7AEF\u3001pc\u7AEF\u9002\u914D\u65B9\u6848</p><ul><li>lib-flexible \u6839\u636E\u5C4F\u5E55\u5BBD\u5EA6\uFF0C\u81EA\u52A8\u8BBE\u7F6Ehtml\u7684font-size</li><li>postcss-px2rem \u81EA\u52A8\u5C06px\u5355\u4F4D\u8F6C\u6362\u6210rem</li></ul><h2 id="_2-\u57FA\u7840\u96C6\u6210\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u7840\u96C6\u6210\u4F7F\u7528" aria-hidden="true">#</a> 2. \u57FA\u7840\u96C6\u6210\u4F7F\u7528</h2><h3 id="_2-1-\u5B89\u88C5\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_2-1-\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a> 2.1 \u5B89\u88C5\u4F9D\u8D56</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> px2rem-loader --save-dev
<span class="token function">npm</span> <span class="token function">install</span> lib-flexible <span class="token parameter variable">--save</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-main-js\u4E2D\u5F15\u5165-lib-flexible" tabindex="-1"><a class="header-anchor" href="#_2-2-main-js\u4E2D\u5F15\u5165-lib-flexible" aria-hidden="true">#</a> 2.2 main.js\u4E2D\u5F15\u5165 &quot;lib-flexible&quot;</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token string">&#39;lib-flexible&#39;</span> // \u79FB\u52A8\u7AEF\u9002\u914D <span class="token punctuation">(</span>\u76EE\u5F55:project/src/main.js<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-vue-config-js-\u5F15\u5165px2rem-loader" tabindex="-1"><a class="header-anchor" href="#_2-3-vue-config-js-\u5F15\u5165px2rem-loader" aria-hidden="true">#</a> 2.3 vue.config.js \u5F15\u5165px2rem-loader</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
     <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     
         <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u65B0\u589E\u7684\u5185\u5BB9<span class="token operator">--</span><span class="token operator">&gt;</span>
         config<span class="token punctuation">.</span>module
         <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;css&#39;</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">oneOf</span><span class="token punctuation">(</span><span class="token string">&#39;vue&#39;</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">resourceQuery</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\?vue</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;px2rem&#39;</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;px2rem-loader&#39;</span><span class="token punctuation">)</span>
         <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
             <span class="token literal-property property">remUnit</span><span class="token operator">:</span> <span class="token number">75</span>
         <span class="token punctuation">}</span><span class="token punctuation">)</span>
         <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u65B0\u589E\u7ED3\u675F<span class="token operator">--</span><span class="token operator">&gt;</span>
     <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-login-vue\u4E2D\u6839\u636E750px\u8BBE\u8BA1\u56FE\u5199\u9875\u9762" tabindex="-1"><a class="header-anchor" href="#_2-4-login-vue\u4E2D\u6839\u636E750px\u8BBE\u8BA1\u56FE\u5199\u9875\u9762" aria-hidden="true">#</a> 2.4 login.vue\u4E2D\u6839\u636E750px\u8BBE\u8BA1\u56FE\u5199\u9875\u9762</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
        <span class="token punctuation">.</span>login<span class="token operator">-</span>wrap <span class="token punctuation">{</span>
            <span class="token literal-property property">background</span><span class="token operator">:</span> #<span class="token number">666666</span><span class="token punctuation">;</span>
            <span class="token literal-property property">height</span><span class="token operator">:</span> 100px<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>
    
    iphone6\uFF1A height<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">.</span>3333rem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u662F\u5DF2\u7ECF\u6210\u529F\u4E86\uFF0C\u4F46\u662Fpx2rem-loader\u8FD9\u91CC\u53EA\u80FD\u4EC5\u9650\u4E8Ecss\uFF0C\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u5927\u591A\u6570\u5F00\u53D1\u9700\u6C42\uFF0C\u6BD4\u5982\u4F7F\u7528less,stylus,scss...\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981postcss</p><h2 id="_3-\u96C6\u6210-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#_3-\u96C6\u6210-postcss-plugin-px2rem" aria-hidden="true">#</a> 3. \u96C6\u6210 postcss-plugin-px2rem</h2><h3 id="_3-1-\u5B89\u88C5-postcss-plugin-px2rem-devdependencies" tabindex="-1"><a class="header-anchor" href="#_3-1-\u5B89\u88C5-postcss-plugin-px2rem-devdependencies" aria-hidden="true">#</a> 3.1 \u5B89\u88C5 &quot;postcss-plugin-px2rem&quot; (devDependencies)</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> postcss-plugin-px2rem --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-2-vue-config-js-\u914D\u7F6E-postcss-plugin-px2rem" tabindex="-1"><a class="header-anchor" href="#_3-2-vue-config-js-\u914D\u7F6E-postcss-plugin-px2rem" aria-hidden="true">#</a> 3.2 vue.config.js \u914D\u7F6E postcss-plugin-px2rem</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">lintOnSave</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u65B0\u589E\u7684\u5185\u5BB9<span class="token operator">--</span><span class="token operator">&gt;</span>
            <span class="token literal-property property">css</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">loaderOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">postcss</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                            <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-plugin-px2rem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                                <span class="token literal-property property">rootValue</span><span class="token operator">:</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token comment">//\u6362\u7B97\u57FA\u6570\uFF0C \u9ED8\u8BA4100  \uFF0C\u8FD9\u6837\u7684\u8BDD\u628A\u6839\u6807\u7B7E\u7684\u5B57\u4F53\u89C4\u5B9A\u4E3A1rem\u4E3A50px,\u8FD9\u6837\u5C31\u53EF\u4EE5\u4ECE\u8BBE\u8BA1\u7A3F\u4E0A\u91CF\u51FA\u591A\u5C11\u4E2Apx\u76F4\u63A5\u5728\u4EE3\u7801\u4E2D\u5199\u591A\u4E0Apx\u4E86\u3002</span>
                                <span class="token comment">// unitPrecision: 5, //\u5141\u8BB8REM\u5355\u4F4D\u589E\u957F\u5230\u7684\u5341\u8FDB\u5236\u6570\u5B57\u3002</span>
                                <span class="token comment">//propWhiteList: [],  //\u9ED8\u8BA4\u503C\u662F\u4E00\u4E2A\u7A7A\u6570\u7EC4\uFF0C\u8FD9\u610F\u5473\u7740\u7981\u7528\u767D\u540D\u5355\u5E76\u542F\u7528\u6240\u6709\u5C5E\u6027\u3002</span>
                                <span class="token comment">// propBlackList: [], //\u9ED1\u540D\u5355</span>
                                <span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(node_module)</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">//\u9ED8\u8BA4false\uFF0C\u53EF\u4EE5\uFF08reg\uFF09\u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6392\u9664\u67D0\u4E9B\u6587\u4EF6\u5939\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982/(node_module)\\/\u5982\u679C\u60F3\u628A\u524D\u7AEFUI\u6846\u67B6\u5185\u7684px\u4E5F\u8F6C\u6362\u6210rem\uFF0C\u8BF7\u628A\u6B64\u5C5E\u6027\u8BBE\u4E3A\u9ED8\u8BA4\u503C</span>
                                <span class="token comment">// selectorBlackList: [], //\u8981\u5FFD\u7565\u5E76\u4FDD\u7559\u4E3Apx\u7684\u9009\u62E9\u5668</span>
                                <span class="token comment">// ignoreIdentifier: false,  //\uFF08boolean/string\uFF09\u5FFD\u7565\u5355\u4E2A\u5C5E\u6027\u7684\u65B9\u6CD5\uFF0C\u542F\u7528ignoreidentifier\u540E\uFF0Creplace\u5C06\u81EA\u52A8\u8BBE\u7F6E\u4E3Atrue\u3002</span>
                                <span class="token comment">// replace: true, // \uFF08\u5E03\u5C14\u503C\uFF09\u66FF\u6362\u5305\u542BREM\u7684\u89C4\u5219\uFF0C\u800C\u4E0D\u662F\u6DFB\u52A0\u56DE\u9000\u3002</span>
                                <span class="token literal-property property">mediaQuery</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//\uFF08\u5E03\u5C14\u503C\uFF09\u5141\u8BB8\u5728\u5A92\u4F53\u67E5\u8BE2\u4E2D\u8F6C\u6362px\u3002</span>
                                <span class="token literal-property property">minPixelValue</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token comment">//\u8BBE\u7F6E\u8981\u66FF\u6362\u7684\u6700\u5C0F\u50CF\u7D20\u503C(3px\u4F1A\u88AB\u8F6Crem)\u3002 \u9ED8\u8BA4 0</span>
                            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                        <span class="token punctuation">]</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>\u65B0\u589E\u7ED3\u675F<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-package-json-\u4E2D\u52A0\u5165postcss-\u76F8\u5173\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-3-package-json-\u4E2D\u52A0\u5165postcss-\u76F8\u5173\u63D2\u4EF6" aria-hidden="true">#</a> 3.3 package.json \u4E2D\u52A0\u5165postcss \u76F8\u5173\u63D2\u4EF6</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>        <span class="token punctuation">{</span>
            <span class="token string-property property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">}</span>
            <span class="token string-property property">&quot;postcss&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token string-property property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token string-property property">&quot;autoprefixer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token string-property property">&quot;precss&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u5728login-vue\u4E2D" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5728login-vue\u4E2D" aria-hidden="true">#</a> 3.4 \u5728login.vue\u4E2D</h3><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
            <span class="token selector">.login-wrap</span> <span class="token punctuation">{</span>
                <span class="token property">background</span><span class="token punctuation">:</span> #666666<span class="token punctuation">;</span>
                <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
                <span class="token selector">.text-span</span> <span class="token punctuation">{</span>
                    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
                    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>phone6\uFF1A 
        height: 100px;  =&gt; height: 1.3333rem
        font-size: 16px; =&gt; font-size: 0.21333rem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u5C31\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u6210\u529F\u4F7F\u7528less,scss,styuls\u548Cpx2rem\u4E86</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,26),u={href:"https://juejin.cn/post/6844903780673142792",target:"_blank",rel:"noopener noreferrer"},d=i("vue-cli3.0 \u4F7F\u7528px2rem \u6216 postcss-plugin-px2rem");function k(v,m){const s=l("ExternalLinkIcon");return e(),p("div",null,[r,n("p",null,[n("a",u,[d,t(s)])])])}const h=a(c,[["render",k],["__file","vue-adapter.html.vue"]]);export{h as default};
