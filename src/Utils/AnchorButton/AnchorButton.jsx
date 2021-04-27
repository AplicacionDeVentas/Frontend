import React from 'react'

import './AnchorButton.scss'

const AnchorButton = (props) => {
  return (
    <div className="anchorButton">
      <a
        className="anchorButton__a"
        href="#"
      >
        {props.value}
      </a>
    </div>
  )
}

export default AnchorButton
