import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
const dishboardPages = import.meta.glob(['@/pages/dishboard/**/**.vue', '!@/pages/dishboard/home/index.vue'], {eager: false});
const systemPages = import.meta.glob('@/pages/system/**/**.vue', {eager: false});

const homeChildren: Array<RouteRecordRaw> = [];
homeChildrenAddRoutes(dishboardPages, /^\/src\/pages\/dishboard/);
homeChildrenAddRoutes(systemPages, /^\/src\/pages\/system/);

function homeChildrenAddRoutes(node: any, reg: RegExp) {
    for (const key in node) {
        let path = key.replace(reg, '').replace(/\/index.vue$/, '');
        homeChildren.push({
            path,
            component: () => import(/* @vite-ignore */ key)
        });
    }
}

const routes: Array<RouteRecordRaw> = [{
    path: '',
    redirect: '/login'
}, {
    path: '/home',
    component: () => import('@/pages/dishboard/home/index.vue'),
    children: [...homeChildren]
}, {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
}];

const router = createRouter({
    routes,
    history: createWebHistory(import.meta.env.BASE_URL)
});

export default router;