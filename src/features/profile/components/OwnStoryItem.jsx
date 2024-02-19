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

function OwnStoryItem({ myStory }) {
  const { authUser } = useAuth();
  //   const { myStory } = useProfile();
  return (
    <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8 cursor-pointer hover:scale-105">
      <figure className="bg-amber-400 ">
        {myStory?.coverImg ? (
          <img src={myStory?.coverImg} alt="Shoes" />
        ) : (
          <img src={coverPhotoDefault}></img>
        )}
      </figure>
      <div className="card-body">
        {/* category and staff pick */}
        <div className="flex justify-between">
          <div>{myStory?.category}</div>
          <div>
            <StarIcon />
          </div>
        </div>
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2 ">
            <h2 className="card-title font-black text-2xl">{myStory?.title}</h2>
            <h2 className="btn btn-ghost">
              <LockIcon />
            </h2>
          </div>
          {/* select dropdown delete or edit */}
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
              <li>
                <a>Edit</a>
              </li>
              <li>
                <a>Delete</a>
              </li>
            </ul>
          </div>
        </div>
        {/* content */}
        <div className=" max-h-[100px] overflow-hidden">
          <p>{myStory?.content}</p>
        </div>
        {/* footer */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center">
              <Avatar size="w-10" src={authUser?.profileImage} />
              <div>{authUser?.userName}</div>
              <div>
                <CrownIcon />
              </div>
            </div>
            <div className="text-gray-500 font-bold ps-2 pt-2">1hr</div>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FavIcon />
            <div>{myStory?.totalFav} recommended</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnStoryItem;
