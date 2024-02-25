import React from "react";
import useProfile from "../hooks/useProfile";
import OwnStoryItem from "./OwnStoryItem";
import { Link } from "react-router-dom";

function OwnStoryCard() {
  const { profileUserFriend } = useProfile();
  console.log(profileUserFriend.Stories);
  return (
    <div className="flex flex-col justify-center items-center">
      <>
        {profileUserFriend.Stories?.length == 0 ? (
          <div className="h-[180px] mt-[4rem] text-gray-400 font-bold text-xl">
            No Story yet
          </div>
        ) : null}
        {profileUserFriend.Stories?.map((el) => (
          // <Link key={el.id} to={`/story/${el.id}`}>
          <OwnStoryItem
            key={el.id}
            info={profileUserFriend}
            story={el}
          ></OwnStoryItem>
          // </Link>
        ))}
      </>
    </div>
  );
}

export default OwnStoryCard;
