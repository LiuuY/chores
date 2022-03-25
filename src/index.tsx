import { ConfigProvider } from "antd";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { About } from "@features/About";
import { Home } from "@features/Home";
import { Internationalization } from "@features/Internationalization";
import { Recoil } from "@features/Recoil";

import App from "./App";
import "./antd-global-variables.css";
import "./i18n/config";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <ConfigProvider prefixCls="ops">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="i18n" element={<Internationalization />} />
              <Route path="state" element={<Recoil />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
