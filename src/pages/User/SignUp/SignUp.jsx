import React, {useState} from 'react'
import {Redirect} from "react-router-dom"
import InputField from '../../../Utils/InputField/InputField'
import InputButton from '../../../Utils/InputButton/InputButton'
import AnchorButton from '../../../Utils/AnchorButton/AnchorButton'
import {auth, db} from "../../../config/FirebaseConfig"

import './SignUp.scss'

const SignUp = () => {
  const [credentialUser, setCredentialUser] = useState({
    name: "",
    lastname: "",
    email: "",
    nickname: "",
    password: "",
    repeatpassword: ""
  })  

  const [formInvalid, setFormInvalid] = useState(null)
  const [redirect, setRedirect] = useState(false)
  
  const registerUser = e => {   
    e.preventDefault();
    if(!credentialUser.email || !credentialUser.password){
      setFormInvalid("Correo y contraseña obligatorios")
    }
    else if(credentialUser.password !== credentialUser.repeatpassword){
      setFormInvalid("Las contraseñas deben coincidir")
    }
    else{
      auth.createUserWithEmailAndPassword(credentialUser.email, credentialUser.password).then(response => {
        setFormInvalid(null)
        registerUserDb(response.user.uid)
        loginUser(credentialUser.email, credentialUser.password)
        setRedirect(true)
      }).catch(err => {
          if(err.code === 'auth/email-already-in-use'){
            setFormInvalid("Correo electrónico en uso")
          }
          if(err.code === 'auth/invalid-email'){
            setFormInvalid("Correo electrónico invalido")
          }
          if(err.code === 'auth/weak-password'){
            setFormInvalid("La contraseña debe contener mínimo 6 carácteres")
          }
      })
    }
  }

  const registerUserDb = async (uid) => {
    await db.collection('user').doc(uid).set({
      name: credentialUser.name,
      lastname: credentialUser.lastname,
      nickname: credentialUser.nickname,
      email: credentialUser.email
    })
  }

  const loginUser = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password)
  }

  return (    
      !redirect ? 
      <div className="signUp-container">
        <div className="signUp-container__form">
          <h1 className="signUp-container__form__title">Registro</h1>
          <form onSubmit={registerUser}>
            <InputField type="text" placeholder="Nombre(s)" onChange={e  => setCredentialUser({...credentialUser, name: e.target.value})}/>
            <InputField type="text" placeholder="Apellido(s)" onChange={e  => setCredentialUser({...credentialUser, lastname: e.target.value})}/>     
            <fieldset className="signUp-container__form__row">
              <InputField type="email" placeholder="Correo" onChange={e  => setCredentialUser({...credentialUser, email: e.target.value})}/>
            </fieldset>
            <fieldset className="signUp-container__form__row">
              <InputField type="text" placeholder="Apodo (opcional)" onChange={e  => setCredentialUser({...credentialUser, nickname: e.target.value})}/>
            </fieldset>
            <InputField type="password" placeholder="Contraseña" onChange={e  => setCredentialUser({...credentialUser, password: e.target.value})}/>
            <InputField type="password" placeholder="Confirmar contraseña" onChange={e  => setCredentialUser({...credentialUser, repeatpassword: e.target.value})}/>
            {
              formInvalid ? 
              <p className="invalidForm">{formInvalid}</p>
              :
              null
            }
            <div className="signUp-container__form__row">
              <InputButton value="Crear cuenta"/>
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

export default SignUp
