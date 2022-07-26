(window.webpackJsonp=window.webpackJsonp||[]).push([[985],{1361:function(e,t,s){"use strict";s.r(t);var n=s(26),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"mockito使用案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mockito使用案例"}},[e._v("#")]),e._v(" Mockito使用案例")]),e._v(" "),s("h2",{attrs:{id:"业务场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务场景"}},[e._v("#")]),e._v(" 业务场景")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("需求")]),e._v(" "),s("p",[e._v("有一段业务逻辑，需要对给定的请求（如http请求）做处理，")])]),e._v(" "),s("li",[s("p",[e._v("常规测试:")]),e._v(" "),s("ol",[s("li",[e._v("需要把代码部署到服务器上")]),e._v(" "),s("li",[e._v("还需要构造并发起一个请求（前端配合/postman进行测试）")]),e._v(" "),s("li",[e._v("等服务器接收到请求后，才能交给业务处理")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('// 业务代码\npublic boolean handleRequest(HttpServletRequest request) {\n  String module = request.getParameter("module");\n  if ("live".equals(module)) {\n      // handle module live request\n      return true;\n  } else if ("user".equals(module)) {\n      // handle module user request\n      return true;\n  }\n  return false;\n}\n')])])])]),e._v(" "),s("li",[s("p",[e._v("常规测试面临的问题")])])]),e._v(" "),s("ol",[s("li",[e._v("操作繁琐")]),e._v(" "),s("li",[e._v("一次性操作")]),e._v(" "),s("li",[e._v("等待时间漫长")])]),e._v(" "),s("h2",{attrs:{id:"使用mockito测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用mockito测试"}},[e._v("#")]),e._v(" 使用Mockito测试")]),e._v(" "),s("p",[e._v("回顾需求：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("1. 给定一个特定的输入（这个输入可能不容易创建，如HttpRequest）\n2. 验证其输出结果是否正确\n")])])]),s("p",[e._v("也就是我们验证的过程要尽可能的方便，"),s("strong",[e._v("而不是把大部分时间耗费在验证过程")]),e._v("上")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('@Test\npublic void handleRequestTestLive() throws Exception {\n    HttpServletRequest request = mock(HttpServletRequest);\n    when(request.getParameter("module")).thenReturn("live");\n    \n    boolean ret = handleRequest(request);\n    assertEquals(true, ret)\n}\n\n@Test\npublic void handleRequestTestUser() throws Exception {\n    HttpServletRequest request = mock(HttpServletRequest);\n    when(request.getParameter("module")).thenReturn("user");\n    \n    boolean ret = handleRequest(request);\n    assertEquals(true, ret)\n}\n\n@Test\npublic void handleRequestTestNone() throws Exception {\n    HttpServletRequest request = mock(HttpServletRequest);\n    when(request.getParameter("module")).thenReturn(null);\n    \n    boolean ret = handleRequest(request);\n    assertEquals(false, ret)\n}\n')])])]),s("ol",[s("li",[s("p",[e._v("首先模拟出一个假对象")])]),e._v(" "),s("li",[s("p",[e._v("设置这个假对象行为")]),e._v(" "),s("p",[e._v("这个行为会影响我们业务结果")])]),e._v(" "),s("li",[s("p",[e._v("验证"),s("strong",[e._v("各种输入")]),e._v("下，业务逻辑正确性")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);