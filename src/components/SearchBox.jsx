"use client";

import { useState } from "react";

export default function SeachBox() {
  const [text, setText] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("searching for", text);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className="flex items-center text-black">
        <input
          type="text"
          value={text}
          placeholder="Search"
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 rounded-md w-[400px] px-3 py-1 text-black bg-gray-100 focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch(e);
            }
          }}
        />
      </form>
    </div>
  );
}
