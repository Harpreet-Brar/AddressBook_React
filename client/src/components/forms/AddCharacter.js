import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { useMutation } from '@apollo/react-hooks'
import {ADD_CHARACTER, GET_CHARACTERS} from '../../queries'

const AddCharacter = ({ id, firstName, lastName, email, phone, onInputChange }) => {

    const [addCharacter] = useMutation(
        ADD_CHARACTER,
        {
          update(cache, { data: { addCharacter } }) {
            const { characters } = cache.readQuery({ query: GET_CHARACTERS })
            cache.writeQuery({
              query: GET_CHARACTERS,
              data: { characters: characters.concat([addCharacter])}
            })
          }
        }
      )
    
      return (
        <form  class="add_address_form" onSubmit={e => {
          e.preventDefault()
          addCharacter({
            variables: {
              id, firstName, lastName, email, phone
            },
            optimisticResponse: {
              __typename: 'Mutation',
              addCharacter: {
                __typename: 'Character',
                id,
                firstName,
                lastName,
                email,
                phone
              }
            }
          })
        }}>
          <TextField
            label='First Name'
            value={firstName}
            placeholder='i.e. John'
            onChange={e => onInputChange('firstName', e.target.value)}
            margin='normal'
            variant='outlined'
            style={{ margin: '10px' }}
          />
          <TextField
            label='Last Name'
            value={lastName}
            placeholder='i.e. Smith'
            onChange={e => onInputChange('lastName', e.target.value)}
            margin='normal'
            variant='outlined'
            style={{ margin: '10px' }}
          />
          <TextField
            label='email'
            value={email}
            placeholder='i.e. name@mail.com'
            onChange={e => onInputChange('email', e.target.value)}
            margin='normal'
            variant='outlined'
            style={{ margin: '10px' }}
          />
          <TextField
            label='phone'
            value={phone}
            placeholder='i.e. 0123456789'
            onChange={e => onInputChange('phone', e.target.value)}
            margin='normal'
            variant='outlined'
            style={{ margin: '10px' }}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
          >
            Add Character
          </Button>
        </form>
      )
    }
export default AddCharacter