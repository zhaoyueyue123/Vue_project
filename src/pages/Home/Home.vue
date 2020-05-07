<template>
  <div id ="wrapper" ref="wrapper" style="height:667px">
    <div id="homeContainer" class="content">
    <!-- 头部布局 -->
    <div class="header">
      <img src="../../static/images/logo.png" alt />
      <div class="searchInput">
        <van-icon name="search" size="20" class="icon"/>
        <span>搜索商品共2000个好物</span>
      </div>
      <div class="deng" @click="goToLogin">登录</div>
    </div>
    <!-- 导航区域 -->
    <div class="nav" v-if="cateNavDatas">
      <div class="navContainer" ref="navContainer">
         <div class="All">
             <div class="navItem active">推荐</div>
              <div class="navItem"  v-for="(item,index) in cateNavDatas" :key="index">{{item.name}}</div>
         </div>
    </div>
        <van-dropdown-menu>
            <van-dropdown-item :options="option1"/>
      </van-dropdown-menu>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" :vertical= false :loop="false">
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/ee856ce5b451dbdeab78abffce195957.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/da161a29b137b7e06f193f861032853b.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/6569149eeece0e39b9b38554570235da.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/efe5bb71fd6787d9c5f5b051eb607666.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
           <img src="https://yanxuan.nosdn.127.net/3ebbdfa48590946eba80297c9a4a66c4.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
       <van-swipe-item>
           <img src="https://yanxuan.nosdn.127.net/b7f94a107096c60038eba24f542d62c5.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
       <van-swipe-item>
           <img src="https://yanxuan.nosdn.127.net/e7faa23b843641c871f34aff7960e43e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
      <van-swipe-item>
        <img src="https://yanxuan.nosdn.127.net/bf2d7fc620ef5fc52c06bfff18a93024.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </van-swipe-item>
     
    </van-swipe>
    <!-- 3个小图标 -->
    <div class="brandContainer">
      <div class="bandItem" v-for="(item,index) in indexData.policyDescList" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.desc}}</span>
      </div>
    </div>
  
    <!-- 12个商品分类 -->
     <div class="classify" v-if="indexData.kingKongModule">
       <div class="classItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
         <img :src="item.picUrl" alt="">
         <span>{{item.text}}</span>
       </div>
     </div>
    <!-- 一张大图 -->
    <div class="map">
      <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
    </div>
    <!-- 新人专享林 -->
    <div class="newPerson">
      <span>— 新人专享礼 —</span>
    </div>
     <!-- 红包区域 -->
     <div class="RedPacket">
       <div class="left">
         <p>新人专享礼包</p>
         <img src="//yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
       </div>
       <div class="right">
         <div class="modul1">
           <p>福利社</p>
           <div>今日特价</div>
           <img src="https://yanxuan-item.nosdn.127.net/073f16bf0c7ad8634c3abb7636e063c2.png?quality=75&type=webp&imageView&thumbnail=200x200" alt="">
         </div>
         <div class="modul2"></div>
       </div>
     </div>
  </div>
  </div>
</template>

<script>
import Vue from "vue";
import BScroll from 'better-scroll'
import axios from 'axios'
import router from '../../router'
import { Swipe, SwipeItem ,Icon,DropdownMenu, DropdownItem } from "vant";
Vue.use(Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
export default {
  name: "home",
  data(){
    return{
        option1: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 },
      ],
      indexData:{}, //初始化index数据
      cateNavDatas:[] //Nav初始化数据
    }
  },
 async mounted(){
    //初始化滑屏
    new BScroll(this.$refs.wrapper,{click:true})
    new BScroll(this.$refs.navContainer,{scrollX: true ,click:true})
  await axios.get('/3001/indexData').then((res)=>{
   this.indexData = res.data
  //  console.log(res.data);
  })
    //导航区域数据
  await axios.get('/3001/cateNavDatas').then((res)=>{
   this.cateNavDatas = res.data.categoryL1List.slice(4,12)
  })
 },
 methods:{
   goToLogin(){
      this.$router.push('login')
   }
 }
}
</script>
<style lang="stylus" scope>
#homeContainer 
  .header 
    display: flex;
    padding: 15px 30px;
    .deng
        color red
        margin-top 8px
        margin-left 20px
        width 100px
        height 50px
        text-align center
        line-height 50px
        line-height 40px
        border-radius 10px
        border 1px solid red
    img 
      width: 138px;
      height: 40px;
      margin-right: 20px;
      margin-top: 10px;
    .searchInput 
      border-radius 20px
      width: 532px;
      height: 56px;
      background-color: #ededed;
      text-align: center;
      .icon
        margin-top 10px
      span 
        line-height: 40px;
        color: #666;
        font-size: 28px;
  .my-swipe
      width 750px
      height 370px
      .van-swipe-item
        width 750px
        height 370px
        img 
          width 750px
          height 370px
  .brandContainer
      width 100%
      height 72px
      padding 0 30px
      display flex
      box-sizing border-box
      .bandItem
          line-height 72px
          flex 1
          display flex
          align-items center
          img
            width 32px
            height 32px
            vertical-align: middle
          span 
            vertical-align: middle
  
  .nav
      overflow hidden
      box-sizing border-box
      display flex
      justify-content space-between
      flex-wrap nowrap
      .navContainer
          width 650px
          height 60px
          .All
              width 1260px
              display flex
              margin-top 40px
              justify-content space-between
              align-items center
              .navItem
                position relative
                margin 0 8px
                line-height 1px
                white-space: nowrap;
                font-size 28px
                color #333
                &.active:after
                    content ''
                    display block
                    position absolute
                    color red
                    width 100%
                    height 2px
      .right
          width 100px
          height 40px
  .classify
        width 100%
        height 340px
        display flex
        flex-wrap wrap
        justify-content space-between
        padding 0 0 26px 0
        .classItem
            display flex
            align-items center
            flex-direction column
            margin 0 10px
            img 
                width 110px
                height 110px
            span 
                margin-top 10px
  .map
        width 100%
        height 240px
        img 
            width 100%
            height 240px
  .newPerson
      width 100%
      height 90px
      box-sizing border-box
      padding 0 30px
      text-align center
      span
        font-size 32px
        line-height 90px
  .RedPacket
      width 100%
      height 800px
      box-sizing border-box
      padding 0 0 0 30px
      .left
          position relative
          width 342px
          height 434px
          background #F9E9CF
          float left
          p
              font-size 16px
              padding 0 0 0 30px
          img 
              position absolute
              left 0
              top 0
              bottom 0
              right 0
              margin auto
              display block
              width 258px
              height 256px
      .right 
          box-sizing border-box
          float right 
          width 342px
          height 436px
          margin-right 30px
          .modul1
              width 342px
              height 214px
              background-color pink
              p
                  float left
                  font-size 24px
              div
                  color  #7F7F7F
                  font-size 20px
              img 
                  float right 
                  width 200px
                  height 200px
          .modul2
              width 342px
              height 214px
              background-color yellow 
  
</style>
