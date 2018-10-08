<template>
    <section>
        <el-row>
            <h5>歌单</h5>
        </el-row>
        <el-row>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="tag in tags" :key="tag" :label="tag" :value="tag">
                </el-option>
            </el-select>
        </el-row>
        <el-row>
            <el-tag v-for="(tag, index) in tags" :key="index">{{tag}}</el-tag>
        </el-row>
        <el-row>
            <el-col :span="6">dd</el-col>
        </el-row>
        <el-row>
            <el-pagination layout="prev, pager, next" :total="50">
            </el-pagination>
        </el-row>
    </section>
</template>
<script>
export default {
  name: "playlist",
  data: function() {
    return {
      tags: ["全部", "华语"]
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style>
</style>
