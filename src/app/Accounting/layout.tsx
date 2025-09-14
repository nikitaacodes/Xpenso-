"use client";

import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function AccountingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div className="w-full px-4 py-1 bg-gray-200">
        <Navbar />

        <div className="flex flex-row">
          <SideBar />
          <div className="flex flex-col flex-1">{children}</div>
        </div>
      </div>
    </Provider>
  );
}
