import { inputObjectType, mutationField, objectType } from 'nexus'

const Podcast = objectType({
  name: 'Podcast',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.podcastLink()
    t.model.info()
    t.model.imageUrl()
    t.model.owner()
    t.model.categories()
  },
})

const createPodcastInput = inputObjectType({
  name: 'createPodcastInput',
  definition: t => {
    t.nonNull.string('name')
    t.nonNull.string('podcastLink')
    t.string('info')
    t.string('imageUrl')
    t.list.string('categories')
  },
})

const createPodcast = mutationField('createPodcast', {
  type: Podcast,
  args: { input: createPodcastInput },
  resolve: async (parent, { input }, { prisma, user }, info) => {
    const { categories = [], ...rest } = input

    const categoryIdList = categories.map((id: string) => ({
      id,
    }))

    const podcast = await prisma.podcast.create({
      data: {
        owner: {
          connect: {
            id: user.userId,
          },
        },
        categories: {
          connect: categoryIdList,
        },
        ...rest,
      },
    })

    return podcast
  },
})

export const PodcastTypes = { Podcast, createPodcastInput, createPodcast }
