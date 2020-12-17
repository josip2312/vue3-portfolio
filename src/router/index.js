import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/work',
        name: 'Work',

        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Work.vue'),
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = createRouter({
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    },
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
