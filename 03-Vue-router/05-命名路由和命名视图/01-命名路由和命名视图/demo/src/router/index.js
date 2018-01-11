import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Cart from '@/views/Cart'
import NavBar from '@/components/NavBar'
import SlideBar from '@/components/SlideBar'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: Index,
        NavBar: NavBar,
        SlideBar: SlideBar
      }
    },
    {
      path: '/cart/:id',
      name: 'Cart',
      component: Cart
    },
  ]
})
