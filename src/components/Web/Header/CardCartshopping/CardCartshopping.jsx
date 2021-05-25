import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import {InputNumber} from "antd"
import InputButton from "../../../../Utils/InputButton/InputButton"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons"
import { db } from '../../../../config/FirebaseConfig'

import "./CardCartshopping.scss"

export default function CardCartshopping(props){
    const { setBagHidden, maceticasPaths } = props

    const [products, setProducts] = useState([]);
    const [productObjs, setProductObjs] = useState([]);
    const [joinedProducts, setJoinedProducts] = useState([]);

    useEffect( async() => {
        const productsArray = [];
        maceticasPaths.forEach( item => {
            if (productsArray.length === 0) {
                productsArray.push({quantity: 1, path: item});
            }
            else {
                for (let i=0; i<productsArray.length; i++) {
                    let obj = productsArray[i];
                    if (item === obj.path) {
                        obj.quantity = obj.quantity + 1;
                        break;
                    }
                    else if (i === productsArray.length - 1) {
                        productsArray.push({quantity:1, path: item});
                        break;
                    }
                }
            }
        });

        const uniquePaths = [...new Set(maceticasPaths)];
        console.log(uniquePaths);
        const docRef1 = db.doc(uniquePaths[0]);
        const docRef2 = db.doc(uniquePaths[1]);
        const docRef3 = db.doc(uniquePaths[2]);
        const resp1 = await docRef1.get();
        const resp2 = await docRef2.get();
        const resp3 = await docRef3.get();
        const data1 = resp1.data();
        const data2 = resp2.data();
        const data3 = resp3.data();
        const maceticaObjects = [{...data1}, {...data2}, {...data3}];
        console.log(maceticaObjects);


        const auxArray = [];
        productsArray.forEach( (item, index) => {
            console.log(maceticaObjects.length);
            auxArray.push({...item, ...maceticaObjects[index]});
        });
        console.log(auxArray);
        console.log(maceticaObjects);
        console.log(productsArray);
        setProducts(productsArray);
        setJoinedProducts(auxArray)
    }, []);

    const getProductsArray = () => {
        const productsArray = [];
        maceticasPaths.forEach( item => {
            if (productsArray.length === 0) {
                productsArray.push({quantity: 1, path: item});
            }
            else {
                for (let i=0; i<productsArray.length; i++) {
                    let obj = productsArray[i];
                    if (item === obj.path) {
                        obj.quantity = obj.quantity + 1;
                        break;
                    }
                    else if (i === productsArray.length - 1) {
                        productsArray.push({quantity:1, path: item});
                        break;
                    }
                }
            }
        });
        setProducts(productsArray);
        console.log(productsArray);
    }

    const getProducts = async() => {
        const maceticaObjects = []
        const uniquePaths = [...new Set(maceticasPaths)];
        uniquePaths.forEach( item => {
            console.log(item);
            const objectRef = db.doc(item).get().then( snapShot => {
                const data = snapShot.data();
                maceticaObjects.push({id: snapShot.id, ...data});
            })
            .catch( err => {
                console.log(err);
            });
        });
        console.log(products);
        setProductObjs(maceticaObjects);
    }

    const joinInfo = (objA, objB) => {
        if (products.length !== 0 && productObjs.length !== 0) {
            const auxArray = [];
            console.log(products);
            console.log(productObjs);
            products.forEach( (item, index) => {
                auxArray.push({...item, ...productObjs[index]});
            });
            console.log(auxArray);
            setJoinedProducts(auxArray);
        }
    }

    const calculateSubtotal = () => {
        let subtotal = 0;
        joinedProducts.forEach( item => {
            subtotal += (item.price * item.quantity);
        });
        return subtotal;
    }

    const calculateTotalProducts = () => {
        let totalProducts = 0;
        joinedProducts.forEach( item => {
            totalProducts += item.quantity;
        });
        return totalProducts;
    }

    return (
        <div className="cardcartshopping" onMouseLeave={() => setBagHidden(false)}>
            <div className="cardcartshopping__header">
                <span>{ calculateTotalProducts() === 1 ? (calculateTotalProducts() + ' Producto') : (calculateTotalProducts() + ' Productos')}</span>
                <Link to={"/bag"}>Ver carrito</Link>
            </div>
            {
                joinedProducts.map( (item, index) => (
                    <ProductBag
                        key={index}
                        productName={item.name}
                        productAmount={item.quantity}
                        productImg={item.image_url}
                        productPrice={item.price}
                    />
                ))
            }
            <div className="cardcartshopping__price">
                <div>
                    <span>Subtotal:</span>
                    <span>COP${calculateSubtotal()}</span>
                </div>
                <div>
                    <span>Envio:</span>
                    <span>COP$5.750</span>
                </div>
                <div>
                    <span>Total:</span>
                    <span>COP${(calculateSubtotal() - 5750)}</span>
                </div>
            </div>
            <InputButton value="Realizar pago" />
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