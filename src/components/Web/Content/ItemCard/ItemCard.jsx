import React from 'react'
import { Link } from 'react-router-dom'
import { faStar, faShoppingBag, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as faRegularStar, faHeart } from '@fortawesome/free-regular-svg-icons'
import IconButton from '../../../../Utils/IconButton'

import './ItemCard.scss'

const ItemCard = (props) => {
  return (
    <div className="item-card">
      <div className="card-container">
        <div className="product-image">
          <Link to="#">
            <div className="labels">
              <div className="top-rated label">
                NUEVO
              </div>
              <div className="image-effect">
                <img src={props.srcImg} alt={props.altImg} className="post-image" height="300" width="300"/>
                <div className="hover-content" height="300" width="300"/>
              </div>
            </div>
          </Link>
        </div>
        <div className="product-content">
          <span className="category-list"><Link to="#">Cerdito</Link>, <Link to="#">Rosada</Link>, <Link to="#">Cilindrica</Link></span>
          <Link to="#">
            <h3 className="product-title">Macetica de Cerdito</h3>
          </Link>
          <div className="rating-wrap">
            <IconButton icon={faStar} size="mg"/>
            <IconButton icon={faStar} size="mg"/>
            <IconButton icon={faStar} size="mg"/>
            <IconButton icon={faStar} size="mg"/>
            <IconButton icon={faRegularStar} size="mg"/>
          </div>
          <span className="price"><span className="currency-symbol">COP$</span><span className="amount">20k</span><small> IVA Incluido</small></span>
          <div className="add-links-wrap">
            <div className="add-links clear-fix">
              <a href="#" className="add-to-cart-button">
                <IconButton icon={faShoppingBag} size="lg"/>
                Añadir al carrito
              </a>
              <div className="add-to-wishlist">
                <a href="#" className="add-to-wishlist-button"><IconButton icon={faHeart} size="lg"/></a>
              </div>
              <div className="quick-view">
                <IconButton icon={faExternalLinkAlt} size="lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
