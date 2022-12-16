import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.feaa9477.js";const t={},p=e(`<h1 id="redis\u9762\u8BD5-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#redis\u9762\u8BD5-\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> Redis\u9762\u8BD5 - \u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784</h1><h2 id="_1-redis-\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_1-redis-\u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> 1 Redis \u6709\u54EA\u4E9B\u6570\u636E\u7C7B\u578B\uFF1F</h2><ul><li><strong>5\u79CD\u57FA\u7840\u6570\u636E\u7C7B\u578B</strong>\uFF0C\u5206\u522B\u662F\uFF1AString\u3001List\u3001Set\u3001Zset\u3001Hash\u3002</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628220310533.png" alt="image-20220628220310533" loading="lazy"></p><table><thead><tr><th>\u7ED3\u6784\u7C7B\u578B</th><th>\u7ED3\u6784\u5B58\u50A8\u7684\u503C</th><th>\u7ED3\u6784\u7684\u8BFB\u5199\u80FD\u529B</th></tr></thead><tbody><tr><td><strong>String\u5B57\u7B26\u4E32</strong></td><td>\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u3001\u6574\u6570\u6216\u6D6E\u70B9\u6570</td><td>\u5BF9\u6574\u4E2A\u5B57\u7B26\u4E32\u6216\u5B57\u7B26\u4E32\u7684\u4E00\u90E8\u5206\u8FDB\u884C\u64CD\u4F5C\uFF1B\u5BF9\u6574\u6570\u6216\u6D6E\u70B9\u6570\u8FDB\u884C\u81EA\u589E\u6216\u81EA\u51CF\u64CD\u4F5C\uFF1B</td></tr><tr><td><strong>List\u5217\u8868</strong></td><td>\u4E00\u4E2A\u94FE\u8868\uFF0C\u94FE\u8868\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u5305\u542B\u4E00\u4E2A\u5B57\u7B26\u4E32</td><td>\u5BF9\u94FE\u8868\u7684\u4E24\u7AEF\u8FDB\u884Cpush\u548Cpop\u64CD\u4F5C\uFF0C\u8BFB\u53D6\u5355\u4E2A\u6216\u591A\u4E2A\u5143\u7D20\uFF1B\u6839\u636E\u503C\u67E5\u627E\u6216\u5220\u9664\u5143\u7D20\uFF1B</td></tr><tr><td><strong>Set\u96C6\u5408</strong></td><td>\u5305\u542B\u5B57\u7B26\u4E32\u7684\u65E0\u5E8F\u96C6\u5408</td><td>\u5B57\u7B26\u4E32\u7684\u96C6\u5408\uFF0C\u5305\u542B\u57FA\u7840\u7684\u65B9\u6CD5\u6709\u770B\u662F\u5426\u5B58\u5728\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\uFF1B\u8FD8\u5305\u542B\u8BA1\u7B97\u4EA4\u96C6\u3001\u5E76\u96C6\u3001\u5DEE\u96C6\u7B49</td></tr><tr><td><strong>Hash\u6563\u5217</strong></td><td>\u5305\u542B\u952E\u503C\u5BF9\u7684\u65E0\u5E8F\u6563\u5217\u8868</td><td>\u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20</td></tr><tr><td><strong>Zset\u6709\u5E8F\u96C6\u5408</strong></td><td>\u548C\u6563\u5217\u4E00\u6837\uFF0C\u7528\u4E8E\u5B58\u50A8\u952E\u503C\u5BF9</td><td>\u5B57\u7B26\u4E32\u6210\u5458\u4E0E\u6D6E\u70B9\u6570\u5206\u6570\u4E4B\u95F4\u7684\u6709\u5E8F\u6620\u5C04\uFF1B\u5143\u7D20\u7684\u6392\u5217\u987A\u5E8F\u7531\u5206\u6570\u7684\u5927\u5C0F\u51B3\u5B9A\uFF1B\u5305\u542B\u65B9\u6CD5\u6709\u6DFB\u52A0\u3001\u83B7\u53D6\u3001\u5220\u9664\u5355\u4E2A\u5143\u7D20\u4EE5\u53CA\u6839\u636E\u5206\u503C\u8303\u56F4\u6216\u6210\u5458\u6765\u83B7\u53D6\u5143\u7D20</td></tr></tbody></table><ul><li><strong>\u4E09\u79CD\u7279\u6B8A\u7684\u6570\u636E\u7C7B\u578B</strong> \u5206\u522B\u662F HyperLogLogs\uFF08\u57FA\u6570\u7EDF\u8BA1\uFF09\uFF0C Bitmaps (\u4F4D\u56FE) \u548C geospatial \uFF08\u5730\u7406\u4F4D\u7F6E)</li></ul><h2 id="_2-\u8C08\u8C08redis-\u7684\u5BF9\u8C61\u673A\u5236-redisobject" tabindex="-1"><a class="header-anchor" href="#_2-\u8C08\u8C08redis-\u7684\u5BF9\u8C61\u673A\u5236-redisobject" aria-hidden="true">#</a> 2 \u8C08\u8C08Redis \u7684\u5BF9\u8C61\u673A\u5236\uFF08redisObject)\uFF1F</h2><p>\u6BD4\u5982\u8BF4\uFF0C \u96C6\u5408\u7C7B\u578B\u5C31\u53EF\u4EE5\u7531\u5B57\u5178\u548C\u6574\u6570\u96C6\u5408\u4E24\u79CD\u4E0D\u540C\u7684\u6570\u636E\u7ED3\u6784\u5B9E\u73B0\uFF0C \u4F46\u662F\uFF0C \u5F53\u7528\u6237\u6267\u884C ZADD \u547D\u4EE4\u65F6\uFF0C \u4ED6/\u5979\u5E94\u8BE5\u4E0D\u5FC5\u5173\u5FC3\u96C6\u5408\u4F7F\u7528\u7684\u662F\u4EC0\u4E48\u7F16\u7801\uFF0C \u53EA\u8981 Redis \u80FD\u6309\u7167 ZADD \u547D\u4EE4\u7684\u6307\u793A\uFF0C \u5C06\u65B0\u5143\u7D20\u6DFB\u52A0\u5230\u96C6\u5408\u5C31\u53EF\u4EE5\u4E86\u3002</p><p>\u8FD9\u8BF4\u660E, <strong>\u64CD\u4F5C\u6570\u636E\u7C7B\u578B\u7684\u547D\u4EE4\u9664\u4E86\u8981\u5BF9\u952E\u7684\u7C7B\u578B\u8FDB\u884C\u68C0\u67E5\u4E4B\u5916, \u8FD8\u9700\u8981\u6839\u636E\u6570\u636E\u7C7B\u578B\u7684\u4E0D\u540C\u7F16\u7801\u8FDB\u884C\u591A\u6001\u5904\u7406</strong>.</p><p>\u4E3A\u4E86\u89E3\u51B3\u4EE5\u4E0A\u95EE\u9898, <strong>Redis \u6784\u5EFA\u4E86\u81EA\u5DF1\u7684\u7C7B\u578B\u7CFB\u7EDF</strong>, \u8FD9\u4E2A\u7CFB\u7EDF\u7684\u4E3B\u8981\u529F\u80FD\u5305\u62EC:</p><ul><li>redisObject \u5BF9\u8C61.</li><li>\u57FA\u4E8E redisObject \u5BF9\u8C61\u7684\u7C7B\u578B\u68C0\u67E5.</li><li>\u57FA\u4E8E redisObject \u5BF9\u8C61\u7684\u663E\u5F0F\u591A\u6001\u51FD\u6570.</li><li>\u5BF9 redisObject \u8FDB\u884C\u5206\u914D\u3001\u5171\u4EAB\u548C\u9500\u6BC1\u7684\u673A\u5236.</li></ul><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/*
 * Redis \u5BF9\u8C61
 */</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisObject</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u7C7B\u578B</span>
    <span class="token keyword">unsigned</span> type<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">// \u7F16\u7801\u65B9\u5F0F</span>
    <span class="token keyword">unsigned</span> encoding<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">// LRU - 24\u4F4D, \u8BB0\u5F55\u6700\u672B\u4E00\u6B21\u8BBF\u95EE\u65F6\u95F4\uFF08\u76F8\u5BF9\u4E8Elru_clock\uFF09; \u6216\u8005 LFU\uFF08\u6700\u5C11\u4F7F\u7528\u7684\u6570\u636E\uFF1A8\u4F4D\u9891\u7387\uFF0C16\u4F4D\u8BBF\u95EE\u65F6\u95F4\uFF09</span>
    <span class="token keyword">unsigned</span> lru<span class="token operator">:</span>LRU_BITS<span class="token punctuation">;</span> <span class="token comment">// LRU_BITS: 24</span>

    <span class="token comment">// \u5F15\u7528\u8BA1\u6570</span>
    <span class="token keyword">int</span> refcount<span class="token punctuation">;</span>

    <span class="token comment">// \u6307\u5411\u5E95\u5C42\u6570\u636E\u7ED3\u6784\u5B9E\u4F8B</span>
    <span class="token keyword">void</span> <span class="token operator">*</span>ptr<span class="token punctuation">;</span>

