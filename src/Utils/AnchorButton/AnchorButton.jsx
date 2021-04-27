import React from 'react'
import {Link} from "react-router-dom";

import './AnchorButton.scss'

const AnchorButton = (props) => {

  return (
    <div className="anchorButton">
      <Link
        to={props.href}
        className="anchorButton__a"
      >
        {props.value}
      </Link>
    </div>
  )
}

export default AnchorButton
