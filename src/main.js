import Vue from 'vue'
import App from './App.vue'
import store from './store'
//global styles
import '@/assets/css/typography.scss'
//global classes like container etc
import '@/assets/css/classes.scss'
//building sprite
const req = require.context('@/assets/icons', true)
req.keys().forEach(function (key) {
  req(key)
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
