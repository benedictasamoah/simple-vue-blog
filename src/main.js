import Vue from 'vue';
import iView from 'iview';
import locale from 'iview/dist/locale/en-US';
import VueRouter from 'vue-router';
import Routers from './router';
import Util from './libs/util';
import App from './app.vue';

// import theme
import './style/iview.css';

Vue.use(VueRouter);

// Set default language to english
Vue.use(iView, { locale });

// Set router default mode to history
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

// Add loding bar to each page request
router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
