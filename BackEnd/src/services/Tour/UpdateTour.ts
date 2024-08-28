import { PrismaClient } from '@prisma/client'
import { TourProps } from '../../Types/Tour'

const prisma = new PrismaClient()

class UpdateTourService {
  async execute(id: string, data: TourProps) {
    const tourFound = await prisma.tour.findUnique({
      where: { id },
      include: {
        categories: true,
        reviews: true,
      },
    })

    if (!tourFound) {
      throw new Error('Tour not found')
    }

    const updatedTour = await prisma.$transaction(async (prisma) => {
      const tour = await prisma.tour.update({
        where: { id },
        data: {
          name: data.name,
          image: data.image,
          country: data.country,
          city: data.city,
          latitude: data.latitude,
          longitude: data.longitude,
          price: data.price,
          maxGroupSize: data.maxGroupSize,
          minAge: data.minAge,
          initialDate: data.initialDate,
          finalDate: data.finalDate,
          initialRatingAverage: data.initialRatingAverage,
          duration: data.duration,
          categories:
            data.categories && data.categories.length > 0
              ? {
                  create: data.categories.map((category) => ({
                    category: { connect: { id: category.id } },
                  })),
                }
              : undefined,
          reviews:
            data.reviews && data.reviews.length > 0
              ? {
                  create: data.reviews.map((review) => ({
                    name: review.name,
                    email: review.email,
                    comment: review.comment,
                    createdAt: review.createdAt,
                    ratings: {
                      create: review.ratings.map((rating) => ({
                        services: rating.services,
                        prices: rating.prices,
                        locations: rating.locations,
                        food: rating.food,
                        amenities: rating.amenities,
                        roomComfortAndQuality: rating.roomComfortAndQuality,
                      })),
                    },
                  })),
                }
              : undefined,
        },
      })

      return tour
    })

    return { message: 'Tour updated', updatedTour }
  }
}

export { UpdateTourService }
