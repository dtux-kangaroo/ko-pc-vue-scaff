<template>
  <div>
    <div class="vux-home">user--主页{{ msg }}</div>
  </div>
</template>

<script>
import { API } from "@/services/index.js";
export default {
  data() {
    return {
      msg: "Hello World!home",
    };
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
</style>
