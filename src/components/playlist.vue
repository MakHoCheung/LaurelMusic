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
            <el-col :span="6" v-for="(playList, index) in playLists" :key="index">
                <img :src="playList.imgUrl" class="playlist-avatar"/>
                <p>{{playList.name}}</p>
            </el-col>
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
      tags: [],
      playLists: []
    };
  },
  methods: {
    getCatList() {
      axios.get("http://localhost:3000/playlist/catlist").then(response => {
        let dataList = response.data.sub;
        dataList.forEach(element => {
          this.tags.push(element.name);
        });
      });
    },
    getPlayListWithTag(tag) {
      let url = tag
        ? "http://localhost:3000/top/playlist?limit=10&order=new&cat=" + tag
        : "http://localhost:3000/top/playlist?limit=10&order=new";
      axios.get(url).then(response => {
        let dataList = response.data.playlists;
        dataList.forEach(element => {
          this.playLists.push({
            imgUrl: element.coverImgUrl,
            name: element.name
          });
        });
      });
    }
  },
  mounted() {
    this.getCatList();
    this.getPlayListWithTag();
  }
};
</script>
<style>
.playlist-avatar{
    width: 90%
}
</style>
