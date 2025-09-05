"use client";

import Link from "next/link";

export default function SideBar() {
  return (
    <div className="w-[150px] flex flex-col ">
      <Link
        href={"/dashboard"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Dashboard
      </Link>
      <Link
        href={"/activity"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Activity
      </Link>
      <Link
        href={"/sales"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Sales{" "}
      </Link>
      <Link
        href={"/invoice"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Invoice{" "}
      </Link>
      <Link
        href={"/expenses"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Expenses{" "}
      </Link>
      <Link
        href={"/accounting"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200 rounded-xl"
      >
        {" "}
        Accounting{" "}
      </Link>
      <Link
        href={"/investment"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        {" "}
        Investment{" "}
      </Link>
      <Link
        href={"/mywallet"}
        className="font-medium px-3 py-1 hover:text-indigo-800 hover:bg-indigo-200"
      >
        My Wallet{" "}
      </Link>
    </div>
  );
}
