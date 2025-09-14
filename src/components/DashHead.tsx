"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


interface FinanceItem {
  amount: number;
}

interface FinanceState {
  finance: {
    expenses: FinanceItem[];
    income: FinanceItem[];
    investments: FinanceItem[];
    savings: FinanceItem[];
    balance: number;
  };
}

export default function DashHead() {
  const [currDate, setCurrDate] = useState<string>("");

  const expenses = useSelector((state: FinanceState) => state.finance.expenses);
  const income = useSelector((state: FinanceState) => state.finance.income);
  const investments = useSelector((state: FinanceState) => state.finance.investments);
  const savings = useSelector((state: FinanceState) => state.finance.savings);
  const balance = useSelector((state: FinanceState) => state.finance.balance);

  useEffect(() => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    setCurrDate(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="w-full flex flex-col mx-4">
      <div className="text-xl font-bold text-black flex flex-row justify-between my-2">
        <div>
          Welcome back, Santru !
          <p className="text-sm font-medium text-gray-700">{currDate}</p>
        </div>
        <div className="pr-16 flex gap-4">
          <Link href="reports/thismonth">
            <button className="border-gray-300 border text-black px-2 py-1 text-[16px] bg-gray-50 font-medium rounded-sm">
              This month
            </button>
          </Link>
          <Link href="reports/create">
            <button className="bg-blue-700 text-white px-2 py-1 text-[16px] font-medium rounded-sm">
              Create report
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-row gap-4 my-7 text-black">
        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50 border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium">Total savings</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${savings.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>

        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50 border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium">Total expenses</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${expenses.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>

        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50 border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium">Total income</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${income.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>

        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50 border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium">Total investments</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${investments.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
