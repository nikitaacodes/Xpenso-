"use client";

import { Interface } from "readline";
import SeachBox from "./SearchBox";

interface NavbarProps {
  variant?: "accounts" | "dashboard" | "invoice" | "mywallet" | "activity";
}
export default function Navbar({ variant }: NavbarProps) {
  return (
    <div className="w-full mx-4 py-1 flex flex-row justify-items-start gap-5">
      <div className="text-xl font-bold text-blue-950">
        {" "}
        Xpenso {variant && (
          <span className="ml-2 capitalize"> {variant}</span>
        )}{" "}
      </div>
      <div>
        <SeachBox />
      </div>
    </div>
  );
}
