<template>
    <el-table :data="rankList" stripe :show-header="false" highlight-current-row>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name"></el-table-column>
    </el-table>
</template>
<script>
export default {
  name: 'rank-list',
  props: {
    rankList: Array
  },
  data() {
    return {};
  }
};
</script>
<style>
</style>
