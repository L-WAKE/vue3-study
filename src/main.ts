import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import vueEsign from 'vue-esign'//手写签名插件
// import VueDND from 'awe-dnd'

const vue = createApp(App)
vue.use(ElementPlus)
// vue.use(VueDND)
vue.use(vueEsign)
vue.use(router).mount('#app')
