import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
import { router } from './router'
import 'github-markdown-css/github-markdown.css'
import Markdown from './components/Markdown.vue'
import mitt from "mitt"
import 'spike-vue/package/lib/spike-vue.css'

const app = createApp(App)
app.config.globalProperties.$bus = mitt()
// 全局注册Markdown组件
app.component('Markdown', Markdown)
app.use(router)
app.mount('#app')
