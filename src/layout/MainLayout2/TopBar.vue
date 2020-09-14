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
       :router="true"
       mode="horizontal">
        <el-menu-item v-if="navData.length" v-for="nav in navData" :key="nav.permissionName"  :index="nav.permissionUrl.match(/\/\w*/g)[0]"
            @click="redirec(nav.permissionUrl)">
              {{nav.permissionName}}
          </el-menu-item>
      </el-menu>
    </div>
    <div class='fr top-user' >
        <span @click="loginOut">
          退出登录
        </span>
    </div>
  </div>
</template>
<script>
import TopItem from "./TopItem";
import Logo from "@public/assets/imgs/logo.png";
export default {
  components: { TopItem },
  props: ["navData", "userData"],
  data() {
    let routerArr = this.$route.path.match(/\/\w*/g);
    return {
      activeIndex: routerArr[0],
      Logo,
      currentUserName:'charles'
    };
  },
  watch: {
    $route: function(to, from) {
      this.setItem();
    }
  },
  methods: {
    loginOut() {
      this.$router.push("/login");
    },
    redirec(path) {
      if (path) {
        this.$router.push(path);
      } else {
        console.log("无效url", path);
      }
    },
    setItem() {
      let routerArr = this.$route.path.match(/\/\w*/g);
      this.activeIndex = routerArr[0];
    }
  }
};
</script>
<style lang="scss" scoped>
.logo {
  width: auto;
  height: 40px;
  margin-top: 6px;
}
.el-menu--horizontal > .el-menu-item:not(.is-disabled):hover {
  background-color: #409eff !important;
  color: #fff;
}
.el-menu--horizontal>.el-menu-item{
    height: 54px;
    line-height: 54px;
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
.top-user{
 font-size:14px;
 color:#fff;
 .top-badge{
   display: inline-block;
   position: relative;
   sup{
    background-color: #f56c6c;
    border-radius: 10px;
    color: #fff;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    position: absolute;
    top: 4px;
    left: 10px;
  }
 }
}


</style>
