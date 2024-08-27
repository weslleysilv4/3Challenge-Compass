import { userClient } from '../../controllers/userController'

class DeleteUserService {
  async execute(id: string) {
    const user = await userClient.delete({
      where: { id },
    })
    if (!user) {
      throw new Error('User not found')
    }
    return
  }
}
export { DeleteUserService }
