import { RouteRecordRaw } from 'vue-router'
import PdfViewr from '@/components/PdfViewr.vue'

const routes: Array<RouteRecordRaw> = [
  <RouteRecordRaw> {
    name: 'Escritor',
    path: '/escritor',
    component: () => import('@/views/app/escritor/HomeView.vue'),
    children: [
      <RouteRecordRaw> {
        name: 'Escritor.Home',
        path: '',
        component: () => import('@/views/app/escritor/MainContent.vue'),
       
      },
      <RouteRecordRaw> {
        name: 'Escritor.CadastroObra',
        path: 'cadastro-obra',
        component: () => import('../views/app/livros/CadastrarObra.vue')
      },
      <RouteRecordRaw> {
        path: 'livros/:idLivro/editar',
        name: 'Escritor.Editar.Livro',
        component: () => import('@/views/app/escritor/EditLivro.vue')
      },
      <RouteRecordRaw> {
        path: 'livros/:pdfUrl',
        name: 'Escritor.Pdf.Livro',
        component: PdfViewr,
        props: (route) => {
          const pdfUrl = route.params.pdfUrl;
          return {
            pdfUrl: typeof pdfUrl === 'string' ? decodeURIComponent(pdfUrl) : ''
          };
        }
      },
      <RouteRecordRaw> {
        path: 'livro',
        name: 'Escritor.Livro',
        component: () => import('@/views/app/livros/Obra.vue')
      }
    ]
  },
  <RouteRecordRaw> {
    name: 'Editora',
    path: '/editora',
    component: () => import('@/views/app/editora/HomeView.vue'),
    children: [
      <RouteRecordRaw> {
        name: 'Home',
        path: '',
        component: () => import('@/views/app/editora/MainContent.vue'),
       
      },
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