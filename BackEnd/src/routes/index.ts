import { Router } from 'express'
import userRoutes from './UserRoutes'

const router = Router()

router.use('/', userRoutes)

export default router
