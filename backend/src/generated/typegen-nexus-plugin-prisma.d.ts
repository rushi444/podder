import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
    first?: boolean
    last?: boolean
    before?: boolean
    after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Profile: Prisma.Profile
  Podcast: Prisma.Podcast
  Category: Prisma.Category
  Post: Prisma.Post
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'email' | 'password' | 'name' | 'isSpeaker' | 'profile' | 'podcast' | 'createdAt' | 'updatedAt' | 'Post'
      ordering: 'id' | 'email' | 'password' | 'name' | 'isSpeaker' | 'createdAt' | 'updatedAt'
    }
    profiles: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'bio' | 'likedPodcasts' | 'profilePic' | 'user' | 'userId'
      ordering: 'id' | 'bio' | 'profilePic' | 'userId'
    }
    podcasts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'owner' | 'userId' | 'categories' | 'likedBy' | 'Post'
      ordering: 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'userId'
    }
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcasts'
      ordering: 'id' | 'name'
    }
    posts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'content' | 'author' | 'authorId' | 'podcast' | 'podcastId'
      ordering: 'id' | 'content' | 'authorId' | 'podcastId'
    }
  },
  User: {
    podcast: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'owner' | 'userId' | 'categories' | 'likedBy' | 'Post'
      ordering: 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'userId'
    }
    Post: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'content' | 'author' | 'authorId' | 'podcast' | 'podcastId'
      ordering: 'id' | 'content' | 'authorId' | 'podcastId'
    }
  }
  Profile: {
    likedPodcasts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'owner' | 'userId' | 'categories' | 'likedBy' | 'Post'
      ordering: 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'userId'
    }
  }
  Podcast: {
    categories: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcasts'
      ordering: 'id' | 'name'
    }
    likedBy: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'bio' | 'likedPodcasts' | 'profilePic' | 'user' | 'userId'
      ordering: 'id' | 'bio' | 'profilePic' | 'userId'
    }
    Post: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'content' | 'author' | 'authorId' | 'podcast' | 'podcastId'
      ordering: 'id' | 'content' | 'authorId' | 'podcastId'
    }
  }
  Category: {
    podcasts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'owner' | 'userId' | 'categories' | 'likedBy' | 'Post'
      ordering: 'id' | 'name' | 'podcastLink' | 'info' | 'imageUrl' | 'userId'
    }
  }
  Post: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    profile: 'Profile'
    profiles: 'Profile'
    podcast: 'Podcast'
    podcasts: 'Podcast'
    category: 'Category'
    categories: 'Category'
    post: 'Post'
    posts: 'Post'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneProfile: 'Profile'
    updateOneProfile: 'Profile'
    updateManyProfile: 'BatchPayload'
    deleteOneProfile: 'Profile'
    deleteManyProfile: 'BatchPayload'
    upsertOneProfile: 'Profile'
    createOnePodcast: 'Podcast'
    updateOnePodcast: 'Podcast'
    updateManyPodcast: 'BatchPayload'
    deleteOnePodcast: 'Podcast'
    deleteManyPodcast: 'BatchPayload'
    upsertOnePodcast: 'Podcast'
    createOneCategory: 'Category'
    updateOneCategory: 'Category'
    updateManyCategory: 'BatchPayload'
    deleteOneCategory: 'Category'
    deleteManyCategory: 'BatchPayload'
    upsertOneCategory: 'Category'
    createOnePost: 'Post'
    updateOnePost: 'Post'
    updateManyPost: 'BatchPayload'
    deleteOnePost: 'Post'
    deleteManyPost: 'BatchPayload'
    upsertOnePost: 'Post'
  },
  User: {
    id: 'String'
    email: 'String'
    password: 'String'
    name: 'String'
    isSpeaker: 'Boolean'
    profile: 'Profile'
    podcast: 'Podcast'
    createdAt: 'DateTime'
    updatedAt: 'DateTime'
    Post: 'Post'
  }
  Profile: {
    id: 'String'
    bio: 'String'
    likedPodcasts: 'Podcast'
    profilePic: 'String'
    user: 'User'
    userId: 'String'
  }
  Podcast: {
    id: 'String'
    name: 'String'
    podcastLink: 'String'
    info: 'String'
    imageUrl: 'String'
    owner: 'User'
    userId: 'String'
    categories: 'Category'
    likedBy: 'Profile'
    Post: 'Post'
  }
  Category: {
    id: 'String'
    name: 'String'
    podcasts: 'Podcast'
  }
  Post: {
    id: 'String'
    content: 'String'
    author: 'User'
    authorId: 'String'
    podcast: 'Podcast'
    podcastId: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Profile: Typegen.NexusPrismaFields<'Profile'>
  Podcast: Typegen.NexusPrismaFields<'Podcast'>
  Category: Typegen.NexusPrismaFields<'Category'>
  Post: Typegen.NexusPrismaFields<'Post'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  