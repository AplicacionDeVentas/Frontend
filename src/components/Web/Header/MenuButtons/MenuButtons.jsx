import React, {useState} from "react";
import IconButton from '../../../../Utils/IconButton';
import { faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Menu} from "antd";
import CardCartshopping from "../CardCartshopping/CardCartshopping"

import "./MenuButtons.scss";

export default function MenuButtons(props) {
    const {  } = props;
    const [numberBag, setNumberBag] = useState(0);
    const [bagHidden, setBagHidden] = useState(false);
    const [userData, setUserData] = useState(false);
    
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
                <Menu.Item key="3"><Link to={"/admin"}>Admin</Link></Menu.Item>                               
            </Menu>
            <Menu className="navbar__icons" mode="horizontal">
                <Menu.Item key="4" className="user-setting" icon={<IconButton icon={faUser} />}>
                    <Link to={userData ? "/user" : "/login"}></Link>
                </Menu.Item>
                <Menu.Item key="5" className="bag" icon={<IconButton icon={faShoppingBag} />} onClick={() => setBagHidden(!bagHidden)} onMouseEnter={() => setBagHidden(true)}>
                    <span className="number">{numberBag}</span>                          
                </Menu.Item>                
            </Menu>
            {bagHidden ? <CardCartshopping setBagHidden={setBagHidden} /> : null}
        </>
    )
}
