import Vue from 'vue'
import Router from 'vue-router'
import allRouters from './allRouter'
console.log(allRouters);
/**
 * router index
 */

Vue.use(Router)

  const router = new Router({
    'mode': 'history',
    'routes': [
      ...allRouters
    ],
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition && from.path !== '/') {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
  })
  
  export default router
