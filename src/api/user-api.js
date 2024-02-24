import axios from "../config/axios";

export const updateUser = (user) => axios.patch("/user", user);

export const getMyStory = (userId) => axios.get("/user/me", userId);

export const getTargetUserProfile = (targetUserId) =>
  axios.get(`/user/${targetUserId}/profile`);

export const followCreate = (targetUserId) =>
  axios.post(`/user/follow/${targetUserId}`);

export const unfollowed = (followingId) =>
  axios.delete(`/user/follow/${followingId}`);

export const getMeMyMine = () => axios.get("/user/memymine");

export const checkExistUser = (userName) => axios.get("user/check");
