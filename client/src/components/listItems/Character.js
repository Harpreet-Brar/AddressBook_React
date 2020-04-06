import React from 'react'

import Button from '@material-ui/core/Button'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import UpdateCharacter from '../forms/UpdateCharacter'
import RemoveCharacter from '../buttons/RemoveCharacter'

const Contact = (props) => {
  const { editMode, id, firstName, lastName, email, phone, onButtonClick, onInputChange } = props
  const fullName = `${firstName} ${lastName}`
  return (
    <div class="address_list">
      {
        editMode ?
          <UpdateCharacter
            id={id}
            firstName={firstName}
            lastName={lastName}
            email={email}
            phone={phone}
            editMode={editMode}
            onButtonClick={onButtonClick}
            onInputChange={onInputChange}
          />
          :
          <ListItem class="listitems">
            <ListItemText
              primary={fullName}
            />
            <ListItemText
              secondary={email}
            />
            <ListItemText
              secondary={phone}
            />
            <Button
              onClick={onButtonClick}
              variant='contained'
              style={{ margin: '5px' }}
            >
              Edit
            </Button>
            <RemoveCharacter
              id={id}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
            />
          </ListItem>
      }
  </div>
  )
}

export default Contact
