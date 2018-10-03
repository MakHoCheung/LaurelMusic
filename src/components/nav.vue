<template>
  <el-menu default-active="/" router class="nav" background-color="#da4949" text-color="#f9f1f1" active-text-color="#cfe017">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="/search">搜索</el-menu-item>
    <el-menu-item index="/palylist">PlayList</el-menu-item>
    <el-menu-item index="/top-podcasts">Top podcasts</el-menu-item>
    <el-menu-item index="/made-for-you">Made For You</el-menu-item>
  </el-menu>
</template>
<script>
export default {
  name: "main-nav"
};
</script>
<style>
.nav {
  height: 100%;
}
</style>
