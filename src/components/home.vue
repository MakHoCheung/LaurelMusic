<template>
<div>
    <banner/>
    <advice-tab/>
</div>
</template>
<script>
import banner from "./banner.vue";
import adviceTab from "./advices/advice-tab.vue";
export default {
  name: "home",
  components:{
      banner,
      "advice-tab":adviceTab
  }
};
</script>
<style>
</style>
