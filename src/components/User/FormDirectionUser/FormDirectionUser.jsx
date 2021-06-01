import React, { useState } from 'react'
import InputField from "../../../Utils/InputField/InputField"
import { useAuth } from '../../../Providers/AuthProviders'
import { db } from '../../../config/FirebaseConfig'

import "./FormDirectionUser.scss"

export default function FormDirectionUser(props) {
  const { userData } = useAuth()
  const [dataDirectionUser, setDataDirectionUser] = useState({
    state: "",
    city: "",
    suburb: "",
    address: "",
    aditionalInfo: "",
    phoneNumber: 0,
    active: false
  });

  const saveUserAddressInfo = async (e) => {
    e.preventDefault();
    console.log(e)
    let tempObject = Object.assign({}, dataDirectionUser)
    let tempData = Object.assign({}, userData)
    if (tempData.addresses.length === 0) {
      tempObject = {...dataDirectionUser, active: true}
    }
    tempData.addresses.push(tempObject)
    await db.collection('user').doc(userData.uid).update(tempData).then(res => {
      console.log('200 OK')
    }).catch(err => {
      console.log('Error: ' + err)
    })
    props.setEditDirection(false)
  }

  return (
    <>
      <form className="formdirection-user" onSubmit={saveUserAddressInfo}>
        <fieldset className="formdirection-user__country">
          <div>
            <label>Departamento <abbr title="Obligatorio">*</abbr></label>                     
            <InputField type={"text"} value={dataDirectionUser.region} onChange={e => setDataDirectionUser({...dataDirectionUser, state: e.target.value})}/>
          </div>
          <div>
            <label>Ciudad <abbr title="Obligatorio">*</abbr></label>
            <InputField type={"text"} value={dataDirectionUser.city} onChange={e => setDataDirectionUser({...dataDirectionUser, city: e.target.value})}/>
          </div>
        </fieldset>
        <fieldset>
          <label>Barrio <abbr title="Obligatorio">*</abbr></label>
          <InputField type={"text"} value={dataDirectionUser.direction} onChange={e => setDataDirectionUser({...dataDirectionUser, suburb: e.target.value})}/>
        </fieldset>
        <fieldset>
          <label>Dirección <abbr title="Obligatorio">*</abbr></label>
          <InputField type={"text"} value={dataDirectionUser.via} onChange={e => setDataDirectionUser({...dataDirectionUser, address: e.target.value})}/>
        </fieldset>
        <fieldset>
          <label>Datos adicionales</label>
          <InputField type={"text"} value={dataDirectionUser.dateAditional} onChange={e => setDataDirectionUser({...dataDirectionUser, aditionalInfo: e.target.value})}/>
        </fieldset>
        <fieldset>
          <label>Telefono de contacto <abbr title="Obligatorio">*</abbr></label>
          <InputField type={"number"} value={dataDirectionUser.tel} onChange={e => setDataDirectionUser({...dataDirectionUser, phoneNumber: Number(e.target.value)})}/>
        </fieldset>
        <div className="formdirection-user__button">
          <input className="formdirection-user__button__input" type="submit" value="Guardar cambios"/>
        </div>
      </form>
    </>
  )
}
