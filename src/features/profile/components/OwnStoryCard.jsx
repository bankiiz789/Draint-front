import React from "react";
import useProfile from "../hooks/useProfile";
import OwnStoryItem from "./OwnStoryItem";

function OwnStoryCard() {
  const { myStory } = useProfile();
  return (
    <div>
      {myStory.map((el) => (
        <OwnStoryItem key={el.id} myStory={el}></OwnStoryItem>
      ))}
    </div>
  );
}

export default OwnStoryCard;
