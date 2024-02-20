import React from "react";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import ProfileInfo from "./ProfileInfo";
import ButtonFrom from "./ButtonFrom";
import useAuth from "../../auth/hooks/use-auth";
import { useState } from "react";
import useProfile from "../hooks/useProfile";

function ProfileContainer() {
  const { authUser } = useAuth();
  const { profileUserFriend } = useProfile();

  return (
    <>
      <CoverPicture src={profileUserFriend?.coverImage} />
      <ProfilePicture src={profileUserFriend?.profileImage} />
      <ProfileInfo />
      <ButtonFrom />
    </>
  );
}

export default ProfileContainer;
