import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store';
import './assets/icon/iconfont.css';
import Http from './http/http';
import router from './router/index';
Vue.use(ElementUI);
Vue.prototype.$http = Http;
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
});