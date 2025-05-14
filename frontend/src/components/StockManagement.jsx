import React, { useState } from "react";
import StockItem from "./StockItem";
import StockHistory from "./StockHistory";

const StockManagement = ({ stockItems, updateStock }) => {
  const [history, setHistory] = useState([]);

  const reduceStock = (id, amount) => {
    const item = stockItems.find((item) => item.id === id);
    const newStock = item.stock - amount;

    // Update stok
    updateStock(id, newStock);

    // Tambahkan ke riwayat
    setHistory([
      {
        id: Date.now(),
        itemId: id,
        action: "Pengurangan",
        amount,
        date: new Date().toLocaleString(),
      },
      ...history,
    ]);
  };

  const addStock = (id, amount) => {
    const item = stockItems.find((item) => item.id === id);
    const newStock = item.stock + amount;

    // Update stok
    updateStock(id, newStock);

    // Tambahkan ke riwayat
    setHistory([
      {
        id: Date.now(),
        itemId: id,
        action: "Penambahan",
        amount,
        date: new Date().toLocaleString(),
      },
      ...history,
    ]);
  };

  return (
    <div className="stock-management">
      <div className="stock-list">
        {stockItems.map((item) => (
          <StockItem
            key={item.id}
            item={item}
            onReduce={reduceStock}
            onAdd={addStock}
          />
        ))}
      </div>
      <StockHistory history={history} stocks={stockItems} />
    </div>
  );
};

export default StockManagement;
