<template>
<div>
    <div class='fl' style="width:200px">
      <router-link to="/">
       <img :src="Logo" alt="logo" class="logo">
      </router-link>
    </div>
    <div class="fl">
      <el-menu class="top-nav"
       :default-active="activeIndex"
       :default-openeds="openeds"
       mode="horizontal">
          <top-item v-for="nav in navData" :key="nav.name" :nav="nav"/>
      </el-menu>
    </div>
    <div class='fr'>
      <el-dropdown>
          <span class="el-dropdown-link">
            <i class="iconfont  icon-guanliyuan2"/>
            dtux
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>
</template>
<script>
import TopItem from "./topItem";
import Logo from '@public/assets/imgs/logo.png'
export default {
  components: { TopItem },
  props: ["navData"],
  data() {
    let routerArr=this.$router.currentRoute.path.match(/\/\w*/g);
    console.log(routerArr,22);
    return {
      activeIndex: routerArr[0],
      openeds:[routerArr[0]],
      Logo
    };
  },
  mounted(){
    //console.log(this.$router,'12132',navData);
  },
  methods: {
    handleSelect() {
      console.log("选中");
    }
  }
};
</script>
<style lang="scss" scoped>
.logo{
    width: 160px;
    height: 40px;
    margin-top: 10px;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: #409eff !important;
  color: #fff;
}
.top-nav {
  background: transparent;
  li {
    width: 120px;
    text-align: center;
    color: #fff;
  }
  .is-active {
    background-color: #409eff !important;
    color: #fff !important;
  }
}
.el-dropdown{
  color:#fff;
  cursor: pointer;
  .iconfont{
    font-size:18px;
  }
}
</style>
