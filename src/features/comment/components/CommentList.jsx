import React from "react";
import Avatar from "../../auth/components/Avatar";
import useAuth from "../../auth/hooks/use-auth";
import formatTimeAgo from "../../../utils/time-ago";

function CommentList({ data }) {
  return (
    <div className="flex items-center gap-2 border">
      <div className="flex flex-col gap-1 justify-center p-4">
        <div className="flex flex-row items-center gap-2 ">
          <Avatar size="w-10" src={data.user.profileImage} />
          <div> {data.user.userName} </div>
        </div>
        <div className="ps-2 text-[12px]">{formatTimeAgo(data?.createdAt)}</div>
      </div>
      <div>{data.content}</div>
    </div>
  );
}

export default CommentList;
