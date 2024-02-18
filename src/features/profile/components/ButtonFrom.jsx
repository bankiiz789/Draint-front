import React from "react";
import Modal from "../../../components/Modal";
import EditProfileForm from "./EditProfileForm";

function ButtonFrom() {
  return (
    <>
      <div className="flex justify-center gap-4">
        <Modal
          title="Edit profile"
          className="btn bg-amber-500 border-2 text-white hover:bg-amber-600 outline-none rounded-lg"
        >
          <EditProfileForm />
        </Modal>
        <div className="btn text-white bg-green-600 hover:bg-green-700">
          Upgrade your account
        </div>
      </div>
      <div className="border-b border-black">
        <h1 className="p-4">Stories</h1>
      </div>
    </>
  );
}

export default ButtonFrom;
