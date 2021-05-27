import React, { useState, useEffect } from "react";
import IconButton from '../../../../Utils/IconButton';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Menu} from "antd";
import CardCartshopping from "../CardCartshopping/CardCartshopping"
import {useAuth} from "../../../../Providers/AuthProviders"
import { db } from "../../../../config/FirebaseConfig"

import "./MenuButtons.scss";

export default function MenuButtons(props) {
    const {  } = props;
    const [numberBag, setNumberBag] = useState(0);
    const [bagHidden, setBagHidden] = useState(false);
    const [maceticasPaths, setMaceticasPaths] = useState([]);
    const {userData} = useAuth();

    useEffect( () => {
        // getCartProducts();
    }, [])

    const getCartProducts = async() => {
        if (!!userData) {
            const queryUser = await db.collection('user').where('email', '==', userData.email).get();
            const userQueryDoc = queryUser.docs[0];
            const userDoc = await db.collection('user').doc(userQueryDoc.id);
            const observer = userDoc.onSnapshot( docSnapshot => {
                if (docSnapshot){
                    const data = docSnapshot.data();
                    setNumberBag(data.cart.length);
                    setMaceticasPaths(data.cart);
                    console.log('a');
                }
            }, err => {
                console.log(`Encountered error: ${err}`);
            });
        }
    }

    var userAdmin = false
    if(userData){
        if(userData.isAdmin){
            userAdmin = true
        }else{
            userAdmin = false
        }
    }

    return (
        <>
            <Menu className="navbar__buttons" mode="horizontal">
                <Menu.Item key="1">Inicio</Menu.Item>
                <Menu.SubMenu key="sub1" title="Categoria">
                    <Menu.Item key="sub1.1">option1</Menu.Item>
                    <Menu.Item key="sub1.2">option2</Menu.Item>
                    <Menu.Item key="sub1.3">option3</Menu.Item>
                    <Menu.Item key="sub1.4">option4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="2"><Link to={"/pqrs"}>PQRS</Link></Menu.Item>
                {
                    userAdmin ?
                    <Menu.Item key="3"><Link to={"/admin"}>Admin</Link></Menu.Item>
                    :
                    null
                }                       
            </Menu>
            <Menu className="navbar__icons" mode="horizontal">
                <Menu.Item key="4" className="user-setting" icon={<IconButton icon={faUser} />}>
                    <Link to={userData ? "/user" : "/login"}></Link>
                </Menu.Item>
                <Menu.Item key="5" className="bag" icon={<IconButton icon={faShoppingBag} />} onClick={() => setBagHidden(!bagHidden)} onMouseEnter={() => setBagHidden(true)}>
                    <span className="number">{numberBag}</span>                          
                </Menu.Item>                
            </Menu>
            {bagHidden ? <CardCartshopping setBagHidden={setBagHidden} maceticasPaths={maceticasPaths} /> : null}
        </>
    )
}
