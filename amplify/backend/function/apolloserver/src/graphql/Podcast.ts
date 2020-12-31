import { inputObjectType, mutationField, objectType } from 'nexus'
import { list, NexusListDef, queryField } from 'nexus/dist/core'
import { prisma } from '../api/context'

const Podcast = objectType({
  name: 'Podcast',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.podcastLink()
    t.model.info()
    t.model.imageUrl()
    t.model.owner({ type: 'User' })
    t.model.categories({ type: 'Category' })
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

const getAllPodcasts = queryField('getAllPodcasts', {
  type: list(Podcast),
  resolve: async (parent, args, context, info) => {
    return await context.prisma.podcast.findMany()
  },
})

export const PodcastTypes = {
  Podcast,
  createPodcastInput,
  createPodcast,
  getAllPodcasts,
}
