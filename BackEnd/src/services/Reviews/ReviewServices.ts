import { PrismaClient } from '@prisma/client'
import { ReviewProps } from '../../Types/Tour'

const prisma = new PrismaClient()

class ReviewService {
  async createReview({
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
    userId,
  }: ReviewProps) {
    const tourExists = await prisma.tour.findUnique({
      where: { id: tourId },
    })

    const userExists = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (!tourExists) {
      throw new Error('Tour not found')
    }
    if (!userExists) {
      throw new Error('User not found')
    }

    const review = await prisma.review.create({
      data: {
        tourId,
        userId,
        anonymous,
        comment,
        email,
        name,
      },
    })

    const averageRating =
      (services +
        prices +
        locations +
        food +
        amenities +
        roomComfortAndQuality) /
      6

    const rating = await prisma.rating.create({
      data: {
        reviewId: review.id,
        tourId: tourId,
        services,
        prices,
        locations,
        food,
        amenities,
        roomComfortAndQuality,
        averageRating,
      },
    })

    await this.updateTourRatings(tourId)

    return { review, rating }
  }

  private async updateTourRatings(tourId: string) {
    const ratings = await prisma.rating.findMany({
      where: { tourId },
    })

    const totalReviews = ratings.length

    const sumRatings = ratings.reduce(
      (acc, rating) => {
        acc.services += rating.services
        acc.prices += rating.prices
        acc.locations += rating.locations
        acc.food += rating.food
        acc.amenities += rating.amenities
        acc.roomComfortAndQuality += rating.roomComfortAndQuality
        return acc
      },
      {
        services: 0,
        prices: 0,
        locations: 0,
        food: 0,
        amenities: 0,
        roomComfortAndQuality: 0,
      }
    )

    const averageRatings = {
      services: sumRatings.services / totalReviews,
      prices: sumRatings.prices / totalReviews,
      locations: sumRatings.locations / totalReviews,
      food: sumRatings.food / totalReviews,
      amenities: sumRatings.amenities / totalReviews,
      roomComfortAndQuality: sumRatings.roomComfortAndQuality / totalReviews,
      initialRatingAverage:
        (sumRatings.services +
          sumRatings.prices +
          sumRatings.locations +
          sumRatings.food +
          sumRatings.amenities +
          sumRatings.roomComfortAndQuality) /
        (6 * totalReviews),
    }

    await prisma.tour.update({
      where: { id: tourId },
      data: {
        initialRatingAverage: averageRatings.initialRatingAverage,
      },
    })
  }

  async listReviews() {
    const reviews = await prisma.review.findMany({
      include: {
        user: {
          include: {
            _count: {
              select: {
                reviews: true,
              },
            },
          },
        },
      },
    })

    return reviews
  }

  async getReviewsByTourId(tourId: string) {
    const reviews = await prisma.review.findMany({
      where: {
        tourId,
      },
      include: {
        user: {
          include: {
            _count: {
              select: {
                reviews: true,
              },
            },
          },
        },
        rating: true,
      },
    })
    return reviews
  }

  async deleteReview(id: number) {
    const review = await prisma.review.delete({
      where: {
        id,
      },
    })
    return review
  }
}

export { ReviewService }
