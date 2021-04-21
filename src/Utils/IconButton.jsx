import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {
  return (
    <a>
      <FontAwesomeIcon icon={props.icon} size={props.size}/>
    </a>
  )
}

export default IconButton
