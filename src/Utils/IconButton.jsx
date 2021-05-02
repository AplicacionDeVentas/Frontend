import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {
  return (
    <a href={props.href} target="_blank">
      <FontAwesomeIcon icon={props.icon} size={props.size}/>
    </a>
  )
}

export default IconButton
