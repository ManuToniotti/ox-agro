// src/components/SignIn.js
import React from 'react';
import { Form, Input, Button } from 'antd';
import './SignIn.css';

const SignIn = ({ onSubmit }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="signin-form"
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Contraseña" />
      </Form.Item>

      <Form.Item>
        <a className="signin-form-forgot" href="">
          Olvidaste tu contraseña?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="signin-form-button">
          Iniciar sesión
        </Button>
      </Form.Item>

      <Form.Item>
        No tienes una cuenta? <a href="">Date de alta</a>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
