import React from 'react'
import InputField from '../../../../Utils/InputField/InputField'

import './Login.scss'

const Login = () => {
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <InputField type="text" placeholder="Usuario o correo"/>
      <InputField type="password" placeholder="Contraseña"/>
    </div>
  )
}

export default Login
