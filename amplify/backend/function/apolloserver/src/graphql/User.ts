import { inputObjectType, mutationField, objectType } from 'nexus'
import { hash, verify } from 'argon2'
import { sign } from 'jsonwebtoken'

const User = objectType({
  name: 'User',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.email()
    t.model.profile()
  },
})

const createUserInput = inputObjectType({
  name: 'createUserInput',
  definition: t => {
    t.nonNull.string('name')
    t.nonNull.string('email')
    t.nonNull.string('password')
  },
})

const createUser = mutationField('createUser', {
  type: 'User',
  args: { input: createUserInput },
  resolve: async (parent, { input }, { prisma }, info) => {
    const { name, email, password } = input

    const hashedPassword = await hash(password)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
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

    const passwordMatch = verify(password, user.password)

    if (!passwordMatch) throw new Error('Incorrect password')

    const signature = {
      userId: user.id,
      email: user.email,
    }

    const token = sign(signature, '123456789', { expiresIn: '30d' })

    return { token, user }
  },
})

export const UserTypes = {
  User,
  createUser,
  login,
}
