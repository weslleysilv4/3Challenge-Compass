import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { ReviewService } from '../services/Reviews/ReviewServices'

export const reviewClient = new PrismaClient().review

class ReviewController {
  async createReview(req: Request, res: Response) {
    try {
      const {
        anonymous,
        amenities,
        comment,
        email,
        food,
        locations,
        name,
        prices,
        roomComfortAndQuality,
        services,
        tourId,
      } = req.body
      const averageRating = (
        (services +
          prices +
          locations +
          food +
          amenities +
          roomComfortAndQuality) /
        6
      ).toFixed(1)
      const createReviewService = new ReviewService()
      const review = await createReviewService.createReview({
        anonymous,
        amenities,
        comment,
        averageRating: Number(averageRating),
        email,
        food,
        locations,
        name,
        prices,
        roomComfortAndQuality,
        services,
        tourId,
      })
      return res.status(201).json(review)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
  async listReviews(req: Request, res: Response) {
    const listReviewsService = new ReviewService()
    try {
      const reviews = await listReviewsService.listReviews()
      return res.status(200).json(reviews)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
  async deleteReview(req: Request, res: Response) {
    const { id } = req.params
    const deleteReviewService = new ReviewService()
    try {
      const review = await deleteReviewService.deleteReview(Number(id))
      return res.status(200).json(review)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
}

export { ReviewController }
