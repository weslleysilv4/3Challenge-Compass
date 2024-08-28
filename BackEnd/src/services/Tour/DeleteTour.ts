import { PrismaClient } from '@prisma/client'

const tour = new PrismaClient().tour

class DeleteTourService {
  async execute(id: string) {
    const tourFound = await tour.findUnique({
      where: {
        id,
      },
    })

    if (!tourFound) {
      throw new Error('Tour not found')
    }

    await tour.delete({
      where: {
        id,
      },
      include: {
        categories: {
          include: {
            category: true,
          },
        },
        reviews: {
          include: {
            ratings: true,
          },
        },
      },
    })

    return { message: 'Tour deleted' }
  }
}

export { DeleteTourService }
