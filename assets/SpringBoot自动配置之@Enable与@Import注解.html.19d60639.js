import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode, d as createTextVNode } from "./app.46f7153a.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="springboot-\u81EA\u52A8\u914D\u7F6E\u4E4B-enable-\u4E0E-import\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#springboot-\u81EA\u52A8\u914D\u7F6E\u4E4B-enable-\u4E0E-import\u6CE8\u89E3" aria-hidden="true">#</a> SpringBoot \u81EA\u52A8\u914D\u7F6E\u4E4B@Enable*\u4E0E@Import\u6CE8\u89E3</h1><p>SpringBoot \u7684\u81EA\u52A8\u914D\u7F6E\u975E\u5E38\u5F3A\u5927\uFF0C\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684<code>@Enable*</code>\u6CE8\u89E3\u6765\u5F00\u542F\u5BF9\u67D0\u65B9\u9762\u7684\u652F\u6301\uFF0C\u90A3\u4E48<code>@Enable*</code> \u6CE8\u89E3\u7684\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</p><h2 id="_1-enable-\u6CE8\u89E3\u4E0E-import-\u6CE8\u89E3\u4E4B\u95F4\u7684\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#_1-enable-\u6CE8\u89E3\u4E0E-import-\u6CE8\u89E3\u4E4B\u95F4\u7684\u5173\u7CFB" aria-hidden="true">#</a> 1. @Enable* \u6CE8\u89E3\u4E0E @Import \u6CE8\u89E3\u4E4B\u95F4\u7684\u5173\u7CFB</h2><p>@Enable*\u4E3E\u4F8B</p><ul><li>@EnableScheduling \u5F00\u542F\u8BA1\u5212\u4EFB\u52A1\u7684\u652F\u6301</li><li>@EnableAsync \u5F00\u542F\u5F02\u6B65\u65B9\u6CD5\u7684\u652F\u6301</li></ul><p>\u6211\u4EEC\u89C2\u5BDF\u8FD9\u4E9B@Enable<em>\u6E90\u7801\u53EF\u4EE5\u770B\u51FA\uFF0C\u6240\u6709@Enable</em> \u6CE8\u89E3\u90FD\u662F\u6709@Import\u7684\u7EC4\u5408\u6CE8\u89E3\uFF0C@Enable* \u81EA\u52A9\u5F00\u542F\u7684\u5B9E\u73B0\u5176\u5B9E\u5C31\u662F\u5BFC\u5165\u4F8B\u5982\u4E00\u4E9B\u81EA\u52A8\u914D\u7F6E\u7684bean</p><p><strong>@Import \u6CE8\u89E3\u7684\u6700\u4E3B\u8981\u529F\u80FD\u5C31\u662F\u5BFC\u5165\u989D\u5916\u7684\u914D\u7F6E\u4FE1\u606F</strong></p><h2 id="_2-import\u6CE8\u89E3\u7684\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-import\u6CE8\u89E3\u7684\u7528\u6CD5" aria-hidden="true">#</a> 2. @Import\u6CE8\u89E3\u7684\u7528\u6CD5</h2><h3 id="_2-1-\u65B9\u5F0F\u4E00-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B" tabindex="-1"><a class="header-anchor" href="#_2-1-\u65B9\u5F0F\u4E00-\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B-configuration-\u7C7B" aria-hidden="true">#</a> 2.1 \u65B9\u5F0F\u4E00\uFF1A\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B\uFF08@Configuration \u7C7B\uFF09</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">SchedulingConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Documented</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableScheduling</span> <span class="token punctuation">{</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u770B\u5230EnableScheduling \u6CE8\u89E3\u76F4\u63A5\u5BFC\u5165\u914D\u7F6E\u7C7B SchedulingConfiguration\uFF0C\u8FD9\u4E2A\u7C7B\u6CE8\u89E3\u4E86@Configuration\uFF0C\u4E14\u6CE8\u518C\u4E86\u4E00\u4E2AscheduledAnnotationProcessor\u7684Bean\uFF0CSchedulingConfiguration\u7684\u6E90\u7801\u5982\u4E0B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token annotation punctuation">@Role</span><span class="token punctuation">(</span><span class="token class-name">BeanDefinition</span><span class="token punctuation">.</span>ROLE_INFRASTRUCTURE<span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SchedulingConfiguration</span> <span class="token punctuation">{</span>\n\n	<span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token class-name">TaskManagementConfigUtils</span><span class="token punctuation">.</span>SCHEDULED_ANNOTATION_PROCESSOR_BEAN_NAME<span class="token punctuation">)</span>\n	<span class="token annotation punctuation">@Role</span><span class="token punctuation">(</span><span class="token class-name">BeanDefinition</span><span class="token punctuation">.</span>ROLE_INFRASTRUCTURE<span class="token punctuation">)</span>\n	<span class="token keyword">public</span> <span class="token class-name">ScheduledAnnotationBeanPostProcessor</span> <span class="token function">scheduledAnnotationProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledAnnotationBeanPostProcessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-\u65B9\u5F0F2-\u4F9D\u636E\u6761\u4EF6\u9009\u62E9\u914D\u7F6E\u7C7B-\u5B9E\u73B0-importselector-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-2-\u65B9\u5F0F2-\u4F9D\u636E\u6761\u4EF6\u9009\u62E9\u914D\u7F6E\u7C7B-\u5B9E\u73B0-importselector-\u63A5\u53E3" aria-hidden="true">#</a> 2.2 \u65B9\u5F0F2\uFF1A\u4F9D\u636E\u6761\u4EF6\u9009\u62E9\u914D\u7F6E\u7C7B\uFF08\u5B9E\u73B0 ImportSelector \u63A5\u53E3\uFF09</h3><p>\u5982\u679C\u5E76\u4E0D\u786E\u5B9A\u5F15\u5165\u54EA\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u9700\u8981\u6839\u636E@Import\u6CE8\u89E3\u6240\u6807\u8BC6\u7684\u7C7B\u6216\u8005\u53E6\u4E00\u4E2A\u6CE8\u89E3\uFF08\u901A\u5E38\u662F\u6CE8\u89E3\uFF09\u91CC\u7684\u5B9A\u4E49\u4FE1\u606F\u9009\u62E9\u914D\u7F6E\u7C7B\u7684\u8BDD\uFF0C\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002</p><p>ImportSelector\u63A5\u53E3\u53EA\u6709\u4E00\u4E2A\u65B9\u6CD5</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>AnnotationMetadata\uFF1A\u7528\u6765\u83B7\u5F97\u5F53\u524D\u914D\u7F6E\u7C7B\u4E0A\u7684\u6CE8\u89E3</p><p>\u4F8B\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Documented</span>\n<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AsyncConfigurationSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAsync</span> <span class="token punctuation">{</span>\n\n	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">&gt;</span></span> <span class="token function">annotation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Annotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>\n	\n	<span class="token keyword">boolean</span> <span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n	<span class="token class-name">AdviceMode</span> <span class="token function">mode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">AdviceMode</span><span class="token punctuation">.</span>PROXY<span class="token punctuation">;</span>\n\n	<span class="token keyword">int</span> <span class="token function">order</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Ordered</span><span class="token punctuation">.</span>LOWEST_PRECEDENCE<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AsyncConfigurationSelector\u7EE7\u627FAdviceModeImportSelector\uFF0CAdviceModeImportSelector\u7C7B\u5B9E\u73B0ImportSelector\u63A5\u53E3 \u6839\u636EAdviceMode\u7684\u4E0D\u540C\u6765\u9009\u62E9\u751F\u660E\u4E0D\u540C\u7684Bean</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncConfigurationSelector</span> <span class="token keyword">extends</span> <span class="token class-name">AdviceModeImportSelector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">EnableAsync</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME <span class="token operator">=</span>\n			<span class="token string">&quot;org.springframework.scheduling.aspectj.AspectJAsyncConfiguration&quot;</span><span class="token punctuation">;</span>\n\n	<span class="token annotation punctuation">@Override</span>\n	<span class="token annotation punctuation">@Nullable</span>\n	<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AdviceMode</span> adviceMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		<span class="token keyword">switch</span> <span class="token punctuation">(</span>adviceMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			<span class="token keyword">case</span> PROXY<span class="token operator">:</span>\n				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token class-name">ProxyAsyncConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n			<span class="token keyword">case</span> ASPECTJ<span class="token operator">:</span>\n				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>ASYNC_EXECUTION_ASPECT_CONFIGURATION_CLASS_NAME<span class="token punctuation">}</span><span class="token punctuation">;</span>\n			<span class="token keyword">default</span><span class="token operator">:</span>\n				<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-\u65B9\u5F0F3-\u52A8\u6001\u6CE8\u518Cbean-\u5B9E\u73B0-importbeandefinitionregistrar-\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_2-3-\u65B9\u5F0F3-\u52A8\u6001\u6CE8\u518Cbean-\u5B9E\u73B0-importbeandefinitionregistrar-\u63A5\u53E3" aria-hidden="true">#</a> 2.3 \u65B9\u5F0F3\uFF1A\u52A8\u6001\u6CE8\u518CBean\uFF08\u5B9E\u73B0 ImportBeanDefinitionRegistrar \u63A5\u53E3\uFF09</h3><p>\u4E00\u822C\u53EA\u8981\u7528\u6237\u786E\u5207\u77E5\u9053\u54EA\u4E9BBean\u9700\u8981\u653E\u5165\u5BB9\u5668\u7684\u8BDD\uFF0C\u81EA\u5DF1\u53EF\u4EE5\u901A\u8FC7spring \u63D0\u4F9B\u7684\u6CE8\u89E3\u6765\u6807\u8BC6\u5C31\u53EF\u4EE5\u4E86\uFF0C\u6BD4\u5982@Component,@Service,@Repository,@Bean\u7B49\u3002 \u5982\u679C\u662F\u4E0D\u786E\u5B9A\u7684\u7C7B\uFF0C\u6216\u8005\u4E0D\u662Fspring\u4E13\u7528\u7684\uFF0C\u6240\u4EE5\u5E76\u4E0D\u60F3\u7528spring\u7684\u6CE8\u89E3\u8FDB\u884C\u4FB5\u5165\u5F0F\u6807\u8BC6\uFF0C\u90A3\u4E48\u5C31\u53EF\u4EE5\u901A\u8FC7@Import\u6CE8\u89E3\uFF0C\u5B9E\u73B0ImportBeanDefinitionRegistrar\u63A5\u53E3\u6765\u52A8\u6001\u6CE8\u518CBean\u3002 \u6BD4\u5982\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Documented</span>\n<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">AspectJAutoProxyRegistrar</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAspectJAutoProxy</span> <span class="token punctuation">{</span>\n\n	<span class="token keyword">boolean</span> <span class="token function">proxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n	\n	<span class="token keyword">boolean</span> <span class="token function">exposeProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AspectJAutoProxyRegistrar\u5B9E\u73B0\u4E86ImportBeanDefinitionRegistrar\u63A5\u53E3\uFF0CImportBeanDefinitionRegistrar\u7684\u4F5C\u7528\u662F\u5728\u8FD0\u884C\u65F6\u81EA\u52A8\u6DFB\u52A0Bean\u5230\u5DF2\u6709\u7684\u914D\u7F6E\u7C7B\uFF0C\u901A\u8FC7\u91CD\u5199\u65B9\u6CD5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span>\n			<span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AnnotationMetadata \u53C2\u6570\u7528\u6765\u83B7\u5F97\u5F53\u524D\u914D\u7F6E\u7C7B\u4E0A\u7684\u6CE8\u89E3</li><li>BeanDefinitionRegistry \u53C2\u6570\u7528\u6765\u6CE8\u518CBean</li></ul><p>\u6E90\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>\n<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">registerBeanDefinitions</span><span class="token punctuation">(</span>\n		<span class="token class-name">AnnotationMetadata</span> importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">BeanDefinitionRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n	<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">registerAspectJAnnotationAutoProxyCreatorIfNecessary</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n	<span class="token class-name">AnnotationAttributes</span> enableAspectJAutoProxy <span class="token operator">=</span>\n			<span class="token class-name">AnnotationConfigUtils</span><span class="token punctuation">.</span><span class="token function">attributesFor</span><span class="token punctuation">(</span>importingClassMetadata<span class="token punctuation">,</span> <span class="token class-name">EnableAspectJAutoProxy</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n	<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n		<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;proxyTargetClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToUseClassProxying</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n		<span class="token keyword">if</span> <span class="token punctuation">(</span>enableAspectJAutoProxy<span class="token punctuation">.</span><span class="token function">getBoolean</span><span class="token punctuation">(</span><span class="token string">&quot;exposeProxy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n			<span class="token class-name">AopConfigUtils</span><span class="token punctuation">.</span><span class="token function">forceAutoProxyCreatorToExposeProxy</span><span class="token punctuation">(</span>registry<span class="token punctuation">)</span><span class="token punctuation">;</span>\n		<span class="token punctuation">}</span>\n	<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 30);
const _hoisted_31 = {
  href: "https://juejin.im/post/5c761c096fb9a049b41d2299",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_32 = /* @__PURE__ */ createTextVNode("Spring Boot \u81EA\u52A8\u914D\u7F6E\u4E4B@Enable* \u4E0E@Import\u6CE8\u89E3");
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_31, [
        _hoisted_32,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var SpringBoot______Enable__Import___html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "SpringBoot\u81EA\u52A8\u914D\u7F6E\u4E4B@Enable\u4E0E@Import\u6CE8\u89E3.html.vue"]]);
export { SpringBoot______Enable__Import___html as default };
