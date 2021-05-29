import React, {useState, useEffect} from "react"
import Productos from "../components/Web/Content/Productos.jsx"
import {db} from "../config/FirebaseConfig"

export default function Home(){

    const [maceticas, setMaceticas] = useState([])
    const [errorGetMacetas, setErrorGetMacetas] = useState(false)

    useEffect( () => {
        GetMaceticas()
    }, [])

    const GetMaceticas = async() => {
        const { docs } = await db.collection('maceticas').get().catch(err => {
            setErrorGetMacetas(true)
        })
        const maceticasArray = docs.map(item => ({id: item.id, ...item.data()}))
        setMaceticas(maceticasArray)
    }



    return(
        !errorGetMacetas ?
        <>
            <Productos bannerType="best-sellers" bannerTitle="Útlimas Novedades" bannerDescription="Encuentra nuestros más recientes productos en esta sección!" maceticas={maceticas}/>
            <Productos bannerType="on-sale" bannerTitle="Ofertas" bannerDescription="¡Aquí están nuestros productos con descuentos! Listos para que los lleves" maceticas={maceticas}/>
        </>
        :
        <>
            <div>"Ha ocurrido un error con la base de datos, por favor intentalo de nuevo"</div>
        </>
    )
}