import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConfigProvider } from "antd";

import "./antd-global-variables.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { About } from "@features/About";
import { Home } from "@features/Home";

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider prefixCls="ops">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
