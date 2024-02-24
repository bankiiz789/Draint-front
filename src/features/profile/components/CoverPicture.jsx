import React from "react";
function CoverPicture({ src }) {
  return (
    <div className="border h-[180px] overflow-hidden bg-amber-500 ">
      <img className="w-full bg-center h-full bg-cover" src={src} alt="" />
    </div>
  );
}

export default CoverPicture;
