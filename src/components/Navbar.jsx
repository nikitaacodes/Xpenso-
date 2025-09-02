"use client";

import SeachBox from "./SearchBox";

export default function Navbar() {
  return (
    <div className="w-full px-4 py-1 flex flex-row justify-items-start gap-5">
      <div className="text-xl font-bold text-blue-950"> Xpenso</div>
      <div>
        <SeachBox />
      </div>
    </div>
  );
}
