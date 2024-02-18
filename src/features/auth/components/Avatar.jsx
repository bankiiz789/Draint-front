import React from "react";
import defaultPic from "../../../assets/picture-default.png";
import useAuth from "../hooks/use-auth";

function Avatar({ size, src }) {
  return (
    <div className="avatar">
      <div className={`${size} rounded-full`}>
        <img src={src || defaultPic} />
      </div>
    </div>
  );
}

export default Avatar;
