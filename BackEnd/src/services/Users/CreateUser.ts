import { userClient } from '../../controllers/userController'
import UserProps from '../../Types/User'

class CreateUserService {
  async execute({ id, email, name, image }: UserProps) {
    const userFound = await userClient.findUnique({ where: { email } })
    if (userFound) {
      throw new Error('Email already registered')
    }
    const user = await userClient.create({
      data: {
        id,
        email,
        image,
        name,
      },
    })
    if (!user) {
      throw new Error('User not created')
    }
    return user
  }
}
export { CreateUserService }
