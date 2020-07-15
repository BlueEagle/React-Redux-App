import React from 'react'
import { Button } from '@material-ui/core'

const ContentDisplay = props => {

  return (
    <div>
      <h3>Click below to generate fun activity ideas!</h3>
      <Button variant="contained" color="primary">Generate activities!</Button>
    </div>
  )
}

export default ContentDisplay