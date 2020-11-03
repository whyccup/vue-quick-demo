import Vue from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/styles/index.scss' // global css
import '@/assets/font_icons/fonts.css' // 字体icon， 直接引用类即可

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
