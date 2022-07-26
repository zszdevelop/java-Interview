(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{723:function(e,s,a){"use strict";a.r(s);var r=a(26),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mapper接口动态代理实现原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mapper接口动态代理实现原理"}},[e._v("#")]),e._v(" Mapper接口动态代理实现原理")]),e._v(" "),a("p",[e._v("为什么Mapper 接口没有实现类，却能被正常调用呢？")]),e._v(" "),a("p",[e._v("因为Mybatis在mapper接口上使用了动态代理的一种常规用法")]),e._v(" "),a("p",[e._v("假设有一个mapper接口")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public interface UserMapper {\n  \n    List<User> selectAll();\n}\n")])])]),a("p",[e._v("使用java动态代理方式创建一个代理类")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public class MyMapperProxy<T> implements InvocationHandler {\n    private Class<T> mapperInterface;\n    private SqlSession sqlSession;\n\n    public MyMapperProxy(Class<T> mapperInterface, SqlSession sqlSession) {\n        this.mapperInterface = mapperInterface;\n        this.sqlSession = sqlSession;\n    }\n\n    @Override\n    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\n        // 根据不同的sql类型，需要调用sqlSession的不同方法\n        // 接口方法中的参数可能有很多种情况，这里只考虑没有参数的情况\n        List<T> list = sqlSession.selectList(mapperInterface.getCanonicalName() + "." + method.getName());\n        // 返回值也有很多情况，这里不做处理直接返回\n        return list;\n    }\n}\n')])])]),a("p",[e._v("测试代码")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// 获取sqlSession\nSqlSession sqlSession = getSqlSession();\n// 获取UserMapper 接口\nMyMapperProxy userMapperMyMapperProxy = new MyMapperProxy<UserMapper>(UserMapper.class,sqlSession);\nUserMapper userMapper = (UserMapper) Proxy.newProxyInstance(Thread.currentThread().getContextClassLoader(),\n        new Class[]{UserMapper.class},\n        userMapperMyMapperProxy);\n// 调用selectAll方法\nList<User> users = userMapper.selectAll();\n")])])]),a("p",[e._v("从这个代理类可以看到，当调用一个接口的方法是，会先通过接口的全限定名称和当前调用的方法名的组合得到一个方法id，"),a("strong",[e._v("这个id 的值就是映射到xml中的namespace和具体方法id 的组合")])]),e._v(" "),a("p",[e._v("所以可以在代理方法中使用sqlSession以命名空间的方式调用方法，通过这种方式可以将接口和xml文件中的方法关联起来")])])}),[],!1,null,null,null);s.default=n.exports}}]);