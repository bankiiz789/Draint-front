import { useContext } from "react";
import { DraftContext } from "../context/DraftContext";

export default function useDraft() {
  return useContext(DraftContext);
}
