import process from 'process'
import VueRouter, {createRouter, createWebHistory, RouterOptions} from 'vue-router'
import routes from './routes'

const router = createRouter(<RouterOptions>{
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router;