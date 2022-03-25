import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { pagePaths } from "@constants/paths";

import "./App.css";
import logo from "./logo.svg";
import { routers } from "./routers";

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
          defaultSelectedKeys={[pagePaths.default]}
          selectedKeys={[location.pathname]}
        >
          {routers.map(({ path, label }) => {
            return (
              <Menu.Item key={path}>
                <Link to={path}>
                  <em>{label}</em>
                </Link>
              </Menu.Item>
            );
          })}
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
