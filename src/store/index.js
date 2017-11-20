import Vue from 'vue'
import Vuex from 'vuex'
import notice from './modules/notice'
import dailyReport from './modules/dailyReport'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    notice,
    dailyReport
  }
})
