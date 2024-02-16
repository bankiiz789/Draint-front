import React from "react";
import Avatar from "../../auth/components/Avatar";
import StoryItem from "./StoryItem";
import useStory from "../hooks/useStory";

function StoryCards() {
  const { story } = useStory();
  return (
    <div>
      {story.map((el) => (
        <StoryItem key={el.id} story={el} />
      ))}
    </div>
  );
}

export default StoryCards;
