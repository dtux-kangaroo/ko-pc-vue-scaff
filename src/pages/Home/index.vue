<template>
  <div class="vux-home">
    <BarChart
      :option="barOption"
      :config="{ handle: test }"
      height="300px"
    ></BarChart>
  </div>
</template>

<script>
import { BarChart } from "@/components/chart/index";
import { barOption } from "@/constants/options";

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      barOption,
    };
  },
  methods: {
    test(option) {
    },
  },
};
</script>

<style lang="less" scoped>
.vux-home {
  text-align: center;
  color: blue;
}
</style>
