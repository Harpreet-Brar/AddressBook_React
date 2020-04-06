import { gql } from 'apollo-server'
import { find, remove } from 'lodash'

const characters = [
  {
    id: '1',
    firstName: 'Mickey',
    lastName: 'Mouse',
    email: 'mickey@cartoon.com',
    phone: '1111111111'

  },
  {
    id: '2',
    firstName: 'Donald',
    lastName: 'Duck',
    email: 'donald@cartoon.com',
    phone:'1234567890'
  },
  {
    id: '3',
    firstName: 'Peter',
    lastName: 'Pan',
    email: 'pan@panmail.com',
    phone:'1234567890'
  }
]

const typeDefs = gql`
  type Character {
    id: String!
    firstName: String
    lastName: String
    email: String
    phone: String
  }
  
  type Query {
    character(id: String!): Character,
    characters: [Character]
  
  }
  type Mutation {
    addCharacter(id: String!, firstName: String!, lastName: String!, email: String!, phone: String!): Character
    updateCharacter(id: String!, firstName: String!, lastName: String!, email: String!, phone: String!): Character
    removeCharacter(id: String!): Character
  }
`
const resolvers = {
  Query: {
    characters: () => characters,
    character(parent, args, context, info) {
      return find(character, { id: args.id })
    },
  },
  Mutation: {
    addCharacter: (root, args) => {
      const newCharacter = {
        id: args.id,
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        phone: args.phone
      }
      characters.push(newCharacter)
      return newCharacter
    },
    updateCharacter: (root, args) => {
      const character = find(characters, { id: args.id })
      if (!character) {
        throw new Error(`Couldn't find character with id ${args.id}`)
      }
      character.firstName = args.firstName
      character.lastName = args.lastName,
      character.email = args.email
      character.phone = args.phone
      return character
    },
   
    removeCharacter: (root, args) => {
      const removedCharacter = find(characters, { id: args.id })
      if (!removedCharacter) {
        throw new Error(`Couldn't find character with id ${args.id}`)
      }
      remove(characters, c => { return c.id === removedCharacter.id })
      return removedCharacter
    },
   
  }
}
export { typeDefs, resolvers }