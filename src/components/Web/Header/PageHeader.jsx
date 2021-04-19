import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';

const { Header } = Layout

const PageHeader = () => {
  return (
    <Header>
      <div className="logo">
        {/* Here goes the logo */}
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  )
}

export default PageHeader
