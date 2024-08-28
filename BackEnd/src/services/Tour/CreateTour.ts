import { PrismaClient } from '@prisma/client'
import { TourProps } from '../../Types/Tour'

const prisma = new PrismaClient()

export class CreateTourService {
  async execute({
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
    categoryId,
  }: TourProps) {
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
        reviews: {
          create: [],
        },
        categories: {
          create: categoryId.map((categoryId: number) => ({
            category: {
              connect: { id: categoryId },
            },
          })),
        },
      },
    })

    return tour
  }
}
