import React from "react";
import Modal from "../../../components/Modal";
import EditProfileForm from "./EditProfileForm";
import useAuth from "../../auth/hooks/use-auth";
import useProfile from "../hooks/useProfile";
import DraftCard from "../../draft/components/DraftCard";
import UpgradeUserForm from "./UpgradeUserForm";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function ButtonFrom() {
  const { authUser } = useAuth();
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [isFollow, setIsFollow] = useState(false);
  const {
    profileUserFriend,
    createFollow,
    checkFollow,
    fetchTargetUserProfile,
    unfollowed,
  } = useProfile();

  const filterFollow = checkFollow.filter(
    (el) => el.followingId == profileUserFriend?.id
  );

  const handleClickFollow = async () => {
    try {
      setLoading(true);
      setIsFollow(true);
      await createFollow(userId);
      await fetchTargetUserProfile();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUnfollow = async () => {
    try {
      setLoading(true);
      setIsFollow(false);
      await unfollowed(userId);
      await fetchTargetUserProfile();
      document.getElementById(id).showModal();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  console.log(isFollow);

  return (
    <>
      <div className="flex justify-center gap-4">
        {authUser?.id === profileUserFriend?.id ? (
          <>
            <Modal
              id="edit profile"
              title="Edit profile"
              className="btn bg-amber-500 border-2 text-white hover:bg-amber-600 outline-none rounded-lg"
            >
              <EditProfileForm />
            </Modal>
            {profileUserFriend?.type === "FREE" ? (
              <Modal
                id="upgrade account"
                title="Upgrade Account"
                className="btn text-white bg-green-600 hover:bg-green-700"
              >
                <UpgradeUserForm />
              </Modal>
            ) : null}
          </>
        ) : (
          <>
            {filterFollow.length === 0 && !isFollow ? (
              <div
                className="btn text-white bg-green-600 hover:bg-green-700"
                onClick={handleClickFollow}
              >
                Follow
              </div>
            ) : (
              <Modal
                title="UNFOLLOWED"
                id="unfollowed"
                className="bg-gray-400 rounded-lg hover:bg-gray-500 p-3 text-white"
              >
                <div className="flex flex-col gap-3 items-center justify-center">
                  <h1>
                    Are you sure to
                    <span className="text-amber-500 underline font-bold">
                      UNFOLLOWED
                    </span>
                    this account ?
                  </h1>
                  <div className="flex gap-2">
                    <button
                      className="bg-amber-500 p-2 text-white rounded-lg"
                      onClick={handleUnfollow}
                    >
                      Unfollowed
                    </button>
                    <button
                      className="bg-gray-500 p-2 text-white rounded-lg"
                      onClick={() =>
                        document.getElementById("unfollowed").close()
                      }
                    >
                      cancel
                    </button>
                  </div>
                </div>
              </Modal>
            )}
          </>
        )}
      </div>

      <div className="border-b border-black flex justify-between items-end">
        <h1 className="p-4">Stories</h1>
        {/* slide right */}
        {authUser?.id === profileUserFriend?.id ? (
          <div className="p-4">
            <div className="drawer drawer-end">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content">
                {/* Page content here */}
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button btn bg-white border-none underline text-primary"
                >
                  Your draft
                </label>
              </div>
              <div className="drawer-side z-50">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>

                <ul className="menu p-4 w-100 min-h-full bg-white text-base-content">
                  {/* Sidebar content here */}
                  <div className=" w-96 bg-amber-500 font-bold text-xl rounded-full text-center text-white">
                    Your Draft
                  </div>
                  <DraftCard />
                </ul>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default ButtonFrom;
