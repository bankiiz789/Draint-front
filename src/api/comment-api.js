import axios from "../config/axios";

export const createComment = (data) => axios.post("/comment", data);
