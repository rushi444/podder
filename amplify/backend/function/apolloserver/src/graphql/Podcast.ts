import {
  inputObjectType,
  mutationField,
  objectType,
  list,
  queryField,
} from 'nexus'

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

    const categoryNameList = categories.map((name: string) => ({
      name,
    }))

    const podcast = await prisma.podcast.create({
      data: {
        owner: {
          connect: {
            id: user.userId,
          },
        },
        categories: {
          connect: categoryNameList,
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

const searchInput = inputObjectType({
  name: 'searchInput',
  definition: t => {
    t.string('searchQuery')
  },
})

const searchPodcasts = queryField('searchPodcasts', {
  type: list(Podcast),
  args: { input: searchInput },
  resolve: async (parent, { input }, { prisma }, info) => {
    const { searchQuery = '' } = input
    const podcasts = await prisma.podcast.findMany({
      where: {
        OR: [
          {
            name: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
          {
            info: {
              contains: searchQuery,
              mode: 'insensitive',
            },
          },
        ],
      },
    })
    return podcasts
  },
})

export const PodcastTypes = {
  Podcast,
  createPodcastInput,
  createPodcast,
  getAllPodcasts,
  searchInput,
  searchPodcasts,
}
