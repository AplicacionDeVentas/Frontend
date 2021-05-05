import React from "react";
import IconButton from '../../../../Utils/IconButton';
import { faCaretDown, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import {Menu} from "antd";

import "./MenuButtons.scss";

export default function MenuButtons(props) {
    const { change } = props;

    return (
        <>
            <Menu className="container navbar__buttons" mode="horizontal" style={{height: "100%"}}>
                <Menu.Item key="1">Inicio</Menu.Item>
                <Menu.SubMenu key="sub1" title="Categoria">
                    <Menu.Item key="sub1.1">option1</Menu.Item>
                    <Menu.Item key="sub1.2">option2</Menu.Item>
                    <Menu.Item key="sub1.3">option3</Menu.Item>
                    <Menu.Item key="sub1.4">option4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key="2">PQRS</Menu.Item>
            </Menu>
            <ul className={"navbar__buttons__icons"}>
                <li>
                    <Link to={"/login"}><IconButton icon={faUser} /></Link>
                </li>
                <li className="bag">
                    <IconButton icon={faShoppingBag} />
                    <span className="number">0</span>
                </li>                
            </ul>
        </>
    )
}