<template>
  <div>
    <el-row>
      <el-col :space="24">
        <video :src="mv.video1080Url" controls></video>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <img :src="mv.cover" class="mv_cover"/>
        <p>{{mv.name}}</p>
      </el-col>
      <el-col :span="12">
        <p>{{mv.desc}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'advice-mv',
  data: function () {
    return {
      mv: {
        id: this.$route.query.id,
        name: '',
        desc: '',
        artistName: '',
        cover: '',
        duration: '',
        publishTime: '',
        video240Url: '',
        video480Url: '',
        video1080Url: ''
      }
    };
  },
  methods: {
    getMvData() {
      this.$http.getMv(this.mv.id, response => {
        this.mv.desc = response.data.data.desc;
        this.mv.name = response.data.data.name;
        this.mv.artistName = response.data.data.artistName;
        this.mv.cover = response.data.data.cover;
        this.mv.duration = response.data.data.duration;
        this.mv.publishTime = response.data.data.publishTime;
        this.mv.video240Url = response.data.data.brs['240'];
        this.mv.video480Url = response.data.data.brs['480'];
        this.mv.video1080Url = response.data.data.brs['1080'];
      });
    }
  },
  mounted() {
    this.getMvData();
  }
};
</script>

<style scoped>
video{
  width: 100%;
}
.mv_cover{
  width: 100%;
}
</style>
