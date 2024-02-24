import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import useAuth from "../../auth/hooks/use-auth";
import { useEffect } from "react";
import * as userApi from "../../../api/user-api";
import * as StoryApi from "../../../api/story-api";
import { useParams } from "react-router-dom";
import * as UpgradeApi from "../../../api/upgrade-api";
import useDraft from "../../draft/hooks/useDraft";
import useProfile from "../hooks/useProfile";

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const { authUser } = useAuth();
  const { userId } = useParams();
  const [profileUserFriend, setProfileUserFriend] = useState([]);
  const [checkFollow, setCheckFollow] = useState([]);
  const { fetchDraft } = useDraft();

  function fetchTargetUserProfile() {
    userApi
      .getTargetUserProfile(userId)
      .then((res) => setProfileUserFriend(res.data.userProfileFriend[0]))
      .catch((err) => console.log(err));
    console.log(userId);
  }

  function fetchMeAgainForFollow() {
    userApi
      .getMeMyMine()
      .then((res) => setCheckFollow(res.data.follower))
      .catch((err) => console.log(err));
  }

  console.log(checkFollow);

  useEffect(() => {
    fetchTargetUserProfile();
    fetchMeAgainForFollow();
    fetchDraft();
  }, []);

  const deleteStory = async (id) => {
    await StoryApi.deleteStory(id);
  };

  const upgradeUser = async (formData) => {
    await UpgradeApi.upgradeUser(formData);
  };

  const createFollow = async (userId) => {
    await userApi.followCreate(userId);
  };

  const unfollowed = async (followingId) => {
    await userApi.unfollowed(followingId);
  };

  const checkDuplicate = async (userName) => {
    await userApi.checkExistUser(userName);
  };

  console.log(profileUserFriend);

  return (
    <ProfileContext.Provider
      value={{
        profileUserFriend,
        deleteStory,
        setProfileUserFriend,
        upgradeUser,
        fetchTargetUserProfile,
        createFollow,
        checkFollow,
        unfollowed,
        checkDuplicate,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}
