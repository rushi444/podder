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
