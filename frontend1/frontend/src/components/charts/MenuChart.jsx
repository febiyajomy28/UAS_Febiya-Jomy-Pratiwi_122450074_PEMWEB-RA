import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function MenuChart({ menus }) {
  // Hitung jumlah per kategori
  const categories = {
    minuman: 0,
    makanan: 0,
    snack: 0,
  };

  menus.forEach((menu) => {
    categories[menu.category] = (categories[menu.category] || 0) + 1;
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: ["#3498db", "#e74c3c", "#f39c12"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default MenuChart;
