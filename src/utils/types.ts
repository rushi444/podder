export type Podcast = {
  id: string
  name: string
  podcastLink: string
  info: string
  imageUrl: string
  categories: any[]
  owner: Owner
  __typename: string
}

type Owner = {
  id: string
  name: string
  __typename: string
}
