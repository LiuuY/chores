import React from "react";
import { Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import { Home } from "./features/Home";
import { About } from "./features/About";

import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
