import { createContext, useState } from "react";
import mockData from "../mock.json";
import * as StoryApi from "../../../api/story-api";
import { useEffect } from "react";

export const StoryContext = createContext();

const initial = {
  userId: "",
  title: "",
  content: "",
  category: "",
  totalFav: "",
  totalComment: "",
  coverImg: "",
};

export default function StoryContextProvider({ children }) {
  const [story, setStory] = useState([]);

  useEffect(() => {
    StoryApi.getAllStory()
      .then((res) => {
        setStory(res.data.story);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  const createStory = async (formData) => {
    await StoryApi.createStory(formData);
  };

  //   const createPost = (input) => {};
  return (
    <StoryContext.Provider value={{ story, createStory }}>
      {children}
    </StoryContext.Provider>
  );
}
