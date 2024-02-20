import React from "react";
import useProfile from "../hooks/useProfile";
import OwnStoryItem from "./OwnStoryItem";

function OwnStoryCard() {
  const { profileUserFriend } = useProfile();
  return (
    <div>
      {profileUserFriend.Stories?.map((el) => (
        <OwnStoryItem
          key={el.id}
          info={profileUserFriend}
          story={el}
        ></OwnStoryItem>
      ))}
    </div>
  );
}

export default OwnStoryCard;
