
export default {
    title: '老马烧鹅铺', //站点标题
    description: '一个vue3组件库',//mate标签description，多用于搜索引擎抓取摘要
    themeConfig: {
        siteTitle: "老马烧鹅铺",
        logo: "/logo.png",
        nav: [
            {
                text: "笔记",
                link: "/notes"
            },
            {
                text: "面试",
                link: "/meeting/vue.md"
            },
            {
                text: "笔试",
                link: "/write/one"
            },
            { text: "gitee", link: "https://gitee.com/monky-hou" },
            { text: "github", link: "https://github.com/123Monkyhou" },
        ],
        sidebar: {
            "/meeting/": [
                {
                    text: "vue相关",
                    collapsed: true,
                    collapsible: false,
                    items: [
                        {
                            text: "vue",
                            link: "/meeting/vue.md",
                        },
                    ],
                }
            ],
            "/notes/": [
                {
                    text: "设计模式",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "单例模式",
                            link: "/notes/desiginPattern/单例模式",
                        },
                        {
                            text: "工厂模式",
                            link: "/notes/desiginPattern/工厂模式",
                        },
                        {
                            text: "策略模式",
                            link: "/notes/desiginPattern/策略模式",
                        },
                        {
                            text: "装饰器模式",
                            link: "/notes/desiginPattern/装饰器模式",
                        },
                        {
                            text: "vue中用到的设计模式",
                            link: "/notes/desiginPattern/vue中用到的设计模式",
                        },
                    ]
                },
                {
                    text: "uniapp",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "实现push",
                            items: [
                                {
                                    text: "配置unipush",
                                    link: "/notes/uniapp/配置unipush",
                                },
                                {
                                    text: "生成安卓证书",
                                    link: "/notes/uniapp/生成安卓证书"
                                }
                            ]
                        },
                        {
                            text: "导入cesium",
                            link: "/notes/uniapp/导入cesium"
                        }
                    ]
                },
                {
                    text: "vue",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "vite搭建项目",
                            link: "/notes/vue/vite搭建项目",
                        },
                        {
                            text: "vue2Functional",
                            link: "/notes/vue/vue2Functional",
                        },
                    ],
                },
                {
                    text: "webpack",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "webpack优化",
                            link: "/notes/webpack/webpack优化",
                        },
                        {
                            text: "webpack搭建vue2",
                            link: "/notes/webpack/webpack搭建vue2",
                        },
                    ]
                },
                {
                    text: "其他",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "搭建私库",
                            link: "/notes/other/搭建私库",
                        },
                        {
                            text: "搭建组件库",
                            link: "/notes/other/搭建组件库",
                        },
                        {
                            text: "简易脚手架",
                            link: "/notes/other/简易脚手架",
                        }
                    ]
                },
                {
                    text: "ceisum",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "cesium笔记",
                            link: "/notes/cesium/cesium笔记",
                        }
                    ]
                },
                {
                    text: "react",
                    collapsible: true,
                    collapsed: false,
                    items: [
                        {
                            text: "环境配置",
                            link: "/notes/react/环境配置",
                        },
                        {
                            text: "基础配置",
                            link: "/notes/react/基础配置"
                        },
                        {
                            text: "组件相关",
                            link: "/notes/react/组件相关"
                        },
                        {
                            text: "hooks",
                            link: "/notes/react/hooks"
                        },
                        {
                            text: "相关工具",
                            link: "/notes/react/相关工具"
                        }
                    ]
                }
            ],
        },
    },

}