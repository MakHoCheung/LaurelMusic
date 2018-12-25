<template>
  <div>
    <p>{{playlist.name}}</p>
    <img :src="playlist.coverUrl"/>
    <el-table :data="playlist.list" stripe :show-header="false" highlight-current-row
              @current-change="handleCurrentChange">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="name"></el-table-column>
      <el-table-column prop="artist"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'advice-playlist',
  data: function () {
    return {
      playlist: {
        id: this.$route.query.id,
        name: '',
        coverUrl: '',
        creator: '',
        list: []
      }
    };
  },
  methods: {
    getPlaylist() {
      this.$http.getPlayList(this.playlist.id, response => {
        this.playlist.name = response.data.playlist.name;
        this.playlist.coverUrl = response.data.playlist.coverImgUrl;
        this.playlist.creator = response.data.playlist.creator.nickname;
        let tracks = response.data.playlist.tracks;
        tracks.forEach(track => {
          this.playlist.list.push({
            name: track.name,
            id: track.id,
            artist: track.ar[0].name,
            album: track.al.name,
            albumPicUrl: track.al.picUrl
          });
        });
      });
    },
    handleCurrentChange(currentRow, oldRow) {
      let id = currentRow.id;
      this.$http.getMusicUrl(id, response => {
        this.$store.commit('setPlayerState', {
          musicUrl: response.data.data[0].url,
          albumPicUrl: currentRow.albumPicUrl
        });
      });
    }
  },
  mounted() {
    this.getPlaylist();
  }
};
</script>

<style scoped>
  img{
    width: 10%;
  }
</style>
