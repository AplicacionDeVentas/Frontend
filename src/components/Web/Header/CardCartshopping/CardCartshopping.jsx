import React from "react"
import {Link} from "react-router-dom";
import {InputNumber} from "antd"
import InputButton from "../../../../Utils/InputButton/InputButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {useAuth} from "../../../../Providers/AuthProviders"

import "./CardCartshopping.scss"

export default function CardCartshopping(props){

    const { setBagHidden, bagProducts } = props
    const {userData} = useAuth()  
    
    
    return (
        <div className="cardcartshopping" onMouseLeave={() => setBagHidden(false)}>
            {
                userData && userData.cart.length > 0 ? 
                <>
                    <div className="cardcartshopping__header">
                        <span>{userData.cart ?  `${userData.cart.length} Productos`: `0 Productos`}</span>
                        <Link to={"/bag"}>Ver carrito</Link>
                    </div>
                    {
                        bagProducts ? bagProducts.map( (item, index) => (
                            console.log(item),
                            <ProductBag
                                key={index}
                                productName={item.name}
                                productAmount={item.quantity}
                                productImg={item.image_url}
                                productPrice={item.price}
                            />
                        )):
                        <div>No data</div>
                    }
                    <div className="cardcartshopping__price">
                        <div>
                            <span>Subtotal:</span>
                            <span>COP${400}</span>
                        </div>
                        <div>
                            <span>Envio:</span>
                            <span>COP$5.750</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span>COP${400}</span>
                        </div>
                    </div>
                    <InputButton value="Realizar pago" />
                </>
                :
                <>
                    <div className="cardcartshopping__header">
                        <span>0 Productos</span>
                        <Link to={"/bag"}>Ver carrito</Link>
                    </div>
                    <p className="noProduct">No tienes ningun producto</p>
                </>
            }
        </div>
    )
}

function ProductBag(props) {
    return(
        <div className="cardcartshopping__product">
            <div className="cardcartshopping__product__delete">
                <img src={props.productImg}></img>
                <span>{props.productName}</span>
                <div>
                    <FontAwesomeIcon icon={faTimes} />
                    <p>Borrar producto</p>
                </div>
            </div>
            <InputNumber min={1} defaultValue={props.productAmount}></InputNumber>
            <span>{props.productPrice}</span>
        </div>
    )
}