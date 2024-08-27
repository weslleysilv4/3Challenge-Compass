import { userClient } from '../../controllers/userController'
import UserProps from '../../Types/User'

class CreateUserService {
  async execute({ email, password, image }: UserProps) {
    const userFound = await userClient.findUnique({ where: { email } })
    if (userFound) {
      throw new Error('Email already registered')
    }
    const user = await userClient.create({
      data: {
        email,
        image,
        password,
      },
      select: {
        id: true,
        email: true,
        image: true,
        password: false,
      },
    })
    if (!user) {
      throw new Error('User not created')
    }
    return user
  }
}
export { CreateUserService }
