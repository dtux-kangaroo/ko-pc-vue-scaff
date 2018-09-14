<template>
        <el-menu-item  v-if="!nav.children.length" :index="nav.permissionUrl"
         @click="redirec(nav.permissionUrl)">
                 <i class="iconfont" :class="[`icon-${nav.permissionIcon}`]"></i> {{nav.permissionName}}
        </el-menu-item>
       <el-submenu v-else  :index="nav.permissionUrl">
            <template slot="title">
                <i class="iconfont" :class="[`icon-${nav.permissionIcon}`]"></i>{{nav.permissionName}}
            </template>
              <template v-for="child in nav.children">
                    <el-menu-item :key="child.permissionUrl"  :index="child.permissionUrl"
                    @click="redirec(nav.permissionUrl)">
                      <i class="iconfont" :class="[`icon-${child.permissionIcon}`]"></i> {{child.permissionName}}
                    </el-menu-item>
              </template>
      </el-submenu>
</template>

<script>
import path from 'path'
export default {
  name: 'SideItem',
  components: {  },
  props: {
    nav: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    redirec(path){
     const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
       if(urlregex.test(path)){
         this.$router.push(path);
       }else{
         console.log('无效url');
       }

    }
  }
}
</script>
<style>

</style>
