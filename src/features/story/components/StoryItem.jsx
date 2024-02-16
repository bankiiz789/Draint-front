import React from "react";
import Avatar from "../../auth/components/Avatar";

function StoryItem({ story }) {
  const { userId, title, content, coverImg, totalFav, category } = story;
  return (
    <div className="card w-full bg-base-100 shadow-xl max-h-[500px] my-8">
      <figure className="bg-amber-400 ">
        <img src={coverImg} alt="Shoes" />
      </figure>
      <div className="card-body">
        {/* category and staff pick */}
        <div className="flex justify-between">
          <div>{category}</div>
          <div>STAR</div>
        </div>
        {/* header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <h2 className="card-title font-black text-2xl">{title}</h2>
            <h2 className="btn btn-ghost">icon lock</h2>
          </div>
          <button className="btn btn-ghost">...</button>
        </div>
        {/* content */}
        <div className=" max-h-[100px] overflow-hidden">
          <p>{content}</p>
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
          <div>{totalFav} recommended</div>
        </div>
      </div>
    </div>
  );
}

export default StoryItem;
