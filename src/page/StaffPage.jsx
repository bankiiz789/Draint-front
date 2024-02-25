import React from "react";
import ApproveList from "../features/staff/components/ApproveList";
import StaffContextProvider from "../features/staff/context/StaffContext";

function StaffPage() {
  return (
    <div>
      <div className=" h-[calc(100vh-64px)] w-full bg-[#f2f2f4]">
        <div className=" max-w-[1000px] m-auto">
          <StaffContextProvider>
            <ApproveList />
          </StaffContextProvider>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;
