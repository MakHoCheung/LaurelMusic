<template>
    <el-row>
        <el-col :span="24">
            <el-tabs @tab-click="handleClick" v-model="activeName">
                <el-tab-pane label="官方榜" name="official">
                    <el-row>
                        <el-col :span="8" v-for="(rank,index) in officialRankList" :key="index">
                            <img :src="rank.imgUrl" class="rank" />
                            <p>{{rank.rankName}}</p>
                            <rankList :rankList="rank.officialList" />
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="全球榜" name="global">
                    <el-row>
                        <el-col :span="8" v-for="(rank,index) in globalRankList" :key="index">
                            <img :src="rank.imgUrl" class="rank" />
                            <p>{{rank.rankName}}</p>
                            <rankList :rankList="rank.globalList" />
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-col>
    </el-row>
</template>
<script>
import axios from 'axios';
import rankList from './rank-list';
export default {
    name: 'rank-tab',
    data: function () {
        return {
            activeName: 'official',
            officialRankList: [],
            globalRankList: [],
        }
    },
    components: {
        rankList
    },
    methods: {
        getOfficialRankList() {
            for (let i = 0; i < 5; i++) {
                let url = `http://120.77.252.125:3000/top/list?idx=${i}`;
                let officialList = [];
                this.$http.getOfficialRankList(url, response => {
                    let rankName = response.data.playlist.name;
                    let imgUrl = response.data.playlist.coverImgUrl;
                    let dataList = response.data.playlist.tracks;
                    dataList.forEach(element => {
                        officialList.push({
                            name: element.name,
                            id: element.id
                        });
                    });
                    officialList.length = 5
                    return { officialList, rankName, imgUrl };
                }, rank => {
                    this.officialRankList.push(rank);
                });
            }
        },
        getGlobalRankList() {
            for (let i = 5; i < 23; i++) {
                let url = `http://120.77.252.125:3000/top/list?idx=${i}`;
                let globalList = [];
                this.$http.getGlobalRankList(url, response => {
                    let rankName = response.data.playlist.name;
                    let imgUrl = response.data.playlist.coverImgUrl;
                    let dataList = response.data.playlist.tracks;
                    dataList.forEach(element => {
                        globalList.push({
                            name: element.name,
                            id: element.id
                        });
                    });
                    globalList.length = 5;
                    return { globalList, rankName, imgUrl };
                }, rank => {
                    this.globalRankList.push(rank);
                });
            }
        },
        handleClick(tab, event) {
            if (tab.name === 'official') {
                this.getOfficialRankList();
            }
            if (tab.name === 'global') {
                this.getGlobalRankList();
            }
        }
    },
    mounted: function () {
        this.getOfficialRankList();
    }
}
</script>
<style>
.rank {
  width: 90%;
}
</style>

