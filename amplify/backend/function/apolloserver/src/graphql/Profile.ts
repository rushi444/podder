import { inputObjectType, mutationField, objectType } from 'nexus'

const Profile = objectType({
  name: 'Profile',
  definition: t => {
    t.model.id()
    t.model.bio()
    t.model.user()
  },
})

const createProfileInput = inputObjectType({
  name: 'createProfileInput',
  definition: t => {
    t.string('bio')
  },
})

const upsertProfile = mutationField('upsertProfile', {
  type: Profile,
  args: { input: createProfileInput },
  resolve: async (parent, { input }, { prisma, user }, info) => {
    const { bio } = input
    const { userId } = user

    const profile = await prisma.profile.upsert({
      where: { userId },
      update: { bio },
      create: { bio, user: { connect: { id: userId } } },
    })

    return profile
  },
})

export const ProfileTypes = {
  Profile,
  upsertProfile,
}
