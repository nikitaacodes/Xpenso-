"use client";
import DashboardIcon from "@/app/dashboard/DashboardIcon";
import InvestmentIcon from "@/app/investment/InvestmentIcon";
import InvoiceIcon from "@/app/invoice/InvoiceIcon";
import MyWalletIcon from "@/app/mywallet/MyWalletIcon";
import SalesIcon from "@/app/sales/SalesIcon";
import Link from "next/link";
export default function SideBar() {
  return (
    <div className="w-[180px] flex flex-col h-screen bg-white ">
      <Link
        href={"/dashboard"}
        className=" flex flex-row font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <DashboardIcon className="w-5 h-5" />
        Dashboard
      </Link>
      <Link
        href={"/activity"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        Activity
      </Link>
      <Link
        href={"/sales"}
        className="flex flex-row font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <SalesIcon />
        Sales{" "}
      </Link>
      <Link
        href={"/invoice"}
        className="flex flex-row  font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <InvoiceIcon />
        Invoice{" "}
      </Link>
      <Link
        href={"/expenses"}
        className="flex flex-row  font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        Expenses{" "}
      </Link>
      <Link
        href={"/accounting"}
        className="flex flex-row  font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        Accounting{" "}
      </Link>
      <Link
        href={"/investment"}
        className="flex flex-row  font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <InvestmentIcon />
        Investment{" "}
      </Link>
      <Link
        href={"/mywallet"}
        className="flex flex-row  font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        <MyWalletIcon />
        My Wallet{" "}
      </Link>
    </div>
  );
}
