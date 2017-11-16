import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/view/Main'
import dhsqform from '@/component/form/dhsq-form'
import dhsqpic from '@/component/form/dhsq-pic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main,
      redirect: '/Main/home',
      children: [
        {path: 'home', component: dhsqform},
        {path: 'dhsqpic', component: dhsqpic}
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: dhsqform
    },
    {
      path: '/dhsqpic',
      name: 'dhsqpic',
      component: dhsqpic
    }
  ]
})
