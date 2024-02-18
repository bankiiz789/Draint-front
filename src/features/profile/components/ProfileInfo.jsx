import React from "react";
import useAuth from "../../auth/hooks/use-auth";

function ProfileInfo() {
  const { authUser } = useAuth();
  return (
    <div className="flex flex-col items-center mt-2">
      <h1>{authUser?.userName}</h1>
      <p>Bio : {authUser?.bio}</p>
      <div className="flex flex-row gap-8 justify-center">
        <div className="text-center">
          <h2>80</h2>
          <p>Stories</p>
        </div>
        <div className="text-center">
          <h2>120</h2>
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
