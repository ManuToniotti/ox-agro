import React, { useState, useEffect, useContext } from 'react';
import { Layout, Card, List, Modal, Button, Avatar, Dropdown, Menu } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { ClientContext } from '../contexts/ClientContext';
import './ClientDetailPage.css';

const { Content } = Layout;

const ClientDetailPage = () => {
  const { clients } = useContext(ClientContext);
  const { clientId } = useParams();
  const navigate = useNavigate();
  const [client, setClient] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const clientData = clients.find((c) => c.id === parseInt(clientId, 10));
    setClient(clientData || {});
  }, [clientId, clients]);

  const showAlertModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="#" onClick={() => console.log('Perfil')}>Perfil</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#" onClick={() => console.log('Cerrar sesión')}>Cerrar sesión</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="client-detail-layout">
      <div className="navbar">
        <div className="logo">
          <img src="/ox-agro-logo.png" alt="Ox-agro" />
        </div>
        <Dropdown overlay={menu} placement="bottomRight">
          <Avatar style={{ backgroundColor: '#87d068' }} icon="user" />
        </Dropdown>
      </div>
      <Content style={{ padding: '24px', minHeight: 280 }}>
        <Button type="primary" onClick={() => navigate('/')} style={{ marginBottom: '16px' }}>
          Volver al Dashboard
        </Button>
        <Card title={`Detalles del Cliente: ${client.name}`} className="client-detail-card">
          <p><strong>Ubicación:</strong> {client.location}</p>
          <p><strong>Tamaño del Campo:</strong> {client.size} ha</p>
          <p><strong>Tipo de Cultivo:</strong> {client.cropType}</p>
          <p><strong>Fecha de Siembra:</strong> {client.seedingDate}</p>
        </Card>
        <Button type="primary" onClick={showAlertModal} style={{ margin: '16px 0' }}>
          Ver Alertas
        </Button>
        <List
          header={<div>Reportes Semanales</div>}
          bordered
          dataSource={client.reports || []}
          renderItem={(report) => (
            <List.Item>
              <a href={report.url} target="_blank" rel="noopener noreferrer">
                {report.date}
              </a>
            </List.Item>
          )}
        />
      </Content>

      <Modal
        title="Alertas del Campo"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <List
          dataSource={client.alerts || []}
          renderItem={(alert) => (
            <List.Item>
              <p>{alert.message}</p>
            </List.Item>
          )}
        />
      </Modal>
    </Layout>
  );
};

export default ClientDetailPage;