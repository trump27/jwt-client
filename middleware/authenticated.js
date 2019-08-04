export default function ({ store, redirect }) {
  // console.log('store', store)
  // ユーザーが認証されていないとき
  if (!store.getters.isAuthenticated) {
    return redirect('/signin')
    // store.$router.push('/signin')
  }
}