// src/pages/SignInPage.js
import React from 'react';
import { Layout } from 'antd';
import SignIn from '../components/SignIn';
import './SignInPage.css';

const { Content } = Layout;

const SignInPage = () => {
  const handleSignIn = (values) => {
    console.log('Sign In:', values);
    // Aquí puedes añadir la lógica para manejar el inicio de sesión.
  };

  return (
    <Layout className="signin-layout">
      <Content className="signin-content">
        <div className="signin-container">
          <div className="signin-logo">
            <img src="ox-agro-logo.png" alt="Ox-agro" />
          </div>
          <SignIn onSubmit={handleSignIn} />
        </div>
      </Content>
    </Layout>
  );
};

export default SignInPage;
