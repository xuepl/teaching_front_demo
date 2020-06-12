import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Layout/Index'

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index,
      children:[{
          path: '/casePractises/1',
          name: 'One',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/practise/One.vue')
      },{
          path: '/casePractises/2',
          name: 'Two',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/practise/Two.vue')
      }
      ]
  }];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
