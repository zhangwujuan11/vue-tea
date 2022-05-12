import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//公共css文件
import '@/assets/comm.css'
// 淘宝无线适配
import './assets/js/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
