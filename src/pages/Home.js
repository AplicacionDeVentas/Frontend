import React from "react";
import Productos from "../components/Web/Content/Productos.jsx";

export default function Home(){
    return(
        <>
            <Productos bannerType="best-sellers" bannerTitle="Útlimas Novedades" bannerDescription="Encuentra nuestros más recientes productos en esta sección!"/>
            <Productos bannerType="on-sale" bannerTitle="Ofertas" bannerDescription="¡Aquí están nuestros productos con descuentos! Listos para que los lleves"/>
        </>
    )
}