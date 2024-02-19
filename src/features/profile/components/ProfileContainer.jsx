import React from "react";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import ProfileInfo from "./ProfileInfo";
import ButtonFrom from "./ButtonFrom";
import useAuth from "../../auth/hooks/use-auth";
import { useState } from "react";

function ProfileContainer() {
  const { authUser } = useAuth();

  return (
    <>
      <CoverPicture src={authUser?.coverImage} />
      <ProfilePicture src={authUser?.profileImage} />
      <ProfileInfo />
      <ButtonFrom />
    </>
  );
}

export default ProfileContainer;
