<template>
    <el-container>
      <el-header><TopNav :nav-data="navData.topNav"/></el-header>
      <el-container>
        <el-aside width="200px">
          <SideNav :nav-data="navData.sideNav"/>
        </el-aside>
        <el-container style="height:800px">
          <el-main>
            <div class="content">
            <router-view></router-view>
            </div>
          </el-main>
          <el-footer>
            <Footer/>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>
<script>
import Footer from '@/components/footer'
import SideNav from '@/components/sideNav'
import TopNav from '@/components/topNav'
import { mapState } from 'vuex'
export default {
  name: "MainTpl",
  components:{TopNav,Footer,SideNav},
  data() {
    return {
      msg: "layout",
      //navData:[]
    };
  },
  mounted() {
      this.$store.dispatch('getNavData');
  },
  beforeUpdate(){
    console.log(this.navData,'data');
  },
  methods: {},
  computed: mapState({
    navData: state => state.global.navData
  })
};
</script>

<style lang="scss">
  .el-header {
    background-color: #1A76D2;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-main {
    background-color: #f0f2f5;
    color: #333;
    text-align: center;
    .content{
      background: #fff;
      height:600px;

    }
  }
  .el-footer{
    background: #f0f2f5;
  }
</style>
