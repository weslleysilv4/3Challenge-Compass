import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ListTourService {
  async getAll(
    skip: number,
    take: number,
    sort: { [key: string]: 'asc' | 'desc' },
    filters?: {
      categories?: string
      country?: string
      price?: number
      initialRatingAverage?: number
      continent?: string
      maxGroupSize?: number
    }
  ) {
    const whereConditions = {
      ...(filters?.categories && {
        categories: {
          some: {
            category: {
              name: {
                contains: filters?.categories,
              },
            },
          },
        },
      }),
      ...(filters?.country && {
        country: { contains: filters?.country },
      }),
      ...(filters?.price && { price: { lte: filters?.price } }),
      ...(filters?.initialRatingAverage && {
        initialRatingAverage: {
          gte: filters?.initialRatingAverage,
        },
      }),
      ...(filters?.continent && {
        continent: { contains: filters?.continent },
      }),
      ...(filters?.maxGroupSize && {
        maxGroupSize: { gte: filters?.maxGroupSize },
      }),
    }
    const [tours, total] = await prisma.$transaction([
      prisma.tour.findMany({
        where: whereConditions,
        include: {
          categories: {
            include: {
              category: true,
            },
          },
          reviews: true,
          _count: {
            select: { reviews: true },
          },
        },
        skip,
        take,
        orderBy: sort,
      }),
      prisma.tour.count({
        where: whereConditions,
      }),
    ])
    const totalPages = Math.ceil(total / take)
    return { totalTours: total, totalPages, tours: tours }
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
        reviews: true,
        _count: {
          select: { reviews: true },
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
