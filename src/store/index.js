import Vue from 'vuw'
import Vuex from 'vuex'
import login from './modulle/login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  modules: {
    login
  }
})
