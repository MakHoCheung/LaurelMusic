<template>
    <el-row>
        <el-col :span="24">
            <el-tabs>
                <el-tab-pane>
                    <el-row>
                        <el-col :span="8" v-for="(rank,index) in rankList" :key="index">{{rank.name}}</el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane></el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';
export default {
    name: 'rank-tab',
    data: function () {
        return {
            rankList: {}
        }
    },
    methods: {
        getRankList() {
            for (let i = 0; i < 5; i++) {
                let url = 'http://localhost:3000/top/list?idx=`${i}`';
                let officialList = [];
                axios.get(url).then(response => {
                    let rankName = response.playlist.name;
                    let dataList = response.data.playlist.tracks;
                    dataList.forEach(element => {
                        officialList.push({
                            name: element.name,
                            id: element.id
                        });
                    });
                    return { officialList, name };
                }).then(rank => {
                    this.rankList.push(rank);
                })
            }
        }
    },
    mounted: function () {
        this.getRankList();
    }
}
</script>
<style>
</style>

