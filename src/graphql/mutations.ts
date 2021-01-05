import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation CreateUser($input: createUserInput) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
`

export const LOGIN = gql`
  mutation Login($input: loginInput) {
    login(input: $input) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export const UPSERT_PROFILE = gql`
  mutation UpsertProfile($input: createProfileInput) {
    upsertProfile(input: $input) {
      id
      bio
      profilePic
      user {
        id
        name
        email
      }
    }
  }
`

export const CREATE_PODCAST = gql`
  mutation CreatePodcast($input: createPodcastInput) {
    createPodcast(input: $input) {
      id
      name
      podcastLink
      info
      imageUrl
      owner {
        name
        email
        profile {
          bio
          profilePic
        }
      }
    }
  }
`
