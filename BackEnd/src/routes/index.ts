import { Router } from 'express'
import userRoutes from './UserRoutes'
import tourRoutes from './TourRoutes'

const router = Router()

router.use('/', userRoutes)
router.use('/', tourRoutes)

export default router
