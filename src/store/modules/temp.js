const state = {
  total: 0,
  flag: '',
  epilogue: ''
}

const getters = {
  mapGetTotal: state => {
    state.total
    console.log('vuex total: ', state.total)
  },
  mapGetFlag: state => {
    state.flag
    console.log('vuex flag: ', state.flag)
  },
  mapGetEpilogue: state => {
    state.epilogue
    console.log('vuex epilogue: ', state.epilogue)
  }
}
const mutations = {
  changeTotal(state, val) {
    state.total = val
    console.log('vuex total is: ', state.total)
  },
  changeFlag(state, val) {
    if (state.total <= 30) {
      val = 'a'
    } else if (state.total > 35 && state.total <= 50) {
      val = 'b'
    } else if (state.total > 55 && state.total <= 70) {
      val = 'c'
    } else if (state.total > 65 && state.total <= 80) {
      val = 'd'
    }
    state.flag = val
  }
}
const actions = {
  setFlag(val) {
    val.commit('changeFlag')
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
