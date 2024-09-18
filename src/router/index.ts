import VueRouter, {createRouter, createWebHistory, RouterOptions} from 'vue-router'
import routes from './routes'
import TokenService from '@/service/sorage.service'

const router = createRouter(<RouterOptions>{
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// router.beforeEach((to, from, next) => {
//     const loggedIn = !!TokenService.getToken();
//     const userRole = TokenService.getUserRole();
    
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       if (!loggedIn) {
//         return next({ name: 'Auth.Login' });
//       }
      
//       const requiredRole = to.meta.requiredRole;
//       if (requiredRole && userRole !== requiredRole) {
//         return next({ name: 'Unauthorized' });
//       }
//     }
    
//     next();
//   });
  

export default router;