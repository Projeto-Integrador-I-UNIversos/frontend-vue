import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('../views/auth/login/Forms.vue')
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/auth/login/Forms.vue')
    },
    {
      path: '/cadastro/escritor',
      name: 'cadastroEscritor',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/auth/signUp/components/escritor/FormsEscritor.vue')
    },
    {
      path: '/cadastro/editora',
      name: 'cadastroEditora',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/auth/signUp/components/editora/FormsEditora.vue')
    },
    {
      path: '/app',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/app/cadastrar-obra',
      name: 'cadastrarObra',
      component: () => import('../views/app/CadastrarObra.vue')
    }
  ]
})

export default router