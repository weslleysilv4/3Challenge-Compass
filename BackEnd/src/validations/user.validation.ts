import * as zod from 'zod'

export const userValidation = zod.object({
  email: zod.string().email(),
  image: zod.string().optional(),
})

export const userUpdateValidation = zod.object({
  email: zod.string().email().optional(),
  image: zod.string().optional(),
})
