import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import useStory from "../features/story/hooks/useStory";
import { toast } from "react-toastify";
import { useRef } from "react";
import * as DraftApi from "../api/draft-api";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useDraft from "../features/draft/hooks/useDraft";
import useAuth from "../features/auth/hooks/use-auth";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CameraIcon } from "../icons";

const modules = {
  toolbar: [
    [{ header: [false, 1, 2, 3, 4] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    ["image"],
  ],
};

function WritePage() {
  const navigate = useNavigate();
  const { authUser } = useAuth();
  const { draftId } = useParams();
  const { createDraft, fetchDraft, updateDraft, deleteDraft } = useDraft();

  const [value, setValue] = useState("");
  const [input, setInput] = useState({
    title: "",
    content: "",
    category: "",
    coverImg: "",
    type: "",
  });
  const [coverImage, setCoverImage] = useState("");
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  console.log(location.pathname);

  function fetchTargetDraft() {
    DraftApi.getTargetDraft(draftId)
      .then((res) => {
        setDraft(res.data.targetDraft);
        setInput(res.data.targetDraft);
        setValue(res.data.targetDraft.content);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchTargetDraft();
    return () => {
      setDraft("");
    };
  }, [draftId]);

  console.log(draft);

  const { createStory } = useStory();
  const coverEl = useRef(null);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      if (
        (!input.title || input.title.trim() == "") &&
        (input.content || input.content.trim == "")
      ) {
        toast.error("please fill your title and content before post");
      }

      const formData = new FormData();
      if (coverImage) {
        formData.append("coverImage", coverImage);
      }
      if (input.title) {
        formData.append("title", input.title);
      }
      if (value) {
        formData.append("content", value);
      }
      if (input.category) {
        formData.append("category", input?.category);
      }
      if (input.type) {
        formData.append("type", input?.type);
      }

      await createStory(formData);
      if (location.pathname == `/draft/${draft?.id}`) {
        await deleteDraft(draft?.id);
      }
      fetchDraft();
      toast.success("create story successfully");
      setInput({
        title: "",
        content: "",
        category: "",
        coverImg: "",
        type: "",
      });
      setCoverImage("");
      setValue("");
      // navigate(`/profile/${authUser?.id}`);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveDraft = async (e) => {
    try {
      setLoading(true);

      if (
        (!input.title || input.title.trim() == "") &&
        (input.content || input.content.trim == "")
      ) {
        toast.error("please fill your title and content before post");
      }

      const formData = new FormData();

      if (draft?.id) {
        formData.append("draftId", draft.id);
      }

      if (coverImage) {
        formData.append("coverImage", coverImage);
      }
      if (input.title) {
        formData.append("title", input.title);
      }
      if (value) {
        formData.append("content", value);
      }
      if (input.category) {
        formData.append("category", input.category);
      }
      if (input.type) {
        formData.append("type", input.type);
      }

      if (draft == "" || +draftId !== draft?.id) {
        await createDraft(formData);
      } else if (draft?.id === +draftId) {
        await updateDraft(formData);
      }

      // if (draftId == draft.id) {
      //   await updateDraft(+draftId, formData);
      // }

      await fetchDraft();
      toast.success("save successfully");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <form className="flex flex-col gap-4 my-4" onSubmit={handleSubmit}>
        {/* close button */}
        <div className="text-red-500 self-end text-l btn bg-white hover:bg-red-500 hover:text-white border-none rounded-full shadow-none">
          close x
        </div>
        {/* Cover Image */}
        <input
          className="hidden border-none"
          type="file"
          ref={coverEl}
          onChange={(e) => {
            if (e.target.files[0]) {
              setCoverImage(e.target.files[0]);
            }
          }}
        />
        <div
          className="border-4 border-dashed border-amber-500 h-[180px] cursor-pointer flex justify-center items-center bg-gray-100 aspect-auto overflow-auto relative"
          onClick={() => coverEl.current.click()}
        >
          {draft ? (
            <img
              className="w-full h-full inset-0 object-cover absolute"
              src={
                coverImage ? URL.createObjectURL(coverImage) : draft?.coverImage
              }
              alt=""
            />
          ) : (
            <>
              <img
                className="w-full h-full inset-0 object-cover absolute"
                src={coverImage ? URL.createObjectURL(coverImage) : null}
                alt=""
              />
            </>
          )}
          {coverImage ? null : (
            <div className="w-full flex justify-center items-center z-0 ">
              <CameraIcon />
            </div>
          )}
        </div>
        {/* Title */}
        <div className="w-full border-b-2 border-black">
          <input
            type="text"
            placeholder="Title..."
            className="input input-bordered w-full  border-none outline-none focus:outline-none placeholder:text-2xl placeholder:font-bold text-2xl font-bold"
            name="title"
            // value={draft.title || input.title}
            value={input?.title}
            onChange={handleChangeInput}
          />
        </div>
        {/* Category */}
        <div className="flex gap-2">
          <select
            className="select select-bordered select-xs w-full max-w-[100px]"
            name="category"
            value={input?.category}
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
          {authUser?.type === "PREMIUM" ? (
            <select
              className="select select-bordered select-xs w-full max-w-[100px] "
              name="type"
              value={input?.type}
              onChange={handleChangeInput}
            >
              <option disabled selected>
                for ?
              </option>
              <option>FREE</option>
              <option>PREMIUM</option>
            </select>
          ) : null}
        </div>
        {/* Content */}
        <div className="border-red-500">
          <ReactQuill
            className="rounded-lg"
            theme="snow"
            value={value}
            name="content"
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
            onClick={handleSaveDraft}
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
    </>
  );
}

export default WritePage;
