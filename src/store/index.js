import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:null,
    usuario: null
  },
  mutations: {
    setToken(state, token){
      state.token = token
    },
    setUsuario(state, usuario){
      state.usuario = usuario
    }
  },
  actions: {
    setToken(context, value) {
      context.commit('setToken', value)
    },
    setUsuario(context, value){
      context.commit('setUsuario', value)
    }
  },
  modules: {
  }
})
