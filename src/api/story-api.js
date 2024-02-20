import axios from "../config/axios";

export const createStory = (formData) => axios.post("/story", formData);

export const getAllStory = () => axios.get("/story/all");

export const deleteStory = (id) => axios.delete(`/story/delete/${id}`);

export const getTargetStory = (storyId) => axios.get(`/story/${storyId}`);
