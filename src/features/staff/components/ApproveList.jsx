import React from "react";
import useStaff from "../hooks/useStaff";
import ApproveItem from "./ApproveItem";

function ApproveList() {
  const { transaction } = useStaff();
  return (
    <div>
      {transaction.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)] w-full bg-[#f2f2f4]">
          <div> NO TRANSACTION</div>
        </div>
      ) : (
        <>
          {transaction.map((transaction) => (
            <ApproveItem key={transaction?.id} transaction={transaction} />
          ))}
        </>
      )}
    </div>
  );
}

export default ApproveList;
