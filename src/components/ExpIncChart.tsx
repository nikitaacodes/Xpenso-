"use client";

import { RootState } from "@/redux/store";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  scales,
  Ticks,
  Title,
  Tooltip,
} from "chart.js";
import { title } from "process";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function ExpIncChart() {
  const expenses = useSelector((state: RootState) => state.finance.expenses);
  const income = useSelector((state: RootState) => state.finance.income);
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        label: "Amount($)",
        data: [
          expenses.reduce((acc, item) => acc + item.amount, 0),
          income.reduce((acc, item) => acc + item.amount, 0),
        ],
        backgroundColor: ["rgba(255,99,132,0.5)", "rgba(75,192,192,0.5)"],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "expenses vs income",
        font: { size: 17 },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "categories",
          color: "black",
        },
        Ticks: {
          color: "black",
          font: { size: 13 },
        },
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
          font: { size: 15 },
        },
        Ticks: {
          stepSize: 50,
          color: "black",
        },
        grid: {
          color: "rgba (200,200,200,0.3)",
        },
      },
    },
  };
  return <Bar data={data} options={options} />;
}
