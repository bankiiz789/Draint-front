import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useStory from "../features/story/hooks/useStory";
import { toast } from "react-toastify";

const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3, 4] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["image"],
  ],
};

const initial = {
  title: "",
  content: "",
  category: "",
  coverImg: "",
  member: "",
};

function WritePage() {
  const [value, setValue] = useState();
  const [input, setInput] = useState(initial);

  const { createStory } = useStory();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      if (
        (!input.title || input.title.trim() == "") &&
        (value || value.trim == "")
      ) {
        toast.error("please fill your title and content before post");
      }
      e.preventDefault();
      setInput({ ...input, content: value });
      await createStory(input);
      toast.success("create story successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };
  return (
    <>
      <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
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
            name="title"
            value={input.title}
            onChange={handleChangeInput}
          />
        </div>
        {/* Category */}
        <div className="flex gap-2">
          <select
            className="select select-bordered select-xs w-full max-w-[100px]"
            name="category"
            value={input.category}
            onChange={handleChangeInput}
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
            value={input.member}
            onChange={handleChangeInput}
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
            type="button"
            className="btn bg-green-500 px-8 rounded-full text-white hover:bg-green-600"
          >
            Save
          </button>
          <button
            type="submit"
            className="btn bg-amber-500 rounded-full text-white hover:bg-amber-600"
          >
            Create Story
          </button>
        </div>
      </form>

      <div> preview : {value}</div>
    </>
  );
}

export default WritePage;
