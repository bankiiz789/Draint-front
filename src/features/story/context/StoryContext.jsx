import { createContext, useState } from "react";
import mockData from "../mock.json";

export const StoryContext = createContext();

const initial = {
  id: "",
  userId: "",
  title: "",
  content: "",
  category: "",
  totalFav: "",
  totalComment: "",
  coverImg: "",
};

export default function StoryContextProvider({ children }) {
  const [story, SetStory] = useState(mockData);

  return (
    <StoryContext.Provider value={{ story }}>{children}</StoryContext.Provider>
  );
}
