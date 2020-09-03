<template>
     <el-container>
        <el-aside width="200px" style="height:800px;background:#fff;"
        >
          <SideBar :nav-data="navData" />
        </el-aside>
          <el-main  style="min-height:800px;padding:0px;background:#fff;">
             <router-view></router-view>
          </el-main>
        </el-container>
</template>
<script>
import SideBar from "./SideBar";
import { mapState } from 'vuex'
export default {
  components: { SideBar },
  mounted() {
  },
  beforeUpdate(){

  },
  data() {
    return {}
  },

  methods: {
  },
  computed: mapState({
    navData: state => {
       let tempData=state.global.navData;
       let curData=[];
       tempData.forEach(item=>{
         if(item.permissionUrl=='/api/all/inner'){
           curData=item.children;
         }
       })
       return curData;
    }
  })
};
</script>
<style lang="scss">
.side-nav {
  text-align: left;
  .iconfont {
    font-size: 18px;
    margin-right: 5px;
  }
  .el-menu-item,
  .el-submenu__title {
    height: 40px !important;
    line-height: 40px !important;
  }
}
</style>





