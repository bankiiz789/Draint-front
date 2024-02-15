import React from "react";
import StoryCards from "../features/story/components/StoryCards";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <div className="btn rounded-full mt-8 w-full border-4 border-amber-400 text-amber-500 bg-white hover:bg-amber-500 hover:text-white ">
        Tell your Story
      </div>
      {/* content */}

      <StoryCards />
      <StoryCards />
      <StoryCards />
      <StoryCards />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
