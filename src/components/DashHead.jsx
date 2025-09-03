"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function DashHead() {
  const [currDate, setCurrDate] = useState("");
  const expenses = useSelector((state) => state.finance.expenses);
  const income = useSelector((state) => state.finance.income);

  const investments = useSelector((state) => state.finance.investments);
  const savings = useSelector((state) => state.finance.savings);
  const balance = useSelector((state) => state.finance.balance);
  useEffect(() => {
    const date = new Date();
    const options = {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    setCurrDate(date.toLocaleDateString("en-US", options));
  }, []);

  return (
    <div className="w-full flex flex-col ">
      <div className="text-xl font-bold text-black-800 flex flex-row justify-between my-2">
        {" "}
        <div>
          Welcome back, Santru !
          <p className="text-sm font-medium text-gray-700">{currDate}</p>
        </div>
        <div className="pr-16 flex gap-4">
          <Link href={"reports/thismonth"}>
            <button className=" border-gray-300 border text-black px-2  py-1 text-[16px] bg-gray-50  font-medium rounded-sm">
              This month
            </button>
          </Link>
          <Link href={"reports/create"}>
            <button className="bg-blue-700 text-white px-2 py-1 text-[16px]  font-medium rounded-sm">
              Create report
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-row gap-4 my-7">
        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50 border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium"> Total savings</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${savings.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>
        <div className=" w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50  border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium"> Total expenses</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${expenses.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>
        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50  border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium"> Total income</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${income.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>
        <div className="w-[200px] pr-4 pl-2 py-1 border-2 bg-gray-50  border-gray-400 rounded-sm">
          <p className="text-gray-600 font-medium"> Total expenses</p>
          <p className="font-bold text-[22px] text-shadow-gray-400 text-shadow-[1px_1px_3px]">
            ${investments.reduce((acc, item) => acc + item.amount, 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
