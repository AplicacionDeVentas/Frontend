import React from 'react'

import './InputField.scss'

const InputField = (props) => {
  return (
    <div className="newInput">
      <input
        type={props.type}
        className="newInput__input"
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default InputField
