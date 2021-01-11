import {
  inputObjectType,
  mutationField,
  objectType,
  queryField,
  list,
} from 'nexus'
import { hash, verify } from 'argon2'
import { sign } from 'jsonwebtoken'

const User = objectType({
  name: 'User',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.isSpeaker()
    t.model.profile()
  },
})

const createUserInput = inputObjectType({
  name: 'createUserInput',
  definition: t => {
    t.nonNull.string('name')
    t.nonNull.string('email')
    t.nonNull.string('password')
    t.nonNull.string('password2')
    t.boolean('isSpeaker')
  },
})

const createUser = mutationField('createUser', {
  type: 'User',
  args: { input: createUserInput },
  resolve: async (parent, { input }, { prisma }, info) => {
    const { name, email, password, password2, isSpeaker = false } = input

    if (password !== password2) throw new Error('Passwords do not match')

    const hashedPassword = await hash(password)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isSpeaker,
      },
    })
    return newUser
  },
})

const loginInput = inputObjectType({
  name: 'loginInput',
  definition: t => {
    t.nonNull.string('email')
    t.nonNull.string('password')
  },
})

const login = mutationField('login', {
  type: 'AuthPayload',
  args: { input: loginInput },
  resolve: async (parent, { input }, { prisma }, info) => {
    const { email, password } = input

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) throw new Error('User does not exist')

    const passwordMatch = await verify(user.password, password)

    if (!passwordMatch) throw new Error('Incorrect password')

    const signature = {
      userId: user.id,
      email: user.email,
    }

    const token = sign(signature, '123456789', { expiresIn: '30d' })

    return { token, user }
  },
})

const me = queryField('me', {
  type: User,
  resolve: async (parent, args, { prisma, user }, info) => {
    const me = await prisma.user.findUnique({
      where: { id: user.userId },
    })
    return me
  },
})

const getAllSpeakers = queryField('getAllSpeakers', {
  type: list(User),
  resolve: async (parent, args, { prisma }, info) => {
    const speakers = await prisma.user.findMany({
      where: {
        isSpeaker: { equals: true },
      },
    })
    return speakers
  },
})

export const UserTypes = {
  User,
  createUser,
  login,
  me,
  getAllSpeakers,
}
