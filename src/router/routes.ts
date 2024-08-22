import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import PdfViewr from '@/components/PdfViewr.vue'
// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/',
//       name: 'auth',
//       component: () => import('../views/auth/login/Forms.vue')
//     },
//     {
//       path: '/login',
//       name: 'login',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/auth/login/Forms.vue')
//     },
//     {
//       path: '/cadastro/escritor',
//       name: 'cadastroEscritor',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/auth/signUp/components/escritor/FormsEscritor.vue')
//     },
//     {
//       path: '/cadastro/editora',
//       name: 'cadastroEditora',
//       // route level code-splitting
//       // this generates a separate chunk (About.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import('../views/auth/signUp/components/editora/FormsEditora.vue')
//     },
//     {
//       path: '/app',
//       name: 'home',
//       component: () => import('../views/HomeView.vue')
//     },
//     {
//       path: '/app/cadastrar-obra',
//       name: 'cadastrarObra',
//       component: () => import('../views/app/CadastrarObra.vue')
//     },
//     {
//       path: '/app/livros',
//       name: 'editarLivros',
//       component: () => import('../views/EditLivro.vue')
//     }
//   ]
// })

const routes: Array<RouteRecordRaw> = [
  <RouteRecordRaw> {
    name: 'App',
    path: '/app',
    component: () => import('../views/HomeView.vue'),
    children: [
      <RouteRecordRaw> {
        name: 'Home',
        path: '',
        component: () => import('../views/MainContent.vue')
      },
      <RouteRecordRaw> {
        name: 'CadastroObra',
        path: 'cadastro-obra',
        component: () => import('../views/app/livros/CadastrarObra.vue')
      },
      <RouteRecordRaw> {
        path: 'livros/:idLivro/editar',
        name: 'Editar.Livro',
        component: () => import('../views/EditLivro.vue')
      },
      <RouteRecordRaw> {
        path: 'livros/:pdfUrl',
        name: 'Pdf.Livro',
        component: PdfViewr,
        props: (route) => {
          const pdfUrl = route.params.pdfUrl;
          return {
            pdfUrl: typeof pdfUrl === 'string' ? decodeURIComponent(pdfUrl) : ''
          };
        }
      }
    ]
  },
  <RouteRecordRaw> {
    path: '/',
    children: [
      <RouteRecordRaw> {
        name: 'Auth.Login',
        path: 'login',
        component: () => import('../views/auth/login/Forms.vue')
      },
      <RouteRecordRaw> {
        path: '/cadastro/escritor',
        name: 'Cadastro.Escritor',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/auth/signUp/components/escritor/FormsEscritor.vue')
      },
      <RouteRecordRaw> {
        path: '/cadastro/editora',
        name: 'Cadastro.Editora',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/auth/signUp/components/editora/FormsEditora.vue')
      },
    ]
  }
]

export default routes