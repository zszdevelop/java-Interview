exports.mulu = {
    title: '权限管理系统',   // 必要的
    //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    collapsable: true, // 可选的, 默认值是 true,
    sidebarDepth: 1,    // 可选的, 默认值是 1
    children: [
        {
            title: 'RBAC权限管理',   // 必要的
            path: 'rbac/RBAC权限管理.md'
        }, {
            title: '权限认证基础',   // 必要的
            path: 'rbac/base/权限认证基础.md'
        },
        {
            title: 'shiro',   // 必要的
            //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'shiro基础',   // 必要的
                    path: 'rbac/shiro/shiro基础.md'
                },
                {
                    title: 'SpringBoot整合shiro',   // 必要的
                    path: 'rbac/shiro/SpringBoot整合shiro.md'
                },
                {
                    title: 'Shiro与JWT整合',   // 必要的
                    path: 'rbac/shiro/Shiro与JWT整合.md'
                }
            ]
        },
        {
            title: 'Spring Security',   // 必要的
            //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'SpringBoot整合Spring Security',   // 必要的
                    path: 'rbac/SpringSecurity/SpringBoot整合SpringSecurity.md'
                },
                {
                    title: 'Spring Security入门',   // 必要的
                    path: 'rbac/SpringSecurity/SpringSecurity入门.md'
                }
            ]
        },
        {
            title: 'OAuth2',   // 必要的
            //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'OAuth2基础',   // 必要的
                    path: 'rbac/oauth2/OAuth2基础.md'
                }
            ]
        },
        {
            title: 'jwt',   // 必要的
            //path: '/base/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
                {
                    title: 'JWT详解',   // 必要的
                    path: 'rbac/jwt/JWT详解.md'
                }
            ]
        }
    ]
}