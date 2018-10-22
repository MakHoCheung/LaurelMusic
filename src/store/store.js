import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        player: {
            musicUrl: '',
            albumPicUrl: '',
            isPlaying: undefined,
            progress: 0,
            statusButtonIcon: 'el-icon-third-play-circle'
        }
    },
    mutations: {
        setPlayerState(state, playerState) {
            state.player.musicUrl = playerState.musicUrl;
            state.player.albumPicUrl = playerState.albumPicUrl;
            state.player.isPlaying = true;
            state.player.statusButtonIcon = 'el-icon-third-pause'
        },
        setPauseState(state) {
            if (state.player.isPlaying !== undefined) {
                state.player.isPlaying = false;
                state.player.statusButtonIcon = 'el-icon-third-play-circle';
            }
        },
        setPlayState(state) {
            if (state.player.isPlaying !== undefined) {
                state.player.isPlaying = true;
                state.player.statusButtonIcon = 'el-icon-third-pause';
            }
        },
        setProgress(state, playerState) {
            state.player.progress = playerState.progress;
        }
    }
});

export default store;
