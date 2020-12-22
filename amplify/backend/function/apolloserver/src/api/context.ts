import { PrismaClient } from '@prisma/client'
import { verify } from 'jsonwebtoken'

const getUserWithToken = (tokenWithBearer: string) => {
  const token = tokenWithBearer?.split(' ')[1]
  try {
    if (token) {
      return verify(token, '123456789')
    }
    return null
  } catch (err) {
    return null
  }
}

type TokenSignature = {
  userId: string
  email: string
  iat: number
  exp: number
}

export type Context = {
  prisma: PrismaClient
  user?: TokenSignature
}

export const prisma = new PrismaClient()

export const createContext = (ctx: any, headers: any): Context => {
  const user = getUserWithToken(headers.authorization) as TokenSignature
  return {
    prisma,
    user,
  }
}
