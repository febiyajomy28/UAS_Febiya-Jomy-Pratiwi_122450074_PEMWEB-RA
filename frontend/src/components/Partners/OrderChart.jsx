import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function OrderChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei"],
    datasets: [
      {
        label: "Pemesanan per Bulan",
        data: [12, 19, 8, 15, 7],
        backgroundColor: "#4CAF50",
      },
    ],
  };

  return (
    <div className="order-chart">
      <Bar data={data} />
    </div>
  );
}

export default OrderChart;
