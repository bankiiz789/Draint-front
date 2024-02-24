import axios from "../config/axios";

export const upgradeUser = (formData) => axios.post("/user/upgrade", formData);
