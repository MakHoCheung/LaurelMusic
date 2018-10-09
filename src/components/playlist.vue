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
import axios from "axios";
export default {
  name: "playlist",
  data: function() {
    return {
      tags: []
    };
  },
  methods: {
    getCatList() {
      axios.get("http://localhost:3000/playlist/catlist").then(response => {
        let dataList = response.sub;
        dataList.forEach(element => {
          this.tags.push(element.name);
        });
      });
    }
  },
  mounted() {
      this.getCatList();
  }
};
</script>
<style>
</style>
