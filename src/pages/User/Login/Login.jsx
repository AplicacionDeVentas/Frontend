import React, {useState} from 'react'
import {Redirect, useHistory} from "react-router-dom"
import InputField from '../../../Utils/InputField/InputField'
import InputButton from '../../../Utils/InputButton/InputButton'
import AnchorButton from '../../../Utils/AnchorButton/AnchorButton'
import {auth} from "../../../config/FirebaseConfig"
import {useAuth} from "../../../Providers/AuthProviders"

import './Login.scss'

const Login = () => {

  const [credentialUser, setCredentialUser] = useState({
    email: "",
    password: ""
  })
  const [formInvalid, setFormInvalid] = useState(null)
  const history = useHistory()
  const {userData} = useAuth()
  

  const loginIn = e => {
    e.preventDefault();
    if(!credentialUser.email || !credentialUser.password){
      setFormInvalid("Porfavor rellenar todos los campos")
    }else{
      auth.signInWithEmailAndPassword(credentialUser.email, credentialUser.password).then(response => {
        setFormInvalid(null)
        history.push("/")
      }).catch(err => {
        if(err.code === 'auth/invalid-email'){
          setFormInvalid("Correo electrónico invalido")
        }
        if(err.code === 'auth/user-disabled'){
          setFormInvalid("Lo sentimos, este correo ha sido desabilitado")
        }
        if(err.code === 'auth/user-not-found'){
          setFormInvalid("No existe una cuenta registrada con este correo")
        }
        if(err.code === 'auth/wrong-password'){
          setFormInvalid("Contraseña incorrecta")
        }
      })
    }
  }

  const redic = () => {
    return (
      <Redirect to="/" />
    )
  }

  return (
    !userData ? 
    <div className="login">
      <div className="login__form">
        <h1 className="login__form__title">Inicia Sesion</h1>
        <form onSubmit={loginIn}>
          <InputField name="email" type="email" placeholder="Usuario o correo" autoFocus onChange={e  => setCredentialUser({...credentialUser, email: e.target.value})}/>
          <InputField name="password" type="password" placeholder="Contraseña" onChange={e  => setCredentialUser({...credentialUser, password: e.target.value})}/>
          <InputButton value="Iniciar Sesion"/>
          {
            formInvalid ? 
            <p className="invalidForm">{formInvalid}</p>
            :
            null
          }
        </form>
        <span className="login__form__oTag">
          ó
        </span>
        <AnchorButton value="Registrarme" href={"/signup"}/>
        <div className="login__form__forgotPasswd">
          <a href="#">Olvidé mi contraseña</a>
        </div>
      </div>
    </div>
    :
    redic()
  )
}

export default Login
