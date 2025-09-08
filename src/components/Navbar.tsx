"use client";

import { Interface } from "readline";
import SeachBox from "./SearchBox";
import { usePathname } from "next/navigation";

const pathToVariant: Record<string, string> = {
  "/dashboard": "dashboard",
  "/accounting": "accounting",
  "/activity": "activity",
  "/invoice": "invoice ",
  "/mywallet": "mywallet",
  "/sales": "sales",
};
export default function Navbar() {
  const pathname = usePathname();
  const variant = pathToVariant[pathname] || "";
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
