<template>
 <div>
        <el-button size="small" type="primary" round >新建图表</el-button>
        <router-view></router-view>
 </div>
</template>
<script>

export default {
  data(){
    return{
      msg:"layout"
    }
  },
  mounted(){
    this.$store.dispatch('getUserData', {});
  },
  methods: {

    }
};
</script>

<style lang="scss">
.flex-demo{
  text-align: center;
}
</style>
