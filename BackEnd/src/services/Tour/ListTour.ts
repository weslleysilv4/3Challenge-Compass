import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ListTourService {
  async getAll(
    filters?: { country?: string; city?: string },
    pagination?: { skip?: number; take?: number }
  ) {
    const { country, city } = filters || {}
    const { skip, take } = pagination || {}

    const tours = await prisma.tour.findMany({
      where: {
        country: country || undefined,
        city: city || undefined,
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
      skip: skip,
      take: take,
      orderBy: {
        createdAt: 'desc',
      },
    })
    return tours
  }

  async getTour(id: string) {
    const tourFound = await prisma.tour.findUnique({
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

    if (!tourFound) {
      throw new Error('Tour not found')
    }

    return tourFound
  }
}

export { ListTourService }
