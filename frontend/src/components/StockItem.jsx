import React from "react";

const StockItem = ({ item, onReduce, onAdd }) => {
  const isLowStock = item.stock <= item.minStock;

  return (
    <div className={`stock-item ${isLowStock ? "low-stock" : ""}`}>
      <h3>{item.name}</h3>
      <p>Kategori: {item.category}</p>
      <p>
        Stok: {item.stock} (Min: {item.minStock})
      </p>
      <p>Supplier: {item.supplier}</p>
      <div className="stock-actions">
        <button onClick={() => onReduce(item.id, 1)}>Kurangi 1</button>
        <button onClick={() => onAdd(item.id, 1)}>Tambah 1</button>
      </div>
      {isLowStock && <span className="warning">Stok Rendah!</span>}
    </div>
  );
};

export default StockItem;
