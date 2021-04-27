import React from 'react';
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
              <Link to={"/"}>Miss Maceticas</Link>
            </Menu.Item>

            <div className="navbar__container__vacio"></div>
            
            <Menu.Item key="1" className="navbar__container__item">Inicio</Menu.Item>
            <Menu.Item key="2" className="navbar__container__item">Categorias</Menu.Item>
            <Menu.Item key="3" className="navbar__container__item">PQRS</Menu.Item>

            <div className="navbar__container__icons">
              <IconButton icon={faUser} size="lg" />
              <IconButton icon={faShoppingBag} size="lg" />
            </div>

          </Menu>

        </Col>
        <Col span={3} />
      </Row>

      <div style={{height: "64px"}}></div>
      
    </Header>
        

  )
}

export default PageHeader;
