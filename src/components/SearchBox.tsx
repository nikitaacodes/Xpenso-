"use client";

import { useState } from "react";

export default function SearchBox() {
  const [text, setText] = useState<string>("");

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setText(e.target.value)
          }
          className="border border-gray-300 rounded-md w-[400px] px-3 py-1 text-black bg-gray-100 focus:outline-none"
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
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
