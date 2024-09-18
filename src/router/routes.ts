import { RouteRecordRaw } from 'vue-router'
import PdfViewr from '@/components/PdfViewr.vue'

const routes: Array<RouteRecordRaw> = [
  <RouteRecordRaw> {
    name: 'Escritor',
    path: '/escritor',
    component: () => import('@/views/app/escritor/HomeView.vue'),
    meta: {
      public: false,
      onlyWhenLoggedOut: false,
      requiresAuth: true
  },
    children: [
      <RouteRecordRaw> {
        name: 'Escritor.Home',
        path: '',
        component: () => import('@/views/app/escritor/MainContent.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        name: 'Escritor.CadastroObra',
        path: 'cadastro-obra',
        component: () => import('../views/app/livros/CadastrarObra.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        path: 'livros/:idLivro/editar',
        name: 'Escritor.Editar.Livro',
        component: () => import('@/views/app/escritor/EditLivro.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
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
        path: 'editora',
        name: 'Escritor.Editora',
        component: () => import('@/views/app/escritor/Editora.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        path: 'list-editora',
        name: 'Escritor.List.Editora',
        component: () => import('@/views/app/escritor/ListEditora.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
        },
        
      },
      <RouteRecordRaw> {
        path: 'propostas',
        name: 'Escritor.Proposta',
        component: () => import('@/views/app/escritor/Propostas.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
        },
        
      },
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
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        path: 'livro/:id',
        name: 'Editora.Livro',
        component: () => import('@/views/app/livros/Obra.vue')
      },
      <RouteRecordRaw> {
        path: 'list-livros',
        name: 'Editora.List.Livros',
        component: () => import('@/views/app/editora/ListObras.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
        },
      },
      <RouteRecordRaw> {
        path: 'obras-sugeridas',
        name: 'Editora.Obras.Sugeridas',
        component: () => import('@/views/app/editora/ObrasSugeridas.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
        },
      },
    ]
  },
  <RouteRecordRaw> {
    name: 'Admin',
    path: '/admin',
    component: () => import('@/views/app/admin/HomeAdmin.vue'),
    children: [
      <RouteRecordRaw> {
        path: '',
        name: 'Admin',
        component: () => import('@/views/app/admin/MainContent.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        path: 'list-users',
        name: 'Admin.UsersList',
        component: () => import('@/views/app/admin/UsersList.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
      <RouteRecordRaw> {
        path: 'list-livros',
        name: 'Admin.LivrosList',
        component: () => import('@/views/app/admin/LivrosList.vue'),
        meta: {
          public: false,
          onlyWhenLoggedOut: false,
          requiresAuth: true
      },
      },
    ]
  },
  <RouteRecordRaw> {
    path: '/',
    children: [
      <RouteRecordRaw> {
        name: 'Auth.Login',
        path: 'login',
        component: () => import('../views/auth/login/Forms.vue'),
        meta: {
          public: true,
          onlyWhenLoggedOut: true,
      }
      },
      <RouteRecordRaw> {
        path: '/cadastro/escritor',
        name: 'Cadastro.Escritor',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/auth/signUp/components/escritor/FormsEscritor.vue'),
        meta: {
          public: true,
          onlyWhenLoggedOut: true,
      }
      },
      <RouteRecordRaw> {
        path: '/cadastro/editora',
        name: 'Cadastro.Editora',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/auth/signUp/components/editora/FormsEditora.vue'),
        meta: {
          public: true,
          onlyWhenLoggedOut: true,
        }
      },
      
    ]
  }
]

export default routes