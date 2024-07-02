import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import App from './App';
import { ClientProvider } from './contexts/ClientContext';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
        },
      }}
    >
      <ClientProvider>
        <App />
      </ClientProvider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);