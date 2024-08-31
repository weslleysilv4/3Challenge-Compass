import { PrismaClient } from '@prisma/client'
import { ReviewProps } from '../../Types/Tour'

const prisma = new PrismaClient().review

class ReviewService {
  async createReview({
    anonymous,
    amenities,
    comment,
    email,
    food,
    locations,
    averageRating,
    name,
    prices,
    roomComfortAndQuality,
    services,
    tourId,
  }: ReviewProps) {
    const review = await prisma.create({
      data: {
        anonymous,
        averageRating,
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
      },
    })
    return review
  }
  async listReviews() {
    const reviews = await prisma.findMany()
    return reviews
  }
  async deleteReview(id: number) {
    const review = await prisma.delete({
      where: {
        id,
      },
    })
    return review
  }
}

export { ReviewService }
