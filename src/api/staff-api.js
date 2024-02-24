import axios from "../config/axios";

export const staffPick = (data) => axios.patch("/staff", data);
