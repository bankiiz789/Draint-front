import axios from "../config/axios";

export const createStory = (formData) => axios.post("/story", formData);

export const getAllStory = () => axios.get("/story/all");
