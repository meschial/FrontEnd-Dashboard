require('./bootstrap/index')
require('./plugins/index')

import Vue from 'vue'
import DashboardComponent from '@/pages/Dashboard/DashboardComponent'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './routes/index'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(DashboardComponent),
  router,
  store,
}).$mount('#app')
