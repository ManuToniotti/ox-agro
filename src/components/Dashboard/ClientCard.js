// src/components/Dashboard/ClientCard.js
import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';

const ClientCard = ({ client }) => {
  return (
    <Link to={`/client/${client.id}`}>
      <Card className="client-card">
        <Card.Meta
          avatar={<Avatar style={{ backgroundColor: '#87d068' }}>{client.name[0]}</Avatar>}
          title={client.name}
          description={
            <div>
              <div><strong>Ubicación:</strong> {client.location}</div>
              <div><strong>Tamaño del Campo:</strong> {client.size} ha</div>
              <div><strong>Tipo de Cultivo:</strong> {client.cropType}</div>
              <div><strong>Fecha de Siembra:</strong> {client.seedingDate}</div>
            </div>
          }
        />
      </Card>
    </Link>
  );
};

export default ClientCard;