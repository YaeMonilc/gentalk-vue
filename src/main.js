import Vue from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'

import '@/css/theme.css'
import '@/css/anime.css'
import '@/css/status.css'
import '@/css/componentsTheme.css'

import "@/../node_modules/mdui/dist/css/mdui.css"
import mdui from 'mdui'
Vue.prototype.$mdui = mdui

import global from '@/js/global'
Vue.prototype.$global = global

import theme from '@/js/theme'
Vue.prototype.$theme = theme

Vue.config.productionTip = false

/* ThemeCheck */
const storageTheme = localStorage.getItem("theme")
if (!$.isNumeric(storageTheme)){
  localStorage.setItem("theme","4")
  theme.toggleTheme(4)
}else {
  if(!(theme.theme.length < storageTheme)) {
    theme.toggleTheme(storageTheme)
  }else {
    theme.toggleTheme(4) /* DefaultTheme */
  }
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
