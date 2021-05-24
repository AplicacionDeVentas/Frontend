import React, {useState} from 'react'
import FormDirectionUser from "../../../components/User/FormDirectionUser/FormDirectionUser"

import "./DirectionUser.scss"

export default function DirectionUser() {
    const [userDirection, setUserDirection] = useState(false)
    return (
        <div className="direction-user">
            <p>La siguiente dirección se utilizará por defecto a la hora de realizar una compra</p>
            {
                userDirection ?
                <div className="direction-user__section">
                    <h3>Dirección de envío</h3>
                    <FormDirectionUser />
                </div>
                :
                <div className="direction-user__section">
                    <h3>Dirección de envío</h3>
                    <p>Actualmente no tienes una dirreción guardada, si deseas agregarla has click <span onClick={() => setUserDirection(true)}>aquí</span></p>
                </div>
            }
        </div>
    )
}
