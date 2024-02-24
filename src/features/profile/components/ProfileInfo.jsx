import React from "react";
import useAuth from "../../auth/hooks/use-auth";
import useProfile from "../hooks/useProfile";
import { CrownIcon } from "../../../icons";

function ProfileInfo() {
  const { authUser } = useAuth();
  const { profileUserFriend } = useProfile();

  return (
    <div className="flex flex-col items-center mt-2 gap-2 mb-2">
      <div className="flex flex-row gap-2">
        <h1>{profileUserFriend?.userName}</h1>
        {profileUserFriend?.type === "PREMIUM" ? <CrownIcon /> : null}
      </div>
      <p>Bio : {profileUserFriend?.bio}</p>
      <div className="flex flex-row gap-8 justify-center">
        <div className="text-center">
          <h2>{profileUserFriend.Stories?.length}</h2>
          <p>Stories</p>
        </div>
        <div className="text-center">
          <h2>{profileUserFriend.follower?.length}</h2>
          <p>Follower</p>
        </div>
        <div className="text-center">
          <h2>{profileUserFriend.following?.length}</h2>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
