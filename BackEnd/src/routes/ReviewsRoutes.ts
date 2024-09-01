import { Router } from 'express'
import ReviewController from '../controllers/reviewController'

const router = Router()

router.post('/reviews', (req, res) => {
  return new ReviewController().createReview(req, res)
})

router.get('/reviews', (req, res) => {
  return new ReviewController().listReviews(req, res)
})

router.get('/reviews/:tourId', (req, res) => {
  return new ReviewController().getReviewsByTourId(req, res)
})

router.delete('/reviews/:id', (req, res) => {
  return new ReviewController().deleteReview(req, res)
})

export default router
