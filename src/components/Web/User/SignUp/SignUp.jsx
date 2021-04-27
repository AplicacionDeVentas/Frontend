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
          <InputField type="text" name="name" placeholder="Nombre(s)"/>
          <InputField type="text" name="lastname" placeholder="Apellido(s)"/>
          <div className="signUp-container__form__row">
            <InputField type="email" name="email" placeholder="Correo"/>
          </div>
          <div className="signUp-container__form__row">
            <InputField type="text" name="user" placeholder="Usuario (opcional)"/>
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
      <AnchorButton value="Iniciar Sesion" href={"/login"}/>
    </div>
  )
}

export default SignUp
