import Vue from 'vue'
import Router from 'vue-router'
import Driver from '@/components/driver'
import Admin from '@/components/admin'
import ErrorPage from '@/components/errorPage'
import Captain from '@/components/captain'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/driver',
      name: 'driver',
      component: Driver
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/errorPage',
      name: 'errorPage',
      component: ErrorPage
    },
    {
      path: '/captain',
      name: 'captain',
      component: Captain
    }
  ]
})
