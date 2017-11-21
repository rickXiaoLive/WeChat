import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/admin'
import ErrorPage from '@/components/common/errorPage'
import User from '@/components/user'

import Notice from '@/components/notice'
import EditNotice from '@/components/notice/edit'

import DailyReport from '@/components/dailyReport'
import Route from '@/components/route'

Vue.use(Router);

export default new Router({
  routes: [
    {//管理
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {//错误页
      path: '/errorPage',
      name: 'errorPage',
      component: ErrorPage
    },
    {//用户(主页)
      path: '/user',
      name: 'user',
      component: User
    },

    {//公告
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {//编辑公告 添加公告 添加公告不传id
      path: '/editNotice/:id',
      name: 'editNotice',
      component: EditNotice
    },


    {//天报表
      path: '/dailyReport',
      name: 'dailyReport',
      component: DailyReport
    },
    {//路线
      path: '/route',
      name: 'route',
      component: Route
    }

  ]
})
