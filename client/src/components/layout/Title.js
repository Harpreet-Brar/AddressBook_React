import React from 'react'

const getStyles = () => ({
  title: {
    fontSize: 24,
    padding: '10px',
    border: '5px black solid',
    marginBottom: '50px'
  }
})

const Title = () => {
  const styles = getStyles()

  return <h1 style={styles.title}>Address Book</h1>
}

export default Title
