// src/components/Dashboard/Navbar.js
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

const Navbar = ({ onAddClient }) => {
  const navigate = useNavigate();

  return (
    <Header className="navbar">
      <div className="logo" onClick={() => navigate('/dashboard')}>
        <img src="/path/to/ox-agro-logo.png" alt="Ox-agro" style={{ height: '40px' }} />
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" onClick={() => navigate('/dashboard')}>Dashboard</Menu.Item>
      </Menu>
      <Button type="primary" icon={<PlusOutlined />} onClick={onAddClient}>
        Añadir nuevo cliente
      </Button>
    </Header>
  );
};

export default Navbar;
