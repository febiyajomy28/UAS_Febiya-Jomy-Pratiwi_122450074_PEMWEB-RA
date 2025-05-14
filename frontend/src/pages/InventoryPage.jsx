import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StockManagement from "../components/StockManagement";
import StockAvailability from "../components/StockAvailability";
import "../style/Inventory.css";

function InventoryPage() {
  // State untuk data stok yang bisa di-share antara komponen
  const [stockItems, setStockItems] = useState([
    {
      id: 1,
      name: "Kopi Arabika",
      category: "Minuman",
      stock: 15,
      minStock: 10,
      supplier: "Supplier A",
      price: 120000,
      lastRestock: "2025-05-10",
    },
    {
      id: 2,
      name: "Susu Full Cream",
      category: "Produk Susu",
      stock: 8,
      minStock: 15,
      supplier: "Supplier B",
      price: 85000,
      lastRestock: "2025-05-12",
    },
    {
      id: 3,
      name: "Gula Pasir",
      category: "Bahan Pokok",
      stock: 25,
      minStock: 10,
      supplier: "Supplier C",
      price: 15000,
      lastRestock: "2025-05-08",
    },
  ]);

  // Fungsi untuk update stok
  const updateStock = (id, newStock) => {
    setStockItems(
      stockItems.map((item) =>
        item.id === id ? { ...item, stock: newStock } : item
      )
    );
  };

  return (
    <div className="inventory-page">
      <Navbar />
      <div className="wrapper">
        <h1 className="page-title">Manajemen Inventori</h1>

        <div className="inventory-grid">
          {/* Komponen Manajemen Stok */}
          <div className="inventory-section stock-management">
            <h2 className="section-title">Kelola Stok Barang</h2>
            <StockManagement
              stockItems={stockItems}
              updateStock={updateStock}
            />
          </div>

          {/* Komponen Ketersediaan Barang */}
          <div className="inventory-section stock-availability">
            <h2 className="section-title">Ketersediaan Barang</h2>
            <StockAvailability stockItems={stockItems} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InventoryPage;
