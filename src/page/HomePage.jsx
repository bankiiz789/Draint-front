import React from "react";
import StoryCards from "../features/story/components/StoryCards";
import Footer from "../components/Footer";
import StoryContextProvider from "../features/story/context/StoryContext";

function HomePage() {
  return (
    <div className=" max-w-[1000px] m-auto">
      <div className="btn rounded-full mt-8 w-full border-4 border-amber-400 text-amber-500 bg-white hover:bg-amber-500 hover:text-white hover:border-none ">
        Tell your Story
      </div>
      {/* content */}

      <StoryContextProvider>
        <StoryCards />
      </StoryContextProvider>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
