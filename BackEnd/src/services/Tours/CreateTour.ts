import { PrismaClient } from '@prisma/client'
import { TourProps } from '../../Types/Tour'

const prisma = new PrismaClient()

export class CreateTourService {
  async execute(data: TourProps) {
    const { categories, ...tourData } = data

    const tour = await prisma.tour.create({
      data: {
        ...tourData,
        categories: {
          create: categories?.map((category) => ({
            category: {
              connect: { id: category.categoryId },
            },
          })),
        },
        reviews: {
          create: data.reviews,
        },
      },
      include: {
        categories: true,
        reviews: true,
      },
    })

    return tour
  }
}
