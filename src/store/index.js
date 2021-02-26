import Vue from 'vue'
import Vuex from 'vuex'

import funnel from './modules/funnel'
import recent_update from './modules/recent_update'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules:{
      funnel,
      recent_update
    }
})

export default store
