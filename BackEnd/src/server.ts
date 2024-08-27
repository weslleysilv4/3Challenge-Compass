import express from 'express'
import dotenv from 'dotenv'
import routes from './routes'

dotenv.config()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT}`)
})
