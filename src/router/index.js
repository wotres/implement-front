import Vue from 'vue'
import Router from 'vue-router'
import Main from '../views/Main'
import NotSupport from '../views/NotSupport'
import Login from '../views/Login'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '*',
      name: 'not-support',
      component: NotSupport,
      props: true
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

// router 를 통해 해당 페이지 접근전 수행하는 작업
// (이동할 라우트 객체, 현재 라우터 오기전 객체, 다음으로 이동)
router.beforeEach((to, from, next) => {
  const agent = navigator.userAgent.toLowerCase()
  // IE 안되게
  if (((navigator.appName === 'Netscape' && agent.search('trident') !== -1) || (agent.indexOf('msie') !== -1)) && to.name !== 'not-support') {
    console.log('ie')
    next({name: 'not-support', params: { reason: 'IE' }})
  } else {
    next()
  }
})
export default router
