import axios from 'axios';

export default {
    getBanner(handler){
        axios.get('/api/banner').then(handler);
    },
    getNewMusic(handler) {
        axios.get('/api/personalized/newsong').then(handler);
    },
    getMusicUrl(id, handler) {
        axios.get('http://localhost:3000/song/url?id=' + id).then(handler);
    },
    getSingers(hander) {
        axios.get('/api/top/artists?offset=0&limit=12').then(hander);
    },
    getMvs(handler){
        axios.get('/api/personalized/mv').then(handler);
    },
    getPlayLists(handler){
        axio.get('/api/personalized?offset=0&limit=12').then(handler);
    },
    getBroadCasts(handler){
        axios.get('/api/personalized/djprogram').then(handler);
    },
    getPrograms(handler){
        axios.get('/api/program/recommend').then(handler);
    },
    getCatList(handler){
        axios.get('/api/playlist/catlist').then(handler);
    },
    getPlayListWithTag(url,handler){
        axios.get(url).then(handler);
    },
    getOfficialRankList(url,handler){
        axios.get(url).then(handler);
    },
    getGlobalRankList(url,handler){
        axios.get(url).then(handler);
    }
}