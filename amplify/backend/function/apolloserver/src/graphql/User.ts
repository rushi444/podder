import { mutationField, nonNull, objectType, stringArg } from 'nexus'

const UserModel = objectType({
  name: 'User',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.email()
  },
})

const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    name: stringArg(),
    email: nonNull(stringArg()),
  },
  resolve: async (parent, { name, email }, { prisma }, info) => {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    return user
  },
})

export const User = {
  UserModel,
  createUser,
}
