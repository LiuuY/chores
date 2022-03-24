import React from "react";
import { Link, Outlet } from "react-router-dom";

import "./App.css";
import logo from "./logo.svg";

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
