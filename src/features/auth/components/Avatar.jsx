import React from "react";
import defaultPic from "../../../assets/picture-default.png";

function Avatar({ size }) {
  return (
    <div className="avatar">
      <div className={`${size} rounded-full`}>
        <img src={defaultPic} />
      </div>
    </div>
  );
}

export default Avatar;
