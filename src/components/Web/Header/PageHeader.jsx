import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';

import "./PageHeader.scss";

const { Header } = Layout

const PageHeader = () => {
  return (
    <Header className="menutop">
      <Row>
        <Col span={3}></Col>
        <Col span={18} className="container">
          <div className="logo">
            {/* Here goes the logo */}
            Logo
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">Inicio</Menu.Item>
            <Menu.Item key="2">Categorias</Menu.Item>
            <Menu.Item key="3">PQRS</Menu.Item>
          </Menu>
        </Col>
        <Col span={3}></Col>
      </Row>
    </Header>
  )
}

export default PageHeader;
