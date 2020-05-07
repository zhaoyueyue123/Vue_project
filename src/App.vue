<template>
  <div id="app">
    <!--渲染一级路由-->
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#D13438">
  <van-tabbar-item icon="home-o" @click="changerId(0)">首页</van-tabbar-item>
  <van-tabbar-item icon="search" @click="changerId(1)">分类</van-tabbar-item>
  <van-tabbar-item icon="friends-o" @click="changerId(2)">值得买</van-tabbar-item>
  <van-tabbar-item icon="setting-o" @click="changerId(3)">购物车</van-tabbar-item>
  <van-tabbar-item icon="setting-o" @click="changerId(4)">个人</van-tabbar-item>
</van-tabbar>
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import router from './router'
import axios from 'axios'
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
  name: 'App',
 data() {
    return {
      active: 0,
    };
  },
  methods:{
    changerId(index){
      this.active = index
      if(index === 0){
        router.push({ path: 'home' })
      }
       if(index === 1){
        router.push({ path: 'cateList' })
      }
       if(index === 2){
        router.push({ path: 'deserve' })
      }
       if(index === 3){
        router.push({ path: 'cart' })
      }
       if(index === 4){
        router.push({ path: 'Ucenter' })
      }
  }
 
}
}
</script>

<style lang="stylus" scoped>
  
</style>


