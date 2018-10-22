<template>
  <el-menu default-active="/" router class="nav" background-color="#da4949" text-color="#f9f1f1" active-text-color="#cfe017">
    <div class="brand">Laurel Music</div>
    <el-menu-item index="/"><i class="el-icon-third-home" />首页</el-menu-item>
    <el-menu-item index="/search"><i class="el-icon-third-search" />搜索</el-menu-item>
    <el-menu-item index="/playlist"><i class="el-icon-third-unorderedlist" />歌单</el-menu-item>
    <el-menu-item index="/rank"><i class="el-icon-third-trophy" />排行榜</el-menu-item>
    <el-menu-item index="/set-up">设置</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: 'main-nav'
};
</script>
<style>
.nav {
  height: 100%;
}
i::before {
  color: white;
}
.brand{
  text-align: center;
  font-size: 30px;
  margin: 10px;
  color: bisque;
  font-family: Comic Sans MS;
}
</style>
