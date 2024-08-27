import { userClient } from '../../controllers/userController'
import UserProps from '../../Types/User'

class UpdateUserService {
  async execute({ id, email, password, image }: UserProps) {
    const user = await userClient.update({
      where: { id },
      data: {
        email,
        password,
        image,
      },
      select: {
        id: true,
        email: true,
        image: true,
        password: false,
      },
    })
    if (!user) {
      throw new Error('User not found')
    }
    return user
  }
}
export { UpdateUserService }
