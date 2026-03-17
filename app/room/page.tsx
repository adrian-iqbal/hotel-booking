import { Metadata } from "next";
import HeaderSection from "../components/HeaderSection";
import Main from "../components/main";
import { Suspense } from "react";
import RoomSkeleton from "../components/RoomSkeleton";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description: "Choose your best room today",
};

const RoomPage = () => {
  return (
    <div>
      <HeaderSection
        title="Room & Rates"
        subTitle="Lorem ipsum dolor sit amet."
      />
      <div className="mt-10 px-4">
        <Suspense fallback={<RoomSkeleton />}>
          <Main />
        </Suspense>
      </div>
    </div>
  );
};

export default RoomPage;
