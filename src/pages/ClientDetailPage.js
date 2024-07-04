import React, { useState, useEffect, useContext } from 'react';
import { Layout, Card, List, Modal, Button, Avatar, Dropdown, Menu } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { ClientContext } from '../contexts/ClientContext';
import './ClientDetailPage.css';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Line } from '@ant-design/charts';

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

  const data = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 35 },
    { month: 'Mar', value: 40 },
    { month: 'Apr', value: 45 },
    { month: 'May', value: 50 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 60 },
    { month: 'Aug', value: 65 },
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 75 },
    { month: 'Nov', value: 80 },
    { month: 'Dec', value: 85 },
  ];

  const config = {
    data,
    xField: 'month',
    yField: 'value',
    smooth: true,
  };

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
        <Button type="default" onClick={() => navigate(-1)} style={{ marginBottom: '16px' }} icon={<ArrowLeftOutlined />}>
          Volver
        </Button>
        <div className="client-widgets">
          <Card title="Detalles del Cliente" className="client-detail-card">
            <p><strong>Nombre:</strong> {client.name}</p>
            <p><strong>Ubicación:</strong> {client.location}</p>
            <p><strong>Tamaño del Campo:</strong> {client.size} ha</p>
            <p><strong>Tipo de Cultivo:</strong> {client.cropType}</p>
            <p><strong>Fecha de Siembra:</strong> {client.seedingDate}</p>
          </Card>
          <div className="lower-widgets">
            <Card title="Predicciones Futuras" className="client-predictions-card">
              <Line {...config} />
            </Card>
            <Card title="Alertas del Campo" className="client-alerts-card">
              <Button type="primary" onClick={showAlertModal} style={{ marginBottom: '16px' }}>
                Ver Alertas
              </Button>
              <List
                dataSource={client.alerts || []}
                renderItem={(alert) => (
                  <List.Item>
                    <p>{alert.message}</p>
                  </List.Item>
                )}
              />
            </Card>
          </div>
        </div>
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