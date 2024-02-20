import { createContext, useState } from "react";
import mockData from "../mock.json";
import * as StoryApi from "../../../api/story-api";
import { useEffect } from "react";
import * as FavApi from "../../../api/favorite-api";
import { useParams } from "react-router-dom";

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
      })
      .catch((err) => console.log(err));
  }, []);

  const createStory = async (formData) => {
    console.log(formData);
    await StoryApi.createStory(formData);
  };

  const toggleFav = async (storyId) => {
    await FavApi.toggleFav(storyId);
  };

  //   const createPost = (input) => {};
  return (
    <StoryContext.Provider value={{ story, createStory, toggleFav }}>
      {children}
    </StoryContext.Provider>
  );
}
