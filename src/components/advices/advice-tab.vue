<template>
    <el-row>
        <el-col :span="24">
            <div>推荐</div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="推荐歌手" name="singer">
                    <div>
                        <el-row>
                            <el-col :span="4" v-for="(singer, index) in singerOne" :key="index">
                                <img :src="singer.imgUrl" class="singer-avatar"/>
                                <p>{{singer.name}}</p>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="4" v-for="(singer, index) in singerTwo" :key="index">
                                <img :src="singer.imgUrl" class="singer-avatar"/>
                                <p>{{singer.name}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="推荐mv" name="mv">
                    <div>
                        <el-row>
                            <el-col :span="6" v-for="(mv, index) in mvs" :key="index">
                                <img :src="mv.imgUrl" class="mv-avatar"/>
                                <p>{{mv.name}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="推荐歌单" name="playlist">
                    <div>
                        <el-row>
                            <el-col :span="4" v-for="(playList, index) in playLists" :key="index">
                                <img :src="playList.imgUrl" class="playlist-avatar"/>
                                <p>{{playList.name}}</p>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="推荐电台" name="broadcast"></el-tab-pane>
                <el-tab-pane label="推荐节目" name="program"></el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>
<script>
import axios from "axios";
export default {
  name: "advice-tab",
  data: function() {
    return {
      activeName: "singer",
      singerOne: [],
      singerTwo: [],
      mvs: [],
      playLists: []
    };
  },
  methods: {
    handleClick(tab, event) {
      switch (tab.name) {
        case "singer":
          this.getSingers();
          break;
        case "mv":
          this.getMvs();
          break;
        case "playlist":
          this.getPlayLists();
          break;
        case "broadcast":
          break;
        case "program":
          break;
      }
    },
    getSingers() {
      let list = [];
      this.singerOne.length = 0;
      this.singerTwo.length = 0;
      axios
        .get("http://localhost:3000/top/artists?offset=0&limit=12")
        .then(response => {
          let dataList = response.data.artists;
          dataList.forEach(element => {
            list.push({
              imgUrl: element.img1v1Url,
              name: element.name,
              id: element.id
            });
          });
          for (let i = 0; i < list.length; i++) {
            if (i < 6) {
              this.singerOne.push(list[i]);
            } else {
              this.singerTwo.push(list[i]);
            }
          }
        });
    },
    getMvs() {
      this.mvs.length = 0;
      axios.get("http://localhost:3000/personalized/mv").then(response => {
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
      axios
        .get("http://localhost:3000/personalized?offset=0&limit=12")
        .then(response => {
          let dataList = response.data.result;
          dataList.forEach(element => {
            this.playLists.push({
              imgUrl: element.picUrl,
              id: element.id,
              name: element.name
            });
          });
        });
    }
  },
  mounted: function() {
    this.getSingers();
  }
};
</script>
<style>
.singer-avatar,
.playlist-avatar,
.mv-avatar {
  width: 90%;
}
</style>
