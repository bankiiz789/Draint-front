import axios from "../config/axios";

export const createDraft = (formData) => axios.post("/draft", formData);

export const updateDraft = (data) => axios.patch("/draft/update", data);

export const getDraft = () => axios.get(`/draft/me`);

export const getTargetDraft = (draftId) => axios.get(`/draft/${draftId}`);

export const deleteDraft = (draftId) =>
  axios.delete(`/draft/delete/${draftId}`);
