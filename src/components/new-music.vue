<template>
  <el-container>
    <el-main class="new-music">
      <p>新歌快递</p>
      <el-table :data="musicList" stripe="true" :show-header="false" highlight-current-row>
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="name"></el-table-column>
        <el-table-column prop="artist"></el-table-column>
        <el-table-column prop="album"></el-table-column>
        <el-table-column prop="playTime"></el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>
<script>
import axios from 'axios';
export default {
  name: 'new-music',
  data: function() {
    return {
      musicList: []
    };
  },
  methods: {
    getNewMusics() {
      this.musicList.length = 0;
      axios.get('http://localhost:3000/personalized/newsong').then(response => {
        let dataList = response.data.result;
        dataList.forEach(element => {
          this.musicList.push({
            id: element.song.id,
            name: element.song.name,
            artist: element.song.artists[0].name,
            album: element.song.album.name,
            playTime: element.song.duration / 1000 / 60
          });
        });
        console.log(this.musicList);
      });
    }
  },
  mounted: function() {
    this.getNewMusics();
  }
};
</script>

<style>
.el-table {
  border: solid rgb(207, 205, 205) 1px;
}
</style>
