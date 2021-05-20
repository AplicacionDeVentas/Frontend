import React, { useState, useEffect } from "react";
import ItemCard from './ItemCard/ItemCard'
import { store } from '../../../config/FirebaseConfig'

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

    const [maceticas, setMaceticas] = useState([])

    useEffect( () => {
        GetMaceticas()
    }, [])

    const GetMaceticas = async() => {
        const { docs } = await store.collection('maceticas').get()
        const maceticasArray = docs.map(item => ({id: item.id, ...item.data()}))
        setMaceticas(maceticasArray)
    }

    return (
        <div className={"hero-main " + props.bannerType}>
            <div className="container">
              <h1 className="banner-title">{props.bannerTitle}</h1>
              <p className="banner-description">{props.bannerDescription}</p>
              <div className="banner">
                  {
                      maceticas.length !== 0 ?
                      (
                        maceticas.map(item => 
                            (<ItemCard
                                maceticaImg={item.image_url}
                                maceticaAltImg={item.name}
                                maceticaName={item.name}
                                maceticaPrice={item.price/1000}
                                maceticaCategories={item.categories}
                                maceticaRating={item.rating}
                            />)
                        )
                      ):null
                  }
                <ItemCard maceticaImg={products[0].img} maceticaAltImg="Macetica"/>
                <ItemCard maceticaImg={products[0].img} maceticaAltImg="Macetica"/>
                <ItemCard maceticaImg={products[0].img} maceticaAltImg="Macetica"/>
                <ItemCard maceticaImg={products[0].img} maceticaAltImg="Macetica"/>
                <ItemCard maceticaImg={products[0].img} maceticaAltImg="Macetica"/>
              </div>
            </div>
        </div>
    )
}

export default Productos

