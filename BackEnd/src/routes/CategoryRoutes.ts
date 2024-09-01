import { Router } from 'express'
import CategoryController from '../controllers/categoryController'

const router = Router()

router.get('/categories', (req, res) => {
  return new CategoryController().getAll(req, res)
})

export default router
