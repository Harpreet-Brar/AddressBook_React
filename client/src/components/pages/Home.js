import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'

import Container from '@material-ui/core/Container'

import '../../App.css'
import AddCharacterContainer from '../containers/AddCharacterContainer'
import Title from '../layout/Title'
import Characters from '../lists/Characters'

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className='App'>
      <Title />
      <AddCharacterContainer />
      <Characters />
    </Container>
  </ApolloProvider>
)

export default App
