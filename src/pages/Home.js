import React from "react";
import Productos from "../components/Web/Content/Productos.jsx";

export default function Home(){
    return(
        <>
            <Productos bannerType="best-sellers" bannerTitle="Utlimas Novedades"/>
            <Productos bannerType="on-sale" bannerTitle="Ofertas"/>
        </>
    )
}