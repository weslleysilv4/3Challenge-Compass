import { Router } from 'express'
import userRoutes from './UserRoutes'
import tourRoutes from './TourRoutes'
import reviewRoutes from './ReviewsRoutes'
import categoryRoutes from './CategoryRoutes'
import countryRoutes from './CountryRoutes'

const router = Router()

router.use('/', userRoutes)
router.use('/', tourRoutes)
router.use('/', reviewRoutes)
router.use('/', categoryRoutes)
router.use('/', countryRoutes)

export default router
