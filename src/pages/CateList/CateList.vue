<template>
 <div class="headerContainer">
   <!-- 头部搜索 -->
    <div class="header">
       <van-icon name="search" size="20"/>
       <span>搜索商品，共2005件好物</span>
    </div>
    <!-- 主题内容 -->
    <div class="ListContainer" ref="NavLeft">
      <div class="left" >
        <div class="leftItem" v-for="(item,index) in navList" :key="index">{{item.name}}</div>
      </div>
      <div class="right"></div>
    </div>
 </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';
import BScroll from 'better-scroll'
Vue.use(Icon);
import axios from 'axios'
export default {
  name: 'cateList',
  data(){
    return{
      navList:{} //左侧导航列表
    }
  },
  async mounted(){
     //初始化滑屏
    new BScroll(this.$refs.NavLeft)
      await axios.get('/3001/cateNavDatas').then(
        (res)=>{this.navList = res.data.categoryL1List}
      )
  }
}
</script>
<style lang="stylus">
   .headerContainer
      width 750px
      height 88px
      box-sizing border-box
      .header
          background #666
          text-align center
          line-height 56px
          margin-top 10px
          width 690px
          height 56px
          border-radius 10px
          margin-left 20px
          span 
            color #fff
      .ListContainer
            width 750px
            .left
                float left
                padding 0 0 0 20px
                height 100%
                .leftItem
                    font-size 30px
                    margin 40px 0
            .right
                float right 
                

</style>
