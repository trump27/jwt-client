import Cookies from 'js-cookie'

export const state = () => ({
  token: null
})

export const mutations = {
  INIT_TOKEN: function (state) {
    state.token = Cookies.get('token')
  },
  SET_TOKEN: function (state, token) {
    state.token = token
    Cookies.set('token', token, { expires: 1 })
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.token
  }
}