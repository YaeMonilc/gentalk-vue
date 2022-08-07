import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/css/theme.css'

import global from '@/js/global.js'

Vue.prototype.$global = global

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
