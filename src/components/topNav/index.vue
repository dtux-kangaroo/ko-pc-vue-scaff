<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">大盘</el-menu-item>
    <el-menu-item index="2">常用零件</el-menu-item>
    <el-menu-item index="3">常用区块</el-menu-item>
    <el-submenu index="2">
      <template slot="title">多选卡</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
 </el-menu>
</template>
<script>
export default {
   data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  methods:{
    handleSelect(){
      console.log('选中');
    }
  }
};
</script>
<style>
</style>
