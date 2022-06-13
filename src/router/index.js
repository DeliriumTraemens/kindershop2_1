import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ShopCommander from "../views/ShopCommander";
import ShopTrainer from "../views/ShopTrainer";
import CategorySearch from "../views/CategorySearch";
import ProductSearch from "../views/ProductSearch";
import ProductPage from "../views/ProductPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/commander',
    name: 'ShopCommander',
    component: ShopCommander
  },
  {
    path: '/trainer',
    name: 'ShopTrainer',
    component: ShopTrainer
  },
  {
    path: '/catSearch',
    name: 'CategorySearch',
    component: CategorySearch
  },
  {
    path: '/prodSearch',
    name: 'ProductSearch',
    component: ProductSearch
  },
  {
    path: '/product',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
