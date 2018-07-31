<template>
  <div>
    <div class="vux-home">
      home--主页{{msg}}
      <ChartLine></ChartLine>
  </div>
  </div>
</template>

<script>
import api from "@/api/index.js";
import {ChartLine} from "@/components/chart/index"
export default {
  components:{
    ChartLine
  },
  data () {
    return {
      msg: 'Hello World!home'
    }
  },
  mounted() {
    api.getHomeData({}).then(ret=>{
      console.log(ret);
    })
  }
}
</script>

<style>
.vux-home {
  text-align: center;
}
</style>
