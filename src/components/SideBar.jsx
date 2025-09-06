"use client";

import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[180px] flex flex-col h-screen bg-white ">
      <Link
        href={"/dashboard"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
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
        Sales{" "}
      </Link>
      <Link
        href={"/invoice"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        {" "}
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
        Investment{" "}
      </Link>
      <Link
        href={"/mywallet"}
        className="font-medium px-4 py-2 text-black hover:text-indigo-800 hover:bg-indigo-200 rounded-lg "
      >
        My Wallet{" "}
      </Link>
    </div>
  );
}
