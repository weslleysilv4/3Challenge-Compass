import { Router, Request, Response } from 'express'
import tourController from '../controllers/tourController'

const router = Router()

router.post('/tours', (req: Request, res: Response) => {
  return new tourController().create(req, res)
})
router.get('/tours', (req: Request, res: Response) => {
  return new tourController().getAll(req, res)
})
router.get('/tours/:id', (req: Request, res: Response) => {
  return new tourController().getTour(req, res)
})

router.delete('/tours/:id', (req: Request, res: Response) => {
  return new tourController().delete(req, res)
})

router.put('/tours/:id', (req: Request, res: Response) => {
  return new tourController().update(req, res)
})

export default router
