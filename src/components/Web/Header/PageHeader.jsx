import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import { faSearch, faUser, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { Layout, Menu } from 'antd';
import IconButton from '../../../Utils/IconButton';
import MenuBars from "./MenuBars/MenuBars";
import MenuButtons from "./MenuButtons/MenuButtons";

import "./PageHeader.scss";


const PageHeader = () => {

  const [change, setChange] = useState(false);
  
  const menuResponsive = () => {
    setChange(!change);
  }

  
  
  return (

    <header className="header__home">      

          <nav className="navbar container">

            <div className="navbar__logo">
              <Link to={"/"}><span>Miss Maceticas</span></Link>
            </div>

            <div className="navbar__search">                         
              <input className="search" type="search" ></input>
              <IconButton icon={faSearch} size="lg"/>
            </div>
            
            <MenuButtons change={change} />

            <ul className={`navbar__buttons__icons ${change ? "navbar__buttons__responsive__icons" : ""}`}>
                <li>
                    <Link to={"/login"}><IconButton icon={faUser} size="lg" /></Link>
                </li>
                <li className="bag">
                    <IconButton icon={faShoppingBag} size="lg" />
                    <span className="number">0</span>
                </li>                
            </ul>

            <label>
              <MenuBars change={change} menuResponsive={menuResponsive} />
            </label>

            {change ? <Sider menuResponsive={menuResponsive} /> : null}        

          </nav>     

    </header>
        

  )
}

function Sider(props){
  const {menuResponsive} = props;

  return (
    <Layout.Sider width={window.screen.width < 576 ? "60%" : "50%"} >
      <Menu mode="inline" style={{height: "100%"}}>
        <Menu.Item key="1" onClick={menuResponsive}>Inicio</Menu.Item>
        <Menu.SubMenu key="sub1" title="Categoria">
          <Menu.Item key="sub1.1">option1</Menu.Item>
          <Menu.Item key="sub1.2">option2</Menu.Item>
          <Menu.Item key="sub1.3">option3</Menu.Item>
          <Menu.Item key="sub1.4">option4</Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="2" onClick={menuResponsive}>PQRS</Menu.Item>
      </Menu>
    </Layout.Sider>
  )
}

export default PageHeader;
