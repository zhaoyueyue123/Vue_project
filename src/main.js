import Vue from 'vue'
import 'lib-flexible/flexible'
import App from './App.vue'
Vue.config.productionTip = false
//引入路由
import router from './router'

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
