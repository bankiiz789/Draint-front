import axios from "../config/axios";

export const register = (userObj) => axios.post("auth/register", userObj);
export const login = (userObj) => axios.post("auth/login", userObj);
export const fetchAllStory = () => axios.get("auth/me");
