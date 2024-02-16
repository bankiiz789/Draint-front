import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3, 4] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["image"],
  ],
};

function WritePage() {
  const [value, setValue] = useState();
  return (
    <>
      <form className="flex flex-col gap-4 my-4">
        {/* close button */}
        <div className="text-red-500 self-end text-l btn bg-white hover:bg-red-500 hover:text-white border-none rounded-full shadow-none">
          close x
        </div>
        {/* Cover Image */}
        <div className="border-2 border-dashed border-amber-500 h-[160px]">
          <img src="" alt="" />
        </div>
        {/* Title */}
        <div className="w-full border-b-2 border-black">
          <input
            type="text"
            placeholder="Title..."
            className="input input-bordered w-full  border-none outline-none focus:outline-none placeholder:text-2xl placeholder:font-bold text-2xl font-bold"
          />
        </div>
        {/* Category */}
        <div className="flex gap-2">
          <select className="select select-bordered select-xs w-full max-w-[100px]">
            <option disabled selected>
              Category
            </option>
            <option>INSPIRE</option>
            <option>EXPERIENCE</option>
            <option>DRAMA</option>
            <option>HORROR</option>
            <option>ROMANTIC</option>
            <option>GLOBAL</option>
            <option>KNOWLEDGE</option>
          </select>
          <select className="select select-bordered select-xs w-full max-w-[100px]">
            <option disabled selected>
              Everyone
            </option>
            <option>Member</option>
          </select>
        </div>
        {/* Content */}
        <div className="border-red-500">
          <ReactQuill
            className="rounded-lg"
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
            style={{ height: 600 }}
          />
        </div>
        {/* Button save and create story */}
        <div className="self-end flex flex-row gap-4 mt-[3rem]">
          <button className="btn bg-green-500 px-8 rounded-full text-white hover:bg-green-600">
            Save
          </button>
          <button className="btn bg-amber-500 rounded-full text-white hover:bg-amber-600">
            Create Story
          </button>
        </div>
      </form>

      {/* <div> preview : {value}</div> */}
    </>
  );
}

export default WritePage;
