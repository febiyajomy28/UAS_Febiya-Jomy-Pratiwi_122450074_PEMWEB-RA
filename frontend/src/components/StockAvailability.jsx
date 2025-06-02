import React from "react";

const StockAvailability = ({ stockItems }) => {
  return (
    <div className="stock-availability">
      <table>
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Kategori</th>
            <th>Stok</th>
            <th>Min. Stok</th>
            <th>Status</th>
            <th>Supplier</th>
            <th>Terakhir Restock</th>
          </tr>
        </thead>
        <tbody>
          {stockItems.map((item) => (
            <tr
              key={item.id}
              className={item.stock <= item.minStock ? "low-stock" : ""}
            >
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.minStock}</td>
              <td>
                {item.stock <= item.minStock ? (
                  <span className="warning">Perlu Restock!</span>
                ) : (
                  <span className="safe">Aman</span>
                )}
              </td>
              <td>{item.supplier}</td>
              <td>{item.lastRestock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StockAvailability;
