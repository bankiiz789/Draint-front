import axios from "../config/axios";

export const createFav = (storyId) => axios.post(`/story/${storyId}/fav`);
export const deleteFav = (storyId) => axios.delete(`/story/${storyId}/fav`);
