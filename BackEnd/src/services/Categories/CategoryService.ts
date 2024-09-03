import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient().category

class CategoryService {
  async listCategories() {
    const categories = await prisma.findMany({
      select: {
        id: true,
        name: true,
        _count: {
          select: {
            tours: true,
          },
        },
        tours: {
          select: {
            tour: {
              select: {
                price: true,
              },
            },
          },
          orderBy: {
            tour: {
              price: 'asc',
            },
          },
          take: 1,
        },
      },
    })
    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
      tourCount: category._count.tours,
      lowestPrice:
        category.tours.length > 0 ? category.tours[0].tour.price : null,
    }))

    return formattedCategories
  }
}

export { CategoryService }
