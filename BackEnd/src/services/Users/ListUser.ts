import { userClient } from '../../controllers/userController'

class ListUserService {
  async getAll() {
    const users = await userClient.findMany()
    if (!users) {
      throw new Error('No users found')
    }
    return users
  }
  async getUser(id: string) {
    const user = await userClient.findUnique({
      where: { id },
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
}

export { ListUserService }
