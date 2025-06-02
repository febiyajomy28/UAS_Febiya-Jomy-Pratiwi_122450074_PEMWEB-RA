import React from "react";
import MenuChart from "../components/charts/MenuChart";
import CustomerChart from "../components/charts/CustomerChart";
import MenuList from "../components/MenuList";
import CustomerList from "../components/CustomerList";
import "../style/Dashboard.css";

function Dashboard({ menus = [], customers = [], setMenus, setCustomers }) {
  // Hitung statistik
  const totalMenuItems = menus.length;
  const availableItems = menus.filter((menu) => menu.available).length;
  const totalCustomers = customers.length;
  const premiumCustomers = customers.filter((c) => c.points >= 100).length;

  // Urutkan pelanggan berdasarkan points (tertinggi)
  const sortedCustomers = [...customers].sort((a, b) => b.points - a.points);

  const handleDeleteMenu = (id) => {
    setMenus(menus.filter((menu) => menu.id !== id));
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  return (
    <div className="dashboard-page">
      <h1>Dashboard Analitik</h1>

      {/* Statistik */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Menu</h3>
          <p>{totalMenuItems}</p>
        </div>
        <div className="stat-card">
          <h3>Menu Tersedia</h3>
          <p>{availableItems}</p>
        </div>
        <div className="stat-card">
          <h3>Total Pelanggan</h3>
          <p>{totalCustomers}</p>
        </div>
        <div className="stat-card">
          <h3>Pelanggan Premium</h3>
          <p>{premiumCustomers}</p>
        </div>
      </div>

      {/* Visualisasi Data */}
      <div className="charts-container">
        <div className="chart-card">
          <h2>Distribusi Kategori Menu</h2>
          <div className="chart-wrapper">
            <MenuChart menus={menus} />
          </div>
        </div>
        <div className="chart-card">
          <h2>Distribusi Poin Pelanggan</h2>
          <div className="chart-wrapper">
            <CustomerChart customers={customers} />
          </div>
        </div>
      </div>

      {/* Daftar Menu dan Pelanggan */}
      <div className="data-lists">
        <div className="menu-list-section">
          <h2>Daftar Menu</h2>
          <MenuList
            menus={menus}
            onEdit={() => {}}
            onDelete={handleDeleteMenu}
            showActions={true}
          />
        </div>

        <div className="customer-list-section">
          <h2>Pelanggan dengan Poin Tertinggi</h2>
          <CustomerList
            customers={sortedCustomers.slice(0, 5)} // Ambil 5 teratas
            onEdit={() => {}}
            onDelete={handleDeleteCustomer}
            showActions={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
