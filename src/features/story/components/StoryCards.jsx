import React from "react";
import Avatar from "../../auth/components/Avatar";
import StoryItem from "./StoryItem";
import useStory from "../hooks/useStory";
import { Link } from "react-router-dom";
import Input from "../../../components/Input";
import { useState } from "react";
import useAuth from "../../auth/hooks/use-auth";
import Spinner from "../../../components/Spinner";
import { useEffect } from "react";

function StoryCards() {
  const { authUser } = useAuth();
  const { story, targetStory, getAllStory } = useStory();
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredStory = story.filter((el) => el?.title.includes(search));

  return (
    <>
      {loading && <Spinner />}
      <div>
        <Input
          type="search"
          placeholder="Search..."
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state with input value
        />
        {/* Render filteredStory instead of story */}
        {filteredStory.map((el) => {
          console.log("for p nae");
          return (
            <Link key={el.id} to={`/story/${el.id}`}>
              <StoryItem story={el} />
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default StoryCards;
