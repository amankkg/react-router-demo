const JsonPlaceholderHostname = 'https://jsonplaceholder.typicode.com'

const usersCache = {
  userList: undefined,
  timestamp: undefined,
}

export async function getUserList() {
  if (new Date() - usersCache.timestamp < 24 * 60 * 60 * 1000)
    return usersCache.userList

  const response = await fetch(`${JsonPlaceholderHostname}/users`)
  const users = await response.json()

  usersCache.userList = users
  usersCache.timestamp = Date.now()

  return users
}

export async function getUser(userId) {
  const response = await fetch(`${JsonPlaceholderHostname}/users/${userId}`)
  const user = await response.json()

  return user
}