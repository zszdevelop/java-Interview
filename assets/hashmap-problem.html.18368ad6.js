import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as i,e as s}from"./app.2d9a29d9.js";const p={},t=s(`<h1 id="hashmap\u76F8\u5173\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#hashmap\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a> HashMap\u76F8\u5173\u95EE\u9898</h1><h2 id="_1-hashmap\u4E2D\u76F8\u5173\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-hashmap\u4E2D\u76F8\u5173\u6982\u5FF5" aria-hidden="true">#</a> 1. HashMap\u4E2D\u76F8\u5173\u6982\u5FF5</h2><ul><li><p>size\uFF1A</p><p>\u8868\u793AHashMap\u4E2D\u5B58\u653EKV\u6570\u91CF\uFF08\u4E3A\u94FE\u8868\u548C\u6811\u4E2D\u7684KV\u7684\u603B\u548C\uFF09</p></li><li><p>capacity\uFF08\u5BB9\u91CF\uFF09</p><p>capacity\u5C31\u662F\u6307HashMap\u4E2D\u6876\u7684\u6570\u91CF\uFF0C\u9ED8\u8BA4\u503C\u4E3A16\uFF0C<strong>\u5BB9\u91CF\u90FD\u662F2\u7684\u5E42</strong></p></li><li><p>loadFactor\uFF08\u88C5\u8F7D\u56E0\u5B50\uFF09</p><p>\u88C5\u8F7D\u56E0\u5B50\u7528\u6765\u8861\u91CFHashMap\u6EE1\u7684\u7A0B\u5EA6\uFF0CloadFactor\u7684\u9ED8\u8BA4\u503C\u4E3A0.75f\u3002\u8BA1\u7B97HashMap\u7684\u5B9E\u65F6\u88C5\u8F7D\u56E0\u5B50\u7684\u65B9\u6CD5\u4E3A\uFF1Asize/capacity\uFF0C\u800C\u4E0D\u662F\u5360\u7528\u6876\u7684\u6570\u91CF\u53BB\u9664\u4EE5capacity\u3002</p></li><li><p>threshold\uFF1A</p><p>\u8868\u793A\u5F53HashMap\u7684size\u5927\u4E8Ethreshold\u65F6\u4F1A\u6267\u884Cresize\u64CD\u4F5C\u3002</p></li></ul><h2 id="_2-\u5047\u5982\u6211\u4EEC\u9700\u8981\u5B58500\u4E2A\u6570\u9700\u8981\u591A\u5927\u7684hashmap" tabindex="-1"><a class="header-anchor" href="#_2-\u5047\u5982\u6211\u4EEC\u9700\u8981\u5B58500\u4E2A\u6570\u9700\u8981\u591A\u5927\u7684hashmap" aria-hidden="true">#</a> 2. \u5047\u5982\u6211\u4EEC\u9700\u8981\u5B58500\u4E2A\u6570\u9700\u8981\u591A\u5927\u7684HashMap?</h2><ul><li><p>HashMap \u9ED8\u8BA4\u7684\u521D\u59CB\u5316\u5927\u5C0F\u4E3A16\uFF0C\u4E4B\u540E\u6BCF\u6B21\u6269\u5145\uFF0C\u53D8\u4E3A\u539F\u6765\u76842\u500D</p><p>\u9700\u8981\u5B58\u50A8500\u4E2A\u6570\uFF0C\u90A3\u4E48\u81F3\u5C11512\u4E2A\u7684\u5BB9\u91CF\u3002</p></li><li><p>\u53C8\u56E0\u4E3AHashMap\u6BCF\u6B21put\u64CD\u4F5C\u90FD\u4F1A\u68C0\u67E5\u4E00\u904Dsize\uFF08\u5F53\u524D\u5BB9\u91CF\uFF09&gt; initailCapacity*loadFactor\u3002</p><ul><li><p>\u9ED8\u8BA4\u7684\u8D1F\u8F7D\u56E0\u5B50\u4E3A0.75</p><p>500\u5DF2\u7ECF\u5927\u4E8E512*0.75=384\uFF0C<strong>\u6240\u4EE5\u8FD8\u9700\u8981\u81EA\u52A8\u6269\u5BB9\u52301024</strong></p></li><li><p>\u66F4\u6539\u8D1F\u8F7D\u56E0\u5B50\u4E3A1</p><p>\u90A3\u4E48\u53EA\u9700\u8981512\u4E2A\u7A7A\u95F4</p></li></ul></li></ul><p>PS: \u7279\u6B8A\u60C5\u51B5HashMap\u7684\u6570\u8FD8\u6709\u53EF\u80FD\u90FD\u6253\u5728\u4E00\u4E2A\u69FD\u4E0A\uFF0C\u6211\u4EEC\u8FD9\u91CC\u4EE5\u6BCF\u4E2A\u90FD\u4E0D\u4E00\u6837\u4E3A\u4F8B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   @Test
    public void test02() throws Exception {
        HashMap&lt;Object,Object&gt; map = new HashMap&lt;&gt;();
        for (int i = 0;i&lt;500;i++){
            map.put(i,i);
        }
        // \u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u5BB9\u91CF\u53D8\u91CFcapacity,\u5E76\u8C03\u7528map\u5BF9\u8C61
        Method capacity = map.getClass().getDeclaredMethod(&quot;capacity&quot;);
        capacity.setAccessible(true);
        Integer realCapacity = (Integer) capacity.invoke(map);
        // HashMap\u63D2\u5165500\u4E2A\u6570\uFF0C\u5B9E\u9645\u5BB9\u91CF\u4E3A1024
        System.out.println(&quot;HashMap\u63D2\u5165500\u4E2A\u6570\uFF0C\u5B9E\u9645\u5BB9\u91CF\u4E3A&quot; + realCapacity);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-hashmap\u7684\u8D1F\u8F7D\u56E0\u5B50" tabindex="-1"><a class="header-anchor" href="#_3-hashmap\u7684\u8D1F\u8F7D\u56E0\u5B50" aria-hidden="true">#</a> 3. HashMap\u7684\u8D1F\u8F7D\u56E0\u5B50</h2><p>HashMap\u9ED8\u8BA4\u7684\u8D1F\u8F7D\u56E0\u5B50\u4E3A0.75</p>`,9),l=[t];function n(c,h){return e(),i("div",null,l)}const o=a(p,[["render",n],["__file","hashmap-problem.html.vue"]]);export{o as default};
