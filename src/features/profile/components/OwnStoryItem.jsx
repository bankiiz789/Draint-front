import React from "react";
import {
  CrownIcon,
  DotIcon,
  FavIcon,
  LockIcon,
  StarIcon,
} from "../../../icons";
import useAuth from "../../auth/hooks/use-auth";
import coverPhotoDefault from "../../../assets/cover-photo.png";
import Avatar from "../../auth/components/Avatar";
import useProfile from "../hooks/useProfile";
import Modal from "../../../components/Modal";
import EditStoryForm from "./EditStoryForm";
import RegisterForm from "../../auth/components/RegisterForm";
import { useState } from "react";

function OwnStoryItem({ story, info }) {
  const { authUser } = useAuth();
  const { deleteStory } = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8 cursor-pointer hover:scale-105 transition duration-500">
      <figure className="bg-amber-400 ">
        <img src={story?.coverImage || coverPhotoDefault}></img>
      </figure>
      <div className="card-body">
        {/* category and staff pick */}
        <div className="flex justify-between">
          <div>{story?.category}</div>
          <div>
            <StarIcon />
          </div>
        </div>
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <h2 className="card-title font-black text-2xl">{story?.title}</h2>
            <h2 className="btn btn-ghost">
              <LockIcon />
            </h2>
          </div>
          {/* select dropdown delete or edit */}
          {authUser?.id === info?.id ? (
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-white shadow-none border-none pe-0 hover:bg-white"
              >
                <DotIcon />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={() => {
                    document.getElementById("my_modal_3").showModal();
                    setIsOpen(true);
                  }}
                  className="p-2 hover:bg-gray-300 rounded-lg"
                >
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <div>Edit Profile</div>
                  <dialog
                    id="my_modal_3"
                    className="modal fixed inset-0 flex items-center justify-center"
                  >
                    <div className="modal-box ">
                      <form method="dialog" onClick={() => setIsOpen(false)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                      </form>
                      {isOpen && <EditStoryForm story={story} />}
                    </div>
                  </dialog>
                </li>

                {/* delete story */}
                <li onClick={() => deleteStory(story?.id)}>
                  <a>Delete</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* content */}
        <div className=" max-h-[100px] overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: story?.content }}></div>
        </div>
        {/* footer */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center">
              <Avatar size="w-10" src={info?.profileImage} />
              <div>{info.story?.userName}</div>
              <div>
                <CrownIcon />
              </div>
            </div>
            <div className="text-gray-500 font-bold ps-2 pt-2">1hr</div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              {story?.totalFav}{" "}
              <span className="text-amber-500">recommended</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnStoryItem;
