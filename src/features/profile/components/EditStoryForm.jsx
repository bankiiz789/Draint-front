import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3, 4] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["image"],
  ],
};

function EditStoryForm({ story }) {
  const coverEl = useRef(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(story?.title);
    return () => setValue("");
  }, []);

  return (
    <form className="flex flex-col gap-4 my-4">
      <input
        className="hidden"
        type="file"
        ref={coverEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setCoverImage(e.target.files[0]);
          }
        }}
      />
      <div
        className="border-2 border-dashed border-amber-500 h-[160px] cursor-pointer"
        onClick={() => coverEl.current.click()}
      >
        <img
          className="w-full bg-center h-full bg-contain"
          //   src={coverImage ? URL.createObjectURL(coverImage) : null}
          alt=""
        />
      </div>
      {/* Title */}
      <div className="w-full border-b-2 border-black">
        <input
          type="text"
          placeholder={value || ""}
          className="input input-bordered w-full  border-none outline-none focus:outline-none placeholder:text-2xl placeholder:font-bold text-2xl font-bold"
          name="title"
          value={value}
          //   onChange={handleChangeInput}
        />
      </div>
      {/* Category */}
      <div className="flex gap-2">
        <select
          className="select select-bordered select-xs w-full max-w-[100px]"
          name="category"
          //   value={input.category}
          //   onChange={handleChangeInput}
        >
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
        <select
          className="select select-bordered select-xs w-full max-w-[100px] "
          name="member"
          //   value={input.member}
          //   onChange={handleChangeInput}
        >
          <option disabled selected>
            for ?
          </option>
          <option>Everyone</option>
          <option>Member</option>
        </select>
      </div>
      {/* Content */}
      <div className="border-red-500">
        <ReactQuill
          className="rounded-lg"
          theme="snow"
          value={value}
          onChange={setValue} // (quillVal => setInput({...input , content: quillVal})
          modules={modules}
          style={{ height: 600 }}
        />
      </div>
      {/* Button save and create story */}
      <div className="self-end flex flex-row gap-4 mt-[3rem]">
        <button
          type="submit"
          className="btn bg-amber-500 rounded-full text-white hover:bg-amber-600"
        >
          Save Edit
        </button>
      </div>
    </form>
  );
}

export default EditStoryForm;
