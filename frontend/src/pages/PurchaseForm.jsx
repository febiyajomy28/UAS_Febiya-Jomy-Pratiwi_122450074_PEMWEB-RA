import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/PurchasePage.css";

function PurchasePage() {
  // Data contoh
  const stockItems = [
    {
      id: 1,
      name: "Kopi Arabika",
      stock: 15,
      price: 120000,
      supplier: "Supplier A",
    },
    {
      id: 2,
      name: "Susu Full Cream",
      stock: 8,
      price: 85000,
      supplier: "Supplier B",
    },
    {
      id: 3,
      name: "Gula Pasir",
      stock: 25,
      price: 15000,
      supplier: "Supplier C",
    },
  ];

  const suppliers = [
    { id: 1, name: "Supplier A" },
    { id: 2, name: "Supplier B" },
    { id: 3, name: "Supplier C" },
  ];

  const [formData, setFormData] = useState({
    itemName: "",
    supplier: "",
    quantity: 1,
    price: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-fill price and supplier when item is selected
    if (name === "itemName") {
      const selectedItem = stockItems.find((item) => item.name === value);
      if (selectedItem) {
        setFormData((prev) => ({
          ...prev,
          price: selectedItem.price || "",
          supplier: selectedItem.supplier || "",
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission (bisa dihubungkan dengan API)
    console.log("Data pembelian:", formData);
    alert(
      `Pembelian ${formData.quantity} ${formData.itemName} berhasil dicatat!`
    );
    // Reset form
    setFormData({
      itemName: "",
      supplier: "",
      quantity: 1,
      price: "",
      date: new Date().toISOString().split("T")[0],
      notes: "",
    });
  };

  return (
    <div className="purchase-page">
      <Navbar />
      <main className="purchase-container">
        <h1>Form Pembelian Barang</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="itemName">Nama Barang</label>
            <select
              id="itemName"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Barang</option>
              {stockItems.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name} (Stok: {item.stock})
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="supplier">Supplier</label>
            <select
              id="supplier"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              required
            >
              <option value="">Pilih Supplier</option>
              {suppliers.map((supplier) => (
                <option key={supplier.id} value={supplier.name}>
                  {supplier.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="quantity">Jumlah</label>
              <input
                id="quantity"
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Harga per Unit (Rp)</label>
              <input
                id="price"
                type="number"
                name="price"
                min="1"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="date">Tanggal Pembelian</label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Catatan</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Tambahkan catatan jika diperlukan..."
            />
          </div>

          <button type="submit" className="submit-button">
            Simpan Pembelian
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}

export default PurchasePage;
