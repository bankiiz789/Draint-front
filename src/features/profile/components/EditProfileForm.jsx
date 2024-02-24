import React from "react";
import useAuth from "../../auth/hooks/use-auth";
import CoverPicture from "./CoverPicture";
import ProfilePicture from "./ProfilePicture";
import Input from "../../../components/Input";
import { useRef, useState } from "react";
import { updateUser } from "../../../api/user-api";
import useProfile from "../hooks/useProfile";
import Spinner from "../../../components/Spinner";
import { toast } from "react-toastify";

function EditProfileForm() {
  const { authUser } = useAuth();
  const profileEl = useRef(null);
  const coverEl = useRef(null);
  const [image, setImage] = useState();
  const [coverImage, setCoverImage] = useState("");
  const [editUser, setEditUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [duplicate, setDuplicate] = useState(false);
  const { fetchTargetUserProfile, checkDuplicate } = useProfile();

  const handleChangeEdit = (e) => {
    setDuplicate(false);
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSubmitEdit = async (e) => {
    try {
      e.preventDefault();
      const checkUserName = await checkDuplicate(editUser?.userName);
      console.log(editUser?.userName);

      if (!editUser?.userName || editUser?.userName.trim() == "") {
        return toast.error("please fill your username");
      }
      if (!checkUserName) {
        setDuplicate(true);
        return toast.error("username already in use");
      }

      setLoading(true);
      const formData = new FormData();
      if (image) {
        formData.append("profileImage", image);
      }
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }
      if (editUser.userName) {
        formData.append("userName", editUser?.userName);
      }
      if (editUser.bio) {
        formData.append("bio", editUser?.bio);
      }

      console.log(formData, "'''''''''''''''''''");

      await updateUser(formData);
      await fetchTargetUserProfile();
      document.getElementById("edit profile").close();
    } catch (err) {
      if (err.response?.data == "username and email already in use") {
        return setErrorRegis("email or username is already in used");
      }
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
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
      <div className="flex flex-col items-center mt-2 items-end">
        <Input
          placeholder={authUser?.userName}
          name="userName"
          value={editUser?.userName}
          onChange={handleChangeEdit}
        />
        {duplicate && (
          <div className="text-red-500 mt-[-3] mb-2 w-full">
            username has already in use
          </div>
        )}
        <textarea
          className="textarea textarea-bordered w-full "
          placeholder="Bio"
          name="bio"
          value={editUser?.bio}
          onChange={handleChangeEdit}
        ></textarea>
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <div
          className="btn text-white bg-green-600 hover:bg-green-700"
          onClick={() => document.getElementById("edit profile").close()}
        >
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
