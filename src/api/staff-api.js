import axios from "../config/axios";

export const staffPick = (data) => axios.patch("/staff", data);

export const getAllTransaction = () => axios.get("/staff/getAllTransaction");

export const verifyPremium = (data) => axios.patch("/staff/verify", data);

export const NotVerifyPremium = (data) => axios.patch("/staff/notVerify", data);
