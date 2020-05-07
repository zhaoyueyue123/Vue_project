<template>
   <div class="LoginContainer">
     <!-- Login头部 -->
     <div class="header">
        <van-icon name="wap-home-o" size="30" @click="GoBack"/>
       <span>网易严选</span>
       <van-icon name="search" size="30"/>
       <van-icon name="shopping-cart-o" size="30"/>
     </div>
     <!-- logoContainer -->
     <div class="logoContainer">
       <img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
     </div>
     <!-- 2中登录方式 -->
     <div class="LoginMethod">
       <div class="Phone">手机号快捷登录</div>
       <div class="Email">邮箱账号登录</div>
     </div>
   </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
  name: 'Login',
  methods:{
    GoBack(){
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="stylus">
  .LoginContainer
      .header
          display flex
          justify-content space-between
          align-items center
          height 88px
          width 750px
          padding 0 16px 0 24px
          box-sizing border-box
          span 
              font-size 35px
              margin 0 200px 0 150px
      .logoContainer
          position relative
          width 750px
          height 480px
          img 
            width 266px
            height 90px
            display block
            position absolute
            left 0
            top 0px
            bottom 0
            right 0
            margin auto 
  .LoginMethod
      overflow hidden
      width 750px
      box-sizing border-box
      padding 0 30px
      .Phone
          text-align center
          line-height 92px
          color #fff
          width 670px
          height 92px
          background red
          font-size 25px
          margin-bottom 32px
      .Email
          text-align center
          line-height 92px
          color red
          width 670px
          height 92px
          font-size 25px
          margin-bottom 32px
          border 1px solid red

</style>

