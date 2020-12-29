import { objectType } from 'nexus'

const Category = objectType({
  name: 'Category',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.podcasts()
  },
})

export const CategoryTypes = { Category }
