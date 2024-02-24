import React from "react";
import useProfile from "../hooks/useProfile";
import OwnStoryItem from "./OwnStoryItem";
import { Link } from "react-router-dom";

function OwnStoryCard() {
  const { profileUserFriend } = useProfile();
  console.log(profileUserFriend.Stories);
  return (
    <div>
      {profileUserFriend.Stories?.map((el) => (
        // <Link key={el.id} to={`/story/${el.id}`}>
        <OwnStoryItem info={profileUserFriend} story={el}></OwnStoryItem>
        // </Link>
      ))}
    </div>
  );
}

export default OwnStoryCard;
