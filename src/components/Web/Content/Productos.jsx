import React, { useState, useEffect } from "react";
import ItemCard from './ItemCard/ItemCard'
import { db } from '../../../config/FirebaseConfig'

import "./Productos.scss";


const Productos = (props) => {

    const [maceticas, setMaceticas] = useState([])

    useEffect( () => {
        GetMaceticas()
    }, [])

    const GetMaceticas = async() => {
        const { docs } = await db.collection('maceticas').get()
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
                                key={item.id}
                                maceticaImg={item.image_url}
                                maceticaAltImg={item.name}
                                maceticaName={item.name}
                                maceticaPrice={item.price/1000}
                                maceticaCategories={item.categories}
                                maceticaRating={item.rating}
                                maceticaIsNew={item.isnew}
                                maceticaOffer={item.offer}
                            />)
                        )
                      ):null
                  }
              </div>
            </div>
        </div>
    )
}

export default Productos

