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
    if (state.total <= 24) {
      val = 'a'
    } else if (state.total > 24 && state.total <= 70) {
      val = 'b'
    } else if (state.total > 70 && state.total <= 100) {
      val = 'c'
    } else if (state.total > 100 && state.total <= 140) {
      val = 'd'
    }
    state.flag = val
  },
  changeEpilogue(state) {
    switch (state.flag) {
      case 'a':
        state.epilogue = 'normal end'
        break
      case 'b':
        state.epilogue = 'true end'
        break
      case 'c':
        state.epilogue = 'normal end'
        break
      case 'd':
        state.epilogue = 'normal end'
        break
    }
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
