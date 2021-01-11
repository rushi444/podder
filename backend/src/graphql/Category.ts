import {
  inputObjectType,
  mutationField,
  objectType,
  list,
  queryField,
} from 'nexus'

export const Category = objectType({
  name: 'Category',
  definition: t => {
    t.model.id()
    t.model.name()
    t.model.podcasts()
  },
})

export const createCategoryInput = inputObjectType({
  name: 'batchCategoriesInput',
  definition: t => {
    t.nonNull.string('name')
  },
})

export const createCategory = mutationField('createCategory', {
  type: Category,
  args: { input: createCategoryInput },
  resolve: async (parent, { input }, { prisma }, info) => {
    const newCategories = await prisma.category.create({
      data: {
        name: input.name,
      },
    })
    return newCategories
  },
})

export const getAllCategories = queryField('getAllCategories', {
  type: list(Category),
  resolve: async (parent, args, { prisma }, info) => {
    return await prisma.category.findMany()
  },
})
