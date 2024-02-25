import React from "react";
import Avatar from "../../auth/components/Avatar";
import {
  FavIcon,
  StarIcon,
  LockIcon,
  CrownIcon,
  DotIcon,
  FavOutlineIcon,
} from "../../../icons/index";
import coverPhotoDefault from "../../../assets/cover-photo.png";
import { Link } from "react-router-dom";
import formatTimeAgo from "../../../utils/time-ago";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import CategoryButton from "../../../components/CategoryButton";

function StoryItem({ story }) {
  const [loading, setLoading] = useState(false);
  const {
    staffPick,
    title,
    content,
    coverImage,
    totalFav,
    category,
    createdAt,

    user: { userName, profileImage, id, type },
  } = story;

  //   console.log(story);

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8 cursor-pointer hover:scale-105 transition duration-500">
        <figure className="bg-amber-400 ">
          <img src={coverImage || coverPhotoDefault}></img>
        </figure>
        <div className="card-body">
          {/* category and staff pick */}
          <div className="flex justify-between">
            <CategoryButton category={category}>{category}</CategoryButton>
            <div>{staffPick ? <StarIcon /> : null}</div>
          </div>
          {/* header */}
          <div className="flex justify-between">
            <div className="flex items-center gap-2 ">
              <h2 className="card-title font-black text-2xl">{title}</h2>
              <h2 className="btn btn-ghost">
                {story.type === "PREMIUM" ? <LockIcon /> : null}
              </h2>
            </div>
          </div>
          {/* content */}
          <div className=" max-h-[120px] overflow-hidden mb-2">
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
          {/* footer */}
          <div className="flex justify-between items-center">
            <div>
              <div className="flex gap-2 items-center">
                <Link to={`/profile/${id}`}>
                  <Avatar size="w-10" src={profileImage} />
                </Link>
                <div className="font-bold">{userName}</div>
                <div>{type === "PREMIUM" ? <CrownIcon /> : null}</div>
              </div>
              <div className="text-gray-500 font-bold ps-2 pt-2 text-[12px]">
                {formatTimeAgo(createdAt)}
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="font-semibold">
                {totalFav}
                <span className="text-amber-500 font-semibold">
                  {" "}
                  recommended
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryItem;
