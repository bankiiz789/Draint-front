import React from "react";
import coverPhoto from "../../../assets/cover-photo.png";
function CoverPicture({ file }) {
  return (
    <div className="border border-black h-[180px] overflow-hidden bg-amber-500 ">
      <img
        className="w-full bg-center h-full bg-cover"
        src={file || coverPhoto}
        alt=""
      />
    </div>
  );
}

export default CoverPicture;
