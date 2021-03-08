export const state = () => ({
  keyword: '',
})

export const mutations = {
  setKeyword(state, value) {
    state.keyword = value
  },
}

export const getters = {
  getKeyword(state) {
    return state.keyword
  },
}
