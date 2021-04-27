import React from 'react'
import InputField from '../../../../Utils/InputField/InputField'
import InputButton from '../../../../Utils/InputButton/InputButton'
import AnchorButton from '../../../../Utils/AnchorButton/AnchorButton'

import './SignUp.scss'

const SignUp = () => {
  return (
    <div className="signUp-container">
      <div className="signUp-container__form">
        <h1 className="signUp-container__form__title">Registro</h1>
        <form action="">
          <InputField type="text" placeholder="Nombre(s)"/>
          <InputField type="text" placeholder="Apellido(s)"/>
          <div className="signUp-container__form__row">
            <InputField type="text" placeholder="Correo"/>
          </div>
          <div className="signUp-container__form__row">
            <InputField type="text" placeholder="Usuario (opcional)"/>
          </div>
          <InputField type="password" placeholder="Contraseña"/>
          <InputField type="password" placeholder="Confirmar contraseña"/>
          <div className="signUp-container__form__row">
            <InputButton value="Crear cuenta"/>
          </div>
        </form>
      </div>
      <span className="signUp-container__oTag">
        ó
      </span>
      <AnchorButton value="Iniciar Sesion"/>
    </div>
  )
}

export default SignUp
