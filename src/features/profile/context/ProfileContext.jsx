import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useAuth from "../../auth/hooks/use-auth";
import { useEffect } from "react";
import * as userApi from "../../../api/user-api";
import * as StoryApi from "../../../api/story-api";
import { useParams } from "react-router-dom";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const { authUser } = useAuth();
  const { userId } = useParams();
  const [myStory, setMyStory] = useState([]);
  const [countStory, setCountStory] = useState("");
  const [profileUserFriend, setProfileUserFriend] = useState([]);

  //   useEffect(() => {
  //     userApi
  //       .getMyStory(authUser?.id)
  //       .then((res) => {
  //         setMyStory(res.data.myStory.myStory);
  //         setCountStory(res.data.myStory.countStory);
  //       })
  //       .catch((err) => console.log(err));
  //   }, []);

  useEffect(() => {
    userApi
      .getTargetUserProfile(userId)
      .then((res) => setProfileUserFriend(res.data.userProfileFriend[0]))
      .catch((err) => console.log(err));
    console.log(userId);
  }, []);

  const deleteStory = async (id) => {
    await StoryApi.deleteStory(id);
  };

  console.log(profileUserFriend);

  return (
    <ProfileContext.Provider
      value={{ myStory, countStory, profileUserFriend, deleteStory }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
