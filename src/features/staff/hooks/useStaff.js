import { useContext } from "react";
import { StaffContext } from "../context/StaffContext";

export default function useStaff() {
  return useContext(StaffContext);
}
