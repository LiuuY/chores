import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/i18n">i18n</Link>
        <Link to="/about">About</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
