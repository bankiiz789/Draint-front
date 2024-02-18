import axios from "../config/axios";

const updateUser = (user) => axios.patch("/user", user);
