import { reactive, readonly } from 'vue'

const token = localStorage.getItem('token')
const state = reactive({
  isLogin: !!token,
})

const signIn = () => {
  state.isLogin = true
}

const signOut = () => {
  state.isLogin = false
}
export default {
  state: readonly(state),
  signIn,
  signOut
}