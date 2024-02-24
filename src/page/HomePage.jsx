import React from "react";
import StoryCards from "../features/story/components/StoryCards";
import Footer from "../components/Footer";
import StoryContextProvider from "../features/story/context/StoryContext";
import Input from "../components/Input";

function HomePage() {
  return (
    <div className="w-full bg-[#f2f2f4]">
      <div className=" max-w-[1000px] m-auto">
        {/* <div className="btn rounded-full mt-8 w-full bg-amber-500 text-white hover:bg-amber-600  ">
          Tell your Story
        </div> */}
        {/* content */}

        <StoryContextProvider>
          <StoryCards />
        </StoryContextProvider>

        {/* footer */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
