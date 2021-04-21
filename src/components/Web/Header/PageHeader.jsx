import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import IconButton from '../../../Utils/IconButton'

import "./PageHeader.scss";

const { Header } = Layout

const PageHeader = () => {
  return (
    <Header className="navbar">
      <Row>
        <Col span={3}></Col>
        <Col span={18} className="navbar__container">
          <div className="navbar__container__logo">
            Miss Maceticas
          </div>
          <div className="navbar__container__menu">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item key="1">Inicio</Menu.Item>
              <Menu.Item key="2">Categorias</Menu.Item>
              <Menu.Item key="3">PQRS</Menu.Item>
            </Menu>
            <div className="navbar__container__menu__icons">
              <IconButton icon={faUser} size="lg"/>
              <IconButton icon={faShoppingBag} size="lg"/>
            </div>
          </div>
        </Col>
        <Col span={3}></Col>
      </Row>
    </Header>
  )
}

export default PageHeader;
