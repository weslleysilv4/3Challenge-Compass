import { Request, Response } from 'express'
import { CategoryService } from '../services/Categories/CategoryService'

class CategoryController {
  async getAll(req: Request, res: Response) {
    const listCategoriesService = new CategoryService()
    try {
      const categories = await listCategoriesService.listCategories()
      return res.status(200).json(categories)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
}

export default CategoryController