<span class="token punctuation">}</span> robj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u56FE\u5BF9\u5E94\u4E0A\u9762\u7684\u7ED3\u6784</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628220842046.png" alt="image-20220628220842046" loading="lazy"></p><h2 id="_3-redis-\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-redis-\u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> 3 Redis \u6570\u636E\u7C7B\u578B\u6709\u54EA\u4E9B\u5E95\u5C42\u6570\u636E\u7ED3\u6784\uFF1F</h2><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628220915518.png" alt="image-20220628220915518" loading="lazy"></p><ul><li>\u7B80\u5355\u52A8\u6001\u5B57\u7B26\u4E32 - sds</li><li>\u538B\u7F29\u5217\u8868 - ZipList</li><li>\u5FEB\u8868 - QuickList</li><li>\u5B57\u5178/\u54C8\u5E0C\u8868 - Dict</li><li>\u6574\u6570\u96C6 - IntSet</li><li>\u8DF3\u8868 - ZSkipList</li></ul><h2 id="_4-\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds" tabindex="-1"><a class="header-anchor" href="#_4-\u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds" aria-hidden="true">#</a> 4 \u4E3A\u4EC0\u4E48\u8981\u8BBE\u8BA1sds\uFF1F</h2><ul><li><strong>\u5E38\u6570\u590D\u6742\u5EA6\u83B7\u53D6\u5B57\u7B26\u4E32\u957F\u5EA6</strong></li></ul><p>\u7531\u4E8E len \u5C5E\u6027\u7684\u5B58\u5728\uFF0C\u6211\u4EEC\u83B7\u53D6 SDS \u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u53EA\u9700\u8981\u8BFB\u53D6 len \u5C5E\u6027\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(1)\u3002\u800C\u5BF9\u4E8E C \u8BED\u8A00\uFF0C\u83B7\u53D6\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u901A\u5E38\u662F\u7ECF\u8FC7\u904D\u5386\u8BA1\u6570\u6765\u5B9E\u73B0\u7684\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n)\u3002\u901A\u8FC7 <code>strlen key</code> \u547D\u4EE4\u53EF\u4EE5\u83B7\u53D6 key \u7684\u5B57\u7B26\u4E32\u957F\u5EA6\u3002</p><ul><li><strong>\u675C\u7EDD\u7F13\u51B2\u533A\u6EA2\u51FA</strong></li></ul><p>\u6211\u4EEC\u77E5\u9053\u5728 C \u8BED\u8A00\u4E2D\u4F7F\u7528 <code>strcat</code> \u51FD\u6570\u6765\u8FDB\u884C\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u62FC\u63A5\uFF0C\u4E00\u65E6\u6CA1\u6709\u5206\u914D\u8DB3\u591F\u957F\u5EA6\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u5C31\u4F1A\u9020\u6210\u7F13\u51B2\u533A\u6EA2\u51FA\u3002\u800C\u5BF9\u4E8E SDS \u6570\u636E\u7C7B\u578B\uFF0C\u5728\u8FDB\u884C\u5B57\u7B26\u4FEE\u6539\u7684\u65F6\u5019\uFF0C<strong>\u4F1A\u9996\u5148\u6839\u636E\u8BB0\u5F55\u7684 len \u5C5E\u6027\u68C0\u67E5\u5185\u5B58\u7A7A\u95F4\u662F\u5426\u6EE1\u8DB3\u9700\u6C42</strong>\uFF0C\u5982\u679C\u4E0D\u6EE1\u8DB3\uFF0C\u4F1A\u8FDB\u884C\u76F8\u5E94\u7684\u7A7A\u95F4\u6269\u5C55\uFF0C\u7136\u540E\u5728\u8FDB\u884C\u4FEE\u6539\u64CD\u4F5C\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u51FA\u73B0\u7F13\u51B2\u533A\u6EA2\u51FA\u3002</p><ul><li><strong>\u51CF\u5C11\u4FEE\u6539\u5B57\u7B26\u4E32\u7684\u5185\u5B58\u91CD\u65B0\u5206\u914D\u6B21\u6570</strong></li></ul><p>C\u8BED\u8A00\u7531\u4E8E\u4E0D\u8BB0\u5F55\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u6240\u4EE5\u5982\u679C\u8981\u4FEE\u6539\u5B57\u7B26\u4E32\uFF0C\u5FC5\u987B\u8981\u91CD\u65B0\u5206\u914D\u5185\u5B58\uFF08\u5148\u91CA\u653E\u518D\u7533\u8BF7\uFF09\uFF0C\u56E0\u4E3A\u5982\u679C\u6CA1\u6709\u91CD\u65B0\u5206\u914D\uFF0C\u5B57\u7B26\u4E32\u957F\u5EA6\u589E\u5927\u65F6\u4F1A\u9020\u6210\u5185\u5B58\u7F13\u51B2\u533A\u6EA2\u51FA\uFF0C\u5B57\u7B26\u4E32\u957F\u5EA6\u51CF\u5C0F\u65F6\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u9732\u3002</p><p>\u800C\u5BF9\u4E8ESDS\uFF0C\u7531\u4E8E<code>len</code>\u5C5E\u6027\u548C<code>alloc</code>\u5C5E\u6027\u7684\u5B58\u5728\uFF0C\u5BF9\u4E8E\u4FEE\u6539\u5B57\u7B26\u4E32SDS\u5B9E\u73B0\u4E86<strong>\u7A7A\u95F4\u9884\u5206\u914D</strong>\u548C<strong>\u60F0\u6027\u7A7A\u95F4\u91CA\u653E</strong>\u4E24\u79CD\u7B56\u7565\uFF1A</p><ol><li><strong>\u7A7A\u95F4\u9884\u5206\u914D</strong>\uFF1A\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u7A7A\u95F4\u6269\u5C55\u7684\u65F6\u5019\uFF0C\u6269\u5C55\u7684\u5185\u5B58\u6BD4\u5B9E\u9645\u9700\u8981\u7684\u591A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u51CF\u5C11\u8FDE\u7EED\u6267\u884C\u5B57\u7B26\u4E32\u589E\u957F\u64CD\u4F5C\u6240\u9700\u7684\u5185\u5B58\u91CD\u5206\u914D\u6B21\u6570\u3002</li><li><strong>\u60F0\u6027\u7A7A\u95F4\u91CA\u653E</strong>\uFF1A\u5BF9\u5B57\u7B26\u4E32\u8FDB\u884C\u7F29\u77ED\u64CD\u4F5C\u65F6\uFF0C\u7A0B\u5E8F\u4E0D\u7ACB\u5373\u4F7F\u7528\u5185\u5B58\u91CD\u65B0\u5206\u914D\u6765\u56DE\u6536\u7F29\u77ED\u540E\u591A\u4F59\u7684\u5B57\u8282\uFF0C\u800C\u662F\u4F7F\u7528 <code>alloc</code> \u5C5E\u6027\u5C06\u8FD9\u4E9B\u5B57\u8282\u7684\u6570\u91CF\u8BB0\u5F55\u4E0B\u6765\uFF0C\u7B49\u5F85\u540E\u7EED\u4F7F\u7528\u3002\uFF08\u5F53\u7136SDS\u4E5F\u63D0\u4F9B\u4E86\u76F8\u5E94\u7684API\uFF0C\u5F53\u6211\u4EEC\u6709\u9700\u8981\u65F6\uFF0C\u4E5F\u53EF\u4EE5\u624B\u52A8\u91CA\u653E\u8FD9\u4E9B\u672A\u4F7F\u7528\u7684\u7A7A\u95F4\u3002\uFF09</li></ol><ul><li><strong>\u4E8C\u8FDB\u5236\u5B89\u5168</strong></li></ul><p>\u56E0\u4E3AC\u5B57\u7B26\u4E32\u4EE5\u7A7A\u5B57\u7B26\u4F5C\u4E3A\u5B57\u7B26\u4E32\u7ED3\u675F\u7684\u6807\u8BC6\uFF0C\u800C\u5BF9\u4E8E\u4E00\u4E9B\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF08\u5982\u56FE\u7247\u7B49\uFF09\uFF0C\u5185\u5BB9\u53EF\u80FD\u5305\u62EC\u7A7A\u5B57\u7B26\u4E32\uFF0C\u56E0\u6B64C\u5B57\u7B26\u4E32\u65E0\u6CD5\u6B63\u786E\u5B58\u53D6\uFF1B\u800C\u6240\u6709 SDS \u7684API \u90FD\u662F\u4EE5\u5904\u7406\u4E8C\u8FDB\u5236\u7684\u65B9\u5F0F\u6765\u5904\u7406 <code>buf</code> \u91CC\u9762\u7684\u5143\u7D20\uFF0C\u5E76\u4E14 SDS \u4E0D\u662F\u4EE5\u7A7A\u5B57\u7B26\u4E32\u6765\u5224\u65AD\u662F\u5426\u7ED3\u675F\uFF0C\u800C\u662F\u4EE5 len \u5C5E\u6027\u8868\u793A\u7684\u957F\u5EA6\u6765\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u7ED3\u675F\u3002</p><ul><li><strong>\u517C\u5BB9\u90E8\u5206 C \u5B57\u7B26\u4E32\u51FD\u6570</strong></li></ul><p>\u867D\u7136 SDS \u662F\u4E8C\u8FDB\u5236\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u4E00\u6837\u9075\u4ECE\u6BCF\u4E2A\u5B57\u7B26\u4E32\u90FD\u662F\u4EE5\u7A7A\u5B57\u7B26\u4E32\u7ED3\u5C3E\u7684\u60EF\u4F8B\uFF0C\u8FD9\u6837\u53EF\u4EE5\u91CD\u7528 C \u8BED\u8A00\u5E93<code>&lt;string.h&gt;</code> \u4E2D\u7684\u4E00\u90E8\u5206\u51FD\u6570\u3002</p><h2 id="_5-redis-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11" tabindex="-1"><a class="header-anchor" href="#_5-redis-\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11" aria-hidden="true">#</a> 5 Redis \u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u503C\u80FD\u5B58\u50A8\u6700\u5927\u5BB9\u91CF\u662F\u591A\u5C11\uFF1F</h2><p>512M</p><h2 id="_6-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream" tabindex="-1"><a class="header-anchor" href="#_6-\u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1stream" aria-hidden="true">#</a> 6 \u4E3A\u4EC0\u4E48\u4F1A\u8BBE\u8BA1Stream\uFF1F</h2><p>\u7528\u8FC7Redis\u505A\u6D88\u606F\u961F\u5217\u7684\u90FD\u4E86\u89E3\uFF0C\u57FA\u4E8EReids\u7684\u6D88\u606F\u961F\u5217\u5B9E\u73B0\u6709\u5F88\u591A\u79CD\uFF0C\u4F8B\u5982\uFF1A</p><ul><li>PUB/SUB\uFF0C\u8BA2\u9605/\u53D1\u5E03\u6A21\u5F0F <ul><li>\u4F46\u662F\u53D1\u5E03\u8BA2\u9605\u6A21\u5F0F\u662F\u65E0\u6CD5\u6301\u4E45\u5316\u7684\uFF0C\u5982\u679C\u51FA\u73B0\u7F51\u7EDC\u65AD\u5F00\u3001Redis \u5B95\u673A\u7B49\uFF0C\u6D88\u606F\u5C31\u4F1A\u88AB\u4E22\u5F03\uFF1B</li></ul></li><li>\u57FA\u4E8EList LPUSH+BRPOP \u6216\u8005 \u57FA\u4E8ESorted-Set \u7684\u5B9E\u73B0 <ul><li>\u652F\u6301\u4E86\u6301\u4E45\u5316\uFF0C\u4F46\u662F\u4E0D\u652F\u6301\u591A\u64AD\uFF0C\u5206\u7EC4\u6D88\u8D39\u7B49</li></ul></li></ul><p><strong>\u6D88\u8D39\u7EC4\u6D88\u8D39\u56FE</strong></p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628221135429.png" alt="image-20220628221135429" loading="lazy"></p><h2 id="_7-redis-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_7-redis-stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F" aria-hidden="true">#</a> 7 Redis Stream\u7528\u5728\u4EC0\u4E48\u6837\u573A\u666F\uFF1F</h2><p>\u53EF\u7528\u4F5C\u65F6\u901A\u4FE1\u7B49\uFF0C\u5927\u6570\u636E\u5206\u6790\uFF0C\u5F02\u5730\u6570\u636E\u5907\u4EFD\u7B49</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628221236545.png" alt="image-20220628221236545" loading="lazy"></p><p>\u5BA2\u6237\u7AEF\u53EF\u4EE5\u5E73\u6ED1\u6269\u5C55\uFF0C\u63D0\u9AD8\u5904\u7406\u80FD\u529B</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220628221321712.png" alt="image-20220628221321712" loading="lazy"></p><h2 id="_8-redis-stream\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_8-redis-stream\u6D88\u606Fid\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898" aria-hidden="true">#</a> 8 Redis Stream\u6D88\u606FID\u7684\u8BBE\u8BA1\u662F\u5426\u8003\u8651\u4E86\u65F6\u95F4\u56DE\u62E8\u7684\u95EE\u9898\uFF1F</h2><p>XADD\u751F\u6210\u76841553439850328-0\uFF0C\u5C31\u662FRedis\u751F\u6210\u7684\u6D88\u606FID\uFF0C\u7531\u4E24\u90E8\u5206\u7EC4\u6210:<strong>\u65F6\u95F4\u6233-\u5E8F\u53F7</strong>\u3002\u65F6\u95F4\u6233\u662F\u6BEB\u79D2\u7EA7\u5355\u4F4D\uFF0C\u662F\u751F\u6210\u6D88\u606F\u7684Redis\u670D\u52A1\u5668\u65F6\u95F4\uFF0C\u5B83\u662F\u4E2A64\u4F4D\u6574\u578B\uFF08int64\uFF09\u3002\u5E8F\u53F7\u662F\u5728\u8FD9\u4E2A\u6BEB\u79D2\u65F6\u95F4\u70B9\u5185\u7684\u6D88\u606F\u5E8F\u53F7\uFF0C\u5B83\u4E5F\u662F\u4E2A64\u4F4D\u6574\u578B\u3002</p><p>\u53EF\u4EE5\u901A\u8FC7multi\u6279\u5904\u7406\uFF0C\u6765\u9A8C\u8BC1\u5E8F\u53F7\u7684\u9012\u589E\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> MULTI
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XADD memberMessage * msg one
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XADD memberMessage * msg two
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XADD memberMessage * msg three
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XADD memberMessage * msg four
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XADD memberMessage * msg five
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553441006884-0&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1553441006884-1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;1553441006884-2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;1553441006884-3&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;1553441006884-4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7531\u4E8E\u4E00\u4E2Aredis\u547D\u4EE4\u7684\u6267\u884C\u5F88\u5FEB\uFF0C\u6240\u4EE5\u53EF\u4EE5\u770B\u5230\u5728\u540C\u4E00\u65F6\u95F4\u6233\u5185\uFF0C\u662F\u901A\u8FC7\u5E8F\u53F7\u9012\u589E\u6765\u8868\u793A\u6D88\u606F\u7684\u3002</p><p>\u4E3A\u4E86\u4FDD\u8BC1\u6D88\u606F\u662F\u6709\u5E8F\u7684\uFF0C\u56E0\u6B64Redis\u751F\u6210\u7684ID\u662F\u5355\u8C03\u9012\u589E\u6709\u5E8F\u7684\u3002\u7531\u4E8EID\u4E2D\u5305\u542B\u65F6\u95F4\u6233\u90E8\u5206\uFF0C\u4E3A\u4E86\u907F\u514D\u670D\u52A1\u5668\u65F6\u95F4\u9519\u8BEF\u800C\u5E26\u6765\u7684\u95EE\u9898\uFF08\u4F8B\u5982\u670D\u52A1\u5668\u65F6\u95F4\u5EF6\u540E\u4E86\uFF09\uFF0CRedis\u7684\u6BCF\u4E2AStream\u7C7B\u578B\u6570\u636E\u90FD\u7EF4\u62A4\u4E00\u4E2Alatest_generated_id\u5C5E\u6027\uFF0C\u7528\u4E8E\u8BB0\u5F55\u6700\u540E\u4E00\u4E2A\u6D88\u606F\u7684ID\u3002<strong>\u82E5\u53D1\u73B0\u5F53\u524D\u65F6\u95F4\u6233\u9000\u540E\uFF08\u5C0F\u4E8Elatest_generated_id\u6240\u8BB0\u5F55\u7684\uFF09\uFF0C\u5219\u91C7\u7528\u65F6\u95F4\u6233\u4E0D\u53D8\u800C\u5E8F\u53F7\u9012\u589E\u7684\u65B9\u6848\u6765\u4F5C\u4E3A\u65B0\u6D88\u606FID</strong>\uFF08\u8FD9\u4E5F\u662F\u5E8F\u53F7\u4E3A\u4EC0\u4E48\u4F7F\u7528int64\u7684\u539F\u56E0\uFF0C\u4FDD\u8BC1\u6709\u8DB3\u591F\u591A\u7684\u7684\u5E8F\u53F7\uFF09\uFF0C\u4ECE\u800C\u4FDD\u8BC1ID\u7684\u5355\u8C03\u9012\u589E\u6027\u8D28\u3002</p><p>\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528Redis\u7684\u65B9\u6848\u751F\u6210\u6D88\u606FID\uFF0C\u56E0\u4E3A\u8FD9\u79CD\u65F6\u95F4\u6233+\u5E8F\u53F7\u7684\u5355\u8C03\u9012\u589E\u7684ID\u65B9\u6848\uFF0C\u51E0\u4E4E\u53EF\u4EE5\u6EE1\u8DB3\u4F60\u5168\u90E8\u7684\u9700\u6C42\u3002\u4F46\u540C\u65F6\uFF0C\u8BB0\u4F4FID\u662F\u652F\u6301\u81EA\u5B9A\u4E49\u7684\uFF0C\u522B\u5FD8\u4E86\uFF01</p><h2 id="_9-redis-stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_9-redis-stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898" aria-hidden="true">#</a> 9 Redis Stream\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u4F1A\u4E0D\u4F1A\u6D88\u606F\u4E22\u5931\u95EE\u9898?</h2><p>\u4E3A\u4E86\u89E3\u51B3\u7EC4\u5185\u6D88\u606F\u8BFB\u53D6\u4F46\u5904\u7406\u671F\u95F4\u6D88\u8D39\u8005\u5D29\u6E83\u5E26\u6765\u7684\u6D88\u606F\u4E22\u5931\u95EE\u9898\uFF0CSTREAM \u8BBE\u8BA1\u4E86 Pending \u5217\u8868\uFF0C\u7528\u4E8E\u8BB0\u5F55\u8BFB\u53D6\u4F46\u5E76\u672A\u5904\u7406\u5B8C\u6BD5\u7684\u6D88\u606F\u3002\u547D\u4EE4XPENDIING \u7528\u6765\u83B7\u6D88\u8D39\u7EC4\u6216\u6D88\u8D39\u5185\u6D88\u8D39\u8005\u7684\u672A\u5904\u7406\u5B8C\u6BD5\u7684\u6D88\u606F\u3002\u6F14\u793A\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XPENDING mq mqGroup <span class="token comment"># mpGroup\u7684Pending\u60C5\u51B5</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># 5\u4E2A\u5DF2\u8BFB\u53D6\u4F46\u672A\u5904\u7406\u7684\u6D88\u606F</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-0&quot;</span> <span class="token comment"># \u8D77\u59CBID</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-4&quot;</span> <span class="token comment"># \u7ED3\u675FID</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerA&quot;</span> <span class="token comment"># \u6D88\u8D39\u8005A\u67093\u4E2A</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerB&quot;</span> <span class="token comment"># \u6D88\u8D39\u8005B\u67091\u4E2A</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerC&quot;</span> <span class="token comment"># \u6D88\u8D39\u8005C\u67091\u4E2A</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XPENDING mq mqGroup - + <span class="token number">10</span> <span class="token comment"># \u4F7F\u7528 start end count \u9009\u9879\u53EF\u4EE5\u83B7\u53D6\u8BE6\u7EC6\u4FE1\u606F</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-0&quot;</span> <span class="token comment"># \u6D88\u606FID</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerA&quot;</span> <span class="token comment"># \u6D88\u8D39\u8005</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1654355</span> <span class="token comment"># \u4ECE\u8BFB\u53D6\u5230\u73B0\u5728\u7ECF\u5386\u4E861654355ms\uFF0CIDLE</span>
   <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span> <span class="token comment"># \u6D88\u606F\u88AB\u8BFB\u53D6\u4E865\u6B21\uFF0Cdelivery counter</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-1&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerA&quot;</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1654355</span>
   <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token comment"># \u51715\u4E2A\uFF0C\u4F59\u4E0B3\u4E2A\u7701\u7565 ...</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XPENDING mq mqGroup - + <span class="token number">10</span> consumerA <span class="token comment"># \u5728\u52A0\u4E0A\u6D88\u8D39\u8005\u53C2\u6570\uFF0C\u83B7\u53D6\u5177\u4F53\u67D0\u4E2A\u6D88\u8D39\u8005\u7684Pending\u5217\u8868</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-0&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerA&quot;</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1641083</span>
   <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token comment"># \u51713\u4E2A\uFF0C\u4F59\u4E0B2\u4E2A\u7701\u7565 ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E2APending\u7684\u6D88\u606F\u67094\u4E2A\u5C5E\u6027\uFF1A</p><ul><li>\u6D88\u606FID</li><li>\u6240\u5C5E\u6D88\u8D39\u8005</li><li>IDLE\uFF0C\u5DF2\u8BFB\u53D6\u65F6\u957F</li><li>delivery counter\uFF0C\u6D88\u606F\u88AB\u8BFB\u53D6\u6B21\u6570</li></ul><p>\u4E0A\u9762\u7684\u7ED3\u679C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u6211\u4EEC\u4E4B\u524D\u8BFB\u53D6\u7684\u6D88\u606F\uFF0C\u90FD\u88AB\u8BB0\u5F55\u5728Pending\u5217\u8868\u4E2D\uFF0C\u8BF4\u660E\u5168\u90E8\u8BFB\u5230\u7684\u6D88\u606F\u90FD\u6CA1\u6709\u5904\u7406\uFF0C\u4EC5\u4EC5\u662F\u8BFB\u53D6\u4E86\u3002\u90A3\u5982\u4F55\u8868\u793A\u6D88\u8D39\u8005\u5904\u7406\u5B8C\u6BD5\u4E86\u6D88\u606F\u5462\uFF1F\u4F7F\u7528\u547D\u4EE4 XACK \u5B8C\u6210\u544A\u77E5\u6D88\u606F\u5904\u7406\u5B8C\u6210\uFF0C\u6F14\u793A\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XACK mq mqGroup <span class="token number">1553585533795</span>-0 <span class="token comment"># \u901A\u77E5\u6D88\u606F\u5904\u7406\u7ED3\u675F\uFF0C\u7528\u6D88\u606FID\u6807\u8BC6</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XPENDING mq mqGroup <span class="token comment"># \u518D\u6B21\u67E5\u770BPending\u5217\u8868</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span> <span class="token comment"># \u5DF2\u8BFB\u53D6\u4F46\u672A\u5904\u7406\u7684\u6D88\u606F\u5DF2\u7ECF\u53D8\u4E3A4\u4E2A</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-4&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerA&quot;</span> <span class="token comment"># \u6D88\u8D39\u8005A\uFF0C\u8FD8\u67092\u4E2A\u6D88\u606F\u5904\u7406</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;2&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerB&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
   <span class="token number">3</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;consumerC&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u4E86\u8FD9\u6837\u4E00\u4E2APending\u673A\u5236\uFF0C\u5C31\u610F\u5473\u7740\u5728\u67D0\u4E2A\u6D88\u8D39\u8005\u8BFB\u53D6\u6D88\u606F\u4F46\u672A\u5904\u7406\u540E\uFF0C\u6D88\u606F\u662F\u4E0D\u4F1A\u4E22\u5931\u7684\u3002\u7B49\u5F85\u6D88\u8D39\u8005\u518D\u6B21\u4E0A\u7EBF\u540E\uFF0C\u53EF\u4EE5\u8BFB\u53D6\u8BE5Pending\u5217\u8868\uFF0C\u5C31\u53EF\u4EE5\u7EE7\u7EED\u5904\u7406\u8BE5\u6D88\u606F\u4E86\uFF0C\u4FDD\u8BC1\u6D88\u606F\u7684\u6709\u5E8F\u548C\u4E0D\u4E22\u5931\u3002</p><h2 id="_10-redis-steam-\u574F\u6D88\u606F\u95EE\u9898-\u6B7B\u4FE1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_10-redis-steam-\u574F\u6D88\u606F\u95EE\u9898-\u6B7B\u4FE1\u95EE\u9898" aria-hidden="true">#</a> 10 Redis Steam \u574F\u6D88\u606F\u95EE\u9898\uFF0C\u6B7B\u4FE1\u95EE\u9898?</h2><p>\u6B63\u5982\u4E0A\u9762\u6240\u8BF4\uFF0C\u5982\u679C\u67D0\u4E2A\u6D88\u606F\uFF0C\u4E0D\u80FD\u88AB\u6D88\u8D39\u8005\u5904\u7406\uFF0C\u4E5F\u5C31\u662F\u4E0D\u80FD\u88ABXACK\uFF0C\u8FD9\u662F\u8981\u957F\u65F6\u95F4\u5904\u4E8EPending\u5217\u8868\u4E2D\uFF0C\u5373\u4F7F\u88AB\u53CD\u590D\u7684\u8F6C\u79FB\u7ED9\u5404\u4E2A\u6D88\u8D39\u8005\u4E5F\u662F\u5982\u6B64\u3002\u6B64\u65F6\u8BE5\u6D88\u606F\u7684delivery counter\u5C31\u4F1A\u7D2F\u52A0\uFF08\u4E0A\u4E00\u8282\u7684\u4F8B\u5B50\u53EF\u4EE5\u770B\u5230\uFF09\uFF0C\u5F53\u7D2F\u52A0\u5230\u67D0\u4E2A\u6211\u4EEC\u9884\u8BBE\u7684\u4E34\u754C\u503C\u65F6\uFF0C\u6211\u4EEC\u5C31\u8BA4\u4E3A\u662F\u574F\u6D88\u606F\uFF08\u4E5F\u53EB\u6B7B\u4FE1\uFF0CDeadLetter\uFF0C\u65E0\u6CD5\u6295\u9012\u7684\u6D88\u606F\uFF09\uFF0C\u7531\u4E8E\u6709\u4E86\u5224\u5B9A\u6761\u4EF6\uFF0C\u6211\u4EEC\u5C06\u574F\u6D88\u606F\u5904\u7406\u6389\u5373\u53EF\uFF0C\u5220\u9664\u5373\u53EF\u3002\u5220\u9664\u4E00\u4E2A\u6D88\u606F\uFF0C\u4F7F\u7528XDEL\u8BED\u6CD5\uFF0C\u6F14\u793A\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u961F\u5217\u4E2D\u7684\u6D88\u606F</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XDEL mq <span class="token number">1553585533795</span>-1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token comment"># \u67E5\u770B\u961F\u5217\u4E2D\u518D\u65E0\u6B64\u6D88\u606F</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> XRANGE mq - +
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-0&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;msg&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;1553585533795-2&quot;</span>
   <span class="token number">2</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;msg&quot;</span>
      <span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\u672C\u4F8B\u4E2D\uFF0C\u5E76\u6CA1\u6709\u5220\u9664Pending\u4E2D\u7684\u6D88\u606F\u56E0\u6B64\u4F60\u67E5\u770BPending\uFF0C\u6D88\u606F\u8FD8\u4F1A\u5728\u3002\u53EF\u4EE5\u6267\u884CXACK\u6807\u8BC6\u5176\u5904\u7406\u5B8C\u6BD5\uFF01</p>`,61),i=[p];function o(l,c){return s(),a("div",null,i)}const d=n(t,[["render",o],["__file","redis-z-interview-datatype.html.vue"]]);export{d as default};
