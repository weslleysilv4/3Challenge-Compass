import { PrismaClient } from '@prisma/client'
import { TourProps } from '../../Types/Tour'

const prisma = new PrismaClient()

export class CreateTourService {
  async execute(data: TourProps) {
    const {
      name,
      image,
      country,
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
      reviews,
      categories,
    } = data

    const tour = await prisma.tour.create({
      data: {
        name,
        image,
        country,
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
        reviews:
          reviews && reviews.length > 0
            ? {
                create: reviews.map(
                  ({ name, email, comment, createdAt, ratings }) => ({
                    name,
                    email,
                    comment,
                    createdAt,
                    ratings: {
                      create: ratings.map(
                        ({
                          services,
                          prices,
                          locations,
                          food,
                          amenities,
                          roomComfortAndQuality,
                        }) => ({
                          services,
                          prices,
                          locations,
                          food,
                          amenities,
                          roomComfortAndQuality,
                        })
                      ),
                    },
                  })
                ),
              }
            : undefined,
        categories:
          categories && categories.length > 0
            ? {
                create: categories.map((category) => ({
                  category: {
                    connect: { id: category.id },
                  },
                })),
              }
            : undefined,
      },
    })

    return tour
  }
}
