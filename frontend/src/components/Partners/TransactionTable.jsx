import React from "react";

function TransactionTable({ transactions }) {
  const transactionData = transactions || [
    {
      id: 1,
      date: "2025-05-01",
      item: "Kopi Arabika",
      supplier: "Supplier A",
      quantity: 10,
      amount: "Rp 1.200.000",
      status: "Lunas",
    },
    {
      id: 2,
      date: "2025-05-03",
      item: "Susu Full Cream",
      supplier: "Supplier B",
      quantity: 5,
      amount: "Rp 425.000",
      status: "Pending",
    },
  ];

  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Tanggal</th>
          <th>Barang</th>
          <th>Supplier</th>
          <th>Jumlah</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map((item) => (
          <tr key={item.id}>
            <td>{item.date}</td>
            <td>{item.item}</td>
            <td>{item.supplier}</td>
            <td>{item.quantity}</td>
            <td>{item.amount}</td>
            <td>
              <span className={`status-badge ${item.status.toLowerCase()}`}>
                {item.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
