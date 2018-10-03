<template>
  <el-container id="app">
    <el-aside width="300px"><main-nav></main-nav></el-aside>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import nav from "./components/nav.vue";
export default {
  name: "app",
  components: { "main-nav": nav }
};
</script>
<style>
.aside {
  background-color: azure;
}
.main {
  
}
html,body,#app{
  height: 100%;
}
</style>

