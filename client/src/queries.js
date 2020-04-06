import { gql } from 'apollo-boost'
export const GET_CHARACTERS = gql`
  {
    characters {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const ADD_CHARACTER = gql`
  mutation AddCharacter($id: String!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!) {
    addCharacter(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const UPDATE_CHARACTER = gql`
  mutation updateCharacter($id: String!, $firstName: String!, $lastName: String!, $email: String!, $phone: String!) {
    updateCharacter(id: $id, firstName: $firstName, lastName: $lastName, email: $email, phone: $phone) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

export const REMOVE_CHARACTER = gql`
  mutation RemoveCharacter($id: String!) {
    removeCharacter(id: $id) {
      id
      firstName
      lastName
      email
      phone
    }
  }
`

