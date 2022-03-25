import { Layout, Menu } from "antd";
import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import { pagePaths } from "@constants/paths";

import { routers } from "../../routers";
import styles from "./index.module.css";
import logo from "./logo.svg";

const { Sider, Content } = Layout;

function PageLayout() {
  const location = useLocation();

  return (
    <Layout className={styles.app}>
      <Sider trigger={null}>
        <img src={logo} className={styles.appLogo} alt="logo" />
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
      <Layout>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export { PageLayout };
