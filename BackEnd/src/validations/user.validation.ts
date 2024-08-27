import * as zod from 'zod'

export const userValidation = zod.object({
  email: zod.string().email(),
  password: zod.string().min(6),
  image: zod.string().optional(),
})

export const userUpdateValidation = zod.object({
  email: zod.string().email().optional(),
  password: zod.string().min(6).optional(),
  image: zod.string().optional(),
})
