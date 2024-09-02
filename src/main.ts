import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { plugin as formKitPlugin, defaultConfig } from '@formkit/vue'
import { createFloatingLabelsPlugin } from '@formkit/addons'
import '@formkit/themes/genesis'
import '@formkit/addons/css/floatingLabels'

const app = createApp(App)

app.use(router)
    .use(formKitPlugin, defaultConfig({
        plugins: [createFloatingLabelsPlugin({
        // set to true to have floating labels be the default.
        // otherwise, use the `:floating-label` prop
        useAsDefault: true
        })]
    }))

app.mount('#app')
