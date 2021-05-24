import React, {useState} from 'react'
import InputField from "../../../Utils/InputField/InputField"

import "./FormDirectionUser.scss"

export default function FormDirectionUser() {
    const [dataDirectionUser, setDataDirectionUser] = useState({
        nameRecepted: "",
        region: "",
        city: "",
        direction: "",
        via: "",
        dateAditional: "",
        tel: ""
    });

    const getDirectionUser = () => {
        console.log(dataDirectionUser);
    }
    return (
        <>            
            <form className="formdirection-user" onSubmit={getDirectionUser}>
                <fieldset>
                    <label>Nombre y apellido <abbr title="Obligatorio">*</abbr></label>
                    <InputField type={"text"} value={dataDirectionUser.nameRecepted} onChange={e => setDataDirectionUser({...dataDirectionUser, nameRecepted: e.target.value})}/>
                </fieldset>
                <fieldset className="formdirection-user__country">
                    <div>
                        <label>Departamento <abbr title="Obligatorio">*</abbr></label>                     
                        <InputField type={"text"} value={dataDirectionUser.region} onChange={e => setDataDirectionUser({...dataDirectionUser, region: e.target.value})}/>
                    </div>
                    <div>
                        <label>Ciudad <abbr title="Obligatorio">*</abbr></label>
                        <InputField type={"text"} value={dataDirectionUser.city} onChange={e => setDataDirectionUser({...dataDirectionUser, city: e.target.value})}/>
                    </div>
                </fieldset>
                <fieldset>
                    <label>Barrio <abbr title="Obligatorio">*</abbr></label>
                    <InputField type={"text"} value={dataDirectionUser.direction} onChange={e => setDataDirectionUser({...dataDirectionUser, direction: e.target.value})}/>
                </fieldset>
                <fieldset>
                    <label>Vía <abbr title="Obligatorio">*</abbr></label>
                    <InputField type={"text"} disabled={true} value={dataDirectionUser.via} onChange={e => setDataDirectionUser({...dataDirectionUser, via: e.target.value})}/>
                </fieldset>
                <fieldset>
                    <label>Datos adicionales</label>
                    <InputField type={"text"} disabled={true} value={dataDirectionUser.dateAditional} onChange={e => setDataDirectionUser({...dataDirectionUser, dateAditional: e.target.value})}/>
                </fieldset>
                <fieldset>
                    <label>Telefono de contacto <abbr title="Obligatorio">*</abbr></label>
                    <InputField type={"number"} value={dataDirectionUser.tel} onChange={e => setDataDirectionUser({...dataDirectionUser, tel: e.target.value})}/>
                </fieldset>
                <div className="formdirection-user__button">
                    <input className="formdirection-user__button__input" type="submit" value="Guardar cambios" />
                </div>
            </form>
        </>
    )
}
