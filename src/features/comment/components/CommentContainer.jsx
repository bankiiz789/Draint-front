import React from "react";
import Avatar from "../../auth/components/Avatar";
import CommentForm from "./CommentForm";

function CommentContainer({
  createComment,
  comment,
  storyId,
  fetchGetTargetStory,
}) {
  return (
    <>
      <div>
        <CommentForm
          createComment={createComment}
          comment={comment}
          storyId={storyId}
          fetchGetTargetStory={fetchGetTargetStory}
        />
      </div>
    </>
  );
}

export default CommentContainer;
