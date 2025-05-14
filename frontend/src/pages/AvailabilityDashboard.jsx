import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import OrderChart from "../components/Partners/OrderChart";
import PartnerCard from "../components/Partners/PartnerCard";
import TransactionTable from "../components/Partners/TransactionTable";
import PurchaseForm from "./PurchaseForm";
import "../style/AvailabilityDashboard.css";

function AvailabilityDashboard() {
  // Initial stock data
  const initialStockItems = [
    {
      id: 1,
      name: "Kopi Arabika",
      stock: 15,
      minStock: 10,
      supplier: "Supplier A",
      price: 120000,
    },
    {
      id: 2,
      name: "Susu Full Cream",
      stock: 8,
      minStock: 15,
      supplier: "Supplier B",
      price: 85000,
    },
    {
      id: 3,
      name: "Gula Pasir",
      stock: 25,
      minStock: 10,
      supplier: "Supplier C",
      price: 15000,
    },
    {
      id: 4,
      name: "Teh Celup",
      stock: 30,
      minStock: 20,
      supplier: "Supplier A",
      price: 25000,
    },
  ];

  const [stockItems, setStockItems] = useState(initialStockItems);
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);

  // Data supplier
  const topSuppliers = [
    {
      id: 1,
      name: "Supplier A",
      category: "Minuman",
      rating: 4.7,
      lastOrder: "2 hari lalu",
    },
    {
      id: 2,
      name: "Supplier B",
      category: "Produk Susu",
      rating: 4.5,
      lastOrder: "1 minggu lalu",
    },
  ];

  // Handle new purchase
  const handleNewPurchase = (newPurchase) => {
    // Update stock items
    const updatedItems = stockItems.map((item) => {
      if (item.name === newPurchase.itemName) {
        return {
          ...item,
          stock: item.stock + parseInt(newPurchase.quantity),
          price: newPurchase.price, // Update price if changed
        };
      }
      return item;
    });

    setStockItems(updatedItems);
    setShowPurchaseForm(false);
  };

  return (
    <div className="availability-dashboard">
      <Navbar />
      <div className="wrapper">
        <h1>Dashboard Ketersediaan Barang & Supplier</h1>

        {/* Purchase Button */}
        <div className="action-buttons">
          <button
            className="purchase-button"
            onClick={() => setShowPurchaseForm(!showPurchaseForm)}
          >
            {showPurchaseForm ? "Tutup Form" : "Buat Pembelian Baru"}
          </button>
        </div>

        {/* Purchase Form */}
        {showPurchaseForm && (
          <div className="dashboard-section">
            <h2>Form Pembelian Barang</h2>
            <PurchaseForm
              stockItems={stockItems}
              suppliers={topSuppliers}
              onSubmit={handleNewPurchase}
            />
          </div>
        )}

        {/* Bagian Ringkasan Stok */}
        <div className="dashboard-section">
          <h2>Ringkasan Stok Barang</h2>
          <div className="stock-summary">
            {stockItems.map((item) => (
              <div
                key={item.id}
                className={`stock-item ${
                  item.stock < item.minStock ? "low-stock" : ""
                }`}
              >
                <h3>{item.name}</h3>
                <p>Stok: {item.stock}</p>
                <p>Minimum: {item.minStock}</p>
                <p>Supplier: {item.supplier}</p>
                <p>Harga: Rp {item.price.toLocaleString("id-ID")}</p>
                {item.stock < item.minStock && (
                  <span className="warning">PERLU RESTOCK!</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Supplier */}
        <div className="dashboard-section">
          <h2>Supplier Teratas</h2>
          <div className="supplier-cards">
            {topSuppliers.map((supplier) => (
              <PartnerCard
                key={supplier.id}
                name={supplier.name}
                category={supplier.category}
                rating={supplier.rating}
                lastOrder={supplier.lastOrder}
              />
            ))}
          </div>
        </div>

        {/* Grafik Pemesanan */}
        <div className="dashboard-section">
          <h2>Trend Pemesanan</h2>
          <OrderChart />
        </div>

        {/* Riwayat Transaksi */}
        <div className="dashboard-section">
          <h2>Riwayat Transaksi Terakhir</h2>
          <TransactionTable />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AvailabilityDashboard;
