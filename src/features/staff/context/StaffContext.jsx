import { useState } from "react";
import { createContext } from "react";
import * as StaffApi from "../../../api/staff-api";
import { useEffect } from "react";

export const StaffContext = createContext();

export default function StaffContextProvider({ children }) {
  const [transaction, setTransaction] = useState([]);

  function fetchAllTransaction() {
    StaffApi.getAllTransaction()
      .then((res) => setTransaction(res.data.allTransaction))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchAllTransaction();
  }, []);

  const confirmVerify = async (data) => {
    await StaffApi.verifyPremium(data);
  };

  const rejectVerify = async (data) => {
    await StaffApi.NotVerifyPremium(data);
  };

  return (
    <StaffContext.Provider
      value={{ transaction, confirmVerify, rejectVerify, fetchAllTransaction }}
    >
      {children}
    </StaffContext.Provider>
  );
}
