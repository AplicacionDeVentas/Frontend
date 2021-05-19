import React from "react";
import ItemCard from './ItemCard/ItemCard'

import "./Productos.scss";

const products = [
    {
        _id: 1,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de colibri",
        price: 20
    },
    {
        _id: 2,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de cangrejo",
        price: 20
    },
    {
        _id: 3,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de lobo",
        price: 20
    },
    {
        _id: 4,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de luffy",
        price: 20
    },
    {
        _id: 5,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de goku",
        price: 20
    },
    {
        _id: 6,
        img: "https://static.vix.com/es/sites/default/files/styles/1x1/public/imj/hogartotal/m/macetas%20eleccion.jpg",
        name: "maceta con dibujo de react",
        price: 20
    }
]

const Productos = (props) => {
    return (
        <div className={"hero-main " + props.bannerType}>
            <div className="container">
                <h1>{props.bannerTitle}</h1>
              <div className="banner">
                <ItemCard srcImg={products[0].img} altImg="Macetica"/>
                <ItemCard srcImg={products[0].img} altImg="Macetica"/>
                <ItemCard srcImg={products[0].img} altImg="Macetica"/>
              </div>
            </div>
        </div>
    )
}

export default Productos

