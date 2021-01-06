import { gql } from '@apollo/client'

export const ME_QUERY = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`

export const ALL_PODCASTS_QUERY = gql`
  query GetAllPodcasts {
    getAllPodcasts {
      id
      name
      podcastLink
      info
      imageUrl
      categories {
        name
      }
      owner {
        id
        name
      }
    }
  }
`

export const SEARCH_PODCASTS = gql`
  query SearchPodcasts($input: searchInput) {
    searchPodcasts(input: $input) {
      id
      name
      podcastLink
      info
      imageUrl
      categories {
        name
      }
      owner {
        name
      }
    }
  }
`
