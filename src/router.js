import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ErrorPage from '@/pages/ErrorPage'
import _CardAlias from '@/pages/_CardAlias'

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/:cardAlias',
      name: 'cardAlias',
      component: _CardAlias
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: ErrorPage
    }
  ]
})

export default routers
