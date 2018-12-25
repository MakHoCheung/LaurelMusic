<template>
  <el-row>
    <el-col :span="24">
      <div>推荐</div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="推荐歌手" name="singer">
          <div>
            <el-row>
              <el-col :span="4" v-for="(singer, index) in singers" :key="index">
                <router-link :to="{path:'/advice_singer',query:{id:singer.id}}">
                  <img :src="singer.imgUrl" class="singer-avatar">
                </router-link>
                <p>{{singer.name}}</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐mv" name="mv">
          <div>
            <el-row>
              <el-col :span="6" v-for="(mv, index) in mvs" :key="index">
                <router-link :to="{path:'/advice_mv',query:{id:mv.id}}">
                  <img :src="mv.imgUrl" class="mv-avatar">
                </router-link>
                <p>{{mv.name}}</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐歌单" name="playlist">
          <div>
            <el-row>
              <el-col :span="4" v-for="(playList, index) in playLists" :key="index">
                <router-link :to="{path:'/advice_playlist',query:{id:playList.id}}">
                <img :src="playList.imgUrl" class="playlist-avatar">
                </router-link>
                <p>{{playList.name}}</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐电台" name="broadcast">
          <div>
            <el-row>
              <el-col :span="4" v-for="(broadCast, index) in broadCasts" :key="index">
                <img :src="broadCast.imgUrl" class="broadcast-avatar">
                <p>{{broadCast.name}}</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
        <el-tab-pane label="推荐节目" name="program">
          <div>
            <el-row>
              <el-col :span="6" v-for="(program, index) in programs" :key="index">
                <img :src="program.imgUrl" class="program-avatar">
                <p>{{program.name}}</p>
              </el-col>
            </el-row>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'advice-tab',
  data: function () {
    return {
      activeName: 'singer',
      singers: [],
      mvs: [],
      playLists: [],
      broadCasts: [],
      programs: []
    };
  },
  methods: {
    handleClick(tab, event) {
      switch (tab.name) {
        case 'singer':
          this.getSingers();
          break;
        case 'mv':
          this.getMvs();
          break;
        case 'playlist':
          this.getPlayLists();
          break;
        case 'broadcast':
          this.getBroadCasts();
          break;
        case 'program':
          this.getPrograms();
          break;
      }
    },
    getSingers() {
      this.singers.length = 0;
      this.$http.getSingers(response => {
        let dataList = response.data.artists;
        dataList.forEach(element => {
          this.singers.push({
            imgUrl: element.img1v1Url,
            name: element.name,
            id: element.id
          });
        });
      });
    },
    getMvs() {
      this.mvs.length = 0;
      this.$http.getMvs(response => {
        let dataList = response.data.result;
        dataList.forEach(element => {
          this.mvs.push({
            imgUrl: element.picUrl,
            name: element.name,
            id: element.id,
            artistName: element.artistName,
            artistId: element.artistId
          });
        });
      });
    },
    getPlayLists() {
      this.playLists.length = 0;
      this.$http.getPlayLists(response => {
        let dataList = response.data.result;
        dataList.forEach(element => {
          this.playLists.push({
            imgUrl: element.picUrl,
            id: element.id,
            name: element.name
          });
        });
      });
    },
    getBroadCasts() {
      this.broadCasts.length = 0;
      this.$http.getBroadCasts(response => {
        let dataList = response.data.result;
        dataList.forEach(element => {
          this.broadCasts.push({
            imgUrl: element.picUrl,
            id: element.id,
            name: element.name
          });
        });
      });
    },
    getPrograms() {
      this.programs.length = 0;
      this.$http.getPrograms(response => {
        let dataList = response.data.programs;
        dataList.forEach(element => {
          this.programs.push({
            imgUrl: element.coverUrl,
            id: element.id,
            name: element.name
          });
        });
      });
    }
  },
  mounted: function () {
    this.getSingers();
  }
};
</script>
<style>
.singer-avatar,
.playlist-avatar,
.broadcast-avatar,
.program-avatar,
.mv-avatar {
  width: 90%;
}
</style>
