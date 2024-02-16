import React from "react";
import Avatar from "../../auth/components/Avatar";

function StoryCards() {
  return (
    <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8">
      <figure className="bg-amber-400 h-[500px]">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        {/* category and staff pick */}
        <div className="flex justify-between">
          <div>INSPIRE</div>
          <div>STAR</div>
        </div>
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h2 className="card-title font-black text-2xl">Title</h2>
            <h2 className="btn btn-ghost"> icon lock</h2>
          </div>
          <button className="btn btn-ghost">...</button>
        </div>
        {/* content */}
        <div className=" min-h-[100px]">
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        {/* footer */}
        <div className="flex justify-between items-center">
          <div>
            <div className="flex gap-2 items-center">
              <Avatar size="w-10" />
              <div>username</div>
              <div>premium icon</div>
            </div>
            <div className="text-gray-500 font-bold ps-2 pt-2">1hr</div>
          </div>
          <div>30 recommended</div>
        </div>
      </div>
    </div>
  );
}

export default StoryCards;
