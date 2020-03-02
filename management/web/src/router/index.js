import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import FoodCategory from '@/components/FoodCategory'
import Food from '@/components/Food'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/FoodCategory',
      name: 'FoodCategory',
      component: FoodCategory
    },
    {
      path: '/Food',
      name: 'Food',
      component: Food
    }
  ]
})
