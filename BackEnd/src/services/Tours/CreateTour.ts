import { PrismaClient } from '@prisma/client'
import { TourProps } from '../../Types/Tour'

const prisma = new PrismaClient()

export class CreateTourService {
  async execute(data: TourProps) {
    const { countryId, categories, reviews, ...tourData } = data

    const tour = await prisma.tour.create({
      data: {
        ...tourData,
        country: {
          connect: {
            id: countryId,
          },
        },
        categories: {
          create: categories?.map((category) => ({
            category: {
              connect: { id: category.categoryId },
            },
          })),
        },
        reviews: {
          create: reviews?.map((review) => ({
            ...review,
            user: {
              connect: { id: review.userId },
            },
            rating: {
              create: {
                services: review.services,
                prices: review.prices,
                locations: review.locations,
                food: review.food,
                amenities: review.amenities,
                roomComfortAndQuality: review.roomComfortAndQuality,
                averageRating: review.averageRating,
                tour: {
                  connect: { id: review.tourId },
                },
              },
            },
          })),
        },
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        reviews: {
          include: {
            rating: true,
          },
        },
      },
    })

    return tour
  }
}
