import React from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
        <Outlet />
      </header>
    </div>
  );
}

export default App;
