import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Product from '@/views/Product'
import Order from '@/views/Order'
import Cart from '@/views/Cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '',
          component: Product
        },
        {
          path: 'product',
          component: Product
        },
        {
          path: 'order',
          component: Order
        }
      ]
    },
    {
      path: '/cart',
      component: Cart
    }
  ]
})
