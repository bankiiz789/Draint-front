import React from "react";
import Avatar from "../../auth/components/Avatar";
import Input from "../../../components/Input";

function CommentForm() {
  return (
    <form className="flex flex-col gap-4">
      {/* header comment */}
      <div className="w-full text-center bg-green-500 text-white p-4">
        comment
      </div>
      {/* comment box */}
      <div className="flex items-center gap-2 border">
        <div className="flex flex-col gap-1 justify-center p-4">
          <div className="flex flex-row items-center gap-2 ">
            <Avatar size="w-10" />
            <div> name </div>
          </div>
          <div className="ps-2">1hr</div>
        </div>
        <div> good story bro</div>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <Avatar size="w-10" />
          <h1>name</h1>
        </div>
        <Input />
        <div className="btn">send</div>
      </div>
    </form>
  );
}

export default CommentForm;
