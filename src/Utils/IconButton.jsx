import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {
  return (
    <>
      <FontAwesomeIcon icon={props.icon} size={props.size} onClick={props.onClick}/>
    </>
  )
}

export default IconButton
