import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/css/theme.css'
import '@/css/anime.css'
import '@/css/status.css'
import '@/css/componentsTheme.css'

import global from '@/js/global'
Vue.prototype.$global = global

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
