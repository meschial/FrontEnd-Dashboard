require('./bootstrap/index')
require('./plugins/index')

import Vue from 'vue'
import DashboardComponent from '@/pages/Dashboard/DashboardComponent'
import router from './routes/index'
import store from './store/index'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'jquery/dist/jquery.min.js';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(DashboardComponent),
  router,
  store,
}).$mount('#app')
