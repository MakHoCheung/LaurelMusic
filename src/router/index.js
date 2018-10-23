import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/home.vue';
import Search from '@/components/search.vue';
import PlayList from '@/components/playlist.vue';
import Rank from '@/components/rank';
import AdviceSinger from '@/components/advice-singer';
Vue.use(VueRouter);

export default new VueRouter(
  {
      routes: [
          { path: '/', component: Home },
          { path: '/search', component: Search },
          { path: '/playlist', component: PlayList },
          { path: '/rank', component: Rank },
          {path:'/advice_singer',component: AdviceSinger}
      ]
  });