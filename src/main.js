import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// ElementUI框架
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//公共css文件
import '@/assets/comm.css'
// 淘宝无线适配
import './assets/js/flexible'
// 字体样式
import '@/assets/css/iconfont.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
