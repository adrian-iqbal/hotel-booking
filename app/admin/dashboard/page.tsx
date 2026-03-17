import DashboardCards from "@/app/components/admin/DashboardCards";
import ReservationList from "@/app/components/admin/ReservationList";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className="max-w-7xl px-4 py-16 mt-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <Suspense fallback={<p>Loading cards...</p>}>
        <DashboardCards />
      </Suspense>
      <Suspense fallback={<p>Loading Reservation...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
