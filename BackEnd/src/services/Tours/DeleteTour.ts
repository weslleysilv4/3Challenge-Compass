import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class DeleteTourService {
  async execute(id: string) {
    const tourFound = await prisma.tour.findUnique({
      where: { id },
      include: {
        categories: true,
        reviews: true,
        ratings: true,
      },
    })

    if (!tourFound) {
      throw new Error('Tour not found')
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.categoriesOnTour.deleteMany({
        where: { tourId: id },
      })
      await prisma.review.deleteMany({
        where: { tourId: id },
      })
      await prisma.tour.delete({
        where: { id },
      })
    })

    return { message: 'Tour deleted successfully' }
  }
}

export { DeleteTourService }
