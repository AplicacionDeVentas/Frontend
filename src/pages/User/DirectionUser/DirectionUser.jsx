import React, {useState} from 'react'
import FormDirectionUser from "../../../components/User/FormDirectionUser/FormDirectionUser"
import { useAuth } from '../../../Providers/AuthProviders'

import "./DirectionUser.scss"

export default function DirectionUser() {
  const { userData } = useAuth()

  const [editDirection, setEditDirection] = useState(false)



  return (
    <div className="direction-user">
      <p>La siguiente dirección se utilizará por defecto a la hora de realizar una compra</p>
      {
        editDirection ?
        <div className="direction-user__section">
          <h3>Dirección de envío</h3>
          <FormDirectionUser setEditDirection={setEditDirection}/>
          <span onClick={() => setEditDirection(false)}>Cancelar</span>
        </div>
        :
        <div className="direction-user__section">
          <h3>{userData.addresses.length > 1 ? "Direcciones" : "Dirección"} de envío</h3>
          {
            userData.addresses.length !== 0 ?
            <>
            <form action="">
              <ul>
                {
                  userData.addresses.map((item, index) => (
                    <li key={index}><input type="radio" name="address" value={index} defaultChecked={item.active}/><label htmlFor="">{item.address} ({item.suburb})</label></li>
                  ))
                }
              </ul>
            </form>
            <p>Si deseas añadir una nueva dirección haz click <span onClick={() => setEditDirection(true)}>aquí</span></p>
            </>:
            <>
              <p>Actualmente no tienes una dirreción guardada, si deseas agregarla has click <span onClick={() => setEditDirection(true)}>aquí</span></p>
            </>
          }
        </div>
      }
    </div>
  )
}
