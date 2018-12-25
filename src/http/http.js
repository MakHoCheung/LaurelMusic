import axios from 'axios';

export default {
  getBanner(handler) {
    axios.get('http://120.77.252.125:3000/banner').then(handler);
  },
  getNewMusic(handler) {
    axios.get('http://120.77.252.125:3000/personalized/newsong').then(handler);
  },
  getMusicUrl(id, handler) {
    axios.get('http://120.77.252.125:3000/song/url?id=' + id).then(handler);
  },
  getSingers(hander) {
    axios.get('http://120.77.252.125:3000/top/artists?offset=0&limit=12').then(hander);
  },
  getMvs(handler) {
    axios.get('http://120.77.252.125:3000/personalized/mv').then(handler);
  },
  getPlayLists(handler) {
    axios.get('http://120.77.252.125:3000/personalized?offset=0&limit=12').then(handler);
  },
  getBroadCasts(handler) {
    axios.get('http://120.77.252.125:3000/personalized/djprogram').then(handler);
  },
  getPrograms(handler) {
    axios.get('http://120.77.252.125:3000/program/recommend').then(handler);
  },
  getCatList(handler) {
    axios.get('http://120.77.252.125:3000/playlist/catlist').then(handler);
  },
  getPlayListWithTag(url, handler) {
    axios.get(url).then(handler);
  },
  getOfficialRankList(url, handler, secondHandler) {
    axios.get(url).then(handler).then(secondHandler);
  },
  getGlobalRankList(url, handler, secondHandler) {
    axios.get(url).then(handler).then(secondHandler);
  },
  getSinger(id, handler) {
    axios.get('http://120.77.252.125:3000/artists?id=' + id).then(handler);
  },
  getMv(id, handler) {
    axios.get('http://120.77.252.125:3000/mv/detail?mvid=' + id).then(handler);
  },
  getPlayList(id, handler) {
    axios.get('http://120.77.252.125:3000/playlist/detail?id=' + id).then(handler);
  },
  getBroadCastDetail(id, handler) {
    axios.get('http://120.77.252.125:3000/dj/detail?id=' + id).then(handler);
  }
};
