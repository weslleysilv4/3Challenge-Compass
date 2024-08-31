import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateUserService } from '../services/Users/CreateUser'
import { ListUserService } from '../services/Users/ListUser'
import { DeleteUserService } from '../services/Users/DeleteUser'
import { UpdateUserService } from '../services/Users/UpdateUser'
import UserProps from '../Types/User'
import {
  userUpdateValidation,
  userValidation,
} from '../validations/user.validation'

export const userClient = new PrismaClient().user

class userController {
  async create(req: Request, res: Response) {
    try {
      await userValidation.parse(req.body)
      const { id, email, name, image } = req.body as UserProps

      const usersService = new CreateUserService()
      const user = await usersService.execute({
        id,
        email,
        name,
        image,
      })
      res.status(201).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const usersService = new ListUserService()
      const users = await usersService.getAll()
      res.status(200).json(users)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async getUser(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string }
      const usersService = new ListUserService()
      const user = await usersService.getUser(id)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string }
      const usersService = new DeleteUserService()
      const user = await usersService.execute(id)
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  }

  async update(req: Request, res: Response) {
    try {
      await userUpdateValidation.parse(req.body)
      const { id } = req.params
      const { email, name, image } = req.body
      const usersService = new UpdateUserService()
      const user = await usersService.execute({ id, email, name, image })
      res.status(200).json(user)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default userController
