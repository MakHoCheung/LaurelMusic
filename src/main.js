import Vue from 'vue';
import App from './App.vue';
import Router from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import Home from './components/home.vue';
import Search from './components/search.vue';
import PlayList from './components/playlist.vue';

Vue.use(Router);
Vue.use(ElementUI);
//Vue.prototype.$http = axios;
const router = new VueRouter({
    routes: [
        { path: '/', component: Home }, { path: '/search', component: Search }, { path: '/playlist', component: PlayList }
    ]
});
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});