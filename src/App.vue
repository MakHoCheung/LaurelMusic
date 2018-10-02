<template>
    <el-container id="app">
        <el-aside width="400px" class="aside">Aside</el-aside>
        <el-main class="main"><i class="el-icon-edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-main>
    </el-container>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
.aside {
  background-color: azure;
}
.main {
  background-color: burlywood;
}
</style>

