import React from 'react'

import './InputField.scss'

const InputField = (props) => {
  return (
    <div className="inputField">
      <input
        name={props.name}
        type={props.type}
        className="inputField__input"
        placeholder={props.placeholder}
        autoFocus={!props.autoFocus ? props.autoFocus : 'off'}
      />
    </div>
  )
}

export default InputField
