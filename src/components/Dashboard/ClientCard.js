import React from 'react';
import { Card, Avatar } from 'antd';

const ClientCard = ({ client }) => (
  <Card className="client-card">
    <Card.Meta
      avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{client.name[0]}</Avatar>}
      title={client.name}
      description={(
        <>
          <div><strong>Ubicación:</strong> {client.location}</div>
          <div><strong>Tamaño del Campo:</strong> {client.size} ha</div>
          <div><strong>Tipo de Cultivo:</strong> {client.cropType}</div>
          <div><strong>Fecha de Siembra:</strong> {client.seedingDate}</div>
        </>
      )}
    />
  </Card>
);

export default ClientCard;