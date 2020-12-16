<template>
  <el-container>
    <el-header> <TopBar :nav-data="navData" :userData="userData"/></el-header>
    <el-main style="padding:0px">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>
<script>
import Footer from "@/components/Footer";
import TopBar from "./TopBar";
import { mapState } from "vuex";
export default {
  components: { Footer, TopBar },
  data() {
    return {
      userData: {
        name: "dtux",
        phone: "13099999999",
      },
    };
  },
  mounted() {
    this.$store.dispatch("getNavData");
  },
  beforeUpdate() {
  },
  computed: mapState({
    navData: (state) => state.global.navData,
  }),
};
</script>

<style lang="less" scoped>
.el-header {
  background: #001529;
  height: 54px !important;
  line-height: 54px;
}
.el-aside {
  color: #333;
}
.el-main {
  background-color: #f0f2f5;
  color: #333;
  text-align: center;
  .content {
    background: #fff;
    min-height: 600px;
  }
}
.el-footer {
  background: #f0f2f5;
  padding: 0px !important;
}
</style>
