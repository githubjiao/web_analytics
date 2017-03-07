// core js
import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

// global css
import '../../assets/css/common.less';

// pages
import App          from './app.vue';
import Analytics    from './Analytics.vue';
import Page1        from './Page1.vue';
import Page2        from './Page2.vue';
import Page3        from './Page3.vue';
import Page4        from './Page4.vue';
import VueAnalytics from 'vue-ua';

// add reference
Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'analytics',
        component: Analytics
    },
    {
        path: '/page1',
        name: 'page1',
        component: Page1
    },
    {
        path: '/page2',
        name: 'page2',
        component: Page2
    },
    {
        path: '/page3',
        name: 'page3',
        component: Page3
    },
    {
        path: '/page4',
        name: 'page4',
        component: Page4
    }
];
const router = new VueRouter({
    routes
});

Vue.use(VueAnalytics, {
    appName: 'testPage',
    appVersion: '1.0',
    trackingId: 'UA-93137220-1',
    debug: true,
    vueRouter: router
});

// components
import {
    table
} from 'element-ui';


Vue.use(table);

const app = new Vue({
    router,
    ...App
});

app.$mount('#app');
