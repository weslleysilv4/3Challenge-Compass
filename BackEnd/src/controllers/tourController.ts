import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateTourService } from '../services/Tours/CreateTour'
import { ListTourService } from '../services/Tours/ListTour'
import { DeleteTourService } from '../services/Tours/DeleteTour'
import { UpdateTourService } from '../services/Tours/UpdateTour'

export const tourClient = new PrismaClient().tour

class tourController {
  async create(req: Request, res: Response) {
    const data = req.body
    const createTourService = new CreateTourService()
    try {
      const tour = await createTourService.execute(data)
      return res.status(201).json(tour)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1
      const limit = Number(req.query.limit) || 9
      const skip = (page - 1) * limit
      console.log(page, limit, skip)
      const sort = (req.query.sort as { [key: string]: 'asc' | 'desc' }) || {
        name: 'asc',
      }

      const filters =
        (req.query as {
          destination?: string
          categories?: string
          country?: string
          price?: string
          rating?: string
          guests?: string
          continent?: string
          date?: string
        }) || {}

      const formatedFilters = {
        ...filters,
        categories: filters.categories
          ? filters.categories.split(',').map(Number)
          : undefined,
        price: Number(filters.price) || undefined,
        initialRatingAverage: Number(filters.rating) || undefined,
        maxGroupSize: Number(filters.guests) || undefined,
        startDate: filters.date ? new Date(filters.date) : undefined,
      }
      const tourServices = new ListTourService()
      const tours = await tourServices.getAll(
        skip,
        limit,
        sort,
        formatedFilters
      )
      res.status(200).json(tours)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
  async getTour(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string }
      const tourServices = new ListTourService()
      const tour = await tourServices.getTour(id)
      res.status(200).json(tour)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params as { id: string }
      const tourServices = new DeleteTourService()
      const tour = await tourServices.execute(id)
      res.status(200).json(tour)
    } catch (error) {
      res.status(400).json(error)
    }
  }
  async update(req: Request, res: Response) {
    try {
      const data = {
        ...req.body,
        initialDate: new Date(req.body.initialDate),
        finalDate: new Date(req.body.finalDate),
      }
      const { id } = req.params
      const tourServices = new UpdateTourService()

      const tour = await tourServices.execute(id, data)
      res.status(200).json(tour)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default tourController
