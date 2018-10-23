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
            statusButtonIcon: 'el-icon-third-play-circle',
            playList: [], //播放列表
            albumPicList: [],
            playingIndex: -1
        }
    },
    mutations: {
        setPlayerState(state, playerState) {
            state.player.musicUrl = playerState.musicUrl;
            state.player.albumPicUrl = playerState.albumPicUrl;
            state.player.isPlaying = true;
            state.player.statusButtonIcon = 'el-icon-third-pause';
            state.player.playList.push(playerState.musicUrl);
            state.player.albumPicList.push(playerState.albumPicUrl);
            state.player.playingIndex = state.player.playList.length + 1;
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
        },
        playNextSong(state) {
            if (state.player.playList.length !== 0) {
                if (state.player.playList.length === state.player.playingIndex + 1) {
                    state.player.playingIndex = -1;
                }
                let nextPlayingIndex = state.player.playingIndex + 1;
                let musicUrl = state.player.playList[nextPlayingIndex];
                let albumPicUrl = state.player.albumPicList[nextPlayingIndex];
                state.player.musicUrl = musicUrl;
                state.player.albumPicUrl = albumPicUrl;
                state.player.isPlaying = true;
                state.player.statusButtonIcon = 'el-icon-third-pause';
                state.player.playingIndex++;
            }
        }
    }
});

export default store;
