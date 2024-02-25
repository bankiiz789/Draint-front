import { createContext, useState } from "react";
import * as StoryApi from "../../../api/story-api";
import { useEffect } from "react";
import * as FavApi from "../../../api/favorite-api";
import * as CommentApi from "../../../api/comment-api";
import * as StaffPickApi from "../../../api/staff-api";

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

  function getAllStory() {
    StoryApi.getAllStory()
      .then((res) => {
        setStory(res.data.story);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllStory();
  }, []);

  const createStory = async (formData) => {
    console.log(formData);
    await StoryApi.createStory(formData);
  };

  const createFav = async (storyId) => {
    await FavApi.createFav(storyId);
  };
  const deleteFav = async (storyId) => {
    await FavApi.deleteFav(storyId);
  };

  const createComment = async (data) => {
    await CommentApi.createComment(data);
  };

  const updateStory = async (data) => {
    await StoryApi.updateStory(data);
  };

  const staffPick = async (data) => {
    await StaffPickApi.staffPick(data);
  };
  //   const createPost = (input) => {};
  return (
    <StoryContext.Provider
      value={{
        story,
        createStory,
        createFav,
        deleteFav,
        createComment,
        updateStory,
        setStory,
        staffPick,
        getAllStory,
      }}
    >
      {children}
    </StoryContext.Provider>
  );
}
