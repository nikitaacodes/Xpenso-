"use client";

import DashHead from "@/components/DashHead";
import ExpIncChart from "@/components/ExpIncChart";
import Navbar from "@/components/Navbar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import SideBar from "@/components/SideBar";
export default function ClientWrapper() {
  return (
    <Provider store={store}>
      <div className="w-full px-4 py-1 bg-gray-200  ">
        <Navbar />
        <div>
          <SideBar />
          <DashHead />
        </div>
      </div>
      <div className="w-1/2 border-2 rounded-md px-4  bg-gray-200  border-gray-300">
        <p className="px-4  font-bold text-gray-900 py-2">
          {" "}
          Financial Performance
        </p>
        <ExpIncChart />
      </div>

      {/* all dynamic cards here */}
    </Provider>
  );
}
