"use client";
import DashboardIcon from "@/app/Dashboard/DashboardIcon";
import InvestmentIcon from "@/app/Investment/InvestmentIcon";
import InvoiceIcon from "@/app/Invoice/InvoiceIcon";
import MyWalletIcon from "@/app/Mywallet/MyWalletIcon";
import SalesIcon from "@/app/Sales/SalesIcon";
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
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <SalesIcon />
        Sales{" "}
      </Link>
      <Link
        href={"/invoice"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <InvoiceIcon />
        Invoice{" "}
      </Link>
      <Link
        href={"/expenses"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        Expenses{" "}
      </Link>
      <Link
        href={"/accounting"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        Accounting{" "}
      </Link>
      <Link
        href={"/investment"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
        <InvestmentIcon />
        Investment{" "}
      </Link>
      <Link
        href={"/mywallet"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        <MyWalletIcon />
        My Wallet{" "}
      </Link>
    </div>
  );
}
