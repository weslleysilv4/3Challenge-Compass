import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'
import cors from 'cors'

dotenv.config()
const app = express()
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`)
})
