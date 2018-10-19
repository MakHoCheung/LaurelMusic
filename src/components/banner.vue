<template>
    <el-row>
        <el-col :span="24">
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in banners" :key="item">
                    <el-row justify="center" type="flex" v-bind:style="{'background-image':'url('+item.backgroundUrl+')'}">
                        <img :src="item.imgUrl"/>
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
  data: function() {
    return {
      banners: []
    };
  },
  methods: {
    getBanner() {
      axios
        .get('/api/banner')
        .then(response => {
          let dataList = response.data.banners;
          dataList.forEach(element => {
            this.banners.push({
              imgUrl: element.picUrl,
              dataUrl: element.url,
              backgroundUrl: element.backgroundUrl
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted: function() {
    this.getBanner();
  }
};
</script>
<style>
</style>
