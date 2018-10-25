<template>
    <el-row>
        <el-col span="8" class="singer-detail">
            <img :src="artist.imgUrl" class="singer">
             <p>{{artist.desc}}</p>
        </el-col>
        <el-col span="16">
            <h2>{{artist.name}}</h2>
            <el-table
                :data="songs"
                :show-header="false"
                highlight-current-row
                @current-change="handleCurrentChange"
            >
                <el-table-column type="index"></el-table-column>
                <el-table-column prop="name"></el-table-column>
                <el-table-column prop="artist"></el-table-column>
                <el-table-column prop="album"></el-table-column>
                <el-table-column prop="playTime"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>
<script>
export default {
    name: 'advice-singer',
    data: function () {
        return {
            artist: { id: this.$route.query.id },
            songs: []
        }
    },
    methods: {
        getSingerData() {
            this.$http.getSinger(this.artist.id, response => {
                let artist = response.data.artist;
                let hotSongs = response.data.hotSongs;
                hotSongs.length = 10;
                this.artist.imgUrl = artist.img1v1Url;
                this.artist.desc = artist.briefDesc;
                this.artist.albumSize = artist.albumSize;
                this.artist.name = artist.name;
                hotSongs.forEach(song => {
                    this.songs.push({
                        id: song.id,
                        artist: this.artist.name,
                        name: song.name,
                        album: song.al.name,
                        playTime: song.dt / 1000 / 60,
                        albumPicUrl:song.al.picUrl
                    })
                });
            });
        },
        handleCurrentChange(song) {
            let id = song.id;
            this.$http.getMusicUrl(id, response => {
                this.$store.commit('setPlayerState', { musicUrl: response.data.data[0].url, albumPicUrl: song.albumPicUrl });
            })
        }
    },
    mounted() {
        this.getSingerData();
    }
}
</script>
<style>
.el-row {
  height: 100%;
}
.singer{
    width: 60%
}
.singer-detail{
    text-align: center;
    padding: 20px;
}
</style>
