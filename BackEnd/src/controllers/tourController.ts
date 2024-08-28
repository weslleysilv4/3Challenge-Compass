import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { CreateTourService } from '../services/Tour/CreateTour'
import { ListTourService } from '../services/Tour/ListTour'
import { TourSchema } from '../validations/tour.validation'
export const tourClient = new PrismaClient().tour

class tourController {
  async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      country,
      image,
      city,
      latitude,
      longitude,
      price,
      maxGroupSize,
      minAge,
      initialDate,
      finalDate,
      initialRatingAverage,
      duration,
      categories,
      reviews,
    } = req.body

    await TourSchema.parse(req.body)
    const createTourService = new CreateTourService()
    try {
      const tour = await createTourService.execute({
        name,
        country,
        image,
        city,
        latitude,
        longitude,
        price,
        maxGroupSize,
        minAge,
        initialDate,
        finalDate,
        initialRatingAverage,
        duration,
        categories,
        reviews,
      })
      return res.status(201).json(tour)
    } catch (error) {
      return res.status(400).json(error)
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const tourServices = new ListTourService()
      const tours = await tourServices.getAll()
      res.status(200).json(tours)
    } catch (error) {
      res.status(400).json(error)
    }
  }
}

export default tourController
