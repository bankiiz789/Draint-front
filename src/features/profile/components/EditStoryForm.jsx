import { useState } from "react";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useStory from "../../story/hooks/useStory";
import { toast } from "react-toastify";
import { getTargetUserProfile } from "../../../api/user-api";
import useProfile from "../hooks/useProfile";
import useAuth from "../../auth/hooks/use-auth";

const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3, 4] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["image"],
  ],
};

function EditStoryForm({ story }) {
  const { authUser } = useAuth();
  const { updateStory, setStory } = useStory();
  const coverEl = useRef(null);
  const [value, setValue] = useState(story);
  const [quill, setQuill] = useState(story?.content);
  const [coverImage, setCoverImage] = useState("");
  const { setProfileUserFriend, fetchTargetUserProfile } = useProfile();
  console.log(value);

  const handleChangeValue = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      if (value?.title) {
        formData.append("title", value.title);
      }
      if (value?.id) {
        formData.append("storyId", value.id);
      }
      if (quill) {
        formData.append("content", quill);
      }
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }
      if (value?.category) {
        formData.append("category", value.category);
      }
      if (value?.type) {
        formData.append("type", value.type);
      }

      await updateStory(formData);
      toast.success("edit success");

      fetchTargetUserProfile();
      document.getElementById(`${value?.id}`).close();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
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
          src={coverImage ? URL.createObjectURL(coverImage) : value?.coverImage}
          alt=""
        />
      </div>
      {/* Title */}
      <div className="w-full border-b-2 border-black">
        <input
          type="text"
          placeholder="title"
          className="input input-bordered w-full  border-none outline-none focus:outline-none placeholder:text-2xl placeholder:font-bold text-2xl font-bold"
          name="title"
          value={value?.title}
          onChange={handleChangeValue}
        />
      </div>
      {/* Category */}
      <div className="flex gap-2">
        <select
          className="select select-bordered select-xs w-full max-w-[100px]"
          name="category"
          value={value?.category}
          onChange={handleChangeValue}
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
        {authUser?.type === "PREMIUM" ? (
          <select
            className="select select-bordered select-xs w-full max-w-[100px] "
            name="type"
            value={value?.type}
            onChange={handleChangeValue}
          >
            <option disabled selected>
              for ?
            </option>
            <option>Everyone</option>
            <option>Member</option>
          </select>
        ) : null}
      </div>
      {/* Content */}
      <div className="border-red-500">
        <ReactQuill
          className="rounded-lg"
          theme="snow"
          value={quill}
          onChange={setQuill} // (quillVal => setInput({...input , content: quillVal})
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
