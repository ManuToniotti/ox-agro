// src/pages/DashboardPage.js
import React, { useState } from 'react';
import { Layout, Modal, Form, Input, Button, List, Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import ClientCard from '../components/Dashboard/ClientCard';
import './DashboardPage.css';

const { Content } = Layout;

const DashboardPage = () => {
  const [clients, setClients] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showAddClientModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleAddClient = (values) => {
    const newClient = { ...values, id: clients.length + 1 };
    setClients([...clients, newClient]);
    setIsModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Perfil
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Cerrar sesión
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="dashboard-layout">
      <div className="navbar">
        <div className="logo">
          <img src="ox-agro-logo.png" alt="Ox-agro" />
        </div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </Dropdown>
      </div>
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <div className="top-bar">
          <Input.Search placeholder="Buscar cliente" style={{ marginBottom: 0, maxWidth: 400 }} />
          <Button type="primary" onClick={showAddClientModal} style={{ marginRight: 16 }}>
            Añadir nuevo cliente
          </Button>
        </div>
        <div className="client-list">
          {clients.map(client => (
            <Link to={`/client/${client.id}`} key={client.id}>
              <ClientCard client={client} />
            </Link>
          ))}
        </div>
      </Content>

      <Modal
        title="Añadir nuevo cliente"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={handleAddClient}>
          <Form.Item
            name="name"
            label="Nombre del Cliente"
            rules={[{ required: true, message: 'Por favor ingresa el nombre del cliente' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="location"
            label="Ubicación"
            rules={[{ required: true, message: 'Por favor ingresa la ubicación del cliente' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="size"
            label="Tamaño del Campo (ha)"
            rules={[{ required: true, message: 'Por favor ingresa el tamaño del campo' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="cropType"
            label="Tipo de Cultivo"
            rules={[{ required: true, message: 'Por favor ingresa el tipo de cultivo' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="seedingDate"
            label="Fecha de Siembra"
            rules={[{ required: true, message: 'Por favor ingresa la fecha de siembra' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Añadir Cliente
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </Layout>
  );
};

export default DashboardPage;