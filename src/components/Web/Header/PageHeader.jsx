import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Layout, Menu, Row, Col } from 'antd';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../Utils/IconButton'

import "./PageHeader.scss";

const { Header } = Layout

const PageHeader = () => {

  return (
    <Header className="header__home">      
      <Row>
        <Col span={3} />
        <Col span={18}>

          <Menu className="navbar__container" mode="horizontal">

            <Menu.Item className="navbar__container__logo">
              <Link to={"/"}><span>Miss Maceticas</span></Link>
            </Menu.Item>

            <div className="navbar__container__vacio"></div>
            
            <Menu.Item key="1" className="navbar__container__item">Inicio</Menu.Item>
            <Menu.Item key="2" className="navbar__container__item">Categorias</Menu.Item>
            <Menu.Item key="3"  disabled className="navbar__container__item">PQRS</Menu.Item>

            <Menu.Item key="icon1" className="navbar__container__icons" ><IconButton key="icon1" icon={faUser} size="lg" /></Menu.Item>
            <Menu.Item key="icon2" className="navbar__container__icons" ><IconButton key="icon2" icon={faShoppingBag} size="lg" /></Menu.Item>
            

          </Menu>

        </Col>
        <Col span={3} />
      </Row>

      

    </Header>
        

  )
}

export default PageHeader;
