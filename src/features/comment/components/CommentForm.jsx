import React from "react";
import Avatar from "../../auth/components/Avatar";
import Input from "../../../components/Input";
import CommentList from "./CommentList";
import useAuth from "../../auth/hooks/use-auth";
import { useState } from "react";
import Spinner from "../../../components/Spinner";

function CommentForm({ createComment, comment, storyId, fetchGetTargetStory }) {
  const { authUser } = useAuth();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeComment = (e) => {
    setContent(e.target.value);
  };
  const handleSubmitComment = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      await createComment({ storyId: storyId, content: content });
      await fetchGetTargetStory();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading && <Spinner />}
      <form className="flex flex-col gap-4" onSubmit={handleSubmitComment}>
        {/* header comment */}
        <div className="w-full text-center bg-green-500 text-white p-4">
          comment
        </div>
        {/* comment box */}
        {comment?.Comments.length > 0
          ? comment?.Comments.map((el) => <CommentList key={el.id} data={el} />)
          : null}
        {/* end comment box */}
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center gap-2">
            <Avatar size="w-10" src={authUser?.profileImage} />
            <h1>{authUser?.userName}</h1>
          </div>
          <Input
            onChange={handleChangeComment}
            name="content"
            value={content}
          />
          <button type="submit" className="btn">
            send
          </button>
        </div>
      </form>
    </>
  );
}

export default CommentForm;
