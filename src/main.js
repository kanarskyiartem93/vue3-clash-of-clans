import { createApp } from 'vue'
import App from './App.vue'
import '../assets/scss/main.scss'
import routes from "@/routes";

const app = createApp(App)

app.use(routes)
app.mount('#app')
