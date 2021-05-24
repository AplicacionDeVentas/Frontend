import React, {useState} from 'react'
import InputField from "../../../Utils/InputField/InputField"
import AnchorButton from "../../../Utils/AnchorButton/AnchorButton"

import "./FormConfigUser.scss"

export default function FormConfigUser() {
    const [dataConfigUser, setDataConfigUser] = useState({
        name: "",
        lastname: "",
        nickname: "",
        email: ""
    });

    const getConfigUser = () => {
        console.log(dataConfigUser);
    }

    return (
        <>
            <form className="formconfig-user" onSubmit={getConfigUser}>
                <fieldset className="formconfig-user__fullname">
                    <div>
                        <label>Nombres <abbr title="Obligatorio">*</abbr></label>                     
                        <InputField type={"text"} value={dataConfigUser.name} onChange={e => setDataConfigUser({...dataConfigUser, name: e.target.value})}/>
                    </div>
                    <div>
                        <label>Apellidos <abbr title="Obligatorio">*</abbr></label>
                        <InputField type={"text"} value={dataConfigUser.lastname} onChange={e => setDataConfigUser({...dataConfigUser, lastname: e.target.value})}/>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Nombre visible <abbr title="Obligatorio">*</abbr></label>
                    <InputField type={"text"} value={dataConfigUser.nickname} onChange={e => setDataConfigUser({...dataConfigUser, nickname: e.target.value})}/>
                </fieldset>
                <fieldset>
                    <label>Correo electrónico</label>
                    <InputField type={"email"} disabled={true} value={dataConfigUser.email}/>
                </fieldset>
                <fieldset className="formconfig-user__resetpassword">
                    <legend>Cambiar Contraseña</legend>
                    <div>
                        <label>Contraseña</label>
                        <InputField type={"password"}/>
                    </div>
                    <div>
                        <label>Repetir Contraseña</label>
                        <InputField type={"password"}/>
                    </div>
                    <div>
                        <label>Contraseña actual</label>
                        <InputField type={"password"}/>
                    </div>
                </fieldset>
                <div className="formconfig-user__button">
                    <input className="formconfig-user__button__input" type="submit" value="Guardar cambios" />
                </div>
            </form>
        </>
    )
}
