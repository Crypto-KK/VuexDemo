import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}
const mutations = {
  // 增加
  INC (state) {
    state.count += 1
  },
  DEC (state) {
    state.count -= 1
  }
  // 减少
}
const actions = {
  inc ({commit}) {
    commit('INC')
  },
  dec ({commit}) {
    commit('DEC')
  },
  incIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INC')
    }
  },
  incAsync ({commit}) {
    setTimeout(() => {
      commit('INC')
    }, 1000)
  }
}
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
