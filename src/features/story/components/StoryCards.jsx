import React from "react";
import Avatar from "../../auth/components/Avatar";
import StoryItem from "./StoryItem";
import useStory from "../hooks/useStory";
import { Link } from "react-router-dom";

function StoryCards() {
  const { story, targetStory } = useStory();

  return (
    <div>
      {story.map((el) => (
        <Link key={el.id} to={`/story/${el.id}`}>
          <StoryItem story={el} />
        </Link>
      ))}
    </div>
  );
}

export default StoryCards;
