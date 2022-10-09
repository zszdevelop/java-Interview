import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,e}from"./app.b9c1d23f.js";const i={},l=e(`<h1 id="\u8FBE\u68A6\u6570\u636E\u5E93-\u5199sql\u5982\u4F55\u624D\u80FD\u4E0D\u5E26\u4E0A\u6A21\u5F0F\u540D" tabindex="-1"><a class="header-anchor" href="#\u8FBE\u68A6\u6570\u636E\u5E93-\u5199sql\u5982\u4F55\u624D\u80FD\u4E0D\u5E26\u4E0A\u6A21\u5F0F\u540D" aria-hidden="true">#</a> \u8FBE\u68A6\u6570\u636E\u5E93-\u5199SQL\u5982\u4F55\u624D\u80FD\u4E0D\u5E26\u4E0A\u6A21\u5F0F\u540D\uFF1F</h1><h2 id="_1-\u95EE\u9898\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#_1-\u95EE\u9898\u80CC\u666F" aria-hidden="true">#</a> 1. \u95EE\u9898\u80CC\u666F</h2><p>\u5728\u8FBE\u68A6\u6570\u636E\u5E93\u4E2D\uFF0CSQL \u67E5\u8BE2\u65F6\uFF0C\u9700\u8981\u52A0\u4E0A\u6A21\u5F0F\u540D\uFF08\u6570\u636E\u5E93\u540D\uFF09\u624D\u80FD\u8BBF\u95EE</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629143738277.png" alt="image-20210629143738277" loading="lazy"></p><h3 id="_2-\u95EE\u9898\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_2-\u95EE\u9898\u539F\u56E0" aria-hidden="true">#</a> 2. \u95EE\u9898\u539F\u56E0</h3><p>\u5176\u5B9E\u8FD9\u662F\u628AMysql\u6216\u8005SQLSERVER\u7684\u601D\u7EF4\u4EE3\u5165DM\u6570\u636E\u5E93\u9020\u6210\u7684\uFF0CMysql\u7684\u4F53\u7CFB\u67B6\u6784\u662F\u5355\u5B9E\u4F8B\u591A\u5E93\u7684\uFF0C\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u591A\u4E2A\u6570\u636E\u5E93\uFF0C\u7136\u540E\u6307\u5B9A\u5F53\u524D\u6570\u636E\u5E93\u5199SQL\u7684\u65F6\u5019\u5C31\u4E0D\u7528\u5E26\u4E0A\u6570\u636E\u5E93\u540D\u4E86\u3002</p><p><strong>\u8FBE\u68A6\u7684\u4F53\u7CFB\u67B6\u6784\u662F\u5355\u5E93\u591A\u5B9E\u4F8B\u7684\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u591A\u4E2A\u6570\u636E\u5E93\u7684\u6982\u5FF5\u4E86\uFF0C\u4ECEMysql\u6216\u8005SQLSERVER\u8F6C\u5230\u8FBE\u68A6\uFF0C\u5C31\u9700\u8981\u5EFA\u591A\u4E2A\u7528\u6237+\u8868\u7A7A\u95F4\u6765\u5BF9\u5E94Mysql\u7684\u591A\u4E2A\u6570\u636E\u5E93\u3002</strong></p><h3 id="_3-1-\u76F4\u63A5\u539F\u56E0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u76F4\u63A5\u539F\u56E0" aria-hidden="true">#</a> 3.1 \u76F4\u63A5\u539F\u56E0</h3><ul><li><p>\u81EA\u5DF1\u662F\u901A\u8FC7 sysdba \u767B\u5F55\uFF0C\u6267\u884C select * from tab1 \u65F6\uFF0C\u67E5\u8BE2\u7684\u5176\u5B9E\u662F select * from sysdba.tab1;</p></li><li><p>\u5982\u679C\u4F60\u8981\u627E new_schema.tab1 \u7684\u8BDD\uFF0C\u90A3\u4F60\u8981\u6267\u884C\u7684sql \u5176\u5B9E\u662F select * from new_schema.tab1;</p></li></ul><h2 id="_3-\u89E3\u51B3\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3-\u89E3\u51B3\u65B9\u5F0F" aria-hidden="true">#</a> 3. \u89E3\u51B3\u65B9\u5F0F</h2><p>\u4F8B\u5982MYSQL\u4E2D\u6709TESTDB1,TESTDB2\u4E24\u4E2A\u5E93\uFF0C\u90FD\u7528root\u7528\u6237\u6765\u8BBF\u95EE</p><h3 id="_3-1-\u6B65\u9AA41-\u65B0\u5EFA\u8868\u7A7A\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-1-\u6B65\u9AA41-\u65B0\u5EFA\u8868\u7A7A\u95F4" aria-hidden="true">#</a> 3.1 \u6B65\u9AA41\uFF1A\u65B0\u5EFA\u8868\u7A7A\u95F4</h3><p>\u5728\u8FBE\u68A6\u4E2D\u7B2C\u4E00\u6B65\u5C31\u521B\u5EFA\u4E24\u4E2A\u8868\u7A7A\u95F4\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> TESTDB1 DATAFILE <span class="token string">&#39;TESTDB1.DBF&#39;</span> SIZE <span class="token number">128</span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLESPACE</span> TESTDB2 DATAFILE <span class="token string">&#39;TESTDB2.DBF&#39;</span> SIZE <span class="token number">128</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-\u6B65\u9AA42-\u521B\u5EFA\u7528\u6237\u6388\u6743" tabindex="-1"><a class="header-anchor" href="#_3-2-\u6B65\u9AA42-\u521B\u5EFA\u7528\u6237\u6388\u6743" aria-hidden="true">#</a> 3.2 \u6B65\u9AA42\uFF1A\u521B\u5EFA\u7528\u6237\u6388\u6743</h3><p>\u7B2C\u4E8C\u6B65\u521B\u5EFA\u4E24\u4E2A\u7528\u6237\uFF0C\u6388\u4E88\u5BF9\u5E94\u7684\u6743\u9650\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">--\u4EE5\u4E0BSQL\u7528SYSDBA\u7528\u6237\u767B\u5F55\u6267\u884C</span>
 
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> TESTDB1 IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&quot;123456789&quot;</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">TABLESPACE</span> TESTDB1<span class="token punctuation">;</span>
 
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> TESTDB2 IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&quot;123456789&quot;</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">TABLESPACE</span> TESTDB2<span class="token punctuation">;</span>
 
<span class="token keyword">GRANT</span> RESOURCE <span class="token keyword">TO</span> TESTDB1<span class="token punctuation">;</span>
 
<span class="token keyword">GRANT</span> RESOURCE <span class="token keyword">TO</span> TESTDB2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629145138099.png" alt="image-20210629145138099" loading="lazy"></p><h3 id="_3-3-\u6B65\u9AA43-\u8FC1\u79FB\u5DE5\u5177\u8FC1\u79FB\u7684\u65F6\u5019\u7528testdb1\u7528\u6237\u6765\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#_3-3-\u6B65\u9AA43-\u8FC1\u79FB\u5DE5\u5177\u8FC1\u79FB\u7684\u65F6\u5019\u7528testdb1\u7528\u6237\u6765\u8FC1\u79FB" aria-hidden="true">#</a> 3.3 \u6B65\u9AA43\uFF1A\u8FC1\u79FB\u5DE5\u5177\u8FC1\u79FB\u7684\u65F6\u5019\u7528TESTDB1\u7528\u6237\u6765\u8FC1\u79FB</h3><p>\u8FC1\u79FBMysql TESTDB1\u6570\u636E\u5E93\u91CC\u9762\u7684\u8868\uFF0C\u6570\u636E\u5E93\u8FC1\u79FB\u5DE5\u5177\u5C31\u4F7F\u7528TESTDB1\u7528\u6237\u6765\u8FC1\u79FB\uFF1B\u8FC1\u79FBMysql TESTDB2\u6570\u636E\u5E93\u91CC\u9762\u7684\u8868\uFF0C\u6570\u636E\u5E93\u8FC1\u79FB\u5DE5\u5177\u5C31\u4F7F\u7528TESTDB2\u7528\u6237\u6765\u8FC1\u79FB</p><h3 id="_3-4-\u6B65\u9AA44-\u8BBF\u95EEtestdb1\u7528\u6237-\u6A21\u5F0F-\u4E0B\u7684\u8868-\u5C31\u4F7F\u7528testdb1\u7528\u6237\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#_3-4-\u6B65\u9AA44-\u8BBF\u95EEtestdb1\u7528\u6237-\u6A21\u5F0F-\u4E0B\u7684\u8868-\u5C31\u4F7F\u7528testdb1\u7528\u6237\u767B\u5F55" aria-hidden="true">#</a> 3.4 \u6B65\u9AA44\uFF1A\u8BBF\u95EETESTDB1\u7528\u6237\uFF08\u6A21\u5F0F\uFF09\u4E0B\u7684\u8868\uFF0C\u5C31\u4F7F\u7528TESTDB1\u7528\u6237\u767B\u5F55</h3><p>\u8BBF\u95EETESTDB1\u7528\u6237\uFF08\u6A21\u5F0F\uFF09\u4E0B\u7684\u8868\uFF0C\u5C31\u4F7F\u7528TESTDB1\u7528\u6237\u767B\u5F55\u6765\u8BBF\u95EE\uFF0C\u5C31\u4E0D\u9700\u8981\u52A0\u6A21\u5F0F\u540DTESTDB1</p><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/blogimage-master/img/image-20210629145353834.png" alt="image-20210629145353834" loading="lazy"></p>`,23),t=[l];function d(o,r){return a(),n("div",null,t)}const h=s(i,[["render",d],["__file","dm-problem-schema.html.vue"]]);export{h as default};
