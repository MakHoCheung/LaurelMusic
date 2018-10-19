import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import store from './store/store';
import Home from './components/home.vue';
import Search from './components/search.vue';
import PlayList from './components/playlist.vue';
import Rank from './components/rank';
import './assets/icon/iconfont.css';
Vue.use(VueRouter);
Vue.use(ElementUI);
const router = new VueRouter(
    {
        routes: [
            { path: '/', component: Home },
            { path: '/search', component: Search },
            { path: '/playlist', component: PlayList },
            { path: '/search', component: Search },
            { path: '/rank', component: Rank }
        ]
    });
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});