import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: '首页',
        component: () => import("../views/home.vue"),
    },
    {
        path: "/test1",
        name: '请求、监听、计算属性',
        component: () => import("../views/test1/index.vue")
    },
    {
        path: "/test2",
        name: '父子组件传参',
        component: () => import("../views/test2/index.vue")
    },
    {
        path: "/test3",
        name: 'test3',
        component: () => import("../views/test3/index.vue")
    },
    {
        path: "/dynamic",//动态组件
        name: '动态组件',
        component: () => import("../views/dynamic-components/index.vue")
    },
    {
        path: "/hanlde",//手写签名
        name: '手写签名',
        component: () => import("../views/hanlde-sign/index.vue")
    },
    {
        path: "/dragtable",//拖拽表格
        name: '拖拽表格',
        component: () => import("../views/dragtable/index.vue")
    },
    {
        path: "/teleport",//Teleport 内置组件
        name: 'Teleport 内置组件',
        component: () => import("../views/teleport/index.vue")
    },
    {
        path: "/model",
        name: '父组件传参',
        component: () => import("@/views/model-computed/index.vue")
    },
    {
        path: "/404",
        name: '404页面',
        component: () => import("../views/404.vue")
    },
    {
        path: "/:catchAll(.*)", // 不识别的path自动匹配404
        redirect: '/404',
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router