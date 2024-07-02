// src/components/Dashboard/ClientList.js
import React from 'react';
import { List, Avatar } from 'antd';
import ClientCard from './ClientCard';

const ClientList = ({ clients }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={clients}
      renderItem={client => (
        <List.Item>
          <ClientCard client={client} />
        </List.Item>
      )}
    />
  );
};

export default ClientList;
