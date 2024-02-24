import { createContext, useState, useEffect } from "react";
import * as DraftApi from "../../../api/draft-api";
import useAuth from "../../auth/hooks/use-auth";

export const DraftContext = createContext();

export default function DraftContextProvider({ children }) {
  const [draft, setDraft] = useState([]);

  function fetchDraft() {
    DraftApi.getDraft()
      .then((res) => setDraft(res.data.draft))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchDraft();
  }, []);

  const createDraft = async (formData) => {
    await DraftApi.createDraft(formData);
  };

  const updateDraft = async (formData) => {
    await DraftApi.updateDraft(formData);
  };

  const deleteDraft = async (draftId) => {
    await DraftApi.deleteDraft(draftId);
  };

  return (
    <DraftContext.Provider
      value={{ draft, createDraft, fetchDraft, updateDraft, deleteDraft }}
    >
      {children}
    </DraftContext.Provider>
  );
}

//map
