import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient().category

class CategoryService {
  async listCategories() {
    const categories = await prisma.findMany()
    return categories
  }
}

export { CategoryService }
