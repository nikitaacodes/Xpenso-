"use client";

import { RootState } from "@/redux/store";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
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

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);

  const data = {
    labels: ["Finance"], 
    datasets: [
      {
        label: "Income ($)",
        data: [totalIncome],
        backgroundColor: "rgba(75,192,192,0.5)",
      },
      {
        label: "Expenses ($)",
        data: [totalExpenses],
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: "Income vs Expenses",
        font: { size: 17 },
      },
    },
    scales: {
      x: {
        stacked: true, 
        title: {
          display: true,
          text: "Category",
          color: "black",
        },
        ticks: {
          color: "black",
          font: { size: 13 },
        },
      },
      y: {
        stacked: true, 
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
          font: { size: 15 },
        },
        ticks: {
          stepSize: 50,
          color: "black",
        },
        grid: {
          color: "rgba(200,200,200,0.3)",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}
