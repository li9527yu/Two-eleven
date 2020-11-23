<template>
  <div id="app">
    <div class="navgation">
      <el-menu
        :default-active="this.$route.path" 
        router
        mode="horizontal"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i :class="item.navIcon"></i>
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>   
      </el-menu>
    </div> 
    <router-view  />
  
 
    <!-- <router-view></router-view>
    <main-tab-bar></main-tab-bar> -->
  </div>
</template>
<script>
// import MainTabBar from './components/content/MainTabBar/MainTabBar'

export default {
  name: 'App',
  // components: {
  //   MainTabBar
  // }
  data() { 
        return { 
            navList:[ 
            {name:'/home',navItem:'首页',navIcon:'el-icon-menu'}, 
            {name:'/shopcart',navItem:'购物车',navIcon:'el-icon-goods'},
            {name:'/profile',navItem:'我的',navIcon:'el-icon-s-platform'}
            ] } 
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
<style>
  #app{
    margin: 0 auto;
    width: 70%;
    border-left:1px solid lightgrey ;
    border-right:1px solid lightgrey ;
  }
</style>
