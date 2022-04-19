const isLogin = () => {
  return !!localStorage.getItem('token')
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