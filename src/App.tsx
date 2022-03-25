import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

const { Sider, Content } = Layout;

function App() {
  const location = useLocation();
  return (
    <Layout className="app">
      <Sider trigger={null}>
        <img src={logo} className="app-logo" alt="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/"]}
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="/state">
            <Link to="/state">Recoil</Link>
          </Menu.Item>
          <Menu.Item key="/i18n">
            <Link to="/i18n">i18n</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
