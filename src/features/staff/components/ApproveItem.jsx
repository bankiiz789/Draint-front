import React from "react";
import useStaff from "../hooks/useStaff";

function ApproveItem({ transaction }) {
  const { id, userId } = transaction;
  const { confirmVerify, rejectVerify, fetchAllTransaction } = useStaff();

  const data = { id, userId };
  const handleApprove = async () => {
    try {
      await confirmVerify(data);
      fetchAllTransaction();
    } catch (err) {
      console.log(err);
    }
  };

  const handleReject = async () => {
    try {
      await rejectVerify(data);
      fetchAllTransaction();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-[200px]">
        <figure className="w-[200px] h-full">
          <img src={transaction?.slipSrc} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Validate QR code</h2>
          <p>Transaction id : {transaction?.id}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-error text-white" onClick={handleReject}>
              REJECT
            </button>
            <button
              className="btn btn-success text-white"
              onClick={handleApprove}
            >
              APPROVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApproveItem;
