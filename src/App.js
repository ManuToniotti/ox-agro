// src/App.js
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
        <Route path="/" element={<SignInPage />} /> {/* Assuming SignInPage is the main page */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/client/:clientId" element={<ClientDetailPage />} />
      </Routes>
    </Router>
  </ClientProvider>
);

export default App;