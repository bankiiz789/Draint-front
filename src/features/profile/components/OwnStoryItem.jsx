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
import EditStoryForm from "./EditStoryForm";

import { useState } from "react";
import Modal from "../../../components/Modal";
import formatTimeAgo from "../../../utils/time-ago";
import { Link } from "react-router-dom";

function OwnStoryItem({ story, info }) {
  const { authUser } = useAuth();
  const { deleteStory, fetchTargetUserProfile } = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    await deleteStory(story?.id);
    await fetchTargetUserProfile();
    document.getElementById("delete").close();
  };

  return (
    // <Link to={`/story/${story?.id}`}>
    <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8 cursor-pointer hover:scale-105 transition duration-500 z-10">
      <figure className="bg-amber-400 z-10">
        <img src={story?.coverImage || coverPhotoDefault}></img>
      </figure>

      <div className="card-body">
        {/* category and staff pick */}
        <div className="flex justify-between">
          <div>{story?.category}</div>
          <div>{story.staffPick ? <StarIcon /> : null}</div>
        </div>
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <h2 className="card-title font-black text-2xl">{story?.title}</h2>
            <h2 className="">
              {story.type === "PREMIUM" ? <LockIcon /> : null}
            </h2>
          </div>
          {/* select dropdown delete or edit */}
          {authUser?.id === info?.id ? (
            <div
              className="dropdown dropdown-hover"
              // onClick={(e) => e.preventDefault()}
            >
              <div tabIndex={0} role="button" className="btn m-1">
                <DotIcon />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li
                  onClick={(event) => {
                    document.getElementById(`${story?.id}`).showModal();
                    setIsOpen(true);
                  }}
                  className="p-2 hover:bg-gray-300 rounded-lg"
                >
                  {/* You can open the modal using document.getElementById('ID').showModal() method */}
                  <div>Edit</div>
                  <dialog
                    id={`${story?.id}`}
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
                <li className="text-red-500">
                  <Modal id="delete" title="delete">
                    <div className="flex flex-col justify-center items-center gap-3">
                      <h1 className="font-bold text-xl text-black">
                        Are you sure ?
                      </h1>
                      <div className="flex gap-4">
                        <button
                          className="btn bg-green-400 hover:bg-green-600 text-white"
                          onClick={handleDelete}
                        >
                          confirm
                        </button>
                        <button
                          className="btn bg-red-500 hover:bg-red-600 text-white"
                          onClick={() =>
                            document.getElementById("delete").close()
                          }
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </Modal>
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
              <div>{info.story?.type === "PREMIUM" ? <CrownIcon /> : null}</div>
            </div>
            <div className="text-gray-500 font-bold ps-2 pt-2">
              {formatTimeAgo(story?.createdAt)}
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div>
              {story?.totalFav}
              <span className="text-amber-500"> recommended</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}

export default OwnStoryItem;
