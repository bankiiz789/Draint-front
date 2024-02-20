import React from "react";
import useAuth from "../../auth/hooks/use-auth";
import useProfile from "../hooks/useProfile";

function ProfileInfo() {
  const { authUser } = useAuth();
  const { profileUserFriend } = useProfile();

  return (
    <div className="flex flex-col items-center mt-2">
      <h1>{profileUserFriend?.userName}</h1>
      <p>Bio : {profileUserFriend?.bio}</p>
      <div className="flex flex-row gap-8 justify-center">
        <div className="text-center">
          <h2>{profileUserFriend.Stories?.length}</h2>
          <p>Stories</p>
        </div>
        <div className="text-center">
          <h2>10</h2>
          <p>Follower</p>
        </div>
        <div className="text-center">
          <h2>150</h2>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
