import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Subscript from '@/components/Subscript'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/sub',
      name: 'Subscript',
      component: Subscript
    }
  ]
})
