import { PrismaClient } from '@prisma/client'

const tour = new PrismaClient().tour

class ListTourService {
  async getAll() {
    const tours = await tour.findMany({
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
    return tours
  }

  async getTour(id: string) {
    const tourFound = await tour.findUnique({
      where: {
        id,
      },
    })
    return tourFound
  }
}

export { ListTourService }
