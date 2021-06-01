import React from 'react'

import './InputField.scss'

const InputField = (props) => {
  return (
    <div className="inputField">
      <input
        checked = {props.checked}
        name={props.name}
        type={props.type}
        className="inputField__input"
        placeholder={props.placeholder}
        disabled={props.disabled}
        autoFocus={props.autoFocus}
        autoCapitalize={props.autoCapitalize}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}

export default InputField
