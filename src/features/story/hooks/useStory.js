import { useContext } from "react";
import { StoryContext } from "../context/StoryContext";

export default function useStory() {
  return useContext(StoryContext);
}
