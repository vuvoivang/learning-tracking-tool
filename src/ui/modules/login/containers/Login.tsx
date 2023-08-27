import React, {useEffect} from 'react';

import {Button, Form, Layout, message, Tabs, Input} from 'antd';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {useAuth} from '~/src/adapters/appService/auth.service';
import {authSelector} from '~/src/adapters/redux/selectors/auth';
import {metaFormLogin} from '~/src/ui/modules/login/containers/props';
import FormBuilder from '~/src/ui/shared/forms/FormBuilder';
import zaloLogo from '~/src/ui/assets/images/zalo-logo.svg';
function Login() {
  const {loginByAccount} = useAuth();
  const navigate = useNavigate();
  const {roles, name} = useSelector(authSelector);
  const onFinish = (values: any) => {
    loginByAccount(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (roles && name) {
      navigate('/admin/web-article/list');
    }
  }, []);

  return (
    <Layout className="cms-layout-app cms-layout-app-login">
      <img className="logo-login" src="https://stc-fin.zdn.vn/fiza-website/images/logo_v2.svg"/>
      <div className="layout-form-login">
        <Form
          name="basic"
          initialValues={{remember: true}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your Username!',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon"/>}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon"/>}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-button">
              Login
            </Button>
          </Form.Item>
        </Form>
        <div className="zalo-wrap-img">
          <span className="text-login-with">Login with:</span>
          <img
            className="icon"
            alt=""
            src={zaloLogo}
            onClick={() => message.info('Tính năng chưa phát triển')}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Login;
