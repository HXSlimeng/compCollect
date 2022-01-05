import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import '@/icons'

Vue.config.productionTip = false
Vue.prototype.$gsap = gsap
Vue.prototype.$scrollTrigger = ScrollTrigger

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
