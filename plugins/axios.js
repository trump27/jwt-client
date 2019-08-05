export default function ({ $axios, redirect, app, store }) {
  $axios.onRequest(config => {
    if (store.getters.isAuthenticated) {
      config.headers.common['Authorization'] = 'Bearer ' + store.getters.getToken
    }
  })

  $axios.onError(error => {
    if (error.response.status === 401) {
      // Unauthorized
      store.commit("SET_TOKEN", null)
      console.log('Tokenが無効です')
      redirect('/signin')
    }
  })
}