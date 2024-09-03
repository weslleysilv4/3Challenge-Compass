import { userClient } from '../../controllers/userController'
import UserProps from '../../Types/User'

class UpdateUserService {
  async execute({ id, email, name, image }: UserProps) {
    const user = await userClient.update({
      where: { id },
      data: {
        email,
        name,
        image,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
}
export { UpdateUserService }
