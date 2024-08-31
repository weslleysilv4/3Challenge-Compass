import { Request, Response } from 'express'

interface CustomRequest extends Request {
  pagination: {
    limit: number
    offset: number
  }
}

export const getPagination = (req: CustomRequest, res: Response) => {
  const { limit, offset } = req.query
  const MAX_LIMIT = 9

  if (limit && Number(limit) > MAX_LIMIT) {
    return res
      .status(400)
      .json({ error: `Limit must be less than ${MAX_LIMIT}` })
  } else {
    req.pagination = {
      limit: Number(limit) || MAX_LIMIT,
      offset: Number(offset) || 0,
    }
  }
}
