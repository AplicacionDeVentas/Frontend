import React, {useState} from 'react'
import {Redirect, useHistory} from "react-router-dom"
import InputField from '../../../Utils/InputField/InputField'
import InputButton from '../../../Utils/InputButton/InputButton'
import AnchorButton from '../../../Utils/AnchorButton/AnchorButton'
import { db } from "../../../config/FirebaseConfig"
import {useAuth}  from "../../../Providers/AuthProviders"

import './SignUp.scss'

export default function SignUp() {
  const [credentialUser, setCredentialUser] = useState({
    name: "",
    lastname: "",
    email: "",
    nickname: "",
    password: "",
    repeatpassword: ""
  })
  const [isLoading, setIsLoading] = useState(false)
  const [formInvalid, setFormInvalid] = useState(null)
  const {userData, singUp} = useAuth()
  const history = useHistory()
  
  async function registerUser(e) {      
    e.preventDefault();
    if(!credentialUser.email || !credentialUser.password){
      return setFormInvalid("Correo y contraseña obligatorios")
    }
    if(credentialUser.password !== credentialUser.repeatpassword){
      return setFormInvalid("Las contraseñas deben coincidir")
    }
    
    await singUp(credentialUser.email, credentialUser.password).then(response => {
      setIsLoading(true)
      setFormInvalid(null)
      history.push("/")
      registerUserDb(response.user.uid)
    }).catch(err => {
        setIsLoading(false)
        if(err.code === 'auth/email-already-in-use'){
          return setFormInvalid("Correo electrónico en uso")
        }
        if(err.code === 'auth/invalid-email'){
          return setFormInvalid("Correo electrónico invalido")
        }
        if(err.code === 'auth/weak-password'){
          return setFormInvalid("La contraseña debe contener mínimo 6 carácteres")
        }
    })
  }

  const registerUserDb = async (uid) => {
    await db.collection('user').doc(uid).set({
      name: credentialUser.name,
      lastname: credentialUser.lastname,
      nickname: credentialUser.nickname,
      email: credentialUser.email,
      isAdmin: false,
      uid: uid,
      cart: []
    })
  }

  return (
    !userData ?
    <div className="signUp-container">
      <div className="signUp-container__form">
        <h1 className="signUp-container__form__title">Registro</h1>
        <form onSubmit={registerUser}>
          <InputField type="text" name="name" placeholder="Nombre(s)" onChange={e  => setCredentialUser({...credentialUser, name: e.target.value})}/>
          <InputField type="text" placeholder="Apellido(s)" onChange={e  => setCredentialUser({...credentialUser, lastname: e.target.value})}/>     
          <fieldset className="signUp-container__form__row">
            <InputField type="email" name="email" placeholder="Correo" onChange={e  => setCredentialUser({...credentialUser, email: e.target.value})}/>
          </fieldset>
          <fieldset className="signUp-container__form__row">
            <InputField type="text" placeholder="Apodo (opcional)" onChange={e  => setCredentialUser({...credentialUser, nickname: e.target.value})}/>
          </fieldset>
          <InputField type="password" name="password" placeholder="Contraseña" onChange={e  => setCredentialUser({...credentialUser, password: e.target.value})}/>
          <InputField type="password" placeholder="Confirmar contraseña" onChange={e  => setCredentialUser({...credentialUser, repeatpassword: e.target.value})}/>
          { formInvalid && <p className="invalidForm">{formInvalid}</p> }
          <div className="signUp-container__form__row">
            <InputButton value="Crear cuenta" disabled={isLoading}/>
          </div>
        </form>

        <span className="signUp-container__oTag">ó</span>

        <AnchorButton value="Iniciar Sesion" href={"/login"}/>

      </div>      
    </div>
    :
    <Redirect to="/" />
  )
}