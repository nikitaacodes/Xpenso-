"use client";

import DashHead from "@/components/DashHead";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function ClientWrapper() {
  return (
    <Provider store={store}>
      <div className="w-full px-4 py-1 ">
        <Navbar />
        <div>
          <DashHead />
        </div>
      </div>
      {/* all dynamic cards here */}
    </Provider>
  );
}
