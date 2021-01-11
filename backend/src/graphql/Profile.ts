import {
  inputObjectType,
  mutationField,
  objectType,
  queryField,
  list,
} from 'nexus'

export const Profile = objectType({
  name: 'Profile',
  definition: t => {
    t.model.id()
    t.model.bio()
    t.model.profilePic()
    t.model.user()
  },
})

export const createProfileInput = inputObjectType({
  name: 'createProfileInput',
  definition: t => {
    t.string('bio')
    t.string('profilePic')
  },
})

export const upsertProfile = mutationField('upsertProfile', {
  type: Profile,
  args: { input: createProfileInput },
  resolve: async (parent, { input }, { prisma, user }, info) => {
    const { bio, profilePic } = input
    const { userId } = user

    const profile = await prisma.profile.upsert({
      where: { userId },
      update: { bio, profilePic },
      create: { bio, profilePic, user: { connect: { id: userId } } },
    })

    return profile
  },
})
