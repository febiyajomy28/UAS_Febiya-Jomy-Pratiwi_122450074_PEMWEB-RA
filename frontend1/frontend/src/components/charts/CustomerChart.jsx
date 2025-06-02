import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function CustomerChart({ customers }) {
  // Enhanced point distribution calculation
  const pointRanges = [
    { label: "0-50", max: 50, color: "#3498db" },
    { label: "51-100", max: 100, color: "#2ecc71" },
    { label: "101-200", max: 200, color: "#f39c12" },
    { label: "201+", max: Infinity, color: "#e74c3c" },
  ];

  const data = {
    labels: pointRanges.map((range) => range.label),
    datasets: [
      {
        label: "Jumlah Pelanggan",
        data: pointRanges.map(
          (range) =>
            customers.filter((c) => {
              const points = Number(c.points) || 0;
              return (
                points <= range.max &&
                (range.label === "0-50"
                  ? points >= 0
                  : points > pointRanges[pointRanges.indexOf(range) - 1]?.max ||
                    0)
              );
            }).length
        ),
        backgroundColor: pointRanges.map((range) => range.color),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) =>
            `${context.parsed.y} pelanggan (${context.label})`,
        },
      },
      title: {
        display: true,
        text: "Distribusi Poin Pelanggan",
        font: { size: 16 },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 1 },
        title: { display: true, text: "Jumlah Pelanggan" },
      },
      x: {
        title: { display: true, text: "Range Poin" },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default CustomerChart;
