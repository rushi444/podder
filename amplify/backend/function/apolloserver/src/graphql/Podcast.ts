import { objectType } from 'nexus'

const Podcast = objectType({
  name: 'Podcast',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.info()
    t.model.podcastLink()
    t.model.imageUrl()
    t.model.owner()
    t.model.categories()
  },
})

export const PodcastTypes = { Podcast }
