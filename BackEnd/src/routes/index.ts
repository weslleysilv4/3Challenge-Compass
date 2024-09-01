import { Router } from 'express'
import userRoutes from './UserRoutes'
import tourRoutes from './TourRoutes'
import reviewRoutes from './ReviewsRoutes'
import categoryRoutes from './CategoryRoutes'

const router = Router()

router.use('/', userRoutes)
router.use('/', tourRoutes)
router.use('/', reviewRoutes)
router.use('/', categoryRoutes)

export default router
