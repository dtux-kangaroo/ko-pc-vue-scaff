<template>
    <el-menu
      default-active="2"
      class="side-nav"
      @open="handleOpen"
      @close="handleClose">
       <side-item v-for="nav in navData" :key="nav.name" :nav="nav"/>
    </el-menu>
</template>
<script>
 import SideItem from './sideItem'
  export default {
    components: { SideItem },
    props: ['navData'],
    mounted() {
      //console.log(navData);
    },
    beforeUpdate() {

    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
 .side-nav{
   text-align: left;
   .iconfont{
     font-size:18px;
     margin-right: 5px;
   }
 }
</style>



