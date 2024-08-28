import { Router, Request, Response } from 'express'
import tourController from '../controllers/tourController'

const router = Router()

router.post('/tours', (req: Request, res: Response) => {
  return new tourController().create(req, res)
})
router.get('/tours', (req: Request, res: Response) => {
  return new tourController().getAll(req, res)
})

export default router
