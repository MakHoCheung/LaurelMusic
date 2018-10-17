<template>
  <section>
    <el-row>
      <el-col :span="3"><img class="player-avatar" :src="albumPicUrl"/></el-col>
        <el-col :span="8">
          <audio autoplay controls :src="musicUrl"/>
        </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  name: 'palyer',
  data: function() {
    return {
    }
  },
  computed:{
    albumPicUrl(){
      return this.$store.state.player.albumPicUrl;
    },
    musicUrl(){
      return this.$store.state.player.musicUrl;
    }
  },
  methods: {},
  mounted() {
  }
};
</script>
<style>
.player-avatar {
  width: 40%;
}
</style>
