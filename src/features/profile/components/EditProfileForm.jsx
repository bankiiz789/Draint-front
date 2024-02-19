import React from "react";
import useAuth from "../../auth/hooks/use-auth";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import Input from "../../../components/Input";
import { useRef, useState } from "react";
import { updateUser } from "../../../api/user-api";

function EditProfileForm() {
  const { authUser } = useAuth();
  const profileEl = useRef(null);
  const coverEl = useRef(null);
  const [image, setImage] = useState();
  const [coverImage, setCoverImage] = useState();
  const [editUser, setEditUser] = useState("");

  const handleChangeEdit = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  //   const updateProfileImage = async (file) => {
  //     // console.log(file);
  //     const formData = new FormData();
  //     formData.append("profileImage", file);
  //     await updateUser(formData);
  //   };

  //   const updateCoverImage = async (file) => {
  //     const formData = new FormData();
  //     formData.append("coverImage", file);
  //     await updateUser(formData);
  //   };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) {
      formData.append("profileImage", image);
    }
    // await updateUser(formData);
    if (coverImage) {
      formData.append("coverImage", coverImage);
    }
    if (editUser.userName) {
      formData.append("userName", editUser?.userName);
    }
    if (editUser.bio) {
      formData.append("bio", editUser?.bio);
    }

    await updateUser(formData);
  };

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
          src={
            coverImage ? URL.createObjectURL(coverImage) : authUser?.coverImage
          }
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
          src={image ? URL.createObjectURL(image) : authUser?.profileImage}
        />
      </div>
      <div className="flex flex-col items-center mt-2">
        <Input
          placeholder={authUser?.userName}
          name="userName"
          value={editUser?.userName}
          onChange={handleChangeEdit}
        />
        <textarea
          className="textarea textarea-bordered w-full "
          placeholder="Bio"
          name="bio"
          value={editUser?.bio}
          onChange={handleChangeEdit}
        ></textarea>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <div className="btn text-white bg-green-600 hover:bg-green-700">
          Cancel
        </div>
        <div
          className="btn text-white bg-green-600 hover:bg-green-700"
          onClick={handleSubmitEdit}
        >
          Save Change
        </div>
      </div>
    </>
  );
}

export default EditProfileForm;
