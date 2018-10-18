<template>

  <el-row class="player" type="flex" align="middle">
    <el-col :span="2" offset="1" class="player-avatar-area"><img class="player-avatar" :src="albumPicUrl" />
    </el-col>
    <el-col :span="12" offset="1">
      <audio autoplay :src="musicUrl" ref="audio" @timeupdate="updateProgress" />
      <el-progress :percentage="progress" :show-text="false" color="#da4949"></el-progress>
    </el-col>
    <el-col :span="1" offset="1">
      <el-button :icon="statuButtonIcon" circle @click="statuButtonClick"></el-button>
    </el-col>
    <el-col :span="1" offset="1">
      <el-button icon="el-icon-d-arrow-right" circle></el-button>
    </el-col>
  </el-row>

</template>
<script>
export default {
  name: 'palyer',
  data: function () {
    return {
      isPlaying: false,
      statuButtonIcon: 'el-icon-caret-right',
      progress: 0
    }
  },
  computed: {
    albumPicUrl() {
      return this.$store.state.player.albumPicUrl;
    },
    musicUrl() {
      return this.$store.state.player.musicUrl;
    }
  },
  methods: {
    statuButtonClick() {
      if (this.isPlaying) {
        this.statuButtonIcon = 'el-icon-close';
        this.$refs.audio.pause();
      } else {
        this.statuButtonIcon = 'el-icon-caret-right';
        this.$refs.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    },
    updateProgress() {
      let currentTime = this.$refs.audio.currentTime;
      let duration = this.$refs.audio.duration;
      let theProgress = (currentTime/duration)*100+'';
      let trueProgress = parseInt(theProgress.substring(0,theProgress.indexOf('.')));
      this.progress = theProgress;
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
</style>
