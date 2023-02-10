import React from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const JoinButton = () => {
  return (
    <Link to="/join">
      <Button > Join now</Button>
    </Link>
  )
}

export default JoinButton