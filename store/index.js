import Cookies from "js-cookie";

export const state = () => ({
  token: Cookies.get("token")
});

export const mutations = {
  SET_TOKEN: function(state, token) {
    if (token) {
      state.token = token;
      Cookies.set("token", token, { expires: 1 })
    } else {
      state.token = null
      Cookies.remove("token")
    }
  }
};

export const getters = {
  isAuthenticated(state) {
    console.log('isAuthenticated', !!state.token)

    return !!state.token;
  },
  getToken(state) {
    return state.token
  }
};
