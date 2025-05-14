import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StockManagement from "../components/StockManagement";
import "../App.css";

function ManagerDashboard() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <h1>Dashboard Manager</h1>
        <p>Akses penuh ke laporan dan manajemen stok</p>
        <StockManagement /> {/* Komponen stok yang sudah ada */}
      </div>
      <Footer />
    </div>
  );
}

export default ManagerDashboard;
