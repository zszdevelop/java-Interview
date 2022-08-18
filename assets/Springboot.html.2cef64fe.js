import { o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="spring-boot\u5E38\u89C1\u77E5\u8BC6\u70B9" tabindex="-1"><a class="header-anchor" href="#spring-boot\u5E38\u89C1\u77E5\u8BC6\u70B9" aria-hidden="true">#</a> Spring Boot\u5E38\u89C1\u77E5\u8BC6\u70B9</h1><h2 id="_1-spring-boot-\u7684\u81EA\u52A8\u914D\u7F6E\u662F\u5982\u4F55\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1-spring-boot-\u7684\u81EA\u52A8\u914D\u7F6E\u662F\u5982\u4F55\u5B9E\u73B0" aria-hidden="true">#</a> 1. Spring Boot \u7684\u81EA\u52A8\u914D\u7F6E\u662F\u5982\u4F55\u5B9E\u73B0</h2><p>Spring Boot \u9879\u76EE\u7684\u542F\u52A8\u6CE8\u89E3\u662F\uFF1A@SpringBootApplication\uFF0C\u5176\u5B9E\u4ED6\u7531\u4E0B\u9762\u4E09\u4E2A\u6CE8\u89E3\u7EC4\u6210\u7684\uFF1A</p><ul><li>@SpringBootConfiguration</li><li>@ComponentScan</li><li>@EnableAutoConfiguration</li></ul><h3 id="_1-1-\u52A0\u8F7D\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-1-\u52A0\u8F7D\u8FC7\u7A0B" aria-hidden="true">#</a> 1.1 \u52A0\u8F7D\u8FC7\u7A0B</h3><ul><li><p>\u5176\u4E2D@EnableAutoConfiguration \u662F\u5B9E\u73B0\u81EA\u52A8\u914D\u7F6E\u7684\u5165\u53E3\uFF0C</p></li><li><p>\u8BE5\u6CE8\u89E3\u53C8\u901A\u8FC7 @Import \u6CE8\u89E3\u5BFC\u5165\u4E86AutoConfigurationImportSelector\uFF0C\u5728\u8BE5\u7C7B\u4E2D\u52A0\u8F7D META-INF/spring.factories \u7684\u914D\u7F6E\u4FE1\u606F\u3002</p></li><li><p>\u7136\u540E\u7B5B\u9009\u51FA\u4EE5EnableAutoConfiguration \u4E3Akey\u7684\u6570\u636E\uFF0C\u52A0\u5165\u5230IOC \u5BB9\u5668\u4E2D\uFF0C\u5B9E\u73B0\u81EA\u52A8\u914D\u7F6E\u529F\u80FD</p></li></ul><h2 id="_2-\u4EC0\u4E48\u662F\u5D4C\u5165\u5F0F\u670D\u52A1\u5668-\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u5462" tabindex="-1"><a class="header-anchor" href="#_2-\u4EC0\u4E48\u662F\u5D4C\u5165\u5F0F\u670D\u52A1\u5668-\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u5462" aria-hidden="true">#</a> 2. \u4EC0\u4E48\u662F\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\uFF1F\u6211\u4EEC\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u5462\uFF1F</h2><p>\u5F53\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u53EF\u4EE5\u90E8\u7F72\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u5C06\u4F1A\u628A\u670D\u52A1\u5668\uFF08\u4F8B\u5982\uFF1Atomcat\uFF09\u5D4C\u5165\u5230\u53EF\u90E8\u7F72\u7684\u670D\u52A1\u5668\u4E2D\u3002</p><p>\u4F8B\u5982\uFF1A\u5BF9\u4E8E\u4E00\u4E2A Spring Boot \u5E94\u7528\u7A0B\u5E8F\u6765\u8BF4\uFF0C\u4F60\u53EF\u4EE5\u751F\u6210\u4E00\u4E2A\u5305\u542B Embedded Tomcat \u7684\u5E94\u7528\u7A0B\u5E8F jar\u3002\u4F60\u5C31\u53EF\u4EE5\u50CF\u8FD0\u884C\u6B63\u5E38 Java \u5E94\u7528\u7A0B\u5E8F\u4E00\u6837\u6765\u8FD0\u884C web \u5E94\u7528\u7A0B\u5E8F\u4E86\u3002</p><p>\u5D4C\u5165\u5F0F\u670D\u52A1\u5668\u5C31\u662F\u6211\u4EEC\u7684\u53EF\u6267\u884C\u5355\u5143\u5305\u542B\u670D\u52A1\u5668\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08\u4F8B\u5982\uFF0Ctomcat.jar\uFF09\u3002</p><blockquote><p>\u601D\u8003\u4E00\u4E0B\u518D\u4F60\u865A\u62DF\u673A\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u4EC0\u4E48</p><ol><li>\u5B89\u88C5java</li><li>\u5B89\u88C5web \u6216\u8005\u662F\u5E94\u7528\u7A0B\u5E8F\u7684\u670D\u52A1\u5668\uFF08Tomcat\u3001weblogic\u7B49\u7B49\uFF09</li><li>\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8Fwar</li></ol><p>\u5982\u679C\u6211\u4EEC\u60F3\u7B80\u5316\u8FD9\u4E9B\u6B65\u9AA4\uFF0C\u5E94\u8BE5\u600E\u4E48\u505A\u5462\uFF1F</p><p>\u8BA9\u6211\u4EEC\u6765\u601D\u8003\u5982\u4F55\u4F7F\u670D\u52A1\u5668\u6210\u4E3A\u5E94\u7528\u7A0B\u5E8F\u7684\u4E00\u90E8\u5206\uFF1F</p><p>\u4F60\u53EA\u9700\u8981\u4E00\u4E2A\u5B89\u88C5\u4E86 Java \u7684\u865A\u62DF\u673A\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728\u4E0A\u9762\u90E8\u7F72\u5E94\u7528\u7A0B\u5E8F\u4E86\uFF0C</p></blockquote><h2 id="_3-\u5FAE\u670D\u52A1\u540C\u65F6\u8C03\u7528\u591A\u4E2A\u670D\u52A1-\u600E\u4E48\u652F\u6301\u4E8B\u52A1\u7684" tabindex="-1"><a class="header-anchor" href="#_3-\u5FAE\u670D\u52A1\u540C\u65F6\u8C03\u7528\u591A\u4E2A\u670D\u52A1-\u600E\u4E48\u652F\u6301\u4E8B\u52A1\u7684" aria-hidden="true">#</a> 3. \u5FAE\u670D\u52A1\u540C\u65F6\u8C03\u7528\u591A\u4E2A\u670D\u52A1\uFF0C\u600E\u4E48\u652F\u6301\u4E8B\u52A1\u7684\uFF1F</h2><ul><li><p>\u96C6\u6210 Aatomikos \u652F\u6301\u5206\u5E03\u5F0F\u4E8B\u52A1</p><p>\u4E00\u822C\u4E0D\u5EFA\u8BAE\u8FD9\u6837\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4F7F\u7528\u5206\u5E03\u5F0F\u4E8B\u52A1\u4F1A\u589E\u52A0\u8BF7\u6C42\u7684\u54CD\u5E94\u65F6\u95F4\uFF0C\u5F71\u54CD\u7CFB\u7EDF\u7684TPS</p></li><li><p>\u6D88\u606F\u7684\u8865\u507F\u673A\u5236\u6765\u5904\u7406\u5206\u5E03\u5F0F\u4E8B\u52A1</p></li></ul><h2 id="_4-\u4E2A\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1-\u5BF9restful-\u548Crpc-\u8FD92\u4E2D\u65B9\u5F0F\u5982\u4F55\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#_4-\u4E2A\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1-\u5BF9restful-\u548Crpc-\u8FD92\u4E2D\u65B9\u5F0F\u5982\u4F55\u9009\u62E9" aria-hidden="true">#</a> 4. \u4E2A\u670D\u52A1\u4E4B\u95F4\u901A\u4FE1\uFF0C\u5BF9Restful \u548CRPC \u8FD92\u4E2D\u65B9\u5F0F\u5982\u4F55\u9009\u62E9</h2><p>\u5728\u4F20\u7EDF\u7684SOA\u6CBB\u7406\u4E2D\uFF0C\u4F7F\u7528rpc\u7684\u5C45\u591A\uFF1BSpring Cloud\u9ED8\u8BA4\u4F7F\u7528restful\u8FDB\u884C\u670D\u52A1\u4E4B\u95F4\u7684\u901A\u8BAF\u3002rpc\u901A\u8BAF\u6548\u7387\u4F1A\u6BD4restful\u8981\u9AD8\u4E00\u4E9B\uFF0C\u4F46\u662F\u5BF9\u4E8E\u5927\u591A\u6570\u516C\u53F8\u6765\u8BB2\uFF0C\u8FD9\u70B9\u6548\u7387\u5F71\u54CD\u751A\u5FAE\u3002\u6211\u5EFA\u8BAE\u4F7F\u7528restful\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6613\u4E8E\u5728\u4E0D\u540C\u8BED\u8A00\u5B9E\u73B0\u7684\u670D\u52A1\u4E4B\u95F4\u901A\u8BAF\u3002</p><h2 id="_5-\u600E\u4E48\u8BBE\u8BA1\u65E0\u72B6\u6001\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_5-\u600E\u4E48\u8BBE\u8BA1\u65E0\u72B6\u6001\u670D\u52A1" aria-hidden="true">#</a> 5. \u600E\u4E48\u8BBE\u8BA1\u65E0\u72B6\u6001\u670D\u52A1</h2><h3 id="_5-1-\u4EC0\u4E48\u662F\u65E0\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#_5-1-\u4EC0\u4E48\u662F\u65E0\u72B6\u6001" aria-hidden="true">#</a> 5.1 \u4EC0\u4E48\u662F\u65E0\u72B6\u6001</h3><p>\u5982\u679C\u4E00\u4E2A\u6570\u636E\u9700\u8981\u88AB\u591A\u4E2A\u670D\u52A1\u5171\u4EAB\uFF0C\u624D\u80FD\u5B8C\u6210\u4E00\u7B14\u4EA4\u6613\uFF0C\u90A3\u4E48<strong>\u8FD9\u4E2A\u6570\u636E\u88AB\u79F0\u4E3A\u72B6\u6001</strong>\u3002\u8FDB\u800C\u4F9D\u8D56\u8FD9\u4E2A\u201C\u72B6\u6001\u201D\u6570\u636E\u7684\u670D\u52A1\u88AB\u79F0\u4E3A\u6709\u72B6\u6001\u670D\u52A1\uFF0C\u53CD\u4E4B\u79F0\u4E3A\u65E0\u72B6\u6001\u670D\u52A1</p><h3 id="_5-2-\u5982\u4F55\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#_5-2-\u5982\u4F55\u8BBE\u8BA1" aria-hidden="true">#</a> 5.2 \u5982\u4F55\u8BBE\u8BA1</h3><p>\u65E0\u72B6\u6001\u670D\u52A1\u539F\u5219\u5E76\u4E0D\u662F\u8BF4\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u91CC\u5C31\u4E0D\u5141\u8BB8\u5B58\u5728\u72B6\u6001\uFF0C\u8868\u8FBE\u7684\u771F\u5B9E\u610F\u601D\u662F\u8981\u628A\u6709\u72B6\u6001\u7684\u4E1A\u52A1\u670D\u52A1\u6539\u53D8\u4E3A\u65E0\u72B6\u6001\u7684\u8BA1\u7B97\u7C7B\u670D\u52A1\uFF0C\u90A3\u4E48\u72B6\u6001\u6570\u636E\u4E5F\u5C31\u76F8\u5E94\u7684\u8FC1\u79FB\u5230\u5BF9\u5E94\u7684\u201C\u6709\u72B6\u6001\u6570\u636E\u670D\u52A1\u201D\u4E2D</p><h3 id="_5-3-\u573A\u666F\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_5-3-\u573A\u666F\u8BF4\u660E" aria-hidden="true">#</a> 5.3 \u573A\u666F\u8BF4\u660E</h3><p>\u4F8B\u5982\u6211\u4EEC\u4EE5\u524D\u5728\u672C\u5730\u5185\u5B58\u4E2D\u5EFA\u7ACB\u7684\u6570\u636E\u7F13\u5B58\u3001Session\u7F13\u5B58\uFF0C\u5230\u73B0\u5728\u7684\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u5C31\u5E94\u8BE5\u628A\u8FD9\u4E9B\u6570\u636E\u8FC1\u79FB\u5230\u5206\u5E03\u5F0F\u7F13\u5B58\u4E2D\u5B58\u50A8\uFF0C\u8BA9\u4E1A\u52A1\u670D\u52A1\u53D8\u6210\u4E00\u4E2A\u65E0\u72B6\u6001\u7684\u8BA1\u7B97\u8282\u70B9\u3002\u8FC1\u79FB\u540E\uFF0C\u5C31\u53EF\u4EE5\u505A\u5230\u6309\u9700\u52A8\u6001\u4F38\u7F29\uFF0C\u5FAE\u670D\u52A1\u5E94\u7528\u5728\u8FD0\u884C\u65F6\u52A8\u6001\u589E\u5220\u8282\u70B9\uFF0C\u5C31\u4E0D\u518D\u9700\u8981\u8003\u8651\u7F13\u5B58\u6570\u636E\u5982\u4F55\u540C\u6B65\u7684\u95EE\u9898\u3002</p><h2 id="_6-spring-cache-\u4E09\u79CD\u5E38\u7528\u7684\u7F13\u5B58\u6CE8\u89E3\u548C\u610F\u4E49" tabindex="-1"><a class="header-anchor" href="#_6-spring-cache-\u4E09\u79CD\u5E38\u7528\u7684\u7F13\u5B58\u6CE8\u89E3\u548C\u610F\u4E49" aria-hidden="true">#</a> 6. Spring Cache \u4E09\u79CD\u5E38\u7528\u7684\u7F13\u5B58\u6CE8\u89E3\u548C\u610F\u4E49\uFF1F</h2><ul><li><p>@Cacheable\uFF1A</p><p>\u7528\u6765\u58F0\u660E\u65B9\u6CD5\u662F\u53EF\u7F13\u5B58\u7684\uFF0C\u5C06\u7ED3\u679C\u5B58\u50A8\u5230\u7F13\u5B58\u4E2D\u4EE5\u4FBF\u540E\u7EED\u4F7F\u7528\u76F8\u540C\u53C2\u6570\u8C03\u7528\u65F6\u4E0D\u9700\u6267\u884C\u5B9E\u9645\u7684\u65B9\u6CD5\uFF0C\u76F4\u63A5\u4ECE\u7F13\u5B58\u4E2D\u53D6\u503C\u3002</p></li><li><p>CachePut\uFF1A</p><p>\u4F7F\u7528 @CachePut \u6807\u6CE8\u7684\u65B9\u6CD5\u5728\u6267\u884C\u524D\uFF0C\u4E0D\u4F1A\u53BB\u68C0\u67E5\u7F13\u5B58\u4E2D\u662F\u5426\u5B58\u5728\u4E4B\u524D\u6267\u884C\u8FC7\u7684\u7ED3\u679C\uFF0C\u800C\u662F\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C\u8BE5\u65B9\u6CD5\uFF0C\u5E76\u5C06\u6267\u884C\u7ED3\u679C\u4EE5\u952E\u503C\u5BF9\u7684\u5F62\u5F0F\u5B58\u5165\u6307\u5B9A\u7684\u7F13\u5B58\u4E2D\u3002</p></li><li><p>@CacheEvict:</p><p>\u662F\u7528\u6765\u6807\u6CE8\u5728\u9700\u8981\u6E05\u9664\u7F13\u5B58\u5143\u7D20\u7684\u65B9\u6CD5\u6216\u7C7B\u4E0A\u7684\uFF0C\u5F53\u6807\u8BB0\u5728\u4E00\u4E2A\u7C7B\u4E0A\u65F6\u8868\u793A\u5176\u4E2D\u6240\u6709\u7684\u65B9\u6CD5\u7684\u6267\u884C\u90FD\u4F1A\u89E6\u53D1\u7F13\u5B58\u7684\u6E05\u9664\u64CD\u4F5C\u3002</p></li></ul><h2 id="_7-spring-boot-\u5982\u4F55\u8BBE\u7F6E\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_7-spring-boot-\u5982\u4F55\u8BBE\u7F6E\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42" aria-hidden="true">#</a> 7. Spring Boot \u5982\u4F55\u8BBE\u7F6E\u652F\u6301\u8DE8\u57DF\u8BF7\u6C42</h2><h3 id="_7-1-\u4EC0\u4E48\u662F\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#_7-1-\u4EC0\u4E48\u662F\u8DE8\u57DF" aria-hidden="true">#</a> 7.1 \u4EC0\u4E48\u662F\u8DE8\u57DF</h3><p>\u73B0\u4EE3\u6D4F\u89C8\u5668\u51FA\u4E8E\u5B89\u5168\u7684\u8003\u8651\uFF0C HTTP \u8BF7\u6C42\u65F6\u5FC5\u987B\u9075\u5B88\u540C\u6E90\u7B56\u7565\uFF0C\u5426\u5219\u5C31\u662F\u8DE8\u57DF\u7684 HTTP \u8BF7\u6C42\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u662F\u88AB\u7981\u6B62\u7684\uFF0CIP\uFF08\u57DF\u540D\uFF09\u4E0D\u540C\u3001\u6216\u8005\u7AEF\u53E3\u4E0D\u540C\u3001\u534F\u8BAE\u4E0D\u540C\uFF08\u6BD4\u5982 HTTP\u3001HTTPS\uFF09\u90FD\u4F1A\u9020\u6210\u8DE8\u57DF\u95EE\u9898\u3002</p><h3 id="_7-2-\u652F\u6301\u8DE8\u57DF" tabindex="-1"><a class="header-anchor" href="#_7-2-\u652F\u6301\u8DE8\u57DF" aria-hidden="true">#</a> 7.2 \u652F\u6301\u8DE8\u57DF</h3><p>\u914D\u7F6ECoreFilter</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>\n\n\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">final</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span> source <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">final</span> <span class="token class-name">CorsConfiguration</span> config <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        config<span class="token punctuation">.</span><span class="token function">setAllowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        config<span class="token punctuation">.</span><span class="token function">setAllowedOrigins</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//http:www.a.com</span>\n        config<span class="token punctuation">.</span><span class="token function">setAllowedHeaders</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        config<span class="token punctuation">.</span><span class="token function">setAllowedMethods</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        config<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">300l</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        source<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">,</span> config<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-jpa-\u548C-hibernate-\u6709\u54EA\u4E9B\u533A\u522B-jpa-\u53EF\u4EE5\u652F\u6301\u52A8\u6001-sql-\u5417" tabindex="-1"><a class="header-anchor" href="#_8-jpa-\u548C-hibernate-\u6709\u54EA\u4E9B\u533A\u522B-jpa-\u53EF\u4EE5\u652F\u6301\u52A8\u6001-sql-\u5417" aria-hidden="true">#</a> 8. JPA \u548C Hibernate \u6709\u54EA\u4E9B\u533A\u522B\uFF1FJPA \u53EF\u4EE5\u652F\u6301\u52A8\u6001 SQL \u5417\uFF1F</h2><h3 id="_8-1-jpa-\u548C-hibernate-\u6709\u54EA\u4E9B\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_8-1-jpa-\u548C-hibernate-\u6709\u54EA\u4E9B\u533A\u522B" aria-hidden="true">#</a> 8.1 JPA \u548C Hibernate \u6709\u54EA\u4E9B\u533A\u522B\uFF1F</h3><p>JPA\u672C\u8EAB\u662F\u4E00\u79CD\u89C4\u8303\uFF0C\u5B83\u7684\u672C\u8D28\u662F\u4E00\u79CDORM\u89C4\u8303\uFF08\u4E0D\u662FORM\u6846\u67B6\uFF0C\u56E0\u4E3AJPA\u5E76\u672A\u63D0\u4F9BORM\u5B9E\u73B0\uFF0C\u53EA\u662F\u5236\u5B9A\u4E86\u89C4\u8303\uFF09\u56E0\u4E3AJPA\u662F\u4E00\u79CD\u89C4\u8303\uFF0C\u6240\u4EE5\uFF0C\u53EA\u662F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u76F8\u5173\u7684\u63A5\u53E3\uFF0C\u4F46\u662F\u63A5\u53E3\u5E76\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528\uFF0CJPA\u5E95\u5C42\u9700\u8981\u67D0\u79CDJPA\u5B9E\u73B0\uFF0CHibernate \u662F JPA \u7684\u4E00\u4E2A\u5B9E\u73B0\u96C6\u3002</p><h3 id="_8-2-jpa-\u53EF\u4EE5\u652F\u6301\u52A8\u6001-sql-\u5417" tabindex="-1"><a class="header-anchor" href="#_8-2-jpa-\u53EF\u4EE5\u652F\u6301\u52A8\u6001-sql-\u5417" aria-hidden="true">#</a> 8.2 JPA \u53EF\u4EE5\u652F\u6301\u52A8\u6001 SQL \u5417\uFF1F</h3><p>JPA \u662F\u6839\u636E\u5B9E\u4F53\u7C7B\u7684\u6CE8\u89E3\u6765\u521B\u5EFA\u5BF9\u5E94\u7684\u8868\u548C\u5B57\u6BB5\uFF0C\u5982\u679C\u9700\u8981\u52A8\u6001\u521B\u5EFA\u8868\u6216\u8005\u5B57\u6BB5\uFF0C\u9700\u8981\u52A8\u6001\u6784\u5EFA\u5BF9\u5E94\u7684\u5B9E\u4F53\u7C7B\uFF0C\u518D\u91CD\u65B0\u8C03\u7528Jpa\u5237\u65B0\u6574\u4E2AEntity\u3002\u52A8\u6001SQL\uFF0Cmybatis\u652F\u6301\u7684\u6700\u597D\uFF0Cjpa\u4E5F\u53EF\u4EE5\u652F\u6301\uFF0C\u4F46\u662F\u6CA1\u6709Mybatis\u90A3\u4E48\u7075\u6D3B\u3002</p><h2 id="_9-spring-boot-\u7EA6\u5B9A\u4F18\u5148\u4E8E\u914D\u7F6E-\u6700\u5927\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#_9-spring-boot-\u7EA6\u5B9A\u4F18\u5148\u4E8E\u914D\u7F6E-\u6700\u5927\u7684\u4F18\u52BF" aria-hidden="true">#</a> 9.Spring Boot \u7EA6\u5B9A\u4F18\u5148\u4E8E\u914D\u7F6E\uFF08\u6700\u5927\u7684\u4F18\u52BF\uFF09</h2><p>Spring Boot \u7684\u6700\u5927\u7684\u4F18\u52BF\u662F\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201C\u3002\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201C\u662F\u4E00\u79CD\u8F6F\u4EF6\u8BBE\u8BA1\u8303\u5F0F\uFF0C\u5F00\u53D1\u4EBA\u5458\u6309\u7167\u7EA6\u5B9A\u7684\u65B9\u5F0F\u6765\u8FDB\u884C\u7F16\u7A0B\uFF0C\u53EF\u4EE5\u51CF\u5C11\u8F6F\u4EF6\u5F00\u53D1\u4EBA\u5458\u9700\u505A\u51B3\u5B9A\u7684\u6570\u91CF\uFF0C\u83B7\u5F97\u7B80\u5355\u7684\u597D\u5904\uFF0C\u800C\u53C8\u4E0D\u5931\u7075\u6D3B\u6027\u3002</p><h3 id="_9-1-spring-boot-\u4E2D-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u5177\u4F53\u4F53\u73B0\u5728\u54EA\u91CC" tabindex="-1"><a class="header-anchor" href="#_9-1-spring-boot-\u4E2D-\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E-\u7684\u5177\u4F53\u4F53\u73B0\u5728\u54EA\u91CC" aria-hidden="true">#</a> 9.1 Spring Boot \u4E2D\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201D\u7684\u5177\u4F53\u4F53\u73B0\u5728\u54EA\u91CC</h3><p>Spring Boot Starter\u3001Spring Boot Jpa \u90FD\u662F\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201C\u7684\u4E00\u79CD\u4F53\u73B0\u3002\u90FD\u662F\u901A\u8FC7\u201C\u7EA6\u5B9A\u4F18\u4E8E\u914D\u7F6E\u201C\u7684\u8BBE\u8BA1\u601D\u8DEF\u6765\u8BBE\u8BA1\u7684\uFF0CSpring Boot Starter \u5728\u542F\u52A8\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6839\u636E\u7EA6\u5B9A\u7684\u4FE1\u606F\u5BF9\u8D44\u6E90\u8FDB\u884C\u521D\u59CB\u5316\uFF1BSpring Boot Jpa \u901A\u8FC7\u7EA6\u5B9A\u7684\u65B9\u5F0F\u6765\u81EA\u52A8\u751F\u6210 Sql \uFF0C\u907F\u514D\u5927\u91CF\u65E0\u6548\u4EE3\u7801\u7F16\u5199</p><h3 id="_9-2-spring-boot-\u5728\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u505A\u7684\u51E0\u4EF6\u4E8B\u60C5" tabindex="-1"><a class="header-anchor" href="#_9-2-spring-boot-\u5728\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u505A\u7684\u51E0\u4EF6\u4E8B\u60C5" aria-hidden="true">#</a> 9.2 Spring Boot \u5728\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u505A\u7684\u51E0\u4EF6\u4E8B\u60C5</h3><ul><li>\u2460 Spring Boot \u5728\u542F\u52A8\u65F6\u4F1A\u53BB\u4F9D\u8D56\u7684 Starter \u5305\u4E2D\u5BFB\u627E resources/META-INF/spring.factories \u6587\u4EF6\uFF0C\u7136\u540E\u6839\u636E\u6587\u4EF6\u4E2D\u914D\u7F6E\u7684 Jar \u5305\u53BB\u626B\u63CF\u9879\u76EE\u6240\u4F9D\u8D56\u7684 Jar \u5305\u3002</li><li>\u2461 \u6839\u636E spring.factories \u914D\u7F6E\u52A0\u8F7D AutoConfigure \u7C7B</li><li>\u2462 \u6839\u636E @Conditional \u6CE8\u89E3\u7684\u6761\u4EF6\uFF0C\u8FDB\u884C\u81EA\u52A8\u914D\u7F6E\u5E76\u5C06 Bean \u6CE8\u5165 Spring Context</li></ul><p>\u603B\u7ED3\u4E00\u4E0B\uFF0C\u5176\u5B9E\u5C31\u662F Spring Boot \u5728\u542F\u52A8\u7684\u65F6\u5019\uFF0C\u6309\u7167\u7EA6\u5B9A\u53BB\u8BFB\u53D6 Spring Boot Starter \u7684\u914D\u7F6E\u4FE1\u606F\uFF0C\u518D\u6839\u636E\u914D\u7F6E\u4FE1\u606F\u5BF9\u8D44\u6E90\u8FDB\u884C\u521D\u59CB\u5316\uFF0C\u5E76\u6CE8\u5165\u5230 Spring \u5BB9\u5668\u4E2D\u3002\u8FD9\u6837 Spring Boot \u542F\u52A8\u5B8C\u6BD5\u540E\uFF0C\u5C31\u5DF2\u7ECF\u51C6\u5907\u597D\u4E86\u4E00\u5207\u8D44\u6E90\uFF0C\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u76F4\u63A5\u6CE8\u5165\u5BF9\u5E94 Bean \u8D44\u6E90\u5373\u53EF\u3002</p><h2 id="_10-spring-\u3001spring-boot-\u548C-spring-cloud-\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_10-spring-\u3001spring-boot-\u548C-spring-cloud-\u7684\u5173\u7CFB" aria-hidden="true">#</a> 10. Spring \u3001Spring Boot \u548C Spring Cloud \u7684\u5173\u7CFB?</h2><p>Spring \u6700\u521D\u6700\u6838\u5FC3\u7684\u4E24\u5927\u6838\u5FC3\u529F\u80FD Spring Ioc \u548C Spring Aop \u6210\u5C31\u4E86 Spring\uFF0CSpring \u5728\u8FD9\u4E24\u5927\u6838\u5FC3\u7684\u529F\u80FD\u4E0A\u4E0D\u65AD\u7684\u53D1\u5C55\uFF0C\u624D\u6709\u4E86 Spring \u4E8B\u52A1\u3001Spring Mvc \u7B49\u4E00\u7CFB\u5217\u4F1F\u5927\u7684\u4EA7\u54C1\uFF0C\u6700\u7EC8\u6210\u5C31\u4E86 Spring \u5E1D\u56FD\uFF0C\u5230\u4E86\u540E\u671F Spring \u51E0\u4E4E\u53EF\u4EE5\u89E3\u51B3\u4F01\u4E1A\u5F00\u53D1\u4E2D\u7684\u6240\u6709\u95EE\u9898\u3002</p><p>Spring Boot \u662F\u5728\u5F3A\u5927\u7684 Spring \u5E1D\u56FD\u751F\u6001\u57FA\u7840\u4E0A\u9762\u53D1\u5C55\u800C\u6765\uFF0C\u53D1\u660E Spring Boot \u4E0D\u662F\u4E3A\u4E86\u53D6\u4EE3 Spring ,\u662F\u4E3A\u4E86\u8BA9\u4EBA\u4EEC\u66F4\u5BB9\u6613\u7684\u4F7F\u7528 Spring \u3002</p><p>Spring Cloud \u662F\u4E00\u7CFB\u5217\u6846\u67B6\u7684\u6709\u5E8F\u96C6\u5408\u3002\u5B83\u5229\u7528 Spring Boot \u7684\u5F00\u53D1\u4FBF\u5229\u6027\u5DE7\u5999\u5730\u7B80\u5316\u4E86\u5206\u5E03\u5F0F\u7CFB\u7EDF\u57FA\u7840\u8BBE\u65BD\u7684\u5F00\u53D1\uFF0C\u5982\u670D\u52A1\u53D1\u73B0\u6CE8\u518C\u3001\u914D\u7F6E\u4E2D\u5FC3\u3001\u6D88\u606F\u603B\u7EBF\u3001\u8D1F\u8F7D\u5747\u8861\u3001\u65AD\u8DEF\u5668\u3001\u6570\u636E\u76D1\u63A7\u7B49\uFF0C\u90FD\u53EF\u4EE5\u7528 Spring Boot \u7684\u5F00\u53D1\u98CE\u683C\u505A\u5230\u4E00\u952E\u542F\u52A8\u548C\u90E8\u7F72\u3002</p><p>Spring Cloud \u662F\u4E3A\u4E86\u89E3\u51B3\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u670D\u52A1\u6CBB\u7406\u800C\u63D0\u4F9B\u7684\u4E00\u7CFB\u5217\u529F\u80FD\u7684\u5F00\u53D1\u6846\u67B6\uFF0C\u5E76\u4E14 Spring Cloud \u662F\u5B8C\u5168\u57FA\u4E8E Spring Boot \u800C\u5F00\u53D1\uFF0CSpring Cloud \u5229\u7528 Spring Boot \u7279\u6027\u6574\u5408\u4E86\u5F00\u6E90\u884C\u4E1A\u4E2D\u4F18\u79C0\u7684\u7EC4\u4EF6\uFF0C\u6574\u4F53\u5BF9\u5916\u63D0\u4F9B\u4E86\u4E00\u5957\u5728\u5FAE\u670D\u52A1\u67B6\u6784\u4E2D\u670D\u52A1\u6CBB\u7406\u7684\u89E3\u51B3\u65B9\u6848\u3002</p><p>\u7528\u4E00\u7EC4\u4E0D\u592A\u5408\u7406\u7684\u5305\u542B\u5173\u7CFB\u6765\u8868\u8FBE\u5B83\u4EEC\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</p><p>Spring ioc/aop &gt; Spring &gt; Spring Boot &gt; Spring Cloud</p>', 49);
const _hoisted_50 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_50);
}
var Springboot_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Springboot.html.vue"]]);
export { Springboot_html as default };
