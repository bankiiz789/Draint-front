import React from "react";
import useAuth from "../../auth/hooks/use-auth";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import ProfileInfo from "./ProfileInfo";
import Input from "../../../components/Input";
import { useRef } from "react";
import { useState } from "react";

function EditProfileForm() {
  const { authUser } = useAuth();
  const profileEl = useRef(null);
  const coverEl = useRef(null);
  const [image, setImage] = useState();
  const [coverImage, setCoverImage] = useState();

  //   const coverFileEl = useRef(null);

  console.log(profileEl.current?.value);
  return (
    <>
      <input
        type="file"
        className="hidden"
        ref={coverEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setCoverImage(e.target.files[0]);
          }
        }}
      />
      <div className="cursor-pointer" onClick={() => coverEl.current.click()}>
        <CoverPicture
          src={coverImage ? URL.createObjectURL(coverImage) : null}
        />
      </div>
      <input
        type="file"
        className="hidden"
        ref={profileEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setImage(e.target.files[0]);
          }
        }}
      />
      <div
        className=" cursor-pointer "
        onClick={() => profileEl.current.click()}
      >
        <ProfilePicture
          src={image ? URL.createObjectURL(image) : authUser.profileImage}
        />
      </div>
      <div className="flex flex-col items-center mt-2">
        <Input placeholder={authUser?.userName} />
        <textarea
          className="textarea textarea-bordered w-full "
          placeholder="Bio"
        ></textarea>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <div className="btn text-white bg-green-600 hover:bg-green-700">
          Cancel
        </div>
        <div className="btn text-white bg-green-600 hover:bg-green-700">
          Save Change
        </div>
      </div>
    </>
  );
}

export default EditProfileForm;
