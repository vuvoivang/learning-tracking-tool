import React, { useEffect } from 'react';

import { Button, Form, Layout, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useAuth } from '~/src/adapters/appService/auth.service';
import { authSelector } from '~/src/adapters/redux/selectors/auth';
import Logo from '~/src/ui/assets/images/logo.jpg';
function Login() {
  const { loginByAccount } = useAuth();
  const navigate = useNavigate();
  const { token, isAdmin } = useSelector(authSelector);
  const onFinish = (values: any) => {
    loginByAccount(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (token) {
      navigate('/admin/web-article/list');
    }
  }, []);

  return (
    <Layout className="cms-layout-app cms-layout-app-login">
      <img className="logo-login" src={Logo} />
      <div className="layout-form-login">
        <Form
          name="login-basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập tên người dùng',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className="submit-login-zone">
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
          </div>
        </Form>

      </div>
    </Layout>
  );
}

export default Login;
