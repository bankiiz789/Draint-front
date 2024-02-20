import axios from "../config/axios";

export const toggleFav = (storyId) => axios.post(`/story/${storyId}/fav`);
