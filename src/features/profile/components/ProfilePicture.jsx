import React from "react";
import Avatar from "../../auth/components/Avatar";

function ProfilePicture({ src }) {
  return (
    <div className="-mt-12 flex justify-center">
      <Avatar size="w-32" src={src} />
    </div>
  );
}

export default ProfilePicture;
