function createCounts (from, to) {
  const tmp = []
  for (tmp; from <= to; from++) {
    tmp.push({
      number: from,
      index: from - 1,
      selected: false
    })
  }
  return tmp
}

function getRandomIndex (list) {
  return list[Math.round(Math.random() * (list.length - 1))].index
}

const state = {
  counts: createCounts(1, 75),
  focusIndex: 0,
  lastIndex: 0
}

const actions = {
  select ({ state, commit }) {
    const unSelectList = state.counts.filter(d => !d.selected)
    const goal = getRandomIndex(unSelectList)
    let _focusIndex = state.lastIndex

    const key = setInterval(() => {
      if (_focusIndex === goal) {
        clearInterval(key)
        commit('select', _focusIndex)
        return
      }
      commit('updateFocus', _focusIndex)
      _focusIndex = (_focusIndex + 1) % 75
    }, 10)
  }
}

const mutations = {
  updateFocus (state, index) {
    state.focusIndex = index
  },
  select (state, index) {
    state.focusIndex = -1
    state.lastIndex = index
    state.counts[index].selected = true
  }
}

const getters = {
  currentValue (state) {
    if (state.focusIndex >= 0) {
      return state.counts[state.focusIndex]
    }
    return state.counts[state.lastIndex]
  }
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true
}
