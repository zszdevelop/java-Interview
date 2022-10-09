import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,b as t,e,d as s,r as l}from"./app.b9c1d23f.js";const u={},i=e(`<h1 id="spring-data-mongodb\u7684query\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#spring-data-mongodb\u7684query\u67E5\u8BE2" aria-hidden="true">#</a> spring-data-mongodb\u7684Query\u67E5\u8BE2</h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a> 1. \u7B80\u4ECB</h2><p>spring-data-mongodb \u7684\u67E5\u8BE2\u65B9\u6CD5\u5B9A\u4E49\u7684\u4E24\u79CD\u65B9\u5F0F</p><ol><li>\u6839\u636E\u65B9\u6CD5\u540D\u6765\u81EA\u52A8\u63A8\u6D4B</li><li>\u81EA\u5B9A\u4E49\u67E5\u8BE2\uFF08\u590D\u6742\u573A\u666F\uFF09</li></ol><h2 id="_2-query\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-query\u6CE8\u89E3" aria-hidden="true">#</a> 2. @Query\u6CE8\u89E3</h2><h3 id="_2-1-\u57FA\u7840\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#_2-1-\u57FA\u7840\u67E5\u8BE2" aria-hidden="true">#</a> 2.1 \u57FA\u7840\u67E5\u8BE2</h3><p>Mongodb\u4F7F\u7528\u7684\u662F\u57FA\u4E8Ejson\u7684\u67E5\u8BE2\u8BED\u53E5\u3002</p><p>\u901A\u8FC7\u5C06org.springframework.data.mongodb.repository.Query\u6279\u6CE8\u6DFB\u52A0\u5230\u5B58\u50A8\u5E93\u67E5\u8BE2\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u6307\u5B9A\u8981\u4F7F\u7528\u7684MongoDB JSON\u67E5\u8BE2\u5B57\u7B26\u4E32\uFF0C\u800C\u4E0D\u662F\u4ECE\u65B9\u6CD5\u540D\u79F0\u6D3E\u751F\u67E5\u8BE2\uFF0C\u5982\u4EE5\u4E0B\u793A\u4F8B\u6240\u793A\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> PersonRepository extends MongoRepository<span class="token operator">&lt;</span>Person<span class="token punctuation">,</span> String<span class="token operator">&gt;</span>

  <span class="token annotation builtin">@Query</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;{ &#39;firstname&#39; : ?0 }&quot;</span></span><span class="token punctuation">)</span>
  List<span class="token operator">&lt;</span>Person<span class="token operator">&gt;</span> <span class="token function">findByThePersonsFirstname</span><span class="token punctuation">(</span>String firstname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5360\u4F4D\u7B26 ?0 \u662F\u51FD\u6570\u7684\u53C2\u6570\u3002</strong></p><blockquote><p>\u6CE8\u610F\uFF1A String\u7C7B\u578B\u7684\u53C2\u6570\u5728\u7ED1\u5B9A\u8FC7\u7A0B\u4E2D\u4F1A\u8FDB\u884C\u8F6C\u4E49\uFF0C \u8FD9\u610F\u5473\u7740\u4E0D\u80FD\u4E3A\u4E4B\u6DFB\u52A0\u7279\u6B8A\u7684\u53C2\u6570\u3002</p></blockquote><h3 id="_2-2-\u8BBE\u7F6E\u8FD4\u56DE\u7684\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8BBE\u7F6E\u8FD4\u56DE\u7684\u5B57\u6BB5" aria-hidden="true">#</a> 2.2 \u8BBE\u7F6E\u8FD4\u56DE\u7684\u5B57\u6BB5</h3><p>\u4F7F\u7528fields\u6765\u8BBE\u7F6E\u8FD4\u56DE\u7684\u5B57\u6BB5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot;{ &#39;firstname&#39; : ?0 }&quot;</span><span class="token punctuation">,</span> fields<span class="token operator">=</span><span class="token string">&quot;{ &#39;firstname&#39; : 1, &#39;lastname&#39; : 1}&quot;</span><span class="token punctuation">)</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByThePersonsFirstname</span><span class="token punctuation">(</span><span class="token class-name">String</span> firstname<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u4F8B\u4E2D\u7ED3\u679CPerson\u5BF9\u8C61\u4E2D\u53EA\u4F1A\u6709firstname\u3001lastname \u548Cid \u5C5E\u6027 \uFF0C \u5176\u4ED6\u5C5E\u6027\u6CA1\u6709 \u3002</p><h3 id="_2-3-spel\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-3-spel\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 2.3 SpEL\u8868\u8FBE\u5F0F</h3><p>\u5728\u57FA\u4E8Ejson\u7684\u67E5\u8BE2\u4E2D\u4F7F\u7528SpEL\u8868\u8FBE\u5F0F</p><p>\u67E5\u8BE2\u4E32\u548Cfield\u8FD4\u56DE\u5B9A\u4E49\u53EF\u4EE5\u4F7F\u7528SpEL\u8868\u8FBE\u5F0F \u5728\u8FD0\u884C\u65F6\u8FDB\u884C\u52A8\u6001\u521B\u5EFA \u3002 \u8868\u8FBE\u5F0F\u901A\u8FC7\u5305\u542B\u6240\u6709\u53C2\u6570\u7684\u6570\u7EC4\u516C\u5F00\u65B9\u6CD5\u53C2\u6570\u3002 \u4EE5\u4E0B\u67E5\u8BE2\u4F7F\u7528[0]\u58F0\u660Elastname\u7684\u8C13\u8BCD\u503C\uFF08\u76F8\u5F53\u4E8E?0\u53C2\u6570\u7ED1\u5B9A\uFF09\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PersonRepository</span> <span class="token keyword">extends</span> <span class="token class-name">MongoRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span>

  <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span><span class="token string">&quot;{&#39;lastname&#39;: ?#{[0]} }&quot;</span><span class="token punctuation">)</span>
  <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">&gt;</span></span> <span class="token function">findByQueryWithExpression</span><span class="token punctuation">(</span><span class="token class-name">String</span> param0<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-\u53C2\u6570\u4E3A\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#_2-4-\u53C2\u6570\u4E3A\u5BF9\u8C61" aria-hidden="true">#</a> 2.4 \u53C2\u6570\u4E3A\u5BF9\u8C61</h3><p>\u5F53\u4F20\u5165\u53C2\u6570\u4E3A\u5BF9\u8C61\u65F6\uFF0C \u5B9E\u4F8B\uFF1A</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    @<span class="token function">Query</span><span class="token punctuation">(</span><span class="token keyword">value</span><span class="token operator">=</span><span class="token string">&quot;{&#39;name&#39;: ?#{ [0].name }}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">Page<span class="token punctuation">&lt;</span>RcControllJournalDo<span class="token punctuation">&gt;</span></span> <span class="token function">querylikepages</span><span class="token punctuation">(</span><span class="token class-name">RcControllJournalDo</span> mdo<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,22),r=s("\u4E0A\u4F8B\u7B49\u4EF7\u4E8E where name = "),k={href:"http://mdo.name",target:"_blank",rel:"noopener noreferrer"},d=s("mdo.name"),m=s(" ."),g=e(`<h3 id="_2-5-\u4E09\u76EE\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-5-\u4E09\u76EE\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> 2.5 \u4E09\u76EE\u8868\u8FBE\u5F0F</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * \u5F53mdo.name\u4E3A\u7A7A\u65F6\uFF0C \u67E5\u8BE2\u6761\u4EF6\u4E3A  <span class="token punctuation">{</span> &quot;name&quot; : <span class="token punctuation">{</span> &quot;$exists&quot; : true <span class="token punctuation">}</span> <span class="token punctuation">}</span> \uFF0C\u5373\u67E5\u8BE2\u6240\u6709name\u5217\u5B58\u5728\u7684\u8BB0\u5F55\uFF08\u5305\u62EC\u503C\u4E3Anull\u7684\u8BB0\u5F55\uFF0C\u4F46\u662F\u5BF9\u4E8E\u6CA1\u6709name\u5217\u7684\u67E5\u8BE2\u4E0D\u5230\uFF09 \uFF1B
     * \u5F53mdo.name\u4E0D\u7A7A\u65F6\uFF0C\u67E5\u8BE2\u6761\u4EF6\u4E3A   <span class="token punctuation">{</span> &quot;name&quot; : [0].name <span class="token punctuation">}</span>
     */</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot; { &#39;name&#39;: ?#{ ([0].name == null) or ([0].name.length() == 0)  ? &#39;{$exists:true}&#39; : [0].name } } &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RcControllJournalDo</span><span class="token punctuation">&gt;</span></span> <span class="token function">querylikepages2</span><span class="token punctuation">(</span><span class="token class-name">RcControllJournalDo</span> mdo<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>#{ ([0].name == null) or ([0].name.length() == 0) ? &#39;{$exists:true}&#39; : [0].name }</code> \u4E3ASpEL\u8868\u8FBE\u5F0F \uFF08\u4E09\u76EE\u8868\u8FBE\u5F0F\uFF09\u3002</p><h3 id="_2-6-\u6A21\u7CCA\u67E5\u8BE2\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#_2-6-\u6A21\u7CCA\u67E5\u8BE2\u4F8B\u5B50" aria-hidden="true">#</a> 2.6 \u6A21\u7CCA\u67E5\u8BE2\u4F8B\u5B50\uFF1A</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code>    <span class="token comment">/**
     * \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u6A21\u7CCA\u67E5\u8BE2 
     */</span>
    <span class="token annotation builtin">@Query</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string-literal singleline"><span class="token string">&quot; { &#39;idno&#39;: ?#{ ([0].name == null) or ([0].name.length() == 0)  ? {</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">exists</span></span><span class="token string">:true} : {</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">regex</span></span><span class="token string">: [0].name } } } &quot;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> Page<span class="token operator">&lt;</span>RcControllJournalDo<span class="token operator">&gt;</span> <span class="token function">querylikepages21</span><span class="token punctuation">(</span>RcControllJournalDo mdo<span class="token punctuation">,</span> Pageable pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>mongodb\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u67E5\u8BE2\u8BED\u6CD5\u4E3A\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">&gt;db.posts.find(</span><span class="token punctuation">{</span><span class="token selector">post_text:</span><span class="token punctuation">{</span>$<span class="token property">regex</span><span class="token punctuation">:</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">)
&gt;db.posts.find(</span><span class="token punctuation">{</span><span class="token selector">post_text:</span><span class="token punctuation">{</span>$<span class="token property">regex</span><span class="token punctuation">:</span><span class="token string">&quot;runoob&quot;</span><span class="token punctuation">,</span>$<span class="token property">options</span><span class="token punctuation">:</span><span class="token string">&quot;$i&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F8B\u5B50\uFF1A \u6839\u636E\u524D\u7AEF\u4E0A\u9001\u7684\u67E5\u8BE2\u6761\u4EF6\u6A21\u7CCA\u5339\u914Dname \u548Cidno \uFF0C \u5F53\u6709\u503C\u65F6\u67E5\u8BE2\u4E4B\uFF0C\u65E0\u5219\u67E5\u8BE2\u6240\u6709\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token doc-comment comment">/**
     * \u6A21\u7CCA\u67E5\u8BE2name \u548C idno  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     * 1. mongodb or\u8BED\u6CD5  \uFF1A<span class="token punctuation">{</span> $or :[<span class="token punctuation">{</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span><span class="token punctuation">}</span>,...] <span class="token punctuation">}</span>  \u4F8B\u5B50\uFF1A <span class="token punctuation">{</span>$or:[<span class="token punctuation">{</span>&quot;by&quot;:&quot;aaa&quot;<span class="token punctuation">}</span> , <span class="token punctuation">{</span>&quot;title&quot;: &quot;bbb&quot;<span class="token punctuation">}</span>]<span class="token punctuation">}</span>  \uFF0C \u5373 where by=aaa or title=bbb <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BR</span><span class="token punctuation">&gt;</span></span>
     * 2. <span class="token punctuation">{</span> $or :[<span class="token punctuation">{</span>&#39;name&#39; : ?#<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>, <span class="token punctuation">{</span>&#39;idno&#39; : ?#<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span>] <span class="token punctuation">}</span>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
     * 
     */</span>
    <span class="token annotation punctuation">@Query</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">&quot; { $or :[{&#39;name&#39; : ?#{ ([0].name == null) or ([0].name.length() == 0)  ? &#39;{$exists:true}&#39; :  {$regex:[0].name} }},&quot;</span>
            <span class="token operator">+</span> <span class="token string">&quot; {&#39;idno&#39; : ?#{ ([0].idno == null) or ([0].idno.length() == 0)  ? &#39;{$exists:true}&#39; : {$regex: [0].idno} }}] } &quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RcControllJournalDo</span><span class="token punctuation">&gt;</span></span> <span class="token function">querylikepages3</span><span class="token punctuation">(</span><span class="token class-name">RcControllJournalDo</span> mdo<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u5165\u53C2\u6570\uFF1A mdo.setName(&quot;\u5B8B&quot;); mdo.setIdno(&quot;112&quot;); \u6253\u5370\u7684\u65E5\u5FD7\u4E3A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find using query: { &quot;$or&quot; : [{ &quot;name&quot; : { &quot;$regex&quot; : &quot;\u5B8B&quot; } }, { &quot;idno&quot; : { &quot;$regex&quot; : &quot;112&quot; } }] }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-\u81EA\u5B9A\u4E49\u67E5\u8BE2-\u590D\u6742\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u5B9A\u4E49\u67E5\u8BE2-\u590D\u6742\u573A\u666F" aria-hidden="true">#</a> 3. \u81EA\u5B9A\u4E49\u67E5\u8BE2\uFF08\u590D\u6742\u573A\u666F\uFF09</h2><ol><li>\u521B\u5EFA\u63A5\u53E3</li><li>\u521B\u5EFA\u5B9E\u73B0\u7C7B \uFF08\u547D\u540D\u4E0E\u63A5\u53E3\u540D\u4E00\u81F4\uFF0C\u4E14\u4EE5Impl\u7ED3\u5C3E\uFF09</li><li>\u5728\u5B9E\u73B0\u7C7B\u4E2D\u5B9E\u73B0\u65B9\u6CD5\uFF0C \u53EF\u4EE5\u4F7F\u7528MongoTemplate \u6216 \u5176\u4ED6\u6570\u636E\u6E90\u7684\u6A21\u677F</li><li>\u76F4\u63A5\u4F7F\u7528repo\u8C03\u7528\u5373\u53EF\u3002</li></ol><p>\u4E0B\u9762\u7740\u91CD\u4ECB\u7ECD\u4F7F\u7528Query \u3001Criteria \u6765\u521B\u5EFA\u67E5\u8BE2\u6761\u4EF6 \u5E76\u4F7F\u7528\u5206\u9875\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RcControllJournalDo</span><span class="token punctuation">&gt;</span></span> <span class="token function">selectSearchNameIdno</span><span class="token punctuation">(</span><span class="token class-name">RcControllJournalDo</span> mdo<span class="token punctuation">,</span> <span class="token class-name">Pageable</span> pageable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        
        <span class="token class-name">Query</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F00\u59CB\u641C\u98CE\u63A7\u6D41\u6C34\uFF0C\u4F7F\u7528\u59D3\u540D\u548C\u8EAB\u4EFD\u8BC1\u53F7\u6A21\u7CCA\u5339\u914D\uFF1A&quot;</span> <span class="token operator">+</span> mdo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>mdo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>mdo<span class="token punctuation">.</span><span class="token function">getIdno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            query<span class="token punctuation">.</span><span class="token function">addCriteria</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Criteria</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">orOperator</span><span class="token punctuation">(</span><span class="token class-name">Criteria</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">regex</span><span class="token punctuation">(</span>mdo<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
                    <span class="token class-name">Criteria</span><span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&quot;idno&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">regex</span><span class="token punctuation">(</span>mdo<span class="token punctuation">.</span><span class="token function">getIdno</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
        <span class="token comment">// \u5206\u9875 \u548C \u6392\u5E8F </span>
        query<span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        query<span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Sort</span><span class="token punctuation">(</span><span class="token class-name">Direction</span><span class="token punctuation">.</span><span class="token constant">DESC</span><span class="token punctuation">,</span> <span class="token string">&quot;dateTm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">long</span> totoal <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mongoTemplate<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>query<span class="token punctuation">,</span> <span class="token class-name">RcControllJournalDo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u7EDF\u8BA1\u603B\u6761\u6570 :&quot;</span> <span class="token operator">+</span> totoal<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u5206\u9875\u53C2\u6570\uFF1A&quot;</span> <span class="token operator">+</span> pageable<span class="token punctuation">.</span><span class="token function">getPageNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;;&quot;</span> <span class="token operator">+</span> pageable<span class="token punctuation">.</span><span class="token function">getPageSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RcControllJournalDo</span><span class="token punctuation">&gt;</span></span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mongoTemplate<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>query <span class="token punctuation">,</span> <span class="token class-name">RcControllJournalDo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&quot;\u67E5\u8BE2\u7ED3\u675F\uFF1A&quot;</span> <span class="token operator">+</span> res<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PageImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">RcControllJournalDo</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> pageable<span class="token punctuation">,</span> totoal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F3A\u70B9\u662F\uFF0C \u603B\u6761\u6570\u9700\u8981\u4E3B\u52A8\u67E5\u8BE2 \u3002 query\u5185\u90E8\u4F1A\u6839\u636E\u4E0A\u9001\u7684\u5206\u9875\u6761\u4EF6\uFF0C\u7EFC\u5408\u4F7F\u7528skip \u3001limit \u6765\u5B9E\u73B0\u5206\u9875\u6548\u679C\u3002</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,17),v={href:"https://www.jianshu.com/p/24a44c4c7651",target:"_blank",rel:"noopener noreferrer"},b=s("spring data mongodb Query \u53CA\u5206\u9875");function h(q,f){const a=l("ExternalLinkIcon");return o(),c("div",null,[i,n("p",null,[r,n("a",k,[d,t(a)]),m]),g,n("p",null,[n("a",v,[b,t(a)])])])}const _=p(u,[["render",h],["__file","mongodb-action-query.html.vue"]]);export{_ as default};
