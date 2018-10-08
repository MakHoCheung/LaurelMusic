<template>
  <section>
    <el-row>
      <el-col :span="3"><img class="player-avatar" src="http://p3.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg"/></el-col>
        <el-col :span="8">
          <el-slider></el-slider>
        </el-col>
    </el-row>
  </section>
</template>
<script>
export default {
  name: "palyer",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.player-avatar {
  width: 40%;
}
</style>
