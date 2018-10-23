<template>
  <el-row>
    <el-col :span="24">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in banners" :key="item">
          <el-row
            justify="center"
            type="flex"
            v-bind:style="{'background-image':'url('+item.backgroundUrl+')'}"
          >
            <a :href="item.dataUrl"><img :src="item.imgUrl"></a>
          </el-row>
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>
<script>
import axios from 'axios';
export default {
  name: 'home-pane',
  data: function () {
    return {
      banners: []
    };
  },
  methods: {
    getBanner() {
      this.$http.getBanner(response => {
        let dataList = response.data.banners;
        dataList.forEach(element => {
          this.banners.push({
            imgUrl: element.picUrl,
            dataUrl: element.url,
            backgroundUrl: element.backgroundUrl
          });
        });
      });
    }
  },
  mounted: function () {
    this.getBanner();
  }
};
</script>
<style>
</style>
