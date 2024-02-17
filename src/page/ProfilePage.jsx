import React from "react";
import Avatar from "../features/auth/components/Avatar";
import StoryCards from "../features/story/components/StoryCards";

function ProfilePage() {
  return (
    <>
      <div>
        {/* cover photo */}
        <div className="border border-black h-[180px]">
          <img src="" alt="" />
        </div>
        {/* Avatar */}
        <div className="-mt-12 flex justify-center">
          <Avatar size="w-32" />
        </div>
        {/* Info */}
        <div className="flex flex-col items-center mt-2">
          <h1>@bankbank</h1>
          <p>your life is your own</p>
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
        {/* button */}
        <div className="flex justify-center gap-4">
          <div className="btn text-white bg-amber-500 hover:bg-amber-600 ">
            Edit your profile
          </div>
          <div className="btn text-white bg-green-600 hover:bg-green-700">
            Upgrade your account
          </div>
        </div>
      </div>
      <div className="border-b border-black">
        <h1 className="p-4">Stories</h1>
      </div>
      <div>
        <StoryCards />
      </div>
    </>
  );
}

export default ProfilePage;
