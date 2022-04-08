const token = localStorage.getItem('token')

const isLogin = () => {
  return !!token
}
const canAccess = (to) => {
  if (to.meta?.requireAuth) {
    return isLogin()
  }
  return true
}
const logout = () => {
  localStorage.removeItem('token')
}
export {
  isLogin,
  canAccess,
  logout,
}