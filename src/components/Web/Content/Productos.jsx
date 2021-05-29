import React from "react";
import ItemCard from './ItemCard/ItemCard'

import "./Productos.scss";


const Productos = (props) => {
    const {maceticas} = props

    return (
        <div className={"hero-main " + props.bannerType}>
            <div className="container">
              <h1 className="banner-title">{props.bannerTitle}</h1>
              <p className="banner-description">{props.bannerDescription}</p>
              <div className="banner">
                <div className="items">
                  {
                      maceticas && maceticas.length > 0 ?
                      (
                        maceticas.map((item, index) =>
                            (<ItemCard
                                key={index}
                                id={item.id}
                                maceticaImg={item.image_url}
                                maceticaAltImg={item.name}
                                maceticaName={item.name}
                                maceticaPrice={item.price/1000}
                                maceticaCategories={item.categories}
                                maceticaRating={item.rating}
                                maceticaIsNew={item.isNew}
                                maceticaOffer={item.offer}
                            />)
                        )
                      )
                      :
                      <>
                        <div>Sin productos en stock</div>
                      </>
                  }
                </div>
              </div>
            </div>
        </div>
    )
}

export default Productos

