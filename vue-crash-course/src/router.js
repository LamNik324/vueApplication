import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home'

Vue.useCssModule(Router);

export default new Router({
  mode: 'history',
  router: [
    {
      path: '/',
      component: HTMLFormElement,
    },
    {
      path: '/todos',
      component: () => import('./views/Todos.vue')
    }
  ]
})
