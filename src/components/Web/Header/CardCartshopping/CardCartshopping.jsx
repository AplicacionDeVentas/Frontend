import React from "react"
import {Link} from "react-router-dom";
import {InputNumber} from "antd"
import InputButton from "../../../../Utils/InputButton/InputButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import {useAuth} from "../../../../Providers/AuthProviders"
import {db} from "../../../../config/FirebaseConfig"

import "./CardCartshopping.scss"

export default function CardCartshopping(props){

    const { setBagHidden, bagProducts, setBagProducts } = props
    const {userData} = useAuth()
    
    const subTotal = () => {
        var subTotalAux = 0
        if(bagProducts){
            bagProducts.map(item => {
                subTotalAux += item.price * item.quantity
            })
            return subTotalAux
        }
    }
    const envio = () => {
        var envio = 0
        if(bagProducts){
            // funcion para calcular envio aquí
            return envio = 10000
        }
    }
    const total = () => {
        var total = 0
        if(bagProducts){
            total = subTotal() + envio()
            return total
        }
    }
    
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
                            <ProductBag
                                key={index}
                                productName={item.name}
                                productAmount={item.quantity}
                                productImg={item.image_url}
                                productPrice={item.price}
                                setBagProducts={setBagProducts}
                                productUid={item.productUid}
                                userData={userData}
                            />
                        )):
                        <div>No data</div>
                    }
                    <div className="cardcartshopping__price">
                        <div>
                            <span>Subtotal:</span>
                            <span>COP ${subTotal()}</span>
                        </div>
                        <div>
                            <span>Envio:</span>
                            <span>{envio() == 0 ? "Sin definir" : `COP $${envio()}`}</span>
                        </div>
                        <div>
                            <span>Total:</span>
                            <span>COP ${total()}</span>
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
    const {userData}= props

    const changeAmount = async (amount, data) => {
        userData.cart.forEach(item => {
            if(item.productPath.id == data.productUid){
                return item.amount = amount
            }
        })
        await db.collection('user').doc(userData.uid).update(userData).catch(err => {
            console.log("err"+err)
        })
    }
    const deleteProduct = async data => {
        userData.cart.forEach((item, index) => {
            if(item.productPath.id == data.productUid){
                userData.cart.splice(index, 1)
            }
        })
        await db.collection('user').doc(userData.uid).update(userData).catch(err => {
            console.log("err"+err)
        })
    }
    return(
        <div className="cardcartshopping__product">
            <div className="cardcartshopping__product__delete">
                <img src={props.productImg}></img>
                <span>{props.productName}</span>
                <div onClick={() => deleteProduct(props)}>
                    <FontAwesomeIcon icon={faTimes} />
                    <p>Borrar producto</p>
                </div>
            </div>
            <div className="cardcartshopping__product__price">
                <InputNumber min={1} defaultValue={props.productAmount} onChange={e => changeAmount(e, props)}></InputNumber>
                <span>{"$"+props.productPrice}</span>
            </div>
        </div>
    )
}