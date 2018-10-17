import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        player: {
            musicUrl:'',
            albumPicUrl:''
        }
    },
    mutations: {
        setPlayerState(state,playerState){
            state.player.musicUrl = playerState.musicUrl;
            state.player.albumPicUrl = playerState.albumPicUrl;
        }
    }
});

export default store;
