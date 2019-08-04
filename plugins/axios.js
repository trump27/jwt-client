import Cookies from 'js-cookie'

export default function ({ $axios }) {
  $axios.onRequest(config => {
    if (!!Cookies.get('token')) {
      config.headers.common['Authorization'] = 'Bearer ' + Cookies.get('token')
    }
  })
}