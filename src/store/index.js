import Vue from 'vue'
import Vuex from 'vuex'
//modules
import followers from './followers/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    followers
  }
})
