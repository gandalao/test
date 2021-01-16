import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/users/Users'
import Rights from '../components/rights/Rights'
import Roles from '../components/roles/Roles'
import Goods from '../components/goods/Goods'
import Params from '../components/goods/Params'
import Categories from '../components/goods/Categories'
import Orders from '../components/orders/orders'
import Reports from '../components/reports/reports'
import addGoods from '../components/goods/addGoods'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/Welcome',
    children: [
      { path: '/Welcome', component: Welcome },
      { path: '/users', component: Users },
      { path: '/roles', component: Roles },
      { path: '/rights', component: Rights },
      { path: '/goods', component: Goods, },
      { path: '/params', component: Params },
      { path: '/categories', component: Categories },
      { path: '/orders', component: Orders },
      { path: '/reports', component: Reports },
      { path: '/addGoods', component: addGoods }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
