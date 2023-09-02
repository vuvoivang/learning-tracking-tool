import React, { useEffect, useState } from 'react';

import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MobileOutlined,
  UserOutlined,
  WindowsOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Dropdown, Space, MenuProps, Avatar } from 'antd';
import { pathToRegexp } from 'path-to-regexp';
import { useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import './LayoutApp.less';

import { useAuth } from '~/src/adapters/appService/auth.service';
import { authSelector } from '~/src/adapters/redux/selectors/auth';
import { MAIN_ROUTES, mobileMenus, websiteMenus } from '~/src/constant/menu';
import useQuery from '~/src/hooks/useQuery';
import { arrayToTree, queryAncestors } from '~/src/utils/menu';
import { renderRoutes } from '~/src/utils/route';
import { capitalizeFirstLetter, formatNumber, getFirstLetterName } from '~/src/utils';
import { ROLE } from '~/src/constant/role';
import { AppType } from '~/src/constant';
import ProblemSolved from '~/src/ui/assets/icons/problemSolved.svg';

import CurrentBalance from '~/src/ui/assets/icons/currentBalance.svg';


import Rank from '~/src/ui/assets/icons/rank.svg';

import NextRank from '~/src/ui/assets/icons/nextRank.svg';

import UpMoney from '~/src/ui/assets/icons/upMoney.svg';



const { Header, Sider, Content } = Layout;

const filterRole = roles => menu => {
  return menu.role
    ? roles.some(role => {
      return menu.role.includes(role);
    })
    : true;
};

const generateMenus = (data, appType) => {
  return data.map(item => {
    if (item.children) {
      return (
        <Menu.SubMenu
          key={item.id}
          title={
            <>
              {!!item.icon && <item.icon />}
              <span>{item.name}</span>
            </>
          }
        >
          {generateMenus(item.children, appType)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={item.id}>
        <Link to={`${item.route}?app_type=${appType}` || '#'}>
          {!!item.icon && <item.icon />}
          <span>{item.name}</span>
        </Link>
      </Menu.Item>
    );
  });
};

function LayoutApp() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdmin') == "true";

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<any>();

  const query = useQuery();
  const { checkSession, logout } = useAuth();
  let queryAppType = query.get('app_type') || AppType.WEBSITE;

  const [appType, setAppType] = useState<any>(queryAppType);

  const menus = websiteMenus;

  const filteredMenus = menus.filter(filterRole(isAdmin ? [ROLE.Admin] : [ROLE.Guest]));

  // Generating tree-structured data for menu content.
  const menuTree = arrayToTree(filteredMenus, 'id', 'menuParentId');

  // Find a menu that matches the pathname.
  const currentMenu = menus.find(
    _ => _.route && pathToRegexp(_.route).exec(location.pathname)
  );

  // Find the key that should be selected according to the current menu.
  const selectedKeys = currentMenu
    ? queryAncestors(menus, currentMenu, 'menuParentId').map(_ => _.id)
    : [];

  useEffect(() => {
    checkSession()
      .then(data => setUserInfo(data))
      .catch(err => {
        navigate('/login', { replace: true });
      });
  }, []);

  const itemsAvatar: MenuProps['items'] = [
    {
      key: 'logout',
      label: <a onClick={() => logout()}>Log out</a>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout className="cms-layout-app">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={value => setCollapsed(value)}
        width={300}
        theme="light"
      >
        <div className="logo cursor-pointer" onClick={() => navigate('problems/list?app_type=website')}/>
        {/* <Menu mode="inline" theme="light" selectedKeys={selectedKeys}>
          {generateMenus(menuTree, appType)}
        </Menu> */}

        {userInfo && !collapsed && <div className="info-zone">
          <div className="row">
            <img width="20" height="20" src={ProblemSolved} />
            <span className="title">Bài đã giải: </span>
            <span>{userInfo?.problemsSolved}</span>
          </div>

          <div className="row">
            <img width="20" height="20" src={CurrentBalance} />
            <span className="title">Số tiền: </span>
            <span>{userInfo && formatNumber(userInfo?.currentBalance)} đ</span>
          </div>


          <div className="row">
            <img width="20" height="20" src={Rank} />
            <span className="title">Hạng: </span>
            <span>{userInfo?.rank}</span>
          </div>


          <div className="row">
            <img width="20" height="20" src={NextRank} />
            <span className="title">Hạng kế tiếp: </span>
            <span>{userInfo?.nextRank}</span>
          </div>

          <div className="row">
            <img width="20" height="20" src={UpMoney} />
            <span className="title">Số bài lên hạng: </span>
            <span>{userInfo?.nextRankProblems}</span>
          </div>
        </div>}
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background-header"
          style={{ padding: 0 }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="top-right-container">

            <div className="action-container cursor-pointer">
              <Dropdown
                menu={{
                  items: itemsAvatar,
                }}
              >
                <Space>
                  <Avatar
                    // icon={<UserOutlined />}
                    style={{
                      backgroundColor: `rgb(0,72,245)`,
                      verticalAlign: 'middle'
                    }} alt="avatar"
                    // size="small"
                  >{getFirstLetterName(userInfo?.name?.split(' ').pop())}</Avatar>
                  {userInfo && userInfo.name}
                </Space>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Content
          className="bg-white"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {renderRoutes(MAIN_ROUTES)}
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
