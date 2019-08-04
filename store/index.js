import Cookies from "js-cookie";

export const state = () => ({
  token: null
});

export const mutations = {
  INIT_TOKEN: function(state) {

    // console.log('INIT', Cookies.get("token"))

    if (!!Cookies.get("token")) {
      state.token = Cookies.get("token");
    } else {
      state.token = null
      Cookies.remove("token")
    }
  },
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
    console.log('isAuthenticated token', !!state.token)

    return !!state.token;
  }
};
