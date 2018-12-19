<template>
  <el-container>
    <el-main class="new-music">
      <p>新歌快递</p>
      <el-table :data="musicList" stripe :show-header="false" highlight-current-row @current-change="handleCurrentChange">
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
export default {
  name: 'new-music',
  data: function () {
    return {
      musicList: [],
    };
  },
  methods: {
    getNewMusics() {
      this.musicList.length = 0;
      console.log(this.$http);
      this.$http.getNewMusic(response => {
        let dataList = response.data.result;
        dataList.forEach(element => {
          this.musicList.push({
            id: element.song.id,
            name: element.song.name,
            artist: element.song.artists[0].name,
            album: element.song.album.name,
            playTime: element.song.duration / 1000 / 60,
            albumPicUrl: element.song.album.blurPicUrl
          });
        });
        console.log(this.musicList);
      });
    },
    handleCurrentChange(currentRow, oldRow) {
      let id = currentRow.id;
      this.$http.getMusicUrl(id,response => {
        this.$store.commit('setPlayerState', { musicUrl: response.data.data[0].url, albumPicUrl: currentRow.albumPicUrl });
      })
    }
  },
  mounted: function () {
    this.getNewMusics();
  }
};
</script>

<style>
.el-table {
  border: solid rgb(207, 205, 205) 1px;
}
</style>
