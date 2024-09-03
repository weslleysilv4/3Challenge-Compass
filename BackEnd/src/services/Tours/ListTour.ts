import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

class ListTourService {
  async getAll(
    skip: number,
    take: number,
    sort: { [key: string]: 'asc' | 'desc' },
    filters?: {
      destination?: string
      categories?: number[]
      country?: string
      price?: number
      initialRatingAverage?: number[]
      continent?: string
      maxGroupSize?: number
      startDate?: Date
    }
  ) {
    const whereConditions = {
      ...(filters?.categories && {
        categories: {
          some: {
            category: {
              id: {
                in: filters?.categories,
              },
            },
          },
        },
      }),
      ...(filters?.destination && {
        city: { contains: filters?.destination },
      }),
      ...(filters?.country && {
        country: {
          name: {
            contains: filters?.country,
          },
        },
      }),
      ...(filters?.price && { price: { lte: filters?.price } }),
      ...(filters?.initialRatingAverage && {
        initialRatingAverage: {
          gte: Math.min(...filters.initialRatingAverage),
        },
      }),
      ...(filters?.continent && {
        continent: { contains: filters?.continent },
      }),
      ...(filters?.maxGroupSize && {
        maxGroupSize: { gte: filters?.maxGroupSize },
      }),
      ...(filters?.startDate && {
        initialDate: { gte: filters?.startDate },
      }),
    }

    const [tours, total] = await prisma.$transaction([
      prisma.tour.findMany({
        where: whereConditions,
        include: {
          categories: {
            select: {
              category: {
                select: { id: true, name: true },
              },
            },
          },
          country: true,
          reviews: {
            include: {
              rating: true,
            },
          },
          ratings: true,
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

    const toursWithAverageRatings = tours.map((tour) => {
      const totalRatings = tour.reviews.length

      const averageRatings = tour.reviews.reduce(
        (acc, review) => {
          acc.services += review?.rating?.services || 0
          acc.prices += review?.rating?.prices || 0
          acc.locations += review?.rating?.locations || 0
          acc.food += review?.rating?.food || 0
          acc.amenities += review?.rating?.amenities || 0
          acc.roomComfortAndQuality +=
            review?.rating?.roomComfortAndQuality || 0
          return acc
        },
        {
          services: 0,
          prices: 0,
          locations: 0,
          food: 0,
          amenities: 0,
          roomComfortAndQuality: 0,
        }
      )

      return {
        ...tour,
        averageRating: totalRatings
          ? {
              services: averageRatings.services / totalRatings,
              prices: averageRatings.prices / totalRatings,
              locations: averageRatings.locations / totalRatings,
              food: averageRatings.food / totalRatings,
              amenities: averageRatings.amenities / totalRatings,
              roomComfortAndQuality:
                averageRatings.roomComfortAndQuality / totalRatings,
            }
          : null,
      }
    })

    return { totalTours: total, totalPages, tours: toursWithAverageRatings }
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
        country: true,
        reviews: {
          include: {
            rating: true,
          },
        },
        ratings: true,
        _count: {
          select: { reviews: true },
        },
      },
    })

    if (!tourFound) {
      throw new Error('Tour not found')
    }

    const totalRatings = tourFound.reviews.length

    const averageRatings = tourFound.reviews.reduce(
      (acc, review) => {
        acc.services += review?.rating?.services || 0
        acc.prices += review?.rating?.prices || 0
        acc.locations += review?.rating?.locations || 0
        acc.food += review?.rating?.food || 0
        acc.amenities += review?.rating?.amenities || 0
        acc.roomComfortAndQuality += review?.rating?.roomComfortAndQuality || 0
        return acc
      },
      {
        services: 0,
        prices: 0,
        locations: 0,
        food: 0,
        amenities: 0,
        roomComfortAndQuality: 0,
      }
    )

    return {
      ...tourFound,
      averageRating: totalRatings
        ? {
            services: averageRatings.services / totalRatings,
            prices: averageRatings.prices / totalRatings,
            locations: averageRatings.locations / totalRatings,
            food: averageRatings.food / totalRatings,
            amenities: averageRatings.amenities / totalRatings,
            roomComfortAndQuality:
              averageRatings.roomComfortAndQuality / totalRatings,
          }
        : null,
    }
  }
}

export { ListTourService }
