import { r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, e as createStaticVNode } from "./app.5090bcc7.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.21dcd24c.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u53CA\u5B9E\u73B0\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u53CA\u5B9E\u73B0\u65B9\u6848" aria-hidden="true">#</a> \u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u53CA\u5B9E\u73B0\u65B9\u6848</h1><blockquote><p>\u65E0\u72B6\u6001\u7684token\u6216\u8005\u6709\u72B6\u6001\u7684Session\u96C6\u4E2D\u7BA1\u7406\u662F\u76EE\u524D\u6700\u4E3A\u5E38\u7528\u7684\u65B9\u6848\uFF0C\u672C\u8282\u4E3B\u8981\u8BA8\u8BBA\u7684\u6709\u72B6\u6001\u7684\u5206\u5E03\u5F0FSession\u4F1A\u8BDD, \u5305\u62ECSession Stick, Session Replication, Session \u6570\u636E\u96C6\u4E2D\u5B58\u50A8, Cookie Based \u4EE5\u53CAToken\u65B9\u5F0F\u7B49</p></blockquote><h2 id="_1-\u57FA\u7840\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u7840\u6982\u5FF5" aria-hidden="true">#</a> 1. \u57FA\u7840\u6982\u5FF5</h2><blockquote><p>Session + Cookie \u4F1A\u8BDD\u65B9\u6848\u6BD4\u8F83\u7B80\u5355\uFF0C\u8FD9\u91CC\u6211\u5728\u7F51\u4E0A\u627E\u4E86\u70B9\u8D44\u6599\uFF0C\u518D\u56DE\u987E\u4E0B\u57FA\u7840\u5427\u3002</p></blockquote><h3 id="_1-1-\u4E3A\u4EC0\u4E48\u8981\u4EA7\u751Fsession" tabindex="-1"><a class="header-anchor" href="#_1-1-\u4E3A\u4EC0\u4E48\u8981\u4EA7\u751Fsession" aria-hidden="true">#</a> 1.1 \u4E3A\u4EC0\u4E48\u8981\u4EA7\u751FSession</h3><p>http\u534F\u8BAE\u672C\u8EAB\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u4E0B\u8F7D\u5185\u5BB9\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u5668\u90FD\u4E0D\u8BB0\u5F55\u5F7C\u6B64\u7684\u5386\u53F2\u4FE1\u606F\uFF0C\u6BCF\u4E00\u6B21\u8BF7\u6C42\u90FD\u662F\u72EC\u7ACB\u7684\u3002</p><p>\u4E3A\u4EC0\u4E48\u662F\u65E0\u72B6\u6001\u7684\u5462\uFF1F\u56E0\u4E3A\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u662F\u4F7F\u7528socket\u5957\u63A5\u5B57\u8FDB\u884C\u901A\u4FE1\uFF0C\u670D\u52A1\u5668\u5C06\u8BF7\u6C42\u7ED3\u679C\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\u4E4B\u540E\uFF0C\u4F1A\u5173\u95ED\u5F53\u524D\u7684socket\u94FE\u63A5\uFF0C\u800C\u4E14\u670D\u52A1\u5668\u4E5F\u4F1A\u5728\u5904\u7406\u9875\u9762\u5B8C\u6BD5\u4E4B\u540E\u9500\u6BC1\u9875\u9762\u5BF9\u8C61\u3002</p><p>\u7136\u800C\u5728Web\u5E94\u7528\u7684\u5F88\u591A\u573A\u666F\u4E0B\u9700\u8981\u7EF4\u62A4\u7528\u6237\u72B6\u6001\u624D\u80FD\u6B63\u5E38\u5DE5\u4F5C(\u662F\u5426\u767B\u5F55\u7B49)\uFF0C\u6216\u8005\u8BF4\u63D0\u4F9B\u4FBF\u6377(\u8BB0\u4F4F\u5BC6\u7801\uFF0C\u6D4F\u89C8\u5386\u53F2\u7B49)\uFF0C\u72B6\u6001\u7684\u4FDD\u6301\u5C31\u662F\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u529F\u80FD\u3002\u56E0\u6B64\u5728web\u5E94\u7528\u5F00\u53D1\u91CC\u5C31\u51FA\u73B0\u4E86\u4FDD\u6301http\u94FE\u63A5\u72B6\u6001\u7684\u6280\u672F\uFF1A\u4E00\u4E2A\u662Fcookie\u6280\u672F\uFF0C\u53E6\u4E00\u79CD\u662Fsession\u6280\u672F\u3002</p><h3 id="_1-2-session\u6709\u4EC0\u4E48\u4F5C\u7528-\u5982\u4F55\u4EA7\u751F\u5E76\u53D1\u6325\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-2-session\u6709\u4EC0\u4E48\u4F5C\u7528-\u5982\u4F55\u4EA7\u751F\u5E76\u53D1\u6325\u4F5C\u7528" aria-hidden="true">#</a> 1.2 Session\u6709\u4EC0\u4E48\u4F5C\u7528\uFF0C\u5982\u4F55\u4EA7\u751F\u5E76\u53D1\u6325\u4F5C\u7528</h3><p>\u8981\u660E\u767DSession\u5C31\u5FC5\u987B\u8981\u5F04\u660E\u767D\u4EC0\u4E48\u662FCookie\uFF0C\u4EE5\u53CACookie\u548CSession\u7684\u5173\u7CFB\u3002</p><ul><li><strong>\u4EC0\u4E48\u662FCookie</strong></li></ul><p>Cookie\u6280\u672F\u662Fhttp\u72B6\u6001\u4FDD\u6301\u5728\u5BA2\u6237\u7AEF\u7684\u89E3\u51B3\u65B9\u6848\uFF0CCookie\u5C31\u662F\u7531\u670D\u52A1\u5668\u53D1\u7ED9\u5BA2\u6237\u7AEF\u7684\u7279\u6B8A\u4FE1\u606F\uFF0C\u800C\u8FD9\u4E9B\u4FE1\u606F\u4EE5\u6587\u672C\u6587\u4EF6\u7684\u65B9\u5F0F\u5B58\u653E\u5728\u5BA2\u6237\u7AEF\uFF0C\u7136\u540E\u5BA2\u6237\u7AEF\u6BCF\u6B21\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\u90FD\u4F1A\u5E26\u4E0A\u8FD9\u4E9B\u7279\u6B8A\u7684\u4FE1\u606F\u3002</p><ul><li><strong>Cookie\u7684\u4EA7\u751F</strong></li></ul><p>\u5F53\u7528\u6237\u9996\u6B21\u4F7F\u7528\u6D4F\u89C8\u5668\u8BBF\u95EE\u4E00\u4E2A\u652F\u6301Cookie\u7684\u7F51\u7AD9\u7684\u65F6\u5019\uFF0C\u7528\u6237\u4F1A\u63D0\u4F9B\u5305\u62EC\u7528\u6237\u540D\u5728\u5185\u7684\u4E2A\u4EBA\u4FE1\u606F\u5E76\u4E14\u63D0\u4EA4\u81F3\u670D\u52A1\u5668\uFF1B\u63A5\u7740\uFF0C\u670D\u52A1\u5668\u5728\u5411\u5BA2\u6237\u7AEF\u56DE\u4F20\u76F8\u5E94\u7684\u8D85\u6587\u672C\u7684\u540C\u65F6\u4E5F\u4F1A\u53D1\u56DE\u8FD9\u4E9B\u4E2A\u4EBA\u4FE1\u606F\uFF0C\u5F53\u7136\u8FD9\u4E9B\u4FE1\u606F\u5E76\u4E0D\u662F\u5B58\u653E\u5728HTTP\u54CD\u5E94\u4F53\uFF08Response Body\uFF09\u4E2D\u7684\uFF0C\u800C\u662F\u5B58\u653E\u4E8EHTTP\u54CD\u5E94\u5934\uFF08Response Header\uFF09\uFF1B\u5F53\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u63A5\u6536\u5230\u6765\u81EA\u670D\u52A1\u5668\u7684\u54CD\u5E94\u4E4B\u540E\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u8FD9\u4E9B\u4FE1\u606F\u5B58\u653E\u5728\u4E00\u4E2A\u7EDF\u4E00\u7684\u4F4D\u7F6E\u3002</p><p>\u5B58\u50A8\u5728\u786C\u76D8\u4E0A\u7684cookie \u4E0D\u53EF\u4EE5\u5728\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u95F4\u5171\u4EAB\uFF0C\u53EF\u4EE5\u5728\u540C\u4E00\u6D4F\u89C8\u5668\u7684\u4E0D\u540C\u8FDB\u7A0B\u95F4\u5171\u4EAB\uFF0C\u6BD4\u5982\u4E24\u4E2AIE\u7A97\u53E3\u3002\u8FD9\u662F\u56E0\u4E3A\u6BCF\u4E2D\u6D4F\u89C8\u5668\u5B58\u50A8cookie\u7684\u4F4D\u7F6E\u4E0D\u4E00\u6837\uFF0C\u6BD4\u5982</p><ul><li><p>\u200B</p><ul><li>\u200B Chrome\u4E0B\u7684cookie\u653E\u5728\uFF1AC:\\Users\\sharexie\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Cache</li><li>Firefox\u4E0B\u7684cookie\u653E\u5728\uFF1AC:\\Users\\sharexie\\AppData\\Roaming\\Mozilla\\Firefox\\Profiles\\tq2hit6m.default\\cookies.sqlite \uFF08\u5012\u6570\u7B2C\u4E8C\u4E2A\u6587\u4EF6\u540D\u662F\u968F\u673A\u7684\u6587\u4EF6\u540D\u5B57\uFF09</li><li>Ie\u4E0B\u7684cookie\u653E\u5728\uFF1AC:\\Users\\Administrator\\AppData\\Roaming\\Microsoft\\Windows\\Cookies</li></ul></li><li><p><strong>Cookie\u7684\u5185\u5BB9\u3001\u4F5C\u7528\u57DF\u4EE5\u53CA\u6709\u6548\u671F</strong></p></li></ul><p>cookie\u7684\u5185\u5BB9\u4E3B\u8981\u5305\u62EC\uFF1A\u540D\u5B57\uFF0C\u503C\uFF0C\u8FC7\u671F\u65F6\u95F4\uFF0C\u8DEF\u5F84\u548C\u57DF\u3002\u8DEF\u5F84\u4E0E\u57DF\u5408\u5728\u4E00\u8D77\u5C31\u6784\u6210\u4E86cookie\u7684\u4F5C\u7528\u8303\u56F4\u3002</p><p>\u5982\u679C\u4E0D\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4\uFF0C\u5219\u8868\u793A\u8FD9\u4E2Acookie\u7684\u751F\u547D\u671F\u4E3A\u6D4F\u89C8\u5668\u4F1A\u8BDD\u671F\u95F4\uFF0C\u53EA\u8981\u5173\u95ED\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0Ccookie\u5C31\u6D88\u5931\u4E86\uFF0C\u8FD9\u79CD\u751F\u547D\u671F\u4E3A\u6D4F\u89C8\u5668\u4F1A\u8BDD\u671F\u7684 cookie\u88AB\u79F0\u4E3A\u4F1A\u8BDDcookie\u3002\u4F1A\u8BDDcookie\u4E00\u822C\u4E0D\u5B58\u50A8\u5728\u786C\u76D8\u4E0A\u800C\u662F\u4FDD\u5B58\u5728\u5185\u5B58\u91CC\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\u8FC7\u671F\u65F6\u95F4\uFF0C\u6D4F\u89C8\u5668\u5C31\u4F1A\u628Acookie\u4FDD\u5B58\u5230\u786C\u76D8\u4E0A\uFF0C\u5173\u95ED\u540E\u518D\u6B21\u6253\u5F00\u6D4F\u89C8\u5668\uFF0C\u8FD9\u4E9Bcookie\u4ECD\u7136\u6709\u6548\u76F4\u5230\u8D85\u8FC7\u8BBE\u5B9A\u7684\u8FC7\u671F\u65F6\u95F4\u3002</p><ul><li><strong>Cookie\u5982\u4F55\u4F7F\u7528</strong></li></ul><p>cookie \u7684\u4F7F\u7528\u662F\u7531\u6D4F\u89C8\u5668\u6309\u7167\u4E00\u5B9A\u7684\u539F\u5219\u5728\u540E\u53F0\u81EA\u52A8\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u7684\u3002</p><p>\u5F53\u5BA2\u6237\u7AEF\u4E8C\u6B21\u5411\u670D\u52A1\u5668\u53D1\u9001\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u68C0\u67E5\u6240\u6709\u5B58\u50A8\u7684cookie\uFF0C\u5982\u679C\u67D0\u4E2Acookie\u6240\u58F0\u660E\u7684\u4F5C\u7528\u8303\u56F4\u5927\u4E8E\u7B49\u4E8E\u5C06\u8981\u8BF7\u6C42\u7684\u8D44\u6E90\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u5219\u628A\u8BE5cookie\u9644\u5728\u8BF7\u6C42\u8D44\u6E90\u7684HTTP\u8BF7\u6C42\u5934\u4E0A\u53D1\u9001\u7ED9\u670D\u52A1\u5668\u3002\u6709\u4E86Cookie\u8FD9\u6837\u7684\u6280\u672F\u5B9E\u73B0\uFF0C\u670D\u52A1\u5668\u5728\u63A5\u6536\u5230\u6765\u81EA\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u7684\u8BF7\u6C42\u4E4B\u540E\uFF0C\u5C31\u80FD\u591F\u901A\u8FC7\u5206\u6790\u5B58\u653E\u4E8E\u8BF7\u6C42\u5934\u7684Cookie\u5F97\u5230\u5BA2\u6237\u7AEF\u7279\u6709\u7684\u4FE1\u606F\uFF0C\u4ECE\u800C\u52A8\u6001\u751F\u6210\u4E0E\u8BE5\u5BA2\u6237\u7AEF\u76F8\u5BF9\u5E94\u7684\u5185\u5BB9\u3002\u901A\u5E38\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u5F88\u591A\u7F51\u7AD9\u7684\u767B\u5F55\u754C\u9762\u4E2D\u770B\u5230\u201C\u8BF7\u8BB0\u4F4F\u6211\u201D\u8FD9\u6837\u7684\u9009\u9879\uFF0C\u5982\u679C\u4F60\u52FE\u9009\u4E86\u5B83\u4E4B\u540E\u518D\u767B\u5F55\uFF0C\u90A3\u4E48\u5728\u4E0B\u4E00\u6B21\u8BBF\u95EE\u8BE5\u7F51\u7AD9\u7684\u65F6\u5019\u5C31\u4E0D\u9700\u8981\u8FDB\u884C\u91CD\u590D\u800C\u7E41\u7410\u7684\u767B\u5F55\u52A8\u4F5C\u4E86\uFF0C\u800C\u8FD9\u4E2A\u529F\u80FD\u5C31\u662F\u901A\u8FC7Cookie\u5B9E\u73B0\u7684\u3002</p><ul><li><strong>\u4EC0\u4E48\u662FSession</strong></li></ul><p>Session\u4E00\u822C\u53EB\u505A\u4F1A\u8BDD\uFF0CSession\u6280\u672F\u662Fhttp\u72B6\u6001\u4FDD\u6301\u5728\u670D\u52A1\u7AEF\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u662F\u901A\u8FC7\u670D\u52A1\u5668\u6765\u4FDD\u6301\u72B6\u6001\u7684\u3002\u6211\u4EEC\u53EF\u4EE5\u628A\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u4E00\u7CFB\u5217\u4EA4\u4E92\u7684\u52A8\u4F5C\u79F0\u4E3A\u4E00\u4E2A Session\u3002\u662F\u670D\u52A1\u5668\u7AEF\u4E3A\u5BA2\u6237\u7AEF\u6240\u5F00\u8F9F\u7684\u5B58\u50A8\u7A7A\u95F4\uFF0C\u5728\u5176\u4E2D\u4FDD\u5B58\u7684\u4FE1\u606F\u5C31\u662F\u7528\u4E8E\u4FDD\u6301\u72B6\u6001\u3002\u56E0\u6B64\uFF0Csession\u662F\u89E3\u51B3http\u534F\u8BAE\u65E0\u72B6\u6001\u95EE\u9898\u7684\u670D\u52A1\u7AEF\u89E3\u51B3\u65B9\u6848\uFF0C\u5B83\u80FD\u8BA9\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E00\u7CFB\u5217\u4EA4\u4E92\u52A8\u4F5C\u53D8\u6210\u4E00\u4E2A\u5B8C\u6574\u7684\u4E8B\u52A1\u3002</p><ul><li><strong>Session\u7684\u521B\u5EFA</strong></li></ul><p>\u90A3\u4E48Session\u5728\u4F55\u65F6\u521B\u5EFA\u5462\uFF1F\u5F53\u7136\u8FD8\u662F\u5728\u670D\u52A1\u5668\u7AEF\u7A0B\u5E8F\u8FD0\u884C\u7684\u8FC7\u7A0B\u4E2D\u521B\u5EFA\u7684\uFF0C\u4E0D\u540C\u8BED\u8A00\u5B9E\u73B0\u7684\u5E94\u7528\u7A0B\u5E8F\u6709\u4E0D\u540C\u521B\u5EFASession\u7684\u65B9\u6CD5\u3002</p><p>\u5F53\u5BA2\u6237\u7AEF\u7B2C\u4E00\u6B21\u8BF7\u6C42\u670D\u52A1\u7AEF\uFF0C\u5F53server\u7AEF\u7A0B\u5E8F\u8C03\u7528 HttpServletRequest.getSession(true)\u8FD9\u6837\u7684\u8BED\u53E5\u65F6\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u5668\u4F1A\u4E3A\u5BA2\u6237\u7AEF\u521B\u5EFA\u4E00\u4E2Asession\uFF0C\u5E76\u5C06\u901A\u8FC7\u7279\u6B8A\u7B97\u6CD5\u7B97\u51FA\u4E00\u4E2Asession\u7684ID\uFF0C\u7528\u6765\u6807\u8BC6\u8BE5session\u5BF9\u8C61\u3002</p><p>Session\u5B58\u50A8\u5728\u670D\u52A1\u5668\u7684\u5185\u5B58\u4E2D(tomcat\u670D\u52A1\u5668\u901A\u8FC7StandardManager\u7C7B\u5C06session\u5B58\u50A8\u5728\u5185\u5B58\u4E2D)\uFF0C\u4E5F\u53EF\u4EE5\u6301\u4E45\u5316\u5230file\uFF0C\u6570\u636E\u5E93\uFF0Cmemcache\uFF0Credis\u7B49\u3002\u5BA2\u6237\u7AEF\u53EA\u4FDD\u5B58sessionid\u5230cookie\u4E2D\uFF0C\u800C\u4E0D\u4F1A\u4FDD\u5B58session\u3002</p><p>\u6D4F\u89C8\u5668\u7684\u5173\u95ED\u5E76\u4E0D\u4F1A\u5BFC\u81F4Session\u7684\u5220\u9664\uFF0C\u53EA\u6709\u5F53\u8D85\u65F6\u3001\u7A0B\u5E8F\u8C03\u7528HttpSession.invalidate()\u4EE5\u53CA\u670D\u52A1\u7AEF\u7A0B\u5E8F\u5173\u95ED\u624D\u4F1A\u5220\u9664\u3002</p><ul><li><strong>Tomcat\u4E2D\u7684Session\u521B\u5EFA</strong></li></ul><p><code>ManagerBase</code>\u662F\u6240\u6709session\u7BA1\u7406\u5DE5\u5177\u7C7B\u7684\u57FA\u7C7B\uFF0C\u5B83\u662F\u4E00\u4E2A\u62BD\u8C61\u7C7B\uFF0C\u6240\u6709\u5177\u4F53\u5B9E\u73B0session\u7BA1\u7406\u529F\u80FD\u7684\u7C7B\u90FD\u8981\u7EE7\u627F\u8FD9\u4E2A\u7C7B\uFF0C\u8BE5\u7C7B\u6709\u4E00\u4E2A\u53D7\u4FDD\u62A4\u7684\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u5C31\u662F\u521B\u5EFAsessionId\u503C\u7684\u65B9\u6CD5\uFF1A</p><p>(tomcat\u7684session\u7684id\u503C\u751F\u6210\u7684\u673A\u5236\u662F\u4E00\u4E2A\u968F\u673A\u6570\u52A0\u65F6\u95F4\u52A0\u4E0Ajvm\u7684id\u503C\uFF0Cjvm\u7684id\u503C\u4F1A\u6839\u636E\u670D\u52A1\u5668\u7684\u786C\u4EF6\u4FE1\u606F\u8BA1\u7B97\u5F97\u6765\uFF0C\u56E0\u6B64\u4E0D\u540Cjvm\u7684id\u503C\u90FD\u662F\u552F\u4E00\u7684)\u3002</p><p><code>StandardManager</code>\u7C7B\u662Ftomcat\u5BB9\u5668\u91CC\u9ED8\u8BA4\u7684session\u7BA1\u7406\u5B9E\u73B0\u7C7B\uFF0C\u5B83\u4F1A\u5C06session\u7684\u4FE1\u606F\u5B58\u50A8\u5230web\u5BB9\u5668\u6240\u5728\u670D\u52A1\u5668\u7684\u5185\u5B58\u91CC\u3002 <code>PersistentManagerBase</code>\u4E5F\u662F\u7EE7\u627FManagerBase\u7C7B\uFF0C\u5B83\u662F\u6240\u6709\u6301\u4E45\u5316\u5B58\u50A8session\u4FE1\u606F\u7684\u57FA\u7C7B\uFF0CPersistentManager\u7EE7\u627F\u4E86PersistentManagerBase\uFF0C\u4F46\u662F\u8FD9\u4E2A\u7C7B\u53EA\u662F\u591A\u4E86\u4E00\u4E2A\u9759\u6001\u53D8\u91CF\u548C\u4E00\u4E2AgetName\u65B9\u6CD5\uFF0C\u76EE\u524D\u770B\u6765\u610F\u4E49\u4E0D\u5927\uFF0C\u5BF9\u4E8E\u6301\u4E45\u5316\u5B58\u50A8session\uFF0Ctomcat\u8FD8\u63D0\u4F9B\u4E86StoreBase\u7684\u62BD\u8C61\u7C7B\uFF0C\u5B83\u662F\u6240\u6709\u6301\u4E45\u5316\u5B58\u50A8session\u7684\u57FA\u7C7B\uFF0C\u53E6\u5916tomcat\u8FD8\u7ED9\u51FA\u4E86\u6587\u4EF6\u5B58\u50A8FileStore\u548C\u6570\u636E\u5B58\u50A8JDBCStore\u4E24\u4E2A\u5B9E\u73B0\u3002</p><ul><li><strong>Cookie\u4E0ESession\u7684\u5173\u7CFB</strong></li></ul><p>cookie\u548Csession\u7684\u65B9\u6848\u867D\u7136\u5206\u522B\u5C5E\u4E8E\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\uFF0C\u4F46\u662F\u670D\u52A1\u7AEF\u7684session\u7684\u5B9E\u73B0\u5BF9\u5BA2\u6237\u7AEF\u7684cookie\u6709\u4F9D\u8D56\u5173\u7CFB\u7684\uFF0C\u670D\u52A1\u7AEF\u6267\u884Csession\u673A\u5236\u65F6\u5019\u4F1A\u751F\u6210session\u7684id\u503C\uFF0C\u8FD9\u4E2Aid\u503C\u4F1A\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u628A\u8FD9\u4E2Aid\u503C\u653E\u5230http\u8BF7\u6C42\u7684\u5934\u90E8\u53D1\u9001\u7ED9\u670D\u52A1\u7AEF\uFF0C\u800C\u8FD9\u4E2Aid\u503C\u5728\u5BA2\u6237\u7AEF\u4F1A\u4FDD\u5B58\u4E0B\u6765\uFF0C\u4FDD\u5B58\u7684\u5BB9\u5668\u5C31\u662Fcookie\uFF0C\u56E0\u6B64\u5F53\u6211\u4EEC\u5B8C\u5168\u7981\u6389\u6D4F\u89C8\u5668\u7684cookie\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u7684session\u4E5F\u4F1A\u4E0D\u80FD\u6B63\u5E38\u4F7F\u7528\u3002</p><h2 id="_2-\u4F1A\u8BDD\u6280\u672F\u7684\u53D1\u5C55" tabindex="-1"><a class="header-anchor" href="#_2-\u4F1A\u8BDD\u6280\u672F\u7684\u53D1\u5C55" aria-hidden="true">#</a> 2. \u4F1A\u8BDD\u6280\u672F\u7684\u53D1\u5C55</h2><blockquote><p>\u4F1A\u8BDD\u6280\u672F\u7684\u53D1\u5C55?</p></blockquote><ul><li>\u5355\u673A - Session + Cookie</li><li>\u591A\u673A\u5668 <ul><li>\u5728\u8D1F\u8F7D\u5747\u8861\u4FA7 - Session \u7C98\u6EDE</li><li>Session\u6570\u636E\u540C\u6B65</li></ul></li><li>\u591A\u673A\u5668\uFF0C\u96C6\u7FA4 - session\u96C6\u4E2D\u7BA1\u7406\uFF0C\u6BD4\u5982redis\uFF1B\u76EE\u524D\u65B9\u6848\u4E0A\u7528\u7684\u6700\u591A\u7684\u662FSpringSession\uFF0C\u65E9\u524D\u4E5F\u6709\u7528tomcat\u96C6\u6210\u65B9\u5F0F\u7684\u3002</li><li>\u65E0\u72B6\u6001token\uFF0C\u6BD4\u5982JWT</li></ul><h2 id="_3-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u7684\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_3-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u7684\u65B9\u6848" aria-hidden="true">#</a> 3. \u5206\u5E03\u5F0F\u4F1A\u8BDD\u7684\u65B9\u6848</h2><blockquote><p>\u65E0\u72B6\u6001\u7684token\u6216\u8005\u6709\u72B6\u6001\u7684Session\u96C6\u4E2D\u7BA1\u7406\u662F\u76EE\u524D\u6700\u4E3A\u5E38\u7528\u7684\u65B9\u6848\uFF0C \u672C\u8282\u4E3B\u8981\u8BA8\u8BBA\u7684\u6709\u72B6\u6001\u7684\u5206\u5E03\u5F0FSession\u4F1A\u8BDD\u3002</p></blockquote><h3 id="_3-1-session-stick" tabindex="-1"><a class="header-anchor" href="#_3-1-session-stick" aria-hidden="true">#</a> 3.1 Session Stick</h3><blockquote><p>\u4E3A\u4EC0\u4E48\u8FD9\u79CD\u65B9\u6848\u5230\u76EE\u524D\u8FD8\u6709\u5F88\u591A\u9879\u76EE\u4F7F\u7528\u5462\uFF1F\u56E0\u4E3A\u4E0D\u9700\u8981\u5728\u9879\u76EE\u4EE3\u7801\u4FA7\u6539\u52A8\uFF0C\u800C\u662F\u53EA\u9700\u8981\u5728\u8D1F\u8F7D\u5747\u8861\u4FA7\u6539\u52A8\u3002</p></blockquote><p>\u65B9\u6848\u5373\u5C06\u5BA2\u6237\u7AEF\u7684\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8F6C\u53D1\u81F3\u540C\u4E00\u53F0\u670D\u52A1\u5668\uFF0C\u8FD9\u5C31\u9700\u8981\u8D1F\u8F7D\u5747\u8861\u5668\u80FD\u591F\u6839\u636E\u6BCF\u6B21\u8BF7\u6C42\u7684\u4F1A\u8BDD\u6807\u8BC6\uFF08SessionId\uFF09\u6765\u8FDB\u884C\u8BF7\u6C42\u8F6C\u53D1\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623225012021.png" alt="image-20220623225012021" style="zoom:50%;"><p>\u8FD9\u79CD\u65B9\u6848\u5B9E\u73B0\u6BD4\u8F83\u7B80\u5355\uFF0C\u5BF9\u4E8EWeb\u670D\u52A1\u5668\u6765\u8BF4\u548C\u5355\u673A\u7684\u60C5\u51B5\u4E00\u6837\u3002\u4F46\u662F\u53EF\u80FD\u4F1A\u5E26\u6765\u5982\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u5982\u679C\u6709\u4E00\u53F0\u670D\u52A1\u5668\u5B95\u673A\u6216\u8005\u91CD\u542F\uFF0C\u90A3\u4E48\u8FD9\u53F0\u673A\u5668\u4E0A\u7684\u4F1A\u8BDD\u6570\u636E\u4F1A\u5168\u90E8\u4E22\u5931\u3002</li><li>\u4F1A\u8BDD\u6807\u8BC6\u662F\u5E94\u7528\u5C42\u4FE1\u606F\uFF0C\u90A3\u4E48\u8D1F\u8F7D\u5747\u8861\u8981\u5C06\u540C\u4E00\u4E2A\u4F1A\u8BDD\u7684\u8BF7\u6C42\u90FD\u4FDD\u5B58\u5230\u540C\u4E00\u4E2AWeb\u670D\u52A1\u5668\u4E0A\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u8FDB\u884C\u5E94\u7528\u5C42\uFF08\u7B2C7\u5C42\uFF09\u7684\u89E3\u6790\uFF0C\u8FD9\u4E2A\u5F00\u9500\u6BD4\u7B2C4\u5C42\u5927\u3002</li><li>\u8D1F\u8F7D\u5747\u8861\u5668\u5C06\u53D8\u6210\u4E00\u4E2A\u6709\u72B6\u6001\u7684\u8282\u70B9\uFF0C\u8981\u5C06\u4F1A\u8BDD\u4FDD\u5B58\u5230\u5177\u4F53Web\u670D\u52A1\u5668\u7684\u6620\u5C04\u3002\u548C\u65E0\u72B6\u6001\u8282\u70B9\u76F8\u6BD4\uFF0C\u5185\u5B58\u6D88\u8017\u66F4\u5927\uFF0C\u5BB9\u707E\u65B9\u9762\u4E5F\u4F1A\u66F4\u9EBB\u70E6\u3002</li></ul><h3 id="_3-2-session-replication" tabindex="-1"><a class="header-anchor" href="#_3-2-session-replication" aria-hidden="true">#</a> 3.2 Session Replication</h3><p>Session Replication \u7684\u65B9\u6848\u5219\u4E0D\u5BF9\u8D1F\u8F7D\u5747\u8861\u5668\u505A\u66F4\u6539\uFF0C\u800C\u662F\u5728Web\u670D\u52A1\u5668\u4E4B\u95F4\u589E\u52A0\u4E86\u4F1A\u8BDD\u6570\u636E\u540C\u6B65\u7684\u529F\u80FD\uFF0C\u5404\u4E2A\u670D\u52A1\u5668\u4E4B\u95F4\u901A\u8FC7\u540C\u6B65\u4FDD\u8BC1\u4E0D\u540CWeb\u670D\u52A1\u5668\u4E4B\u95F4\u7684Session\u6570\u636E\u7684\u4E00\u81F4\u6027\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623225319136.png" alt="image-20220623225319136" style="zoom:50%;"><p>Session Replication \u65B9\u6848\u5BF9\u8D1F\u8F7D\u5747\u8861\u5668\u4E0D\u518D\u6709\u8981\u6C42\uFF0C\u4F46\u662F\u540C\u6837\u4F1A\u5E26\u6765\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u540C\u6B65Session\u6570\u636E\u4F1A\u9020\u6210\u989D\u5916\u7684\u7F51\u7EDC\u5E26\u5BBD\u7684\u5F00\u9500\uFF0C\u53EA\u8981Session\u6570\u636E\u6709\u53D8\u5316\uFF0C\u5C31\u9700\u8981\u5C06\u65B0\u4EA7\u751F\u7684Session\u6570\u636E\u540C\u6B65\u5230\u5176\u4ED6\u670D\u52A1\u5668\u4E0A\uFF0C\u670D\u52A1\u5668\u6570\u91CF\u8D8A\u591A\uFF0C\u540C\u6B65\u5E26\u6765\u7684\u7F51\u7EDC\u5E26\u5BBD\u5F00\u9500\u4E5F\u5C31\u8D8A\u5927\u3002</li><li>\u6BCF\u53F0Web\u670D\u52A1\u5668\u90FD\u9700\u8981\u4FDD\u5B58\u5168\u90E8\u7684Session\u6570\u636E\uFF0C\u5982\u679C\u6574\u4E2A\u96C6\u7FA4\u7684Session\u6570\u91CF\u592A\u591A\u7684\u8BDD\uFF0C\u5219\u5BF9\u4E8E\u6BCF\u53F0\u673A\u5668\u7528\u4E8E\u4FDD\u5B58Session\u6570\u636E\u7684\u5360\u7528\u4F1A\u5F88\u4E25\u91CD\u3002</li></ul><h3 id="_3-3-session-\u6570\u636E\u96C6\u4E2D\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#_3-3-session-\u6570\u636E\u96C6\u4E2D\u5B58\u50A8" aria-hidden="true">#</a> 3.3 Session \u6570\u636E\u96C6\u4E2D\u5B58\u50A8</h3><p>Session \u6570\u636E\u96C6\u4E2D\u5B58\u50A8\u65B9\u6848\u5219\u662F\u5C06\u96C6\u7FA4\u4E2D\u7684\u6240\u6709Session\u96C6\u4E2D\u5B58\u50A8\u8D77\u6765\uFF0CWeb\u670D\u52A1\u5668\u672C\u8EAB\u5219\u5E76\u4E0D\u5B58\u50A8Session\u6570\u636E\uFF0C\u4E0D\u540C\u7684Web\u670D\u52A1\u5668\u4ECE\u540C\u6837\u7684\u5730\u65B9\u6765\u83B7\u53D6Session\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623225533405.png" alt="image-20220623225533405" style="zoom:50%;"><p>\u76F8\u5BF9\u4E8ESession Replication\u65B9\u6848\uFF0C\u6B64\u65B9\u6848\u7684Session\u6570\u636E\u5C06\u4E0D\u4FDD\u5B58\u5728\u672C\u673A\uFF0C\u5E76\u4E14Web\u670D\u52A1\u5668\u4E4B\u95F4\u4E5F\u6CA1\u6709\u4E86Session\u6570\u636E\u7684\u590D\u5236\uFF0C\u4F46\u662F\u8BE5\u65B9\u6848\u5B58\u5728\u7684\u95EE\u9898\u5728\u4E8E\uFF1A</p><ul><li>\u8BFB\u5199Session\u6570\u636E\u5F15\u5165\u4E86\u7F51\u7EDC\u64CD\u4F5C\uFF0C\u8FD9\u76F8\u5BF9\u4E8E\u672C\u673A\u7684\u6570\u636E\u8BFB\u53D6\u6765\u8BF4\uFF0C\u95EE\u9898\u5C31\u5728\u4E8E\u5B58\u5728\u65F6\u5EF6\u548C\u4E0D\u7A33\u5B9A\u6027\uFF0C\u4F46\u662F\u901A\u4FE1\u53D1\u751F\u5728\u5185\u7F51\uFF0C\u5219\u95EE\u9898\u4E0D\u5927\u3002</li><li>\u5982\u679C\u96C6\u4E2D\u5B58\u50A8Session\u7684\u673A\u5668\u6216\u96C6\u7FA4\u51FA\u73B0\u95EE\u9898\uFF0C\u5219\u4F1A\u5F71\u54CD\u5E94\u7528\u3002</li></ul><h3 id="_3-4-cookie-based" tabindex="-1"><a class="header-anchor" href="#_3-4-cookie-based" aria-hidden="true">#</a> 3.4 Cookie Based</h3><p>Cookie Based \u65B9\u6848\u662F\u5C06<strong>Session\u6570\u636E\u653E\u5728Cookie\u91CC</strong>\uFF0C\u8BBF\u95EEWeb\u670D\u52A1\u5668\u7684\u65F6\u5019\uFF0C\u518D\u7531Web\u670D\u52A1\u5668\u751F\u6210\u5BF9\u5E94\u7684Session\u6570\u636E\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623225744196.png" alt="image-20220623225744196" style="zoom:50%;"><p>\u4F46\u662FCookie Based \u65B9\u6848\u4F9D\u7136\u5B58\u5728\u4E0D\u8DB3\uFF1A</p><ul><li>Cookie\u957F\u5EA6\u7684\u9650\u5236\u3002\u8FD9\u4F1A\u5BFC\u81F4Session\u957F\u5EA6\u7684\u9650\u5236\u3002</li><li>\u5B89\u5168\u6027\u3002Seesion\u6570\u636E\u672C\u6765\u662F\u670D\u52A1\u7AEF\u6570\u636E\uFF0C\u5374\u88AB\u4FDD\u5B58\u5728\u4E86\u5BA2\u6237\u7AEF\uFF0C\u5373\u4F7F\u53EF\u4EE5\u52A0\u5BC6\uFF0C\u4F46\u662F\u4F9D\u7136\u5B58\u5728\u4E0D\u5B89\u5168\u6027\u3002</li><li>\u5E26\u5BBD\u6D88\u8017\u3002\u8FD9\u91CC\u4E0D\u662F\u6307\u5185\u90E8Web\u670D\u52A1\u5668\u4E4B\u95F4\u7684\u5BBD\u5E26\u6D88\u8017\uFF0C\u800C\u662F\u6570\u636E\u4E2D\u5FC3\u7684\u6574\u4F53\u5916\u90E8\u5E26\u5BBD\u7684\u6D88\u8017\u3002</li><li>\u6027\u80FD\u5F71\u54CD\u3002\u6BCF\u6B21HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u90FD\u5E26\u6709Seesion\u6570\u636E\uFF0C\u5BF9Web\u670D\u52A1\u5668\u6765\u8BF4\uFF0C\u5728\u540C\u6837\u7684\u5904\u7406\u60C5\u51B5\u4E0B\uFF0C\u54CD\u5E94\u7684\u7ED3\u679C\u8F93\u51FA\u8D8A\u5C11\uFF0C\u652F\u6301\u7684\u5E76\u53D1\u5C31\u4F1A\u8D8A\u9AD8\u3002</li></ul><h2 id="_4-token" tabindex="-1"><a class="header-anchor" href="#_4-token" aria-hidden="true">#</a> 4. Token</h2><p>JSON Web Token\uFF0C\u4E00\u822C\u7528\u5B83\u6765\u66FF\u6362\u6389Session\u5B9E\u73B0\u6570\u636E\u5171\u4EAB\u3002</p><p>\u4F7F\u7528\u57FA\u4E8E Token \u7684\u8EAB\u4EFD\u9A8C\u8BC1\u65B9\u6CD5\uFF0C\u5728\u670D\u52A1\u7AEF\u4E0D\u9700\u8981\u5B58\u50A8\u7528\u6237\u7684\u767B\u5F55\u8BB0\u5F55\u3002\u5927\u6982\u7684\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A</p><ul><li>1\u3001\u5BA2\u6237\u7AEF\u901A\u8FC7\u7528\u6237\u540D\u548C\u5BC6\u7801\u767B\u5F55\u670D\u52A1\u5668\uFF1B</li><li>2\u3001\u670D\u52A1\u7AEF\u5BF9\u5BA2\u6237\u7AEF\u8EAB\u4EFD\u8FDB\u884C\u9A8C\u8BC1\uFF1B</li><li>3\u3001\u670D\u52A1\u7AEF\u5BF9\u8BE5\u7528\u6237\u751F\u6210Token\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF1B</li><li>4\u3001\u5BA2\u6237\u7AEF\u5C06Token\u4FDD\u5B58\u5230\u672C\u5730\u6D4F\u89C8\u5668\uFF0C\u4E00\u822C\u4FDD\u5B58\u5230cookie\u4E2D\uFF1B</li><li>5\u3001\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u9700\u8981\u643A\u5E26\u8BE5Token\uFF1B</li><li>6\u3001\u670D\u52A1\u7AEF\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u9996\u5148\u9A8C\u8BC1Token\uFF0C\u4E4B\u540E\u8FD4\u56DE\u6570\u636E</li></ul><p><img src="https://zszblog.oss-cn-beijing.aliyuncs.com/zszblog/image-20220623230215140.png" alt="image-20220623230215140"></p><p><strong>\u4F18\u70B9</strong>\uFF1A</p><ul><li>\u65E0\u72B6\u6001\u3001\u53EF\u6269\u5C55 \uFF1A\u5728\u5BA2\u6237\u7AEF\u5B58\u50A8\u7684Token\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u5E76\u4E14\u80FD\u591F\u88AB\u6269\u5C55\u3002\u57FA\u4E8E\u8FD9\u79CD\u65E0\u72B6\u6001\u548C\u4E0D\u5B58\u50A8Session\u4FE1\u606F\uFF0C\u8D1F\u8F7D\u5747\u8861\u5668\u80FD\u591F\u5C06\u7528\u6237\u4FE1\u606F\u4ECE\u4E00\u4E2A\u670D\u52A1\u4F20\u5230\u5176\u4ED6\u670D\u52A1\u5668\u4E0A\u3002</li><li>\u5B89\u5168\uFF1A\u8BF7\u6C42\u4E2D\u53D1\u9001token\u800C\u4E0D\u518D\u662F\u53D1\u9001cookie\u80FD\u591F\u9632\u6B62CSRF(\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020)\u3002</li><li>\u53EF\u63D0\u4F9B\u63A5\u53E3\u7ED9\u7B2C\u4E09\u65B9\u670D\u52A1\uFF1A\u4F7F\u7528token\u65F6\uFF0C\u53EF\u4EE5\u63D0\u4F9B\u53EF\u9009\u7684\u6743\u9650\u7ED9\u7B2C\u4E09\u65B9\u5E94\u7528\u7A0B\u5E8F\u3002</li><li>\u591A\u5E73\u53F0\u8DE8\u57DF</li></ul><p>\u5BF9\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u8FDB\u884C\u6269\u5C55\u7684\u65F6\u5019\uFF0C\u9700\u8981\u4ECB\u5165\u5404\u79CD\u5404\u79CD\u7684\u8BBE\u5907\u548C\u5E94\u7528\u7A0B\u5E8F\u3002 \u5047\u5982\u6211\u4EEC\u7684\u540E\u7AEFapi\u670D\u52A1\u5668a.com\u53EA\u63D0\u4F9B\u6570\u636E\uFF0C\u800C\u9759\u6001\u8D44\u6E90\u5219\u5B58\u653E\u5728cdn \u670D\u52A1\u5668b.com\u4E0A\u3002\u5F53\u6211\u4EEC\u4ECEa.com\u8BF7\u6C42b.com\u4E0B\u9762\u7684\u8D44\u6E90\u65F6\uFF0C\u7531\u4E8E\u89E6\u53D1\u6D4F\u89C8\u5668\u7684\u540C\u6E90\u7B56\u7565\u9650\u5236\u800C\u88AB\u963B\u6B62\u3002</p><p><strong>\u6211\u4EEC\u901A\u8FC7CORS\uFF08\u8DE8\u57DF\u8D44\u6E90\u5171\u4EAB\uFF09\u6807\u51C6\u548Ctoken\u6765\u89E3\u51B3\u8D44\u6E90\u5171\u4EAB\u548C\u5B89\u5168\u95EE\u9898</strong>\u3002</p><p>\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6Eb.com\u7684\u54CD\u5E94\u9996\u90E8\u5B57\u6BB5\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u7B2C\u4E00\u884C\u6307\u5B9A\u4E86\u5141\u8BB8\u8BBF\u95EE\u8BE5\u8D44\u6E90\u7684\u5916\u57DF URI\u3002\nAccess-Control-Allow-Origin: http://a.com\n\n// \u7B2C\u4E8C\u884C\u6307\u660E\u4E86\u5B9E\u9645\u8BF7\u6C42\u4E2D\u5141\u8BB8\u643A\u5E26\u7684\u9996\u90E8\u5B57\u6BB5\uFF0C\u8FD9\u91CC\u52A0\u5165\u4E86Authorization\uFF0C\u7528\u6765\u5B58\u653Etoken\u3002\nAccess-Control-Allow-Headers: Authorization, X-Requested-With, Content-Type, Accept\n\n// \u7B2C\u4E09\u884C\u7528\u4E8E\u9884\u68C0\u8BF7\u6C42\u7684\u54CD\u5E94\u3002\u5176\u6307\u660E\u4E86\u5B9E\u9645\u8BF7\u6C42\u6240\u5141\u8BB8\u4F7F\u7528\u7684 HTTP \u65B9\u6CD5\u3002\nAccess-Control-Allow-Methods: GET, POST, PUT,DELETE\n\n// \u7136\u540E\u7528\u6237\u4ECEa.com\u643A\u5E26\u6709\u4E00\u4E2A\u901A\u8FC7\u4E86\u9A8C\u8BC1\u7684token\u8BBF\u95EEB\u57DF\u540D\uFF0C\u6570\u636E\u548C\u8D44\u6E90\u5C31\u80FD\u591F\u5728\u4EFB\u4F55\u57DF\u4E0A\u88AB\u8BF7\u6C42\u5230\u3002\n\n  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>', 72);
const _hoisted_73 = {
  href: "https://pdai.tech/md/arch/arch-z-session.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_74 = /* @__PURE__ */ createBaseVNode("strong", null, "\u5206\u5E03\u5F0F\u7CFB\u7EDF - \u5206\u5E03\u5F0F\u4F1A\u8BDD\u53CA\u5B9E\u73B0\u65B9\u6848", -1);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    createBaseVNode("p", null, [
      createBaseVNode("a", _hoisted_73, [
        _hoisted_74,
        createVNode(_component_ExternalLinkIcon)
      ])
    ])
  ]);
}
var _________________html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "\u5206\u5E03\u5F0F\u7CFB\u7EDF-\u5206\u5E03\u5F0F\u4F1A\u8BDD\u53CA\u5B9E\u73B0\u65B9\u6848.html.vue"]]);
export { _________________html as default };
