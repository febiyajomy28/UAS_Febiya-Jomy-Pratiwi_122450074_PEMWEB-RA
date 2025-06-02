import React from "react";

const StockHistory = ({ history, stocks }) => {
  return (
    <div className="stock-history">
      <h3>Riwayat Stok</h3>
      <ul>
        {history.map((record) => {
          const item = stocks.find((i) => i.id === record.itemId);
          return (
            <li key={record.id}>
              [{record.date}] {item?.name}: {record.action} {record.amount}{" "}
              {item?.unit}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StockHistory;
