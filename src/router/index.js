import Vue from 'vue'
import VueRouter from 'vue-router'
//import routers from '../routes'
// 定义的变量必须交routes
import routes from '../routes'
//1  将路由定义成插件
Vue.use(VueRouter)

//4  定义路由器
export default new VueRouter({
  routes,
  mode:"history"
})