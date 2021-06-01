import React from 'react'

import './InputField.scss'

const InputField = (props) => {
  return (
    <div className="inputField">
      <input
        id={props.id}
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
        defaultValue={props.defaultValue}
      />
    </div>
  )
}

export default InputField
