import React from "react";
import Avatar from "../features/auth/components/Avatar";
import StoryCards from "../features/story/components/StoryCards";
import useAuth from "../features/auth/hooks/use-auth";
import Modal from "../components/Modal";
import ProfileContainer from "../features/profile/components/ProfileContainer";

function ProfilePage() {
  const { authUser } = useAuth();
  return (
    <>
      <ProfileContainer />
      <div>
        <StoryCards />
      </div>
    </>
  );
}

export default ProfilePage;
