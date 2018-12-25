<template>
    <div>
        <banner />
        <advice-tab />
        <new-music/>
    </div>
</template>
<script>
import banner from './banner.vue';
import adviceTab from './advice-tab.vue';
import newMusic from './new-music.vue';
export default {
  name: 'home',
  components: {
    banner,
    'advice-tab': adviceTab,
    'new-music': newMusic
  }
};
</script>
<style>
</style>
