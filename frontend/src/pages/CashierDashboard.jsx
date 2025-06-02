import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function CashierDashboard() {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <h1>Dashboard Kasir</h1>
        <p>Hanya bisa akses transaksi POS</p>
        {/* Komponen POS bisa ditambahkan di sini */}
        <ClockInOut /> {/* Opsional */}
      </div>
      <Footer />
    </div>
  );
}

export default CashierDashboard;
