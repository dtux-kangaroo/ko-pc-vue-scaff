<template>
  <div>
    <div class="vux-home">
       this is table{{msg}}
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
      msg: 'Hello World!table',
    }
  },
  mounted() {
  }
}
</script>

<style>
.vux-home {
  text-align: center;
  color:blue;
}
</style>
