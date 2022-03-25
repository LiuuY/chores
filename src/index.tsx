import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "./App";
import "./antd-global-variables.css";
import { initHttpInterceptors } from "./http";
import "./i18n/config";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { routers } from "./routers";

initHttpInterceptors();

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider prefixCls="ops">
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />}>
                {routers.map(({ path, component: OriginComponent }) => (
                  <Route key={path} path={path} element={OriginComponent} />
                ))}
              </Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
