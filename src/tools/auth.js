export const getCurrentAuthority = () => {
  return ['admin']
}

export const check = (authority) => {
  const currentUser = getCurrentAuthority()
  return currentUser.some(item => {
    authority.includes(item)
  })
}

export const isLogin = () => {
  const currentUser = getCurrentAuthority()
  return currentUser && currentUser[0] !== 'guest'
}
