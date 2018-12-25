<template>
  <el-row class="player" type="flex" align="middle">
    <el-col :span="2" :offset="1" class="player-avatar-area">
      <img class="player-avatar" :src="albumPicUrl">
    </el-col>
    <el-col :span="12" :offset="1">
      <audio autoplay :src="musicUrl" ref="audio" @timeupdate="updateProgress"></audio>
      <el-progress :percentage="progress" :show-text="false" color="#da4949"></el-progress>
    </el-col>
    <el-col :span="1" :offset="1">
      <el-button :icon="statusButtonIcon" circle @click="statusButtonClick" class="statusButton"></el-button>
    </el-col>
    <el-col :span="1" :offset="1">
      <el-button icon="el-icon-third-verticalleft" circle @click="nextButtonClick" class="nextButton"></el-button>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'palyer',
  data: function () {
    return {
    };
  },
  computed: {
    albumPicUrl() {
      return this.$store.state.player.albumPicUrl;
    },
    musicUrl() {
      return this.$store.state.player.musicUrl;
    },
    statusButtonIcon() {
      return this.$store.state.player.statusButtonIcon;
    },
    isPlaying() {
      return this.$store.state.player.isPlaying;
    },
    progress() {
      return this.$store.state.player.progress;
    }
  },
  methods: {
    statusButtonClick() {
      if (this.isPlaying) {
        this.$store.commit('setPauseState');
        this.$refs.audio.pause();
        console.log(this.statusButtonIcon);
      } else {
        this.$store.commit('setPlayState');
        this.$refs.audio.play();
      }
    },
    updateProgress() {
      let currentTime = this.$refs.audio.currentTime;
      let duration = this.$refs.audio.duration;
      if (currentTime === duration) {
        this.$store.commit('playNextSong');
        return;
      }
      let theProgress = (currentTime / duration) * 100 + '';
      let trueProgress = parseInt(theProgress.substring(0, theProgress.indexOf('.')));
      this.$store.commit('setProgress', { progress: trueProgress });
    },
    nextButtonClick() {
      this.$store.commit('playNextSong');
    }
  },
  mounted() {
  }
};
</script>
<style>
.player-avatar {
  width: 60%;
  vertical-align: middle;
  border-radius: 10%;
}
.player {
  background-color: rgba(28, 30, 37, 0.959);
  height: 100%;
}
.statusButton,
.statusButton:focus,
.statusButton:hover,
.statusButton:active,
.nextButton,
.nextButton:focus,
.nextButton:hover,
.nextButton:active {
  padding: 0 !important;
  background-color: rgb(139, 32, 32);
  color: white;
  border: black;
}
.el-icon-third-play-circle,
.el-icon-third-pause,
.el-icon-third-verticalleft {
  font-size: 47px;
}
</style>
