import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Customer from "./pages/Customer";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [menus, setMenus] = useState([]);
  const [customers, setCustomers] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/menu"
              element={<Menu menus={menus} setMenus={setMenus} />}
            />
            <Route
              path="/customer"
              element={
                <Customer customers={customers} setCustomers={setCustomers} />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/dashboard"
              element={<Dashboard menus={menus} customers={customers} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
