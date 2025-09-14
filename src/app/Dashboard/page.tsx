import DashHead from "@/components/DashHead";

import ExpIncChart from "@/components/ExpIncChart";
export default function DashboardPage() {
  return (
    <>
      <DashHead />
      <div className="w-full">
        <p>Financial Performance</p>
        <ExpIncChart />
      </div>
    </>
  );
}
