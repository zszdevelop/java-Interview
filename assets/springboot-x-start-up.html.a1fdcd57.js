import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as o,a as n,b as p,d as t,e,r as l}from"./app.633bb4c8.js";const r={},c=t(`<h1 id="springboot\u8FDB\u9636-springboot\u542F\u52A8\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#springboot\u8FDB\u9636-springboot\u542F\u52A8\u8FC7\u7A0B" aria-hidden="true">#</a> SpringBoot\u8FDB\u9636 - SpringBoot\u542F\u52A8\u8FC7\u7A0B</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><p>SpringBoot \u7684\u542F\u52A8\u5F88\u7B80\u5355\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MyApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE\u4EE3\u7801\u4E0A\u53EF\u4EE5\u770B\u51FA\uFF0C\u8C03\u7528\u4E86SpringApplication\u7684\u9759\u6001\u65B9\u6CD5run\u3002\u8FD9\u4E2Arun \u65B9\u6CD5\u4F1A<strong>\u6784\u9020\u4E00\u4E2ASpringApplication\u7684\u5B9E\u4F8B</strong>\uFF0C\u7136\u540E\u518D\u8C03\u7528\u8FD9\u91CC\u5B9E\u4F8B\u7684<strong>run\u65B9\u6CD5\u5C31\u8868\u793A\u542F\u52A8SpringBoot</strong>\u3002</p><ol><li>\u6784\u9020\u4E00\u4E2ASpringApplication\u7684\u5B9E\u4F8B</li><li>run\u65B9\u6CD5\u5C31\u8868\u793A\u542F\u52A8SpringBoot</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321004400020.png" alt="image-20200321004400020" loading="lazy"></p><h2 id="_2-\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_2-\u603B\u7ED3" aria-hidden="true">#</a> 2. \u603B\u7ED3</h2><p>SpringBoot\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4E0D\u8BBA\u8C03\u7528\u4EC0\u4E48\u65B9\u6CD5\uFF0C\u90FD\u4F1A\u6784\u9020\u4E00\u4E2ASpringApplication\u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528\u8FD9\u4E2A\u5B9E\u4F8B\u7684run\u65B9\u6CD5\uFF0C\u8FD9\u6837\u5C31\u8868\u793A\u542F\u52A8SpringBoot\u3002</p><h3 id="_2-1-\u6784\u9020\u4E00\u4E2Aspringapplication\u7684\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6784\u9020\u4E00\u4E2Aspringapplication\u7684\u5B9E\u4F8B" aria-hidden="true">#</a> 2.1 \u6784\u9020\u4E00\u4E2ASpringApplication\u7684\u5B9E\u4F8B</h3><p>\u5728run\u65B9\u6CD5\u8C03\u7528\u4E4B\u524D\uFF0C\u4E5F\u5C31\u662F<strong>\u6784\u9020SpringApplication\u7684\u65F6\u5019\u4F1A\u8FDB\u884C\u521D\u59CB\u5316\u7684\u5DE5\u4F5C</strong>\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u5019\u4F1A\u505A\u4EE5\u4E0B\u51E0\u4EF6\u4E8B\uFF1A</p><ol><li>\u628A\u53C2\u6570sources\u8BBE\u7F6E\u5230SpringApplication\u5C5E\u6027\u4E2D\uFF0C\u8FD9\u4E2Asources\u53EF\u4EE5\u662F\u4EFB\u4F55\u7C7B\u578B\u7684\u53C2\u6570\u3002\u672C\u6587\u7684\u4F8B\u5B50\u4E2D\u8FD9\u4E2Asources\u5C31\u662FMyApplication\u7684class\u5BF9\u8C61</li><li>\u5224\u65AD\u662F\u5426\u662Fweb\u7A0B\u5E8F\uFF0C\u5E76\u8BBE\u7F6E\u5230webEnvironment\u8FD9\u4E2Aboolean\u5C5E\u6027\u4E2D</li><li>\u627E\u51FA\u6240\u6709\u7684\u521D\u59CB\u5316\u5668\uFF0C\u9ED8\u8BA4\u67095\u4E2A\uFF0C\u8BBE\u7F6E\u5230initializers\u5C5E\u6027\u4E2D</li><li>\u627E\u51FA\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\u76D1\u542C\u5668\uFF0C\u9ED8\u8BA4\u67099\u4E2A\uFF0C\u8BBE\u7F6E\u5230listeners\u5C5E\u6027\u4E2D</li><li>\u627E\u51FA\u8FD0\u884C\u7684\u4E3B\u7C7B(main class)</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321004534266.png" alt="image-20200321004534266" loading="lazy"></p><h3 id="_2-2-run\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-2-run\u65B9\u6CD5" aria-hidden="true">#</a> 2.2 run\u65B9\u6CD5</h3><p>SpringApplication\u6784\u9020\u5B8C\u6210\u4E4B\u540E\u8C03\u7528run\u65B9\u6CD5\uFF0C\u542F\u52A8SpringApplication\uFF0Crun\u65B9\u6CD5\u6267\u884C\u7684\u65F6\u5019\u4F1A\u505A\u4EE5\u4E0B\u51E0\u4EF6\u4E8B\uFF1A</p><ol><li>\u6784\u9020\u4E00\u4E2AStopWatch\uFF0C\u89C2\u5BDFSpringApplication\u7684\u6267\u884C</li><li>\u627E\u51FA\u6240\u6709\u7684SpringApplicationRunListener\u5E76\u5C01\u88C5\u5230SpringApplicationRunListeners\u4E2D\uFF0C\u7528\u4E8E\u76D1\u542Crun\u65B9\u6CD5\u7684\u6267\u884C\u3002\u76D1\u542C\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u5C01\u88C5\u6210\u4E8B\u4EF6\u5E76\u5E7F\u64AD\u51FA\u53BB\u8BA9\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u5E94\u7528\u7A0B\u5E8F\u76D1\u542C\u5668\u8FDB\u884C\u76D1\u542C</li><li>\u6784\u9020Spring\u5BB9\u5668(ApplicationContext)\uFF0C\u5E76\u8FD4\u56DE <ol><li>\u521B\u5EFASpring\u5BB9\u5668\u7684\u5224\u65AD\u662F\u5426\u662Fweb\u73AF\u5883\uFF0C\u662F\u7684\u8BDD\u6784\u9020AnnotationConfigEmbeddedWebApplicationContext\uFF0C\u5426\u5219\u6784\u9020AnnotationConfigApplicationContext</li><li>\u521D\u59CB\u5316\u8FC7\u7A0B\u4E2D\u4EA7\u751F\u7684\u521D\u59CB\u5316\u5668\u5728\u8FD9\u4E2A\u65F6\u5019\u5F00\u59CB\u5DE5\u4F5C</li><li>Spring\u5BB9\u5668\u7684\u5237\u65B0(\u5B8C\u6210bean\u7684\u89E3\u6790\u3001\u5404\u79CDprocessor\u63A5\u53E3\u7684\u6267\u884C\u3001\u6761\u4EF6\u6CE8\u89E3\u7684\u89E3\u6790\u7B49\u7B49)</li></ol></li><li>\u4ECESpring\u5BB9\u5668\u4E2D\u627E\u51FAApplicationRunner\u548CCommandLineRunner\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\u5E76\u6392\u5E8F\u540E\u4F9D\u6B21\u6267\u884C</li></ol><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321004718521.png" alt="image-20200321004718521" loading="lazy"></p><p>run\u65B9\u6CD5\u7684\u7B2C4\u6B65</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20200321010602661.png" alt="image-20200321010602661" loading="lazy"></p><h2 id="\u9762\u8BD5\u771F\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u771F\u9898" aria-hidden="true">#</a> \u9762\u8BD5\u771F\u9898</h2><p>\u4F60\u80FD\u8BB2\u4E00\u4E0BSpringBootApplication\u7684\u542F\u52A8\u8FC7\u7A0B\u662F\u600E\u4E48\u6837\u5B50\uFF1F</p><blockquote><p>SpringBoot\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u6784\u9020\u4E00\u4E2ASpringApplication\u7684\u5B9E\u4F8B\uFF0C\u7136\u540E\u8C03\u7528\u8FD9\u4E2A\u5B9E\u4F8B\u7684run\u65B9\u6CD5\u3002\u8FD9\u5C31\u8868\u793A\u542F\u52A8\u4E86SpringBoot</p><p>\u6784\u9020SpringApplication\u5B9E\u4F8B\u7684\u65F6\u5019</p><ol><li>\u628A\u53C2\u6570\u8BBE\u7F6E\u5230SpringApplication\u5C5E\u6027</li><li>\u5224\u65AD\u662F\u5426\u662Fweb\u7A0B\u5E8F</li><li>\u627E\u51FA\u6240\u6709\u7684\u521D\u59CB\u5316\u5668</li><li>\u627E\u51FA\u6240\u6709\u7684\u5E94\u7528\u7A0B\u5E8F\u76D1\u542C\u5668</li><li>\u627E\u51FA\u8FD0\u884C\u7684\u4E3B\u7C7B</li></ol><p>\u8FD0\u884Crun\u65B9\u6CD5</p><ol><li>\u6784\u9020\u4E00\u4E2AStopWatch\uFF0C\u89C2\u5BDFSpringApplication\u7684\u6267\u884C</li><li>SpringApplicationRunListener \u76D1\u542Crun\u65B9\u6CD5\u7684\u6267\u884C</li><li>\u6784\u9020Spring\u5BB9\u5668(ApplicationContext)\uFF0C\u5E76\u8FD4\u56DE</li><li>\u4ECESpring\u5BB9\u5668\u4E2D\u627E\u51FAApplicationRunner\u548CCommandLineRunner\u63A5\u53E3\u7684\u5B9E\u73B0\u7C7B\u5E76\u6392\u5E8F\u540E\u4F9D\u6B21\u6267\u884C</li></ol></blockquote><p>\u4E1A\u52A1\u63D0\u70BC \u7CBE\u7B80\u7248</p><blockquote><p>springboot \u901A\u8FC7\u6839\u636E\u914D\u7F6E\u6587\u4EF6\u81EA\u52A8\u88C5\u914D\u6240\u5C5E\u4F9D\u8D56\u7684\u7C7B\uFF0C\u518D\u7528\u52A8\u6001\u4EE3\u7406\u7684\u65B9\u5F0F\u6CE8\u5165\u5230Spring\u5BB9\u5668\u91CC\u9762</p></blockquote><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,25),g={href:"https://fangjian0423.github.io/2017/04/30/springboot-startup-analysis/",target:"_blank",rel:"noopener noreferrer"},u=e("SpringBoot\u6E90\u7801\u5206\u6790\u4E4BSpringBoot\u7684\u542F\u52A8\u8FC7\u7A0B");function d(m,h){const i=l("ExternalLinkIcon");return s(),o("div",null,[c,n("p",null,[n("a",g,[u,p(i)])])])}const k=a(r,[["render",d],["__file","springboot-x-start-up.html.vue"]]);export{k as default};
