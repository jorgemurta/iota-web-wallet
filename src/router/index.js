import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LoginPage from '@/pages/auth/Login'
import EmptyLayout from '@/components/layouts/EmptyLayout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Auth/Login',
      component: LoginPage,
      meta: {
        layout: EmptyLayout
      }
    }
  ]
})
