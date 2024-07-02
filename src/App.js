import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ClientProvider } from './contexts/ClientContext';
import DashboardPage from './pages/DashboardPage';
import ClientDetailPage from './pages/ClientDetailPage';
import SignInPage from './pages/SignInPage';

const App = () => (
  <ClientProvider>
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/client/:clientId" element={<ClientDetailPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  </ClientProvider>
);

export default App;