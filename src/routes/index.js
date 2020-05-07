import Cart from '../pages/Cart/Cart.vue'
import Home from '../pages/Home/Home.vue'
import CateList from '../pages/CateList/CateList.vue'
import Deserve from '../pages/Deserve/Deserve.vue'
import Ucenter from '../pages/Ucenter/Ucenter.vue'
import Login from '../pages/Login/Login.vue'
//3定义路由
export default[
  {path:'/home',component:Home},
  {path:'/cateList',component:CateList},
  {path:'/deserve',component:Deserve},
  {path:'/ucenter',component:Ucenter},
  {path:'/cart',component:Cart},
  {path:'/login',component:Login},
  {path:"/",redirect:"/home"}
]