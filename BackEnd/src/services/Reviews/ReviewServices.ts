import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient().review

class ReviewService {
  async createReview({ name, email, rating, reviewText, anonymous, tourId }) {
    const review = await prisma.create({
      data: {
        name,
        email,
        rating,
        reviewText,
        anonymous,
        tourId,
      },
    })
    return review
  }
}
