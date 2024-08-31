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
      await prisma.categoriesOnTour.deleteMany({
        where: { tourId: id },
      })

      const tour = await prisma.tour.update({
        where: { id },
        data: {
          ...data,
          categories: {
            create: data.categories,
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
    })

    return { message: 'Tour updated', updatedTour }
  }
}

export { UpdateTourService }
